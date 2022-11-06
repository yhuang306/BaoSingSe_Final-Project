class ProductsController {
  // Set up the items and currentId property in the contructor
  constructor(currentId = 0) {
    this.products = [];
    this.currentId = currentId;
  }
  // Create the addProduct method
  addProduct(name, description, price, imageUrl) {
    const product = {
      id: this.currentId++,
      name: name,
      description: description,
      price: price,
      imageUrl: imageUrl,
    };
    // Push the item to the items property
    this.products.push(product);
    //return product;
  }

  loadProductsFromLocalStorage() {
    const storageProducts = localStorage.getItem("products");
    if (storageProducts) {
        const products = JSON.parse(storageProducts)
        //TODO load the items into the local items structure (this.items) 
        for(let i = 0; i < products.length; i++){
          const product = products[i];
          this.products.push(product);
        }
    }
  }
}
