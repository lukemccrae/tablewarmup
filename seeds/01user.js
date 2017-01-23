exports.seed = function(knex, Promise) {
    // Deletes ALL existing entries
    return knex.raw('delete from "user"; alter sequence user_id_seq restart with 3')
        .then(function() {
            const users = [
                // Inserts seed entries
                {
                    id: 1,
                    user: 'willy',
                    password: 'poop',
                    name: 'Jim',
                    age: '4'
                },

                {
                    id: 2,
                    user: 'coyote',
                    password: 'rock',
                    name: 'Wile E',
                    age: '700'
                }
            ]
            return knex('user').insert(users)
        });
};
