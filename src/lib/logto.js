import { createLogto } from '@logto/client'; // @logto/svelte re-exports this too
import { browser } from '$app/environment';

export const logtoClient = browser
	? createLogto({
			endpoint: 'http://localhost:3001/', // your Logto endpoint
			appId: '2zvivph7ygyxhtb5isz2n',
			resources: ['https://default.logto.app/api'] // your API resource
		})
	: null;
