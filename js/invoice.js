const services = [
  {
    id: 1,
    title: "Domain Service",
    price: 15,
  },
  {
    id: 2,
    title: "Hosting Service",
    price: 30,
  },
  {
    id: 3,
    title: "Web Development Service",
    price: 100,
  },
  {
    id: 4,
    title: "Maintainace Service",
    price: 60,
  },
];

//selector
const app = document.querySelector("#app");
const invoiceForm = document.querySelector("#invoice-form");
const selectService = document.querySelector("#select-service");
const quantity = document.querySelector("#quantity");
const addBtn = document.querySelector("#add-btn");
const lists = document.querySelector("#lists");
const subTotal = document.querySelector("#subTotal");
const tax = document.querySelector("#tax");
const total = document.querySelector("#total");
const listTable = document.querySelector("#listTable");
const addServiceOpenBtn = document.querySelector("#addServiceOpenBtn")
// const addServiceModal = document.querySelector("#addServiceModal");
const addServiceForm = document.querySelector("#addServiceForm");
const closeServiceModalBtn = document.querySelector("#closeServiceModalBtn");
const addServiceModal = new bootstrap.Modal("#addServiceModal");

const createTr = (service, quantity) => {
  const tr = document.createElement("tr");
  tr.setAttribute("service-id", service.id);
  const total = quantity * service.price;
  tr.innerHTML = `
    <td class="d-flex justify-content-between">
    ${service.title}
    <div class="dropdown">
      <i class="bi bi-three-dots-vertical dropdown-icon" type="button" data-bs-toggle="dropdown"></i>
      <ul class="dropdown-menu">
        <li><a class="dropdown-item  del-btn" href="#">Delete</a></li>
        <li><a class="dropdown-item" href="#">Another action</a></li>
        <li><a class="dropdown-item" href="#">Something else here</a></li>
      </ul>
    </div>
    </td>
    <td class="text-end list-quantity">${quantity}</td>
    <td class="text-end">${service.price}</td>
    <td class="text-end list-total">${total}</td>
    `;
  return tr;
};

const showTable = () =>{
  if(lists.children.length){
    listTable.classList.remove("d-none");
  }else{
    listTable.classList.add("d-none") }
}

const calculateTax = (amount, percentage = 5) => {
  return amount * (percentage / 100);
};

const findTotal = () => {
  const listTotal = document.querySelectorAll(".list-total");
  let subTotalCalculated = [...listTotal].reduce(
    (pv, cv) => pv + parseFloat(cv.innerText),
    0
  );
  subTotal.innerText = subTotalCalculated;
  tax.innerText = calculateTax(subTotalCalculated);
  total.innerText = subTotalCalculated + calculateTax(subTotalCalculated);
  // listTotal.forEach((lt) => {
  //   subTotal += parseFloat(lt.innerText);
  // });
};

services.forEach((service) => {
  selectService.append(new Option(service.title, service.id));
});

invoiceForm.addEventListener("submit", (event) => {
  event.preventDefault();
  // console.log(selectService.value, selectService.options[selectService.selectedIndex].innerText, quantity.valueAsNumber);

  //   console.log(
  //     selectService.value, //value in option
  //     quantity.valueAsNumber,
  //     services.find((e) => e.id == selectService.value)
  //   );

  const selectedService = services.find(
    (service) => service.id == selectService.value
  );

  const isExistedService = [...lists.children].find(
    (e) => e.getAttribute("service-id") == selectedService.id
  );
  console.log(isExistedService);
  if (isExistedService) {
    // console.log("Service is already existed!!!")
    let existedQuantity = isExistedService.querySelector(".list-quantity");
    existedQuantity.innerText =
      parseFloat(existedQuantity.innerText) + quantity.valueAsNumber;
    isExistedService.querySelector(".list-total").innerText =
      existedQuantity.innerText * selectedService.price;
  } else {
    lists.append(createTr(selectedService, quantity.valueAsNumber));
  }

  findTotal();
  invoiceForm.reset();
  showTable();
});

app.addEventListener("click", (event) => {
  const selectElement = event.target;
  if (selectElement.classList.contains("del-btn")) {
    selectElement.closest("tr").remove();
  }
  findTotal();
  showTable();
});

//for opening add service btn
addServiceOpenBtn.addEventListener('click', () => {
  // addServiceModal.classList.remove("d-none");
  addServiceModal.show();
});

//adding data to select box by clicking submit button
addServiceForm.addEventListener('submit', (event) => {
  event.preventDefault();
  const formData = new FormData(event.target);
  console.log(formData.get("serviceTitle"), formData.get("servicePrice"));

  const id = Date.now();

  //adding data
  services.push({
    id,
    title : formData.get("serviceTitle"),
    price : formData.get("servicePrice")
  })

  //adding to dom
  selectService.append(new Option(formData.get("serviceTitle"), id));

  //close form
  event.target.reset();
  addServiceModal.hide();
  // addServiceModal.classList.add("d-none");
 });

//close form clicking close btn
closeServiceModalBtn.addEventListener('click', (event) => {
  addServiceModal.hide();
  // addServiceModal.classList.add("d-none");
  // console.log(event.target);
})
