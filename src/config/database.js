module.exports = {
    dialect: 'postgres', //Indicando qua o banco de dados utilizado
    host: 'localhost', //Indicando o endereço do banco.
    username: 'postgres', //Indicando o usuário do banco
    password: 'postgres', //Indicando a senha do banco
    database: 'codeburger', //Indicando o nome do bando de dados conforme criado no Postbird
    define: { //Criando algumas definições
        timestamps: true, //Auxilia na rastreabilidade dos nossos dados por criar as datas de criação e alteração dos dados
        underscored: true,
        undercoredAll: true, //Configurações para nomear as tabelas em caixa baixa e separadas pelo '_'
    }
}