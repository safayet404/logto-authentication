import { handleLogto } from '@logto/sveltekit';

export const handle = handleLogto(
	{
		endpoint: 'http://localhost:3001/',
		appId: 'gsxve13n93qkv71bll8cp',
		appSecret: 'IOVg6RNa1TQXHJCJfi1Z1Tpzi8RQJI33',
		resources: ['https://my-api.com/api'],
		scopesL: ['all']
	},
	{ encryptionKey: 'PdMSCo9OgcuFqIBwtbBcpNh8kmMWEbPB' } // Random-generated key
);
