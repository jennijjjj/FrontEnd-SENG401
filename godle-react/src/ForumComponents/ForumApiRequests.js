export const fetchThreads = async (email) => {
    fetch(`/Forum/getThreads?email=${encodeURIComponent(email)}`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json'
        }
    })
    .then(response => {
        if (response.ok) {
            console.log("response", response);
            return response.json(); // Parse response body as JSON
        } else {
            alert('Error: ' + response.statusText); // Display error message if response is not OK
            throw new Error('Network response was not ok');
        }
    })
    .then(data => {
        // Handle the JSON data returned from the server
        console.log("data", data);
    })
    .catch(error => {
        console.error('Fetch error:', error); // Handle errors that occurred during the fetch operation
    });
};
