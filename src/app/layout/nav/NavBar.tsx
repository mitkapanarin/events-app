import { NavLink } from "react-router-dom";
import { Button, Container, Menu, MenuItem } from "semantic-ui-react";
import SignedOutButtons from "./SignedOutButtons";
import SignedInMenu from "./SignedInMenu";
import { useState } from "react";

export const NavBar = () => {
  const [auth, setAuth] = useState(false);
  return (
    <Menu inverted={true} fixed="top">
      <Container>
        <MenuItem header as={NavLink} to="/">
          <img src="/logo.png" alt="logo" />
        </MenuItem>
        <MenuItem name="Events" as={NavLink} to="/events" />
        <MenuItem>
          <Button
            as={NavLink}
            to="/createEvent"
            floated="right"
            positive={true}
            inverted={true}
            content="Create Event"
          />
        </MenuItem>
        {auth ? (
          <SignedInMenu setAuth={setAuth} />
        ) : (
          <SignedOutButtons setAuth={setAuth} />
        )}
      </Container>
    </Menu>
  );
};
