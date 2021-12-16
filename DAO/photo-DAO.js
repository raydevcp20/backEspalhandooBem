const db = require('../util/database');

module.exports = class photoDAO {
    constructor(){
        // this._connection = mysql.createConnection({
        //           host: 'localhost',
        //           user: 'root',
        //           database: 'espalhandobem',
        //           password: ''
        // });
    }

    listAllByUser(userID){
        userID = parseInt(userID);
        return db.execute(`SELECT * FROM photos where id_user = ${userID}`);
    }

    addNewLink(photo){
        return db.execute(`INSERT INTO photos (link, id_user) 
        values ( '${photo.link}', ${photo.id_user})`);
    }

    editPhotos(photo){
        return db.execute(`UPDATE photos
        SET link = ${photo.link} WHERE id = ${photo.id};`);
    }

}