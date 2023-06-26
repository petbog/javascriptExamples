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