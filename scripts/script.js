(function() {
 
  "use strict";
 
  var toggles = document.querySelectorAll(".mobail-menu");
 
  for (var i = toggles.length - 1; i >= 0; i--) {
    var toggle = toggles[i];
    toggleHandler(toggle);
  };
 
  function toggleHandler(toggle) {
    toggle.addEventListener( "click", function(e) {
      e.preventDefault();
      (this.classList.contains("is-active") === true) ? this.classList.remove("is-active") : this.classList.add("is-active");
      $(".menu").toggleClass("responsive");
    });
  }
 
})();





$(document).ready(function(){

//tabs
$('#responsiveTabs').responsiveTabs({
    startCollapsed: 'accordion'
});  

//popup
$(".table").click(function()
{
        $('#table-click').fadeIn(300);
        $('.tabs-container').css({'transform': 'scale(1)'});
        $('#table-click').css({'transform': 'scale(1)'});
        var iddiv = $(this).attr("iddiv");
        $('#'+iddiv).fadeIn(300);
        $('#table-click').attr('opendiv',iddiv);
        return false;
});

$('#table-click, .tabs-close, .close').on("click", function()
{
    var iddiv = $("#table-click").attr('opendiv');
    $('.tabs-container').css({'transform': "scale(0)"});
    $('#table-click').css({'transform': "scale(0)"});
    $('#table-click').fadeOut(300);
});
          
});



