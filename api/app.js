import express from "express";
import dotenv from "dotenv";

dotenv.config();
const app = express();
const porta = ( process.env.PORT || 3000);



app.listen(porta, () => {
    console.log(`Servidor rodando na porta http://localhost:${porta}`);
});


