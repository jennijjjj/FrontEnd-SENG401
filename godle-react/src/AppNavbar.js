import React, { useState } from 'react';
import { Button, ButtonGroup, Collapse, Nav, Navbar, NavbarBrand, NavbarToggler, Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';
import { Link, useNavigate } from 'react-router-dom';

const AppNavbar = ({ user, setUser }) => {
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [incorrectLogin, setIncorrectLogin] = useState(false);

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  const handleLogin = (e) => {
    e.preventDefault(); // Prevent default form submission behavior
    
    // Authenticate
    // setUser(json user)

    // Clear the form fields after login attempt
    setUsername('');
    setPassword('');
  };

  const handleUsernameChange = (e) => {
    setUsername(e.target.value);
  }

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  }

  const message = incorrectLogin ?
    <div> 
      <p style={{color: "red"}}>Incorrect Login Info</p>
    </div> :
    <p></p>

  return (
    <Navbar  dark expand="md">
      <NavbarBrand tag={Link} to="/">Home</NavbarBrand>
      <NavbarToggler onClick={() => setIsOpen(!isOpen)} />
      <Collapse isOpen={isOpen} navbar>
        <Nav className="justify-content-end" style={{ width: "100%" }} navbar>
          {user ? (
            <Dropdown nav isOpen={dropdownOpen} toggle={toggleDropdown}>
              <DropdownToggle nav caret>
                {user.type === "Registered User" ? (
                  <>
                  {user.object.firstName} {user.object.lastName}
                  </>
                ) : (
                  <>
                  {user.object.name}
                  </>
                )}
              </DropdownToggle>
              <DropdownMenu right style={{ padding: '20px', minWidth: '250px' }}>
                <DropdownItem tag={Link} to={"/Home"}>
                  Home
                </DropdownItem>
                <DropdownItem onClick={() => {setUser(undefined); navigate('/');}}>
                  Logout
                </DropdownItem>
              </DropdownMenu>
            </Dropdown>
          ) : (
            <Dropdown nav isOpen={dropdownOpen} toggle={toggleDropdown}>
              <DropdownToggle nav caret>
                Guest
              </DropdownToggle>
              <DropdownMenu right style={{ padding: '20px', minWidth: '250px', paddingBottom: '5px' }}>
                <form onSubmit={handleLogin}>
                  {/* Username Field */}
                  <div className="form-group">
                    <label htmlFor="username">Email:</label>
                    <input
                      type="text"
                      className="form-control"
                      id="username"
                      required
                      value={username}
                      onChange={handleUsernameChange}
                    />
                  </div>

                  {/* Password Field */}
                  <div className="form-group">
                    <p></p>
                    <label htmlFor="password">Password:</label>
                    <input
                      type="password"
                      className="form-control"
                      id="password"
                      required
                      value={password}
                      onChange={handlePasswordChange}
                    />
                  </div>

                  {/* Submit Button */}
                  <ButtonGroup style={{marginLeft: "40px", marginTop: "10px"}}>
                    <button type="submit" className="btn btn-primary">Login</button>
                    <Button tag={Link} to={"/Register"} color='danger'>Register</Button>
                  </ButtonGroup>
                </form>
                {message}
              </DropdownMenu>
            </Dropdown>
          )}
        </Nav>
      </Collapse>
    </Navbar>
  );
};

export default AppNavbar;
