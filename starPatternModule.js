/* cerner_2^5_2020 */
exports.starPattern = function () {
  let star = '';
  for(let i=0; i<10; i++){
    for (let j=10; j>i; j--) {
      star = star.concat('*');
    }
    star = star.concat("\n")
  }
  return star;
};