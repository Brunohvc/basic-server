
database(`CREATE TABLE IF NOT EXISTS TESTE (
  ID INTEGER PRIMARY KEY AUTOINCREMENT,
  NOME varchar(30),
  NUMERO int
  )`)
  .then(result => {
    console.log('TABELA TESTE CRIADA COM SUCESSO');
  }).catch(erro => {
    console.log('TABELA TESTE COM ERRO NA CRIAÇÃO');
  });

database(`CREATE TABLE IF NOT EXISTS USER (
  ID INTEGER PRIMARY KEY AUTOINCREMENT,
  NOME varchar(30),
  NICKNAME varchar(30),
  PASSWORD varchar(30)
  )`)
  .then(result => {
    console.log('TABELA USER CRIADA COM SUCESSO');
  }).catch(erro => {
    console.log('TABELA USER COM ERRO NA CRIAÇÃO');
  });