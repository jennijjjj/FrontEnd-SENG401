export const fetchThreads = async (email) => {
    try {
        const response = await fetch(`/Forum?email=${email}`);
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        const data = await response.json();
        const jsonData = Object.entries(data).map(([date, entry]) => {
            const { title, body, email } = entry;
            return { date, title, body, email };
          });
          
        const jsonString = JSON.stringify(jsonData);
        return jsonString;
    } catch (error) {
        console.error('There was a problem with the fetch operation:', error);
        throw error; // Re-throw the error for the caller to handle
    }
};

export const postThread = async (email, title, body) => {
    const postData = {
        email: email,
        title: title,
        body: body
      };
      
    try {
        fetch('/Forum', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(postData)
            })
            .then(response => {
                if (!response.ok) {
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

export const deleteThread = async (email, date) => {
    const postData = {
        email: email,
        date: date
      };
      
    try {
        fetch('/Forum', {
            method: 'Delete',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(postData)
            })
            .then(response => {
                if (!response.ok) {
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


