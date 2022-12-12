
// Initialize a new ItemsController with currentId set to 0
const productsController = new ProductsController();

// Select the New Item Form
const newProductForm = document.querySelector('#newProductForm');

// Add an 'onsubmit' event listener
newProductForm.addEventListener('submit', (event) => {
    // Prevent default action
    event.preventDefault();

    // Select the inputs
    const newProductName = document.querySelector('#itemName');
    const newProductDescription = document.querySelector('#itemDescription');
    const newProductImageUrl = document.querySelector('#itemImage');   
    const newProductPrice = document.querySelector('#itemPrice');  

    // Get the values of the inputs
    const name = newProductName.value;
    const description = newProductDescription.value;
    const imageUrl = newProductImageUrl.value;
    const price = newProductPrice.value;

    /*
        Validation code here
    */

    // Add the item to the ItemsController
    productsController.addProduct(name, description, price, imageUrl);
    productsController.saveProductToLocalStorage();
    //addProductCard(productsController.products[0]);

    // Clear the form
    newProductName.value = '';
    newProductDescription.value = '';    
    newProductPrice.value = ''; 
    newProductImageUrl.value = ''; 
});