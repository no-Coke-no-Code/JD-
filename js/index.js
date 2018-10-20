window.onload = function(){
    var indexFunc = new index();
    indexFunc.gettingJdboxHeight();
    indexFunc.hoverSmallIcon();
    indexFunc.buquanBorder();
    indexFunc.daoJiShi();
    indexFunc.getBannerHeight();

    window.addEventListener('scroll',function(){
        indexFunc.gettingJdboxHeight();
    });

    window.addEventListener("resize",function(){
        indexFunc.getBannerHeight();
    });
}


function index(){};
index.prototype = {
    //顶部通栏变色特效
    gettingJdboxHeight:function(){
        var jd_header_box = document.getElementById('jd_header_box');
        var jd_header_box_height = window.getComputedStyle(jd_header_box).height.split('');
        jd_header_box_height.splice(-2,2);
        jd_header_box_height = jd_header_box_height.join('');
        if(document.documentElement.scrollTop >= jd_header_box_height)
        {
            jd_header_box.style.backgroundColor = "rgba(212,32,0,0.8)";
        }
        else
        {
            jd_header_box.style.backgroundColor = "transparent";
        }
    },
    //hover小图标特效
    hoverSmallIcon:function(){
        var imgList = document.querySelectorAll("#jd_nav li");
        for(let x = 0;x<imgList.length;x++)
        {
            imgList[x].addEventListener('mouseover',function(){
                this.children[0].children[0].style.width = "41px";
                this.children[0].children[0].style.height = "41px";
            });
            imgList[x].addEventListener('mouseout',function(){
                this.children[0].children[0].style.width = "40px";
                this.children[0].children[0].style.height = "40px";
            });
        }
    },
    //补全图片border
    buquanBorder:function(){
        var jd_product_box_main = document.getElementsByClassName("jd_product_box_main")[0];
        jd_product_box_main.children[0].children[0].style.height = window.getComputedStyle(jd_product_box_main).height;
    },
    // 倒计时特效
    daoJiShi:function(){
        var time = 0.5 * 60 *60;
        var num = document.getElementsByClassName("num");
        var timer = setInterval(function(){
            time --;
            var h = Math.floor(time / (60*60));
            var m = Math.floor(time/60%60);
            var s = time%60;

            num[0].innerHTML = h>=10?Math.floor(h/10):0;
            num[1].innerHTML = h>=10?Math.floor(h%10):h;

            num[2].innerHTML = m>=10?Math.floor(m/10):0;
            num[3].innerHTML = m>=10?Math.floor(m%10):m;

            num[4].innerHTML = s>=10?Math.floor(s/10):0;
            num[5].innerHTML = s>=10?Math.floor(s%10):s;

            if(time <= 0)
            {
                clearInterval(timer);
            }
        },1000);
    },
        // 获取banner高度
        getBannerHeight:function(){
        var lastLoca = 0;
        var eachDistance = 0;
        var totalDistance = 0;
        var li = document.querySelectorAll("#jd_banner > ul")[0].children[0];
        var ul = document.querySelectorAll("#jd_banner > ul")[0];
        var jd_banner = document.getElementById("jd_banner");
        jd_banner.style.height = window.getComputedStyle(ul).height;

        // 丑方法
        // jd_banner.addEventListener('touchstart',function(e){
        //     touchStartX = e.targetTouches[0].clientX;
        // });
        // jd_banner.addEventListener('touchend',function(e){
        //     touchEndx = e.changedTouches[0].clientX;
        //     move = touchStartX - touchEndx;
        //     ul.style.left = parseInt(window.getComputedStyle(ul).left) - move + "px";
        //     console.log(ul.style.left);
        // });


        // 好看方法
        jd_banner.addEventListener('touchstart',function(e){
            startX = e.targetTouches[0].clientX;
        });
        jd_banner.addEventListener('touchmove',function(e){
            if(lastLoca == 0)
            {
                lastLoca = e.targetTouches[0].clientX;
                eachDistance = 0;
            }
            else
            {
                eachDistance = lastLoca - e.targetTouches[0].clientX;
                totalDistance = totalDistance + eachDistance;
                lastLoca = e.targetTouches[0].clientX;
            }
            ul.style.left = -totalDistance + "px";
        });
        jd_banner.addEventListener("touchend",function(e){
            lastLoca = 0;
            eachDistance = 0;
            if(totalDistance <= 0)
            {
                totalDistance = 0;
                ul.style.left = "0px";
            }
            else if(totalDistance >= parseInt(window.getComputedStyle(ul).width)-parseInt(window.getComputedStyle(li).width))
            {
                totalDistance = parseInt(window.getComputedStyle(ul).width)-parseInt(window.getComputedStyle(li).width);
                ul.style.left = -totalDistance + "px";
            }
        })
    },
};