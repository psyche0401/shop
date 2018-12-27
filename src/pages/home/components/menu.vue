<template>
    <!-- <span>菜单</span> -->
    <div class="menu">
        <div class="layout">
            <Row type="flex">
                <Col span="24" class="layout-menu-left">
                <Menu active-name="1-2" theme="dark" width="auto" :open-names="['1']">
                    <div class="layout-logo-left"></div>
                    <Submenu name="1">
                        <template slot="title">
                                <Icon type="ios-navigate"></Icon>
                                导航一
</template>
                        <MenuItem name="1-1">选项 1</MenuItem>
                        <MenuItem name="1-2">选项 2</MenuItem>
                        <MenuItem name="1-3">选项 3</MenuItem>
                    </Submenu>
                    <Submenu name="2">
<template slot="title">
    <Icon type="ios-keypad">
    </Icon>
    导航二
</template>
                        <MenuItem name="2-1">选项 1</MenuItem>
                        <MenuItem name="2-2">选项 2</MenuItem>
                    </Submenu>
                    <Submenu name="3">
<template slot="title">
    <Icon type="ios-analytics">
    </Icon>
    导航三
</template>
                        <MenuItem name="3-1">选项 1</MenuItem>
                        <MenuItem name="3-2">选项 2</MenuItem>
                    </Submenu>
                </Menu>
            </Col>
        </Row>
    </div>

        </div>



</template>


<script>
    export default {
        name: 'menu'
    }
</script>


<style lang='scss' scoped>
    @import 'src/assets/styles/varbles.scss';
    .menu {
        width: 200px;
        height: 95vh;
        background: $bgColor;
        // position: absolute;
    }
</style>

