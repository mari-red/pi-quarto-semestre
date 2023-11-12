function login() {
    var email = document.getElementById("userEmail").value;
    var password = document.getElementById("userPassword").value;
    
    firebase.auth().signInWithEmailAndPassword(email, password)
    .then(function(userCredential) {
        var user = userCredential.user;
        window.location.href = "../dashboard/dashboard.html";
    })
    .catch(function(error) {
        alert("Erro no login: " + error.message);
    });
}

