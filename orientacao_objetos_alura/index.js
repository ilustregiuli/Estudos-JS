class Cliente {
    nome;
    cpf;   
}

class ContaCorrente{
    agencia;
    saldo;

    sacar(valor){
        if(this.saldo >= valor){
            this.saldo -= valor
        }
    }

    depositar(valor) {
        if(valor > 0){
            this.saldo += valor
        }
    }
}

const cliente1 = new Cliente()
cliente1.nome = 'Giuli Ilustre'
cliente1.cpf = 01234567890

const cliente2 = new Cliente()
cliente2.nome = 'Melina Angos'
cliente2.cpf = 82240578269

const contaCorrenteGiuli = new ContaCorrente()
contaCorrenteGiuli.saldo = 1000
contaCorrenteGiuli.agencia = 1001

console.log(contaCorrenteGiuli.saldo + '  Antes de Sacar: ')
contaCorrenteGiuli.sacar(500)
console.log(contaCorrenteGiuli.saldo + '  Depois de Sacar: ')

contaCorrenteGiuli.depositar(200)

console.log(contaCorrenteGiuli.saldo + '  Depois de DEPOSITAR: ')






