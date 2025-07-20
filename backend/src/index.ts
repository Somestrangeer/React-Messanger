// import express from 'express';
// import { PrismaClient } from './generated/prisma/client';

// // Инициализация Express и Prisma
// const app = express();
// const prisma = new PrismaClient();
// const PORT = 5000;

// // Middleware для парсинга JSON
// app.use(express.json());

// // Роут для получения данных
// app.get('/getdata', async (req, res) => {
//   try {
//     // Получаем все записи из таблицы (например, `User`)
//     const users = await prisma.users.findMany();
//     res.json(users);
//   } catch (error) {
//     console.error('Error fetching data:', error);
//     res.status(500).json({ error: 'Internal Server Error' });
//   }
// });

// // Запуск сервера
// app.listen(PORT, () => {
//   console.log(`Server is running on http://localhost:${PORT}`);
// });

import { Application } from './core/Application';

const app = new Application();
app.start(5000);