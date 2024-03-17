export const fetchThreads = async (email) => {
    try {
        const response = await fetch(`/Forum?email=livia@example.com`);
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        const data = await response.json();
        const jsonData = Object.entries(data).map(([date, entry]) => {
            const { title, body, email } = entry;
            return { date, title, body, email };
          });
          
        const jsonString = JSON.stringify(jsonData);
        // Object.entries(data).forEach(([date, entry]) => {
        //     const { title, body, email } = entry;
        //     console.log('Date:', date);
        //     console.log('Title:', title);
        //     console.log('Body:', body);
        //     console.log('Email:', email);
        //   });
        console.log(jsonString);
        return jsonString;
        
        return data;
    } catch (error) {
        console.error('There was a problem with the fetch operation:', error);
        throw error; // Re-throw the error for the caller to handle
    }
};


// export const fetchThreads = async (email) => {
//     console.log("ok")
//     try {
//         const response = await fetch(`/Forum?email=${email}`);
//         if (!response.ok) {
//             throw new Error('Network response was not ok');
//         }
//         // const data = await response.json(); 
//         // const data = JSON.parse(rawData); // Parse the raw text into JSON

//         // // Now 'data' should be a valid JSON object
//         const rawData = await response.json();
//         const data = JSON.parse(rawData);
//         console.log("api"+data);

//         // const flightCodes = Object.keys(data).map(key => data[key].FlightCode);
//         // 
//         // const DepDate = Object.keys(data).map(key => data[key].DepDate);
//         // console.log(DepDate);

//         // const Origin = Object.keys(data).map(key => data[key].Origin);
//         // console.log(Origin);

//         // const Destination = Object.keys(data).map(key => data[key].Destination);
//         // const Model = Object.keys(data).map(key => data[key].Model);
//         // const Duration = Object.keys(data).map(key => data[key].Duration);
//         // const flightDetails = flightCodes.map((code, index) => ({
//         //   FlightCode: code,
//         //   DepDate: DepDate[index],
//         //   Origin: Origin[index],
//         //   Destination: Destination[index],
//         //   Model: Model[index],
//         //   Duration: Duration[index]
//         // }));
        
//         // // Create the final JSON structure
//         // const finalJSON = flightDetails;
//         // setFlightDetails(finalJSON);
        
  
//     } catch (error) {
//         console.error('Error fetching flights:', error);
//     }
//   };
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
