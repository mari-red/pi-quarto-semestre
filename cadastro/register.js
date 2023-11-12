function register() {
    var email = document.getElementById("userEmail").value;
    var password = document.getElementById("userPassword").value;

    firebase.auth().createUserWithEmailAndPassword(email, password)
        .then(function(userCredential) {
            var user = userCredential.user;
            window.location.href = "../jornada/step1-jornada/step1-jornada.html";
        })
        .catch(function(error) {
            alert("Erro no cadastro: " + error.message);
        });
}