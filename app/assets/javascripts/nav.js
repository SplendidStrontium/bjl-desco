// do not display a link to the currently displayed page
//$(".pages.contact").ready(function(){
//  alert("please do!");
//});

$("nav [href]").each(function(){
  if (this.href == window.location.href) {
    $(this).addClass("activepg");
  }
});
