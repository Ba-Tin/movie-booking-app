<template>
  <div class="container-right">
    <h1 class="">My Tickets</h1>
    <div class="ticket-filter">
      <a href="#" :class="{ 'button-active': activeTab === 'chuaDung' }" @click="setActiveTab('chuaDung')">
        Vé chưa dùng
      </a>
      <a href="#" :class="{ 'button-active': activeTab === 'daSudung' }" @click="setActiveTab('daSudung')">
        Vé đã dùng
      </a>
    </div>
    <div class="item" v-for="(ticket, index) in filteredTickets" :key="index">
      <div class="item-right">
        <div>
          <img :src="ticket.movieImage" alt="" />
        </div>
        <div class="content-ticket">
          <p>{{ ticket.movieName }}</p>
          <p><i class="bx bxs-location-plus"></i>{{ ticket.cinema }}</p>
          <table>
            <tr>
              <td>
                Ngày chiếu<br />
                <b>{{ ticket.date }}</b>
              </td>
              <td>
                Giờ <br />
                <b>{{ ticket.time }}</b>
              </td>
              <td>
                Ghế<br />
                <span>{{ ticket.seats }}</span>
              </td>
            </tr>
            <tr>
              <td>
                Mã vé<br />
                <b>{{ ticket.ticketCode }}</b>
              </td>
            </tr>
          </table>
        </div>
      </div>
      <div class="item-left">
        <span class="up-border"></span>
        <span class="down-border"></span>
        <div class="img-qr">
          <img src="../../../../assets/images/QR/qr1.png" alt="QR" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import './style.css';

export default {
  data() {
    return {
      activeTab: 'chuaDung',
    };
  },
  computed: {
    filteredTickets() {
      const currentDate = new Date();
      if (this.activeTab === 'chuaDung') {
        // Filter unused tickets (showtimes after the current time)
        return this.myTickets.filter(ticket => new Date(ticket.date) > currentDate);
      } else if (this.activeTab === 'daSudung') {
        // Filter used tickets (showtimes before or equal to the current time)
        return this.myTickets.filter(ticket => new Date(ticket.date) <= currentDate);
      }
      return [];
    },
    myTickets() {
      return JSON.parse(window.localStorage.getItem('bookings')) || [];
    },
  },
  methods: {
    setActiveTab(tab) {
      this.activeTab = tab;
    },
  },
};
</script>

<style lang="">
</style>