import express from "express";
import mongoose from "mongoose";
import dotenv from 'dotenv';
import routerBusiness from "./routes/routerBusiness";
import routerAdmin from "./routes/routeradmin";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(express.json());
app.use('/business', routerBusiness); 
app.use('/admin', routerAdmin)

mongoose.connect(process.env.MONGO_URI as string).then(() => {
  console.log(`Conectado com sucesso ao banco de dados`);
  app.listen(PORT, () => console.log(`Rodando na porta ${PORT}`));
}).catch(error => {
  console.error("Falha ao conectar", error);
});
