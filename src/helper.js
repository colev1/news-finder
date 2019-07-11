const cleanArticles = (articles) => {
  return articles.map(article => {
    console.log(article)
    return {
      title: article.title,
      date: article.published_date,
      updated: article.updated_date,
      abstract: article.abstract,
      byline: article.byline,
      media: article.multimedia,
      section: article.section
    }
  })
}

export default cleanArticles;