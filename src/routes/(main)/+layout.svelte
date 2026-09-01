<script lang="ts">
	let { children } = $props();
    import Background from "../../lib/components/bg.svelte"
    import Footer from "$lib/components/footer.svelte";
</script>

<Background></Background>

<div class="page-container">
    <div class="glowing-border border wrapper">
        {@render children()}
    </div>

    <Footer />
</div>


<style>

    .wrapper {
        display: flex;
        flex-direction: column;
        width: clamp(30rem, 75vw, 50vw);
        align-self: center;

        gap: 1rem;
        padding: 8vw;
        margin: 5rem;
        text-align: center;
        backdrop-filter: blur(0.5rem);
        background-color: rgb(var(--bg-secondary) / 0.4);
    }

    @media (max-width: 479px)  {
        .wrapper {
            width: 100vw;
            margin: 0;
            border-radius: 0;
            border: transparent;
            background-color: rgb(var(--bg-secondary) / 0.001);
        }
    }
</style>