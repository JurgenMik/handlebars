// controllers separate code to each route request - they process route requests

// Laseb query töödelda/suhelda läbi meie loodud andmebaasi
const con = require('../utils/db');

// Show all articles - index page
// query asks for all data from article table. It is then processed for the corresponding route
const getAllArticles = (req, res) => {
    let query ="SELECT * FROM article";
    let articles = []
    con.query(query, (err, result) => {
        if (err) throw err;
        articles = result
        res.render('index', {
            articles: articles
        })
    })
};

// Show article by this slug
// Slug is a unique ID of a URL endpoint
// query küsib andmebaasist ainult artikli andmed vastavalt mida sisaldab (slug)
const getArticleBySlug = (req,res) => {
    let query = `SELECT * , author.name as author_name, article.name as article_name FROM author  iNNER JOIN article ON author.id = article.author_id WHERE slug="${req.params.slug}"`
    let article
    con.query(query, (err,result) => {
        if (err) throw err;
        article = result
        // konsoolis näeme andmeid, mida query kaasa toob
        console.log(article)
        res.render('article', {
            article: article
        })
    });
};

// export controller functions
// exportime , et route requestil saada määrata process as response
module.exports = {
    getAllArticles,
    getArticleBySlug
};