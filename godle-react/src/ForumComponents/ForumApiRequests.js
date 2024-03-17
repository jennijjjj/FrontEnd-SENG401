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
