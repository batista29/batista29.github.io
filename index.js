function carregar() {

    let anoNascimento = 2005
    let mesNascimento = 08
    let diaNascimento = 29

    let date = new Date()

    let anoAtual = date.getFullYear()
    let mesAtual = date.getMonth() + 1
    let diaAtual = date.getDate()

    let idade = anoAtual - anoNascimento

    if (diaNascimento > diaAtual && mesNascimento > mesAtual) {
        idade = idade - 1
    }

    let infos = document.querySelector(".infos")

    infos.innerHTML = `Olá! Meu nome é Natã Batista, tenho ${idade} anos, sou programador full stack, formado no curso Técnico em Desenvolvimento de Sistemas no SENAI-SP e estou cursando o último ano do ensino médio junto ao Técnico em Informática para Internet.`
}