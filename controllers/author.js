const con = require('../utils/db');

// show author articles
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
            res.render('author', {
                author: authorData,
                articles: articles
            })
        })
    })
};

module.exports = {
    getAllArticlesByAuthor
};