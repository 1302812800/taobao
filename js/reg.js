$(function () {
    $("#button").click(function(){
    $.get("http://jx.xuzhixiang.top/ap/api/reg.php", {
        username: $(".username").val(),
        password: $(".password").val()
    }, function (data) {
        console.log(data);
        if(data.code===0){
            alert("用户名已存在")
        }else{
            window.location.href = "login.html";
        }       
    })
})
})