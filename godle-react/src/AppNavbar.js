import React, { useState, useEffect } from 'react';
import { Button, ButtonGroup, Collapse, Nav, Navbar, NavbarBrand, NavbarToggler, Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';
import { Link, useNavigate } from 'react-router-dom';
import { FastLayer } from 'konva/lib/FastLayer';

const AppNavbar = ({ user, setUser, setDeity, deity, setIsAdmin, isAdmin }) => {
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [incorrectLogin, setIncorrectLogin] = useState(false);

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
            fetch('/IsUserMatched', {
              method: 'POST',
              headers: {
                'Content-Type': 'application/json',
              },
              body: JSON.stringify(userData.username),
            })
              .then(response => {
                if (response.ok) {
                  return response.json(); // Parse JSON data from the response
                }
                throw new Error('No Deity Matched To User'); // Handle non-OK responses
              })
              .then(data => {
                console.log("Deity Object Found");
                setDeity(data);
              })
              .catch(error => {
                setDeity(undefined);
                console.log('There was an error', error);
              });
            response.json().then(data => {
              console.log(data);
              localStorage.setItem('token', data.token);
              localStorage.setItem('user',JSON.stringify(userData));
              setUser(userData);
              if (data.admin === 1) {
                navigate("/admin");
                setIsAdmin(true);
              } else {
                navigate("/");
              }
            });
          } else {
            // If there's an error, display error message
            alert('User not authenticated with the provided credentials.');
            // Log the error
            console.error(response);
          }
        })
        
    } catch (error) {
      setIncorrectLogin(true);
      alert("Exception occured trying to send login information to backend.");
      console.error('Exception occured trying to send login information to backend.');
    }

    setUsername('');
    setPassword('');
  };

  const checkLocalStorage = () => {
    try {
      const token = localStorage.getItem('token');
      const userString = localStorage.getItem('user');
      if (token && userString) {
        const user = JSON.parse(userString);
        setUser(user);
      }
    } catch (err) {
    }

  };

  // Call checkLocalStorage on component mount
  useEffect(() => {
    checkLocalStorage();
  }, []);

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
      <div className='titleContainer'>
        <NavbarBrand className="titleText" style={{fontSize:"30px"}}>🗦🕯Divinity🗧</NavbarBrand>
      </div>
      
      
      <NavbarToggler onClick={() => setIsOpen(!isOpen)} />
      <Collapse isOpen={isOpen} navbar>
        <Nav className="justify-content-end" style={{ width: "100%" }} navbar>
        {!isAdmin && (
          <>
          <NavbarBrand tag={Link} to="/">Home</NavbarBrand>
            {deity ? (<>
              <NavbarBrand tag={Link} to={"/Forum"} >
                Forum
              </NavbarBrand>
              <NavbarBrand tag={Link} to={"/Calendar"}>
                Calendar
              </NavbarBrand>
              <NavbarBrand tag={Link} to={"/Diety"}>
                View Diety
              </NavbarBrand>
            </>) : (
              null
            )}
            </>
        )}
          {user ? (
            <Dropdown nav isOpen={dropdownOpen} toggle={toggleDropdown}>
              <DropdownToggle nav caret>
                <>
                  {user.username}
                </>
              </DropdownToggle>
              <DropdownMenu right style={{ padding: '20px', minWidth: '250px', paddingBottom: '20px', border: "2px solid #000", backgroundColor: "rgba(255, 255, 255, 0.10)", color: "white" }}>
                <DropdownItem className="dropdown-item-hover" onClick={() => { setUser(undefined); setIsAdmin(false); navigate('/'); localStorage.clear(); setDeity(undefined)}}>
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
                    <Button onClick={() => setDeity(undefined)} tag={Link} to={"/Register"} color='danger'>Register</Button>
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

