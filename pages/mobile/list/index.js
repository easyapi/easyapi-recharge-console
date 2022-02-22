import './index.scss'
import Header from '../../../components/Header'
import Aside from '../../../components/Aside'
import { getMobileList } from '../../../api/mobile'
import pagination from '../../../components/Pagination'

export default {
  name: '',
  components: {
    Header,
    Aside,
    pagination
  },
  head() {
    return {
      title: '加油卡充值订单 - EasyAPI充值中心',
      meta: [
        { hid: 'description', name: 'description', content: '每日统计' },
        { hid: 'keyword', name: 'keyword', content: '每日统计' }
      ]
    }
  },
  data() {
    return {
      showHeader: '',
      showSidebar: '',
      tableData: [],
      tableText: '',
      pagination: {
        pageSize: 10,
        total: null,
        page: 1
      }
    }
  },
  methods: {
    getMobileList() {
      let params = {
        page: this.pagination.page - 1,
        size: this.pagination.pageSize
      }
      getMobileList(params, this).then(res => {
        if (res.data.code === 1) {
          this.pagination.total = res.data.totalElements
          this.tableData = res.data.content
        } else {
          this.pagination.total = 0
          this.tableData = []
        }
      })
    },
    fatherSize(data) {
      this.pagination.pageSize = data
      this.getMobileList()
    },
    fatherCurrent(data) {
      this.pagination.page = data
      this.getMobileList()
    }
  },
  mounted() {
    this.getMobileList()
    if (this.$store.state.settings.showHeader == 'true') {
      this.showHeader = true
    } else {
      this.showHeader = false
    }
    if (this.$store.state.settings.showSidebar == 'true') {
      this.showSidebar = true
    } else {
      this.showSidebar = false
    }
  }
}
