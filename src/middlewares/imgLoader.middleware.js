const multer = require('multer');
const types = ['image/png', 'image/jpeg', 'image/webp']

const upload = multer({
    storage: multer.diskStorage({
        destination: './src/users/avatars',
        filename: (req, file, cb) => {
            const date = Date.now();
            cb(null, `${date}_${file.originalname}`);
        }
    }),
    limits: {
        fileSize: 600000, // kilobytes(kb)
    },
    fileFilter: (req, file, cb) => {
        if (!types.includes(file.mimetype)) {
            cb({
                status: 400,
                name: 'File type unsupported',
                message: `Invalid type, only allowed ${types.join(', ')} mimetypes`,
            }, false)
        } else {
            cb(null, true);
        }
    },
}).single('avatar');

module.exports = upload;
