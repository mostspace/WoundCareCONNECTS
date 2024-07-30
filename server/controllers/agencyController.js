
// Models
const SubmissionModel = require('../models/Submission');

// Get all submissions list
exports.submissionList = async (req, res) => {
  try {
    const submissions = await SubmissionModel.find({}, 'patient_name patient_address status createdAt');
    res.json(submissions);
  } catch (err) {
    console.error('Error fetching submissions:', err);
    res.status(500).json({ error: 'Failed to fetch submissions' });
  }
};

// Get submission detail
exports.submissionDetail = async (req, res) => {
  try {
    const { id } = req.params; // Extract id from request parameters
    const submission = await SubmissionModel.findById(id); // Use findById to find the document by id
    if (!submission) {
      return res.status(404).json({ error: 'Submission not found' });
    }
    res.json(submission);
  } catch (err) {
    console.error('Error fetching submission:', err);
    res.status(500).json({ error: 'Failed to fetch submission' });
  }
};

// Update the status of a submission
exports.updateSubmissionStatus = async (req, res) => {
  try {
    const { id } = req.params;
    const { status } = req.body;

    if (!status) {
      return res.status(400).json({ error: 'Status is required' });
    }

    const updatedSubmission = await SubmissionModel.findByIdAndUpdate(
      id,
      { status },
      { new: true }
    );

    if (!updatedSubmission) {
      return res.status(404).json({ error: 'Submission not found' });
    }

    res.status(200).json(updatedSubmission);
  } catch (error) {
    console.error('Error updating submission status:', error);
    res.status(500).json({ error: 'Server error' });
  }
};