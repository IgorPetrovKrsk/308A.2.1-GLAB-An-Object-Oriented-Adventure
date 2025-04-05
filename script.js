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
        if (!Adventurer.ROLES.includes(role)) throw new Error(`Unknown role ${role}`);
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

try {
  const robin2 = new Adventurer(`Robin`,`bard`); //expecting an error
} catch (er) {
  console.error(er.message);
} 
const robin2 = new Adventurer(`Robin`,`Wizard`);
robin2.inventory = ["sword", "potion", "artifact"];
robin.companion = leo;


//Part 5: Gather your Party
console.log(`------------------//Part 5: Gather your Party---------------------------`);

class AdventurerFactory {  
  constructor (role) {
    this.role = role;
    this.adventurers = [];
  }
  generate (name) {
    const newAdventurer = new Adventurer(name, this.role);
    this.adventurers.push(newAdventurer);
  }
  findByIndex (index) {
    return this.adventurers[index];
  }
  findByName (name) {
    return this.adventurers.find((a) => a.name === name);
  }
}

const healers = new AdventurerFactory("Healer");
healers.generate("Robin");
console.log(healers.findByName(`Robin`));

//Part 6: Developing Skills
console.log(`------------------//Part 6: Developing Skills---------------------------`);