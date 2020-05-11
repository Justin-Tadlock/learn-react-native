# ChatApp

A simple application to understand and utilize the gifted chat package using Firebase as the backend within React Native.

## Requirements

1. [Node.js LTS](https://nodejs.org/en/)
2. [React Native](https://reactnative.dev/)
3. [Expo-CLI](https://expo.io/tools#cli)
4. A phone or emulator to run Expo apps from

## Getting Started

1. Clone the project
2. Open your terminal and navigate to the project folder, run `npm install`
3. Create a firebase project at the [Firebase Console](https://firebase.google.com)
4. Under your `project settings`, scroll down and copy your firebase configuration.
   Your configuration will look something like this:

```javascript
var firebaseConfig = {
  apiKey: "reallyLongstringOftext",
  authDomain: "yourprojectname-random.firebaseapp.com",
  databaseURL: "https://yourprojectname-random.firebaseio.com",
  projectId: "yourprojectname-random",
  storageBucket: "yourprojectname-random.appspot.com",
  messagingSenderId: "123456789123",
  appId: "1:123456789123:web:rand0mStr1ngAg41n",
};
```

5. Create a `firebaseConfig.js` file within your cloned project directory
6. Paste the firebase configuration within the file, your content should look something like this:

```javascript
export const firebaseConfig = {
  apiKey: "reallyLongstringOftext",
  authDomain: "yourprojectname-random.firebaseapp.com",
  databaseURL: "https://yourprojectname-random.firebaseio.com",
  projectId: "yourprojectname-random",
  storageBucket: "yourprojectname-random.appspot.com",
  messagingSenderId: "123456789123",
  appId: "1:123456789123:web:rand0mStr1ngAg41n",
};
```

## Launching the App

After the getting started steps are finished, run `npm start` and try signing up/in!
