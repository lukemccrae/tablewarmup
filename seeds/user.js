exports.seed = function(knex, Promise) {
    // Deletes ALL existing entries
    return knex('user').del()
        .then(function() {
            return Promise.all([
                // Inserts seed entries
                knex('user').insert({
                    user: 'willy',
                    password: 'poop',
                    name: 'Jim',
                    age: '4'
                }),
                knex('user').insert({
                    user: 'coyote',
                    password: 'rock',
                    name: 'Wile E',
                    age: '700'
                }),

            ]);
        });
};
