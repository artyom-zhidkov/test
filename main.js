//console.log('Lection 1');

//x = 10;
//y = 20;

//console.log(x + y);
//console.log(x + y);
//console.log(x + y);
//console.log(x + y);
//console.log(x + y);
//console.log(x + y);

//нестрогая типизация
// всегда отдаёт предпочтение строке при виде +


 //b = parseInt("123abc");
 //b = parseInt("a123") // NaN - Not a Number
//  any mathematic operation with Nan get Nan
//унарные корманды

//7 - (x + y)

// + 1 * x

//log( +x )  

//перед промтом ставим +
//x = +prompt() // если надо сразу преоразовать к числу

//a + parseInt(b)

//a + +b


//isNaN - возможность отловить Nan



// const a = +prompt();
// const b = +prompt();

// for (let i = a; i < b; i++) {
// 	if (!(i % 2)) {
// 		console.log(Math.pow(i, 2))
// 	}
// }

// let c = "";

// do {
// 	c = +prompt();
// } while (isNaN(c))

// function isPrime(num) {
//     for (let i = 2; i < num - 1; i++) {
//         if (num % i === 0) {
//             return false;
//         }
//     } 
//     return num !== 1 && num !== 0;
// }

// console.log("isPrime", isPrime(c));





	

// const a = [2, 6, 34, -23, 43, 65, 76, 87, 34, 56,-34, -45];

// let min = a[0];

// for (let i = 2; i < a.length; i += 2) {
//     if (a[i] < min) {
//         min = a[i];
//     }
// }

// console.log("Min = " + min);

// console.log(a);

// const average = (a.reduce((sum, current) => {
//     return sum + current;
//   })) / a.length;

//   console.log("average = " + average.toFixed(0));

// a.forEach((item) => {
//     console.log((((item - average) / average) * 100).toFixed(0) + "%");
// });


// let arr2 = [0,0,0,0,1,1,1,1,1,1,1,1,1,1,0,0,1,1,1,1,0];
// const res = [];

// let sum = 1;
// for (let i = 0; i < arr2.length; i++) {
//     if (arr2[i] === arr2[i + 1]) {
//         sum += 1;
//     } else {
//         res.push(sum);
//         sum = 1;
//     }
// }

// arr2 = res.slice();

// console.log(arr2);

// const arr = [];

// (function fillArr(arr) {
//     arr.length = +prompt();
//     const a = +prompt();
//     const b = +prompt();
//     for (let i = 0; i < arr.length; i++) {
//         Math.floor(Math.random()*(b-a)+a)
//     }
// })(arr);

// const obj = {
//     x: 10,
//     y: 20,
//     inner: {
//         x: 20,
//         z: 30
//     },
//     foo2: {
//         k: 23,
//         p: 13
//     }
// }

// console.log(obj)

// function convert(obj) {
//     const res = {}
//     for (let i in obj) {
//         if ((typeof obj[i]) == "object" ) {
//             for (let k in obj[i]) {
//                 res[k] = obj[i][k];
//             }
//         } else {
//             res[i] = obj[i];
//         }
//     }
//     return res;
// }

// console.log(convert(obj));

// Написать функцию assignObjects(obj1, obj2), которая принимает аргументами 
// 2 обьекта и возвращает новый, который состоит из свойство обоих обьектов (склеить). 
// Если свойство повторяется, то взять значение второго обьекта
// assignObjects({ x: 10, y: 20 }, { z: 30 }) -> { x:10, y:20, z: 30 }

// assignObjects({ x: 10 }, { x: 20, y: 30 }) - > { x:20, y: 30 }

// function assignObjects(obj1, obj2) {
//     const res = {};

//     for (var key in obj1) {
//         res[key] = obj1[key];
//     }

//     for (let key in obj2) {
//         res[key] = obj2[key];
//     }

//     return res;

// }

// console.log(assignObjects({ x: 10, y: 20 }, { z: 30 })) // { x:10, y:20, z: 30 })
// console.log(assignObjects({ x: 10 }, { x: 20, y: 30 })) // { x:20, y: 30 }

// console.log("{ x: 10, y: 20 }, { z: 30 }, { s: 10 }, { v: 20, m: 30 }");


// function newAssignObjects(...theArgs) {
//     const res = {};

//     theArgs.forEach((obj) => {
//         for (var key in obj) {
//             res[key] = obj[key];
//         }
//     })

//     return res;

// }

// console.log(newAssignObjects({ x: 10, y: 20 }, { z: 30 }, { s: 10 }, { v: 20, m: 30 }))


// function getPerson(name, from, to) {
//     return {
//         name: name,
//         age: Math.floor(Math.random()*(to-from)+from)
//     }
// }

// const name = ["artyom", "alex", "sveta", "nastya", "anya"]

// const users = [];

// for (let i = 0; i < 5; i++) {
//     users[i] = getPerson(name[i], 15, 65);
// }

// users.forEach((user) => {
//     console.log(user);
// })

// function averagAge(users) {
//     return users.reduce((sum, current) => sum + current.age, 0) / users.length;
// }

// console.log("average age: ", averagAge(users));

// // console.log("average = " + average.toFixed(0));


// const obj = {
//     d: "23333",
//     f: 12212,
//     flag: true,
//     arr: [1, 2, 3, 4],
//     info: {
//         r: 4,
//         t: 5
//     },
//     renderObject: foo
// }

// function foo() {
//     for (let key in this) {
//         // if (this[key] === foo) continue;
//         if (this[key] === arguments.callee) continue;
//         document.write(key + "; ");
//     }
// }

// obj.renderObject();


// const obj2 = {
//     m1: function() {
//         console.log("1")
//         return this
//     },
//     m2: function() {
//         console.log("2")

//         return this
//     },
//     m3: function() {
//         console.log("3")
//         return this
//     }
// }

// obj2.m1().m2().m3();
// obj2.m3().m1().m2();
// obj2.m1().m2().m3();

// в обьекте data существует метод addRecord, 
// который аргументами получает любой набор объектов. 
// Метод addRecord добавляет все свойства переданных объектов в data.

 data = {
     addRecord: foo,
     p: 600,
     str: 'hello',
     y: -50
 }

 function foo(...arg) {
    const flag = false;
    if (typeof arg[length-1] === Boolean) {
        flag = arg.pop()
    }
    arg.forEach((obj) => {
        for (let key in obj) {
            if (this.hasOwnProperty(key)) {
                if (!flag) {
                    this[key] = obj[key]
                } else{

                }
            }
        }
    })
 }

data.addRecord({x: 10}, {y: 20}, {z: 30, x: 50}, false);

console.log(data);


// В метод addRecord добавляется последний необязательный аргумент flag, 
// который указывает приоритет присвоения свойств с одинаковым названием. 
// Если true - берется свойство из первоначального объекта this, если false - 
// берется свойство из arguments. 
// По умолчанию flag = false;


