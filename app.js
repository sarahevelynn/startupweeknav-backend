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
      response.json({
        startupevents: startupevents
      })
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
app.get("/startupevents/:id", (request, response) => {
  queries
    .read(request.params.id, "startupevents")
    .then(startupevents => {
      startupevents
        ? response.json({ startupevents })
        : response.sendStatus(404);
    })
    .catch(console.error);
});

app.post("/startupevents", (request, response) => {
  queries
    .createEvents(request.body)
    .then(startupevents => {
      response.status(201).json({ startupevents: startupevents });
    })
    .catch(console.error);
});

app.delete("/startupevents/:id", (request, response) => {
  queries
    .deleteEvents(request.params.id)
    .then(() => {
      response.sendStatus(204);
    })
    .catch(console.error);
});

app.put("/startupevents/:id", (request, response) => {
  queries
    .updateEvents(request.params.id, request.body)
    .then(startupevents => {
      response.json({ message: "success" });
    })
    .catch(console.error);
});

app.use((request, response) => {
  response.send(404);
});

module.exports = app;
