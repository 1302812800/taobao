$(function(){
    $.ajax({
        type: "get",
        url: "data/data.json",
        dataType: "json",
        success: function (data) {
            console.log(data)
            let id = location.search.split("=")[1];
            console.log(id)
            for(var i = 0; i < data.length; i++){
            if(data[i].id==id){
                $(`
                <div class="gallery">
                    <img src="${data[i].pimg}" alt="">
                </div>
                <div class="property">
                <h1 class="title">${data[i].pname}</h1>
                <div class="price"> 
                    <dl>
                        <dt>价格</dt>
                        <dd>
                            <em>￥</em>
                            <span>${data[i].pprice}</span>
                        </dd>
                    </dl>
                </div>
                <div class="number">
                    <dl>
                        <dt>数量</dt>
                        <dd>
                            <span class="left">
                                <input class="text" type="text" value="1" maxlength="8" title="请输入购买量">
                            </span>                            
                            <span class="center">
                                <span class="plus">+</span>
                                <span class="minus">-</span>
                            </span>
                            <span class="right">件</span>
                        </dd>                       
                    </dl>
                </div>
                <div>
                    <button>加入购物车</button>
                </div>
            </div>`).appendTo($(".detail"));
            }
        }
        $(".plus").click(function(){
            let num = $(".text").val();
            num++;
            $(".text").val(num);
            // console.log($(".text").val());
            // $(".text").val();
        })
        $(".minus").click(function(){
            let num1=$(".text").val();
            if (num1<= 1) {
                num1 = 1;
                return;
            }
            num1--;
            $(".text").val(num1);
        })
        $(".text").blur(function(){
            let num2=$(".text").val();
            if ( num2 <= 1) {
                num2 = 1;
            }
            $(".text").val(num2);
        })
        $("button").click(function () {
            for(var j=0 ;j<data.length;j++){
                obj=JSON.stringify(id);
             id1=localStorage.setItem(id,obj);
             console.log(localStorage.getItem(id1));
            }
            
            window.location.href = "cart.html";
            })
        },
        error: function(err){
          console.log(err);
      }
    });
    
})
