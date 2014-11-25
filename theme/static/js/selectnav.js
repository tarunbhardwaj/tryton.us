
$(document).ready(function(){
  $(window).on("load resize",function(e){
    var width=window.innerWidth
    if(width < 768  && width >220) {
     console.log("---------------"+width);
     $(".main-menu").unbind('mouseenter mouseleave');
     $(".main-menu").unbind('click')
     $(".main-menu").click(function(e){
      $(".main-menu").find("ul").addClass("hidden");
      var findDisplay= $(this).find("ul").css("display");
      if(findDisplay=="none")
      {
       $(this).find("ul").show();
       $(this).find("ul").removeClass("hidden");
     }
     else
     {
      $(this).find("ul").hide();
      $(this).find("ul").addClass("hidden");
    }
    e.stopPropagation();
  });
   }
   else
   { 
    if(width > 768)
    {
      $(".main-menu").hover(function(){
        $(this).find("ul").show();
        $(this).find("ul").removeClass("hidden");
      }, function(){
        $(this).find("ul").hide();
        $(this).find("ul").addClass("hidden");
      }
      );
    }
  }
});
});