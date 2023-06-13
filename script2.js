//Уровень 2.1 задачника JavaScript
//Дана некоторая строка. Найдите позицию первого нуля в строке.
// const oneNull = (str) => {
//     const index = 0
//     const result = str[index]
//     console.log(result)
// }
// oneNull('hello')

// Выведите в консоль все числа в промежутке от 1 до 1000, сумма первой и второй цифры которых равна пяти.

// const summ = (num) => {
//     const arr = []
//     for (let i = 0; i <= num; i++) {
//         if (i % 5 === 0) {
//             arr.push(i)
//         }
//     }
//     console.log(arr)
// }
// summ(100)

//Дан массив. Удалите из него элементы с заданным значением.


// const filterArr=(arr)=>{
//     const result = arr.filter((item)=> item <= 20)
//     console.log(result)
// }

// filterArr([0, 5, 10, 15, 20, 25, 30, 35])

// Дан некоторый массив, например, вот такой:

// [1, 2, 3, 4, 5, 6]
// Найдите сумму первой половины элементов этого массива.

// const sliseArr = (arr) => {
// const slise=arr.slice(0,3).reduce((acc,item)=>{
//     return acc + item
// },0)
// console.log( slise)
// }
// sliseArr([1, 2, 3, 4, 5, 6])

//Уровень 2.2 задачника JavaScript
//Дан массив с числами. Подсчитайте количество отрицательных чисел в этом массиве.

// const negativeArray=(arr)=>{
//     const result=arr.filter((item)=> item < 0).length
//     console.log(result)
// }

// negativeArray([-1,2,-3,4,-5,6,-7])

//Дан массив с числами. Оставьте в нем только положительные числа.

// const smileArr=(arr)=>{
//     const newArr =arr.filter((item)=> item > 0)
//     console.log(newArr)
// }
// smileArr([-1,2,-3,4,-5,6,-7])

//Дана строка. Удалите предпоследний символ из этой строки.

// const addsumbol = (str) => {
// const add = str.slice(-1)
// console.log(add)
// }
// addsumbol('hello')

// Дан некоторый массив, например, вот такой:

// [1, 2, 3, 4, 5, 6]
// Поделите сумму первой половины элементов этого массива на сумму второй половины элементов.

// const arrSlise=(arr)=>{
//     const arr1=arr.slice(0,arr.length/2).reduce((acc,item)=> acc +item,0)
//     const arr2=arr.slice(arr.length/2).reduce((acc,item)=> acc +item,0)
//     const sum = Math.ceil(arr1 / arr2)
//     console.log(sum)
// }
// arrSlise([1, 2, 3, 4, 5, 6])

//Даны два слова. Проверьте, что последняя буква первого слова совпадает с первой буквой второго слова.

// const stringResult = (str) => {
//     const string1 = str.split(' ')
//     const [arr1, arr2] = string1
//     if (arr1.slice(-1) === arr2.slice(0,1)) {
//         console.log('совпадают')
//     } else {
//         console.log('не совпадают')
//     }
// }
// stringResult('привет том')

//Дана некоторая строка. Найдите позицию третьего нуля в строке.

// const nullString = (str) => {
//     let nullStr = 0
//     const arr = []
//     for (let i = 0; i < str.length; i++) {
//         if (str[i] === '0') {
//             nullStr++
//             if(nullStr === 3){
//                 arr.push(i)
//             }
//         }
//     }
//     console.log(arr)
// }

// nullString('012301230')

//Даны числа, разделенные запятыми:

// '12,34,56'
// Найдите сумму этих чисел.

// const sumNumbers = (str) => {
// const result=str.split(',').map(Number)
// const arr=result.reduce((acc,item)=>acc + item,0)
// console.log(arr)
// }
// sumNumbers('12,34,56')

// Дана дата в следующем формате:

// '2025-12-31'
// Преобразуйте эту дату в следующий объект:

// {
// 	year: '2025',
// 	month: '12',
// 	day: '31',
// }

// const data = (num) => {
//     const [year, month, day] = num.split('-')
//     const dateObj = { year, month, day };
//     console.log(year, month, day)
// }

// data('2025 - 12 - 31')

//Дана некоторая строка с буквами и цифрами. Получите позицию первой цифры в этой строке.

// const searchNumber=(srt)=>{
//     const numEl = parseInt(srt.match(/\d+/))
//     console.log(numEl)
// }

// searchNumber('asdasdas2')

//Дан объект с ключами и значениями. Запишите в первый массив ключи объекта, а во второй - значения.
// let user = {
//     name: "John",
//     age: 30
//   };
// const values = (obj) => {
// const key=Object.keys(obj)
// const values=Object.values(obj)
// console.log(key)
// console.log(values)
// }
// values(user)

//Дано число. Выведите в консоль количество четных цифр в этом числе.