﻿//
var JIATHIS_CONFIGS = {
    webhost: "http://www.jiathis.com",
    lhost: "http://l.jiathis.com",
    shost: "http://s.jiathis.com",
    _s: null,
    codehost: "",
    sc: false,
    uid: 1626433,
    ckprefix: "jt_",
    jtcbk: "jtss",
    jtck: "",
    custom: [],
    servicelist: {
        jt_weixin: "微信,wx,weixin,weixin.qq.com",
        jt_tsina: "微博,xlwb,weibo.com",
        jt_cqq: "QQ好友,cqq,qqhl,connect.qq.com",
        jt_qzone: "QQ空间,qqkj,sns.qzone.qq.com",
        jt_copy: "复制网址,fzwz",
        jt_fav: "收藏夹,scj",
        jt_print: "打印,dy",
        jt_email: "邮件,yj",
        jt_renren: "人人网,rrw,www.renren.com",
        jt_kaixin001: "开心网,kxw,www.kaixin001.com",
        jt_evernote: "印象笔记,evernote",
        jt_linkedin: "领英,linkedin",
        jt_feixin: "飞信,fx,space.feixin.10086.cn",
        jt_douban: "豆瓣,db,www.douban.com",
        jt_twitter: "Twitter,twitter,t.co",
        jt_fb: "Facebook,facebook,www.facebook.com",
        jt_ishare: "一键分享,yjfx",
        jt_ujian: "猜你喜欢,cnxh",
        jt_yixin: "易信,yx,www.yixin.im",
        jt_huaban: "花瓣网,hbw,huaban.com",
        jt_tqq: "腾讯微博,txwb,t.qq.com",
        jt_googleplus: "Google+,googlej,plus.url.google.com",
        jt_alibaba: "阿里巴巴,albb,www.1688.com",
        jt_xiaoyou: "朋友网,pyw,share.pengyou.com",
        jt_sdonote: "麦库记事,mkjs",
        jt_baidu: "百度搜藏,bdsc,cang.baidu.com",
        jt_gmail: "Gmail邮箱,gmailyx,mail.google.com",
        jt_ydnote: "有道云笔记,ydybj,note.youdao.com",
        jt_tianya: "天涯社区,tysq,my.tianya.cn",
        jt_tieba: "百度贴吧,bdtb,tieba.baidu.com",
        jt_qingbiji: "轻笔记,qbj",
        jt_tifeng: "凤凰微博,fhwb,t.ifeng.com",
        jt_fanfou: "饭否,ff,fanfou.com",
        jt_mingdao: "明道,md,www.mingdao.com",
        jt_douban9dian: "豆瓣9点,db9d,9.douban.com",
        jt_google: "谷歌,gg",
        jt_buzz: "谷歌Buzz,ggbuzz",
        jt_youdao: "有道书签,ydsq,shuqian.youdao.com",
        jt_qq: "QQ书签,qqsq,shuqian.qq.com",
        jt_msn: "MSN,msn",
        jt_pinterest: "Pinterest,pinterest",
        jt_duitang: "堆糖,dt,www.duitang.com",
        jt_tyaolan: "摇篮微博,ylwb",
        jt_hi: "百度空间,bdkj,apps.hi.baidu.com",
        jt_hotmail: "Hotmail邮箱,hotmailyx",
        jt_xqw: "雪球,xqw,xueqi.com",
        jt_hexun: "和讯,hx,bookmark.hexun.com",
        jt_139mail: "139邮箱,139yx",
        jt_189mail: "189邮箱,189yx",
        jt_189cn: "翼友圈,yyq,club.189.cn",
        jt_tpeople: "人民微博,rmwb,t.people.com.cn",
        jt_txinhua: "新华微博,xhwb",
        jt_translate: "谷歌翻译,ggfy",
        jt_tuita: "推他,tt,www.tuita.com",
        jt_mop: "猫扑推客,mptk,tk.mop.com",
        jt_meilishuo: "美丽说,mls",
        jt_mogujie: "蘑菇街,mgj,mogujie.cn",
        jt_ganniu: "赶牛网,gnw,www.ganniu.com",
        jt_poco: "Poco网,pocow,my.poco.cn",
        jt_leihou: "雷猴网,lhw,leihou.com",
        jt_thexun: "和讯微博,hxwb,t.hexun.com",
        jt_dream163: "游戏江湖,yxjh,hi.163.com",
        jt_jcrb: "法律微博,flwb",
        jt_tumblr: "Tumblr,tumblr,www.tumblr.com",
        jt_reddit: "Reddit,reddit",
        jt_instapaper: "Instapaper,instapaper,www.instapaper.com",
        jt_pocket: "Pocket,pocket,getpocket.com",
        jt_caimi: "财迷,cm,t.eastmoney.com",
        jt_iwo: "WO+分享,iwo,wfx,i.wo.com.cn",
        jt_waakee: "挖客网,wkw",
        jt_cyzone: "创业邦,cyb,u.cyzone.cn",
        jt_99earth: "救救地球,jjdq",
        jt_chouti: "抽屉网,ctw",
        jt_dig24: "递客网,dkw,www.dig24.cn",
        jt_yijee: "易集网,yjw,www.yijee.com",
        jt_pdfonline: "Pdf在线转换,pdfzxzh",
        jt_printfriendly: "友好打印,yhdy",
        jt_w3c: "W3c验证,w3cyz",
        jt_bitly: "Bit.ly,bitly,bit.ly",
        jt_digg: "Digg,digg,digg.com",
        jt_mailru: "Mail.ru,mail.ru",
        jt_diigo: "Diigo,diigo",
        jt_friendfeed: "FriendFeed,friendfeed",
        jt_myspace: "Myspace,myspace",
        jt_mixx: "Mixx,mixx",
        jt_netlog: "NetLog,netlog",
        jt_netvibes: "Netvibes,netvibes",
        jt_phonefavs: "Phonefavs,phonefavs",
        jt_pingfm: "Ping.fm,ping.fm",
        jt_plaxo: "Plaxo,plaxo",
        jt_delicious: "Delicious,delicious,www.delicious.com",
        jt_wong: "Mister Wong,misterwong",
        jt_stumbleupon: "Stumbleupon,stumbleupon",
        jt_plurk: "Plurk,plurk",
        jt_funp: "Funp,funp",
        jt_myshare: "Myshare,myshare"
    }
};

(function() {
    var z = document.getElementsByTagName("script");
    for (var i = 0, ci; ci = z[i++]; ) {
        if (/jiathis.com/.test(ci.src)) {
            console.log(ci.src.substring(0, ci.src.lastIndexOf("/")))
            ci.src.replace(/(uid)=([^&]+)/g, function(a, p, v) {
                JIATHIS_CONFIGS[p] = v;
            });
        }

    }
    var d = document, isStrict = d.compatMode == "CSS1Compat", dd = d.documentElement, db = d.body, m = Math.max, ie = !!d.all, ua = navigator.userAgent.toLowerCase(), head = d.getElementsByTagName("head")[0] || dd, wlh = window.location.host, conf = typeof jiathis_config == "undefined" ? {} : jiathis_config, _ckpre = JIATHIS_CONFIGS.ckprefix, _lists = JIATHIS_CONFIGS.servicelist, _ref = d.referrer, _reced = false, getWH = function() {
        return {
            h: (isStrict ? dd : db).clientHeight,
            w: (isStrict ? dd : db).clientWidth
        };
    }, getS = function() {
        return {
            t: m(dd.scrollTop, db.scrollTop),
            l: m(dd.scrollLeft, db.scrollLeft)
        };
    }, getP = function(a) {
        var r = {
            t: 0,
            l: 0
        }, isGecko = /gecko/.test(ua), add = function(t, l) {
            r.l += l, r.t += t;
        }, p = a, sTL = getS();
        if (a && a != db) {
            if (a.getBoundingClientRect) {
                var b = a.getBoundingClientRect();
                if (b.top == b.bottom) {
                    var g = a.style.display;
                    a.style.display = "block";
                    b.top = b.top - a.offsetHeight;
                    a.style.display = g;
                }
                add(b.top + sTL.t - dd.clientTop, b.left + sTL.l - dd.clientLeft);
            } else {
                var c = d.defaultView;
                while (p) {
                    add(p.offsetTop, p.offsetLeft);
                    var e = c.getComputedStyle(p, null);
                    if (isGecko) {
                        var f = parseInt(e.getPropertyValue("border-left-width"), 10) || 0, bt = parseInt(e.getPropertyValue("border-top-width"), 10) || 0;
                        add(bt, f);
                        if (p != a && e.getPropertyValue("overflow") != "visible") {
                            add(bt, f);
                        }
                    }
                    p = p.offsetParent;
                }
                p = a.parentNode;
                while (p && p != db) {
                    add(-p.scrollTop, -p.scrollLeft);
                    p = p.parentNode;
                }
            }
        }
        return r;
    }, creElm = function(o, t, a) {
        var b = d.createElement(t || "div");
        for (var p in o) {
            p == "style" ? b[p].cssText = o[p] : b[p] = o[p];
        }
        return (a || db).insertBefore(b, (a || db).firstChild);
    }, _uniqueConcat = function(a, b) {
        var c = {};
        for (var i = 0; i < a.length; i++) {
            c[a[i]] = 1;
        }
        for (var i = 0; i < b.length; i++) {
            if (!c[b[i]]) {
                a.push(b[i]);
                c[b[i]] = 1;
            }
        }
        return a;
    }, _sc = function(a, b, c) {
        var d = new Date();
        d.setTime(d.getTime() + c * 1e3);
        document.cookie = a + "=" + escape(b) + (c ? ";expires=" + d.toGMTString() : "") + ";path=/";
    }, _gc = function(a) {
        var b = document.cookie;
        var c = b.indexOf(a + "=");
        if (c != -1) {
            c += a.length + 1;
            var d = b.indexOf(";", c);
            if (d == -1) {
                d = b.length;
            }
            return unescape(b.substring(c, d));
        }
        return "";
    }, _MR = function(w, d, a) {
        w /= d;
        w = Math.round(w * 10) / 10;
        if ((w + "").length >= 4) {
            w = Math.round(w);
        }
        return w + a;
    }, _FN = function(a) {
        var d = ("" + a).split(".").shift().length;
        if (isNaN(a)) {
            return "0";
        } else {
            if (d < 4) {
                return Math.round(a);
            } else {
                if (d < 7) {
                    return _MR(a, 1e3, "K");
                } else {
                    if (d < 10) {
                        return _MR(a, 1e6, "M");
                    } else {
                        return _MR(a, 1e9, "B");
                    }
                }
            }
        }
    }, _rck = function(X) {
        var A = {}, D = new Date().getTime(), E, F, G, H, V = String(X);
        if (V !== undefined && V.indexOf("|") > -1) {
            E = V.split("|");
            F = E[0];
            G = E[1];
            H = Math.floor((D - G) / 1e3);
            A.shares = parseInt(F);
            A.lifetime = G;
            A.timedeff = H;
            return A;
        }
        return false;
    }, _gck = function() {
        var A = _gc("jiathis_rdc"), B = {};
        if (A) {
            B = eval("(" + A + ")");
        }
        return B;
    }, _sck = function(U, S, T) {
        var A = _gck();
        if (A[U]) {
            delete A[U];
        }
        $CKE.shares = parseInt(S);
        A[U] = '"' + parseInt(S) + "|" + T + '"';
        _sc("jiathis_rdc", _otc(A), 0);
    }, _otc = function(o) {
        var A = "", B = "";
        for (var k in o) {
            A += B + '"' + k + '":' + o[k];
            B = !B ? "," : B;
        }
        return "{" + A + "}";
    }, _renderCounter = function(a, b) {
        for (var k in a) {
            var c = d.getElementById(a[k]);
            if (c) {
                c.title = "累计分享" + b + "次";
                c.innerHTML = _FN(b);
            }
        }
    }, _custom = function() {
        var u = conf.services_custom;
        if (u) {
            if (!(u instanceof Array)) {
                u = [ u ];
            }
            for (var a = 0; a < u.length; a++) {
                var c = u[a];
                if (c.name && c.icon && c.url) {
                    c.code = c.url = c.url.replace(/ /g, "");
                    c.code = c.code.split("//").pop().split("?").shift().split("/").shift().toLowerCase();
                    JIATHIS_CONFIGS.custom[c.code] = c;
                    JIATHIS_CONFIGS.servicelist[_ckpre + c.code] = c.name + "," + c.code + "," + c.code;
                }
            }
        }
    }, _gw = function(a, b, c) {
        var d = "";
        do {
            d = a[b++];
        } while (b < a.length && (!_lists[_ckpre + d] || c[d]));
        if (c[d] || !_lists[_ckpre + d]) {
            d = "";
            for (var k in _lists) {
                k = k.slice(3);
                if (!c[k] && _lists[_ckpre + k]) {
                    d = k;
                    break;
                }
            }
        }
        return d;
    }, _renderToolbox = function() {
        _custom();
        var e = conf.shareImg || {}, hidemore = conf.hideMore || false;
        e.showType && creElm({
            src: 'http://v3.jiathis.com/code' + "/plugin.shareimg.js",
            charset: "utf-8"
        }, "script", head);
        var f = "qzone,tsina,tqq,weixin,renren,kaixin001,evernote,linkedin,douban,ydnote,xiaoyou,msn,fb,twitter,tieba,baidu,google", _jck = JIATHIS_CONFIGS.jtck || f, jck = _uniqueConcat(_jck.split(","), f.split(",")), parentServices = {}, _WR = {}, h = d.getElementsByTagName("a"), _url = String(conf.url || d.location), _CF = null, webid, likeid, tl, fl, bt, preferred;
        for (var i = 0, ci, tmp; ci = h[i++]; ) {
            if (/\bjiathis\b/.test(ci.className)) {
                if (jiathis_is_mobile()) {
                    ci.href = jiathis_more_href();
                } else {
                    ci.onmouseout = $CKE.out;
                    ci.onmousemove = $CKE.move;
                    !hidemore && (ci.onclick = $CKE.center);
                    ci.onmouseover = $CKE.over;
                    ci.hideFocus = true;
                }
                continue;
            }
            if (ci.className && (tmp = ci.className.match(/^jiathis_counter_(\w+)(?:\_|$)(.*)$/)) && tmp[1]) {
                if (typeof $CKE.containers == "object") {
                    if (!_CF) {
                        _CF = creElm({
                            href: 'http://v3.jiathis.com/code' + "/css/jiathis_counter.css",
                            rel: "stylesheet",
                            type: "text/css"
                        }, "link");
                    }
                    if (ci.firstChild && ci.firstChild.nodeType == 3) {
                        ci.removeChild(ci.firstChild);
                    }
                    if (!ci.firstChild) {
                        var B = tmp[1] == "style" ? "bubble" : tmp[1], C = tmp[2] ? tmp[2] : "", K = "jiathis_counter_" + i, E = d.createElement("span");
                        E.className = "jiathis_button_expanded jiathis_counter jiathis_" + B + "_style";
                        !hidemore && (E.onclick = function() {
                            $CKE.center();
                        });
                        E.id = K;
                        E.appendChild(d.createTextNode("0"));
                        if (C) {
                            E.style.cssText = C;
                        }
                        ci.appendChild(E);
                    }
                    $CKE.containers.push(K);
                }
                continue;
            }
            webid = "", likeid = "", tl = false, fl = false, bt = false, preferred = false;
            if (ci.className && (tmp = ci.className.match(/^jiathis_button_([\w\.]+)(?:\s|$)/)) && tmp[1]) {
                if (tmp[1].indexOf("tools") > -1 || tmp[1].indexOf("icons") > -1) {
                    if (tmp[1].indexOf("tools") > -1) {
                        tl = true;
                        var s = ci.className.match(/jiathis_button_tools_([0-9]+)(?:\s|$)/);
                    } else {
                        var s = ci.className.match(/jiathis_button_icons_([0-9]+)(?:\s|$)/);
                    }
                    var g = (s && s.length ? Math.min(16, Math.max(1, parseInt(s[1]))) : 1) - 1;
                    webid = _gw(jck, g, parentServices);
                    preferred = true;
                } else {
                    webid = tmp[1];
                }
                bt = true;
            }
            if (ci.className && (tmp = ci.className.match(/^jiathis_follow_(\w+)$/)) && tmp[1]) {
                webid = tmp[1];
                fl = true;
            }
            if (webid && _lists[_ckpre + webid]) {
                bt && (parentServices[webid] = 1);
                var j = function(a, b) {
                    for (var c in b) {
                        var o = b[c];
                        if (o.preferred && o.webid == a) {
                            return c;
                        }
                    }
                    return false;
                }, t = j(webid, _WR);
                if (t !== false) {
                    var T = _WR[t] || {};
                    if (T.webid && T.ci) {
                        TWID = _gw(jck, 0, parentServices);
                        T.bt && (parentServices[TWID] = 1);
                        _WR[t] = {
                            ci: T.ci,
                            webid: TWID,
                            bt: T.bt,
                            fl: T.fl,
                            tl: T.tl,
                            preferred: T.preferred
                        };
                    }
                }
                _WR[i] = {
                    ci: ci,
                    webid: webid,
                    bt: bt,
                    fl: fl,
                    tl: tl,
                    preferred: preferred
                };
            } else if (bt || fl) {
                ci.innerHTML = "";
            }
            if (ci.className && (tmp = ci.className.match(/^jiathis_like_(\w+)$/)) && tmp[1]) {
                likeid = tmp[1];
                var o = _gp(ci, "data"), ifsrc = "", likeurl = _url, mt = "";
                if (likeid == "qzone") {
                    var l = _gv(o.qq, false);
                    if (l) {
                        likeurl = "http://user.qzone.qq.com/" + l;
                        ifsrc = "http://open.qzone.qq.com/like?url=" + encodeURIComponent(likeurl) + "&type=" + _gv(o.type, "button_num");
                    } else {
                        ifsrc = "http://sns.qzone.qq.com/cgi-bin/qzshare/cgi_qzshare_likeurl?url=" + encodeURIComponent(likeurl) + "&showcount=" + _gv(o.showcount, 1) + "&style=" + _gv(o.style, 2);
                    }
                } else if (likeid == "renren") {
                    var n = _gv(o.pageid, false);
                    likeurl = n ? "http://page.renren.com/" + n : likeurl;
                    ifsrc = "http://www.connect.renren.com/like?url=" + encodeURIComponent(likeurl) + "&showfaces=" + _gv(o.showfaces, "false");
                } else if (likeid == "kaixin001") {
                    ifsrc = "http://www.kaixin001.com/like/like.php?url=" + encodeURIComponent(likeurl) + "&show_faces=" + _gv(o.show_faces, "false");
                } else if (likeid == "tsina" || likeid == "tsinat") {
                    var p = jiathis_get_des(), pic = "", title = conf.title || document.title, p = conf.summary == undefined ? p : conf.summary, pic = conf.pic == undefined ? jiathis_get_pic() : conf.pic, url = conf.url == undefined ? document.location : conf.url;
                }
                if (ifsrc) {
                    ci.innerHTML = '<span class="jiathis_txt jiathis_separator jialike"><iframe src="' + ifsrc + '" allowTransparency="true" scrolling="no" border="0" frameborder="0" style="width:' + _gv(o.width, 200) + "px;height:" + _gv(o.height, 38) + "px;" + mt + '"></iframe></span>';
                } else {
                    if (likeid == "tsinat" || likeid == "tsina") {
                        if (likeid == "tsinat") {
                            ci.innerHTML = '<span class="jiathis_txt jiathis_separator jialike"><wb:like type="text"></wb:like></span>';
                        } else {
                            ci.innerHTML = '<span class="jiathis_txt jiathis_separator jialike"><wb:like type="number"></wb:like></span>';
                        }
                        var q = [ "og:type=webpage", "og:url=" + encodeURIComponent(url) + "", "og:title=" + encodeURIComponent(title) + "", "og:image=" + encodeURIComponent(pic) + "", "og:description=" + encodeURIComponent(p) + "" ];
                        for (m = 0; m < q.length; m++) {
                            met = document.createElement("meta");
                            var r = q[m].split("=");
                            var t = r[0];
                            var u = r[1];
                            met.setAttribute("property", t);
                            met.content = decodeURIComponent(u);
                            head.appendChild(met);
                        }
                        creElm({
                            src: "http://tjs.sjs.sinajs.cn/open/api/js/wb.js",
                            charset: "utf-8",
                            type: "text/javascript"
                        }, "script");
                    } else {
                        ci.innerHTML = "";
                    }
                }
            }
        }
        if (_WR) {
            for (var k in _WR) {
                var o = _WR[k], ci = o.ci, bt = o.bt, fl = o.fl, tl = o.tl, webid = o.webid;
                if (typeof ci == "object" && ci.innerHTML.indexOf("jtico jtico_") == -1) {
                    var v = _lists[_ckpre + webid].split(",");
                    var w = ci.innerHTML.replace(/^\s+|\s+$/g, "");
                    var x = JIATHIS_CONFIGS.custom[webid] || {};
                    var y = x.icon ? ' style="background:url(' + x.icon + ') no-repeat left;"' : "";
                    if (tl || w) {
                        w = w ? w : v[0];
                        ci.innerHTML = '<span class="jiathis_txt jiathis_separator jtico jtico_' + webid + '"' + y + ">" + w + "</span>";
                    } else {
                        ci.innerHTML = '<span class="jiathis_txt jtico jtico_' + webid + '"' + y + "></span>";
                    }
                    if (fl) {
                        ci.onclick = function(a) {
                            return function() {
                                if (a.className.match(/weixin$/)) {
                                    jiathis_popup(a.rel);
                                } else {
                                    window.open(a.rel, "");
                                }
                            };
                        }(ci);
                        ci.title = ci.title ? ci.title : "在" + v[0] + "关注我们";
                    } else {
                        ci.onclick = function(a) {
                            return function() {
                                jiathis_sendto(a);
                            };
                        }(webid);
                        if (!ci.title) {
                            if (webid == "copy" || webid == "print") {
                                ci.title = v[0];
                            } else if (webid == "fav") {
                                ci.title = "加入" + v[0];
                            } else {
                                ci.title = "分享到" + v[0];
                            }
                        }
                    }
                }
            }
        }
        if (_CF) {
            $CKE.counter();
        }
    }, _gv = function(v, a) {
        if (v === undefined) {
            return a;
        }
        return v;
    }, _gp = function(a, b) {
        var p = [], c = a.attributes[b];
        if (c) {
            o = c.nodeValue.split("&") || "";
            for (var i = o.length; i--; ) {
                var j = o[i].split("=");
                p[j[0]] = j[1];
            }
        }
        return p;
    }, _rec = function(e) {
        if (!_reced) {
            if (!!e.origin && e.origin.slice(-12) == ".jiathis.com") {
                if (e.data && e.data != "FALSE") {
                    JIATHIS_CONFIGS.jtck = e.data;
                }
            }
            _renderToolbox();
            _req();
            _reced = true;
        }
    }, _req = function() {
        var a, s, E = encodeURIComponent, o = _grf(_ref), T = document.title || "", Y = window.location.href || "", an = Y ? Y.indexOf(JIATHIS_CONFIGS.jtcbk) : -1, d1 = _gd(o.host), d2 = _gd(Y), q = null, f = d1 && d2 && d1 == d2 ? false : true;
        if (an > -1) {
            a = Y.substr(an);
            q = a.split("#").pop().split("-").pop().split("=").pop();
            q = _lists[_ckpre + q] ? q : "";
        }
        q = !q && o.webid ? o.webid : q;
        if (q && f) {
            s = "rsc=" + q + "&rnm=" + parseInt(JIATHIS_CONFIGS.uid) + "&rfh=" + E(o.host) + "&rfp=" + E(o.path) + "&pre=" + E(Y) + "&tit=" + escape(T);
            new Image().src = JIATHIS_CONFIGS.lhost + "/l.gif?" + s;
        }
    }, _gd = function(o) {
        var d = null;
        if (o) {
            d = o.split(".").slice(-2).join(".");
            d = d == "com.cn" ? o.split(".").slice(-3).join(".") : d;
            d = d.split("/").shift();
        }
        return d;
    }, _grf = function(r) {
        var h = "", p = "", q = "", m;
        if (r.match(/(?:[a-z]\:\/\/)([^\/\?]+)(.*)/gi)) {
            h = RegExp.$1;
            p = RegExp.$2;
            h = h ? h : "";
            p = p ? p : "";
            if (h) {
                for (var k in _lists) {
                    m = _lists[k].split(",");
                    if (m[2] && m[2] == h) {
                        q = k.slice(3);
                        break;
                    }
                }
            }
        }
        return {
            host: h,
            path: p,
            webid: q
        };
    }, jiathis_is_mobile = function() {
        var a = navigator.userAgent.toLowerCase().match(/ucweb|ios|mobile|ipad|ipod|blackberry|motorola|YahooSeeker|symbian|nokia|android|iphone os|windows ce|rv:1.2.3.4|midp/i);
        var b = parseInt(window.screen.width);
        var c = parseInt(window.screen.height);
        var d = false;
        if (a) {
            if (b < c) {
                d = true;
            }
        }
        return d;
    }, jiathis_more_href = function() {
        var a = jiathis_get_des(), pic = jiathis_get_pic(), G = "?url=" + encodeURIComponent(String(conf.url || document.location)), T = "&title=" + encodeURIComponent(String(conf.title || document.title)), S = conf.summary ? "&summary=" + encodeURIComponent(conf.summary) : a ? "&summary=" + encodeURIComponent(a) : "", F = JIATHIS_CONFIGS.uid ? "&uid=" + parseInt(JIATHIS_CONFIGS.uid) : "&uid=1626433", P = conf.pic ? "&pic=" + encodeURIComponent(conf.pic) : pic ? "&pic=" + encodeURIComponent(pic) : "";
        return "http://www.jiathis.com/share" + G + T + S + F + P;
    }, jiathis_utility_ifr = !!window.postMessage ? creElm({
        style: "display:none;",
        frameBorder: 0,
        src: 'http://v3.jiathis.com/code' + "/jiathis_utility.html"
    }, "iframe") : null, div = creElm({
        className: "jiathis_style",
        style: "position:absolute;z-index:1000000000;display:none;overflow:auto;"
    }), div1 = creElm({
        className: "jiathis_style",
        style: "position:absolute;z-index:1000000000;display:none;top:50%;left:50%;overflow:auto;"
    }), iframe = creElm({
        style: "position:" + (/firefox/.test(ua) ? "fixed" : "absolute") + ";display:none;filter:alpha(opacity=0);opacity:0",
        frameBorder: 0
    }, "iframe"), timer, inputTimer, list, clist, h, texts = {}, clickpopjs, ckcpjs;
    creElm({
        href: 'http://v3.jiathis.com/code' + "/css/jiathis_share.css",
        rel: "stylesheet",
        type: "text/css"
    }, "link");
    $CKE = {
        jid: "",
        pop: div,
        centerpop: div1,
        shares: 0,
        containers: [],
        disappear: function(a) {
            var b = window.event || a, t = b.srcElement || b.target, tn = t.tagName ? t.tagName.toUpperCase() : "", c = div.contains ? div.contains(t) : !!(div.compareDocumentPosition(t) & 16), c1 = div1.contains ? div1.contains(t) : !!(div1.compareDocumentPosition(t) & 16), c2 = true;
            if (tn == "IMG") {
                c2 = t.parentNode.className.indexOf("jiathis") == "-1";
            } else if (tn == "A") {
                c2 = t.className.indexOf("jiathis") == "-1";
            } else if (tn == "SPAN") {
                c2 = t.className.indexOf("jiathis_counter") == "-1";
            }
            if (!c && !c1 && c2) {
                iframe.style.display = div1.style.display = "none";
            }
        },
        over: function() {
            var s, T = this, timerCont, fn = function() {
                timerCont = setInterval(function() {
                    if (div.innerHTML) {
                        var p = getP(T), wh = getWH(), tl = getS();
                        with (div.style) {
                            display = "block";
                            var a = T.style.display;
                            T.style.display = "block";
                            top = (p.t + T.offsetHeight + div.offsetHeight > wh.h + tl.t ? p.t - div.offsetHeight : p.t + T.offsetHeight) + "px";
                            left = p.l + "px";
                            T.style.display = a;
                        }
                        with (iframe.style) {
                            top = div.offsetTop + "px";
                            left = div.offsetLeft + "px";
                            width = div.offsetWidth + "px";
                            height = div.offsetHeight + "px";
                            margin = "";
                            display = "block";
                        }
                        clearInterval(timerCont);
                    }
                }, 50);
            };
            if (!clickpopjs) {
                clickpopjs = creElm({
                    src: 'http://v3.jiathis.com/code' + "/ckepop.js",
                    charset: "utf-8"
                }, "script", head);
                clickpopjs.onloaded = 0;
                clickpopjs.onload = function() {
                    clickpopjs.onloaded = 1;
                    !ie && fn();
                };
                clickpopjs.onreadystatechange = function() {
                    /complete|loaded/.test(clickpopjs.readyState) && !clickpopjs.onloaded && fn();
                };
            } else {
                fn();
            }
            return false;
        },
        out: function() {
            timer = setTimeout(function() {
                div.style.display = "none";
                div1.style.display != "block" && (iframe.style.display = "none");
            }, 100);
        },
        move: function() {
            clearTimeout(timer);
        },
        center: function() {
            div.style.display = iframe.style.display = "none";
            if (!ckcpjs) {
                ckcpjs = creElm({
                    src: 'http://v3.jiathis.com/code' + "/ckecenterpop.js",
                    charset: "utf-8"
                }, "script", head);
                db.style.position = "static";
            } else {
                var a = getS();
                div1.style.display = "block";
                div1.style.margin = -div1.offsetHeight / 2 + a.t + "px " + (-div1.offsetWidth / 2 + a.l) + "px";
                list = d.getElementById("jiathis_sharelist"), clist = list.cloneNode(true), h = clist.getElementsByTagName("input");
                for (var i = 0, ci; ci = h[i++]; ) {
                    texts[ci.value] = ci.parentNode;
                }
                with (iframe.style) {
                    left = top = "50%";
                    width = div1.offsetWidth + "px";
                    height = div1.offsetHeight + "px";
                    margin = div1.style.margin;
                    display = "block";
                }
            }
            return false;
        },
        choose: function(o) {
            clearTimeout(inputTimer);
            inputTimer = setTimeout(function() {
                var s = o.value.replace(/^\s+|\s+$/, ""), frag = d.createDocumentFragment();
                for (var p in texts) {
                    eval("var f = /" + (s || ".") + "/ig.test(p)");
                    !!texts[p].cloneNode && f && frag.appendChild(texts[p].cloneNode(true));
                }
                list.innerHTML = "";
                list.appendChild(frag);
            }, 100);
        },
        centerClose: function() {
            iframe.style.display = div1.style.display = "none";
        },
        rdc: function(o) {
            if (o.shares !== undefined) {
                var A = $CKE.containers, B = parseInt(o.shares), C = String(conf.url || d.location), D = _gck(), J = _rck(D[C]), T = new Date().getTime(), S = B;
                if (J && J.shares > B) {
                    S = J.shares;
                }
                _sck(C, S, T);
                _renderCounter(A, S);
            }
        },
        counter: function() {
            var A = $CKE.containers, B = _gck(), C = String(conf.url || d.location), J = _rck(B[C]), R = true;
            if (J && J.timedeff <= 60) {
                $CKE.shares = J.shares;
                _renderCounter(A, J.shares);
                R = false;
            }
            if (R) {
                creElm({
                    src: "//i.jiathis.com/url/shares.php?url=" + encodeURIComponent(C),
                    charset: "utf-8"
                }, "script", head);
            }
        },
        open: function(A) {
            creElm({
                src: A,
                charset: "utf-8"
            }, "script", head);
        },
        fireEvent: function(F, O) {
            if (F) {
                F = typeof F == "function" ? F : eval(F);
                F(O);
            }
        }
    };
    if (!!window.addEventListener) {
        !!window.addEventListener && window.addEventListener("message", _rec, false);
    } else {
        if (!!window.postMessage) {
            !!window.attachEvent && window.attachEvent("onmessage", _rec);
        } else {
            _renderToolbox();
        }
    }
    div.onmouseover = function() {
        clearTimeout(timer);
    };
    div.onmouseout = function() {
        $CKE.out();
    };
    ie ? d.attachEvent("onclick", $CKE.disappear) : d.addEventListener("click", $CKE.disappear, false);
    if (!conf.do_not_track && wlh && typeof _gnayTrack != "object") {
        d.write('<script type="text/javascript" src="' + 'http://v3.jiathis.com/code' + '/plugin.client.js" charset="utf-8"></script>');
    }
})();

function jiathis_sendto(a) {
    var b = jiathis_get_des(), pic = jiathis_get_pic();
    try {
        var c = jiathis_config || {};
    } catch (e) {
        var c = {};
    }
    var  __summary=''
    if (a=='tsina') {
        __summary=''
    }else{
        __summary=c.summary
    }
    console.log(a)
    // return;
    var d = encodeURIComponent, cu = JIATHIS_CONFIGS.custom[a] || {}, U = String(c.url || document.location), W = "?webid=" + a, G = "&url=" + d(U), T = "&title=" + d(c.title || document.title), S = c.summary ? "&summary=" + d(__summary) : b ? "&summary=" + d(b) : "", F = JIATHIS_CONFIGS.uid ? "&uid=" + parseInt(JIATHIS_CONFIGS.uid) : "", E = c.data_track_clickback ? "&jtss=1" : "", K = c.appkey && c.appkey[a] ? "&appkey=" + c.appkey[a] : "", P = c.pic ? "&pic=" + d(c.pic) : pic ? "&pic=" + d(pic) : "", C = $CKE.jid ? "&jid=" + $CKE.jid : "", R = c.ralateuid && c.ralateuid[a] ? "&ralateuid=" + c.ralateuid[a] : "", Q = c.evt && c.evt["share"] ? c.evt["share"] : null, A = "http://s.jiathis.com/", X = cu.name && cu.url ? "&acn=" + d(cu.name) + "&acu=" + d(cu.url) : "", SU = c.shortUrl == false ? "" : "&su=1";
    B = A + W + G + T + F + E + K + P + R + S + X + C + SU;
    if (a == "copy" || a == "fav" || a == "print" || a == "weixin") {
        $CKE.open(B);
        if (a == "copy") {
            jiathis_copyUrl();
        } else if (a == "fav") {
            jiathis_addBookmark();
        } else if (a == "weixin") {
            WT = c.title || document.title;
            WS = c.summary ? __summary : b ? b : "";
            WU = G.replace("&url=", "");
            AT = WT + WS;
            AS = jiathis_SetString(AT, 110);
            jiathis_sharewx(d(AS + "..."), WU);
        } else {
            window.print();
        }
    } else {
        window.open(B, "");
    }
    $CKE.rdc({
        shares: $CKE.shares + 1
    });
    $CKE.fireEvent(Q, {
        type: "share",
        data: {
            service: a,
            url: U
        }
    });
    return false;
}

function jiathis_addBookmark() {
    try {
        var d = jiathis_config || {};
    } catch (e) {
        var d = {};
    }
    var a = d.title || document.title;
    var b = d.url || parent.location.href;
    var c = window.sidebar;
    if (c && !!c.addPanel) {
        c.addPanel(a, b, "");
    } else if (document.all) {
        window.external.AddFavorite(b, a);
    } else {
        alert("请按 Ctrl + D 为你的浏览器添加书签！");
    }
}

function jiathis_copyUrl() {
    try {
        var d = jiathis_config || {};
    } catch (e) {
        var d = {};
    }
    var a = d.url || this.location.href;
    var b = d.title || document.title;
    var c = b + " " + a;
    var f = navigator.userAgent.toLowerCase();
    var g = f.indexOf("opera") != -1 && opera.version();
    var h = f.indexOf("msie") != -1 && !g && f.substr(f.indexOf("msie") + 5, 3);
    if (h) {
        clipboardData.setData("Text", c);
        alert("复制成功,请粘贴到你的QQ/MSN上推荐给你的好友！");
    } else if (prompt("你使用的是非IE核心浏览器，请按下 Ctrl+C 复制代码到剪贴板", c)) {
        alert("复制成功,请粘贴到你的QQ/MSN上推荐给你的好友！");
    } else {
        alert("目前只支持IE，请复制地址栏URL,推荐给你的QQ/MSN好友！");
    }
}

function jiathis_get_pic() {
    var a = document.getElementsByTagName("img"), pic = "", con = "", picArr = new Array();
    for (i = 0; i < a.length; i++) {
        var b = parseInt(a.item(i).offsetWidth), imgH = parseInt(a.item(i).offsetHeight), minW = 300, minH = 150, width = 300 / imgH * 150, height = 150 / b * 300;
        if (b >= minW && imgH >= minH) {
            if (width - height <= 150) {
                pic += con + a.item(i).src;
                con = ",";
            }
        }
    }
    picArr = pic.split(",");
    var c = parseInt(Math.random() * picArr.length);
    return picArr[c];
}

function jiathis_get_des() {
    var a = "";
    var b = document.getElementsByTagName("meta");
    var c = b.length;
    if (/msie/i.test(navigator.userAgent)) {
        for (i = 0; i < c; i++) {
            if (b[i].name == "description") {
                a = b[i].content;
            }
        }
        if (a == "") {
            for (k in b) {
                if (k == "description") {
                    a = b[k].content;
                }
            }
        }
        if (/msie 6/i.test(navigator.userAgent)) {
            a = "";
        }
    } else {
        for (k in b) {
            if (/chrome/i.test(navigator.userAgent)) {
                if (typeof b[k].name != "undefined") {
                    if (b[k].name == "description") {
                        a = b[k].content;
                    }
                }
            } else {
                if (k == "description") {
                    a = b[k].content;
                }
            }
        }
    }
    a = a.replace(/\s/g, "");
    return a;
}

function jiathis_SetString(a, b) {
    var c = 0;
    var s = "";
    for (var i = 0; i < a.length; i++) {
        if (a.charCodeAt(i) > 128) {
            c += 2;
        } else {
            c++;
        }
        s += a.charAt(i);
        if (c >= b) {
            return s;
        }
    }
    return s;
}

function jiathis_sharewx(a, b) {
    jiathis_popup("", b, a);
    return false;
}

function jiathis_popup(c, d, e) {
    var f, wt, ft, innerhtml, mt, width, height, bh, mt, isIe6 = /msie|MSIE 6/.test(navigator.userAgent);
    if (g = document.getElementById("jiathis_weixin_share")) {
        g = document.getElementById("jiathis_weixin_share");
    } else {
        var g = document.createElement("div");
        if (isIe6) {
            g.style.position = "absolute";
            g.style.zIndex = "1000000";
            g.style.left = "650px";
            var h = document.body.scrollTop || document.documentElement.scrollTop;
            g.style.top = parseInt(h) + 300 + "px";
        } else {
            g.style.position = "fixed";
            g.style.zIndex = "10000000001";
        }
        g.id = "jiathis_weixin_share";
    }
    if (c) {
        f = c;
        wt = "在微信上关注我们";
        ft = "打开微信，点击底部的“发现”，使用 “扫一扫” 即可关注我们。";
        innerhtml = '<img src="' + f + '" style="margin-top:25px;" width="129" alt="二维码加载失败" height="129" id="jiathis_follow_img">';
        width = "width:300px;";
        height = "height:300px;";
        bh = "height:181px;";
        mt = "margin: -100px 0 0 -200px;";
    } else {
        f = JIATHIS_CONFIGS.shost + "?webid=weixin&url=" + d + "&title=" + e + "&isexit=false";
        wt = "分享到微信朋友圈";
        ft = '打开微信，点击底部的“发现”，使用 “扫一扫” 即可将网页分享到我的朋友圈。 <a href="' + f + '" target="_blank">如何使用？</a>';
        innerhtml = innerhtmlw = "二维码加载中....";
        width = "width:360px;";
        height = "height:360px;";
        bh = "height:251px;";
        mt = "margin: -200px 0 0 -200px;";
    }
    g.innerHTML = '<div id="jiathis_weixin_modal" style="background-clip: padding-box;background-color: #FFFFFF;border: 1px solid rgba(0, 0, 0, 0.3);  border-radius: 6px 6px 6px 6px;  box-shadow: 0 3px 7px rgba(0, 0, 0, 0.3); left: 50%; ' + mt + "overflow: hidden; position: fixed; top: 50%; " + width + height + ' overflow:hidden;" class="jiathis_weixin_modal"><div class="jiathis_modal_header" id="jiathis_modal_header" style="border-bottom: 1px solid #EEEEEE; padding: 9px 15px;"><a style="text-decoration:none;  margin-top: 2px; color: #000000; float: right;  font-size: 20px;  font-weight: bold; cursor:pointer;line-height: 20px; opacity: 0.2; text-shadow: 0 1px 0 #FFFFFF;"class="jiathis_weixin_close" id="jiathis_weixin_close" onclick="jiathis_cancel()"target="_self">×</a><h3 id="jiathis_weixin_h3"style=" line-height: 30px; margin: 0; font-weight:normal; font-family:"微软雅黑";">' + wt + '</h3></div><div class="jiathis_modal_body"id="jiathis_modal_body"style="text-align:center;' + bh + '"><p id="jiathis_webchat">' + innerhtml + '</p></div><div class="jiathis_modal_footer" id="jiathis_modal_footer"style="border-radius: 0 0 6px 6px; border-top: 1px solid #DDDDDD; box-shadow: 0 1px 0 #FFFFFF inset; height:100%;padding:0 10px;padding-top:11px;text-align: right; font-size:12px;"><div id="jiathis_weixin_tip"style="text-align:left;margin:0; padding:0;font-size:12px;">' + ft + "</div>  </div></div>";
    document.body.appendChild(g);
    if (!c) {
        setTimeout(function() {
            var a = document.createElement("img");
            var b = document.getElementById("jiathis_webchat");
            a.src = JIATHIS_CONFIGS.shost + "/qrcode.php?url=" + d;
            a.width = "220";
            a.height = "220";
            a.style.marginTop = "15px";
            b.innerHTML = "";
            a.alt = "二维码加载失败...";
            b.appendChild(a);
        }, 1e3);
    }
    _oMaskEl = document.getElementById("jiathis_weixin_share");
}

function jiathis_cancel() {
    _oDlgEl = document.getElementById("jiathis_weixin_share");
    document.body.removeChild(_oDlgEl);
    _oDlgEl = _oDivEl = _oMaskEl = _oErweimaMaskEl = null;
}