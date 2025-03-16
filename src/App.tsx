import { BrowserRouter, Route } from "react-router";
import { Book } from "./components/book/Book";
import { Lending } from "./components/lending/Lending";
import { Member } from "./components/member/Member";
import { NavBar } from "./components/NavBar";
import { Staff } from "./components/staff/Staff";
import { Signin } from "./components/user/Signin";

function App() {
  return (
      <div className="App">
        <Signin/>
        {/* <BrowserRouter>
          <NavBar/>
            <Route path="/" element={<Book/>}/>
            <Route path="/book" element={<Book/>}/>
            <Route path="/member" element={<Member/>}/>
            <Route path="/staff" element={<Staff/>}/>
            <Route path="/lending" element={<Lending/>}/>
        </BrowserRouter> */}


        
      </div>
  );
}

export default App;
