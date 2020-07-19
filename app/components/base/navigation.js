import React from 'react';
import { Button, Layout, Menu, Popover, Space, Typography } from 'antd';
import { MenuOutlined, UserOutlined } from '@ant-design/icons';
import { NavLink } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import PropTypes from 'prop-types';
import MachbarschaftLogo from '../../assets/img/logo/machbarschaft-logo.png';
import AuthenticationContext from '../../contexts/authentication';

const { Header, Content, Footer } = Layout;
const { Text } = Typography;

function NavigationMenu({ mode, menuClicked }) {
  const authProps = React.useContext(AuthenticationContext);
  const { authenticationState } = authProps;
  const location = useLocation();
  const [selectedKey, setSelectedKey] = React.useState([location.pathname]);

  React.useEffect(() => setSelectedKey(location.pathname), [location.pathname]);

  if (authenticationState.uid == null) {
    // No User
    return (
      <Menu
        mode={mode}
        selectedKeys={[selectedKey]}
        onClick={menuClicked}
      >
        <Menu.Item key="/">
          <NavLink to="/" exact>
            STARTSEITE
          </NavLink>
        </Menu.Item>
        <Menu.Item key="/kontakt">
          <NavLink to="/kontakt" exact>
            KONTAKT
          </NavLink>
        </Menu.Item>
        <Menu.Item key="/registrieren">
          <NavLink to="/registrieren" exact>
            ALS HELFER REGISTRIEREN
          </NavLink>
        </Menu.Item>
      </Menu>
    );
  }
  // User
  return (
    <Menu
      mode={mode}
      selectedKeys={[selectedKey]}
      onClick={menuClicked}
    >
      <Menu.Item key="/dashboard">
        <NavLink to="/dashboard" exact>
          DASHBOARD
        </NavLink>
      </Menu.Item>
      <Menu.Item key="/auftrag-aufgeben">
        <NavLink to="/auftrag-aufgeben" exact>
          AUFTRAG AUFGEBEN
        </NavLink>
      </Menu.Item>
      <Menu.Item key="/auftrag-annehmen">
        <NavLink to="/auftrag-annehmen" exact>
          AUFTRAG ANNEHMEN
        </NavLink>
      </Menu.Item>
      <Menu.Item key="/kontakt">
        <NavLink to="/kontakt" exact>
          BRAUCHEN SIE HILFE?
        </NavLink>
      </Menu.Item>
    </Menu>
  );
}

NavigationMenu.propTypes = {
  mode: PropTypes.oneOf(['horizontal', 'vertical']).isRequired,
  menuClicked: PropTypes.func.isRequired,
};

function NavigationProfileIndicator() {
  const authProps = React.useContext(AuthenticationContext);

  const popoverContent = (
    <>
      <Space direction="vertical">
        <NavLink to="/einstellungen" exact>
          Einstellungen
        </NavLink>
        <NavLink
          to="/"
          onClick={() => authProps.invalidateAuthentication()}
          exact
        >
          Logout
        </NavLink>
      </Space>
    </>
  );

  return (
    <div className="nav-profile-container">
      {!authProps.isAuthenticated() ? (
        <NavLink to="/login" exact>
          <Text strong style={{ fontSize: '120%' }}>
            Login
          </Text>
        </NavLink>
      ) : (
        <Popover
          content={popoverContent}
          placement="topRight"
          title=""
          trigger="click"
        >
          <Button shape="circle" size="large" icon={<UserOutlined />} />
        </Popover>
      )}
    </div>
  );
}

export default function Navigation() {
  const authProps = React.useContext(AuthenticationContext);
  const [mobileNavState, setState] = React.useState(false);

  return (
    <>
      <div className="nav-bar">
        <div className="nav-menu-mobile-icon-container">
          <MenuOutlined
            className="nav-menu-mobile-icon"
            onClick={() => setState(!mobileNavState)}
          />
        </div>
        <img className="nav-logo" src={MachbarschaftLogo} />
        <div className="nav-menu-desktop">
          <NavigationMenu
            mode="horizontal"
            menuClicked={() => setState(false)}
          />
        </div>
        <NavigationProfileIndicator />
      </div>
      <div className="nav-menu-mobile">
        <div
          className={`nav-menu-mobile-content ${
            mobileNavState
              ? 'nav-menu-mobile-content-open'
              : 'nav-menu-mobile-content-close'
          }`}
        >
          <NavigationMenu mode="vertical" menuClicked={() => setState(false)} />
        </div>
      </div>
    </>
  );
}
