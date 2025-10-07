import exess from "express";


cosnt app = express();
const port = 3000;

app.use ((req, res, next) =>) {
    res.setHeader("Content-Type", "text/html; charset=utf-8");
    next ();
});
app.get ("/", (req, res) => {
    res.status(200).send("<h1>página sobre</h1>");
});

app.get("/sobre", (req, res) => {
    res.status(200).send("<h1>página sobre</h1>");
});

app.get("/contato", (req, res) => {
    res.status(200).send("<h1>página contato</h1>");
});

app.get("/fotos", (req, res) => {
    res.status(200).send("<h1>fotos</h1>");
});