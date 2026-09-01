<script lang="ts">
    import logo from "$lib/assets/logo.svg"
    import close from "$lib/assets/close.svg"
    import menu from "$lib/assets/menu.svg"

    const closeButtonSrc = "./src/assets/close_24dp_E3E3E3_FILL0_wght600_GRAD0_opsz24.svg";
    const openButtonSrc = "./src/assets/menu_24dp_E3E3E3_FILL0_wght600_GRAD0_opsz24.svg";

    let nav: HTMLElement | null = null;

    let sideBarOpen = $state(false);
    function toggleSidebar() {
        sideBarOpen = !sideBarOpen;

        const horizontalLinks: HTMLElement | null | undefined = nav?.querySelector(".horizontal-links");

        if (sideBarOpen) {
           horizontalLinks?.style.setProperty('height', 'auto');

        } else {
            setTimeout(() => {
                // Wait 1 second before changing the padding of the
                // horizontal-links on mobile when closing the nav menu
                
                horizontalLinks?.style.setProperty('padding-block', '0rem');
            }, 1000);
        }
    }
</script>

<!-- make sure no content is overlapped by the nav bar-->
<div id="nav-bar-filler"></div>

<nav class:open={sideBarOpen} bind:this={nav}>
    <div class="horizontal-container">
        <!--logo-->
        <a id="logo-link" href="/">
            <img src={logo} alt="logo" />
        </a>

        <!--links-->
        <div class="horizontal-links">

            <a class="nav-link" href="/"><svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="currentColor"><path d="M246.78-206.78H347V-453h266v246.22h100.22v-349.83L480-731.52 246.78-556.61v349.83Zm-106 106v-508.83L480-864.31 819.22-609.8v509.02H515.48v-254.7h-70.96v254.7H140.78ZM480-468.87Z"/></svg>Home</a>
            <a class="nav-link" href="/hub"><svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="currentColor"><path d="M231.6-142.48q-36.47 0-62.8-26.32-26.32-26.33-26.32-62.8 0-36.46 26.32-62.43Q195.13-320 231.6-320q36.46 0 62.43 25.97T320-231.6q0 36.47-25.97 62.8-25.97 26.32-62.43 26.32Zm248.48 0q-36.47 0-62.52-26.32-26.04-26.33-26.04-62.8 0-36.46 25.97-62.43T479.92-320q36.47 0 62.52 25.97 26.04 25.97 26.04 62.43 0 36.47-25.97 62.8-25.97 26.32-62.43 26.32Zm248.32 0q-36.46 0-62.43-26.32Q640-195.13 640-231.6q0-36.46 25.97-62.43T728.4-320q36.47 0 62.8 25.97 26.32 25.97 26.32 62.43 0 36.47-26.32 62.8-26.33 26.32-62.8 26.32ZM231.6-391.52q-36.47 0-62.8-25.97-26.32-25.97-26.32-62.43 0-36.47 26.32-62.52 26.33-26.04 62.8-26.04 36.46 0 62.43 25.97T320-480.08q0 36.47-25.97 62.52-25.97 26.04-62.43 26.04Zm248.48 0q-36.47 0-62.52-25.97-26.04-25.97-26.04-62.43 0-36.47 25.97-62.52 25.97-26.04 62.43-26.04 36.47 0 62.52 25.97 26.04 25.97 26.04 62.43 0 36.47-25.97 62.52-25.97 26.04-62.43 26.04Zm248.32 0q-36.46 0-62.43-25.97T640-479.92q0-36.47 25.97-62.52 25.97-26.04 62.43-26.04 36.47 0 62.8 25.97 26.32 25.97 26.32 62.43 0 36.47-26.32 62.52-26.33 26.04-62.8 26.04ZM231.6-640q-36.47 0-62.8-25.97-26.32-25.97-26.32-62.43 0-36.47 26.32-62.8 26.33-26.32 62.8-26.32 36.46 0 62.43 26.32Q320-764.87 320-728.4q0 36.46-25.97 62.43T231.6-640Zm248.48 0q-36.47 0-62.52-25.97-26.04-25.97-26.04-62.43 0-36.47 25.97-62.8 25.97-26.32 62.43-26.32 36.47 0 62.52 26.32 26.04 26.33 26.04 62.8 0 36.46-25.97 62.43T480.08-640Zm248.32 0q-36.46 0-62.43-25.97T640-728.4q0-36.47 25.97-62.8 25.97-26.32 62.43-26.32 36.47 0 62.8 26.32 26.32 26.33 26.32 62.8 0 36.46-26.32 62.43Q764.87-640 728.4-640Z"/></svg>Content</a>
            <a class="nav-link" href="/ik"><svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="currentColor"><path d="M478.87-22.48 351.52-150.39H206.78q-44.3 0-75.15-30.85-30.85-30.85-30.85-75.15v-546.44q0-44.3 30.85-75.15 30.85-30.85 75.15-30.85h546.44q44.3 0 75.15 30.85 30.85 30.85 30.85 75.15v546.44q0 44.3-30.85 75.15-30.85 30.85-75.15 30.85H606.78L478.87-22.48ZM206.78-313.7q54-50.17 122.11-78.13Q397-419.78 480-419.78q83 0 151.11 27.39 68.11 27.39 122.11 77.56v-488H206.78v489.13ZM480-478.3q60.26 0 102.39-42.13 42.13-42.14 42.13-102.4 0-60.26-42.13-102.11-42.13-41.84-102.39-41.84t-102.39 41.84q-42.13 41.85-42.13 102.11t42.13 102.4Q419.74-478.3 480-478.3ZM280-256.39h400v-6.05q-42-35-93-51.93T480-331.3q-56 0-107 16.93t-93 51.93v6.05Zm199.87-310.39q-23.17 0-39.26-16.34-16.09-16.34-16.09-39.67 0-23.34 16.22-39.43 16.22-16.08 39.39-16.08t39.26 16.22q16.09 16.22 16.09 39.39t-16.22 39.54q-16.22 16.37-39.39 16.37Zm.13 8.52Z"/></svg>Over mij</a>
            <a class="nav-link" href="/instellingen"><svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="currentColor"><path d="M353.61-60.78 336.48-195q-8.48-3.3-16.31-8.04-7.82-4.74-15.43-9.92l-124.65 52.83L53.13-380.65l107.52-81.39q-.43-4.74-.43-8.98v-17.96q0-4.24.43-8.98L53.13-579.35l126.96-219.39 125.78 52.26q7.61-5.17 15.09-9.63 7.47-4.46 15.52-7.76l17.13-135.35h252.78l17.13 135.35q8.48 3.3 16.31 7.76 7.82 4.46 15.43 9.63l124.65-52.26 126.96 219.39-108.09 81.39q.44 4.74.44 8.98v8.98q0 4.74-.28 8.98-.29 4.24-1.16 8.98l108.09 81.39-127.52 220.52-124.22-52.83q-7.61 5.18-15.09 9.92-7.47 4.74-15.52 8.04L606.39-60.78H353.61Zm92.61-106h66l14.56-104.87q31.57-8 59.48-23.79 27.91-15.78 49.91-40.04l98.44 41 32.22-57.82-84.31-63.87q5-15.13 7.57-31.2 2.56-16.06 2.56-32.63 0-16.57-2.56-32.63-2.57-16.07-7.57-31.2l85.44-63.87-33.35-57.82-97.87 42q-22-24.7-49.91-41.04-27.92-16.35-60.05-23.79l-13-104.87h-67.13l-12.87 104.31q-32.69 7.43-60.89 23.78-28.19 16.35-50.76 40.61l-97.3-41-32.79 57.82 83.74 62.31q-5 16.13-7.56 31.98-2.57 15.84-2.57 33.41 0 16.57 2.57 32.7 2.56 16.13 7.56 32.26l-83.74 62.74 32.79 57.82 97.3-41.43q22.57 24.13 51.04 40.47 28.48 16.35 60.61 24.35l12.44 104.31ZM480.3-340q58 0 99-41t41-99q0-58-41-99t-99-41q-58.43 0-99.21 41-40.79 41-40.79 99t40.79 99q40.78 41 99.21 41Zm-.3-140Z"/></svg>Instellingen</a>
        </div>

        <!--menu toggle-->
        <button
            id="toggle-button"
            onclick={toggleSidebar}
            aria-label="Toggle navigation"
        >
            <img
                src={sideBarOpen
                    ? close
                    : menu}
                alt="toggle button"
            />
        </button>
    </div>

    <div class="vertical-container wrapper-functionality">
        <!--
        <div class="grid-container">
            <div class="card">
                <h2>Testkaartje</h2>
                <p>Beschrijving van het testkaartje, duh..</p>
            </div>

            <div class="card">
                <h2>Testkaartje</h2>
                <p>Beschrijving van het testkaartje, duh..</p>
            </div>

            <div class="card">
                <h2>Testkaartje</h2>
                <p>Beschrijving van het testkaartje, duh..</p>
            </div>

            <div class="card">
                <h2>Testkaartje</h2>
                <p>Beschrijving van het testkaartje, duh..</p>
            </div>

            <div class="card">
                <h2>Testkaartje</h2>
                <p>Beschrijving van het testkaartje, duh..</p>
            </div>
        </div>
        -->
    </div>
</nav>



<style>
    :global(.nav-link):hover {
        color: #ff8c00df;
        transform: scale(1.05) rotate(1deg) translate(0.1em, 0.2em);
    }
    :global(#logo-link:hover, #toggle-button:hover) {
        transform: scale(1.3) rotate(4deg);
    }
    :global(#logo-link, #toggle-button) {
        display: flex;
        align-items: center;
        justify-content: center;
        padding: 1rem;
        height: var(--navbar-height);
        transition: transform 0.3s ease;
    }
    

    #nav-bar-filler {
        width: 100%;
        height: var(--navbar-height);
        flex-shrink: 0;
    }

    nav {
        position: fixed;
        background-image: linear-gradient(
            90deg,
            var(--cyan-darker),
            var(--cyan-lighter),
            var(--cyan-darker)
        );
        color: white;
        right: 0;

        width: 100%;
        max-width: 100%;
        min-height: var(--navbar-height);
        height: var(--navbar-height);
        overflow: hidden;

        z-index: 1000;
        border-bottom: 0.2rem solid var(--cyan-darker);

        transition:
            max-height 0.3s ease-in-out,
            height 0.3s ease-in-out,
            transform 0.3s ease-in-out;
    }
    nav:not(.open) {
        overflow-y: hidden;
    }

    .horizontal-container {
        width: 100%;
        min-height: var(--navbar-height);
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: flex-start;
        padding-bottom: 0rem;
    }

    .vertical-container {
        display: flex;
        flex-direction: column;
        gap: 1rem;
        width: 100%;
        margin-top: 1.5rem;

        /* transition visibility when opened/closed*/
        opacity: 1;
        visibility: visible;
        transition:
            opacity 0.3s ease-in-out,
            visibility 0.3s ease-in-out;
        transition-delay: 0.05s;
    }
    nav:not(.open) .vertical-container {
        opacity: 0; /* Make it invisible */
        visibility: hidden; /* Prevent interaction while hidden */
    }

    nav.open {
        height: 100vh;
        max-height: 100vh;
        overflow: auto;
        overflow-x: hidden;
    }

    .horizontal-links {
        display: flex;
        align-items: center;

        /* transition visibility when opened/closed*/
        opacity: 1;
        visibility: visible;
        transition:
            opacity 0.3s ease-in-out,
            visibility 0.3s ease-in-out;
        transition-delay: 0.04s;
        height: var(--navbar-height);
    }
    
    img {
        object-fit: scale-down;
    }

    :global(.nav-link) {
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 0.35em;

        color: #00614e;
        text-decoration: none;
        padding: 1rem;
        transition: transform 0.1s ease-in-out;
    }
    
    :global(.nav-link svg) {
        width: 1.5em;
        height: 1.5em;
    }
    
    

    /* mobile */
    @media only screen and (max-width: 650px) {
        .horizontal-links {
            flex-direction: column;
        }
        nav:not(.open) .horizontal-links {
            opacity: 0; /* Make it invisible */
            visibility: hidden; /* Prevent interaction while hidden */
        }
    }



    /*-- houdt de scrolbaarheid van de nav, zonder de zichtbare scrollbalk --*/
    nav {
        overflow: auto;
        overflow-x: hidden;
        scrollbar-width: none;       /* Firefox */
        -ms-overflow-style: none;    /* IE / Edge */
    }

    nav::-webkit-scrollbar {
        display: none;               /* Chrome, Safari, Opera */
    }

</style>