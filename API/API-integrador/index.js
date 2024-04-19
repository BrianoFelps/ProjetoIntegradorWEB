import express from 'express';
import cors from 'cors';
import pagesRoutes from './routes/pages.js';

const app = express();

app.use(express.json());
// Cors permite fazer requisições do frontend a meu proprio server (localhost), evitando problemas.
app.use(cors());

// Definindo rotas para o servidor, aqui se cria a rota chamada "/users"
app.use("/pages", pagesRoutes);

const port = process.env.PORT || 8080

app.listen(port, () => {
    console.log(`Servidor rodando na porta ${port}`);
})
