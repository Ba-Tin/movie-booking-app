// Get tên rạp
export const getNameCinema = (cinemaSystem) => {
    // Tách phần tên thương hiệu từ chuỗi
    const parts = cinemaSystem.split(" - ");
    if (parts.length === 2) {
        return parts[0];
    } else {
        return cinemaSystem;
    }
}
// get địa chỉ Rạp phim
export const getAddressCinema = (address) => {
    const parts = address.split(" - ");
    if (parts.length === 2) {
        return parts[1];
    } else {
        return address;
    }
}
// filmUrl
export const createFilmUrl = string => string.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "").split(' ').join('-')
