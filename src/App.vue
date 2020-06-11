<template>
  <div id="app">
    <Navbar/>
    <Header/>
    <AboutMe/>
    <Skill/>
    <Experiences/>
    <Education/>
  </div>
</template>

<script>

import Header from './components/Header'
import AboutMe from './components/AboutMe'
import Navbar from './components/Navbar'
import Skill from './components/Skill'
import Experiences from './components/Experiences'
import Education from './components/Education'
export default {
  name: 'App',
  components: {
    Header,AboutMe,Navbar,Skill,Experiences,Education
  }
}
</script>

<style>
#app{
  background: #f1f2f7;
    font-family: 'Open Sans',sans-serif;
    font-weight: 100;
    color: #8c8c8c;
    font-size: 16px;
       
}
body{
   margin: 0;
     margin-top: 56px;
  
}
html{
  scroll-behavior: smooth;
}
</style>
