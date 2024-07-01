"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const chalk_1 = __importDefault(require("chalk"));
const inquirer_1 = __importDefault(require("inquirer"));
class Player {
    constructor(name) {
        this.fuel = 100;
        this.name = name;
    }
    fuelDecrease() {
        let fuel = this.fuel - 25;
        this.fuel = fuel;
    }
    fuelIncrease() {
        let fuel = this.fuel + 25;
        this.fuel = fuel;
    }
}
class Oppenent {
    constructor(name) {
        this.fuel = 100;
        this.name = name;
    }
    fuelDecrease() {
        let fuel = this.fuel - 25;
        this.fuel = fuel;
    }
    fuelIncrease() {
        let fuel = this.fuel + 25;
        this.fuel = fuel;
    }
}
let player = await inquirer_1.default.prompt({
    type: "input",
    name: "name",
    message: "Please Enter Your Name :"
});
let oppenent = await inquirer_1.default.prompt({
    type: "list",
    name: "select",
    message: "Select Your Oppenent",
    choices: ["Skeleton", "Assassin", "Zombie"]
});
let p1 = new Player(player.name);
let o1 = new Oppenent(oppenent.name);
do {
    if (oppenent.select == "Skeleton") {
        console.log(`${chalk_1.default.bold.red(o1.name)} VS ${chalk_1.default.bold.green(o1.name)}`);
        let ask = await inquirer_1.default.prompt({
            type: "list",
            name: "opt",
            message: "select your option",
            choices: ["Attack", "Drink Portion", "Run For Your Life...."]
        });
        if (ask.opt == "Attack") { }
        let num = Math.floor(Math.random() * 2);
        if (num > 0) {
            p1.fuelDecrease();
            console.log(chalk_1.default.bold.red(`${p1.name} fuel is ${p1.fuel}`));
            console.log(chalk_1.default.bold.green(`${o1.name} fuel is ${o1.fuel}`));
            if (p1.fuel <= 0) {
                console.log(chalk_1.default.red.bold.italic("you lost brtter luch next time"));
            }
        }
        if (num <= 0) {
            p1.fuelDecrease();
            p1.fuelDecrease();
            console.log(chalk_1.default.bold.red(`${o1.name} fuel is ${o1.fuel}`));
            console.log(chalk_1.default.bold.green(`${p1.name} fuel is ${p1.fuel}`));
        }
        if (ask.opt == "Drink Portion") { }
        //let num = Math.floor(Math.random() * 2)
        if (num > 0) {
            p1.fuelDecrease();
            console.log(chalk_1.default.bold.red(`${p1.name} fuel is ${p1.fuel}`));
            console.log(chalk_1.default.bold.green(`${o1.name} fuel is ${o1.fuel}`));
            if (p1.fuel <= 0) {
                console.log(chalk_1.default.red.bold.italic("you lost brtter luch next time"));
            }
        }
        if (num <= 0) {
            p1.fuelDecrease();
            p1.fuelDecrease();
            console.log(chalk_1.default.bold.red(`${o1.name} fuel is ${o1.fuel}`));
            console.log(chalk_1.default.bold.green(`${p1.name} fuel is ${p1.fuel}`));
        }
        p1.fuelIncrease();
        console.log(chalk_1.default.bold.italic.green(`Your Drink Health Portion Your Fuel is${p1.fuel}`));
        if (ask.opt == "Run For Your Life....") { }
        // let num = Math.floor(Math.random() * 2)
        if (num > 0) {
            p1.fuelDecrease();
            console.log(chalk_1.default.bold.red(`${p1.name} fuel is ${p1.fuel}`));
            console.log(chalk_1.default.bold.green(`${o1.name} fuel is ${o1.fuel}`));
            if (p1.fuel <= 0) {
                console.log(chalk_1.default.red.bold.italic("you lost brtter luch next time"));
            }
        }
        if (num <= 0) {
            p1.fuelDecrease();
            p1.fuelDecrease();
            console.log(chalk_1.default.bold.red(`${o1.name} fuel is ${o1.fuel}`));
            console.log(chalk_1.default.bold.green(`${p1.name} fuel is ${p1.fuel}`));
        }
        console.log(chalk_1.default.red.bold.italic("You Win"));
    }
} while (true);
