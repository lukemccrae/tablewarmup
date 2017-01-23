exports.seed = function(knex, Promise) {
    // Deletes ALL existing entries
    return knex.raw('delete from "resource"; alter sequence resource_id_seq restart with 5')
        .then(function() {
            const resources = [
                // Inserts seed entries
                {
                    name: "chair",
                    description: "soft",
                    user_id: 2
                },

                {
                    name: "fridge",
                    description: "cold",
                    user_id: 1
                }
            ]
            return knex('resource').insert(resources)
        });
};
