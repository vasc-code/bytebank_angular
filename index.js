import {Cliente} from "./Cliente.js";
import {ContaCorrente} from "./ContaCorrente.js";

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
