import { Link } from "react-router-dom";
import { Dropdown, Image, Menu } from "semantic-ui-react";

const SignedInMenu = () => {
  return (
    <Menu.Item position="right">
      <Image avatar spaced="right" />
      <Dropdown pointing="top left" text="Mitka">
        <Dropdown.Menu>
          <Dropdown.Item
            as={Link}
            to="/createEvent"
            text="Create Event"
            icon="plus"
          />
          <Dropdown.Item text="My Profile" icon="user" />
          <Dropdown.Item text="Sign Out" icon="power" />
        </Dropdown.Menu>
      </Dropdown>
    </Menu.Item>
  );
};

export default SignedInMenu;
