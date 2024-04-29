import { Container } from "semantic-ui-react";
import { NavBar } from "./nav/NavBar";

import { Outlet } from "react-router-dom";

const App = () => {
  return (
    <div>
      <NavBar />
      <Container className="main">
        <Outlet />
      </Container>
    </div>
  );
};

export default App;
