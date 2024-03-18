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
                const { Aggression,
                    DeityDescription,
                    DeityName,
                    Erudition,
                    Grandeur,
                    ImagePath,
                    Morality,
                    Mysticism,
                    Organization,
                    SourceUniverse,
                    Squeamishness,
                    Technology,
                    Temperament,
                    Zealousness,
                    Zen} = entry;
                return { Aggression:Aggression, 
                    DeityName: DeityName, 
                    DeityDescription: DeityDescription,
                    Erudition:Erudition,
                    Grandeur:Grandeur,
                    ImagePath:ImagePath,
                    Morality:Morality,
                    Mysticism:Mysticism,
                    Organization:Organization,
                    Squeamishness:Squeamishness,
                    Technology:Technology,
                    Temperament:Temperament,
                    Zealousness:Zealousness,
                    Zen:Zen,
                    SourceUniverse: SourceUniverse };
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
    return fetch('/Admin/User') 
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