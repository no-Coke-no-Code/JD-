window.onload = function(){
    var mySwiper = new Swiper ('.swiper-container', {
        direction: 'horizontal', // 垂直切换选项
        loop: true, // 循环模式选项
        // 分页器
        pagination: {
          el: '.swiper-pagination',
        },
    });
    var detail = new Detail();
    detail.like();
};
function Detail(){};
Detail.prototype = {
    // 切换红心的状态：通过改变类名和data-属性实现
    like:function(){
        var like = document.getElementsByClassName("collection")[0];
        like.addEventListener('mousedown',function(){
            var ifLike = like.dataset.like==="true"?true:false;
            if(ifLike === true && like.classList.contains("Like"))
            {
                // 变为无红心
                like.classList.remove("Like");
                like.classList.add("noLike");
            }
            else
            {
                // 变为有红心
                like.classList.remove("noLike");
                like.classList.add("Like");
            }
            like.setAttribute("data-like",!ifLike);
        });
    },
};

// 注意classList的操作问题
// 是一个只读数列啊