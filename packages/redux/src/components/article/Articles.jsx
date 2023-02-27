// @ts-check

import React, { useEffect, useState } from "react";
import { findAllArticles } from "../../lib/api/articles";
import ArticleItem from "./ArticleItem";
import styles from './articles.module.scss';

function Articles({ }) {
  const [articles, setArticles] = useState([]);

  const handleFindAllArticles = async () => {
    const data = await findAllArticles();
    setArticles(data);
  }

  return (
    <div>
      <button onClick={handleFindAllArticles}>get all articles</button>
      <hr />
      {articles.length !== 0 && (
        <div className={styles.articlesBlock}>
          {articles.map(article => (
            <ArticleItem article={article} key={article.id} />
          ))}
        </div>
      )}
    </div>
  )
}

export default Articles;
