/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./main.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./funcoes.js":
/*!********************!*\
  !*** ./funcoes.js ***!
  \********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.soma = soma;\n\nfunction soma(a, b) {\n  return a + b;\n}\n\n//# sourceURL=webpack:///./funcoes.js?");

/***/ }),

/***/ "./main.js":
/*!*****************!*\
  !*** ./main.js ***!
  \*****************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar _funcoes = __webpack_require__(/*! ./funcoes */ \"./funcoes.js\");\n\nconsole.log((0, _funcoes.soma)(1, 2)); // class Usuario{\n//     costructor(email, senha){\n//         this.email = email;\n//         this.senha = senha;\n//         this.admin = false;\n//     }\n//     isAdmin(){\n//         if(this.admin == true){\n//             return \"Adm\";\n//         }\n//         else{\n//             return \"Nao eh adm\";\n//         }\n//     }\n// }\n// //Para testar seus conhecimentos com classes, crie uma classe com nome \"Admin\", essa classe deve\n// //extender uma segunda classe chamada \"Usuario\".\n// /*A classe usuário deve receber dois parâmetros no método construtor, e-mail e senha, e anotá-los\n// em propriedades da classe. \n// A classe \"Admin\" por sua vez não recebe parâmetros mas deve repassar os parâmetros de e-mail e senha à classe pai e marcar uma propriedade \"admin\" como\n// true na classe.\n// Agora com suas classes formatadas, adicione um método na classe Usuario chamado isAdmin que\n// retorna se o usuário é administrador ou não baseado na propriedade admin ser true ou não.*/\n// class Admin extends Usuario {\n//     constructor(email, senha){\n//         super(email, senha);\n//         this.admin = true;\n//     }\n// }\n// const usuarios = [\n//     { nome: 'Diego', idade: 23, empresa: 'Rocketseat' },\n//     { nome: 'Gabriel', idade: 15, empresa: 'Rocketseat' },\n//     { nome: 'Lucas', idade: 30, empresa: 'Google' },\n//    ];\n//    //Crie uma variável que contenha todas idades dos usuários: [23, 15, 30]\n// var roots = usuarios.map(function (item, index){return usuarios[index].idade});\n// //Crie uma variáveis que tenha apenas os usuários que trabalham na Rocketseat e com mais de 18\n// //anos: [{ nome: 'Diego', idade: 23, empresa: 'Rocketseat' }]\n// var  roots = usuarios.filter((maioridade) => {\n//     return (maioridade.idade > 17);\n//   });\n//   // Crie uma variável que procura por um usuário que trabalhe na empresa Google: undefined\n//   roots = usuarios.find( x => x.empresa === 'Google');\n//  roots = usuarios.map((item, index) => (usuarios[index].idade * 2)).filter((maioridade) => {\n//     return (maioridade < 50);\n//   });\n// //console.log(roots);\n// //var teste = usuarios.filter((maioridade) => {\n//   //  return (maioridade.idade <= 50);\n//   //});\n// //console.log(roots);\n// const User1 = new Usuario('email@teste.com', 'senha123');\n// const Adm1 = new Admin('email@teste.com', 'senha123');\n// //console.log(User1.isAdmin()) // false\n// //console.log(Adm1.isAdmin()) // true\n// /* ARROW FUNCTION _________________________________________________________ */\n// // 3.1\n// const arr = [1, 2, 3, 4, 5];\n// var x = arr.map(function(item) {\n//  return item + 10;\n// });\n// //console.log(x);\n// arr.map(item => item+10);\n// //console.log(x);\n// // 3.2\n// // Dica: Utilize uma constante pra function\n// const usuario = { nome: 'Diego', idade: 23 };\n// function mostraIdade(usuario) {\n//  return usuario.idade;\n// }\n// //console.log(mostraIdade(usuario));\n// const mostraIdadee = (usuario) => { return usuario.idade };\n// //console.log(mostraIdadee(usuario));\n// // 3.3\n// // Dica: Utilize uma constante pra function\n// const nome = \"Diego\";\n// const idade = 23;\n// function mostraUsuario(nome = 'Diego', idade = 18) {\n//  return { nome, idade };\n// }\n// // console.log(mostraUsuario(nome, idade));\n// // console.log(mostraUsuario(nome));\n// const mostraUsuarioo = (nome = 'Diego', idade = 18) => { return {nome , idade} };\n// // console.log(mostraUsuarioo(nome, idade));\n// // console.log(mostraUsuarioo(nome));\n// // 3.4\n// const promise = function() {\n//  return new Promise(function(resolve, reject) {\n//  return resolve();\n//  })\n// }\n// //console.log(promise);  \n// const promisee = () => { return Promise = (resolve, reject) => { {return resolve()}}};\n// //console.log(promisee);  \n// // 4\n// var empresa = {\n//     nome: 'Rocketseat',\n//     endereco: {\n//     cidade: 'Rio do Sul',\n//     estado: 'SC',\n//     }\n//    };\n// var { nome: x, endereco: {cidade: y, estado: z} } = empresa;\n// // console.log(x);\n// // console.log(y);\n// // console.log(z);\n// // 4.2\n// function mostraInfo({nome: nome, idade: idade}) {\n//     return `${nome} tem ${idade} anos.`;\n//    }\n// //    console.log(mostraInfo({ nome: 'Diego', idade: 23 }));\n//    //return `${nome} tem ${idade} anos.`;usuarios\n// //    Exercicio 6 ___________________\n// var usuarioo = 'Diego';\n// var idadee = '23';\n// // console.log(`O usuário ${usuarioo} possui ${idade} anos`);\n// const nomee = 'Diego';\n// const idadeee = 23;\n// const usuariooo = {\n//  nomee,\n//  idadeee,\n//  cidade: 'Rio do Sul',\n// };\n// console.log(usuariooo);\n\n//# sourceURL=webpack:///./main.js?");

/***/ })

/******/ });