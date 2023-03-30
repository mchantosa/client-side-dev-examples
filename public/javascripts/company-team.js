Handlebars.registerPartial(`person`, 
  `<li>
    <a href="#" data-id={{id}}>
      <img src="{{picture}}" alt="{{firstName}} {{lastName}}"/>
      {{firstName}}
    </a>
  </li>`
);

const peopleTemplate = Handlebars.compile(
  `<ul>
    {{#each people}}
      {{> person}}
    {{/each}}
  </ul>`
);

const personDetailsTemplate = Handlebars.compile(
  `<div id="modal">
    <div id="modal-content">
      <a href="#" id="close">
        &times;
      </a>
      <div id="identifiers">
        <img src="{{picture}}" alt="{{firstName}} {{lastName}}"/>
        <span>{{firstName}} {{lastName}}</span>
      </div>
      <p id="bio">
        {{bio}} 
      </p>
    </div>
  </div>`
);

const getPerson = (id) => {
  for(let i = 0; i < people.length; i++){
    if(people[i].id === id) return people[i];
  }
}

$(function() {
  console.log('...document loaded');
  $('article#people').append(peopleTemplate({people: people}))
  
  
  $('article#people > ul').on('click', (e)=>{
    e.preventDefault();
    const personId = parseInt($(e.target).closest('a').attr('data-id'));
    const person = getPerson(personId);
    $('body').append(personDetailsTemplate(person))
    $('#modal').animate({ backgroundColor: "rgba( 0, 0, 0, .7)"}, 'slow');
    $('#close').on('click', (e) => {
      e.preventDefault();
      $('#modal').remove();
    })
  })


})

