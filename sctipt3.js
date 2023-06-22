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
//Дан текст со словами. Запишите в массив все слова, начинающиеся на букву 'a'.

// const innerString = (str) => {
// const result=str.split(' ').filter((item)=> item[0] === 'а')
// console.log(result)
// }

// innerString('привет пока арбуз')

//Дан массив с числами. Оставьте в нем только те числа, которые делятся на 5.

// const arrNumber = (arr) => {
//     // const result = []
//     // for (let i = 0; i < arr.length; i++) {
//     //     if (arr[i] % 5 === 0) {
//     //         result.push(arr[i])
//     //     }
//     // }
//     // const result = arr.filter(item => item % 5 === 0)
//     console.log(result)
// }

// arrNumber([2, 10, 20, 22])

//Дан массив с числами. Оставьте в нем только те числа, которые содержат цифру ноль.

// const nullNumber = (arr) => {
//     const result = arr.filter(item => item.toString().includes('0'))
//     console.log(result)
// }
// nullNumber([1, 2, 3, 10, 20])

//Дан массив со числами. Проверьте, что в нем есть число, содержащее в себе цифру 3.

// const friNumber = (arr) => {
// const result =arr.filter((item)=> item.toString().includes('3'))
// console.log(result)
// }
// friNumber([1,2,3,13,23])

// Дано некоторое число:

// 35142
// Отсортируйте цифры этого числа. В нашем случае должно получится следующее:

// 12345

// const sortNumber = (num) => {
//     const result = num.toString().split('').sort((a, b) => a - b)
//     console.log(result)
// }

// sortNumber(35142)

//Напишите программу, которая сформирует следующую строку:

// '-1-2-3-4-5-'

// const stringSpace = (str) => {
//     const result = '-' + str.split('').join('-') + '-'
//     console.log(result)
// }
// stringSpace('12345')

// Дан следующий объект:

// let obj = {
// 	1: {
// 		1: {
// 			1: 111,
// 			2: 112,
// 			3: 113,
// 		},
// 		2: {
// 			1: 121,
// 			2: 122,
// 			3: 123,
// 		},
// 	},
// 	2: {
// 		1: {
// 			1: 211,
// 			2: 212,
// 			3: 213,
// 		},
// 		2: {
// 			1: 221,
// 			2: 222,
// 			3: 223,
// 		},
// 	},
// 	3: {
// 		1: {
// 			1: 311,
// 			2: 312,
// 			3: 313,
// 		},
// 		2: {
// 			1: 321,
// 			2: 322,
// 			3: 323,
// 		},
// 	},
// }
// Найдите сумму элементов этого объекта.

// const summObj = (arr) => {
//     const result = Object.values(arr)
//         .map(item => Object.values(item)
//             .reduce((acc, item) => acc + item))
//         .reduce((acc, item) => acc + item, 0)
//     console.log(result)
// }
// summObj([
//     {
//         1: 111,
//         2: 112,
//         3: 113,
//     },
//     {
//         1: 121,
//         2: 122,
//         3: 123,
//     },
//     {
//         1: 211,
//         2: 212,
//         3: 213,
//     },
//     {
//         1: 221,
//         2: 222,
//         3: 223,
//     },
//     {
//         1: 311,
//         2: 312,
//         3: 313,
//     },
//     {
//         1: 321,
//         2: 322,
//         3: 323,
//     }]

// )

//Уровень 3.6 задачника JavaScript
//Дан массив со числами. Удалите из него числа, состоящие более чем из трех цифр.

// const lengthhArr = (arr) => {
//     const result = arr.filter(item => item.toString().length < 3)
//     console.log(result)
// }
// lengthhArr([12, 123, 1234])

// Дано число, например, вот такое:

// let num = 12345;
// Проверьте, что все цифры этого числа больше нуля.

// const examinationNum = (num) => {
//     const result = Number(num.toString().split('').filter((item)=> item > 0).join(''))
//     console.log(result)
// }
// examinationNum(12345)

//Дан некоторый массив, например, вот такой:

// [123, 456, 789]
// Слейте все элементы этого массива в один массив, разбив их посимвольно:

// [1, 2, 3, 4, 5, 6, 7, 8, 9]

// const separationArr=(arr)=>{
//     const result=arr.join('').split('').map(Number)
//     console.log(result)
// }
// separationArr([123, 456, 789])

// Дан следующая структура:

// let data = [
// 	{
// 		1: 11,
// 		2: 12,
// 		3: 13,
// 	},
// 	{
// 		1: 21,
// 		2: 22,
// 		3: 23,
// 	},
// 	{
// 		1: 24,
// 		2: 25,
// 		3: 26,
// 	},
// ];
// Найдите сумму элементов этой структуры.

// const summAbj = (arr) => {
//     const result = Object.values(arr).map(item => Object.values(item).reduce((acc, item) => acc + item)).reduce((acc,item)=>acc +item,0)
//     console.log(result)
// }
// summAbj([
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
//     },
// ]
// )

//Уровень 3.7 задачника JavaScript
//Дана строка со словами. Отсортируйте слова в алфавитном порядке.


// const sortString =(str)=>{
//     const result=str.split(' ').sort()
//     console.log(result)
// }
// sortString('борис арбуз вода')

//Дано число. Получите массив делителей этого числа.
// const numArr = (num) => {
//     const newArr = []
//     for (let i = 0; i <= num.length; i++) {
//         if (num[i] % 1 === 0) {
//             newArr.push(num[i])
//         }
//     }
//     console.log(newArr)
// }
// numArr([1,2,3,4,5,6,7,8,9])

//Даны два числа. Получите массив общих делителей этих чисел.
//Дано число. Проверьте, что у этого числа есть только один делитель, кроме него самого и единицы.

//Через запятую написаны числа. Получите максимальное из этих чисел.

// const bossNumber=(num)=>{
//     const result=num.toString().split('').sort((a,b)=> b-a).slice(0,1)
//     console.log(result)
// }
// bossNumber(123456)

//Дан массив с числами. После каждого однозначного числа вставьте еще такое же.

// const unambiguousNumbers = (arr) => {
//     const result = []
//     for (let i = 0; i < arr.length; i++) {
//         result.push(arr[i])
//         if (String(arr[i]).length === 1) {
//             result.push(arr[i])
//         }
//     }
//     console.log(result)
// }
// unambiguousNumbers([1, 2, 3, 12])

//Дана строка. Удалите из нее все гласные буквы.

// const deleteLetters = (str) => {
//     const result =str.split('').filter((item)=> item.replace(/[aeiouy]/gi, ''))
//     console.log(result)
// }
// deleteLetters('hello')

//Дана строка. Сделайте заглавной последнюю букву каждого слова в этой строке.
// const strLoweCase = (str) => {
//     const result =str.split(' ').map(item => item.slice(0,-1) + item.slice(-1).toUpperCase()).toString()
//     console.log(result)
// }
// strLoweCase('привет пока')

// Дан следующая структура:

// let data = [
// 	{
// 		1: [1, 2, 3],
// 		2: [1, 2, 3],
// 		3: [1, 2, 3],
// 	},
// 	{
// 		1: [1, 2, 3],
// 		2: [1, 2, 3],
// 		3: [1, 2, 3],
// 	},
// 	{
// 		1: [1, 2, 3],
// 		2: [1, 2, 3],
// 		3: [1, 2, 3],
// 	},
// ];
// Найдите сумму элементов этой структуры.

// const summObj = (arr) => {
// const result = Object.values(arr)
//     .map(item => Object.values(item).reduce((acc, value) => acc + value.reduce((acc, item) => acc + item, 0),0)).reduce((acc,item)=>acc+item,0)
// console.log(result)

//     const result = Object.values(arr)
//         .map((item) => Object.values(item).reduce((acc, item) => acc + item.reduce((acc, item) => acc + item, 0), 0))
//         .reduce((acc, item) => acc + item,0)
//     console.log(result)
// }
// summObj([
//     {
//         1: [1, 2, 3],
//         2: [1, 2, 3],
//         3: [1, 2, 3],
//     },
//     {
//         1: [1, 2, 3],
//         2: [1, 2, 3],
//         3: [1, 2, 3],
//     },
//     {
//         1: [1, 2, 3],
//         2: [1, 2, 3],
//         3: [1, 2, 3],
//     },
// ])

//Уровень 3.8 задачника JavaScript
//Дан массив со числами. Проверьте, что все числа из этого массива содержат в себе цифру 3.

// const friiArr = (arr) => {
//     const result = arr.map(item => item.toString().includes('3'))
//     console.log(result)
// }
// friiArr([13,3,23,33])

// Дана строка в формате:

// 'kebab-case'
// Преобразуйте ее в формат:

// 'snake_case'

// const strReplace = (str) => {
//         const result = str.replace('kebab-','snake_')
//         console.log(result)
// }

// strReplace('kebab-case')

// Дана строка в формате:

// 'snake_case'
// Преобразуйте ее в формат:

// 'camelCase'

// const strReplace = (str) => {
//         const result = str.replace('snake_c','camelC')
//         console.log(result)
// }

// strReplace('snake_case')

// Дана строка в формате:

// 'camelCase'
// Преобразуйте ее в формат:

// 'snake_case'

// const strReplace = (str) => {
//         const result = str.replace('camelC','snake_c')
//         console.log(result)
// }
// strReplace('camelCase')

// Сформируйте с помощью циклов следующий массив:

// [
// 	[1, 2, 3],
// 	[1, 2, 3],
// 	[1, 2, 3],
// 	[1, 2, 3],
// 	[1, 2, 3],
// ]
// const newArr = (num) => {
//     const arr = []
//     for (let i = 0; i <= num; i++) {
//         arr.push([1, 2, 3])
//     }
//     console.log(arr)
// }
// newArr(2)
//Уровень 3.9 задачника JavaScript
//Дана строка. Проверьте, что эта строка состоит только из цифр.

// const isNumber = (str) => {
//         const result = parseInt(str)
//         const resultTotal = Number.isInteger(result)
//         if(resultTotal === true){
//             console.log('эта строка число')
//         }else{
//             console.log('эта строка не число') 
//         }
// }
// неправиль из за parseInt 
// const isNumber = (str) => {
//     const regex = /^\d+$/; // регулярное выражение для проверки наличия только цифр
//     if(regex.test(str)){
//     console.log('Эта строка число');
//     } else {
//     console.log('Эта строка не число');
//     }
//     }

// isNumber('12м3456')

//Дана строка. Проверьте, что эта строка состоит только из четных цифр.

// const evenNumber = (str) => {
//     const result = str.split('').filter((item)=> item % 2 === 0)
//     console.log(result)
// }

// evenNumber('1246')

//Дан массив со числами. Удалите из него числа, имеющие два и более нуля.

// const arrNull = (arr) => {
//     const result = arr.filter(item => item.toString().split('0').length -1 < 2  )
//     console.log(result)
// }
// arrNull([10,100,1000,10000])

//Найдите все числа от 1 до 1000, сумма цифр которых равна 13.

// const numberArr = (max) => {
//     const arr = []
//     for (let i = 1; i <= max; i++) {
//         if (i % 13 === 0) {
//             arr.push(i)
//         }
//     }
//     console.log(arr)
// }
// numberArr(1000)

// формируйте с помощью циклов следующий массив:

// [
// 	[1, 2, 3],
// 	[4, 5, 6],
// 	[7, 8, 9],
// ]

// const newArr = () => {
//     const arr = []
//     let count = 1
//     for (let i = 0; i < 3; i++) {
//         arr[i] = []
//         for (let j = 0; j < 3; j++) {
//             arr[i][j] = count
//             count++
//         }
//     }
//     console.log(arr)
// }
// newArr()

//Уровень 3.10 задачника JavaScript
//Dан массив. Сделайте так, чтобы в нем каждый элемент повторился два раза.

// const cloneNumberArr = (arr) => {
//     const newArr = []
//     for (let i = 0; i < arr.length; i++) {
//         newArr.push(arr[i], arr[i])
//     }
//     console.log(newArr)
// }
// cloneNumberArr([1, 2, 3, 4])

// const cloneNumberArr = (arr) => {
//     const newArr = arr.map(item => [item,item]).flat()

//     console.log(newArr)
// }
// cloneNumberArr([1, 2, 3, 4])

//Дан массив и число. Оставьте в массиве только те числа, которые являются делителями заданного числа.

// const arrReset=(arr,num)=>{
//     const resulr =arr.filter((item) => item % num === 0)
//     console.log(resulr)
// }
// arrReset([1,2,3,4,5],2)

//Даны два числа. Получите массив цифр, которые есть и в одном, и во втором числе.

// const arrNumber = (num1, num2) => {
//     const arr1 = [...num1.toString()].map(Number)
//     const arr2 = [...num2.toString()].map(Number)
//     const result1 = new Set(arr1)
//     const result2 = new Set(arr2)
//     const totalResult=[...result1].filter((item) => result2.has(item))
//     const total = [...totalResult]
    
//     console.log(total)
// }
// arrNumber(1234, 2345)
console.warn('разобраться подробней')