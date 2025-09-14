const { inicializarProductos, mostrarProductos } = require("./store");

const PASS = "2203";
const $adminSection = document.getElementById('adminSection');
document.getElementById('loginBtn').addEventListener('click',()=>{
  if(document.getElementById('adminPass').value===PASS){
    (document.getElementById('loginSection')).style.display="none";
    $adminSection.style.display="block";
    loadProducts();
  } else alert("Contraseña incorrecta");
});
async function loadProducts(){
  const res = await fetch('products.json');
  window.products = await res.json();
  renderList();
}
function renderList(){
  const $list = document.getElementById('prodList');
  $list.innerHTML = window.products.map((p,i)=>`
    <div>
      <b>${p.name}</b> - $${p.price} - ${p.category}
      <button onclick="deleteProd(${i})">Eliminar</button>
    </div>`).join("");
}
document.getElementById('addBtn').addEventListener('click',()=>{
  const p = {
    id:"p"+(Date.now()),
    name:document.getElementById('prodName').value,
    price:parseFloat(document.getElementById('prodPrice').value),
    category:document.getElementById('prodCategory').value,
    img:document.getElementById('prodImg').value
  };
  window.products.push(p);
  saveProducts();
});
function deleteProd(i){
  window.products.splice(i,1);
  saveProducts();
}
async function saveProducts(){
  await fetch('products.json',{method:"POST",body:JSON.stringify(window.products)});
  renderList();
}document.addEventListener("DOMContentLoaded", () => {
  inicializarProductos(); // 🔹 asegurar que haya productos
  mostrarProductos();

  const searchInput = document.getElementById("searchInput");
  searchInput.addEventListener("input", (e) => {
      mostrarProductos(e.target.value);
    });
});

