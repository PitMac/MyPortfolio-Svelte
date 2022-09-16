<script>
  // Tech
  let Flutter = "/assets/skills/flutter.svg";
  let React = "/assets/skills/react.svg";
  let Node = "/assets/skills/node.svg";
  let Svelte = "/assets/skills/svelte.svg";
  let Tauri = "/assets/skills/tauri.svg";

  // Languages
  let Javascript = "/assets/skills/languages/javascript.svg";
  let Dart = "/assets/skills/languages/dart.svg";
  let Typescript = "/assets/skills/languages/typescript.svg";
  let SQL = "/assets/skills/languages/sql.svg";
  let HTML = "/assets/skills/languages/html.svg";
  let CSS = "/assets/skills/languages/css.svg";

  // Tools
  let Git = "/assets/skills/tools/git.svg";
  let Postgres = "/assets/skills/tools/postgresql.svg";
  let Figma = "/assets/skills/tools/figma.svg";
  let Postman = "/assets/skills/tools/postman.svg";
  let MySQL = "/assets/skills/tools/mysql.svg";

  const sections = ["Technologies", "Languages", "Tools"];
  let selectedSec = "Technologies";

  const changeSection = (selected) => {
    selectedSec = selected;
  };

  const technologies = [
    {
      src: React,
      alt: "ReactJS",
    },
    {
      src: Flutter,
      alt: "Flutter",
    },
    {
      src: Svelte,
      alt: "Svelte",
    },
    {
      src: Node,
      alt: "Node",
    },
    {
      src: Tauri,
      alt: "Tauri",
    },
  ];
  const languages = [
    {
      src: Javascript,
      alt: "Javascript",
    },
    {
      src: Dart,
      alt: "Dart",
    },
    {
      src: Typescript,
      alt: "Typescript",
    },
    {
      src: HTML,
      alt: "HTML",
    },
    {
      src: CSS,
      alt: "CSS",
    },
    {
      src: SQL,
      alt: "SQL",
    },
  ];

  const tools = [
    {
      src: Git,
      alt: "Git",
    },
    {
      src: Postgres,
      alt: "Postgres",
    },
    {
      src: MySQL,
      alt: "MySQL",
    },
    {
      src: Figma,
      alt: "Figma",
    },
    {
      src: Postman,
      alt: "Postman",
    },
  ];
</script>

<ul class="sectionNavigation">
  {#each sections as section}
    <li
      on:click={() => changeSection(section)}
      class={`sectionItem${selectedSec === section ? " active" : ""}`}
    >
      {section}
    </li>
  {/each}
</ul>
{#if selectedSec === "Technologies"}
  <ul data-aos="zoom-in-right" class="skillSection">
    {#each technologies as technology}
      <li class="skillItem">
        <img
          title={technology.alt}
          class="skillImg"
          src={technology.src}
          alt={technology.alt}
        />
        <p class="skillName">{technology.alt}</p>
      </li>
    {/each}
  </ul>
{:else if selectedSec === "Languages"}
  <ul data-aos="zoom-in" class="skillSection">
    {#each languages as language}
      <li class="skillItem">
        <img
          title={language.alt}
          class="skillImg"
          src={language.src}
          alt={language.alt}
        />
        <p class="skillName">{language.alt}</p>
      </li>
    {/each}
  </ul>
{:else}
  <ul data-aos="zoom-in-left" class="skillSection">
    {#each tools as tool}
      <li class="skillItem">
        <img title={tool.alt} class="skillImg" src={tool.src} alt={tool.alt} />
        <p class="skillName">{tool.alt}</p>
      </li>
    {/each}
  </ul>
{/if}

<style>
  .sectionNavigation {
    display: flex;
    flex-wrap: wrap;
    margin-top: 10px;
  }
  .sectionItem {
    color: var(--secondary-color);
    list-style: none;
    padding-right: 15px;
    cursor: pointer;
    font-weight: bold;
  }
  .active {
    color: aliceblue;
  }
  .skillSection {
    display: flex;
    flex-wrap: wrap;
    margin-top: 10px;
  }
  .skillItem {
    display: flex;
    flex-direction: row;
    align-items: center;
    color: white;
    border: 1px solid var(--bg-color);
    border-radius: 50px;
    padding: 7px;
    margin: 5px 5px 0 0;
  }

  .skillImg {
    height: 30px;
    margin: 0px 5px;
  }

  .skillName {
    padding-right: 5px;
  }

  @media (max-width: 1305px) {
    .sectionNavigation {
      padding: 0 15px;
      justify-content: center;
    }
    .skillSection {
      justify-content: center;
    }
  }
  @media (max-width: 685px) {
    .skillImg {
      height: 30px;
    }
  }
</style>
