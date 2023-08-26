import { Routes, Route } from "react-router-dom";
import Home from "./routes/Home/Home";
import Navigation from "./routes/Navigation/Navigation";
import Signin from "./routes/Signin/Signin";

const Shop = () => {
  return <h1>I am the shop page</h1>;
};

function App() {
  return (
    <Routes>
      <Route path="/" element={<Navigation />}>
        <Route index element={<Home />} />
        <Route path="shop" element={<Shop />} />
        <Route path="signin" element={<Signin />} />
      </Route>
    </Routes>
  );
}

export default App;
