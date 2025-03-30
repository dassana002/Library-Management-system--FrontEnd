import { Route, Routes } from "react-router";

import { Book } from "./components/book/Book";
import { Lending } from "./components/lending/Lending";
import { Member } from "./components/member/Member";
import { NavBar } from "./components/NavBar";
import { Staff } from "./components/staff/Staff";
import { SignIn } from "./components/user/Signin";
import { SignUp } from "./components/user/Signup";

function App() {
  return (
    <div>
      <NavBar />
      <Routes>
        <Route path="/" element={<Book />} />
        <Route path="/book" element={<Book />} />
        <Route path="/staff" element={<Staff />} />
        <Route path="/members" element={<Member />} />
        <Route path="/lending" element={<Lending />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/signup" element={<SignUp />} />
      </Routes>
    </div>
  );
}

export default App;
