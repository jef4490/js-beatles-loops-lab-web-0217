var answer_array = []

function theBeatlesPlay(array1, array2) {
  for (var i = 0; i < array1.length; i++) {
    answer_array.push(array1[i] + " plays " + array2[i])
  } return answer_array;
}

function johnLennonFacts(array) {
  var answer_array = []
  var i = 0
  while (i < array.length) {
    answer_array.push(array[i] + "!!!")
    i++;
  } return answer_array;
}

function iLoveTheBeatles(i) {
  answer_array = []
  do {
    answer_array.push("I love the Beatles!");
    i++
  } while (i < 15);
  return answer_array;
}
