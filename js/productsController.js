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
          imageUrl: imageUrl
      };

      //push the product to the products array
      this.products.push(product);
  }
}
