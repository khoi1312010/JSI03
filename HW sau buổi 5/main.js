fetch('https://fakestoreapi.com/products')
  .then(response => response.json())
  .then(data => {
    const productList = document.getElementById('product-list');
    data.forEach(product => {
      const productItem = document.createElement('div');
      productItem.classList.add('product-item');

      const productImage = document.createElement('img');
      productImage.src = product.image;
      productImage.alt = product.title;
      productItem.appendChild(productImage);

      const productName = document.createElement('h2');
      productName.textContent = product.title;
      productItem.appendChild(productName);

      const productPrice = document.createElement('p');
      productPrice.textContent = `$${product.price}`;
      productItem.appendChild(productPrice);

      productList.appendChild(productItem);
    });
  });