<template>
  <div>
    <v-breadcrumbs :items="items" class="pl-0">
      <template v-slot:divider>
        <v-icon>mdi-chevron-right</v-icon>
      </template>
    </v-breadcrumbs>
  </div>
</template>
<script>
export default {
  props: ['items'],  
}
</script>