let activeIndex;

Handlebars.registerPartial('image', `
  <li>
    <img src="{{src}}" alt="" title="{{title}}" data-index={{id}}/>
  </li>
`)

const carouselTemplate = Handlebars.compile(`
  <ul>
    {{#each images}}
      {{> image}}
    {{/each}}
  </ul>
`)

const setActive = (index) => {
  console.log("activeIndex: " + activeIndex)
  console.log("index: " + index)
  if(index !== activeIndex){
    $('#carousel img').eq(activeIndex).removeAttr('active');
    activeIndex = index;
    $('#carousel img').eq(activeIndex).attr('active', true);
  }
}

$(function() {
  console.log('...page loaded')
  $('#carousel').append(carouselTemplate({images:images}))
  setActive(0);
  
})