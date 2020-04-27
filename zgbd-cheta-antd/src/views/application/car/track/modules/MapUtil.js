export default {

  getAddress (lng, lat, fn) {
    AMap.plugin('AMap.Geocoder', function() {
      var geocoder = new AMap.Geocoder()
      var lnglat = new AMap.LngLat(lng, lat);
      geocoder.getAddress(lnglat, function(status, result) {
        if (status === 'complete' && result.regeocode) {
          fn(result.regeocode)
        }
      });
    })
  }
}