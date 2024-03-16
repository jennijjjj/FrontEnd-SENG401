export const fetchThreads = async (email) => {
    fetch(`/Forum/getThreads?email=${encodeURIComponent(email)}`, {
        method: 'GET',
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
