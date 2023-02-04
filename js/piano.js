// const audio = new Audio("./sound/C4.mp3");
// audio.controls = true;
// document.body.append(audio);

const sounds = [
  {
    id: 1,
    name: "C4",
    keyCode : 65,
  },
  {
    id: 2,
    name: "D4",
    keyCode : 83,
  },
  {
    id: 3,
    name: "E4",
    keyCode : 68,
  },
  {
    id: 4,
    name: "F4",
    keyCode : 70,
  },
  {
    id: 5,
    name: "G4",
    keyCode : 74,
  },
  {
    id: 6,
    name: "A4",
    keyCode : 75,
  },
  {
    id: 7,
    name: "B4",
    keyCode : 76,
  },
  {
    id: 8,
    name: "C5",
    keyCode : 186,
  },
];

const row = document.querySelector(".row");
// const key = document.querySelectorAll(".key");

const createKey = ({ name }) => {
  const div = document.createElement("div");
  div.classList.add(
    "col",
    "border",
    "border-dark",
    "py-5",
    "key",
    "d-flex",
    "justify-content-center",
    "align-items-center"
  );
  div.setAttribute("sound", name);
  div.innerText = name;
  return div;
};

const play = (name) =>{
  const audio = new Audio("./sound/" + name + ".mp3");
  const el = document.querySelector("[sound = " + name + "]");
  // console.log(el);
  el.classList.add("active");
  setTimeout(() => el.classList.remove("active"), 200);
    audio.play();
}

sounds.forEach((sound) => {
  row.append(createKey(sound));
});

row.addEventListener("click", (event) => {
  if (event.target.classList.contains("key")) {
    const currentSound = event.target.getAttribute("sound");
    play(currentSound);
    // console.log(currentSound);
  }
  // console.log(event.target);
});

document.addEventListener("keyup",(event) =>{
  const current = sounds.find(({keyCode}) => keyCode === event.keyCode);
  if(current){
   play(current.name);
  }

})
