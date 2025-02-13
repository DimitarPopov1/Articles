import { useEffect, useState } from "react";
import ArticleList from "./components/ArticleList";
import SearchBar from "./components/SearchBar";
const articleArr = [
   { id: "1", title: "5 tips for JS" },
   { id: "2", title: "How to center Div" },
   { id: "3", title: "Array methods" },
   { id: "4", title: "React know-how" },
   { id: "5", title: "Validate JS form" },
];

const handlefilteredArticles = (searchValue) => {
   if (searchValue === "") {
      return articleArr;
   }
   return articleArr.filter((article) =>
      article.title.toLowerCase().includes(searchValue.toLowerCase())
   );
};

function App() {
   const [articles, setArticles] = useState(articleArr);
   const [searchValue, setSearchValue] = useState("");

   useEffect(() => {
      const filteredArticles = handlefilteredArticles(searchValue);
      setArticles(filteredArticles);
   }, [searchValue]);

   return (
      <div>
         <SearchBar
            callback={(searchValue) => setSearchValue(searchValue)}
         ></SearchBar>
         <ArticleList articleArr={articles}></ArticleList>
      </div>
   );
}

export default App;
