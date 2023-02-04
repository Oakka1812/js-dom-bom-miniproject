const result = document.getElementById("result");
const store = document.getElementById("store");
const clear = document.getElementById("clear");
const width = document.getElementById("width");
const breadth = document.getElementById("breadth");
const calculate = document.getElementById("calculate");
const records = document.getElementById("records");

const clearResult = () => result.innerText = null;

calculate.onclick = function() {
    // console.dir(width);
    const area = width.valueAsNumber * breadth.valueAsNumber;

    
    result.innerText = `width: ${width.value}ft * breadth: ${breadth.value}ft = ${area}sqft`;
    width.value = breadth.value = null;
    // width.valueAsNumber = breadth.valueAsNumber = 0


}

clear.onclick = () => clearResult();

store.onclick = () => {
    records.innerHTML += `<li>${result.innerText}</li>`;
    clearResult();
}