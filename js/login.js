$(function(){
    $("#button").click(function(){
        $.get("http://jx.xuzhixiang.top/ap/api/login.php", {
            username: $(".username").val(),
            password: $(".password").val()
            }, data => {
                console.log(data);
                if(data.code===1){
                    window.location.href = "index.html";
                    
                }else{
                    alert("登录失败,请检查用户名或密码")
                }
            })
    })
})