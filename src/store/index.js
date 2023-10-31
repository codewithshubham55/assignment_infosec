
import Vue from 'vue';
import Vuex from 'vuex';
import mutations from './mutations';
import actions from './actions';

Vue.use(Vuex);

const state = {
  token: null,
  products: [],
  orderItems: [],
  isAuthenticated: false,
  cart_products:[]

};
const store=new Vuex.Store({
  state,
  mutations,
  actions,
});


export default  store;