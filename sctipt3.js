//Уровень 3.1 задачника JavaScript
//Дано некоторое число. Проверьте, что цифры этого числа расположены по возрастанию.

// const numberQueue = (num) => {
//     for (let i = 0; i < num.length; i++) {
//         if (num[i] <= num[i - 1]) {
//             console.log('не по возврастанию');
//             return false;
//         }
//     }
//     console.log('по возврастанию');
//     return true;

// }
// numberQueue(1234)

//Дан массив:

// [1, '', 2, 3, '', 5]
// Удалите из массива все пустые строки.

// const numberSort = (arr) => {
//     // const arr1 = []
//     // for (let i = 0; i < arr.length; i++) {
//     //     if (arr[i] !== '') {
//     //         arr1.push(arr[i])
//     //     }

//     // }
//     // console.log(arr1)
//     //или так
//     const arr1 =arr.filter((item) => item !== '')
//     console.log(arr1)
// }
// numberSort([1, '', 2, 3, '', 5])

// Дан массив:

// [
// 	[2, 1, 4, 3, 5],
// 	[3, 5, 2, 4, 1],
// 	[4, 3, 1, 5, 2],
// ]
// Отсортируйте элементы в каждом подмассиве.

// const arrSort=(arr)=>{
//     const result = arr.map(item => item.sort())
//     console.log(result)
// }

// arrSort(
//     [
//         [2, 1, 4, 3, 5],
//         [3, 5, 2, 4, 1],
//         [4, 3, 1, 5, 2],
//     ]
// )

// Даны два массива:

// let arr1 = [1, 2, 3];
// let arr2 = [1, 2, 3, 4, 5];
// Удалите из большего массива лишние элементы с конца так, чтобы длины массивов стали одинаковыми.

// const sliceArr=(arr)=>{
//     const result =arr.slice(0,3)
//     console.log(result)
// }
// sliceArr([1, 2, 3, 4, 5])

//Уровень 3.2 задачника JavaScript

//Выведите в консоль все числа в промежутке от 10 до 1000, у которых предпоследняя цифра четная.

// const evenNumber=(min,max)=>{
//     for (let i = min; i < max; i++) {
//         const floor = Math.floor(i / 10) % 10
//         if(floor % 2 === 0){
//             console.log(floor)
//         }
//     }
// }

// evenNumber(10,100)

//Дан массив. Удалите из него каждый пятый элемент.

// const arrDelete = (arr) => {
//     const result = arr.filter(i => (i % 5))
//     console.log(result)
// }
// arrDelete([1, 2, 3, 4, 5, 6,7,8,9,10])

// Дана некоторая переменная с числом:

// let num = 5;
// Сделайте строку, содержащую столько нулей, сколько указано в переменной. В нашем случае получится такая строка:

// '00000'

// const nullPoint = (num) => {
//     let repeatNum = '0'.repeat(num)
//     console.log(repeatNum)
// }

// nullPoint(5)

// Дана некоторая строка со словами:

// 'aaa bbb ccc eee fff'
// Удалите из этой строки каждое второе слово. В нашем случае должно получится следующее:

// 'aaa ccc fff'

// const stringFilter = (str) => {
//     const result = str.split(' ').filter((_,i) => (i % 2 === 0)).join()
//     console.log(result)
// }
// stringFilter('aaa bbb ccc eee fff')

// Дан массив:

// [
// 	[1, 2, 3],
// 	[4, 5, 6],
// 	[7, 8, 9],
// ]
// Найдите сумму элементов этого массива.


// const summArr = (arr) => {
//     const result = arr.map(item => item.reduce((acc, item) => acc + item, 0))
//     const totalSum=result.reduce((acc,item)=> acc +item,0)
//     console.log(totalSum)
// }
// summArr([
//     [1, 2, 3],
//     [4, 5, 6],
//     [7, 8, 9],
// ])

//Уровень 3.3 задачника JavaScript
//Дан массив со словами. Удалите из него слова, состоящие более чем из трех символов.

// const lengthString = (arr) => {
//     for (let i = 0; i < arr.length; i++) {
//         if (arr[i].length <= 3) {
//             console.log(arr[i])
//         }
//     }
// }

// lengthString(['привет','пока','бездарь','да'])

// Дано некоторое число:

// 1357
// Проверьте, что все цифры этого числа являются нечетными.

// const noEventNumber = (num) => {
//     const totalSum = []
//     const numArr = num.toString().split('')
//     for (let i = 0; i < numArr.length; i++) {
//         if (numArr[i] % 2 !== 0) {
//             totalSum.push(numArr[i])
//         }
//     }
//     console.log(totalSum.toString())
// }
// noEventNumber(1357)

// Дано некоторое слово:

// 'abcba'
// Проверьте, что это слово читается одинаково с любой стороны.

// const reversString = (str) => {
//     const result=str.split('').reverse().toString().replace(/[\s.,%]/g, '')
//     if(str === result){
//         console.log('один в один')
//     }
// }

// reversString('abcba')

// Дан массив:

// [
// 	[
// 		[11, 12, 13],
// 		[14, 15, 16],
// 		[17, 17, 19],
// 	],
// 	[
// 		[21, 22, 23],
// 		[24, 25, 26],
// 		[27, 27, 29],
// 	],
// 	[
// 		[31, 32, 33],
// 		[34, 35, 36],
// 		[37, 37, 39],
// 	],
// ]
// Найдите сумму элементов этого массива.

// const summArr = (arr) => {
//     const result = arr.flat(Infinity)
//     const totalSum = result.reduce((acc, item) => acc + item, 0)
//     console.log(totalSum)
// }
// summArr([
//     [
//         [11, 12, 13],
//         [14, 15, 16],
//         [17, 17, 19],
//     ],
//     [
//         [21, 22, 23],
//         [24, 25, 26],
//         [27, 27, 29],
//     ],
//     [
//         [31, 32, 33],
//         [34, 35, 36],
//         [37, 37, 39],
//     ],
// ])

//Выведите в консоль все числа в промежутке от 10 до 1000, у которых первая цифра четная.

// const eventNumber = (min, max) => {
//     for (let i = min; i < max; i++) {
//         if (min.toString().chatAt(0) % 2 === 0) {
//             console.log(min)
//         }
//     }
// }

// Дан некоторый массив, например, вот такой:

// [1, 2, 3, 4, 5, 6]
// Поменяйте местами пары элементов этого массива:

// [2, 1, 4, 3, 6, 5]

// const sortNumber = (arr) => {
//     for (let i = 0; i < arr.length; i += 2) {
//         const temp = arr[i]
//         arr[i] = arr[i + 1]
//         arr[i + 1] = temp
//         console.log(arr)
//     }
// }
// sortNumber([1, 2, 3, 4, 5, 6])


// Дан следующий объект:

// let obj = {
// 	1: {
// 		1: 11,
// 		2: 12,
// 		3: 13,
// 	},
// 	2: {
// 		1: 21,
// 		2: 22,
// 		3: 23,
// 	},
// 	3: {
// 		1: 24,
// 		2: 25,
// 		3: 26,
// 	},
// }
// Найдите сумму элементов этого объекта.

// const objSumm = (obj) => {
//     const result = Object.values(obj)
//     const totalResult = result.flat(Infinity).reduce((acc, item) => acc + item, 0)
//     return totalResult
// }
// console.log(objSumm(
//     {
//         1: 11,
//         2: 12,
//         3: 13,
//     },
//     {
//         1: 21,
//         2: 22,
//         3: 23,
//     },
//     {
//         1: 24,
//         2: 25,
//         3: 26,
//     }
// ))

//Уровень 3.5 задачника JavaScript