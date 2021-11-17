import {Cliente} from "./Cliente.js";
import { ContaCorrente } from "./ContaCorrente.js";
import {Conta} from "./Conta.js"

const cliente1 = new Cliente('Giuli Gilberto Ilustre',81840578068);
const cliente2 = new Cliente('Melina Frangos Karnal',82240578098);

const conta1 = new Conta(3500,3134-8,cliente1);
const conta2 = new Conta(2000,3134-8,cliente2);

console.log(conta1.getSaldo());
console.log(conta2.getSaldo());











