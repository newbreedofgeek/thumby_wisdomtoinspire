export default {
  env: 'production',
  port: 7000,
  trashOriginal: true,
  storageRoot: '/storage', // or user "/public/imgs" if a mounted directory is used. ** see below
  lrgWidth: 600,
  medWidth: 312,
  smlWidth: 160,
  imgCache: 31536000, // cache imgs for 8 hours here
  skipImgTs: true // dont append a timestamp on the physical image name
};
