import { BrowserRouter, Route } from "react-router-dom";
import Header from "./components/Header";

export default function App() {
  return (
    <BrowserRouter>
      <Route path="/" element={<Users />} exact />
      <Route path="/places/new" element={<CreatePlaces />} exact />
    </BrowserRouter>
  );
}
