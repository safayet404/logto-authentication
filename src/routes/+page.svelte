<!-- <script>
	import { logtoClient } from '$lib/logto.js';
	import { onMount } from 'svelte';

	export let data;

	let isAuthenticated = false;
	let user;
	let token;

	onMount(async () => {
		if (!logtoClient) return;

		isAuthenticated = await logtoClient.isAuthenticated();

		if (isAuthenticated) {
			user = await logtoClient.fetchUserInfo();
			token = await logtoClient.getAccessToken('https://default.logto.app/api');
		}
	});
</script>

<section>
	{#if isAuthenticated}
		<pre>{JSON.stringify(user, null, 2)}</pre>
		<p><strong>Token:</strong> {token}</p>
	{/if}

	<form method="POST" action="?/{data.user ? 'signOut' : 'signIn'}">
		<button type="submit">Sign {data.user ? 'out' : 'in'}</button>
	</form>
</section>

<style>
</style> -->

<script>
  import { onMount } from 'svelte';
  import { signIn, getUser, signOut } from '$lib/casdoor';
  import { writable } from 'svelte/store';

  const user = writable(null);

  onMount(async () => {
    const u = await getUser();  // Fetch user if already logged in
    user.set(u);
  });

    function handleLogin() {
    signIn(); // Full-page redirect to Casdoor
  }
</script>

{#if $user}
	<p>Welcome, {$user.profile.name}</p>
	<button on:click={signOut}>Logout</button>
{:else}
	<button on:click={handleLogin}>Login with Casdoor</button>
{/if}
