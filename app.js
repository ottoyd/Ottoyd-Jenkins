const express = require("express");
const cors = require("cors");
const app = express();

app.use(cors());
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

console.log('fly my sted')

function doShit (duration) {
  const start = Date.now()
  while (Date.now() - start < duration) {}
}

app.get('/slow', (req, res) => {
  doShit(5000)
  res.send('Nom Nom')
})

app.get("/endpoint1", (req, res) => {
  res.status(200).json({ msgs: "Halo Mas Ham :: Result EndPoint1" });
});
app.get("/endpoint2", (req, res) => {
  res.status(200).json({ msg: "Halo Mas Ham :: Result EndPoint2" });
});
app.get("/endpoint3", (req, res) => {
  res.status(200).json({ msg: "Halo Mas Ham :: Result EndPoint3" });
});
app.get("/endpoint4", (req, res) => {
  res.status(200).json({ msg: "Halo Mas Ham :: Result EndPoint4" });
});

app.post("/endpoint1", (req, res) => {
  if (!req.body.body) res.status(500).json({err: `WHERE IS THE H !?..`})
  res.status(200).json(req.body);
});
app.post("/endpoint2", (req, res) => {
  if (!req.body.body) res.status(500).json({err: `WHERE IS THE H !?..`})
  res.status(200).json(req.body);
});
app.post("/endpoint3", (req, res) => {
  if (!req.body.body) res.status(500).json({err: `WHERE IS THE H !?..`})
  res.status(200).json(req.body);
});
app.post("/endpoint4", (req, res) => {
  if (!req.body.body) res.status(500).json({err: `WHERE IS THE H !?..`})
  res.status(200).json(req.body);
});



app.put("/endpoint1", (req, res) => {
  if (!req.body.body) res.status(500).json({err: `WHERE IS THE H !?..`})
  res.status(200).json(req.body);
});
app.put("/endpoint2", (req, res) => {
  if (!req.body.body) res.status(500).json({err: `WHERE IS THE H !?..`})
  res.status(200).json(req.body);
});
app.put("/endpoint3", (req, res) => {
  if (!req.body.body) res.status(500).json({err: `WHERE IS THE H !?..`})
  res.status(200).json(req.body);
});
app.put("/endpoint4", (req, res) => {
  if (!req.body.body) res.status(500).json({err: `WHERE IS THE H !?..`})
  res.status(200).json(req.body);
});



app.delete("/endpoint1", (req, res) => {
  if (!req.body.body) res.status(500).json({err: `WHAT IS THE H !?..`})
  res.status(200).json(req.body);
});
app.delete("/endpoint2", (req, res) => {
  if (!req.body.body) res.status(500).json({err: `WHAT IS THE H !?..`})
  res.status(200).json(req.body);
});
app.delete("/endpoint3", (req, res) => {
  if (!req.body.body) res.status(500).json({err: `WHAT IS THE H !?..`})
  res.status(200).json(req.body);
});
app.delete("/endpoint4", (req, res) => {
  if (!req.body.body) res.status(500).json({err: `WHAT IS THE H !?..`})
  res.status(200).json(req.body);
});
// TASK AC-001

// BUAT API dengan ENDPOINT /jsonTesting YANG MENGEMBALIKAN JSON APAPUN

// JSON HARUS MENGGANDUNG PROPERY msg

module.exports = app;
