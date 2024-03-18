
export const postDeity = async (Zen,Organization,Squeamishness, Technology, Temperament, Zealousness,Aggression,Erudition,Grandeur,Morality,Mysticism,DeityName, SourceUniverse, DeityDescription, ImagePath) => {
    const formData ={
        Aggression:Aggression, 
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
        SourceUniverse: SourceUniverse 
    }

    try {
        const response = await fetch('/Admin/Deities', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(formData),
        });

        if (!response.ok) {
            throw new Error('Network response was not ok');
        } 

        const data = await response.json();
        console.log('Response from server:', data);
        alert(`Successfully saved ${DeityName}!`);
        // Handle success response from server
    } catch (error) {
        console.error('Error:', error);
        alert(`Error saving ${DeityName}. Try again later.`);
        // Handle error
    }
};