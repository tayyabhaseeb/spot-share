import { BrowserRouter, Route, Routes } from "react-router-dom";
import UserPage from "./users/pages/UserPage";
import CreateNewPlace from "./places/pages/CreateNewPlace";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<UserPage />} exact />
        <Route path="/places/new" element={<CreateNewPlace />} exact />
      </Routes>
    </BrowserRouter>
  );
}
