
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('users').del()
    .then(function () {
      // Inserts seed entries
      return knex('users').insert([
        {id: 1, username: 'rowValue1', password: "password1", department: "dep1"},
        {id: 2, username: 'rowValue2', password: "password2", department: "dep2"},
        {id: 3, username: 'rowValue3', password: "password3", department: "dep3"}
      ]);
    });
};
