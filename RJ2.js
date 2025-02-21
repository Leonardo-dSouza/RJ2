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
        return `DDD: ${this.ddd}\nNúmero: ${this.numero}`
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
        return `Rua: ${this.rua}\nNúmero: ${this.numero}\nCidade: ${this.cidade}\nEstado: ${this.estado}`
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
    
    this.getDetalhes = function() {
        return `----------------------\nInformações do Cliente:\n${this.nome}\n----------------------\n----------------------\nTelefone:\n${this.telefoneCelular.getTelefoneCelularFormatado()}\n----------------------\nEndereço:\n${this.endereco.getEnderecoFormatado()}\n----------------------`
    }
}

function ordenarClientesPorNome(clientes) {
    return clientes.sort((a, b) => a.getNome().localeCompare(b.getNome()))
}

const telefone1 = new TelefoneCelular("11", "999999999")
const endereco1 = new Endereco("Av. Paulista", 987, "São Paulo", "SP")
const cliente1 = new Cliente("Carlos Conrado Heinz", telefone1, "carlos@email.com", endereco1)

console.log(cliente1.getDetalhes())
