<template>
  <div class="account mb-3 mt-3">
    <ul class="nav nav-tabs">
      <li class="nav-item">
        <router-link to="/"
                     tag="a"
                     active-class="border-bottom-0 border-primary"
                     class="nav-link"
                     exact>
          {{ $t('account.menu_titles.home') }}
        </router-link>
      </li>
      <li v-if="$can($permissions.CanViewOrders) && $isActive($services.OrderBrowsing)" class="nav-item">
        <router-link to="orders"
                     active-class="border-bottom-0 border-primary"
                     tag="a"
                     class="nav-link">
          {{ $t('account.menu_titles.orders') }}
        </router-link>
      </li>
      <li v-if="$can($permissions.CanViewUsers) && $isActive($services.ManageUsers)" class="nav-item">
        <router-link to="users"
                     active-class="border-bottom-0 border-primary"
                     tag="a"
                     class="nav-link">
          {{ $t('account.menu_titles.users') }}
        </router-link>
      </li>
      <li class="nav-item">
        <router-link v-if="$can($permissions.CanViewOrders) && $isActive($services.InvoiceBrowsing)"
                     to="invoices"
                     active-class="border-bottom-0 border-primary"
                     tag="a"
                     class="nav-link">
          {{ $t('account.menu_titles.invoices') }}
        </router-link>
      </li>
      <li class="nav-item">
        <router-link v-if="$can($permissions.CanViewOrders) && $isActive($services.PaymentBrowsing)"
                     to="payments"
                     active-class="border-bottom-0 border-primary"
                     tag="a"
                     class="nav-link">
          {{ $t('account.menu_titles.payments') }}
        </router-link>
      </li>
    </ul>
    <router-view></router-view>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import Component from "vue-class-component";

@Component({
  name: "home"
})
export default class App extends Vue {

  // todo: remove
  throwError() {
    throw new Error();
  }
}
</script>
