<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<style>
#app {
  font-family: 'Marianne','Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

@font-face {
    font-family: "Marianne";
    src: local("Marianne"),
    url(../public/static/fonts/Marianne-Regular.woff) format("webopen");
  }
</style>
