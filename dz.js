// let items = [
//   { title: "IPhone 14", description: "IPhone 14 128Gb black", price: "100 000тг", isInStock: true },
//   { title: "Сумка", description: "Сумка black", price: "10 000тг", isInStock: true },
//   { title: "Платье", description: "Платье black M", price: "23 000", isInStock: false }
// ];

let items = [
  { 
    title: "IPhone 14", 
    description: "IPhone 14 128Gb black", 
    price: "100 000тг", 
    isInStock: false, 
    imageSrc: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR3eECbHC17k6du3KjrpNObhfIBDNO_xRVhzw&usqp=CAU"
    // imageSrc: "iphone14.jpg"

  },
  { 
    title: "Сумка", 
    description: "Сумка black", 
    price: "10 000тг", 
    isInStock: true, 
    imageSrc: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQmmdZjN2EtX0yfwZSSRqAnSOWN-8d4xK5dag&usqp=CAU"
  },
  { 
    title: "Платье", 
    description: "Платье black M", 
    price: "23 000", 
    isInStock: false, 
    imageSrc: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSeKdf0rBiNgIdZMatkipyXrj81P5uyTPQfWA&usqp=CAU"
  }
];

// let imageElement = document.createElement("img");
// imageElement.src = items.imageSrc;
// imageElement.alt = items.title;
// itemElement.appendChild(imageElement);


function saveItems() {
  localStorage.setItem("items", JSON.stringify(items));
}

function loadItems() {
  let storedItems = localStorage.getItem("items");
  if (storedItems) {
    items = JSON.parse(storedItems);
  }
}

// function createItemElement(item, index) {
//   let itemElement = document.createElement("div");
//   itemElement.classList.add("item");

 
//   let titleElement = document.createElement("h3");
//   titleElement.textContent = item.title;
//   itemElement.appendChild(titleElement);

//   let descriptionElement = document.createElement("p");
//   descriptionElement.textContent = item.description;
//   itemElement.appendChild(descriptionElement);

//   let priceElement = document.createElement("p");
//   priceElement.textContent = item.price;
//   itemElement.appendChild(priceElement);


//   let stockButton = document.createElement("button");
//   stockButton.classList.add('btn' , 'btn-success')
//   stockButton.textContent = item.isInStock ? "В наличии" : "Нет в наличии";
//   stockButton.addEventListener("click", function () {
//     item.isInStock = !item.isInStock;
//     stockButton.textContent = item.isInStock ? "В наличии" : "Нет в наличии";
//     if(stockButton.textContent == "Нет в наличии"){
//         stockButton.classList.add('btn' , 'btn-dark')
//     }if(stockButton.textContent == "В наличии"){
//         stockButton.classList.add('btn' , 'btn-success')
//     }
//     saveItems();
//   });
//   itemElement.appendChild(stockButton);


//   let deleteButton = document.createElement("button");
//   deleteButton.classList.add('btn' , 'btn-danger')
//   deleteButton.textContent = "Удалить";
//   deleteButton.addEventListener("click", function () {
//     items.splice(index, 1);
//     saveItems();
//     renderItems();
//   });
//   itemElement.appendChild(deleteButton);

//   return itemElement;
// }

function createItemElement(item, index) {
  let itemElement = document.createElement("div");
  itemElement.classList.add("item", "card");

  let imageElement = document.createElement("img");
  imageElement.src = item.imageSrc;
  imageElement.alt = item.title;
  imageElement.style.height = "400px"
  imageElement.classList.add("card-img-top");
  itemElement.appendChild(imageElement);

  let cardBody = document.createElement("div");
  // cardBody.classList.add("card-body");
  cardBody.classList.add("card-body");
  cardBody.style.height = "20%";
  cardBody.style.alignItems = "end";
  itemElement.appendChild(cardBody);

  let titleElement = document.createElement("h5");
  titleElement.classList.add("card-title");
  titleElement.textContent = item.title;
  cardBody.appendChild(titleElement);

  let descriptionElement = document.createElement("p");
  descriptionElement.classList.add("card-text");
  descriptionElement.textContent = item.description;
  cardBody.appendChild(descriptionElement);

  let priceElement = document.createElement("p");
  priceElement.classList.add("card-text");
  priceElement.textContent = item.price;
  cardBody.appendChild(priceElement);

  // let itemBtn = document.createElement("div");
  // itemBtn.classList.add("item", "buttons");

  let stockButton = document.createElement("button");
  stockButton.classList.add('btn', 'btn-block', 'mr-3', item.isInStock ? 'btn-success' : 'btn-danger');
  stockButton.style.marginRight ='30px'
//   stockButton.style.alignSelf('end')
  stockButton.textContent = item.isInStock ? "В наличии" : "Нет в наличии";
  stockButton.addEventListener("click", function () {
    item.isInStock = !item.isInStock;
    stockButton.textContent = item.isInStock ? "В наличии" : "Нет в наличии";
    stockButton.classList.toggle('btn-success', item.isInStock);
    stockButton.classList.toggle('btn-dark', !item.isInStock);
    saveItems();
  });
  cardBody.appendChild(stockButton);

  let deleteButton = document.createElement("button");
  deleteButton.classList.add('btn', 'btn-block', 'btn-danger', 'mr-1');
  deleteButton.textContent = "Удалить";
  deleteButton.addEventListener("click", function () {
    items.splice(index, 1);
    saveItems();
    renderItems();
  });
  cardBody.appendChild(deleteButton);
  // cardBody.classList.add('align-items-end')
  // cardBody.lastChild.style = "align-items-end"
  // cardBody.lastChild.style.setProperty('align-items', 'end');

  return itemElement;
}



function renderItems() {
  let itemsContainer = document.getElementById("items-container");
  itemsContainer.innerHTML = "";

  for (let i = 0; i < items.length; i++) {
    let item = items[i];
    let itemElement = createItemElement(item, i);
    itemsContainer.appendChild(itemElement);
  }
}


loadItems();
renderItems();
