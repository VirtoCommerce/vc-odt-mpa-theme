<template>
  <div>
    <cart-item v-for="item in items"
               :key="item.id"
               :item="item"
               @itemDeleted="onItemDeleted"
               @quantityChanged="onQuantityChanged">
    </cart-item>
  </div>
</template>

<script lang="ts" src="./cart-items-list.ts"></script>
