# FireBaseAuth

A simple application to understand and utilize the firebase authentication flow within React Native.

## Getting Started

1. Clone the project
2. Create a firebase project at the [Firebase Console](https://firebase.google.com)
3. Under your `project settings`, scroll down and copy your firebase configuration.
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

4. Create a `firebaseConfig.js` file within your cloned project directory
5. Paste the firebase configuration within the file, your content should look something like this:

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
