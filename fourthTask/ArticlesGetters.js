const getArticlesByAuthor = (authorId, articles) => {
  return articles.filter(article => article.authors && article.authors.includes(authorId));
}

const getArticlesByAuthorNames = (articlesByAuthor) => {
  return articlesByAuthor.map(article => `'${article.text}'`);
}

const getArticlesByAuthorAmount = (articlesByAuthor) => {
  return articlesByAuthor.length;
}

const getArticlesAmount = (articlesList) => articlesList.length;

export {getArticlesByAuthor, getArticlesByAuthorNames, getArticlesByAuthorAmount, getArticlesAmount};
