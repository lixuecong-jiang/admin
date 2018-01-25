<template>
    <div>
        <v-pageTitle vTitle="Basic Table"></v-pageTitle>
        <el-row :gutter="20">
            <el-col :xs="24" :sm="24" :md="12" :lg="12">
                <el-card class="box-card">
                    BASIC TABLE
                    <hr>
                    <v-basicTable></v-basicTable>
                </el-card>
            </el-col>
            <el-col :xs="24" :sm="24" :md="12" :lg="12">
                <el-card class="box-card">
                    STRIPE TABLE
                    <hr>
                    <v-stripeTable></v-stripeTable>
                </el-card>
            </el-col>
        </el-row>
        <el-row>
            <el-col :xs="24" :sm="24" :md="12" :lg="12">
                <el-card class="box-card">
                    BORDER TABLE
                    <hr>
                    <v-borderTable></v-borderTable>
                </el-card>
            </el-col>
            <el-col :xs="24" :sm="24" :md="12" :lg="12">
                <el-card class="box-card">
                    STATE TABLE
                    <hr>
                    <v-stateTable></v-stateTable>
                </el-card>
            </el-col>
        </el-row>
        <el-row>
            <el-col :xs="24" :sm="24" :md="12" :lg="12">
                <el-card class="box-card">
                   FIXROW TABLE
                    <hr>
                    <v-fixRowTable></v-fixRowTable>
                </el-card>
            </el-col>
            <el-col :xs="24" :sm="24" :md="12" :lg="12">
                <el-card class="box-card">
                    FIXCOL TABLE
                    <hr>
                    <v-fixColTable></v-fixColTable>
                </el-card>
            </el-col>
        </el-row>
    </div>
</template>
<script>
    import vPageTitle from '../common/pageTitle';
    import vBasicTable from '../tables/basicTable';
    import vStripeTable from '../tables/stripeTable';
    import vBorderTable from '../tables/borderTable';
    import vStateTable from '../tables/stateTable';
    import vFixRowTable from '../tables/fixRowTable';
    import vFixColTable from '../tables/fixColTable';
    export default {
        name: 'basicTable',
        components: {
            vPageTitle,
            vBasicTable,
            vStripeTable,
            vBorderTable,
            vStateTable,
            vFixRowTable,
            vFixColTable
        }
    }
</script>
<style scoped>
    .box-card {
        color: rgb(119, 119, 119);
        font-size: 12px;
        line-height: 16px;
    }
    .box-card hr {
        border: none;
        height: 1px;
        border-bottom: 1px dashed #ccc;
        margin-top: 10px;
        margin-bottom: 10px;
    }
    .el-row {
        margin-bottom: 20px;
    }
</style>
