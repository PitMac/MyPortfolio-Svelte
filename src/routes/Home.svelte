<script>
  // @ts-nocheck
  let Ellipse = "assets/Ellipse1.png";
  let CV = "../../assets/CV.pdf";
  import "aos/dist/aos.css";
  import Typewriter from "svelte-typewriter";
</script>

<img class="ellipse" src={Ellipse} alt="ellipse" />
<div class="home" id="Home">
  <img
    data-aos="fade-down-right"
    class="imgLogo"
    src="https://avatars.githubusercontent.com/u/81378436?v=4"
    alt="Logo"
  />
  <div class="homeSection">
    <section>
      <Typewriter interval={150} keepCursorOnFinish>
        <h1 class="title">
          Hi, I'm <span class="colorText">Jhon PitMac</span>
        </h1>
      </Typewriter>

      <h3 class="subtitle">
        A <span class="colorText">FullStack</span> Developer
      </h3>
      <section class="buttonsSection">
        <a href={CV} class="btn" download="CV"> CV </a>
        <a target="_blank" href="https://github.com/PitMac" class="btn">
          GITHUB
        </a>
      </section>
    </section>
  </div>
</div>

<style>
  .home {
    display: grid;
    grid-template-columns: 1fr 2fr;
    margin: auto;
    width: 80%;
    height: 100vh;
  }

  .ellipse {
    position: absolute;
    z-index: -1;
    height: 100vh;
  }

  .homeSection {
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
    --cursor-color: var(--secondary-color);
    --cursor-width: 20px;
  }

  .imgLogo {
    align-self: center;
    display: flex;
  }

  .buttonsSection {
    margin-top: 20px;
    display: flex;
    justify-content: center;
  }

  @media (max-width: 1305px) {
    .home {
      grid-template-columns: 1fr;
    }

    @media (max-height: 800px) {
      #Home {
        height: auto;
      }
    }

    .imgLogo {
      padding-top: 30px;
      justify-self: center;
    }
  }

  @media (max-width: 1100px) {
    .ellipse {
      display: none;
    }
    .buttonsSection {
      flex-direction: column;
    }

    .btn {
      width: auto;
      margin-bottom: 10px;
    }
  }

  @media (max-width: 685px) {
    .home {
      grid-template-rows: 1fr 1fr;
    }

    .imgLogo {
      width: 80vw;
    }
  }
</style>
