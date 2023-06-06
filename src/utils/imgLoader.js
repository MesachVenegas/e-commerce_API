const multer = require('multer');
const path = require('path');
const types = ['image/png', 'image/jpeg', 'image/webp']

const uploadAvatar = multer({
    storage: multer.diskStorage({
        destination: path.join(__dirname, '../../src/images/avatars'),
        filename: (req, file, cb) => {
            const date = Date.now();
            cb(null, `${date}_${file.originalname}`);
        }
    }),
    limits: {
        fileSize: 500000, // kilobytes(kb)
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

const uploadProductImgs = multer({
    storage: multer.diskStorage({
        destination: path.join(__dirname, '../../src/images/prodcts'),
        filename: (req, file, cb) => {
            const date = Date.now();
            cb(null, `${date}_${file.originalname}`);
        },
    }),
    limits: { fileSize: 1000000 },
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
    }
}).array('images', 5);

module.exports = {
    uploadAvatar,
    uploadProductImgs
};
