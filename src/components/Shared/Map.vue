<template>
  <div>
    <GmapMap
      :center="currentLocation"
      :zoom="7"
      class="w-auto h-96"
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
      currentLocation: { lat: 24.7136, lng: 46.6753 },
      selectedLocation: { lat: 24.7136, lng: 46.6753 },
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
