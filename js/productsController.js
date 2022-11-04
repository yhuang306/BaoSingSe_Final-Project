class ProductsController {
  // Set up the items and currentId property in the contructor
  constructor(currentId = 0) {
    this.items = [];
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
    this.items.push(product);
  }
}
