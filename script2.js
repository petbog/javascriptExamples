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

// const reversArrey = (arr) => {
//     const result = arr.map(num => num.toString().split('').reverse().join(''))
//     console.log(result)
// }
// reversArrey([123, 456, 789])

// const arr = [123, 456, 789];
//  const reversedArr = arr.map(num => parseInt(num.toString().split('').reverse().join('')));
//   console.log(reversedArr);
// [321, 654, 987]

//   Дана некоторая строка с числом:

// '1234567'
// Отделите тройки цифр пробелами, начиная с конца числа. В нашем случае должно получится следующее:

// '1 234 567'

// const replaceStrin = (str) => {
//   const result = str.replace(/\B(?=(\d{3})+(?!\d))/g, " ")
//   console.log(result)
// }
// replaceStrin('1234567')

// Дана некоторая строка:

// 'AbCdE'
// Смените регистр букв этой строки на противоположный. В нашем случае должно получится следующее:

// 'aBcDe'

// const caseString = (str) => {
//   let newStr = ''
//   for (let i = 0; i < str.length; i++) {
//     if (str[i] == str[i].toLowerCase()) {
//       newStr += str[i].toUpperCase()
//     } else {
//       if (str[i] == str[i].toUpperCase()) {
//         newStr += str[i].toLowerCase()
//       }
//     }
//   }
//   return newStr;
// }
// console.log(caseString('AbCdE'))

// Дан некоторый массив с числами, например, вот такой:

// [1, 2, 3, 4, 5, 6]
// Слейте пары элементов вместе:

// [12, 34, 56]

// const arreySort = (arr) => {
//   const newArr = []
//   for (let i = 0; i < arr.length; i += 2) {
//     newArr.push(`${arr[i]}${arr[i + 1]}`)
//   }

//   return newArr
// }
// console.log(arreySort([1, 2, 3, 4, 5, 6]))

// Дана некоторая строка со словами:

// 'aaa bbb ccc eee fff'
// Сделайте заглавным первый символ каждого второго слова в этой строке. В нашем случае должно получится следующее:

// 'aaa Bbb ccc Eee fff'

// const stringbig = (str) => {
//     const newStr = str.split(' ')
//     for (let i = 1; i < newStr.length; i += 2) {
//         newStr[i] = newStr[i][0].toUpperCase() + newStr[i].substring(1)
//     }

//     console.log(newStr.join(''))
// }

// console.log(stringbig('aaa bbb ccc eee fff'))
// 'a bc def ghij'
// Переведите в верхний регистр все подстроки, в которых количество букв меньше или равно трем. В нашем случае должно получится следующее:

// 'A BC DEF ghij'

// const strUpperCase = (str) => {
//     let newStr = str.split(' ')
//     for (let i = 0; i < newStr.length; i ++) {
//         if(newStr[i].length <= 3){
//             newStr[i]=newStr[i].toUpperCase()
//         }

//     }
//     console.log(newStr)
// }

// strUpperCase('a bc def ghij')

//Дан символ. Узнайте, в каком регистре этот символ - в верхнем или нижнем.

// const strCase = (str) => {
//     for (let i = 0; i < str.length; i++) {
//         if (str[i] === str[i].toUpperCase()) {
//             console.log('верхний регистр')
//         } else  if (str[i] === str[i].toLowerCase()) {
//                 console.log('нижний регистр')
//             }
//         }
//     }


// strCase('D')
// Дано некоторое число, например, такое:

// 123789
// Удалите из этого числа все нечетные цифры. В нашем случае получится такой результат:

// 28

// const eventNumber = (number) => {
//     let arr = []
//     for (let i = 0; i < number.length; i++) {
//         if (number[i] % 2 === 0) {
//             arr.push(number[i])
//         }
//     }
//     console.log(arr.join(''))
// }
// eventNumber('123789')

//Дана строка с буквами. Проверьте, что в этой строке не более двух заглавных букв.

// const strCase = (str) => {
//     let count = 0
//     for (let i = 0; i < str.length; i++) {
//         if (str[i] === str[i].toUpperCase()) {
//             count++
//         }
//     }
//     if(count >= 2){
//         console.log('больше')
//     }else{
//         console.log('меньше')
//     }
// }
// strCase('ааа')

// Дана некоторая строка:

// '1 22 333 4444 22 5555 1'
// Удалите из этой строки все подстроки, в которых количество символов больше трех. В нашем случае должно получится следующее:

// '1 22 333 22 1'

// const deleteNumber = (str) => {
//     const result =str.split(' ').filter((item)=> item.length <= 3).toString()
//         console.log(result)
// }
// deleteNumber('1 22 333 4444 22 5555 1')

// Даны два массива:

// let arr1 = [1, 2, 3];
// let arr2 = ['a', 'b', 'c'];
// Слейте эти массивы в новый массив следующим образом:

// [1, 2, 'a', 'b', 'c', 3]

// const twoArr=(arr1,arr2)=>{
//     const result=[...arr1.slice(0,2),...arr2,...arr1.slice(2)]
//     console.log(result)
// }
// twoArr([1, 2, 3],['a', 'b', 'c'])

//Уровень 2.9 задачника JavaScript

// 123456
// Найдите сумму пар цифр этого числа. В нашем случае имеется ввиду следующее:

// 12 + 34 + 56

// const sumNumbers = (num) => {
//     const num1 = Number(num.toString().split('').slice(0, 2).reduce((acc, item) => acc + item, []))
//     const num2 = Number(num.toString().split('').slice(2, 4).reduce((acc, item) => acc + item, []))
//     const num3 = Number(num.toString().split('').slice(4, 6).reduce((acc, item) => acc + item, []))
//     let result = num1 + num2 + num3
//     console.log(result)
// }
// sumNumbers(123456)

// Дан массив с числами:

// [1, 2, 3, 4, 5]
// Выведите в консоль элементы этого массива в обратном порядке.

// const reversArr = (arr) => {
//     const result = arr.reverse()
//     console.log(result)

// }

// reversArr([1, 2, 3, 4, 5])


//Дана строка с буквами и цифрами. Проверьте, что в этой строке не более трех букв.

// const stringTriger = (str) => {
//     let count = 0
//     const letters=/[a-zA-Z]/
//     for (let i = 0; i < str.length; i++) {
//         if (letters.test(str[i])) {
//             count++
//         }
//     }
//     if(count >= 3){
//         console.log('больше')
//     }
// }
// stringTriger('dsfdsaff1263')

//Дано число. Получите первую четную цифру с конца этого числа.

// const reversNumber = (num) => {
//     const arr = []
//     const result = num.toString().split('').reverse()
//     for (let i = 0; i < result.length; i++) {
//         if (result[i] % 2 === 0) {
//             arr.push(result[i])
//         }
//     }
//     console.log(arr.slice(0,1))
// }
// reversNumber(28)

// Дана некоторая строка:

// 'abcde abcde abcde'
// Замените в ней первый символ каждого слова на '!':

// '!bcde !bcde !bcde'

//разобраться
// const stringКeplacement = (str) => {
//     let replace = ''
//     for (let i = 0; i < str.length; i++) {
//         if (i === 0 || str[i - 1] === ' ') {
//             replace += '!'
//         } else {
//             replace +=str[i]
//         }

//     }
//     console.log(replace)
// }
// stringКeplacement('abcde abcde abcde')

// Дан массив с числами:

// [1, 2, 3, 3, 4, 5]
// Проверьте, что в этом массиве есть два одинаковых элемента подряд.

// const cloneNumbers = (arr) => {
//     for (let i = 0; i < arr.length; i++) {
//         if (arr[i - 1] === arr[i]){
//             console.log(arr[i])
//         }

//     }
// }

// cloneNumbers([1, 2, 3, 3, 4, 5])
