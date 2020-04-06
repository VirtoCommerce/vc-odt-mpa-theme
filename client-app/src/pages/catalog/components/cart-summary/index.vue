<template>
  <div class="d-flex flex-column">
    <div>You have {{ cart.itemsCount }} items in your order</div>
    <div>
      <div>
        Subtotal <span class="ml-auto">{{ cart.subTotal.formattedAmount }}</span>
      </div>
      <div>
        Shipping <span class="ml-auto">{{ cart.shippingTotal.formattedAmount }}</span>
      </div>
      <div>
        Total <span class="ml-auto">{{ cart.subTotal.formattedAmount }}</span>
      </div>
    </div>
  </div>
</template>

<script lang="ts" src="./cart-summary.ts"></script>
