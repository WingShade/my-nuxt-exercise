<template>
  <div>
    <div class="found">{{ `我們找到你搜尋的店家: ${id}` }}</div>
    <input type="button" value="回上一頁" @click="goBack" />
  </div>
</template>

<script>
export default {
  validate({ params }) {
    return /^\d+$/.test(params.id)
  },
  data() {
    return { id: this.$route.params.id }
  },
  methods: {
    goBack() {
      this.$router.go(-1)
    }
  }
}
</script>

<style scoped>
.found {
  margin: 30px;
}
</style>
