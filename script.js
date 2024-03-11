document.addEventListener("DOMContentLoaded", (event) => {
    renderColum();
});
  

function generateUniqueArray(min, max) {
    let array = [];

    while (array.length < max - min) {
        let randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;
        if (!array.includes(randomNumber)) {
            array.push(randomNumber);
        }
    }
    return array;
}


const uniqueArray = generateUniqueArray(0, 700);
console.log(uniqueArray);

const divColum = document.getElementById("colums");

const columnsDiv = document.getElementById("colums");
uniqueArray.forEach(item => {
    const columnDiv = document.createElement("div");
    columnDiv.classList.add("col");
    columnDiv.style.height = item + "px"; // Высота берётся из элемента массива uniqueArray
    columnsDiv.appendChild(columnDiv);
});
