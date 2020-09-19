<template>
    <div>
        <!--涉案-->
        <el-table :data="tabelData" style="width: 100%" v-if="index === 0">
            <el-table-column prop="shipName" label="船名" fit="true" align="center"></el-table-column>
            <el-table-column prop="shipMmsi" label="MMSI" fit="true" align="center"></el-table-column>
            <el-table-column prop="caseName" label="案件名称" fit="true" align="center"></el-table-column>
            <el-table-column prop="involvedTime" label="涉案时间" fit="true" min-width="100" align="center"></el-table-column>
            <el-table-column prop="remark" label="案件描述" fit="true" min-width="120" align="center"></el-table-column>
        </el-table>
            <!--重点船舶-->
        <el-table :data="tabelData" style="width: 100%" v-if="index === 1">
            <el-table-column prop="source" label="船名" fit="true" min-width="100" align="center"></el-table-column>
            <el-table-column prop="sourceId" label="MMSI" fit="true" min-width="100" align="center"></el-table-column>
            <el-table-column prop="JWD" label="经维度" fit="true" min-width="200"  align="center"></el-table-column>
            <!--<el-table-column prop="sourceLon" label="纬度" fit="true" min-width="100"  align="center"></el-table-column>-->
            <el-table-column prop="sourceCollectDateTime" label="时间" fit="true" min-width="100"  align="center"></el-table-column>
            <el-table-column prop="target" label="目标船名" fit="true" min-width="100" align="center"></el-table-column>
            <el-table-column prop="targetId" label="目标MMSI" fit="true" min-width="100" align="center"></el-table-column>
            <el-table-column prop="jwD" label="目标经维度" fit="true" min-width="200"  align="center"></el-table-column>
            <!--<el-table-column prop="targetLon" label="目标纬度" fit="true" min-width="100"  align="center"></el-table-column>-->
            <el-table-column prop="targetCollectDateTime" label="时间" fit="true" min-width="100"  align="center"></el-table-column>
        </el-table>
        <!--线人举报-->
        <el-table :data="tabelData" style="width: 100%" v-if="index === 2">
            <el-table-column prop="reportUsername" label="举报人姓名" fit="true" min-width="100" align="center"></el-table-column>
            <el-table-column prop="reportCardId" label="举报人身份证" fit="true" min-width="150"  align="center"></el-table-column>
            <el-table-column prop="reportshipName" label="船名" fit="true" min-width="110" align="center"></el-table-column>
            <el-table-column prop="reportshipMmsi" label="MMSI" fit="true" min-width="100" align="center"></el-table-column>
            <el-table-column prop="reportReason" label="举报原因" fit="true" min-width="100" align="center"></el-table-column>
            <el-table-column prop="reportDate" label="举报时间" fit="true" min-width="140"  align="center"></el-table-column>
        </el-table>
        <!--区域出现-->
        <el-table :data="tabelData" style="width: 100%" v-if="index === 3">
            <el-table-column prop="shipName" label="船名" fit="true" align="center"></el-table-column>
            <el-table-column prop="shipMmsi" label="MMSI" fit="true" align="center"></el-table-column>
            <el-table-column prop="areaName" label="区域名称" fit="true" min-width="100"  align="center"></el-table-column>
            <el-table-column prop="entryTime" label="进入时间" fit="true" min-width="100"  align="center"></el-table-column>
            <el-table-column prop="longitude" label="经度" fit="true" align="center"></el-table-column>
            <el-table-column prop="latitude" label="维度" fit="true" align="center"></el-table-column>
        </el-table>
        <!--昼伏夜出-->
        <el-table :data="tabelData" style="width: 100%" v-if="index === 4">
            <el-table-column prop="shipName" label="船名" fit="true" align="center"></el-table-column>
            <el-table-column prop="mmsi" label="MMSI" fit="true" align="center"></el-table-column>
            <el-table-column prop="dayDistance" label="白天行驶距离(KM)" fit="true" align="center"></el-table-column>
            <el-table-column prop="nightDistance" label="夜间行驶距离(KM)" fit="true" align="center"></el-table-column>
            <el-table-column prop="countTime" label="时间" fit="true" align="center"></el-table-column>
        </el-table>
        <!--多次交驳-->
        <el-table :data="tabelData" style="width: 100%" v-if="index === 5">
            <el-table-column prop="source" label="船名" fit="true" min-width="100" align="center"></el-table-column>
            <el-table-column prop="sourceId" label="MMSI" fit="true" min-width="100" align="center"></el-table-column>
            <el-table-column prop="JWD" label="经纬度" fit="true" min-width="200" align="center"></el-table-column>
            <el-table-column prop="sourceCollectDateTime" label="时间" fit="true" min-width="100" align="center"></el-table-column>
            <el-table-column prop="target" label="目标船名" fit="true" min-width="110" align="center"></el-table-column>
            <el-table-column prop="targetId" label="目标MMSI" fit="true" min-width="100" align="center"></el-table-column>
            <el-table-column prop="jwD" label="目标经纬度" fit="true" min-width="200" align="center"></el-table-column>
            <el-table-column prop="targetCollectDateTime" label="时间" fit="true" min-width="110" align="center"></el-table-column>
        </el-table>
        <!--停泊-->
        <el-table :data="tabelData" style="width: 100%" v-if="index === 6">
            <el-table-column prop="shipId" label="船舶ID" fit="true" min-width="100" align="center"></el-table-column>
            <el-table-column prop="mmsi" label="MMSI" fit="true" min-width="100" align="center"></el-table-column>
            <el-table-column prop="startDateTime" label="开始时间" fit="true" min-width="100" align="center"></el-table-column>
            <el-table-column prop="endDateTime" label="结束时间" fit="true" min-width="100" align="center"></el-table-column>
            <el-table-column prop="mooringDuration" label="持续时间" fit="true" min-width="100" align="center"></el-table-column>
        </el-table>
        <!--停靠-->
        <el-table :data="tabelData" style="width: 100%" v-if="index === 7">
            <el-table-column prop="shipId" label="船舶ID" fit="true" min-width="100" align="center"></el-table-column>
            <el-table-column prop="mmsi" label="MMSI" fit="true" min-width="100" align="center"></el-table-column>
            <el-table-column prop="startDateTime" label="开始时间" fit="true" min-width="100" align="center"></el-table-column>
            <el-table-column prop="endDateTime" label="结束时间" fit="true" min-width="100" align="center"></el-table-column>
            <el-table-column prop="mooringDuration" label="持续时间" fit="true" min-width="100" align="center"></el-table-column>
        </el-table>


    </div>
</template>

<script>
    export default {
        name: "dateilsTable",
        props:{
            dataList:Array,
            tabelHeadS:Array,
            bg:Number
        },
        watch:{
            dataList(n,o){
                this.tabelData = n;
            },
            tabelHeadS(n,o){
                this.tabelHead = n;
            },
            bg(n,o){
                this.index = n;
            }
        },
        data(){
            return{
                tabelData:Array(),
                tabelHead: [],
                index:0,
            }
        },

        mounted(){

        },
        methods:{

        }
    }
</script>

<style>

</style>