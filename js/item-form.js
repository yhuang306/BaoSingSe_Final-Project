// Select the New Item Form
const newItemForm = document.getElementById("newProductForm");

// Add an 'onsubmit' event listener
newItemForm.addEventListener("submit", (event) => {
  // Prevent default action
  event.preventDefault();

  // Select the inputs
  const newItemName = document.getElementById("itemName");
  const newItemDescription = document.getElementById("itemDescription");
  const newItemImageUrl = document.getElementById("itemImage");
  const newItemPrice = document.getElementById("itemPrice");

  // Get the values of the inputs
  const name = newItemName.value;
  const description = newItemDescription.value;
  const imageUrl = newItemImageUrl.value;
  const price = newItemPrice.value;

  /*
        Validation code here
    */

  // Add the item to the ItemsController
  productsController.addProduct(name, description, price, imageUrl);
  productsController.saveItemtoLocalStorage();

  console.log(productsController._products);
  // Clear the form
  newItemName.value = "";
  newItemDescription.value = "";
});
