// // 使用 Mock
// var Mock = require('mockjs')
//   // var data = Mock.mock({
//   //   // 属性 list 的值是一个数组，其中含有 1 到 10 个元素
//   //   'list|1-10': [{
//   //     // 属性 id 是一个自增数，起始值为 1，每次增 1
//   //     'id|+1': 1,
//   //     'name_id': 'user_'
//   //   }],
//   //   'user|5': [
//   //     { 'name|+10': 1 }
//   //   ],
//   // })

// // const data = Mock.mock({
// //     'number1|1-100.1-10': 1,
// //     'number2|123.1-10': 1,
// //     'number3|123.5': 1,
// //     'number4|123.10': 1.123
// //   })
// // const data = Mock.mock({
// //     'name|1': true,
// //     'number2|1': false,
// //     'number3|1-10': false,
// //     'number4|3': true
// //   })
// // const data = Mock.mock({
// //     'name1|1-2': { x: 1, y: 2, z: 3 },
// //     'name2|1-2': { xx: 4, yy: 5, zz: 6 }
// //   })
// // const data = Mock.mock({
// //     'name0|1': [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
// //     'name1|2': [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
// //     'name2|+1': [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
// //     'name3|0-3': [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
// //   })
// // const data = Mock.mock({
// //     'func': () => 5
// //   })
// // const data = Mock.mock({
// //     'regexp1': /[a-z][A-Z][0-9]/,
// //     'regexp2': /\w\W\s\S\d\D/,
// //     'regexp3': /\d{5,10}/
// //   })
// const data = Mock.mock({
//     name: {
//       first: '@FIRST',
//       middle: '@FIRST',
//       last: '@LAST',
//       full: '@first @middle @last'
//     }
//   })
//   // 输出结果
// console.log(data)