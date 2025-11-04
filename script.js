import { loginWithGoogle, logout, onReady } from "./firebase.js";

function calcular() {
  const ganancia = parseFloat(document.getElementById("ganancia").value);
  if (isNaN(ganancia)) {
    document.getElementById("resultado").innerText = "Por favor ingresa un número válido.";
    return;
  }

  // Uber solo considera el 60% de las ganancias
  const efectivo = ganancia * 0.6;

  document.getElementById("resultado").innerText =
    `Uber considera $${efectivo.toFixed(2)} para calcular tu salario base.`;
}

