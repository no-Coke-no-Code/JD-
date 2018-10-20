window.onload = function(){
    var cart = new Cart();
    cart.check_clicking();
    cart.setJdItemDetailWidth();
    cart.setCountRightWidth();
    cart.addDecrease();
    cart.getSum();
    window.addEventListener("resize",function(){
        cart.setJdItemDetailWidth();
        cart.setCountRightWidth();
    });
    document.querySelectorAll(".count .jd_shop_check")[0].addEventListener('click',function(){
        cart.checkAll();
    });
}


function Cart(){};
Cart.prototype = {
     // 设置jd_item_detail的宽度
     setJdItemDetailWidth:function(){
        var JdShopList = document.getElementsByClassName("jd_shop_list_item")[0];
        var JdShopListWidth = parseInt(window.getComputedStyle(JdShopList).width);
        var pureWidth = JdShopListWidth - parseInt(window.getComputedStyle(JdShopList).paddingLeft) - parseInt(window.getComputedStyle(JdShopList).paddingRight) - 90;
        var JdItemDetail = document.getElementsByClassName("jd_item_detail");
        for(let x = 0;x<JdItemDetail.length;x++)
        {
            JdItemDetail[x].style.width = pureWidth + 'px';
        }
     },
     setCountRightWidth:function(){
        var countWidth = parseInt(window.getComputedStyle(document.getElementsByClassName("count")[0]).width);
        var countInfo = document.querySelectorAll(".count > .count_info")[0];
        var countInfoWidth = parseInt(window.getComputedStyle(countInfo).width);
        var final = countWidth - countInfoWidth - 1;
        document.getElementsByClassName("countRight")[0].style.width = final + "px";
     },
     getSum:function(){
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
     },
     //check选择框切换特效
     check_clicking:function(){
        var allcheck = document.getElementsByClassName("check");
        var that = this;
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
                // 因为这里已经嵌套了多层，this的指向已经无法指向testing.prototype了
                that.getSum();
                that.getCheckedNum();
            });
        }
     },
     // 全选按钮操作
     checkAll:function(){
        var allcheck = document.getElementsByClassName("check");
        for(let x =0;x<allcheck.length;x++)
        {
            allcheck[x].setAttribute("checked"," ");
        }
        document.getElementsByClassName("totalNum")[0].innerHTML = allcheck.length;
        this.getSum();
     },
     // 获取当前checked的数量
     getCheckedNum:function(){
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
     },
     // 点击操作框的效果
     addDecrease:function(){
        var that = this;
        var form = document.getElementsByClassName("number");
        for(let x = 0 ; x<form.length;x++)
        {
            // let thisForm = form[x];
            form[x].children[0].addEventListener('click',function(){
                form[x].children[1].value > 1?form[x].children[1].value--:1;
                that.getSum();
            });
            form[x].children[2].addEventListener('click',function(){
                form[x].children[1].value++;
                // this的指向问题
                that.getSum();
            });
        }
     },
};

