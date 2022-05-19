import { createStore }  from 'vuex'
import axios from 'axios'

let store = createStore({
    state: {
        shows: [],
        card: [],
    },
    mutations: {
        SET_SHOWS_TO_STATE: (state, shows) => {
            state.shows = shows;
        },

        SET_CARD: (state, show) => {
            let isProductExists = false;
            if (state.card.length) {
              state.card.map(function (item) {
                if (item.article === show.article) {
                  isProductExists = true;
                  item.quantity++
                }
              })
              if (!isProductExists) {
                state.card.push(show)
              }
            } else {
              state.card.push(show)
            }
          },
        REMOVE_FROM_CARD: (state, index) => {
            state.card.splice(index, 1)
        },
        INCREMENT: (state, index) => {
            state.card[index].quantity++
        },
        DECREMENT: (state, index) => {
            if (state.card[index].quantity > 1) {
                state.card[index].quantity--
            }
        }
    },
    actions: {
        GET_SHOWS_FROM_API({commit}) {
            return axios('http://localhost:3000/shows', {
                method: "GET"
            })
            .then((shows) => {
                commit('SET_SHOWS_TO_STATE', shows.data)
                return shows;
            })
            .catch((error) => {
                console.log(error)
                return error;
            })
        },
        ADD_TO_CARD({commit}, show) {
            commit('SET_CARD', show);
        },
        INCREMENT_CARD_ITEM({commit}, index) {
            commit('INCREMENT', index)
        },
        DECREMENT_CARD_ITEM({commit}, index) {
            commit('DECREMENT', index)
        },
        DELETE_FROM_CARD({commit}, index) {
            commit('REMOVE_FROM_CARD', index)
        }
    },
    getters: {
        SHOWS(state) {
            return state.shows;
        },
        CARD(state) {
            return state.card;
        },
    },
});

export default store;