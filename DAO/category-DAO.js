// const mysql = require('mysql2'); 
const db = require('../util/database');

module.exports = class postDAO {
    constructor(){
        // this._connection = mysql.createConnection({
        //           host: 'localhost',
        //           user: 'root',
        //           database: 'espalhandobem',
        //           password: ''
        // });
    }

    listAll(){
        return db.execute(`SELECT * FROM category`);
    }

}