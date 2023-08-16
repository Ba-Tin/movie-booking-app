<template lang="">
    <div class="row main-custom">
        <div class="col-lg-3 navbar-custom pl-4">
            <menu-client/>
        </div>
        <div class="col-sm-9 main-admin">
            <div class="w-100">
                <router-view/>
            </div>
        </div>
    </div>
   
</template>
<script>
import MenuClient from "../MenuClient/MenuClient.vue"

export default {
    components: {
        MenuClient,
    }
}
</script>
<style lang="css" scoped>
.navbar-custom {
    background: var(--bg-color);
}

.main-custom {
    height: 100vh;
}

.main-admin {
    background: #25293c;
    padding-left: 0 !important;
}
</style>