<template>
  <div id="app">
    <div class="rf-skiplinks">
        <div class="rf-container">
            <ul class="rf-skiplinks__list">
                <li>
                    <a class="rf-link" href="#main">Accéder au contenu</a>
                </li>
                <li>
                    <a class="rf-link" href="#header-navigation">Accéder au menu</a>
                </li>
            </ul>
        </div>
    </div>
    <router-view/>
  </div>
</template>

<style>
#app {
  font-family: 'Marianne','Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  /* text-align: center; */
  color: #2c3e50;
  /* margin-top: 60px; */
}

@font-face {
    font-family: "Marianne";
    src: local("Marianne"),
    url(../public/static/fonts/Marianne-Regular.woff) format("webopen");
  }
</style>
