module.exports = function createDreamTeam(arr) {
  if (Array.isArray(arr) === false) { 
    return false;
  } else {
    let newArray = [];
      for (let i = 0; i < arr.length; i++) {
        if (typeof arr[i] === 'string') {
          arr[i] = arr[i].toUpperCase();
          arr[i] = arr[i].trim();
          arr[i] = arr[i].substring(0, 1);
          newArray.push(arr[i]);  
        }
      } 
    return newArray.sort().join('');
  }
}