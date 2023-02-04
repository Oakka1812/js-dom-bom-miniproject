// console.log(window.innerWidth);
// console.log(window.innerHeight);
// console.log(window.outerWidth);
// console.log(window.outerHeight);


// const exampleModal = new bootstrap.Modal("#exampleModal");

// const h75 = 0.75 * (document.body.getBoundingClientRect().height - window.innerHeight);

// window.addEventListener('scroll', () =>  {
//     console.log(window.scrollY);
//     if(window.scrollY > h75){
//         exampleModal.show();
//     }
// })

// window.addEventListener('online', () => {
//     console.log("Online!!!");
// })

// window.addEventListener('offline', () => {
//     console.log("Offline!!!");
// })
const clock = document.querySelector("#clock");
const startClock = document.querySelector("#start");
const stopClock = document.querySelector("#stop");
const to = document.querySelector("#to");

const run = () => {
    const date = new Date();
    // console.log(date.getHours() + ":" + date.getMinutes() + ":" + date.getSeconds());
    clock.innerHTML = date.getHours() + ":" + date.getMinutes() + ":" + date.getSeconds();
}
// let runClock;
// startClock.addEventListener('click', () => {
//     runClock = setInterval(run,1000);   
// });

// //  console.log(typeof(runClock));
// stopClock.addEventListener('click', () => {
//     clearInterval(runClock);
// });

// function test(start,stop){
//     let i = start;
// const x = setInterval(() => {
//     console.log("Hello", ++i);
//     if(i === stop){
//         clearInterval(x);
//     }
// }, 1000);
// }

startClock.addEventListener('click', () => {
    scrollTo(0, to.getBoundingClientRect().y);
})
 
