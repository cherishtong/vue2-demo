<template>
  <div id="app">
    <nav>
      <router-link to="/">Home</router-link> |
      <router-link to="/about" style="margin-left: 1rem;">About</router-link>
      <router-link to="/vxe-table"  style="margin-left: 1rem;">VxeTable</router-link>
      <router-link to="/element"  style="margin-left: 1rem;">ElementUIDemo</router-link>
      <router-link to="/editTable"  style="margin-left: 1rem;">编辑表格</router-link>
      <router-link to="/upload"  style="margin-left: 1rem;">拖拽上传</router-link>
      <router-link to="/x6"  style="margin-left: 1rem;">antV x6</router-link>
    </nav>
    <div><router-view/></div>
    
  </div>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}
</style>
