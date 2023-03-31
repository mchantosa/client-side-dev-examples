let activeIndex;

Handlebars.registerPartial('image', `
  <li>
    <img src="{{src}}" alt="" title="{{title}}" data-image-index="{{@index}}"/>
  </li>
`)

const carouselTemplate = Handlebars.compile(`
  <ul>
    {{#each images}}
      {{> image}}
    {{/each}}
  </ul>
`)

const activeImageTemplate = Handlebars.compile(`
  <img src="{{src}}" alt="" />
  <figcaption>{{title}}</figcaption>
`);

const setActiveImage = (imageIndex) => {
  $('#active-image').empty().append(activeImageTemplate(images[imageIndex]))
}

const setActive = (index) => {
  if(index !== activeIndex){
    let $carouselImages = $('#carousel img');

    $carouselImages.eq(activeIndex).removeAttr('active');
    activeIndex = index;

    let $activeCarouselImage = $carouselImages.eq(activeIndex)
    $activeCarouselImage.attr('active', true);

    let activeImageIndex = parseInt($activeCarouselImage.attr("data-image-index"));
    setActiveImage(activeImageIndex);
  }
}

$(function() {
  console.log('...page loaded')

  let $carousel = $('#carousel');
  $carousel.append(carouselTemplate({images:images}));

  const toBeActiveImageIndex = parseInt($('#carousel img').eq(0).attr("data-image-index"));
  setActive(toBeActiveImageIndex);
  
  $carousel.on('click', function(e) {
    e.preventDefault();
    const toBeActiveImageIndex = parseInt($(e.target).closest('img').attr("data-image-index"))
    setActive(toBeActiveImageIndex);
  })
  
})