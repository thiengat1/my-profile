<template>
  <div id="app">
    <Navbar />
    <Header />
    <AboutMe />
    <Skill />
    <Experiences />
    <Project />
    <Education />
  </div>
</template>

<script>
import Header from "./components/Header";
import AboutMe from "./components/AboutMe";
import Navbar from "./components/Navbar";
import Skill from "./components/Skill";
import Experiences from "./components/Experiences";
import Education from "./components/Education";
import Project from "./components/Project";
export default {
  name: "App",
  components: {
    Header,
    AboutMe,
    Navbar,
    Skill,
    Experiences,
    Education,
    Project,
  },
};
</script>

<style>
#app {
  background: #f1f2f7;
  font-family: "Open Sans", sans-serif;
  font-weight: 100;
  color: #8c8c8c;
  font-size: 14px;
}
body {
  margin: 0;
}
html {
  scroll-behavior: smooth;
}
</style>
