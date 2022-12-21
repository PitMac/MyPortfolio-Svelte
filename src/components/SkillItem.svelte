<script>
  export let skill;
</script>

<li class="skillItem">
  <img title={skill.alt} class="skillImg" src={skill.src} alt={skill.alt} />
  <p class="skillName">{skill.alt}</p>
</li>

<style>
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
  @media (max-width: 685px) {
    .skillImg {
      height: 30px;
    }
  }
</style>
