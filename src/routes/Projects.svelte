<script>
  import "aos/dist/aos.css";
  import ProjectList from "../components/ProjectList.svelte";
  import { Link } from "svelte-routing";
</script>

<div id="Projects">
  <h2 class="subtitle">
    <span class="colorText">My Projects</span>
  </h2>
  <br />
  <ProjectList limit={true} />
  <div class="btn moreProjects">
    <Link to="/projects">More projects...</Link>
  </div>
</div>

<style>
  #Projects {
    display: flex;
    padding-top: 40px;
    flex-direction: column;
    height: auto;
  }

  :global(a) {
    text-decoration: none;
    color: var(--secondary-color);
  }

  .moreProjects {
    width: 300px;
    height: 60px;
    align-self: center;
    margin: 30px auto 10px auto;
  }

  @media (max-width: 1305px) {
    .moreProjects {
      margin: 20px auto 10px auto;
    }
  }
</style>
