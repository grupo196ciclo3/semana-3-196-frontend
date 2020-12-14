<template>
  <div class="secret">
    <b-list-group align="left">
      <b-list-group-item><span>Name: </span> {{user.name}}</b-list-group-item>
      <b-list-group-item><span>Email:</span> {{user.email}}</b-list-group-item>
    </b-list-group>
    <br />
    <b-button variant="danger" v-on:click="cerrarSesion">
      Cerrar sesión
    </b-button>
  </div>
</template>

<script>
import VueJwtDecode from "vue-jwt-decode"
export default {
  name: "Secret",
  data() {
    return {
      user:{}
    };
  },
  methods: {
    cerrarSesion(){
      localStorage.clear();
      window.location.href = "/";
    },
    getUserData(){
      let tokenUser = localStorage.getItem("token");
      let user = VueJwtDecode.decode(tokenUser);
      // console.log(user);
      this.user = user;
      // console.log(this.user);
    }
  },
  created(){
    this.getUserData();
  }
};
</script>
