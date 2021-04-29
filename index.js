import {Cliente} from "./Cliente.js";
import {ContaCorrente} from "./ContaCorrente.js";
import { ContaPoupanca } from "./ContaPoupanca.js";

const cliente1 = new Cliente("Rafael",11122233344);

const contaCorrenteRafael = new ContaCorrente(cliente1,1001);
contaCorrenteRafael.depositar(500);
contaCorrenteRafael.sacar(100);

const contaPoupanca = new ContaPoupanca(50,cliente1,1001);
contaPoupanca.sacar(10);

console.log(contaCorrenteRafael);
console.log(contaPoupanca);

