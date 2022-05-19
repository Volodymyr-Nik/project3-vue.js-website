<template>
  <div class="shows-card">
    <div><img :src="show_data.image" alt="img" /></div>
    <button 
    class="shows-card__btn" 
    @click="addToCard">
      BUY TICKET
    </button>
    <div class="shows-card__title">
      <p>{{ show_data.name }}</p>
    </div>
    <div class="shows-card__date">
      <p>{{ show_data.date }}</p>
    </div>
    <div class="shows-card__date">
      <p>{{ show_data.category }}</p>
    </div>
    <div class="shows-card__place">
      <p>{{ show_data.place }}</p>
    </div>
    <div class="shows-card__price">
      <p>{{ show_data.price }}$</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "v-performances-card",
  props: {
    show_data: {
      type: Object,
      default() {
        return {};
      },
    },
  },
  data() {
    return {}
  },
  methods: {
    addToCard() {
      this.$emit('addToCard', this.show_data);
    }
  }
};
</script>
