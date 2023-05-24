const productsCollection = document.querySelector(".row-collection");
const speciaProduct = document.querySelector(".special-products");




const products = [
    {
        image: "images/clothese/img11.jpg",
        img: "images/special/img40.jpg",
        addToCart: "Add To Cart",
        alt: "image",
        sale: "sale",
        text: "Gray Shirt",
        salary: "$56",
        filter: "best",
        filterBest: "all"
    },
    {
        image: "images/clothese/img49.jpg",
        img: "images/special/img21.jpg",
        addToCart: "Add To Cart",
        alt: "image",
        sale: "sale",
        text: "Gray Shirt",
        salary: "$56",
        filter: "new",
        filterBest: "all"
    },
    {
        image: "images/clothese/img42.jpg",
        img: "images/special/img22.jpg",
        addToCart: "Add To Cart",
        alt: "image",
        sale: "sale",
        text: "Gray Shirt",
        salary: "$56",
        filter: "feat",
        filterBest: "all"
    },
    {
        image: "images/clothese/img47.jpg",
        img: "images/special/img23.jpg",
        addToCart: "Add To Cart",
        alt: "image",
        sale: "sale",
        text: "Gray Shirt",
        salary: "$56",
        filter: "new",
        filterBest: "all"
    },
    {
        image: "images/clothese/img5.jpg",
        img: "images/special/img6.jpg",
        addToCart: "Add To Cart",
        alt: "image",
        sale: "sale",
        text: "Gray Shirt",
        salary: "$56",
        filter: "new",
        filterBest: "all"
    },
    {
        image: "images/clothese/img13.jpg",
        img: "images/special/img7.jpg",
        addToCart: "Add To Cart",
        alt: "image",
        sale: "sale",
        text: "Gray Shirt",
        salary: "$56",
        filter: "best",
        filterBest: "all"
    },
    {
        image: "images/clothese/img14.jpg",
        img: "images/special/img91.jpg",
        addToCart: "Add To Cart",
        alt: "image",
        sale: "sale",
        text: "Gray Shirt",
        salary: "$56",
        filter: "new",
        filterBest: "all"
    },
    {
        image: "images/clothese/img15.jpg",
        img: "images/special/imge90.jpg",
        addToCart: "Add To Cart",
        alt: "image",
        sale: "sale",
        text: "Gray Shirt",
        salary: "$56",
        filter: "best",
        filterBest: "all"
    },
    {
        image: "images/clothese/img16.jpg",
        img: "images/special/img92.jpg",
        addToCart: "Add To Cart",
        alt: "image",
        sale: "sale",
        text: "Gray Shirt",
        salary: "$56",
        filter: "best",
        filterBest: "all"
    },
    {
        image: "images/clothese/img26.jpg",
        img: "images/special/img31.jpg",
        addToCart: "Add To Cart",
        alt: "image",
        sale: "sale",
        text: "Gray Shirt",
        salary: "$56",
        filter: "feat",
        filterBest: "all"
    },
    {
        image: "images/clothese/img80.jpg",
        img: "images/special/img26.jpg",
        addToCart: "Add To Cart",
        alt: "image",
        sale: "sale",
        text: "Gray Shirt",
        salary: "$56",
        filter: "feat",
        filterBest: "all"
    },
    {
        image: "images/clothese/img41.jpg",
        img: "images/special/img25.jpg",
        alt: "image",
        sale: "sale",
        text: "Gray Shirt",
        salary: "$56",
        filter: "feat",
        filterBest: "all",
        addToCart: "Add To Cart",
    }

];

function showProducts(){
    let productsCollections = products.map(product =>{
        return `
        <div class="col-md-4 col-lg-3 col-lx-3 p-2 ${product.filter} ${product.filterBest}">
        <div class="collection-img position-relative">
          <img src="${product.image}" class= "img-fluid" alt="${product.alt}" />
          <span class="position-absolute bg-dark text-white d-flex justify-content-center align-items-center">${product.sale}</span>
        </div>
        <div class="text-content-collection text-center">
          <i class="fa-solid fa-star mt-3"></i>
          <i class="fa-solid fa-star mt-3"></i>
          <i class="fa-solid fa-star mt-3"></i>
          <i class="fa-solid fa-star mt-3"></i>
          <i class="fa-solid fa-star mtt-3"></i>
          <p class= "mb-1 mt-1">${product.text}</p>
          <span class="fw-bold">${product.salary}</span>
        </div>
      </div>`
    })
    productsCollection.innerHTML = productsCollections.join("");
}
 showProducts();
 

 function showSpecialProducts(){
    const specialProducts = products.map(product =>{
    return `<div class="col-md-6 col-lg-4 col-lx-3 p-2">
    <div class="img-special position-relative">
      <img src="${product.img}" alt="${product.alt}" />
      <span class="position-absolute">
        <i class="fa-solid fa-heart"></i>
      </span>
    </div>
    <div class="content-special">
      <p class="mx-1">${product.text}</p>
      <span class="fw-bold d-block">$ 100</span>
      <button type="button" class="btn p-2 m-2 text-dark">${product.addToCart}</button>
    </div>
  </div>`
    })
    speciaProduct.innerHTML = specialProducts.join("");
 }
showSpecialProducts();
