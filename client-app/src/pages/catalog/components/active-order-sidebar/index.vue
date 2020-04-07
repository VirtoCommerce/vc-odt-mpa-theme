<template>
  <div class="d-flex flex-column">
    <div class="d-flex justify-content-beetween">
      <h5 class="align-self-center">
        Your order
      </h5>
      <button v-if="cart.itemsCount != 0"
              class="btn btn-link ml-auto mx-0"
              @click="confirmClearCart()">
        Remove all
      </button>
    </div>
    <cart-summary :cart="cart"></cart-summary>
    <button class="btn btn-primary w-100 d-flex justify-content-center p-1 mt-3">
      Checkout
    </button>
    <div class="border-top my-3"></div>
    <cart-items-list :items="cart.items"
                     @itemDeleted="confirmDeleteItem"
                     @quantityChanged="changeQuantity">
    </cart-items-list>
  </div>
</template>

<script lang="ts" src="./active-order-sidebar.ts"></script>

