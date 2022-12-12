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

      localStorage.setItem("products", JSON.stringify(this.products));
  }

  /* loadProductsFromLocalStorage() {
      const storageProducts = localStorage.getItem("products");
      if (storageProducts) {
          const products = JSON.parse(storageProducts)
          //TODO load the items into the local items structure (this.items) 
          for(let i = 0; i < products.length; i++){
          const product = products[i];
          this.products.push(product);
          }
      }
  }  */
}