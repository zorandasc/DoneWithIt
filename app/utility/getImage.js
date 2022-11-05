const getImage = (id) => {
  //because this site has only 1-to 8 avatar images
  //and the user id can go indefintly
  //https://www.bootdey.com/app/webroot/img/Content/avatar/
  const moduloid = id % 9;
  return {
    uri: `https://www.bootdey.com/app/webroot/img/Content/avatar/avatar${moduloid}.png`,
  };
};
export default getImage;
