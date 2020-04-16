<template>
  <button class="app-add-item-to-cart btn btn-outline-primary w-100 h-100"
          :title="$t('products.general.add_to_cart')"
          @click.prevent="onClick">
    <i class="fas fa-shopping-cart"></i>
    <span v-if="textVisible">{{ $t('products.general.add_to_cart') }}</span>
  </button>
</template>

<script lang="ts" src="./add-to-cart-button.ts"></script>
