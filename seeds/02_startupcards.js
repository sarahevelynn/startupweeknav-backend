
exports.seed = function(knex, Promise) {
  return knex("startupcards").del()
    .then(function () {
      return knex("startupcards").insert([
        {id: 1, priority: 1, category: "I can help them", note: "Told them I would put them in contact with BJ", image: "https://s3-us-west-1.amazonaws.com/startupweekcards/card1.jpeg"},
        {id: 2, priority: 2, category: "They can help me", note: "Were going to put me in contact with sustainable company", image: "https://s3-us-west-1.amazonaws.com/startupweekcards/card2.jpeg"},
        {id: 3, priority: 3, category: "Good general contact", note: "Great energy, could be a great partnership for the future!", image: "https://s3-us-west-1.amazonaws.com/startupweekcards/card3.jpeg"},
        {id: 4, priority: 4, category: "Other", note: "Talked about kick ball team", image: "https://s3-us-west-1.amazonaws.com/startupweekcards/card4.jpeg"},
        {id: 5, priority: 5, category: "Other", note: "Really into skiing, possible invite to Christmas hut trip", image: "https://s3-us-west-1.amazonaws.com/startupweekcards/card5.jpeg"},
        {id: 6, priority: 2, category: "Good general contact", note: "Get coffee in two weeks to talk more about their company", image: "https://s3-us-west-1.amazonaws.com/startupweekcards/card6.jpeg"},
        {id: 7, priority: 3, category: "I can help them", note: "Put in touch with PitchDeck for help with presentations", image: "https://s3-us-west-1.amazonaws.com/startupweekcards/card7.jpeg"},
        {id: 8, priority: 4, category: "They can help me", note: "Said they would talk to Paul about Android development", image: "https://s3-us-west-1.amazonaws.com/startupweekcards/card8.jpeg"},
      ]);
    });
};
