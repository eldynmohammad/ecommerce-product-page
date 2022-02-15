<template>
  <div
    :class="[open ? 'scale-100 opacity-100' : 'scale-0 opacity-0', 'fixed md:absolute top-20 md:top-10 left-0 right-0 mx-4 md:mx-auto md:left-1/2 md:-translate-x-[50%] md:min-w-[24rem] bg-white shadow-2xl rounded-xl']"
  >
    <div class="relative w-full px-8 py-8 text-lg font-bold border-b">
      Cart
      <div class="absolute p-4 -translate-y-1/2 cursor-pointer right-4 top-1/2" @click="close">
        <img src="@/assets/icon-close.svg" alt />
      </div>
    </div>
    <div class="w-full px-8 py-4">
      <p v-if="quantity < 1" class="py-16 font-bold text-center text-gray-500">Your cart is empty.</p>
      <div class="pb-4" v-else>
        <div class="relative flex gap-4">
          <img src="/image-product-1.jpg" class="w-14 rounded-xl" />
          <div>
            <p class="text-gray-500 font">Fall Limited Edition Sneakers</p>
            <p>
              {{ currency(125) }} x {{ quantity }}
              <span
                class="ml-4 font-bold"
              >{{ currency(125 * quantity) }}</span>
            </p>
          </div>
          <div
            class="absolute p-4 -translate-y-1/2 cursor-pointer -right-4 top-1/2 hover:opacity-70"
            @click="removeCart"
          >
            <img src="@/assets/icon-delete.svg" alt />
          </div>
        </div>
        <button
          class="w-full py-4 mt-4 font-bold text-center text-white cursor-pointer rounded-xl bg-primary-orange hover:bg-primary-orange/70"
          @click="removeCart"
        >Checkout</button>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'

export default {
  props: {
    open: {
      type: Boolean,
      required: true
    }
  },
  computed: {
    ...mapGetters(['quantity'])
  },
  methods: {
    ...mapActions(['removeCart']),
    close() {
      this.$emit('closeModal', false)
    }
  }
}
</script>