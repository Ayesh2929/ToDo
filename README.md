# ToDo App

A simple and clean To-Do list mobile application built with **React Native** and **Expo**. The app features user authentication screens (Sign In / Sign Up) and a home screen where users can manage their daily tasks.

## Features

- **Sign Up** – Create a new account with a username, email, and password
- **Sign In** – Log in to your existing account
- **Home Screen** – View, add, and manage your tasks
- **AsyncStorage** – Persistent local storage for task data
- **Expo Router** – File-based navigation between screens

## Screenshots

| Sign In | Sign Up | Home |
|---------|---------|------|
| Welcome Back screen with email/password fields | Create Account screen with username, email, and password | Task list with add-task input |

## Tech Stack

| Technology | Version |
|---|---|
| React Native | 0.79.6 |
| Expo | ~53.0.22 |
| Expo Router | ^5.1.4 |
| React Navigation (Native Stack) | ^7.3.26 |
| AsyncStorage | 2.1.2 |
| TypeScript | ~5.8.3 |

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (v18 or later recommended)
- [npm](https://www.npmjs.com/) or [yarn](https://yarnpkg.com/)
- [Expo CLI](https://docs.expo.dev/get-started/installation/)
- A physical device with the **Expo Go** app, or an Android/iOS simulator

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/Ayesh2929/ToDo.git
   cd ToDo
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm start
   ```

4. **Run on a specific platform**
   ```bash
   # Android
   npm run android

   # iOS
   npm run ios

   # Web
   npm run web
   ```

## Project Structure

```
ToDo/
├── assets/           # Images and icons
├── Home.tsx          # Home screen – task list and add-task UI
├── SignIn.tsx        # Sign In screen
├── SignUp.tsx        # Sign Up screen
├── index.ts          # App entry point
├── app.json          # Expo configuration
├── package.json      # Project dependencies
└── tsconfig.json     # TypeScript configuration
```

## License

This project is open-source and available under the [MIT License](LICENSE).
