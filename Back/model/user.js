const user = [
    {
        "pseudo": "toto",
        "mdp": "toto"
    },

    {
        "pseudo": "titi",
        "mdp": "titi"
    },

    {
        "pseudo": "tata",
        "mdp": "tata"
    },
];

exports.find = () => {
    return new Promise((resolve, reject) => resolve(JSON.parse(JSON.stringify(user))));
  }