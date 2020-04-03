<template>
  <button class="btn btn-secondary p-2 m-10"
          @click="onClick">
    <i class="fas fa-shopping-cart"></i> <span v-if="itemsQuantity > 0" class="badge badge-info"> {{ itemsQuantity }}</span>
  </button>
</template>

<script lang="ts" src="./cart-component.ts"></script>

