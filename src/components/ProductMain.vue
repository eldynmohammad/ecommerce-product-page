<template>
  <div
    class="flex flex-col items-center gap-4 pb-8 mx-auto md:px-16 max-w-7xl md:flex-row md:gap-16"
  >
    <div class="w-full max-w-lg">
      <div class="relative overflow-hidden md:rounded-3xl">
        <img
          :src="`/image-product-${currentPic}.jpg`"
          class="pointer-events-none md:cursor-pointer md:pointer-events-auto"
          alt="Product Image"
          @click="isModalOpen = true; modalPic = currentPic"
        />
        <div
          class="absolute flex items-center justify-center w-12 h-12 -translate-y-1/2 bg-gray-200 rounded-full cursor-pointer md:hidden left-5 top-1/2 hover:fill-primary-orange"
          @click="currentPic < 2 ? this.currentPic = 4 : this.currentPic--"
        >
          <img src="@/assets/icon-previous.svg" alt="previous icon" />
        </div>
        <div
          class="absolute flex items-center justify-center w-12 h-12 -translate-y-1/2 bg-gray-200 rounded-full cursor-pointer md:hidden right-5 top-1/2 hover:fill-primary-orange"
          @click="currentPic > 3 ? this.currentPic = 1 : this.currentPic++"
        >
          <img src="@/assets/icon-next.svg" alt="next icon" />
        </div>
      </div>
      <div class="hidden grid-cols-4 gap-8 mt-8 md:grid">
        <div
          :class="[currentPic === 1 ? 'ring-4 ring-primary-orange -translate-y-1 shadow-xl' : '', 'relative cursor-pointer rounded-2xl overflow-hidden transition-all duration-300 hover:ring-4 hover:ring-primary-orange']"
          @click="currentPic = 1"
        >
          <img src="/image-product-1.jpg" alt="product image" />
          <div v-if="currentPic === 1" class="absolute inset-0 bg-white/50"></div>
        </div>
        <div
          :class="[currentPic == 2 ? 'ring-4 ring-primary-orange -translate-y-1 shadow-xl' : '', 'relative cursor-pointer rounded-2xl overflow-hidden transition-all duration-300  hover:ring-4 hover:ring-primary-orange']"
          @click="currentPic = 2"
        >
          <img src="/image-product-2.jpg" alt="product image" />
          <div v-if="currentPic === 2" class="absolute inset-0 bg-white/50"></div>
        </div>
        <div
          :class="[currentPic == 3 ? 'ring-4 ring-primary-orange -translate-y-1 shadow-xl' : '', 'relative cursor-pointer rounded-2xl overflow-hidden transition-all duration-300  hover:ring-4 hover:ring-primary-orange']"
          @click="currentPic = 3"
        >
          <img src="/image-product-3.jpg" alt="product image" />
          <div v-if="currentPic === 3" class="absolute inset-0 bg-white/50"></div>
        </div>
        <div
          :class="[currentPic == 4 ? 'ring-4 ring-primary-orange -translate-y-1 shadow-xl' : '', 'relative cursor-pointer rounded-2xl overflow-hidden transition-all duration-300  hover:ring-4 hover:ring-primary-orange']"
          @click="currentPic = 4"
        >
          <img src="/image-product-4.jpg" alt="product image" />
          <div v-if="currentPic === 4" class="absolute inset-0 bg-white/50"></div>
        </div>
      </div>
    </div>
    <div class="flex-shrink px-6 ml-0 md:ml-16">
      <p class="text-sm font-semibold tracking-widest uppercase text-primary-orange">Sneaker Company</p>
      <h1 class="mt-4 text-3xl font-bold md:text-5xl">Fall Limited Edition Sneakers</h1>
      <p
        class="mt-4 text-gray-500"
      >These low-profile sneakers are your perfect casual wear companion. Featuring a durable rubber outer sole, they'll withstand everything the weather can offer.</p>

      <div class="flex flex-row items-center justify-between mt-8 md:items-start md:flex-col">
        <div class="flex gap-4 md:items-center">
          <h3 class="text-2xl font-bold">{{ currency(125) }}</h3>
          <span
            class="px-2 py-1 text-sm font-semibold rounded-lg bg-primary-pale-orange text-primary-orange"
          >50%</span>
        </div>

        <div class="relative md:mt-2 w-max">
          <p class="text-lg font-bold text-gray-300">{{ currency(250) }}</p>
          <div class="absolute z-0 top-1/2 -translate-y-[10%] left-0 w-full h-[.15rem] bg-gray-300"></div>
        </div>
      </div>
      <div class="flex flex-col gap-4 mt-8 md:flex-row">
        <div class="flex items-center bg-gray-100 rounded-xl">
          <div class="px-6 py-4 cursor-pointer" @click="cart--; cart < 0 ? cart = 0 : cart">
            <img src="@/assets/icon-minus.svg" class="w-5 md:w-3" alt="decrease icon" />
          </div>
          <div class="w-full px-2 py-4 md:w-8">
            <input
              type="text"
              class="w-full font-bold text-center text-gray-700 bg-transparent border-0 outline-none"
              v-model="cart"
            />
          </div>
          <div class="px-6 py-4 cursor-pointer" @click="cart++">
            <img src="@/assets/icon-plus.svg" class="w-5 md:w-3" alt="add icon" />
          </div>
        </div>
        <button
          class="flex items-center justify-center flex-1 gap-4 py-4 text-white group rounded-xl bg-primary-orange hover:bg-primary-orange/70"
          @click="addToCart(cart); cart = 0"
        >
          <svg width="22" class="fill-white" height="20" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M20.925 3.641H3.863L3.61.816A.896.896 0 0 0 2.717 0H.897a.896.896 0 1 0 0 1.792h1l1.031 11.483c.073.828.52 1.726 1.291 2.336C2.83 17.385 4.099 20 6.359 20c1.875 0 3.197-1.87 2.554-3.642h4.905c-.642 1.77.677 3.642 2.555 3.642a2.72 2.72 0 0 0 2.717-2.717 2.72 2.72 0 0 0-2.717-2.717H6.365c-.681 0-1.274-.41-1.53-1.009l14.321-.842a.896.896 0 0 0 .817-.677l1.821-7.283a.897.897 0 0 0-.87-1.114ZM6.358 18.208a.926.926 0 0 1 0-1.85.926.926 0 0 1 0 1.85Zm10.015 0a.926.926 0 0 1 0-1.85.926.926 0 0 1 0 1.85Zm2.021-7.243-13.8.81-.57-6.341h15.753l-1.383 5.53Z"
              fill-rule="nonzero"
            />
          </svg>
          <p class="font-bold">Add too cart</p>
        </button>
      </div>
    </div>
  </div>

  <!-- Modal -->
  <div
    :class="[isModalOpen ? 'md:flex' : 'md:hidden', 'hidden fixed justify-center items-center inset-0 z-50 bg-black/70']"
  >
    <div class="max-w-lg">
      <div class="flex justify-end w-full">
        <div
          class="relative w-8 h-8 bg-white rounded-lg cursor-pointer"
          @click="isModalOpen = false"
        >
          <img
            src="@/assets/icon-close.svg"
            class="absolute -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
            alt="close icon"
          />
        </div>
      </div>
      <div class="relative mt-4">
        <img :src="`/image-product-${modalPic}.jpg`" class="rounded-3xl" alt="product image" />
        <div
          class="absolute flex items-center justify-center w-12 h-12 -translate-y-1/2 bg-gray-200 rounded-full cursor-pointer -left-5 top-1/2 hover:fill-primary-orange"
          @click="previousPic"
        >
          <img src="@/assets/icon-previous.svg" alt="previous icon" />
        </div>
        <div
          class="absolute flex items-center justify-center w-12 h-12 -translate-y-1/2 bg-gray-200 rounded-full cursor-pointer -right-5 top-1/2 hover:fill-primary-orange"
          @click="nextPic"
        >
          <img src="@/assets/icon-next.svg" alt="next icon" />
        </div>
      </div>
      <div class="grid grid-cols-4 gap-8 mt-8">
        <div
          :class="[modalPic === 1 ? 'ring-4 ring-primary-orange -translate-y-1' : '', 'relative cursor-pointer rounded-2xl overflow-hidden transition-all duration-300  hover:ring-4 hover:ring-primary-orange']"
          @click="modalPic = 1"
        >
          <img src="/image-product-1.jpg" alt="product image" class />
          <div v-if="modalPic === 1" class="absolute inset-0 bg-white/50"></div>
        </div>
        <div
          :class="[modalPic == 2 ? 'ring-4 ring-primary-orange -translate-y-1' : '', 'relative cursor-pointer rounded-2xl overflow-hidden transition-all duration-300  hover:ring-4 hover:ring-primary-orange']"
          @click="modalPic = 2"
        >
          <img src="/image-product-2.jpg" alt="product image" />
          <div v-if="modalPic === 2" class="absolute inset-0 bg-white/50"></div>
        </div>
        <div
          :class="[modalPic == 3 ? 'ring-4 ring-primary-orange -translate-y-1' : '', 'relative cursor-pointer rounded-2xl overflow-hidden transition-all duration-300  hover:ring-4 hover:ring-primary-orange']"
          @click="modalPic = 3"
        >
          <img src="/image-product-3.jpg" alt="product image" />
          <div v-if="modalPic === 3" class="absolute inset-0 bg-white/50"></div>
        </div>
        <div
          :class="[modalPic == 4 ? 'ring-4 ring-primary-orange -translate-y-1' : '', 'relative cursor-pointer rounded-2xl overflow-hidden transition-all duration-300  hover:ring-4 hover:ring-primary-orange']"
          @click="modalPic = 4"
        >
          <img src="/image-product-4.jpg" alt="product image" />
          <div v-if="modalPic === 4" class="absolute inset-0 bg-white/50"></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions } from 'vuex'
export default {
  data() {
    return {
      isModalOpen: false,
      currentPic: 1,
      modalPic: 1,
      imagePath: '/public/assets/image-product-1.jpg',
      cart: 0
    }
  },
  methods: {
    ...mapActions(['addToCart']),
    nextPic() {
      if (this.modalPic > 3) {
        this.modalPic = 1
      } else {
        this.modalPic++
      }
    },
    previousPic() {
      if (this.modalPic < 2) {
        this.modalPic = 4
      } else {
        this.modalPic--
      }
    }
  },
}
</script>