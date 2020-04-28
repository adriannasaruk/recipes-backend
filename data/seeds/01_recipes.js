
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('recipes').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('recipes').insert([
        {
          "user_id": 1,
          "title": "baked toes",
          "source": "foot",
          "ingredients": "toes, cheese, ear lobes, frog kness, mice spleens, aged toe nails",
          "instructions": "mix all in hot cauldron and pray you don't die",
          "category": "delicacies from abroad"

        },
        {
          "user_id": 1,
          "title": "pineapple ears",
          "source": "head",
          "ingredients": "pineapple, fermented ear wax, shaved hairs, and a coupel of knees",
          "instructions": "grab pineapple shove in ear place head in blender hope you survive",
          "category": "delicacies from your own head"
        }
      ]);
    });
};
