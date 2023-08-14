<template lang="">
    <div class="input-group">
        <div class="form-outline">
            <atom-input  id="search-focus" typeName="search" placeholderName="Search" className="form-control"/>
        </div>
        <atom-button typeName="button" className="btn btn-primary">
            <AtomIcon icon="icon-search.svg" alt="icon-search"/>
        </atom-button>
    </div>
</template>
<script>
import { AtomButton, AtomIcon, AtomInput } from '../atoms'
export default {
    components: {
        AtomButton,
        AtomInput,
        AtomIcon
    }
}
</script>
<style lang="">
    
</style>