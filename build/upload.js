require('dotenv').config();

const path = require('path');
const fs = require('fs');
const walkSync = require('walk-sync');
const qiniu = require('qiniu');

const staticPath = path.resolve(__dirname, '../dist/static');

// config qiniu
const config = new qiniu.conf.Config();
config.zone = qiniu.zone.Zone_z0;
config.useHttpsDomain = true;
config.useCdnDomain = true;

// generate uploadToken
const mac = new qiniu.auth.digest.Mac(process.env.QINIU_ACCESS_KEY, process.env.QINIU_SECRET_KEY);
const options = {
  scope: process.env.QINIU_BUCKET,
};
const putPolicy = new qiniu.rs.PutPolicy(options);
const uploadToken = putPolicy.uploadToken(mac);

/**
 * uploadFile
 *
 * @param {String} file
 * @returns {undefined}
 */
function uploadFile(file) {
  const localFile = path.resolve(staticPath, file);
  const formUploader = new qiniu.form_up.FormUploader(config);
  const putExtra = new qiniu.form_up.PutExtra();
  const key = `everestInternational/static/${file}`;

  console.log(`Uploading ${file} to qiniu...`);
  formUploader.putFile(uploadToken, key, localFile, putExtra,
    function (respErr, respBody, respInfo) {
      if (respErr) {
        throw respErr;
      }
      if (respInfo.statusCode == 200) {
        console.log(`${process.env.CDN_URL}/${key} upload succeeded.`);
      } else {
        console.log(respInfo.statusCode);
        console.log(respBody);
      }
    }
  );
}

function main() {
  const files = walkSync(staticPath, {
    directories: false
  });

  files.forEach(uploadFile);
}

main();
