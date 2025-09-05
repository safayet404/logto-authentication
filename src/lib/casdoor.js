// src/lib/casdoor.js
import { UserManager, WebStorageStateStore } from 'oidc-client-ts';

let userManager;

export function getUserManager() {
	if (!userManager && typeof window !== 'undefined') {
		userManager = new UserManager({
			authority: 'http://localhost:8000',
			client_id: '9993e6b72ee136ebc34e', // your Casdoor App ID
			redirect_uri: window.location.origin + '/callback',
			post_logout_redirect_uri: window.location.origin + '/',
			response_type: 'code',
			scope: 'openid profile email',
			userStore: new WebStorageStateStore({ store: window.localStorage })
		});
	}
	return userManager;
}

export function signIn() {
	const mgr = getUserManager();
	if (!mgr) return;
	mgr.signinRedirect(); // triggers full-page redirect
}

export async function handleCallback() {
	const mgr = getUserManager();
	if (!mgr) return null;
	return await mgr.signinRedirectCallback(); // reads state from localStorage
}

export function signOut() {
	const mgr = getUserManager();
	if (!mgr) return;
	mgr.signoutRedirect();
}

export async function getUser() {
	const mgr = getUserManager();
	if (!mgr) return null;
	return await mgr.getUser();
}
