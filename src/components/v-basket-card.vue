<template>
  <div class="v-basket-card">
    <img class="v-basket-card__image" :src="basket_card_data.image" alt="img" />
    <div class="v-basket-card__info">
      <p>{{ basket_card_data.name }}</p>
      <p>Category: {{ basket_card_data.category }}</p>
      <p>Date: {{ basket_card_data.date }}</p>
      <p>{{ basket_card_data.place }}</p>
      <p>Price: {{ basket_card_data.price }}$</p>
      <p>Ticket art: {{ basket_card_data.article }}</p>
    </div>
    <div class="v-basket-card__quantity">
      <button class="quantity_btn" @click="decrementItem">-</button>
      <p>Qty:{{ basket_card_data.quantity }}</p>
      <button class="quantity_btn" @click="incrementItem">+</button>
    </div>
    <button @click="deleteFromCard" class="v-basket-card__btn">Delete</button>
  </div>
</template>

<script>
export default {
  name: "v-basket-card",
  props: {
    basket_card_data: {
      type: Object,
      default() {
        return {};
      },
    },
  },
  data() {
    return {};
  },

  methods: {
    decrementItem() {
      this.$emit("decrement");
    },
    incrementItem() {
      this.$emit("increment");
    },
    deleteFromCard() {
      this.$emit("deleteFromCard");
    },
  },
};
</script>

<style lang="scss" scoped>
.v-basket-card {
  margin: 30px auto;
  width: 1170px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  box-shadow: 0 0 8px 0 #e0e0e0;
  padding-right: 30px;
  &__info {
    width: 300px;
  }
  p {
    margin-top: 10px;
  }
  &__btn {
    display: flex;
    align-items: center;
    justify-content: center;
    background: #01000a;
    color: #e8a562;
    cursor: pointer;
    border: 1px solid #e8a562;
    width: 100px;
    height: 43px;
    border-radius: 50px;
    &:hover {
      -webkit-box-shadow: 5px 5px 5px 0px #e8a562,
        inset 4px 4px 15px 0px #e8a562, 0px 5px 15px 5px rgba(0, 0, 0, 0);
      box-shadow: 5px 5px 5px 0px #e8a562, inset 4px 4px 15px 0px #e8a562,
        0px 5px 15px 5px rgba(0, 0, 0, 0);
      transition: all 0.7s ease;
    }
  }
  &__quantity {
    display: flex;
    justify-content: center;
    gap: 10px;
    align-items: baseline;
    .quantity_btn {
      font-size: 20px;
      width: 50px;
      height: 30px;
      border-radius: 10px;
      cursor: pointer;
      border: 1px solid #e8a562;
      background: #01000a;
      color: #e8a562;
      &:hover {
        -webkit-box-shadow: 5px 5px 5px 0px #e8a562,
          inset 4px 4px 15px 0px #e8a562, 0px 5px 15px 5px rgba(0, 0, 0, 0);
        box-shadow: 5px 5px 5px 0px #e8a562, inset 4px 4px 15px 0px #e8a562,
          0px 5px 15px 5px rgba(0, 0, 0, 0);
        transition: all 0.7s ease;
      }
    }
  }
}
</style>
