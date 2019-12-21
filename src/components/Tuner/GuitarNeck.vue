<template>
    <div class="col-sm-7">
        <div class="guitar-neck width">
            <div class="background">
                <div :class="`overlay ${tuning}`">
                    <div class="box-style orange text-center">Tuning the Guitar for <b><i>{{selected}}</i></b></div>
                </div>

                <div class="guitar-keys">
                    <img src="../../assets/images/guitar-key.png" :class="[animated_key, `key-${n}`]" alt="Guitar Key" v-for="n in 6" :key="`key-${n}`"/>
                </div>

                <Strings />
            </div>
            <StringSelect />
        </div>
    </div>
</template>

<script>
import Strings from '@/components/Tuner/Strings'
import StringSelect from '@/components/Tuner/StringSelect'
export default {
    components: {
        Strings,
        StringSelect
    },
    computed: {
        selected() {
            return this.$store.state.initialState.selected
        },
        tuning() {
            return this.$store.state.initialState.tuning
        },
        animated_key() {
            return this.$store.state.initialState.animated_key
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