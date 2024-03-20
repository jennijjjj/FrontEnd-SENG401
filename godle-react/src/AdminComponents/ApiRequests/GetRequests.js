export function getDeitiesData(){
    return fetch('/Admin/Deities') 
    
        
        .then(response => {
            if (response.ok) {
                return response.json(); // Return the JSON parsing promise
            } else {
                throw new Error('Network response was not ok');
            }
        })
        .then(data => {
            const jsonData = Object.values(data).map(entry => {
                const { AGGRESSION,
                    DeityDescription,
                    DeityName,
                    ERUDITION,
                    GRANDEUR,
                    ImagePath,
                    MORALITY,
                    MYSTICISM,
                    ORGANIZATION,
                    SourceUniverse,
                    SQUEAMISHNESS,
                    TECHNOLOGY,
                    TEMPERAMENT,
                    ZEALOUSNESS,
                    ZEN} = entry;
                return { DeityName: DeityName,
                    DeityDescription: DeityDescription,
                    SourceUniverse: SourceUniverse,
                    ImagePath: ImagePath,
                    Aggression: AGGRESSION,
                    Erudition: ERUDITION,
                    Grandeur: GRANDEUR,
                    Morality: MORALITY,
                    Mysticism: MYSTICISM,
                    Organization: ORGANIZATION,
                    Squeamishness: SQUEAMISHNESS,
                    Technology: TECHNOLOGY,
                    Temperament: TEMPERAMENT,
                    Zealousness: ZEALOUSNESS,
                    Zen: ZEN
                     };
            });

            const jsonString = JSON.stringify(jsonData);
            console.log(jsonData); // Output the JSON string for verification
            return jsonString;
        })
        .catch(error => {
            console.error(`Error fetching data:`, error); 
            throw error; // Rethrow the error to the caller
        });
}


export function getCalendarData(){
    return fetch('/Admin/Calendar') 
        .then(response => {
            if (response.ok) {
                return response.json(); // Return the JSON parsing promise
            } else {
                throw new Error('Network response was not ok');
            }
        })
        .then(data => {
            const jsonData = Object.values(data).map(entry => {
                const { Email, UserName} = entry;
                return {Email:Email, UserName:UserName};
            });

            const jsonString = JSON.stringify(jsonData);
            console.log(jsonData); // Output the JSON string for verification
            return jsonString;
        })
        .catch(error => {
            console.error(`Error fetching data:`, error); 
            throw error; // Rethrow the error to the caller
        });
}

export function getUsersData(){
    return fetch('/Admin/Users') 
        .then(response => {
            if (response.ok) {
                return response.json(); // Return the JSON parsing promise
            } else {
                throw new Error('Network response was not ok');
            }
        })
        .then(data => {
            const jsonData = Object.values(data).map(entry => {
                const { Email, UserName} = entry;
                return {Email:Email, UserName:UserName};
            });

            const jsonString = JSON.stringify(jsonData);
            console.log(jsonData); // Output the JSON string for verification
            return jsonString;
        })
        .catch(error => {
            console.error(`Error fetching data:`, error); 
            throw error; // Rethrow the error to the caller
        });
}

export function getForumData(){
    return fetch('/Admin/Forum') 
        .then(response => {
            if (response.ok) {
                return response.json(); // Return the JSON parsing promise
            } else {
                throw new Error('Network response was not ok');
            }
        })
        .then(data => {
            const jsonData = Object.values(data).map(entry => {
                const { Email, UserName} = entry;
                return {Email:Email, UserName:UserName};
            });

            const jsonString = JSON.stringify(jsonData);
            console.log(jsonData); // Output the JSON string for verification
            return jsonString;
        })
        .catch(error => {
            console.error(`Error fetching data:`, error); 
            throw error; // Rethrow the error to the caller
        });
}