<script lang="ts">
    import { sleep } from "../../utils/sleep";

    let role = $state("");

    const roles = ["een ICT student", "een game designer", "bugs aan het oplossen", "een aankomend software ontwikkelaar", "altijd aan het bouwen", "een techniek liefhebber"];

    const TYPING = {
        min: 90,
        max: 180,
        hesitationChance: 0.12,
        hesitationMin: 150,
        hesitationMax: 350,
        spacePauseMin: 180,
        spacePauseMax: 330
    };

    const DELETING = {
        min: 35,
        max: 70
    };

    const TIMING = {
        initialPause: 400,
        wordPause: 1800,
        nextWordPause: 250
    };

    function randomBetween(min: number, max: number) {
        return min + Math.random() * (max - min);
    }

    async function typeCharacter(character: string) {
        role += character;

        await sleep(
            randomBetween(TYPING.min, TYPING.max)
        );
    }

    async function maybeHesitate() {
        if (Math.random() < TYPING.hesitationChance) {
            await sleep(
                randomBetween(
                    TYPING.hesitationMin,
                    TYPING.hesitationMax
                )
            );
        }
    }

    async function typeWord(word: string) {
        for (const character of word) {
            await typeCharacter(character);

            await maybeHesitate();

            if (character === " ") {
                await sleep(
                    randomBetween(
                        TYPING.spacePauseMin,
                        TYPING.spacePauseMax
                    )
                );
            }
        }
    }

    async function deleteWord() {
        while (role.length > 0) {
            role = role.slice(0, -1);

            await sleep(
                randomBetween(DELETING.min, DELETING.max)
            );
        }
    }

    async function animateWord(word: string) {
        await typeWord(word);
        await sleep(TIMING.wordPause);
        await deleteWord();
        await sleep(TIMING.nextWordPause);
    }

    async function typewrite() {
        // Start completely empty
        role = "";

        // Give the page a moment before typing starts
        await sleep(TIMING.initialPause);

        let currentRole = 0;

        while (true) {
            await animateWord(roles[currentRole]);

            currentRole = (currentRole + 1) % roles.length;
        }
    }

    typewrite();
</script>

<span>{role}</span>