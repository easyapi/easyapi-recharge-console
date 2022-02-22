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
              <template slot="empty">
                <p>{{tableText}}</p>
              </template>
              <el-table-column
                prop="no"
                label="订单号">
              </el-table-column>
              <el-table-column
                prop="addTime"
                label="时间">
              </el-table-column>
              <el-table-column
                prop="mobile"
                label="手机号码">
              </el-table-column>
              <el-table-column
                prop="price"
                label="价格">
              </el-table-column>
              <el-table-column
                prop="costPrice"
                label="面值">
              </el-table-column>
              <el-table-column
                prop="state"
                label="状态">
              </el-table-column>
            </el-table>
            <pagination
              @fatherSize="fatherSize"
              @fatherCurrent="fatherCurrent"
              :size="pagination.size"
              :total-elements="pagination.total"
              class="paging"
            >
            </pagination>
            <div style="clear: both"></div>
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
