class Cliente{
    nome;
    cpf;
    agencia;
    saldo;
}

const cliente1 = new Cliente();
cliente1.nome = "Rafael";
cliente1.cpf = 11122233344;
cliente1.agencia = 1001;
cliente1.saldo = 0;

console.log(cliente1.nome);