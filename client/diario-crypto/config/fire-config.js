import firebase from 'firebase';

const firebaseConfig = {
 
};

try {
  firebase.initializeApp(firebaseConfig);
} catch (err) {
  if(err) {
    console.error('Firebase initialization error', err.stack);
  }
}

const fire = firebase;
export default fire;