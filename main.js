let currentCategory = null;

function loadProducts(category) {
  currentCategory = category;
  // Aquí es donde obtendrías los productos de la categoría seleccionada.
  // En este ejemplo, estoy usando datos de muestra.
  let products = [
    { name: 'Producto 1', category: electro },
    { name: 'Producto 2', category: category },
    // ...
  ];

  // Vacía el contenedor de productos
  let productContainer = document.querySelector('#product-list');
  productContainer.innerHTML = '';

  // Inserta los productos en el contenedor
  products.forEach(product => {
    let productDiv = document.createElement('div');
    productDiv.classList.add('product');
    productDiv.textContent = product.name;
    productContainer.appendChild(productDiv);
  });
}

function loadMoreProducts() {
  // Aquí es donde obtendrías y cargarías más productos de la categoría actual.
  // En este ejemplo, estoy usando datos de muestra.
  let products = [
    { name: 'Producto 3', category: currentCategory },
    { name: 'Producto 4', category: currentCategory },
    // ...
  ];

  // Inserta los productos en el contenedor
  let productContainer = document.querySelector('#product-list');
  products.forEach(product => {
    let productDiv = document.createElement('div');
    productDiv.classList.add('product');
    productDiv.textContent = product.name;
    productContainer.appendChild(productDiv);
  });
}