import ThemeContextProvider from "./contexts/ThemeContext";

const { default: BookList } = require("./components/BookList");
const { default: Navbar } = require("./components/Navbar");

function App() {
  return (
    <div className="App">
      <ThemeContextProvider>
       <Navbar/>
       <BookList />
      </ThemeContextProvider>
    </div>
  );
}

export default App;
