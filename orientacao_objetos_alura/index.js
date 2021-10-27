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
contaCorrenteGiuli.cliente = cliente1

const contaCorrenteMelina = new ContaCorrente()
contaCorrenteMelina.agencia = 1013
contaCorrenteMelina.cliente = cliente2

contaCorrenteGiuli.depositar(1000)

console.log('Antes da transferencia ---------------------------')
console.log(contaCorrenteGiuli)
console.log(contaCorrenteMelina)

contaCorrenteGiuli.transferir(100,contaCorrenteMelina)

console.log('Depois da transferencia ---------------------------')
console.log(contaCorrenteGiuli)
console.log(contaCorrenteMelina)











