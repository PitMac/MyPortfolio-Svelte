<script>
  import { projects } from "../utils/data";
  import { Link } from "svelte-routing";
  export let limit;
  let projectsS = projects;
  if (limit) {
    projectsS = projects.slice(0, 6);
  }
</script>

<ul class="projects">
  {#each projectsS as project}
    <li>
      <div class="projectItem">
        <Link to="projects/{project.alt.replace(/\s/g, '-').toLowerCase()}">
          <img
            class="projectImg"
            decoding="async"
            loading="lazy"
            src={project.src}
            alt={project.alt}
          />
          <br />
          <h2>{project.alt}</h2>
        </Link>
      </div>
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
    width: 80vw;
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
    transition: all 1s;
    background-color: var(--primary-color);
  }

  .projectItem:hover {
    color: var(--secondary-color);
    border: 1px solid var(--secondary-color);
  }

  .projectImg {
    width: 21vw;
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
