window.onload = function(){
    check_clicking();
    setJdItemDetailWidth();
    setCountRightWidth();
    addDecrease();
    getSum();
    window.addEventListener("resize",function(){
        setJdItemDetailWidth();
        setCountRightWidth();
    });
    document.querySelectorAll(".count .jd_shop_check")[0].addEventListener('click',function(){
        checkAll();
    });
    // var allcheck = document.getElementsByClassName("check");
    // var checked = parseInt(document.getElementsByClassName("totalNum")[0].innerHTML);
    // for(let x = 0;x<allcheck.length;x++)
    //     {
    //         allcheck[x].addEventListener("click",function(e){
    //             if(e.target.getAttribute("checked"))
    //             {
    //                 e.target.removeAttribute("checked");
    //                 checked--;
    //                 document.getElementsByClassName("totalNum")[0].innerHTML = checked;
    //             }
    //             else
    //             {
    //                 e.target.setAttribute("checked"," ");
    //                 checked++;
    //                 document.getElementsByClassName("totalNum")[0].innerHTML = checked;
    //             }
    //             getSum();
    //         });
    //     }
}



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
                getSum();
                getCheckedNum();
            });
        }
    };
    // 全选
    function checkAll(){
        var allcheck = document.getElementsByClassName("check");
        for(let x =0;x<allcheck.length;x++)
        {
            allcheck[x].setAttribute("checked"," ");
        }
        document.getElementsByClassName("totalNum")[0].innerHTML = allcheck.length;
        getSum();
    }

    // 获取当前checked的数量
    function getCheckedNum(){
        var allcheck = document.getElementsByClassName("check");
        var checked = 0;
        for(let x = 0;x<allcheck.length;x++)
        {
            if(allcheck[x].getAttribute("checked"))
            {
                checked++;
            }
        }
        document.getElementsByClassName("totalNum")[0].innerHTML = checked;
    }

    // 点击操作框的效果
    function addDecrease(){
        var form = document.getElementsByClassName("number");
        for(let x = 0 ; x<form.length;x++)
        {
            // let thisForm = form[x];
            form[x].children[0].addEventListener('click',function(){
                form[x].children[1].value > 1?form[x].children[1].value--:1;
                getSum();
            });
            form[x].children[2].addEventListener('click',function(){
                form[x].children[1].value++;
                getSum();
            });
        }
    }

    function getSum(){
        var form = document.getElementsByClassName("number");
        var price = document.getElementsByClassName("jd_item_price");
        var total = 0;
        var select = document.querySelectorAll(".jd_shop_check .check");
        for(let x = 0 ; x<form.length;x++)
        {
            if(select[x].getAttribute("checked"))
            {
                total += parseInt(form[x].children[1].value) * parseInt(price[x].innerHTML);
            }
            else
            {
                total += 0;
            }
        }
        document.getElementsByClassName("sum")[0].innerHTML = "合计:￥" + total;
    }

