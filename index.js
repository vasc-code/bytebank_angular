import {Cliente} from "./Cliente.js";
import {ContaCorrente} from "./ContaCorrente.js";
import { ContaPoupanca } from "./ContaPoupanca.js";
import { ContaSalario } from "./ContaSalario.js";

const cliente1 = new Cliente("Rafael",11122233344);

const contaCorrenteRafael = new ContaCorrente(cliente1,1001);

const contaPoupanca = new ContaPoupanca(50,cliente1,1001);

const contaSalario =  new ContaSalario(cliente1);
contaSalario.depositar(1000);
contaSalario.sacar(100);
console.log(contaSalario);

