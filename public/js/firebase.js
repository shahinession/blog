const firebaseConfig = {
    apiKey: "AIzaSyBWsh5qRbJ8rj4AhGrz90ly-QxZ1R0gnzM",
    authDomain: "blog-site-f4526.firebaseapp.com",
    projectId: "blog-site-f4526",
    storageBucket: "blog-site-f4526.appspot.com",
    messagingSenderId: "197200605327",
    appId: "1:197200605327:web:918283d75f721ef26680fa"
};

firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();

const auth = firebase.auth();

const logoutUser = () => {
    auth.signOut();
    location.reload();
}

const rootRef = firebase.database().ref();

const commentsRef = rootRef.child('comments');