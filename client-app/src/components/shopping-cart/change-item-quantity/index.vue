<template>
  <div class="d-flex jsutify-content-center">
    <font-awesome-layers class="btn text-primary" @click="decrement()">
      <font-awesome-icon :icon="minusIcon" size="lg"></font-awesome-icon>
    </font-awesome-layers>
    <input type="text"
           OnlyNumber="true"
           class="control"
           :value="quantity"
           @blur="textChanged($event.target.value)"
           @keydown="onKeydown($event)">
    <font-awesome-layers class="btn text-primary" @click="increment()">
      <font-awesome-icon :icon="plusIcon" size="lg"></font-awesome-icon>
    </font-awesome-layers>
  </div>
</template>

<script lang="ts" src="./change-item-quantity.ts"></script>
