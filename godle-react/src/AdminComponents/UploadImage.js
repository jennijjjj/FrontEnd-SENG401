import React, { useState, useEffect } from 'react';
import ImageUploading from 'react-images-uploading';

export function UploadImage({ images, setImages, deityName }) {
  
  const maxNumber = 1;

  const onChange = (imageList) => {
    // Rename the image file before updating the state
    const renamedImageList = imageList.map((image) => {
        const imageName = `${deityName}.${image.file.name.split('.').pop()}`; // Rename the file with a timestamp
        return { ...image, file: new File([image.file], imageName, { type: image.file.type }) };
    });
    // Update the state with the renamed image list
    setImages(renamedImageList);
    
    
  };


return (
    <div className="App">
      <ImageUploading
        value={images}
        onChange={onChange}
        maxNumber={maxNumber}
        dataURLKey="data_url"
      >
        {({
          imageList,
          onImageUpload,
          onImageRemove,
          isDragging,
          dragProps,
        }) => (
          <div className="upload__image-wrapper">
            <p
              className='list-group-item'
              style={{ textDecoration: 'underline', ...(isDragging ? { color: 'red', fontWeight:"bolder" } : {}) }}
              onClick={onImageUpload}
              {...dragProps}
            >
              Click or Drop image here
            </p>
            &nbsp;
            {imageList.map((image, index) => (
              <div key={index} className="image-item">
                <img src={image['data_url']} alt="" width="100" />
                <div className="image-item__btn-wrapper">
                  <button className="adminbutton" onClick={() => onImageRemove(index)}>Remove</button>
                </div>
              </div>
            ))}
          </div>
        )}
      </ImageUploading>
      {/* <button onClick={uploadImage}>Upload Image</button> */}
    </div>
  );
}
