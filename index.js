import {Cliente} from "./Cliente.js";
import {ContaCorrente} from "./ContaCorrente.js";
import { ContaPoupanca } from "./ContaPoupanca.js";
import{ Conta } from "./Conta.js";

const cliente1 = new Cliente("Rafael",11122233344);

const contaCorrenteRafael = new Conta(0,cliente1,1001);
contaCorrenteRafael.depositar(500);
contaCorrenteRafael.sacar(100);

const contaPoupanca = new Conta(50,cliente1,1001);

console.log(contaCorrenteRafael);
console.log(contaPoupanca);

