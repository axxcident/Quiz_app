<!-- create reusable button component -->
<template>
  <a
    class="none-underline"
    :class="['app-button', color, size, padding]"
    :style="{ width }"
  >
    <!-- slot as a placeholder that you pass in content from parent component. -->
    <slot></slot>
  </a>
</template>

<script>
export default {
  props: {
    color: {
      type: String,
      defualt: "primary",
    },
    size: {
      type: String,
      default: "font-medium",
    },
    padding: {
      type: String,
      defualt: "1rem",
    },
    width: {
      type: String,
      default: "100%",
    },
  },
};
</script>

<style scoped>
.app-button {
  /* padding: 0.5rem 1rem; */
  border-radius: 6px;
  border: none;
  cursor: pointer;
  transition: background-color 0.2s ease-in-out;
}
.none-underline {
  text-decoration: none;
}

.primary {
  background-color: #5f0a87;
  background-image: linear-gradient(306deg, #c164ec 0%, #5f0a87 84%);
  color: white;
}

.font-medium {
  font-size: 1rem;
}

.p-medium {
  padding: .60rem 2.7rem;
}
.p-large {
  padding: .60rem 5.7rem;
}

.large {
  font-size: 1.5rem;
}
</style>
