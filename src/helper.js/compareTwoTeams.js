/**
 * helper method to compare two teams if
 * they are the same
 * @param {*} x
 * @param {*} y
 * @returns {true} objectsAreSame
 */
const compareTwoTeams = (x, y) => {
  let arrayAreSame = false;
  for (let i = 0, len = x.length; i < len; i += 1) {
    for (let j = 0, len2 = y.length; j < len2; j += 1) {
      if (x[i].name === y[j].name) {
        arrayAreSame = true;
        break;
      }
    }
    return arrayAreSame;
  }
};

export default compareTwoTeams;
