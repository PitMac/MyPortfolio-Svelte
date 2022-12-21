<script>
  export let copyEmail;
</script>

<hr />
<div id="Contact" class="contact">
  <a
    target="_blank"
    rel="noreferrer"
    href="https://www.linkedin.com/in/jhon-pita-macias-64362b217/"
    class="contactItem"
  >
    <i class="fa-brands fa-linkedin-in fa-2x" />
  </a>
  <a
    target="_blank"
    rel="noreferrer"
    href="https://www.facebook.com/jhondavid.pitamacias.7"
    class="contactItem"
  >
    <i class="fa-brands fa-facebook-f fa-2x" />
  </a>
  <button
    on:click={copyEmail}
    href="https://github.com/PitMac"
    class="contactItem"
  >
    <i class="fa-solid fa-at fa-2x" />
  </button>
  <a
    target="_blank"
    rel="noreferrer"
    href="https://github.com/PitMac"
    class="contactItem"
  >
    <i class="fa-brands fa-telegram fa-2x" />
  </a>
  <a
    target="_blank"
    rel="noreferrer"
    href="https://wa.link/nibap6"
    class="contactItem"
  >
    <i class="fa-brands fa-whatsapp fa-2x" />
  </a>
  <a
    target="_blank"
    rel="noreferrer"
    href="https://www.youtube.com/channel/UCJSIzpSUsxZYyJoHxYk_hLA"
    class="contactItem"
  >
    <i class="fa-brands fa-youtube fa-2x" />
  </a>
</div>

<style>
  .contact {
    width: 100%;
    display: grid;
    grid-template-columns: repeat(6, 1fr);
    padding: 20px 25%;
    background-color: var(--primary-color);
    padding-top: 30px;
  }

  .contact button {
    transition: border 1s;
    background-color: transparent;
    border: 2px solid var(--bg-color);
    cursor: pointer;
  }
  .contactItem {
    align-items: center;
    background-color: var(--primary-color);
    border-radius: 50%;
    border: 2px solid var(--bg-color);
    color: var(--secondary-color);
    display: flex;
    height: 70px;
    justify-content: center;
    margin: 30px auto;
    text-decoration: none;
    transition: border 1s;
    width: 70px;
  }

  .contactItem:hover {
    border: 2px solid var(--secondary-color);
    color: var(--secondary-color);
  }

  @media (max-width: 1100px) {
    .contact {
      padding: 0 15%;
    }
  }

  @media (max-width: 685px) {
    .contact {
      grid-template-columns: repeat(3, 1fr);

      padding: 0 10%;
    }
  }
</style>
