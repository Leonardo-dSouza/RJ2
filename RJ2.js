
function TelefoneCelular(ddd, numero) {
    this.ddd = ddd
    this.numero = numero

    this.getDdd = function() {
        return this.ddd
    }
    this.setDdd = function(novoDdd) {
        this.ddd = novoDdd
    }
    
    this.getNumero = function() {
        return this.numero
    }
    this.setNumero = function(novoNumero) {
        this.numero = novoNumero
    }
    
    this.getTelefoneCelularFormatado = function() {
        return `DDD: ${this.ddd}
Número: ${this.numero}`
    }
}

function Endereco(rua, numero, cidade, estado) {
    this.rua = rua
    this.numero = numero
    this.cidade = cidade
    this.estado = estado

    this.getRua = function() {
        return this.rua
    }
    this.setRua = function(novaRua) {
        this.rua = novaRua
    }
    
    this.getNumero = function() {
        return this.numero
    }
    this.setNumero = function(novoNumero) {
        this.numero = novoNumero
    }
    
    this.getCidade = function() {
        return this.cidade
    }
    this.setCidade = function(novaCidade) {
        this.cidade = novaCidade
    }
    
    this.getEstado = function() {
        return this.estado
    }
    this.setEstado = function(novoEstado) {
        this.estado = novoEstado
    }
    
    this.getEnderecoFormatado = function() {
        return `Rua: ${this.rua}
Número: ${this.numero}
Cidade: ${this.cidade}
Estado: ${this.estado}`
    }
}

function Cliente(nome, telefoneCelular, email, endereco) {
    this.nome = nome
    this.email = email
    this.telefoneCelular = telefoneCelular
    this.endereco = endereco

    this.getNome = function() {
        return this.nome
    }
    this.setNome = function(novoNome) {
        this.nome = novoNome
    }
    
    this.getEmail = function() {
        return this.email
    }
    this.setEmail = function(novoEmail) {
        this.email = novoEmail
    }
    
    this.getTelefoneCelular = function() {
        return this.telefoneCelular.getTelefoneCelularFormatado()
    }
    this.setTelefoneCelular = function(novoTelefone) {
        this.telefoneCelular = novoTelefone
    }
    
    this.getEndereco = function() {
        return this.endereco.getEnderecoFormatado()
    }
    this.setEndereco = function(novoEndereco) {
        this.endereco = novoEndereco
    }
    
    this.getNomeMinusculo = function(){
        return this.nome.toLowerCase()
    }
    
    this.getNomeMaiusculo = function(){
        return this.nome.toUpperCase()
    }
    
    this.getEmailMinusculo = function(){
        return this.email.toLowerCase()
    }
    
    this.getEmailMaiusculo = function(){
        return this.email.toUpperCase()
    }
    

    this.getEnderecoMinusculo = function(){
        return this.endereco.getEnderecoFormatado().toLowerCase()
    }
    
    this.getEnderecoMaiusculo = function(){
        return this.endereco.getEnderecoFormatado().toUpperCase()
    }
    
    
    
    
    
    this.getDescricao = function() {
        return `----------------------
Informações do Cliente:
${this.nome}
----------------------
----------------------
Telefone:
${this.telefoneCelular.getTelefoneCelularFormatado()}
----------------------
Endereço:
${this.endereco.getEnderecoFormatado()}
----------------------`
    }
}



function ordenarClientesPorNome(clientes) {
    return clientes.sort((a, b) => a.getNome().localeCompare(b.getNome()))
}

const telefone1 = new TelefoneCelular("11", "999999999");
const endereco1 = new Endereco("Av. Paulista", 987, "São Paulo", "SP");
const cliente1 = new Cliente("Carlos Conrado Heinz", telefone1, "carlos@email.com", endereco1);

const telefone2 = new TelefoneCelular("11", "988888888");
const endereco2 = new Endereco("Rua Consolação", 500, "São Paulo", "SP");
const cliente2 = new Cliente("Ana Silva Oliveira", telefone2, "ana.silva@email.com", endereco2);

const telefone3 = new TelefoneCelular("11", "977777777");
const endereco3 = new Endereco("Avenida Faria Lima", 1100, "São Paulo", "SP");
const cliente3 = new Cliente("Pedro Souza Pereira", telefone3, "pedro.souza@email.com", endereco3);

const telefone4 = new TelefoneCelular("11", "966666666");
const endereco4 = new Endereco("Rua dos Três Irmãos", 220, "São Paulo", "SP");
const cliente4 = new Cliente("Mariana Costa Lima", telefone4, "mariana.costa@email.com", endereco4);

const telefone5 = new TelefoneCelular("11", "955555555");
const endereco5 = new Endereco("Rua Vergueiro", 750, "São Paulo", "SP");
const cliente5 = new Cliente("Roberto Mendes Rodrigues", telefone5, "roberto.mendes@email.com", endereco5);

const telefone6 = new TelefoneCelular("11", "944444444");
const endereco6 = new Endereco("Avenida Brasil", 100, "São Paulo", "SP");
const cliente6 = new Cliente("Luiza Almeida Souza", telefone6, "luiza.almeida@email.com", endereco6);

const telefone7 = new TelefoneCelular("11", "933333333");
const endereco7 = new Endereco("Rua Augusta", 400, "São Paulo", "SP");
const cliente7 = new Cliente("José Rodrigues Lima", telefone7, "jose.rodrigues@email.com", endereco7);

const telefone8 = new TelefoneCelular("11", "922222222");
const endereco8 = new Endereco("Avenida 23 de Maio", 950, "São Paulo", "SP");
const cliente8 = new Cliente("Fernanda Costa Oliveira", telefone8, "fernanda.costa@email.com", endereco8);

const telefone9 = new TelefoneCelular("11", "911111111");
const endereco9 = new Endereco("Rua Cardoso Pimentel", 800, "São Paulo", "SP");
const cliente9 = new Cliente("João Lima Pereira", telefone9, "joao.lima@email.com", endereco9);

const telefone10 = new TelefoneCelular("11", "900000000");
const endereco10 = new Endereco("Rua do Sol", 900, "São Paulo", "SP");
const cliente10 = new Cliente("Sofia Almeida Souza", telefone10, "sofia.almeida@email.com", endereco10);

const telefone11 = new TelefoneCelular("11", "988999999");
const endereco11 = new Endereco("Rua da Paz", 850, "São Paulo", "SP");
const cliente11 = new Cliente("Carlos Alberto Santos", telefone11, "carlos.alberto@email.com", endereco11);

const telefone12 = new TelefoneCelular("11", "977888888");
const endereco12 = new Endereco("Avenida Ibirapuera", 1700, "São Paulo", "SP");
const cliente12 = new Cliente("Mariana Oliveira Souza", telefone12, "mariana.oliveira@email.com", endereco12);

const telefone13 = new TelefoneCelular("11", "966777777");
const endereco13 = new Endereco("Rua das Palmeiras", 600, "São Paulo", "SP");
const cliente13 = new Cliente("Pedro Costa Lima", telefone13, "pedro.costa@email.com", endereco13);

const telefone14 = new TelefoneCelular("11", "955666666");
const endereco14 = new Endereco("Avenida Nove de Julho", 300, "São Paulo", "SP");
const cliente14 = new Cliente("Roberto Souza Almeida", telefone14, "roberto.souza@email.com", endereco14);

const telefone15 = new TelefoneCelular("11", "944555555");
const endereco15 = new Endereco("Rua da Consolação", 1200, "São Paulo", "SP");
const cliente15 = new Cliente("Luiza Mendes Rodrigues", telefone15, "luiza.mendes@email.com", endereco15);

const telefone16 = new TelefoneCelular("11", "933444444");
const endereco16 = new Endereco("Rua dos Três Irmãos", 1000, "São Paulo", "SP");
const cliente16 = new Cliente("José Almeida Souza", telefone16, "jose.almeida@email.com", endereco16);

const telefone17 = new TelefoneCelular("11", "922333333");
const endereco17 = new Endereco("Avenida Pacaembu", 450, "São Paulo", "SP");
const cliente17 = new Cliente("Fernanda Rodrigues Lima", telefone17, "fernanda.rodrigues@email.com", endereco17);

const telefone18 = new TelefoneCelular("11", "911222222");
const endereco18 = new Endereco("Rua dos Três Irmãos", 1300, "São Paulo", "SP");
const cliente18 = new Cliente("João Mendes Oliveira", telefone18, "joao.mendes@email.com", endereco18);

const telefone19 = new TelefoneCelular("11", "900111111");
const endereco19 = new Endereco("Rua Augusta", 600, "São Paulo", "SP");
const cliente19 = new Cliente("Sofia Costa Rodrigues", telefone19, "sofia.costa@email.com", endereco19);

const telefone20 = new TelefoneCelular("11", "988000000");
const endereco20 = new Endereco("Avenida Paulista", 1234, "São Paulo", "SP");
const cliente20 = new Cliente("Carlos Henrique Silva", telefone20, "carlos.henrique@email.com", endereco20);



const clientes = [
    cliente1, cliente2, cliente3, cliente4, cliente5,
    cliente6, cliente7, cliente8, cliente9, cliente10,
    cliente11, cliente12, cliente13, cliente14, cliente15,
    cliente16, cliente17, cliente18, cliente19, cliente20
]

const clientesOrdenados = ordenarClientesPorNome(clientes)


clientesOrdenados.forEach(cliente => {
    console.log(cliente.getDescricao())
    console.log()
})






