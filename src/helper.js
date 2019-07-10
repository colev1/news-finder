const cleanArticles = (articles) => {
  return articles.map(article => {
    console.log(article)
    return { title: article.title,
    id: article.id }
  })
}

export default cleanArticles;