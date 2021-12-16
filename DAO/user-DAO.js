// const mysql = require('mysql2'); 
const db = require('../util/database');

module.exports = class userDAO {
    constructor(){
        // this._connection = mysql.createConnection({
        //           host: 'localhost',
        //           user: 'root',
        //           database: 'espalhandobem',
        //           password: ''
        // });
    }

    list(){
        return db.execute(`SELECT * FROM users`);
    }
    
    getById(user){
        if(user.type_NID == 'cnpj'){
            return db.execute(`SELECT u.*, c.name as categoryName 
            FROM users as u 
            inner join category as c 
            on u.id_category = c.id 
            WHERE u.id = ${user.id}`);
        }
    }

    listbyId(id){
        return db.execute(`SELECT * FROM users WHERE id = ${id}`);
    }

    listbyCPF(cpf){
        return db.execute(`SELECT * FROM users WHERE cpf = '${cpf}'`);
    }

    listbyCNPJ(cnpj){
        return db.execute( `SELECT * FROM users WHERE cnpj = '${cnpj}'`);
    }

    login(email){
        return db.execute(`SELECT * from users WHERE email = '${email}'`);
    }

    setFavorite(user){
        return db.execute(`UPDATE users
        SET favorited = '${user.favorited}', user_favorited = ${user.user_favorited} WHERE id = ${user.id};`);
    }

    updateUser(user){
        return db.execute(`UPDATE users
        SET email = '${user.email}', telephone = '${user.telephone}', description = '${user.description}', 
        cep = '${user.cep}', street = '${user.street}', city = '${user.city}', state='${user.state}' 
        WHERE id = ${user.id};`);
    }

    async createUser(user){
        let url = "";
        let existUser = [];
        try {
            if(user.typeNID == "cnpj"){
                existUser = await this.listbyCNPJ(user.cnpj);
                if(existUser[0].length === 0){
                    url = `INSERT INTO users (name, type_NID, email, password, id_category, cep, street, city, state, cnpj, telephone) 
                    values ( '${user.name}', '${user.typeNID}', '${user.email}', '${user.password}', ${user.idCategory}, '${user.cep}', 
                    '${user.street}',  '${user.city}', '${user.state}', '${user.cnpj}', '${user.telephone}' )`;
                }else {
                    return "Error: usuario já existente"
                }
            }else if(user.typeNID == "cpf"){
                existUser = await this.listbyCPF(user.cpf);
                if(existUser[0].length === 0){
                    url = `INSERT INTO users (name, type_NID, email, password, cpf, telephone) 
                            values ( '${user.name}', '${user.typeNID}', '${user.email}', '${user.password}', '${user.cpf}', '${user.telephone}' )`;
                }else {
                    return "Error: usuario já existente"
                }
            }
            return db.execute(url);
        } catch (error) {
            console.log(error)
        }
    }

}