<template>
  <main id="app">
    <!--<nav>
      <router-link to="/">Home</router-link>
    </nav>-->
    <router-view />
  </main>
</template>

<style>
@import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@300;400;500;600;700;900&display=swap');

:root{
  --black: rgb(32, 32, 32);
  --light-black: rgb(51, 51, 51);
  --green: #b3cf25ff;
  --white: rgb(250, 250, 250);
  --gray: rgb(100, 100, 100);
  --border: rgb(223, 223, 223);
  --placeholder: rgb(194, 194, 194);
  --contrast: rgb(230, 58, 52);
  --blue: rgb(52, 99, 230);
  --orange: rgb(230, 138, 52);

  --max-width: 1440px;
}

html,
body,
main {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  font-family: 'Montserrat', sans-serif;
}

h1, h2 {
  font-size: 16px;
  color: var(--light-black);
  margin: 0;
  font-weight: 600;
}

h3 {
  font-size: 12px;
  color: var(--light-black);
  font-weight: 600;
  margin: 0;
}

h4 {
  font-size: 12px;
  color: var(--light-black);
  font-weight: 400;
  margin: 0;
}

.lighted {
  color: var(--green);
}

.shady {
  color: var(--gray);
  font-weight: 400;
}
</style>
