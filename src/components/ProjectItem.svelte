<script>
  let Ecovid = "/assets/projects/ecovid.webp";
  let FreeGames = "/assets/projects/freegamesapp.webp";
  let Anime = "/assets/projects/animeapp.webp";
  let DisneyC = "/assets/projects/disneyCharacters.webp";
  const projects = [
    {
      href: "https://github.com/PitMac/DisneyCharacters-React",
      src: DisneyC,
      alt: "Disney Characters",
    },
    {
      href: "https://github.com/PitMac/ECovid-App-Flutter",
      src: Ecovid,
      alt: "Ecovid App",
    },
    {
      href: "https://github.com/PitMac/ECovid-App-Flutter",
      src: Ecovid,
      alt: "Other Project",
    },
    {
      href: "https://github.com/PitMac/FreeGame-App-RN",
      src: FreeGames,
      alt: "FreeGamesApp",
    },
    {
      href: "https://github.com/PitMac/ECovid-App-Flutter",
      src: Ecovid,
      alt: "Disney Charactes",
    },
    {
      href: "https://github.com/PitMac/Anime-App-Flutter",
      src: Anime,
      alt: "AnimeApp",
    },
  ];
</script>

<ul class="projects">
  {#each projects as project}
    <li>
      <a
        class="projectItem"
        target="_blank"
        href={project.href}
        data-aos="fade-up"
      >
        <img
          class="projectImg"
          decoding="async"
          loading="lazy"
          src={project.src}
          alt={project.alt}
        />
        <br />
        <h2>{project.alt}</h2>
      </a>
    </li>
  {/each}
</ul>

<style>
  li {
    list-style: none;
  }
  .projects {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    justify-items: center;
    align-items: center;
    width: 80%;
    height: 75%;
    margin: auto;
  }

  .projectItem {
    border-radius: 20px;
    border: 1px solid var(--bg-color);
    color: var(--text-color);
    cursor: pointer;
    display: flex;
    flex-direction: column;
    margin: 10px 0px;
    padding: 20px 20px;
    text-align: center;
    text-decoration: none;
  }

  .projectItem:hover {
    background-color: #0d304d36;
    border: 1px solid var(--secondary-color);
  }

  .projectImg {
    width: 22vw;
    border-radius: 20px;
  }

  @media (max-width: 1305px) {
    .projects {
      grid-template-columns: 1fr 1fr;
    }
    .projectImg {
      width: 30vw;
    }
  }

  @media (max-width: 1100px) {
    .projects {
      grid-template-columns: 1fr 1fr;
      width: 80%;
    }
  }

  @media (max-width: 750px) {
    .projects {
      grid-template-columns: 1fr;
      width: 100%;
    }
    .projectImg {
      width: auto;
      height: 200px;
    }
  }
</style>
