$(function() {
  console.log('...page loaded')

  let $slideDeck = $('#slide-deck');
  let $nav = $('#nav');
  $nav.find('li').eq(0).addClass('active');
  
  $nav.on('click', function(e){
    e.preventDefault();
    const $li = $(e.target).closest('li');
    liIndex = $li.index()

    $nav.find(".active").removeClass("active");
    $li.addClass("active");
    console.log($slideDeck.find("figure").stop().filter(":visible"))
    $slideDeck.find("figure").filter(":visible").fadeOut(300);
    $slideDeck.find("figure").eq(liIndex).delay(300).fadeIn(300);
    
  })


})