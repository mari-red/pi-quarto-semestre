const ageRange = document.getElementById("ageRange");
const ageInput = document.getElementById("ageInput");
const heightRange = document.getElementById("heightRange");
const heightInput = document.getElementById("heightInput");
const weightRange = document.getElementById("weightRange");
const weightInput = document.getElementById("weightInput");

// Função genérica para atualizar o valor do slider quando o input é alterado
function updateSlider(input, range) {
    input.addEventListener("input", function() {
        const value = parseInt(input.value);
        range.value = value;
    });
}

// Função genérica para atualizar o valor exibido quando o valor do slider muda
function updateInput(range, input) {
    range.addEventListener("input", function() {
        const value = range.value;
        input.value = value;
    });
}

// Aplicar a função genérica para idade, altura e peso
updateSlider(ageInput, ageRange);
updateInput(ageRange, ageInput);

updateSlider(heightInput, heightRange);
updateInput(heightRange, heightInput);

updateSlider(weightInput, weightRange);
updateInput(weightRange, weightInput);
