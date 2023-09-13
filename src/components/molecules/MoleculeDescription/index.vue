<template lang="">
     <div class="information-movie">
        <div class="profile-movie row">
            <ul class="profile-title col-lg-5">
                <li><b>Ngày phát hành</b> 20-02-2023</li>
                <li><b>Đạo diễn</b>Janet Healy</li>
                <li><b>Giám đốc</b>Kyle Blad</li>
                <li><b>Biên kịch</b>Brian Lynch</li>
                <li><b>Định dạng</b>2D/Digital</li>
                <li><b>Quốc gia SX</b>Mỹ</li>
            </ul>
            <div class="profile-content col-lg-7">
                <h3>Nội dung</h3>
                <p>
                {{description?.description}}
                </p>
            </div>
        </div>
        <div class="trailer-movie">
            <h1>Trailer và hình ảnh</h1>
            <iframe
                  width="560"
                  height="315"
                  :src="movieDetail?.trailer"
                  title="YouTube video player"
                  frameborder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowfullscreen
            ></iframe>
        </div>
    </div>
</template>
<script>

export default {
    props: { description: { type: Object } }
}
</script>
<style lang="">
    
</style>