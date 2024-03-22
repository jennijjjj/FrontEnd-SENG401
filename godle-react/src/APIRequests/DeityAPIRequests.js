export const getDeity = async (user) => {
    fetch('/IsUserMatched', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(user.username),
      })
        .then(response => {
          if (response.ok) {
            return response.json(); // Parse JSON data from the response
          }
          throw new Error('No Deity Matched To User'); // Handle non-OK responses
        })
        .then(data => {
            console.log("Deity Object Found");
            return data;
        })
        .catch(error => {
            console.log('There was an error', error);
            return undefined;
        });
}