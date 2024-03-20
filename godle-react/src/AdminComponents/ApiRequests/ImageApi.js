// import axios from 'axios';

export const uploadImage = async (images,deityName) => {
    // if (images.length === 0) {
    //   console.error("No image selected for upload");
    //   return;
    // }

    // const formData = new FormData();
    // formData.append('image', images[0].file);
    // try {
    //   deleteImage(deityName);
    //   try {
    //     const response = await axios.post('http://localhost:3001/upload', formData, {
    //       headers: {
    //         'Content-Type': 'multipart/form-data'
    //       }
    //     });
    //     console.log(response.data);
    //     // Handle response as needed
    //   } catch (error) {
    //     console.error('Error uploading image:', error);
    //     // Handle error
    //   }
    // } catch (error) {
    //   console.error('Error checking image existence:', error);
    //   // Handle error
    // }
    
  };


  export const deleteImage = async (deityName) => {
    // try {
    //   // Make a GET request to the deleteImage endpoint
    //   const response = await axios.get('http://localhost:3001/deleteImage', { params: { deityName } });
    //   console.log('Image exists:',deityName, response.data.exists);
    //   return(1);
    //   // Handle response as needed
    // } catch (error) {
    //   console.error('Error checking image existence:', error);
    //   return(1);
    //   // Handle error
    // }
  };
  
  