<template>
    <div>
        <div class="idList">
            <div class="col-md-3 col-6 p-0">
                <p>{{ ipValue }}</p>
                <span>{{ ipname }}</span>
            </div>                       
        </div>
    </div>
</template>

<script>
export default {
    props:['ipValue','ipname']
}
</script>