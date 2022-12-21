<script>
  import { projects } from "../../utils/data";
  import BackgroundEffect from "../../components/BackgroundEffect.svelte";
  import Header from "../../components/Header.svelte";
  import SkillItem from "../../components/SkillItem.svelte";
  import { onMount } from "svelte";

  export let name;

  function getProject() {
    return projects.find(
      (project) => project.alt.replace(/\s/g, "-").toLowerCase() == name
    );
  }

  const project = getProject();
</script>

<BackgroundEffect />
<Header title={project.alt} />
<div class="container">
  <section class="leftSection">
    <img class="imgProject" src={project.src} alt={project.alt} />
    <section class="techSection">
      {#each project.technologies as tech}
        <SkillItem skill={tech} />
      {/each}
    </section>
  </section>
  <section class="rightSection">
    <div>
      <h2>{project.alt}</h2>
      <p class="readme">{project.readme}</p>
    </div>
    <div class="links">
      <p class="link">GitHub: <a href={project.href}> {project.href}</a></p>
      {#if project.page}
        <p class="link">
          Web: <a href={project.page}> {project.page}</a>
        </p>
      {/if}
    </div>
  </section>
</div>

<style>
  .container {
    display: grid;
    grid-auto-flow: column;
    grid-template-columns: 1fr 2fr;
    gap: 20px;
    width: 80vw;
    margin: 20px auto;
    color: white;
  }

  .link {
    display: flex;
    flex-direction: column;
    font-weight: 700;
    font-size: 1.1rem;
    /* text-align: right; */
  }
  .link > a {
    color: var(--secondary-color);
    font-weight: 500;
    font-style: none;
    text-decoration: none;
  }
  .link > a:hover {
    color: var(--hover-color);
    text-decoration: underline;
  }

  .imgProject {
    width: 500px;
    border: 2px solid var(--bg-color);
    border-radius: 10px;
  }

  .rightSection {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    border: 1px solid var(--bg-color);
    border-radius: 10px;
    padding: 20px;
  }

  .techSection {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
  }

  .readme {
    font-size: 1.5rem;
  }
  @media (max-width: 970px) {
    .container {
      grid-auto-flow: row;
      grid-template-columns: none;
    }
    .imgProject {
      width: 400px;
    }
    .leftSection {
      display: flex;
      align-items: center;
      flex-direction: column;
    }
  }
  @media (max-width: 600px) {
    .container {
      grid-auto-flow: row;
    }
    .techSection {
      display: flex;
      align-items: center;
      justify-content: center;
    }
    .imgProject {
      width: 300px;
    }
    .leftSection {
      display: flex;
      align-items: center;
      flex-direction: column;
    }
    .rightSection {
      padding: 5px;
    }
  }
</style>
