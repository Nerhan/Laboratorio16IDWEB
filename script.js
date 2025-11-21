document.addEventListener('DOMContentLoaded', () => {

  // Ejercicio 3 y 4 - Alternar texto
  const btnTexto = document.getElementById('btnTexto');
  const parrafoTexto = document.getElementById('parrafoTexto');
  let esOriginal = true;

  btnTexto.addEventListener('click', () => {
    if (esOriginal) {
      parrafoTexto.textContent = 'Texto cambiado';
    } else {
      parrafoTexto.textContent = 'Texto original';
    }
    esOriginal = !esOriginal;
  });

  // Ejercicio 5 - Modo oscuro
  const btnModoOscuro = document.getElementById('btnModoOscuro');

  btnModoOscuro.addEventListener('click', () => {
    document.body.classList.toggle('oscuro');
  });

  // Ejercicio 6 - Contador interactivo
  const btnIncrementar = document.getElementById('btnIncrementar');
  const btnDecrementar = document.getElementById('btnDecrementar');
  const contadorDisplay = document.getElementById('contador');
  const mensajeContador = document.getElementById('mensajeContador');

  let contador = 0;

  btnIncrementar.addEventListener('click', () => {
    contador++;
    contadorDisplay.textContent = contador;
    mensajeContador.textContent = '';
  });

  btnDecrementar.addEventListener('click', () => {
    if (contador > 0) {
      contador--;
      contadorDisplay.textContent = contador;
      mensajeContador.textContent = '';
    } else {
      mensajeContador.textContent = 'No se puede bajar de cero';
    }
  });

  // Ejercicio 7 - Lista dinámica
  const inputItem = document.getElementById('inputItem');
  const btnAgregar = document.getElementById('btnAgregar');
  const btnBorrarUltimo = document.getElementById('btnBorrarUltimo');
  const listaDinamica = document.getElementById('listaDinamica');

  const agregarItem = () => {
    const texto = inputItem.value.trim();
    if (texto !== '') {
      const li = document.createElement('li');
      li.textContent = texto;
      listaDinamica.appendChild(li);
      inputItem.value = '';
      inputItem.focus();
    }
  };

  btnAgregar.addEventListener('click', agregarItem);
});