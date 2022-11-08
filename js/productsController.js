class ProductsController {
  //set up constructor with id = 0 and an empty array
  constructor(currentId = 0) {
    this.products = [];
    this.currentId = currentId;
  }

  addProduct(name, description, price, imageUrl) {
    const product = {
      id: this.currentId++,
      name: name,
      description: description,
      price: price,
      imageUrl: imageUrl,
    };

    //push the product to the products array
    this.products.push(product);
  }
  loadItemsFromLocalStorageToArray() {
    const storageItems = localStorage.getItem("products");
    if (storageItems) {
      const products = JSON.parse(storageItems);
      for (let i = 0, size = products.length; i < size; i++) {
        const product = products[i];
        this.products.push(product);
      }
    }
  }
}

// Save items to the local Storage

function saveItemToLocalStorage() {
  if (!localStorage.getItem("products")) {
    localStorage.setItem("products", JSON.stringify(this._products));
    // save to database
  } else {
    const oldLocalStorage = JSON.parse(localStorage.getItem("products"));
    oldLocalStorage.push(this._products[this._products.length - 1]);
    localStorage.setItem("products", JSON.stringify(oldLocalStorage));
  }
}
