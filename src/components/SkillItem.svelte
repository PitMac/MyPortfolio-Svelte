<script>
  let Flutter = "/assets/skills/flutter.svg";
  let React = "/assets/skills/react.svg";
  let Node = "/assets/skills/node.svg";
  let SQL = "/assets/skills/sql.svg";
  let Git = "/assets/skills/git.svg";
  let Svelte = "/assets/skills/svelte.svg";
  const skills = [
    {
      src: React,
      alt: "React",
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
      src: SQL,
      alt: "SQL",
    },
    {
      src: Git,
      alt: "Git",
    },
  ];
</script>

<ul class="skillSection">
  {#each skills as skill}
    <li class="skillItem">
      <img title={skill.alt} class="skillImg" src={skill.src} alt={skill.alt} />
      <p class="skillName">{skill.alt}</p>
    </li>
  {/each}
</ul>

<style>
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
