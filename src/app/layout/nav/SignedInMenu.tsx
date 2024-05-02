import { Link, useNavigate } from "react-router-dom";
import { Dropdown, Image, Menu } from "semantic-ui-react";
import { useAppDispatch, useAppSelector } from "../../store/store";
import { signOut } from "../../features/auth/authSlice";

const SignedInMenu = () => {
  const { currentUser } = useAppSelector((state) => state.auth);
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const handleSignOut = () => {
    dispatch(signOut());
    navigate("/");
  };

  return (
    <Menu.Item position="right">
      <Image avatar spaced="right" src="/user.png" />
      <Dropdown pointing="top left" text={currentUser?.email}>
        <Dropdown.Menu>
          <Dropdown.Item
            as={Link}
            to="/createEvent"
            text="Create Event"
            icon="plus"
          />
          <Dropdown.Item text="My Profile" icon="user" />
          <Dropdown.Item onClick={handleSignOut} text="Sign Out" icon="power" />
        </Dropdown.Menu>
      </Dropdown>
    </Menu.Item>
  );
};

export default SignedInMenu;
