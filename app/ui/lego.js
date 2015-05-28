define(function(){return function __template__(__fest_context){"use strict";var __fest_self=this,__gid=1,__fest_buf="",__fest_chunks=[],__fest_chunk,__fest_attrs=[],__fest_select,__fest_if,__fest_iterator,__fest_to,__fest_fn,__fest_html="",__fest_blocks={},__fest_params,__fest_element,__fest_debug_file="",__fest_debug_line="",__fest_debug_block="",__fest_htmlchars=/[&<>"]/g,__fest_htmlchars_test=/[&<>"]/,__fest_short_tags = {"area":true,"base":true,"br":true,"col":true,"command":true,"embed":true,"hr":true,"img":true,"input":true,"keygen":true,"link":true,"meta":true,"param":true,"source":true,"wbr":true},__fest_element_stack = [],__fest_htmlhash={"&":"&amp;","<":"&lt;",">":"&gt;","\"":"&quot;"},__fest_jschars=/[\\'"\/\n\r\t\b\f<>]/g,__fest_jschars_test=/[\\'"\/\n\r\t\b\f<>]/,__fest_jshash={"\"":"\\\"","\\":"\\\\","/":"\\/","\n":"\\n","\r":"\\r","\t":"\\t","\b":"\\b","\f":"\\f","'":"\\'","<":"\\u003C",">":"\\u003E"},___fest_log_error;if(typeof __fest_error === "undefined"){___fest_log_error = (typeof console !== "undefined" && console.error) ? function(){return Function.prototype.apply.call(console.error, console, arguments)} : function(){};}else{___fest_log_error=__fest_error};function __fest_log_error(msg){___fest_log_error(msg+"\nin block \""+__fest_debug_block+"\" at line: "+__fest_debug_line+"\nfile: "+__fest_debug_file)}function __fest_replaceHTML(chr){return __fest_htmlhash[chr]}function __fest_replaceJS(chr){return __fest_jshash[chr]}function __fest_extend(dest, src){for(var i in src)if(src.hasOwnProperty(i))dest[i]=src[i];}function __fest_param(fn){fn.param=true;return fn}function __fest_call(fn, params,cp){if(cp)for(var i in params)if(typeof params[i]=="function"&&params[i].param)params[i]=params[i]();return fn.call(__fest_self,params)}function __fest_escapeJS(s){if (typeof s==="string") {if (__fest_jschars_test.test(s))return s.replace(__fest_jschars,__fest_replaceJS);} else if (typeof s==="undefined")return "";return s;}function __fest_escapeHTML(s){if (typeof s==="string") {if (__fest_htmlchars_test.test(s))return s.replace(__fest_htmlchars,__fest_replaceHTML);} else if (typeof s==="undefined")return "";return s;}var __bem_layout = __template__["layout"] = function (ctx) {var __xid = "-" + __gid++,__xevents = [],__fest_buf = "",__bem_block = "layout",__bem_x = __bem_block,__bem_mods = __bem_block + " ",__bem_block_mods;
				if (ctx.mods !== void 0) {
					__bem_mods += __bem_block + '_' + (ctx.mods.join ? ctx.mods.join(' ' + __bem_block + '_') : ctx.mods);
				}
		__fest_buf+=("<div id=\"" + __xid + "\" scope=\"" + true + "\" class=\"" + (__bem_block_mods = " " + __bem_mods + " ") + "\"><div class=\"layout__1\"><div data-view-id=\"folders\"></div></div><div class=\"layout__2\"><div data-view-id=\"messages\"></div></div><div class=\"layout__3\"><div data-view-id=\"message\"></div></div><div class=\"clear\"></div></div>");
			if (ctx && ctx.$bind) {
				ctx.$bind(__xid, __bem_block, __template__[__bem_block], __xb, __xevents);
			}
	return __fest_buf; };var __bem_btn = __template__["btn"] = function (ctx) {var __xid = "-" + __gid++,__xevents = [],__fest_buf = "",__bem_block = "btn",__bem_x = __bem_block,__bem_mods = __bem_block + " ",__bem_block_mods;
				if (ctx.mods !== void 0) {
					__bem_mods += __bem_block + '_' + (ctx.mods.join ? ctx.mods.join(' ' + __bem_block + '_') : ctx.mods);
				}
		__fest_buf+=("<button on-click=\"ctx.onclick()\" id=\"" + __xid + "\" scope=\"" + true + "\" class=\"" + (__bem_block_mods = " " + __bem_mods + " ") + "\">");/*$IF*/try{__fest_if=ctx.icon}catch(e){ __fest_if=false;__fest_log_error(e.message);}/*$*/if(__fest_if){__fest_buf+=("{ mods: ctx.icon }");}/*IF$*/var __bem_elem = __bem_block + "__text";__bem_mods = __bem_elem + " "; __bem_x = __bem_elem;__fest_buf+=("<span");/*$M*/try{__fest_if=ctx.icon}catch(e){ __fest_if=false;__fest_log_error(e.message);}if (__fest_if)__bem_mods += " " + __bem_x + "_pad";/*M$*/__fest_buf+=(" class=\"" + __bem_mods + "\">");/*$V*/try{/*$OPTS:"html"*/__fest_buf+=(__fest_escapeHTML(ctx.text))}catch(e){__fest_log_error(e.message + "12");}/*V$*/__fest_buf+=("</span></button>");
			if (ctx && ctx.$bind) {
				ctx.$bind(__xid, __bem_block, __template__[__bem_block], __xb, __xevents);
			}
	return __fest_buf; };var __bem_nav = __template__["nav"] = function (ctx) {var __xid = "-" + __gid++,__xevents = [],__fest_buf = "",__bem_block = "nav",__bem_x = __bem_block,__bem_mods = __bem_block + " ",__bem_block_mods;
				if (ctx.mods !== void 0) {
					__bem_mods += __bem_block + '_' + (ctx.mods.join ? ctx.mods.join(' ' + __bem_block + '_') : ctx.mods);
				}
		__fest_buf+=("<div id=\"" + __xid + "\" scope=\"" + true + "\" class=\"" + (__bem_block_mods = " " + __bem_mods + " ") + "\">");try{__fest_iterator=ctx.items}catch(e){ __fest_iterator=false;__fest_log_error(e.message);}if(__fest_iterator && __fest_iterator.length)__fest_iterator.forEach(function (item) {__fest_buf+=("<div>");var __bem_elem = __bem_block + "__item";__bem_mods = __bem_elem + " "; __bem_x = __bem_elem;try{__fest_attrs[0]=__fest_escapeHTML(item.url)}catch(e){__fest_attrs[0]=""; __fest_log_error(e.message);}__fest_buf+=("<a href=\"#!" + __fest_attrs[0] + "\" on-click=\"ctx.active = item.id\"");/*$M*/try{__fest_if=ctx.active == item.id}catch(e){ __fest_if=false;__fest_log_error(e.message);}if (__fest_if)__bem_mods += " " + __bem_x + "_active";/*M$*/__fest_buf+=(" class=\"" + __bem_mods + "\">");try{__fest_attrs[0]=__fest_escapeHTML(item.icon)}catch(e){__fest_attrs[0]=""; __fest_log_error(e.message);}__fest_buf+=("<i class=\"fa fa-" + __fest_attrs[0] + "\"></i><span>");/*$V*/try{/*$OPTS:"html"*/__fest_buf+=(__fest_escapeHTML(item.text))}catch(e){__fest_log_error(e.message + "11");}/*V$*/__fest_buf+=("</span>");/*$IF*/try{__fest_if=item.badge}catch(e){ __fest_if=false;__fest_log_error(e.message);}/*$*/if(__fest_if){var __bem_elem = __bem_block + "__badge";__bem_mods = __bem_elem + " "; __bem_x = __bem_elem;__fest_buf+=("<span class=\"" + __bem_mods + "\">");/*$V*/try{/*$OPTS:"html"*/__fest_buf+=(__fest_escapeHTML(item.badge))}catch(e){__fest_log_error(e.message + "14");}/*V$*/__fest_buf+=("</span>");}/*IF$*/__fest_buf+=("</a>");var __bem_elem = __bem_block + "__subitems";__bem_mods = __bem_elem + " "; __bem_x = __bem_elem;__fest_buf+=("<div");/*$M*/try{__fest_if=!item.expanded}catch(e){ __fest_if=false;__fest_log_error(e.message);}if (__fest_if)__bem_mods += " " + __bem_x + "_close";/*M$*/__fest_buf+=(" class=\"" + __bem_mods + "\">");try{__fest_iterator=item.items}catch(e){ __fest_iterator=false;__fest_log_error(e.message);}if(__fest_iterator && __fest_iterator.length)__fest_iterator.forEach(function (item) {var __bem_elem = __bem_block + "__item";__bem_mods = __bem_elem + " "; __bem_x = __bem_elem;try{__fest_attrs[0]=__fest_escapeHTML(item.url)}catch(e){__fest_attrs[0]=""; __fest_log_error(e.message);}__fest_buf+=("<a href=\"#!" + __fest_attrs[0] + "\" on-click=\"ctx.active = item.id\"");/*$M*/try{__fest_if=ctx.active == item.id}catch(e){ __fest_if=false;__fest_log_error(e.message);}if (__fest_if)__bem_mods += " " + __bem_x + "_active";/*M$*/__fest_buf+=(" class=\"" + __bem_mods + "\">");try{__fest_attrs[0]=__fest_escapeHTML(item.icon)}catch(e){__fest_attrs[0]=""; __fest_log_error(e.message);}__fest_buf+=("<i class=\"fa fa-" + __fest_attrs[0] + "\"></i><span>");/*$V*/try{/*$OPTS:"html"*/__fest_buf+=(__fest_escapeHTML(item.text))}catch(e){__fest_log_error(e.message + "26");}/*V$*/__fest_buf+=("</span>");/*$IF*/try{__fest_if=item.badge}catch(e){ __fest_if=false;__fest_log_error(e.message);}/*$*/if(__fest_if){var __bem_elem = __bem_block + "__badge";__bem_mods = __bem_elem + " "; __bem_x = __bem_elem;__fest_buf+=("<span class=\"" + __bem_mods + "\">");/*$V*/try{/*$OPTS:"html"*/__fest_buf+=(__fest_escapeHTML(item.badge))}catch(e){__fest_log_error(e.message + "29");}/*V$*/__fest_buf+=("</span>");}/*IF$*/__fest_buf+=("</a>");});__fest_buf+=("</div></div>");});__fest_buf+=("</div>");
			if (ctx && ctx.$bind) {
				ctx.$bind(__xid, __bem_block, __template__[__bem_block], __xb, __xevents);
			}
	return __fest_buf; };var __bem_caption = __template__["caption"] = function (ctx) {var __xid = "-" + __gid++,__xevents = [],__fest_buf = "",__bem_block = "caption",__bem_x = __bem_block,__bem_mods = __bem_block + " ",__bem_block_mods;
				if (ctx.mods !== void 0) {
					__bem_mods += __bem_block + '_' + (ctx.mods.join ? ctx.mods.join(' ' + __bem_block + '_') : ctx.mods);
				}
		__fest_buf+=("<div id=\"" + __xid + "\" scope=\"" + true + "\" class=\"" + (__bem_block_mods = " " + __bem_mods + " ") + "\">");/*$V*/try{/*$OPTS:"html"*/__fest_buf+=(__fest_escapeHTML(ctx.text || ''))}catch(e){__fest_log_error(e.message + "4");}/*V$*/__fest_buf+=("&nbsp;</div>");
			if (ctx && ctx.$bind) {
				ctx.$bind(__xid, __bem_block, __template__[__bem_block], __xb, __xevents);
			}
	return __fest_buf; };var __bem_datalist = __template__["datalist"] = function (ctx) {var __xid = "-" + __gid++,__xevents = [],__fest_buf = "",__bem_block = "datalist",__bem_x = __bem_block,__bem_mods = __bem_block + " ",__bem_block_mods;
				if (ctx.mods !== void 0) {
					__bem_mods += __bem_block + '_' + (ctx.mods.join ? ctx.mods.join(' ' + __bem_block + '_') : ctx.mods);
				}
		__fest_buf+=("<div id=\"" + __xid + "\" scope=\"" + true + "\" class=\"" + (__bem_block_mods = " " + __bem_mods + " ") + "\">");try{__fest_iterator=ctx.items}catch(e){ __fest_iterator=false;__fest_log_error(e.message);}if(__fest_iterator && __fest_iterator.length)__fest_iterator.forEach(function (item) {var __bem_elem = __bem_block + "__item";__bem_mods = __bem_elem + " "; __bem_x = __bem_elem;__fest_buf+=("<div");/*$M*/try{__fest_if=item.active}catch(e){ __fest_if=false;__fest_log_error(e.message);}if (__fest_if)__bem_mods += " " + __bem_x + "_active";/*M$*//*$M*/try{__fest_if=item.selected}catch(e){ __fest_if=false;__fest_log_error(e.message);}if (__fest_if)__bem_mods += " " + __bem_x + "_selected";/*M$*/__fest_buf+=(" class=\"" + __bem_mods + "\">");var __bem_elem = __bem_block + "__unread";__bem_mods = __bem_elem + " "; __bem_x = __bem_elem;__fest_buf+=("<span on-click=\"ctx.onunread(item)\"");/*$M*/try{__fest_if=item.unread}catch(e){ __fest_if=false;__fest_log_error(e.message);}if (__fest_if)__bem_mods += " " + __bem_x + "_yes";/*M$*/__fest_buf+=(" class=\"" + __bem_mods + "\"></span>");var __bem_elem = __bem_block + "__ava";__bem_mods = __bem_elem + " "; __bem_x = __bem_elem;try{__fest_attrs[0]=__fest_escapeHTML(item.avatar)}catch(e){__fest_attrs[0]=""; __fest_log_error(e.message);}__fest_buf+=("<span on-click=\"ctx.onselect(item);\" style=\"background-image: url(\'" + __fest_attrs[0] + "\')\" class=\"" + __bem_mods + "\"><i class=\"fa fa-check-circle\"></i></span>");var __bem_elem = __bem_block + "__user";__bem_mods = __bem_elem + " "; __bem_x = __bem_elem;try{__fest_attrs[0]=__fest_escapeHTML(item.url)}catch(e){__fest_attrs[0]=""; __fest_log_error(e.message);}__fest_buf+=("<a href=\"#!" + __fest_attrs[0] + "\" class=\"" + __bem_mods + "\">");/*$V*/try{/*$OPTS:"html"*/__fest_buf+=(__fest_escapeHTML(item.email))}catch(e){__fest_log_error(e.message + "17");}/*V$*/__fest_buf+=("</a>");var __bem_elem = __bem_block + "__subj";__bem_mods = __bem_elem + " "; __bem_x = __bem_elem;try{__fest_attrs[0]=__fest_escapeHTML(item.url)}catch(e){__fest_attrs[0]=""; __fest_log_error(e.message);}__fest_buf+=("<a href=\"#!" + __fest_attrs[0] + "\" class=\"" + __bem_mods + "\">");/*$V*/try{/*$OPTS:"html"*/__fest_buf+=(__fest_escapeHTML(item.subject))}catch(e){__fest_log_error(e.message + "18");}/*V$*/__fest_buf+=("</a><i on-click=\"ctx.ondelete(item)\" class=\"datalist__ctrl fa fa-trash-o\"></i></div>");});__fest_buf+=("</div>");
			if (ctx && ctx.$bind) {
				ctx.$bind(__xid, __bem_block, __template__[__bem_block], __xb, __xevents);
			}
	return __fest_buf; };var __bem_letter = __template__["letter"] = function (ctx) {var __xid = "-" + __gid++,__xevents = [],__fest_buf = "",__bem_block = "letter",__bem_x = __bem_block,__bem_mods = __bem_block + " ",__bem_block_mods;
				if (ctx.mods !== void 0) {
					__bem_mods += __bem_block + '_' + (ctx.mods.join ? ctx.mods.join(' ' + __bem_block + '_') : ctx.mods);
				}
		__fest_buf+=("<div id=\"" + __xid + "\" scope=\"" + true + "\" class=\"" + (__bem_block_mods = " " + __bem_mods + " ") + "\">");/*$B*/try{__fest_params={text: ctx.model.get("subject")}}catch(e){__fest_log_error(e.message)}/*$*/__fest_params = new fest.ModelView(__fest_params);/*B$*/__fest_buf+=(__bem_caption(__fest_params));var __bem_elem = __bem_block + "__info";__bem_mods = __bem_elem + " "; __bem_x = __bem_elem;__fest_buf+=("<div class=\"" + __bem_mods + "\">от&nbsp;");/*$V*/try{/*$OPTS:"html"*/__fest_buf+=(__fest_escapeHTML(ctx.model.get('correspondents.from.0.name') || ctx.model.get('correspondents.from.0.email')))}catch(e){__fest_log_error(e.message + "8");}/*V$*/__fest_buf+=("</div>");var __bem_elem = __bem_block + "__body";__bem_mods = __bem_elem + " "; __bem_x = __bem_elem;__fest_buf+=("<div class=\"" + __bem_mods + "\">");/*$V*/try{/*$OPTS:"raw"*/__fest_buf+=(ctx.html())}catch(e){__fest_log_error(e.message + "12");}/*V$*/__fest_buf+=("</div></div>");
			if (ctx && ctx.$bind) {
				ctx.$bind(__xid, __bem_block, __template__[__bem_block], __xb, __xevents);
			}
	return __fest_buf; };var __bem_toolbar = __template__["toolbar"] = function (ctx) {var __xid = "-" + __gid++,__xevents = [],__fest_buf = "",__bem_block = "toolbar",__bem_x = __bem_block,__bem_mods = __bem_block + " ",__bem_block_mods;
				if (ctx.mods !== void 0) {
					__bem_mods += __bem_block + '_' + (ctx.mods.join ? ctx.mods.join(' ' + __bem_block + '_') : ctx.mods);
				}
		__fest_buf+=("<div");/*$M*/try{__fest_if=ctx.hidden}catch(e){ __fest_if=false;__fest_log_error(e.message);}if (__fest_if)__bem_mods += " " + __bem_x + "_hidden";/*M$*/__fest_buf+=(" id=\"" + __xid + "\" scope=\"" + true + "\" class=\"" + (__bem_block_mods = " " + __bem_mods + " ") + "\">");try{__fest_iterator=ctx.items}catch(e){ __fest_iterator=false;__fest_log_error(e.message);}if(__fest_iterator && __fest_iterator.length)__fest_iterator.forEach(function (item) {var __bem_elem = __bem_block + "__item";__bem_mods = __bem_elem + " "; __bem_x = __bem_elem;__fest_buf+=("<div on-click=\"item.onclick(item)\" class=\"" + __bem_mods + "\">");try{__fest_attrs[0]=__fest_escapeHTML(item.icon)}catch(e){__fest_attrs[0]=""; __fest_log_error(e.message);}__fest_buf+=("<i class=\"fa fa-" + __fest_attrs[0] + "\"></i>");/*$V*/try{/*$OPTS:"html"*/__fest_buf+=(__fest_escapeHTML(item.text))}catch(e){__fest_log_error(e.message + "9");}/*V$*/__fest_buf+=("</div>");});__fest_buf+=("</div>");
			if (ctx && ctx.$bind) {
				ctx.$bind(__xid, __bem_block, __template__[__bem_block], __xb, __xevents);
			}
	return __fest_buf; };__fest_to=__fest_chunks.length;if (__fest_to) {__fest_iterator = 0;for (;__fest_iterator<__fest_to;__fest_iterator++) {__fest_chunk=__fest_chunks[__fest_iterator];if (typeof __fest_chunk==="string") {__fest_html+=__fest_chunk;} else {__fest_fn=__fest_blocks[__fest_chunk.name];if (__fest_fn) __fest_html+=__fest_call(__fest_fn,__fest_chunk.params,__fest_chunk.cp);}}return __fest_html+__fest_buf;} else {return __fest_buf;}}});