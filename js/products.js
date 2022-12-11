const productsController = new ProductsController(0);

function addProductCard(product) {
  const productHTML =
    '<div class="flip-card col-sm-12 col-lg-4 col-md-6 float-left">\n' +
    '<div class="flip-card-inner"> \n' +
    '<div class="flip-card-front">\n' +
    '<img src="${' +
    product.imageUrl +
    '}" alt="product image" style="width: 100%; height: 300px;">\n' +
    "</div> \n" +
    '<div class="flip-card-back"> \n' +
    "<h1>${" +
    product.name +
    "}</h1>\n" +
    "<p>${" +
    product.description +
    "}</p>\n" +
    "<label><strong>Price: $${" +
    product.price +
    "}</strong></label><br>\n" +
    '<input type="number" name="beef" size="1" min="0" id="beef"> <br>\n' +
    '<a href="#" class="btn btn-secondary mt-2">Add to cart</a>\n' +
    "</div>\n" +
    "</div> \n" +
    "</div>\n";
  // const productsContainer = document.getElementById("list-products");
  // productsContainer.innerHTML += productHTML;
  const lastAddedItem = document.getElementById("lastAddedItem");
  lastAddedItem.innerHTML += productHTML;
}

function loadStorageSampleData() {
  if (!localStorage.getItem("products")) {
    const sampleProducts = [
      {
        name: "Beef Bao",
        description:
          "Flavorful beef pot roast, mixed with spinach, green onions, and marinated in hoisin sauce, wrapped in a soft fluffy bun",
        price: "3",
        imageUrl: "./img/bao-beef-bun.jpeg",
      },
      {
        name: "Chicken Bao",
        description:
          "Ground chicken mixed with green onions, grated ginder, and white pepper marinated in oyster sauce, soy suace, and sesame oil",
        price: "3",
        imageUrl: "./img/steamed-chicken-buns4.png",
      },
      {
        name: "Egg Custard Bao",
        description: "Egg custard filling steamed bun",
        price: "3",
        imageUrl: "./img/eggcustard.jpeg",
      },
    ];
    localStorage.setProduct("products", JSON.stringify(sampleProducts));
  }
}

function loadListFromProductsController() {
  console.log(productsController.products);
  for (let i = 0, size = productsController.products.length; i < size; i++) {
    const product = productsController.products[i];
    addProductCard(product);
  }
}

loadStorageSampleData();
productsController.loadItemsFromLocalStorageToArray();
loadListFromProductsController();

/* function eventHandler() {
  const name = document.getElementById('itemName');
  const description = document.getElementById('itemDescription');
  const price = document.getElementById('itemPrice');
  const image = document.getElementById('customFileLang');
  productsController.addProduct(name.value, description.value, price.value, image.value);
  addProductCard(productsController.products[0]);
  const lastAddedItem = document.getElementById('lastAddedItem');
  lastAddedItem.innerHTML = `${pro.id} ${pro.name} ${pro.description} ${pro.price}`;
}

document.getElementById('addItem').onclick = eventHandler; */
