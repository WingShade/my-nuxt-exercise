<template>
  <div>
    尋找門市
    <br />
    <br />
    請輸入你要找的門市(限數字)：<input type="text" v-model="where" />
    <br />
    <br />
    (Validate Route Params)
    <br />
    <br />
    <input type="button" value="送出" @click="find" />
  </div>
</template>

<script>
export default {
  name: 'shopAddress',
  data() {
    return {
      where: ''
    }
  },
  methods: {
    find() {
      this.$router.push(`/gogoro/findShop/${this.where}`)
    }
  }
}
</script>

<style scoped></style>
