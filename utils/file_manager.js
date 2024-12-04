const multer = require('multer');
const path = require('path');
const fs = require('fs');
const jimp = require('jimp');
const { count } = require('console');
const sharp = require('sharp');
class FileManager {

    getFileName(file) {
        return file.originalname.split('.')[0].replace(/[^A-Z0-9]/ig, "_") + '_' + Date.now() + '_' + Math.floor(Math.random() * 999) + 99 + path.extname(file?.originalname)
    }

    resolvePath(filepath) {
            return path.join(__dirname, "../Assets/" + filepath + "/")

    }

    studentUploadImage() {
        var storage = multer.diskStorage({
            destination: function (req, file, callBack) {
                callBack(null, this.resolvePath("/students"))
            }.bind(this),
            filename: function (req, file, callBack) {
                let fileName = this.getFileName(file);
                if (!req.body[file.fieldname]) {
                    req.body[file.fieldname] = []
                    req.body[file.fieldname].push(fileName)
                } else
                    req?.body[file?.fieldname].push(req.body[file.fieldname])
                callBack(null, fileName)
            }.bind(this),
        })

        return multer({ storage })
    }

    // Create Live Image URL 
    createLiveImageURL(filedata, folderName, imageCount) {
            return process.env.FRONTEND_IMAGE_PATH + "/" + folderName + "/" + filedata[0]?.filename
    }

    /* GET IMAGE META DATA */
    async getMetaData(file) {
        try {
            let { bitmap: { width, height }, _originalMime: mimeType } = await jimp.read(file)
            return { width, height, mimeType }
        } catch (error) {
            return {}
        }
    }

    async getImageMetaData(files, filePath) {
        filePath = this.resolvePath(filePath)
        let promises = [], extensions = []
        if (files && files != undefined && files.length > 0) {
            files.forEach(async file => {
                promises.push(getMetaData(filePath + file))
                extensions.push(getExtension(file))
            });

            let fileMetaData = await Promise.all(promises);
            return fileMetaData.map((meta, index) => { return { ...meta, extension: extensions[index] } })

            async function getMetaData(file) {
                try {
                    const { width, height, format } = await sharp(file).metadata();
                    return { width, height, mimeType: format };
                } catch (error) {
                    return {}
                }
            }

            function getExtension(file) {
                return path.extname(file)
            }
        } else {
            return [];
        }
    }

}

module.exports = FileManager;