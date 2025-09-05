<!-- src/routes/callback/+page.svelte -->
<script>
  import { onMount } from 'svelte';
  import { handleCallback } from '$lib/casdoor';
  import { goto } from '$app/navigation';

  onMount(async () => {
    try {
      // This reads the state from localStorage written by signinRedirect()
      await handleCallback();
      goto('/'); // Redirect to home
    } catch (err) {
      console.error('Callback error:', err);
      alert('Login failed: ' + err.message);
    }
  });
</script>

<p>Redirecting...</p>
