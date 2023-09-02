<template>
  <div class="rating">
    <span
      v-for="(star, index) in stars"
      :key="index"
      @click="rate(index + 1)"
      :class="{ filled: index < currentRating }"
    >
      ★
    </span>
  </div>
</template>

<script>
export default {
  props: {
    maxRating: {
      type: Number,
      default: 5,
    },
    initialRating: {
      type: Number,
      default: 0,
    },
  },
  data() {
    return {
      currentRating: this.initialRating,
    };
  },
  computed: {
    stars() {
      return new Array(this.maxRating).fill("");
    },
  },
  methods: {
    rate(rating) {
      this.currentRating = rating;
      setTimeout(() => {
        this.$emit("close", this.currentRating);
      }, 500);
    },
  },
};
</script>

<style scoped>
.rating {
  font-size: 40px;
  cursor: pointer;
}

.filled {
  color: gold;
}
</style>
