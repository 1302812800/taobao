var swiper = new Swiper('.swiper-container', {
    spaceBetween: 30,
    centeredSlides: true,
    autoplay: {
      delay: 2500,
      disableOnInteraction: false,
    },
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  });
$(function(){
  $.ajax({
    type: "get",
    url: "data/data.json",
    data: "data",
    dataType: "json",
    success: function (data) {
      // let data=res.data;
      console.log(data);
      for(var i = 0; i < data.length; i++){
        $(`<li>
        <a href="detail.html?id=${data[i].id}">
            <img src="${data[i].pimg}" alt="">
        </a>
        <div class="pname">
            <a href="detail.html">${data[i].pname}</a>
        </div>
        <div class="pprice">
            <a href="detail.html">￥${data[i].pprice}</a>
        </div>
    </li>`).appendTo($(".productlist ul"));
      }
    },
    error: function(err){
      console.log(err);
  }
  });
})
//   $.post("http://jx.xuzhixiang.top/ap/api/goods/goods-add.php", {
//     pimg: "http://img.alicdn.com/bao/uploaded/i3/2645124890/O1CN018vbWI11lzfMtjlk0U_!!0-item_pic.jpg_468x468q75.jpg_.webp",
//     pname: "口罩 阿宽红油面皮四川特产拌面宽泡面擀面皮方便面批发凉皮速食非油炸",
//     pprice: 29.90,
//     pdesc: "口罩 阿宽红油面皮四川特产拌面宽泡面擀面皮方便面批发凉皮速食非油炸",
//     uid: 0913}, data => {
//              console.log(data);
// })