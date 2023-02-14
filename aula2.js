//video 1
// acessar telefones

// const cliente = {
//   nome: "Joao",
//   idade: 22,
//   cpf: "832983912",
//   email: "joao@email.com",
//   fones: ["55982938", "3281931092"],
// };

// cliente.fones.forEach((fone) => console.log(fone));

// video2
// objeto dentro objeto

// const cliente = {
//   nome: "Joao",
//   idade: 22,
//   cpf: "832983912",
//   email: "joao@email.com",
//   fones: ["55982938", "3281931092"],
// };

// // colocando dados como objetos
// cliente.dependentes = {
//   nome: "fulano",
//   parentesco: "pai",
//   dataNasc: "25/12/2030",
// };

//console.log(cliente);

//alterando dados nos objetos
//cliente.dependentes.nome = "Fulano Malfoy";

//console.log(cliente);

//video 3
// agregando infomacao em dependentes

// const cliente = {
//   nome: "Joao",
//   idade: 22,
//   cpf: "832983912",
//   email: "joao@email.com",
//   fones: ["55982938", "3281931092"],
//   dependentes: [
//     {
//       nome: "fulano",
//       parentesco: "pai",
//       dataNasc: "25/12/2030",
//     },
//   ],
// };

// cliente.dependentes.push({ // o push add
//   nome: "Draco",
//   parentesco: "filho",
//   dataNasc: "16/03/1999",
// });

// console.log(cliente);

// const maisNovo = cliente.dependentes.filter( // aqui ele ta filtrando
//   (dependente) => dependente.dataNasc <= "1980"
// );

// console.log(maisNovo[0].nome, maisNovo[0].dataNasc); // aqui ele t aselecionando o mais novo. O [0] é pq o filter retorna como array, dai no caso ele so vai acessar o primeiro indice

//video 4
// fazendo depositos

const cliente = {
  nome: "Joao",
  idade: 22,
  cpf: "832983912",
  email: "joao@email.com",
  fones: ["55982938", "3281931092"],
  dependentes: [
    {
      nome: "fulano",
      parentesco: "pai",
      dataNasc: "25/12/2030",
    },
    {
      nome: "Draco",
      parentesco: "filho",
      dataNasc: "16/03/1999",
    },
  ],
  saldo: 100,
  depositar: function (valor) {
    this.saldo += valor; // this = este objeto
  },
};

console.log(cliente.saldo);
cliente.depositar(100);
console.log(cliente.saldo);
