<template>
    <div>
        <ul class="string-list" v-if="selected === 'Standard Tuning E'">
            <li @click="item.isPlaying ? pause(item, item.sound.pause(), item.sound.currentTime = 0) : play(item, item.sound.play())" :class="`${bounceIn} ${item.clicked}`" v-for="(item, index) in standards" :key="index">{{item.name}}</li>
        </ul>
        <ul class="string-list" v-else-if="selected === 'Tune down 1/2 step'">
            <li @click="item.isPlaying ? pause(item, item.sound.pause(), item.sound.currentTime = 0) : play(item, item.sound.play())" :class="`${bounceIn} ${item.clicked}`" v-for="(item, index) in down_halfs" :key="index">{{item.name}}</li>
        </ul>
        <ul class="string-list" v-else-if="selected === 'Tune down one step'">
            <li @click="item.isPlaying ? pause(item, item.sound.pause(), item.sound.currentTime = 0) : play(item, item.sound.play())" :class="`${bounceIn} ${item.clicked}`" v-for="(item, index) in down_ones" :key="index">{{item.name}}</li>
        </ul>
        <ul class="string-list" v-else-if="selected === 'Tune down two step'">
            <li @click="item.isPlaying ? pause(item, item.sound.pause(), item.sound.currentTime = 0) : play(item, item.sound.play())" :class="`${bounceIn} ${item.clicked}`" v-for="(item, index) in down_twos" :key="index">{{item.name}}</li>
        </ul>
    </div>
</template>

<script>
export default {
    computed: {
        bounceIn() {
            return this.$store.state.initialState.bounceIn
        },
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
        }
    },
    methods: {
        pause: function (element) {
            this.$store.dispatch('pause', element)
        },
        play: function (element) {
            this.$store.dispatch('play', element)

            setTimeout(() => {
                this.$store.dispatch('animationEnd', element);
            }, 8000)
        }
    }
}
</script>