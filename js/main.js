$(function(){
    $('#heima').fullpage({
        afterLoad: function (link, index) {
            $(".section").removeClass("animation");
            setTimeout(function () {
                $(".section").eq(index - 1).addClass("animation")
            },200);
        }
    });


    //切换
    var aA = $(".sectionC .inner a");

    aA.mouseenter(function () {

        aA.removeClass("active");
        $(this).addClass("active");
        var index = $(this).attr("data-index");
        var aLi = $(".sectionC .lessons li");
        aLi.hide();
        aLi.eq(index).stop().fadeIn();
    });
    aA.first().mouseenter();

    // 手风琴
    var boxWidth = 960;
    var col = 7;
    var itemWidth = 700;
    var initLeft = boxWidth / col;
    var margin = (boxWidth - itemWidth) / col;
    var aItem = $(".sectionD .accordion>div");
    aItem.each(function (index, element) {
        console.log(index+"||"+element);
        $(element).css({
            left: index * initLeft
        });
    });

    aItem.mouseenter(function () {
        var currentIndex = $(this).index();
        aItem.each(function (index, element) {
            if(index <= currentIndex){
                $(element).css({
                    left: index * margin
                });
            }else {
                $(element).css({
                    left: index * margin + itemWidth
                })
            }

        })
    });
    aItem.mouseleave(function () {
        aItem.each(function (index, element) {
            $(element).css({
                left: index * initLeft
            })

        })
    })
});