// // video 1
// // for in - puxando um relatorio

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
//     {
//       nome: "Draco",
//       parentesco: "filho",
//       dataNasc: "16/03/1999",
//     },
//   ],
//   saldo: 100,
//   depositar: function (valor) {
//     this.saldo += valor; // this = este objeto
//   },
// };

// let relatorio = "";

// //o typeof é uma palavra cahve  do JS pra falar o tipo de dado // || = é igual a "ou"

// for (let info in cliente) {
//   if (
//     typeof cliente[info] === "object" ||
//     typeof cliente[info] === "function"
//   ) {
//     continue;
//   } else {
//     relatorio += ` ${info} ==> ${cliente[info]}
//     `;
//   }
// }

// console.log(relatorio);

//video 2
// Metodos de objeto

// const cliente = {
//   nome: "Joao",
//   idade: 22,
//   cpf: "832983912",
//   email: "joao@email.com",
//   fones: ["55982938", "3281931092"],
// };

// cliente.enderecos = [
//   {
//     rua: "R. Argentina",
//     numero: 137,
//     apartamento: true,
//     complemento: "ap 303",
//   },
// ];

// const chavesDoObjeto = Object.keys(cliente);

// console.log(chavesDoObjeto);

// // ! significa negaçao
// if (!chavesDoObjeto.includes("enderecos")) {
//   console.error("Erro");
// }

//video 3
//sintaxe de espalhamento

// const cliente = {
//   nome: "Joao",
//   idade: 22,
//   cpf: "832983912",
//   email: "joao@email.com",
//   fones: ["55982938", "3281931092"],
// };

// cliente.enderecos = [
//   {
//     rua: "R. Argentina",
//     numero: 137,
//     apartamento: true,
//     complemento: "ap 303",
//   },
// ];

// function ligaParaClinte(telefoneComercial, celular) {
//   console.log(`ligando para ${telefoneComercial}`);
//   console.log(`ligando para ${celular}`);
// }

// ligaParaClinte(...cliente.fones);

// const encomenda = {
//   destinatario: cliente.nome,
//   ...cliente.enderecos,
// };

// console.log(encomenda);
