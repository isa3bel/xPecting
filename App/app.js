

(function() {
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

  // Get elements
  const txtEmail = document.getElementById('txtEmail');
  const txtPassword = document.getElementById('txtPassword');
  const btnLogin = document.getElementById('btnLogin');
  const btnSignup = document.getElementById('btnSignup');
  

  // Add login event
  btnLogin.addEventListener('click', e => {
    // get email and password
    const email = txtEmail.value;
    const pass = txtPassword.value;
    
    const promise = firebase.auth().signInWithEmailAndPassword(email, pass);
    
    promise.catch(e=> console.log(e.message));
  });

  btnSignup.addEventListener('click', e => {
    // get email and password
    // Todo: check for real email
    const email = txtEmail.value;
    const pass = txtPassword.value;
    
    const promise = firebase.auth().createUserWithEmailAndPassword(email, pass);
    promise.catch(e=> console.log(e.message));

  });

  // Add realtime listener
  firebase.auth().onAuthStateChanged(firebaseUser => {
    if(firebaseUser) {
      console.log(firebaseUser);
      window.location = 'homepage.html';
    } else {
      console.log('not logged in');
    }

  });

}());



  