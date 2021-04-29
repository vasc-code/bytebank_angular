import {Cliente} from "./Cliente.js";

import {Gerente} from "./Funcionarios/Gerente.js";
import {Diretor} from "./Funcionarios/Diretor.js";
import { SistemaAutenticacao } from "./SistemaAutenticacao.js";

const diretor = new Diretor("Rafael",10000,12345678900);
diretor.cadastrarSenha("123456789");
const gerente = new Gerente("João",80000,11122233344);
gerente.cadastrarSenha("123");

const cliente = new Cliente("Amanda",11111111100,"456");

const diretorEstaLogado = SistemaAutenticacao.login(diretor,"123456789");
const gerenteEstaLogado = SistemaAutenticacao.login(gerente,"123");
const clienteEstaLogado = SistemaAutenticacao.login(cliente,"456");
console.log(diretorEstaLogado);
console.log(gerenteEstaLogado);
console.log(clienteEstaLogado);
