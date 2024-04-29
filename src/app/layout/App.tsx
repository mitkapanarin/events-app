import { Container } from "semantic-ui-react";
import { NavBar } from "./nav/NavBar";
import { Outlet, useLocation } from "react-router-dom";
import HomePage from "./home/HomePage";

const App = () => {
  const location = useLocation();
  return (
    <div>
      <NavBar />
      <Container className="main">
        {location.pathname === "/" ? <HomePage /> : <Outlet />}
      </Container>
    </div>
  );
};

export default App;
