<template>
  <router-view/>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
*{
  margin: 0;
  padding: 0;
}

nav a.router-link-exact-active {
  color: #42b983;
}

.flex-float{
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.flex{
  display: flex;
  align-items: center;
}
</style>
