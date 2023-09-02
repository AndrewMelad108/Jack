<template>
  <div>
    <GmapMap
      :center="currentLocation"
      :zoom="7"
      style="width: 400px; height: 400px"
      @click="onMapClick"
    >
      <GmapMarker :position="selectedLocation" />
    </GmapMap>
    <h1>
      {{ $t("Coordinates:") }} {{ selectedLocation.lat }},
      {{ selectedLocation.lng }}
    </h1>
  </div>
</template>

<script>
export default {
  name: "MapExample",
  data() {
    return {
      currentLocation: { lat: 37.7749, lng: -122.4194 },
      selectedLocation: { lat: 37.7749, lng: -122.4194 },
    };
  },
  methods: {
    onMapClick(event) {
      this.selectedLocation = {
        lat: event.latLng.lat(),
        lng: event.latLng.lng(),
      };
    },
  },
};
</script>
