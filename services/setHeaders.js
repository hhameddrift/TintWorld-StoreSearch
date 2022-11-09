
const setHeaders = (boundary) => {
    return {"Content-Type": `multipart/form-data; boundary=${boundary}`}
  }
  
  module.exports = {
    setHeaders,
  };