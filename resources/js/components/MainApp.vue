<template>
    <div id="main">
        <header />
        <div class="content">
            <router-view></router-view>
        </div>
    </div>
</template>

<script>
import Header from "./Header.vue";
export default {
    name: "main-app",
    components: {
        Header
    }
};
</script>
<style scoped>
header {
    height: 50px;
}
</style>
