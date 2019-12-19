<template>
    <div class="col-sm-5">
        <div class="string-sound-select width">
            <div>
                <div class="form-group">
                    <label class="sr-only" for="select-tune"></label>
                    <select class="form-control" @change="tuningSelect(e.target.value)" :value="selected" id="select-tune">
                        <option v-for="(item, index) in tunings" :key="index" :value="item.name">{{item.name}}</option>
                    </select>
                </div>
                <div class="form-group selected-tune text-center">
                    <p>Selected tune</p>
                    <div class="box-style orange">{{selected}}</div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    computed: {
        selected() {
            return this.$store.state.initialState.selected
        },
        tunings() {
            return this.$store.state.initialState.tunings
        }
    },
    methods: {
        tuningSelect: function(value) {
            this.$store.dispatch('tuningSelect', value);

            setTimeout(() => {
                this.$store.dispatch('SELECTED_TUNE', value);
            }, 2000)
        }
    }
}
</script>