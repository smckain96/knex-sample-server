
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('users').del()
    .then(function () {
      // Inserts seed entries
      return knex('users').insert([
        {username: 'rowValue1', password: 'test', email: 'rowValue1@test.net', age:21},
        {username: 'test', password: 'test', email: 'test@text.net', age:32},
        {username: 'dog', password: 'test', email: 'dog@dog.net', age:86},
        {username: 'bob', password: 'test', email: 'bob@bob.net', age:1},
        {username: 'samantha', password: 'test', email: 'samantha@samantha.net', age:29},
        {username: 'admin', password: 'test', email: 'admin@test.net', age:21}
      ]);
    });
};
