<template>
  <div class="map-container">
    <GmapMap :center="center" :zoom="zoom">
      <GmapMarker
        :key="marker.id"
        v-for="marker in markers"
        :position="marker.position"
      />
    </GmapMap>
  </div>
</template>

<script>
// import { gmapApi } from "vue2-google-maps";
import { GmapMap, GmapMarker } from "vue2-google-maps";
export default {
  name: "MapGoogle",
  components: {
    GmapMap,
    GmapMarker,
  },

  data() {
    return {
      center: { lat: 37.7749, lng: -122.4194 },
      zoom: 12,
      markers: [{ id: 1, position: { lat: 37.7749, lng: -122.4194 } }],
    };
  },
};
</script>

<style scoped>
.map-container {
  width: 100%;
  height: 400px;
}
</style>
