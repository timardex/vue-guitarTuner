<template>
    <div class="strings">
        <div :class="`string ${item.string} ${item.string_animated} `" v-for="(item, index) in items" :key="index"></div>
    </div>
</template>

<script>
export default {
    props: ['items'],
}
</script>