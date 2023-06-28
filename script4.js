//Уровень 4.1 задачника JavaScript
// Сделайте функцию, которая вернет текущий день недели словом.

// const dayWeek=()=>{
//     const day=['вс','пн','вт','ср','чт','пт','сб']
//     const date=new Date()
//     return day[date.getDay()]
// }
// console.log(dayWeek())

//Сделайте функцию, которая параметром будет получать дату, а возвращать день недели словом, соответствующий этой дате.

// const dayWeek = (year, month, day) => {
//     let date = new Date(year, month -1, day)
//     const dayArr = ['вс', 'пн', 'вт', 'ср', 'чт', 'пт', 'сб']
//      console.log(dayArr[date.getDay()])
// }

// dayWeek(2023, 6, 25)

//Сделайте функцию, которая параметром будет принимать секунды, а возвращать количество суток, соответствующих этим секундам.

// const quantityDay = (sec) => {
//     const oneDay = 86400
//     let day=Math.floor(sec/oneDay)
//     console.log(`${sec} секунд будет равно ${day} дней`)
// }
// quantityDay(90000)

//Сделайте функцию, которая параметром будет принимать число и строку и обрезать эту строку до длины, заданной первым параметром.

// const lengthString = (num, str) => {
//     let newStr = ''
//     for (let i = 0; i < num && i < str.length; i++) {
//         newStr += str[i]

//     }
//     console.log(newStr)
// }
// lengthString(2, 'dsadas')

//Сделайте функцию, которая параметром будет получать дату, а возвращать знак зодиака, соответствующий этой дате.



//Сделайте функцию, которая параметром будет принимать число, а возвращать сумму его делителей.

// const sumDell=(num)=>{
//     let sum=0
//     for (let i = 1; i <= num; i++) {
//         if(num % i === 0){
//             sum += i
//         }
//     }
//     console.log(sum)
// }
// sumDell(55)

//Уровень 4.2 задачника JavaScript
//Сделайте функцию, которая параметром будет принимать число и возвращать сумму его цифр.

// const sumNumber = (num) => {
//     const result = num.toString().split('').reduce((acc, item) => acc + Number(item), 0)
//     console.log(result)
// }
// sumNumber(555)

//Сделайте функцию, которая параметром будет принимать число и удалять из него нули.

// const deleteNull = (num) => {
//     const result = num.toString().split('').filter((item) => item !== '0')
//     const totalResult = Number(result.join(''))
//     console.log(totalResult)
// }
// deleteNull(2030)

//Сделайте функцию, которая будет возвращать сколько дней прошло или осталось до заданной даты в году, в зависимости от того, была уже эта дата или нет.

// const removeDate = (year, month, day) => {
//     //получение текущей даты
//     const date = new Date()
//     //получение даты из парамметров
//     const targetDate = new Date(year, month - 1, day)
//     //вычисление даты в миллисекундах
//     const currentDate = date.getTime() - targetDate.getTime()
//     //округление миллисекунд до дней 
//     const differenceInDays = Math.ceil(currentDate / (1000 * 3600 * 24));
//     if (date.getTime() > targetDate.getTime()) {
//         console.log(`${differenceInDays} прошло дней `)
//     } else {
//         console.log(`${differenceInDays} осталось дней `)
//     }
// }
// removeDate(2023, 6, 23)

//Сделайте функцию, которая параметром будет год и проверять, високосный он или нет.

// const leapYear = (num) => {
//     if (num % 4 === 0) {
//         console.log(`${num} високостный`)
//     } else {
//         console.log(`${num} не високостный`)
//     }
// }
// leapYear(1996)

//Сделайте функцию, которая вернет массив всех високосных годов за предыдущие сто лет.

// const leapYear = (min, max) => {
//     const arr = []
//     for (let i = min; i <= max; i++) {
//         if (i % 4 === 0) {
//             arr.push(i)
//         }
//     }
//     console.log(arr)
// }
// leapYear(1900,2000)

//Сделайте функцию, которая будет возвращать сколько дней осталось до конца текущего месяца
// const monthDay = () => {
//     const today = new Date()
//     const lastMonthDay = new Date(today.getFullYear(), today.getMonth() + 1, 0)
//     const currentDay=Math.ceil((lastMonthDay - today) /(1000 * 3600 * 24))
//     console.log(`${currentDay} осталось`)
// }
// monthDay()

// Сделайте функцию, которая вернет предыдущий, текущий и следующий дни недели словом в виде следующего объекта:

// {
// 	next: 'пн',
// 	curr: 'вс',
// 	prev: 'сб',
// }

// const objDay=(obj)=>{
//     console.log(`${obj.next} будущий день ${obj.curr}  настоящий день ${obj.prev}  предыдущий день`)
// }
// objDay({
// 	next: 'пн',
// 	curr: 'вс',
// 	prev: 'сб',
// })

//Уровень 4.3 задачника JavaScript
//Сделайте функцию, которая параметром будет принимать массив и удалять из него все дубли.

// const cloneArr = (arr) => {
// 	for (let i = 0; i < arr.length; i++) {
// 		for (let j = i + 1; j < arr.length; j++) {
// 			if (arr[i] === arr[j]) {
// 				arr.splice(j, 1)
// 				j--
// 			}
// 		}
// 	}
// 	return arr
// }
// console.log(cloneArr([1,1,2,3,3,4]))

//Сделайте функцию, которая параметром будет принимать массив и удалять из него все дубли, которые встречаются больше трех раз.

// const deleteCloneArr = (arr) => {
// 	const result = arr.filter(item => {
// 		const count = arr.reduce((acc, value) => {
// 			if (value === item) {
// 				acc++
// 			}
// 		}, 0)
// 		return count <= 3
// 	})
// 	return result
// }
// console.log(deleteCloneArr([1, 1, 1, 2, 2, 3, 3, 3, 3]))

//Сделайте функцию, которая параметром будет принимать массив и удалять из него одинаковые, рядом стоящие элементы.

// const deleteCloneArr = (arr) => {
// 	for (let i = 0; i < arr.length; i++) {
// 		for (let j = i + 1; j < arr.length; j++) {
// 			if (arr[i] === arr[j]) {
// 				arr.splice(j, 1)
// 				j--
// 			}

// 		}
// 	}
// 	return arr
// }
// console.log(deleteCloneArr([1,1,2,2,3,3]))

//Сделайте функцию, которая параметром будет принимать массив с числами и возвращать максимальное 
//и минимальное значение из этого массива в виде следующего объекта:

// {
// 	max: 9,
// 	min: 1,
// }

// const arrMaxMin = (arr) => {
// 	const obj = {};
// 	obj.max = Math.max.apply(null, arr)
// 	obj.min = Math.min.apply(null, arr)
// 	console.log(obj)
// }

// arrMaxMin([1, 2, 3])

//Уровень 4.4 задачника JavaScript
//Сделайте функцию, которая параметром будет принимать число, а количество его делителей.

// const numDell = (num, numDell) => {
//     let count = 0
//     for (let i = 0; i < num; i++) {
//         if (num % i === 0){
//             count++
//         }
//     }
//     if(count === numDell){
//         console.log('делитель подходит')
//     }else{
//         console.log('делитель не подходит')
//     }
// }
// numDell(10,3)

//Сделайте функцию, которая параметром будет принимать число, а возвращать массив его делителей.
// const arrDel=(num)=>{
//     const arr =[]
//     for (let i = 0; i < num; i++) {
//         if(num % i === 0){
//             arr.push(num / i)
//         }
//     }
//     console.log(arr)
// }
// arrDel(10)

//лайте функцию, которая параметром будет принимать число и проверять, простое оно или нет.

//делайте функцию, которая параметром будет принимать число и удалять из него четные цифры

// const eventNum = (num) => {
//     const result = num.toString().split('').filter((item) => {
//         if(Number(item) % 2 !== 0){
//             return item
//         }
//     } )
//     const totalResult=Number(result.join(''))
//     console.log(totalResult)
// }
// eventNum(123456)

//Сделайте функцию, которая заполнит массив N случайными числами из заданного промежутка.

// const randomArr = (length, max) => {
//     const random = [...new Array(length)].map(() => Math.round(Math.random() * max))
//     console.log(random)
// }
// randomArr(10,10)

//Уровень 4.5 задачника JavaScript
//Дана переменная со строкой. Проверьте, что в эта строка представляет собой число, то есть состоит только из цифр.

// const numberString = (str) => {
//     const result = !isNaN(str)
//     console.log(result)
// }
// numberString('123456')

//Дана переменная со строкой. Проверьте, что в эта строка представляет собой дробь.

// const strDrob=(str)=>{
//     if(!isNaN(parseFloat(str))){
//         console.log('дровь')
//     }else{
//         console.log('не дробь')
//     }
// }
// strDrob('3,14')

//Сделайте функцию, которая параметром будет принимать массив с числами и возвращать второе по величине число.

// const arrBig = (arr) => {
//     const max = Math.max.apply(null, arr)
//     const totalMax = arr.filter((item) => item !== max)
//     const result=Math.max.apply(null,totalMax)
//     console.log(result)
// }
// arrBig([2, 4, 5, 1, 3])

//Сделайте функцию, которая параметрами будет принимать два числа и возвращать массив, 
//заполненный целыми числами от минимального параметра до максимального.

// const randomNumArr = (max, min) => {
//     const length = 10
//     const arr = [...new Array(length)].map(() => Math.round(Math.random() * (max - min) + min))
//     console.log(arr)
// }
// randomNumArr(1,20)

//Сделайте функцию, которая заполнит массив случайными латинскими буквами.

// const arrStr = (length) => {
//     const result = []
//     const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
//     for (let i = 0; i < length; i++) {
//       result.push( characters.charAt(Math.floor(Math.random() * characters.length))) 
//     }
//     console.log(result)
// }
// arrStr(10)
//Сделайте функцию, которая будет возвращать сумму N первых чисел Фибоначчи.
// const fib = (num) => {
//     const arrFib = [0, 1]
//     for (let i = 2; i <= num; i++) {
//         const num1 = arrFib[i - 1]
//         const num2 = arrFib[i - 2]
//         arrFib.push(num1 + num2)
//     }
//     return arrFib[num]
// }
// console.log(fib(6))

//Уровень 4.6 задачника JavaScript
//Сделайте функцию, которая параметром будет принимать дату в формате год-месяц-день,
// и определять, существует ли такая дата или нет.

// const fakeDate = (year, month, day) => {
//     const date = new Date(year, month - 1, day)
//     if (date.getFullYear() !== year || date.getMonth() !== month - 1 || date.getDate() !== day) {
//         console.log('такой даты нет')
//     } else {
//         console.log('такая дата есть')
//     }
// }
// fakeDate(2023,6,28)

//Сделайте функцию, которая сгенерирует строку заданной длины, заполненную случайными латинскими буквами.

// const randomString = (length) => {
//     const arr = []
//     const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
//     for (let i = 0; i <= length; i++) {
//         arr.push(characters.charAt(Math.floor(Math.random() * characters.length)))
//     }
//     const totalResult=arr.join(' ')
// console.log(totalResult)
// }

// randomString(10)

//Сделайте функцию, которая параметром будет получать строку со словами, 
//а возвращать строку в верхнем регистре, состоящую из первых букв слов.

// const topRegisterString = (str) => {
//     const result = str.split(' ').map((item) => item.charAt(0).toUpperCase() + item.slice(1))
//     const totalResult=result.join(' ')
//     console.log(totalResult)
// }
// topRegisterString('просто здравствуй просто как дела')

//Сделайте функцию, которая параметром будет принимать массив с числами и заменять каждое число на массив его делителей.

// const arrDel = (arr) => {
//     const res = []
//     for (let i = 0; i <= arr.length; i++) {
//         const resetArr = []
//         for (let j = 1; j < arr[i]; j++) {
//             if (arr[i] % j === 0) {
//                 resetArr.push(j)
//             }
//         }
//         res.push(resetArr)
//     }
//     console.log(res)
// }
// arrDel([2, 3, 4, 5, 6])

// Сделайте функцию, которая параметром будет принимать секунды, 
// а возвращать количество дней, часов, минут и секунд, соответствующих этим секундам, в виде следующего объекта:

// {
// d: 12,
// h: 10,
// m: 59,
// s: 59,
// }

// const objClock = (sec) => {
//     //вычисляю дни
//     const day = Math.floor(sec / (24 * 60 * 60))
//     sec -= day * 24 * 60 * 60
//     //вычисляю часы
//     const hour = Math.floor(sec / (60 * 60))
//     sec -= hour * 60 * 60
//     //вычисляю минуты
//     const min = Math.floor(sec / 60)
//     sec -= min * 60
//     return {
//         d: day,
//         h: hour,
//         m: min,
//         s: sec,
//     }
// }
// console.log(objClock(90055100))

//Уровень 4.7 задачника JavaScript
//Сделайте функцию, которая параметром будет принимать текст со словами, а возвращать текст, 
//в котором эти слова будут отсортированы в алфавитном порядке.

// const sortText=(str)=>{
//     const res=str.split(' ').sort().join(' ')
//     console.log(res)
// }
// sortText('бочка яхта арбуз вареник')

//Сделайте функцию, которая параметром будет принимать два массива и возвращать массив их общих элементов.

// const dubleArr = (arr1, arr2) => {
//     const res = []
//     for (let i = 0; i < arr1.length; i++) {
//         for (let j = 0; j < arr2.length; j++) {
//             if (arr1[i] === arr2[j]) {
//                 res.push(arr1[i])
//             }
//         }
//     }
//     console.log(res)
// }

// dubleArr([1,2,3,4],[3,4,5,6])

//Сделайте функцию, которая будет возвращать случайное число. Функция не должна возвращать одно и тоже число два раза подряд.
// let prev = null

// const randomNumber = () => {
//     const min = 1;
//     const max = 100;
//     const result = Math.floor(Math.random() * (max - min + 1) + min)
//     if (result === prev) {
//         result = Math.floor(Math.random() * (max - min + 1) + min)
//     }
//     result === prev
//     console.log(result)
// }
// randomNumber()

// Сделайте функцию, которая параметром будет принимать массив и элемент и возвращать следующий за ним элемент. Смотрите пример:

// let arr = [1, 2, 3, 4, 5];

// func(arr, 1); // 2
// func(arr, 4); // 5
// func(arr, 5); // 1

// const nextElArr = (arr, el) => {
//     for (let i = 0; i < arr.length; i++) {
//         if (arr[i] === el) {
//             if (i === arr.length - 1) {
//                 return arr[0]
//             } else {
//                 return arr[i + 1]
//             }
//         }
//     }
// }
// console.log(nextElArr([1, 2, 3, 4, 5], 4))

//Уровень 4.8 задачника JavaScript
//Сделайте функцию, которая параметром будет принимать массив и возвращать случайный элемент этого массива.