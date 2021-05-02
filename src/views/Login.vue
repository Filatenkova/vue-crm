<template>
  <form class="card auth-card" @submit.prevent="submitHandler">
    <div class="card-content">
      <span class="card-title">Домашняя бухгалтерия</span>
      <div class="input-field">
        <input
            id="email"
            type="text"
            class="validate"
            v-model.trim="email"
            :class="{
              // eslint-disable-next-line max-len
              invalid: ($v.email.$dirty && !$v.email.required) || ($v.email.$dirty && !$v.email.email)
            }"
        >
        <label for="email">E-mail</label>
        <small
          v-if="$v.email.$dirty && !$v.email.required"
          class="helper-text invalid">Поле e-mail не должно быть пустым
        </small>
        <small
          v-else-if="$v.email.$dirty && !$v.email.email"
          class="helper-text invalid">Введите корректный e-mail
        </small>
      </div>
      <div class="input-field">
        <input
            id="password"
            type="password"
            v-model.trim="password"
            :class="{
              // eslint-disable-next-line max-len
              invalid: ($v.password.$dirty && !$v.password.required) || ($v.password.$dirty && !$v.password.minLength)
            }"
        >
        <label for="password">Пароль</label>
        <small
          v-if="$v.password.$dirty && !$v.password.required"
          class="helper-text invalid">Введите пароль
        </small>
        <small
          v-else-if="$v.password.$dirty && !$v.password.minLength"
          class="helper-text invalid">
          Пароль должен быть не менее {{ $v.password.$params.minLength.min }} символов
        </small>
      </div>
    </div>
    <div class="card-action">
      <div>
        <button
            class="btn waves-effect waves-light auth-submit"
            type="submit"
        >
          Войти
          <i class="material-icons right">send</i>
        </button>
      </div>

      <p class="center">
        Нет аккаунта?
        <router-link to="/register">Зарегистрироваться</router-link>
      </p>
    </div>
  </form>
</template>

<script>

import { email, required, minLength } from 'vuelidate/lib/validators';
// eslint-disable-next-line max-len
// eslint-disable-next-line import/extensions,import/no-named-as-default,import/no-named-as-default-member
import messages from '../utils/messages.js';

export default {
  name: 'login',
  date: () => ({
    email: '',
    password: '',
  }),
  validations: {
    email: { email, required },
    password: { required, minLength: minLength(6) },
  },
  mounted() {
    if (messages[this.$route.query.message]) {
      this.$message(messages[this.$route.query.message]);
    }
  },
  methods: {
    submitHandler() {
      if (this.$v.$invalid) {
        this.$v.$touch();
        return;
      }

      const formData = {
        email: this.email,
        password: this.password,
      };

      console.log(formData);

      this.$router.push('/');
    },
  },
};
</script>
