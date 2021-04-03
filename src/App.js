import ThemeContextProvider from "./contexts/ThemeContext";
import AuthContextProvider  from "./contexts/AuthContext";
import ThemeToggle from "./components/ThemeToggle";
import BookContextProvider from "./contexts/BookContext";

const { default: BookList } = require("./components/BookList");
const { default: Navbar } = require("./components/Navbar");

function App() {
  return (
    <div className="App">
      <ThemeContextProvider>
       <AuthContextProvider>
           <Navbar/>
           <BookContextProvider>
             <BookList />
           </BookContextProvider>
           <ThemeToggle/>
       </AuthContextProvider>
      </ThemeContextProvider>
    </div>
  );
}

export default App;
