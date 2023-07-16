<template>
  <div>
    <model-obj
      src="rect.obj"
      :controls-options="{
        enableRotate: false,
        enableZoom: false,
        enablePan: false,
      }"
    ></model-obj>
    <model-stl
      src="ring.stl"
      :controls-options="{
        enableRotate: false,
        enableZoom: false,
        enablePan: false,
      }"
    ></model-stl>
  </div>
</template>
<script>
import { ModelObj, ModelStl } from "vue-3d-model";

export default {
  components: { ModelObj, ModelStl },
};
</script>
