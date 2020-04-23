<template>
  <div>
    <h1>
      Smartscooter®
    </h1>
    <br />
    <div>
      <label
        v-for="product in products"
        :key="product.ProductId"
        :for="product.ProductId"
      >
        <input
          :id="product.ProductId"
          type="checkbox"
          :value="product.ProductId"
          :checked="product.checked"
          @change="handleChange"
        />
        {{ product.ProductName }}
      </label>
    </div>
  </div>
</template>

<script>
export default {
  name: 'scooter',
  middleware: 'fetchScooters',
  async asyncData({ $axios }) {
    const { data } = await $axios.$get(
      'https://store.gogoro.com/tw/api/scooter/product/38D40464-4228-4C70-9B5D-D754FA801075'
    )
    return { source: data.Product }
  },
  computed: {
    products() {
      return this.source.map((item) => {
        return {
          ...item,
          checked: this.$store.state.products.list.includes(item.ProductId)
        }
      })
    }
  },
  methods: {
    handleChange(e) {
      const { checked, value } = e.target
      if (checked) {
        this.add(value)
      } else {
        this.remove(value)
      }
    },
    add(id) {
      this.$store.commit('products/add', id)
    },
    remove(id) {
      this.$store.commit('products/remove', id)
    }
  }
}
</script>

<style scoped>
label {
  display: block;
  text-align: left;
}
</style>
