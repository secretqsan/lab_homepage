<script setup>
const props = defineProps(["to", "title"])
</script>

<template>
    <a :href="props.to" class="text-[#ccd6f6] no-underline text-base font-medium px-4 py-2 rounded relative transition-all duration-300 ease-in-out hover:text-[#64ffda] group">
        <span class="relative">{{ props.title }}</span>
        <span class="absolute bottom-0 left-0 w-0 h-0.5 bg-[#64ffda] transition-all duration-300 ease-in-out group-hover:w-full"></span>
    </a>
</template>