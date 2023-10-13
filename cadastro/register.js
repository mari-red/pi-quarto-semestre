function register() {
    var email = document.getElementById("userEmail").value;
    var password = document.getElementById("userPassword").value;

    firebase.auth().createUserWithEmailAndPassword(email, password)
        .then(function(userCredential) {
            var user = userCredential.user;
            alert("Cadastro bem-sucedido!");
            console.log(user);
            window.location.href = "../home/home.html";
        })
        .catch(function(error) {
            alert("Erro no cadastro: " + error.message);
        });
}