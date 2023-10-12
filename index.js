function login() {
    var email = document.getElementById("userEmail").value;
    var password = document.getElementById("userPassword").value;
    
    firebase.auth().signInWithEmailAndPassword(email, password)
    .then(function(userCredential) {
        var user = userCredential.user;
        alert("Login bem-sucedido!");
        console.log(user);
    })
    .catch(function(error) {
        alert("Erro no login: " + error.message);
    });
}


