<template lang="">
    <table class="table table-hover table-bordered">
       <thead>
          <th>STT</th>
          <th v-for="column in columns" :key="column.id">{{ column.label }}</th>
          <th>Actions </th>
      </thead>
      <tbody>
        <tr v-for="(item,index) in data" :key="item.id">
             <td>{{ index + 1 }}</td>
           <td v-for="column in columns" :key="column.key">{{ item[column.key] }}</td>
            <td>
              <slot/>
            </td>
        </tr>
      </tbody>
    </table>
</template>
<script>

export default {
  props: {
    data: Array,
    columns: Array,
  },

}
</script>
<style lang="css" scoped>
table {
  color: #a4a8c3
}

table tr:hover {
  color: #dbdeef !important;
}
</style>