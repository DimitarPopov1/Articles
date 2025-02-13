import React from "react";
import "../css/article.css";
const ArticleList = (props) => {
   const { articleArr } = props;
   return (
      <div className="article-container">
         {articleArr.map((article) => {
            return (
               <div className="article-item" key={article.id}>
                  <h3>{article.title}</h3>
                  <p>{article.text}</p>
               </div>
            );
         })}
      </div>
   );
};

export default ArticleList;
