import { Routes, Route } from "react-router-dom";
import Form from "../Form";
import Login from "./Login";
import Table from "./Table";
import { useState } from "react";

function App() {
  const [user, setUser] = useState(false);

  return (
    <div>
      <Routes>
        <Route path="/" element={<Form />} />
        <Route
          path="/login"
          element={<Login user={user} setUser={setUser} />}
        />
        <Route path="/table" element={<Table />} user={user} />
      </Routes>
    </div>
  );
}

export default App;
