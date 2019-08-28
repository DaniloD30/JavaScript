import {soma} from './funcoes'
console.log(soma(1,2));

// class Usuario{
//     costructor(email, senha){
//         this.email = email;
//         this.senha = senha;
//         this.admin = false;
//     }

//     isAdmin(){
//         if(this.admin == true){
//             return "Adm";
//         }
//         else{
//             return "Nao eh adm";
//         }
//     }
// }

// //Para testar seus conhecimentos com classes, crie uma classe com nome "Admin", essa classe deve
// //extender uma segunda classe chamada "Usuario".

// /*A classe usuário deve receber dois parâmetros no método construtor, e-mail e senha, e anotá-los
// em propriedades da classe. 
// A classe "Admin" por sua vez não recebe parâmetros mas deve repassar os parâmetros de e-mail e senha à classe pai e marcar uma propriedade "admin" como
// true na classe.
// Agora com suas classes formatadas, adicione um método na classe Usuario chamado isAdmin que
// retorna se o usuário é administrador ou não baseado na propriedade admin ser true ou não.*/

// class Admin extends Usuario {
//     constructor(email, senha){
//         super(email, senha);
//         this.admin = true;
//     }
// }

// const usuarios = [
//     { nome: 'Diego', idade: 23, empresa: 'Rocketseat' },
//     { nome: 'Gabriel', idade: 15, empresa: 'Rocketseat' },
//     { nome: 'Lucas', idade: 30, empresa: 'Google' },
//    ];

//    //Crie uma variável que contenha todas idades dos usuários: [23, 15, 30]

// var roots = usuarios.map(function (item, index){return usuarios[index].idade});

// //Crie uma variáveis que tenha apenas os usuários que trabalham na Rocketseat e com mais de 18
// //anos: [{ nome: 'Diego', idade: 23, empresa: 'Rocketseat' }]
// var  roots = usuarios.filter((maioridade) => {
//     return (maioridade.idade > 17);
//   });

//   // Crie uma variável que procura por um usuário que trabalhe na empresa Google: undefined

//   roots = usuarios.find( x => x.empresa === 'Google');

//  roots = usuarios.map((item, index) => (usuarios[index].idade * 2)).filter((maioridade) => {
//     return (maioridade < 50);
//   });
  
// //console.log(roots);
// //var teste = usuarios.filter((maioridade) => {
//   //  return (maioridade.idade <= 50);
//   //});
// //console.log(roots);
// const User1 = new Usuario('email@teste.com', 'senha123');
// const Adm1 = new Admin('email@teste.com', 'senha123');
// //console.log(User1.isAdmin()) // false
// //console.log(Adm1.isAdmin()) // true

// /* ARROW FUNCTION _________________________________________________________ */

// // 3.1
// const arr = [1, 2, 3, 4, 5];
// var x = arr.map(function(item) {
//  return item + 10;
// });
// //console.log(x);
// arr.map(item => item+10);
// //console.log(x);
// // 3.2
// // Dica: Utilize uma constante pra function
// const usuario = { nome: 'Diego', idade: 23 };
// function mostraIdade(usuario) {
//  return usuario.idade;
// }
// //console.log(mostraIdade(usuario));

// const mostraIdadee = (usuario) => { return usuario.idade };
// //console.log(mostraIdadee(usuario));

// // 3.3
// // Dica: Utilize uma constante pra function
// const nome = "Diego";
// const idade = 23;

// function mostraUsuario(nome = 'Diego', idade = 18) {
//  return { nome, idade };
// }
// // console.log(mostraUsuario(nome, idade));
// // console.log(mostraUsuario(nome));

// const mostraUsuarioo = (nome = 'Diego', idade = 18) => { return {nome , idade} };

// // console.log(mostraUsuarioo(nome, idade));
// // console.log(mostraUsuarioo(nome));
// // 3.4
// const promise = function() {
//  return new Promise(function(resolve, reject) {
//  return resolve();
//  })
// }
// //console.log(promise);  
// const promisee = () => { return Promise = (resolve, reject) => { {return resolve()}}};
// //console.log(promisee);  

// // 4
// var empresa = {
//     nome: 'Rocketseat',
//     endereco: {
//     cidade: 'Rio do Sul',
//     estado: 'SC',
//     }
//    };

// var { nome: x, endereco: {cidade: y, estado: z} } = empresa;
// // console.log(x);
// // console.log(y);
// // console.log(z);


// // 4.2

// function mostraInfo({nome: nome, idade: idade}) {
//     return `${nome} tem ${idade} anos.`;
//    }
// //    console.log(mostraInfo({ nome: 'Diego', idade: 23 }));


//    //return `${nome} tem ${idade} anos.`;usuarios


// //    Exercicio 6 ___________________

// var usuarioo = 'Diego';
// var idadee = '23';
// // console.log(`O usuário ${usuarioo} possui ${idade} anos`);

// const nomee = 'Diego';
// const idadeee = 23;

// const usuariooo = {
//  nomee,
//  idadeee,
//  cidade: 'Rio do Sul',
// };

// console.log(usuariooo);