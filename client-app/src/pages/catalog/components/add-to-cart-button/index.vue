<template>
  <button class="btn btn-secondary w-100 d-flex justify-content-center p-2"
          :title="$t('products.general.add_to_cart')"
          @click.prevent="increment">
    <i class="fas fa-shopping-cart"></i>
  </button>
</template>

<script lang="ts" src="./add-to-cart-button.ts"></script>
