<template>
  <div>
    <v-basket-card
      v-for="(item, index) in CARD"
      :key="item.article"
      :basket_card_data="item"
      @deleteFromCard="deleteFromCard(index)"
      @increment="increment(index)"
      @decrement="decrement(index)"
    />
  </div>
  <div class="basket-empty">
    <h3 v-if="!CARD.length">There are no products in basket...</h3>
  </div>
  <div v-if="CARD.length" class="basket-total">
    <p class="basket-total__name">Total:</p>
    <p>{{ cardTotalCost }}$</p>
  </div>
  <div class="basket-total">
    <button v-if="CARD.length" class="basket-btn">Buy</button>
  </div>
</template>

<script>
import vBasketCard from "./v-basket-card.vue";
import { mapActions, mapGetters } from "vuex";

export default {
  name: "v-basket",
  components: {
    vBasketCard,
  },
  computed: {
    ...mapGetters(["CARD"]),

    cardTotalCost() {
      let result = [];
      if (this.CARD.length) {
        for (let item of this.CARD) {
          result.push(item.price * item.quantity);
        }
        result = result.reduce(function (sum, el) {
          return sum + el;
        });
        return result;
      } else {
        return 0;
      }
    },
  },
  methods: {
    ...mapActions([
      "DELETE_FROM_CARD",
      "INCREMENT_CARD_ITEM",
      "DECREMENT_CARD_ITEM",
    ]),
    decrement(index) {
      this.DECREMENT_CARD_ITEM(index);
    },
    increment(index) {
      this.INCREMENT_CARD_ITEM(index);
    },
    deleteFromCard(index) {
      this.DELETE_FROM_CARD(index);
    },
  },
};
</script>

<style lang="scss" scoped>
.basket-total {
  margin: 30px;
  margin: 0 auto;
  width: 1170px;
  height: 50px;
  padding: 20px;
  display: flex;
  justify-content: center;
  background: #01000a;
  color: #e8a562;
  &__name {
    font-weight: 600;
    color: #e8a562;
  }
}
.basket-empty {
  display: flex;
  justify-content: center;
}
.basket-btn {
  display: flex;
  align-items: center;
  justify-content: center;
  background: #01000a;
  color: #e8a562;
  cursor: pointer;
  border: 1px solid #e8a562;
  width: 200px;
  height: 50px;
  border-radius: 50px;
  font-size: 30px;
  &:hover {
    -webkit-box-shadow: 5px 5px 5px 0px #e8a562, inset 4px 4px 15px 0px #e8a562,
      0px 5px 15px 5px rgba(0, 0, 0, 0);
    box-shadow: 5px 5px 5px 0px #e8a562, inset 4px 4px 15px 0px #e8a562,
      0px 5px 15px 5px rgba(0, 0, 0, 0);
    transition: all 0.7s ease;
  }
}
</style>
