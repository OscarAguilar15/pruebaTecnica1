// `.env.ts` is generated by the `npm run env` command
// `npm run env` exposes environment variables as JSON for any usage you might
// want, like displaying the version or getting extra config from your CI bot, etc.
// This is useful for granularity you might need beyond just the environment.
// Note that as usual, any environment variables you expose through it will end up in your
// bundle, and you should not use it for any sensitive information like passwords or keys.
import { env } from './.env';

export const environment = {
  firebase: {
    projectId: 'my-ht-6d7a4',
    appId: '1:721906825243:web:7d687af6f911c111b020be',
    storageBucket: 'my-ht-6d7a4.appspot.com',
    apiKey: 'AIzaSyCLEftb9xDPUF7d8xePWXScaofw0OqSTRs',
    authDomain: 'my-ht-6d7a4.firebaseapp.com',
    messagingSenderId: '721906825243',
  },
  production: true,
  version: env['npm_package_version'],
  serverUrl: 'https://api.chucknorris.io',
  defaultLanguage: 'es-ES',
  supportedLanguages: ['es-ES'],
};