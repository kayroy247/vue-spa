<template>
    <div class="container">
        <div class="row justify-content-center">
            <div class="col-md-8">
                <div class="card card-default">
                    <div class="card-header">
                        Vue.Js SPA example
                        <router-link to="login">Login</router-link>
                    </div>

                    <div class="card-body">
                        <h2>{{ welcome }}</h2>
                        <img src="http://lorempixel.com/400/200/sports" />
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "home",
    computed: {
        welcome() {
            return this.$store.getters.welcome;
        }
    }
};
</script>
