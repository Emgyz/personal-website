<script>
    import logo from "$lib/assets/icons/logo.svg"
</script>

<div id="nav">
    <img id="nav-logo" alt="logo" src={logo}>
    <div id="nav-links">
        <a href="/cv">CV</a>
        <a href="/over-mij">Over mij</a> <!-- + ambitites-->
        <a href="/skills">Skills</a>
        <a href="/contact">Contact</a>
    </div>
</div>
<hr>

<style>
    #nav {
        padding-top: 2rem;
        padding-bottom: 2rem;
        display: flex;
        justify-content: space-between;
        width: 82%;
    }

    #nav #nav-logo {
        fill: rgb(var(--orange));
    }



</style>