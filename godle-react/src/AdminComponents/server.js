const express = require('express');
const fileUpload = require('express-fileupload');
const path = require('path');
const cors = require('cors'); // Import the CORS middleware
const app = express();
const fs = require('fs'); // Import the filesystem module
const port = 3001;

// Middleware for file uploads
app.use(fileUpload());

// Enable CORS for all origins
app.use(cors());

// POST endpoint for uploading files
app.post('/upload', (req, res) => {
  if (req.files === null) {
    return res.status(400).json({ msg: 'No file uploaded' });
  }

  console.log("requestBody:",req.files);

  const file = req.files.image; // Assuming the key is 'image'
  const uploadPath = path.join(__dirname, '..', '..', 'public', 'images', file.name); //TIP for celina: __dirname can be hardcoded to: C:\Users\jenni\OneDrive\Documents\GitHub\FrontEnd-SENG401\godle-react\src\AdminComponents
  // Check if the directory exists, if not, create it
  const directory = path.dirname(uploadPath);
  if (!fs.existsSync(directory)) {
    fs.mkdirSync(directory, { recursive: true });
  }

  // Move the file to the destination directory
  file.mv(uploadPath, err => {
    if (err) {
      console.error(err);
      return res.status(500).send(err);
    }

    res.json({ fileName: file.name, filePath: `/images/${file.name}` });
  });
});


app.get('/deleteImage', (req, res) => {
  const name = req.query.deityName; // Get the image name from the query parameters
  console.log(req);
  const uploadPath = path.join(__dirname, '..', '..', 'public', 'images');

  // Check if any file exists in the directory with the provided name (ignoring file extensions)
  let exists = false;
  fs.readdirSync(uploadPath).forEach(file => {
    const fileNameWithoutExtension = file.split('.').slice(0, -1).join('.');
    console.log("name",name,"w/",fileNameWithoutExtension)
    if (fileNameWithoutExtension === name) {
      exists = true;
      // Delete the file
      fs.unlinkSync(path.join(uploadPath, file));
    }
  });

  res.json({ exists }); // Send the result back to the client
});


app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});
