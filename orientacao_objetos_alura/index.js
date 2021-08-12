import {Cliente} from "./Cliente.js"
import { ContaCorrente } from "./ContaCorrente.js"

const cliente1 = new Cliente()
cliente1.nome = 'Giuli Ilustre'
cliente1.cpf = 1234567890

const cliente2 = new Cliente()
cliente2.nome = 'Melina Angos'
cliente2.cpf = 82240578269

const contaCorrenteGiuli = new ContaCorrente()
contaCorrenteGiuli.agencia = 1001

contaCorrenteGiuli.depositar(100)
console.log(contaCorrenteGiuli)

const valorSacado = contaCorrenteGiuli.sacar(100)

console.log(contaCorrenteGiuli)
console.log(valorSacado)








