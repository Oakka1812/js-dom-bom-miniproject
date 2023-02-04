const textInput = document.querySelector("#textInput");
const createBtn = document.querySelector("#createBtn");
const lists = document.querySelector("#lists");
const total = document.querySelector("#total");
const doneTotal = document.querySelector("#doneTotal");

const data = [
  "Taeyeon",
  "Sunny",
  // "Tiffany",
  // "Hyoyeon",
  // "Yuri",
  // "Sooyoung",
  // "Yoona",
  // "Seohyun",
];

const counter = () => {
  const totalCount = lists.children.length;
  const doneCount = [...lists.children].filter(
    (d) => d.querySelector(".form-check-input").checked
  ).length;
  total.innerText = totalCount;
  doneTotal.innerText = doneCount;
};

const createLi = (text) => {
  const dynamicId = "checkId" + Math.random();
  const li = document.createElement("li");
  // li.addEventListener('dblclick',edit);
  li.className =
    "list-group-item d-flex justify-content-between align-items-center";
  li.innerHTML = `
    <div class="form-check">
    <input
      type="checkbox"
      class="form-check-input"
      id="${dynamicId}"
      onChange = "done(event)"
    />
    <label for="${dynamicId}" class="form-check-label">${text}</label>
  </div>
  
  <div class="btn-group">
    <button class="btn btn-sm btn-primary ms-auto edit-btn"><i class="bi bi-pencil pe-none"></i></button>
    <button class="btn btn-sm btn-danger ms-auto del-btn"><i class="bi bi-trash3 pe-none"></i></button>
  </div>
    `;
  return li;
};

const addLists = () => {
  if (textInput.value.trim()) {
    lists.append(createLi(textInput.value));
    textInput.value = null;
    counter();
  } else {
    alert("Input is empty!!!");
  }
};

const del = (event) => {
  if (confirm("Are you sure want to delete ?")) {
    event.target.closest("li").remove();
    counter();
  }
};

const done = (event) => {
  event.target.nextElementSibling.classList.toggle(
    "text-decoration-line-through"
  );
  counter();
};

const edit = (event) => {
  const element = event.target
    .closest(".list-group-item")
    .querySelector(".form-check-label");
  const oldText = element.innerText;
  const newText = prompt("Input new text...", oldText);
  if (newText && newText.trim()) {
    element.innerText = newText;
  }
};

data.forEach((d) => lists.append(createLi(d)));

createBtn.addEventListener("click", addLists);

textInput.addEventListener("keyup", (event) => {
  if (event.keyCode === 13) {
    // console.log(event);
    addLists();
  }
});

// [...lists.children].forEach((li) => {
//   console.log(li);
//   li.querySelector(".edit-btn").addEventListener('click', edit);
//   li.querySelector(".del-btn").addEventListener('click', del);
// });

//event delegation concept
lists.addEventListener("click", (event) => {
  if (event.target.classList.contains("edit-btn")) {
    edit(event);
  } else if (event.target.classList.contains("del-btn")) {
    del(event);
  }
});

window.addEventListener("load", counter);
