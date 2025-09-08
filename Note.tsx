import { StatusBar } from "expo-status-bar";
import { useEffect, useState } from "react";
import { View, Text, StyleSheet, TextInput, TouchableOpacity, FlatList, Image, ScrollView } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import AsyncStorage from '@react-native-async-storage/async-storage';

type Note = {
  id: string;
  title: string;
  content: string;
  createdAt: string;
  updatedAt: string;
};

export default function MyNote() {
  const [notes, setNotes] = useState<Note[]>([]);
  const [newNoteTitle, setNewNoteTitle] = useState('');
  const [newNoteContent, setNewNoteContent] = useState('');
  const [isCreating, setIsCreating] = useState(false);
  const [selectedNote, setSelectedNote] = useState<Note | null>(null);

  useEffect(() => {
    loadNotes();
  }, []);

  useEffect(() => {
    saveNotes();
  }, [notes]);

  const loadNotes = async () => {
    try {
      const storedNotes = await AsyncStorage.getItem('notes');
      if (storedNotes !== null) {
        setNotes(JSON.parse(storedNotes));
      } else {
  
        const sampleNotes = [
          { 
            id: '1', 
            title: 'Welcome to MyNote', 
            content: 'This is your first note. Tap to edit or create new ones!', 
            createdAt: new Date().toISOString(),
            updatedAt: new Date().toISOString()
          },
          { 
            id: '2', 
            title: 'Shopping List', 
            content: '- Milk\n- Eggs\n- Bread\n- Fruits', 
            createdAt: new Date().toISOString(),
            updatedAt: new Date().toISOString()
          },
        ];
        setNotes(sampleNotes);
      }
    } catch (e) {
      console.error('Notes loading failed', e);
    }
  };

  const saveNotes = async () => {
    try {
      await AsyncStorage.setItem('notes', JSON.stringify(notes));
    } catch (e) {
      console.error('Notes saving failed', e);
    }
  };

  const createNote = () => {
    if (newNoteTitle.trim() !== '') {
      const now = new Date().toISOString();
      const newNote = {
        id: Date.now().toString(),
        title: newNoteTitle,
        content: newNoteContent,
        createdAt: now,
        updatedAt: now
      };
      
      setNotes([newNote, ...notes]);
      setNewNoteTitle('');
      setNewNoteContent('');
      setIsCreating(false);
    }
  };

  const updateNote = () => {
    if (selectedNote && newNoteTitle.trim() !== '') {
      const updatedNotes = notes.map(note => 
        note.id === selectedNote.id 
          ? { 
              ...note, 
              title: newNoteTitle, 
              content: newNoteContent,
              updatedAt: new Date().toISOString()
            } 
          : note
      );
      
      setNotes(updatedNotes);
      setSelectedNote(null);
      setNewNoteTitle('');
      setNewNoteContent('');
    }
  };

  const deleteNote = (id: string) => {
    const updatedNotes = notes.filter(note => note.id !== id);
    setNotes(updatedNotes);
    
    if (selectedNote && selectedNote.id === id) {
      setSelectedNote(null);
      setNewNoteTitle('');
      setNewNoteContent('');
    }
  };

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString() + ' ' + date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
  };

  const startEditing = (note: Note) => {
    setSelectedNote(note);
    setNewNoteTitle(note.title);
    setNewNoteContent(note.content);
    setIsCreating(true);
  };

  const cancelEditing = () => {
    setIsCreating(false);
    setSelectedNote(null);
    setNewNoteTitle('');
    setNewNoteContent('');
  };

  return (
    <View style={styles.container}>
      <SafeAreaView style={styles.formContainer}>
        <View style={styles.header}>
          <Text style={styles.mainTitle}>My Notes</Text>
          <Text style={styles.subTitle}>Capture your thoughts and ideas</Text>
        </View>

        {isCreating ? (
          <View style={styles.noteEditor}>
            <TextInput
              style={styles.titleInput}
              onChangeText={setNewNoteTitle}
              placeholder="Note title"
              placeholderTextColor="#999"
              value={newNoteTitle}
            />
            <TextInput
              style={styles.contentInput}
              onChangeText={setNewNoteContent}
              placeholder="Type your note here..."
              placeholderTextColor="#999"
              value={newNoteContent}
              multiline
              textAlignVertical="top"
            />
            <View style={styles.editorButtons}>
              <TouchableOpacity 
                style={[styles.editorButton, styles.cancelButton]} 
                onPress={cancelEditing}
              >
                <Text style={styles.cancelButtonText}>Cancel</Text>
              </TouchableOpacity>
              <TouchableOpacity 
                style={[styles.editorButton, styles.saveButton]} 
                onPress={selectedNote ? updateNote : createNote}
              >
                <Text style={styles.saveButtonText}>
                  {selectedNote ? 'Update' : 'Save'}
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        ) : (
          <TouchableOpacity 
            style={styles.createNoteButton}
            onPress={() => setIsCreating(true)}
          >
            <Text style={styles.createNoteButtonText}>+ Create New Note</Text>
          </TouchableOpacity>
        )}
      </SafeAreaView>

      <View style={styles.notesContainer}>
        <Text style={styles.sectionTitle}>Your Notes</Text>

        {notes.length === 0 ? (
          <View style={styles.emptyState}>
            <Text style={styles.emptyText}>No notes yet!</Text>
          </View>
        ) : (
          <FlatList
            data={notes}
            keyExtractor={item => item.id}
            renderItem={({ item }) => (
              <TouchableOpacity 
                style={styles.noteItem}
                onPress={() => startEditing(item)}
              >
                <View style={styles.noteHeader}>
                  <Text style={styles.noteTitle} numberOfLines={1}>
                    {item.title}
                  </Text>
                  <TouchableOpacity
                    onPress={() => deleteNote(item.id)}
                    style={styles.deleteButton}
                  >
                    <Image
                      source={require('./assets/img/register.png')}
                      style={styles.deleteIcon}
                    />
                  </TouchableOpacity>
                </View>
                <Text style={styles.noteContent} numberOfLines={3}>
                  {item.content}
                </Text>
                <Text style={styles.noteDate}>
                  Updated: {formatDate(item.updatedAt)}
                </Text>
              </TouchableOpacity>
            )}
          />
        )}
      </View>

      <StatusBar />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 20,
  },
  header: {
    marginBottom: 20,
    marginTop: 30
  },
  mainTitle: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#333',
  },
  subTitle: {
    fontSize: 16,
    color: '#666',
    marginTop: 8,
  },
  formContainer: {
    width: '100%',
    marginBottom: 20,
  },
  createNoteButton: {
    backgroundColor: '#9dd327',
    padding: 15,
    borderRadius: 8,
    alignItems: 'center',
  },
  createNoteButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  noteEditor: {
    backgroundColor: '#f9f9f9',
    padding: 15,
    borderRadius: 8,
    marginBottom: 15,
  },
  titleInput: {
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
    paddingBottom: 10,
    marginBottom: 15,
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
  },
  contentInput: {
    minHeight: 100,
    fontSize: 16,
    color: '#333',
    marginBottom: 15,
  },
  editorButtons: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    gap: 10,
  },
  editorButton: {
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 6,
  },
  cancelButton: {
    backgroundColor: '#e0e0e0',
  },
  saveButton: {
    backgroundColor: '#9dd327',
  },
  cancelButtonText: {
    color: '#666',
  },
  saveButtonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
  notesContainer: {
    flex: 1,
    width: '100%',
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: '#333',
    marginBottom: 15,
  },
  noteItem: {
    backgroundColor: '#f9f9f9',
    padding: 15,
    borderRadius: 8,
    marginBottom: 10,
  },
  noteHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 10,
  },
  noteTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
    flex: 1,
    marginRight: 10,
  },
  noteContent: {
    fontSize: 14,
    color: '#666',
    marginBottom: 10,
  },
  noteDate: {
    fontSize: 12,
    color: '#999',
    fontStyle: 'italic',
  },
  deleteButton: {
    padding: 4,
  },
  deleteIcon: {
    width: 20,
    height: 20,
    tintColor: '#e74c3c',
  },
  emptyState: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 40,
  },
  emptyText: {
    fontSize: 16,
    color: '#999',
    textAlign: 'center',
  },
});