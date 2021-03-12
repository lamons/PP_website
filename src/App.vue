<template>
  <div id="app">
    <router-view />
    <!-- <div class="logoBox">
      <x3d width="600px" height="400px">
        <scene>
          <shape>
            <box></box>
          </shape>
        </scene>
      </x3d>
    </div>-->
    <LogoBox />
  </div>
</template>

<script>
import LogoBox from "@/components/LogoBox/LogoBox.vue";
export default {
  name: "App",
  components: { LogoBox }
};
</script>
<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  /* color: #2c3e50; */
  background-color: #a9aaaa;
  min-height: 102vh;
  width: 100%;
  z-index: 0;
}

* {
  margin: 0;
  padding: 0;
}
</style>
