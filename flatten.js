function flatten(unflatObject) {
  var toReturn = {},
    count = 0;
  for (var i in unflatObject) {
    if ((typeof unflatObject[i]) == 'object') {
      var flatObject = flatten(unflatObject[i]);
      for (var x in flatObject) {
        toReturn[i + '.' + x] = flatObject[x];
      }
    } else {
      toReturn[i] = unflatObject[i];
    }
  }
  return toReturn;
}

