// alerta
//alert("OLÁ MUNDO!")

// variáveis
var nome = "Anderson"; //string
var sobrenome = "Pontes Batalha"; //string
var idade = 24; // inteiro
var lista = [10,20,30] // lista

//exibindo no console
console.log(nome + " tem " + idade + " anos.");     

// operações com variáveis

//strings
console.log(nome + " " + sobrenome); // concatenação de strings
console.log(nome.replace("Anderson", "Roberto") + " " + sobrenome.replace("Pontes Batalha", "Silva")) 
console.log(nome.toLowerCase()); // somente letras minúsculas
console.log(nome.toUpperCase()); // somente letras maiúsculas

// inteiros
console.log(idade + 30); //operações matemáticas
console.log(idade * 2); //operações matemáticas
console.log(idade - 5); //operações matemáticas
console.log(idade / 3); //operações matemáticas

// listas

var lista = [0,1,2,3,4,5,6,7,8,9] //criando uma lista
console.log(lista[5]); // acessando um elemento. Índices de 0 até n_elementos-1
lista.push(10); //adiciona um elemento ao fim da lista
console.log(lista);
lista.pop(); // remove o último elemento
console.log(lista);
console.log(lista.length); // número de elementos da lista
console.log(lista.reverse());
console.log(lista.indexOf(5)); // retorna o índice de um elemento na lista
console.log(lista.toString()); // retorna os elementos da lista em formato de string
console.log(lista.join(" | ")); // concatena os elementos de uma lista separados por um caracter especificado
var lista2 = [57, 32, 10, 8, 23, -5, -98]
console.log(lista2.sort()); // ordena os elementos da lista

// dicionário: par no formato chave, valor
var pais = {
    nome: "Brasil",
    idioma: "Português",
    capital: "Brasília",
    maiores_cidades: ["Rio de Janeiro", "São Paulo"],
} // criando um dicionário

// existem duas formas de acessar os elementos do dicionário
console.log(pais);
console.log(pais.nome);
console.log(pais['capital']);

var paises = [
    {
        nome: "Argentina",
        idioma: "Espanhol",
        capital: "Buenos Aires",
    },
    {
        nome: "Equador",
        idioma: "Espanhol",
        capital: "Quito",
    },
    {
        nome: "França",
        idioma: "Francês",
        capital: "Paris",
    },
    {
        nome: "Estados Unidos",
        idioma: "Inglês",
        capital: "Washington DC",
    },
    {
        nome: "Canadá",
        idioma: "Inglês / Francês",
        capital: "Ottawa",
    },
]

console.log("Percorrendo a lista de dicionários:");
for (i = 0; i < paises.length; i++) {
    console.log(paises[i].nome);
}

// condicional: if / else

/*
if (condicao1) {
    instrucoes
}
else if (condicao2) {
    instrucoes
}
else {
    instrucoes
}
var idade = prompt("Qual a sua idade?");
if (idade >= 18) {
    alert("Maior de idade!");
}
else {
    alert("Menor de idade!");    
}
*/
// case
/*
var opcao = prompt("Escolha sua matéria preferida: 1 - Matemática / 2 - Português / 3 - Química / 4 - Física / 5 - Geografia / 6 - História / 7 - Literatura / 8 - Educação Física / 9 - Outro(a)");

switch (opcao) {
    case "1":
        alert("Você prefere Matemática.");
        break;

    case "2":
        alert("Você prefere Português.");
        break;

    case "3":
        alert("Você prefere Química.");
        break;

    case "4":
        alert("Você prefere Física.");
        break;            
    case "5":
        alert("Você prefere Geografia.");
        break;            
    case "6":
        alert("Você prefere História.");
        break;            
    case "7":
        alert("Você prefere Literatura.");
        break;            
    case "8":
        alert("Você prefere Educação Física.");
        break;            
    case "9":
        var outro = prompt("Escreva aqui sua matéria favorita: ");
        alert("Você prefere "+ outro + ".");
        break;                
    default:
        break;
}
*/

// estruturas de repetição: while, for

//while
/*
var timer = 10;
alert("Esta mensagem se autodestruirá em ...");
while (timer != 0) {
    alert(timer);  
    timer--;
}
alert("BOOOOOM !!");
*/

var frutas = ["pêra", "uva", "maçã", "laranja", "maracujá", "kiwi", "melão", "melancia", "pêssego", "morango"]

//for

for (var i = 0; i < frutas.length; i++) {
    console.log(frutas[i]);
}

// Date: manipulação de datas em JavaScript

/*var dataAtual = new Date();
alert("Data completa: " + dataAtual); // exibindo a data e hora atual
alert("Horas: " + dataAtual.getHours()); 
alert("Minutos: " + dataAtual.getMinutes());
alert("Segundos: " + dataAtual.getSeconds());
alert("Milissegundos: " + dataAtual.getMilliseconds());
alert("Dia " + dataAtual.getDate());
alert("Mês: " + (dataAtual.getMonth()+1));
alert("Ano: " +     dataAtual.getFullYear());
*/

/* Funções 
function nome_funcao(parametro1, parametro2, ...) {
    instrucoes
}
*/

function soma(n1,n2) {
    return n1+n2;
}

console.log(soma(3,4));

function percorreLista(lista) {
    for (item in lista) {
        console.log(item);
    }
}

percorreLista(lista);

/*escopo das variáveis 
variável global: é criada e acessada em qualquer parte do código
variável local: é criada e acessada apenas dentro da função
*/

var estado_civil = undefined;

function verificaEstadoCivil(opcao) {
    var estado_civil;
    if (opcao === "S" || opcao === "s") { estado_civil = "Solteiro"; }
    else if (opcao === "C" || opcao === "c") { estado_civil = "Casado"; }
    else { estado_civil = "Desconhecido"; }
    return estado_civil;
}

//alert(verificaEstadoCivil("lfkmkfsa") + "       " + estado_civil); // está acessando a variável dentro da função, não altera o valor da variável global.

// eventos: onclick, onchange, onload, onmouseover, onmouseout, redirecionar para outra página

function exibirMsg() {
    alert("Botão clicado!");
    console.clear();
}

function abrirPagina() {
    window.open("http://www.globoesporte.com");
    window.location.href = "http://www.globoesporte.com";
}

function mudarTexto(elemento) {
    elemento.innerHTML = "Texto escondido";
    elemento.style.color = "red";
    elemento.style.fontSize = "2em";
}

function voltarTextoOriginal(elemento) {
    elemento.innerHTML = "Texto de exemplo";
    elemento.style.color = "black";
    elemento.style.fontSize = "1em";
    elemento.style.border = "1px solid cyan";
}

function mensagem() {
    alert("Bem vindo!");
    console.clear();
}

function exibirValorSelecionado(elemento) {
    console.clear();
    console.log(elemento.value);
}