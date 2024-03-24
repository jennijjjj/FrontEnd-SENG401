import React, { useState, useEffect } from 'react';
import { Button, ButtonGroup, Collapse, Nav, Navbar, NavbarBrand, NavbarToggler, Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';
import { Link, useNavigate } from 'react-router-dom';
import { getItemIsAdmin, getItemUser, getItemDeity, setItemIsAdmin, setItemDeity, setItemUser } from './LocalStorageFunctions';
import Loading from './Loading';

const AppNavbar = ({ user, setUser, setDeity, deity, setIsAdmin, isAdmin }) => {
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [incorrectLogin, setIncorrectLogin] = useState(false);
  const [loadingAppNavbar, setLoadingAppNavbar] = useState(false);

  useEffect(() => { //sets local storage when new user logs in
    const token = localStorage.getItem('token');
    if (token) {
      setUser(getItemUser);
      setIsAdmin(getItemIsAdmin);
      setDeity(getItemDeity);
    }
  }, []);

  useEffect(() => {
    let timer;
    if (incorrectLogin) {
      // Set `incorrectLogin` back to false after 3 seconds
      timer = setTimeout(() => {
        setIncorrectLogin(false);
      }, 3000);
    }
    // Cleanup function to clear the timer if the component unmounts
    return () => clearTimeout(timer);
  }, [incorrectLogin])

  const handleLogin = async (e) => {
    e.preventDefault(); // Prevent default form submission behavior
    setLoadingAppNavbar(true);

    try {
      const userData = {
        username: username,
        password: password,
      };

      // Send HTTP POST request to register the user
      let response = await fetch('/Login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(userData),
      });

      if (!response.ok) {
        let data = await response.json();
        throw new Error(data.key);
      }

      let data = await response.json();
      localStorage.setItem('token', data.token);
      setUser(userData);
      setItemUser(userData);

      if (data.admin === 1) {
        setItemIsAdmin(true);
        setIsAdmin(true);
        navigate("/admin");
      } else {
        navigate("/");
      }

      // Second fetch to check if user is matched with a deity
      response = await fetch('/IsUserMatched', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ username: userData.username }), // Ensure correct data structure for backend
      });

      if (!response.ok) {
        console.log('No Deity Matched To User');
        setDeity(undefined);
      } else {
        data = await response.json();
        console.log("Deity Object Found", data);
        setItemDeity(data);
        setDeity(data);
      }

    } catch (error) {
      console.error('Error:', error.message || 'An error occurred during login.');
      alert(error.message);
      setIncorrectLogin(true);
    } finally {
      setLoadingAppNavbar(false);
      setUsername('');
      setPassword('');
    }
  };

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
      {loadingAppNavbar ? (<Loading />) : (null)}
      <div className='titleContainer'>
        <NavbarBrand className="titleText" style={{ fontSize: "30px" }}>🗦🕯Divinity🕯🗧</NavbarBrand>
      </div>


      <NavbarToggler onClick={() => setIsOpen(!isOpen)} />
      <Collapse isOpen={isOpen} navbar>
        <Nav className="justify-content-end" style={{ width: "100%" }} navbar>
          {!isAdmin && (
            <>
              <NavbarBrand className='navlink' tag={Link} to="/">⌂ Home</NavbarBrand>
              <NavbarBrand className='navlink' tag={Link} to="/Quiz">Quiz</NavbarBrand>
              {deity ? (<>
                {user && (
                  <>
                    <NavbarBrand className='navlink' tag={Link} to={"/Forum"} >
                      🗪 Forum
                    </NavbarBrand>
                    <NavbarBrand className='navlink' tag={Link} to={"/Calendar"}>
                      🗒 Calendar
                    </NavbarBrand>
                  </>
                )}
                <NavbarBrand className='navlink' tag={Link} to={"/Deity"}>
                  ♜ My Diety
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
              <DropdownMenu right style={{ padding: '20px', minWidth: '250px', paddingBottom: '20px', border: "2px solid #000", backgroundColor: "rgba(0, 0, 0, 0.50)", color: "white" }}>
                <DropdownItem className="dropdown-item-hover" onClick={() => { localStorage.clear(); setDeity(undefined); setIsAdmin(false); navigate('/'); setUser(undefined); }}>
                  Logout
                </DropdownItem>
              </DropdownMenu>
            </Dropdown>
          ) : (
            <Dropdown nav isOpen={dropdownOpen} toggle={toggleDropdown}>
              <DropdownToggle nav caret>
                Guest
              </DropdownToggle>
              <DropdownMenu end style={{ padding: '20px', minWidth: '250px', paddingBottom: '5px', border: "2px solid #000", backgroundColor: "rgba(0, 0, 0, 0.50)", color: "white" }}>
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

