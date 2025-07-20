import jwt, { SignOptions } from 'jsonwebtoken';

// Типы для данных токена
interface TokenPayload {
  userId: number;
  userName?: string;
  [key: string]: any; // Дополнительные поля
}

// Конфигурация
const JWT_CONFIG = {
  secret: 'your-secret-key', // Замените на реальный секрет из env-переменных
  expiresIn: '1h' as SignOptions['expiresIn'], // Время жизни токена
};

/**
 * Создает JWT токен
 * @param payload - Данные для включения в токен
 * @returns JWT токен
 */
export function createJwtToken(payload: TokenPayload): string {
  return jwt.sign(payload, JWT_CONFIG.secret, { expiresIn: JWT_CONFIG.expiresIn });
}

export function verifyJwtToken(token: string): { userId: string } | { error: string }
{
  try {
    // Верифицируем токен и приводим тип к { userId: string }
    const decoded = jwt.verify(token, JWT_CONFIG.secret) as { userId: string };
    return decoded;
  } catch (error) {
    // Перехватываем ошибки верификации

    return {error: "Не валидный токен!"};
  }
}
