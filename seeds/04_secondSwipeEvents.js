exports.seed = function(knex, Promise) {
  return knex("secondSwipEvents")
    .del()
    .then(function() {
      return knex("secondSwipEvents").insert([
        {
          id: 1,
          eventName:
            "Denver Startup Week Opening Bash sponsored by AARP Colorado",
          eventDescription:
            "Talk about scaling: 1000 of your closest startup friends will come together to commence the most anticipated week for the Denver entrepreneurial community. Come celebrate another vibrant year and join in on the inaugural festivities. Trust your instinct- missing the biggest party of the year is not an option! Denver Beta is part of this years Opening Bash! Colorado's premiere startup party. Hundreds of community members: entrepreneurs, students, investors, hackers, hustlers, designers, doers, more.",
          date: "Monday September 25th",
          time: "6:00PM — 9:30PM",
          register: "N/A",
          tickets: "N/A",
          address: "1701 WYNKOOP STREET Denver, CO",
          image:
            "https://s3-us-west-1.amazonaws.com/startupweekevents/startup6.png"
        },
        {
          id: 2,
          eventName: "Denver Startup Week Bash sponsored by Xero",
          eventDescription:
            "What's the best way to close out the fifth annual Denver Startup Week? An awesome party of course! Join us for an evening full of tasty food, drinks, games and music all alongside your newest friends. After a successful week of learning, meeting new people and helping us celebrate Denver's entrepreneurial community, you sure will deserve this celebration. See you there!",
          date: "Thursday September 28th",
          time: "5:30PM — 8:30PM",
          register: "N/A",
          tickets: "N/A",
          address: "1909 Blake St. Denver, CO",
          image:
            "https://s3-us-west-1.amazonaws.com/startupweekevents/startup7.png"
        },
        {
          id: 3,
          eventName: "Denver Startup Week: Designer Track Nightcap Lounge",
          eventDescription:
            "THE late night hangout of Denver Startup Week. Monday, Tuesday, Wednesday nights during Startup Week. Free beer, wine & wells with DSW wristband (while supplies last). Music. Dancing. Digital Art in the gallery by Alt Ethos.",
          date: "Wednesday September 27th",
          time: "9:00PM — 1:30AM",
          register: "N/A",
          tickets: "N/A",
          address: "2528 Walnut Street Denver, CO",
          image:
            "https://s3-us-west-1.amazonaws.com/startupweekevents/startup8.png"
        }
      ]);
    });
};
