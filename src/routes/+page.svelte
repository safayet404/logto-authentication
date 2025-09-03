<script>
	import { LogtoClient } from '@logto/sveltekit';
	import { onMount } from 'svelte';

	export let data;

	console.log('all data', data);
</script>

<section>
	<form method="POST" action="?/{data.user ? 'signOut' : 'signIn'}">
		<button type="submit">Sign {data.user ? 'out' : 'in'}</button>
	</form>
</section>

<style>
</style>
