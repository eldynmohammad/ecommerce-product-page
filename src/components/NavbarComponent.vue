<template>
  <div class="fixed w-full">
    <div class="container flex justify-between mx-auto bg-white md:border-b">
      <div class="relative flex items-center w-full gap-4 py-6 md:py-0 md:gap-8">
        <div class="flex items-center gap-4 px-6 md:gap-0">
          <img
            src="@/assets/icon-menu.svg"
            class="cursor-pointer md:hidden"
            @click="isOpen = true"
            alt="menu icon"
          />
          <img src="@/assets/logo.svg" alt="logo icon" />
        </div>
        <div :class="[isOpen ? 'block' : 'hidden', 'fixed md:hidden inset-0 z-20 bg-black/70']"></div>

        <div :class="[isOpen ? 'left-0' : '-left-[100vw]', 'nav-mobile']">
          <span class="pt-8 mb-10 cursor-pointer md:hidden" @click="isOpen = false">
            <img src="@/assets/icon-close.svg" alt="close icon" />
          </span>
          <a href="#" class="md:py-10 hover:text-gray-700">Collections</a>
          <a href="#" class="md:py-10 hover:text-gray-700">Men</a>
          <a
            href="#"
            class="md:py-10 md:border-b-4 hover:text-gray-700 md:border-primary-orange"
          >Women</a>
          <a href="#" class="md:py-10 hover:text-gray-700">About</a>
          <a href="#" class="md:py-10 hover:text-gray-700">Contacts</a>
        </div>
      </div>
      <div class="flex items-center gap-4 px-6 md:gap-12">
        <div class="relative">
          <img
            src="@/assets/icon-cart.svg"
            alt="cart"
            class="w-8 cursor-pointer"
            @click="isCartOpen = true"
          />
          <div
            v-if="quantity > 0"
            class="absolute -right-2 px-2 text-[.683rem] text-white bg-primary-orange rounded-full -top-2"
          >{{ quantity }}</div>
          <CartComponent :open="isCartOpen" @closeModal="isCartOpen = false" />
        </div>
        <div class="cursor-pointer">
          <img
            src="@/assets/image-avatar.png"
            alt="avatar"
            class="w-10 md:w-14 focus-visible:ring-amber-500"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import CartComponent from "./CartComponent.vue"
export default {
  data() {
    return {
      isOpen: false,
      isCartOpen: false
    };
  },
  computed: {
    ...mapGetters(['quantity'])
  },
  components: { CartComponent },
}
</script>