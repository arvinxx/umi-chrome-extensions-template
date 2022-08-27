#!/usr/bin/env ts-node

const fs = require('fs');
const path = require('path');
const archiver = require('archiver');

const pkg = require('../package.json');

const DEST_DIR = path.join(__dirname, '../dist');
const DEST_ZIP_DIR = path.join(__dirname, '../release');

const extractExtensionData = () => {
  return {
    name: pkg.name,
    version: pkg.version,
  };
};

const makeDestZipDirIfNotExists = () => {
  if (!fs.existsSync(DEST_ZIP_DIR)) {
    fs.mkdirSync(DEST_ZIP_DIR);
  }
};

const buildZip = (
  src: string,
  dist: string,
  folderName: string,
  zipFilename: string,
) => {
  console.info(`📦 Building ${zipFilename}...`);

  const archive = archiver('zip', { zlib: { level: 9 } });
  const stream = fs.createWriteStream(path.join(dist, zipFilename));

  return new Promise<void>((resolve, reject) => {
    archive
      .directory(src, folderName)
      .on('error', (err: any) => reject(err))
      .pipe(stream);

    stream.on('close', () => resolve());
    archive.finalize().then();
  });
};

const main = () => {
  const { name, version } = extractExtensionData();
  const zipFilename = `${name}.v${version}.zip`;

  makeDestZipDirIfNotExists();

  buildZip(DEST_DIR, DEST_ZIP_DIR, name, zipFilename)
    .then(() => console.info('✅  Build Done!'))
    .catch(console.error);
};

main();
