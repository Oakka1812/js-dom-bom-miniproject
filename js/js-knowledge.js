//const a = 5;
//const b = "oakka";

// const af = () => {
//     const x = 10;
//     const y = 20;
//     const z = x + y;
//     return "this is af " + z;
// }

// function fs() {
//     const j = "oksosks";
//     const k = "sssss";
//     return "this is fs " + j + k;
// }

// af();
// fs();

function run() {
  const p = new Promise((resolve, reject) => {
    setTimeout(() => {
      const num = Math.floor(Math.random() * 10);
      if (num >= 5) {
        resolve(num);
      } else {
        reject(num);
      }
    });
  });
  return p;
}
//console.log(p);
//for true
//p.then((data) => console.log("success",data));
//for false
//p.catch((data) => console.log("fail",data));

// const f = fetch("https://dummyjson.com/products/2");
// console.log(f);
// f.then((data) => data.json());
// f.then((json) => console.log(json));

// async function go(){
//     const product1 = await fetch("https://dummyjson.com/products/1");
//     const response1 = await product1.json();
//     console.log(response1);

//     const product2 = await fetch("https://dummyjson.com/products/2");
//     const response2 = await product2.json();
//     console.log(response2);

//     const product3 = await fetch("https://dummyjson.com/products/3");
//     const response3 = await product3.json();
//     console.log(response3);

//     const product4 = await fetch("https://dummyjson.com/products/4");
//     const response4 = await product4.json();
//     console.log(response4);

//     const product5 = await fetch("https://dummyjson.com/products/5");
//     const response5 = await product5.json();
//     console.log(response5);

//     const product6 = await fetch("https://dummyjson.com/products/6");
//     const response6 = await product6.json();
//     console.log(response6);
// };
//go();

const btn = document.querySelector("button");

// const openUploader = () => {
//     const openFile = showOpenFilePicker(
//         {
//             types: [
//               {
//                 description: 'Images',
//                 accept: {
//                   'image/*': ['.png', '.gif', '.jpeg', '.jpg']
//                 }
//               },
//             ],
//             excludeAcceptAllOption: true,
//             multiple: false
//           }
//     );
//     console.log(openFile);
//     const file = openFile.then((data) => data[0].getFile());
//     file.then((data) => console.log(data));
// }

const openUploader = async () => {
    const openFile = await showOpenFilePicker(
        {
            types: [
              {
                description: 'Images',
                accept: {
                  'image/*': ['.png', '.gif', '.jpeg', '.jpg']
                }
              },
            ],
            excludeAcceptAllOption: true,
            multiple: false
          }
    );
    console.log(openFile);
    const file = await openFile[0].getFile();
    console.log(file);
    // file.then((data) => console.log(data));
}

btn.addEventListener('click', openUploader);


