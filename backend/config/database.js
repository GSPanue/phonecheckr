import { env } from '@/helpers';

const config = {
  client: 'mysql',
  connection: {
    host: env('DB_HOST'),
    port: env('DB_PORT'),
    user: env('DB_USERNAME'),
    password: env('DB_PASSWORD'),
    database: env('DB_DATABASE')
  }
};

export default config;
