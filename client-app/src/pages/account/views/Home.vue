<template>
    <main class="main container">
        
        <div class="account">
            <loading :active.sync="isLoading"  :can-cancel="true"  :on-cancel="onCancel"></loading>

            <h1>MPA Vue user info:</h1>

            <!-- Tabs work not js only css -->
            <div class="tabs">
                <input
                    class="tabs__input"
                    type="radio"
                    name="tabs"
                    id="tab-1"
                    checked
                />
                <label for="tab-1" class="tabs__item">
                    User Details
                    <!-- <span class="mobile-name">User Details</span> -->
                </label>
                <div class="tabs__content">
                    <fieldset>
                        <div class="form-row form-group">
                            <div class="col-md">
                                <label for="login">{{ $t('customer.login.user_name') }}</label>
                                <input
                                    type="text"
                                    class="form-control"
                                    id="login"
                                    v-model="profile.userName"
                                    readonly
                                />
                            </div>
                            <div class="col-md">
                                <label for="email">{{ $t('customer.login.email') }}</label>
                                <input
                                    type="email"
                                    class="form-control"
                                    id="email"
                                    v-model="profile.email"
                                />
                            </div>
                            <div class="col-md">
                                <label for="phone">{{ $t('customer.login.phone') }}</label>
                                <input
                                    type="text"
                                    class="form-control"
                                    id="phone"
                                    v-model="profile.phoneNumber"
                                />
                            </div>
                        </div>
                    </fieldset>
                    <a class="btn btn--green" @click.prevent="update()"
                        >Update User</a
                    >
                </div>
            </div>
        </div>
    </main>
</template>

<script>
import { mapGetters } from "vuex";
import { FETCH_PROFILE, UPDATE_USER } from "../store/index";
 // Import component
import Loading from 'vue-loading-overlay';

export default {
    name: "ProfileHome",
    
    mounted() {        
        this.$store.dispatch(FETCH_PROFILE, "userName");
    },
    components: {
            Loading
    },
    computed: {
        ...mapGetters(["profile", "isLoading"])
    },
    methods: {
        update() {
            this.$store.dispatch(UPDATE_USER, this.profile);
        }
    }
};
</script>
