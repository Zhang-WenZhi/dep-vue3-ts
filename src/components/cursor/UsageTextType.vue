<template>
 <TextType 
  :text="['Text typing effect', 'for your websites', 'Happy coding!']"
  :typingSpeed="75"
  :pauseDuration="1500"
  :showCursor="true"
  cursorCharacter="|"
/>
</template>

<script setup lang="ts">
  import TextType from "./TextType.vue";
</script>