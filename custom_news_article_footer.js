
function hasClass(element, cls) {return (' ' + element.className + ' ').indexOf(' ' + cls + ' ') > -1;}
var bodyclass = document. getElementsByTagName('body')[0];
// if body has this class, run the first script, if not run the global script

if (hasClass(bodyclass, 'postid-40870')) {
    jQuery(function($){
        $("div.article__content > aside.ad-block").addClass('ad2');
        $("div.article__content > p").slice(4, 6).addClass('move');
        $(".ad2").before($(".move "));
    });
}