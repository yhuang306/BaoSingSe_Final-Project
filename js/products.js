const productsController = new ProductsController(0);

function addProductCard(product){
    const productHTML = `<div class="flip-card col-sm-12 col-lg-4 col-md-6 float-left">\n
    <div class="flip-card-inner"> \n
    <div class="flip-card-front">\n 
      <img src="${product.imageUrl}" alt="product image" style="width: 100%;height:300px;">\n
    </div> \n
    <div class="flip-card-back"> \n
      <h1>${product.name}</h1>\n
      <p>${product.description}</p>\n
        <label><strong>Price: $${product.price}</strong></label><br>\n
        <input type="number" name="beef" size="1" min="0" id="beef"> <br>\n
        <a href="#" class="btn btn-secondary mt-2">Add to cart</a>\n
    </div>\n
  </div> \n
</div>\n`;
const productsContainer = document.getElementById('list-products');
productsContainer.innerHTML += productHTML;
}