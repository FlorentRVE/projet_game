const character = [
    {
        "name": "Koa",
        "imageUrl": "../../Back/images/koa.png"
    },

    {
        "name": "PogTchop",
        "imageUrl": "../../Back/images/PogTchop.png"
    },

    {
        "name": "well",
        "imageUrl": "../../Back/images/well.png"
    },
];

exports.find = () => {
    return new Promise((resolve, reject) => resolve(JSON.parse(JSON.stringify(character))));
  }