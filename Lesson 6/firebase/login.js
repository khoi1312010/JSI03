
(function() {
    console.log('Start file login with firebase');
    var config = {
        apiKey: "xxxxx",
        authDomain: "xxxx.firebaseapp.com",
        databaseURL: "xxxx.firebaseio.com",
        projectId: "190786631722",
        storageBucket: "xxxx.appspot.com",
        messagingSenderId: "xxxxx"
    };
    firebase.initializeApp(config);
    var database = firebase.database();

    //Google singin provider
    var ggProvider = new firebase.auth.GoogleAuthProvider();
    //Facebook singin provider
    var fbProvider = new firebase.auth.FacebookAuthProvider();
    //Login in variables
    const btnGoogle = document.getElementById('btnGoogle');
    const btnFaceBook = document.getElementById('btnFacebook');

        //Sign in with Google
        btnGoogle.addEventListener('click', e => {
            firebase.auth().signInWithPopup(ggProvider).then(function(result) {
                var token = result.credential.accessToken;
                var user = result.user;
                console.log('User>>Google>>>>', user);
                userId = user.uid;

            }).catch(function(error) {
                console.error('Error: handle error here>>>', error.code)
            })
        }, false)

        //Sign in with Facebook
        btnFaceBook.addEventListener('click', e => {
            firebase.auth().signInWithPopup(fbProvider).then(function(result) {
                // This gives you a Facebook Access Token. You can use it to access the Facebook API.
                var token = result.credential.accessToken;
                // The signed-in user info.
                var user = result.user;
                console.log('User>>Facebook>', user);
                // ...
                userId = user.uid;
            
            }).catch(function(error) {
                // Handle Errors here.
                var errorCode = error.code;
                var errorMessage = error.message;
                // The email of the user's account used.
                var email = error.email;
                // The firebase.auth.AuthCredential type that was used.
                var credential = error.credential;
                // ...
                console.error('Error: handle error here>Facebook>>', error.code)
            });
        }, false) 
}())