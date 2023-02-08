// console.log(products);

const app = document.querySelector("#app");
const productCards = document.querySelector("#productCards");
const productCategories = document.querySelector("#productCategories");
const searchInput = document.querySelector("#searchInput");
const cart = document.querySelector("#cart");
const header = document.querySelector("#header");
const productCardDetail = new bootstrap.Modal("#productCardDetailModal");

const categories = [...new Set(products.map((product) => product.category))];

const star = (num) => {
  let star = "";
  for (let i = 1; i <= 5; i++) {
    if (num >= i) {
      star += "<i class='bi bi-star-fill'></i>";
    } else {
      star += "<i class='bi bi-star'></i>";
    }
  }
  return star;
};

const slugToText = (slug) => {
  return slug.replaceAll("-", " ");
};

const createCategoryBtn = (name) => {
  const btn = document.createElement("button");
  btn.className = "btn btn-sm btn-outline-dark text-capitalize me-2 cat";
  btn.innerText = slugToText(name);
  btn.setAttribute("cat", name);
  return btn;
};

const createProductCard = (product) => {
  const div = document.createElement("div");
  div.addEventListener('click',() =>{
    renderProductDetailModal();
  });
  div.className = "col-12 col-md-6 col-lg-4 product-card";
  div.setAttribute("product-id", product.id);
  div.innerHTML = `<div class="card">
<div class="card-body">
    <img src="" alt="" class="product-img">
    <h3 class="fw-bold mt-2 mb-2 text-truncate">${product.title}</h3>
    <div class="d-flex justify-content-between align-items-center mb-2">
        <div class="badge bg-secondary text-capitalize">${slugToText(
          product.category
        )}</div>
        <div>
            ${star(product.rating)}
        </div>
    </div>
   
    <p class="product-description text-muted text-small">${
      product.description
    }</p>
    <hr>
    <div class="d-flex justify-content-between align-items-center">
        <p class="mb-0 price">$ ${product.price}</p>
        
    </div>
</div>
</div>`;

const img = new Image();
img.src = product.thumbnail;
img.className = "product-img";
div.querySelector(".card-body").prepend(img);

const btn = document.createElement("button");
btn.className = "btn btn-outline-dark add";
btn.innerText = "Add to Cart";

btn.addEventListener('click', (event) => {
  event.stopPropagation();
 if(btn.classList.contains("active")){
  btn.classList.remove("active");
  btn.innerText = "Add to Cart";
 }else{
  const imgAnimate = new Image();
  imgAnimate.src = product.thumbnail;

  imgAnimate.style.position = "fixed";
  imgAnimate.style.transition = "0.5s";
  imgAnimate.style.zIndex = 2000;
  imgAnimate.style.width = img.getBoundingClientRect().width + "px";
  imgAnimate.style.height = img.getBoundingClientRect().height + "px";
  imgAnimate.style.top = img.getBoundingClientRect().top + "px";
  imgAnimate.style.left = img.getBoundingClientRect().left + "px";

  setTimeout(() => {
    imgAnimate.style.width = 0 + "px";
    imgAnimate.style.height = 0 + "px";
    imgAnimate.style.top = cart.getBoundingClientRect().top + "px";
    imgAnimate.style.left = cart.getBoundingClientRect().left + "px";
  }, 100);

  document.body.append(imgAnimate);
  btn.classList.add("active");
  btn.innerText = "Added";
 }
});
div.querySelector(".price").after(btn);
  return div;
};

const renderProductCard = (products) => {
  productCards.innerHTML = null;
  products.forEach((product) => {
    productCards.append(createProductCard(product));
  });
};

const renderProductByCategory = () => {
  const currentCategory = event.target.getAttribute("cat");
  if (currentCategory === "all") {
    renderProductCard(products);
  } else {
    renderProductCard(
      products.filter(
        (product) => product.category === event.target.getAttribute("cat")
      )
    );
  }

  //remove old active class
  productCategories.querySelector(".active").classList.remove("active");
  //add new active class
  event.target.classList.add("active");
};

const renderBySearch = (keyword) => {
  renderProductCard(
    products.filter((product) => {
      return (
        product.title.toLocaleLowerCase().search(keyword.toLocaleLowerCase()) != -1 ||
        product.description.toLocaleLowerCase().search(keyword.toLocaleLowerCase()) != -1
      );
    })
  );
};

const renderProductDetailModal = () => {
  const currentCard = event.target.closest(".product-card");
  const currentProductId = currentCard.getAttribute("product-id");
  const currentProduct = products.find(
    (product) => product.id == currentProductId
  );
  productCardDetail._element.querySelector(".modal-title").innerText =
    currentProduct.title;

  productCardDetail._element.querySelector(
    ".modal-body"
  ).innerHTML = `<div id="productDetailCarousel" class="carousel slide">
      <div class="carousel-indicators">
       ${productDetailCarouselItem(currentProduct.images).indicators}
      </div>
      <div class="carousel-inner">
      
        ${productDetailCarouselItem(currentProduct.images).slides}
      </div>
      <div class="d-flex justify-content-between align-items-center mt-3">
          <div class="badge bg-secondary text-capitalize">${slugToText(
            currentProduct.category
          )}</div>
          <div>
              ${star(currentProduct.rating)}
          </div>
      </div>
      <p class="mt-3">${currentProduct.description}</p>
      <p>$ ${currentProduct.price}</p>
      <button
        class="carousel-control-prev"
        type="button"
        data-bs-target="#productDetailCarousel"
        data-bs-slide="prev"
      >
        <span
          class="carousel-control-prev-icon"
          aria-hidden="true"
        ></span>
        <span class="visually-hidden">Previous</span>
      </button>
      <button
        class="carousel-control-next"
        type="button"
        data-bs-target="#productDetailCarousel"
        data-bs-slide="next"
      >
        <span
          class="carousel-control-next-icon"
          aria-hidden="true"
        ></span>
        <span class="visually-hidden">Next</span>
      </button>
    </div>
  </div> `;
  productCardDetail.show();
};

categories.forEach((category) =>
  productCategories.append(createCategoryBtn(category))
);

renderProductCard(products);

const productDetailCarouselItem = (arr) => {
  let slides = "";
  let indicators = "";
  arr.forEach((e, index) => {
    slides += `<div class="carousel-item ${index === 0 && "active"}">
        <img src="${e}" class="d-block w-100 product-detail-img" alt="..." />
      </div>`;

    indicators += `<button
      type="button"
      data-bs-target="#productDetailCarousel"
      data-bs-slide-to="${index}"
      class="${index === 0 && "active"}"
      aria-current="true"
      aria-label="Slide ${index}"
    ></button>`;
  });
  return { slides, indicators };
};

searchInput.addEventListener('keyup', () => {
  renderBySearch(searchInput.value);
});

window.addEventListener('scroll', (event) =>{
  if(window.scrollY > 150){
    header.classList.add("sticky-top");
  }else{
    header.classList.remove("sticky-top");
  }

})

app.addEventListener("click", (event) => {
  // console.log(event.target);
  // if (event.target.closest(".product-card") && !event.target.classList.contains("add")) {
  //   renderProductDetailModal();
  // }

  if (event.target.classList.contains("cat")) {
    // console.log(event.target);
    // console.log(products);
    // console.log(event.target.getAttribute("cat"))
    renderProductByCategory();
  }

  // if(event.target.classList.contains("add")){
  //   console.log("add to cart");
  // }
});
