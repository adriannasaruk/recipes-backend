const bcrypt = require('bcryptjs');

exports.seed = function(knex) {
 
  return knex('users').truncate()
    .then(function () {
      const salt = bcrypt.genSaltSync();
      const hash = bcrypt.hashSync('password', salt);
   
     return knex('users').insert({
          username: 'username', 
          password: hash
        })
       });
};
