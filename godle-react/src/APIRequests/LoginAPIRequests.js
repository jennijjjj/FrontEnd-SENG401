export const loginUser = async (username, password) => {
    // try {
    //     // Prepare data to send in the request body
    //     const userData = {
    //       username: username,
    //       password: password
    //     };
  
    //     // Send HTTP POST request to register the user
    //     fetch('/Login', {
    //       method: 'POST',
    //       headers: {
    //         'Content-Type': 'application/json'
    //       },
    //       body: JSON.stringify(userData)
    //     })
    //       .then(response => {
    //         if (response.ok) {
    //           setDeity(getDeity(userData));
    //           response.json().then(data => {
    //             console.log(data);
    //             localStorage.setItem('token', data.token);
    //             localStorage.setItem('user',JSON.stringify(userData));
    //             setUser(userData);
    //             if (data.admin === 1) {
    //               navigate("/admin");
    //               localStorage.setItem('isAdmin',true);
    //               setIsAdmin(true);
    //             } else {
    //               navigate("/");
    //               localStorage.setItem('isAdmin',false);
    //             }
    //           });
    //         } else {
    //           // If there's an error, display error message
    //           alert('User not authenticated with the provided credentials.');
    //           // Log the error
    //           console.error(response);
    //         }
    //       })
          
    //   } catch (error) {
    //     setIncorrectLogin(true);
    //     alert("Exception occured trying to send login information to backend.");
    //     console.error('Exception occured trying to send login information to backend.');
    //   }
  
}