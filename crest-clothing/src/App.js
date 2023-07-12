import { Routes, Route } from "react-router-dom";

import Navigation from "./routes(Pages)/navigation/navigation.component";
import Home from "./routes(Pages)/home/home.component";
import SignIn from "./routes(Pages)/sign-in/sign-in.component";

//Routes registers, 'Route' level components, that will render specific components(elements) 
//when it matches the specific route you're looking for. It matches through a specific 'path' variable,
//when the route is matched to the 'path' value, whatever is in the 'element' component is shown.

const Shop = () =>{
  return <h1>Shop Page</h1>
}

function App() {
  return (
    <Routes>
      <Route path="/" element={<Navigation/>}> 
        <Route index element={<Home />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/sign-in" element={<SignIn />} />
      </Route>
    </Routes>
   
  );
}

export default App;
