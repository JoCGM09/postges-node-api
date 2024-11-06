import { Router } from "express";
import { pool } from "../db.js";
import { createUser, deleteUser, getUser, getUsers, updateUser } from "../controllers/users.controllers.js";

const router = Router();

// Obtener todos los usuarios
router.get('/users',getUsers);

// Obtener un solo usuario
router.get('/users/:id', getUser);

// Crear un usuario
router.post('/users', createUser);

// Eliminando usuario
router.delete('/users/:id', deleteUser);

// Modificando usuario
router.put('/users/:id', updateUser);

export default router;