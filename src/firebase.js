const firebaseConfig = {
  apiKey: "AIzaSyCrlss8EAJGbItc2oGu5zFOck9x-tCgmVQ",
  authDomain: "harshit-portfolio-143e1.firebaseapp.com",
  projectId: "harshit-portfolio-143e1",
  storageBucket: "harshit-portfolio-143e1.appspot.com",
  messagingSenderId: "1055576074540",
  appId: "1:1055576074540:web:a753ce52490aae2234e489"
};

firebase.initializeApp(firebaseConfig);

var contactFormDB = firebase.database().ref('contact-form');

document.querySelector(".contact-form").addEventListener("submit", submitForm);

function submitForm(e) {
    e.preventDefault(); 

    var name = getElementVal("name");
    var emailid = getElementVal("emailid");
    var msg = getElementVal("msg");

    saveMessages(name, emailid, msg);
}

const saveMessages = (name, emailid, msg) => {
  var newContactForm = contactFormDB.push();
  newContactForm.set({
    name: name,
    emailid: emailid,
    msg: msg,
  });
};

// Updated getElementVal function
const getElementVal = (id) => {
    return document.getElementById(id).value;
};