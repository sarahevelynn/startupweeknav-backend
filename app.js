const express = require("express");
const app = express();
const queries = require("./queries");
const bodyParser = require("body-parser");
const cors = require("cors");

app.use(cors());
app.use(bodyParser.json());

app.get("/", (request, response) => {
  queries
    .list("startupevents")
    .then(startupevents =>
      queries.list("startupcards").then(startupcards =>
          response.json({
            startupevents: startupevents,
            startupcards: startupcards,
          })
        )
      )
    .catch(error => console.log(error));
});

app.get("/startupevents", (request, response) => {
  queries
    .list("startupevents")
    .then(startupevents => {
      response.json({ startupevents });
    })
    .catch(error => console.log(error));
});

app.get("/agenda", (request, response) => {
  queries
    .list("agenda")
    .then(agenda => {
      response.json({ agenda });
    })
    .catch(error => console.log(error));
});

app.get("/agenda/:id", (request, response) => {
  queries
    .read(request.params.id, "agenda")
    .then(agenda => {
      agenda ? response.json({ agenda }) : response.sendStatus(404);
    })
    .catch(console.error);
});

app.get("/secondSwipeEvents", (request, response) => {
  queries
    .list("secondSwipEvents")
    .then(secondSwipEvents => {
      response.json({ secondSwipEvents });
    })
    .catch(error => console.log(error));
});

app.get("/secondSwipeEvents/:id", (request, response) => {
  queries
    .read(request.params.id, "secondSwipEvents")
    .then(secondSwipEvents => {
      secondSwipEvents ? response.json({ secondSwipEvents }) : response.sendStatus(404);
    })
    .catch(console.error);
});

app.get("/startupcards", (request, response) => {
  queries
    .list("startupcards")
    .then(startupcards => {
      response.json({ startupcards });
    })
    .catch(error => console.log(error));
});

app.get("/startupcards/:id", (request, response) => {
  queries
    .read(request.params.id, "startupcards")
    .then(startupcards => {
      startupcards ? response.json({ startupcards }) : response.sendStatus(404);
    })
    .catch(console.error);
});

app.post("/agenda", (request, response) => {
  queries
    .createEvent(request.body)
    .then(agenda => {
      response.status(201).json({ agenda: agenda });
    })
    .catch(console.error);
});

app.post("/secondSwipeEvents", (request, response) => {
  queries
    .secondSwipe(request.body)
    .then(secondSwipEvents => {
      response.status(201).json({ secondSwipEvents: secondSwipEvents });
    })
    .catch(console.error);
});

app.post("/startupcards", (request, response) => {
  queries
    .createCards(request.body)
    .then(startupcards => {
      response.status(201).json({ startupcards: startupcards });
    })
    .catch(console.error);
});

app.delete("/startupcards/:id", (request, response) => {
  queries
    .deletestartupcards(request.params.id)
    .then(() => {
      response.sendStatus(204);
    })
    .catch(console.error);
});

app.delete("/agenda/:id", (request, response) => {
  queries
    .deleteEvent(request.params.id)
    .then(() => {
      response.sendStatus(204);
    })
    .catch(console.error);
});

app.put("/startupcards/:id", (request, response) => {
  queries
    .updatestartupcards(request.params.id, request.body)
    .then(startupcards => {
      response.json({ message: "success" });
    })
    .catch(console.error);
});

app.use((request, response) => {
  response.send(404);
});

module.exports = app;
