<script>
  import SkillList from "./../components/SkillList.svelte";
  import Photo from "../../public/assets/MyPhoto.webp";
  import "aos/dist/aos.css";
</script>

<div id="About" class="about">
  <section class="aboutSection">
    <h1 class="subtitle ab">
      <span class="colorText">About me</span>
    </h1>
    <p class="aboutMe">
      ✔️ My name is{" "}
      <span class="colorText">Jhon David Pita Macias</span>. I am a web
      developer and mobile development lover 📲. I have worked on my own
      projects with <span class="colorText">ReactJS</span>,{" "}
      <span class="colorText">Flutter</span>,{" "}
      <span class="colorText">Svelte</span>, and{" "}
      <span class="colorText">NodeJS</span>, etc. I am also prepared to learn{" "}
      <span class="colorText">new technologies</span> without any problem 👾. My
      favorite hobbies are listening to{" "}
      <span class="colorText">music</span> 🎶 and playing{" "}
      <span class="colorText">videogames</span> 🎮.
    </p>
    <h2 class="skillTitle">My Skills:</h2>
    <SkillList />
  </section>
  <img class="imgLogo2" src={Photo} alt="Logo" />
</div>

<style>
  .about {
    background-color: var(--primary-color);
    display: grid;
    grid-template-columns: 2fr 1fr;
    width: 100%;
    height: 100vh;
    align-items: center;
    padding: 10vh 12%;
  }

  .aboutSection {
    display: flex;
    flex-direction: column;
    width: 80%;
  }

  .aboutMe {
    font-size: 1.3rem;
    color: white;
    margin: 30px 0px;
  }

  .skillTitle {
    color: var(--secondary-color);
  }

  .imgLogo2 {
    width: 100%;
  }

  @media (max-width: 1305px) {
    .about {
      grid-template-columns: 1fr;
      width: 100%;
      height: 100vh;
      padding: 0 10%;
    }
    .aboutSection {
      width: 100%;
    }

    .skillTitle {
      text-align: center;
    }

    .imgLogo2 {
      padding: 30px 0px;
      justify-self: center;
      width: 60%;
    }
    @media (max-height: 800px) {
      .about {
        height: auto;
      }
    }
  }

  @media (max-width: 1100px) {
    .about {
      padding: 0 6%;
    }
    .ab {
      margin-top: 10px;
    }
  }

  @media (max-width: 685px) {
    .about {
      grid-template-rows: 1fr 1fr;
      padding: 0 3%;
    }
    .aboutMe {
      font-size: 1.2rem;
      margin: 10px 0px;
    }
    .imgLogo2 {
      justify-self: center;
      width: 70vw;
    }
    @media (max-height: 700px) {
      .about {
        grid-template-rows: 1fr 0.7fr;
      }
    }
  }
</style>
