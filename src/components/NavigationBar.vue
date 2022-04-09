<template>
  <nav class="nav">
    <ul>
      <li><a href="#" v-scroll-to="'#profile-title'">Profile</a></li>
      <li><a href="#" v-scroll-to="'#skills-title'">Skills</a></li>
      <li><a href="#" v-scroll-to="'#works-title'">Works</a></li>
      <li><a href="#" v-scroll-to="'#contact-title'">Contact</a></li>
    </ul>
  </nav>
</template>

<style lang="scss" scoped>
.nav {
  ul {
    margin: 30px auto;
    padding: 0;
    max-width: 300px;
    display: flex;
    justify-content: space-between;
    list-style: none;
  }

  a {
    font-size: 15px;
    font-weight: bold;
    color: #2c3e50;
    text-decoration: none;
  }
}
</style>