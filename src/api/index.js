import http from '@/utils/request'

const postReq = {
  // 获取船舶类型
  async getShipType () {
    const { data } = await http.get('/sys/dict/type/ship_type')
    return data
  },

  /* 研判报告-B */
  // 获取船舶信息
  async loadShipData (mmsi) {
    const { data } = await http.get('/hkship/ship/getByMmsi/' + mmsi)
    return data
  },
  // 船主信息
  async shipownerd (mmsi) {
    const { data } = await http.get('/ship/shipowner/' + mmsi)
    return data
  },
  // 异常标签
  async exceptionlabel (mmsi) {
    const { data } = await http.get('/report/exLabelNew/' + mmsi)
    return data
  },
  // 可能出发的海港
  async departurePort (mmsi) {
    const { data } = await http.get('/model/prosshipharbor/latest/' + mmsi)
    return data
  },
  //    研判报告
  async getReport (mmsi) {
    const { data } = await http.get('/report/getExceptionData/' + mmsi)
    return data
  },

  /* 研判报告-D */

  /* 模型配置 */
  async DiurnalNightOut (params) {
    const { data } = await http.post('/sys/params/addCrouchingNight/', params)
    return data
  },
  async keyAreas (params) {
    const { data } = await http.post('/sys/params/addKeyAreasAppear/', params)
    return data
  },
  async KeyShip (params) {
    const { data } = await http.post('/sys/params/addKeyShipConn/', params)
    return data
  },
  // 停靠
  async longBerth (params) {
    const { data } = await http.post('/sys/params/addLongTimgStop/', params)
    return data
  },
  // 停泊
  async longBerthing (params) {
    const { data } = await http.post('/sys/params/addLongTimeMooring/', params)
    return data
  },
  async modelConfiguration (params) {
    const { data } = await http.post('/sys/params/addDatapreproConfig/', params)
    return data
  },
  async refutation (params) {
    const { data } = await http.post('/sys/params/addMultipleTimes/', params)
    return data
  },
  async shipGather (params) {
    const { data } = await http.post('/sys/params/addShipGather/', params)
    return data
  },
  /** 模型配置数据回显 **/
  async DiurnalNightOutS () {
    const { data } = await http.get('/sys/params/getCrouchingNight/')
    return data
  },
  async keyAreasS () {
    const { data } = await http.get('/sys/params/getKeyAreasAppear/')
    return data
  },
  async KeyShipS () {
    const { data } = await http.get('/sys/params/getKeyShipConn/')
    return data
  },
  // 停靠
  async longBerthS () {
    const { data } = await http.get('/sys/params/getLongTimgStop/')
    return data
  },
  // 停泊
  async longBerthingS () {
    const { data } = await http.get('/sys/params/getLongTimeMooring/')
    return data
  },
  async modelConfigurationS () {
    const { data } = await http.get('/sys/params/getDatapreproConfig/')
    return data
  },
  async refutationS () {
    const { data } = await http.get('/sys/params/getMultipleTimes/')
    return data
  },
  async shipGatherS () {
    const { data } = await http.get('/sys/params/getShipGather/')
    return data
  },

  /** ***详情*****/
  // 异常线索列表
  async dayAndNight (params) {
    const { data } = await http.get('/model/bat/page/', { params })
    return data
  },
  async multibar (params) {
    const { data } = await http.get('/model/refutation/selectMultipleTransferPage/', { params })
    return data
  },
  async vesinvo (params) {
    const { data } = await http.get('/casedata/involvedship/page/', { params })
    return data
  },
  async keyShip (params) {
    const { data } = await http.get('/model/refutation/selectKeyShipTransePage/', { params })
    return data
  },
  async inforReport (params) {
    const { data } = await http.get('/informerreport/informerreport/page/', { params })
    return data
  },
  async keyareas (params) {
    const { data } = await http.get('/keyarea/keyarearecord/page/', { params })
    return data
  },
  // 停泊
  async longBerthMet (params) {
    const { data } = await http.get('/model/anchor/page/', { params })
    return data
  },
  // 停靠
  async longBerthingMet (params) {
    const { data } = await http.get('/model/docked/page/', { params })
    return data
  },
  /* 异常等级-B */
  // 删除
  async deleteData (id) {
    const { data } = await http.delete('/sys/sysabnormallevel/deleteById/' + id)
    return data
  },

  //  涉案次数异常等级
  // 获取
  async findInformants () {
    const { data } = await http('/sys/sysabnormallevel/findInformants')
    return data
  },
  // 涉案次数 添加
  async addInformants (params) {
    const { data } = await http.post('/sys/sysabnormallevel/addInformants', params)
    return data
  },
  // 涉案次数 修改
  async updateInformants (params) {
    const { data } = await http.put('/sys/sysabnormallevel/updateInformants', params)
    return data
  },

  // 与重点船舶交驳交驳次数
  // 保存
  async addKeyShip (params) {
    const { data } = await http.post('/sys/sysabnormallevel/addKeyShip', params)
    return data
  },
  // 获取
  async findKeyShip () {
    const { data } = await http('/sys/sysabnormallevel/findKeyShip')
    return data
  },
  // 修改
  async updateKeyShip (params) {
    const { data } = await http.put('/sys/sysabnormallevel/updateKeyShip', params)
    return data
  },
  // 线人举报次数
  // 获取
  async findInfomerReport () {
    const { data } = await http('/sys/sysabnormallevel/findInfomerReport')
    return data
  },
  // 保存
  async addInfomerReport (params) {
    const { data } = await http.post('/sys/sysabnormallevel/addInfomerReport', params)
    return data
  },
  // 修改
  async updateInfomerReport (params) {
    const { data } = await http.put('/sys/sysabnormallevel/updateInfomerReport', params)
    return data
  },

  // 重点区域出现
  // 获取
  async findKeyArea () {
    const { data } = await http('/sys/sysabnormallevel/findKeyArea')
    return data
  },
  // 保存
  async addKeyArea (params) {
    const { data } = await http.post('/sys/sysabnormallevel/addKeyArea', params)
    return data
  },
  // 修改
  async updateKeyArea (params) {
    const { data } = await http.put('/sys/sysabnormallevel/updateKeyArea', params)
    return data
  },
  // 船舶昼伏夜出
  // 获取
  async findCrouchingNight () {
    const { data } = await http('/sys/sysabnormallevel/findCrouchingNight')
    return data
  },
  // 保存
  async addCrouchingNight (params) {
    const { data } = await http.post('/sys/sysabnormallevel/addCrouchingNight', params)
    return data
  },
  // 修改
  async updateCrouchingNight (params) {
    const { data } = await http.put('/sys/sysabnormallevel/updateCrouchingNight', params)
    return data
  },
  // 多次交驳
  // 获取
  async findMultipleTrans () {
    const { data } = await http('/sys/sysabnormallevel/findMultipleTrans')
    return data
  },
  // 保存
  async addMultipleTrans (params) {
    const { data } = await http.post('/sys/sysabnormallevel/addMultipleTrans', params)
    return data
  },
  // 修改
  async updateMultipleTrans (params) {
    const { data } = await http.put('/sys/sysabnormallevel/updateMultipleTrans', params)
    return data
  },
  // 长时间停泊
  // 获取
  async findLongtimeMooring () {
    const { data } = await http('/sys/sysabnormallevel/findLongtimeMooring')
    return data
  },
  // 保存
  async addLongtimeMooring (params) {
    const { data } = await http.post('/sys/sysabnormallevel/addLongtimeMooring', params)
    return data
  },
  // 修改
  async updateLongtimeMooring (params) {
    const { data } = await http.put('/sys/sysabnormallevel/updateLongtimeMooring', params)
    return data
  },
  // 长时间停靠
  // 获取
  async findLongtimgStop () {
    const { data } = await http('/sys/sysabnormallevel/findLongtimgStop')
    return data
  },
  // 保存
  async addLongtimgStop (params) {
    const { data } = await http.post('/sys/sysabnormallevel/addLongtimgStop', params)
    return data
  },
  // 修改
  async updateLongtimgStop (params) {
    const { data } = await http.put('/sys/sysabnormallevel/updateLongtimgStop', params)
    return data
  }
}
export default postReq
