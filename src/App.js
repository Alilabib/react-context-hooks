import ThemeContextProvider from "./contexts/ThemeContext";
import ThemeToggle from "./components/ThemeToggle";

const { default: BookList } = require("./components/BookList");
const { default: Navbar } = require("./components/Navbar");

function App() {
  return (
    <div className="App">
      <ThemeContextProvider>
       <Navbar/>
       <BookList />
       <ThemeToggle/>
      </ThemeContextProvider>
    </div>
  );
}

export default App;
