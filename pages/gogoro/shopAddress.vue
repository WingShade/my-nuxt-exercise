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
    <br />
    <br />
    <div>
      <div v-for="item in list" :key="item.Id">
        {{ JSON.parse(item.LocName).List[1].Value }}
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'shopAddress',
  async asyncData({ $axios, ...context }) {
    console.log('context', context)
    const list = await $axios.$get('https://webapi.gogoro.com/api/vm/list')
    return { list: list.slice(0, 30) } // 取前30筆demo
  },
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
