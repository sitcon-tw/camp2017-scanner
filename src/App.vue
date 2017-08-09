<template>
  <div id="app">
    <qrcode-reader :enable="true" :noResult="true" title="" subTitle="請掃描點數 Qrcode" @OnSuccess="OnSuccess"></qrcode-reader>
  </div>
</template>

<script>
import QrcodeReader from './components/QrcodeReader'
import axios from 'axios'

export default {
  name: 'app',
  components: {
    QrcodeReader
  },
  methods: {
    OnSuccess(result) {
      if ((this.parameters().token || '').length !== 0) {
        
      }
    },
    parameters() {
      return location.search.split('?').pop().split('&').map(function (p) {
        var ps = p.split('=');
        var o = {};
        o[ps.shift()] = ps.join('=');
        return o;
      }).reduce(function (a, b) {
        var o = a;
        for (var k in b) {
          o[k] = b[k];
        }
        return o;
      });
    }
  },
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
