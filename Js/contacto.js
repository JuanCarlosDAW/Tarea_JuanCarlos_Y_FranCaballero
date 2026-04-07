document.addEventListener("DOMContentLoaded", function () {

  const form = document.querySelector("form");

  form.addEventListener("submit", function (e) {
    e.preventDefault(); // evita recargar la página

    // Obtener valores
    const nombre = form.querySelector('input[type="text"]').value;
    const email = form.querySelector('input[type="email"]').value;
    const mensaje = form.querySelector("textarea").value;

    // Validación básica
    if (!nombre || !email || !mensaje) {
      alert("Por favor completa todos los campos");
      return;
    }

    // Mostrar mensaje de éxito
    alert("Mensaje enviado correctamente ✅");

    // Limpiar formulario
    form.reset();
  });

});