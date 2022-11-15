const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyBoGpGS8fKBFvaViOUbL294NMD11-4DU3s",
    authDomain: "bloodbank-bfaf3.firebaseapp.com",
    projectId: "bloodbank-bfaf3",
    databaseURL: 'https://bloodbank-bfaf3-default-rtdb.asia-southeast1.firebasedatabase.app/',
    storageBucket: "bloodbank-bfaf3.appspot.com",
    messagingSenderId: "1049551050899",
    appId: "1:1049551050899:web:a97d83194841f050abd566",
    measurementId: "G-9G71WM4FFS"
  });

  const auth = firebaseApp.auth();
  

function register(){
    email = document.getElementById('email').value
    password = document.getElementById('password').value
    if(validate_email==false||validate_password==false)
    {
        alert("Email or Password invalid")
    return
    }
    auth.createUserWithEmailAndPassword(email, password)
    .then((userCredential) => {
      console.log(userCredential.user)
      var user = userCredential.user;
    })
    .catch((err) => {
        alert(err.message)
        console.log(err.code)
        console.log(err.message)
    })
    auth.onAuthStateChanged(user => {

      if(user){
          console.log('user is signed in', user);
          window.alert("You have been signed up successfully!")
        }})

}

// Set up our login function
function login() {
  // Get all our input fields
  email = document.getElementById('email').value
  password = document.getElementById('password').value

  // Validate input fields
  if (validate_email(email) == false || validate_password(password) == false) {
    alert('Email or Password is Outta Line!!')
    return
    // Don't continue running the code
  }
  auth.signInWithEmailAndPassword(email, password)
  .then((userCredential) => {
      console.log(userCredential.user)
      var user = userCredential.user;
  })
  .catch((err) => {
      alert(err.message)
      console.log(err.code)
      console.log(err.message)
  })
  auth.onAuthStateChanged(user => {

    if(user){
        console.log('user is signed in', user);
        window.alert("You have been signed in successfully!")
      }})
  
}


function validate_email(email){
    expression=/[^\s@]+@[^\s@]+\.[^\s@]+/
    if(expression.test(email) == true)
    return true
    else
    return false
}
function validate_password(password){
    if(password<6){
        return false
    }
    else
    return true
}
function validate_field(field){
if(field==null)
return false
if(field.length<=0)
return false
else
return true
}