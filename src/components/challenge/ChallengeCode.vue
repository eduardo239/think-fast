<script setup>
const props = defineProps({
  language: String,
  code: String,
});
</script>

<template>
  <n-space class="code-container">
    <div style="overflow: auto">
      <n-space vertical>
        <n-code class="code" :code="code" :language="language" />
      </n-space>
    </div>
  </n-space>
</template>
