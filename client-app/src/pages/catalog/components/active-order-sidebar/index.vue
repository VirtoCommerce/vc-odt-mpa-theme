<template>
  <div class="d-flex flex-column">
    <div class="d-flex justify-content-beetween">
      <h3>Your order</h3>
      <a v-if="cart.itemsCount != 0"
         class="ml-auto"
         @click="clearCart()">Remove all</a>
    </div>
    <cart-summary :cart="cart"></cart-summary>
    <cart-items-list :items="cart.items"
                     @itemDeleted="confirmDeleteItem"
                     @quantityChanged="changeQuantity">
    </cart-items-list>
  </div>
</template>

<script lang="ts" src="./active-order-sidebar.ts"></script>

