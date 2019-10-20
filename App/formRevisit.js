(function () {

  const firebaseConfig = {
    apiKey: "AIzaSyDvd_eoDzq1G8Gq24zurY5JudX99c4Rhu0",
    authDomain: "maternityhealthcaremodel.firebaseapp.com",
    databaseURL: "https://maternityhealthcaremodel.firebaseio.com",
    projectId: "maternityhealthcaremodel",
    storageBucket: "maternityhealthcaremodel.appspot.com",
    messagingSenderId: "169817253026",
    appId: "1:169817253026:web:753512b7881dbad4f963fb",
    measurementId: "G-NFGGJ0XLXF"
  };
  
  firebase.initializeApp(firebaseConfig);

  var db = firebase.firestore();

  var submit = document.getElementById('submitSecond');
  const firstName = document.getElementById("firstNameRe");
  const lastName = document.getElementById("lastNameRe");



  submit.addEventListener('click', e => {
    // Add a new document in collection "cities"
    console.log(firstName.value + lastName.value);
    var ref = db.collection("Patients").doc(firstName.value + lastName.value);
    ref.set({
      firstname: document.getElementById("firstNameRe"),
    })
  })

}());