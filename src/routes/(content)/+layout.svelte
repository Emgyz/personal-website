<script>
    let { children } = $props();
</script>

<div class="page-container">
    {@render children()}
</div>

<style>
    .page-container {
        display: flex;
        flex-direction: column;
        height: 100vh;
    }
</style>
