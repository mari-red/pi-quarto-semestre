const ageRange = document.getElementById("ageRange");
const ageInput = document.getElementById("ageInput");

// Atualize o valor do slider quando o input é alterado
ageInput.addEventListener("input", function() {
    const ageValue = parseInt(ageInput.value);
    ageRange.value = ageValue;
});

// Atualize o valor exibido da idade quando o valor do slider muda
ageRange.addEventListener("input", function() {
    const ageValue = ageRange.value;
    ageInput.value = ageValue;
});

