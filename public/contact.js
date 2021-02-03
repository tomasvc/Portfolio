var firebaseConfig = {
    apiKey: "AIzaSyCqgeVFIjlEk9GWR4tPDHNIehKhRmMj-jQ",
    authDomain: "portfolio147.firebaseapp.com",
    databaseURL: "https://portfolio147-default-rtdb.europe-west1.firebasedatabase.app",
    projectId: "portfolio147",
    storageBucket: "portfolio147.appspot.com",
    messagingSenderId: "53325766925",
    appId: "1:53325766925:web:1a377efe7f81dce5e1d044",
    measurementId: "G-L5S1V2Y7XG"
};

firebase.initializeApp(firebaseConfig);

// Messages references collection
var messagesRef = firebase.database().ref('messages');
//const messagesRef = firebase.firestore().collection('messages');

document.getElementById('contactForm').addEventListener('submit', submitForm);


// Submit form
function submitForm(e) {
    e.preventDefault();

    var name = getInput('name');
    var email = getInput('email');
    var title = getInput('title');
    var message = getInput('message');

    saveMessage(name, email, title, message);

    document.querySelector('.alert').style.display = 'block';

    /*setTimeout(() => {
        document.querySelector('.alert').style.display = 'none';
    }, 3000)*/
    
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