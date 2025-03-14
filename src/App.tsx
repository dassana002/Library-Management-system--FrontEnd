import { Book } from "./components/book/Book";
import { Member } from "./components/member/Member";
import { NavBar } from "./components/NavBar";
import { Staff } from "./components/staff/Staff";


function App() {
  return (
    <div className="App">
        <NavBar/>
        <Member/>
    </div>
  );
}

export default App;
