<template>
    <div class="row">
        <TuningSelect />
        <GuitarNeck />
    </div>
</template>

<script>
import TuningSelect from  '@/components/Tuner/TuningSelect'
import GuitarNeck from  '@/components/Tuner/GuitarNeck'
export default {
    components: {
        TuningSelect,
        GuitarNeck
    }
}
</script>