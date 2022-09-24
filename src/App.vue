<template>
  <div id="app">
    <!--<nav>
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </nav>-->
    <MenuView />
    <router-view/>
  </div>
</template>

<script>
import MenuView from '@/components/menu/MenuView.vue';

export default {
    comments: {
        MenuView
    },
    components: { MenuView }
}
</script>
<style>
  @import url('https://fonts.googleapis.com/css2?family=Montserrat&display=swap');
  
  :root{
    --cor-primaria: #FF3D00;
    --cor-secundaria: #FF6E40;
  }
  body{
    font-family: 'Montserrat', sans-serif;
    padding: 0;
    margin: 0;
  }
</style>
