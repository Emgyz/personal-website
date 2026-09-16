<script lang="ts">
  let { minWidth = '120px', maxColumns, children } = $props();
</script>

<div class="grid" style={`--min-width: ${minWidth}; ${maxColumns !== undefined ? `--max-columns: ${maxColumns};` : ''}`}>
  {@render children()}
</div>

<style>
    .grid {
        display: grid;
        grid-template-columns: repeat(var(--max-columns, auto-fit), minmax(var(--min-width), 1fr));
        justify-content: center;
        margin: 1em;
        gap: 1rem;
    }
</style>