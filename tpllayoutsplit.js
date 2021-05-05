const usuario = {
    nome: 'Marcello Albuquerque',
    email: 'marcello@teste.com'
}

let { nome, email} = usuario

//console.log('Olá, meu nome é ' + usuario.nome + '. meu email é: ' + usuario.email + '. Conte comigo na sua jornada!')
console.log(`Olá, meu nome é ${nome.substr(0,6)}. meu email é: ${email}. Conte comigo na sua jornada!`)


// Exemplo do uso do Split
const nomeUsuaria = 'Marcello Albuquerque'
const listaNomes = nomeUsuaria.split(' ')
console.log(listaNomes[0])