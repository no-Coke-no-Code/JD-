window.onload = function(){
    check_clicking();
    setJdItemDetailWidth();
    setCountRightWidth();
    window.addEventListener("resize",function(){
        setJdItemDetailWidth();
        setCountRightWidth();
    });


    // 设置jd_item_detail的宽度
    function setJdItemDetailWidth(){
        var JdShopList = document.getElementsByClassName("jd_shop_list_item")[0];
        var JdShopListWidth = parseInt(window.getComputedStyle(JdShopList).width);
        var pureWidth = JdShopListWidth - parseInt(window.getComputedStyle(JdShopList).paddingLeft) - parseInt(window.getComputedStyle(JdShopList).paddingRight) - 90;
        var JdItemDetail = document.getElementsByClassName("jd_item_detail");
        for(let x = 0;x<JdItemDetail.length;x++)
        {
            JdItemDetail[x].style.width = pureWidth + 'px';
        }
    };

    function setCountRightWidth(){
        var countWidth = parseInt(window.getComputedStyle(document.getElementsByClassName("count")[0]).width);
        var countInfo = document.querySelectorAll(".count > .count_info")[0];
        var countInfoWidth = parseInt(window.getComputedStyle(countInfo).width);
        var final = countWidth - countInfoWidth - 1;
        document.getElementsByClassName("countRight")[0].style.width = final + "px";
    };

    //check选择框切换特效
    function check_clicking(){
        var allcheck = document.getElementsByClassName("check");
        for(let x = 0;x<allcheck.length;x++)
        {
            allcheck[x].addEventListener("click",function(e){
                if(e.target.getAttribute("checked"))
                {
                    e.target.removeAttribute("checked");
                }
                else
                {
                    e.target.setAttribute("checked"," ");
                }
            });
        }
    };


};