<script>
  import Header from "../../components/Header.svelte";
  import BackgroundEffect from "../../components/BackgroundEffect.svelte";
  import ProjectList from "../../components/ProjectList.svelte";
</script>

<BackgroundEffect />
<div class="container">
  <Header title="Projects" />
  <section class="list">
    <ProjectList limit={false} />
  </section>
</div>

<style>
  .list {
    width: 100%;
    align-items: center;
  }
</style>
