// Obtén una referencia a la barra de navegación
const navbar = document.querySelector('.navbar');

// Función para ajustar el margen superior de la barra de navegación
function adjustNavbarMargin() {
  if (window.innerWidth > 768) { // Cambia este valor según tu criterio para definir qué es "no móvil"
    if (window.scrollY > 0) {
      navbar.style.marginTop = '0'; // Elimina el margen superior
    } else {
      navbar.style.marginTop = '40px'; // Vuelve a aplicar el margen superior inicial
    }
  }
}

// Agrega un evento de desplazamiento (scroll) que llame a la función
window.addEventListener('scroll', adjustNavbarMargin);
