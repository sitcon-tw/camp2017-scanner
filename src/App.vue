<template>
  <div id="app">
    <template v-if="mode === 'student'">
      <p style="text-align:center;" v-if="isAndroid">如果使用 Android，請點擊上面三個點 開啟於...</p>
      <qrcode-reader :enable="true" :noResult="true" title="" subTitle="請掃描點數 QRcode" @OnSuccess="OnSuccess"></qrcode-reader>
    </template>
    <template v-else-if="mode === 'admin'">
      <p style="text-align:center;">{{ (point >= 0) ? '獲得 ': '消耗 ' }}分數：</p>
      <input type="number" max="1000000" min="-1000000" step="100" list="defaultNumbers" style="text-align:center;width:150px;height:150px;font-size:1.6rem;" v-model="point"/>
      <datalist id="defaultNumbers">
        <option value="10000"></option>
        <option value="1000"></option>
        <option value="200"></option>
        <option value="100"></option>
        <option value="-100"></option>
        <option value="-200"></option>
        <option value="-1000"></option>
        <option value="-10000"></option>
      </datalist>
      <p>
        <select v-model="description">
          <option>勇敢探索攤位，故{{ ((point >= 0) ? '獲得 ': '消耗 ') + point }}</option>
          <option>因上課表現卓越，{{ ((point >= 0) ? '獲得 ': '消耗 ') + point }}</option>
          <option>無故鬧事，{{ ((point >= 0) ? '獲得 ': '消耗 ') + point }}</option>
          <option>不知道為什麼 我就是想，故{{ ((point >= 0) ? '獲得 ': '消耗 ') + point }}</option>
          <option>活動認真參與，{{ ((point >= 0) ? '獲得 ': '消耗 ') + point }}</option>
          <option>自訂</option>
        </select>
      </p>
      <p>
        <input v-if="description === '自訂'" type="text" v-model="custom" />{{ ((point >= 0) ? '獲得 ': '消耗 ') + point }}
      </p>
      <button type="submit" @click="generate">產生</button>
    </template>
    <template v-else-if="mode === 'admin-finish'">
      <canvas id="qrcode" height="240" width="240"></canvas>
      <p><button @click="back">返回</button></p>
    </template>
    <template v-else>
      <table style="margin: 0 auto;">
        <tr v-for="item in status" :key="item['group_id']">
          <td>{{ item.name }}</td>
          <td>{{ item.coin }}</td>
        </tr>
      </table>
    </template>
    
    
  </div>
</template>

<script>
import QrcodeReader from './components/QrcodeReader'
import axios from 'axios'
import qs from 'qs'

export default {
  name: 'app',
  components: {
    QrcodeReader
  },
  data () {
    return {
      mode: 'student',
      isAndroid: false,
      api: null,
      point: 0,
      description: '',
      custom: '',
      coupon: '',
      status: []
    }
  },
  beforeMount () {
    if ((this.parameters().token || '').length !== 0) {
      this.mode = 'admin'
    } else if ((this.parameters().id || '').length !== 0) {
      this.mode = 'student'
      this.isAndroid = navigator.userAgent.match(/Android/i)
    } else {
      this.mode = 'dashboard'
    }
    var config = {
      baseURL: 'https://ccip.coscup.org/',
      timeout: 3000
      // headers: {'Content-Type': 'multipart/form-data'}
    }
    this.api = axios.create(config)

    window.setInterval(this.getStatus(), 1000)
  },
  computed: {
    desc: function () {
      if (this.description !== '') {
        return this.description
      } else {
        return this.custom + ((this.point >= 0) ? '獲得 ' : '消耗 ') + this.point
      }
    }
  },
  methods: {
    OnSuccess (result) {
      if ((this.parameters().id || '').length !== 0) {
        this.api.post('consume', qs.stringify({group_id: this.parameters().id, coupon: result})).then(function (res) {
          alert(res.data.status)
        }).catch(function (error) {
          alert(error.message)
        })
      }
    },
    parameters () {
      return window.location.search.split('?').pop().split('&').map(function (p) {
        var ps = p.split('=')
        var o = {}
        o[ps.shift()] = ps.join('=')
        return o
      }).reduce(function (a, b) {
        var o = a
        for (var k in b) {
          o[k] = b[k]
        }
        return o
      })
    },
    generate () {
      var self = this
      if ((this.parameters().token || '').length !== 0) {
        this.api.post('generate', qs.stringify({ token: this.parameters().token, coin: this.point, description: this.desc })).then(function (res) {
          self.mode = 'admin-finish'
          self.coupon = res.data.coupon
          self.$nextTick(function () {
            var canvas = document.getElementById('qrcode')
            window.w69b.qr.encoding.drawOnCanvas(self.coupon, canvas)
          })
        })
      }
    },
    back () {
      this.mode = 'admin'
    },
    getStatus () {
      var self = this
      this.api.get('status').then(function (res) {
        self.status = res.data
      })
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
