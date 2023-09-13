<template>
  <div class="book-seat">
    <div class="screen">Màn hình</div>
    <div class="row" v-for="row in seat" :key="row.row">
      <div class="seat" v-for="item in row.seat" :key="item.id" @click="toggleSeatStatus(row.row, item.number, item)">
        <img :src="getSeatImage(item.status)" :alt="item.number" />
        <p class="seat-name">{{ row.row + item.number }}</p>
      </div>
    </div>
    <div class="seat-infor">
      <div class="seat-img">
        <img src="../../../assets/images/seats/seat-yellow.png" alt="Ghế còn trống" />
        <p>Ghế còn trống</p>
      </div>
      <div class="seat-img">
        <img src="../../../assets/images/seats/seat-select.png" alt="" />
        <p>Ghế đang chọn</p>
      </div>
      <div class="seat-img">
        <img src="../../../assets/images/seats/seat-buyed.png" alt="" />
        <p>Ghế đã chọn</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    seat: { type: Array, required: true },
  },
  data() {
    return {
      selectedSeats: []
    };
  },
  methods: {
    getSeatImage(status) {
      switch (status) {
        case "available":
          return require("../../../assets/images/seats/seat-yellow.png");
        case "selected":
          return require("../../../assets/images/seats/seat-select.png");
        case "booked":
          return require("../../../assets/images/seats/seat-buyed.png");
        default:
          return "";
      }
    },
    toggleSeatStatus(row, number, seat) {
      if (seat.status === "available") {
        seat.status = "selected";
      } else if (seat.status === "selected") {
        seat.status = "available";
      }
      console.log("row", row);
      console.log("number", number);

      const selectedIndex = this.selectedSeats.findIndex(
        selectedSeat => selectedSeat.row === row && selectedSeat.number === number
      );
      if (selectedIndex === -1) {
        this.selectedSeats.push({ row, number });
      } else {
        this.selectedSeats.splice(selectedIndex, 1);
      }
      this.$emit("pass-seats", this.selectedSeats);
    }
  }
};
</script>

<style scoped></style>
