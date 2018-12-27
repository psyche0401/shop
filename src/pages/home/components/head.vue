<template>
    <div class="header">

        <div class="header-title">
                 这是头部
        </div>

    </div>
</template>

<script>
export default {
    
    name:'head'
}
</script>

<style lang="scss" scroped>

    .header{
        height: 50px;
        width:100%;
        background: red;
        position: absolute;
        z-index: -1;
    }
      .header-title{
            background: yellow;
            height: 50px;
            line-height: 50px;
            padding-left:10%
     }
    

</style>

