import { BrowserRouter as Router, Route, Routes } from "react-router";

import { Book } from "./components/book/Book";
import { Lending } from "./components/lending/Lending";
import { Member } from "./components/member/Member";
import { NavBar } from "./components/NavBar";
import { Staff } from "./components/staff/Staff";
import { Signin } from "./components/user/Signin";
import { Signup } from "./components/user/Signup";

function App() {
  return (
    <div>
      <NavBar/>
      <Routes>
        <Route path="/" element={<Book />} />
        <Route path="/book" element={<Book />} />
        <Route path="/member" element={<Member />} />
        <Route path="/lending" element={<Lending />} />
        <Route path="/staff" element={<Staff />} />
      </Routes>
    </div>
  );
}

export default App;
