// задание 1
const greetPerson = () => {
    const sayName = (name) => {
        return `hi, i am ${name}`
    }
    return sayName
}
const greeting = greetPerson();
console.log(greeting('Pavel'));
console.log(greeting('Irina'));
// вывод в консоль
// hi, i am Pavel
// hi, i am Irina
// просто замыкане функции

// задание 2
let y = 'test';
const foo = () => {
    var newItem = 'hello';
    console.log(y);
}
foo();
console.log(newItem);
//вывол в консоль сообщение об ошибке
// Uncaught ReferenceError: newItem is not defined
//переменная не была объявлена, мы не можем получить доступ к перменным внутри функции
// связано с областью видемости функции


// задание 3
let y = 'test';
let test = 2;
const foo = () => {
    const test = 5;
    const bar = () => {
        console.log(5 + test);
    }
    bar()
}
foo();
// вывод в консоль
// 10
// внутри функции test переопределение значений переменной test

// задание 4
const bar = () => {
    const b = 'no test'
}
bar();
// вывод в консоль undefined
// так как функция ничего не делает и ничего не возрващает

// задание 5
const foo = (() => {
    console.log(b);
})();
const b = 'test';

// вывод в консоль ошибка Uncaught ReferenceError: b is not defined
// так как b еще не  определения
// если поменять местами то все работает
const b = 'test';
const foo = (() => {
    console.log(b);
})();
// вывод в консоль test
