export class Conta{
    constructor(saldoInicial,cliente,agencia){
        this._saldo = saldoInicial;
        this._cliente = cliente;
        this._agencia = agencia;
    }

    sacar(valor){
        if(this._saldo >= valor){
            this._saldo -= valor
            return valor
        }
        
    }

    depositar(valor) {
        //early return
        if(valor <= 0){
            return
        }

        this._saldo += valor
    }

    transferir(valor, conta){
        const valorSacado = this.sacar(valor)
        conta.depositar(valorSacado)

    }

    getSaldo(){
        return this._saldo;
    }


}