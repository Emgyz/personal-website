<script lang="ts">
	let { children } = $props();
    import Background from "../../lib/components/bg.svelte"
    import Footer from "$lib/components/footer.svelte";
    import Nav from "$lib/components/nav.svelte";
</script>

<Background></Background>

<div class="page-container">
    <div class="glowing-border border wrapper-looks">
        <Nav></Nav>
        <div class="wrapper-functionality">
            {@render children()}
        </div>
    </div>

    <Footer />
</div>


<style>

    .wrapper-looks {
        width: clamp(30rem, 75vw, 50vw);
        align-self: center;
        
        
        margin: 5rem;
        backdrop-filter: blur(0.5rem);
        background-color: rgb(var(--bg-secondary) / 0.4);
    }
    .wrapper-functionality {
        display: flex;
        flex-direction: column;
        gap: 1rem;
        padding-inline: 7vw;
        text-align: center;
    }

    @media (max-width: 479px)  {
        .wrapper-looks {
            width: 95vw;
            margin: 0;
            border-radius: 0;
            border: transparent;
            background-color: rgb(var(--bg-secondary) / 0.001);
        }
    }
</style>