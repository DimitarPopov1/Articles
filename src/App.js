import { useEffect, useState } from "react";
import ArticleList from "./components/ArticleList";
import SearchBar from "./components/SearchBar";
const articleArr = [
   { id: "1", title: "5 Tips for JS" },
   { id: "2", title: "How to Center a Div" },
   { id: "3", title: "Array Methods Explained" },
   { id: "4", title: "React Know-How" },
   { id: "5", title: "Validate JS Form" },
   { id: "6", title: "Understanding Closures" },
   { id: "7", title: "Mastering Async/Await" },
   { id: "8", title: "CSS Grid vs Flexbox" },
   { id: "9", title: "Event Bubbling and Capturing" },
   { id: "10", title: "Debouncing vs Throttling" },
   { id: "11", title: "JavaScript Design Patterns" },
   { id: "12", title: "State Management in React" },
   { id: "13", title: "Error Handling in JS" },
   { id: "14", title: "SEO Best Practices" },
   { id: "15", title: "Optimizing Web Performance" },
   { id: "16", title: "Responsive Design Tips" },
   { id: "17", title: "Using Local Storage in JS" },
   { id: "18", title: "Creating Reusable Components" },
   { id: "19", title: "Testing with Jest" },
   { id: "20", title: "Web Accessibility Essentials" },
   { id: "21", title: "Node.js for Beginners" },
   { id: "22", title: "Express.js Routing" },
   { id: "23", title: "Understanding REST APIs" },
   { id: "24", title: "GraphQL vs REST" },
   { id: "25", title: "Handling Promises in JS" },
   { id: "26", title: "Introduction to TypeScript" },
   { id: "27", title: "Advanced React Hooks" },
   { id: "28", title: "Webpack Configuration Tips" },
   { id: "29", title: "Version Control with Git" },
   { id: "30", title: "Introduction to Docker" },
   { id: "31", title: "Building PWAs" },
   { id: "32", title: "Microservices Architecture" },
   { id: "33", title: "Serverless Functions Overview" },
   { id: "34", title: "Security Best Practices" },
   { id: "35", title: "Machine Learning in JS" },
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
