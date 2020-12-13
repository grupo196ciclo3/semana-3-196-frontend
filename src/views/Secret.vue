<template>
  <div class="secret">
    <b-container>
      <span style="word-break: break-all;">{{ token }}</span>
    </b-container>
    <br />
    <b-button variant="danger" v-on:click="cerrarSesion">
      Cerrar sesión
    </b-button>
  </div>
</template>
<script>
export default {
  name: "accessDenied",
  data() {
    return {
      token: localStorage.getItem("token")
    };
  },
  methods: {
    cerrarSesion: function() {
      localStorage.clear();
      window.location.href = "/";
    }
  }
};
</script>
