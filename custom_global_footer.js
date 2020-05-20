function hasClass(element, cls) {return (' ' + element.className + ' ').indexOf(' ' + cls + ' ') > -1;}
var bodyclass = document. getElementsByTagName('body')[0];
// if body has this class, run the first script, if not run the global script