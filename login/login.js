function enviarFormulario() {
    // Coleta os dados do formulário
    const form = document.getElementById("login-form");
    const formData = new FormData(form);
  
    // Define a URL de um serviço de mock (substitua pela URL do seu serviço mock)
    const mockURL = "https://6527e41f931d71583df18e25.mockapi.io/";
  
    // Simula o envio dos dados para o serviço de mock
    fetch(mockURL, {
      method: "POST", // Ou "GET", dependendo do método que deseja testar
      body: formData,
    })
      .then((response) => response.json())
      .then((data) => {
        // Lida com a resposta do serviço de mock
        console.log("Resposta do serviço de mock:", data);
      })
      .catch((error) => {
        console.error("Erro ao enviar dados para o serviço de mock:", error);
      });
  }