<template lang="">
    <div class="row main-custom">
        <div class="col-lg-2 navbar-custom">
            <div class="position-fixed top-0 start-0 z-index-2">
                <menu-admin/>
            </div>
        </div>
        <div class="col-sm-10 main-admin">
            <div class="container p-4 rounded-5 ">
                <router-view/>
            </div>
            <footer-admin/>
        </div>
    </div>
   
</template>
<script>
import MenuAdmin from "../MenuAdmin/MenuAdmin.vue"
import FooterAdmin from "../Footer/FooterAdmin.vue";
import "./style.css"
export default {
    components: {
        MenuAdmin,
        FooterAdmin
    }
}
</script>
<style lang="css" scoped></style>