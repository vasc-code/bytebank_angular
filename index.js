class Cliente{
    nome;
    cpf;
    agencia;
    saldo;
}

const cliente1 = new Cliente();
const cliente2 = new Cliente();

cliente1.nome = "Rafael";
cliente1.cpf = 11122233344;
cliente1.agencia = 1001;
cliente1.saldo = 0;

cliente2.nome = "Alice";
cliente2.cpf = 11111111100;
cliente2.agencia = 1001;
cliente2.saldo = 0;

console.log(cliente1,cliente2);