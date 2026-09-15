<script lang="ts">
	import favicon from '$lib/assets/icons/logo.svg';
	let { children } = $props();

	// global styles
    import '../app.css'; 
</script>

<svelte:head>
	<link rel="icon" href={favicon} />
</svelte:head>

{@render children()}