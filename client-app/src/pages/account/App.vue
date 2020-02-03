<template>
    <!-- <div id="app">
        <div id="nav">
            <router-link to="/">Home</router-link> |
            <router-link to="/about">About</router-link>
        </div>
        <router-view />
    </div> -->
    <ProfileHome></ProfileHome>
</template>

<script>
import ProfileHome from "./views/Home";

export default {
    name: "home",
    components: {
        ProfileHome
    }
};
</script>
