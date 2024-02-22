import React, { useState, useEffect } from 'react';
import { Button, ButtonGroup, Collapse, Nav, Navbar, NavbarBrand, NavbarToggler, Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';
import { Link, useNavigate } from 'react-router-dom';

const AppNavbar = ({ user, setUser }) => {
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [incorrectLogin, setIncorrectLogin] = useState(false);

  useEffect(() => {
    let timer;
    if (incorrectLogin === true) {
      // Set a timer to set yourState to false after 5 seconds
      timer = setTimeout(() => {
        setIncorrectLogin(false);
      }, 5000);
    }

    // Cleanup function to clear the timer if the component unmounts
    // or if yourState changes before the timer finishes
    return () => clearTimeout(timer);
  }, [incorrectLogin, setIncorrectLogin]);

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  const handleLogin = (e) => {
    e.preventDefault(); // Prevent default form submission behavior
  
    // Authenticate
    try {
      // Prepare data to send in the request body
      const userData = {
          username: username,
          password: password
      };

      // Send HTTP POST request to register the user
      fetch('/Login', {
          method: 'POST',
          headers: {
              'Content-Type': 'application/json'
          },
          body: JSON.stringify(userData)
      })
        .then(response => {
            if (response.ok) {
              alert("User is authenticated. User profile is retrieved and can proceed.");
              navigate('/');
            } 
            else {
              // If there's an error, display error message
              alert('User not authenticated with the provided credentials.');
              // Log the error
              console.error(response);
            }
        })

    } catch (error) {
        alert("Exception occured trying to send login information to backend.");
        console.error('Exception occured trying to send login information to backend.');
    }

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
      <p style={{ color: "red", textAlign: "center", paddingTop: "20px" }}>Incorrect Login Info</p>
    </div> :
    <p></p>

  return (
    <Navbar dark expand="md">
      <NavbarBrand tag={Link} to="/">Home</NavbarBrand>
      <NavbarToggler onClick={() => setIsOpen(!isOpen)} />
      <Collapse isOpen={isOpen} navbar>
        <Nav className="justify-content-end" style={{ width: "100%" }} navbar>
          {user ? (
            <Dropdown nav isOpen={dropdownOpen} toggle={toggleDropdown}>
              <DropdownToggle nav caret>
                {user.type === "Registered User" ? (
                  <>
                    { user.object.username }
                  </>
                ) : (
                  alert("wtf")
                )}
              </DropdownToggle>
              <DropdownMenu right style={{ padding: '20px', minWidth: '250px', paddingBottom: '20px', border: "2px solid #000", backgroundColor: "rgba(255, 255, 255, 0.10)", color: "white" }}>
                <DropdownItem tag={Link} to={"/"} className="dropdown-item-hover">
                  Home
                </DropdownItem>
                <DropdownItem tag={Link} to={"/Chatrooms"} className="dropdown-item-hover">
                  Chatrooms
                </DropdownItem>
                <DropdownItem className="dropdown-item-hover" onClick={() => { setUser(undefined); navigate('/'); }}>
                  Logout
                </DropdownItem>
              </DropdownMenu>
            </Dropdown>
          ) : (
            <Dropdown nav isOpen={dropdownOpen} toggle={toggleDropdown}>
              <DropdownToggle nav caret>
                Guest
              </DropdownToggle>
              <DropdownMenu end style={{ padding: '20px', minWidth: '250px', paddingBottom: '5px', border: "2px solid #000", backgroundColor: "rgba(255, 255, 255, 0.10)", color: "white" }}>
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
                      style={{ backgroundColor: "rgba(255, 255, 255, 0.10)", color: "white" }}
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
                      style={{ backgroundColor: "rgba(255, 255, 255, 0.10)", color: "white" }}
                    />
                  </div>

                  {/* Submit Button */}
                  <ButtonGroup style={{ marginLeft: "40px", marginTop: "10px" }}>
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
