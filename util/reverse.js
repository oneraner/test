const reverseObject = obj => {
  if (typeof obj !== "object" || Object.keys(obj).length === 0) {
    return "error";
  }
  let objKeys = [];
  const getKey = obj => {
    for (let key in obj) {
      if (Object.hasOwnProperty.call(obj, key)) {
        const element = obj[key];
        objKeys.push(Object.keys(obj)[0]);
        if (typeof element === "object") {
          getKey(element);
        }
        if (typeof element === "string") {
          objKeys.push(element);
        }
      }
    }
  };
  getKey(obj);
  objKeys.reverse();
  let outputObj = "";
  let endString = "";
  for (let i = 0; i < objKeys.length; i++) {
    if (i !== objKeys.length - 1) {
      outputObj = `${outputObj}{"${objKeys[i]}":`;
      endString = `${endString}}`;
    } else {
      outputObj = `${outputObj}"${objKeys[i]}"`;
    }
  }
  return JSON.parse(`${outputObj}${endString}`);
};

module.exports = reverseObject;
