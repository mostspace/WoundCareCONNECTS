const multer = require('multer');
const path = require('path');

// Models
const SubmissionModel = require('../models/Submission');

// Utils
const sendContactUsEmail = require('../utils/sendContactUsEmail');

const storage = multer.diskStorage({

  destination: function (req, file, cb) {
    cb(null, path.join(__dirname, '../../client/dist/uploads')); // Set the directory where files will be stored
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + '-' + file.originalname); // Rename file if needed
  }
});

const upload = multer({ storage: storage });

exports.submission = [
  upload.array('attachments', 10), // Multer middleware setup
  async (req, res) => {
    const { agency_address, agency_phone, agency_email, h_agency_name, h_agency_phone, h_agency_email, h_agency_position, h_agency_referred, patient_name, patient_address, patient_phone, patient_birth, emergency_name, emergency_address, emergency_phone, emergency_relationship, primary_insurance, primary_member, secondary_insurance, secondary_member, wound_information, wound_size } = req.body;

    // Assuming 'attachments' are received as files in req.files array
    const attachments = req.files.map(file => ({
      filename: file.filename,
      path: file.path,
      mimetype: file.mimetype
    }));

    try {
      const newSubmission = new SubmissionModel({
        agency_address, agency_phone, agency_email,
        h_agency_name, h_agency_phone, h_agency_email, h_agency_position, h_agency_referred,
        patient_name, patient_address, patient_phone, patient_birth,
        emergency_name, emergency_address, emergency_phone, emergency_relationship,
        primary_insurance, primary_member, secondary_insurance, secondary_member,
        wound_information, wound_size, attachments
      });

      const savedSubmission = await newSubmission.save();

      res.status(201).json({ message: 'Submission received successfully', data: savedSubmission });
    } catch (err) {
      console.error(err);
      res.status(500).json({ error: 'Failed to save submission' });
    }
  }
];

// Contact
exports.contactUs = async (req, res) => {
  const { name, email, phone, message } = req.body;

  try {
    await sendContactUsEmail(name, email, phone, message);
    res.json({ message: 'Message sent successfully' });
  } catch (error) {
    console.error('Error sending message:', error);
    res.status(500).json({ message: 'Failed to send message' });
  }
};