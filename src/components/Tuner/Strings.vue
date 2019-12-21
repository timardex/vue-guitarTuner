<template>
    <div>
        <div class="strings" v-if="selected === 'Standard Tuning E'">
            <div :class="`string ${item.string} ${item.string_animated} `" v-for="(item, index) in standards" :key="index"></div>
        </div>
        <div class="strings" v-else-if="selected === 'Tune down 1/2 step'">
            <div :class="`string ${item.string} ${item.string_animated} `" v-for="(item, index) in down_halfs" :key="index"></div>
        </div>
        <div class="strings" v-else-if="selected === 'Tune down one step'">
            <div :class="`string ${item.string} ${item.string_animated} `" v-for="(item, index) in down_ones" :key="index"></div>
        </div>
        <div class="strings" v-else-if="selected === 'Tune down two step'">
            <div :class="`string ${item.string} ${item.string_animated} `" v-for="(item, index) in down_twos" :key="index"></div>
        </div>
    </div>
</template>

<script>
export default {
    computed: {
        selected() {
            return this.$store.state.initialState.selected
        },
        standards() {
            return this.$store.state.initialState.standards
        },
        down_halfs() {
            return this.$store.state.initialState.down_halfs
        },
        down_ones() {
            return this.$store.state.initialState.down_ones
        },
        down_twos() {
            return this.$store.state.initialState.down_twos
        },
    }
}
</script>