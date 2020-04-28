
exports.seed = function(knex) {
  return knex('public').truncate()
    .then(function () {
      return knex('public').insert([
        {
          "title": "Strawberry Granola Bar Recipe",
          "source": "inknown",
          "ingredients": "1 cup gluten-free flour, 1/2 tsp baking powder, 1/4 tsp salt, 1 egg, 2/3 cup melted coconut oil, 1/2 cup pure maple syrup, 1 small ripe banana mashed, 1 tsp vanilla extract, 2 cups rolled oats, 3/4 cup unsweetened shredded coconut, 1 cup diced walnuts or other nuts/seeds, 8 oz finely chopped fresh strawberries (1 1/4 cups)",
          "instructions": "Grease a 9 x 13 inch pan and preheat the oven to 350 degrees. In a small bowl, combine the flour, baking powder, and salt. In a large bowl, mix together the egg, melted coconut oil, maple syrup, banana, and vanilla. Stir in the flour mixture until combined. Add the oats, coconut, and walnuts, and stir to combine. Then stir in the strawberries. Press the dough evenly into the 9 x 13 inch pan. Bake on the center rack in the oven for 20 to 25 minutes, until the edges are beginning to get brown. Cool completely on a wire rack and cut into 14 bars. If you try to cut them before they’re completely cool, they’ll likely crumble apart. Store the bars in an airtight container for several days, or freeze them for several months.",
          "category": "Snacks"

        },
        {
          "title": "PROSCIUTTO AND SPINACH FLATBREAD PIZZA RECIPE",
          "source": "Dawn Smith",
          "ingredients": "2 naan flatbreads - I used Trader Joe's frozen Garlic Naan, 1 tbsp olive oil, 4 cups of baby spinach, 3 garlic cloves - thinly sliced, 2 long slices of thinly sliced prosciutto, 2 - 2 ½ tbsp freshly shaven parmesan, romano, and asiago cheese blend - I used Trader Joe's, 2 tbsp fresh mozzarella cheese, ground black pepper, to taste",
          "instructions": "Preheat oven to 400ºF. Heat a non-stick frying pan over medium heat. Add 1 tbsp olive oil to the frying pan. Sauté clove slices until slightly brown. Add the spinach to the frying pan and sauté until wilted - about 1½ - 2 minutes. Remove frying pan from heat and set aside. Place flatbread pizzas on a baking sheet or baking stone; I used a baking stone. Evenly spread the spinach mixture over both flatbreads. Sprinkle the shaved cheese blend evenly over both flatbreads. Scoop a tablespoon of fresh mozzarella and crumble into small clumps over one flatbread. Scoop a second tablespoon of fresh mozzarella and repeat to the second flatbread. Tear each slice of prosciutto into medium pieces and top both flatbreads. Sprinkle with black pepper. Bake in the oven for 5 minutes. After cooking for 5 minutes, turn on the broiler. Broil until the cheese is nicely melted and slightly brown. This only takes a minute or two, so watch carefully so you don't burn your pizzas",
          "category": "Pizza"

        },
        {
          "title": "Chipotle Lime Grilled Flank Steak",
          "source": "Christin Mahrlig",
          "ingredients": "1/2 cup olive oil or vegetable oil 1/4 cup lime juice 1/3 cup loosely packed cilantro leaves 4 chipotle peppers in adobo sauce, chopped 2 tablespoons adobo sauce 1 1/2 tablespoons honey 1 tablespoon white vinegar 2 cloves garlic 1 (2-pound) flank steak salt and pepper",
          "instructions": "Add first 8 ingredients to a blender and blend until smooth. Pour into a large ziptop bag. Add flank steak, coating it well. Seal and refrigerate for at least 8 hours and up to 24 hours. Let flank steak sit at room temperature for 30 minutes before grilling. Pour marinade into a small saucepan. Boil for 5 minutes, stirring occasionally so it doesn't burn on the bottom. Season flank steak with salt and pepper. Grill for about 8 minutes per side, or until desired degree of doneness. Drizzle marinade over steak and let it rest for 10 minutes. Slice thinly against the grain.",
          "category": "Steak"

        },
        {
          "title": "Great Grandma’s Pasta Sauce",
          "source": "Julie Wampler",
          "ingredients": "1 lb 80/20 ground beef OR 90/10 ground beef 1: 6- oz can tomato paste 6 oz water 1: 24- oz jar tomato puree 5-6 cloves garlic, minced 2 tbsp granulated sugar Pinch of dried oregano Pinch of onion powder Pinch of garlic powder Handful of fresh basil, chopped Salt and pepper, to taste",
          "instructions": "In a large stockpot, saute garlic until soft and fragrant in 2 tbsp. of olive oil, about 2 minutes. Throw your meat in with the garlic and brown until meat has been thoroughly cooked through, about 5 minutes. Season with salt and pepper. Pour in the tomato paste, tomato puree, and seasoning, including the fresh basil and sugar. Stir to mix well. With the 6 oz. can from the tomato paste, fill that with water and pour it in the stockpot as well. Let mixture simmer, uncovered, for 2 or more hours (the longer the better, but minimum 2 hours), stirring occasionally. Serve hot over fresh pasta.",
          "category": "Pasta"

        },
        {
          "title": "Spaghetti Aglio e Olio with Breadcrumbs",
          "source": "Erin",
          "ingredients": "Breadcrumbs 6 slices French bread 4 Tablespoons butter Spaghetti Aglio e Olio 1 pound spaghetti 12 cloves garlic minced 1 teaspoon coarsely crushed fennel seeds Generous pinch red pepper flakes 2 Tablespoons extra virgin olive oil plus more for drizzling Parmesan cheese for topping (optional) Lemon zest for topping (optional) Salt and pepper to taste",
          "instructions": "Bread Crumbs Preheat oven to 300 degrees. Toast bread for 15-20 minutes, flipping once during the cooking. Let cool slightly and process in food processor or blender to create breadcrumbs. Toss crumbs with the melted butter, and a good pinch of salt and pepper. Spread in a single layer on your baking sheet and toast for an additional 10-15 minutes, until golden brown. Spaghetti Aglio e Olio Bring a large pot of salted water to a boil. Cook the pasta to al dente. Brown the garlic in a large skillet over medium heat. Add the crushed fennel seeds and red pepper flakes along with the bread crumbs and let heat together until the flavors meld. Drain the pasta, reserving the cooking water. Toss the pasta in the skillet with the bread crumb mixture. Drizzle with olive oil and add additional pasta water if moisture is needed. Sprinkle with parmesan and lemon zest, if desired.",
          "category": "Pasta"

        },
        {
          "title": "Perfect Yeast Doughnuts–Sugar, and Filled (with Jam, Nutella or Cream)",
          "source": "Christina Cucina",
          "ingredients": "6 tbsp (90 ml) water 5 oz buttermilk (150 ml)  (at room temperature) 1 egg, beaten (at room temperature) 2 oz (57 g) butter, melted 16 oz (454 g) all-purpose or bread flour 2 oz (57 g) sugar 1 tsp salt 1 1/2 tsp (5 g) regular or quick-rise yeast (one and a half teaspoons) oil for frying (I use sunflower or grape seed oil or a combination) sugar for coating the doughnuts jam, Nutella and or real whipped cream for filling, if desired",
          "instructions": "Place the water, buttermilk, beaten egg and melted butter in the bread machine pan, then add the dry ingredients which were weighed using a scale (it's so important), except for the yeast. Make a small indentation in the dry ingredients, then add the yeast. Set the bread machine on the ‘dough’ setting. FOR STAND MIXER WITH DOUGH HOOK, OR BY HAND: Place the dry ingredients in a bowl. Put 6 tbsp of lukewarm water in a cup and sprinkle the yeast on top, set aside for about 5 minutes, until the yeast begins to react (you can add a pinch of sugar to help it). Make a well in the center of the dry ingredients, then pour in the buttermilk, egg, melted butter and yeast mixture. If using a stand mixer, run with the dough hook until a dough forms then continue for about 5 minutes. By hand, knead for about 10 minutes. Cover and set aside until at least doubled in size.",
          "category": "Sweets"

        },
        {
          "title": "Easy Poached Eggs",
          "source": "Elise Bauer",
          "ingredients": "1 or more fresh eggs",
          "instructions": "1 Heat the water: Fill a saucepan with several inches of water. Heat the water on high until it reaches a boil and then lower the heat until the water is at a bare simmer (just a few bubbles coming up now and then). bring pot of water to a simmer to make poached eggs 2 Crack egg into a small bowl and gently slip it into the water: Working with the eggs one at a time, crack the egg into a small bowl or cup. Place the bowl close to the surface of the hot water and gently slip the egg into the water. gently lower raw egg into the surface of the hot simmering water make poached eggs by putting raw egg into hot water If you want, use a spoon to push some of the egg whites closer to their yolks, to help them hold together. Add all of the eggs you are poaching to the pan in the same way, keeping some distance between them. 3 Turn off heat, cover pan, set timer for 4 minutes: Turn off the heat and cover the pan. Set a timer for 4 minutes (or count out loud to 60, four times). At this point the egg whites should be completely cooked, while the egg yolks are still runny.",
          "category": "Egg"

        },
        {
          "title": "Amazing Vegetable Soup",
          "source": "unknown",
          "ingredients": "2 Tbsp olive oil 1 1/2 cups chopped yellow onion (1 medium) 2 cups peeled and chopped carrots (about 5) 1 1/4 cups chopped celery (about 3) 4 cloves garlic , minced 4 (14.5 oz) cans low-sodium chicken broth or vegetable broth 2 (14.5 oz) cans diced tomatoes (undrained) 3 cups peeled and 1/2-inch thick diced potatoes (from about 3 medium) 1/3 cup chopped fresh parsley 2 bay leaves 1/2 tsp dried thyme Salt and freshly ground black pepper 1 1/2 cups chopped frozen or fresh green beans 1 1/4 cups frozen or fresh corn 1 cup frozen or fresh peas",
          "instructions": "Heat olive oil in a large pot over medium-high heat. Add onions, carrots, and celery and saute 4 minutes then add garlic and saute 30 seconds longer. Add in broth tomatoes, potatoes, parsley, bay leaves, thyme and season with salt and pepper to taste*. Bring to a boil, then add green beans. Reduce heat to medium-low, cover and simmer until potatoes are almst fully tender, about 20 - 30 minutes. Add corn and peas and cook 5 minutes longer. Serve warm.",
          "category": "Soup"

        },
        {
          "title": "Extra Crispy Southern Fried Chicken",
          "source": "unknown",
          "ingredients": "3 pounds chicken, cut into pieces 2 eggs 1 cup milk salt and pepper, to taste 1 teaspoon garlic powder 1 teaspoon seasoned salt (optional) 1 cup all purpose flour 2 cups canola or peanut oil",
          "instructions": "Rinse the chicken pieces with cold water and pat dry with paper towels. In a shallow bowl, beat the eggs with the milk, and stir in the salt, pepper and garlic powder. Soak the chicken in the milk mixture for 5 to 10 minutes. Combine the flour and seasoned salt (if using) in a large zip-top plastic bag. Add the chicken pieces, a few at a time, and shake to coat completely in the flour. Shake off any excess and set the chicken aside on a rack to dry. Pour the oil into a deep skillet or deep fryer and heat it to 350 degrees F. Add chicken thighs and legs and cook for several minutes. Add other chicken pieces being careful not to overcrowd skillet. Continue cooking, turning once, until chicken pieces are golden brown and cooked through. Drain on paper towels and serve warm or at room temperature.",
          "category": "Meat"

        },
      ]);
    });
};
