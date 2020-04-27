<template>
  <monaco-editor
    class="editor"
    v-model="code"
    language="javascript">
  </monaco-editor>
</template>

<script>
  import MonacoEditor from 'vue-monaco'

  export default {
    name: 'Protocollist',
    components: {
      MonacoEditor
    },

    data() {
      return {
        code: `
function elerecmsg(hexString){
	var data = {
		Ae : '0',
		Be : '0',
		Ce : '0',
		Av : '0',
		Bv : '0',
		Cv : '0',
		Av2 : '0',
		Bv2 : '0',
		Cv2 : '0',
		louele : '0',
		otemp : '0',
		totemp : '0',
		thtemp : '0',
		frtemp : '0',
	}

	//截取有多少段0200的数据
	var str = hexString;
	var sl = str.length;
	var s2 = sl / 20;
	for (var i = 0; i < s2; i++) {
		var eleStr = str.substring(i*20+4,(i+1)*20);
		if(eleStr == null)
			return;
		var type = eleStr.substring(0,2);
		switch (type){
			//A、B、C三相电流
			case "21":
				data.Ae = elezhuanhuan(eleStr.substring(2,4),eleStr.substring(4,6))+"A";
				data.Be = elezhuanhuan(eleStr.substring(6,8),eleStr.substring(8,10))+"A";
				data.Ce = elezhuanhuan(eleStr.substring(10,12),eleStr.substring(12,14))+"A";
				break;
			case "22":
				data.Av = elezhuanhuan(eleStr.substring(2,4),eleStr.substring(4,6))+"V";
				data.Bv = elezhuanhuan(eleStr.substring(6,8),eleStr.substring(8,10))+"V";
				data.Cv = elezhuanhuan(eleStr.substring(10,12),eleStr.substring(12,14))+"V";
				break;
			case "23":
				data.Av2 = elezhuanhuan(eleStr.substring(2,4),eleStr.substring(4,6))+"V";
				data.Bv2 = elezhuanhuan(eleStr.substring(6,8),eleStr.substring(8,10))+"V";
				data.Cv2 = elezhuanhuan(eleStr.substring(10,12),eleStr.substring(12,14))+"V";
				break;
			case "24":
				data.louele = elezhuanhuan(eleStr.substring(2,4),eleStr.substring(4,6))+"ma";
				data.otemp = elezhuanhuan(eleStr.substring(6,8),eleStr.substring(8,10))+"℃";
				data.totemp = elezhuanhuan(eleStr.substring(10,12),eleStr.substring(12,14))+"℃";
				break;
			case "25":
				data.thtemp = elezhuanhuan(eleStr.substring(2,4),eleStr.substring(4,6))+"℃";
				data.frtemp = elezhuanhuan(eleStr.substring(6,8),eleStr.substring(8,10))+"℃";
				break;
		}
	}
	return JSON.stringify(data);
}

function elezhuanhuan(strl,strh){
	var resultsString = "0";
	var num = strh+strl;
	resultsString = (parseInt(num,16)/10).toFixed(1);
	return resultsString;
}
        `
      }
    }
  }
</script>

<style>
  .editor {
    width: calc(100% - 250px);
    height: 100%;
  }
</style>