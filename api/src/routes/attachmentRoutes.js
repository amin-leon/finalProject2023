// attachmentRoutes.js
import express from 'express';
import multer from 'multer';
import uploadAttachment from '../controllers/attachmentController';

const router = express.Router();

// Multer configuration
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'attachedDocs/');
  },
  filename: function (req, file, cb) {
    cb(null, file.originalname);
  },
});

const upload = multer({ storage });

// Route to handle file upload
router.post('/upload', upload.single('attachment'), uploadAttachment);

export default router;

