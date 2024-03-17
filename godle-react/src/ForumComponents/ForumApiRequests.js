export const fetchThreads = async (email) => {
    fetch(`/Forum?email=${email}`)
        .then(response => {
            if (!response.ok) {
            throw new Error('Network response was not ok');
            }
            return response.json();
        })
        .then(data => {
            // Handle the JSON response data here
            console.log("ah"+data);
            // return data;
        })
        .catch(error => {
            // Handle errors here
            console.error('There was a problem with the fetch operation:', error);
        });
};

export const addThread = async (email, body, title) => {
    const userData = {
        email: email,
        title: title,
        body: body,
      };

    fetch(`/Forum/postThread`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        }
    })
    .then(response => {
        if (response.ok) {
          response.json().then(data => {
            // Access the data in the response body
            console.log(data);
          });
    }else{
        console.error(response);

    }});
};
