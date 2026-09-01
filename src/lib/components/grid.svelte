<script>
  let { minWidth = '120px', children } = $props();
</script>

<div class="grid" style={`--min-width: ${minWidth}`}>
  {@render children()}
</div>

<style>
    .grid {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(var(--min-width), 1fr));
        justify-content: center;
        
        border: 5px red;
        margin: 1em;
        gap: 1rem;
    }
</style>