import { Routes, Route } from "react-router-dom";

import Home from "./routes(Pages)/home/home.component";

//Routes registers, 'Route' level components, that will render specific components(elements) 
//when it matches the specific route you're looking for. It matches through a specific 'path' variable,
//when the route is matched to the 'path' value, whatever is in the 'element' component is shown.
function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
    </Routes>
   
  );
}

export default App;
