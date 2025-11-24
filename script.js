document.addEventListener('DOMContentLoaded', () => {

  // Ejercicio 3 y 4
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

  // Ejercicio 5
  const btnModoOscuro = document.getElementById('btnModoOscuro');

  btnModoOscuro.addEventListener('click', () => {
    document.body.classList.toggle('oscuro');
  });

  // Ejercicio 6
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

  // Ejercicio 7
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

  //Ejercicio08
  const formValidar = document.getElementById('formValidar');
  formValidar.addEventListener('submit', (e) => {
    e.preventDefault();
    let valido = true;

    ['nombre', 'correo'].forEach(id => {
      const input = document.getElementById(id);
      const span = input.parentNode.querySelector('.error');
      if (span) span.remove();

      if (!input.value.trim()) {
        const error = document.createElement('span');
        error.textContent = 'Este campo es obligatorio';
        error.className = 'error';
        error.style.color = 'red';
        input.insertAdjacentElement('afterend', error);
        valido = false;
      }
    });

    if (valido) alert('¡Formulario válido!');
  });

  //Ejercicio09
  const grande = document.getElementById('grande');
  document.querySelectorAll('.mini').forEach(img => {
    img.addEventListener('click', () => {
      grande.innerHTML = `<img src="${img.src}" alt="${img.alt}" width="500">`;
    });
  });

  //Ejercicio10
  const productos = [
    { nombre: "PlayStation", precio: 3500 },
    { nombre: "SteamBox", precio: 2540 },
    { nombre: "XBOX", precio: 1500 },
    { nombre: "Switch", precio: 4800 }
  ];

  document.getElementById('crearTabla').addEventListener('click', () => {
    let tabla = `<table><tr><th>Nombre</th><th>Precio</th></tr>`;
    productos.forEach(p => {
      tabla += `<tr><td>${p.nombre}</td><td>S/ ${p.precio}</td></tr>`;
    });
    tabla += `</table>`;
    document.getElementById('contenedorTabla').innerHTML = tabla;
  });

  //Ejercicio11
  document.getElementById('listaEliminar').addEventListener('click', (e) => {
    if (e.target.tagName === 'LI') {
      e.target.remove();
    }
  });

  //Ejercicio12
  const cuadrado = document.getElementById('cuadrado');
  document.getElementById('btnAnimar').addEventListener('click', () => {
    cuadrado.classList.add('mover');
  });
  document.getElementById('btnReiniciar').addEventListener('click', () => {
    cuadrado.classList.remove('mover');
  });

  //Ejercicio13
  const usuarios = JSON.parse(localStorage.getItem('usuarios')) || [];
  const tbody = document.querySelector('#tablaUsuarios tbody');

  const renderizar = () => {
    tbody.innerHTML = '';
    usuarios.forEach((u, i) => {
      const tr = document.createElement('tr');
      tr.innerHTML = `
        <td>${u.nombre}</td>
        <td>${u.edad}</td>
        <td>
          <button class="editar" data-index="${i}">Editar</button>
          <button class="eliminar" data-index="${i}">Eliminar</button>
        </td>`;
      tbody.appendChild(tr);
    });
  };

  document.getElementById('formUsuario').addEventListener('submit', (e) => {
    e.preventDefault();
    const nombre = document.getElementById('nombreUsuario').value.trim();
    const edad = document.getElementById('edadUsuario').value;
    usuarios.push({ nombre, edad });
    localStorage.setItem('usuarios', JSON.stringify(usuarios));
    renderizar();
    e.target.reset();
  });

  tbody.addEventListener('click', (e) => {
    if (e.target.classList.contains('eliminar')) {
      const i = e.target.dataset.index;
      usuarios.splice(i, 1);
      localStorage.setItem('usuarios', JSON.stringify(usuarios));
      renderizar();
    }
    if (e.target.classList.contains('editar')) {
      const i = e.target.dataset.index;
      const nuevo = prompt('Nuevo nombre:', usuarios[i].nombre);
      if (nuevo) {
        usuarios[i].nombre = nuevo;
        localStorage.setItem('usuarios', JSON.stringify(usuarios));
        renderizar();
      }
    }
  });

  renderizar();

  //Ejercicio 14-22

  // 14
  const persona = { nombre: "Juan", edad: 20, ciudad: "Arequipa" };
  console.log("14 → JSON:", JSON.stringify(persona));

  // 15
  const jsonCadena = '{"nombre":"Ana","edad":25}';
  const objParseado = JSON.parse(jsonCadena);
  document.getElementById('resultadoParse').textContent = `Hola, ${objParseado.nombre}`;

  // 16
  const productosJSON = [
    { nombre: "Laptop", precio: 3500 },
    { nombre: "Celular", precio: 1800 },
    { nombre: "Audifonos", precio: 1200}
  ];
  const listaProd = document.getElementById('listaProductos');
  productosJSON.forEach(p => {
    const li = document.createElement('li');
    li.textContent = `${p.nombre} - S/ ${p.precio}`;
    listaProd.appendChild(li);
  });

  // 17
  const usuarioEj = { nombre: "Carlos", correo: "carlos@univ.edu", rol: "estudiante" };
  localStorage.setItem('usuarioLab', JSON.stringify(usuarioEj));
  const recuperado = JSON.parse(localStorage.getItem('usuarioLab'));
  document.getElementById('perfilGuardado').innerHTML = `
    <strong>Usuario:</strong> ${recuperado.nombre}<br>
    <strong>Correo:</strong> ${recuperado.correo}<br>
    <strong>Rol:</strong> ${recuperado.rol}`;

// 18
  document.getElementById('btnLibros')?.addEventListener('click', () => {
    const jsonLibros = `[
      {"titulo": "Cien años de soledad", "autor": "Gabriel García Márquez"},
      {"titulo": "1984", "autor": "George Orwell"},
      {"titulo": "El principito", "autor": "Antoine de Saint-Exupéry"},
      {"titulo": "Rayuela", "autor": "Julio Cortázar"}
    ]`;
    const libros = JSON.parse(jsonLibros);

    let tabla = `<table style="width:100%; border-collapse:collapse; margin-top:15px;">
      <tr style="background:#3498db; color:white;"><th style="padding:10px;">Título</th><th style="padding:10px;">Autor</th></tr>`;
    libros.forEach(l => {
      tabla += `<tr><td style="padding:10px; border:1px solid #ddd;">${l.titulo}</td>
                <td style="padding:10px; border:1px solid #ddd;">${l.autor}</td></tr>`;
    });
    tabla += `</table>`;
    document.getElementById('contenedorLibros').innerHTML = tabla;
  });

  // 19
  document.getElementById('btnModificarJSON')?.addEventListener('click', () => {
    let json = '{"nombre":"Pedro","edad":28,"ciudad":"Arequipa"}';
    console.log("JSON original:", json);

    let obj = JSON.parse(json);
    obj.edad = 30;
    obj.ciudad = "Lima";

    json = JSON.stringify(obj);
    console.log("JSON modificado:", json);
  });

  // 20
  document.getElementById('btnGuardar20')?.addEventListener('click', () => {
    const nombre = document.getElementById('nombreUsuario20').value.trim();
    if (!nombre) {
      document.getElementById('feedback20').textContent = "Por favor escribe un nombre";
      return;
    }
    const usuario = { nombre, fecha: new Date().toLocaleString() };
    console.log("Objeto:", usuario);
    console.log("JSON:", JSON.stringify(usuario));
    document.getElementById('feedback20').textContent = "¡JSON generado! → Abre la consola (F12)";
    document.getElementById('nombreUsuario20').value = "";
  });

  // 21
  const tareasJSON = `[
    {"titulo": "Hacer laboratorio 16", "completada": true},
    {"titulo": "Estudiar para el examen", "completada": false},
    {"titulo": "Ir al gimnasio", "completada": true}
  ]`;
  const tareas = JSON.parse(tareasJSON);
  const listaTareas = document.getElementById('listaTareas');
  tareas.forEach(t => {
    const li = document.createElement('li');
    li.textContent = t.titulo;
    li.style.color = t.completada ? 'green' : 'red';
    listaTareas.appendChild(li);
  });

  // 22
  const formPerfil = document.getElementById('formPerfil');
  const perfilDiv = document.getElementById('perfilMostrado');

  if (localStorage.getItem('perfil')) {
    const p = JSON.parse(localStorage.getItem('perfil'));
    perfilDiv.innerHTML = `<h3>¡Bienvenido de nuevo!</h3>
      Nombre: ${p.nombre}<br>Edad: ${p.edad}<br>País: ${p.pais}`;
  }

  formPerfil.addEventListener('submit', (e) => {
    e.preventDefault();
    const datos = {
      nombre: document.getElementById('nombrePerfil').value,
      edad: document.getElementById('edadPerfil').value,
      pais: document.getElementById('paisPerfil').value
    };
    localStorage.setItem('perfil', JSON.stringify(datos));
    perfilDiv.innerHTML = `<h3>Perfil guardado</h3>
      Nombre: ${datos.nombre}<br>Edad: ${datos.edad}<br>País: ${datos.pais}`;
  });

});