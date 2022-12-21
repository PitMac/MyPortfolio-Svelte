<script>
  export let title;
</script>

<header class="header">
  <a href="javascript:history.back()">
    <i class="fa-sharp fa-solid fa-circle-left fa-2x" />
  </a>
  <h1>{title}</h1>
</header>
<hr />

<style>
  .header {
    color: white;
    width: 80vw;
    margin: auto;
    margin-top: 20px;
    display: flex;
    align-items: center;
  }
  .fa-sharp {
    margin: 0px 10px;
    color: var(--secondary-color);
  }
  .fa-sharp:hover {
    margin-right: 10px;
    transition: all 1s;
    color: var(--hover-color);
  }
</style>
