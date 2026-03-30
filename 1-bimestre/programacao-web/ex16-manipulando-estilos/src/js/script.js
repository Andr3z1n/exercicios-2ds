// Seleção dos elementos
const texto = document.getElementById("texto")
const botao = document.getElementById("mudarEstilo")

// Adicionando o evento de click
botao.addEventListener("click", () => {
  texto.style.color = "blue"
  texto.style.fontSize = "24px"
  texto.classList.add("destaque")
});