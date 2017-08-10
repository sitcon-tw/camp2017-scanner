<template>
  <div id="app">
    <qrcode-reader :enable="true" :noResult="true" title="" subTitle="請掃描點數 QRcode" @OnSuccess="OnSuccess"></qrcode-reader>
  </div>
</template>

<script>
import QrcodeReader from './components/QrcodeReader'
// import axios from 'axios'

export default {
  name: 'app',
  components: {
    QrcodeReader
  },
  beforeMount () {
    if (this.getIsTelegram()) {
      window.open(window.location.href, '_top')
    }
  },
  methods: {
    OnSuccess (result) {
      if ((this.parameters().token || '').length !== 0) {
      }
    },
    parameters () {
      return location.search.split('?').pop().split('&').map(function (p) {
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
    getQueryString () {
      var queryString = {}
      var query = window.location.search.substring(1)
      var vars = query.split('&')
      for (var i = 0; i < vars.length; i++) {
        var pair = vars[i].split('=')
        // If first entry with this name
        if (typeof queryString[pair[0]] === 'undefined') {
          queryString[pair[0]] = decodeURIComponent(pair[1])
          // If second entry with this name
        } else if (typeof queryString[pair[0]] === 'string') {
          var arr = [queryString[pair[0]], decodeURIComponent(pair[1])]
          queryString[pair[0]] = arr
          // If third or later entry with this name
        } else {
          queryString[pair[0]].push(decodeURIComponent(pair[1]))
        }
      }
      return queryString
    },
    getIsTelegram () {
      var qs = this.getQueryString()
      return !!qs.inlineId || !!qs.chatId || !!qs.messageId || !!qs.userId
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
