<template>
  <button class="app-add-item-to-cart btn btn-outline-primary w-100 h-100 d-flex justify-content-center"
          :title="$t('products.general.add_to_cart')"
          @click.prevent="onClick">
    <i class="fas fa-shopping-cart"></i>
  </button>
</template>

<script lang="ts" src="./add-to-cart-button.ts"></script>
