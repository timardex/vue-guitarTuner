<template>
    <ul class="string-list">
        <li :class="`${bounceIn} ${item.clicked}`" v-for="(item, index) in items" :key="index">{{item.name}}</li>
    </ul>
</template>

<script>
export default {
    props: ['items'],
    computed: {
        bounceIn() {
            return this.$store.state.initialState.bounceIn
        }
    }
}
</script>