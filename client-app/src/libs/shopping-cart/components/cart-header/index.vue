<template>
  <div class="d-flex justify-content-between align-items-start">
    <h5 class="m-0 text-break">
      {{ title }}
    </h5>
    <button v-if="cart.itemsCount != 0"
            class="btn btn-link px-0 pt-0 text-nowrap"
            @click="onClearCartClicked()">
      {{ $t('shopping-cart.clear-cart') }}
    </button>
  </div>
</template>

<script lang="ts" src="./cart-header.ts"></script>

<style>

</style>
