exports.seed = function(knex, Promise) {
  return knex("startupevents")
    .del()
    .then(function() {
      return knex("startupevents").insert([
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
        },
        {
          id: 4,
          eventName: "29 Mistakes Startups Make",
          eventDescription:
            "As Chief Product Officer at Spire Digital, Nick Coppolo enjoys a front row seat for the good, the bad, and the ugly of early stage companies. He'll be sharing the common failures he's observed and provide insight on how to avoid committing them. Whether you're bootstrapped or venture funded or spun off from a Fortune 500, you can't miss this vital presentation.",
          date: "Monday September 25th",
          time: "2:00PM — 4:00PM",
          register: "No Registration Required",
          tickets: "https://www.denverstartupweek.org/",
          address: "940 Lincoln Street Denver, CO",
          image:
            "https://s3-us-west-1.amazonaws.com/startupweekevents/startup4.png"
        },
        {
          id: 5,
          eventName:
            "Scaling Towards Profitability. (Capital Efficiency, Discipline, Scrappiness, and Winning)",
          eventDescription:
            "Tips on scaling to hyper growth that have nothing to do with bottomless bank accounts. This panel of VCs and entrepreneurs will discuss what got them here and the potholes to avoid.",
          date: "Monday September 25th",
          time: "12:00PM — 1:30PM",
          register: "No Registration Required",
          tickets: "https://www.denverstartupweek.org/",
          address: "999 18th street",
          image:
            "https://s3-us-west-1.amazonaws.com/startupweekevents/startup5.png"
        },
        {
          id: 6,
          eventName:
            "Denver Startup Week Opening Bash sponsored by AARP Colorado",
          eventDescription:
            "Talk about scaling: 1000 of your closest startup friends will come together to commence the most anticipated week for the Denver entrepreneurial community. Come celebrate another vibrant year and join in on the inaugural festivities. Trust your instinct- missing the biggest party of the year is not an option! Denver Beta is part of this years Opening Bash! Colorado's premiere startup party. Hundreds of community members: entrepreneurs, students, investors, hackers, hustlers, designers, doers, more.",
          date: "Monday September 25th",
          time: "6:00PM — 9:30PM",
          register: "No Registration Required",
          tickets: "https://www.denverstartupweek.org/",
          address: "1701 WYNKOOP STREET Denver, CO",
          image:
            "https://s3-us-west-1.amazonaws.com/startupweekevents/startup6.png"
        },
        {
          id: 7,
          eventName: "Denver Startup Week Bash sponsored by Xero",
          eventDescription:
            "What's the best way to close out the fifth annual Denver Startup Week? An awesome party of course! Join us for an evening full of tasty food, drinks, games and music all alongside your newest friends. After a successful week of learning, meeting new people and helping us celebrate Denver's entrepreneurial community, you sure will deserve this celebration. See you there!",
          date: "Thursday September 28th",
          time: "5:30PM — 8:30PM",
          register: "No Registration Required",
          tickets: "https://www.denverstartupweek.org/",
          address: "1909 Blake St. Denver, CO",
          image:
            "https://s3-us-west-1.amazonaws.com/startupweekevents/startup7.png"
        },
        {
          id: 8,
          eventName: "Denver Startup Week: Designer Track Nightcap Lounge",
          eventDescription:
            "THE late night hangout of Denver Startup Week. Monday, Tuesday, Wednesday nights during Startup Week. Free beer, wine & wells with DSW wristband (while supplies last). Music. Dancing. Digital Art in the gallery by Alt Ethos.",
          date: "Wednesday September 27th",
          time: "9:00PM — 1:30AM",
          register: "No Registration Required",
          tickets: "https://www.denverstartupweek.org/",
          address: "2528 Walnut Street Denver, CO",
          image:
            "https://s3-us-west-1.amazonaws.com/startupweekevents/startup8.png"
        }
      ]);
    });
};
