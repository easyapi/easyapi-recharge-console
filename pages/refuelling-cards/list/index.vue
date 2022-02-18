<template>
  <div class='container'>
    <Header></Header>
    <div :class="showHeader ? 'content' : 'contents'">
      <Aside></Aside>
      <div :class="showSidebar ? 'main' : 'main-left main'">
        <div class='main-title'>
          <div class='main-title_top'>
            <b>充值订单</b>
          </div>
        </div>
        <div class='mg-tp-20'>
          <div class="main-content">
            <el-table
              :data="tableData"
              style="width: 100%">
              <el-table-column
                prop="date"
                label="订单号">
              </el-table-column>
              <el-table-column
                prop="name"
                label="时间">
              </el-table-column>
              <el-table-column
                prop="address"
                label="卡类型">
              </el-table-column>
              <el-table-column
                prop="address"
                label="加油卡号">
              </el-table-column>
              <el-table-column
                prop="address"
                label="价格">
              </el-table-column>
              <el-table-column
                prop="address"
                label="面值">
              </el-table-column>
              <el-table-column
                prop="address"
                label="状态">
              </el-table-column>
            </el-table>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import Index from './index'

  export default Index
</script>
