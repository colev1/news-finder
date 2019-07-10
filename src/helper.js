const cleanArticles = (articles) => {
  return articles.map(article => {
    return {
      title: article.title,
    }
  })
}

export default cleanArticles;