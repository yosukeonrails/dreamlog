const router = require("express").Router();
const bodyParser = require("body-parser");
var jsonParser = bodyParser.json();
var User = require("../Models/Users");
var cors = require("cors");

router.use(cors({ origin: "http://localhost:3000", credentials: true }));
router.use(jsonParser);
router.use(bodyParser.json());

router.post("/", (req, res) => {
  const profile = req.body;

  const userData = {
    user_name: profile ? profile.user_name : null,
    given_name: profile ? profile.given_name : null,
    family_name: profile ? profile.family_name : null,
    nickname: profile ? profile.nickname : null,
    picture: profile ? profile.picture : null,
    locale: profile ? profile.locale : null,
    gender: profile ? profile.gender : null,
    full_name: profile ? profile.given_name + " " + profile.family_name : null
  };

  User.findOneAndUpdate(
    { user_name: userData.user_name },
    { $set: userData },
    { upsert: true, new: true },
    function(err, user) {
      res.status(201).json(user);
    }
  );
});

module.exports = router;
