const express = require("express");
const mc = require("./controllers/messages_controller")

const app = express();

app.use(express.json());

const messagesBasUrl = "/api/messages";
app.post(messagesBasUrl, mc.create);
app.get(messagesBasUrl, mc.read);
app.put(`${messagesBasUrl}/:id`, mc.update);
app.delete(`${messagesBasUrl}/:id`, mc.delete);

const port = 3001;
app.listen(port, () => {
    console.log("Server listening on 3001")
})

