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

// const eventNumber = (num) => {
//     const arr = []
//     for (let i = 0; i <= num; i++) {
//         if (i % 2 === 0) {
//             arr.push(i)
//         }
//     }
//     const newArr = arr.filter(item => item < 20)
//     console.log(newArr)
// }
// eventNumber(50)

// Дана некоторая строка:

// 'abcde'
// Переведите в верхний регистр все нечетные буквы этой строки. В нашем случае должно получится следующее:

// 'AbCdE'

// const apperString = (str) => {
//     console.log(str.toUpperCase())
// }
// apperString('abcde')

// Дана некоторая строка со словами:

// 'aaa bbb ccc'
// Сделайте заглавным первый символ каждого слова в этой строке. В нашем случае должно получится следующее:

// 'Aaa Bbb Ccc'

// const indexString = (str) => {
//     const arr1 = str.slice(0, 3).split(' ').toString()
//     let newStr = arr1[0].toUpperCase() + arr1.slice(1)
//     let finich1=newStr.split(' ')
//     const arr2 = str.slice(4, 7).split(' ').toString()
//     let newStr2 = arr2[0].toUpperCase() + arr2.slice(1)
//     let finich2=newStr2.split(' ')
//     const arr3 = str.slice(8, 11).split(' ').toString()
//     let newStr3 = arr3[0].toUpperCase() + arr3.slice(1)
//     let finich3=newStr3.split(' ')
//     const newArr=finich1.concat(finich2,finich3)
//     console.log(newArr)
// }
// indexString('aaa bbb ccc')

// const indexString = (str) => {
//     let arr = str.split(' ')
//     for (let i = 0; i < arr.length; i++) {
//         arr[i] = arr[i].charAt(0).toUpperCase() + arr[i].slice(1)
//     }
//     let newArr = arr.join(' ')
//     console.log(newArr)
// }
// indexString('aaa bbb ccc')

//Уровень 2.5 задачника JavaScript
// Дана некоторая строка, например, вот такая:

// '023m0df0dfg0'
// Получите массив позиций всех нулей в этой в строке.

// const indexString=(str)=>{
//     const arr=[]
//     for (let i = 0; i < str.length; i++) {
//         if(str[i] === '0'){
//             arr.push(i)
//         }
//     }
//     console.log(arr)
// }

// indexString('023m0df0dfg0')

// Дана некоторая строка:

// 'abcdefg'
// Удалите из этой строки каждый третий символ. В нашем случае должно получится следующее:

// 'abdeg'

// const deleteIndex = (str) => {
//     let newStr = ''
//     for (let i = 0; i < str.length; i++) {
//         if ((i + 1) % 3 !== 0) {
//             newStr +=str[i]
//       }
//     }
//     console.log(newStr)
// }
// deleteIndex('abcdefg')

// Дан некоторый массив, например, вот такой:

// [1, 2, 3, 4, 5, 6]
// Поделите сумму элементов, стоящих на четных позициях, на сумму элементов, стоящих на нечетных позициях.

// const newArr = (arr) => {
//     const oneArr = []
//     const twoArr = []

//     for (let i = 0; i < arr.length; i++) {
//         if (arr[i] % 2 === 0) {
//             oneArr.push(arr[i])
//         } else {
//             if (arr[i] % 2 !== 0) {
//                 twoArr.push(arr[i])
//             }
//         }
//     }
//     const newArr = oneArr.map((el,i)=> Math.round(el / twoArr[i])) 
//     console.log(newArr)
// }
// newArr([1, 2, 3, 4, 5, 6])

//Уровень 2.6 задачника JavaScript
//Дана некоторая строка с буквами и цифрами. Получите массив позиций всех цифр из этой строки

// const indexString = (str) => {
//     const arr = []
//     for (let i = 0; i < str.length; i++) {
//         if (!isNaN(str[i])) {
//             arr.push(i)
//         }
//     }
//     console.log(arr)
// }

// indexString('123ddd123')

// Дан массив с некоторыми числами, например, вот такой:

// [123, 456, 789]
// Напишите код, который перевернет числа в этом массиве по следующему принципу:

// [321, 654, 987]

const reversArrey = (arr) => {
    const result = arr.map(num => num.toString().split('').reverse().join(''))
    console.log(result)
}
reversArrey([123, 456, 789])

// const arr = [123, 456, 789];
//  const reversedArr = arr.map(num => parseInt(num.toString().split('').reverse().join('')));
//   console.log(reversedArr);
  // [321, 654, 987]