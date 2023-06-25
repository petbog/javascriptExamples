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

const deleteNull = (num) => {
    const result = num.toString().split('').filter((item) => item !== '0')
    const totalResult = Number(result)
    console.log(totalResult)
}
deleteNull(2030)