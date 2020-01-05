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
import { mapState } from 'vuex'
export default {
    computed: {
        ...mapState([
            'bounceIn',
            'selected',
            'standards',
            'down_halfs',
            'down_ones',
            'down_twos'
        ])
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