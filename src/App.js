import { useEffect, useState } from "react";
import ArticleList from "./components/ArticleList";
import SearchBar from "./components/SearchBar";

const articleArr = [
   {
      id: "1",
      title: "5 Tips for JS",
      text: "Learn the top 5 tips to enhance your JavaScript coding skills.",
   },
   {
      id: "2",
      title: "How to Center a Div",
      text: "Different ways to perfectly center a div using CSS.",
   },
   {
      id: "3",
      title: "Array Methods Explained",
      text: "A deep dive into JavaScript array methods with examples.",
   },
   {
      id: "4",
      title: "React Know-How",
      text: "Essential knowledge every React developer should have.",
   },
   {
      id: "5",
      title: "Validate JS Form",
      text: "Best practices for form validation using JavaScript.",
   },
   {
      id: "6",
      title: "Understanding Closures",
      text: "Learn how closures work and when to use them.",
   },
   {
      id: "7",
      title: "Mastering Async/Await",
      text: "Make asynchronous code easier to read and maintain.",
   },
   {
      id: "8",
      title: "CSS Grid vs Flexbox",
      text: "Comparing CSS Grid and Flexbox with practical examples.",
   },
   {
      id: "9",
      title: "Event Bubbling and Capturing",
      text: "Understand the event flow in JavaScript.",
   },
   {
      id: "10",
      title: "Debouncing vs Throttling",
      text: "Optimize performance by managing event frequency.",
   },
   {
      id: "11",
      title: "JavaScript Design Patterns",
      text: "Explore common design patterns for better JS code.",
   },
   {
      id: "12",
      title: "State Management in React",
      text: "How to manage state effectively in React applications.",
   },
   {
      id: "13",
      title: "Error Handling in JS",
      text: "Techniques to handle errors gracefully in JavaScript.",
   },
   {
      id: "14",
      title: "SEO Best Practices",
      text: "Improve your site's visibility with effective SEO.",
   },
   {
      id: "15",
      title: "Optimizing Web Performance",
      text: "Tips to make your website faster and more efficient.",
   },
   {
      id: "16",
      title: "Responsive Design Tips",
      text: "Create beautiful, responsive designs for all devices.",
   },
   {
      id: "17",
      title: "Using Local Storage in JS",
      text: "Store data in the browser with Local Storage.",
   },
   {
      id: "18",
      title: "Creating Reusable Components",
      text: "Build maintainable and reusable UI components.",
   },
   {
      id: "19",
      title: "Testing with Jest",
      text: "Write reliable tests for your JavaScript code using Jest.",
   },
   {
      id: "20",
      title: "Web Accessibility Essentials",
      text: "Ensure your website is accessible to all users.",
   },
   {
      id: "21",
      title: "Node.js for Beginners",
      text: "Get started with Node.js for server-side programming.",
   },
   {
      id: "22",
      title: "Express.js Routing",
      text: "Master routing in Express.js to build robust APIs.",
   },
   {
      id: "23",
      title: "Understanding REST APIs",
      text: "Learn the principles of RESTful API design.",
   },
   {
      id: "24",
      title: "GraphQL vs REST",
      text: "Compare GraphQL with REST to choose the right approach.",
   },
   {
      id: "25",
      title: "Handling Promises in JS",
      text: "Manage asynchronous operations using Promises.",
   },
   {
      id: "26",
      title: "Introduction to TypeScript",
      text: "Learn TypeScript to enhance JavaScript with types.",
   },
   {
      id: "27",
      title: "Advanced React Hooks",
      text: "Take React hooks to the next level with custom hooks.",
   },
   {
      id: "28",
      title: "Webpack Configuration Tips",
      text: "Optimize your build process with Webpack configuration.",
   },
   {
      id: "29",
      title: "Version Control with Git",
      text: "Master Git commands for effective version control.",
   },
   {
      id: "30",
      title: "Introduction to Docker",
      text: "Learn how to containerize applications using Docker.",
   },
   {
      id: "31",
      title: "Building PWAs",
      text: "Create Progressive Web Apps for offline functionality.",
   },
   {
      id: "32",
      title: "Microservices Architecture",
      text: "Understand the principles of microservices architecture.",
   },
   {
      id: "33",
      title: "Serverless Functions Overview",
      text: "Leverage serverless functions for scalable apps.",
   },
   {
      id: "34",
      title: "Security Best Practices",
      text: "Protect your application with security best practices.",
   },
   {
      id: "35",
      title: "Machine Learning in JS",
      text: "Explore machine learning libraries in JavaScript.",
   },
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
