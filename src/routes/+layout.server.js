export const load = async ({ locals }) => {
	console.log('locals', locals);

	const token = await locals.logtoClient.getAccessToken('https://my-api.com/api');
	console.log('token', token);

	return { user: locals.user };
};
