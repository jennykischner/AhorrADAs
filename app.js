const linkBalanceNav = document.querySelector("#link-balance");
const linkCategoriasNav = document.querySelector("#link-categorias");
const linkReportesNav = document.querySelector("#link-reportes");

const mostrarOcultarFiltros = document.querySelector(
  "#mostrar-ocultar-filtros"
);
const formularioFiltros = document.querySelector("#formulario-filtros");

const main = document.querySelector("#main");

const cardNuevaOperacion = document.querySelector("#card-nueva-operacion");
const botonAgregarOperacion = document.querySelector(
  "#boton-agregar-operacion"
);
const botonCancelarAgregarOperacion = document.querySelector(
  "#cancelar-agregar-operacion"
);

const sectionCardNuevaOperacion = document.querySelector(
  "#section-card-nueva-operacion"
);
const sectionCardCategorias = document.querySelector(
  "#section-card-categorias"
);
const inputAgregarCategoria = document.querySelector(
  "#input-agregar-categoria"
);
const botonAgregarCategoria = document.querySelector(
  "#boton-agregar-categoria"
);
const listadoCategorias = document.querySelector("#listado-categorias");

const sectionCardReportes = document.querySelector("#section-card-reportes");

//MOSTRAR OCULTAR FILTROS - MENU IZQUIERDO
mostrarOcultarFiltros.addEventListener("click", () => {
  formularioFiltros.classList.toggle("is-hidden");

  if (mostrarOcultarFiltros.innerText == "Ocultar Filtros") {
    mostrarOcultarFiltros.innerText = "Mostrar Filtros";
  } else {
    mostrarOcultarFiltros.innerText = "Mostrar Filtros";
  }
});

//MOSTRAR OCULTAR CARD NUEVA OPERACION
botonAgregarOperacion.onclick = () => {
  sectionCardNuevaOperacion.classList.remove("is-hidden");
  main.classList.add("is-hidden");
};

botonCancelarAgregarOperacion.onclick = () => {
  sectionCardNuevaOperacion.classList.add("is-hidden");
  main.classList.remove("is-hidden");
};

//MOSTRAR OCULTAR CARD CON CATEGORIAS
linkCategoriasNav.onclick = () => {
  sectionCardCategorias.classList.remove("is-hidden");
  main.classList.add("is-hidden");
};

linkBalanceNav.onclick = () => {
  sectionCardCategorias.classList.add("is-hidden");
  sectionCardReportes.classList.add("is-hidden");
  main.classList.remove("is-hidden");
};

//ARRAY LISTADO CATEGORIAS
const categorias = [
  "Comidas",
  "Servicios",
  "Salidas",
  "Educación",
  "Transporte",
  "Trabajo",
];

const estructuraHtml = categorias.reduce((acc, elemento) => {
  return (
    acc +
    ` <div class="columns" >
    <div class="column">
      <div class="columns mt-4">
        <div class="column is-10">
          <p class="tag">${elemento}</p>
        </div>
        <div class="column is-2">
          <div class="columns has">
            <button class="button is-ghost is-small">Editar</button>
            <button class="button is-ghost is-small">
              Eliminar
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>`
  )
}, ``)

listadoCategorias.innerHTML = estructuraHtml;

//MOSTRAR OCULTAR CARD REPORTES
linkReportesNav.onclick = () => {
  sectionCardReportes.classList.remove("is-hidden");
  main.classList.add("is-hidden");
  sectionCardCategorias.classList.add("is-hidden");
};
