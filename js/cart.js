// console.log(products);

const app = document.querySelector("#app");
const productCards = document.querySelector("#productCards");
const productCardDetail = new bootstrap.Modal("#productCardDetailModal");

const star = (num) => {
    let star = "";
    for(let i = 1; i <= 5; i++){
        if(num >= i){
            star += "<i class='bi bi-star-fill'></i>";
        }else{
            star += "<i class='bi bi-star'></i>"; 
        }
    }
    return star;
}

const createProductCard = (product) => {
  const div = document.createElement("div");
  div.className = "col-12 col-md-6 col-lg-4 product-card";
  div.setAttribute("product-id", product.id);
  div.innerHTML = `<div class="card">
<div class="card-body">
    <img src="${product.thumbnail}" alt="" class="product-img">
    <h3 class="fw-bold mt-2 mb-2 text-truncate">${product.title}</h3>
    <div class="d-flex justify-content-between align-items-center mb-2">
        <div class="badge bg-secondary text-capitalize">${product.category.replaceAll("-","")}</div>
        <div>
            ${star(product.rating)}
        </div>
    </div>
   
    <p class="product-description text-muted text-small">${product.description}</p>
    <hr>
    <div class="d-flex justify-content-between align-items-center">
        <p class="mb-0">$ ${product.price}</p>
        <button class="btn btn-outline-dark">Add to Cart</button>
    </div>
</div>
</div>`;
return div;
};

products.forEach((product) => {
    // console.log(products);
    productCards.append(createProductCard(product));
});

app.addEventListener('click', (event) => {
    // console.log(event.target);
    if(event.target.closest(".product-card")){
        const currentCard = event.target.closest(".product-card");
        const currentProductId = currentCard.getAttribute("product-id");
        const currentProduct = products.find((product) => product.id == currentProductId);
        productCardDetail._element.querySelector(".modal-title").innerText =
        currentProduct.title;
        productCardDetail.show();
    }
})
