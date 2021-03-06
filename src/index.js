exports.min = function min(array) {
  if (array === undefined || array == 0 || array == Infinity) return 0;
    return  (Math.min(...array))
 
}

exports.max = function max(array) {
  if (array === undefined || array == 0 || array == Infinity) return 0;
  let num = 0;
  array.forEach(item => {
      if (item > num) num = item;
  })
  return num;
}

exports.avg = function avg(array) {
  if (array === undefined || array == 0 || array == Infinity) return 0;
    return (array.reduce((acc, value) => acc+value)) / array.length ;
}
