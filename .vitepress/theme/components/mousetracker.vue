<script setup>
import { onMounted, onUnmounted, ref } from 'vue';

const x = ref(0);
const y = ref(0);

const targetX = ref(0);
const targetY = ref(0);

const handleMouseMove = (e) => {
  targetX.value = e.clientX;
  targetY.value = e.clientY;
};

const animate = () => {
  x.value += (targetX.value - x.value) * 0.1;
  y.value += (targetY.value - y.value) * 0.1;
  requestAnimationFrame(animate);
};

onMounted(() => {
  window.addEventListener('mousemove', handleMouseMove);
  requestAnimationFrame(animate);
});
onUnmounted(() => {
  window.removeEventListener('mousemove', handleMouseMove);
});
</script>

<template>
  <div
    class="pointer"
    :style="{
      left: `${x}px`,
      top: `${y}px`,
    }"
  ></div>
</template>

<style scoped>
.pointer {
  position: fixed;
  width: 35em;
  height: 35em;
  border-radius: 50%;
  pointer-events: none;
  transform: translate(-50%, -50%);
  z-index: 9999;
  background: radial-gradient(
    circle,
    rgba(255, 221, 2, 0.25) 0%,
    rgba(255, 214, 90, 0) 60%
  );
}

/* Switch when dark mode is active */
:root.dark .pointer {
  background: radial-gradient(
    circle,
    rgba(255, 255, 255, 0.2) 0%,
    rgba(255, 255, 255, 0) 60%
  );
}
</style>