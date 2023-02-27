import { useState } from 'react';
import styles from './articleItem.module.scss';

function ArticleItem({ article }) {
  const [isShow, setIsShow] = useState(false);

  const handleShowArticle = () => {
    setIsShow(!isShow);
  };

  return (
    <div className={styles.box}>
      <div className={styles.itemLine}>
        <p>{article.title}</p>
        <button className={styles.button} onClick={handleShowArticle}>{isShow ? '닫기' : '열기'}</button>
      </div>
      {
        isShow && (
          <>
            <h1>{article.title}</h1>
            <code>{article.description}</code>
            <div className={styles.detailBox}>
              <div className={styles.date}>작성일 : {new Intl.DateTimeFormat("ko", { dateStyle: "long" }).format(new Date(article.createdAt))}</div>
              <div className={styles.publishedBox}>{article.published ? '출간' : '미출간'}</div>
            </div>
            <p className={styles.body}>{article.body}</p>
          </>
        )
      }
    </div >
  )
}

export default ArticleItem;
