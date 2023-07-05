<template>
  <form-forget-password></form-forget-password>
</template>

<script>
import FormForgetPassword from '@/components/auth/FormForgetPassword'
export default {
  layout: 'default',
  components: {
    FormForgetPassword
  },
  mounted() {
    let token = this.$route.params.token;
    let email = this.$route.params.email;
    this.$store.dispatch('forgetpassword/getToken', token)
    this.$store.dispatch('forgetpassword/getEmail', email)
  },
};
</script>

