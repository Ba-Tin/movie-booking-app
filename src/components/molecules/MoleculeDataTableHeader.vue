<template lang="">
    <div>
        <atom-title :text="datas.title"/>
        <atom-table :data = "datas.tableData" :columns ="datas.tableColumns">
                <AtomButton className="customer-btn">
                    <AtomIcon  name="bx bxs-edit"/>
                </AtomButton>
                <AtomButton className="customer-btn">
                    <AtomIcon name="bx bxs-trash"/>
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