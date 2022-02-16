<template>
  <div class="flex flex-col h-screen max-h-screen">
    <div class="z-20 flex justify-center relative bg-regal-blue  px-4 pt-8 pb-32">
      <div class="w-full max-w-screen-sm">
        <h1 class="text-white text-center text-3xl pb-4">IP Address Tracker</h1>
        <div class="flex">
          <input
            v-model="queryIp"
            class="flex-1 py-3 px-2 rounded-tl-md rounded-bl-md focus:outline-none"
            type="text"
            placeholder="Search for any IP address or leave empty to get your ip info"
          />
          <i
            @click="getIpInfo"
            class="cursor-pointer
          bg-teal-500
          text-white
          px-4
          rounded-tr-md
          rounded-br-md
          flex
          items-center
          fas fa-chevron-right
          border-white
          border-2"
          
          ></i>
        </div>
      </div>
      <InfoIP/>
    </div>
     <div id="mapid" class="h-full z-10"></div>
  </div>
</template>

<script>
// @ is an alias to /src

import InfoIP from "../components/InfoIP.vue";
import leaflet from "leaflet";
import {onMounted} from "vue";
export default {
  name: 'Home',
  components: {  InfoIP },
  setup() {
    let mymap;
    onMounted(() => {
      mymap = leaflet.map('mapid').setView([47.383, 0.683], 13);

      leaflet.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token=pk.eyJ1IjoiYmlsYWxqZWxsb3VsaTI1IiwiYSI6ImNrenBmbWtqczAxMHkyd3BnNGhyejFmdTUifQ.r7G8czy0kFB_VuBqgMy_9A', {
          attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
          maxZoom: 18,
          id: 'mapbox/streets-v11',
          tileSize: 512,
          zoomOffset: -1,
          accessToken: 'pk.eyJ1IjoiYmlsYWxqZWxsb3VsaTI1IiwiYSI6ImNrenBmbWtqczAxMHkyd3BnNGhyejFmdTUifQ.r7G8czy0kFB_VuBqgMy_9A'
      }).addTo(mymap);
    })
  },
}
</script>
