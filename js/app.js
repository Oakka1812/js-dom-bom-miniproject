
// const run = (x,y) => {
//     window.alert(typeof x);
//     window.alert(typeof y);
//     return parseFloat(x) + parseFloat(y);
// }

// const inputX = window.prompt("Input X...");
// const inputY = window.prompt("Input Y...");
// window.alert(run(inputX,inputY));

// const answer = window.confirm("ထမင်းစားပြီးပြီလား ? ....");
// window.alert(answer ? "စားပြီးပြီ..." : "မစားရသေးဘူး...");

// const h1 = document.getElementsByTagName("h1")[0];

// console.dir(h1);
// console.log(h1.style.color);
// console.log(h1.title);
// console.log(h1.innerText);
// console.log(h1.innerHTML);

// const h1 = document.querySelector("h1");

// h1.addEventListener('mouseenter', () => console.log("Mouse enter event"));
// h1.addEventListener('mouseout', () => console.log("Mouse out event"));
 //h1.addEventListener('mousemove', e => console.log(e,"Mouse move event"));

// const input = document.querySelector("input");

// input.addEventListener('keydown', () => console.log("Key down event"));
// input.addEventListener('keypress', () => console.log("Key press event"));
// input.addEventListener('keyup', () => console.log("Key up event"));

// const form = document.querySelector("form");

// form.addEventListener('submit', () => console.log("submit event"));

document.querySelector("a").addEventListener('click', e => {
    e.preventDefault()
    console.log(e);
});