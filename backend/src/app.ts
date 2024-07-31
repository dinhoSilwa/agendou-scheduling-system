
//#2 create express serv
import express  from "express";
import mongoose from "mongoose";
import dotenv from 'dotenv';


dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(express.json());
app.use('create/admusers', admRoutes);

mongoose.connect(process.env.MONGO_URI as string, {
  useNewUrlParse : true, 
  useUnifieldTopology : true
}).then(()=> {
  console.log(`Conectado com Sucesso ao Banco de Dados`);
  app.listen(PORT, () => console.log(`Rodando na porta ${PORT}`))
}).catch(error => {
  console.error("Falha ao conectar", error)
})