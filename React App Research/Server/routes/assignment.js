const express = require('express');
const cloudinary = require('./../utils/cloud');
const upload = require('./../utils/templateMulter');
const router = express.Router();

const Assignment = require('./../models/assignment');

router.post('/add', upload.single('template'), async (req, res) => {
    try {
        console.log(req.file);

        if(!req.file){
            return err.json("File is empty");
        }

        const result = await cloudinary.uploader.upload(req.file.path, {
             resource_type: "auto", 
             folder : "Template",
             public_id: req.file.originalname
         });
        console.log(result);
        
        const assignment = new Assignment({
            asgName : req.body.asgName,
            endDate : req.body.endDate,
            endTime : req.body.endTime,
            department : req.body.department,
            template : result.secure_url,
            cloudinary_id : result.public_id,
            fileName:req.body.fileName
        })
        await assignment
        .save()
        .then(() =>{ res.json("Assignment Added Successfully...")})
        .catch((err) => res.json(err.message));


    }catch (err) {

    }
});

router.get('/view', (req, res) => {
    Assignment
    .find()
    .then((response) => res.json(response))
    .catch((err) => res.json(err.message));
});

router.get('/view/:id', (req, res) => {
    Assignment
    .findById(req.params.id)
    .then((response) => res.json(response))
    .catch((err) => res.json(err.message));
});

router.put('/edit/:id', upload.single('template'), async (req, res) => {

    try{

        let research = await Assignment.findById(req.params.id);

        await cloudinary.uploader.destroy(research.cloudinary_id,  {resource_type: "raw",} );

        const result = await cloudinary.uploader.upload(req.file.path, {
            resource_type: "raw", 
            folder : "Template",
            public_id: req.file.originalname
        });
       // res.json(result);
       
       await Assignment.findById(req.params.id)
        .then((response) => {
            response.asgName = req.body.asgName,
            response.endDate = req.body.endDate,
            response.endTime = req.body.endTime,
            response.department = req.body.department,
            response.template = result.secure_url,
            response.cloudinary_id = result.public_id,
            response.fileName = req.body.fileName

            response
            .save()
            .then(() => res.json("Assignment Updated Successfully..."))
            .catch((err) => console.log(err.message));
        })
        .catch((err) => res.json(err.message));

    }catch(err){
        console.log(err.message);
    }
    
});

router.delete('/delete/:id', async (req, res) => {
    let research = await Assignment.findById(req.params.id)

    console.log(research);

    await cloudinary.uploader.destroy(research.cloudinary_id, {resource_type: "raw",});

    await Assignment.findByIdAndDelete(req.params.id)
    .then(() => res.json("Assignment Deleted Successfully..."))
    .catch((err) => res.json(err.message));
});

module.exports = router;