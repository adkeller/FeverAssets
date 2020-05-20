
function hasClass(element, cls) {return (' ' + element.className + ' ').indexOf(' ' + cls + ' ') > -1;}
var bodyclass = document. getElementsByTagName('body')[0];
// if body has this class, run the first script, if not run the global script
jQuery(function($){
if (hasClass(bodyclass, 'postid-40870')) {
    $("div.article__image:first").before($("aside.ad-block"));
}
});