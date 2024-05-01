import { Container } from "semantic-ui-react";
import { NavBar } from "./nav/NavBar";
import { Outlet, useLocation } from "react-router-dom";
import HomePage from "./home/HomePage";
import ModalManager from "../common/modals/ModalManager";

const App = () => {
  const location = useLocation();
  return (
    <>
      {location.pathname === "/" ? (
        <HomePage />
      ) : (
        <>
          <ModalManager />
          <NavBar />
          <Container className="main">
            <Outlet />
          </Container>
        </>
      )}
    </>
  );
};

export default App;
