import JSZip from 'jszip';

export function getDeitiesData() {
    return fetch('/Admin/Deities')
        .then(response => {
            if (response.ok) {
                return response.blob(); // Get response body as blob
            } else {
                throw new Error('Network response was not ok');
            }
        })
        .then(blob => {
            // Unzip the blob using JSZip
            return JSZip.loadAsync(blob);
        })
        .then(zip => {
            // Assuming your JSON file is named 'data.json' inside the zip
            const jsonFile = zip.file('data.json');
            if (!jsonFile) {
                throw new Error('JSON file not found inside the zip');
            }
            return jsonFile.async('text');
        })
        .then(jsonString => {
            // Parse the JSON string
            const data = JSON.parse(jsonString);

            // Perform any necessary transformations on the data
            const jsonData = Object.values(data).map(entry => {
                const {
                    AGGRESSION,
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
                    ZEN
                } = entry;
                return {
                    DeityName: DeityName,
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

            console.log(jsonData); 
            return JSON.stringify(jsonData);
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
            const jsonData = data.map(entry => {
                const { Email, Title, Body, Date } = entry;
                return { Email, Title, Body, Date };
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