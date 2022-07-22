<template>
    <div class="ip-detail">
        <span class="ip-value">{{ ipValue }}</span>
        <span class="ip-name">{{ ipname }}</span>
    </div>
</template>

<script>
export default {
    props:['ipValue','ipname']
}
</script>