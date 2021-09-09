const firebaseConfig = {
  apiKey: "AIzaSyA82YWSGt7zsVUxPrz7BKMMHLrqlyMU2dQ",
  authDomain: "self-authentication.firebaseapp.com",
  projectId: "self-authentication",
  storageBucket: "self-authentication.appspot.com",
  messagingSenderId: "391571299489",
  appId: "1:391571299489:web:a4e96fdb189330aa10a4e0",
  measurementId: "G-777G1PGG7F"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);