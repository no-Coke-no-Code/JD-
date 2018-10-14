window.onload = function(){
    document.getElementsByClassName("jd_category_left")[0].children[0].addEventListener("click",function(e){
        var e = window.event || e;
        changging(e.target);
    });

    function changging(target){
        var li = document.getElementsByClassName("jd_category_left")[0].children[0].children;
        for(let x = 0;x<li.length;x++)
        {
            li[x].children[0].className = "";
        }
        target.classList.add("now");
    };
};