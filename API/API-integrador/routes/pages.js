// Definir rotas
import express from 'express';
import { getPages, addPages } from '../controllers/PagesController.js';

const router = express.Router();

// Requisição feita ao tentar acessar a rota
// router.get("/", () => {console.log("Rota de usuários acionada.")});
router.get("/", getPages);
router.post("/", addPages);

export default router;
