exports.seed = function(knex, Promise) {
  return knex("agenda")
    .del()
    .then(function() {
      return knex("agenda").insert([
        {
          id: 1,
          eventName:
            "Denver Startup Week Kick-off Breakfast sponsored by SendGrid",
          eventDescription:
            "Denver Startup Week Kick-off Breakfast, featuring three world-class entrepreneurs who are set to share insight into growing successful businesses and infusing innovation and creativity into everything you do. This event, sponsored by SendGrid, will kick-off what promises to be an amazing Denver Startup Week with some inspiration to help energize and excite you!",
          date: "Monday September 25th",
          time: "7:00AM – 9:30AM",
          register: "Registration Required",
          tickets:
            "https://www.eventbrite.com/o/denver-startup-week-2017-12867309048",

          address: "1101 13th St. Denver, CO",
          image:
            "https://s3-us-west-1.amazonaws.com/startupweekevents/startup1.png"
        },
        {
          id: 2,
          eventName: "Cybersecurity - Compliance & Security Panel Discussion",
          eventDescription:
            "This panel discussion will provide an overview of the challenges that e-commerce providers, health care organizations, SaaS, and related organizations face while satisfying ongoing compliance and security requirements.",
          date: "Monday September 25th",
          time: "10:00AM — 11:30AM",
          register: "No Registration Required",
          tickets: "https://www.denverstartupweek.org/",
          address: "555 17th St , 3200",
          image:
            "https://s3-us-west-1.amazonaws.com/startupweekevents/startup2.png"
        },
        {
          id: 3,
          eventName: "Check yoself before you wreck yoself",
          eventDescription:
            "Founders reflect on their struggles in hindsight, after they get some distance and the perspective that time affords. Perhaps some sage wisdom and strategy can prepare you ahead of time before getting into the biggest venture of your life. Come learn how to prepare yourself for the internal, external, personal and professional dimensions of a new venture from these seasoned entrepreneurs.",
          date: "Monday September 25th",
          time: "10:00AM — 11:30AM",
          register: "No Registration Required",
          tickets: "https://www.denverstartupweek.org/",
          address: "1062 Delaware St. Denver, CO",
          image:
            "https://s3-us-west-1.amazonaws.com/startupweekevents/startup3.png"
        }
      ]);
    });
};
