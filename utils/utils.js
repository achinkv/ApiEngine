// In this file you can add custom logic if you want to save your keys in database of in some config file.At this point it is just returns what it gets.

exports.modifyinput = function (input, finalcallback) {
  finalcallback(null, input)
}

exports.saveinput = function (input, finalcallback) {
  finalcallback(null, input)
}
