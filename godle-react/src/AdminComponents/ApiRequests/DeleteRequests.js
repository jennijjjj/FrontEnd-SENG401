
export const deleteDeity = async (DeityName) => {
    const data ={
        DeityName: DeityName,  
    }

    try {
        fetch('/Admin/Deities', {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
            })
            .then(response => {
                if (!response.ok) {
                    console.log(data);
                    alert(`ERROR: could not delete ${DeityName}.`);
                throw new Error('Network response was not ok');
                }
                alert(`Successfully deleted ${DeityName}!`);
                return response.json();
            })
            .then(data => {
                console.log('POST request successful');
                console.log(data); // Response data from the server
            })
            .catch(error => {
                console.error('Error during POST request:', error);
            });
    } catch (error) {
        console.error('There was a problem with the fetch operation:', error);
        throw error; // Re-throw the error for the caller to handle
    }
};

export const deleteUser = async (Email) => {
    const data ={
        Email: Email,  
    }

    try {
        fetch('/Admin/Users', {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
            })
            .then(response => {
                if (!response.ok) {
                    console.log(data);
                    alert("Error: Could not delete User.");
                throw new Error('Network response was not ok');
                }
                
                return response.json();
            })
            .then(data => {
                console.log('POST request successful');
                console.log(data); // Response data from the server
            })
            .catch(error => {
                console.error('Error during POST request:', error);
            });
    } catch (error) {
        console.error('There was a problem with the fetch operation:', error);
        throw error; // Re-throw the error for the caller to handle
    }
};