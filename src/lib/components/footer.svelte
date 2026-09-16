<footer>
  <div id="footer-content-container">
    <section class="footer-section">
        <b>Contact</b><br />
        Een <a href="/contact">vraag</a> stellen en/of contact opnemen kan <a href="/contact">hier</a>!
    </section>

    <span class="vertical-divider"></span>
    <div style="background-color:red;"></div>
    <hr>

    <section class="footer-section">
        <b>Auteursrecht</b><br />
        Copyright 2026<br />
        Door Maurits van Zoelen<br />
        Alle rechten voorbehouden
    </section>

    <span class="vertical-divider"></span>
    <div style="background-color:red;"></div>
    <hr>

    <section class="footer-section">
      <b>Realisatie</b>
      <p>Realisatie met behulp van <a href="https://svelte.dev">Sveltekit</a></p>
    </section>
  </div>
</footer>

<style>
  footer {
    display: flex;
    justify-content: center; /* aligns text at bottom */
    align-items: center;
    text-align: center;
    align-self: center;

    width: 70vw;
    margin-top: auto; /* make footer stick to bottom when there is a lack of content*/
  }

  #footer-content-container {
    display: flex;
    justify-content: center; /* aligns text at bottom */
    align-items: center;
    text-align: center;
    align-self: center;

    width: 100%;
    margin-bottom: 2rem;
    background: linear-gradient(
      90deg,
      transparent,
      rgb(var(--bg) / 0.8) 20%,
      rgb(var(--bg) / 0.8) 80%,
      transparent
    );

    border-radius: 20% / 8%;
    border-top: 0.2rem solid black;
    border-bottom: 0.2rem solid black;
  }

  .footer-section {
    width: 100%;
    padding: 2rem;
  }

  .vertical-divider {
    display: inline-block; /* Flow with inline content */
    border-left: 1px solid var(--cyan-darker); /* Thin gray line */
    border-right: 1px solid var(--cyan-darker); /* Thin gray line */
    margin: 0 0.5rem; /* Space around the line */
    vertical-align: middle; /* Align with text */
    height: 80%;
  }


  hr {
    width: 80%;
    align-self: center;
    background-color: black;
    border: 1px solid var(--cyan-darker)
  }

    /* mobile */
    @media only screen and (max-width: 600px) {
      #footer-content-container {
        flex-direction: column;
        border-radius: 20% / 5%;
      }
      hr {
        display: block;
      }
      .vertical-divider {
        display: none;
      }
    }

    /* desktop */
    @media only screen and (min-width: 601px) {
      #footer-content-container {
        flex-direction: row;
      }
      hr {
        display: none;
      }
      .vertical-divider {
        display: inline-block;
      }
    }
</style>
