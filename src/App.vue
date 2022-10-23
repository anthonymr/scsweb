<template>
  <main id="app">
    <!--<nav>
      <router-link to="/">Home</router-link>
    </nav>-->
    <router-view />
  </main>
</template>

<style>
:root{
  --black: rgb(32, 32, 32);
  --green: green;
  --white: white;
  --gray: gray;
  --border: lightgray;
  --contrast: orange;

  --max-width: 1440px;
}

html,
body,
main {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}
</style>
