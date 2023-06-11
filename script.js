//Уровень 1.1 задачника JavaScript

// Дано число. Проверьте, отрицательное оно или нет. Выведите об этом информацию в консоль

// const chekingNumber = (num) => {
//     if (num >= 0) {
//         console.log('число положительное')
//     } else {
//         console.log('число отрицательное')
//     }
// }

// chekingNumber(-1)

// Дана строка. Выведите в консоль длину этой строки.


// const lengthString = (string) => {
// console.log(string.length)
// }

// lengthString('hello')

// Дана строка. Выведите в консоль последний символ строки.

// const lastSimbolString = (string) => {
// const str = string.slice(-1)
// console.log(str)
// }

// lastSimbolString('hello')

//Дано число. Проверьте, четное оно или нет.
// const anEvenNumber = (num) => {
//     if (num % 2 === 0) {
//         console.log('число четное')
//     } else {
//     console.log('число нечетное')
//     }
// }
// anEvenNumber(5)

//Даны два слова. Проверьте, что первые буквы этих слов совпадают.

// const firstLetters = (letterOne, letterTwo) => {
//     const one = letterOne.slice(0,1)
//     const two = letterTwo.slice(0,1)
//     if(one === two){
//         console.log('буквы совпадают')
//     }else{
//         console.log('буквы не совпадают')
//     }
// }
// firstLetters('привет','пока')

//Дано слово. Получите его последнюю букву. Если слово заканчивается на мягкий знак, то получите предпоследнюю букву.

// const lastLetter = (word) => {
//     const letterOne = word.length - 1
//     const letterTwo = word.length - 2
//     if (word[letterOne] === 'ь') {
//         console.log(word[letterTwo])
//     } else {
//         console.log(word[letterOne])
//     }
// }
// lastLetter('плавь')


//Уровень 1.2 задачника JavaScript

//Дано число. Выведите в консоль первую цифру этого числа.

// const oneNumber=(num)=>{
//     console.log(num.toString().slice(0,1))
// }
// oneNumber(23)

//Дано число. Выведите в консоль последнюю цифру этого числа.

// const endNumber = (num) => {

//     console.log(num.toString().slice(-1))
// }

// endNumber(23)

//Дано число. Выведите в консоль сумму первой и последней цифры этого числа.

// const sumNumbers = (num) => {
//     const oneNum = num.toString().slice(0, 1)
//     const lastNum = num.toString().slice(-1)
//     console.log(Number(oneNum) + Number(lastNum))
// }
// sumNumbers(12)


//Дано число. Выведите количество цифр в этом числе.

// const lengthNumber =(num)=>{
//     console.log(num.toString().length)
// }

// lengthNumber(1234)


//Даны два числа. Проверьте, что первые цифры этих чисел совпадают.

// const coincidenceNumber = (oneNum, twoNum) => {
// const one = oneNum.toString().slice(0,1)
// const two = twoNum.toString().slice(0,1)
// if (one === two) {
//     console.log('числа совпадают')
// } else {
//     console.log('числа не совпадают')
// }

// }

// coincidenceNumber(23,2)

//Уровень 1.3 задачника JavaScript
//Дана строка. Если в этой строке более одного символа, выведите в консоль предпоследний символ этой строки

// const stringLastSumbol = (string) => {
// const sumbol = string.trim().slice(-1)
// console.log(sumbol)
// }
// stringLastSumbol('привет путник')

//Даны два целых числа. Проверьте, что первое число без остатка делится на второе.


// const wholeNumber = (oneNum, twoNum) => {
//     if (oneNum % twoNum === 0) {
//         console.log('делит')
//     } else {
//         console.log('Не делит')
//     }
// }

// wholeNumber(22,2)
