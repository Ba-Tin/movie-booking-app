<template lang="">
        <atom-title :text="datas.title"/>
            <slot name="button-add"/>
        <atom-table :data = "datas.tableData" :columns ="datas.tableColumns">
           <slot name="button-action"/>
        </atom-table>
</template>
<script>
import { AtomTitle, AtomTable } from '../atoms';

export default {
    props: {
        datas: { type: Object, required: true }
    },
    components: {
        AtomTitle,
        AtomTable,
    }
}
</script>
<style lang="css" scoped>
.bxs-edit,
.bxs-trash {
    font-size: 1.25rem;
    color: #a4a8c3;
}

.bxs-edit:hover {
    color: var(--text-color);
}

.bxs-trash:hover {
    color: var(--text-color);
}
</style>