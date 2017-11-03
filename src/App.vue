<template>
  <div id="app">
    <!--<img src="./assets/logo.png">-->
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'app'
}
</script>

<style>
:root {
  --card-height: 200px;
  --card-width:200px;
  --magicBack: #d178f1;
  --dcBack: #ce0606;
  --swBack: #000;
  --magicText: #000;
  --dcText: #fede11;
  --swText: #fede11;
}
* {
  box-sizing: border-box;
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;

}

</style>
