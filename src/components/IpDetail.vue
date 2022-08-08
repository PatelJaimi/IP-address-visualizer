<template>
    <div class="idList">
        <span>{{ ipname }}</span>    
        <p>{{ ipValue }}</p>                     
    </div>
</template>

<script>
export default {
    props:['ipValue','ipname']
}
</script>