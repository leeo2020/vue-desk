<template>
  <div>
    <video 
    ref="videoPlayer"
    class="video-js vjs-default-skin" 
    controls 
    data-setup="{}" 
    width="960" 
    height="400" 
    preload="none"
    poster="http://vjs.zencdn.net/v/oceans.png">
    <source src="http://vjs.zencdn.net/v/oceans.mp4" type="video/mp4">
  </video>
  </div>
</template>

<script>
import 'video.js/dist/video-js.css'
import videojs from 'video.js';
export default {
   name: "VideoPlayer",
    props: {
        options: {
            type: Object,
            default() {
                return {};
            }
        }
    },
    data() {
        return {
            player: null
        }
    },created() {
        this.player = videojs(this.$refs.videoPlayer, this.options, function onPlayerReady() {
            console.log('onPlayerReady', this);
        })
    },
    beforeDestroy() {
        if (this.player) {
            this.player.dispose()
        }
    }
}
</script>

<style>

</style>