<script>
    let { minWidth = "250px", children } = $props();
</script>

<div class="card">
    {@render children()}
</div>

<style>
    .card {
        text-align: center;
        aspect-ratio: 1;
        width: 100%;
        min-height: 0;
        overflow: hidden;

        display: flex;
        flex-direction: column;
        gap: 1rem;

        padding: 1rem;

        background-color: rgb(var(--bg));
        border-radius: 0.5rem;
    }

    .card:hover {
        scale: 1.02;
    }
</style>
