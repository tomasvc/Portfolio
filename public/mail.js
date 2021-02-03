var admin = require('firebase-admin');
var serviceAccount = require("path/to/serviceAccountKey.json");

admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
    databaseURL: "https://portfolio147-default-rtdb.europe-west1.firebasedatabase.app"
  });

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

function saveMessage(name, email, title, message) {
    admin
    .firestore()
    .collection("mail")
    .add({
        to: "tomas.v0147@gmail.com",
        from: email,
        message: {
        name: name,
        subject: title,
        text: message,
        html: "This is the <code>HTML</code> section of the email body.",
        },
    })
    .then(() => console.log("Queued email for delivery!"));
}

