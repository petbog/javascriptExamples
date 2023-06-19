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