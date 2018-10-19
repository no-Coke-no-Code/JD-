window.onload = function(){
    var logins = new login();
    var clears = document.getElementsByClassName("clear");
    for(let x = 0;x<clears.length;x++)
    {
        clears[x].parentNode.children[0].addEventListener('focus',logins.showingClear);
        clears[x].parentNode.children[0].addEventListener('blur',logins.hiddingClear);
        clears[x].parentNode.children[0].addEventListener('blur',logins.check);
        clears[x].addEventListener('mousedown',logins.clear);
    };
    var button = document.querySelector("button");
    button.addEventListener('click',logins.checkAll);
};

function login(){};
login.prototype = {
    showingClear:function(e){
        var event = e || window.event;
        event.target.parentNode.children[1].style.display = "block";
    },
    hiddingClear:function(e){
        var event = e || window.event;
        event.target.parentNode.children[1].style.display = "none";
    },
    clear:function(e){
        var event = e || window.event;
        event.target.parentNode.children[0].value = "";
    },
    check:function(e){
        var event = e || window.event;
        var name = event.target.name;
        var value = event.target.value;
        var warnMessage = document.getElementsByClassName("warnMessage")[0];
        if(name == "account")
        {
            if(value == "" || value == undefined)
            {
                warnMessage.innerHTML = "姓名不能为空";
            }
            else
            {
                warnMessage.innerHTML = "";
            }
        }
        if(name == "password")
        {
            if(value == "" || value == undefined)
            {
                warnMessage.innerHTML = "密码不能为空";
            }
            else
            {
                warnMessage.innerHTML = "";
            }
        }
    },
    checkAll:function(){
        var inputs = document.querySelectorAll("input");
        var ifHasNull = false;
        for(let x =0;x<inputs.length;x++)
        {
            if(inputs[x].value == undefined || inputs[x].value == "")
            {
                ifHasNull = true;
            }
        }
        var warnMessage = document.getElementsByClassName("warnMessage")[0];
        if(warnMessage.innerHTML != "" || ifHasNull == true)
        {
            alert("登录不成功，尚有信息未完善");
        }
        else
        {
            alert("登录成功");
        }
    },
};

// function showingClear(e){
// }
// function hiddingClear(e){
// }
// function clear(e){
// }

// function check(e){
// }
// function checkAll(){
// }