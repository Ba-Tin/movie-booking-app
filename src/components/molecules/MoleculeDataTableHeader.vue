<template lang="">
    <div>
        <atom-title :text="datas.title"/>
        <atom-table :data = "datas.tableData" :columns ="datas.tableColumns">
                <AtomButton className="customer-btn">
                    <AtomIcon  icon="icon-edit.svg" alt="icon-search"/>
                </AtomButton>
                <AtomButton className="customer-btn">
                    <AtomIcon icon="icon-delete.svg" alt="icon-delete"/>
                </AtomButton>
        </atom-table>
    </div>
</template>
<script>
import { AtomTitle, AtomTable, AtomIcon, AtomButton } from '../atoms';
export default {
    props: {
        datas: { type: Object, required: true }
    },
    components: {
        AtomTitle,
        AtomTable,
        AtomIcon,
        AtomButton
    }
}
</script>
<style lang="css" scoped>
.customer-btn {
    background: var(--bg-blue);
    margin-right: 1rem
}
</style>