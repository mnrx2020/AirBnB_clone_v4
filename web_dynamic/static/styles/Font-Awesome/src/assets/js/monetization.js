var _bsa={init:function(format,zoneKey,segment,options){var options=typeof options!=='undefined'?options:false;var srv=document.createElement('script');srv.id='_bsa_srv-'+zoneKey;srv.type='text/javascript';srv.src=(options&&options.path)?options.path:'//srv.buysellads.com/ads/'+zoneKey+'.json';srv.src=this.appendQueryString(srv.src,'callback','_bsa_go');if(segment)srv.src=this.appendQueryString(srv.src,'segment',segment);if(options&&this.isset(options.ip))srv.src=this.appendQueryString(srv.src,'forwardedip',options.ip);if(!this.isset(window['_bsa_queue']))window['_bsa_queue']=[];if(options&&!this.isset(options.platforms)||!this.isset(options))options.platforms=['desktop','mobile'];if(_bsa[format].readyToInit!=false||(options&&options.testMode)||!_bsa.objExists(zoneKey))window['_bsa_queue'].push([format,zoneKey,segment,options]);if(_bsa[format].readyToInit!=false&&!options.testMode){srv.src+=this.frequencyCap();if(_bsa.objExists(zoneKey))document.getElementsByTagName('head')[0].appendChild(srv)}else if((options&&options.testMode)||!_bsa.objExists(zoneKey))_bsa_go(_bsa[format].testData);else _bsa[format](zoneKey,segment,options)},frequencyCap:function(){var day=_bsa.getCookie('_bsap_daycap'),life=_bsa.getCookie('_bsap_lifecap'),day=this.isset(day)?day.split(';')[0].split(','):[],life=this.isset(life)?life.split(';')[0].split(','):[];if(day.length||life.length){var freqcap=[];for(var i=0;i<day.length;i++){var adspot=day[i];for(var found=-1,find=0;find<freqcap.length&&found==-1;find++)if(freqcap[find][0]==adspot)found=find;if(found==-1)freqcap.push([adspot,1,0]);else freqcap[found][1]++}for(var i=0;i<life.length;i++){var adspot=day[i];for(var found=-1,find=0;find<freqcap.length&&found==-1;find++)if(freqcap[find][0]==adspot)found=find;if(found==-1)freqcap.push([adspot,0,1]);else freqcap[found][2]++}for(var i=0;i<freqcap.length;i++)freqcap[i]=freqcap[i][0]+':'+freqcap[i][1]+','+freqcap[i][2]}if(freqcap&&freqcap.length)return'&freqcap='+encodeURIComponent(freqcap.join(';'));else return''},appendQueryString:function(url,name,value){var re=new RegExp('([?&]'+name+'=)[^&]+','');function add(sep){url+=sep+name+'='+encodeURIComponent(value)}function change(){url=url.replace(re,'$1'+encodeURIComponent(value))}if(url.indexOf('?')===-1){add('?')}else{if(re.test(url)){change()}else{add('&')}}return url},clearQueue:function(){window['_bsa_queue'].shift()},link:function(link){var l=link.split('?encredirect='),time=Date.now()/1000|0,fulllink;if(typeof l[1]!='undefined')fulllink=l[0]+'?segment='+window['_bsa_queue'][2]+';&encredirect='+encodeURIComponent(l[1]);else if(l[0].search('srv.buysellads.com')>0)fulllink=l[0]+'?segment='+window['_bsa_queue'][2]+';';else fulllink=l[0];fulllink=fulllink.replace('[publisher]',window['_bsa_queue'][2]);fulllink=fulllink.replace('[timestamp]',time);return fulllink},drop:function(output,target,elType,idName){var div=document.createElement(elType);div.id=idName;div.innerHTML=output;if(!this.isset(target))where='body';for(i=0;i<document.querySelectorAll(target).length;i++)document.querySelectorAll(target)[i].appendChild(div)},hide:function(e){if(document.getElementById(e)){this.removeClass(document.getElementById(e),'_bsa_show');this.addClass(document.getElementById(e),'_bsa_hide')}},show:function(e){if(document.getElementById(e)){this.removeClass(document.getElementById(e),'_bsa_hide');this.addClass(document.getElementById(e),'_bsa_show')}},close:function(e){this.hide(e);if(this.isset(_bsa.setCookie))_bsa.setCookie(e,'hide',1)},hasClass:function(el,name){return new RegExp('(\\s|^)'+name+'(\\s|$)').test(el.className)},addClass:function(el,name){if(!this.hasClass(el,name))el.className+=(el.className?' ':'')+name},removeClass:function(el,name){if(this.hasClass(el,name))el.className=el.className.replace(new RegExp('(\\s|^)'+name+'(\\s|$)'),' ').replace(/^\s+|\s+$/g,'')},removeEl:function(el){if(typeof el!=='undefined'&&el!=null)el.parentNode.removeChild(el)},isHex:function(c){return/(^#[0-9A-F]{6}$)|(^#[0-9A-F]{3}$)/i.test(c)},isMobile:function(){var check=false;(function(a){if(/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i.test(a)||/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(a.substr(0,4)))check=true})(navigator.userAgent||navigator.vendor||window.opera);return check},extend:function(target){for(var i=1;i<arguments.length;++i){var from=arguments[i];if(typeof from!=='object')continue;for(var j in from){if(from.hasOwnProperty(j)){target[j]=typeof from[j]==='object'?this.extend({},target[j],from[j]):from[j]}}}return target},isset:function(v){return typeof v!=='undefined'&&v!=null},exists:function(el){if(el===null)return false;return true},objExists:function(obj){var hasOwnProperty=Object.prototype.hasOwnProperty;if(obj==null)return false;if(obj.length>0)return true;if(obj.length===0)return false;for(var key in obj)if(hasOwnProperty.call(obj,key))return true;return false},getAttr:function(v,id){return document.getElementById(id).getAttribute('data-'+v)},getUrlVar:function(el,name){name=name.replace(/[\[]/,"\\\[").replace(/[\]]/,"\\\]");var regexS="[\\?&]"+name+"=([^&#]*)",regex=new RegExp(regexS),results=regex.exec(el.src);if(results==null)return'';else return results[1]}};var _bsa_go=function(json){if(window['_bsa_queue'][0])if((window['_bsa_queue'][0][3]&&window['_bsa_queue'][0][3].platforms.indexOf('mobile')>-1&&_bsa.isMobile())||(window['_bsa_queue'][0][3]&&window['_bsa_queue'][0][3].platforms.indexOf('desktop')>-1&&!_bsa.isMobile()))for(i=json['ads'].length-1;i>=0;i--)if(json['ads'][i].statlink==null)json['ads'].splice(i,1);if(_bsa.isset(json['ads'][0].statlink)){for(var i=0;i<json['ads'].length;i++)_bsa_serving_callback(json['ads'][i].bannerid,json['ads'][i].zonekey,json['ads'][i].freqcap);_bsa[window['_bsa_queue'][0][0]](window['_bsa_queue'][0][1],window['_bsa_queue'][0][2],window['_bsa_queue'][0][3],json['ads'])}};_bsa.getCookie=function(name){var nameEQ=name+'=',ca=document.cookie.split(';');for(var i=0;i<ca.length;i++){var c=ca[i];while(c.charAt(0)==' ')c=c.substring(1,c.length);if(c.indexOf(nameEQ)==0)return c.substring(nameEQ.length,c.length)}return null};_bsa.setCookie=function(name,value,days){if(days){var date=new Date();date.setTime(date.getTime()+(days*24*60*60*1000));var expires='; expires='+date.toGMTString()}else var expires='';document.cookie=name+'='+value+expires+'; path=/'};_bsa.removeCookie=function(name){this.setCookie(name,'',-1)};window['_bsa_serving_callback']=function(banner,zone,freqcap){var append=function(w,data,days){var c=document.cookie,i=c.indexOf(w+'='),existing=i>=0?c.substring(i+w.length+1).split(';')[0]+',':'',d=new Date();d.setTime(days*3600000+d);data=existing+data;data=data.substring(0,2048);document.cookie=w+'='+data+'; expires='+d.toGMTString()+'; path=\/'};if(freqcap){append('_bsap_daycap',banner,1);append('_bsap_lifecap',banner,365)}};_bsa.default=function(zoneKey,segment,options,ads){var disable_css=_bsa.isset(options)&&_bsa.isset(options.disable_css)?options.disable_css:false;_bsa.default.elID=function(options){return(options&&options.id)?options.id:'_default_'};_bsa.default.align=function(options){return(options&&options.align)?options.align:'vertical'};function css(colors){var c='<style type="text/css">',id=_bsa.default.elID(options);if(_bsa.default.align(options)=='vertical')c+='#'+id+'{flex-direction:column}#'+id+' ._default_{margin-bottom:10px;}';else c+='#'+id+'{flex-direction:row}#'+id+' a._default_{width:49%;}';c+='#'+id+'{position:relative;display:flex;}#'+id+' a._default_{display:block;position:relative;margin:5px;text-decoration:none;}#'+id+' a._default_:hover .default-title{text-decoration:underline;}#'+id+' .default-ad{position:absolute;right:0;top:0;background:#e1e1e1;color:#9a9a9a;padding:2px 3px;font-size:12.5px;border-radius:2px;font-weight:600;}#'+id+' a._default_ .default-image img{float:left;margin:0 10px 0 0;}#'+id+' a._default_ .default-title{display:block;margin:4px 0 0 0;font-size:16px;font-weight:600;padding:0 0 4px;}#'+id+' a._default_ .default-description{display:block;font-size:14px;color:#414141;margin-right:5%;}#'+id+' a._default_:hover .default-description{color:#111;}';c+='</style>';return c}function template(ads){var c='<span class="default-ad">ad</span>';for(var i=0;i<ads.length;i++)c+='<a href="'+ads[i].statlink+'" target="_blank" rel="nofollow" class="_default_"><span class="default-image"><img src="'+(_bsa.isset(ads[i].base64)?ads[i].base64:ads[i].image)+'" /></span><span class="default-title">'+ads[i].title+'</span><span class="default-description">'+ads[i].description+'</span></a>'+(_bsa.isset(ads[i].pixel)?'<img src="'+ads[i].pixel.replace('[timestamp]',ads[i].time)+'" style="display:none;" height="0" width="0" />':'')+'';return c}if(ads){_bsa.drop((disable_css?'':css(ads))+template(ads),options.target,'div',_bsa.default.elID(options));_bsa.clearQueue()}};_bsa.default.readyToInit=true;_bsa.default.testData={ads:[{barcolor:'#1a1b1c',barcolorHover:'rgba(0,0,0,.8)',callToActionTextColor:'#ffffff',callToActionColor:'#06c',callToActionColorHover:'#06c',callToActionTextColorHover:'#ffffff',textcolor:'#ffffff',textcolorHover:'#ffffff',barcolorHover:'#1a1b1c',statlink:'//demo.com/',image:'//dummyimage.com/80x80/000/1a1b1c',title:'This is a title',description:'Hi, please try my fancy new product over here!',calltoaction:'Learn More',base64:'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFAAAABQCAMAAAC5zwKfAAAAFVBMVEUAAAAaGxwJCgoDAwMNDQ4GBgcQEBGUR2suAAAAb0lEQVR4Ae3RMYoGMQxDYeEnz/2PvIGw05gpXP6grwoPVATrJ0VERERERBWSur/7jsHogee7b1BSH/cldDD7grut0mFJWDKjb1SV5XeIzegbhYSLd2jPvnEn1P89DR59xVXmfvBoJJh9ioiIiIiIPyBgActqvt8OAAAAAElFTkSuQmCC'}]};_bsa.imageonly=function(zoneKey,segment,options,ads){var disable_css=_bsa.isset(options)&&_bsa.isset(options.disable_css)?options.disable_css:false;_bsa.default.elID=function(options){return(options&&options.id)?options.id:zoneKey};_bsa.default.align=function(options){return(options&&options.align)?options.align:'vertical'};function css(colors){var c='<style type="text/css">',id=_bsa.default.elID(options);if(_bsa.default.align(options)=='vertical')c+='#'+id+'{flex-direction:column}#'+id+' ._default_{margin-bottom:10px;}';else c+='#'+id+'{flex-direction:row}#'+id+' a._default_{width:49%;}';c+='#'+id+'{position:relative;display:flex;flex-wrap:wrap;}#'+id+' a._default_{display:block;position:relative;margin:5px;text-decoration:none;}#'+id+' a._default_:hover .default-title{text-decoration:underline;}#'+id+' .default-ad{position:absolute;right:0;top:0;background:#e1e1e1;color:#9a9a9a;padding:2px 3px;font-size:12.5px;border-radius:2px;font-weight:600;}#'+id+' a._default_ .default-image img{float:left;margin:0 10px 0 0;}#'+id+' a._default_ .default-title{display:block;margin:4px 0 0 0;font-size:16px;font-weight:600;padding:0 0 4px;}#'+id+' a._default_ .default-description{display:block;font-size:14px;color:#414141;margin-right:5%;}#'+id+' a._default_:hover .default-description{color:#111;}';c+='</style>';return c}function template(ads){var c='';for(var i=0;i<ads.length;i++)c+='<a href="'+ads[i].statlink+'" target="_blank" rel="nofollow" class="ad'+i+'"><img src="'+(_bsa.isset(ads[i].base64)?ads[i].base64:ads[i].image)+'" alt="'+ads[i].alt+'" width="'+ads[i].width+'" height="'+ads[i].height+'" /></a>'+(_bsa.isset(ads[i].pixel)?'<img src="'+ads[i].pixel.replace('[timestamp]',ads[i].time)+'" style="display:none;" height="0" width="0" />':'')+'';return c}if(ads){_bsa.drop((disable_css?'':css(ads))+template(ads),options.target,'div',_bsa.default.elID(options));_bsa.clearQueue()}};_bsa.imageonly.readyToInit=true;_bsa.imageonly.testData={ads:[{barcolor:'#1a1b1c',barcolorHover:'rgba(0,0,0,.8)',callToActionTextColor:'#ffffff',callToActionColor:'#06c',callToActionColorHover:'#06c',callToActionTextColorHover:'#ffffff',textcolor:'#ffffff',textcolorHover:'#ffffff',barcolorHover:'#1a1b1c',statlink:'//demo.com/',image:'//dummyimage.com/80x80/000/1a1b1c',title:'This is a title',description:'Hi, please try my fancy new product over here!',calltoaction:'Learn More',base64:'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFAAAABQCAMAAAC5zwKfAAAAFVBMVEUAAAAaGxwJCgoDAwMNDQ4GBgcQEBGUR2suAAAAb0lEQVR4Ae3RMYoGMQxDYeEnz/2PvIGw05gpXP6grwoPVATrJ0VERERERBWSur/7jsHogee7b1BSH/cldDD7grut0mFJWDKjb1SV5XeIzegbhYSLd2jPvnEn1P89DR59xVXmfvBoJJh9ioiIiIiIPyBgActqvt8OAAAAAElFTkSuQmCC'}]};_bsa.fancybar=function(zoneKey,segment,options,ads){var disable_css=_bsa.isset(options)&&_bsa.isset(options.disable_css)?options.disable_css:false;_bsa.fancybar.elID=function(options){return(options&&options.id)?options.id:'_fbn_'};function css(colors){var c=colors[0],barcolor=_bsa.isset(c)&&_bsa.isHex(c.barcolor)?c.barcolor:_bsa.fancybar.testData.ads[0].barcolor,barcolorHover=_bsa.isset(c)&&_bsa.isHex(c.barcolorHover)?c.barcolorHover:_bsa.fancybar.testData.ads[0].barcolorHover,callToActionTextColor=_bsa.isset(c)&&_bsa.isHex(c.callToActionTextColor)?c.callToActionTextColor:_bsa.fancybar.testData.ads[0].callToActionTextColor,callToActionColor=_bsa.isset(c)&&_bsa.isHex(c.callToActionColor)?c.callToActionColor:_bsa.fancybar.testData.ads[0].callToActionColor,callToActionColorHover=_bsa.isset(c)&&_bsa.isHex(c.callToActionColorHover)?c.callToActionColorHover:_bsa.fancybar.testData.ads[0].callToActionColorHover,callToActionTextColorHover=_bsa.isset(c)&&_bsa.isHex(c.callToActionTextColorHover)?c.callToActionTextColorHover:_bsa.fancybar.testData.ads[0].callToActionTextColorHover,textcolor=_bsa.isset(c)&&_bsa.isHex(c.textcolor)?c.textcolor:_bsa.fancybar.testData.ads[0].textcolor,textcolorHover=_bsa.isset(c)&&_bsa.isHex(c.textcolorHover)?c.textcolorHover:_bsa.fancybar.testData.ads[0].textcolorHover,barcolorHover=_bsa.isset(c)&&_bsa.isHex(c.barcolorHover)?c.barcolorHover:_bsa.fancybar.testData.ads[0].barcolorHover;return'<style type="text/css">._bsa_hide ._bsa_fancybar{top:-100%;}._bsa_show ._bsa_fancybar {top:0;}._bsa_fancybar{display:block;width:100%;float:left;position:fixed;top:-80px;left:0;right:0;z-index:100001;background-color:'+barcolor+';-webkit-transition:top 700ms;-moz-transition:top 700ms;-o-transition:top 700ms;transition:top 700ms;text-align:center;box-sizing:border-box;font-family:helvetica,arial,sans-serif;margin:0 auto;box-shadow: 0 1px 5px rgba(0,0,0,.6);backface-visibility:hidden;}._bsa_fancybar a {display:block;position:relative;text-align:left;text-decoration:none;margin:0 auto;float:left;width:100%;padding:10px 5%;box-sizing:border-box;}._bsa_fancybar a:hover {background:'+barcolorHover+';display: block;}._bsa_fancybar a .fancybar-cta {display:block;float:right;color:'+callToActionTextColor+';background-color:'+callToActionColor+';border-radius:2px;line-height:28px;font-size:15px;box-sizing:border-box;margin:0;padding:0 12px;}._bsa_fancybar a:hover .fancybar-cta {background:'+callToActionColorHover+';color:'+callToActionTextColorHover+';}._bsa_fancybar a .fancybar-logo {display:block;float:left;padding:0;margin:-10px 0;}._bsa_fancybar a .fancybar-logo img {display:block;max-width:110px;}._bsa_fancybar a .fancybar-text {float:left;font-size:16px;line-height:16px;padding:8px 0 0 15px;color:'+textcolor+';}._bsa_fancybar a:hover .fancybar-text {color:'+textcolorHover+';}@media all and (max-width:680px){._bsa_fancybar a .fancybar-logo{margin:0 auto;display:block;min-width:100%;}._bsa_fancybar a .fancybar-logo img {max-width:110px;display:block;margin:0 auto;}._bsa_fancybar a .fancybar-text{font-size:13px;line-height:13px;padding:10px 0;text-align:center;width:100%;display:block;}._bsa_fancybar a .fancybar-cta{display:block;float:left;width:100%;margin:0;box-sizing:border-box;text-align:center;}}._bsa_fancybar .fancybar-close{display:block;position:absolute;top:11px;right:15px;padding:5px 10px 7px;border-radius: 2px;color:'+textcolor+';z-index:2;font-size:14px;line-height:12px;}._bsa_fancybar .fancybar-close:hover{cursor:pointer;background:'+barcolorHover+';}</style>'}function template(ads){var a=ads[0],link=_bsa.isset(a)&&_bsa.isset(a.statlink)?_bsa.link(a.statlink):_bsa.fancybar.testData.ads[0].statlink,image=_bsa.isset(a)&&_bsa.isset(a.image)?a.image:_bsa.fancybar.testData.ads[0].image,base64=_bsa.isset(a)&&_bsa.isset(a.base64)?a.base64:_bsa.fancybar.testData.ads[0].base64,text=_bsa.isset(a)&&_bsa.isset(a.text)?a.text:_bsa.fancybar.testData.ads[0].text,calltoaction=_bsa.isset(a)&&_bsa.isset(a.calltoaction)?a.calltoaction:_bsa.fancybar.testData.ads[0].calltoaction,pixel=_bsa.isset(a)&&_bsa.isset(a.pixel)?a.pixel:null,time=Date.now()/1000|0;return'<div class="_bsa_fancybar"><span class="fancybar-close" onclick="_bsa.close(\''+_bsa.fancybar.elID(options)+'\')">x</span><a href="'+link+'" target="_blank" rel="nofollow"><span class="fancybar-logo"><img src="'+(_bsa.isset(base64)?base64:image)+'" /></span><span class="fancybar-cta">'+calltoaction+'</span><span class="fancybar-text">'+text+'</span></a>'+(_bsa.isset(pixel)?'<img src="'+pixel.replace('[timestamp]',time)+'" style="display:none;" height="0" width="0" />':'')+'</div>'}if(!_bsa.getCookie(_bsa.fancybar.elID(options))){var _fancybar_didScroll;var _fancybar_didDrop=false;window.onscroll=function(){_fancybar_didScroll=true};var _fancybar_scrollInterval=setInterval(function(){if(_fancybar_didScroll&&!_bsa.getCookie(_bsa.fancybar.elID(options))){_fancybar_didScroll=false;var scrollTop=(window.pageYOffset!==undefined)?window.pageYOffset:(document.documentElement||document.body.parentNode||document.body).scrollTop;if(scrollTop>=100&&!document.getElementById(_bsa.fancybar.elID(options))){_bsa.fancybar.readyToInit=true;_bsa.init('fancybar',zoneKey,segment,options)}else if(scrollTop>=100){_bsa.show(_bsa.fancybar.elID(options))}if(scrollTop<100){_bsa.hide(_bsa.fancybar.elID(options))}}},500)}if(ads){_bsa.drop((disable_css?'':css(ads))+template(ads),'body','div',_bsa.fancybar.elID(options));_bsa.clearQueue()}};_bsa.fancybar.readyToInit=false;_bsa.fancybar.testData={ads:[{barcolor:'#1a1b1c',barcolorHover:'rgba(0,0,0,.8)',callToActionTextColor:'#ffffff',callToActionColor:'#06c',callToActionColorHover:'#06c',callToActionTextColorHover:'#ffffff',textcolor:'#ffffff',textcolorHover:'#ffffff',barcolorHover:'#1a1b1c',statlink:'//demo.com/',image:'//dummyimage.com/125x50/000/1a1b1c',text:'Hi, please try my fancy new product over here!',calltoaction:'Learn More',base64:'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAH0AAAAyBAMAAACDoMmvAAAAG1BMVEUAAAAaGxwGBgcNDQ4QEBEWFxgJCgoDAwMTFBUu0R9eAAABlElEQVRIie2TsVLCQBCGjyQkluIIUh6jqKWoKGVmEGqQMVIeM2AsAQdtkQjDY7ubDclxSbSwsLl/JrfH7X67e5vAmJaWltZfdYqLM9520d6ArpQAEw8xpvUl0rhZwrURvDSfwR5n8IU28aPu+Xqa4jsjXH14tlDiJKPBGUHGEWNWT3Uu3JoU5xxm8WSK2NdA8TkDFvNFwYwsviaZieKzxT4f92cKzO7itk4nLekuGelhTpzZy90PowLLIhzlK520wxo8n4fe7FVneB8dC7xcyJ89BVB2g/sDkc970HXVf+/wXQNUnjU2H+PH0A28+nIT3oS7O5xseO5Hw57D0/ydr+1G45ExSlIszHbzM4+fB+mBjNMXSZDlsiDKk8PXY88tmcV1JQkyXUpb4Dm84cUHVB+/rKQY1J9IxdK8FEuZYPhG0gD0PeNx7jRvx7dndi8qLyeF4tZSHpLCN3m4N33mNMKtiYM2lri9m7I35IZTNkmPn/gSCjr+HPZXasBleV3FnFa576m+lObpPwhzLvatlpbW/+obifk8WyshfY8AAAAASUVORK5CYII='}]};
