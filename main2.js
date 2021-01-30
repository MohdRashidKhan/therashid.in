$(document).ready(function(){
$("#checkbox").click(function(){
    var theme_attr = $("html");
    if($("#checkbox").prop("checked")){
       
        console.log("isCheck == true");
theme_attr.attr("data-theme","dark");
    }else if($("#checkbox").not(':checked')){
      
        console.log("isCheck == false");
theme_attr.attr("data-theme","light");
    }
})

});
