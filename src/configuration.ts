import { registerAs } from '@nestjs/config';

export default registerAs('jwt', () => ({
  secret: process.env.JWTSECRETKEY, // Set this in your environment variables
}));