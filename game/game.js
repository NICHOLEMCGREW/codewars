// class Character {
//     constructor(name, health, strength, gold, keys) {
//         this.name = name;
//         this.health = health;
//         this.strength = strength;
//         this.gold = 10;
//         this.keys = 1; 
//         this.xp = 0;
//     }

    

//     // Attack a target 
//     attack(target) {
//         if (this.health > 0) {
//           const damage = this.strength;
//           console.log(
//             `${this.name} attacks ${target.name} and causes ${damage} damage points`
//           );
//           target.health -= damage;
//           if (target.health > 0) {
//             console.log(`${target.name} has ${target.health} health points left`);
//           } else {
//             target.health = 0;
//             const bonusXP = 10;
//             const goldInventory = target.gold
//             const keyInventory = target.keys
//             console.log(
//               `${this.name} eliminated ${target.name} and wins ${bonusXP} experience points, ${this.gold} gold and ${this.keys} key(s).`
//             );
//             this.xp += bonusXP;
//             this.gold += goldInventory;
//             this.keys += keyInventory;
//           }
//         } else {
//           console.log(`${this.name} can't attack (they've been eliminated)`);
//         }
//       }

      

//     describe() {
//         return `${this.name} has ${this.health} health points, ${this.strength} as strength and ${this.xp} XP points, ${this.gold} gold and ${this.keys} key(s).`;
//     }
// }

// const aurora = new Character("Aurora", 150, 25);
// const glacius = new Character("Glacius", 130, 30);

// console.log("Welcome to the adventrue! Here are our heroes:");
// console.log(aurora.describe());
// console.log(glacius.describe());

// const monster = new Character("Spike", 40, 20);
// console.log("A wild monster has appeared: it's named " + monster.name);

// monster.attack(aurora);
// monster.attack(glacius);
// aurora.attack(monster);
// glacius.attack(monster);

// console.log(aurora.describe())
// console.log(glacius.describe());

// // class Inventory {
// //     constructor(gold, keys) {
       
// //     }
// // }