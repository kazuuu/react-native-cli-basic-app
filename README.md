# React Native CLI – Basic App

Starter React Native project I created as teaching material for the Mobile Development course I taught at **FIAP** (São Paulo, Brazil), between 2022 and 2024.

The project is intentionally minimal. It was used in the first classes of the course to help students set up their environment and understand how a bare React Native CLI project is organized before moving on to navigation, API integration and state management.

## What students learned with this project

- Setting up a React Native development environment (Node.js, JDK, Android Studio, Xcode)
- The difference between the React Native CLI and Expo, and when to use each
- How a React Native CLI project is structured: JavaScript code, and the native `android/` and `ios/` folders
- Running the app on an Android emulator, an iOS simulator and a physical device
- Using Metro, the React Native bundler, and fast refresh during development
- Running tests with Jest and linting with ESLint

## Tech stack

- React Native 0.67
- React 17
- Jest
- ESLint

## Getting started

Make sure your environment is set up following the official [React Native environment setup guide](https://reactnative.dev/docs/set-up-your-environment).

```bash
cd BasicApp
npm install

# Start Metro
npm start

# In another terminal
npm run android   # Android emulator or device
npm run ios       # iOS simulator (macOS only)
```

Run tests and lint:

```bash
npm test
npm run lint
```

## Note

This project uses React Native 0.67 (2022), the version used in the course at the time. Newer React Native versions changed the project template and tooling, so some setup steps may differ today.

## Author

**Marcello Kazuo Miyajima** – Senior Software Engineer
[LinkedIn](https://www.linkedin.com/in/kazuuu)
