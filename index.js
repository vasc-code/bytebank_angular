class Cliente{
    nome;
    cpf;
}

class ContaCorrente{
    agencia;
    //#saldo = 0;
    _saldo = 0;

    sacar(valor){
        if(this._saldo >= valor){
            this._saldo -= valor;
            return valor;
        }        
    }

    depositar(valor){
        if(valor <= 0){
            return;
        } 
        this._saldo+=valor;
    }
}
const cliente1 = new Cliente();
cliente1.nome = "Rafael";
cliente1.cpf = 11122233344;

const contaCorrenteRafael = new ContaCorrente()
contaCorrenteRafael.agencia = 1001;

contaCorrenteRafael.depositar(100);
const valorSacado = contaCorrenteRafael.sacar(50);
console.log(valorSacado);
console.log(contaCorrenteRafael);

const cliente2 = new Cliente();
cliente2.nome = "Alice";
cliente2.cpf = 11111111100;

const contaCorrenteAlice = new ContaCorrente();
contaCorrenteAlice.agencia = 1001;
contaCorrenteAlice.saldo = 0;
