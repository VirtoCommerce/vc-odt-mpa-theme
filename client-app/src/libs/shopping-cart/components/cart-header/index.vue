<template>
  <div class="d-flex flex-wrap justify-content-between">
    <h5 class="align-self-center m-0 text-break">
      {{ title }}
    </h5>
    <button v-if="cart.itemsCount != 0"
            class="btn btn-link px-0"
            @click="onClearCartClicked()">
      {{ $t('shopping-cart.clear-cart') }}
    </button>
  </div>
</template>

<script lang="ts" src="./cart-header.ts"></script>

<style>

</style>
