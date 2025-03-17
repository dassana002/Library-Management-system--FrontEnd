import { BrowserRouter, Route,Router,Routes } from "react-router";
import { Book } from "./components/book/Book";
import { Lending } from "./components/lending/Lending";
import { Member } from "./components/member/Member";
import { NavBar } from "./components/NavBar";
import { Staff } from "./components/staff/Staff";
import { Signin } from "./components/user/Signin";
import { Signup } from "./components/user/Signup";

function App() {
  return (
    <div className="App">
      {/* <BrowserRouter>
          <NavBar/>
            <Route path="/" element={<Book/>}/>
            <Route path="/book" element={<Book/>}/>
            <Route path="/member" element={<Member/>}/>
            <Route path="/staff" element={<Staff/>}/>
            <Route path="/lending" element={<Lending/>}/>
        </BrowserRouter> */}

        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Signin />} />
            <Route path="/signin" element={<Signin />} />
            <Route path="/signup" element={<Signup />} />
          </Routes>  
        </BrowserRouter>


    </div>
  );
}

export default App;
