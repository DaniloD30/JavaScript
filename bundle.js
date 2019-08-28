"use strict";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Usuario =
/*#__PURE__*/
function () {
  function Usuario() {
    _classCallCheck(this, Usuario);
  }

  _createClass(Usuario, [{
    key: "costructor",
    value: function costructor(email, senha) {
      this.email = email;
      this.senha = senha;
      this.admin = false;
    }
  }, {
    key: "isAdmin",
    value: function isAdmin() {
      if (this.admin == true) {
        return "Adm";
      } else {
        return "Nao eh adm";
      }
    }
  }]);

  return Usuario;
}(); //Para testar seus conhecimentos com classes, crie uma classe com nome "Admin", essa classe deve
//extender uma segunda classe chamada "Usuario".

/*A classe usuário deve receber dois parâmetros no método construtor, e-mail e senha, e anotá-los
em propriedades da classe. 
A classe "Admin" por sua vez não recebe parâmetros mas deve repassar os parâmetros de e-mail e senha à classe pai e marcar uma propriedade "admin" como
true na classe.
Agora com suas classes formatadas, adicione um método na classe Usuario chamado isAdmin que
retorna se o usuário é administrador ou não baseado na propriedade admin ser true ou não.*/


var Admin =
/*#__PURE__*/
function (_Usuario) {
  _inherits(Admin, _Usuario);

  function Admin(email, senha) {
    var _this;

    _classCallCheck(this, Admin);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(Admin).call(this, email, senha));
    _this.admin = true;
    return _this;
  }

  return Admin;
}(Usuario);

var usuarios = [{
  nome: 'Diego',
  idade: 23,
  empresa: 'Rocketseat'
}, {
  nome: 'Gabriel',
  idade: 15,
  empresa: 'Rocketseat'
}, {
  nome: 'Lucas',
  idade: 30,
  empresa: 'Google'
}]; //Crie uma variável que contenha todas idades dos usuários: [23, 15, 30]

var roots = usuarios.map(function (item, index) {
  return usuarios[index].idade;
}); //Crie uma variáveis que tenha apenas os usuários que trabalham na Rocketseat e com mais de 18
//anos: [{ nome: 'Diego', idade: 23, empresa: 'Rocketseat' }]

var roots = usuarios.filter(function (maioridade) {
  return maioridade.idade > 17;
}); // Crie uma variável que procura por um usuário que trabalhe na empresa Google: undefined

roots = usuarios.find(function (x) {
  return x.empresa === 'Google';
});
roots = usuarios.map(function (item, index) {
  return usuarios[index].idade * 2;
}).filter(function (maioridade) {
  return maioridade < 50;
}); //console.log(roots);
//var teste = usuarios.filter((maioridade) => {
//  return (maioridade.idade <= 50);
//});
//console.log(roots);

var User1 = new Usuario('email@teste.com', 'senha123');
var Adm1 = new Admin('email@teste.com', 'senha123'); //console.log(User1.isAdmin()) // false
//console.log(Adm1.isAdmin()) // true

/* ARROW FUNCTION _________________________________________________________ */
// 3.1

var arr = [1, 2, 3, 4, 5];
var x = arr.map(function (item) {
  return item + 10;
}); //console.log(x);

arr.map(function (item) {
  return item + 10;
}); //console.log(x);
// 3.2
// Dica: Utilize uma constante pra function

var usuario = {
  nome: 'Diego',
  idade: 23
};

function mostraIdade(usuario) {
  return usuario.idade;
} //console.log(mostraIdade(usuario));


var mostraIdadee = function mostraIdadee(usuario) {
  return usuario.idade;
}; //console.log(mostraIdadee(usuario));
// 3.3
// Dica: Utilize uma constante pra function


var nome = "Diego";
var idade = 23;

function mostraUsuario() {
  var nome = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'Diego';
  var idade = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 18;
  return {
    nome: nome,
    idade: idade
  };
} // console.log(mostraUsuario(nome, idade));
// console.log(mostraUsuario(nome));


var mostraUsuarioo = function mostraUsuarioo() {
  var nome = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'Diego';
  var idade = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 18;
  return {
    nome: nome,
    idade: idade
  };
}; // console.log(mostraUsuarioo(nome, idade));
// console.log(mostraUsuarioo(nome));
// 3.4


var promise = function promise() {
  return new Promise(function (resolve, reject) {
    return resolve();
  });
}; //console.log(promise);  


var promisee = function promisee() {
  return Promise = function Promise(resolve, reject) {
    {
      return resolve();
    }
  };
}; //console.log(promisee);  
// 4


var empresa = {
  nome: 'Rocketseat',
  endereco: {
    cidade: 'Rio do Sul',
    estado: 'SC'
  }
};
var x = empresa.nome,
    _empresa$endereco = empresa.endereco,
    y = _empresa$endereco.cidade,
    z = _empresa$endereco.estado; // console.log(x);
// console.log(y);
// console.log(z);
// 4.2

function mostraInfo(_ref) {
  var nome = _ref.nome,
      idade = _ref.idade;
  return "".concat(nome, " tem ").concat(idade, " anos.");
} //    console.log(mostraInfo({ nome: 'Diego', idade: 23 }));
//return `${nome} tem ${idade} anos.`;usuarios
//    Exercicio 6 ___________________


var usuarioo = 'Diego';
var idadee = '23'; // console.log(`O usuário ${usuarioo} possui ${idade} anos`);

var nomee = 'Diego';
var idadeee = 23;
var usuariooo = {
  nomee: nomee,
  idadeee: idadeee,
  cidade: 'Rio do Sul'
};
console.log(usuariooo);
