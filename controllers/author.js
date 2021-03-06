// // Laseb query töödelda/suhelda läbi meie loodud andmebaasi
const con = require('../utils/db');

// show author articles
// query küsib kõik author_id vastavad andmed
const getAllArticlesByAuthor = (req,res) => {
    let query = `SELECT *, article.name AS Title FROM article INNER JOIN author ON article.author_id = author.id WHERE author.id="${req.params.id}"`;
    let articles = []
    let author = `select name from author where author.id="${req.params.id}"`;
    con.query( query , (err,result) => {
        if (err) throw err;
        articles = result
        con.query(author, (err, result) => {
            if (err) throw err;
            let authorData = result
            console.log(authorData)
            // Täpsustame , et client responsiks rendereda views vastava  failis olev HTML template ja local HTML
            res.render('author', {
                articles: articles,
                author: authorData
            })
        })
    })
};

module.exports = {
    getAllArticlesByAuthor
};