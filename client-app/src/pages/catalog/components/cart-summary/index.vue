<template>
  <div class="d-flex flex-column">
    <div>You have {{ cart.itemsCount }} items in your order</div>
    <div class="mt-1">
      <div class="d-flex">
        Subtotal <span class="ml-auto font-weight-bold">{{ cart.subTotal.formattedAmount }}</span>
      </div>
      <div class="d-flex">
        Shipping <span class="ml-auto font-weight-bold">{{ cart.shippingTotal.formattedAmount }}</span>
      </div>
      <div class="d-flex">
        Total <span class="ml-auto font-weight-bold">{{ cart.subTotal.formattedAmount }}</span>
      </div>
    </div>
  </div>
</template>

<script lang="ts" src="./cart-summary.ts"></script>
