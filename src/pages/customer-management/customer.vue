<template>
    <WtDataTable :url="url" :checkBox="checkBox" :cols="cols" :height=' $store.state.windHeight - 255' >
    </WtDataTable>
</template>

<script>
    export default {
        data:function(){
            return {
                url:'api/test.json',
                checkBox:true,
                cols:[
                    {
                        title: '客户名称',
                        key: 'name'
                    },
                    {
                        title: '访问的url',
                        key: 'requestURI'
                    },
                    {
                        title: '请求类型',
                        key: 'requestType'
                    },
                    {
                        title: '远程端口',
                        key: 'remotePort'
                    },
                    {
                        title: '耗时',
                        key: 'timeConsuming'
                    },
                    {
                        title: '发起时间',
                        key: 'createDateTime',
                        render(h) {
                            return h('span',{},'呵呵')
                        },
                    }
                ]
            }
        }
    }
</script>

<style scoped>

</style>