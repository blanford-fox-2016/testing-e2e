const article = require('../models/articles');

let allArticles = (req, res, next) => {
  article.find({}, (err, articles) => {
    if (err) {
      console.log(err);
    } else {
      res.json(articles);
    }
  })
}

let postNewArticle = (req, res, next) => {
  article.create({
    title: req.body.title,
    content: req.body.content,
    category: req.body.category,
    slug: req.body.slug
  }, (err, article) => {
    if (err) {
      console.log(err);
    } else {
      res.json(artile);
    }
  })
}


module.exports= {
  allArticles: allArticles
}
