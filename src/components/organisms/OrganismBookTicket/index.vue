<template lang="">
        <div class="booking-ticket right">
      <div class="title">
        <h1>Đặt vé</h1>
        <div class="img-ticket">
          <img src="../../../assets/images/ticket/ticket.png" alt="ticket" />
        </div>
      </div>
      <div class="booking-container">
        <div class="movie-name">
          <div class="movie-img">
            <img :src="movieDetail?.image" :alt="movieDetail?.filmName" />
          </div>
          <div class="movie-infor">
            <h3>{{movieDetail?.filmName}}</h3>
            <span>2D</span>
            <span>C13</span>
            <div class="review-movie">
              <p>Đánh giá:</p>
                <div class="rate-icon">
                 <box-icon
                    v-for="index in 5"
                    :key="index"
                    name="star"
                    type="solid"
                    color="orange"
                  ></box-icon>
                  </div>
            </div>
          </div>
        </div>
        <div class="cinema-infor">
          <div class="ciname-logo">
            <img :src="selectedCinema.logo" alt="" />
            <p class="" v-for="name in selectedCinema.cinemaAddressList" :key="name.id">{{name.address}}</p>
          </div>
          <div class="time-seat">
            <p>Thời gian giữ ghế</p>
          </div>
        </div>
      <MoleculeSeat :seat="seat" @pass-seats="getSeats"/>
      </div>
    </div>
    <!-- end booking ticket -->
    <!-- ticket infor -->
    <div> 
      <div class="ticket-infor">
       <div class="ticket-detail">
        <div class="cinema-name">
          <table>
            <tr>
              <td><span>Chọn rạp chiếu phim</span></td>
              <td>
               <select class="form-control" v-model="selectedCinemaId" @change="updateSelectedDate">
                  <option v-for="item in selectedMovieShowtimes" :key="item.id" :value="item.id">{{item.cinemaSystem}}</option>
                </select>
              </td>
            </tr>
            <tr>
              <td><span>Chọn ngày chiếu</span></td>
              <select class="form-control" v-model="selectedDate">
                <option v-for="date in datesForSelectedCinema" :value="date" :key="date">{{ date}}</option>
              </select>
            </tr>
            <tr>
                <td><span>Chọn giờ chiếu</span></td>
                <td>
                  <select class="form-control" v-model="selectedTime">
                    <option v-for="time in timesForSelectedDate" :value="time" :key="time">{{ time }}</option>
                  </select>
                </td>
            </tr>
            <tr>
              <td><span>Phòng chiếu</span></td>
              <th v-for="room in roomsForSelectedDateAndCinema" :key="room">{{ room }}</th>
            </tr>
            <tr>
              <td><span>Ghế</span></td>
              <th><p class="select-seat">{{selectedSeats}}</p></th>
            </tr>
          </table>
        </div>
        <div class="popcorn-combo">
          <h3>Combo bắp nước</h3>
          <select>
            <option value="0">Chọn combo</option>
            <option value="1">Combo 1</option>
            <option value="2">Combo 2</option>
            <option value="3">Combo 3</option>
            <option value="4">Không có combo</option>
          </select>
        </div>
        <div class="total-ticket">
          <table>
            <tr>
              <td><span>Phim</span></td>
              <th><span>{{ ticketPrice.toLocaleString() }} đ</span></th>
            </tr>
            <tr>
              <td><span>Combo:</span></td>
              <th><span>{{ comboPrice.toLocaleString() }} đ</span></th>
            </tr>
            <tr>
              <td><span>Tổng</span></td>
              <th><p class="text-danger">{{ totalPrice.toLocaleString()}} đ</p></th>
            </tr>
          </table>
          <div class="line-total"></div>
        </div>
        <div class="ticket-btn">
          <button class="button btn-ticket" @click="handleBookTicket">Đặt vé</button>
        </div>
      </div>
    </div>
    </div>
    <!--end ticket infor -->
</template>
<script>
import './style.css';
import { mapState, mapActions, mapGetters } from 'vuex';
import { MoleculeSeat } from '@/components/molecules';
import { toast } from 'vue3-toastify';
export default {
  data() {
    return {
      selectedCinemaId: null,
      selectedTime: null,
      selectedDate: null,
      selectedSeats: null,
      ticketPrice: 85000, // Giá vé phim
      comboPrice: 0,  // Giá combo
      totalPrice: 0,

    };
  },
  computed: {
    ...mapState(['movieDetail', 'seat']),
    ...mapGetters(['selectedMovieShowtimes']),
    selectedCinema() {
      return this.selectedMovieShowtimes.find(item => item.id === this.selectedCinemaId) || {};
    },
    // ngày
    datesForSelectedCinema() {
      if (!this.selectedCinemaId) {
        return [];
      }
      const cinema = this.selectedMovieShowtimes.find(item => item.id === this.selectedCinemaId);
      if (!cinema) {
        return [];
      }
      const dates = cinema.cinemaAddressList.reduce((result, address) => {
        address.listFilm.forEach(film => {
          film.showTimes.forEach(showTime => {
            const date = showTime.date.split('T')[0];
            if (!result.includes(date)) {
              result.push(date);
            }
          });
        });
        return result;
      }, []);
      return dates;
    },
    // giờ
    timesForSelectedDate() {

      if (!this.selectedDate) {
        return [];
      }
      const cinema = this.selectedMovieShowtimes.find(item => item.id === this.selectedCinemaId);
      if (!cinema) {
        return [];
      }
      const times = [];
      cinema.cinemaAddressList.forEach(address => {
        address.listFilm.forEach(film => {
          film.showTimes.forEach(showTime => {
            const showDate = new Date(showTime.date);
            const selectedDate = new Date(this.selectedDate + 'T00:00:00');
            if (showDate.toDateString() === selectedDate.toDateString()) {
              const showHour = showDate.getHours();
              const showMinute = showDate.getMinutes();
              const formattedTime = `${showHour.toString().padStart(2, '0')}:${showMinute.toString().padStart(2, '0')}`;
              if (!times.includes(formattedTime)) {
                times.push(formattedTime);
              }
            }
          });
        });
      });
      return times;
    },
    roomsForSelectedDateAndCinema() {

      if (!this.selectedDate || !this.selectedCinemaId) {
        return [];
      }

      const cinema = this.selectedMovieShowtimes.find(item => item.id === this.selectedCinemaId);
      if (!cinema) {
        return [];
      }
      const rooms = [];
      cinema.cinemaAddressList.forEach(address => {
        address.listFilm.forEach(film => {
          film.showTimes.forEach(showTime => {
            const showDate = new Date(showTime.date);
            const dateString = showDate.toISOString().split('T')[0];
            if (dateString === this.selectedDate && showTime.cinemaName && !rooms.includes(showTime.cinemaName)) {
              rooms.push(showTime.cinemaName);
            }
          });
        });
      });

      return rooms;
    },
    // Tính tổng giá vé dựa trên số lượng ghế đã chọn
    totalTicketPrice() {
      const ticketPriceTotal = this.ticketPrice * this.selectedSeats.length;
      console.log("sdsd", ticketPriceTotal);
      return ticketPriceTotal + this.comboPrice;
    },
  },
  methods: {
    ...mapActions(['getMovieById', 'getAllSeat']),
    updateSelectedDate() {
      this.selectedDate = null;
      this.selectedDate = null;
    },
    async fetchSeat() {
      await this.getAllSeat();
    },
    getSeats(seats) {
      this.selectedSeats = seats.map(seat => seat.row + seat.number).join(', ');
      this.totalPrice = (this.ticketPrice * seats.length + this.comboPrice);
    },
    handleBookTicket() {
      if (!this.selectedCinema?.cinemaSystem || !this.selectedDate || !this.selectedTime || !this.selectedSeats) {
        toast.warning("Vui lòng chọn đầy đủ thông tin trước khi đặt vé.", { duration: 1500 });
        return;
      }
      this.totalPrice = this.totalTicketPrice;
      const bookingInfo = {
        movieImage: this.movieDetail?.image,
        movieName: this.movieDetail?.filmName,
        cinema: this.selectedCinema?.cinemaSystem || '',
        date: this.selectedDate,
        time: this.selectedTime,
        seats: this.selectedSeats,

      };
      let bookings = JSON.parse(window.localStorage.getItem('bookings')) || [];
      bookings.push(bookingInfo);
      window.localStorage.setItem('bookings', JSON.stringify(bookings));
      toast.success("Bạn đã vé thành công", { duration: 1500 });
      this.$router.push('/myticket');
    },
  },
  components: {
    MoleculeSeat
  },
  created() {
    this.getMovieById(this.$route.params.filmUrl)
    this.fetchSeat()
  }
};
</script>
<style lang="">
    
</style>