
const addTeamMember = (person) => {
  $('ul#people').append(
    `<li>
      <a href="#" data-id=${person.id}>
        <img src="${person.picture}" alt="${person.name} ${person.lastName}" />
        ${person.firstName}
      </a>
    </li>`)
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

