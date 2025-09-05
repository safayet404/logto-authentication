import { handleLogto } from '@logto/sveltekit';

export const handle = handleLogto(
	{
		endpoint: 'http://localhost:3001/',
		appId: '4wekp13062mzt8vu658yw',
		appSecret: 'dCTJaW7FfJ9kkSBi8G5UtnsCgUCsd4Ht',
		resources: ['https://default.logto.app/api']
	},
	{ encryptionKey: 'X1zytsfChHd8YVPyh7Ni7IK6Ns0KPp4W' } // Random-generated key
);
