<template>
    <div>
     <img :src="icon" width="64">
    </div>
</template>
<script>
export default{

    props:{
        icon: String
    }
}
</script>