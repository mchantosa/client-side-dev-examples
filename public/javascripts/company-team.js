var personTemplate = Handlebars.compile(`
  <li>
    <a href="#" data-id={{id}}>
      <img src="{{picture}}" alt="{{firstName}} {{lastName}}"/>
      {{firstName}}
    </a>
  </li>`);

const addTeamMember = (person) => {
  console.log(person);
  console.log(personTemplate(person));
  $('ul#people').append(personTemplate(person))
}

const getPerson = (id) => {
  for(let i = 0; i < people.length; i++){
    if(people[i].id === id) return people[i];
  }
}

$(function() {
  console.log('...document loaded');
  people.forEach(person => addTeamMember(person));
  
  $('ul#people').on('click', (e)=>{
    e.preventDefault();
    const personId = parseInt($(e.target).closest('a').attr('data-id'));
    const person = getPerson(personId);

  })
})

