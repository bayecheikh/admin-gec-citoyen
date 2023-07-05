<template>
  <v-card class="mx-auto" max-width="300" tile flat>
    <v-list shaped>
      <!-- <v-subheader>MENU</v-subheader> -->
      <v-list-item-group color="primary">
        <v-list-item v-for="(item, i) in items" :key="i" @click="$router.push({ path: item.link })" link
          active-class="highlighted" :class="item.link === $route.path ? 'highlighted' : ''">
          <v-list-item-icon class="mr-3">
            <v-icon v-text="item.icon"></v-icon>
          </v-list-item-icon>
          <v-list-item-content>
            <v-list-item-title v-text="item.text" class="text-menu"></v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list-item-group>
    </v-list>
  </v-card>
</template>

<script>
export default {
  props: ['items'],
  
}
</script>
