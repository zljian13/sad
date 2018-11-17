/*!
 RowGroup 1.0.3
 ©2017-2018 SpryMedia Ltd - datatables.net/license
*/
(function(c){"function"===typeof define&&define.amd?define(["jquery","datatables.net"],function(d){return c(d,window,document)}):"object"===typeof exports?module.exports=function(d,f){d||(d=window);if(!f||!f.fn.dataTable)f=require("datatables.net")(d,f).$;return c(f,d,d.document)}:c(jQuery,window,document)})(function(c,d,f,h){var e=c.fn.dataTable,g=function(a,b){if(!e.versionCheck||!e.versionCheck("1.10.8"))throw"RowGroup requires DataTables 1.10.8 or newer";this.c=c.extend(!0,{},e.defaults.rowGroup,
g.defaults,b);this.s={dt:new e.Api(a),dataFn:e.ext.oApi._fnGetObjectDataFn(this.c.dataSrc)};this.dom={};var j=this.s.dt.settings()[0],k=j.rowGroup;if(k)return k;j.rowGroup=this;this._constructor()};c.extend(g.prototype,{dataSrc:function(a){if(a===h)return this.c.dataSrc;var b=this.s.dt;this.c.dataSrc=a;this.s.dataFn=e.ext.oApi._fnGetObjectDataFn(this.c.dataSrc);c(b.table().node()).triggerHandler("rowgroup-datasrc.dt",[b,a]);return this},disable:function(){this.c.enable=!1;return this},enable:function(a){if(!1===
a)return this.disable();this.c.enable=!0;return this},_constructor:function(){var a=this,b=this.s.dt,c=[];b.rows().every(function(){var b=this.data(),b=a.s.dataFn(b);-1==c.indexOf(b)&&c.push(b)});b.on("draw.dtrg",function(){a.c.enable&&a._draw()});b.on("column-visibility.dt.dtrg responsive-resize.dt.dtrg",function(){a._adjustColspan()});b.on("destroy",function(){b.off(".dtrg")})},_adjustColspan:function(){c("tr."+this.c.className,this.s.dt.table().body()).attr("colspan",this._colspan())},_colspan:function(){return this.s.dt.columns().visible().reduce(function(a,
b){return a+b},0)},_draw:function(){var a=this,b=this.s.dt,c=[],e,d;b.rows({page:"current"}).every(function(){var b=this.data(),b=a.s.dataFn(b);if(null===b||b===h)b=a.c.emptyDataGroup;if(e===h||b!==e)c.push([]),e=b;c[c.length-1].push(this.index())});for(var g=0,f=c.length;g<f;g++){var i=c[g],l=b.row(i[0]),m=this.s.dataFn(l.data());this.c.startRender&&(d=this.c.startRender.call(this,b.rows(i),m),(d=this._rowWrap(d,this.c.startClassName))&&d.insertBefore(l.node()));this.c.endRender&&(d=this.c.endRender.call(this,
b.rows(i),m),(d=this._rowWrap(d,this.c.endClassName))&&d.insertAfter(b.row(i[i.length-1]).node()))}},_rowWrap:function(a,b){if(null===a||a===h||""===a)a=this.c.emptyDataGroup;return null===a?null:("object"===typeof a&&a.nodeName&&"tr"===a.nodeName.toLowerCase()?c(a):a instanceof c&&a.length&&"tr"===a[0].nodeName.toLowerCase()?a:c("<tr/>").append(c("<td/>").attr("colspan",this._colspan()).append(a))).addClass(this.c.className).addClass(b)}});g.defaults={className:"group",dataSrc:0,emptyDataGroup:"No group",
enable:!0,endClassName:"group-end",endRender:null,startClassName:"group-start",startRender:function(a,b){return b}};g.version="1.0.3";c.fn.dataTable.RowGroup=g;c.fn.DataTable.RowGroup=g;e.Api.register("rowGroup()",function(){return this});e.Api.register("rowGroup().disable()",function(){return this.iterator("table",function(a){a.rowGroup&&a.rowGroup.enable(!1)})});e.Api.register("rowGroup().enable()",function(a){return this.iterator("table",function(b){b.rowGroup&&b.rowGroup.enable(a===h?!0:a)})});
e.Api.register("rowGroup().dataSrc()",function(a){return a===h?this.context[0].rowGroup.dataSrc():this.iterator("table",function(b){b.rowGroup&&b.rowGroup.dataSrc(a)})});c(f).on("preInit.dt.dtrg",function(a,b){if("dt"===a.namespace){var d=b.oInit.rowGroup,f=e.defaults.rowGroup;if(d||f)f=c.extend({},f,d),!1!==d&&new g(b,f)}});return g});
