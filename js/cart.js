$(function(){
    $.ajax({
        type: "get",
        url: "data/data.json",
        dataType: "json",
        success: function (data) {
      
           
        
    },
        error: function(err){
          console.log(err);
      }
    });
})