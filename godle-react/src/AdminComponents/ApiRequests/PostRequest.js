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

export const uploadImage = async (file, imageName) => {
    console.log("posssstimaggee");
    const uploadPath = 'C:/Users/jenni/OneDrive/Documents/GitHub/FrontEnd-SENG401/godle-react/public/images/' + file.name;
    if (imageName!==""){
        try {
            const formData = new FormData();
            formData.append('image', file);
            formData.append('string', uploadPath)
            formData.append('string', imageName)
            console.log("formData: ")
            for (const [key, value] of formData.entries()) {
                console.log(key, value);
            }
        
            const response = await fetch('/Admin/Deities', {
              method: 'POST',
              body: formData
            });
        
            const result = await response.text();
            console.log(result);
          } catch (error) {
            console.error('Error uploading image: ', error);
          }
    }
};