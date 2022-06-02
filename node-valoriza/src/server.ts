import "dotenv/config";
import express, { json } from 'express';

const app = express();
app.use(express.json());

app.get("/test", (request, response) => {
  return response.send("Olá NLW");
})

app.post("/teste-post", (request, response) => {
  return response.send("Ola Nlw Método Post")
})

app.listen(process.env.PORT || 5000, () => console.log("Server is Running!"))