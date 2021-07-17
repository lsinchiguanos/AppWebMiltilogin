 var Datos;
$(document).ready(function () {
   
   var firebaseConfig = {
        apiKey: "AIzaSyCj-dMPf_eE8h3mSh2L1Oa3aa9OvSmV5uI",
        authDomain: "smarthomepa-8f3e5.firebaseapp.com",
        databaseURL: "https://smarthomepa-8f3e5-default-rtdb.firebaseio.com",
        projectId: "smarthomepa-8f3e5",
        storageBucket: "smarthomepa-8f3e5.appspot.com",
        messagingSenderId: "1079642436426",
        appId: "1:1079642436426:web:4eea47f2fa51ef7f3207b3",
        measurementId: "G-QKP0F5C557"
    };
// Initialize Firebase
    firebase.initializeApp(firebaseConfig);
//firebase.analytics();
    const auth = firebase.auth();
    $('#log-google').click(function (e) {
        const googleProvider = new firebase.auth.GoogleAuthProvider();
        auth.signInWithPopup(googleProvider)
                .then((result) => {
                    $('.card').html='';
                })
                .catch(error => {
                    console.error(error);
                });
    });
    $('#log-facebook').click(function (e) {
        var provider = new firebase.auth.FacebookAuthProvider();
        auth.signInWithPopup(provider)
                .then((result) => {
                    console.log(result);
                    Datos = result.user;
                    //s window.location.assign('./home.html');
                })
                .catch(error => {
                    console.error(error);
                });
    });
    $('#log-github').click(function (e) {
        var provider = new firebase.auth.GithubAuthProvider();
        auth.signInWithPopup(provider)
                .then((result) => {
                    console.log(result);
                    Datos = result.user;
                    window.location.assign('./home.html');
                })
                .catch(error => {
                    console.error(error);
                });
    });
    $('#log-twitter').click(function (e) {
        var provider = new firebase.auth.TwitterAuthProvider();
        auth.signInWithPopup(provider)
                .then((result) => {
                    console.log(result);
                    Datos = result.user;
                    window.location.assign('./home.html');
                })
                .catch(error => {
                    console.error(error);
                });
    });
});