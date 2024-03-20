import React, { useState, useEffect } from 'react';
import ImageUploading from 'react-images-uploading';

export function UploadImage({ images, setImages, deityName, deityImagePath }) {
  
  const maxNumber = 1;

  const onChange = (imageList) => {
    const renamedImageList = imageList.map((image) => {
        const imageName = `${deityName}.${image.file.name.split('.').pop()}`;
        return { ...image, file: new File([image.file], imageName, { type: image.file.type }) };
    });
    setImages(renamedImageList);
    
    
  };

  const boxStyle = {
    width: '300px',
    border: '2px dashed #aaa',
    padding: '20px',
    textAlign: 'center'
};

  const dividerStyle = {
      marginBottom: '10px'
  };

  const onImageUploadDefault = () => {
    fetch(deityImagePath)
      .then(response => response.blob())
      .then(blob => {
        const file = new File([blob], deityImagePath, { type: 'image/jpeg' });
        console.log([{ data_url: URL.createObjectURL(blob), file }]);
        onChange([{ data_url: URL.createObjectURL(blob), file }]);
      })
      .catch(error => console.error('Error fetching default image:', error));
  };
  useEffect(() => {
    if (images.length === 0 && deityImagePath!=="") {
      onImageUploadDefault();
    }
  }, [deityImagePath]); 

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
            {imageList.length===0 && (
              <div
              style={{
                ...(isDragging ? { backgroundColor: '#eaf6ff', fontWeight: 'bolder' } : {}),
                ...boxStyle // Merge with the existing boxStyle object
              }}
              // onClick={onImageUpload}
              {...dragProps}
            > <div >
                  <p>☁️📁</p>
              </div>
                <div >
                    <p>Drag & Drop File Here</p>
                </div>
                <div style={dividerStyle}>
                    <p>OR</p>
                </div>
                <div className="browse-button">
                    <button className='adminbutton' onClick={onImageUpload}>Browse File</button>
                </div>
            </div>
          )}
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
    </div>
  );
}