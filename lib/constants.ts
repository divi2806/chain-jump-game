export const MESSAGE_EXPIRATION_TIME = 1000 * 60 * 60 * 24 * 30; // 30 day

const APP_URL = process.env.NEXT_PUBLIC_URL || 
  (process.env.VERCEL_URL ? `https://${process.env.VERCEL_URL}` : 'http://localhost:3000');

if (!APP_URL) {
  throw new Error('NEXT_PUBLIC_URL or VERCEL_URL is not set');
}

export { APP_URL };
