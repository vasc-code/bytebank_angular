import {Cliente} from "./Cliente.js";
import {ContaCorrente} from "./ContaCorrente.js";

const cliente1 = new Cliente();
cliente1.nome = "Rafael";
cliente1.cpf = 11122233344;

const contaCorrenteRafael = new ContaCorrente()
contaCorrenteRafael.agencia = 1001;
contaCorrenteRafael.cliente = cliente1;

const cliente2 = new Cliente();
cliente2.nome = "Alice";
cliente2.cpf = 11111111100;

const contaCorrenteAlice = new ContaCorrente();
contaCorrenteAlice.agencia = 102;
contaCorrenteAlice.cliente = cliente2;

let valor = 200
contaCorrenteRafael.depositar(500);
contaCorrenteRafael.transferir(valor, contaCorrenteAlice);

console.log("valor: ",valor);
console.log(contaCorrenteRafael);
console.log(contaCorrenteAlice);
