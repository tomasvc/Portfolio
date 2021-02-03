var firebaseConfig = {
    apiKey: "AIzaSyA-9TRGP49WfFSb9iU3yKF7JMz3b921LTA",
    authDomain: "portfolio-981a6.firebaseapp.com",
    databaseId: "https://portfolio-981a6-default-rtdb.europe-west1.firebasedatabase.app",
    projectId: "portfolio-981a6",
    storageBucket: "portfolio-981a6.appspot.com",
    messagingSenderId: "306345998081",
    appId: "1:306345998081:web:8984ef5950133dd7070d00",
    measurementId: "G-RN12DY3VRZ"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

// Messages references collection
var messsagesRef = firebase.database().ref('messages');

document.getElementById('contactForm').addEventListener('submit', submitForm);

// Submit form
function submitForm(e) {
    e.preventDefault();

    var name = getInput('name');
    var email = getInput('email');
    var title = getInput('title');
    var message = getInput('message');

    saveMessage(name, email, title, message)

    
}

function getInput(id) {
    return document.getElementById(id).value
}

// Save message to firebase
function saveMessage(name, email, title, message) {
    var newMessageRef = messagesRef.push();
    newMessageRef.set({
        name: name,
        email: email,
        title: title,
        message: message
    })
}