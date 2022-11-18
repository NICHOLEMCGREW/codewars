// // to toUpperCase

// function makeUpperCase(str) {
//     return str.toUpperCase()
//   }
//   console.log(makeUpperCase('hi'))

// //   You Can't Code Under Pressure #1

// function doubleInteger(i) {
//     return i*2;
//   }
//   console.log(doubleInteger(5))

// //   Return the day

// function whatday(num) { 
//     switch(num) {
//        case 1:
//         return "Monday"
//         break; 
//         case 2:
//         return "Tuesday"
//         break; 
//         case 3:
//         return "Wednesday"
//         break; 
//         case 4:
//         return "Thursday"
//         break; 
//         case 5:
//         return "Friday"
//         break; 
//         case 6:
//         return "Saturday"
//         break; 
//         case 7:
//         return "Sunday"
//         break; 
//         default:
//         return "Wrong, please enter a number between 1 and 7"
//     }
      
//   }
//   console.log(whatday(1))


// //   Man in the west

// function checkTheBucket(bucket){
//     return bucket.includes('gold');
//   }
//   console.log(checkTheBucket(["stone", "stone", "gold", "stone", "stone"]))

// //   Sum The Strings

// function sumStr(a,b) {
//     let sum = Number(a) + Number(b)
//     if(a == "" || b == "") {
//         return 0
//     } 
//     return sum.toString()
// }

// console.log(sumStr("4", "5"))

// 6.75 USD => CNY

// function usdcny(usd) {
//   let convert = usd * 6.75
//   return convert.toFixed(2) + ' Chinese Yuan'
// }

// console.log(usdcny(1860))


// Check same case

// function sameCase(a, b){
//     if(a.toLowerCase() == a.toUpperCase() || b.toLowerCase() == b.toUpperCase()) {
//         return -1
//     } else if(a == a.toLowerCase() && b == b.toLowerCase() || a == a.toUpperCase() && b == b.toUpperCase()) {
//         return 1
//     }
//     return 0
//   }
//   console.log(sameCase(":", "H"))

// Length and two values

// function alternate(n, firstValue, secondValue){
//     let result = []
//         for(let i = 0; i < n; i++) {
//             if(!(i % 2)) {
//                 result.push(firstValue)
//             } else {
//                 result.push(secondValue)
//             }
//         }
//         return result
//   }
//   console.log(alternate(5, "one", "two"))

// const alternate = (n, firstValue, secondValue) => Array.from({length: n}, (_, i) => !(i % 2) ? firstValue : secondValue)


// Convert a String to a Number!

// const stringToNumber = function(str){
//     return Number(str)
//   }
//   console.log(stringToNumber("333"))

// Array Iteration

// let bestColors = ['green', 'blue', 'yellow', 'black']

// bestColors.forEach((x, i) => console.log(x))

// let stopwatch = {}

// stopwatch.currentTime = 12

// stopwatch.tellTime = function(time){
//   console.log(`The current time is ${time}.`)
// }

// stopwatch.tellTime(stopwatch.currentTime)

// const _if = (bool, func1, func2) => bool ? func1() : func2()

// multiplayer RPG 

// const aurora = {
//     name: "Aurora",
//     health: 150,
//     strength: 25,
//     xp: 0,

//     describe() {
//         return `${this.name} has ${this.health} health points, ${this.strength} as strength and ${this.xp} XP points.`;
//     }
// };

// aurora.health -= 20;
// aurora.strength += 10;
// aurora.xp += 15;

// console.log(aurora.describe());

// const glacius = {
//     name: "Glacius",
//     health: 130,
//     strength: 30,
//     xp: 0,

//     describe() {
//         return `${this.name} has ${this.health} health points, ${this.strength} as strength and ${this.xp} XP points.`;
//     }
// }

// console.log(glacius.describe())

// The JS Way Dogs 

// class Dog {
//     constructor(name, species, size) {
//         this.name = name;
//         this.species = species;
//         this.size = size;
//     }
//     bark(size){
//         if(this.size > 60) {
//             return "Grrr! Grrr!";
//         } else {
//             return "Woof! Woof!";
//         }
//     }
// }

// const fang = new Dog("Fang", "boarhound", 75);
// console.log(`${fang.name} is a ${fang.species} dog measuring ${fang.size}`);
// console.log(`Look, a cat! ${fang.name} barks: ${fang.bark()}`);

// const snowy = new Dog("Snowy", "terrier", 22);
// console.log(`${snowy.name} is a ${snowy.species} dog measuring ${snowy.size}`);
// console.log(`Look, a cat! ${snowy.name} barks: ${snowy.bark()}`);

// Account list

// class Account {
//     constructor(owner) {
//         this.owner = owner;
//         this.balance = 0;
//     }

//     credit(amount) {
//         this.balance += amount;
//     }
//     describe() {
//         return `owner: ${this.owner}, balance: ${this.balance}`;
//     }
// }

// const accountList = [];

// accountList.push(new Account("Sean"));
// accountList.push(new Account("Brad"));
// accountList.push(new Account("Georges"));

// accountList.forEach(account => {
//     account.credit(1000);
//     console.log(account.describe());
// })

// Cat years, Dog years 
// const humanYearsCatYearsDogYears = (humanYears) => {
//     let catYears = 0;
//     let dogYears = 0;
    
//       if (humanYears === 1) {
//         catYears += 15;
//         dogYears += 15;
//       } else if (humanYears === 2) {
//         catYears = 24;
//         dogYears = 24;
//       } else if (humanYears >= 3) {
//         catYears = 24 + (humanYears - 2) * 4;
//         dogYears = 24 + (humanYears - 2) * 5;
//       }
//     return [humanYears, catYears, dogYears];
//   }
//   console.log(humanYearsCatYearsDogYears(10))
  

// const humanYearsCatYearsDogYears = (humanYears) => {
//     let catYears = 0;
//     let dogYears = 0;
    
//     for (let i = 1; i <= humanYears; i++) {
//       if (i === 1) {
//         catYears += 15;
//         dogYears += 15;
//       }
//       else if (i === 2) {
//         catYears += 9;
//         dogYears += 9;
//       }
//       else {
//         catYears += 4;
//         dogYears += 5;
//       }
//     }
//     return [humanYears,catYears,dogYears];
//   }

//   console.log(humanYearsCatYearsDogYears(10))

// Dollars and Cents

// formatMoney = amount => `$${amount.toFixed(2)}`

// Draw stairs

// drawStairs = n => [...Array(n)].map((_, index) => ' '.repeat(index) + 'I').join('\n')

// Remove exclamation marks

// function removeExclamationMarks(s) {
//     return s.replace(/!/g,'') 
//   }
//   console.log(removeExclamationMarks('Hello World!!'))

// const removeExclamationMarks = s => s.replace(/!/g,'')

// A wolf in sheep's clothing

    // function warnTheSheep(queue) {
    //     const wolfIndex = queue.indexOf('wolf')
    //     const sheepIndex = queue.length - wolfIndex - 1
    //         if(wolfIndex === queue.length - 1){
    //             return `Pls go away and stop eating my sheep`
    //         } else {
    //             return `Oi! Sheep number ${sheepIndex}! You are about to be eaten by a wolf!`
    //         }
    //     }
    

    // altERnaTIng cAsE <=> ALTerNAtiNG CaSe

    // String.prototype.toAlternatingCase = function (c) {
    //     return [...this].map(
    //         (c) => (c === c.toUpperCase() ? c.toLowerCase() : c.toUpperCase()),
    //     ).join``;
    //   }

    // function AgencyContractor(hourlyRate, hours, taxRate){
        //     this.hours = hours
        //     this.taxRate = taxRate
        //     let rate = hourlyRate
        //     let calculateProfit = function(){
        //         return rate * this.hours * (1 - this.taxRate)
        //     }
        //     this.invoiceClient = function(){
        //         return `Your invoice total is ${rate * this.hours}`
        //     }
        // }
        
        // let leon = new AgencyContractor(250, 160, .35)
        // console.log(leon.invoiceClient())

        // Closest elevator

        elevator = (left, right, call) => Math.abs(call - left) < Math.abs(call - right) ? "left" : "right"

        // Sum of differences in array

        function sumOfDifferences(arr) {
            arr.sort((a,b) => b - a)
            let sum = 0;
            for (let i = 0; i < arr.length - 1; ++i) {
                sum += arr[i] - arr[i + 1];
        }
            return sum
        }

        console.log(sumOfDifferences([1, 2, 10]))

        
        let arr = [1, 2, 10];

arr.sort((a,b) => b - a);

let sum = 0;
for (let i = 0; i < arr.length - 1; ++i) {
    sum += arr[i] - arr[i + 1];
}

console.log(sum);