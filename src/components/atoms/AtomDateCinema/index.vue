<template lang="">
   <div class="date-container">
        <div class="date-cinema" v-for="dateItems in date" :key="dateItems.id" >
            <div class="date-detail" v-for="dayItem in dateItems?.showTimes" :key="dayItem.id">
                <div>
                    <p class="day-cinema" @click="onSave(dayItem)" >{{ formatTimeWithDay(dayItem.date) }}</p>
                    <span class="month-cinema">{{ formatDateMonth(dayItem?.date) }}</span>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import { formatTimeWithDay, formatDateMonth } from '@/utils/dateTime'

export default {
    props: {
        date: { type: Object, required: true },
        selectFilm: { type: Function, required: true }

    },
    methods: {
        onSave(dayItems) {
            this.selectFilm(dayItems)
        },
        formatTimeWithDay, formatDateMonth
    },

}
</script>
<style lang="">
    
</style>