<template>
  <div id="app">
    <MenuView v-if="this.$router.currentRoute.name != 'Login'"></MenuView>
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
    background-color: rgb(197, 197, 197);
  }
</style>
