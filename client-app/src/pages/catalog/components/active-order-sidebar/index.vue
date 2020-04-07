<template>
  <div class="d-flex flex-column">
    <cart-header :cart="cart"
                 :title="$t('shopping-cart.title')"
                 clear-cart-clicked="confirmClearCart"></cart-header>
    <cart-summary :cart="cart"></cart-summary>
    <div class="d-flex justify-content-center">
      <button class="btn btn-outline-primary w-75 text-center p-1 mt-3">
        Checkout
      </button>
    </div>
    <div class="border-top my-3"></div>
    <cart-items-list :items="cart.items"
                     @itemDeleted="confirmDeleteItem"
                     @quantityChanged="changeQuantity">
    </cart-items-list>
  </div>
</template>

<script lang="ts" src="./active-order-sidebar.ts"></script>

