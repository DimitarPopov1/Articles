import React from "react";

const ArticleList = ({ articleArr }) => {
   return articleArr.map((article) => {
      return <div key={article.id}>{article.title}</div>;
   });
};

export default ArticleList;
