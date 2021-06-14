
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('customers').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('customers').insert([
        {id: 1, firstName: 'Christopher', lastName: 'Harwell', email: "chrisharwell72@gmail.com", phoneNumber: 9204021543},

      ]);
    });
};
