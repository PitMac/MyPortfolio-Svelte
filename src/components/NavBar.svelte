<script>
  let navButton = false;
  const handleNav = () => {
    if (!navButton) {
      navButton = true;
    } else {
      navButton = false;
    }
  };
</script>

<nav class={`menu${navButton ? " show" : ""}`}>
  <ul class="menuNav">
    <li on:click={handleNav} class="navItem">
      <a class="menuItem" href="#Home"> Home </a>
    </li>
    <li on:click={handleNav} class="navItem">
      <a class="menuItem" href="#About"> About </a>
    </li>
    <li on:click={handleNav} class="navItem">
      <a class="menuItem" href="#Projects"> Projects </a>
    </li>
    <li on:click={handleNav} class="navItem">
      <a class="menuItem" href="#Contact"> Contact </a>
    </li>
  </ul>
</nav>
<button on:click={handleNav} class="hiddeMenu">
  {#if navButton}
    <i id="menuHide" class="fa-solid fa-xmark" />
  {:else}
    <i id="menuHide" class="fa-solid fa-bars" />
  {/if}
</button>

<style>
  .menu {
    margin-top: 40px;
    position: fixed;
    right: 20px;
    z-index: 1;
  }

  .hiddeMenu {
    background-color: var(--primary-color);
    border-radius: 10px;
    border: 2px solid var(--bg-color);
    color: var(--secondary-color);
    cursor: pointer;
    display: none;
    font-size: 15px;
    font-weight: bold;
    margin-top: 25px;
    padding: 15px 30px;
    position: fixed;
    right: 26px;
    z-index: 1;
  }

  .hiddeMenu:hover {
    border: 2px solid var(--secondary-color);
    color: var(--secondary-color);
  }

  .menuNav {
    display: flex;
  }

  .navItem {
    list-style-type: none;
    margin: 0px 15px;
  }

  .menuItem {
    font-weight: bold;
    text-decoration: none;
    border-radius: 10px;
    background-color: var(--primary-color);
    border: 2px solid var(--bg-color);
    color: var(--secondary-color);
    padding: 13px 50px;
    filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
    transition: border 1s;
  }

  .menuItem:hover {
    border: 2px solid var(--secondary-color);
    color: var(--secondary-color);
  }

  @media (max-width: 1305px) {
    .hiddeMenu {
      display: block;
    }

    .menu {
      align-items: center;
      border-radius: 30px;
      display: flex;
      justify-content: center;
      margin-top: 100px;
      padding: 0;
      right: -200px;
      transition: transform 0.5s ease-in-out;
    }

    .show {
      transform: translateX(-200px);
    }

    .menuNav {
      flex-direction: column;
    }

    .navItem {
      padding: 20px 10px;
    }

    .menuItem {
      display: block;
      background-color: var(--primary-color);
      border-radius: 10px;
      color: var(--secondary-color);
      padding: 15px 50px;
      text-align: center;
    }
  }
</style>
