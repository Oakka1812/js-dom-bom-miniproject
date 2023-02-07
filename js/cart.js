// console.log(products);

const app = document.querySelector("#app");
const productCards = document.querySelector("#productCards");
const productCardDetail = new bootstrap.Modal("#productCardDetailModal");

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

const createProductCard = (product) => {
  const div = document.createElement("div");
  div.className = "col-12 col-md-6 col-lg-4 product-card";
  div.setAttribute("product-id", product.id);
  div.innerHTML = `<div class="card">
<div class="card-body">
    <img src="${product.thumbnail}" alt="" class="product-img">
    <h3 class="fw-bold mt-2 mb-2 text-truncate">${product.title}</h3>
    <div class="d-flex justify-content-between align-items-center mb-2">
        <div class="badge bg-secondary text-capitalize">${product.category.replaceAll(
          "-",
          ""
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
    })
    return {slides, indicators};
}

app.addEventListener("click", (event) => {
  // console.log(event.target);
  if (event.target.closest(".product-card")) {
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
            <div class="badge bg-secondary text-capitalize">${currentProduct.category.replaceAll(
              "-",
              ""
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
  }
});
