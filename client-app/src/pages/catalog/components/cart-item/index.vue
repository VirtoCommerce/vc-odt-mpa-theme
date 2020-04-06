<template>
  <div>
    <div>
      <div>
        <div class="mr-4 mb-2">
          {{ item.product.name }}
        </div>
        <div>SKU: {{ item.product.sku }}</div>
      </div>
      <font-awesome-layers class="btn" @click="onItemDeleted">
        <font-awesome-icon :icon="deleteIcon" size="lg"></font-awesome-icon>
      </font-awesome-layers>
    </div>
    <div>
      <div class="bold">
        {{ item.extendedPrice.formattedAmount }}
      </div>
      <div>{{ item.quantity }}</div>
      <!-- <app-change-product-quantity-active-order [lineItem]="item">
        </app-change-product-quantity-active-order> -->
    </div>
  </div>
</template>

<script lang="ts" src="./cart-item.ts"></script>
