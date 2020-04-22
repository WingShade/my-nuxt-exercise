<template>
  <div>
    <logo />
    <h1 class="title">
      my-nuxt-exercise
    </h1>
    <h2 class="subtitle">
      My exquisite Nuxt.js project
    </h2>
    <div class="links">
      <a href="https://nuxtjs.org/" target="_blank" class="button--green">
        Documentation
      </a>
      <a
        href="https://github.com/nuxt/nuxt.js"
        target="_blank"
        class="button--grey"
      >
        GitHub
      </a>
    </div>
  </div>
</template>

<script>
import Logo from '~/components/Logo.vue'

export default {
  name: 'home',
  components: {
    Logo
  }
}
</script>

<style scoped></style>
