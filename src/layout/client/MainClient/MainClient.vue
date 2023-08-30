<template lang="">
    <div class="row main-custom">
        <div class="col-sm-2 navbar-custom pl-4">
            <div class="position-fixed top-0 start-0 z-index-2">
                <menu-client/>
            </div>
        </div>
        <div class="col-sm-10 main-client">
            <div class="w-100">
                <router-view/>
            </div>
        </div>
    </div>
   
</template>
<script>
import MenuClient from "../MenuClient/MenuClient.vue"
import "./style.css"
export default {
    components: {
        MenuClient,
    }
}
</script>
<style lang="css" scoped></style>