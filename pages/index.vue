<template>
  <div class="container">
    <ul class="navbar">
      <li v-for="tab in tabs" :key="tab.path">
        <nuxt-link :to="tab.path">{{ tab.name }}</nuxt-link>
      </li>
    </ul>
    <nuxt-child />
  </div>
</template>

<script>
export default {
  layout: 'dark',
  data() {
    return {
      tabs: [
        { name: 'Gogoro', path: '/gogoro/home' },
        { name: 'Smartscooter®', path: '/gogoro/scooter' },
        { name: 'Gogoro Network™', path: '/gogoro/network' },
        { name: '尋找門市', path: '/gogoro/shopAddress' },
        { name: '網路商店', path: '/gogoro/onlineStore' },
        { name: '最新優惠', path: '/gogoro/promotion' }
      ]
    }
  }
}
</script>

<style>
.container {
  margin: 0 auto;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  text-align: center;
}

.title {
  font-family: 'Quicksand', 'Source Sans Pro', -apple-system, BlinkMacSystemFont,
    'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
  display: block;
  font-weight: 300;
  font-size: 100px;
  color: #35495e;
  letter-spacing: 1px;
}

.subtitle {
  font-weight: 300;
  font-size: 42px;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
}

.links {
  padding-top: 15px;
}

.navbar {
  display: flex;
  flex-direction: row;
  margin: 30px 0;
}

.navbar li {
  margin: 0 10px;
}

.navbar a {
  color: lightgray;
  text-decoration: none;
}
</style>
