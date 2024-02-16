let wrapper = document.querySelector('.wrapper')
// Записать данные в локальое хранилище
localStorage.setItem('key', `url(../5-28-38/2284_0602.jpg)`)
// Получить данные из локального хранилища
//  (2)
localStorage.setItem('a', 8)
localStorage.setItem('b', 567)
localStorage.setItem('c', 459)

let sum = +localStorage.getItem('a') + +localStorage.getItem('b') + +localStorage.getItem('c')
console.log(sum)
localStorage.setItem('Thousandthurtyfour', sum)

localStorage.setItem('ac', 422)
let sum2 = +localStorage.getItem('ac') + +localStorage.getItem('b') + +localStorage.getItem('c')
console.log(sum2)
localStorage.setItem('Thousandfourhundredfourtyeight', sum2)
let mountainSum = +localStorage.getItem('Thousandthurtyfour') + +localStorage.getItem('Thousandfourhundredfourtyeight')
console.log(mountainSum)
let artic = document.createElement('p')
artic.classList = ('ao360')
artic.textContent = mountainSum + ' Улыбайся жизни'
wrapper.appendChild(artic)
let tim = localStorage.getItem('tim');

console.log(tim);

// метод Date.now(), возвращающий текущую метку времени.
// количество миллисекунд с 1 января 1970 года

if (tim === null) {
    let now = Date.now();
    localStorage.setItem('tim', now);
}

localStorage.setItem('key', '1');
let value1 = localStorage.getItem('key');

console.log(value1);

localStorage.setItem('key', '2');
value1 = localStorage.getItem('key');

console.log(value1);

// Удалить данные из LS
// localStorage.removeItem('a');

// Сделайте счетчик обновления страницы. Пусть счетчик обнуляется после того, как дойдет до 10.

// localStorage.setItem('count', +localStorage.getItem('count') + 1);
let count = +localStorage.getItem('count') + 1

if (count > 27) {
    count = 0;
    localStorage.clear();
}
localStorage.setItem('count', count);
let ryter = document.createElement('p')
ryter.textContent = `Вы ${count} раз обновили страницу`
wrapper.appendChild(ryter)
console.log()

// Количество записей в LS
console.log(`Количество записей в LS ${localStorage.length}`)

// Получение ключа по номеру
let key = localStorage.key(3);
console.log(key)
let value = localStorage.getItem(key);
console.log(value)

// Перебор хранилища по индексам
for (let i = 0; i < localStorage.length; i++) {
    let key = localStorage.key(i);
    let value = localStorage.getItem(key);
    console.log(value);
}
// Получить массив ключей и значение хранилищя
const keys = Object.keys(localStorage);
const values = Object.values(localStorage);

console.log(`Массив ключей`, keys);
console.log(`Массив значений`, values);

// Хранение структур в LS
let arr = [1, 2, 3, 4, 5]

localStorage.setItem('arr', JSON.stringify(arr));