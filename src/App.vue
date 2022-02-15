<template>
  <NavbarComponent class="z-40" />
  <div class="container flex h-full pt-16 mx-auto md:pt-32">
    <div class="flex-1 md:py-16">
      <ProductMain />
    </div>
  </div>
</template>

<script>
import NavbarComponent from "./components/NavbarComponent.vue";
import ProductMain from "./components/ProductMain.vue";

export default {
  name: 'App',
  components: {
    NavbarComponent,
    ProductMain
  }
}
</script>

<style>
</style>
