<template>
  <MdEditor v-model="text" :theme="state.theme" :previewTheme="state.previewTheme" :language="state.language" />
</template>

<script setup>
import { reactive, ref, watch } from 'vue';
import { MdEditor } from 'md-editor-v3';
import 'md-editor-v3/lib/style.css';

const text = ref('# Hello World\nThis is a markdown editor. You can write your markdown text here.\n> This is a blockquote.\n- This is a list item.\n[This is a link](https://www.google.com)\n**This is bold text**\n*This is italic text*\n\nHere is a code block:\n\`\`\`rust\nfn main() {\n    println!("Hello, World!");\n}\n\`\`\`');

const state = reactive({
  text,
  theme: document.documentElement.classList.contains('dark') ? 'dark' : 'light',
  previewTheme: 'github',
  language: 'en-US',
});

// Watch for changes in the document's class list to update the theme
watch(
    () => document.documentElement.classList.contains('dark'),
    (isDark) => {
      state.theme = isDark ? 'dark' : 'light';
    }
);

// Observe changes to the document's class list
const observer = new MutationObserver(() => {
  state.theme = document.documentElement.classList.contains('dark') ? 'dark' : 'light';
});
observer.observe(document.documentElement, { attributes: true, attributeFilter: ['class'] });
</script>