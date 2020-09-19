<template>
    <div class="containerBox flex">
        <div class="leftBox">
            <div class="leftBoxTop">
                <h3>近一个月异常统计</h3>
                <div class="">
                    <ul class="flex">
                        <li v-for="(item,i) in statistics" :key="i"
                            :class="{borRig:i===0||i===1||i===2||i===4||i===5||i===6}">
                            <span :style="{color:item.colour}">{{item.num}}</span>
                            <p>{{item.name}}</p>
                        </li>
                    </ul>
                </div>
            </div>
            <div class="leftBoxBot">
                <div class="leftBoxBot_head flex">
                    <h3>近一个月异常列表</h3>
                    <el-date-picker
                            v-model="dateVal"
                            type="datetimerange"
                            @change="onClick"
                            range-separator="至"
                            start-placeholder="开始日期"
                            end-placeholder="结束日期"
                            value-format="yyyy-MM-dd HH:mm:ss">
                    </el-date-picker>
                </div>
                <div class="leftBoxBot_list">
                    <ul class="flex">
                        <li v-for="(item,i) in listTab" :class="{leftBoxBot_list_bg:i === bg}" @click="tabSwitch(i)">
                            {{item}}
                        </li>
                    </ul>
                    <details-table :dataList="tabelData" :tabelHeadS="tabelHead" :bg="bg"
                                   v-loading="tabLoading"></details-table>
                    <el-pagination
                            :current-page="page"
                            :page-size=7
                            :total="total"
                            layout="prev, pager, next"
                            :pager-count='5'
                            @size-change="pageSizeChangeHandle"
                            @current-change="pageCurrentChangeHandle"
                    >
                    </el-pagination>
                </div>
            </div>
        </div>
        <div class="rightBox">
            <div class="shipBox">
                <h3>船舶档案信息</h3>
                <div class="flex">
                    <ul>
                        <li class="leftBor" v-for="(item,i) in shipData1" :key="i">
                            <span class="liSpan">{{item[0]}}</span>
                            <span class="information">{{shipInfoData[item[1]]}}</span>
                        </li>
                    </ul>
                    <ul>
                        <li class="leftBor" v-for="(item,i) in shipData2" :key="i">
                            <span class="liSpan">{{item[0]}}</span>
                            <span class="information">{{shipInfoData[item[1]]}}</span>
                        </li>
                    </ul>
                </div>
            </div>
            <div class="shipOwnerBox">
                <h3>船主档案信息</h3>
                <div class="flex" style="justify-content: space-between;">
                    <ul>
                        <li class="leftBor" v-for="(item,i) in shipownerData" :key="i">
                            <span class="liSpan">{{item[0]}}</span>
                            <span class="information">{{ shipownerInfoData[item[1]] }}</span>
                        </li>
                    </ul>
                    <img :src="shipownerInfoData.shipownerHearurl" alt="">
                </div>
            </div>
            <div class="port">
                <h3>可能出发的港口</h3>
                <ul v-if="!porttableData && porttableData.length !== 0" class="flex">
                    <li v-for="(item,i) in porttableData" :key="i">
                        {{item.name}}
                    </li>
                </ul>
            </div>
        </div>
    </div>
</template>

<script>
    import detailsTable from '@/views/modules/detailsPage/dateilsTable.vue'
    import '@/assets/css/model.css'
    import moment from 'moment'
    import { timeFormat } from '@/utils'
    export default {
        name: "detailsPage",
        // mixins: [details],
        components: {detailsTable},
        data() {
            return {
                statistics: [],
                shipData1: [['MMSI', 'mmsi'], ['船舶长度', 'shipLength'], ['船舶宽度', 'shipWidth'], ['吃水深度', 'shipDraft']],
                shipData2: [['船舶名称', 'shipName'], ['船舶呼号', 'callSign'], ['船舶类型', 'shipType'],
                    ['IMO', 'imo']],
                shipInfoData: {},
                shipownerInfoData: {},
                shipownerData: [['姓名', 'shipownerName'], ['曾用名', 'shipownerbeforeName'], ['性别', 'shipownerGender'],
                    ['身份证号', 'shipownerCardId'], ['电话', 'shipownerMobil']],

                dateVal: [],
                listTab: ['涉案记录', '与重点船舶交驳', '线人举报', '重点区域出现', '昼伏夜出', '多次交驳', '长时间停泊', '长时间停靠'],
                startTime: '',
                endTime: '',
                page: 1,
                limit: 7,
                tabelHead: [],
                dataList: {},
                tabelData: [],
                vesinvoData: [],
                keyShipData: [],
                inforReportData: [],
                keyareasData: [],
                dayAndNightData: [],
                multibarData: [],
                longBerthData: [],
                longBerthingData: [],
                porttableData: [],
                bg: 0,
                totals: {},
                total: null,
                loading: null,
                tabLoading: false,
                mmsi: this.$store.state.user.mmsi
            }
        },
        computed:{
          mMsi(){
             return this.$store.state.user.mmsi;
          }
        },
        created(){
            this.defaultTime();
        },
        watch: {
           mMsi(n){
               this.mmsi = n;
               this.bg = 0;
               this.exceptionlabeld(this.mmsi);
               this.loadShipData();
               this.shipownerd();
               this.departurePort();
               this.openFullScreen();
               this.vesinvoMet();
               this.dayAndNightMet();
               this.multibarMet();
               this.keyShipMet();
               this.longBerthingMet();
               this.longBerthMet();
               this.inforReportMet();
               this.keyareasMet();
           }
        },
        mounted() {
            this.bg = 0;
            this.exceptionlabeld(this.mmsi);
            this.loadShipData();
            this.shipownerd();
            this.departurePort();
            this.openFullScreen();
            this.vesinvoMet();
            this.dayAndNightMet();
            this.multibarMet();
            this.keyShipMet();
            this.longBerthingMet();
            this.longBerthMet();
            this.inforReportMet();
            this.keyareasMet();
            this.defaultTime();
        },
        methods: {
            //日期选择
            onClick() {
                this.tabLoading = true;
                this.startTime = this.dateVal[0] ? this.dateVal[0] : '';
                this.endTime = this.dateVal[1] ? this.dateVal[1] : '';
                this.swi();
            },
            //loding
            openFullScreen() {
                this.loading = this.$loading({
                    lock: true,
                    text: 'Loading',
                    spinner: 'el-icon-loading',
                    background: 'rgba(255, 255, 255, 0.7)'
                });
            },
            defaultTime() {
                this.dateVal = [moment().subtract(1, 'month').format("YYYY-MM-DD hh:mm:ss"), moment().format("YYYY-MM-DD hh:mm:ss")]
            },
            //tab切换
            tabSwitch(i) {
                switch (i) {
                    case 0:
                        this.defaultTime();
                        this.tabelData = this.dataList.vesinvoData;
                        this.total = this.totals.vesinvo;
                        this.bg = i;
                        break;
                    case 1:
                        this.defaultTime();
                        this.tabelData = this.dataList.keyShipData;
                        this.total = this.totals.keyShip;
                        this.bg = i;
                        break;
                    case 2:
                        this.defaultTime();
                        this.tabelData = this.dataList.inforReportData;
                        this.total = this.totals.inforRepor;
                        this.bg = i;
                        break;
                    case 3:
                        this.defaultTime();
                        this.tabelData = this.dataList.keyareasData;
                        this.total = this.totals.keyareas;
                        this.bg = i;
                        break;
                    case 4:  //昼伏夜出
                        this.defaultTime();
                        this.tabelData = this.dataList.dayAndNightData;
                        this.total = this.totals.dayAndNight;
                        this.bg = i;
                        break;
                    case 5:
                        this.defaultTime();
                        this.tabelData = this.dataList.multibarData;
                        this.total = this.totals.multibar;
                        this.bg = i;
                        break;
                    case 6:
                        this.defaultTime();
                        this.tabelData = this.dataList.longBerthData;
                        this.total = this.totals.longBerth;
                        this.bg = i;
                        break;
                    case 7:
                        this.defaultTime();
                        this.tabelData = this.dataList.longBerthingData;
                        this.total = this.totals.longBerthing;
                        this.bg = i;
                        break;
                }
            },
            pageSizeChangeHandle(index, row) {
                console.log(index, row);
            },
            // 分页, 当前页
            pageCurrentChangeHandle(i) {
                this.page = i;
                this.tabLoading = true;
                this.swi();
            },
            swi() {
                switch (this.bg) {
                    case 0:
                        this.vesinvoMet().then(() => {
                            this.tabelData = this.dataList.vesinvoData;
                        });
                        break;
                    case 1:
                        this.keyShipMet().then(() => {
                            this.tabelData = this.dataList.keyShipData;
                        });
                        break;
                    case 2:
                        this.inforReportMet().then(() => {
                            this.tabelData = this.dataList.inforReportData;
                        });
                        break;
                    case 3:
                        this.keyareasMet().then(() => {
                            this.tabelData = this.dataList.keyareasData;
                        });

                        break;
                    case 4:
                        this.dayAndNightMet().then(() => {
                            this.tabelData = this.dataList.dayAndNightData;
                        });
                        break;
                    case 5:
                        this.multibarMet().then(() => {
                            this.tabelData = this.dataList.multibarData;
                        });
                        break;
                    case 6:
                        this.longBerthMet().then(() => {
                            this.tabelData = this.dataList.longBerthData;
                        });
                        break;
                    case 7:
                        this.longBerthingMet().then(() => {
                            this.tabelData = this.dataList.longBerthingData;;
                        });
                        break;
                }
            },
            //时间戳转换
            timestampToTime(timestamp) {
                var date = new Date(timestamp * 1000);//时间戳为10位需*1000，时间戳为13位的话不需乘1000
                Y = date.getFullYear() + '-';
                M = (date.getMonth() + 1 < 10 ? '0' + (date.getMonth() + 1) : date.getMonth() + 1) + '-';
                D = date.getDate() + ' ';
                h = date.getHours() + ':';
                m = date.getMinutes() + ':';
                s = date.getSeconds();
                return Y + M + D + h + m + s;
            },
            //  异常标签
            exceptionlabeld(mmsi) {
                this.statistics = [];
                this.$postReq.exceptionlabel(mmsi).then(res => {
                    if (res.code === 0 && res.data != null) {
                        var diurnal = {};
                        diurnal.num = res.data.zfycMap.night + '/' + res.data.zfycMap.moring;
                        diurnal.name = res.data.zfycMap.name;
                        diurnal.colour = res.data.zfycMap.colour;
                        res.data.zfycMap = diurnal;
                        for (var i in res.data) {
                            this.statistics.push(res.data[i])
                        }
                    }
                })
            },

            //异常列表
            async dayAndNightMet() {
                var params = {
                    page: this.page,
                    limit: this.limit,
                    keywords: this.mmsi,
                    startTime: this.dateVal[0],
                    endTime: this.dateVal[1]
                };
                await this.$postReq.dayAndNight(params).then(res => {
                    if (res.code === 0 && res.data != null) this.dataList.dayAndNightData = res.data.list;
                    this.dataList.dayAndNightData.forEach(s=>{
                        s.dayDistance = (s.dayDistance/1000).toFixed(1)
                        s.nightDistance = (s.nightDistance/1000).toFixed(1)
                    })
                    this.totals.dayAndNight = res.data.total;
                    this.loading.close();
                    this.tabLoading = false;
                })
            },
            async multibarMet() {
                var params = {
                    page: this.page,
                    limit: this.limit,
                    keywords: this.mmsi,
                    startTime: this.dateVal[0],
                    endTime: this.dateVal[1]
                };
                await this.$postReq.multibar(params).then(res => {
                    if (res.code === 0 && res.data != null) {
                        res.data.list.forEach(s => {
                            s.JWD = s.sourceLon + ',' + s.sourceLat;
                            s.jwD = s.targetLon + ',' + s.targetLat;
                        });
                    }
                    this.dataList.multibarData = res.data.list;
                    this.totals.multibar = res.data.total;
                    this.tabLoading = false;
                })
            },
            async vesinvoMet() {
                var params = {
                    page: this.page,
                    limit: this.limit,
                    keywords: this.mmsi,
                    startTime: this.dateVal[0],
                    endTime: this.dateVal[1]
                };
                await this.$postReq.vesinvo(params).then(res => {
                    if (res.code === 0 && res.data != null) this.dataList.vesinvoData = res.data.list;
                    this.totals.vesinvo = res.data.total;
                    this.tabLoading = false;
                    this.tabelData = this.dataList.vesinvoData;
                    this.total = this.totals.vesinvo;
                })
            },
            async keyShipMet() {
                var params = {
                    page: this.page,
                    limit: this.limit,
                    keywords: this.mmsi,
                    startTime: this.dateVal[0],
                    endTime: this.dateVal[1]
                };
                await this.$postReq.keyShip(params).then(res => {
                    if (res.code === 0 && res.data != null) {
                        res.data.list.forEach(s => {
                            s.JWD = s.sourceLon + ',' + s.sourceLat;
                            s.jwD = s.targetLon + ',' + s.targetLat;
                        });
                        this.dataList.keyShipData = res.data.list
                    }
                    this.totals.keyShip = res.data.total;
                    this.tabLoading = false;
                })
            },
            async inforReportMet() {
                var params = {
                    page: this.page,
                    limit: this.limit,
                    keywords: this.mmsi,
                    startTime: this.dateVal[0],
                    endTime: this.dateVal[1]
                };
                await this.$postReq.inforReport(params).then(res => {
                    if (res.code === 0 && res.data != null) this.dataList.inforReportData = res.data.list;
                    this.totals.inforRepor = res.data.total;
                    this.tabLoading = false;
                })
            },
            async keyareasMet() {
                var params = {
                    page: this.page,
                    limit: this.limit,
                    keywords: this.mmsi,
                    startTime: this.dateVal[0],
                    endTime: this.dateVal[1]
                };
                await this.$postReq.keyareas(params).then(res => {
                    if (res.code === 0 && res.data != null) this.dataList.keyareasData = res.data.list;
                    this.totals.keyareas = res.data.total;
                    this.tabLoading = false;
                })
            },
            async longBerthingMet() {
                var params = {
                    page: this.page,
                    limit: this.limit,
                    keywords: this.mmsi,
                    startTime: this.dateVal[0],
                    endTime: this.dateVal[1]
                };
                await this.$postReq.longBerthingMet(params).then(res => {
                    if (res.code === 0 && res.data != null) this.dataList.longBerthingData = res.data.list;
                    this.dataList.longBerthingData.forEach(s=>{
                        s.mooringDuration = timeFormat(s.mooringDuration)
                    })
                    this.totals.longBerthing = res.data.total;
                    this.tabLoading = false;
                })
            },
            async longBerthMet() {  //停泊
                var params = {
                    page: this.page,
                    limit: this.limit,
                    keywords: this.mmsi,
                    startTime: this.dateVal[0],
                    endTime: this.dateVal[1]
                };
                await this.$postReq.longBerthMet(params).then(res => {
                    console.log(res.data)
                    if (res.code === 0 && res.data != null) this.dataList.longBerthData = res.data.list;
                    this.dataList.longBerthData.forEach(s=>{
                        s.mooringDuration = timeFormat(s.mooringDuration)
                    })
                    this.totals.longBerth = res.data.total;
                    this.tabLoading = false;
                })
            },

            //船主
            loadShipData() {
                this.$postReq.loadShipData(this.mmsi).then(res => {
                    if (res.code === 0 && res.data != null) this.shipInfoData = res.data;
                })
            },
            // 船主信息
            shipownerd() {
                this.$postReq.shipownerd(this.mmsi).then(res => {
                    if (res.code === 0 && res.data != null) this.shipownerInfoData = res.data;

                })
            },
            //可能出发的海港
            departurePort() {
                this.$postReq.departurePort(this.mmsi).then(res => {
                    if (res.code === 0 && res.data != null) this.porttableData = res.data;

                })
            },
        }
    }
</script>

<style scoped>
    * {
        margin: 0;
        padding: 0;
    }

    .containerBox > div {
        justify-content: space-between;
    }

    .flex {
        display: flex;
        flex-wrap: wrap;
    }

    .containerBox > div > div {
        background: #fff;
    }

    .containerBox .leftBox > div {
        padding: 15px 15px;
    }

    .leftBoxBot {
        padding-top: 5px !important;
    }

    .containerBox h3 {
        font-size: 18px;
        color: #222222;
        display: block;
    }

    .containerBox .leftBox .leftBoxTop ul {
        margin-left: 30px;
    }

    .leftBox {
        width: 65%;
    }

    .rightBox {
        margin-left: 15px;
        width: 32%;
    }

    .leftBoxTop {
        color: #333;
        margin-bottom: 15px;
    }

    .leftBoxTop li {
        display: block;
        width: 23%;
        text-align: center;
        margin-right: 2%;
        margin-top: 15px;
    }

    .leftBoxTop .borRig {
        border-right: 1px solid #ecebeb;
    }

    .leftBoxTop li span {
        font-size: 30px;
        color: #367af9;
    }

    .leftBoxBot_head {
        line-height: 40px;
        margin-bottom: 15px;
        justify-content: space-between;
    }

    .leftBoxBot_list li {
        min-width: 100px;
        font-size: 14px;
        color: #666;
        padding: 10px 20px;
        list-style: none;
        cursor: pointer;
    }

    .leftBoxBot_list_bg {
        background: #367af9 !important;
        color: white !important;
        border-radius: 30px;
    }

    .leftBoxTop li p {
        font-size: 14px;
        color: #333;
    }

    .leftBor {
        display: flex;
        padding-left: 10px;
        margin-top: 20px;
        border-left: 1px solid #367af9;
    }

    .leftBor .liSpan {
        display: inline-block;
        width: 80px;
    }

    .rightBox > div {
        color: #666;
        padding: 15px;
    }

    .shipBox li, .shipOwnerBox li {
        min-width: 185px;
        list-style: none;
    }

    .rightBox .information {
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
        min-width: 80px;
        width: 85px;
        display: inline-block;
    }

    .shipBox, .shipOwnerBox {
        margin-bottom: 15px;
    }

    .shipOwnerBox img {
        width: 30%;
        height: 100%;
    }

    .port ul {
        flex-direction: row;
        justify-content: space-between;
    }

    .port li {
        width: 30%;
        font-size: 12px;
        padding: 10px 12px;
        background: #0808080d;
        list-style: none;
        margin: 10px 0;
        border-radius: 30px;
        text-align: center;

    }
</style>