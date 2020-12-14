<template>
  <div class="register">
    <b-container>
      <b-form @submit="onSubmit">

        <b-form-group label="Name:" label-for="input-name">
          <b-form-input
            id="input-name"
            v-model="form.name"
            type="text"
            required
            placeholder="Escribe tu nombre"
          ></b-form-input>
        </b-form-group>

        <b-form-group label="Email:" label-for="input-email">
          <b-form-input id="input-email" v-model="form.email" type="email" required placeholder="Escribe tu email"></b-form-input>
        </b-form-group>

        <b-form-group label="Tu contraseña:" label-for="input-password">
          <b-form-input
            id="input-password"
            v-model="form.password"
            type="password"
            required
            placeholder="Escribe tu contraseña"
          ></b-form-input>
        </b-form-group>

        <b-button type="submit" variant="success">Registrarse</b-button>
      </b-form>
    </b-container>
  </div>
</template>
<script>
import axios from "axios";
export default {
  name: "register",
  data() {
    return {
      form: {
        name: "",
        email: "",
        password: "",
      }
    };
  },
  methods: {
    onSubmit(evt) {
      evt.preventDefault();
      const { name, email, password } = this.form;
      axios
        .post("http://localhost:3000/api/auth/register", { name, email, password })
        .then(() => {
          alert("Registro exitoso");
          window.location.href = "/";
        })
        .catch(error => {
          alert(error.response.data.message);
        });
    }
  }
};
</script>
