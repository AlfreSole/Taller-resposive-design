document.addEventListener("DOMContentLoaded", function() {
  const textContent = [
    "Protege tu información personal y financiera en un mundo digital lleno de desafíos cibernéticos.",
    "La seguridad en línea es esencial para salvaguardar tus activos y datos críticos contra amenazas cibernéticas.",
    "La ciberseguridad es un deber compartido: educa, previene y protege en el mundo conectado de hoy."
  ];

  function setTextContent() {
    document.getElementById('text-line-1').innerText = textContent[0];
    document.getElementById('text-line-2').innerText = textContent[1];
    document.getElementById('text-line-3').innerText = textContent[2];
  }

  setTextContent();

  setInterval(setTextContent, 2000);
});