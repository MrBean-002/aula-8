
/*console.log("ola, mundo!")
prompt("Qual é o seu nome")

 //const nome = "João"
//let sobrenome = "Vítor"
//const idade = 15
let estudante = false

//console.log("meu nome é:", nome , sobrenome ,"minha idade é:" + idade + " . sou estudante?", estudante)

const nome = prompt ("Qual é o seu nome")
const idade = prompt ("Qual é sua idade")

console.log(typeof nome, typeof idade)*/





/*let a = 10
let b = 10
//b = 10
console.log(b)

b = 5
console.log(a, b)
//a = 10 b =5

let a = 10
let b = 20
c = a //vale 10
b = c // vale 10
a = b //vale 10

console.log(a, b, c)

let p = prompt("Quantas horas você trabalha por dia?")
let t = prompt("Quanto você recebe por dia?")
alert(`Voce recebe ${t/p} por hora`)

// vai aparecer a divisao disso ${t/p*/

/*var  nome = prompt ("Qual é o seu nome")
var  idade = prompt ("Qual é a sua idade")

//console.log(typeof nome, typeof idade) //apareceu string string tipo texto porque eu pedi

//console.log("Qual seu nome", nome, "Qual é a sua idade", idade)

//console.log("ola nome", nome, "qual é sua idade", idade */

/*const primeiroValor = 4
const segundoValor = 3

const resultado = primeiroValor + segundoValor 

console.log(resultado)*/

/*const primeiroValor = 10
const segundoValor = 20

const resultado = primeiroValor - segundoValor

console.log(resultado)*/

/*const primeiroValor = 10
const segundoValor = 25

const resultado = primeiroValor* segundoValor

console.log(resultado)*/

/*const primeiroValor = 345
const segundovalor = 10

const  resultado = primeiroValor/ segundovalor

console.log(resultado)*/

/*const A = true
const B = false
const C = true

A||B
B||C
A||C
A||B||C*/


/*const bool1 = true
const bool2 = false
const bool3 = !bool2

let resultado = bool1 && bool2 && bool3 

console.log("b. ", resultado) 

resultado = !resultado && (bool1 || bool2) 
console.log("c. ", resultado)

console.log("d. ", typeof resultado)*///Vai aparecer true,false e false

/*let primeiroNumero = Number(prompt("Digite um numero!"))
let segundoNumero = Number(prompt("Digite outro numero!"))

const resultado = primeiroNumero + segundoNumero

console.log(resultado)// vai aparecer os numeros que voce colocar, juntados*/

/*let idadeUsuario = Number(prompt("Qual a sua idade?"))
let idadeAmigo = Number(prompt("Qual a idade do seu amigo(A)"))

console.log("Sua idade é maior do que a do seu melhor amigo?, idadeUsuario >=idadeAmigo")
console.log("diferença de idade:", Number(idadeUsuario-idadeAmigo))

let numPar = Number(prompt("Insira um numero par"))
const resultado = Number(numPar/2)

console.log(resultado)//não notei padrão 

const restoDaDivisão = (numPar%2)
console.log(restoDaDivisão)*/


/*let idade = Number(prompt("Qual a sua idade ?"))

const idadeMeses = idade*12
resultado=idade*12 
console.log(resultado)

const idadeAnos = idade*365
resultado1=idade*365
console.log(resultado1)

const idadeHoras = resultado1*24
resultado=resultado1*24
console.log(resultado)*/


/*let numero1 = Number(prompt("Digite um numero"))
let numero2 = Number(prompt("Digite outro numero"))

console.log(numero1 > numero2)*/

/*let nome = prompt("Qual seu nome")
let corfav = prompt("Qual sua cor favorita")

const frase = (" A cor favorita de " + nome + "é" + corfav )

console.log(frase)*/

/*let frase = prompt("escreva uma frase")
const fraseMaiuscula = frase.toUpperCase(frase)
console.log(fraseMaiuscula)

const novaFrase =frase.replaceAll("o", "i" )
console.log(novaFrase)

console.log(frase.length)*/

/*let frase = prompt("escreva de 0 a 4, raças de cachoro ")
const raçaDeCacho = ["Pastor-alemão", "Buldoque", "poodle", "Chihuahua", "Beagle"]
const raça = raçaDeCacho[4]
console.log(raça)

const numeros = [1,2,3,4,5,6]
console.log(numeros.length)
numeros.push(7)
console.log(numeros)
numeros.splice(3,2)
console.log(numeros)
console.log(numeros.length)*/

/*let array
console.log('a. ', array)// Vai aparecer a. undefined

array = null
console.log('b. ', array) // Vai aparecer b. null

array = [3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13]
console.log('c. ', array.length) // Vai aparecer c. e a quantidade de itens que tem no array

let i = 0
console.log('d. ', array[i])// Vai aparecer 3

array[i+1] = 19
console.log('e. ', array)//Vai aparecer e. a quantidade de itens no array e lista de numeros.

const valor = array[i+6]
console.log('f. ', valor) //Vai aparecer f. e o valor do array*/

/*const frase = prompt("Digite uma frase")

console.log(frase.toUpperCase().replaceAll("A", "I"), frase.length) // Vai aparecer no console a frase "suba num  ônabus em marrocos " e o numero de letras no array*/

/*let = prompt("Coloque seu email")
let nomeDoUsua = prompt("Digite o seu nome de usuario")

const emailDoUsua = "jvitordarosamarques@gmail.com"

const frase  =( " O email " + emailDoUsua + " foi cadastrado com sucesso. " + " Seja bem vindo(a), " + nomeDoUsua + "!")

console.log(frase)*/

/*const comidaPre = ["batatafrita", "carne", "hotdog", "salada", "brigadeiro"]


const comida = comidaPre[0]
console.log(comida)
const comidas = comidaPre[1]
console.log(comidas)
const almoço = comidaPre[2]
console.log(almoço)
const jantar = comidaPre[3]
console.log(jantar)
const itens = comidaPre[4]
console.log(itens)

let comidafav = prompt("essas sao minhas comidas favoritas")
comidaPre[1]*/

/*function imprimirOlaMundo() {           
console.log("OlaMundo!")
}
imprimirOlaMundo()

function imprimirNome(nome) {
    console.log (`Olá ${nome}` )
}
imprimirNome("joao")
imprimirNome("Lucas")
imprimirNome("benicio")

function calculaNumero(numero1, numero2) {
const numeros = numero1 + numero2
return numeros  
}
const numerosCalculados = calculaNumero(5, 6)

console.log(calculaNumero(5, 6))

let array = [8, 5, 4, 3, 2, 6]
function listaNumero(array) {
let novoArray = []   
let a = novoArray[0] /2
let b = array[4] /2
novoArray.push (a, b)
return novoArray
}

listaNumero(array)
console.log(listaNumero(array))*/

/*const nomes = function(nome){
const listNome {joao, lucas , benicio}
const listNome2 {maria,brenda,julia}
return listNome
}

nome*/

/*function minhaFuncao(variavel) {
	return variavel * 5
}

console.log (minhaFuncao(2))
console.log(minhaFuncao(10))*///a) Vai retornar a variavel multiplicada por cinco  e aparecer no console. b) vai dar erro

/*let textoDoUsuario = prompt("Insira um texto");

const outraFuncao = function(texto) {
	return texto.toLowerCase().includes("cenoura")
}

const resposta = outraFuncao(textoDoUsuario)
console.log(resposta)*///a)A funcao determina se true ou false e sua utilidade e falar se é true ou false. b) i = true ii=true iii=true

/*const nome = prompt("Qual é o seu nome")
const idade = Number("Qual é a sua idade")
const endereço = prompt("Qual é o seu endereço")
const emprego = prompt("Qual é o seu emprego")

function mensagem(nome, idade, endereço, emprego, ){
let frase = ${nome}
}

console.log(imprimirfrase)*/

/*const filme = {
	nome: "Auto da Compadecida", 
	ano: 2000, 
	elenco: [
		"Matheus Nachtergaele", "Selton Mello", "Denise Fraga", 
		"Virginia Cavendish"
		], 
	transmissoesHoje: [
		{canal: "Telecine", horario: "21h"}, 
		{canal: "Canal Brasil", horario: "19h"}, 
		{canal: "Globo", horario: "14h"}
		]
}

console.log(filme.elenco[0])
console.log(filme.elenco[filme.elenco.length - 1])
console.log(filme.transmissoesHoje[2])*///Vai ser impresso no console o nome de duas pessoas do elenco  o canal e o horario que passa o filme

/*const cachorro = {
	nome: "Juca", 
	idade: 3, 
	raca: "SRD"
}

const gato = {...cachorro, nome: "Juba"}

const tartaruga = {...gato, nome: gato.nome.replaceAll("a", "o")}

console.log(cachorro)
console.log(gato)
console.log(tartaruga)*///A)Aparece impresso no console os nome dos animais com um com a letra trocada B)A sintaxe interliga eles

/*function minhaFuncao(objeto, propriedade) {
	return objeto[propriedade]
}

const pessoa = {
  nome: "Caio", 
  idade: 23, 
  backender: false
}

console.log(minhaFuncao(pessoa, "backender"))
console.log(minhaFuncao(pessoa, "altura"))*///A)vai aparecer impresso no console que backender é false e a altura indefinida B) o valor do backender vai aparecer false porque esse é valor dele e a altura vai aparecer indefinido porque não tem valor

/*const pessoa = {
	nome: "João", 
	apelidos: ["jão", "jv", "Joaozão"],
		
}
console.log(pessoa.nome)
console.log(pessoa.apelidos)
function arquivo(pessoa){
console.log(" Eu sou " + pessoa.nome + " mas pode me chamar de: " + pessoa.apelidos)

}
arquivo(pessoa)

const novaPessoa ={
	...pessoa, 
	apelidos : ["jo", "joa", "vj"]
}
 arquivo(novaPessoa)*/

 /*let a = Number(prompt ( "digite um numero"))
 let b = Number(prompt("digite outro numero"))

 function comparar(num1, num2){
	if (num1 === num2){
		console.log("São iguais")
	}
 }

comparar(a,b)*/

/*let a = Number(prompt("digite um numero") ) 
let b = Number(prompt("digite outro numero"))

function comparar(num1, num2){
	if(num1 === num2){
		console.log("Sao iguais")
	}else if (num1 > num2){
console.log("num1 é maior que o num2")
	}else{
		console.log("num1 é maior que o num2")
	}
}
comparar(a, b )*/

/*let pokemon =prompt("Escolha seu pokemon inicial")
switch(pokemon){
	case 'chamander':
	console.log('fogo')
	break
	case 'chamander':
	console.log('fogo')
	break
	case 'chamander':
    console.log('fogo')
	break
	default:
	console.log('tipo fogo')
	break

}*/

let idade = Number(prompt("Qual é a sua idade"))
let ensCon = prompt("Voce terminou o ensino medio")
let facul = prompt("Esta cursando uma faculdade")

function curriculo(idade, ensCon, facul){
	if(idade >= 18 && ensCon === 'sim' && facul === 'não'){
	console.log("pode estudar")
	}else{("não pode estudar")
	}
}
curriculo(idade, ensCon, facul)






