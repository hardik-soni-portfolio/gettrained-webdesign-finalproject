var fs = require('fs');

exports.saveImage = (req, res) => {
    if(req.file){
        var filename = req.file.filename;
        var uploadStatus = 'File Uploaded successfully';
    }else {
        console.log('No file uploaded');
        var filename = "File not uploaded";
        var uploadStatus = "file iupload failed";
    }
    res.json(filename);
}