function sumInput () {
let arr = [];
let sum = 0;
while (true) {
    let elem = prompt("Введите элемент массива");
    if (elem === "" || elem === null || !isFinite(elem)) break;
    sum += +elem;
    arr.push(+elem);
}
arr.sort((a, b) => a - b);
console.log("Отсортированный по возрастанию массив: ", arr);
console.log("Сумма элементов массива: ", sum);
};
sumInput();