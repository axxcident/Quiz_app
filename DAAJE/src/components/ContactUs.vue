<template>
    <h1>Our Developers</h1>
    <div class="contact-us">
        <div class="contact-block">
            <h3>Johan Hellberg</h3>
            <a
                href="https://www.linkedin.com/in/johan-hellberg-805078167/"
                class="linkedin-button"
                >LinkedIn</a
            >
        </div>
        <div class="contact-block">
            <h3>Elis Nilsén</h3>
            <a
                href="https://www.linkedin.com/in/elis-nilz%C3%A9n-78526b19b/"
                class="linkedin-button"
                >LinkedIn</a
            >
        </div>
        <div class="contact-block">
            <h3>Damir Dervovic</h3>
            <a
                href="https://www.linkedin.com/in/damir-dervovic-7265a3210/"
                class="linkedin-button"
                >LinkedIn</a
            >
        </div>
        <div class="contact-block">
            <h3>Daniel Naseri</h3>
            <a
                href="https://www.linkedin.com/in/daniel-naseri-899933197/"
                class="linkedin-button"
                >LinkedIn</a
            >
        </div>
        <div class="contact-block">
            <h3>Jack Nyberg</h3>
            <a
                href="https://www.linkedin.com/in/jack-nyberg-39319424a/"
                class="linkedin-button"
                >LinkedIn</a
            >
        </div>
    </div>
</template>

<style>
    .contact-us {
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;
        margin: 0 auto;
        max-width: 960px;
        padding: 30px;
        margin-top: 1rem;
        color: #ffffff;
        border: solid white;
        border-radius: 2rem;
        background-color: black;
    }

    .contact-block {
        margin: 0 20px 20px;
        text-align: center;
        width: 10%;
    }

    h3 {
        font-size: 24px;
        margin-bottom: 10px;
    }

    p {
        font-size: 18px;
        margin-bottom: 10px;
    }
    h1 {
        margin-left: auto;
        margin-right: auto;
        text-align: center;
        margin-top: 2rem;
        color: #ffffff;
        margin-bottom: 2rem;
    }
    a {
        text-decoration: none;
    }
    a:hover {
        color: blueviolet;
    }

    .linkedin-button {
        display: inline-block;
        padding: 10px 20px;
        background-color: #fff;
        color: #6b38c9;
        border-radius: 30px;
        border: 2px solid #6b38c9;
        text-decoration: none;
        font-size: 16px;
        font-weight: bold;
        text-transform: uppercase;
        transition: background-color 0.3s ease-in-out, color 0.3s ease-in-out;
    }

    .linkedin-button:hover {
        background-color: #6b38c9;
        color: #fff;
        cursor: pointer;
    }
</style>
