<template>
  <div class="d-flex align-content-strach">
    <button class="btn btn-sm text-primary" @click="decrement()">
      <font-awesome-icon :icon="minusIcon" size="lg"></font-awesome-icon>
    </button>
    <input type="text"
           OnlyNumber="true"
           class="form-control form-control-sm text-right"
           :value="model"
           @keydown="keydown($event)"
           @blur="textChanged($event.target.value)"
           @keyup.enter="textChanged($event.target.value)">
    <button class="btn btn-sm text-primary" @click="increment()">
      <font-awesome-icon :icon="plusIcon" size="lg"></font-awesome-icon>
    </button>
  </div>
</template>

<script lang="ts" src="./change-item-quantity.ts"></script>
