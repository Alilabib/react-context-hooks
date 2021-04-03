import ThemeContextProvider from "./contexts/ThemeContext";
import AuthContextProvider  from "./contexts/AuthContext";
import ThemeToggle from "./components/ThemeToggle";

const { default: BookList } = require("./components/BookList");
const { default: Navbar } = require("./components/Navbar");

function App() {
  return (
    <div className="App">
      <ThemeContextProvider>
       <AuthContextProvider>
           <Navbar/>
           <BookList />
           <ThemeToggle/>
       </AuthContextProvider>
      </ThemeContextProvider>
    </div>
  );
}

export default App;
