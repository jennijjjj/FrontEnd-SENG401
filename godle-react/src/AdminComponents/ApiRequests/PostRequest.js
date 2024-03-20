
export const postDeity = async (Zen,Organization,Squeamishness, Technology, Temperament, Zealousness,Aggression,Erudition,Grandeur,Morality,Mysticism,DeityName, SourceUniverse, DeityDescription, ImagePath) => {
    const data ={
        DeityName: DeityName,
        DeityDescription: DeityDescription,
        SourceUniverse: SourceUniverse,
        ImagePath:ImagePath,
        AGGRESSION:Aggression, 
        ERUDITION:Erudition,
        GRANDEUR:Grandeur,
        MORALITY:Morality,
        MYSTICISM:Mysticism,
        ORGANIZATION:Organization,
        SQUEAMISHNESS:Squeamishness,
        TECHNOLOGY:Technology,
        TEMPERAMENT:Temperament,
        ZEALOUSNESS:Zealousness,
        ZEN:Zen    
    }
    try {
        fetch('/Admin/Deities', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
            })
            .then(response => {
                if (!response.ok) {
                    console.log(response)
                    alert(`Error: could not add diety.`);
                throw new Error('Network response was not ok');
                }
                
                return response.json();
            })
            .then(data => {
                console.log('POST request successful');
                alert.window(`Successfully added ${DeityName}!`)
                console.log(data); // Response data from the server
            })
            .catch(error => {
                console.error('Error during POST request:', error);
            });
    } 
    catch (error) {
        console.error('There was a problem with the fetch operation:', error);
        throw error; // Re-throw the error for the caller to handle
    }
};