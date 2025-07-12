
import multer from 'multer';

// const storage: multer.StorageEngine = multer.diskStorage [in typescript]

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "./public/temp"); // Save to local 'uploads' folder
  },
  filename: function (req, file, cb) {
    cb(null, file.originalname);
  }
});

export const upload = multer({
    storage,
})
