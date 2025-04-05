// const adventurer = {
//     name: "Robin",
//     health: 10,
//     inventory: ["sword", "potion", "artifact"]
//     }

function roll(mod = 0) {
    const result = Math.floor(Math.random() * 20) + 1 + mod;
    console.log(`${this.name} rolled a ${result}.`)
}

const adventurer = {
    name: "Robin",
    health: 10,
    inventory: ["sword", "potion", "artifact"],
    companion: {
        name: "Leo",
        type: "Cat"
    }
}

adventurer.inventory.forEach(it => {
    console.log(`${it}`);
})

const companion2 = {
    name: `Frank`,
    type: `Flea`,
    inventory: [`a small hat`, `sunglasses`]
}
adventurer.companion.companion = companion2;
console.log(adventurer);
//adding roll method
adventurer.roll = roll;
adventurer.roll();


//Part 2: Class Fantasy
class Character {
    constructor(name) {
        this.name = name;
        this.health = 100;
        this.inventory = [];
    }
    static MAX_HEALTH = 100; //Part 4
    roll(mod = 0) {
        const result = Math.floor(Math.random() * 20) + 1 + mod;
        console.log(`${this.name} rolled a ${result}.`)
    }
}

const robin = new Character("Robin");
robin.inventory = ["sword", "potion", "artifact"];
robin.companion = new Character("Leo");
robin.companion.type = "Cat";
robin.companion.companion = new Character("Frank");
robin.companion.companion.type = "Flea";
robin.companion.companion.inventory = ["small hat", "sunglasses"];
robin.roll();
robin.companion.roll();
robin.companion.companion.roll();


//Part 3: Class Features
console.log(`------------------//Part 3: Class Features---------------------------`);


class Adventurer extends Character {
    static ROLES = [`Fighter`,`Healer`,`Wizard`];//part 4
    constructor(name, role) {
        super(name);
        // Adventurers have specialized roles.
        this.role = role;
        if (!ROLES.includes(role)) return;
        // Every adventurer starts with a bed and 50 gold coins.
        this.inventory.push("bedroll", "50 gold coins");
    }
    // Adventurers have the ability to scout ahead of them.
    scout() {
        console.log(`${this.name} is scouting ahead...`);
        super.roll();
    }
}

class Companion extends Character{
    constructor (name, type, buff){
        super(name);
        this.type = type;
        this.buff = buff;
    }
    beUseful() {
        console.log(`${this.name} is being useful...`);
        super.roll();
    }    
}

function catBuff(){
    console.log (`Cat buffing`);
}

let leo = new Companion(`Leo`, `Cat`, catBuff);
leo.inventory.push(`small hat`);
leo.inventory.push(`sunglasses`);
leo.roll();
leo.beUseful();
leo.buff();

//Part 4: Class Uniforms
console.log(`------------------//Part 4: Class Uniforms---------------------------`);

const robin2 = new Adventurer("Robin",`bard`);
robin2.inventory = ["sword", "potion", "artifact"];
robin.companion = leo;

















class Learner {
    #grades;
    #name = {
      first: "",
      last: ""
    };
    #age;
  
    constructor(firstName, lastName, age) {
      this.#name.first = firstName;
      this.#name.last = lastName;
      this.#age = age;
  
      this.#grades = new Grades();
    }
    get name() {
      return this.#name.first + " " + this.#name.last;
    }
    get age() {
      return this.#age;
    }
    addGrades(...grades) {
      this.#grades.addGrades(grades);
    }
    get grades() {
      return this.#grades.grades;
    }
    get average() {
      return this.#grades.average;
    }
  }
  
  class Grades {
    #grades = [];
  
    constructor(initialGrades) {
      if (initialGrades) {
        this.addGrades(initialGrades);
      }
    }
    static getAverage(...grades) {
      const arr = [];
      this.addToArray(arr, grades);
      return this.avgArray(arr);
    }
    static addToArray(arr, grades) {
      grades = grades.flat();
      grades.forEach((grade) => {
        grade = Number(grade);
  
        if (grade >= 0 && grade <= 100) {
          arr.push(grade);
        }
      });
    }
    static avgArray(gradeArray) {
      const arr = [...gradeArray];
      arr.sort((a, b) => a - b).shift();
  
      return arr.reduce((a, b) => a + b) / arr.length;
    }
    addGrades(...grades) {
      Grades.addToArray(this.#grades, grades.flat());
    }
    get grades() {
      return this.#grades;
    }
    get average() {
      return Grades.avgArray(this.#grades);
    }
  }