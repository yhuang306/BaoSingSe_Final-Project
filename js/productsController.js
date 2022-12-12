class ProductsController {

    products = []
  //set up constructor with id = 0 and an empty array
  constructor() {
    loadProductsFromLocalStorage();
    console.log(this.products.length);
      this.currentId = 0;
  }

 

  addProduct(name, description, price, imageUrl) {
      const product = {
          id: ++this.currentId,
          name: name,
          description: description,
          price: price,
          imageUrl: imageUrl
      };

      //push the product to the products array
      this.products.push(product);
    

      //localStorage.setItem("products", JSON.stringify(this.products));
  }

  saveProductToLocalStorage() {
    if(!localStorage.getItem("products")) {
        localStorage.setItem("products", JSON.stringify(this.products));
    } else {
        const oldLocalStorage = JSON.parse(localStorage.getItem('products'))
        oldLocalStorage.push(this.products[this.products.length - 1])
        localStorage.setItem("products", JSON.stringify(oldLocalStorage))
    }
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