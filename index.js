import {Cliente} from "./Cliente.js";
import { Conta } from "./Conta.js";
import {ContaCorrente} from "./ContaCorrente.js";
import { ContaPoupanca } from "./ContaPoupanca.js";

const cliente1 = new Cliente("Rafael",11122233344);

const contaCorrenteRafael = new ContaCorrente(cliente1,1001);

const contaPoupanca = new ContaPoupanca(50,cliente1,1001);

const conta =  new Conta(0,cliente1,1001);

