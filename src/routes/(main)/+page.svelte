<script lang="ts">
    import Grid from "$lib/components/grid.svelte";
    import GridCard from "$lib/components/gridCard.svelte";
    
    import pfp from "$lib/assets/me/me_1.jpg";

    import svelteLogo from "$lib/assets/logos/svelte.png"
    import cssLogo from "$lib/assets/logos/css.png"
    import htmlLogo from "$lib/assets/logos/html.png"
    import jsLogo from "$lib/assets/logos/js.png"

    import luaLogo from "$lib/assets/logos/lua.png"
    import mysqlLogo from "$lib/assets/logos/mysql.png"
    import pythonLogo from "$lib/assets/logos/python.png"
    import pandasLogo from "$lib/assets/logos/pandas.png"

    import rustLogo from "$lib/assets/logos/rust.png"
    import kubernetesLogo from "$lib/assets/logos/kubernetes.png"
    import dockerLogo from "$lib/assets/logos/docker.png"
    import redisLogo from "$lib/assets/logos/redis.png"
    import postgresqlLogo from "$lib/assets/logos/postgresql.png"
    import gitLogo from "$lib/assets/logos/git.png"
    import webassemblyLogo from "$lib/assets/logos/webassembly.png"

    import { sleep } from "../../utils/sleep";

    import RoleReader from "$lib/components/roleReader.svelte";
</script>


<img id="my-head" class="glowing-border border" alt="profielfoto" src={pfp} />

<div id="home-page-hero-text">
    <h1 id="role">Hoi, ik ben Maurits.<br>Ik ben <RoleReader></RoleReader>!</h1>
</div>

<Grid>
    <GridCard>
        <div class="card-image-wrapper"><img alt="HTML logo" src={htmlLogo} class="card-image" /></div>
        <div class="card-text">HTML</div>
    </GridCard>
    <GridCard>
        <div class="card-image-wrapper"><img alt="CSS logo" src={cssLogo} class="card-image" /></div>
        <div class="card-text">CSS</div>
    </GridCard>
    <GridCard>
        <div class="card-image-wrapper"><img alt="Javascript logo" src={jsLogo} class="card-image" /></div>
        <div class="card-text">Javascript</div>
    </GridCard>
    <GridCard>
        <div class="card-image-wrapper"><img alt="svelte logo" src={svelteLogo} class="card-image" /></div>
        <div class="card-text">Svelte(kit)</div>
    </GridCard>
    <GridCard>
        <div class="card-image-wrapper"><img alt="Lua logo" src={luaLogo} class="card-image" /></div>
        <div class="card-text">Lua(u)</div>
    </GridCard>
    <GridCard>
        <div class="card-image-wrapper"><img alt="Python logo" src={pythonLogo} class="card-image" /></div>
        <div class="card-text">Python</div>
    </GridCard>
    <GridCard>
        <div class="card-image-wrapper"><img alt="Pandas logo" src={pandasLogo} class="card-image" /></div>
        <div class="card-text">Pandas</div>
    </GridCard>
    <GridCard>
        <div class="card-image-wrapper"><img alt="MySQL logo" src={mysqlLogo} class="card-image" /></div>
        <div class="card-text">MySQL</div>
    </GridCard>
</Grid>

<p>
    verder een goede dosis analytisch vermogen en algoritmisch denken. Ook vind ik data erg interessant.
    Puzzelen met entiteitsrelatiediagrammen om alles op een zo logische manier in een database te krijgen.
</p>

<p>
    Wat waarschijnlijk opvalt is dat er geen low level programmeertaal bij staat.
    Python en Lua zijn een begin, maar geïnterpreteerde talen hebben hun limieten.<br>
    Om programma's met beter prestaties te schrijven, leer ik nu Rust.
    Bijkomend voordeel is dat het compileren een .exe bestand uitspuugt
    dat overal uitgevoerd kan worden, waardoor ik mijn creaties met iedereen kan delen!
</p>

<h2>Nog niet onder de knie, maar wel in geïnteresseerd en/of mee bezig:</h2>
<Grid>
    <GridCard>
        <div class="card-image-wrapper"><img alt="Rust logo" src={rustLogo} class="card-image" /></div>
        <div class="card-text">Rust</div>
    </GridCard>
    <GridCard>
        <div class="card-image-wrapper"><img alt="Git logo" src={gitLogo} class="card-image" /></div>
        <div class="card-text">Git</div>
    </GridCard>
</Grid>

<h2>Voor de toekomst:</h2>
<Grid>
    <GridCard>
        <div class="card-image-wrapper"><img alt="Redis logo" src={redisLogo} class="card-image" /></div>
        <div class="card-text">Redis</div>
    </GridCard>
    <GridCard>
        <div class="card-image-wrapper"><img alt="PostgreSQL logo" src={postgresqlLogo} class="card-image" /></div>
        <div class="card-text">PostgreSQL</div>
    </GridCard>
    <GridCard>
        <div class="card-image-wrapper"><img alt="Webassembly logo" src={webassemblyLogo} class="card-image" /></div>
        <div class="card-text">Webassembly</div>
    </GridCard>
    <GridCard>
        <div class="card-image-wrapper"><img alt="Docker logo" src={dockerLogo} class="card-image" /></div>
        <div class="card-text">Docker</div>
    </GridCard>
    <GridCard>
        <div class="card-image-wrapper"><img alt="Kubernetes logo" src={kubernetesLogo} class="card-image" /></div>
        <div class="card-text">Kubernetes</div>
    </GridCard>
</Grid>

<br />
<h1>1. Over mij</h1>
<p>
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas distinctio
    asperiores possimus.
</p>
<b>Sterke punten:</b>
<ul>
    <li>Analytisch vermogen</li>
    <li>Algoritmisch denken</li>
    <li>Betrouwbaarheid</li>
    <li>Humor</li>
</ul>
<b>Zwakke punten</b>
<ul>
    <li>Weinig werkervaring</li>
    <li>Perfectionisme</li>
    <li>Scope creep</li>
    <li>Introvert</li>
</ul>

<br />
<h1>2. Skills</h1>
<p>
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam dolorum
    optio quam consequuntur nostrum nihil distinctio quia suscipit maiores eos
    excepturi, expedita asperiores qui odio corporis ipsa placeat nam
    voluptatum!
</p>
<div class="grid-container">
    <a class="button border" href="/skills">HTML</a>
    <a class="button border" href="/cv">CSS</a>
    <a class="button border" href="/cv">JS</a>
    <a class="button border" href="/contact">Lua</a>
</div>

<br />
<h1>3. CV</h1>
<p>
    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Omnis dolore unde
    neque magnam ipsum eligendi, voluptates qui esse corporis cumque repudiandae
    laboriosam eos corrupti dolor commodi, saepe explicabo sequi iure.
</p>
<h2>3.1 Educatie</h2>
<p>
    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Cumque laboriosam
    facere quia quae, cum, ad aliquam temporibus et voluptatum ratione
    doloribus? Excepturi voluptatibus nam, sit similique tempora enim eum
    ratione.
</p>
<h2>3.2 Carriëre</h2>
<p>
    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Deleniti nisi hic
    doloribus quidem non inventore consequuntur saepe temporibus asperiores
    dicta itaque perspiciatis labore delectus illum, reiciendis enim praesentium
    minus illo?
</p>

<h2>Ambities</h2>
<p>[make a banger video game]</p>

<br />
<h1>4. Contact</h1>
<p>
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis
    voluptates veniam nesciunt inventore, eligendi corporis nobis, perferendis
    culpa possimus, voluptatum voluptate asperiores quos reprehenderit. Dicta
    iusto eaque dolorem aut corporis?
</p>

<style>
    .card-image-wrapper {
        display: flex;
        justify-content: center;
        min-height: 0;
    }

    .card-image {
        height: 100%;
        aspect-ratio: 1;
        align-self: center;
        object-fit: contain;
        display: block;
        border-radius: rem;
    }

    #my-head {
        margin-top: 5vh;
        max-height: 35vh;
        border-radius: 50%;
        align-self: center;
    }

    .button {
        flex: 1;
        text-decoration: none;
        padding: 1rem;

        text-align: center;
        font-family: Impact, Haettenschweiler, "Arial Narrow Bold", sans-serif;
        font-size: 1.2rem;
    }
    
    ul {
        text-align: start;
    }

    .card-image {
        overflow: hidden;
    }

    #home-page-hero-text {
        width: 80%;
        align-self: center;
    }
    #role {
        line-height: 1.6;
        min-height: calc(3 * 1.6em);
    }

    @media (max-width: 479px) {
        #my-head {
            margin-top: 20vh;
        }
    }
</style>
