<template>
  <div id="nav">
  <router-view /></div>
</template>

<style lang="scss" >


*{
  margin:0;
  padding:0;
 // box-sizing:border-box
}
#app {
  font-family: "Source Sans Pro";
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
   @media(width:375px){
        width:375px;
    }
}

/* #nav {

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
} */


</style>
