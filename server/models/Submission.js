const mongoose = require('mongoose');

const AttachmentSchema = new mongoose.Schema({
  filename: String,
  path: String,
  mimetype: String
});

const SubmissionSchema = new mongoose.Schema({
  agency_address: String,
  agency_phone: String,
  agency_email: String,
  h_agency_name: String,
  h_agency_phone: String,
  h_agency_email: String,
  h_agency_position: String,
  h_agency_referred: String,
  patient_name: String,
  patient_address: String,
  patient_phone: String,
  patient_birth: String,
  emergency_name: String,
  emergency_address: String,
  emergency_phone: String,
  emergency_relationship: String,
  primary_insurance: String,
  primary_member: String,
  secondary_insurance: String,
  secondary_member: String,
  wound_information: String,
  wound_size: String,
  status: { type: String, enum: ['Accepted', 'Denied', 'Seen'], default: 'Accepted' },
  attachments: [AttachmentSchema] 
}, {
  timestamps: true
});

module.exports = mongoose.model('Submission', SubmissionSchema);