<script>
  import { onMount } from "svelte";
  import { Router, Route } from "svelte-routing";
  import NavBar from "./components/NavBar.svelte";
  import Home from "./routes/Home.svelte";
  import About from "./routes/About.svelte";
  import Projects from "./routes/Projects.svelte";
  import AOS from "aos";
  import Contact from "./routes/Contact.svelte";
  import AllProjects from "./routes/projects/AllProjects.svelte";
  import Project from "./routes/projects/Project.svelte";

  onMount(() => {
    AOS.init();
  });

  let alert = false;

  const copyEmail = () => {
    var copyText = "jhondavidpitapita@hotmail.com";
    alert = true;
    navigator.clipboard.writeText(copyText);
    setTimeout(() => {
      alert = false;
    }, 3000);
  };
</script>

<main>
  <Router>
    <div>
      <Route path="projects"><AllProjects /></Route>
      <Route path="projects/:name" let:params
        ><Project name={params.name} /></Route
      >
      <Route path="/">
        <div class={`alert${alert ? " showAlert" : ""}`}>
          <h3>Copied Email</h3>
        </div>
        <NavBar />
        <Home />
        <About />
        <Projects />
        <Contact {copyEmail} />
      </Route>
    </div>
  </Router>
</main>

<style>
  .alert {
    display: block;
    z-index: 1;
    position: fixed;
    left: -190px;
    margin-top: 20px;
    padding: 20px 20px;
    border-radius: 20px;
    background-color: var(--primary-color);
    border: 2px solid var(--bg-color);
    transition: transform 0.5s ease-in-out;
  }

  .showAlert {
    transform: translateX(220px);
    transition: transform 0.5s ease-in-out;
  }
</style>
