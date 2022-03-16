<script>
  import ProjectItem from "../components/ProjectItem.svelte";
  import "aos/dist/aos.css";
</script>

<div id="Projects">
  <h2 class="subtitle">
    <span class="colorText">My Projects</span>
  </h2>
  <br />
  <ProjectItem />
  <a target="_blank" href="https://github.com/PitMac" class="btn moreProjects">
    More projects...
  </a>
</div>

<style>
  #Projects {
    display: flex;
    padding-top: 40px;
    flex-direction: column;
    height: auto;
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
