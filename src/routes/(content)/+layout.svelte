<script>
    import Nav from "$lib/components/nav.svelte";
    let { children } = $props();
</script>

<div class="page-container">
    <Nav></Nav>

    {@render children()}
</div>

<style>
    .page-container {
        display: flex;
        flex-direction: column;
        height: 100vh;
    }
</style>
