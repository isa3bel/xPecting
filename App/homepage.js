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
  const btnLogout = document.getElementById('btnLogout');
  const addUser = document.getElementById('addUser');
  const updateUser = document.getElementById('updateUser');
  const searchUser = document.getElementById('searchUser');
  const firstSearch = document.getElementById('firstSearch');
  const lastSearch = document.getElementById('lastSearch');
  

  btnLogout.addEventListener('click', e => {
    firebase.auth().signOut();
    console.log('user signed out');
    window.location = 'index.html';
    
  });

  addUser.addEventListener('click', e => {
    window.location = 'formFirst.html';
  });

  searchUser.addEventListener('click', e => {
    var userId = firstSearch.value + lastSearch.value;
    firebase.firestore().collection('Patients').get().then(snapshot => {
      snapshot.forEach(doc => {
        if (userId === doc.id) {
          firebase.firestore().collection('Patients').get().then(snapshot => {
                document.getElementById('resTitle').innerHTML = "Patient Result";
            var html = '';
                html += "<br>";
                html += "First name: " + doc.data().firstName + "<br>";
                html += "Last name: " + doc.data().lastName + "<br>";
                html += "Date of birth: " + doc.data().dateOfBirth + "<br>";
                html += "Height: " + doc.data().height + "<br>";
                html += "Weight: " + doc.data().weight + "<br>";
                html += "Parity: " + doc.data().numberOfPregnancies + "<br>";
                html += "Last Menstruation Date: " + doc.data().gestationalAge + "<br>";
                html += "Condition: " + doc.data().condition + "<br>";
                html += "Prescriptions: " + doc.data().prescription + "<br>";
                html += "Next Appointment: " + doc.data().nextApt + "<br>";
                html += "Comments: " + doc.data().comments + "<br>";
                html += "<br>";
                document.getElementById('users').innerHTML = html;
          });
        } else {
          document.getElementById('resTitle').innerHTML = "Patient not found";
          document.getElementById('users').innerHTML = "";
        }
         
      });
      
  });

  });

  updateUser.addEventListener('click', e => {
    console.log('user id after found' + userId);
    var userId = firstSearch.value + lastSearch.value;
    firebase.firestore().collection('Patients').get().then(snapshot => {
      snapshot.forEach(doc => {
        if (userId === doc.id) {
          window.location = 'formRevisit.html';
        } else {
          document.getElementById('users').innerHTML = "Patient not found";
    }})})});
    
}());