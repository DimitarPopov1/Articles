import React from "react";
import "../css/article.css";
const ArticleList = (props) => {
   const { articleArr } = props;
   return (
      <div className="article-container">
         {articleArr.map((article) => {
            return (
               <div className="article-item" key={article.id}>
                  {article.title}
               </div>
            );
         })}
      </div>
   );
};

export default ArticleList;
