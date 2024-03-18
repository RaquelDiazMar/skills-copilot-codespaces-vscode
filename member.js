function skillsMember() {
  var member = {
    name: 'John Doe',
    age: 30,
    skills: ['HTML', 'CSS', 'JavaScript'],
    printSkills: function() {
      this.skills.forEach(function(skill) {
        console.log(skill);
      });
    }
  };
  return member;
}