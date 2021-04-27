import {Cliente} from "./Cliente.js";
import {ContaCorrente} from "./ContaCorrente.js";

const cliente1 = new Cliente("Rafael",11122233344);

const cliente2 = new Cliente("Alice",11111111100);

const contaCorrenteRafael = new ContaCorrente(1001,cliente1);

const contaCorrenteAlice = new ContaCorrente(101,cliente2);

let valor = 200
contaCorrenteRafael.depositar(500);
contaCorrenteRafael.transferir(valor, contaCorrenteAlice);

console.log(contaCorrenteRafael);
console.log(contaCorrenteAlice);
console.log(ContaCorrente.numeroDeContas);

