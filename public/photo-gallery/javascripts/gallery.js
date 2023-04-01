$(function() {
  console.log('...page loaded')

  let $slideDeck = $('#slide-deck');
  let $nav = $('#nav');
  $nav.find('li').eq(navIndex).addClass('active');
  
  $nav.on('click', function(e){
    e.preventDefault();
    const $li = $(e.target).closest('li');
    liIndex = $li.index()

    $nav.find(".active").removeClass("active");
    $li.addClass("active");
    console.log($slideDeck.find("figure").stop().filter(":visible"))
    $slideDeck.find("figure").filter(":visible").fadeOut(1000);
    $slideDeck.find("figure").eq(liIndex).delay(1000).fadeIn(1000);
  })
})