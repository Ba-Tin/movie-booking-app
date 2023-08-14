<template lang="">
    <div class="row main-custom">
        <div class="col-lg-2 navbar-custom">
            <menu-admin/>
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
export default {
    components: {
        MenuAdmin,
        FooterAdmin
    }
}
</script>
<style lang="css" scoped>
.navbar-custom {
    background: var(--bg-blue);
}

.main-custom {
    height: 100vh;
}

.main-admin {
    background: #25293c;
}
</style>