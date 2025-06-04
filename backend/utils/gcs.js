// // utils/gcs.js
// import { Storage } from "@google-cloud/storage";
// import path from "path";
// import { v4 as uuidv4 } from "uuid";
// import gcsConfig from "../config/gcs.js";

// const storage = new Storage({
//   projectId: gcsConfig.projectId,
//   keyFilename: gcsConfig.keyFilename
// });

// const bucket = storage.bucket(gcsConfig.bucketName);

// export const uploadToGCS = (file) => {
//   return new Promise((resolve, reject) => {
//     const gcsFileName = `${uuidv4()}${path.extname(file.originalname)}`;
//     const blob = bucket.file(gcsFileName);
//     const stream = blob.createWriteStream({
//       resumable: false,
//       metadata: {
//         contentType: file.mimetype
//       }
//     });

//     stream.on("error", (err) => reject(err));
//     stream.on("finish", () => {
//       const publicUrl = `https://storage.googleapis.com/${gcsConfig.bucketName}/${gcsFileName}`;
//       resolve(publicUrl);
//     });

//     stream.end(file.buffer);
//   });
// };
