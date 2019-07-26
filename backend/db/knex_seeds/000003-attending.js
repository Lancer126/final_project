
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('attendees').del()
    .then(function () {
      // Inserts seed entries
      return knex('attendees').insert([
        {
          
      }
        
      ]);
    });
};


const eventArray = [61297232673,
  53253569861,
  35885870605,
  61522649902,
  58389716213]