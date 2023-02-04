// console.log("Hello");

// const [a,b,...r] = [1,3,4,4,4,5,7,8,9,11]
// console.log(a);
// console.log(b);
// console.log(r);

// const {a,b} = {a : "aaa",b:"bbb"}
// console.log(a);
// console.log(b);

const arr = ["a","b","c","d","e","f",];
// const obj = {
//     brand : "apple",
//     model : "macbook pro",
//     spec : {cpu : "i7", ram : "16GB", ssd : "1TB"},
// };
// const j = '["a","b","c","d","e","f"]';
// const j2 = `{
//     "brand" : "apple",
//     "model" : "macbook pro",
//     "spec" : {"cpu" : "i7", "ram" : "16GB", "ssd" : "1TB"}
// }`;

// //json to js
// // console.log(typeof j2);
// console.log(JSON.parse(j)[2]);
// console.log(JSON.parse(j2).brand);

// console.log(JSON.stringify(arr));
// function run() {
// //     const req = new XMLHttpRequest();
// // req.open("GET","https://fakestoreapi.com/products/");
// // req.send();
// // req.addEventListener('load', (event) => {
// //     console.log(event.target.responseText);
// //     const data = JSON.parse(event.target.responseText);
// //     console.log(data);
// // });
// fetch("https://fakestoreapi.com/products/")
// .then(data => data.json())
// .then((json) => console.log(json));
// }

localStorage.setItem("myName","Oakka Soe");
localStorage.setItem("myAge", 28);

sessionStorage.setItem("nickname","Jerry");

document.cookie = "name=oakkasoe";
document.cookie = "laptop=acer";