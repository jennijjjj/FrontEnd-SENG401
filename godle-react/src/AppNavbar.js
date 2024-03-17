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


  const handleLogin = async (e) => {
    e.preventDefault(); // Prevent default form submission behavior

    // Authenticate
    try {
      // Prepare data to send in the request body
      const userData = {
        username: username,
        password: password
      };

      // Send HTTP POST request to register the user
      const response = await fetch('/Login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(userData)
      });

      if (response.ok) {
        const userDataWithToken = await response.json();
        localStorage.setItem('token', userDataWithToken.token);
        localStorage.setItem('user',JSON.stringify(userData));
        setUser(userData)
        
      } else {
        // If there's an error, display error message
        setIncorrectLogin(true);
        console.error('User not authenticated with the provided credentials.');
        
      }
    } catch (error) {
      setIncorrectLogin(true);
      console.error('Exception occurred trying to send login information to backend.');
    }
    setUsername('');
    setPassword('');
    
  };

  const checkLocalStorage = () => {
    try{
      const token = localStorage.getItem('token');
      const userString = localStorage.getItem('user');
      if (token && userString) {
        const user = JSON.parse(userString);
        setUser(user);
        }
    } catch(err){
    }
    
  };
  
  // Call checkLocalStorage on component mount
  useEffect(() => {
    checkLocalStorage();
  }, []);


  const handleLogout = () => {
    // Clear user state
    setUser(undefined);
    
    // Clear token from local storage
    localStorage.clear();
  
    // Navigate to the home page
    navigate('/');
  };
  

  // useEffect(() => {
  //   let timer;
  //   if (incorrectLogin === true) {
  //     // Set a timer to set yourState to false after 5 seconds
  //     timer = setTimeout(() => {
  //       setIncorrectLogin(false);
  //     }, 5000);
  //   }

  //   // Cleanup function to clear the timer if the component unmounts
  //   // or if yourState changes before the timer finishes
  //   return () => clearTimeout(timer);
  // }, [incorrectLogin, setIncorrectLogin]);

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
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
                <>
                  {user.username}
                </>
              </DropdownToggle>
              <DropdownMenu right style={{ padding: '20px', minWidth: '250px', paddingBottom: '20px', border: "2px solid #000", backgroundColor: "rgba(255, 255, 255, 0.10)", color: "white" }}>
                <DropdownItem tag={Link} to={"/"} className="dropdown-item-hover">
                  Home
                </DropdownItem>
                <DropdownItem tag={Link} to={"/Forum"} className="dropdown-item-hover">
                  Forum
                </DropdownItem>
                <DropdownItem className="dropdown-item-hover" onClick={() => { handleLogout() }}>
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
