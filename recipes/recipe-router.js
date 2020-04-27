const router = require("express").Router()

const userDB = require("./recipe-model")


router.get("/", (req,res) => {
    userDB.find()
    .then(recipes => {
        res.status(201).json(recipes)
    })
    .catch(error => res.send(error))
})

router.get("/:id", (req, res) => {
    const Id = req.params.id;
    userDB.getByUserId(Id)
        .then(recipe => {
            res.status(201).json(recipe);
        })
        .catch(err => {
            res.status(401).json({ error: "User does not have any recipes."});
    });
});


router.post("/", (req, res) => {
    let recipe = req.body;
    userDB.add(recipe)
        .then(Recipe => {
            res.status(201).json(Recipe);
        })
        .catch(err => {
            res.status(500).json(err);
     });
});

router.put("/:id", (req, res) => {
    const { id } = req.params;
    const changes = req.body;
  userDB.findById(id)
      .then(recipe => {
        if (recipe) {
          userDB.update(id, changes)
          .then(updatedRecipe => {
            res.json(updatedRecipe);
          });
        } else {
          res
            .status(404)
            .json({ message: "Could not find recipe with given id" });
        }
      })
      .catch(err => {
        res.status(500).json({ message: "Failed to update recipe" });
      });
  });
  
  router.delete("/:id",  (req, res) => {
    const { id } = req.params;
    userDB.remove(id)
      .then(deleted => {
        if (deleted) {
          res.json({ removed: deleted });
        } else {
          res
            .status(404)
            .json({ message: "Could not find recipe with given id" });
        }
      })
      .catch(err => {
        res.status(500).json({ message: "Failed to delete recipe" });
      });
  });

module.exports = router