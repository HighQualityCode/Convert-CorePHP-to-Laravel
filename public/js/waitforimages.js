/*! waitForImages jQuery Plugin - v2.0.0 - 2014-11-14
* https://github.com/alexanderdickson/waitForImages
* Copyright (c) 2014 Alex Dickson; Licensed MIT */
!function(e){var r="waitForImages";e.waitForImages={hasImageProperties:["backgroundImage","listStyleImage","borderImage","borderCornerImage","cursor"],hasImageAttributes:["srcset"]},e.expr[":"].uncached=function(r){if(!e(r).is('img[src][src!=""]'))return!1;var t=new Image;return t.src=r.src,!t.complete},e.fn.waitForImages=function(){var t,a,n,s=0,i=0,c=e.Deferred();if(e.isPlainObject(arguments[0])?(n=arguments[0].waitForAll,a=arguments[0].each,t=arguments[0].finished):1===arguments.length&&"boolean"===e.type(arguments[0])?n=arguments[0]:(t=arguments[0],a=arguments[1],n=arguments[2]),t=t||e.noop,a=a||e.noop,n=!!n,!e.isFunction(t)||!e.isFunction(a))throw new TypeError("An invalid callback was supplied.");return this.each(function(){var o=e(this),u=[],m=e.waitForImages.hasImageProperties||[],g=e.waitForImages.hasImageAttributes||[],h=/url\(\s*(['"]?)(.*?)\1\s*\)/g;n?o.find("*").addBack().each(function(){var r=e(this);r.is("img:uncached")&&u.push({src:r.attr("src"),element:r[0]}),e.each(m,function(e,t){var a,n=r.css(t);if(!n)return!0;for(;a=h.exec(n);)u.push({src:a[2],element:r[0]})}),e.each(g,function(t,a){var n,s=r.attr(a);return s?(n=s.split(","),void e.each(n,function(t,a){a=e.trim(a).split(" ")[0],u.push({src:a,element:r[0]})})):!0})}):o.find("img:uncached").each(function(){u.push({src:this.src,element:this})}),s=u.length,i=0,0===s&&(t.call(o[0]),c.resolveWith(o[0])),e.each(u,function(n,u){var m=new Image,g="load."+r+" error."+r;e(m).one(g,function h(r){var n=[i,s,"load"==r.type];return i++,a.apply(u.element,n),c.notifyWith(u.element,n),e(this).off(g,h),i==s?(t.call(o[0]),c.resolveWith(o[0]),!1):void 0}),m.src=u.src})}),c.promise()}}(jQuery);