const pessoa = {
    nome: 'Marcello',
    sobrenome: 'Albuquerque',
    idade: 33,
    profissao: 'Desenvolvedor'
};

const novaPessoa = {
    sobrenome: 'Matoso',
    telefone: '8187975997',
    endereco: 'rua do teste, 666'
}


const exibeInfos = (nome, idade, profissao) => {
    console.log(nome)
    console.log(idade)
    console.log(profissao)
}


const exibeInfosDenovo = ({nome, idade, profissao}) => {
    console.log(nome)
    console.log(idade)
    console.log(profissao)
}


let { profissao, nome, idade }  = pessoa

exibeInfos(nome, idade, profissao)
exibeInfosDenovo(pessoa)