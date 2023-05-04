<template>
    <v-alert
        dense
        text
        :type="color"
        dismissible
        >
        {{ message }}
    </v-alert>
</template>

<script>
export default {
  name: 'Notification',
  props: ['message','color']
}
</script>
<style scoped>
.bottom-fixed{
  position:fixed;
  left:0;
  bottom:50%;
}
</style>