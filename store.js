// Inicializar productos si localStorage está vacío
export function inicializarProductos() {
  if (!localStorage.getItem("productos")) {
    localStorage.setItem("productos", JSON.stringify([
        { name: "PLAYERA", category: "T shirt", price: "12", img: newFunction() },
        { name: "Camisa", category: "Playera", price: "25", img: newFunction() },
        { name: "Silla Gamer", category:"Sudadera", price: "199.99", img: newFunction() }
      ]));
  }

  function newFunction() {
    const newLocal = img;
    return newLocal;
  }
}

function cargarProductos() {
  const data = localStorage.getItem("productos");
  if (data) return JSON.parse(data);
  return [];
}

export function mostrarProductos() {
  const productos = cargarProductos();
  const store = document.getElementById("store");

  store.innerHTML = "";

  const filtrados = productos.filter(prod => {
    const texto = filtro.toLowerCase();
    return (
      prod.name.toLowerCase().includes(texto) ||
      prod.category.toLowerCase().includes(texto)
    );
  });

  if (filtrados.length === 0) {
    store.innerHTML = "<p>No hay productos que coincidan.</p>";
    return;
  }

  filtrados.forEach(prod => {
    const card = document.createElement("div");
    card.classList.add("producto-card");

    card.innerHTML = `
      <img src="${prod.img}" class="producto/img" alt="${prod.name}">
      <h3>${prod.name}</h3>
      <p class="categoria">${prod.category}</p>
      <p class="precio">$${prod.price.toFixed(2)}</p>
    `;

    store.appendChild(card);
  });
}
