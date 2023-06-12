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

//Уровень 1.4 задачника JavaScript
//Выведите в консоль все целые числа от 1 до 100.
// const number =(num)=>{
//     for (let i = 0; i < num; i++) {
//         console.log(element)
//     }
// }
// number(100)

//Выведите в консоль все целые числа от -100 до 0.

// const negativeNumber = (num) => {
//     for (let i = num; i <= 0; i++) {
//         console.log(i)
//     }
// }

// negativeNumber(-100)

//Выведите в консоль все целые числа от 100 до 1.

// const wholeNumbers = (num) => {
//     for (let i = num; i >= 0; i--) {
//         console.log(i)
//     }
// }

// wholeNumbers(100)

//Выведите в консоль все четные числа из промежутка от 1 до 100.

// const evenNumbers = (num) => {
//     for (let i = 1; i <= num; i++) {
//         if (i % 2 === 0) {
//             console.log(i)
//         }
//     }
// }

// evenNumbers(100)


//Выведите в консоль все числа кратные трем в промежутке от 1 до 100.

// const threeNumbers = (num) => {
//     for (let i = 0; i <= num; i++) {
//         if (i % 3 === 0) {
//             console.log(i)
//         }
//     }
// }
// threeNumbers(100)

//Уровень 1.5 задачника JavaScript

//Найдите сумму всех целых чисел от 1 до 100.

// const sumNumbers = (num) => {
//     let sum = 0
//     for (let i = 0; i <= num; i++) {
//         sum += i
//         console.log(sum)
//     }
// }

// sumNumbers(100)

//Найдите сумму всех целых четных чисел в промежутке от 1 до 100.
// const Number = (num) => {
//     let sum = 0
//     for (let i = 0; i <= num; i++) {
//         if (i % 2 === 0) {
//             sum += i
//         }
//     }
// console.log(sum)
// }

// Number(100)

//Найдите сумму всех целых нечетных чисел в промежутке от 1 до 100.
// const eventNumber = (num) => {
//     let sum = 0
//     for (let i = 0; i <= num; i++) {
//         if (i % 3 === 0) {
//             sum += i
//         }
//     }
// console.log(sum)
// }

// eventNumber(100)

//Даны два целых числа. Найдите остаток от деления первого числа на второе.

// const remainsNumbers = (oneNum, twoNum) => {
// console.log(oneNum % twoNum)
// }

// remainsNumbers(12,5)

//Дана некоторая строка. Переберите и выведите в консоль по очереди все символы с конца строки.


// const stringArrey = (str) => {
//     for (let i = str.length - 1; i >= 0; i--) {
//         console.log(str.charAt(i))

//     }
// }

// stringArrey('привет богдан')

//Уровень 1.6 задачника JavaScript

//Дан массив с числами. Найдите сумму квадратов элементов этого массива.

// const arrySum = (arr) => {
//     const sum = arr.reduce((acc, item) => {
//         return acc + item * item
//     }, 0)
//     console.log(sum)
// }

// arrySum([1, 2, 3, 4])

//Дан массив с числами. Найдите сумму квадратных корней элементов этого массива.

// const arrThroy = (arr) => {
//     let sum = 0
//     for (let i = 0; i < arr.length; i++) {
//         sum += Math.sqrt(arr[i]) вычисляет квадратный корень 

//     }
//     console.log(sum)
// }

// arrThroy([1, 2, 3, 4])

//Дан массив с числами. Найдите сумму положительных элементов этого массива.


// const sumArray = (arr) => {
// let sum = 0
// for (let i = 0; i < arr.length; i++) {
//     if (arr[i] > 0) {
//         sum += arr[i]
//     }
// } решение через цикл
// let result = arr.filter((item)=> item > 0).reduce((acc,item)=>{
//     return acc + item
// },0) решение через filter и reduce
//     console.log(result)


// }
// sumArray([-1, 2, -3, 4])

//Дан массив с числами. Найдите сумму тех элементов этого массива, которые больше нуля и меньше десяти.

// const arrSum = (arr) => {
//     let result = 0;
//     for (let i = 0; i < arr.length; i++) {
//       if (arr[i] > 0 && arr[i] < 10) {
//         result += arr[i];
//       }
//     }
//     const result = arr.filter((item) => item >= 0 && item <= 10).reduce((acc,item)=>{
//         return acc + item
//     },0)
//     console.log(result)
// }

// arrSum([20, -5, 5, -2, 4, 30])

//Уровень 1.7 задачника JavaScript
//Получите массив букв этой строки.
// 'abcde'

// const arrString = (str) => {
// const result = str.split('')
// console.log(result)
// }
// arrString('abcde')

//Получите массив цифр этого числа.
//12345

// const arrNumber=(num)=>{
//     const result = num.toString().split('')
//     console.log(result)
// }

// arrNumber(12345)

//Дано некоторое число:12345Переверните его:

// const reversNumber = (num) => {
//     const result = Number(num.toString().split('').reverse().join(''))
//     console.log(result)
// }
// reversNumber(12345)

//Дано некоторое число:
// 12345
// Найдите сумму цифр этого числа.

// const sumNumbers = (num) => {
//     const result = num.toString().split('').reduce((acc,item)=>{
//             return acc + parseInt(item)
//         },0)
//     console.log(result)

// }
// sumNumbers(12345)

//Уровень 1.8 задачника JavaScript
//Заполните массив целыми числами от 1 до 10.

// const arrNumbers=(num)=>{
//     const arr =[]
//     for (let i = 1 ; i < num ; i++) {
//         arr.push(i)
//     }
//     console.log(arr)
// }
// arrNumbers(10)

//Заполните массив четными числами из промежутка от 1 до 100.

// const eventNumbers = (num) => {
//     const arr = []
//     for (let i = 0; i < num; i++) {
//         if (i % 2 === 0) {
//             arr.push(i)
//         }
//     }
//     console.log(arr)
// }

// eventNumbers(100)

//Дан массив с дробями:

// [1.456, 2.125, 3.32, 4.1, 5.34]
// Округлите эти дроби до одного знака в дробной части.

// const fractionNumbers=(arr)=>{
//     const result = arr.reduce((acc,item)=>{
//         return acc + Math.round(item)
//     },[])
//     console.log(result)
// }
// fractionNumbers([1.456, 2.125, 3.32, 4.1, 5.34])

//Уровень 1.9 задачника JavaScript
//Дан массив со строками. Оставьте в этом массиве только те строки, которые начинаются на http://.

// const arrString=(arr)=>{
// const result = arr.filter((item)=> item.startsWith('http://'))
// console.log(result)
// }
// arrString(['http://5954984','asdasd'])

//Дан массив со строками. Оставьте в этом массиве только те строки, которые заканчиваются на .html.

// const endString = (arr) => {
// const result = arr.filter((item)=>item.endsWith('.html'))
// console.log(result)
// }

// endString(['dsadasdasd.html','asdasdasd'])

//Дан массив с числами. Увеличьте каждое число из массива на 10 процентов.

// const interestArray = (arr) => {
//     const interest = 1.1
//     const result = arr.map(item=> item * interest)
//     console.log(result)
// }

// interestArray([5,6])

//Уровень 1.10 задачника JavaScript