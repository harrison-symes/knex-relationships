exports.seed = function (knex, Promise) {
  return knex('profiles').del()
    .then(function () {
      return Promise.all([
        knex('profiles').insert({user_id: 99901, about:'I like MEMES'}),
        knex('profiles').insert({user_id: 99902, about:'I like MEMES'}),
        knex('profiles').insert({user_id: 99903, about:'I like MEMES'}),
        knex('profiles').insert({user_id: 99904, about:'I like MEMES'}),
        knex('profiles').insert({user_id: 99905, about:'I like MEMES'}),
        knex('profiles').insert({user_id: 99906, about:'I like MEMES'}),
        knex('profiles').insert({user_id: 99907, about:'I like MEMES'}),
        knex('profiles').insert({user_id: 99908, about:'I like MEMES'}),
      ]);
    });
};
