/**
 * Created by Administrator on 15-7-23.
 */
try{
    seajs.config({
    	base: domain.js + '/resources/',
    	//模块名
	    alias: {
	      "jquery": "v4.0/js/commons/jquery/jquery-1.8.2.min.js",
		  "json": "v4.0/js/commons/json2.js",
		  'sidebar':'v4.0/js/index/ctrl/sidebarJsonp.js?version='+domain.version,
		  "common":"v4.0/js/index/ctrl/common.js?version="+domain.version
	    },
		//预加载
		preload: [
			this.$ ? '' : 'jquery',
			this.JSON ? '' : 'json'
		],
		map: [
		       [ /^(.*\/v4.0\/js\/index\/ctrl\/.*\.(?:css|js))(?:.*)$/i, '$1?version='+domain.version ]
		 ]

	});  

}catch(e){

}
