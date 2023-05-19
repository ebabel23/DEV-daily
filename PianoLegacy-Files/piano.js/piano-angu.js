function html5ModeConfig(e) {
  window.history && history.pushState ? e.html5Mode(!0) : e.html5Mode(!1).hashPrefix("!");
}
Object.assign ||
  Object.defineProperty(Object, "assign", {
    enumerable: !1,
    configurable: !0,
    writable: !0,
    value: function (e, t) {
      "use strict";
      if (null == e) throw new TypeError("Cannot convert first argument to object");
      for (var n = Object(e), r = 1; r < arguments.length; r++) {
        var o = arguments[r];
        if (null != o)
          for (var a = Object.keys(Object(o)), i = 0, s = a.length; i < s; i++) {
            var c = a[i],
              l = Object.getOwnPropertyDescriptor(o, c);
            void 0 !== l && l.enumerable && (n[c] = o[c]);
          }
      }
      return n;
    },
  }),
  Array.isArray ||
    (Array.isArray = function (e) {
      return "[object Array]" === Object.prototype.toString.call(e);
    }),
  (function () {
    if ("function" == typeof window.CustomEvent) return !1;
    function e(e, t) {
      t = t || {
        bubbles: !1,
        cancelable: !1,
        detail: void 0,
      };
      var n = document.createEvent("CustomEvent");
      return n.initCustomEvent(e, t.bubbles, t.cancelable, t.detail), n;
    }
    (e.prototype = window.Event.prototype), (window.CustomEvent = e);
  })(),
  Array.prototype.find ||
    (Array.prototype.find = function (e) {
      if (null == this) throw new TypeError("Array.prototype.find called on null or undefined");
      if ("function" != typeof e) throw new TypeError("predicate must be a function");
      for (var t, n = Object(this), r = n.length >>> 0, o = arguments[1], a = 0; a < r; a++) if (((t = n[a]), e.call(o, t, a, n))) return t;
    }),
  Object.keys ||
    (Object.keys = (function () {
      "use strict";
      var e = Object.prototype.hasOwnProperty,
        t = !{
          toString: null,
        }.propertyIsEnumerable("toString"),
        n = ["toString", "toLocaleString", "valueOf", "hasOwnProperty", "isPrototypeOf", "propertyIsEnumerable", "constructor"],
        r = n.length;
      return function (o) {
        if ("object" != typeof o && ("function" != typeof o || null === o)) throw new TypeError("Object.keys called on non-object");
        var a,
          i,
          s = [];
        for (a in o) e.call(o, a) && s.push(a);
        if (t) for (i = 0; i < r; i++) e.call(o, n[i]) && s.push(n[i]);
        return s;
      };
    })()),
  Array.prototype.reduce ||
    (Array.prototype.reduce = function (e) {
      "use strict";
      if (null == this) throw new TypeError("Array.prototype.reduce called on null or undefined");
      if ("function" != typeof e) throw new TypeError(e + " is not a function");
      var t,
        n = Object(this),
        r = n.length >>> 0,
        o = 0;
      if (arguments.length >= 2) t = arguments[1];
      else {
        for (; o < r && !(o in n); ) o++;
        if (o >= r) throw new TypeError("Reduce of empty array with no initial value");
        t = n[o++];
      }
      for (; o < r; o++) o in n && (t = e(t, n[o], o, n));
      return t;
    }),
  Array.prototype.fill ||
    (Array.prototype.fill = function (e) {
      if (null == this) throw new TypeError("this is null or not defined");
      for (var t = Object(this), n = t.length >>> 0, r = arguments[1] >> 0, o = r < 0 ? Math.max(n + r, 0) : Math.min(r, n), a = arguments[2], i = void 0 === a ? n : a >> 0, s = i < 0 ? Math.max(n + i, 0) : Math.min(i, n); o < s; ) (t[o] = e), o++;
      return t;
    }),
  Object.freeze ||
    (Object.freeze = function (e) {
      if (Object(e) !== e) throw new TypeError("Object.freeze can only be called on Objects.");
      return e;
    }),
  Object.values ||
    (Object.values = function (e) {
      return Object.keys(e).map(function (t) {
        if (e.hasOwnProperty(t)) return e[t];
      });
    }),
  (function (e) {
    var t,
      n,
      r,
      o,
      a = 1,
      i = this,
      s = "postMessage",
      c = "addEventListener",
      l = i[s];
    (e[s] = function (t, n, r) {
      n && ((t = "string" == typeof t ? t : e.param(t)), (r = r || parent), l ? r[s](t, n.replace(/([^:]+:\/\/[^\/]+).*/, "$1")) : n && (r.location = n.replace(/#.*$/, "") + "#" + +new Date() + a++ + "&" + t));
    }),
      (e.receiveMessage = o =
        function (a, s, u) {
          l
            ? (a &&
                (r && o(),
                (r = function (t) {
                  if (("string" == typeof s && t.origin !== s) || (e.isFunction(s) && !1 === s(t.origin))) return !1;
                  a(t);
                })),
              i[c] ? i[a ? c : "removeEventListener"]("message", r, !1) : i[a ? "attachEvent" : "detachEvent"]("onmessage", r))
            : (t && clearInterval(t),
              (t = null),
              a &&
                ((u = "number" == typeof s ? s : "number" == typeof u ? u : 100),
                (t = setInterval(function () {
                  var e = document.location.hash,
                    t = /^#?\d+&/;
                  e !== n &&
                    t.test(e) &&
                    ((n = e),
                    a({
                      data: e.replace(t, ""),
                    }));
                }, u))));
        });
  })(jQuery),
  (function (e) {
    var t, n;
    void 0 === e.tinypass && (e.tinypass = {}),
      (tinypass.uploadFile2 = function (e, t) {}),
      (tinypass.setMessageDashboard = function (e, t) {
        return "error" === e ? tinypass.__setErrorMessageDashboard(t) : tinypass.__setMessage(e, t);
      }),
      (tinypass.__buildAlertPopupDashboard = function (e, t) {
        if (t) {
          var n = $('<div class="notification error"><span class="message">' + t + '</span><button type="button" class="close close-alert-dashboard">&times;</button></div>');
          $(document.body).append(n),
            n.css("marginLeft", -n.outerWidth() / 2),
            n.addClass("in"),
            $(".close-alert-dashboard")
              .unbind("click")
              .click(function () {
                $(this).parent().remove(), tinypass.__buildAlertPopupDashboard();
              });
        }
        for (var r = $(".notification"), o = 0, a = 0; a < r.length; a++)
          $(r[a]),
            0 !== a
              ? $(r[a]).css({
                  top: 90 + o + "px",
                })
              : $(r[a]).css({
                  top: "90px",
                }),
            (o += $(r[a]).outerHeight() + 10);
      }),
      (tinypass.__setErrorMessageDashboard = function (e) {
        if ($(".modal-body").is(":visible")) $(".modal-body  .alert").remove(), $(".modal-body").prepend(tinypass.__buildAlertPopup("error", e));
        else if ($("#popup").is(":visible")) $("#popup #popup-content .alert").remove(), $("#popup #popup-content").prepend(tinypass.__buildAlertPopup("error", e));
        else if ($(".modal .modal-body").length > 0) {
          for (var t = $(".modal .modal-body"), n = !1, r = 0; r < t.length; r++) {
            var o = t[r];
            $(o).is(":visible") && ($(".alert", o).remove(), $(o).prepend($('<div class="row"></div>').append(tinypass.__buildAlertPopup("error", e))), (n = !0));
          }
          n || ($(".container .main").length > 0 ? tinypass.__buildAlertPopupDashboard("error", e) : tinypass.__setMessage("error", e));
        } else if ($(".container .main").length > 0) tinypass.__buildAlertPopupDashboard("error", e);
        else if ($("#payscreen #alert").length > 0) {
          $("#payscreen #alert").html(e);
        } else tinypass.__setMessage("error", e);
      }),
      (tinypass.setMessage = function (e, t) {
        return "error" === e ? tinypass.__setErrorMessage(t) : tinypass.__setMessage(e, t);
      }),
      (tinypass.hideMessage = function () {
        $(".alert-top").remove(), $(".tinypass-alert-messase").remove(), $(".notification.error").remove();
      }),
      (tinypass.__buildAlertPopup = function (e, t) {
        return $('<div class="alert alert-block alert-' + e + ' tinypass-alert-messase"></div>')
          .append('<button type="button" class="close" data-dismiss="alert">&times;</button>')
          .append($('<span class="message"></span>').text(t));
      }),
      (tinypass.__setErrorMessage = function (e) {
        if ($(".modal-body").is(":visible")) $(".modal-body  .alert").remove(), $(".modal-body").prepend(tinypass.__buildAlertPopup("error", e));
        else if ($("#popup").is(":visible")) $("#popup #popup-content .alert").remove(), $("#popup #popup-content").prepend(tinypass.__buildAlertPopup("error", e));
        else if ($(".modal .modal-body").length > 0) {
          for (var t = $(".modal .modal-body"), n = !1, r = 0; r < t.length; r++) {
            var o = t[r];
            $(o).is(":visible") && ($(".alert", o).remove(), $(o).prepend($('<div class="row"></div>').append(tinypass.__buildAlertPopup("error", e))), (n = !0));
          }
          n || ($(".container .main").length > 0 ? ($(".container .main .alert").remove(), $(".container .main").prepend($('<div class="row"></div>').append(tinypass.__buildAlertPopup("error", e)))) : tinypass.__setMessage("error", e));
        } else if ($(".container .main").length > 0)
          $(".container .main .alert").remove(),
            $(".container .main").prepend($('<div class="row"></div>').append(tinypass.__buildAlertPopup("error", e))),
            setTimeout(function () {
              $(".container .main .alert").fadeOut(2e3);
            }, 1e3);
        else if ($("#payscreen #alert").length > 0) {
          $("#payscreen #alert").html(e);
        } else tinypass.__setMessage("error", e);
      }),
      (tinypass.__setMessage = function (t, n, r) {
        var o = $('<div class="notification"><i class="icon-check-white status"></i><span class="message">' + n + "</span></div>");
        $(document.body).append(o),
          e.innerWidth > 648 && o.css("marginLeft", -o.outerWidth() / 2),
          o.addClass("in"),
          setTimeout(function () {
            o.removeClass("in");
          }, 3e3),
          setTimeout(function () {
            o.remove();
          }, 5e3);
      }),
      (tinypass.setOpacity = function (e, t) {
        $(e)
          .css("filter", "alpha(opacity=" + 100 * t + ")")
          .css("-khtml-opacity", t)
          .css("-moz-opacity", t)
          .css("opacity", t);
      }),
      (tinypass.showWaitPanel = function (e) {
        if ((e || (e = {}), tinypass.hideWaitPanel(), $("body").append($('<div id="waitPanel">' + (e.title ? e.title : "Loading...") + "</div>").css("display", "block")), e.modal)) {
          var t = $('<div id="tinypassModalWindow"/>');
          t.css("position", "fixed").css("left", "0").css("top", "0").css("width", "100%").css("height", "100%").css("z-index", "1000"), e.opacity ? tinypass.setOpacity(t.css("background-color", e.background ? e.background : "white"), e.opacity) : t.css("background-color", "transparent"), $("body").append(t);
        }
      }),
      (tinypass.hideWaitPanel = function () {
        $("#waitPanel").remove(), $("#tinypassModalWindow").remove();
      }),
      (tinypass.__buildPopup = function () {
        return $('<div id="popup" class="modal hide fade" tabindex="-1" role="dialog" aria-hidden="true" style="display: none;"><div id="popup-title" class="modal-header"></div><div id="popup-content" class="modal-body"></div><div id="popup-controls" class="modal-footer"></div></div>');
      }),
      (tinypass.updateMetaRefresh = function (e) {
        e && (n = e), n && !isNaN(n) && (clearTimeout(t), (t = setTimeout("window.location.reload()", n)));
      }),
      (tinypass.__initNewlyAddedContent = function (e) {
        tinypass.__initToolTips(e);
      }),
      $(document).ready(function () {
        var e = $("body");
        e.append(tinypass.__buildPopup()),
          e.ajaxStart(function () {
            tinypass.updateMetaRefresh(), tinypass.showWaitPanel();
          }),
          e.ajaxStop(function () {
            tinypass.hideWaitPanel();
          }),
          $("table.row-alternate").each(function () {
            $(this).find("tr:even").find("td").toggleClass("line-item-alt", !0), $(this).find("tr:odd").find("td").toggleClass("line-item-alt2", !0);
          }),
          tinypass.__initNewlyAddedContent(e),
          (function (e) {
            var t = new Array();
            (e.Watermark = {
              ShowAll: function () {
                for (var e = 0; e < t.length; e++) "" === t[e].obj.val() ? (t[e].obj.val(t[e].text), t[e].obj.toggleClass("watermark", !0)) : t[e].obj.toggleClass("watermark", !1);
              },
              HideAll: function () {
                for (var e = 0; e < t.length; e++) t[e].obj.val() === t[e].text && t[e].obj.val("");
              },
            }),
              (e.fn.Watermark = function (n) {
                return this.each(function () {
                  var r = e(this);
                  function o() {
                    0 === r.val().length && r.toggleClass("watermark", !0).val(n);
                  }
                  (t[t.length] = {
                    text: n,
                    obj: r,
                  }),
                    r.focus(function () {
                      r.hasClass("watermark") && r.toggleClass("watermark", !1).val("");
                    }),
                    r.blur(o),
                    o();
                });
              });
          })(jQuery);
      }),
      (tinypass.__initToolTips = function (e) {
        $(e)
          .find('*[data-toggle="tooltip"]')
          .each(function () {
            var e = $(this);
            e.attr("title") || e.attr("title", e.html()),
              e.tooltip({
                html: !0,
              });
          });
      }),
      (tinypass.hasFlash = function () {
        try {
          return ZeroClipboard.detectFlashSupport();
        } catch (e) {}
        return !1;
      }),
      (tinypass.copyToClipboard = function (e, t) {
        var n, r, o;
        try {
          if (!tinypass.hasFlash()) return null;
          for (var a in ((r = $(e)), ((o = {}).moviePath = "/js/ZeroClipboard.swf"), t)) o[a] = t[a];
          return (n = new ZeroClipboard(r, o)).glue(r), n;
        } catch (e) {}
      }),
      (tinypass.initImageCropper = function (e, t, n, r) {}),
      (tinypass.cropImage = function (e, t, n, r, o, a, i, s, c, l) {}),
      (tinypass.stripSpaces = function (e) {
        return null == e ? e : e.replace(/\s+/g, "");
      }),
      (tinypass.ccLuhnCheck = function (e) {
        if (!e.match(/^\d+$/)) return !1;
        for (var t = e.length, n = 1 & t, r = 0, o = 0; o < t; o++) {
          var a = parseInt(e.charAt(o));
          (1 & o) ^ n || ((a *= 2) > 9 && (a -= 9)), (r += a);
        }
        return r % 10 == 0;
      }),
      (tinypass.convertCurrencyAndFormat = function (e, t) {
        try {
          if (!e || e.match(/.*[^0-9.].*/)) return "?.??";
          if (!t || t.match(/.*[^0-9.].*/)) return "?.??";
          var n = parseFloat(e) / parseFloat(t);
          return 0 === n || isNaN(n) ? "?.??" : (n = (Math.ceil(Math.round(1e4 * n) / 100) / 100).toFixed(2).replace(/[.]00$/, ""));
        } catch (e) {
          return "?.??";
        }
      });
    try {
      $(document).ready(function () {
        $(e).on("resize", function () {
          $("#left-nav")
            .find("#left-nav-panel")
            .height($(e).height() - 121);
        }),
          $(e).trigger("resize");
      });
    } catch (e) {}
  })(window),
  (function () {
    "use strict";
    var e = "placeholder" in document.createElement("input"),
      t = angular.module("html5.placeholder", []),
      n = function (e, t) {
        var n = e.getAttributeNode(t);
        return n ? n.nodeValue : n;
      };
    t.factory("placeholder", function () {
      var t;
      if (e)
        t = function (e, t) {
          t &&
            t({
              back: function () {},
            });
        };
      else {
        var r = "placeholderTmp" + +new Date(),
          o = {
            commit: function (e) {
              angular.forEach(e, function (e) {
                var t,
                  o = angular.element(e);
                (t = n(e, "placeholder")), o.val() == t && (o.data(r, o.val()), o.val(""));
              });
            },
            doRollback: function (e) {
              angular.forEach(e, function (e) {
                var t,
                  n = angular.element(e);
                (t = n.data(r)) && (n.val(t), n.data(r, null));
              });
            },
          };
        t = function (e, t) {
          var n;
          e.length && "form" == e[0].tagName.toLowerCase()
            ? ((n = e.find("input")),
              (n = (function (e, t) {
                return (
                  angular.forEach(t, function (t) {
                    e.push(t);
                  }),
                  e
                );
              })(e.find("textarea"), n)))
            : (n = e),
            o.commit(n),
            t &&
              t({
                back: function () {
                  o.doRollback(n);
                },
              });
        };
      }
      return {
        ensure: t,
      };
    }),
      e ||
        t.directive("placeholder", [
          function () {
            var e,
              t,
              r,
              o,
              a = "_placeholder_" + +new Date(),
              i = "focus",
              s = "blur",
              c = /msie 9/i.test(navigator.userAgent);
            return (
              (r = function (e) {
                "password" == e.data(a).type && e.attr("type", "text");
              }),
              (o = function (e) {
                "password" == e.data(a).type && e.attr("type", "password");
              }),
              (e = function () {
                var e = angular.element(this);
                e.val() == n(this, "placeholder") && (e.val(""), o(e));
              }),
              (t = function () {
                var e = angular.element(this);
                "" == e.val() && (e.val(n(this, "placeholder")), r(e));
              }),
              {
                link: function (n, l, u) {
                  n.$watch("ready", function () {
                    return "password" != l.attr("type") || c
                      ? (l
                          .val(u.placeholder)
                          .data(a, {
                            type: (l.attr("type") || "").toLowerCase(),
                          })
                          .bind(i, e)
                          .bind(s, t),
                        r(l),
                        void n.$on("$destroy", function () {
                          l.unbind(i, e).unbind(s, t), o(l);
                        }))
                      : {};
                  });
                },
              }
            );
          },
        ]);
  })(),
  angular
    .module("tp.i18n", ["ajaxServices", "ngCookies", "tmh.dynamicLocale", "tinypassServices"])
    .config([
      "tmhDynamicLocaleProvider",
      function (e) {
        e.localeLocationPattern("/libs/angular-1.2.22/i18n/angular-locale_{{locale | replaceUnderscoreToDash}}.js");
      },
    ])
    .run([
      "lang",
      function (e) {
        var t = (TPParam.TRANSLATION_CONFIG && TPParam.TRANSLATION_CONFIG.initialLocaleId) || "en_US";
        e.update(t);
      },
    ])
    .directive("autoFocus", [
      "$timeout",
      function (e) {
        return {
          restrict: "AC",
          link: function (t, n) {
            var r = n[0];
            e(function () {
              var e = r.value;
              (r.value = ""), r.focus(), (r.value = e);
            }, 100);
          },
        };
      },
    ])
    .directive("t", [
      "$compile",
      "lang",
      "getTextFromLocales",
      function (e, t, n) {
        var r = /^arg(\d+)$/i;
        return {
          restrict: "AE",
          compile: function (o, a) {
            var i = o.html(),
              s = [];
            return (
              angular.forEach(a, function (e, t) {
                var n = t.match(r);
                n && n[1] && (s[n[1]] = e);
              }),
              function (r, o, a) {
                var c = t.getTemplateContext(),
                  l = a.context ? a.context : c;
                function u(a, c, u) {
                  if (a) {
                    var d = n(a, c, u);
                    o.empty().append(t.formatString(d(l, i), s)), e(o.contents())(r);
                  }
                }
                u(),
                  t.on(u),
                  r.$on("$destroy", function () {
                    t.off(u);
                  });
              }
            );
          },
        };
      },
    ])
    .directive("languageSelector", [
      "lang",
      function (e) {
        return {
          restrict: "E",
          scope: {},
          template:
            '<div ng-show="areLanguagesAvailable()" class="language-selector">   <div id="language-label" class="language-selector__label" ng-click="toggleMenu()">{{locale | shortLocale}}</div>   <ul id="language-list" class="language-selector__list" ng-class="{\'show\': opened === true, \'hide\': opened === false}">       <li class="language-selector__list-item" ng-repeat="(index, value) in languages | filter:showAvailableLanguage" ng-click="changeLanguage(value.locale)">           <div class="language-selector__country" ng-class="{\'selected\': value.locale === locale}">{{value.localized}}             <span class="language-selector__country-image language-selector__country-image--{{value.locale | getCountryCode}}"></span>           </div>       </li>   </ul></div>',
          link: function (e, t) {
            function n(n) {
              jQuery(n.target)[0] !== t.find("#language-label")[0] && ((e.opened = !1), jQuery(window).off("click"), e.$apply());
            }
            (e.toggleMenu = function () {
              (e.opened = !e.opened), jQuery(window).off("click"), jQuery(window).on("click", n);
            }),
              (e.opened = !1);
          },
          controller: [
            "$scope",
            function (t) {
              function n(e) {
                t.locale = e;
              }
              function r(e) {
                t.languages = e.sort(function (e, t) {
                  return e.localized.toLowerCase() === t.localized.toLowerCase() ? 0 : e.localized.toLowerCase() > t.localized.toLowerCase() ? 1 : -1;
                });
              }
              (t.languages = []),
                (t.locale = null),
                (t.showAvailableLanguage = function (e) {
                  return !!e.isEnabled && e;
                }),
                (t.changeLanguage = function (n) {
                  (t.locale = n), e.update(t.locale);
                }),
                (t.isLanguagesEnabled = TPParam.TRANSLATION_CONFIG.isEnabled),
                e.on(n),
                t.$on("$destroy", function () {
                  e.off(n);
                }),
                e.list().then(r),
                (t.areLanguagesAvailable = function () {
                  return t.isLanguagesEnabled && t.languages.length > 1;
                });
            },
          ],
        };
      },
    ])
    .filter("shortLocale", function () {
      function e(e) {
        var t = e.toUpperCase().split("_");
        return t[0] + "-" + t[1];
      }
      return (e.$stateful = !0), e;
    })
    .filter("t", [
      "lang",
      function (e) {
        function t(t, n) {
          var r = e.getTemplateContext();
          return e.trc(r, t, n);
        }
        return (t.$stateful = !0), t;
      },
    ])
    .filter("tc", [
      "lang",
      function (e) {
        function t(t, n, r) {
          return e.trc(n, t, r);
        }
        return (t.$stateful = !0), t;
      },
    ])
    .filter("replaceUnderscoreToDash", function () {
      function e(e) {
        return e.toString().toLowerCase().replace("_", "-");
      }
      return (e.$stateful = !0), e;
    })
    .filter("replaceDashToUnderscore", function () {
      function e(e) {
        var t;
        return null === e.match(/\-/g) ? e : (((t = e.toUpperCase().split("-"))[0] = t[0].toLowerCase()), t.join("_"));
      }
      return (e.$stateful = !0), e;
    })
    .filter("getCountryCode", function () {
      function e(e) {
        return e.match(/\w{2}$/)[0].toLowerCase();
      }
      return (e.$stateful = !0), e;
    })
    .factory("getTextFromLocales", [
      function () {
        return function (e, t, n) {
          return function (r, o) {
            var a,
              i = (r = r ? r + "" : "") + o,
              s = n && n[t],
              c = n && n[e],
              l = c && (c[i] || c[o]);
            return void 0 === l && (a = s && (s[i] || s[o])), l || a || o;
          };
        };
      },
    ])
    .factory("lang", [
      "tpHTTP",
      "$q",
      "$locale",
      "$cookies",
      "tmhDynamicLocale",
      "resolveLocale",
      "cookieLang",
      "$rootScope",
      "$filter",
      "getTextFromLocales",
      function (e, t, n, r, o, a, i, s, c, l) {
        var u,
          d = a(),
          f = !1,
          p = ["en_US", "en_GB", "pt_PT", "es_CO", "pt_BR", "fr_CA", "ja_JP", "zz_ZZ"],
          m = [],
          g = null,
          h = null,
          v = (TPParam.TRANSLATION_CONFIG && TPParam.TRANSLATION_CONFIG.systemDefaultLocale) || "en_US",
          y = {
            translationMapStatic: {},
            translationMapDynamic: {},
          },
          w = {},
          b = {};
        return (
          s.$on("CHECK_UPDATED_LANGUAGE", S),
          $(),
          L(),
          {
            update: N,
            on: function (e, t) {
              m.push(e), t || e(d, v, w);
            },
            off: function (e) {
              var t = m.indexOf(e);
              -1 !== t && m.splice(t, 1);
            },
            tr: function (e) {
              for (var t = new Array(arguments.length - 1), n = 0; n < t.length; ++n) t[n] = arguments[n + 1];
              return C(l(d, v, w)(null, e), t);
            },
            trc: function (e, t, n) {
              var r;
              if (angular.isArray(n)) r = n;
              else {
                r = new Array(arguments.length - 2);
                for (var o = 0; o < r.length; ++o) r[o] = arguments[o + 2];
              }
              return C(l(d, v, w)(e, t), r);
            },
            list: function () {
              if (!TPParam.TRANSLATION_CONFIG.isEnabled) return t.when([]);
              h ||
                (h = t.when(TPParam.TRANSLATION_CONFIG.languages).then(function (e) {
                  return (g = e), N(d), e;
                }));
              return h;
            },
            formatString: C,
            getLang: T,
            getTemplateContext: function () {
              return (window.TPParam.TRANSLATION_CONFIG && window.TPParam.TRANSLATION_CONFIG.templateContext) || "";
            },
            getCorrectStartWeekDay: function () {
              var e = T() || d;
              return -1 === p.indexOf(e);
            },
            getLanguageTag: _,
          }
        );
        function T() {
          return (f && d) || "";
        }
        function _() {
          return (T() || d).replace("_", "-");
        }
        function $() {
          A(), (u = setInterval(S, 500));
        }
        function A() {
          u && clearInterval(u);
        }
        function S() {
          var e = i.getCookie("LANG_CHANGED");
          e && e !== d && '""' !== e && N(e);
        }
        function C(e, t) {
          return angular.isUndefined(e) || null === e
            ? e
            : e.replace(/<t([^>]+)?>|<\/t>/g, "").replace(/{(\d+)}/g, function (e, n) {
                return void 0 !== t[n] ? t[n] : e;
              });
        }
        function E(e) {
          (w[d] = e),
            m.forEach(function (e) {
              e(d, v, w);
            });
        }
        function O(e, n) {
          var r,
            o,
            a,
            i = t.defer();
          return (
            e &&
              ((r = document.querySelector('script[src*="' + e + '"]')) ||
                ((o = document.getElementsByTagName("head")) &&
                  o.length &&
                  (a = o[0]) &&
                  (((r = document.createElement("script")).onload = function () {
                    return window["translation" + n] ? i.resolve(window["translation" + n]) : i.reject("Unable to load");
                  }),
                  r.setAttribute("src", e),
                  r.setAttribute("type", "text/javascript"),
                  r.setAttribute("charset", "utf-8"),
                  a.appendChild(r)))),
            i.promise
          );
        }
        function M(e) {
          var n = "/ng/common/i18n/platform-translation-map_" + e + ".js?version=" + TPParam.TRANSLATION_CONFIG.version,
            r = TPParam.TRANSLATION_CONFIG.loadTranslationUrl + "&language=" + e,
            o = window["translation_static_" + e];
          return TPParam.TRANSLATION_CONFIG.isStatic
            ? o
              ? t.when(o)
              : O(n, "_static_" + e).then(function () {
                  return t.when(window["translation_static_" + e]);
                })
            : t
                .all([
                  O(n, "_static_" + e).then(function (e) {
                    return e;
                  }),
                  O(r, "_dynamic_" + e).then(function (e) {
                    return e;
                  }),
                ])
                .then(function (e) {
                  return (y.translationMapStatic = e[0]), (y.translationMapDynamic = e[1]), t.when(angular.extend({}, e[0], e[1]));
                })
                .catch(function (t) {
                  w = (function (e, t) {
                    var n = [],
                      r = {};
                    "string" == typeof t && (n = [t]);
                    angular.isArray(t) && (n = [].concat(t));
                    angular.isArray(e) &&
                      e.forEach(function (e, t) {
                        r[t] = e;
                      });
                    angular.isObject(e) && !angular.isArray(e) && (r = angular.extend({}, e));
                    return (
                      n.forEach(function (e) {
                        delete r[e];
                      }),
                      r
                    );
                  })(w, e);
                });
        }
        function N(e) {
          if ((A(), !TPParam.TRANSLATION_CONFIG || !TPParam.TRANSLATION_CONFIG.isEnabled)) return i.removeCookie("LANG"), void i.removeCookie("LANG_CHANGED");
          angular.isUndefined(e) && (e = i.getCookie("LANG") || v);
          var r =
            g &&
            g.some(function (t) {
              return t.locale === e;
            });
          (g && !r) ||
            (!(function (e) {
              (d = e), (f = !0), i.setCookie("LANG", d, 1500), i.setCookie("LANG_CHANGED", d, 1);
              var t = c("replaceUnderscoreToDash")(e);
              b[t] || n.id !== t || (b[t] = angular.copy(n));
              b[t] &&
                (function e(t, n) {
                  angular.forEach(t, function (e, r) {
                    n[r] ? angular.isArray(n[r]) && (t[r].length = n[r].length) : delete t[r];
                  });
                  angular.forEach(n, function (r, o) {
                    angular.isArray(n[o]) || angular.isObject(n[o]) ? (t[o] || (t[o] = angular.isArray(n[o]) ? [] : {}), e(t[o], n[o])) : (t[o] = n[o]);
                  });
                })(n, b[t]);
              e !== TPParam.TRANSLATION_CONFIG.initialLocaleId &&
                (b[t] ||
                  o.set(t).then(function (e) {
                    b[e.id] = angular.copy(e);
                  }),
                (function (e) {
                  window.TPParam.TRANSLATION_CONFIG && window.TPParam.TRANSLATION_CONFIG.initialLocaleId && (window.TPParam.TRANSLATION_CONFIG.initialLocaleId = e);
                })(d));
            })(e),
            L(),
            (function (e) {
              if (void 0 === w[v])
                return t.all([P(e), P(v)]).then(function (e) {
                  return angular.extend({}, e[1], e[0]);
                });
              return P(e);
            })(e)
              .then(E)
              .then(function () {
                s.$broadcast("EVENT_I18N_LOCALE_CHANGED");
              })),
            $();
        }
        function P(e) {
          var n = window["translation_static_" + e],
            r = window["translation_dynamic_" + e];
          return w[e]
            ? t.when(w[e])
            : n || r
            ? ((w[e] = angular.extend({}, n, r)), t.when(w[e]))
            : M(e).then(function (t) {
                return (w[e] = t), t;
              });
        }
        function L() {
          if ("undefined" != typeof moment)
            try {
              var e = _();
              switch (e) {
                case "zz-ZZ":
                  e = "x-pseudo";
                  break;
                case "sr-RS":
                  e = "sr-cyrl";
              }
              moment.locale ? moment.locale(e) : moment.lang(e);
            } catch (e) {}
        }
      },
    ])
    .factory("resolveLocale", [
      "$cookies",
      "$locale",
      "tmhDynamicLocale",
      "$filter",
      "cookieLang",
      function (e, t, n, r, o) {
        return function () {
          o.getCookie("LANG");
          return "en_US";
        };
      },
    ])
    .factory("cookieLang", [
      "TinypassService",
      function (e) {
        return {
          getCookie: t,
          setCookie: function (t, n, r) {
            var o,
              a = new Date();
            a.setTime(a.getTime() + 24 * r * 60 * 60 * 1e3), (o = "expires=" + a.toUTCString()), (document.cookie = t + "=" + n + "; " + o + "; domain=" + e.getTopDomain() + "; path=/;" + e.getCookieSameSiteAndSecureAttrString());
          },
          removeCookie: function (t) {
            var n = "expires=" + new Date("February 02, 1972 02:02:02").toUTCString();
            document.cookie = t + "=; " + n + "; domain=" + e.getTopDomain() + "; path=/;" + e.getCookieSameSiteAndSecureAttrString();
          },
          getCountryCode: function () {
            if (null === t("LANG") || void 0 === t("LANG") || "" === t("LANG")) return "us";
            return t("LANG").split("_")[1].toLowerCase();
          },
          getLanguageCode: function () {
            if (null === t("LANG") || void 0 === t("LANG") || "" === t("LANG")) return "en";
            return t("LANG").split("_")[0];
          },
        };
        function t(e) {
          var t = ("; " + document.cookie).split("; " + e + "=");
          if (t.length > 1) return t.pop().split(";").shift();
        }
      },
    ])
    .factory("updateDirAttrOnLangChanges", [
      "$document",
      "lang",
      "ngEventService",
      function (e, t, n) {
        var r = ["he_IL", "ar_EG"],
          o = "rtl",
          a = "ltr";
        return (
          n.subscribe("langChanged", function (e, n) {
            n.lang && t.update(n.lang);
          }),
          function (n) {
            var i, s;
            t.on(function (t) {
              if (t !== i) {
                var c,
                  l = -1 !== r.indexOf(t) ? o : a;
                l !== s && ((s = l), (c = l), e[0].documentElement.setAttribute("dir", c)), (i = t), n && n(t);
              }
            });
          }
        );
      },
    ]),
  (function () {
    var dateServices = angular.module("dateServices", []),
      withoutSpinnerHeaderName = "Piano-request-without-spinner",
      withoutSpinnerHeaderNameLowerCase = withoutSpinnerHeaderName.toLowerCase();
    function isIncludesWithoutSpinnerHeader(e) {
      return !!((e && e.config && e.config.headers) || {})[withoutSpinnerHeaderName];
    }
    dateServices.factory("fromIsoToJsDate", function () {
      return function (e, t) {
        if (t.length) {
          for (var n = t.length - 1; n >= 0; n--) t[n][e] && (t[n][e] = moment(t[n][e]).format());
          return t;
        }
        return t[e] && (t[e] = moment(t[e]).format()), t[e];
      };
    }),
      dateServices.factory("timeStampToDate", function () {
        return function (e) {
          return e ? (e && e < 1e10 ? new Date(1e3 * e) : new Date(e)) : e;
        };
      }),
      dateServices.factory("TimezoneService", function () {
        return {
          SEND_DATETIME_FORMAT: "YYYY-MM-DDTHH:mm:ssZZ",
          dateToTimezonedMoment: function (e) {
            return moment.tz(e, TPParam.CLIENT_TIMEZONE);
          },
          dateToClientTimezoneMoment: function (e) {
            return moment.tz(
              {
                year: e.getFullYear(),
                month: e.getMonth(),
                date: e.getDate(),
                hour: e.getHours(),
                minute: e.getMinutes(),
                second: e.getSeconds(),
                millisecond: e.getMilliseconds(),
              },
              TPParam.CLIENT_TIMEZONE
            );
          },
          datesToTimezonedStringsRange: function (e, t) {
            return {
              from: this.dateToClientTimezoneMoment(e).startOf("day").format(this.SEND_DATETIME_FORMAT),
              to: this.dateToClientTimezoneMoment(t).endOf("day").format(this.SEND_DATETIME_FORMAT),
            };
          },
          momentToDate: function (e) {
            return new Date(e.year(), e.month(), e.date(), e.hour(), e.minute(), e.second());
          },
          dateInClientTimezoneToBrowserTimezone: function (e) {
            var t = moment.tz(e, TPParam.CLIENT_TIMEZONE);
            return new Date(t.year(), t.month(), t.date(), t.hour(), t.minute(), t.second());
          },
        };
      }),
      dateServices.factory("ISODatetimeService", function () {
        return {
          ISO8601_DATE_FORMAT: "YYYY-MM-DD",
          ISO8601_DATETIME_FORMAT: "YYYY-MM-DD HH:MM",
          dateToString: function (e) {
            return moment.tz ? moment.tz(e, TPParam.CLIENT_TIMEZONE).format(this.ISO8601_DATE_FORMAT) : moment(e).format(this.ISO8601_DATE_FORMAT);
          },
          datetimeToString: function (e) {
            return moment.tz ? moment.tz(e, TPParam.CLIENT_TIMEZONE).format(this.ISO8601_DATETIME_FORMAT) : moment(e).format(this.ISO8601_DATETIME_FORMAT);
          },
        };
      });
    var ajaxServices = angular.module("ajaxServices", []);
    ajaxServices.config([
      "$httpProvider",
      function (e) {
        (e.defaults.headers.common["X-Requested-With"] = "XMLHttpRequest"), (e.defaults.headers.common["Ng-Request"] = "1"), e.interceptors.push("tpHttpInterceptor");
        e.defaults.transformRequest.push(function (e, t) {
          var n = t && t();
          return (n && (n[withoutSpinnerHeaderNameLowerCase] || n[withoutSpinnerHeaderName])) || tinypass.withoutWaitPanel ? e : (tinypass.showWaitPanel(), e);
        });
      },
    ]),
      ajaxServices.factory("tpHttpInterceptor", [
        "$q",
        function (e) {
          return {
            response: function (e) {
              return e.data && (e.data.models && (e.models = e.data.models), e.data.errors && (e.errors = e.data.errors)), tinypass.updateMetaRefresh(), isIncludesWithoutSpinnerHeader(e) || tinypass.hideWaitPanel(), e;
            },
            responseError: function (t) {
              return t.data && (t.data.models && (t.models = t.data.models), t.data.errors && (t.errors = t.data.errors)), isIncludesWithoutSpinnerHeader(t) || tinypass.hideWaitPanel(), e.reject(t);
            },
          };
        },
      ]),
      ajaxServices.factory("repeatHTTP", [
        "$q",
        function (e) {
          var t = function (n, r) {
            var o = (r = r || {}).defer,
              a = r.attempt || 0,
              i = r.times || 1,
              s = r.cancelConfig || {};
            return o
              ? (n()
                  .then(function (e) {
                    o.resolve(e);
                  })
                  .catch(function (e) {
                    s.cancel ||
                      (a >= i
                        ? o.reject(e)
                        : t(
                            n,
                            Object.assign({}, r, {
                              attempt: a + 1,
                            })
                          ));
                  }),
                o.promise)
              : (Log.info("defer is required"), e.reject());
          };
          return t;
        },
      ]),
      ajaxServices.factory("tpHTTP", [
        "$http",
        "$window",
        "$q",
        "$rootScope",
        function ($http, $window, $q, $rootScope) {
          var f = function (e, t) {
            !t && (e.url = f.getUrl() + e.url);
            var n = $http(e);
            return n.then(f.processHeaders), n;
          };
          return (
            (f.get = function (e, t) {
              e = f.getUrl() + e;
              var n = $http.get(e, t);
              return n.then(f.processHeaders), n;
            }),
            (f.post = function (e, t, n) {
              e = f.getUrl() + e;
              var r = $http.post(e, t, n);
              return r.then(f.processHeaders), r;
            }),
            (f.jsonp = function (e, t) {
              return (
                ((t = t || {}).callback = t.callback || "JSON_CALLBACK"),
                $http
                  .jsonp(e, {
                    params: t,
                  })
                  .then(function (e) {
                    return e.data;
                  })
              );
            }),
            (f.processResponse = function (e) {
              return e.data && e.data.models && (e.models = e.data.models), e.data && e.data.errors && (e.errors = e.data.errors), e;
            }),
            (f.processResponseCatch = function (e) {
              return e.data && e.data.models && (e.models = e.data.models), e.data && e.data.errors && (e.errors = e.data.errors), $q.reject(e);
            }),
            (f.processHeaders = function (response) {
              var headers = response.headers();
              if (headers.execute_js_after)
                try {
                  eval(headers.execute_js_after);
                } catch (e) {}
              return response;
            }),
            (f.extractErrors = function (e, t, n) {
              e &&
                (e.errors || e.modalErrors) &&
                ((n.formErrors = e.errors && e.errors.length ? e.errors : e.modalErrors),
                angular.forEach(n.formErrors, function (e) {
                  var n = e.field,
                    r = (e.key, e.msg);
                  t && t[n] && (angular.element("#" + n).focus(), t[n].$setValidity("error", !1), (t[n].$error.msg = r));
                }));
            }),
            (f.resetFormErrors = function (e, t, n) {
              try {
                n && ((n.errors = []), (n.modalErrors = [])),
                  angular.forEach(t.formErrors, function (t) {
                    e[t.field].$setValidity("error", !0), e[t.field].$setPristine();
                  }),
                  delete t.formErrors,
                  e.$setPristine(),
                  t.$$phase || t.$apply();
              } catch (e) {
                Log.info("Could not reset form errors!", e);
              }
            }),
            (f.setFieldsValid = function (e, t) {
              try {
                angular.forEach(e, function (e, t) {
                  0 != t.indexOf("$") && (e.$setValidity("error", !0), e.$setPristine());
                }),
                  e.$setPristine(),
                  t.$$phase || t.$apply();
              } catch (e) {
                Log.info("Could not reset form errors!", e);
              }
            }),
            (f.extractModels = function (e, t) {
              if (e && e.models) for (var n in e.models) t[n] = e.models[n];
              if (e && e.routes) for (var r in (void 0 === t.routes && (t.routes = {}), e.routes)) t.routes[r] = e.routes[r];
            }),
            (f.promiseResponse = function (e, t) {
              var n = $q.defer();
              return (
                (t.errors = []),
                e
                  .then(function (e) {
                    if ((e && e.errors && angular.copy(e.errors, t.errors), e && e.models)) for (var r in e.models) e.models.hasOwnProperty(r) && (t[r] = e.models[r]);
                    n.resolve();
                  })
                  .catch(function (e) {
                    e && e.errors && angular.copy(e.errors, t.errors), n.reject();
                  }),
                n.promise
              );
            }),
            (f.extractModelsTo = function (e) {
              return function (t) {
                f.extractModels(t.data, e);
              };
            }),
            (f.successHander = function (e) {
              return function (t) {
                e.resolve({
                  data: t,
                  ok: !0,
                });
              };
            }),
            (f.errorHander = function (e) {
              return function (t) {
                e.resolve({
                  data: t,
                  ok: !1,
                });
              };
            }),
            (f.promiser = function (e) {
              var t = $q.defer();
              return e.then(f.successHander(t)).catch(f.errorHander(t)), t.promise;
            }),
            (f.buildUrl = function (e, t) {
              if (!t) return e;
              var n = [];
              return (
                (function (e, t, n) {
                  for (
                    var r = (function (e) {
                        var t = [];
                        for (var n in e) e.hasOwnProperty(n) && t.push(n);
                        return t.sort();
                      })(e),
                      o = 0;
                    o < r.length;
                    o++
                  )
                    t.call(n, e[r[o]], r[o]);
                })(t, function (e, t) {
                  null != e && null != e && (angular.isObject(e) && (e = angular.toJson(e)), n.push(encodeURIComponent(t) + "=" + encodeURIComponent(e)));
                }),
                e + (-1 == e.indexOf("?") ? "?" : "&") + n.join("&")
              );
            }),
            (f.getUrl = function () {
              return document.location.origin;
            }),
            f
          );
        },
      ]);
    var tinypassService = angular.module("tinypassServices", []);
    function _setCookie(e, t, n, r, o, a, i) {
      var s = new Date();
      s.setTime(s.getTime());
      var c = new Date(s.getTime() + n);
      document.cookie = e + "=" + t + (n ? ";expires=" + c.toGMTString() : "") + (r ? ";path=" + r : "") + (o ? ";domain=" + o : "") + (a ? ";secure" : "") + (i ? ";samesite=" + i : "none");
    }
    function _getCookie(e) {
      var t = document.cookie.match(new RegExp("(?:^|; )" + e.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, "\\$1") + "=([^;]*)"));
      return t ? decodeURIComponent(t[1]) : void 0;
    }
    tinypassService.factory("TinypassService", [
      "$q",
      function (e) {
        var t;
        function n() {
          return (
            t ||
            ((t = (function () {
              try {
                return window.self !== window.top;
              } catch (e) {
                return !0;
              }
            })()
              ? " samesite=none; "
              : " samesite=lax; "),
            "https:" === window.location.protocol && (t += " secure;"),
            t)
          );
        }
        function r() {
          var e,
            t,
            r = "weird_get_top_level_domain=cookie",
            o = document.location.hostname.split(".");
          if (1 === o.length) return o[0];
          if (4 === o.length && !isNaN(o[0]) && !isNaN(o[3])) return document.location.hostname;
          for (e = o.length - 1; e >= 0; e--) {
            t = "." + o.slice(e).join(".");
            var a = n();
            if (((document.cookie = r + ";domain=" + t + ";" + a), document.cookie.indexOf(r) > -1)) return (document.cookie = r.split("=")[0] + "=;domain=" + t + ";expires=Thu, 01 Jan 1970 00:00:01 GMT;" + a), t;
          }
        }
        return {
          setMessage: function (e, t) {
            tinypass.setMessageDashboard(e, t);
          },
          hideMessage: function () {
            tinypass.hideMessage();
          },
          cropImage: function (e, t, n, r, o, a, i, s, c) {
            tinypass.cropImage(e, t, n, r, o, a, i, s, c);
          },
          getISODate: function (e, t) {
            var n, r;
            return (
              (n = e ? new Date(e.getFullYear(), e.getMonth(), e.getDate()) : new Date()),
              (r = t ? new Date(t.getFullYear(), t.getMonth(), t.getDate(), 23, 59, 59) : new Date()),
              {
                from: moment(n).format("YYYY-MM-DDTHH:mm:ssZZ"),
                to: moment(r).format("YYYY-MM-DDTHH:mm:ssZZ"),
              }
            );
          },
          reduceZeros: function (e) {
            var t = (e = Math.round(e)) / 1e3 + "";
            return (
              0 != e &&
                (t = (t = (t = (t + (t.indexOf(".") < 0 ? "." : "") + "000").replace(/(\..{3}).*$/, "$1")).substring(0, t.length - Math.min(3, (e + "").length - 2)).replace(/[.]$/, ""))
                  .split("")
                  .reverse()
                  .join("")
                  .replace(/((\d{3})(?!($|-|.*[.])))/g, "$1,")
                  .split("")
                  .reverse()
                  .join("")),
              t
            );
          },
          generateRandomString: function (e) {
            e = e || 10;
            for (var t = "", n = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789", r = 0; r < e; r++) t += n.charAt(Math.floor(Math.random() * n.length));
            return t;
          },
          generateSuccessMessage: function (e) {
            return function () {
              tinypass.setMessage("success", e);
            };
          },
          generateErrorMessage: function (t) {
            return function () {
              return tinypass.setMessage("error", t), e.reject();
            };
          },
          showRequestError: function (t) {
            return tinypass.setMessage("error", t.data.errors[0].msg), e.reject(t);
          },
          showRequestErrorDashboard: function (t) {
            return tinypass.setMessageDashboard("error", t.data.errors[0].msg), e.reject(t);
          },
          getInMinorUnits: function (e) {
            return e ? Math.round(100 * e) : 0;
          },
          getCurrencyByCode: function (e) {
            if ("" == e) return "$";
            var t;
            switch (e) {
              case "USD":
                t = "$";
                break;
              case "EUR":
                t = "€";
                break;
              case "AUD":
                t = "$";
                break;
              case "GBP":
                t = "£";
                break;
              case "JPY":
                t = "¥";
                break;
              default:
                t = e;
            }
            return t;
          },
          setCookie: function (e, t, o) {
            var a = new Date();
            a.setTime(a.getTime() + 24 * o * 60 * 60 * 1e3);
            var i = "expires=" + a.toUTCString();
            document.cookie = e + "=" + t + "; " + i + "; domain= " + r() + "; path=/;" + n();
          },
          getCookie: function (e) {
            var t = ("; " + document.cookie).split("; " + e + "=");
            if (t.length > 1) return t.pop().split(";").shift();
          },
          getTopDomain: r,
          getCookieSameSiteAndSecureAttrString: n,
        };
      },
    ]),
      tinypassService.factory("LangUtils", [
        function () {
          return {
            getPersonalName: function (e, t, n) {
              var r = e.getLang();
              return !["zz_ZZ", "ja_JP"].some(function (e) {
                return e === r;
              })
                ? [t, n]
                    .filter(function (e) {
                      return !!e;
                    })
                    .join(" ")
                : [n, t]
                    .filter(function (e) {
                      return !!e;
                    })
                    .join(" ");
            },
          };
        },
      ]),
      tinypassService.factory("modalConfirm", [
        "$rootScope",
        "$modal",
        function (e, t) {
          return function (n, r, o, a) {
            var i = e.$new();
            (i.title = n), (i.msg = r);
            var s = {
                scope: i,
                templateUrl: "/libs/tinypass/_confirm_popup.shtml",
              },
              c = t.open(s);
            function l(e) {
              c.close(e);
            }
            return (
              (i.onOk = function () {
                a && "function" == typeof a ? a().then(l) : l(o);
              }),
              c.result
            );
          };
        },
      ]),
      tinypassService.factory("UpdatePerfectScrollbar", [
        "UpdateSpecificScrollbar",
        function (e) {
          return function (t) {
            if (t && t.target && t.target.nodeName) {
              var n,
                r,
                o = $(t.target);
              if ("input" == t.target.nodeName.toLowerCase()) {
                var a = o.parents(".tp-dropdown__container"),
                  i = o.parents(".dropdown-menu");
                return void (i.length > 0 ? i : a).find(".ps-container").each(function () {
                  var e = $(this);
                  e.is(":visible") && e.scrollTop(0);
                });
              }
              (n = o.parent().outerHeight(!0)), (r = o.parents(".ps-container")), e(r, n);
            }
          };
        },
      ]),
      tinypassService.factory("UpdateSpecificScrollbar", function () {
        return function (e, t) {
          var n = e.children().height(),
            r = e.height(),
            o = e.scrollTop();
          o + r + t >= n && n >= r && e.scrollTop(o - t);
        };
      }),
      tinypassService.factory("iframeService", [
        "$rootElement",
        function (e) {
          return {
            injectHiddenIframe: t,
            injectHiddenIframeWithTimeout: function (e, n, r, o) {
              var a = t(e, n),
                i = window.setTimeout(function () {
                  angular.element("#" + e).remove(), o && o();
                }, r || 15e3);
              return {
                iframe: a,
                cancel: function () {
                  window.clearTimeout(i);
                },
              };
            },
            injectIframe: function (e, t, r) {
              var o = t ? ' src="' + t + '" ' : "";
              return n(angular.element("<iframe " + o + "></iframe>"), e, r, {
                backgroundColor: "transparent",
                border: "0",
                width: "100%",
                height: "100%",
                position: "relative",
                zIndex: 4,
              });
            },
            injectRealIframe: function (e, t, r, o) {
              var a = {
                backgroundColor: "#ffffff",
                border: "0",
                width: "100%",
                height: "100%",
                position: "relative",
                zIndex: 1,
              };
              return Object.assign(a, o), n(angular.element(t), e, r, a);
            },
            injectHungTimeoutIframe: function (e, n) {
              return window.setTimeout(function () {
                var r = t(e),
                  o = r.contentWindow ? r.contentWindow.document : r.contentDocument;
                o.open("text/html", "replace"), o.write('<html>    <head>        <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">        <script type="text/javascript">            function submitform() {                document.forms["page_return"].submit();            }        </script>    </head>    <body onload="submitform()">        <form name="page_return" method="post" action="' + n + '">            <input type="hidden" name="resultCode" value="999">            <input type="hidden" name="message" value="Request timeout">        </form>    </body></html>'), o.close();
              }, 15e3);
            },
            appendContentToIframe: function (e, t) {
              var n = e.contentWindow ? e.contentWindow.document : e.contentDocument;
              n.open("text/html", "replace"), n.write(t), n.close();
            },
            getAncestorOrigins: function () {
              var e = document.location.ancestorOrigins;
              if (!e) {
                var t = document.referrer,
                  n = t.split("/");
                e = {
                  0: n[0] + "//" + n[2],
                  length: 1,
                };
              }
              return e;
            },
          };
          function t(t, n) {
            var r = n ? ' src="' + n + '" ' : "";
            angular.element("#" + t).remove();
            var o = angular.element('<iframe id="' + t + '"' + r + ' style="display: none"></iframe>')[0];
            return e.append(o), o;
          }
          function n(e, t, n, r) {
            angular.element("#" + t).remove(),
              e
                .attr({
                  allowtransparency: "true",
                  id: t,
                })
                .css(r);
            var o = e[0];
            return n.append(o), o;
          }
        },
      ]);
    var selectFactory = angular.module("selectFactory", ["ajaxServices"]);
    selectFactory.factory("selectServiceFactory", [
      "tpHTTP",
      "$timeout",
      function (e, t) {
        return function (n) {
          var r = {},
            o = !!n.invalidateUpdate,
            a = {
              search: function (n) {
                var i = r[n];
                (i && !a.instantUpdate) ||
                  (i = (function (n) {
                    (r[n] = (function (t) {
                      var n = a.buildParams(t);
                      return e
                        .post(a.endpoint, n)
                        .then(a.extractItems)
                        .catch(function (e) {});
                    })(n)),
                      (a.instantUpdate = !1),
                      o &&
                        t(function () {
                          delete r[n];
                        }, 1e3);
                    return r[n];
                  })(n));
                return i;
              },
            };
          return angular.extend(a, n), a;
        };
      },
    ]),
      selectFactory.factory("selectDirectiveFactory", [
        "$timeout",
        "UpdatePerfectScrollbar",
        "$perfectScrollBarService",
        function (e, t, n) {
          return function (r) {
            return {
              restrict: "AE",
              replace: !0,
              transclude: !0,
              scope: {
                ngModel: "=",
                item: "=",
                clickFn: "=?",
                searchFn: "=?",
                clickOnClose: "=?",
              },
              require: "ngModel",
              templateUrl: r.templateUrl,
              link: function (o, a, i, s) {
                var c,
                  l = {};
                if (((o.disabled = "true" == i.ngDisabled), o.disabled)) return;
                (o.closeOnSelect = void 0 !== i.closeOnSelect),
                  (o.multiple = void 0 !== i.multiple),
                  (o.excludeSelected = void 0 !== i.excludeSelected),
                  (o.showCheckbox = o.multiple && !o.excludeSelected),
                  (o.model = {
                    filter: "",
                    list: [],
                    selected: {},
                  }),
                  (o.onSearch = u),
                  (o.searchItems = p),
                  (o.updateScrollBar = f),
                  (o.cancelClick = function (e) {
                    e.stopPropagation(), e.preventDefault();
                  }),
                  (o.closeDropdown = function () {
                    $(".dropdown.open", a).removeClass("open");
                  }),
                  (o.setItem = function (e, t) {
                    if (void 0 === e.disabled || !e.disabled) {
                      if (o.multiple) {
                        var n = angular.copy(o.ngModel || []),
                          r = d(e, n);
                        null === r ? n.push(e) : n.splice(r, 1), (o.ngModel = n), s.$setViewValue(o.ngModel);
                      } else (o.ngModel = e), s.$setViewValue(o.ngModel);
                      o.closeOnSelect && (o.closeDropdown(), o.clickOnClose && o.clickOnClose(o.ngModel)), f(t);
                    }
                  }),
                  (o.modelContains = function (e) {
                    return null !== d(e, o.ngModel || []);
                  }),
                  (o.setFocusAfterClick = function () {
                    $("input:first", a).focus();
                  }),
                  (o.onOpen = function (e) {
                    o.clickFn && o.clickFn(p),
                      (function (e) {
                        e && !l[e] && ((l[e] = !0), n.notify("update-perfect-scrollbar"));
                      })(e);
                  }),
                  (o.selectAll = function () {
                    if (o.multiple) {
                      var e = o.ngModel || [],
                        t = [];
                      e.length || (t = angular.copy(o.model.list)), (o.ngModel = t), s.$setViewValue(o.ngModel);
                    }
                  }),
                  u(),
                  o.multiple &&
                    o.$watch(
                      "ngModel",
                      function () {
                        !(function () {
                          var e = {};
                          if (!o.multiple) return;
                          if (!o.ngModel || !Array.isArray(o.ngModel) || o.ngModel.length <= 0) return void (o.model.selected = null);
                          o.ngModel.forEach(function (t) {
                            e[t[r.idProperty]] = !0;
                          }),
                            (o.model.selected = e);
                        })();
                      },
                      !0
                    );
                function u(t) {
                  c && e.cancel(c);
                  var n = o.model.filter ? 300 : 0;
                  c = e(function () {
                    p(t);
                  }, n);
                }
                function d(e, t) {
                  for (var n = t.length, o = 0; o < n; o++) if (t[o][r.idProperty] === e[r.idProperty]) return o;
                  return null;
                }
                function f(e) {
                  t(e);
                }
                function p(e) {
                  var t = o.searchFn || r.searchService.search;
                  t &&
                    t(o.model.filter).then(function (t) {
                      t.forEach(function (e) {
                        e.id = e[r.idProperty];
                      }),
                        (o.model.list = t),
                        e && o.updateScrollBar(e);
                    });
                }
              },
            };
          };
        },
      ]);
    var loggingModule = angular.module("loggingModule", ["ajaxServices"]);
    loggingModule.factory("loggingService", [
      "tpHTTP",
      function (e) {
        var t = {
          logToServer: function (t) {
            try {
              var n = new Error();
              e.post(TPParam.LOG_ERROR, {
                description: t,
                url: window.location.href,
                trace: n.stack,
              });
            } catch (e) {}
          },
        };
        return t;
      },
    ]),
      angular.module("paymentFormModule", []).factory("loaderService", function () {
        return {
          showLoader: function () {
            var e = document.getElementById("pp-loader");
            e && (e.style.display = "block");
          },
          hideLoader: function () {
            var e = document.getElementById("pp-loader");
            e && (e.style.display = "none");
          },
        };
      });
  })(),
  (window.html5ModeConfig = html5ModeConfig),
  (String.prototype.format = function () {
    for (var e = this, t = 0; t < arguments.length; t++) {
      var n = "{" + t + "}";
      e = e.replace(n, arguments[t]);
    }
    return e;
  });
var pnErrorWatcher = (function () {
    return new (function () {
      var e = [];
      function t(t) {
        var n = {
          userAgent: navigator.userAgent,
        };
        if ((t instanceof Error && ((n.stack = t.stack), (n.message = t.message)), t instanceof Event)) {
          var r = t,
            o = "error" in r && r.error;
          (n.stack = o ? r.error.stack : "n/a"), (n.message = o ? r.error.message : "n/a");
        }
        var a,
          i = getParameterByName("widget");
        (n.tags = i ? [i] : ["unknown"]), n.tags.push("wgt_err"), (a = n), -1 === e.map(JSON.stringify).indexOf(JSON.stringify(a)) && e.push(n);
      }
      function n(e) {
        try {
          t(e);
        } catch (e) {
          console.warn("Can not log an error, something went wrong: ", e);
        }
      }
      (this.manualLog = function (e) {
        try {
          t(e);
        } catch (t) {
          console.warn("Can not log an error, something went wrong: ", t, e);
        }
      }),
        (this.watchUnhandled = function () {
          window.addEventListener && window.addEventListener("error", n);
        }),
        (this.reset = function () {
          window.removeEventListener("error", n);
        }),
        (this.getErrors = function () {
          return e.map(function (e) {
            return Object.assign({}, e);
          });
        });
    })();
  })(),
  errorHandler = (function (e) {
    function t() {
      (this.sender = null), (this.event = null), (this.params = null);
    }
    var n = 1e4;
    try {
      return new (function () {
        var r = {
          whitelistUrls: [],
        };
        function o() {
          try {
            var n = e.getErrors().filter(function (e) {
              return r.whitelistUrls.some(function (t) {
                return e.stack && e.stack.match(t);
              });
            });
            if (0 === n.length) return;
            !(function (e) {
              try {
                var n = window.opener || window.parent,
                  r = Object.assign(new t(), {
                    sender: getParameterByName("iframeId"),
                    event: "EVENT_TP_ERROR_HANDLER",
                    params: e,
                  });
                n && n.postMessage(JSON.stringify(r), "*");
              } catch (e) {
                console.warn("Can not post message errors to parent: ", e);
              }
            })(n);
          } catch (e) {
            console.warn("Errors can not be sent: ", e);
          }
        }
        function a() {
          e.watchUnhandled(),
            setTimeout(function () {
              o(), e.reset();
            }, n);
        }
        (this.setConfig = function (e) {
          r = Object.assign(r, e);
        }),
          (this.start = function () {
            try {
              a();
            } catch (e) {
              console.warn("Error logger can not be started: ", e);
            }
          });
      })();
    } catch (e) {
      console.warn("Can't initiate errorHandler: ", e);
    }
  })(pnErrorWatcher);
!(function (e) {
  try {
    var t = [/\w*\.tinypass\.com/, /localhost/],
      n = localStorage.getItem("__tp-tinypassErrorHandlerTestMode"),
      r = location && location.hostname;
    n && r && t.push(new RegExp(r)),
      e.setConfig({
        whitelistUrls: t,
      }),
      e.start();
  } catch (e) {
    console.warn("Can't configure errorHandler: ", e);
  }
})(errorHandler);
function tpDatepickerService() {
  return {
    buildCalendarSkeleton: function (a, i, r, o) {
      var s = [],
        l = null,
        c = null,
        d = new Date();
      d.setHours(0, 0, 0), r.innerFromDateStart && r.innerFromDateStart.setHours(0, 0, 0, 0);
      r.innerFromDateEnd && r.innerFromDateEnd.setHours(0, 0, 0, 0);
      o.innerToDateStart && o.innerToDateStart.setHours(0, 0, 0, 0);
      o.innerToDateEnd && o.innerToDateEnd.setHours(0, 0, 0, 0);
      for (var u = !1, p = a.numColumn * a.numRow; p > 0; p--) {
        var m = null,
          h = null,
          f = !1,
          g = !1;
        switch (a.unit) {
          default:
          case "d":
            (m = new Date(i.viewDateStart.getFullYear(), i.viewDateStart.getMonth(), p * a.unitRange - (a.unitRange - 1), 0, 0, 0, 0)), (h = new Date(i.viewDateEnd.getFullYear(), i.viewDateEnd.getMonth(), p * a.unitRange, 0, 0, 0));
            break;
          case "m":
            (m = new Date(i.viewDateStart.getFullYear(), p * a.unitRange - (a.unitRange - 1) - 1, 1)), (h = new Date(i.viewDateStart.getFullYear(), p * a.unitRange, 0));
        }
        r.innerFromDateStart >= m && r.innerFromDateEnd <= h && (g = !0),
          m >= r.innerFromDateEnd && h <= o.innerToDateStart && (g = !0),
          o.innerToDateStart >= m && o.innerToDateEnd <= h && (g = !0),
          m >= r.innerFromDateStart && h <= o.innerToDateEnd && (g = !0),
          m > i.viewDateEnd && (f = !0),
          (u = t(m, d)),
          s.unshift({
            currentDateStart: m,
            currentDateOver: h,
            selectRange: g,
            disabled: e(m, a),
            out: f,
            today: u,
            selectToday: u && a.currentDayHighlight,
            firstSelectDay: !1,
            lastSelectDay: !1,
          });
      }
      if ("d" === a.unit && 1 === a.unitRange && 7 === a.numColumn)
        for (var v = s[0].currentDateStart.getDay(), p = v >= a.startDay ? v - a.startDay : 7 - (a.startDay - v); p--; ) {
          var y = new Date(s[0].currentDateStart.getTime());
          y.setDate(s[0].currentDateStart.getDate() - 1), (m = new Date(y.getTime())), (h = new Date(m.getTime()));
          var g = !1;
          r.innerFromDateStart && o.innerToDateEnd && ((l = new Date(r.innerFromDateStart.getTime()).setHours(0, 0, 0, 0)), (c = new Date(o.innerToDateEnd.getTime()).setHours(0, 0, 0, 0)), m >= l && h <= c && (g = !0)),
            s.unshift({
              currentDateStart: m,
              currentDateOver: h,
              selectRange: g,
              disabled: e(m, a),
              out: !0,
              today: !1,
              firstSelectDay: !1,
              lastSelectDay: !1,
            }),
            s.pop();
        }
      var D = null;
      for (p = s.length; p--; ) (s[p].index = p), D && s[p].selectRange && !D.selectRange && (s[p].lastSelectDay = !0), !D && s[p].selectRange && s[p].currentDateOver >= o.innerToDateEnd && (s[p].lastSelectDay = !0), D && !s[p].selectRange && D.selectRange && (s[p + 1].firstSelectDay = !0), !s[p - 1] && s[p].selectRange && s[p].currentDateStart <= r.innerFromDateStart && (s[p].firstSelectDay = !0), (D = s[p]);
      for (var k = [], w = 0; w < a.numRow; w++) {
        k[w] = [];
        for (var b = 0; b < a.numColumn; b++) {
          if (((k[w][b] = s[b + w * a.numColumn]), a.markerColumn)) for (var T = a.markerColumn.length; T--; ) a.markerColumn[T].numb - 1 === b && (k[w][b].markerColumn = a.markerColumn[T].name || "marker-column");
          if (a.markerRow) for (var T = a.markerRow.length; T--; ) a.markerRow[T].numb - 1 === w && (k[w][b].markerRow = a.markerRow[T].name || "marker-row");
          k[w][b].markerDay = n(k[w][b], a.markerDays);
        }
      }
      return (s = null), k;
    },
    isSameDay: t,
  };
  function t(t, e) {
    return t.getDate() <= e.getDate() && t.getMonth() <= e.getMonth() && t.getFullYear() <= e.getFullYear() && t.getDate() >= e.getDate() && t.getMonth() >= e.getMonth() && t.getFullYear() >= e.getFullYear();
  }
  function e(t, e) {
    var n = e.limitDateNotBefore,
      a = e.limitDateNotAfter;
    return n && a ? n > t || t > a : n ? n > t : !!a && a < t;
  }
  function n(t, e) {
    var n = !1;
    if (e) {
      var a = new Date(t.currentDateStart.getFullYear(), 0, 0),
        i = Math.floor((t.currentDateStart - a) / 864e5);
      a = new Date(t.currentDateOver.getFullYear(), 0, 0);
      for (var r = Math.floor((t.currentDateOver - a) / 864e5), o = e.length; o--; )
        if (e[o] >= i && e[o] <= r) {
          n = !0;
          break;
        }
    }
    return n;
  }
}
angular.module("tp.ui.datepicker", ["tp.ui.timepicker", "tp.i18n", "datetime", "ngInputDate"]).directive("tpDatepicker", tpDatepicker).directive("tpDatepickerInline", tpDatepickerInline).factory("tpDatepickerService", tpDatepickerService).run(tpTemplates);
var datepickerScope = {
    openCalendar: "=?openCalendar",
    disable: "=?disable",
    changeState: "&?changeState",
    fromDate: "=fromDate",
    toDate: "=toDate",
    pickClick: "&?pickClick",
    applyClick: "&?applyClick",
    changeTab: "&?changeTab",
    options: "=?options",
    activeTab: "=?activeTab",
    openTab: "=?openTab",
    initialEmpty: "&?initialEmpty",
    inputDate: "=inputDate",
    lightVersion: "=",
  },
  datepickerInlineScope = {
    fromDate: "=fromDate",
    toDate: "=toDate",
    pickClick: "&?pickClick",
    options: "=?options",
    currentFromDate: "=",
    currentToDate: "=",
    inputDate: "=inputDate",
  };
function tpDatepickerInline() {
  return {
    scope: datepickerInlineScope,
    controller: [
      "$scope",
      "$timeout",
      "tpDatepickerService",
      "lang",
      "datetimePlaceholder",
      function (t, e, n, a, i) {
        datepickerController(t, e, n, a, i),
          t.$watch(
            function () {
              return t.getSelectedFromDate();
            },
            function (e) {
              t.currentFromDate = e;
            }
          ),
          t.$watch(
            function () {
              return t.getSelectedToDate();
            },
            function (e) {
              t.currentToDate = new Date(e.getTime() + t.activeCalendar.diffDateEnd);
            }
          );
      },
    ],
    templateUrl: "template/datepicker/datepicker-inline.html",
    restrict: "A",
  };
}
function tpDatepicker(t, e, n, a) {
  return {
    scope: datepickerScope,
    link: function (a, i, r) {
      (a.openCalendar = !!a.openCalendar),
        i.find("input[type=date]").prop("type", "text"),
        n(function () {
          a.contentLoaded = !0;
        }),
        (a.showCalendar = function () {
          if (((a.openCalendar = !a.openCalendar), !0 === a.disable)) (a.openCalendar = !1), o();
          else if (a.openCalendar) {
            if (((a.positionUpdated = !1), a.fromDate)) {
              var r = new Date(a.fromDate).getHours(),
                c = new Date(a.fromDate).getMinutes();
              a.$broadcast("time-updated", {
                hours: r,
                minutes: c,
              });
            }
            n(function () {
              var n = i.find(".calendar"),
                r = i.find(".extended"),
                o = n.offset().top + n.innerHeight() > e.innerHeight,
                c = r.offset().top < n.innerHeight(),
                d = 1;
              if (c && o) {
                var u = n.innerHeight(),
                  p = e.innerHeight - (r.offset().top + r.innerHeight()),
                  m = r.offset().top,
                  h = p > m;
                d = ((h ? p : m) - 10) / (n.innerHeight() + 19);
                var f = (u - u * d) / 2 - 19 * d;
                n[0].style.setProperty("transform", "scale(" + d + ")"), n[0].style.setProperty("margin-top", "-" + f + "px");
              } else if (o) {
                var f = n.offset().top - r.offset().top + n.innerHeight() + 9;
                n[0].classList.add("top"), n[0].style.setProperty("top", "-" + f + "px");
              }
              if (r.offset().left + r.innerWidth() / 2 < (n.innerWidth() * d) / 2)
                n.offset({
                  left: 20,
                });
              else if (r.offset().left + (n.innerWidth() * d) / 2 + r.innerWidth() / 2 > e.innerWidth)
                n.offset({
                  left: e.innerWidth - n.innerWidth() * d - 20,
                });
              else {
                var g = n.innerWidth() * d,
                  v = (r.innerWidth() - g) / 2,
                  y = (n.innerWidth() - g) / 2,
                  D = -y + v;
                n[0].style.setProperty("left", D + "px");
              }
              t.bind("click", s), t.bind("keyup", l), (a.positionUpdated = !0);
            }, 10),
              n(function () {
                a.changeState && a.changeState();
              }, 10);
          } else
            o(),
              n(function () {
                a.changeState && a.changeState();
              }, 10);
        }),
        a.openCalendar && ((a.openCalendar = !1), a.showCalendar());
      function o() {
        t.unbind("click", s), t.unbind("keyup", l);
      }
      function s(t) {
        a.$apply(function () {
          a.showCalendar();
        });
      }
      function l(t) {
        switch (t.keyCode) {
          case 27:
            a.$apply(function () {
              a.showCalendar();
            });
            break;
          case 37:
            a.$apply(function () {
              a.changeLeft(-1), a.changeRight(-1);
            });
            break;
          case 39:
            a.$apply(function () {
              a.changeRight(1), a.changeLeft(1);
            });
        }
      }
      (a.updatePosition = function () {
        n(function () {
          var t = i.find(".calendar"),
            n = i.find(".extended");
          i.find(".dtpicker-input");
          n.offset().left + n.innerWidth() / 2 < t.innerWidth() / 2
            ? t.offset({
                left: 20,
              })
            : n.offset().left + t.innerWidth() / 2 + n.innerWidth() / 2 > e.innerWidth
            ? t.offset({
                left: e.innerWidth - t.innerWidth() - 20,
              })
            : t.offset({
                left: n.offset().left + n.innerWidth() / 2 - t.innerWidth() / 2,
              });
        }, 10);
      }),
        (i.find(".calendar").length ? i.find(".calendar") : i).click(function (t) {
          t.stopPropagation();
        });
    },
    controller: ["$scope", "$timeout", "tpDatepickerService", "lang", "datetimePlaceholder", datepickerController],
    templateUrl: "template/datepicker/datepicker-custom.html",
    restrict: "A",
    transclude: !0,
  };
}
function datepickerController(t, e, n, a, i) {
  (i.year = "yyyy"),
    (i.month = "mm"),
    (i.day = "dd"),
    (i.date = "dd"),
    (function () {
      t.options || (t.options = {});
      t.options.mainOptions || (t.options.mainOptions = {});
      "boolean" != typeof t.options.mainOptions.showPanelTab && (t.options.mainOptions.showPanelTab = !1);
      "boolean" != typeof t.options.mainOptions.instantChanges && (t.options.mainOptions.instantChanges = !1);
      "boolean" != typeof t.options.mainOptions.showPanelCustomButton && (t.options.mainOptions.showPanelCustomButton = !1);
      t.options.mainOptions.customPanel || (t.options.mainOptions.customPanel = {});
      t.options.mainOptions.customPanel.dateFormat || (t.options.mainOptions.customPanel.dateFormat = "MMM d, yyyy");
      t.options.mainOptions.startTab || (t.options.mainOptions.startTab = 0);
      t.options.mainOptions.applyButton || (t.options.mainOptions.applyButton = {});
      "string" != typeof t.options.mainOptions.applyButton.title && (t.options.mainOptions.applyButton.title = a.tr("Apply selected dates"));
      "boolean" != typeof t.options.mainOptions.applyButton.enable && (t.options.mainOptions.applyButton.enable = !0);
      t.options.mainOptions.closeButton || (t.options.mainOptions.closeButton = {});
      "string" != typeof t.options.mainOptions.closeButton.title && (t.options.mainOptions.closeButton.title = "Cancel");
      "boolean" != typeof t.options.mainOptions.applyClose && (t.options.mainOptions.applyClose = !0);
      t.options.mainOptions.time || (t.options.mainOptions.time = {});
      "boolean" != typeof t.options.mainOptions.time.enabled && (t.options.mainOptions.time.enabled = !1);
      "boolean" != typeof t.options.mainOptions.time.timeFormat12hours && (t.options.mainOptions.time.timeFormat12hours = !0);
      t.options.mainOptions.time.minutesStep || (t.options.mainOptions.time.minutesStep = 15);
      "boolean" != typeof t.options.mainOptions.time.showTimezone && (t.options.mainOptions.time.showTimezone = !0);
      t.options.calendarOptions || (t.options.calendarOptions = [{}]);
      for (var e = t.options.calendarOptions.length; e--; )
        t.options.calendarOptions[e].calendarUnitTitle || (t.options.calendarOptions[e].calendarUnitTitle = "MMM d, yyyy"),
          "boolean" != typeof t.options.calendarOptions[e].calendarUnitTitleRange && (t.options.calendarOptions[e].calendarUnitTitleRange = !1),
          t.options.calendarOptions[e].calendarUnit || (t.options.calendarOptions[e].calendarUnit = "m"),
          t.options.calendarOptions[e].calendarUnitCount || (t.options.calendarOptions[e].calendarUnitCount = 1),
          t.options.calendarOptions[e].oneCanvasCalendar || (t.options.calendarOptions[e].oneCanvasCalendar = !1),
          t.options.calendarOptions[e].unit || (t.options.calendarOptions[e].unit = "d"),
          t.options.calendarOptions[e].unitTitle || ((t.options.calendarOptions[e].unitTitle = {}), (t.options.calendarOptions[e].unitTitle.type = "date")),
          "date" === t.options.calendarOptions[e].unitTitle.type && "string" != typeof t.options.calendarOptions[e].unitTitle.title && (t.options.calendarOptions[e].unitTitle.title = "d"),
          "boolean" != typeof t.options.calendarOptions[e].unitTitleRange && (t.options.calendarOptions[e].unitTitleRange = !1),
          ("number" != typeof t.options.calendarOptions[e].startDay || t.options.calendarOptions[e].startDay < 0 || t.options.calendarOptions[e].startDay > 6) && (t.options.calendarOptions[e].startDay = 0),
          "number" != typeof t.options.calendarOptions[e].unitRange && (t.options.calendarOptions[e].unitRange = 1),
          "string" != typeof t.options.calendarOptions[e].unitSelectRange && "boolean" != typeof t.options.calendarOptions[e].unitSelectRange && (t.options.calendarOptions[e].unitSelectRange = !1),
          "boolean" != typeof t.options.calendarOptions[e].enableOneClickRange && (t.options.calendarOptions[e].enableOneClickRange = !1),
          "boolean" != typeof t.options.calendarOptions[e].viewDayOfWeek && (t.options.calendarOptions[e].viewDayOfWeek = "d" === t.options.calendarOptions[e].unit),
          "number" != typeof t.options.calendarOptions[e].numColumn && (t.options.calendarOptions[e].numColumn = 7),
          "number" != typeof t.options.calendarOptions[e].numRow && (t.options.calendarOptions[e].numRow = 6),
          t.options.calendarOptions[e].customButtonSelect || (t.options.calendarOptions[e].customButtonSelect = []),
          t.options.calendarOptions[e].customButtonCallback || (t.options.calendarOptions[e].customButtonCallback = []),
          "boolean" != typeof t.options.calendarOptions[e].showArrow && (t.options.calendarOptions[e].showArrow = !0),
          "boolean" != typeof t.options.calendarOptions[e].showExtraArrow && (t.options.calendarOptions[e].showExtraArrow = !1),
          t.options.calendarOptions[e].limitDateNotBefore instanceof Date ? t.options.calendarOptions[e].limitDateNotBefore.setHours(0, 0, 0, 0) : (t.options.calendarOptions[e].limitDateNotBefore = void 0),
          t.options.calendarOptions[e].limitDateNotAfter instanceof Date ? t.options.calendarOptions[e].limitDateNotAfter.setHours(0, 0, 0, 0) : (t.options.calendarOptions[e].limitDateNotAfter = void 0),
          t.options.calendarOptions[e].diffDateEnd || (t.options.calendarOptions[e].diffDateEnd = 0),
          "boolean" != typeof t.options.calendarOptions[e].currentDayHighlight && (t.options.calendarOptions[e].currentDayHighlight = !0),
          "boolean" != typeof t.options.calendarOptions[e].selectYear && (t.options.calendarOptions[e].selectYear = !1);
    })();
  var r;
  new Date();
  function o() {
    if (t.activeCalendar.startDay >= 0) {
      t.dayNames = [];
      for (var e = 7; e--; ) {
        var n = new Date(),
          a = n.getDay(),
          i = t.activeCalendar.startDay - a;
        n.setDate(n.getDate() + i + 6 - e), t.dayNames.push(n);
      }
    }
  }
  (t.dirtyDate = !1),
    (t.hideArrow = !1),
    (t.activeTab = t.options.mainOptions.startTab ? t.options.mainOptions.startTab : 0),
    (t.dayNames = []),
    t.options.calendarOptions && ((t.activeCalendar = angular.copy(t.options.calendarOptions[t.activeTab])), (t.openTab = t.activeCalendar), o()),
    (t.years = []),
    (t.yearInputName = "year_hash" + new Date().getTime()),
    (r = new Date().getFullYear()),
    (t.years = Array.apply(null, new Array(100)).map(function (t, e) {
      return r - e;
    })),
    t.$watch("fromDate", function () {
      v(), w();
    }),
    t.$watch("toDate", function () {
      v(), w();
    });
  var s = null,
    l = null,
    c = null,
    d = null,
    u = null,
    p = null,
    m = null,
    h = null;
  function f(e) {
    return (function (t, e, n) {
      var a = null,
        i = null,
        r = null;
      switch (e) {
        default:
        case "m":
          (a = g(t)).setDate(1), (i = g(a)), a.setMonth(a.getMonth() * n + 1), a.setDate(a.getDate() - 1), (r = g(a));
          break;
        case "y":
          (a = g(t)), (i = new Date(a.getFullYear(), 0, 1)), (r = new Date(a.getFullYear() + (n - 1), 11, 31));
      }
      return (
        i.setHours(0, 0, 0, 0),
        r.setHours(0, 0, 0, 0),
        {
          dateStart: i,
          dateOver: r,
        }
      );
    })(e, t.activeCalendar.calendarUnit, t.activeCalendar.calendarUnitCount);
  }
  function g(t) {
    return t ? (t instanceof Date ? new Date(t.getTime()) : "string" == typeof t || "number" == typeof t ? new Date(t) : null) : null;
  }
  function v() {
    (s = l = g(t.fromDate)),
      (c = d = g(t.toDate)),
      (function () {
        (u = null), (p = null), (m = null), (h = null);
        var e = null;
        t.fromDate ? ((e = g(t.fromDate)), (u = f(e).dateStart), (p = f(e).dateOver)) : t.toDate ? ((e = g(t.toDate)), (u = f(e).dateStart), (p = f(e).dateOver)) : ((u = f(new Date()).dateStart), (p = f(new Date()).dateOver));
        var n = g(u);
        switch (t.activeCalendar.calendarUnit) {
          default:
          case "m":
            n.setMonth(n.getMonth() + t.activeCalendar.calendarUnitCount);
            break;
          case "y":
            n.setFullYear(n.getFullYear() + t.activeCalendar.calendarUnitCount);
        }
        t.toDate && t.toDate >= n ? ((e = new Date(t.toDate.getTime())), (m = f(e).dateStart), (h = f(e).dateOver)) : ((m = f(n).dateStart), (h = f(n).dateOver));
        var a = new Date(p.getTime());
        a.setDate(a.getDate() + 1), a.setHours(0, 0, 0, 0), (t.hideArrow = a >= m), t.activeCalendar.oneCanvasCalendar && (t.hideArrow = !1), (t.viewDateLeftStart = u), (t.viewDateLeftEnd = p), (t.viewDateRightStart = m), (t.viewDateRightEnd = h);
      })();
  }
  function y(e) {
    var n = f(e);
    (m = n.dateStart), (h = n.dateOver);
    var a = new Date(p.getTime());
    a.setDate(a.getDate() + 1), (t.hideArrow = a >= m), (t.viewDateRightStart = m), (t.viewDateRightEnd = h), w();
  }
  function D(e) {
    (u = f(e).dateStart), (p = f(e).dateOver);
    var n = new Date(p.getTime());
    n.setDate(n.getDate() + 1), (t.hideArrow = n >= m), t.activeCalendar.oneCanvasCalendar && (t.hideArrow = !1), (t.viewDateLeftStart = u), (t.viewDateLeftEnd = p), w();
  }
  function k(t, e, n) {
    var a;
    return (a = new Date(n > 0 ? e : t)).setDate(a.getDate() + n), a.setDate(1), a;
  }
  v(),
    (t.clickTab = function (n) {
      (t.activeTab = n),
        (t.activeCalendar = t.options.calendarOptions[n]),
        v(),
        w(),
        o(),
        (t.dirtyDate = !1),
        t.updatePosition(),
        (t.openTab = t.activeCalendar),
        e(function () {
          t.changeTab && t.changeTab();
        }, 10);
    }),
    (t.clickDate = function (n) {
      if (t.activeCalendar.unitSelectRange)
        switch (t.activeCalendar.unitSelectRange) {
          default:
          case "w":
            ("d" !== t.activeCalendar.unit || ("d" === t.activeCalendar.unit && 1 === t.activeCalendar.unitRange)) &&
              (n.currentDateStart.getDay() >= t.activeCalendar.startDay ? n.currentDateStart.setDate(n.currentDateStart.getDate() - (n.currentDateStart.getDay() - t.activeCalendar.startDay)) : n.currentDateStart.setDate(n.currentDateStart.getDate() - (7 - (t.activeCalendar.startDay - n.currentDateStart.getDay()))), n.currentDateOver.getDay() >= t.activeCalendar.startDay ? n.currentDateOver.setDate(n.currentDateOver.getDate() + (6 + t.activeCalendar.startDay - n.currentDateOver.getDay())) : t.activeCalendar.startDay > n.currentDateOver.getDay() && n.currentDateOver.setDate(n.currentDateOver.getDate() + (t.activeCalendar.startDay - n.currentDateOver.getDay() - 1)));
            break;
          case "m":
            1 !== n.currentDateStart.getDate() && n.currentDateStart.setDate(1);
            var a = new Date();
            a.setMonth(a.getMonth() - 1), a.setDate(0), n.currentDateOver.getDate() !== a.getDate() && n.currentDateOver.setDate(a.getDate());
            break;
          case "y":
            0 !== n.currentDateStart.getMonth() && (n.currentDateStart.setMonth(0), n.currentDateStart.setDate(1)), 11 !== n.currentDateOver.getMonth() && (n.currentDateOver.setMonth(12), n.currentDateOver.setDate(0));
        }
      if (n.disabled) return !1;
      n.selectRange || !s || !l || s.getTime() !== c.getTime() || l.getTime() !== d.getTime() || t.activeCalendar.enableOneClickRange ? ((s = new Date(n.currentDateStart.getTime())), (l = new Date(n.currentDateOver.getTime())), (c = new Date(n.currentDateStart.getTime())), (d = new Date(n.currentDateOver.getTime()))) : n.currentDateStart >= s || n.currentDateOver >= l ? ((c = new Date(n.currentDateStart.getTime())), (d = new Date(n.currentDateOver.getTime()))) : ((s = new Date(n.currentDateStart.getTime())), (l = new Date(n.currentDateOver.getTime()))),
        t.options.mainOptions.instantChanges ? t.applySelect() : (w(), (t.dirtyDate = !0)),
        e(function () {
          t.pickClick && t.pickClick();
        }, 0);
    }),
    (t.changeLeft = function (e) {
      t.activeCalendar.oneCanvasCalendar && t.changeRight(e);
      var n = k(u, p, e);
      new Date(n) >= m && (n = new Date(m)).setDate(n.getDate() - 1), D(n);
    }),
    (t.changeRight = function (t) {
      var e = k(m, h, t);
      e <= p && (e = new Date(p)).setDate(e.getDate() + 1), y(e);
    }),
    (t.changeLeftInterim = function (e, n) {
      t.activeCalendar.oneCanvasCalendar && t.changeRightInterim(e, n);
      var a = new Date(u);
      a.setYear(a.getFullYear() + e), new Date(a) >= m && ((a = new Date(p)).setDate(1), a.setMonth(m.getMonth() - 1), a.setYear(m.getFullYear())), D(a);
    }),
    (t.changeRightInterim = function (t) {
      var e = new Date(h);
      e.setYear(e.getFullYear() + t), e <= p && (e = new Date(p)).setDate(e.getDate() + 1), y(e);
    }),
    (t.onYearChange = function (e) {
      var n = t.viewDateLeftStart.getFullYear(),
        a = parseInt(e.year) - n;
      t.changeLeftInterim(a, "y");
    }),
    (t.customSelectButton = function (e) {
      function n(t, e) {
        var n = {};
        return (n.fromDate = t), (n.toDate = e), n;
      }
      switch (e) {
        case "today":
          e = n(new Date(), new Date());
          break;
        case "yesterday":
          var a = new Date(),
            i = ((o = -1), (s = new Date(a)).setDate(s.getDate() + o), s);
          e = n(i, i);
          break;
        case "week":
          e = n(new Date(), new Date());
          var r = new Date();
          r.getDay() >= t.activeCalendar.startDay ? e.fromDate.setDate(r.getDate() - (r.getDay() - t.activeCalendar.startDay)) : e.fromDate.setDate(r.getDate() - (7 - (t.activeCalendar.startDay - r.getDay()))), r.getDay() >= t.activeCalendar.startDay ? e.toDate.setDate(r.getDate() + (6 + t.activeCalendar.startDay - r.getDay())) : t.activeCalendar.startDay > r.getDay() && e.toDate.setDate(r.getDate() + (t.activeCalendar.startDay - r.getDay() - 1));
          break;
        case "7days":
          (e = n(new Date(), new Date())).fromDate.setDate(e.toDate.getDate() - 6);
          break;
        case "month":
          (e = n(new Date(), new Date())).fromDate.setMonth(e.fromDate.getMonth() - 1), e.fromDate.setDate(1), e.toDate.setDate(0);
          break;
        case "30days":
          (e = n(new Date(), new Date())).fromDate.setDate(e.fromDate.getDate() - 29);
          break;
        case "year":
          (e = n(new Date(), new Date())).toDate.setDate(0), e.fromDate.setDate(e.fromDate.getDate() - 364);
          break;
        case "365days":
          (e = n(new Date(), new Date())).fromDate.setFullYear(e.fromDate.getFullYear() - 1);
      }
      var o, s;
      (t.fromDate = new Date(e.fromDate.getTime())),
        (t.toDate = new Date(e.toDate.getTime())),
        t.clickDate({
          currentDateStart: t.fromDate,
          currentDateOver: t.fromDate,
          selectRange: !0,
        }),
        t.clickDate({
          currentDateStart: t.toDate,
          currentDateOver: t.toDate,
          selectRange: !1,
        }),
        v(),
        w(),
        (t.dirtyDate = !1);
    }),
    (t.customButtonClick = function (e) {
      e(function (e, n) {
        (t.fromDate = e), (t.toDate = n);
      }) && t.showCalendar();
    }),
    (t.applySelect = function (n) {
      !n || n.target.className.indexOf("dtpicker-cancel")
        ? (t.options.mainOptions.time.enabled ? ("[object Date]" === Object.prototype.toString.call(s) && (t.fromDate = new Date(s.setHours(t.hours, t.minutes, 0, 0))), "[object Date]" === Object.prototype.toString.call(d) && (t.toDate = new Date(d.setHours(t.hours, t.minutes, 0, 0)))) : ((t.fromDate = s ? new Date(s.getTime()) : null), (t.toDate = d ? new Date(d.getTime() + t.activeCalendar.diffDateEnd) : null)),
          (t.dirtyDate = !1),
          v(),
          w(),
          e(function () {
            t.applyClick && t.applyClick();
          }, 0),
          t.options.mainOptions.applyClose && t.openCalendar && t.showCalendar())
        : t.openCalendar && t.showCalendar();
    }),
    (t.isInputDateDisabled = function () {
      return t.inputDate > t.options.calendarOptions[0].limitDateNotAfter;
    });
  var w = function () {
    (t.skeletonLeft = n.buildCalendarSkeleton(
      t.activeCalendar,
      {
        viewDateEnd: p,
        viewDateStart: u,
      },
      {
        innerFromDateStart: s,
        innerFromDateEnd: l,
      },
      {
        innerToDateStart: c,
        innerToDateEnd: d,
      }
    )),
      (t.skeletonRight = n.buildCalendarSkeleton(
        t.activeCalendar,
        {
          viewDateEnd: h,
          viewDateStart: m,
        },
        {
          innerFromDateStart: s,
          innerFromDateEnd: l,
        },
        {
          innerToDateStart: c,
          innerToDateEnd: d,
        }
      ));
  };
  w(),
    (t.getSelectedFromDate = function () {
      return s;
    }),
    (t.getSelectedToDate = function () {
      return d;
    });
}
function tpTemplates(t) {
  var e =
    '<div class="dtpicker-content">\t<div class="calendar-canva">\t\t<div class="dtpicker-head">\t\t\t<div class="dtpicker-title">\t\t\t\t<div class="dtpicker-pager dtpicker-pager-left">\t\t\t\t\t<div ng-if="activeCalendar.showExtraArrow"  ng-click="changeLeftInterim(-1,\'y\')"  class="dtpicker-prev-year"><i class="icon-arrow-double-datepicker-left"></i></div>\t\t\t\t\t<div ng-if="activeCalendar.showArrow" ng-click="changeLeft(-1)" class="dtpicker-prev-month"><i class="icon-arrow-datepicker-left"></i></div>\t\t\t\t</div>\t\t\t\t<div class="dtpicker-month">\t\t\t\t\t<span>{{viewDateLeftStart | date:activeCalendar.calendarUnitTitle}}</span> \t\t\t\t\t<span ng-if="activeCalendar.calendarUnitTitleRange"> &mdash; {{viewDateLeftEnd | date:activeCalendar.calendarUnitTitle}}</span>\t\t\t\t\t<div class="dtpicker-year" ng-if="activeCalendar.selectYear">\t\t\t\t\t\t<select ng-change="onYearChange(activeCalendar)" ng-model="activeCalendar.year">\t\t\t\t\t\t\t<option ng-repeat="year in years">{{ year }}</option>\t\t\t\t\t\t</select>\t\t\t\t\t</div>\t\t\t\t</div>\t\t\t\t<div class="dtpicker-pager dtpicker-pager-right">\t\t\t\t\t<div \t\t\t\t\t\tng-hide="hideArrow"\t\t\t\t\t\tng-if="activeCalendar.showArrow"\t\t\t\t\t\tng-click="changeLeft(1)"\t\t\t\t\t\tclass="dtpicker-next-month">\t\t\t\t\t\t<i class="icon-arrow-datepicker-right"></i>\t\t\t\t\t</div>\t\t\t\t\t<div ng-if="activeCalendar.showExtraArrow"  ng-hide="hideArrow" ng-click="changeLeftInterim(1,\'y\')" class="dtpicker-next-year"><i class="icon-arrow-double-datepicker-right"></i></div>\t\t\t\t</div>\t\t\t</div>\t\t\t<div ng-if="activeCalendar.viewDayOfWeek" class="dtpicker-dayname clearfix">\t\t\t\t<div ng-repeat="dayname in dayNames track by $index" class="dayname-list">{{dayname | date:"EEE" | limitTo: 1}}</div>\t\t\t</div>\t\t</div>\t\t<table class="dtpicker-body">\t\t\t<tr class="dtpicker-row" ng-repeat="str in skeletonLeft">\t\t\t\t<td  \t\t\t\t\tng-class="\t\t\t\t\t{\'out-day\': day.out, \t\t\t\t\t\'select-day\': day.selectRange, \t\t\t\t\t\'today\': day.today, \t\t\t\t\t\'select-today\':  day.selectToday, \t\t\t\t\t\'range-day\': day.selectRange, \t\t\t\t\t\'change-date\': dirtyDate, \t\t\t\t\t\'first-select-day\': (day.firstSelectDay), \t\t\t\t\t\'last-select-day\': (day.lastSelectDay), \t\t\t\t\t\'disabled-day\': (day.disabled), \t\t\t\t\t\'marker-day\': (day.markerDay), \t\t\t\t\t\'marker-column\': (day.markerColumn), \t\t\t\t\t\'chosen-today\': (day.today === day.firstSelectDay), \t\t\t\t\t\'marker-row\': (day.markerRow)}" \t\t\t\t\tng-click="clickDate(day)"\t\t\t\t\tclass="calendar-day {{day.markerColumn}} {{day.markerRow}}"\t\t\t\t\tng-repeat="day in str track by $index">\t\t\t\t\t<div ng-if="activeCalendar.unitTitle.type === \'date\'">\t\t\t\t\t\t<span>\t\t\t\t\t\t\t{{day.currentDateStart | date:activeCalendar.unitTitle.title}} <em class="inline" ng-if="activeCalendar.unitTitleRange">- {{day.currentDateOver | date:activeCalendar.unitTitle.title}}</em>\t\t\t\t\t\t</span>\t\t\t\t\t</div>\t\t\t\t\t<div ng-if="activeCalendar.unitTitle.type === \'index\'">\t\t\t\t\t\t<span>\t\t\t\t\t\t\t<span>{{activeCalendar.unitTitle.Ltitle}}</span>\t\t\t\t\t\t\t<span>{{day.index + 1}}</span>\t\t\t\t\t\t\t<span>{{activeCalendar.unitTitle.Rtitle}}</span>\t\t\t\t\t\t</span>\t\t\t\t\t</div>\t\t\t\t</td>\t\t\t</tr>\t\t</table>\t</div>\t<div ng-if="!activeCalendar.oneCanvasCalendar" class="calendar-canva">\t\t<div class="dtpicker-head">\t\t\t<div class="dtpicker-title">\t\t\t\t<div class="dtpicker-pager dtpicker-pager-left">\t\t\t\t\t<div ng-if="activeCalendar.showExtraArrow"  ng-hide="hideArrow" ng-click="changeRightInterim(-1,\'y\')" class="dtpicker-prev-year"><i class="icon-arrow-double-datepicker-left"></i></div>\t\t\t\t\t<div \t\t\t\t\t\tng-hide="hideArrow"\t\t\t\t\t\tng-if="activeCalendar.showArrow"\t\t\t\t\t\tng-click="changeRight(-1)"\t\t\t\t\t\tclass="dtpicker-prev-month">\t\t\t\t\t\t\t<i class="icon-arrow-datepicker-left"></i>\t\t\t\t\t</div>\t\t\t\t</div>\t\t\t\t<div class="dtpicker-month">\t\t\t\t\t<span>{{viewDateRightStart | date:activeCalendar.calendarUnitTitle}}</span> \t\t\t\t\t<span ng-if="activeCalendar.calendarUnitTitleRange"> &mdash; {{viewDateRightEnd | date:activeCalendar.calendarUnitTitle}}</span>\t\t\t\t</div>\t\t\t\t<div class="dtpicker-pager dtpicker-pager-right">\t\t\t\t\t<div ng-if="activeCalendar.showArrow" ng-click="changeRight(1)" class="dtpicker-next-month"><i class="icon-arrow-datepicker-right"></i></div>\t\t\t\t\t<div ng-if="activeCalendar.showExtraArrow"  ng-click="changeRightInterim(1,\'y\')" class="dtpicker-next-year"><i class="icon-arrow-double-datepicker-right"></i></div>\t\t\t\t</div>\t\t\t</div>\t\t\t<div ng-if="activeCalendar.viewDayOfWeek" class="dtpicker-dayname clearfix">\t\t\t\t<div ng-repeat="dayname in dayNames track by $index" class="dayname-list">{{dayname | date:"EEE" | limitTo: 1}}</div>\t\t\t</div>\t\t</div>\t\t<table class="dtpicker-body">\t\t\t<tr class="dtpicker-row" ng-repeat="str in skeletonRight">\t\t\t\t<td  \t\t\t\tng-class="\t\t\t\t{\'out-day\': day.out, \t\t\t\t\'select-day\': day.selectRange, \t\t\t\t\'today\': day.today, \t\t\t\t\'select-today\':  day.selectToday, \t\t\t\t\'range-day\': day.selectRange, \t\t\t\t\'change-date\': dirtyDate, \t\t\t\t\'first-select-day\': (day.firstSelectDay), \t\t\t\t\'last-select-day\': (day.lastSelectDay), \t\t\t\t\'disabled-day\': (day.disabled), \t\t\t\t\'marker-day\': (day.markerDay), \t\t\t\t\'marker-column\': (day.markerColumn), \t\t\t\t\'chosen-today\': (day.today === day.firstSelectDay), \t\t\t\t\'marker-row\': (day.markerRow)}" \t\t\t\tng-click="clickDate(day)"\t\t\t\tclass="calendar-day {{day.markerColumn}} {{day.markerRow}}"\t\t\t\tng-repeat="day in str track by $index">\t\t\t\t\t<div ng-if="activeCalendar.unitTitle.type === \'date\'">\t\t\t\t\t\t<span>\t\t\t\t\t\t\t{{day.currentDateStart | date:activeCalendar.unitTitle.title}} <em class="inline" ng-if="activeCalendar.unitTitleRange">- {{day.currentDateOver | date:activeCalendar.unitTitle.title}}</em>\t\t\t\t\t\t</span>\t\t\t\t\t</div>\t\t\t\t\t<div ng-if="activeCalendar.unitTitle.type === \'index\'">\t\t\t\t\t\t<span>\t\t\t\t\t\t\t<span>{{activeCalendar.unitTitle.Ltitle}}</span>\t\t\t\t\t\t\t<span>{{day.index + 1}}</span>\t\t\t\t\t\t\t<span>{{activeCalendar.unitTitle.Rtitle}}</span>\t\t\t\t\t\t</span>\t\t\t\t\t</div>\t\t\t\t</td>\t\t\t</tr>\t\t</table>\t</div>\t<div ng-if="options.mainOptions.showPanelCustomButton && (activeCalendar.customButtonSelect.length || activeCalendar.customButtonCallback.length)" class="calendar-canva additional-canva">\t\t<div class="dtpicker-head">\t\t\t<div class="dtpicker-title">\t\t\t\t<div class="dtpicker-month">{{options.mainOptions.customPanel.title}}</div>\t\t\t</div>\t\t\t<div class="dtpicker-dayname clearfix">\t\t\t\t<div class="dtpicker-daterange">{{fromDate | date:options.mainOptions.customPanel.dateFormat}} - {{toDate | date:options.mainOptions.customPanel.dateFormat}}</div>\t\t\t</div>\t\t</div>\t\t<div class="dtpicker-body">\t\t\t<div class="dtpicker-buttons clearfix">\t\t\t\t<button ng-repeat="customButton in activeCalendar.customButtonSelect" class="btn btn-small btn-uppercased custom-select" ng-click="customSelectButton(customButton.diff())">{{ customButton.buttonName || customButton.butttonName }}</button>\t\t\t\t<button ng-repeat="customButton in activeCalendar.customButtonCallback" class="btn btn-small btn-uppercased custom-select" ng-click="customButtonClick(customButton.callback)">{{customButton.buttonName}}</button>\t\t\t</div>\t\t</div>\t</div></div>';
  t.put("template/datepicker/datepicker-inline.html", '<div class="tp-datepicker extended custom inline">' + e + "</div>"),
    t.put(
      "template/datepicker/datepicker-custom.html",
      '<div class="tp-datepicker extended custom" ng-class="{\'light\': lightVersion === true, \'open\': openCalendar}">\t<div ng-click="showCalendar()" class="dtpicker-input">\t\t<div ng-transclude></div>\t</div>\t<div ng-show="openCalendar" class="calendar" ng-animate="\'animate\'" ng-animate-children  animate="animate" ng-class="{\'tabs-on\': options.mainOptions.showPanelTab, \'hidden-on-load\': !contentLoaded, \'hidden-on-position-updated\': !positionUpdated}">\t\t<div class="dtpicker-tabs" ng-if="options.mainOptions.showPanelTab">\t\t\t<div ng-click="clickTab($index)" ng-class="{active: activeTab === $index}" ng-repeat="optionItem in options.calendarOptions" ng-if="options.mainOptions.showPanelTab" class="dtpicker-tab">\t\t\t\t{{optionItem.calendarCaption || optionItem.calendarTitle}}\t\t\t</div>\t\t</div>   <div ng-class="{\'datepicker-body\': true, \'initial-empty\': initialEmpty}" ng-if="openCalendar || !initialEmpty">' +
        e +
        '   </div>\t\t<div ng-show="options.mainOptions.time.enabled" id="dtpicker-time" class="dtpicker-time">\t\t\t<tp-time options="options.mainOptions.time" hours="hours" minutes="minutes"></tp-time>\t\t</div>\t\t<div ng-show="!options.mainOptions.hideApplySelect" class="dtpicker-submit">\t\t\t<button ng-if="options.mainOptions.applyButton.enable"             class="dtpicker-sumbit-button"             ng-click="applySelect($event)"             ng-disabled="isInputDateDisabled()"             ng-class="{\'dtpicker-sumbit-button--disabled\': isInputDateDisabled()}">{{options.mainOptions.applyButton.title}}     </button>\t\t\t<button ng-if="options.mainOptions.closeButton.enable"             class="dtpicker-sumbit-button dtpicker-cancel"             ng-click="applySelect($event)">{{options.mainOptions.closeButton.title | t}}      </button>\t\t</div>\t</div></div>'
    );
}
(tpDatepicker.$inject = ["$document", "$window", "$timeout", "$q"]),
  (tpTemplates.$inject = ["$templateCache"]),
  (function (t, e) {
    "use strict";
    var n = "yyyy-MM-dd";
    function a(t) {
      return new Date(t.getUTCFullYear(), t.getUTCMonth(), t.getUTCDate());
    }
    e.module("ngInputDate", ["ng"])
      .factory("inputDate", function () {
        return {
          ExtractDate: a,
        };
      })
      .directive("input", [
        "dateFilter",
        "$timeout",
        function (t, e) {
          return {
            restrict: "EA",
            require: "?ngModel",
            link: function (e, a, i, r) {
              if (void 0 !== i.type && "date" === i.type && r) {
                var o = void 0 !== i.time && void 0 !== i.timeFormat ? i.timeFormat : i.dateFormat || n;
                r.$formatters.unshift(function (e) {
                  return t(e, o);
                }),
                  r.$parsers.unshift(function (t) {
                    return (function (t, e) {
                      if (void 0 === t || "" === t) return null;
                      var a, i, r;
                      if (e === n) {
                        var o = t.split("-");
                        if (3 !== o.length) return null;
                        (a = parseInt(o[0], 10)), (i = parseInt(o[1], 10)), (r = parseInt(o[2], 10));
                      } else if ("function" == typeof moment) {
                        var s = moment(t, e.toUpperCase());
                        (a = s.year()), (i = s.month() + 1), (r = s.date());
                      } else {
                        var l = new Date(t);
                        (a = l.getUTCFullYear()), (i = l.getMonth() + 1), (r = l.getDate());
                      }
                      return i && a && r ? new Date(a, i - 1, r) : null;
                    })(t, o);
                  });
              }
            },
          };
        },
      ]);
  })(window, angular),
  (function (t) {
    "use strict";
    t.module("datetime", []),
      t.module("datetime").constant("datetimePlaceholder", {
        year: "(year)",
        yearShort: "(year)",
        month: "(month)",
        date: "(date)",
        day: "(day)",
        hour: "(hour)",
        hour12: "(hour12)",
        minute: "(minute)",
        second: "(second)",
        millisecond: "(millisecond)",
        ampm: "(AM/PM)",
        week: "(week)",
      });
    var e = {
      exports: {},
    };
    !(function (t) {
      void 0 !== e && (e.exports = t);
      var n = "listeners",
        a = {
          on: function (t, e) {
            return o(this, t).push(e), this;
          },
          once: function (t, e) {
            var n = this;
            return (a.originalListener = e), o(n, t).push(a), n;
            function a() {
              r.call(n, t, a), e.apply(this, arguments);
            }
          },
          off: r,
          emit: function (t, e) {
            var n = this,
              a = o(n, t, !0);
            if (!a) return !1;
            var i = arguments.length;
            if (1 === i)
              a.forEach(function (t) {
                t.call(n);
              });
            else if (2 === i)
              a.forEach(function (t) {
                t.call(n, e);
              });
            else {
              var r = Array.prototype.slice.call(arguments, 1);
              a.forEach(function (t) {
                t.apply(n, r);
              });
            }
            return !!a.length;
          },
        };
      function i(t) {
        for (var e in a) t[e] = a[e];
        return t;
      }
      function r(t, e) {
        var a,
          i = this;
        if (arguments.length) {
          if (e) {
            if ((a = o(i, t, !0))) {
              if (
                !(a = a.filter(function (t) {
                  return t !== e && t.originalListener !== e;
                })).length
              )
                return r.call(i, t);
              i[n][t] = a;
            }
          } else if ((a = i[n]) && (delete a[t], !Object.keys(a).length)) return r.call(i);
        } else delete i[n];
        return i;
      }
      function o(t, e, a) {
        if (!a || t[n]) {
          var i = t[n] || (t[n] = {});
          return i[e] || (i[e] = []);
        }
      }
      i(t.prototype), (t.mixin = i);
    })(function t() {
      if (!(this instanceof t)) return new t();
    });
    var n = e.exports,
      a = function (t, e, n) {
        var a;
        if ((t = "" + t).length > n) t = t.substr(t.length - n);
        else if (t.length < e) for (a = t.length; a < e; a++) t = "0" + t;
        return t;
      },
      i =
        "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
          ? function (t) {
              return typeof t;
            }
          : function (t) {
              return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
            },
      r = function (t, e) {
        if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function");
      },
      o = function (t, e) {
        if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function, not " + typeof e);
        (t.prototype = Object.create(e && e.prototype, {
          constructor: {
            value: t,
            enumerable: !1,
            writable: !0,
            configurable: !0,
          },
        })),
          e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : (t.__proto__ = e));
      },
      s = function (t, e) {
        if (!t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        return !e || ("object" != typeof e && "function" != typeof e) ? t : e;
      };
    function l(t, e, n) {
      for (var a = 0, i = t.toUpperCase(), r = n.toUpperCase(); i[e + a] && i[e + a] == r[a]; ) a++;
      return t.substr(e, a);
    }
    function c(t, e, n) {
      var i = (function (t, e, n) {
        var i, r, o, s;
        if ("static" == e.type)
          return t.startsWith(e.value, n)
            ? {
                viewValue: e.value,
              }
            : {
                err: 2,
                code: "TEXT_MISMATCH",
                message: "Pattern value mismatch",
              };
        if ("number" == e.type)
          return null ==
            (o = (function (t, e) {
              var n = (t = t.substring(e)).match(/^\d+/);
              return n && n[0];
            })(t, n))
            ? {
                err: 1,
                code: "NUMBER_MISMATCH",
                message: "Invalid number",
                viewValue: "",
              }
            : o.length < e.minLength
            ? {
                err: 1,
                code: "NUMBER_TOOSHORT",
                message: "The length of number is too short",
                value: +o,
                viewValue: o,
                properValue: a(+o, e.minLength, e.maxLength),
              }
            : (o.length > e.maxLength && (o = o.substr(0, e.maxLength)),
              +o < e.min
                ? {
                    err: 1,
                    code: "NUMBER_TOOSMALL",
                    message: "The number is too small",
                    value: +o,
                    viewValue: o,
                    properValue: a(e.min, e.minLength, e.maxLength),
                  }
                : o.length > e.minLength && "0" == o[0]
                ? {
                    err: 1,
                    code: "LEADING_ZERO",
                    message: "The number has too many leading zero",
                    value: +o,
                    viewValue: o,
                    properValue: a(+o, e.minLength, e.maxLength),
                  }
                : +o > e.max
                ? {
                    err: 1,
                    code: "NUMBER_TOOLARGE",
                    message: "The number is too large",
                    value: +o,
                    viewValue: o,
                    properValue: a(e.max, e.minLength, e.maxLength),
                  }
                : {
                    value: +o,
                    viewValue: o,
                  });
        if ("select" == e.type) {
          for (r = "", s = 0; s < e.select.length; s++) (i = l(t, n, e.select[s])) && i.length > r.length && ((o = s), (r = i));
          return r
            ? r != e.select[o]
              ? {
                  err: 1,
                  code: "SELECT_INCOMPLETE",
                  message: "Incomplete select",
                  value: o + 1,
                  viewValue: r,
                  selected: e.select[o],
                }
              : {
                  value: o + 1,
                  viewValue: r,
                }
            : {
                err: 1,
                code: "SELECT_MISMATCH",
                message: "Invalid select",
                viewValue: "",
              };
        }
        throw "Unknown token type: " + e.type;
      })(t, e, n);
      return i.err && "static" != e.type && t.startsWith(e.placeholder, n) && (1 < i.err || i.viewValue.length <= e.placeholder.length)
        ? {
            empty: !0,
            viewValue: e.placeholder,
          }
        : i;
    }
    function d(t, e) {
      var n,
        a,
        i = 0,
        r = [],
        o = t,
        s = Array.isArray(o),
        l = 0;
      for (o = s ? o : o[Symbol.iterator](); ; ) {
        if (s) {
          if (l >= o.length) break;
          n = o[l++];
        } else {
          if ((l = o.next()).done) break;
          n = l.value;
        }
        if ((((a = c(e, n.token, i)).node = n), (a.pos = i), (a.token = n.token), 2 <= a.err)) throw ((a.text = e), a);
        (i += a.viewValue.length), r.push(a);
      }
      var d = r[r.length - 1];
      if (d.pos + d.viewValue.length < e.length)
        throw {
          code: "TEXT_TOOLONG",
          message: "Text is too long",
          text: e,
        };
      return r;
    }
    function u(t, e) {
      if ("static" == e.type)
        return {
          viewValue: e.value,
        };
      var n = e.extract(t);
      if ("number" == e.type)
        return {
          value: n,
          viewValue: a(n, e.minLength, e.maxLength),
        };
      if ("select" == e.type)
        return {
          value: n,
          viewValue: e.select[n - 1],
        };
      throw "Unknown type to format: " + e.type;
    }
    function p(t, e, n) {
      var a,
        i,
        r = [],
        o = e,
        s = Array.isArray(o),
        l = 0;
      for (o = s ? o : o[Symbol.iterator](); ; ) {
        if (s) {
          if (l >= o.length) break;
          i = o[l++];
        } else {
          if ((l = o.next()).done) break;
          i = l.value;
        }
        (a = u(t, i.token)), "static" != i.token.type && i.empty && !n && ((a.value = null), (a.viewValue = i.token.placeholder)), r.push(a);
      }
      return r;
    }
    var m = (function () {
      function t(e, n) {
        r(this, t), (this.parser = e), (this.token = n), (this.value = null), (this.viewValue = n.value), (this.offset = 0), (this.next = null), (this.prev = null), (this.nextEdit = null), (this.prevEdit = null), (this.empty = !0);
      }
      return (
        (t.prototype.unset = function () {
          "static" == this.token.type || this.parser.noEmpty || ((this.empty = !0), this.parser.setValue(this.parser.value, !1));
        }),
        (t.prototype.parse = function (t) {
          var e = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : 0,
            n = c(t, this.token, e);
          if (n.err) throw ((n.node = this), (n.token = this.token), n);
          if (this.parser.noEmpty && n.empty)
            throw {
              code: "NOT_INIT_FORBIDDEN",
              message: "Empty node is forbidden",
              node: this,
            };
          if (n.empty) this.unset();
          else {
            this.empty = !1;
            var a = f(this.parser.copyValue(this.parser.value), this.token, n.value, this.parser);
            this.parser.setValue(a, !1);
          }
        }),
        (t.prototype.add = function (t) {
          var e,
            n,
            a,
            i = this.parser.copyValue(this.parser.value);
          (this.empty = !1), (i = h(i, this.token, t, this.parser)), (e = this.token.extract(i)), "number" == this.token.type ? ((n = this.token.min), (a = this.token.max)) : "select" == this.token.type && ((n = 1), (a = this.token.select.length)), e < n && (i = f(i, this.token, n, this.parser)), a < e && (i = f(i, this.token, a, this.parser)), this.parser.setValue(i, !1);
        }),
        t
      );
    })();
    function h(t, e, n, a) {
      return "object" == (void 0 === t ? "undefined" : i(t)) ? (e.add(t, n, a), t) : e.add(t, n, a);
    }
    function f(t, e, n, a) {
      return "object" == (void 0 === t ? "undefined" : i(t)) ? (e.restore(t, n, a), t) : e.restore(t, n, a);
    }
    function g(t) {
      return t;
    }
    var v = (function (t) {
      function e() {
        r(this, e);
        var n = s(this, t.call(this));
        return n._constructor.apply(n, arguments), n.initialize(), n;
      }
      return (
        o(e, t),
        (e.prototype._constructor = function (t) {
          var e = t.tokens,
            n = t.noEmpty,
            a = void 0 !== n && n,
            i = t.value,
            r = t.text,
            o = t.copyValue,
            s = void 0 === o ? g : o;
          if (!e || !e.length) throw new Error("option.tokens is required");
          (this.tokens = e),
            (this.nodes = (function (t, e) {
              var n,
                a,
                i,
                r = [],
                o = e,
                s = Array.isArray(o),
                l = 0;
              for (o = s ? o : o[Symbol.iterator](); ; ) {
                if (s) {
                  if (l >= o.length) break;
                  n = o[l++];
                } else {
                  if ((l = o.next()).done) break;
                  n = l.value;
                }
                r.push(new m(t, n));
              }
              for (a = 0; a < r.length; a++) (r[a].next = r[a + 1] || null), (r[a].prev = r[a - 1] || null);
              for (i = null, a = 0; a < r.length; a++) (r[a].prevEdit = i), "static" != r[a].token.type && (i = r[a]);
              for (i = null, a = r.length - 1; 0 <= a; a--) (r[a].nextEdit = i), "static" != r[a].token.type && (i = r[a]);
              return r;
            })(this, e)),
            (this.nameMap = (function (t) {
              var e = new Map(),
                n = t,
                a = Array.isArray(n),
                i = 0;
              for (n = a ? n : n[Symbol.iterator](); ; ) {
                var r;
                if (a) {
                  if (i >= n.length) break;
                  r = n[i++];
                } else {
                  if ((i = n.next()).done) break;
                  r = i.value;
                }
                var o = r,
                  s = e.get(o.token.name);
                s || ((s = []), e.set(o.token.name, s)), s.push(o);
              }
              return e;
            })(this.nodes)),
            (this.value = i),
            (this.text = r),
            (this.noEmpty = a),
            (this.copyValue = s),
            (this.err = !1);
        }),
        (e.prototype.initialize = function () {
          this.setValue(this.value);
        }),
        (e.prototype.parse = function (t) {
          if (!t)
            throw {
              code: "EMPTY",
              message: "The input is empty",
              oldText: this.text,
            };
          var e, n;
          e = d(this.nodes, t);
          var a,
            i = [];
          for (a = this.err ? d(this.nodes, this.text) : this.nodes, n = 0; n < e.length; n++) e[n].empty || e[n].viewValue == a[n].viewValue || ((e[n].token = this.nodes[n].token), i.push(e[n]));
          var r = e.filter(function (t) {
              return t.empty;
            }),
            o = e.filter(function (t) {
              return t.err;
            });
          for (n = 0; n < e.length; n++) (this.nodes[n].value = e[n].value), (this.nodes[n].viewValue = e[n].viewValue), (this.nodes[n].offset = e[n].pos), (this.nodes[n].empty = e[n].empty);
          if (o.length) throw ((this.err = !0), o[0]);
          (this.err = !1),
            i.sort(function (t, e) {
              return e.empty ? -1 : t.empty ? 1 : (e.token.prior || 0) - (t.token.prior || 0);
            });
          var s,
            l = this.copyValue(this.value),
            c = i,
            u = Array.isArray(c),
            m = 0;
          for (c = u ? c : c[Symbol.iterator](); ; ) {
            if (u) {
              if (m >= c.length) break;
              s = c[m++];
            } else {
              if ((m = c.next()).done) break;
              s = m.value;
            }
            l = f(l, s.token, s.value, this);
          }
          var h = p(l, e)
            .map(function (t) {
              return t.viewValue;
            })
            .join("");
          if (t != h)
            throw (
              ((this.err = !0),
              {
                code: "INCONSISTENT_INPUT",
                message: "Successfully parsed but the output text doesn't match the input",
                text: t,
                oldText: this.text,
                properText: h,
              })
            );
          if (((this.text = t), (this.value = l), this.emit("change", this.value), r.length))
            throw {
              code: "NOT_INIT",
              message: "Some nodes are empty",
              text: t,
              node: r[0],
            };
          return this;
        }),
        (e.prototype.setValue = function (t) {
          var e,
            n = !(1 < arguments.length && void 0 !== arguments[1]) || arguments[1],
            a = p(t, this.nodes, n),
            i = 0,
            r = "";
          for (e = 0; e < a.length; e++) (this.nodes[e].value = a[e].value), (this.nodes[e].viewValue = a[e].viewValue), (this.nodes[e].offset = i), (this.nodes[e].empty = !n && this.nodes[e].empty), (i += this.nodes[e].viewValue.length), (r += this.nodes[e].viewValue);
          return (this.value = t), (this.text = r), this.emit("change", this.value), this;
        }),
        (e.prototype.isEmpty = function (t) {
          var e, n;
          if (t)
            try {
              e = d(this.nodes, t);
            } catch (t) {
              return !1;
            }
          else e = this.nodes;
          for (n = 0; n < e.length; n++) if ("static" != this.nodes[n].token.type && !e[n].empty) return !1;
          return !0;
        }),
        (e.prototype.isInit = function () {
          var t,
            e = this.nodes,
            n = Array.isArray(e),
            a = 0;
          for (e = n ? e : e[Symbol.iterator](); ; ) {
            if (n) {
              if (a >= e.length) break;
              t = e[a++];
            } else {
              if ((a = e.next()).done) break;
              t = a.value;
            }
            if ("static" != t.token.type && t.empty) return !1;
          }
          return !0;
        }),
        (e.prototype.unset = function () {
          var t,
            e = this.nodes,
            n = Array.isArray(e),
            a = 0;
          for (e = n ? e : e[Symbol.iterator](); ; ) {
            if (n) {
              if (a >= e.length) break;
              t = e[a++];
            } else {
              if ((a = e.next()).done) break;
              t = a.value;
            }
            t.empty = !0;
          }
          return this.setValue(this.value, !1), this;
        }),
        (e.prototype.getText = function () {
          return this.text;
        }),
        (e.prototype.getValue = function () {
          return this.value;
        }),
        (e.prototype.getNodes = function (t) {
          return t ? this.nameMap.get(t) : this.nodes;
        }),
        e
      );
    })(n);
    function y(t, e) {
      if (e.length) {
        var n = D(e, t).map(function (t) {
            return t.node;
          }),
          a = n[0],
          i = n[1];
        return a == i ? a : t - a.offset - a.viewValue.length <= i.offset - t ? a : i;
      }
    }
    function D(t, e) {
      var n,
        a,
        i,
        r = 2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : e,
        o = t,
        s = Array.isArray(o),
        l = 0;
      for (o = s ? o : o[Symbol.iterator](); ; ) {
        if (s) {
          if (l >= o.length) break;
          n = o[l++];
        } else {
          if ((l = o.next()).done) break;
          n = l.value;
        }
        n.offset <= e &&
          (a = {
            node: n,
            pos: e - n.offset,
          }),
          n.offset + n.viewValue.length >= r &&
            !i &&
            (i = {
              node: n,
              pos: r - n.offset,
            });
      }
      if (!i) {
        var c = t[t.length - 1];
        i = {
          node: c,
          pos: c.viewValue.length,
        };
      }
      return (
        a ||
          (a = {
            node: t[0],
            pos: 0,
          }),
        a.pos > a.node.viewValue.length && (a.pos = a.node.viewValue.length),
        [a, i]
      );
    }
    var k = (function () {
        function t(e, n) {
          r(this, t),
            (this.el = e),
            (this.nodes = n),
            (this.range = {
              node: y(0, this.nodes),
              start: 0,
              end: "end",
            });
        }
        return (
          (t.prototype.selectNearestNode = function () {
            var t = this.el.getSelection();
            t &&
              this.select({
                node: y(t.start, this.nodes),
                start: 0,
                end: "end",
              });
          }),
          (t.prototype.select = function (t) {
            (t = Object.assign(this.range, t)).node && this.el.setSelection(t.node.offset + t.start, t.node.offset + ("end" == t.end ? t.node.viewValue.length : t.end));
          }),
          (t.prototype.hasNext = function () {
            if (this.range.node) return this.range.node.nextEdit;
          }),
          (t.prototype.hasPrev = function () {
            if (this.range.node) return this.range.node.prevEdit;
          }),
          (t.prototype.selectNext = function () {
            var t = this.hasNext(),
              e = {
                start: 0,
                end: "end",
              };
            t && (e.node = t), this.select(e);
          }),
          (t.prototype.selectPrev = function () {
            var t = this.hasPrev(),
              e = {
                start: 0,
                end: "end",
              };
            t && (e.node = t), this.select(e);
          }),
          (t.prototype.get = function () {
            if (this.nodes.length) {
              var t = this.el.getSelection();
              if (t) {
                var e = D(this.nodes, t.start, t.end),
                  n = e[0],
                  a = e[1];
                n.node == a.node &&
                  (this.range = {
                    node: n.node,
                    start: n.pos,
                    end: a.pos,
                  });
              }
            }
          }),
          (t.prototype.atNodeEnd = function () {
            if (this.range.node) {
              this.get();
              var t = this.range.node.viewValue.length,
                e = this.range.node.token.maxLength,
                n = "end" == this.range.start ? t : this.range.start;
              return (n == ("end" == this.range.end ? t : this.range.end) && n == (null != e ? e : t)) || !t;
            }
          }),
          (t.prototype.atNodeStart = function () {
            if (this.range.node) {
              this.get();
              var t = this.range.node.viewValue.length,
                e = "end" == this.range.start ? t : this.range.start;
              return e == ("end" == this.range.end ? t : this.range.end) && 0 == e;
            }
          }),
          t
        );
      })(),
      w = (function (t) {
        function e() {
          r(this, e);
          var n = s(this, t.call(this));
          return n._constructor.apply(n, arguments), n.initialize(), n;
        }
        return (
          o(e, t),
          (e.prototype._constructor = function (t, e) {
            var n = 2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : "";
            (this.el = t),
              (this.tp = e),
              (this.separators = n),
              (this.sel = new k(
                t,
                e.getNodes().filter(function (t) {
                  return "static" != t.token.type;
                })
              ));
          }),
          (e.prototype.initialize = function () {
            var t = this;
            this.el.on("mousedown", function () {
              t.mousedown = !0;
            }),
              this.el.on("focus", function () {
                t.mousedown ||
                  setTimeout(function () {
                    t.sel.select({
                      start: 0,
                      end: "end",
                    });
                  });
              }),
              this.el.on("click", function () {
                (t.mousedown = !1), t.sel.selectNearestNode();
              }),
              this.el.on("input", function () {
                t.digest(null, t.el.val());
              }),
              this.el.on("keydown", function (e) {
                e.altKey ||
                  e.ctrlKey ||
                  (37 == e.keyCode || (9 == e.keyCode && e.shiftKey && t.sel.hasPrev())
                    ? (e.preventDefault(), t.tryFixingError(), t.sel.selectPrev())
                    : 39 == e.keyCode || (9 == e.keyCode && !e.shiftKey && t.sel.hasNext())
                    ? (e.preventDefault(), t.tryFixingError(), t.sel.selectNext())
                    : 38 == e.keyCode
                    ? (e.preventDefault(),
                      t.sel.selectNearestNode(),
                      t.sel.range.node && t.sel.range.node.add(1),
                      t.val(t.tp.getText()),
                      t.sel.select({
                        start: 0,
                        end: "end",
                      }))
                    : 40 == e.keyCode
                    ? (e.preventDefault(),
                      t.sel.selectNearestNode(),
                      t.sel.range.node && t.sel.range.node.add(-1),
                      t.val(t.tp.getText()),
                      t.sel.select({
                        start: 0,
                        end: "end",
                      }))
                    : 36 == e.keyCode || 35 == e.keyCode
                    ? setTimeout(function () {
                        return t.sel.selectNearestNode();
                      })
                    : 46 == e.keyCode
                    ? t.sel.atNodeEnd() && (e.preventDefault(), t.tryFixingError(), t.sel.selectNext())
                    : 8 == e.keyCode && t.sel.atNodeStart() && (e.preventDefault(), t.tryFixingError(), t.sel.selectPrev()));
              }),
              this.el.on("keypress", function (e) {
                var n = null == e.charCode ? e.keyCode : e.charCode,
                  a = String.fromCharCode(n),
                  i = t.separators,
                  r = t.sel.range.node;
                if ((r && r.next && "static" == r.next.token.type && (i += r.next.viewValue[0]), i.includes(a))) return e.preventDefault(), t.tryFixingError(), void t.sel.selectNext();
                setTimeout(function () {
                  t.sel.atNodeEnd() && t.sel.range.node.viewValue && (t.tryFixingError(), t.sel.selectNext());
                });
              }),
              this.el.on("blur", function () {
                setTimeout(function () {
                  t.tryFixingError();
                });
              }),
              this.tp.on("change", function () {
                t.err || t.inDigest || (t.val(t.tp.getText()), t.sel.select());
              });
            var e = this.el.val();
            e ? this.digest(null, e, !0) : this.val(this.tp.getText());
          }),
          (e.prototype.errorViewLength = function () {
            return this.err && null != this.err.viewValue ? this.err.viewValue.length : void 0;
          }),
          (e.prototype.val = function (t) {
            this.el.val() != t && this.el.val(t), (this.err = null);
          }),
          (e.prototype.tryFixingError = function () {
            this.err && (this.err.properValue ? this.digest(this.err.node, this.err.properValue, !0) : this.err.node && (this.err.node.unset(), this.digest(null, this.tp.getText())));
          }),
          (e.prototype.digest = function (t, e, n) {
            var a,
              i = 10;
            for (this.inDigest = !0; i--; ) {
              this.err = null;
              try {
                t ? t.parse(e) : this.tp.parse(e);
              } catch (i) {
                if ((this.emit("digest", i), this.sel.get(), "NOT_INIT" == i.code)) break;
                if (((this.err = i), !n && ("NUMBER_TOOSHORT" == i.code || "NUMBER_TOOSMALL" == i.code || "NUMBER_MISMATCH" == i.code || "SELECT_MISMATCH" == i.code || "LEADING_ZERO" == i.code))) break;
                if ("SELECT_INCOMPLETE" == i.code) {
                  (t = i.node),
                    (e = i.selected),
                    (a = {
                      end: "end",
                    });
                  continue;
                }
                null != i.properValue
                  ? ((t = i.node), (e = i.properValue))
                  : null != i.properText
                  ? ((t = null), (e = i.properText))
                  : ("EMPTY" == i.code && this.tp.unset(),
                    i.node && i.node.unset(),
                    (t = null),
                    (e = this.tp.getText()),
                    (a = {
                      start: 0,
                      end: "end",
                    }));
                continue;
              }
              break;
            }
            if ((this.err || (this.val(this.tp.getText()), i < 9 && this.sel.select(a)), (this.inDigest = !1), i < 0)) throw new Error("InputMask.digest crashed! Infinite loop on " + e);
          }),
          e
        );
      })(n),
      b = v,
      T = w;
    function C(e, n) {
      var i = e.DATETIME_FORMATS,
        o = /yyyy|yy|y|M{1,4}|dd?|EEEE?|HH?|hh?|mm?|ss?|([.,])sss|a|Z{1,2}|ww|w|'(([^']+|'')*)'/g,
        s = {
          y: {
            minLength: 1,
            maxLength: 4,
            max: 9999,
            min: 0,
            name: "year",
            type: "number",
          },
          yy: {
            minLength: 2,
            maxLength: 2,
            name: "yearShort",
            type: "number",
          },
          yyyy: {
            minLength: 4,
            maxLength: 4,
            max: 9999,
            min: 0,
            name: "year",
            type: "number",
          },
          MMMM: {
            name: "month",
            type: "select",
            select: i.MONTH,
          },
          MMM: {
            name: "month",
            type: "select",
            select: i.SHORTMONTH,
          },
          MM: {
            minLength: 2,
            maxLength: 2,
            name: "month",
            type: "number",
          },
          M: {
            minLength: 1,
            maxLength: 2,
            name: "month",
            type: "number",
            min: 1,
          },
          dd: {
            minLength: 2,
            maxLength: 2,
            name: "date",
            type: "number",
          },
          d: {
            minLength: 1,
            maxLength: 2,
            name: "date",
            type: "number",
            min: 1,
          },
          EEEE: {
            name: "day",
            type: "select",
            select: w(i.DAY),
          },
          EEE: {
            name: "day",
            type: "select",
            select: w(i.SHORTDAY),
          },
          HH: {
            minLength: 2,
            maxLength: 2,
            name: "hour",
            type: "number",
          },
          H: {
            minLength: 1,
            maxLength: 2,
            name: "hour",
            type: "number",
          },
          hh: {
            minLength: 2,
            maxLength: 2,
            name: "hour12",
            type: "number",
          },
          h: {
            minLength: 1,
            maxLength: 2,
            name: "hour12",
            type: "number",
          },
          mm: {
            minLength: 2,
            maxLength: 2,
            name: "minute",
            type: "number",
          },
          m: {
            minLength: 1,
            maxLength: 2,
            name: "minute",
            type: "number",
          },
          ss: {
            minLength: 2,
            maxLength: 2,
            name: "second",
            type: "number",
          },
          s: {
            minLength: 1,
            maxLength: 2,
            name: "second",
            type: "number",
          },
          sss: {
            minLength: 3,
            maxLength: 3,
            name: "millisecond",
            type: "number",
          },
          a: {
            name: "ampm",
            type: "select",
            select: i.AMPMS,
          },
          ww: {
            minLength: 2,
            maxLength: 2,
            max: 53,
            name: "week",
            type: "number",
          },
          w: {
            minLength: 1,
            maxLength: 2,
            max: 53,
            name: "week",
            type: "number",
          },
          Z: {
            name: "timezone",
            type: "static",
          },
          ZZ: {
            name: "timezone",
            type: "static",
            colon: !0,
          },
          string: {
            name: "string",
            type: "static",
          },
        },
        l = {
          year: {
            extract: function (t) {
              var e = t.getFullYear() % 1e4;
              return 0 <= e ? e : 0;
            },
            restore: function (t, e) {
              return t.setFullYear(e);
            },
            add: function (t, e) {
              return t.setFullYear(t.getFullYear() + e);
            },
            prior: 7,
          },
          yearShort: {
            extract: function (t) {
              var e = t.getFullYear() % 100;
              return 0 <= e ? e : e + 100;
            },
            restore: function (t, e) {
              return t.setFullYear(e);
            },
            add: function (t, e) {
              return t.setFullYear(t.getFullYear() + e);
            },
            prior: 7,
          },
          month: {
            extract: function (t) {
              return t.getMonth() + 1;
            },
            restore: function (t, e) {
              t.setMonth(e - 1), t.getMonth() == e && t.setDate(0);
            },
            add: function (t, e) {
              (e = t.getMonth() + e), t.setMonth(e), t.getMonth() == e + 1 && t.setDate(0);
            },
            prior: 5,
          },
          date: {
            extract: function (t) {
              return t.getDate();
            },
            restore: function (t, e, n) {
              var a = t.getMonth();
              if ((t.setDate(e), t.getMonth() != a && e <= 31)) {
                var i = n.getNodes("month");
                i &&
                  i.every(function (t) {
                    return t.empty;
                  }) &&
                  t.setDate(e);
              }
            },
            add: function (t, e, n) {
              this.restore(t, t.getDate() + e, n);
            },
            prior: 4,
          },
          day: {
            extract: function (t) {
              return t.getDay() || 7;
            },
            restore: function (t, e) {
              var n = t.getMonth(),
                a = e - (t.getDay() || 7);
              t.setDate(t.getDate() + a), t.getMonth() != n && (0 < a ? t.setDate(t.getDate() - 7) : t.setDate(t.getDate() + 7));
            },
            add: function (t, e) {
              return t.setDate(t.getDate() + e);
            },
            prior: 4,
          },
          hour: {
            extract: function (t) {
              return t.getHours();
            },
            restore: function (t, e) {
              return t.setHours(e);
            },
            add: function (t, e) {
              return t.setHours(t.getHours() + e);
            },
            prior: 2,
          },
          hour12: {
            extract: function (t) {
              return t.getHours() % 12 || 12;
            },
            restore: function (t, e) {
              (e %= 12), 12 <= t.getHours() && (e += 12), t.setHours(e);
            },
            add: function (t, e) {
              return t.setHours(t.getHours() + e);
            },
            prior: 2,
          },
          ampm: {
            extract: function (t) {
              return t.getHours() < 12 ? 1 : 2;
            },
            restore: function (t, e) {
              var n = t.getHours();
              n < 12 == 1 < e && t.setHours((n + 12) % 24);
            },
            add: function (t, e) {
              return t.setHours(t.getHours() + 12 * e);
            },
            prior: 3,
          },
          minute: {
            extract: function (t) {
              return t.getMinutes();
            },
            restore: function (t, e) {
              return t.setMinutes(e);
            },
            add: function (t, e) {
              return t.setMinutes(t.getMinutes() + e);
            },
            prior: 0,
          },
          second: {
            extract: function (t) {
              return t.getSeconds();
            },
            restore: function (t, e) {
              return t.setSeconds(e);
            },
            add: function (t, e) {
              return t.setSeconds(t.getSeconds() + e);
            },
            prior: 1,
          },
          millisecond: {
            extract: function (t) {
              return t.getMilliseconds();
            },
            restore: function (t, e) {
              return t.setMilliseconds(e);
            },
            add: function (t, e) {
              return t.setMilliseconds(t.getMilliseconds() + e);
            },
            prior: 1,
          },
          week: {
            extract: C,
            restore: function (t, e) {
              return t.setDate(t.getDate() + 7 * (e - C(t)));
            },
            add: function (t, e) {
              return t.setDate(t.getDate() + 7 * e);
            },
            prior: 6,
          },
        };
      for (var c in l) l[c].placeholder = n[c];
      var d = Object.values(s),
        u = Array.isArray(d),
        p = 0;
      for (d = u ? d : d[Symbol.iterator](); ; ) {
        var m;
        if (u) {
          if (p >= d.length) break;
          m = d[p++];
        } else {
          if ((p = d.next()).done) break;
          m = p.value;
        }
        var h = m;
        l[h.name] && t.extend(h, l[h.name]);
      }
      var f,
        g,
        v,
        y,
        D,
        k = ((g = 0 <= (f = -new Date().getTimezoneOffset()) ? "+" : "-"), (v = Math.abs(f)), (y = Math.floor(v / 60)), (D = v % 60), g + a(y, 2, 2) + a(D, 2, 2));
      function w(t) {
        var e,
          n = [];
        for (e = 1; e < t.length; e++) n.push(t[e]);
        return n.push(t[0]), n;
      }
      function T(e) {
        for (var n, a = [], i = 0; (n = o.exec(e)); )
          if (
            (n.index > i &&
              (a.push(
                t.extend(
                  {
                    value: e.substring(i, n.index),
                  },
                  s.string
                )
              ),
              (i = n.index)),
            n.index == i)
          ) {
            if (n[1])
              a.push(
                t.extend(
                  {
                    value: n[1],
                  },
                  s.string
                )
              ),
                a.push(s.sss);
            else if (n[2])
              a.push(
                t.extend(
                  {
                    value: n[2].replace("''", "'"),
                  },
                  s.string
                )
              );
            else if ("timezone" == s[n[0]].name) {
              var r = k;
              s[n[0]].colon && (r = O(r)),
                a.push(
                  t.extend(
                    {
                      value: r,
                    },
                    s[n[0]]
                  )
                );
            } else a.push(s[n[0]]);
            i = o.lastIndex;
          }
        return (
          i < e.length &&
            a.push(
              t.extend(
                {
                  value: e.substring(i),
                },
                s.string
              )
            ),
          a
        );
      }
      function C(t) {
        var e = new Date(t.getFullYear(), 0, 1),
          n = new Date(e.getTime());
        4 < n.getDay() ? n.setDate(n.getDate() + (1 - n.getDay()) + 7) : n.setDate(n.getDate() + (1 - n.getDay()));
        var a = t.getTime() - n.getTime();
        return Math.floor(a / 6048e5);
      }
      function O(t) {
        return ":" == t[3] ? t : t.substr(0, 3) + ":" + t.substr(3, 2);
      }
      function S(t) {
        return ":" != t[3] ? t : t.substr(0, 3) + t.substr(4, 2);
      }
      var x = (function () {
        function t(e) {
          r(this, t),
            (this.tp = e),
            (this.timezone = k),
            (this.timezoneNodes = this.tp.nodes.filter(function (t) {
              return "timezone" == t.token.name;
            }));
        }
        return (
          (t.prototype.parse = function (t) {
            return this.tp.parse(t), this;
          }),
          (t.prototype.getText = function () {
            return this.tp.getText();
          }),
          (t.prototype.setDate = function (t, e) {
            return (
              this.tp.setValue(
                (function (t, e) {
                  var n = (60 * +(e = S(e)).substr(1, 2) + +e.substr(3, 2)) * (e[0] + "1");
                  return new Date(t.getTime() + 60 * (n - -t.getTimezoneOffset()) * 1e3);
                })(t, this.timezone),
                e
              ),
              this
            );
          }),
          (t.prototype.getDate = function () {
            return (t = this.tp.getValue()), (e = this.timezone), (n = (60 * +(e = S(e)).substr(1, 2) + +e.substr(3, 2)) * (e[0] + "1")), new Date(t.getTime() + 60 * (-t.getTimezoneOffset() - n) * 1e3);
            var t, e, n;
          }),
          (t.prototype.setTimezone = function () {
            var t = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : k;
            if (t != this.timezone) {
              var e = this.getDate();
              this.timezone = t;
              var n = this.timezoneNodes,
                a = Array.isArray(n),
                i = 0;
              for (n = a ? n : n[Symbol.iterator](); ; ) {
                var r;
                if (a) {
                  if (i >= n.length) break;
                  r = n[i++];
                } else {
                  if ((i = n.next()).done) break;
                  r = i.value;
                }
                var o = r;
                o.token.colon ? (o.token.value = O(t)) : (o.token.value = S(t));
              }
              return this.setDate(e, !1);
            }
          }),
          (t.prototype.isEmpty = function () {
            return this.tp.isEmpty.apply(this.tp, arguments);
          }),
          (t.prototype.isInit = function () {
            return this.tp.isInit.apply(this.tp, arguments);
          }),
          (t.prototype.unset = function () {
            return this.tp.unset(), this;
          }),
          t
        );
      })();
      return function (t) {
        var e,
          n = T(i[t] || t);
        e = n.some(function (t) {
          return "yearShort" == t.name;
        })
          ? function (t) {
              return function (e) {
                t.apply(this, arguments);
                var n = e.getFullYear();
                n < 0 && e.setFullYear(n + 100);
              };
            }
          : function (t) {
              return function (e) {
                t.apply(this, arguments);
                var n = e.getFullYear();
                n < 0 && e.setFullYear(0), 9999 < n && e.setFullYear(9999);
              };
            };
        var a = n,
          r = Array.isArray(a),
          o = 0;
        for (a = r ? a : a[Symbol.iterator](); ; ) {
          var s;
          if (r) {
            if (o >= a.length) break;
            s = a[o++];
          } else {
            if ((o = a.next()).done) break;
            s = o.value;
          }
          var l = s;
          l.add && (l.add = e(l.add)), l.restore && (l.restore = e(l.restore));
        }
        var c = new b({
          tokens: n,
          value: new Date(),
          copyValue: function (t) {
            return new Date(t.getTime());
          },
        });
        return new x(c);
      };
    }
    function O(e, n, a) {
      var i = (function () {
        function e(t, n) {
          r(this, e), (this.el = t), (this.doc = n);
        }
        return (
          (e.prototype.on = function (t, e) {
            if ("input" != t) return this.el.on(t, e);
          }),
          (e.prototype.getSelection = function () {
            var e = this.el[0];
            if (this.doc.activeElement == e) {
              var n = e.selectionStart,
                a = e.selectionEnd;
              return t.isDefined(n) && t.isDefined(a)
                ? {
                    start: n,
                    end: a,
                  }
                : this.getSelectionIE();
            }
          }),
          (e.prototype.getSelectionIE = function () {
            var t = this.el[0],
              e = this.doc.selection.createRange().getBookmark(),
              n = t.createTextRange(),
              a = n.duplicate();
            n.moveToBookmark(e), a.setEndPoint("EndToStart", n);
            var i = a.text.length;
            return {
              start: i,
              end: i + n.text.length,
            };
          }),
          (e.prototype.setSelection = function (t, e) {
            var n = this.el[0];
            this.doc.activeElement == n && (n.setSelectionRange ? n.setSelectionRange(t, e) : this.setSelectionIE(t, e));
          }),
          (e.prototype.setSelectionIE = function (t, e) {
            var n = this.el[0].createTextRange();
            n.moveStart("character", t), n.collapse(), n.moveEnd("character", e - t), n.select();
          }),
          (e.prototype.val = function () {
            var t;
            return (t = this.el).val.apply(t, arguments);
          }),
          e
        );
      })();
      return {
        restrict: "A",
        require: "?ngModel",
        link: function (n, r, o, s) {
          if (!s) return !1;
          o.ngTrim = "false";
          var l,
            c = e(o.datetime),
            d = o.datetimeModel && e(o.datetimeModel),
            u = new i(r, a[0]),
            p = new T(u, c.tp, o.datetimeSeparator);
          function m(t) {
            t && !l ? ((l = !0), c.setTimezone("+0000"), d && d.setTimezone("+0000")) : !t && l && ((l = !1), c.setTimezone(), d && d.setTimezone());
          }
          function h(t) {
            c.setTimezone(t), d && d.setTimezone(t);
          }
          function f(e) {
            return !(!s.$isEmpty(e) && !s.$isEmpty(o.min)) || (t.isDate(e) || (e = d.getDate()), e >= new Date(o.min));
          }
          function g(e) {
            return !(!s.$isEmpty(e) && !s.$isEmpty(o.max)) || (t.isDate(e) || (e = d.getDate()), e <= new Date(o.max));
          }
          function v(t) {
            return s.$validate ? s.$validate() : (s.$setValidity("min", f(t)), s.$setValidity("max", g(t))), !s.$error.min && !s.$error.max;
          }
          p.on("digest", function (t) {
            "NOT_INIT" != t.code && s.$setValidity("datetime", !1);
          }),
            c.tp.on("change", function () {
              n.$evalAsync(function () {
                p.err ? s.$setValidity("datetime", !1) : (c.isInit() || c.isEmpty() ? s.$setValidity("datetime", !0) : s.$setValidity("datetime", !1), c.getText() != s.$viewValue && s.$setViewValue(c.getText()));
              });
            }),
            t.isDefined(o.datetimeUtc) && (0 < o.datetimeUtc.length ? n.$watch(o.datetimeUtc, m) : m(!0)),
            t.isDefined(o.datetimeTimezone) && (/^[+-]\d{2}:?\d{2}$/.test(o.datetimeTimezone) ? h(o.datetimeTimezone) : n.$watch(o.datetimeTimezone, h)),
            s.$validators && ((s.$validators.min = f), (s.$validators.max = g)),
            o.$observe("min", function () {
              v(c.getDate());
            }),
            o.$observe("max", function () {
              v(c.getDate());
            }),
            (s.$render = function () {}),
            (s.$isEmpty = function (t) {
              return !t || ("string" == typeof t && c.isEmpty(t));
            }),
            s.$parsers.unshift(function (e) {
              if ((t.isUndefined(e) && (e = c.getText()), !t.isString(e))) return e;
              if ((p.digest(null, e), c.isInit())) {
                var n = c.getDate();
                return s.$validate || v(n) ? (d ? d.setDate(n).getText() : new Date(n.getTime())) : void 0;
              }
            }),
            s.$formatters.push(function (e) {
              return (
                s.$setValidity("datetime", !0),
                e
                  ? (function (e) {
                      return !(!t.isDate(e) || d) || !(!t.isString(e) || !d);
                    })(e)
                    ? (d && (e = d.parse(e).getDate()), s.$validate || v(e), c.setDate(e).getText())
                    : e
                  : (c.unset(),
                    n.$evalAsync(function () {
                      s.$setViewValue(c.getText());
                    }),
                    c.getText())
              );
            });
        },
        priority: 100,
      };
    }
    t.module("datetime").factory("datetime", C), (C.$inject = ["$locale", "datetimePlaceholder"]), t.module("datetime").directive("datetime", O), (O.$inject = ["datetime", "$log", "$document"]);
  })(angular);
function tpTime() {
  return {
    scope: {
      hours: "=?",
      minutes: "=?",
      options: "=?",
    },
    controller: "tpTimeController",
    restrict: "AE",
    replace: !0,
    template:
      '<div id="time-wrapper" class="time-wrapper" ng-show="options.enabled"><div class="time-inputs-wrapper"><input type="text" ng-model="viewHours" id="hours" maxlength="2" ng-blur="onBlurHours($event)" ng-keydown="onKeyDownHours($event)" ng-keyup="onKeyUpHours($event)" /><input type="text" ng-model="viewMinutes" id="minutes" maxlength="2" ng-blur="onBlurMinutes($event)" ng-keydown="onKeyDownMinutes($event)" ng-keyup="onKeyUpMinutes($event)" /></div><div ng-show="options.timeFormat12hours" class="meridian-select-wrapper"><select ng-model="meridiem" ng-change="updateTime()" ng-options="key for (key, value) in meridiems" class="light"></select></div><div ng-show="options.showTimezone" class="timezone-wrapper">GMT {{timezone}}</div></div>',
  };
}
function tpTimeController(e, i) {
  e.options = angular.extend(
    {
      enabled: !0,
      timeFormat12hours: !0,
      minutesStep: 15,
      showTimezone: !0,
    },
    e.options
  );
  var t,
    n,
    o,
    r = i.trc("publisher.dashboard", "AM"),
    s = i.trc("publisher.dashboard", "PM");
  if (e.options.enabled) {
    var u,
      m = new Date();
    (e.meridiems = {}), (e.meridiems[r] = 1), (e.meridiems[s] = 2);
    var p,
      d,
      a = 46,
      c = 8,
      l = 9,
      v = 37,
      h = 38,
      f = 39,
      w = 40,
      g = 16,
      k = 48,
      y = 57,
      T = void 0 !== e.hours ? e.hours : m.getHours(),
      b = void 0 !== e.minutes ? e.minutes : m.getMinutes(),
      M = e.options.timeFormat12hours ? 12 : 24,
      H = 60,
      W = e.options.minutesStep,
      $ = !1;
    e.$on("time-updated", function (e, i) {
      (T = i.hours), (b = i.minutes), C();
    }),
      C(),
      (e.onKeyDownHours = function (i) {
        O(i), isNaN(e.viewHours) || "" === e.viewHours || (p = e.viewHours);
        switch (i.keyCode) {
          case h:
            x();
            break;
          case w:
            z();
        }
      }),
      (e.onKeyUpHours = function (i) {
        I(i),
          (function (i) {
            var t = K(e.viewHours, p),
              n = i.which || i.keyCode;
            e.options.timeFormat12hours && 0 === t && (e.viewHours = M);
            A("hours", t) && (e.viewHours = F(t));
            (t > M || S(p, n)) && (e.viewHours = "");
            t === M &&
              (e.viewHours = (function (i) {
                return i !== M || e.options.timeFormat12hours ? i : F(0);
              })(M));
          })(i),
          B(),
          V(i);
      }),
      (e.onKeyDownMinutes = function (i) {
        O(i), isNaN(e.viewMinutes) || "" === e.viewMinutes || (d = e.viewMinutes);
        switch (i.keyCode) {
          case h:
            (t = K(e.viewMinutes, d)), (t += W || 1) > H - 1 ? (x(), (e.viewMinutes = F(t - H))) : (e.viewMinutes = F(t));
            break;
          case w:
            !(function () {
              var i = K(e.viewMinutes, d);
              (i -= W || 1) < 0 ? (z(), (e.viewMinutes = F(i + H))) : (e.viewMinutes = F(i));
            })();
        }
        var t;
      }),
      (e.onKeyUpMinutes = function (i) {
        I(i),
          (function (i) {
            var t = parseInt(e.viewMinutes, 10),
              n = i.which || i.keyCode;
            A("minutes", t) && (e.viewMinutes = F(t));
            (t > H || S(d, n)) && (e.viewMinutes = "");
          })(i),
          B(),
          V(i);
      }),
      (e.onBlurHours = function () {
        var i = parseInt(e.viewHours, 10),
          t = e.options.timeFormat12hours ? 12 : 23;
        !isNaN(e.viewHours) && i > t && (N(t), (e.hours = t));
      }),
      (e.onBlurMinutes = function () {
        var i = parseInt(e.viewMinutes, 10);
        !isNaN(e.viewHours) && i > 59 && ((e.viewMinutes = F(59)), (e.minutes = 59));
      }),
      (e.updateTime = B),
      (e.timezone = ((t = m.getTimezoneOffset()), (n = Math.abs(t)), (o = Math.floor(n / H)), (t < 0 ? "+" : "-") + o));
  }
  function C() {
    N(T), (e.viewMinutes = F(b)), (e.hours = parseInt(T, 10)), (e.minutes = parseInt(b, 10));
  }
  function N(i) {
    if (e.options.timeFormat12hours) {
      var t = angular.copy(
        (function (i) {
          var t = i,
            n = e.meridiems[r];
          i > 12 && (t = i - 12);
          i >= 12 && (n = e.meridiems[s]);
          0 === i && (t = 12);
          return [t, n];
        })(i)
      );
      (e.viewHours = F(t[0])), (e.meridiem = t[1]);
    } else e.viewHours = F(i);
  }
  function F(e) {
    return 1 === e.toString().length ? "0" + e : e;
  }
  function x() {
    (u = K(e.viewHours, p)), e.options.timeFormat12hours ? (u === M - 1 && (e.meridiem = D()), u >= M && (u = 0)) : u === M - 1 && (u = -1), (e.viewHours = F(u + 1));
  }
  function z() {
    (u = K(e.viewHours, p)), e.options.timeFormat12hours ? (u === M && (e.meridiem = D()), u <= 1 && (u = M + 1)) : u <= 0 && (u = M), (e.viewHours = F(u - 1));
  }
  function D() {
    return e.meridiem === e.meridiems[r] ? e.meridiems[s] : e.meridiems[r];
  }
  function K(e, i) {
    var t = parseInt(e, 10);
    return (isNaN(t) || "" === t) && (t = parseInt(i, 10)), t;
  }
  function V(e) {
    switch (e.which || e.keyCode) {
      case v:
      case f:
        e.preventDefault(), e.stopPropagation();
    }
  }
  function I(e) {
    (e.which || e.keyCode) === g && ($ = !1);
  }
  function S(e, i) {
    return e < 10 && (i === c || i === a);
  }
  function A(i, t) {
    return "hours" === i ? 1 === t.toString().length && (e.options.timeFormat12hours ? t > 1 : t > 2 || 0 === t) : 1 === t.toString().length && t > 5;
  }
  function O(e) {
    var i = e.which || e.keyCode;
    ((i < k && i != l && i != c && i != v && i != f && i != a) || i > y || ($ && i != v && $ && i != f)) && e.preventDefault(), i === g && ($ = !0);
  }
  function B() {
    var i = K(e.viewHours, p),
      t = K(e.viewMinutes, d);
    (e.hours = (function (i) {
      var t = i;
      ((e.meridiem === e.meridiems[r] && i > 12) || (e.meridiem === e.meridiems[r] && 12 === i)) && (t = i - 12);
      e.meridiem === e.meridiems[s] && i < 12 && (t = i + 12);
      return t;
    })(i)),
      (e.minutes = t);
  }
}
function tpTimepicker(e, i, t, n) {
  return {
    scope: {
      time: "=?",
      options: "=?",
    },
    link: function (o, r, s) {
      function u() {
        o.$apply(function () {
          o.closeWidget();
        });
      }
      function m(e) {
        switch (e.keyCode) {
          case 27:
            o.$apply(function () {
              o.closeWidget();
            });
        }
      }
      (o.texts = {
        title: n.trc("publisher.dashboard", "Set time"),
        apply: n.trc("publisher.dashboard", "Apply"),
        cancel: n.trc("publisher.dashboard", "Cancel"),
      }),
        (o.model = {
          openWidget: !1,
        }),
        (o.model.openWidget = !1),
        "undefined" != typeof moment ? (o.model.time = moment(o.time).zone(0)) : (o.model.time = o.model.time.utc().valueOf()),
        (o.tpTimeValues = {
          hours: o.model.time.hour(),
          minutes: o.model.time.minutes(),
        }),
        o.$broadcast("time-updated", o.tpTimeValues),
        (o.showWidget = function () {
          (o.model.openWidget = !o.model.openWidget),
            o.model.openWidget &&
              (t(function () {
                var t = r.find(".tp-timepicker-wrapper"),
                  n = r.find(".tp-timepicker");
                n.offset().left + n.innerWidth() / 2 < t.innerWidth() / 2
                  ? t.offset({
                      left: 20,
                    })
                  : n.offset().left + t.innerWidth() / 2 + n.innerWidth() / 2 > e.innerWidth
                  ? t.offset({
                      left: e.innerWidth - t.innerWidth() - 20,
                    })
                  : t.offset({
                      left: n.offset().left + n.innerWidth() / 2 - t.innerWidth() / 2,
                    }),
                  i.bind("click", u),
                  i.bind("keyup", m);
              }, 10),
              o.$broadcast("time-updated", o.tpTimeValues));
        }),
        (o.closeWidget = function () {
          (o.model.openWidget = !1), i.unbind("click", u), i.unbind("keyup", m);
        }),
        (o.setNewTime = function () {
          o.model.time.hour(o.tpTimeValues.hours), o.model.time.minutes(o.tpTimeValues.minutes), (o.time = o.model.time.utc().valueOf()), o.closeWidget(), o.$broadcast("time-updated", o.tpTimeValues);
        }),
        r.find(".tp-timepicker-wrapper").click(function (e) {
          e.stopPropagation();
        });
    },
    controller: [
      "$scope",
      function (e) {
        e.tpTimeOptions = {
          showTimezone: !1,
        };
      },
    ],
    restrict: "AE",
    template: '<div class="tp-timepicker">   <div class="tp-timepicker-handler" ng-click="showWidget()">      {{model.time | tpDateMoment:"hh:mm A":0}}   </div>   <div ng-hide="!model.openWidget" class="tp-timepicker-wrapper">       <div class="tp-timepicker-header">{{texts.title}}</div>       <div class="tp-timepicker-body"><tp-time hours="tpTimeValues.hours" minutes="tpTimeValues.minutes" options="tpTimeOptions"></tp-time></div>       <div class="tp-timepicker-footer"><div class="tp-timepicker-footer-btn tp-timepicker-btn-cancel" ng-click="closeWidget()">{{texts.cancel}}</div><div class="tp-timepicker-footer-btn tp-timepicker-btn-apply" ng-click="setNewTime()">{{texts.apply}}</div></div>   </div></div>',
  };
}
angular.module("tp.ui.timepicker", []).directive("tpTime", tpTime).controller("tpTimeController", tpTimeController).directive("tpTimepicker", tpTimepicker), (tpTimeController.$inject = ["$scope", "lang"]), (tpTimepicker.$inject = ["$window", "$document", "$timeout", "lang"]);
angular
  .module("authModule", [])
  .factory("auth", [
    function () {
      return {};
    },
  ])
  .directive("authComponent", [
    function () {
      return {};
    },
  ])
  .directive("authCustomLogin", [
    function () {
      return {};
    },
  ])
  .directive("authState", [
    function () {
      return {};
    },
  ]);
angular.module("condeProviderModule", []).factory("condeProvider", [
  function () {
    return {};
  },
]);
angular
  .module("pianoIdProviderModule", ["generalModule"])
  .factory("pianoIdProvider", [
    "$sce",
    "$window",
    "$q",
    "lang",
    "errorService",
    "eventService",
    "ngEventService",
    "userService",
    "containerService",
    function (e, i, r, t, n, o, s, a, d) {
      function c(e) {
        const i = getParameterByName("sss_mode"),
          r = getParameterByName("sss_callback_url"),
          t = getParameterByName("sss_origin_url");
        i && r && t && ((e.sss_mode = i), (e.sss_callback_url = r), (e.sss_origin_url = t));
      }
      var u = !1;
      let l = null,
        m = null;
      var g,
        f,
        p,
        h,
        v = {},
        P = {},
        w = {};
      function b(e, i) {
        g = i || g;
        var r = e.find("iframe")[0];
        r &&
          o.customPostMessage(
            "lang",
            {
              lang: g,
            },
            p,
            r.contentWindow
          );
      }
      function I(e, i) {
        if (0 !== e.height) {
          var r = {
              height: e.height + "px",
            },
            t = i.find("#piano-id-container, iframe");
          e.animate ? t.animate(r, 200) : t.css(r), d.resize();
        }
      }
      function S(e) {
        var i = e.parent(),
          r = e.find("iframe"),
          t = {
            width: i.width(),
            center: d.getCenterScreen(),
            originUrl: d.getOriginUrl(),
          };
        o.customPostMessage("resize", t, p, r[0].contentWindow), b(e);
      }
      function k(e, i, r) {
        var t = {
            trackingId: i,
            formName: r,
          },
          n = {
            event: e.event,
            params: $.extend({}, e.params, t),
            iframeId: getParameterByName("iframeId"),
          };
        o.postMessage("pianoIdEvent", n);
      }
      return (
        (P.init = function (e) {
          (v = e),
            P.setOrigin(v.pianoIdUrl),
            (w = {
              aid: v.aid,
              checkout: v.checkout,
              customFormParams: v.customFormParams,
              isPasswordlessCheckoutEnabled: v.isPasswordlessCheckoutEnabled(),
              isPreventPasswordlessLogin: v.isPreventPasswordlessLogin,
              isSingleStepEnabled: v.isSingleStepEnabled(),
              affiliateIssuerId: v.getAffiliateIssuerId(),
              userLoginEmail: v.userLoginEmail,
              passwordlessSetPaymentEmail: v.passwordlessSetPaymentEmail,
              isSentLoginEmail: v.isSentLoginEmail,
              isSingleStepFormShown: function () {
                return !!h && v.isSingleStepFormShown(h);
              },
              getUserToken: v.getUserToken,
              getPageView: v.getPageView,
              isGmSso: v.isGmSso || !1,
              gmSsoCachedUserToken: v.gmSsoCachedUserToken || "",
              gmSsoCachedUserTokenType: v.gmSsoCachedUserTokenType || "",
            });
        }),
        (P.setStage = function (e) {
          l = e;
        }),
        (P.getStage = function () {
          return l;
        }),
        (P.setPreloaderHeight = function (e) {
          m = e;
        }),
        (P.getPreloaderHeight = function () {
          return m;
        }),
        (P.setViewCtrl = function (e) {
          h = e;
        }),
        (P.getWidgetOptions = function () {
          return v;
        }),
        (P.setOrigin = function (e) {
          var i;
          p = 0 === (i = f = e).indexOf("http") ? i : document.location.origin || document.location.href;
        }),
        (P.register = function () {}),
        (P.login = function () {}),
        (P.resetPassword = function () {}),
        (P.isNewUser = function () {
          return u;
        }),
        (P.setupDoubleOptInParams = function (e, i) {
          return (
            v.getDoubleOptInParams &&
            v.getDoubleOptInParams().then(function (r) {
              var t = e.find("iframe")[0];
              if (t) {
                var n = {
                  tbc: r.tbc,
                  termId: r.params.termId,
                  showOfferParams: JSON.stringify(r.params),
                  trackingId: r.trackingId,
                };
                o.customPostMessage("setupDoubleOptInParams", n, i, t.contentWindow);
              }
            })
          );
        }),
        (P.authPianoIdController = function (r, l) {
          (r.id = "piano-id-" + _randomString(5)),
            t.on(function (e) {
              b(l, e);
            });
          var m = w.customFormParams;
          (r.formName = m().formName), T(), (r.error_msg = t.trc("checkout.platform", "You should sign in or sign up first"));
          var h = s.subscribe(r.id + "-loginSuccess", function (e, i) {
              !(function (e, i) {
                var r = i.user;
                (r.firstName = r.given_name), (r.lastName = r.family_name), (r.valid = !0), (r.confirmed = !(i.user && i.user.email_confirmation_required)), (r.uid = r.sub), (u = !!i.registration);
                var t = d.getOriginUrl();
                a.checkUser({
                  aid: e,
                  url: t,
                  userToken: i.token,
                  fromUserIdentity: !0,
                })
                  .then(function (e) {
                    return e.models.token_list;
                  })
                  .catch(function () {
                    return null;
                  })
                  .then(function (e) {
                    a.onExternalLogin({
                      token_list: e,
                      cookie_domain: i.cookie_domain,
                      user_token: i.token,
                      params: i.user,
                      user: r,
                      registration: u,
                      extendExpiredAccessEnabled: i.extendExpiredAccessEnabled,
                      stage: i.stage,
                    });
                  });
              })(w.aid, i);
            }),
            _ = s.subscribe(r.id + "-resize", function (e, i) {
              I(i, l);
            }),
            E = s.subscribe(r.id + "-customEvent", function (e, i) {
              o.customEvent("customEvent", i);
            }),
            C = s.subscribe(r.id + "-loginResponse", function (e, i) {
              s.fire("pianoIdSingleStepLoginResponse", i);
            }),
            U = s.subscribe("submitPianoIdLoginForm", function () {
              var e = l.find("iframe");
              o.customPostMessage("submitLoginForm", null, p, e[0].contentWindow);
            }),
            V = s.subscribe("updatePianoIdAuthIframeUrl", function () {
              T();
            }),
            y = s.subscribe(r.id + "-loaded", function (e, i) {
              S(l), P.setupDoubleOptInParams(l, p);
            }),
            N = s.subscribe(r.id + "-pianoIdEvent", function (e, i) {
              "passwordlessEmailSent" === i.event && v.passwordlessEmailSentHandler(i.params.loginTokenId), "successDOI" === i.event && (a.getConfig().user.confirmed = !0), k(i, m().trackingId, i.params.formName);
            }),
            F = {
              preventExternalLogin: !0,
            };
          function T() {
            var t,
              n,
              o,
              s,
              u = w.isGmSso ? f + "gm-sso" : f,
              l =
                ((t = u),
                (n = r.id),
                (o = d.rootElement.width()),
                (s = {
                  aid: w.aid,
                  checkout: w.checkout,
                  template: w.template,
                  sender: n,
                  origin: document.location.origin || document.location.href,
                  width: o,
                  lang: g || "",
                  stage: P.getStage() || w.affiliateIssuerId,
                  site: i.TPParam.params.url,
                  screen: w.isGmSso && w.gmSsoCachedUserToken ? "sso_confirm_before" : a.isUserValid() && !a.isUserConfirmed() ? "email_is_not_confirmed" : w.isSentLoginEmail() ? "passwordless_confirmation" : w.isPasswordlessCheckoutEnabled ? "login" : "register",
                  create_passwordless_user: w.isPasswordlessCheckoutEnabled && !w.isPreventPasswordlessLogin(),
                  single_step: w.isSingleStepFormShown(),
                  display_mode: "inline",
                  tbc: w.getPageView && w.getPageView().tbc,
                  page_view_id: w.getPageView && w.getPageView().pageViewId,
                  tracking_id: w.customFormParams().trackingId,
                }),
                w.gmSsoCachedUserToken && ((s.access_token = w.gmSsoCachedUserToken), (s.token_type = w.gmSsoCachedUserTokenType)),
                P.getPreloaderHeight() && (s.preloader_height = P.getPreloaderHeight()),
                r.formName ? (s.form_name = r.formName) : w.userLoginEmail() && ((s.email = w.userLoginEmail()), w.passwordlessSetPaymentEmail()),
                c(s),
                [t, $.param(s)].join("?"));
            r.url = e.trustAsResourceUrl(l);
          }
          a.getConfig().fillLoginRequiredEventParams(F),
            o.loginRequiredEvent(F),
            (r.unsubscribeNgEventService = function () {
              h(), _(), E(), C(), U(), V(), y(), N(), n(r).reset();
            });
        }),
        (P.formPianoIdController = function (i, n) {
          var a,
            c = r.defer(),
            u = !1;
          (i.isFormHidden = !0), (i.id = "piano-id-" + _randomString(5));
          var l = w.customFormParams;
          (i.formName = l().formName),
            (i.hideIfComplete = l().hideCompletedFields),
            t.on(function (e) {
              b(n, e);
            });
          var m = (function (e, r) {
              var t = d.rootElement.width(),
                n = {
                  form_name: i.formName,
                  hide_if_complete: i.hideIfComplete,
                  aid: w.aid,
                  checkout: w.checkout,
                  sender: r,
                  origin: document.location.origin || document.location.href,
                  width: t,
                  lang: g || "",
                  stage: P.getStage() || w.affiliateIssuerId,
                  access_token: w.getUserToken(),
                  passwordless: w.isPasswordlessCheckoutEnabled,
                  tbc: w.getPageView || w.getPageView().tbc,
                  page_view_id: w.getPageView || w.getPageView().pageViewId,
                };
              P.getPreloaderHeight() && (n.preloader_height = P.getPreloaderHeight());
              return [e, $.param(n)].join("?");
            })(f + "form", i.id),
            h = s.subscribe(i.id + "-profileUpdated", function (e, i) {
              (u = !0), a && a.resolve(!0);
            }),
            v = s.subscribe(i.id + "-change", function (e, i) {
              u = !1;
            }),
            _ = s.subscribe(i.id + "-profileUpdatedError", function (e, i) {
              (u = !1), a && a.resolve(!1);
            }),
            E = s.subscribe(i.id + "-pianoIdEvent", function (e, r) {
              "cfFormImpression" === r.event &&
                i.$apply(function () {
                  i.isFormHidden = !1;
                }),
                k(r, l().trackingId, r.params.formName);
            }),
            C = s.subscribe(i.id + "-resize", function (e, i) {
              I(i, n);
            }),
            U = s.subscribe(i.id + "-loaded", function (e, i) {
              S(n), c.resolve();
            }),
            V = s.subscribe(i.id + "-stateReady", function (e, i) {
              var r = n.find("iframe");
              o.customPostMessage("setToken", w.getUserToken(), p, r[0].contentWindow);
            });
          (i.url = e.trustAsResourceUrl(m)),
            (i._isValid = function () {
              return c.promise.then(function () {
                if (i.isFullFilled || u) return !0;
                var e = n.find("iframe");
                return u || ((a = r.defer()), o.customPostMessage("submit", {}, p, e[0].contentWindow)), a.promise;
              });
            }),
            (i.unsubscribeNgEventService = function () {
              h(), v(), _(), E(), C(), U(), V();
            });
        }),
        (P.emailConfirmationRequiredController = function (r, n) {
          (r.id = "piano-id-" + _randomString(5)),
            t.on(function (e) {
              b(n, e);
            });
          var o = (function (e, r) {
            var t = d.rootElement.width(),
              n = {
                aid: w.aid,
                sender: r,
                origin: document.location.origin || document.location.href,
                site: i.TPParam.params.url,
                screen: "email_confirmation_required",
                checkout: w.checkout,
                width: t,
                lang: g || "",
                passwordless: w.isPasswordlessCheckoutEnabled,
                stage: P.getStage() || w.affiliateIssuerId,
                access_token: w.getUserToken(),
                tbc: w.getPageView || w.getPageView().tbc,
                page_view_id: w.getPageView || w.getPageView().pageViewId,
              };
            c(n), P.getPreloaderHeight() && (n.preloader_height = P.getPreloaderHeight());
            return [e, $.param(n)].join("?");
          })(f, r.id);
          r.url = e.trustAsResourceUrl(o);
          var a = w.customFormParams,
            u = s.subscribe(r.id + "-resize", function (e, i) {
              I(i, n);
            }),
            l = s.subscribe(r.id + "-loaded", function () {
              S(n), P.setupDoubleOptInParams(n, p);
            }),
            m = s.subscribe(r.id + "-pianoIdEvent", function (e, i) {
              k(i, a().trackingId);
            });
          r.$on("$destroy", function () {
            u(), l(), m();
          });
        }),
        P
      );
    },
  ])
  .directive("pianoId", [
    "userService",
    "pianoIdProvider",
    "$injector",
    function (e, i, r) {
      return {
        restrict: "EA",
        require: "?^view",
        template: '<div id="piano-id-container">  <auth-piano-id ng-if="authIsExist()"></auth-piano-id>  <form-piano-id ng-if="formIsExist()"></form-piano-id></div>',
        link: function (t, n, o, s) {
          var a;
          let d = !!o.stage,
            c = null;
          try {
            a = r.get("viewService");
          } catch (e) {}
          (t.formIsExist = function () {
            return e.isUserValid() && !i.isNewUser() && i.getWidgetOptions().widgetSpecificCheckIfVisible();
          }),
            (t.authIsExist = function () {
              return (!s || a.isActive(s.stateName)) && !(e.isUserValid() && e.isUserConfirmed()) && (!d || (d && c));
            }),
            (t.isUserValid = e.isUserValid),
            i.setPreloaderHeight(o.preloaderHeight),
            d &&
              t.$watch(o.stage, function (e) {
                (c = e), i.setStage(c);
              });
        },
      };
    },
  ])
  .directive("emailConfirmationRequired", [
    "pianoIdProvider",
    "$injector",
    function (e, i) {
      return {
        restrict: "EA",
        scope: {},
        require: "^view",
        template: '<iframe id="{{id}}" ng-src="{{url}}" style="width:100%;"></iframe>',
        link: function (r, t, n, o) {
          var s;
          try {
            s = i.get("viewService");
          } catch (e) {}
          s.isActive(o.stateName) ? (o && e.setViewCtrl(o), e.emailConfirmationRequiredController(r, t)) : t.remove();
        },
      };
    },
  ])
  .directive("authPianoId", [
    "pianoIdProvider",
    "errorService",
    function (e, i) {
      return {
        restrict: "EA",
        scope: {},
        require: "?^view",
        template: '<iframe id="{{id}}" ng-src="{{url}}" style="width:100%;"></iframe>',
        link: function (r, t, n, o) {
          var s = e.getWidgetOptions();
          o &&
            (e.setViewCtrl(o),
            "auth" !== o.stateName &&
              (o.registerComponentController(r, {
                passwordlessLoginForm: s.isPasswordlessCheckoutEnabled,
              }),
              (r._isValid = function () {
                return i(r).reset(), !!s.isSingleStepEnabled() || (i(r).global(r.error_msg), !1);
              }),
              r.$on("$destroy", function () {
                o.unregisterComponentController(r);
              }))),
            e.authPianoIdController(r, t);
        },
      };
    },
  ])
  .directive("formPianoId", [
    "pianoIdProvider",
    function (e) {
      return {
        restrict: "EA",
        require: "?^view",
        scope: {},
        template: '<iframe ng-hide="isFormHidden" id="{{id}}" ng-src="{{url}}" style="width:100%;"></iframe>',
        link: function (i, r, t, n) {
          if (n) {
            if ((e.setViewCtrl(n), "auth" === n.stateName)) return void r.remove();
            n.registerComponentController(i);
          }
          i.$on("$destroy", function () {
            (i.isFullFilled = !0), n && n && n.unregisterComponentController(i);
          }),
            e.formPianoIdController(i, r);
        },
      };
    },
  ]);
("use strict");
angular.module("creditRedemptionModule", ["generalModule"]).factory("creditRedemptionService", [
  "eventService",
  "userService",
  function (e, t) {
    const i = {
      affiliateState: {},
    };
    function n() {
      return i.affiliateState && i.affiliateState.creditStates && i.affiliateState.creditStates.length > 0 ? i.affiliateState.creditStates[0] : null;
    }
    return (
      (i.setAffiliateState = function (e) {
        i.affiliateState = e;
      }),
      (i.credits = function () {
        const e = n();
        return e ? e.total - e.spent : 0;
      }),
      (i.creditsTotal = function () {
        const e = n();
        return e ? e.total : 0;
      }),
      (i.creditExpirationTime = function () {
        const e = n();
        let t = null,
          i = new Date();
        return (
          e &&
            (t = (function (e) {
              let t = null;
              return e && e.length
                ? (e.forEach(function (e) {
                    (!t || t.exp > e.exp) && (t = e);
                  }),
                  t)
                : t;
            })(e.redeemedItems)),
          t && t.exp && (i = new Date(1e3 * t.exp)),
          i
        );
      }),
      (i.redeemCredit = function () {
        const t = n();
        t &&
          e.postMessage("redeemCredit", {
            cid: t.cid,
            itemId: i.affiliateState.redemptionCandidateItemId,
            newRedemptionMethod: i.redemptionMethod(),
          });
      }),
      (i.toggleRedemptionMethod = function () {
        const e = n();
        e && (e.redemptionMethod = "A" === e.redemptionMethod ? "M" : "A");
      }),
      (i.redemptionMethod = function () {
        const e = n();
        return e ? e.redemptionMethod : null;
      }),
      (i.setupScope = function (e) {
        (e.affiliateState = i.affiliateState), (e.credits = i.credits), (e.creditsTotal = i.creditsTotal), (e.creditExpirationTime = i.creditExpirationTime), (e.redeemCredit = i.redeemCredit), (e.toggleRedemptionMethod = i.toggleRedemptionMethod), (e.redemptionMethod = i.redemptionMethod);
      }),
      i
    );
  },
]);
angular.module("datesModule", []).service("dateUtils", [
  function () {
    return {};
  },
]);
angular
  .module("country.selector", [])
  .directive("dynamicHtml", [
    function () {
      return {};
    },
  ])
  .directive("tpCallingCodeSelector", [
    function () {
      return {};
    },
  ])
  .directive("tpCountrySelector", [
    function () {
      return {};
    },
  ])
  .factory("CountrySelectorCtrl", [
    function () {
      return {};
    },
  ])
  .directive("tpStateSelector", [
    function () {
      return {};
    },
  ])
  .factory("StateSelectorCtrl", [
    function () {
      return {};
    },
  ]);
angular.module("billing.address", []).directive("billingAddressComponent", [
  function () {
    return {};
  },
]);
var passwordless = angular.module("passwordlessModule", ["checkoutModule"]);
passwordless.factory("passwordlessService", [
  "tpHTTP",
  "ngEventService",
  "viewService",
  "containerService",
  "userService",
  "eventService",
  "$q",
  "errorService",
  "$rootScope",
  "lang",
  "$window",
  "checkoutGoTo",
  function (e, t, n, o, r, a, s, i, c, p, l, d) {
    var u,
      m,
      f = {
        email: "",
        error: "",
      };
    function g(e, n) {
      i(c).reset(), (m.config.isSentLoginEmail = !1), (m.config.preventPasswordlessLogin = !1), t.fire("submitPianoIdLoginForm");
      var o = t.subscribe("pianoIdSingleStepLoginResponse", function (t, r) {
        o(), r.loggedIn || r.userCreated || (r.usual_user ? i(c).global(p.tr("Enter your password, please")) : r.email_sent && ((m.config.isSentLoginEmail = !0), (m.config.preventPasswordlessLogin = !0), d.gotoAuthState(e)), n.reject());
      });
    }
    function h(l) {
      if (0 === f.email.length) return i(c).global(p.trc("checkout.platform", "Email format is not valid")), l.reject(), l.promise;
      var d = t.subscribe("gigyaHide", function (e, t) {
        d(), t.afterLogin || l.reject();
      });
      m.getDoubleOptInParams()
        .then(function (e) {
          return {
            tbc: e.tbc,
            pageViewId: e.pageViewId,
            termId: e.params.termId,
            showOfferParams: JSON.stringify(e.params),
            trackingId: e.trackingId,
            url: o.getOriginUrl(),
          };
        })
        .then(function (t) {
          return (function (t) {
            var o = {
              aid: TPParam.params.aid,
              email: f.email,
              "g-recaptcha-response": u,
            };
            return (
              Object.assign(o, t),
              (f.error = ""),
              e
                .post(TPParam.LOGIN_PASSWORDLESS_USER, o)
                .then(function (e) {
                  var t,
                    o = e.models.user || {};
                  "auth" === n.getActiveState() && n.viewStack.pop(),
                    o.userExist
                      ? ((t = o.sentLoginEmail),
                        (m.config.isExistPasswordlessUser = !0),
                        r.isPianoIdUserProvider()
                          ? (m.config.isSentLoginEmail = t)
                          : r.isGigyaUserProvider()
                          ? (r.onLoginSuccess(function () {
                              P();
                            }, !0),
                            r.login())
                          : util.log("[PASSWORDLESS] Unsupported user provider"))
                      : (function (e) {
                          if (r.isPianoIdUserProvider()) {
                            var t = {};
                            Object.assign(t, e.userModel, {
                              rememberMe: !1,
                            }),
                              r
                                .onExternalLogin({
                                  token_list: e.tokenList,
                                  cookie_domain: e.cookieDomain,
                                  user_token: e.accessToken,
                                  user: t,
                                  params: t,
                                  registration: !0,
                                })
                                .then(function () {
                                  P();
                                });
                          } else
                            r.isGigyaUserProvider()
                              ? (r.onLoginSuccess(function () {
                                  P();
                                }, !0),
                                a.gigyaPasswordlessLoginEvent({
                                  accessTokenName: e.accessToken,
                                  accessToken: e.accessToken,
                                }))
                              : util.log("[PASSWORDLESS] Unsupported user provider");
                        })(o);
                })
                .catch(function (e) {
                  return (f.error = e && e.errors && e.errors.length && e.errors[0].msg), "auth" !== n.getActiveState() && i(c).global(f.error), s.reject(f.error);
                })
            );
          })(t);
        })
        .catch(function () {
          l.reject();
        });
    }
    function P() {
      m.reload();
    }
    return {
      data: f,
      onCaptchaResolve: function (e) {
        u = e;
      },
      onCaptchaReady: function (e) {
        e;
      },
      loginUser: function (e) {
        m = e;
        var t = s.defer(),
          o = r.isGigyaUserProvider() && m.isPasswordlessCheckoutEnabled() && !r.isUserValid(),
          a = r.isPianoIdUserProvider() && m.isSingleStepEnabled() && !r.isUserValid();
        return (
          (o || a) && n.isPasswordlessFormState(n.getActiveState())
            ? ((function (e) {
                m.onUserChanged().then(function (t) {
                  t && e.resolve();
                });
              })(t),
              (function (e, t, n, o) {
                n ? g(e, t) : o && h(t);
              })(e, t, a, o))
            : t.resolve(),
          t.promise
        );
      },
      saveCheckoutParams: function (t, n) {
        t.getDoubleOptInParams()
          .then(function (o) {
            (o.paymentMethodNonce = t.input.paymentMethodNonce || ""),
              (o.paymentMethodInstrumentId = t.input.paymentMethodInstrumentId || ""),
              (function (t, n, o) {
                var r = {
                  loginTokenId: t,
                  oid: n.params.oid,
                  termId: n.params.termId,
                  tbc: n.tbc,
                  nonce: n.paymentMethodNonce,
                  instrumentId: n.paymentMethodInstrumentId,
                  showOfferParams: JSON.stringify(n.params),
                };
                (function (e, t) {
                  e.input && "boolean" == typeof e.input.areTaxesCalculated && (t.areTaxesCalculated = e.input.areTaxesCalculated);
                })(o, r),
                  (function (e, t) {
                    "boolean" == typeof t.areTaxesCalculated ? (t.autoComplete = !(!e.paymentMethodNonce && !e.paymentMethodInstrumentId && t.areTaxesCalculated)) : (t.autoComplete = !(!e.paymentMethodNonce && !e.paymentMethodInstrumentId));
                  })(n, r),
                  e({
                    method: "post",
                    url: l.TPParam.SAVE_CHECKOUT_PARAMS,
                    data: r,
                  });
              })(n, o, t);
          })
          .catch(function (e) {
            console.error(e);
          });
      },
      updatePianoIdIframe: function () {
        t.fire("updatePianoIdAuthIframeUrl");
      },
      setPaymentEmail: function (e, t) {
        e.config.userLoginEmail = t || "";
      },
    };
  },
]),
  passwordless.directive("passwordlessSingleStepCaptcha", function () {
    return {
      restrict: "A",
      require: "^view",
      templateUrl: "/widget/checkout/component/partials/passwordless-single-step-captcha.html",
      scope: {},
      controller: [
        "$scope",
        "passwordlessService",
        "checkout",
        "userService",
        function (e, t, n, o) {
          angular.extend(e, BaseComponentController),
            (e.data = t.data),
            (e.recaptchaKey = TPParam.RECAPTCHA_SITE_KEY),
            (e.onCaptchaResolve = t.onCaptchaResolve),
            (e.onCaptchaReady = t.onCaptchaReady),
            (e.isCaptchaVerificationRequired = function () {
              return n.isSingleStepEnabled() && n.config.passwordlessCaptchaEnabled && !o.isUserValid();
            });
        },
      ],
      link: function (e, t, n, o) {
        o.registerComponentController(e),
          o.extendScope(e),
          t.on("$destroy", function () {
            o.unregisterComponentController(e);
          });
      },
    };
  }),
  passwordless.directive("passwordlessLogin", function () {
    return {
      restrict: "A",
      require: "^view",
      templateUrl: "/widget/checkout/component/partials/passwordless-login.html",
      scope: {},
      controller: [
        "$scope",
        "passwordlessService",
        "checkout",
        "viewService",
        function (e, t, n, o) {
          angular.extend(e, BaseComponentController),
            (e.data = t.data),
            (e.recaptchaKey = TPParam.RECAPTCHA_SITE_KEY),
            (e.onCaptchaResolve = t.onCaptchaResolve),
            (e.onCaptchaReady = t.onCaptchaReady),
            (e.isSingleStepEnabled = function () {
              return n.isSingleStepEnabled() && "auth" !== o.getActiveState();
            }),
            (e.loginUser = function () {
              return n.passwordlessServiceLogin();
            });
        },
      ],
      link: function (e, t, n, o) {
        o.registerComponentController(e, {
          passwordlessLoginForm: !0,
        }),
          o.extendScope(e);
      },
    };
  }),
  passwordless.directive("passwordlessPaymentMethods", function () {
    return {
      restrict: "A",
      template: '<div ng-if="isUsedForTerm(paymentMethodIds.applePayBt)" class="pn-passwordless-offer-boilerplate__applepay-btn" apple-pay-through-braintree-form-component term-id="{{termId}}"></div>\n<new-flow-components-c-h ng-if="isUsedForTerm(paymentMethodIds.applePayStripe)" payment-source="paymentMethodIds.applePayStripe" term-id="{{termId}}" class="pn-passwordless-offer--applepay-button-container"></new-flow-components-c-h>\n<new-flow-components-c-h ng-if="isUsedForTerm(paymentMethodIds.applePayPayWay)" payment-source="paymentMethodIds.applePayPayWay" term-id="{{termId}}" class="pn-passwordless-offer--applepay-button-container"></new-flow-components-c-h>',
      scope: {
        termId: "@",
      },
      controller: [
        "$scope",
        "checkout",
        function (e, t) {
          e.paymentMethodIds = {
            applePayBt: APPLE_PAY_BT,
            applePayStripe: STRIPE_APPLEPAY,
            applePayPayWay: PAYWAY_APPLEPAY,
          };
          var n,
            o = ((n = t._findTerm(e.termId)), (n.isSubscription ? n.subscriptionPaymentMethods : n.oneOffPaymentMethods) || []).find(function (e) {
              return "apple_pay" === e.paymentTypeId;
            });
          e.isUsedForTerm = function (e) {
            return o && o.id === e;
          };
        },
      ],
    };
  });
var billingConfigModule = angular.module("billingConfigModule", ["checkoutModule"]);
billingConfigModule.factory("billingConfig", [
  "ngEventService",
  "utilsService",
  "lang",
  "checkoutService",
  function (e, n, i, o) {
    var t = {
      countryCode: window.TPParam.GEO_COUNTRY_CODE,
      zipCode: window.TPParam.GEO_COUNTRY_POSTAL_CODE,
      billingAddressPrefilled: !1,
      needResidence: !1,
      sameResidence: !0,
      postalCodeError: !1,
      countrySelectorError: !1,
      billingAddress: {
        region: {},
        country: {},
      },
      savedBillingAddress: {
        region: {},
        country: {},
      },
      residenceCountryCode: null,
      vatLabel: i.tr("VAT"),
      taxIncludeBilling: !0,
      showVAT: !1,
      geoCountryCode: window.TPParam.GEO_COUNTRY_CODE,
      geoZipCode: window.TPParam.GEO_COUNTRY_POSTAL_CODE,
      renewBillingCountryCode: null,
      renewBillingZipCode: null,
      renewResidenceCountryCode: null,
      countryTaxSupport: window.TPParam.GEO_COUNTRY_TAX_SUPPORT,
      taxCountries: [],
      updateFromTaxRequest: function (n, i) {
        if (n.isRefreshBillingInfoNeeded()) return i ? ((t.countryCode = i.billingCountryCode), (t.residenceCountryCode = i.residenceCountryCode), (t.zipCode = i.residenceZipCode ? i.residenceZipCode : i.billingZipCode), n.isAvalaraTaxEnabled() && (t.updateByCountryCode(n, t.countryCode), n.input.credit_card.billingAddress && ((t.billingAddress = n.input.credit_card.billingAddress), (t.savedBillingAddress = angular.copy(n.input.credit_card.billingAddress)), (t.billingAddressPrefilled = !0))), (t.taxRequest = i), void e.fire(EVENT_BILLING_FROM_TAX_REQUEST)) : void (t.taxRequest = null);
      },
      updateByCountryCode: function (e, i) {
        var o = n.find(t.taxCountries, function (e) {
          return e.countryCode === i;
        });
        o && ((t.requiredZipCode = o.requireZipCode), (t.vatLabel = o.vatLabel), (t.needResidence = o.needResidence), (t.taxIncludeBilling = o.taxIncludeBilling), (t.countryCode = i), (t.countryTaxSupport = o.taxSupport));
      },
      taxRequestFromUpi: function (e) {
        var n = null;
        return e.tax_request && (n = JSON.parse(e.tax_request)), n;
      },
      loadTaxCountries: function (e) {
        return o.getTaxCountries(e).then(function (i) {
          return angular.copy(i.models.taxCountries, t.taxCountries), n.contains(e.config.taxSupports, "onesource.tax.us") && t.updateByCountryCode(e, "US"), t.taxCountries;
        });
      },
    };
    return t;
  },
]),
  billingConfigModule.factory("taxZipCodeVisibility", [
    function () {
      var e;
      return {
        subscribe: function (i) {
          return (e = i), n;
        },
        notify: function (n) {
          e && e(n);
        },
      };
      function n() {
        e = null;
      }
    },
  ]),
  billingConfigModule.directive("billingCountry", function () {
    return {
      restrict: "A",
      require: "^view",
      replace: !0,
      templateUrl: "/widget/checkout/component/partials/billing-country-component.html",
      link: function (e, n, i, o) {
        o.registerComponentController(e),
          o.extendScope(e),
          n.on("$destroy", function () {
            o.unregisterComponentController(e);
          });
      },
      controller: [
        "$scope",
        "$q",
        "checkout",
        "$sce",
        "$timeout",
        "ngEventService",
        "utilsService",
        "billingConfig",
        "taxZipCodeVisibility",
        function (e, n, i, o, t, r, d, l, c) {
          var u = !1,
            s = null,
            C = !1,
            a = !1,
            p = "Countries",
            y = !1;
          function g() {
            R(!0);
          }
          angular.extend(e, BaseComponentController),
            l.loadTaxCountries(i).then(function () {
              x(),
                t(function () {
                  u = !0;
                });
            }),
            (l.isDuplicateZipCodeHidden = i.config.isTaxZipCodeHidden),
            T(),
            (e.selectorOptions = {
              selectorModel: {
                label: "",
                item: {},
              },
              items: {},
            }),
            (e.residenceOptions = angular.copy(e.selectorOptions)),
            (e.onZipCodeChanged = g);
          var E = c.subscribe(function (e) {
            (l.isDuplicateZipCodeHidden = i.config.isTaxZipCodeHidden && e), T();
          });
          r.subscribe(EVENT_CC_ZIP_CODE_CHANGED, function (e, n) {
            l.isDuplicateZipCodeHidden && ((l.zipCode = n.zipCode), g());
          }),
            (e.onChangeSameResidence = function () {
              !(function (n) {
                l.sameResidence && ((l.residenceCountryCode = ""), (l.residenceRequireZipCode = !1), (e.residenceOptions.selectorModel.label = ""), (e.residenceOptions.selectorModel.item = {}));
                R(n);
              })(!1),
                r.fire(EVENT_SAME_RESIDENCE_CHECKBOX_CHANGED);
            }),
            e.$watch("selectorOptions.selectorModel", function (e) {
              var n = e.item ? e.item.countryCode : null;
              u && l.sameResidence && (l.zipCode = ""), m(), r.fire(EVENT_COUNTRY_OF_RESIDENCE_SELECTED, n);
            }),
            e.$watch("residenceOptions.selectorModel", function () {
              !(function (n) {
                var i = e.residenceOptions.selectorModel.item;
                (l.residenceCountryCode = i.countryCode), (l.residenceRequireZipCode = i.requireZipCode && !l.isDuplicateZipCodeHidden), l.residenceCountryCode && ((l.taxIncludeBilling = i.taxIncludeBilling), (l.vatLabel = i.vatLabel));
                R(n);
              })(),
                r.fire(EVENT_BILLING_COUNTRY_SELECTED);
            }),
            (e._isValid = function () {
              return !0;
            });
          var f = r.subscribe(EVENT_BILLING_FROM_TAX_REQUEST, function () {
              i.isBillingCountryEnabled() && ((y = !0), x(), t(m, 0));
            }),
            _ = r.subscribe(EVENT_BILLING_COUNTRY_SELECTED, function () {
              (l.countrySelectorError = !1), x();
            }),
            b = r.subscribe(EVENT_CHECKOUT_RELOADED, function () {
              i.isBillingCountryEnabled() && x();
            }),
            O = r.subscribe(EVENT_USER_ACCESS_CHANGED, function () {
              i.isBillingCountryEnabled() && x();
            });
          function T() {
            l.requiredZipCodeAndNotHidden = l.requiredZipCode && !l.isDuplicateZipCodeHidden;
          }
          function x(n) {
            var i;
            e.selectorOptions.items = v(l.taxCountries, p);
            var o = l.countryCode || l.geoCountryCode;
            i = n && l.countryCode === l.geoCountryCode && l.renewBillingCountryCode ? l.renewBillingCountryCode : e.selectorOptions.selectorModel.item.countryCode === o ? e.selectorOptions.selectorModel.item.countryCode : l.countryCode || l.geoCountryCode;
            var t = d.find(e.selectorOptions.items, function (e) {
              return e.countryCode === i;
            });
            void 0 !== t && ((e.selectorOptions.selectorModel.label = t.name), (e.selectorOptions.selectorModel.item = t), (l.requiredZipCode = t.requireZipCode), (l.vatLabel = t.vatLabel), (l.needResidence = t.needResidence), (l.taxIncludeBilling = t.taxIncludeBilling), (l.countryCode = i), (l.countryTaxSupport = t.taxSupport), T()), n && l.requiredZipCode && l.zipCode === l.geoZipCode && l.renewBillingZipCode && (l.zipCode = l.renewBillingZipCode);
            var r,
              c = null;
            e.selectorOptions.selectorModel.item.countryCode && (c = e.selectorOptions.selectorModel.item), (e.residenceOptions.items = v(l.taxCountries, p, c)), (r = n && l.renewResidenceCountryCode ? l.renewResidenceCountryCode : !y || (l.taxRequest && l.taxRequest.residenceCountryCode) ? l.residenceCountryCode : null);
            var u = d.find(e.residenceOptions.items, function (e) {
              return e.countryCode === r;
            });
            void 0 !== u && ((e.residenceOptions.selectorModel.label = u.name), (e.residenceOptions.selectorModel.item = u), (l.residenceCountryCode = r), (l.residenceRequireZipCode = u.requireZipCode && !l.isDuplicateZipCodeHidden), (l.sameResidence = !l.residenceCountryCode || l.countryCode === l.residenceCountryCode), l.sameResidence || ((l.taxIncludeBilling = u.taxIncludeBilling), (l.vatLabel = u.vatLabel)));
          }
          function m(n) {
            var i, o;
            e.selectorOptions.selectorModel && e.selectorOptions.selectorModel.item && (i = e.selectorOptions.selectorModel.item).countryCode && ((l.countryCode = i.countryCode), (l.countryTaxSupport = i.taxSupport), (l.requiredZipCode = i.requireZipCode), (l.vatLabel = i.vatLabel), (l.needResidence = i.needResidence), (l.taxIncludeBilling = i.taxIncludeBilling), T()),
              e.residenceOptions.selectorModel && e.residenceOptions.selectorModel.item && ((o = e.residenceOptions.selectorModel.item), ((i && i.countryCode === o.countryCode) || !l.needResidence || (y && (!l.taxRequest || !l.taxRequest.residenceCountryCode))) && (l.sameResidence = !0)),
              l.sameResidence ? ((l.residenceCountryCode = ""), (l.residenceRequireZipCode = !1), (e.residenceOptions.selectorModel.label = ""), (e.residenceOptions.selectorModel.item = {})) : e.residenceOptions.selectorModel && e.residenceOptions.selectorModel.item && ((o = e.residenceOptions.selectorModel.item), (l.residenceCountryCode = o.countryCode), (l.residenceRequireZipCode = o.requireZipCode && !l.isDuplicateZipCodeHidden), l.residenceCountryCode && ((l.taxIncludeBilling = o.taxIncludeBilling), (l.vatLabel = o.vatLabel))),
              R(n);
          }
          function R(n) {
            function o() {
              r.fire("PAYMENT_BILLING_PLAN_TABLE_UPDATE"),
                (s = t(function () {
                  e._isValid() &&
                    (n && (tinypass.withoutWaitPanel = !0),
                    (C = !0),
                    i
                      .reload(void 0, !0)
                      .then(
                        function () {
                          (tinypass.withoutWaitPanel = !1), (C = !1), a && a(), (a = !1);
                        },
                        function () {
                          (tinypass.withoutWaitPanel = !1), (C = !1), a && a(), (a = !1);
                        }
                      )
                      .finally(function () {
                        r.fire("PAYMENT_BILLING_PLAN_TABLE_IS_UPDATED");
                      }));
                }, 300));
            }
            (y = !1),
              t.cancel(s),
              u &&
                (C
                  ? (a = function () {
                      o();
                    })
                  : o());
          }
          function v(e, n, i) {
            return d
              .filter(e, function (e) {
                return !(i && i.countryCode === e.countryCode);
              })
              .map(function (e) {
                return {
                  category: n,
                  name: e.name,
                  countryCode: e.countryCode,
                  requireZipCode: e.requireZipCode,
                  vatLabel: e.vatLabel,
                  needResidence: e.needResidence,
                  taxIncludeBilling: e.taxIncludeBilling,
                  taxSupport: e.taxSupport,
                  visibility: !0,
                };
              });
          }
          e.$on("EVENT_I18N_LOCALE_CHANGED", function () {
            u &&
              i.isBillingCountryEnabled() &&
              l.loadTaxCountries(i).then(function () {
                x();
              });
          }),
            (e.unsubscribeNgEventService = function () {
              f(), _(), b(), O(), E();
            });
        },
      ],
    };
  });
angular
  .module("consentModule", [])
  .directive("consentsList", [
    function () {
      return {};
    },
  ])
  .directive("consentBox", [
    function () {
      return {};
    },
  ])
  .factory("checkConsents", [
    function () {
      return {};
    },
  ]);
angular
  .module("redemptionModule", [])
  .factory("redeemRedemptionCodeService", [
    function () {
      return {};
    },
  ])
  .factory("redemptionService", [
    function () {
      return {};
    },
  ])
  .directive("redemptionComponent", [
    function () {
      return {};
    },
  ])
  .directive("redemptionCodeAndInfo", [
    function () {
      return {};
    },
  ])
  .directive("redeemCodeInput", [
    function () {
      return {};
    },
  ])
  .directive("redemptionPrintAddress", [
    function () {
      return {};
    },
  ]);
angular
  .module("giftModule", [])
  .factory("giftService", [
    function () {
      return {};
    },
  ])
  .directive("giftFormComponent", [
    function () {
      return {};
    },
  ])
  .directive("giftInputTime", [
    function () {
      return {};
    },
  ])
  .directive("giftInputName", [
    function () {
      return {};
    },
  ])
  .directive("giftInputEmail", [
    function () {
      return {};
    },
  ])
  .directive("giftInputMessage", [
    function () {
      return {};
    },
  ]);
angular
  .module("upgradeModule", [])
  .factory("upgradeService", [
    function () {
      return {};
    },
  ])
  .directive("completeUpgradeComponent", [
    function () {
      return {};
    },
  ])
  .directive("upgradeAuthenticationComponent", [
    function () {
      return {};
    },
  ])
  .directive("upgradeAuthenticationReceipt", [
    function () {
      return {};
    },
  ])
  .directive("upgradePurchaseReceipt", [
    function () {
      return {};
    },
  ])
  .directive("upgradeSharedSubscriptionComponent", [
    function () {
      return {};
    },
  ]);
angular
  .module("sharedSubscriptionModule", [])
  .directive("sharedSubscriptionComponent", [
    function () {
      return {};
    },
  ])
  .directive("sharedSubscriptionFormComponent", [
    function () {
      return {};
    },
  ])
  .directive("redeemSharedSubscriptionComponent", [
    function () {
      return {};
    },
  ]);
angular
  .module("sharedSubscriptionCommonModule", [])
  .factory("sharedSubscriptionService", [
    function () {
      return {};
    },
  ])
  .factory("ssHelpers", [
    function () {
      return {};
    },
  ])
  .factory("ssComponentController", [
    function () {
      return {};
    },
  ])
  .factory("ssFormComponentController", [
    function () {
      return {};
    },
  ]);
angular.module("continueThreeDSPurchaseModule", []).directive("continueThreeDSPurchaseComponent", [
  function () {
    return {};
  },
]);
angular.module("tpConfirmModule", []).directive("tpDropConfirm", [
  function () {
    return {};
  },
]);
angular.module("passThroughModule", []).directive("passThroughFormComponent", [
  function () {
    return {};
  },
]);
angular.module("registrationServiceModule", []).factory("registrationService", [
  function () {
    return {};
  },
]);
var swgModule = angular.module("swgModule", ["generalModule", "tp.i18n"]);
swgModule.factory("swgService", [
  "tpHTTP",
  "$q",
  "$window",
  "ngEventService",
  "lang",
  "eventService",
  function (e, t, r, o, n, u) {
    var s,
      c = {};
    return (
      o.subscribe("swgCheckoutComplete", function (e, t) {
        s && s.resolve(t);
      }),
      (c.isAvailableForTerm = function (e) {
        return e.sku;
      }),
      (c.startCheckout = function (e) {
        return (
          s && s.reject(),
          (s = t.defer()),
          u.postMessage("swgCheckoutStart", {
            sku: e.sku,
            termId: e.termId,
          }),
          s.promise
        );
      }),
      (c.getUiConfig = function () {
        return {
          name: "swg",
          class: "swg-button",
          title: n.trc("checkout.platform", "Subscribe with Google"),
        };
      }),
      c
    );
  },
]);
var promocode = angular.module("promocodeModule", ["checkoutModule", "tp.i18n"]),
  EVENT_PROMO_CODE_INIT = "PROMO_CODE_INIT",
  EVENT_PROMO_CODE_STATUS_CHANGE = "PROMO_CODE_STATUS_CHANGE",
  EVENT_PROMO_CODE_INPUT_CLICK = "EVENT_PROMO_CODE_INPUT_CLICK",
  EVENT_REAPPLY_PROMO_CODE = "EVENT_REAPPLY_PROMO_CODE",
  EVENT_RESET_PROMO_CODE = "EVENT_RESET_PROMO_CODE";
promocode.factory("promoCodeService", [
  "tpHTTP",
  "$rootScope",
  "$q",
  "$window",
  "checkout",
  "checkoutUpdatesService",
  "statsService",
  function (e, o, t, r, n, i, d) {
    return {
      data: {
        price: null,
        verified: !1,
        resultState: n.input.promoCodeId ? "VALIDCODE" : null,
        verifiedPromoCode: {},
        promoCode: {
          state: "PROMO_CODE_APPLY",
          loading: !1,
          validating: !1,
          visible: !0,
          code: "",
        },
        term: {},
        isPromoCodeAnon: !1,
      },
      verify: function (o, i, a, c) {
        return d.getStatsPayload().then(function (d) {
          var l = t.defer();
          return (
            e({
              method: "post",
              url: r.TPParam.PROMO_CODE_VERIFY,
              params: {
                aid: o,
                code: i,
                termId: a,
                oid: c,
                zipCode: n.input.zipCode,
                countryCode: n.getBillingCountryCode(),
                billingZipCode: n.getBillingZipCode(),
                residenceCountryCode: n.getResidenceCountryCode(),
                userToken: n.params.userToken,
              },
              data: d,
            })
              .then(function (e) {
                n.mergeStats(e),
                  l.resolve({
                    data: e,
                    ok: !0,
                  });
              })
              .catch(function (e) {
                l.resolve({
                  data: e,
                  ok: !1,
                });
              }),
            l.promise
          );
        });
      },
      revert: function (o, a) {
        return d.getStatsPayload().then(function (d) {
          var c = t.defer();
          return (
            e({
              method: "post",
              url: r.TPParam.PROMO_CODE_REVERT,
              params: {
                promoCodeId: o,
                oid: a,
              },
              data: d,
            })
              .then(function (e) {
                return (
                  n.mergeStats(e),
                  (n.flags.selectedTerm.isZero = !1),
                  i.updatePaymentMethods(!0, n).then(function () {
                    return e;
                  })
                );
              })
              .then(function (e) {
                c.resolve({
                  data: e,
                  ok: !0,
                });
              })
              .catch(function (e) {
                c.resolve({
                  data: e,
                  ok: !1,
                });
              }),
            c.promise
          );
        });
      },
      isAnonPromoCode: function (o, i, a) {
        return d.getStatsPayload().then(function (d) {
          var c = t.defer();
          return (
            e({
              method: "post",
              url: r.TPParam.PROMO_CODE_IS_ANON,
              params: {
                code: o,
                termId: i,
                aid: a,
              },
              data: d,
            })
              .then(function (e) {
                n.mergeStats(e),
                  c.resolve({
                    data: e,
                    ok: !0,
                  });
              })
              .catch(function (e) {
                c.resolve({
                  data: e,
                  ok: !1,
                });
              }),
            c.promise
          );
        });
      },
      handleZeroPrice: function (e) {
        e && ((n.flags.selectedPaymentMethod = {} || n.flags.selectedPaymentMethod), (n.flags.selectedPaymentSource = {} || n.flags.selectedPaymentSource), (n.flags.selectedPaymentMethod.id = ZERO)), i.updatePaymentMethods(!0, n);
      },
    };
  },
]),
  promocode.directive("promoCodeComponent", function () {
    return {
      restrict: "A",
      require: "^view",
      templateUrl: "/widget/checkout/component/partials/promo-code-component.html",
      scope: {
        skipValidation: "@",
        term: "=",
      },
      link: function (e, o, t, r) {
        r.registerComponentController(e),
          o.on("$destroy", function () {
            r.unregisterComponentController(e);
          });
      },
      controller: [
        "$scope",
        "$element",
        "promoCodeService",
        "checkout",
        "tpHTTP",
        "ngEventService",
        "modalService",
        "errorService",
        "$timeout",
        "shakeService",
        "lang",
        "purchaseService",
        "userService",
        "passwordlessService",
        "$q",
        "checkoutGoTo",
        function (e, o, t, r, n, i, d, a, c, l, m, p, s, u, f, E) {
          angular.extend(e, BaseComponentController),
            (e.PROMO_CODE_APPLY = "PROMO_CODE_APPLY"),
            (e.PROMO_CODE_RESULT = "PROMO_CODE_RESULT"),
            (e.PROMO_CODE_RESULT_STATE = {
              VALIDCODE: "VALIDCODE",
              INVALIDCODE: "INVALIDCODE",
              UNLOCKED: "UNLOCKED",
              ANOTHERTERM: "ANOTHERTERM",
              ANOTHERESOURCE: "ANOTHERESOURCE",
            });
          var C = !1,
            O = !1,
            T = function () {
              (O = !1),
                a(e).reset(),
                (e.price = t.data.price),
                (e.verified = t.data.verified),
                (e.input = r.input),
                (e.promoCode = t.data.promoCode),
                (e.selectedTerm = e.term || r.flags.selectedTerm),
                (null === e.input.promoCode || (t.data.term.termId && e.selectedTerm.termId !== t.data.term.termId)) && _(),
                angular.copy(e.selectedTerm, t.data.term),
                (e.resultState = t.data.resultState),
                (e.verifiedPromoCode = t.data.verifiedPromoCode),
                i.fire(EVENT_PROMO_CODE_INIT),
                r.params.promoCode && ((e.promoCode.code = r.params.promoCode), e.apply()),
                c(function () {
                  o.find(".promo-code-description-enter").show(), o.find(".promo-code-description-error").hide();
                }, 0);
            };
          function _() {
            (O = !1), r.resetDiscount(), (e.promoCode.state = e.PROMO_CODE_APPLY), (e.promoCode.loading = !1), (e.promoCode.validating = !1), (e.promoCode.code = ""), (e.resultState = null), (t.data.resultState = null);
          }
          (e.isNeedApplyAfterReload = !1),
            (e.apply = function () {
              if (((O = !0), !e.input.promoCode))
                return (
                  (e.resultState = e.PROMO_CODE_RESULT_STATE.INVALIDCODE),
                  void (
                    r.isSelectedTermLocked() ||
                    a(e).component({
                      field: "promocode",
                      message: m.trc("checkout.platform", "Promo code is required"),
                    })
                  )
                );
              if (r.isPromoCodeApplyWithoutUserEnabled()) {
                var o = e.term || r.getSelectedTerm();
                t.isAnonPromoCode(r.input.promoCode, o.termId, r.getAid()).then(function (e) {
                  e.ok ? (e.data.models.isPromoCodeAnon ? c() : r.passwordlessServiceLogin().then(c)) : l();
                });
              } else r.passwordlessServiceLogin().then(c);
              function c() {
                if (!r.isPromoCodeApplyWithoutUserEnabled() && !r.isUserValid()) {
                  if (!r.isSelectedTermLocked()) return void a(e).global(m.trc("checkout.platform", "You should sign in or sign up first"));
                  if (
                    E.gotoAuthState(
                      r,
                      null,
                      function () {
                        e.isNeedApplyAfterReload && (E.gotoLockedPromoCode(r), (e.isNeedApplyAfterReload = !1), e.apply());
                      },
                      !0
                    )
                  )
                    return void (e.isNeedApplyAfterReload = !0);
                }
                (e.selectedTerm = e.term || r.flags.selectedTerm), (e.promoCode.validating = !0);
                var o = e.term || r.getSelectedTerm();
                (function (e) {
                  return r.input.oid
                    ? Promise.resolve()
                    : (function (e) {
                        return r.createOrder(r.params.aid, r.params.offerId, r.params.templateId, r.params.userToken, e.termId).then(function (e) {
                          return e.errors && e.errors.length > 0 ? f.reject(e) : e;
                        });
                      })(e).then(function (e) {
                        r.input.oid = e.models.oid;
                      });
                })(o).then(function () {
                  !(function (o, c) {
                    (C = !1),
                      t.verify(r.getAid(), r.input.promoCode, o.termId, c).then(function (c) {
                        r.softResetDiscount().then(function () {
                          if ((a(e).reset(), c.ok)) {
                            n.extractModels(c.data, e), n.extractModels(c.data, t.data), (e.promoCode.state = e.PROMO_CODE_RESULT);
                            var s = c.data.models;
                            e.resultState === e.PROMO_CODE_RESULT_STATE.VALIDCODE
                              ? (function (o, n) {
                                  r.discountSelectedTerm(o.chargeAmount, o.chargeCurrency, o.chargeDisplayAmount, o.promotionBillingPlan, o.verifiedPromoCode.promoCodeId, n.termId),
                                    r.reload(void 0, !0).then(function () {
                                      r.sendGoogleAnalyticsEvent({
                                        eventAction: "promoApplied",
                                        eventLabel: "Promo applied",
                                        params: {
                                          offerId: r.config.offerId,
                                          templateId: r.config.offerTemplateId,
                                          templateVariantId: r.config.offerTemplateVariantId,
                                          promotionId: o.verifiedPromoCode.promotionId,
                                        },
                                      }),
                                        t.handleZeroPrice(e.isZero),
                                        i.fire(EVENT_CHECKOUT_PRICE_CHANGED);
                                    });
                                })(s, o)
                              : e.resultState === e.PROMO_CODE_RESULT_STATE.UNLOCKED
                              ? (function (o, n) {
                                  r.discountSelectedTerm(o.chargeAmount, o.chargeCurrency, o.chargeDisplayAmount, o.promotionBillingPlan, o.verifiedPromoCode.promoCodeId, n.termId),
                                    r.reload(void 0, !0).then(function () {
                                      (r.input.validUnlockPromoCode = !0),
                                        E.gotoNextState(r, p, !1, !0, !0),
                                        r.sendGoogleAnalyticsEvent({
                                          eventAction: "promoApplied",
                                          eventLabel: "Promo applied",
                                          params: {
                                            offerId: r.config.offerId,
                                            templateId: r.config.offerTemplateId,
                                            templateVariantId: r.config.offerTemplateVariantId,
                                            promotionId: o.verifiedPromoCode.promotionId,
                                          },
                                        }),
                                        t.handleZeroPrice(e.isZero),
                                        i.fire(EVENT_CHECKOUT_PRICE_CHANGED);
                                    });
                                })(s, o)
                              : e.resultState === e.PROMO_CODE_RESULT_STATE.ANOTHERTERM
                              ? (function (e) {
                                  var o = e.otherTerms[0],
                                    t = e.verifiedPromoCode;
                                  d.openDialog({
                                    templateUrl: "/widget/checkout/component/partials/promo-code-another-term-dialog.html",
                                    controller: [
                                      "$scope",
                                      "$modalInstance",
                                      function (e, n) {
                                        (e.otherTerm = o),
                                          (e.verifiedPromoCode = t),
                                          (e.selectTerm = function () {
                                            n.close(), r.checkoutWithNewTerm(o);
                                          });
                                      },
                                    ],
                                  });
                                })(s)
                              : e.resultState === e.PROMO_CODE_RESULT_STATE.ANOTHERESOURCE
                              ? (function (o) {
                                  var t = e.otherTerms[0],
                                    n = e.otherTermOfferPubId,
                                    i = o.verifiedPromoCode;
                                  d.openDialog({
                                    templateUrl: "/widget/checkout/component/partials/promo-code-another-term-dialog.html",
                                    controller: [
                                      "$scope",
                                      "$modalInstance",
                                      function (e, o) {
                                        (e.otherTerm = t),
                                          (e.verifiedPromoCode = i),
                                          (e.selectTerm = function () {
                                            o.close(),
                                              r
                                                .reload({
                                                  offerId: n,
                                                  termId: t.termId,
                                                })
                                                .then(function () {
                                                  r.checkoutWithNewTerm(t, n);
                                                });
                                          });
                                      },
                                    ],
                                  });
                                })(s)
                              : e.resultState === e.PROMO_CODE_RESULT_STATE.INVALIDCODE &&
                                (r.resetDiscount(),
                                r.sendGoogleAnalyticsEvent({
                                  eventAction: "promoInvalid",
                                  eventLabel: "Promo invalid",
                                  params: {
                                    offerId: r.config.offerId,
                                    templateId: r.config.offerTemplateId,
                                    templateVariantId: r.config.offerTemplateVariantId,
                                    code: e.input.promoCode,
                                  },
                                }),
                                r.isSelectedTermLocked() ||
                                  a(e).component({
                                    field: "promocode",
                                    message: m.trc("checkout.platform", "Your promo code is not valid"),
                                  }));
                          } else l();
                          e.promoCode.validating = !1;
                        });
                      });
                  })(o, r.input.oid);
                });
              }
              function l() {
                (r.input.promoCode = null), (e.promoCode.state = e.PROMO_CODE_APPLY), (e.promoCode.loading = !1), (e.promoCode.validating = !1), (e.promoCode.code = ""), a(e).global(m.trc("checkout.platform", "Can not validate promo code"));
              }
            }),
            (e.revert = function () {
              var o = r.input.oid;
              t.revert(e.verifiedPromoCode.promoCodeId, o).then(function (o) {
                o.ok ? (_(), r.reload(void 0, !0)) : a(e).global(m.trc("checkout.platform", "Can not revert promo code"));
              });
            }),
            (e.isPromoCodeAvailable = function () {
              return r.isPromoCodeAvailable(e.term);
            }),
            (e.isPromoCodeValid = function () {
              return t.data.resultState === e.PROMO_CODE_RESULT_STATE.VALIDCODE;
            }),
            Helper.wrapMethod("isSelectedTermLocked", r, e);
          var P = i.subscribe(EVENT_RESET_PROMO_CODE, function () {
              O = !1;
            }),
            h = i.subscribe(EVENT_CHECKOUT_TERM_SELECTED, function () {
              T();
            }),
            v = i.subscribe(EVENT_REAPPLY_PROMO_CODE, function () {
              O && e.apply();
            }),
            S = i.subscribe("logout", function () {
              _();
            });
          (e.inputClick = function () {
            i.fire(EVENT_PROMO_CODE_INPUT_CLICK), o.find(".promo-code-description-enter").show(), o.find(".promo-code-description-error").hide();
          }),
            e.$watch(
              function () {
                return e.resultState === e.PROMO_CODE_RESULT_STATE.INVALIDCODE && !C;
              },
              function () {
                e.resultState !== e.PROMO_CODE_RESULT_STATE.INVALIDCODE || C || (i.fire(EVENT_PROMO_CODE_STATUS_CHANGE), o.find(".promo-code-description-enter").hide(), o.find(".promo-code-description-error").show(), (C = !0));
              }
            ),
            (e.unsubscribeNgEventService = function () {
              P(), v(), h(), S();
            }),
            T();
        },
      ],
    };
  }),
  promocode.directive("animateLockedPromoCode", function () {
    return {
      scope: !1,
      controller: [
        "$scope",
        "$element",
        "ngEventService",
        "shakeService",
        "$timeout",
        "checkout",
        "lang",
        function (e, o, t, r, n, i, d) {
          var a = t.subscribe(EVENT_PROMO_CODE_INIT, function () {
              n(function () {
                o.find(".promo-code-description-enter").show(), o.find(".promo-code-description-error").hide();
              }, 0);
            }),
            c = t.subscribe(EVENT_PROMO_CODE_INPUT_CLICK, function () {
              n(function () {
                o.find(".promo-code-description-enter").show(), o.find(".promo-code-description-error").hide(), o.find(".promo-code-apply").html(d.trc("checkout.platform", "Apply"));
              }, 0);
            }),
            l = t.subscribe(EVENT_PROMO_CODE_STATUS_CHANGE, function () {
              i.isSelectedTermLocked() &&
                n(function () {
                  var e = o.find(".promo-code-lock"),
                    t = o.find(".promo-code-description-enter"),
                    n = o.find(".promo-code-description-error");
                  t.show(),
                    n.hide(),
                    t.css({
                      position: "relative",
                    }),
                    n.css({
                      position: "relative",
                    }),
                    r.shake(e),
                    t.animate(
                      {
                        top: -15,
                        opacity: 0,
                      },
                      600,
                      function () {
                        t.hide(),
                          t.animate(
                            {
                              top: 0,
                              opacity: 1,
                            },
                            3
                          ),
                          n.animate(
                            {
                              top: -15,
                              opacity: 0,
                            },
                            3,
                            function () {
                              n.show(),
                                n.animate(
                                  {
                                    top: 0,
                                    opacity: 1,
                                  },
                                  600,
                                  function () {
                                    i.resize(), o.find(".promo-code-apply").html(d.trc("checkout.platform", "Try again !"));
                                  }
                                );
                            }
                          );
                      }
                    );
                }, 0);
            });
          e.$on("$destroy", function () {
            a(), c(), l();
          });
        },
      ],
    };
  });
angular
  .module("experianModule", [])
  .factory("experianService", [
    function () {
      return {};
    },
  ])
  .directive("experianBillingAddress", [
    function () {
      return {};
    },
  ]);
var antifraudCaptchaV3 = angular.module("antifraudCaptchaV3Module", []);
antifraudCaptchaV3.factory("captchaV3Service", [
  "eventService",
  "ngEventService",
  "$q",
  "tpHTTP",
  "errorService",
  "lang",
  function (e, a, t, n, c, r) {
    var o = !1;
    function i() {
      return o;
    }
    return {
      isCaptchaV3Enabled: i,
      getCaptchaV3Enabled: function (c) {
        var i, u;
        ((i = t.defer()),
        (u = a.subscribe("get-captcha-v3-config-value", function (e, a) {
          u(), i.resolve(a.config);
        })),
        e.postMessage("get-captcha-v3-config"),
        i.promise)
          .then(function (a) {
            return a.aid
              ? a
              : (function (a) {
                  return n({
                    method: "post",
                    url: TPParam.GET_FRAUD_PREVENTION_CONFIG,
                    params: {
                      aid: a,
                    },
                  }).then(function (a) {
                    var t = a.models.config;
                    return (
                      e.postMessage("set-captcha-v3-config", {
                        config: t,
                      }),
                      t
                    );
                  });
                })(c);
          })
          .then(function (e) {
            var a;
            (a = e.enabled), (o = a);
          })
          .catch(function () {
            console.error(r.tr("Unable to load captcha V3 configuration"));
          });
      },
      getCaptchaV3Token: function (n) {
        var c = t.defer();
        if (i()) {
          var r = a.subscribe("captcha-v3-token", function (e, a) {
            r(), c.resolve(a.token);
          });
          e.postMessage("get-captcha-v3-token", {
            action: n,
          });
        } else c.resolve();
        return c.promise;
      },
    };
  },
]);
angular
  .module("antifraudCaptchaV2Module", [])
  .factory("captchaV2Service", [
    function () {
      return {};
    },
  ])
  .directive("paymentMethodCaptcha", [
    function () {
      return {};
    },
  ]);
angular.module("antifraudCaptchaV2ProviderModule", []).factory("captchaV2Provider", [
  function () {
    return {};
  },
]);
angular
  .module("subscriptionReactivationModule", [])
  .factory("reactivateSubscriptionService", [
    function () {
      return {};
    },
  ])
  .directive("reactivateSubscriptionComponent", [
    function () {
      return {};
    },
  ]);
angular.module("paymentProviderModule", []).factory("creditCardUtils", [
  function () {
    return {};
  },
]);
angular.module("paymentServiceModule", []).factory("paymentService", [
  function () {
    return {};
  },
]);
angular.module("purchaseServiceDataModule", []).factory("purchaseServiceData", [
  function () {
    return {};
  },
]);
angular.module("purchaseServiceModule", []).factory("purchaseService", [
  function () {
    return {};
  },
]);
angular
  .module("paymentProviders", [])
  .factory("postmessageService", [
    function () {
      return {};
    },
  ])
  .factory("spreedlyIntegrationService", [
    function () {
      return {};
    },
  ])
  .factory("utilsService", [
    function () {
      return {};
    },
  ]);
angular.module("termGateServiceModule", []).factory("termGateService", [
  function () {
    return {};
  },
]);
angular.module("alreadyHasAccessModule", []).directive("alreadyHasAccessComponent", [
  function () {
    return {};
  },
]);
angular.module("confirmationModule", []).directive("confirmationComponent", [
  function () {
    return {};
  },
]);
angular
  .module("bankSecureModule", [])
  .directive("bankSecureComponent", [
    function () {
      return {};
    },
  ])
  .factory("paymentProvider", [
    function () {
      return {};
    },
  ]);
angular.module("paymentProviderModule").factory("passwordlessPaymentService", [
  function () {
    return {};
  },
]);
angular
  .module("paypalExpressCheckoutProviderModule", [])
  .factory("paypalExpressCheckoutProvider", [
    function () {
      return {};
    },
  ])
  .directive("paypalExpressCheckoutProviderFormComponent", [
    function () {
      return {};
    },
  ]);
angular.module("paypalExpressCheckout", []).factory("paypalExpressCheckoutService", [
  function () {
    return {};
  },
]);
angular
  .module("creditCardModule", [])
  .factory("creditCard", [
    function () {
      return {};
    },
  ])
  .factory("creditCardService", [
    function () {
      return {};
    },
  ])
  .directive("ccFormComponent", [
    function () {
      return {};
    },
  ])
  .directive("braintreeValidate", [
    function () {
      return {};
    },
  ]);
angular.module("payPalModule", []).factory("payPal", [
  function () {
    return {};
  },
]);
angular
  .module("amazonmwsModule", [])
  .factory("amazonmws", [
    function () {
      return {};
    },
  ])
  .directive("amazonFormComponent", [
    function () {
      return {};
    },
  ]);
angular.module("coinbaseModule", []).factory("coinbase", [
  function () {
    return {};
  },
]);
angular
  .module("mockModule", [])
  .factory("mock", [
    function () {
      return {};
    },
  ])
  .directive("mockFormComponent", [
    function () {
      return {};
    },
  ]);
angular
  .module("openpayCashModule", [])
  .factory("openpayCashService", [
    function () {
      return {};
    },
  ])
  .factory("openpayCashProvider", [
    function () {
      return {};
    },
  ])
  .directive("openpayCashFormComponent", [
    function () {
      return {};
    },
  ])
  .directive("openpayBillControls", [
    function () {
      return {};
    },
  ]);
angular
  .module("zeroModule", [])
  .factory("zero", [
    function () {
      return {};
    },
  ])
  .directive("zeroFormComponent", [
    function () {
      return {};
    },
  ]);
angular
  .module("payWhatYouWantModule", [])
  .factory("payWhatYouWantData", [
    function () {
      return {};
    },
  ])
  .directive("payWhatYouWantFormComponent", [
    function () {
      return {};
    },
  ]);
angular
  .module("externalVerificationModule", [])
  .factory("externalVerificationService", [
    function () {
      return {};
    },
  ])
  .directive("externalVerificationComponent", [
    function () {
      return {};
    },
  ])
  .controller("externalApiFieldsetCtrl", [
    function () {
      return {};
    },
  ])
  .directive("externalApiFieldset", [
    function () {
      return {};
    },
  ])
  .directive("externalApiFieldsetList", [
    function () {
      return {};
    },
  ])
  .directive("externalApiFieldsetExists", [
    function () {
      return {};
    },
  ])
  .directive("externalApiFieldsetNew", [
    function () {
      return {};
    },
  ])
  .directive("externalApiFieldsetForm", [
    function () {
      return {};
    },
  ])
  .directive("externalApiFieldsetField", [
    function () {
      return {};
    },
  ])
  .directive("externalApiFieldsetInput", [
    function () {
      return {};
    },
  ])
  .directive("externalApiFieldsetHint", [
    function () {
      return {};
    },
  ])
  .directive("inject", [
    function () {
      return {};
    },
  ]);
angular
  .module("printAddressModule", [])
  .factory("printAddressService", [
    function () {
      return {};
    },
  ])
  .directive("printAddressComponent", [
    function () {
      return {};
    },
  ]);
angular.module("checkoutMockModule", []);
angular
  .module("payPalBtModule", [])
  .factory("payPalBt", [
    function () {
      return {};
    },
  ])
  .factory("payPalBtService", [
    function () {
      return {};
    },
  ])
  .directive("paypalThroughBraintreeFormComponent", [
    function () {
      return {};
    },
  ]);
angular
  .module("applePayBtModule", [])
  .factory("applePayBt", [
    function () {
      return {};
    },
  ])
  .factory("applePayBtService", [
    function () {
      return {};
    },
  ])
  .directive("applePayThroughBraintreeFormComponent", [
    function () {
      return {};
    },
  ]);
angular
  .module("worldPayModule", [])
  .factory("worldPayRxml", [
    function () {
      return {};
    },
  ])
  .directive("worldpayRxmlFormComponent", [
    function () {
      return {};
    },
  ]);
angular
  .module("worldPayHppModule", [])
  .factory("worldPayHpp", [
    function () {
      return {};
    },
  ])
  .directive("worldpayHppFormComponent", [
    function () {
      return {};
    },
  ]);
angular
  .module("worldPayTokenModule", [])
  .factory("worldPayToken", [
    function () {
      return {};
    },
  ])
  .directive("worldpayTokenFormComponent", [
    function () {
      return {};
    },
  ]);
angular.module("spreedlyDefaultStrategyModule", []).factory("spreedlyDefaultStrategy", [
  function () {
    return {};
  },
]);
angular.module("spreedlyPayULatamStrategyModule", []).factory("spreedlyPayULatamStrategy", [
  function () {
    return {};
  },
]);
angular
  .module("spreedlyModule", [])
  .factory("spreedly", [
    function () {
      return {};
    },
  ])
  .directive("spreedlyFormComponent", [
    function () {
      return {};
    },
  ]);
angular
  .module("edgilPaywayProviderModule", [])
  .factory("edgilPaywayProvider", [
    function () {
      return {};
    },
  ])
  .factory("edgilCreditCardService", [
    function () {
      return {};
    },
  ])
  .directive("edgilPaywayProviderFormComponent", [
    function () {
      return {};
    },
  ]);
angular
  .module("eigenProviderModule", [])
  .factory("eigenProvider", [
    function () {
      return {};
    },
  ])
  .factory("eigenCreditCardService", [
    function () {
      return {};
    },
  ])
  .directive("eigenProviderFormComponent", [
    function () {
      return {};
    },
  ]);
angular.module("braintreeCommonModule", []).factory("braintreeFactory", [
  function () {
    return {};
  },
]);
angular
  .module("providersModuleCH", [])
  .factory("eventsServiceCH", [
    function () {
      return {};
    },
  ])
  .factory("providersServiceCH", [
    function () {
      return {};
    },
  ])
  .directive("newFlowComponentsCH", [
    function () {
      return {};
    },
  ])
  .service("ppCreditCardActionsService", [
    function () {
      return {};
    },
  ])
  .directive("dynamicBaseInputsComponent", [
    function () {
      return {};
    },
  ]);
angular.module("datatransCommonModule", []).factory("datatransIntegrationService", [
  function () {
    return {};
  },
]);
angular.module("datatransPostfinanceCommonModule", []).factory("datatransPostfinanceIntegrationService", [
  function () {
    return {};
  },
]);
angular
  .module("easypayCommonModule", [])
  .factory("easypayBoletoService", [
    function () {
      return {};
    },
  ])
  .factory("easypayDirectDebitService", [
    function () {
      return {};
    },
  ]);
angular
  .module("eigenCommonModule", [])
  .factory("eigenMiraSecureV2", [
    function () {
      return {};
    },
  ])
  .factory("eigenMiraSecureV3", [
    function () {
      return {};
    },
  ])
  .factory("eigenService", [
    function () {
      return {};
    },
  ])
  .factory("eigenServiceV2", [
    function () {
      return {};
    },
  ])
  .factory("eigenServiceV3", [
    function () {
      return {};
    },
  ]);
angular.module("klarnaCommonModule", []).factory("klarnaService", [
  function () {
    return {};
  },
]);
angular
  .module("obiCommonModule", [])
  .factory("obiIntegrationService", [
    function () {
      return {};
    },
  ])
  .factory("obiPaypalIntegrationService", [
    function () {
      return {};
    },
  ]);
angular
  .module("applepayssModuleCH", [])
  .factory("applepayssProviderCH", [
    function () {
      return {};
    },
  ])
  .directive("applepayssComponentCH", [
    function () {
      return {};
    },
  ]);
angular
  .module("applepaystripeModuleCH", [])
  .factory("applepaystripeProviderCH", [
    function () {
      return {};
    },
  ])
  .directive("applepaystripeComponentCH", [
    function () {
      return {};
    },
  ]);
angular
  .module("applepaywayModuleCH", [])
  .factory("applepaywayProviderCH", [
    function () {
      return {};
    },
  ])
  .directive("applepaywayComponentCH", [
    function () {
      return {};
    },
  ]);
angular
  .module("cybersourceModuleCH", [])
  .factory("cybersourceCardServiceCH", [
    function () {
      return {};
    },
  ])
  .factory("cybersourceProviderCH", [
    function () {
      return {};
    },
  ])
  .directive("cybersourceComponentCH", [
    function () {
      return {};
    },
  ]);
angular
  .module("cybersourcetmsModuleCH", [])
  .factory("cybersourcetmsCardServiceCH", [
    function () {
      return {};
    },
  ])
  .factory("cybersourcetmsProviderCH", [
    function () {
      return {};
    },
  ])
  .directive("cybersourcetmsComponentCH", [
    function () {
      return {};
    },
  ]);
angular
  .module("edgilModuleCH", [])
  .factory("edgilCardServiceCH", [
    function () {
      return {};
    },
  ])
  .factory("edgilProviderCH", [
    function () {
      return {};
    },
  ])
  .directive("edgilComponentCH", [
    function () {
      return {};
    },
  ]);
angular
  .module("onetModuleCH", [])
  .factory("onetCardServiceCH", [
    function () {
      return {};
    },
  ])
  .factory("onetProviderCH", [
    function () {
      return {};
    },
  ])
  .directive("onetComponentCH", [
    function () {
      return {};
    },
  ]);
angular
  .module("stripeModuleCH", [])
  .factory("stripeCardServiceCH", [
    function () {
      return {};
    },
  ])
  .factory("stripeProviderCH", [
    function () {
      return {};
    },
  ])
  .directive("stripeComponentCH", [
    function () {
      return {};
    },
  ]);
angular
  .module("wirecardModuleCH", [])
  .factory("wirecardCardServiceCH", [
    function () {
      return {};
    },
  ])
  .factory("wirecardProviderCH", [
    function () {
      return {};
    },
  ])
  .directive("wirecardComponentCH", [
    function () {
      return {};
    },
  ]);
angular
  .module("gocardlessddModuleCH", [])
  .factory("gocardlessddCardServiceCH", [
    function () {
      return {};
    },
  ])
  .factory("gocardlessddProviderCH", [
    function () {
      return {};
    },
  ])
  .directive("gocardlessddComponentCH", [
    function () {
      return {};
    },
  ]);
angular
  .module("gmoModuleCH", [])
  .factory("gmoCardServiceCH", [
    function () {
      return {};
    },
  ])
  .factory("gmoProviderCH", [
    function () {
      return {};
    },
  ])
  .directive("gmoComponentCH", [
    function () {
      return {};
    },
  ]);
angular
  .module("bancardModuleCH", [])
  .factory("bancardCardServiceCH", [
    function () {
      return {};
    },
  ])
  .factory("bancardProviderCH", [
    function () {
      return {};
    },
  ])
  .directive("bancardComponentCH", [
    function () {
      return {};
    },
  ]);
angular
  .module("paymentezModuleCH", [])
  .factory("paymentezCardServiceCH", [
    function () {
      return {};
    },
  ])
  .factory("paymentezProviderCH", [
    function () {
      return {};
    },
  ])
  .directive("paymentezComponentCH", [
    function () {
      return {};
    },
  ]);
angular
  .module("payuindiaccModuleCH", [])
  .factory("payuindiaccCardServiceCH", [
    function () {
      return {};
    },
  ])
  .factory("payuindiaccProviderCH", [
    function () {
      return {};
    },
  ])
  .directive("payuindiaccComponentCH", [
    function () {
      return {};
    },
  ]);
angular
  .module("payuindiaccv2ModuleCH", [])
  .factory("payuindiaccv2CardServiceCH", [
    function () {
      return {};
    },
  ])
  .factory("payuindiaccv2ProviderCH", [
    function () {
      return {};
    },
  ])
  .directive("payuindiaccv2ComponentCH", [
    function () {
      return {};
    },
  ]);
angular
  .module("payuindiaupiModuleCH", [])
  .factory("payuindiaupiProviderCH", [
    function () {
      return {};
    },
  ])
  .directive("payuindiaupiComponentCH", [
    function () {
      return {};
    },
  ]);
angular
  .module("payuindianbModuleCH", [])
  .factory("payuindianbProviderCH", [
    function () {
      return {};
    },
  ])
  .directive("payuindianbComponentCH", [
    function () {
      return {};
    },
  ]);
angular
  .module("payuchileccModuleCH", [])
  .factory("payuchileccCardServiceCH", [
    function () {
      return {};
    },
  ])
  .factory("payuchileccProviderCH", [
    function () {
      return {};
    },
  ])
  .factory("payuchileccDropdownsCH", [
    function () {
      return {};
    },
  ])
  .directive("payuchileccComponentCH", [
    function () {
      return {};
    },
  ]);
angular
  .module("payubrazilccModuleCH", [])
  .factory("payubrazilccCardServiceCH", [
    function () {
      return {};
    },
  ])
  .factory("payubrazilccProviderCH", [
    function () {
      return {};
    },
  ])
  .factory("payubrazilccDropdownsCH", [
    function () {
      return {};
    },
  ])
  .directive("payubrazilccComponentCH", [
    function () {
      return {};
    },
  ]);
angular
  .module("payubrazilbbModuleCH", [])
  .factory("payubrazilbbProviderCH", [
    function () {
      return {};
    },
  ])
  .factory("payubrazilbbDropdownsCH", [
    function () {
      return {};
    },
  ])
  .directive("payubrazilbbComponentCH", [
    function () {
      return {};
    },
  ]);
angular
  .module("payucolombiaccModuleCH", [])
  .factory("payucolombiaccCardServiceCH", [
    function () {
      return {};
    },
  ])
  .factory("payucolombiaccProviderCH", [
    function () {
      return {};
    },
  ])
  .factory("payucolombiaccDropdownsCH", [
    function () {
      return {};
    },
  ])
  .directive("payucolombiaccComponentCH", [
    function () {
      return {};
    },
  ]);
angular
  .module("payucolombiapseModuleCH", [])
  .factory("payucolombiapseProviderCH", [
    function () {
      return {};
    },
  ])
  .factory("payucolombiapseDropdownsCH", [
    function () {
      return {};
    },
  ])
  .directive("payucolombiapseComponentCH", [
    function () {
      return {};
    },
  ]);
angular
  .module("payuperuccModuleCH", [])
  .factory("payuperuccCardServiceCH", [
    function () {
      return {};
    },
  ])
  .factory("payuperuccProviderCH", [
    function () {
      return {};
    },
  ])
  .factory("payuperuccDropdownsCH", [
    function () {
      return {};
    },
  ])
  .directive("payuperuccComponentCH", [
    function () {
      return {};
    },
  ]);
angular
  .module("payuargentinaccModuleCH", [])
  .factory("payuargentinaccCardServiceCH", [
    function () {
      return {};
    },
  ])
  .factory("payuargentinaccProviderCH", [
    function () {
      return {};
    },
  ])
  .factory("payuargentinaccDropdownsCH", [
    function () {
      return {};
    },
  ])
  .directive("payuargentinaccComponentCH", [
    function () {
      return {};
    },
  ]);
angular
  .module("datatranstwintModuleCH", [])
  .factory("datatranstwintIntegrationServiceCH", [
    function () {
      return {};
    },
  ])
  .factory("datatranstwintProviderCH", [
    function () {
      return {};
    },
  ])
  .directive("datatranstwintComponentCH", [
    function () {
      return {};
    },
  ]);
angular
  .module("datatransgooglepayModuleCH", [])
  .factory("datatransgooglepayIntegrationServiceCH", [
    function () {
      return {};
    },
  ])
  .factory("datatransgooglepayProviderCH", [
    function () {
      return {};
    },
  ])
  .directive("datatransgooglepayComponentCH", [
    function () {
      return {};
    },
  ]);
angular
  .module("datatransapplepayModuleCH", [])
  .factory("datatransapplepayIntegrationServiceCH", [
    function () {
      return {};
    },
  ])
  .factory("datatransapplepayProviderCH", [
    function () {
      return {};
    },
  ])
  .directive("datatransapplepayComponentCH", [
    function () {
      return {};
    },
  ]);
angular
  .module("volgaModuleCH", [])
  .factory("volgaProviderCH", [
    function () {
      return {};
    },
  ])
  .directive("volgaComponentCH", [
    function () {
      return {};
    },
  ]);
angular
  .module("vippsModuleCH", [])
  .factory("vippsCardServiceCH", [
    function () {
      return {};
    },
  ])
  .factory("vippsProviderCH", [
    function () {
      return {};
    },
  ])
  .directive("vippsComponentCH", [
    function () {
      return {};
    },
  ]);
angular
  .module("inbasModuleCH", [])
  .factory("inbasProviderCH", [
    function () {
      return {};
    },
  ])
  .directive("inbasComponentCH", [
    function () {
      return {};
    },
  ]);
angular
  .module("inbafModuleCH", [])
  .factory("inbafProviderCH", [
    function () {
      return {};
    },
  ])
  .directive("inbafComponentCH", [
    function () {
      return {};
    },
  ]);
angular
  .module("datatranspaypalModuleCH", [])
  .factory("datatranspaypalIntegrationServiceCH", [
    function () {
      return {};
    },
  ])
  .factory("datatranspaypalProviderCH", [
    function () {
      return {};
    },
  ])
  .directive("datatranspaypalComponentCH", [
    function () {
      return {};
    },
  ]);
angular
  .module("gmodocomoModuleCH", [])
  .factory("gmodocomoProviderCH", [
    function () {
      return {};
    },
  ])
  .factory("gmodocomoIntegrationServiceCH", [
    function () {
      return {};
    },
  ])
  .directive("gmodocomoComponentCH", [
    function () {
      return {};
    },
  ]);
angular
  .module("gmosoftbankModuleCH", [])
  .factory("gmosoftbankProviderCH", [
    function () {
      return {};
    },
  ])
  .factory("gmosoftbankIntegrationServiceCH", [
    function () {
      return {};
    },
  ])
  .directive("gmosoftbankComponentCH", [
    function () {
      return {};
    },
  ]);
angular
  .module("creditguardModuleCH", [])
  .factory("creditguardProviderCH", [
    function () {
      return {};
    },
  ])
  .factory("creditguardCardServiceCH", [
    function () {
      return {};
    },
  ])
  .directive("creditguardComponentCH", [
    function () {
      return {};
    },
  ]);
angular
  .module("gmoauModuleCH", [])
  .factory("gmoauProviderCH", [
    function () {
      return {};
    },
  ])
  .factory("gmoauIntegrationServiceCH", [
    function () {
      return {};
    },
  ])
  .directive("gmoauComponentCH", [
    function () {
      return {};
    },
  ]);
angular
  .module("gocardlessdropinModuleCH", [])
  .factory("gocardlessdropinCardServiceCH", [
    function () {
      return {};
    },
  ])
  .factory("gocardlessdropinProviderCH", [
    function () {
      return {};
    },
  ])
  .directive("gocardlessdropinComponentCH", [
    function () {
      return {};
    },
  ]);
angular
  .module("datatransCheckoutModule", [])
  .factory("datatransProvider", [
    function () {
      return {};
    },
  ])
  .directive("datatransFormComponent", [
    function () {
      return {};
    },
  ]);
angular
  .module("datatransPostfinanceCheckoutModule", [])
  .factory("datatransPostfinanceProvider", [
    function () {
      return {};
    },
  ])
  .directive("datatransPostfinanceFormComponent", [
    function () {
      return {};
    },
  ]);
angular
  .module("easypayCheckoutModule", [])
  .factory("easypayBoletoProvider", [
    function () {
      return {};
    },
  ])
  .factory("easypayDirectDebitProvider", [
    function () {
      return {};
    },
  ])
  .factory("easypayMbwayProvider", [
    function () {
      return {};
    },
  ])
  .factory("easypayMultibancoProvider", [
    function () {
      return {};
    },
  ])
  .directive("easypayMbwayFormComponent", [
    function () {
      return {};
    },
  ])
  .directive("easypayDirectDebitProviderFormComponent", [
    function () {
      return {};
    },
  ])
  .directive("easypayBillControls", [
    function () {
      return {};
    },
  ])
  .directive("easypayMultibancoFormComponent", [
    function () {
      return {};
    },
  ])
  .directive("easypayBoletoFormComponent", [
    function () {
      return {};
    },
  ]);
angular
  .module("klarnaCheckoutModule", [])
  .factory("klarnaProvider", [
    function () {
      return {};
    },
  ])
  .directive("klarnaFormComponent", [
    function () {
      return {};
    },
  ]);
angular
  .module("obiCheckoutModule", [])
  .factory("obiProvider", [
    function () {
      return {};
    },
  ])
  .factory("obiCheckoutService", [
    function () {
      return {};
    },
  ])
  .directive("obiFormComponent", [
    function () {
      return {};
    },
  ]);
angular
  .module("obiPaypalCheckoutModule", [])
  .factory("obiPaypalProvider", [
    function () {
      return {};
    },
  ])
  .directive("obiPaypalFormComponent", [
    function () {
      return {};
    },
  ]);
angular
  .module("sonyModuleCH", [])
  .factory("sonyCardServiceCH", [
    function () {
      return {};
    },
  ])
  .factory("sonyProviderCH", [
    function () {
      return {};
    },
  ])
  .directive("sonyComponentCH", [
    function () {
      return {};
    },
  ]);
angular
  .module("zlickModuleCH", [])
  .factory("zlickIntegrationServiceCH", [
    function () {
      return {};
    },
  ])
  .factory("zlickProviderCH", [
    function () {
      return {};
    },
  ])
  .directive("zlickComponentCH", [
    function () {
      return {};
    },
  ]);
angular
  .module("stripeelementsModuleCH", [])
  .factory("stripeelementsCardServiceCH", [
    function () {
      return {};
    },
  ])
  .factory("stripeelementsProviderCH", [
    function () {
      return {};
    },
  ])
  .directive("stripeelementsComponentCH", [
    function () {
      return {};
    },
  ]);
angular
  .module("chaseModuleCH", [])
  .factory("chaseCardServiceCH", [
    function () {
      return {};
    },
  ])
  .factory("chaseProviderCH", [
    function () {
      return {};
    },
  ])
  .directive("chaseComponentCH", [
    function () {
      return {};
    },
  ]);
angular
  .module("tp.directives", [])
  .directive("ngEnter", [
    function () {
      return {};
    },
  ])
  .directive("tpclipboard", [
    function () {
      return {};
    },
  ])
  .directive("tpUploader", [
    function () {
      return {};
    },
  ])
  .directive("ignoreDirty", [
    function () {
      return {};
    },
  ])
  .directive("fakeInput", [
    function () {
      return {};
    },
  ])
  .directive("tpImageCrop", [
    function () {
      return {};
    },
  ])
  .directive("tpShow", [
    function () {
      return {};
    },
  ])
  .directive("fadey", [
    function () {
      return {};
    },
  ])
  .directive("animatePosition", [
    function () {
      return {};
    },
  ])
  .directive("animateMargin", [
    function () {
      return {};
    },
  ])
  .directive("iframeContainer", [
    function () {
      return {};
    },
  ])
  .directive("errorSection", [
    function () {
      return {};
    },
  ])
  .directive("warningSection", [
    function () {
      return {};
    },
  ])
  .directive("autoSelect", [
    function () {
      return {};
    },
  ])
  .directive("zeroClipboard", [
    function () {
      return {};
    },
  ])
  .directive("selectAllCheckbox", [
    function () {
      return {};
    },
  ])
  .directive("tpDisableEnter", [
    function () {
      return {};
    },
  ])
  .directive("tpDecimalFilter", [
    function () {
      return {};
    },
  ])
  .directive("searchInput", [
    function () {
      return {};
    },
  ])
  .directive("tpCurrencyInput", [
    function () {
      return {};
    },
  ])
  .directive("preventTypingNonNumber", [
    function () {
      return {};
    },
  ])
  .directive("tpDropDown", [
    function () {
      return {};
    },
  ])
  .directive("tpUnitPopover", [
    function () {
      return {};
    },
  ])
  .directive("tpCharLimit", [
    function () {
      return {};
    },
  ])
  .directive("onEnter", [
    function () {
      return {};
    },
  ])
  .directive("tpHeaderDescription", [
    function () {
      return {};
    },
  ])
  .directive("d3Planet", [
    function () {
      return {};
    },
  ])
  .directive("translationsProgressMeter", [
    function () {
      return {};
    },
  ])
  .directive("translationsTotal", [
    function () {
      return {};
    },
  ])
  .directive("setIframeHeightOnload", [
    function () {
      return {};
    },
  ])
  .directive("tpInfiniteScroll", [
    function () {
      return {};
    },
  ])
  .filter("tpDateFormatFilter", [
    function () {
      return {};
    },
  ]);
angular
  .module("tp.ui.address", [])
  .filter("formatAddress", [
    function () {
      return {};
    },
  ])
  .directive("regionSelect", [
    function () {
      return {};
    },
  ]);
angular
  .module("tp.ui.grid", [])
  .filter("toCssClass", [
    function () {
      return {};
    },
  ])
  .directive("tpGrid", [
    function () {
      return {};
    },
  ]);
angular.module("tp.ui.cc", []).directive("tpCreditCardForm", [
  function () {
    return {};
  },
]);
angular.module("checkoutGoToModule", []).factory("checkoutGoTo", [
  function () {
    return {};
  },
]);
var tpComponentsModule = angular.module("tpComponentsModule", ["generalModule", "containerServiceModule"]);
tpComponentsModule.directive("a", [
  "trackExternalEvent",
  "getTrackingId",
  "addQueryParameterToUrl",
  "$timeout",
  "ngEventService",
  function (e, t, n, r, o) {
    return {
      restrict: "E",
      link: function (a, i) {
        var s;
        r(function () {
          var e = i.attr("href");
          function a() {
            var e = void 0 === i.attr("noptid"),
              r = t();
            e && r && i.attr("href", n(i.attr("href"), "_ptid", r));
          }
          e &&
            0 === e.indexOf("http") &&
            ("_parent" !== i.attr("target") && "_top" !== i.attr("target") && i.attr("target", "_blank"),
            a(),
            (s = o.subscribe(EVENT_TRACKING_ID_CHANGED, function () {
              r(function () {
                a();
              });
            })));
        }),
          i.on("click", function (t) {
            if ("click" === t.type) {
              var n = i.attr("href") || "";
              0 === n.lastIndexOf("http", 0) &&
                e(
                  "EXTERNAL_LINK",
                  decodeURI(
                    (function (e) {
                      var t = e.split(/[?#]/)[0],
                        n = t.length - 1;
                      return "/" === t[n] && (t = t.slice(0, n)), t;
                    })(n)
                  ),
                  {
                    href: encodeURI(n),
                  }
                );
            }
          }),
          a.$on("$destroy", function () {
            s && s();
          });
      },
    };
  },
]),
  tpComponentsModule.directive("radioTrackBy", function () {
    return {
      restrict: "A",
      scope: {
        ngModel: "=",
        ngValue: "=",
        radioTrackBy: "@",
      },
      link: function (e) {
        e.ngValue[e.radioTrackBy] === e.ngModel[e.radioTrackBy] && (e.ngModel = e.ngValue);
      },
    };
  }),
  tpComponentsModule.factory("getExternalEventParams", function () {
    return function (e) {
      var t,
        n = {};
      for (var r in e) e.hasOwnProperty(r) && 0 === r.indexOf("externalEvent") && "externalEvent" !== r && (n[((t = r.split("externalEvent")[1]), t.charAt(0).toLowerCase() + t.slice(1))] = e[r]);
      return n;
    };
  }),
  tpComponentsModule.directive("externalEvent", [
    "eventService",
    "getExternalEventParams",
    "trackExternalEvent",
    function (e, t, n) {
      return {
        restrict: "A",
        link: function (r, o, a) {
          o.on("submit click", function (r) {
            if (~["click", "submit"].indexOf(r.type)) {
              var o = t(a);
              n("EXTERNAL_EVENT", a.externalEvent, o),
                e.customEvent("customEvent", {
                  eventName: a.externalEvent,
                  params: t(a),
                });
            }
          });
        },
      };
    },
  ]),
  tpComponentsModule.directive("showIf", [
    "$animate",
    function (e) {
      return {
        restrict: "A",
        link: function (e, t, n) {
          e.$watch(n.showIf, function (e) {
            t.html(toBoolean(e) ? e : ""), t.toggleClass("ng-hide", toBoolean(e));
          });
        },
      };
    },
  ]),
  tpComponentsModule.factory("checkMobile", [
    "$q",
    "$timeout",
    "containerService",
    function (e, t, n) {
      return function () {
        return n.getNewWidth() <= 600;
      };
    },
  ]),
  tpComponentsModule.directive("mobile", [
    "checkMobile",
    function (e) {
      return {
        restrict: "A",
        transclude: !0,
        scope: {},
        template: '<div class="mobile-mode" ng-if="check()" ng-transclude></div>',
        controller: [
          "$scope",
          function (t) {
            t.check = function () {
              return e();
            };
          },
        ],
      };
    },
  ]),
  tpComponentsModule.directive("desktop", [
    "checkMobile",
    function (e) {
      return {
        restrict: "A",
        transclude: !0,
        scope: {},
        template: '<div class="desktop-mode" ng-if="check()" ng-transclude></div>',
        controller: [
          "$scope",
          function (t) {
            t.check = function () {
              return !e();
            };
          },
        ],
      };
    },
  ]),
  tpComponentsModule.directive("onEnter", [
    "$parse",
    function (e) {
      return function (t, n, r) {
        var o = e(r.onEnter);
        n.bind("keyup", function (e) {
          13 === e.keyCode &&
            t.$apply(function () {
              o(t, {
                $event: e,
              });
            });
        });
      };
    },
  ]),
  tpComponentsModule.directive("errorMessage", [
    "$parse",
    function (e) {
      return {
        scope: !1,
        controller: [
          "$scope",
          "$element",
          "$attrs",
          "ngEventService",
          "errorService",
          "shakeService",
          function (e, t, n, r, o, a) {
            var i = o(e).TYPES,
              s = o(e).getId(),
              c = n.name,
              l = n.errorMessage,
              u = null,
              d = function () {
                u && u.remove(), t.removeClass("error");
              },
              p = r.subscribe(EVENT_ERRORS_CHANGED, function () {
                d();
                var n = null,
                  r = o(e).errors();
                angular.forEach(r, function (e) {
                  angular.isObject(e) && e.field === c && e.type === i.COMPONENT && (n = e);
                }),
                  !t.is(":visible") || !n || (n.displayed && n.displayedOn !== s) || ((n.displayed = !0), "shake" === l ? (a.shake(t), t.addClass("error")) : ((u = $("<div class='" + l + "'>" + n.message + "</div>")), t.after(u), t.addClass("error")));
              });
            t.click(function () {
              d();
            }),
              e.$on("$destroy", function () {
                p();
              });
          },
        ],
      };
    },
  ]),
  tpComponentsModule.directive("config", [
    "containerService",
    "configService",
    function (e, t) {
      return {
        restrict: "E",
        link: function (n, r, o) {
          isNumber(o.width) && (e.setConfigWidth(o.width), e.resize());
          var a = !1;
          angular.forEach(o, function (e, n) {
            var r;
            (r = "$"), n.substr(0, r.length) !== r && ((a = !0), t.setProperty(n, e));
          }),
            a && t.changed();
        },
      };
    },
  ]),
  tpComponentsModule.directive("hideIfBlank", [
    "$animate",
    function (e) {
      return {
        link: function (e, t) {
          e.$watch(
            function () {},
            function () {
              var e = t.text().replace(/[\s\uFEFF\xA0\n]/gim, ""),
                n = 0 === t.children().length && "" === e;
              t.toggleClass("ng-hide", n);
            }
          );
        },
      };
    },
  ]),
  tpComponentsModule.directive("reCaptcha", [
    "ngEventService",
    "checkMobile",
    "containerService",
    function (e, t, n) {
      var r,
        o,
        a = 3;
      return {
        restrict: "EA",
        template: "",
        scope: {
          key: "@",
          showResetButton: "=?",
          onResolve: "&?",
          onReady: "&?",
          onExpired: "&?",
        },
        link: function (i, s) {
          var c = !1;
          if (!i.key) return void console.warn("There is no re-captcha site-key. See more: https://developers.google.com/recaptcha/docs/display");
          function l(e) {
            if (0 !== e)
              try {
                (r = grecaptcha.render(s.get(0), {
                  sitekey: i.key,
                  callback: m,
                  "expired-callback": function () {
                    i.onExpired && i.onExpired();
                  },
                })),
                  i.showResetButton && (s.addClass("re-captcha--right-padded"), p(r)),
                  $(window).on("resize", _.debounce(u, 300)),
                  i.onReady &&
                    i.onReady({
                      id: r,
                    });
              } catch (t) {
                setTimeout(function () {
                  l(e--);
                }, 1e3);
              }
            else console.warn("ReCaptcha can't be initialized");
          }
          function u() {
            d(),
              (function () {
                var e = n.getNewWidth() > 320;
                if (!c) return void s.removeClass("re-captcha--mobile re-captcha--mobile-wide");
                e ? s.addClass("re-captcha--mobile-wide") : s.removeClass("re-captcha--mobile-wide");
                s.addClass("re-captcha--mobile");
              })();
          }
          function d() {
            c = t();
          }
          function p(e) {
            if (grecaptcha && grecaptcha.reset) {
              var t = document.createElement("div");
              (t.className = "reset-icon pn-icon--refresh"),
                (t.onclick = function () {
                  grecaptcha.reset(e), p(e);
                }),
                (n = t),
                angular.element(".reset-icon.pn-icon--refresh").length || s.append(n);
            }
            var n;
          }
          function m(e) {
            s.addClass("captcha-resolved"),
              i.onResolve &&
                i.$apply(function () {
                  i.onResolve({
                    response: e,
                  });
                });
          }
          l(a),
            d(),
            (o = e.subscribe("RECAPTCHA_RESET", function () {
              grecaptcha && grecaptcha.reset && grecaptcha.reset(r);
            })),
            (i.resolve = m),
            s.on("$destroy", o);
        },
      };
    },
  ]),
  tpComponentsModule.directive("ngEnter", function () {
    return function (e, t, n) {
      t.bind("keydown keypress", function (t) {
        13 === t.which &&
          (e.$apply(function () {
            e.$eval(n.ngEnter);
          }),
          t.preventDefault());
      });
    };
  }),
  angular.module("exceptionHandler", []).factory("$exceptionHandler", [
    "$log",
    function (e) {
      return function (t, n) {
        e.warn(t);
        var r = window.pnErrorWatcher;
        r && r.manualLog(t);
      };
    },
  ]),
  (window.PP_LIST = {
    CREDIT_CARD: 4,
    AMAZON: 8,
    MOCK: 5,
    ZERO: 0,
    PAYPAL_BT: 11,
    WORLDPAY_HPP: 12,
    WORLDPAY_PAYPAL: 13,
    WORLDPAY_IDEAL: 14,
    WORLDPAY_ELV: 15,
    SPREEDLY_CC: 16,
    SPREEDLY_STRIPE_CC: 17,
    SPREEDLY_BEANSTREAM: 18,
    EDGIL_PAYWAY: 19,
    WORLDPAY_CC_TOKEN: 20,
    SPREEDLY_PAYU_LATAM: 21,
    PAYPAL_EXPRESS_CHECKOUT: 22,
    SPREEDLY_OPENPAY: 23,
    EIGEN: 24,
    APPLE_PAY_BT: 25,
    OPENPAY_CASH: 26,
    EASYPAY_MULTIBANCO: 28,
    EASYPAY_MBWAY: 29,
    EASYPAY_DIRECT_DEBIT: 30,
    EASYPAY_BOLETO: 31,
    KLARNA: 32,
    OBI: 33,
    OBI_PAYPAL: 34,
    DATATRANS: 35,
    DATATRANS_POSTFINANCE: 36,
    ONET: 37,
    APPLE_PAY_SS: 38,
    CYBER_SOURCE: 39,
    STRIPE: 40,
    STRIPE_APPLEPAY: 41,
    PAYWAY_APPLEPAY: 42,
    WIRECARD: 45,
    CREDIT_GUARD_CC: 66,
    PAY_U_BRAZIL_BOLETO: 62,
    VOLGA: 63,
    INVOICE_BASED_SECOND: 72,
    INVOICE_BASED_FIRST: 75,
  }),
  angular.extend(window, window.PP_LIST);
var generalModule = angular.module("generalModule", ["ui.router", "ajaxServices", "ngSanitize"]);
function getMonths() {
  return {
    "01": "1 - Jan",
    "02": "2 - Feb",
    "03": "3 - Mar",
    "04": "4 - Apr",
    "05": "5 - May",
    "06": "6 - Jun",
    "07": "7 - Jul",
    "08": "8 - Aug",
    "09": "9 - Sept",
    10: "10 - Oct",
    11: "11 - Nov",
    12: "12 - Dec",
  };
}
function getYears() {
  for (var e = new Date().getFullYear(), t = {}, n = e; n < e + 13; ++n) {
    t[(n + "").substring(2)] = n;
  }
  return t;
}
function isString(e) {
  return "string" == typeof e;
}
function isNumber(e) {
  return e && "" !== e && !isNaN(e);
}
function lowercase(e) {
  return isString(e) ? e.toLowerCase() : e;
}
function toBoolean(e) {
  if ("function" == typeof e) e = !0;
  else if (e && 0 !== e.length) {
    var t = lowercase("" + e);
    e = !("f" === t || "0" === t || "false" === t || "no" === t || "n" === t || "[]" === t);
  } else e = !1;
  return e;
}
function _randomString(e) {
  e || (e = 5);
  for (var t = "", n = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789", r = 0; r < e; r++) t += n.charAt(Math.floor(Math.random() * n.length));
  return t;
}
generalModule.factory("cookieService", function () {
  var e = {
    getCookie: function (e) {
      for (var t = e + "=", n = decodeURIComponent(document.cookie).split(";"), r = 0; r < n.length; r++) {
        for (var o = n[r]; " " === o.charAt(0); ) o = o.substring(1);
        if (0 === o.indexOf(t)) return o.substring(t.length, o.length);
      }
      return "";
    },
    setCookie: function (e, t, n, r) {
      var o = e + "=" + t + ";expires=" + n;
      r && (o += ";path=" + r), (document.cookie = o);
    },
    eraseCookie: function (e, t) {
      this.setCookie(e, "", new Date().toUTCString(), t);
    },
  };
  return e;
});
var util = {
    debug: getParameterByName("debug"),
    log: function () {
      if (util.debug && void 0 !== window.console && void 0 !== window.console.log) {
        var e = arguments;
        (function () {
          var e = ["__webdriver_evaluate", "__selenium_evaluate", "__webdriver_script_function", "__webdriver_script_func", "__webdriver_script_fn", "__fxdriver_evaluate", "__driver_unwrapped", "__webdriver_unwrapped", "__driver_evaluate", "__selenium_unwrapped", "__fxdriver_unwrapped"],
            t = ["_phantom", "__nightmare", "_selenium", "callPhantom", "callSelenium", "_Selenium_IDE_Recorder"];
          for (var n in t) {
            var r = t[n];
            if (window[r]) return !0;
          }
          for (var o in e) {
            var a = e[o];
            if (window.document[a]) return !0;
          }
          for (var i in window.document) if (i.match(/\$[a-z]dc_/) && window.document[i].cache_) return !0;
          return !!((window.external && window.external.toString && window.external.toString() && -1 !== window.external.toString().indexOf("Sequentum")) || window.document.documentElement.getAttribute("selenium") || window.document.documentElement.getAttribute("webdriver") || window.document.documentElement.getAttribute("driver"));
        })() &&
          (e = (function (e) {
            var t = "";
            try {
              for (var n = 0; n < e.length; n++)
                try {
                  t += JSON.stringify(e[n]) + ", ";
                } catch (e) {
                  t += "" + e;
                }
              return (e = [t]);
            } catch (t) {
              return e;
            }
          })(e)),
          "object" == typeof window.console.log ? window.console.log.apply.call(console.log, console, e) : console.log.apply(console, e);
      }
    },
  },
  urlParams = null;
function getParameterByName(e) {
  if (!urlParams) {
    var t,
      n = /\+/g,
      r = /([^&=]+)=?([^&]*)/g,
      o = function (e) {
        return decodeURIComponent(e.replace(n, " "));
      },
      a = window.location.search.substring(1);
    for (urlParams = {}; (t = r.exec(a)); ) urlParams[o(t[1])] = o(t[2]);
  }
  var i = urlParams[e];
  return !i && window.TPParam && window.TPParam.params && (i = window.TPParam.params[e]), i;
}
function getQueryParamInStringByName(e, t) {
  var n = new RegExp("[\\?&]" + t + "=([^&#]*)").exec(e);
  return null === n ? "" : decodeURIComponent(n[1].replace(/\+/g, " "));
}
function getIntParam(e, t) {
  var n = getParameterByName(e);
  return void 0 !== n && isNaN(n) ? t : new Number(n);
}
BaseComponentController = {
  _isValid: function () {
    return !0;
  },
  displayErrors: function (e, t, n, r) {
    if (t)
      if (Array.isArray(t))
        for (var o = 0; o < t.length; o++) {
          let e = t[o].msg || t[o].message;
          e && "" !== e.trim() && a(e);
        }
      else "object" != typeof t ? "string" == typeof t && a(t) : t.message ? a(t.message) : util.log("Unable to extract error message", t);
    function a(t) {
      n(e).global(t), r.checkoutPaymentErrorEvent(t);
    }
  },
};
var EVENT_CHECKOUT_PAYMENT_METHODS_CHANGED = "EVENT_CHECKOUT_PAYMENT_METHODS_CHANGED",
  EVENT_CHECKOUT_TERM_SELECTED = "EVENT_CHECKOUT_TERM_SELECTED",
  EVENT_APPLY_REDEEM_CODE = "EVENT_APPLY_REDEEM_CODE",
  EVENT_CHECKOUT_CONSENT_CHANGED = "EVENT_CHECKOUT_CONSENT_CHANGED",
  EVENT_CHECKOUT_RESET_SELECTED_PAYMENT_METHOD = "EVENT_CHECKOUT_RESET_SELECTED_PAYMENT_METHOD",
  EVENT_CHECKOUT_PRICE_CHANGED = "EVENT_CHECKOUT_PRICE_CHANGED",
  EVENT_CHECKOUT_REDEEM_DONE = "EVENT_CHECKOUT_REDEEM_DONE",
  EVENT_APPLE_PAY_CAN_MAKE_PAYMENTS = "EVENT_APPLE_PAY_CAN_MAKE_PAYMENTS",
  EVENT_BILLING_COUNTRY_SELECTED = "EVENT_BILLING_COUNTRY_SELECTED",
  EVENT_COUNTRY_OF_RESIDENCE_SELECTED = "EVENT_COUNTRY_OF_RESIDENCE_SELECTED",
  EVENT_SAME_RESIDENCE_CHECKBOX_CHANGED = "EVENT_SAME_RESIDENCE_CHECKBOX_CHANGED",
  EVENT_BILLING_FROM_TAX_REQUEST = "EVENT_BILLING_FROM_TAX_REQUEST",
  EVENT_CC_ZIP_CODE_CHANGED = "EVENT_CC_ZIP_CODE_CHANGED",
  EVENT_USER_ACCESS_CHANGED = "EVENT_USER_ACCESS_CHANGED",
  EVENT_ERRORS_CHANGED = "EVENT_ERRORS_CHANGED",
  EVENT_TERMINAL_ERROR = "EVENT_TERMINAL_ERROR",
  EVENT_CONFIG_RELOAD = "EVENT_CONFIG_RELOAD",
  EVENT_STATS_TRACKED = "EVENT_STATS_TRACKED",
  EVENT_TRACKING_ID_CHANGED = "EVENT_TRACKING_ID_CHANGED",
  EVENT_PAY_WITH_NEW_CHANGED = "EVENT_PAY_WITH_NEW_CHANGED",
  EVENT_PAY_WHAT_YOU_WANT_SHOULD_BE_APPLIED = "EVENT_PAY_WHAT_YOU_WANT_SHOULD_BE_APPLIED",
  EVENT_EXPERIAN_ADDRESS_CHANGED = "EVENT_EXPERIAN_ADDRESS_CHANGED",
  EVENT_TAX_RESET_ERRORS = "EVENT_TAX_RESET_ERRORS",
  EVENT_HIGHLIGHT_ERROR_FIELDS = "EVENT_HIGHLIGHT_ERROR_FIELDS",
  ENABLE_SAVE_BUTTON = "ENABLE_SAVE_BUTTON",
  DISABLE_SAVE_BUTTON = "DISABLE_SAVE_BUTTON",
  EVENT_SETUP_CUSTOM_VARIABLES = "setupCustomVariables",
  EVENT_SETUP_AFFILIATE_STATE = "setupAffiliateState",
  EVENT_SETUP_EVT_FIELDS = "setupEVTFields",
  EVENT_ADD_CARD = "EVENT_ADD_CARD",
  EVENT_INIT_BANCARD = "EVENT_INIT_BANCARD",
  EVENT_GOTO_PREVIOUS_STATE = "EVENT_GOTO_PREVIOUS_STATE",
  EVENT_TEMPLATE_RELOADED = "EVENT_TEMPLATE_RELOADED",
  EVENT_TEMPLATE_LOGIN_CHECK_FINISHED = "EVENT_TEMPLATE_LOGIN_CHECK_FINISHED",
  EVENT_TEMPLATE_LOGIN_SUCCESS = "EVENT_TEMPLATE_LOGIN_SUCCESS";
generalModule.factory("ngEventService", [
  "$rootScope",
  function (e) {
    var t = {
      fire: function (t, n, r, o, a, i) {
        if (!t || "" === t) throw new Error("eventName is required");
        util.log("[NG EVENT SERVICE] Firing event:", arguments), e.$broadcast(t, n, r, o, a, i);
      },
      subscribe: function (t, n) {
        if (!t || "" === t) throw new Error("eventName is required");
        if (!n) throw new Error("callback is required");
        return e.$on(t, n.bind(arguments));
      },
    };
    return t;
  },
]),
  generalModule.factory("stateService", function () {
    var e = {
      active: !(TPParam && TPParam.params ? TPParam.params : {}).preload,
    };
    return {
      get: function (t) {
        return e[t];
      },
      set: function (t, n) {
        e[t] = n;
      },
    };
  }),
  generalModule.factory("eventLogger", [
    "$http",
    "$window",
    function (e, t) {
      var n = {
        log: "https://api.tinypass.com/api/v3/anon/error/log",
      };
      function r(r, a) {
        try {
          var i = (function () {
              var e = {
                  aid: null,
                  offerId: null,
                  gaTrackingId: null,
                },
                n = location.href.match(/aid=([\w\d]+)&/),
                r = location.href.match(/offerId=([\w\d]+)&/);
              return (
                n && (e.aid = n[1]),
                r && (e.offerId = r[1]),
                t.ga &&
                  t.ga(function (t) {
                    e.gaTrackingId = t.get("trackingId");
                  }),
                e
              );
            })(),
            s = (function (e, t, n) {
              var r,
                o,
                a = [];
              try {
                r =
                  "string" == typeof t
                    ? {
                        message: t,
                      }
                    : JSON.stringify(t);
              } catch (e) {
                r = "parse error";
              }
              try {
                o = JSON.stringify(n);
              } catch (e) {
                o = "meta error";
              }
              return a.push("=====checkout event====="), a.push("eventName: " + e), t && a.push("payload: " + r), a.push("meta: " + o), a.push("=====event body end====="), a.join("\n");
            })(r, a, i);
          if (!i) return;
          if (-1 === ["lGr3ciYmC7", "6qv8OniKQO", "bMMF5VBfpu"].indexOf(i.aid) && "edgilHostedPageSubmitForm" !== r) return;
          e({
            method: "POST",
            url: n.log,
            data: "log_message=" + o(s),
            headers: {
              "Content-Type": "application/x-www-form-urlencoded",
              "Piano-request-without-spinner": 1,
            },
          });
        } catch (e) {
          console.warn("can't log event due to:", e);
        }
      }
      function o(e) {
        var t = getParameterByName("widget"),
          n = [
            {
              message: e,
              tags: t ? [t] : [],
            },
          ];
        return JSON.stringify(n);
      }
      return {
        logGaEvent: function (e) {
          r("gaEvent", e);
        },
        logGaFailedEvent: function (e) {
          r("gaEvent [FAILED]", e);
        },
        logEvent: r,
      };
    },
  ]),
  generalModule.factory("gaService", [
    "$window",
    "stateService",
    "integrationEventsService",
    "eventLogger",
    "eventService",
    function (e, t, n, r, o) {
      var a = ["showOffer", "termSelected", "promoApplied", "promoInvalid", "loginSuccess", "loginFailed", "registrationFailed", "registrationSuccess", "checkoutSuccess"],
        i = {
          sendGoogleAnalyticsEvent: function (e) {
            if (e) {
              e.eventCategory = e.eventAction;
              var t = " ";
              (e.eventAction = ""),
                angular.forEach(e.params, function (n, r) {
                  n && ((e.eventAction += t + r + "_" + n), (t = "____"), (e.eventLabel += " " + r + ":" + n));
                });
              var n = {};
              -1 !== a.indexOf(e.eventCategory) && (n.nonInteraction = !0);
              var i = {
                eventCategory: e.eventCategory,
                eventAction: e.eventAction,
                eventLabel: e.eventLabel,
              };
              o.emitGAEvent(Object.assign(i, n)), r.logGaEvent(e);
            }
          },
        };
      return i;
    },
  ]),
  generalModule.factory("statsService", [
    "ngEventService",
    "stateService",
    "$q",
    "$http",
    function (e, t, n, r) {
      var o = {},
        a = null,
        i = null,
        s = [],
        c = [],
        l = [],
        u = !1,
        d = null,
        p = "tpcc_",
        m = "terms",
        f = ["aid", "preview", "userProvider", "userToken", "url", "tags", "tbc", "contentCreated", "contentSection", "contentAuthor", "experienceId", "experienceExecutionId", "experienceActionId", "pageViewId", "visitId", "trackingId", "previewTemplateVersion", "offerId", "checkoutFlowId", "offerTemplateId", "templateId", "templateVariantId", "offerTemplateVariantId", "pageTitle", "referrerUrl", "templatePubId", "templateVersionPubId", "templateVersion", "templateCategory", "isPasswordlessCheckoutEnabled", "isSingleStepEnabled", "isDoubleOptInEnabled", "affiliateState"];
      function g() {
        if (i) return n.when(v());
        var e = n.defer();
        return s.push(e), e.promise;
      }
      function h() {
        if (i) return n.when(E());
        var e = n.defer();
        return c.push(e), e.promise;
      }
      function E() {
        return u
          ? {
              checkoutStats: o,
            }
          : {
              initStatParams: i,
            };
      }
      function v() {
        return {
          checkoutStats: o,
          initStatParams: i,
        };
      }
      function C(e) {
        g().then(function () {
          angular.extend(o, e);
        });
      }
      function y(e) {
        d = e;
      }
      return {
        getStatsPayload: h,
        getStats: g,
        mergeStats: C,
        getParams: function () {
          var e = n.defer();
          return a ? e.resolve(a) : l.push(e), e.promise;
        },
        trackView: function (e) {
          y(e),
            "offer" !== e &&
              TPParam.TRACK_VIEW &&
              h().then(function (t) {
                r({
                  method: "POST",
                  url: TPParam.TRACK_VIEW,
                  params: {
                    view: e,
                  },
                  data: t,
                  headers: {
                    "Piano-request-without-spinner": 1,
                  },
                }).then(function (e) {
                  e && e.models && e.models.checkoutStats && C(e.models.checkoutStats);
                });
              });
        },
        setCheckoutView: y,
        getPageView: function () {
          let e = v(),
            t = null;
          e && e.initStatParams && (t = e.initStatParams.tbc);
          let n = null;
          return (
            e && e.initStatParams && (n = e.initStatParams.pageViewId),
            {
              tbc: t,
              pageViewId: n,
            }
          );
        },
        handleTrackStatEvent: function (n, g) {
          function h(e, t) {
            e &&
              $.each(e, function (e, n) {
                0 === e.indexOf(p) && (t[e] = n);
              });
          }
          function C(e, t, n) {
            (o = t), (a = e), (i = n);
          }
          t.set("active", !0),
            TPParam.TRACK_SHOW &&
              ((i = (function (e, t) {
                var n = {};
                return (
                  (function (e, t, n) {
                    f.forEach(function (r) {
                      e && e[r] ? (n[r] = e[r]) : t && t[r] && (n[r] = t[r]);
                    });
                  })(e, t, n),
                  (function (e, t, n) {
                    var r;
                    if ((e && e[m] ? (r = e[m]) : t && t[m] && (r = t[m]), Array.isArray(r))) {
                      var o = [];
                      r.forEach(function (e) {
                        e && o.push(e.termId);
                      }),
                        (n.termIds = o);
                    }
                  })(e, t, n),
                  h(t, n),
                  h(e, n),
                  (function (e) {
                    e.checkoutView = d;
                  })(n),
                  n
                );
              })(g, TPParam.config)),
              C(g, o, i),
              s.forEach(function (e) {
                e.resolve(v());
              }),
              (s = []),
              c.forEach(function (e) {
                e.resolve(E());
              }),
              (c = []),
              l.forEach(function (e) {
                e.resolve(a);
              }),
              (l = []),
              e.fire(EVENT_STATS_TRACKED, {
                params: a,
                stat: o,
              }),
              r({
                method: "POST",
                url: (function () {
                  let e = TPParam.TRACK_SHOW,
                    t = getParameterByName("lang");
                  return t && (e = e + "?lang=" + t), e;
                })(),
                data: {
                  initStatParams: i,
                },
                headers: {
                  "Piano-request-without-spinner": 1,
                },
              }).then(function (e) {
                (u = !0), C(g, e.data.models.stats, i);
              }));
        },
      };
    },
  ]),
  generalModule.factory("browserIdService", [
    "ngEventService",
    "$q",
    function (e, t) {
      var n = t.defer();
      return (
        e.subscribe("passBrowserId", function (e, t) {
          n.resolve(t.browserId);
        }),
        {
          getBrowserId: function () {
            return n.promise;
          },
        }
      );
    },
  ]),
  generalModule.factory("configService", [
    "ngEventService",
    function (e) {
      var t = {};
      return {
        get: function () {
          return t;
        },
        setProperty: function (e, n) {
          t[e] = n;
        },
        changed: function () {
          e.fire(EVENT_CONFIG_RELOAD, t);
        },
      };
    },
  ]),
  generalModule.factory("apiService", [
    "$http",
    function (e) {
      var t = {
        method: "post",
        headers: {
          "Piano-request-without-spinner": 1,
        },
      };
      return {
        call: function (n, r, o) {
          var a = angular.copy(t);
          return (a.url = "/api/v3" + n), o && (a.method = o), (a.params = r), e(a);
        },
      };
    },
  ]),
  generalModule.factory("modalService", [
    "$rootScope",
    "$q",
    "$http",
    "$templateCache",
    "$injector",
    "$timeout",
    "$document",
    "$compile",
    "$controller",
    function (e, t, n, r, o, a, i, s, c) {
      var l = {},
        u = {
          created: !1,
          visible: !1,
          domEl: null,
        },
        d = {
          created: !1,
          scope: null,
          domEl: null,
        };
      return (
        (l.openDialog = function (a) {
          var l,
            p,
            m,
            f = {
              close: function (e) {
                !(function (e, t, n) {
                  var r = t.speed || 600;
                  u.created &&
                    u.visible &&
                    ($(u.domEl).animate(
                      {
                        opacity: 0,
                      },
                      r,
                      "swing"
                    ),
                    $(u.domEl).removeClass("active"),
                    (u.visible = !1)),
                    d.created &&
                      $(d.domEl).animate(
                        {
                          opacity: 0,
                          marginTop: 0,
                        },
                        r,
                        "swing",
                        function () {
                          $(d.domEl).removeClass("active"), $(d.domEl).removeClass("error"), d.domEl.remove(), d.scope.$destroy(), (d.scope = null), (d.domEl = null), (d.created = !1), n && n();
                        }
                      );
                })(0, a, e);
              },
            };
          if ((util.log("MODAL OPTIONS", a), !a.template && !a.templateUrl)) throw new Error("One of template or templateUrl options is required.");
          t.all(
            [
              ((m = a),
              m.template
                ? t.when(m.template)
                : n
                    .get(m.templateUrl, {
                      cache: r,
                    })
                    .then(function (e) {
                      return e.data;
                    })),
            ].concat(
              ((l = a.resolve),
              (p = []),
              angular.forEach(l, function (e, n) {
                (angular.isFunction(e) || angular.isArray(e)) && p.push(t.when(o.invoke(e)));
              }),
              p)
            )
          ).then(function (t) {
            var n = (a.scope || e).$new();
            n.close = f.close;
            var r = {},
              o = 1;
            a.controller &&
              ((r.$scope = n),
              (r.$modalInstance = f),
              angular.forEach(a.resolve, function (e, n) {
                r[n] = t[o++];
              }),
              c(a.controller, r)),
              (function (t, n, r) {
                var o = i.find("body").eq(0);
                if (!u.created) {
                  var a = e.$new(!0),
                    c = s('<div class="modal-overlay"></div> ')(a);
                  o.append(c), (u.created = !0), (u.domEl = c);
                }
                if (!u.visible) {
                  var l = $(u.domEl),
                    p = r.speed || 600;
                  l.addClass("active"),
                    l.animate(
                      {
                        opacity: 0.7,
                      },
                      p
                    ),
                    (u.visible = !0);
                }
                var m = angular.element('<div class="modal ' + (r.class || "") + '"></div>');
                m.addClass("active"),
                  m.animate(
                    {
                      opacity: 1,
                    },
                    p
                  ),
                  m.html(n.content);
                var f = s(m)(n.scope);
                (d.created = !0), (d.scope = n.scope), (d.domEl = m), o.append(f);
              })(
                0,
                {
                  scope: n,
                  content: t[0],
                },
                a
              );
          });
        }),
        (l.getModalEl = function () {
          return d ? d.domEl : null;
        }),
        l
      );
    },
  ]),
  generalModule.factory("shakeService", function () {
    var e = {
      shake: function (e) {
        for (var t = Math.random() < 0.5 ? -2 : 2, n = 0; n < 10; n++)
          $(e).animate(
            {
              "margin-left": (t = -t) + "px",
            },
            10 + 2 * n
          );
        $(e).animate(
          {
            "margin-left": 0,
          },
          5
        );
      },
    };
    return e;
  }),
  generalModule.factory("EventManager", function () {
    return function () {
      var e = {};
      return {
        emit: function (t, n) {
          r(t);
          var o = e[t];
          if (!o) return void console.info("Event `", t, "` with no subscribers was emitted.");
          o.forEach(function (e) {
            e.call(this, n);
          });
        },
        subscribe: t,
        getEventSubscriptionFunc: function (e) {
          return t.bind(null, e);
        },
        unsubscribe: n,
      };
      function t(t, o) {
        r(t),
          (function (e) {
            if ("function" != typeof e) throw new TypeError("Expected callback to be a function, but got " + e);
          })(o);
        var a = e[t];
        return a || (a = e[t] = []), a.push(o), n.bind(null, t, o);
      }
      function n(t, n) {
        r(t);
        var o = e[t];
        if (o) {
          var a = o.indexOf(n);
          -1 !== a ? o.splice(a, 1) : console.warn("Given callback was not found for the event `{0}`.".format(t));
        } else console.warn("Attempt to unsubscribe from the unknown event `{0}`.".format(t));
      }
      function r(e) {
        if (!e) throw new TypeError("Expected event name to be a non-empty string, but got " + e);
      }
    };
  }),
  generalModule.directive("customScript", [
    "$parse",
    function (e) {
      return {
        restrict: "EA",
        scope: {},
        link: function (t, n) {
          function r(n) {
            var r = n.substring(2, n.length - 1),
              o = e(r)(t.$parent);
            return "string" == typeof o ? '"' + o + '"' : o;
          }
          function o(e) {
            try {
              e = (function (e) {
                return e
                  .replace(/&lt;/g, "<")
                  .replace(/&gt;/g, ">")
                  .replace(/&amp;/g, "&")
                  .replace(/&quot;/g, '"');
              })(
                (function (e) {
                  return e ? e.replace(/#{(.*?)}/g, r) : e;
                })(e)
              );
            } catch (e) {
              console.error(e);
            }
            return "try {\n" + e + "\n} catch (e) { console.error(e); }";
          }
          n.ready(function () {
            var e = document.createElement("script"),
              t = o(n.html());
            (e.type = "text/javascript"), (e.innerHTML = t), n.empty(), document.body.appendChild(e);
          });
        },
      };
    },
  ]),
  generalModule.directive("boilerplateCloseButton", [
    "configService",
    function (e) {
      return {
        restrict: "E",
        transclude: !0,
        replace: !0,
        template: "<div ng-if='isShowBoilerplateCloseButton()' class='boilerplate-close-button' ng-click='close()'></div>",
        link: function (t, n, r) {
          t.isShowBoilerplateCloseButton = function () {
            var t = e.get().closeButtonType;
            return "false" !== getParameterByName("showCloseButton") && "boilerplate" === t;
          };
        },
      };
    },
  ]),
  generalModule.directive("pnSticky", [
    "$timeout",
    "$interval",
    "utilsService",
    function (e, t, n) {
      return {
        restrict: "A",
        link: function (e, r) {
          var o = r.parent(),
            a = o[0];
          o.scroll(
            n.throttle(function () {
              l(),
                a.scrollHeight > a.clientHeight
                  ? c ||
                    (r.css({
                      position: "fixed",
                      bottom: "0",
                    }),
                    (c = !0))
                  : c &&
                    (r.css({
                      position: "static",
                      bottom: "",
                    }),
                    (c = !1));
            }, 200)
          );
          var i = t(
              function () {
                a.scrollHeight > a.clientHeight &&
                  (r.css({
                    position: "fixed",
                    bottom: "0",
                  }),
                  l());
              },
              100,
              100
            ),
            s = !1,
            c = !1;
          function l() {
            s || (t.cancel(i), (s = !0));
          }
          e.$on("$destroy", l);
        },
      };
    },
  ]),
  generalModule.factory("windowStateService", [
    function () {
      return {
        checkIframeOrChildWindow: function () {
          return !0;
        },
      };
    },
  ]),
  generalModule.factory("exposeTemplateParams", function () {
    return function (e) {
      var t = ["aid", "debug", "displayMode", "iframeId", "offerId", "tags", "templateId", "templateVariantId", "url", "width"].concat(["trackingId", "experienceId", "experienceExecutionId", "experienceActionId"]),
        n = {};
      return (
        angular.forEach(t, function (t) {
          e[t] && (n[t] = e[t]);
        }),
        n
      );
    };
  }),
  generalModule.factory("exposeCustomVariables", function () {
    return function (e) {
      var t = {};
      try {
        t = JSON.parse(e);
      } catch (e) {}
      return t;
    };
  }),
  generalModule.factory("exposeCustomCookies", function () {
    return function (e) {
      var t = {};
      try {
        t = JSON.parse(e);
      } catch (e) {}
      return t;
    };
  }),
  generalModule.factory("exposeActiveMeters", function () {
    return function (e) {
      var t = [];
      try {
        t = JSON.parse(e);
      } catch (e) {}
      return t;
    };
  }),
  generalModule.service("integrationEventsService", function () {
    (this.dispatchLocal = function (e, t) {
      IntegrationEvents.dispatchLocal(e, t);
    }),
      (this.listenExternal = function (e, t) {
        IntegrationEvents.listenExternal(e, t);
      }),
      (this.listenLocal = function (e, t) {
        IntegrationEvents.listenLocal(e, t);
      });
  }),
  generalModule.factory("topLocation", [
    "$window",
    "eventService",
    "$q",
    function (e, t, n) {
      var r = function () {
        var r = n.defer();
        return (
          t.postMessage("getLocation", {
            resultCallback: function (t) {
              var n = e.document.createElement("a");
              (n.href = t.result), r.resolve(n);
            },
          }),
          r.promise
        );
      };
      return (
        (r.hash = function (e) {
          t.postMessage("setLocationHash", {
            hash: e,
          });
        }),
        r
      );
    },
  ]),
  generalModule.factory("addQueryParameterToUrl", function () {
    return function (e, t, n) {
      var r, o;
      e.indexOf("#") > 0 ? ((o = e.indexOf("#")), (r = e.substring(e.indexOf("#"), e.length))) : ((r = ""), (o = e.length));
      var a = e.substring(0, o).split("?"),
        i = "?";
      if (a.length > 1) {
        var s = a[1];
        s.length && (i += s + "&");
      }
      return (i += t + "=" + encodeURIComponent(n)), a[0] + i + r;
    };
  }),
  generalModule.factory("setupTrackingId", [
    "ngEventService",
    function (e) {
      return function (t) {
        var n = piano._getTrackingId();
        piano._setTrackingId(t), n !== t && e.fire(EVENT_TRACKING_ID_CHANGED, t);
      };
    },
  ]),
  generalModule.service("utilsService", [
    "cookieService",
    function (e) {
      (this.isIphone = function () {
        return /iPhone/.test(navigator.userAgent) && !window.MSStream;
      }),
        (this.isIOS = function () {
          return !!navigator.platform && /iP(ad|hone|od)/.test(navigator.platform);
        }),
        (this.isFbOrInstagramApp = function () {
          var e = navigator.userAgent || navigator.vendor || window.opera;
          return e.indexOf("FBAN") > -1 || e.indexOf("FBAV") > -1 || e.indexOf("Instagram") > -1;
        }),
        (this.isMobileUserAgent = function () {
          return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
        }),
        (this.contains = function (e, t) {
          return angular.isArray(e)
            ? e.some(function (e) {
                return e === t;
              })
            : (util.log("method contains() works only with Arrays"), !1);
        }),
        (this.last = function (e) {
          if (angular.isArray(e)) return e[e.length - 1];
          util.log("method last() works only with Arrays");
        }),
        (this.forEach = function (e, t) {
          return angular.isArray(e)
            ? (e.forEach(function (e, n) {
                t(e, n);
              }),
              e)
            : angular.isObject(e)
            ? (Object.keys(e).forEach(function (n) {
                t(e[n], n);
              }),
              e)
            : e;
        }),
        (this.map = function (e, t) {
          return angular.isArray(e)
            ? e.map(function (e, n) {
                return t(e, n);
              })
            : angular.isObject(e)
            ? Object.keys(e).map(function (n) {
                return t(e[n], n);
              })
            : [];
        }),
        (this.reduce = function (e, t, n) {
          if (angular.isArray(e)) return e.reduce(t, n);
        }),
        (this.find = function (e, t) {
          if (angular.isArray(e)) return e.find(t);
          util.log("method find() works only with Arrays");
        }),
        (this.filter = function (e, t) {
          return angular.isArray(e) ? e.filter(t) : (util.log("method filter() works only with Arrays"), []);
        }),
        (this.omit = function (e, t) {
          var n = [],
            r = {};
          return (
            "string" == typeof t && (n = [t]),
            angular.isArray(t) && (n = [].concat(t)),
            angular.isArray(e) &&
              e.forEach(function (e, t) {
                r[t] = e;
              }),
            angular.isObject(e) && !angular.isArray(e) && (r = angular.extend({}, e)),
            n.forEach(function (e) {
              delete r[e];
            }),
            r
          );
        }),
        (this.debounce = function (e, t, n) {
          var r;
          return function () {
            var o = this,
              a = arguments,
              i = n && !r;
            clearTimeout(r),
              (r = setTimeout(function () {
                (r = null), n || e.apply(o, a);
              }, t)),
              i && e.apply(o, a);
          };
        }),
        (this.setExtendExpiredAccessCookie = function (t, n) {
          var r = new Date();
          r.setMonth(r.getMonth() + 6), e.setCookie(t + "__eea", n ? "true" : "false", r.toUTCString(), "/");
        }),
        (this.removeExtendExpiredAccessCookie = function (t) {
          e.eraseCookie(t + "__eea", "/");
        }),
        (this.jwtDecode = function (e, t) {
          if (!e) return "";
          var n = !0 === (t = t || {}).header ? 0 : 1;
          return JSON.parse(o(e.split(".")[n]));
        });
      var t = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";
      function n(e) {
        this.message = e;
      }
      (n.prototype = new Error()), (n.prototype.name = "InvalidCharacterError");
      var r =
        (window.atob && window.atob.bind(window)) ||
        function (e) {
          var r = String(e).replace(/=+$/, "");
          if (r.length % 4 == 1) throw new n("'atob' failed: The string to be decoded is not correctly encoded.");
          for (var o, a, i = 0, s = 0, c = ""; (a = r.charAt(s++)); ~a && ((o = i % 4 ? 64 * o + a : a), i++ % 4) ? (c += String.fromCharCode(255 & (o >> ((-2 * i) & 6)))) : 0) a = t.indexOf(a);
          return c;
        };
      var o = function (e) {
        var t = e.replace(/-/g, "+").replace(/_/g, "/");
        switch (t.length % 4) {
          case 0:
            break;
          case 2:
            t += "==";
            break;
          case 3:
            t += "=";
            break;
          default:
            throw "Illegal base64url string!";
        }
        try {
          return (function (e) {
            return decodeURIComponent(
              r(e).replace(/(.)/g, function (e, t) {
                var n = t.charCodeAt(0).toString(16).toUpperCase();
                return n.length < 2 && (n = "0" + n), "%" + n;
              })
            );
          })(t);
        } catch (e) {
          return r(t);
        }
      };
      (this.throttle = function (e, t) {
        var n,
          r,
          o = !1;
        return function a() {
          if (o) return (n = arguments), void (r = this);
          e.apply(this, arguments),
            (o = !0),
            setTimeout(function () {
              (o = !1), n && (a.apply(r, n), (n = r = null));
            }, t);
        };
      }),
        (this.combine = function (e) {
          return function () {
            e.forEach(function (e) {
              "function" == typeof e && e();
            });
          };
        });
      var a = /^([_A-Za-z0-9-&№^=%'"!?*+./#\\$]+)@([_A-Za-z0-9-&№^=%'"!?*+./#\\]+)\.([_A-Za-z0-9-+.]+)$/;
      (this.isEmailValid = function (e) {
        var t = e && e.trim();
        return !!t && !(t.length > 255) && a.test(t);
      }),
        (this.queryStringToMap = function (e) {
          var t = {};
          if (!e) return t;
          for (
            var n,
              r = /\+/g,
              o = /([^&=]+)=?([^&]*)/g,
              a = function (e) {
                return decodeURIComponent(e.replace(r, " "));
              };
            (n = o.exec(e));

          )
            t[a(n[1])] = a(n[2]);
          return t;
        });
    },
  ]),
  generalModule.factory("getTrackingId", function () {
    return function () {
      return piano._getTrackingId();
    };
  }),
  generalModule.factory("trackExternalEvent", function () {
    return function (e, t, n) {
      piano._logAutoMicroConversion(e, t, n);
    };
  }),
  generalModule.factory("interceptAjax", [
    "lang",
    function (e) {
      (tinypass.waitLockedBy = null), (tinypass.withoutWaitPanel = !1);
      var t = null;
      return (
        (tinypass.showWaitPanel = function (e, t) {
          "function" == typeof window.CustomEvent &&
            document.dispatchEvent(
              new CustomEvent("EVENT_SHOW_WAIT_PANEL", {
                detail: {
                  id: e,
                  content: t,
                },
              })
            );
        }),
        (tinypass.hideWaitPanel = function (e) {
          ((!e && "others" === tinypass.waitLockedBy) || e === tinypass.waitLockedBy) && (t && (t.stop(), t.remove()), (tinypass.waitLockedBy = null));
        }),
        {
          appendLoaderTo: function (n) {
            document.addEventListener("EVENT_SHOW_WAIT_PANEL", function (r) {
              !(function (r) {
                if (tinypass.withoutWaitPanel || tinypass.waitLockedBy) return;
                (tinypass.waitLockedBy = r.detail.id || "others"), t && t.remove();
                t = r.detail.content ? $('<div id="waitParent">' + r.detail.content + "</div>") : $('<div id="waitParent"><div id="waitPanel">' + e.tr("Loading...") + "</div></div>");
                $("." + n).prepend(t);
              })(r);
            });
          },
        }
      );
    },
  ]),
  generalModule.factory("keysService", [
    function () {
      return {
        isEscape: function (e) {
          return "Esc" === e || "Escape" === e;
        },
        isEnter: function (e) {
          return "Enter" === e;
        },
        isSpace: function (e) {
          return " " === e;
        },
      };
    },
  ]),
  generalModule.factory("windowService", [
    "$window",
    function (e) {
      var t, n;
      return {
        openWindow: function (o, a) {
          return (
            r(),
            t && (t.close(), (t = null)),
            (t = e.open(o.url, o.target, o.features)),
            (n = setInterval(function () {
              t ? t.closed && (a && a(), r()) : r();
            }, 1e3)),
            t
          );
        },
      };
      function r() {
        n && (clearInterval(n), (n = null));
      }
    },
  ]),
  generalModule.filter("encodeURIComponent", [
    "$window",
    function (e) {
      return e.encodeURIComponent;
    },
  ]);
var Helper = function () {};
Helper.wrapMethod = function (e, t, n) {
  n[e] = function (n, r, o) {
    return t[e](n, r, o);
  };
};
var IntegrationEvents = (function () {
  var e = {
      "externalApiFieldset.change": "externalApiFieldset.change",
      "ga.created": "ga.created",
      "ga.performance.tracker.created": "ga.performance.tracker.created",
    },
    t = "_piano_._local_.",
    n = "_piano_._external_.";
  function r(e) {
    return t + e;
  }
  function o(e) {
    return n + e;
  }
  function a(t) {
    if (!(t in e)) throw new Error("event " + t + " is not recognized");
  }
  function i(e) {
    var t = angular.isDate(e),
      n = angular.isArray(e),
      r = angular.isObject(e);
    return t ? new Date(e) : n ? angular.copy(e, []) : r && !n ? angular.copy(e, {}) : e;
  }
  return {
    dispatchLocal: function (e, t) {
      a(e),
        document.dispatchEvent(
          new CustomEvent(r(e), {
            detail: i(t),
          })
        );
    },
    dispatchExternal: function (e, t) {
      a(e),
        document.dispatchEvent(
          new CustomEvent(o(e), {
            detail: i(t),
          })
        );
    },
    listenLocal: function (e, t) {
      document.addEventListener(r(e), function (e) {
        t(e);
      });
    },
    listenExternal: function (e, t) {
      document.addEventListener(o(e), function (e) {
        t(e);
      });
    },
  };
})();
Array.prototype.findIndex ||
  Object.defineProperty(Array.prototype, "findIndex", {
    value: function (e) {
      if (null == this) throw new TypeError('"this" is null or not defined');
      var t = Object(this),
        n = t.length >>> 0;
      if ("function" != typeof e) throw new TypeError("predicate must be a function");
      for (var r = arguments[1], o = 0; o < n; ) {
        var a = t[o];
        if (e.call(r, a, o, t)) return o;
        o++;
      }
      return -1;
    },
  });
var piano = (function (e) {
    var t = {},
      n = {
        listen: function (t, n) {
          e.listenLocal(t, n);
        },
        externalEvent: function (t, n) {
          e.dispatchExternal(t, n);
        },
        _setTrackingId: function (e) {
          t.trackingId = e;
        },
        _getTrackingId: function () {
          return t.trackingId;
        },
      },
      r = function (e, n) {
        if (t.trackingId)
          switch (((TPParam || {}).params || {}).os || "desktop") {
            case "ios":
            case "android":
              o(e, n);
              break;
            default:
              parent.postMessage(
                JSON.stringify({
                  event: "iframeLogRequest",
                  url: e,
                  queryParams: n,
                }),
                "*"
              );
          }
      },
      o = function (e, t) {
        var n = [];
        for (var r in t) {
          var o = t[r];
          n.push(encodeURIComponent(r) + "=" + encodeURIComponent("object" == typeof o ? JSON.stringify(o) : o));
        }
        var a = e + "?" + (n = n.join("&"));
        if (!util.debug && navigator.sendBeacon) navigator.sendBeacon(a);
        else {
          var i = new XMLHttpRequest();
          i.open("GET", a, !1), i.send();
        }
      };
    (n._logAutoMicroConversion = function (e, n, o) {
      var a = {
        tracking_id: t.trackingId,
        event_type: e,
        event_group_id: n,
        custom_params: o || "",
      };
      void 0 !== n ? (void 0 !== e ? r("/api/v3/conversion/logAutoMicroConversion", a) : util.log("Parameter eventType is required to log micro conversion.")) : util.log("Parameter eventGroupId is required to log micro conversion.");
    }),
      (n.logFunnelStep = function (e, n, o) {
        var a = {
          tracking_id: t.trackingId,
          step_number: e,
          step_name: n,
          custom_params: o || "",
        };
        void 0 !== e ? (void 0 !== n ? r("/api/v3/conversion/logFunnelStep", a) : util.log("Parameter stepName is required to log funnel step.")) : util.log("Parameter stepNumber is required to log funnel step.");
      }),
      (n.logMicroConversion = function (e, n) {
        var o = {
          tracking_id: t.trackingId,
          event_group_id: e,
          custom_params: n || "",
        };
        void 0 !== e ? r("/api/v3/conversion/logMicroConversion", o) : util.log("Parameter eventGroupId is required to log micro conversion.");
      });
    var a = function (e, n, o, a, i, s, c) {
      var l = {
        tracking_id: t.trackingId,
        term_id: e,
        term_name: n,
      };
      void 0 !== e ? (void 0 !== n ? (void 0 !== o && (l.step_number = o), void 0 !== a && (l.amount = a), void 0 !== i && (l.currency = i), void 0 !== s && (l.custom_params = s), void 0 !== c && (l.conversion_category = c), r("/api/v3/conversion/log", l)) : util.log("Parameter termName is required to log conversion.")) : util.log("Parameter termId is required to log conversion.");
    };
    return (
      (n.logConversion = function (e) {
        "object" == typeof e ? a(e.term_id, e.term_name, e.step_number, e.amount, e.currency, e.custom_params, e.conversion_category) : a.apply(this, arguments);
      }),
      (n.reloadTemplateWithUserToken = function (e) {}),
      n
    );
  })(IntegrationEvents),
  containerServiceModule = angular.module("containerServiceModule", ["ui.router", "ngSanitize", "generalModule"]);
containerServiceModule.factory("containerService", [
  "$window",
  "$rootScope",
  "$rootElement",
  "$timeout",
  "$interval",
  "$document",
  "eventService",
  "errorService",
  "windowStateService",
  "ngEventService",
  function (e, t, n, r, o, a, i, s, c, l) {
    var u,
      d,
      p = {},
      m = {};
    function f(e, t) {
      var n = e.document ? e.document.body : e.body,
        r = t.documentElement || {};
      return Math.max(n.scrollHeight, r.scrollHeight, n.offsetHeight, r.offsetHeight, n.clientHeight, r.clientHeight);
    }
    return (
      (p.$rootScope = t),
      (p.rootElement = n),
      $(document)
        .on("focus", "input, textarea, select", function () {
          i.postMessage("inputFocus");
        })
        .on("blur", "input, textarea, select", function () {
          i.postMessage("inputBlur");
        }),
      (p.getConfig = function () {
        return {
          container: this._getConfigFn().container,
        };
      }),
      (p.getPreferredWidth = function () {
        return this.preferredWidth;
      }),
      (p.setPreferredWidth = function (e) {
        this.preferredWidth = e;
      }),
      (p.setConfigWidth = function (e) {
        this.widthFromConfigDirective = e;
      }),
      (p.init = function (e, t) {
        this._getConfigFn = t;
        var n = getParameterByName("displayMode");
        (this.isModal = "modal" === n), (this.isPopup = "popup" === n), (this.isInline = "inline" === n), (this.isPreview = !!getParameterByName("preview")), (this.isOpenedFromInlineCheckout = "true" === getParameterByName("isOpenedFromInlineCheckout")), (this.container = this.getConfig().container), (this.suggestedWidth = getIntParam("width", 1)), (this.preferredWidth = e.preferredWidth), p.clearResizeHandler(), p.initResizeHandler(this.container);
      }),
      (p.clearResizeHandler = function () {
        m.interval && o.cancel(m.interval),
          "remove" in Element.prototype ||
            (Element.prototype.remove = function () {
              this.parentNode && this.parentNode.removeChild(this);
            }),
          m.handleResizeIFrame && m.handleResizeIFrame.remove(),
          m.resizeObs && m.resizeObs.disconnect(),
          m.loaded && m.loaded(),
          (m = {});
      }),
      (p.initResizeHandler = function (e) {
        var t = document.createElement("iframe");
        m.handleResizeIFrame = t;
        e.css("position", "relative"), (t.width = "100%"), (t.height = "100%"), t.setAttribute("style", "position: absolute !important; z-index: -1 !important;"), e.prepend(t), (u = t.contentWindow || t.contentDocument), (d = t.contentDocument || {});
        var n = function (e, t, n) {
          var r = f(e, t);
          r !== n.lastHeight && ((n.lastHeight = r), p.resize());
        }.bind(this, u, d, {
          lastHeight: -1,
        });
        if ("function" == typeof ResizeObserver) {
          var r = new ResizeObserver(n);
          r.observe(t), (m.resizeObs = r);
        } else u.onresize = n;
        (m.interval = o(n, 500)),
          (window.onload = function () {
            p.resize();
          }),
          p.onReady(function () {
            p.resize();
          }),
          (m.loaded = l.subscribe("loaded", function () {
            p.resize();
          }));
      }),
      (p.onReady = function (e) {
        "loading" !== document.readyState
          ? e()
          : document.addEventListener
          ? document.addEventListener("DOMContentLoaded", e)
          : document.attachEvent("onreadystatechange", function () {
              "complete" === document.readyState && e();
            });
      }),
      l.subscribe("RESIZE_MODAL_CHECKOUT", function (e, t) {
        var n = t.iframe,
          r = t.width;
        setTimeout(function () {
          (p.suggestedWidth = r), n.config.width && (p.suggestedWidth = r < n.config.width ? r : n.config.width), p.resize();
        }, 100);
      }),
      (p.resize = function () {
        var e;
        if (u && d) e = f(u, d);
        else {
          var t = p.rootElement.height(),
            n = p.rootElement[0].parentElement ? p.rootElement[0].parentElement.clientHeight : 0;
          e = t || n;
        }
        if (p.isModal || p.isPopup || p.isPreview) {
          var r = p.getNewWidth();
          angular.element("body").css("min-width", r),
            angular.element("body").width(r),
            p.rootElement.width(r),
            p.container.width(r),
            i.resizeEvent({
              width: r,
              height: e,
            }),
            setTimeout(p.scrollTop, 500);
        } else
          i.resizeEvent({
            height: e,
          });
      }),
      (p.scrollTop = function () {
        document.defaultView.scrollTo(0, 0);
      }),
      (p.getNewWidth = function () {
        if (p.isModal || p.isPopup) {
          this.widthFromConfigDirective && (p.preferredWidth = this.widthFromConfigDirective);
          var e = p.suggestedWidth;
          return (p.preferredWidth <= e || isNaN(e)) && (e = p.preferredWidth), parseInt(e);
        }
        return parseInt(p.suggestedWidth);
      }),
      (p.getCenterScreen = function (e, t) {
        (e = e || 0), (t = t || 0);
        var n = parseInt(getParameterByName("parentWidth"), 10),
          r = parseInt(getParameterByName("parentDualScreenLeft"), 10),
          o = parseInt(getParameterByName("parentDualScreenTop"), 10);
        return {
          left: n / 2 - e / 2 + r,
          top: parseInt(getParameterByName("parentOuterHeight"), 10) / 2 - t / 2 + o,
        };
      }),
      (p.getOriginUrl = function () {
        return getParameterByName("url");
      }),
      (p.purge = function (e) {
        try {
          p.rootElement.remove();
        } catch (e) {}
        i.purgeEvent(e);
      }),
      (p.close = function (e) {
        try {
          p.rootElement.remove();
        } catch (e) {}
        i.closeEvent(e);
      }),
      p
    );
  },
]);
var tpDrop = function (e, t, n, r, o, a, i, s, c, l) {
  var u = ".tp-dropdown__container",
    d = ".search-query",
    p = ".tp-dropdown__list",
    m = ".tp-dropdown__link",
    f = ".tp-dropdown__select",
    g = "Enter",
    h = "Escape",
    E = "ArrowDown",
    v = "ArrowUp",
    C = "INPUT";
  return function (e) {
    return r
      .all({
        tpl:
          ((t = e),
          t.template
            ? r.when(t.template)
            : o
                .get(t.templateUrl, {
                  cache: a,
                })
                .then(function (e) {
                  return e.data;
                })),
        opts: r.when(e),
      })
      .then(S);
    var t;
  };
  function y(e, t) {
    var n = "right" === t.side || "left" === t.side,
      r = n ? "top" : "left",
      o = n ? "height" : "width",
      a = n ? "outerHeight" : "outerWidth",
      i =
        "left" === r
          ? (function (e, t, n, r, o) {
              var a = {};
              return (
                (a[e] = T(r)
                  ? (function (e, t, n, r, o) {
                      var a = o.centerOn[n](),
                        i = o.style[t];
                      return l(o.centerOn, e) + (a - i);
                    })(e, t, n, 0, o)
                  : l(o.centerOn, e)),
                a
              );
            })(r, o, a, e, t)
          : (function (e, t, n, r, o) {
              var a = {};
              return (a[e] = T(r) ? l(o.centerOn, e) + o.centerOn[n]() / 2 - o.style[t] / 2 + (o.centerOn[n]() - o.style[t]) : l(o.centerOn, e) + o.centerOn[n]() / 2 - o.style[t] / 2), a;
            })(r, o, a, e, t);
    return (i = "right" === t.side ? c("left", "outerWidth", t, i) : "left" === t.side ? s("right", "width", "left", "scrollLeft", e, t, i) : "top" === t.side ? s("bottom", "height", "top", "scrollTop", e, t, i) : c("top", "outerHeight", t, i));
    function s(e, t, n, r, o, a, i) {
      return (i[e] = o[t]() - l(a.centerOn, n) - o[r]()), i;
    }
    function c(e, t, n, r) {
      return (r[e] = l(n.centerOn, e) + n.centerOn[t]()), r;
    }
    function l(e, t) {
      return e.offset()[t];
    }
  }
  function T(e) {
    return "rtl" === e.context.dir;
  }
  function S(e) {
    var o,
      a,
      T = r.defer(),
      S = e.tpl,
      P = e.opts || {
        style: {
          width: 200,
        },
      },
      A = (function (e) {
        if (e.centerOn) {
          var n = e.centerOn
            .parents()
            .filter(function () {
              var e = $(this).css("position");
              return ("fixed" === e || "absolute" === e) && !1 === $(this).hasClass("modal");
            })
            .last();
          return n.length > 0 ? n : t.find("body");
        }
        return t.find("body");
      })(P),
      w = (P.scope || n).$new(),
      _ = t.find("body");
    (w.$close = N),
      (w.$dismiss = R),
      (
        P.rejecter ||
        (function () {
          var e = r.defer();
          return (
            t.on("click", function n(r) {
              t.off("click", n), r && (r.preventDefault(), r.stopPropagation()), e.reject();
            }),
            e.promise
          );
        })()
      ).then(R, R),
      P.controller &&
        i(P.controller, {
          $scope: w,
        });
    var b = s(angular.element(S))(w);
    A.append(b), _.addClass("component-opened");
    var I = function () {
      var e;
      !(function (e, t) {
        switch (e.side) {
          case "right":
            e.centerOn.offset().left + e.centerOn.width() + t.width() > window.innerWidth && (e.side = "left");
            break;
          case "left":
            e.centerOn.offset().left - t.width() < 0 && (e.side = "right");
            break;
          case "bottom":
            e.centerOn.offset().top + e.centerOn.height() + t.height() > window.innerHeight && (e.side = "top");
            break;
          case "top":
            e.centerOn.offset().top - t.height() < 0 && (e.side = "bottom");
        }
      })(P, b),
        (a = P.side || "bottom"),
        (o = (function (e, t) {
          return t.centerOn
            ? y(e, t)
            : (function (e, t) {
                return {
                  left: e.width() / 2 - t.style.width / 2,
                  top: e.height() / 2 - t.style.height / 2,
                };
              })(e, t);
        })(A, P)),
        b
          .css({
            display: "block",
            position: "absolute",
          })
          .on("click", function (e) {
            e.preventDefault(), e.stopPropagation(), P.closeOnSelect && R();
          })
          .addClass(a)
          .addClass(P.cl)
          .css(o)
          .css(P.style),
        (e = angular.element(u)).is(":visible") && e.find(d).focus(),
        angular.element(p).on("keydown", function (e) {
          !(function (e) {
            switch (e.key) {
              case h:
                N();
                break;
              case g:
                e.target.click();
                break;
              case E:
                e.preventDefault(), e.target.nextElementSibling ? e.target.nextElementSibling.focus() : e.target.tagName === C && angular.element(m).first().focus();
                break;
              case v:
                e.preventDefault(), e.target.previousElementSibling ? e.target.previousElementSibling.focus() : e.target.tagName !== C && angular.element(d).focus();
            }
          })(e);
        });
    };
    if (w.type && "enchained" === w.type) {
      var k = c(I, 50),
        M = function () {
          c.cancel(k);
        };
      T.promise.then(M, M);
    } else l(I, 0);
    return T.promise;
    function N(e) {
      b.remove(), T.resolve(e), _.removeClass("component-opened"), angular.element(f).focus();
    }
    function R(e) {
      b.remove(), T.reject(e), _.removeClass("component-opened");
    }
  }
};
(tpDrop.$inject = ["$injector", "$document", "$rootScope", "$q", "$http", "$templateCache", "$controller", "$compile", "$interval", "$timeout"]), angular.module("tpDrop.module", ["ngSanitize", "generalModule"]).factory("tpDrop", tpDrop);
var userServiceModule = angular.module("userServiceModule", ["ui.router", "ajaxServices", "ngSanitize", "generalModule", "tp.i18n"]);
userServiceModule.factory("userService", [
  "$rootScope",
  "$rootElement",
  "$q",
  "tpHTTP",
  "eventService",
  "ngEventService",
  "errorService",
  "gaService",
  "lang",
  "utilsService",
  "cookieService",
  function (e, t, n, r, o, a, i, s, c, l, u) {
    var d = _randomString(16),
      p = null,
      m = !1,
      f = [],
      g = function () {
        return {
          app: {},
          user: {},
          stats: {},
          fillLoginIframeParams: v,
          fillLoginRequiredParamsToGoogleAnalytics: v,
          fillLoginRequiredEventParams: v,
          fillLoginSuccessEventParams: v,
        };
      },
      h = {};
    (h.$rootScope = e), (h.rootElement = t);
    var E,
      v = function () {};
    function C() {
      var e = window.TPParam.params || window.TPParam.app || h.getConfig().app;
      return e ? e.userProvider : "";
    }
    function y(e) {
      return (
        e.extendExpiredAccessEnabled && l.setExtendExpiredAccessCookie(h.getConfig().app.aid, e.extendExpiredAccessEnabled),
        h.loginSuccessNoPostMessage(e).then(function () {
          E && E.resolve(e);
        })
      );
    }
    return (
      (h.getConfig = function () {
        return {
          app: g().app,
          user: g().user,
          stats: g().stats,
          fillLoginIframeParams: g().fillLoginIframeParams || v,
          fillLoginRequiredParamsToGoogleAnalytics: g().fillLoginRequiredParamsToGoogleAnalytics || v,
          fillLoginRequiredEventParams: g().fillLoginRequiredEventParams || v,
          fillLoginSuccessEventParams: g().fillLoginSuccessEventParams || v,
        };
      }),
      (h.init = function (e) {
        if (((g = e), !TPParam.LOGIN)) throw "Login handler URL (variable TPParam.LOGIN) is not set";
      }),
      (h.isUserValid = function () {
        return h.getConfig().user && !0 === h.getConfig().user.valid;
      }),
      (h.getUserUid = function () {
        return h.getConfig().user && h.getConfig().user.uid;
      }),
      (h.isUserReadOnly = function () {
        if (this.isPianoIdUserProvider()) return !1;
        var e = u.getCookie(h.getConfig().app.aid + "__eea"),
          t = h.getConfig().user;
        return "true" === e && Date.now() > parseInt(t.login_timestamp, 10) + t.token_expiration;
      }),
      (h.isUserConfirmed = function () {
        return h.getConfig().user && !1 !== h.getConfig().user.confirmed;
      }),
      (h.allowLogout = function () {
        return h.isUserValid() && h.isProviderAllowLogout();
      }),
      (h.allowLogin = function () {
        return h.allowTinypassAccountsLogin() || h.isGigyaUserProvider();
      }),
      (h.allowTinypassAccountsLogin = function () {
        var e = h.getConfig().app;
        return e && e.useTinypassAccounts;
      }),
      (h.isPublisherUserRefProvider = function () {
        return "publisher_user_ref" === C();
      }),
      (h.isGigyaUserProvider = function () {
        return "gigya" === C();
      }),
      (h.isCondeUserProvider = function () {
        return "conde" === C();
      }),
      (h.isPianoIdUserProvider = function () {
        return "piano_id" === C();
      }),
      (h.isPianoIdLiteUserProvider = function () {
        return "piano_id_lite" === C();
      }),
      (h.isJanrainUserProvider = function () {
        return "janrain" === C();
      }),
      (h.allowMyAccountLogin = function () {
        return h.allowTinypassAccountsLogin();
      }),
      (h.allowTinypassAccountsLogout = function () {
        return h.isProviderAllowLogout() && h.isUserValid();
      }),
      (h.isProviderAllowLogout = function () {
        return h.allowTinypassAccountsLogin() || h.isCondeUserProvider() || h.isPianoIdUserProvider() || h.isGigyaUserProvider() || h.isJanrainUserProvider();
      }),
      (h.logout = function () {
        h.isProviderAllowLogout() &&
          o.postMessage("logout", {
            closeOnLogout: getParameterByName("closeOnLogout"),
          }),
          l.removeExtendExpiredAccessCookie(h.getConfig().app.aid),
          (m = !1);
      }),
      (h.loginSuccessNoPostMessage = function (e) {
        return (function (e) {
          var t = n.defer();
          m
            ? t.reject(!1)
            : ((m = !0),
              e || (e = {}),
              h.getConfig().fillLoginSuccessEventParams(e),
              (e.resultCallback = function () {
                angular.forEach(f, function (t) {
                  t.callback(e);
                }),
                  (f = l.filter(f, function (e) {
                    return !e.oneTime;
                  })),
                  t.resolve(e);
              }),
              o.postMessage("loginSuccess", e));
          return t.promise;
        })(e);
      }),
      (h.onUserProfileUpdated = function (e) {
        o.postMessage("userProfileUpdateSuccess", e);
      }),
      (h.register = function () {
        return h.login("register");
      }),
      (h.checkUser = function (e) {
        return r({
          method: "get",
          url: "/checkout/user/check",
          params: e,
        });
      }),
      (h.login = function (e, t) {
        e || (e = "login");
        var r = getParameterByName("aid"),
          l = getParameterByName("url"),
          u = (E = n.defer()).promise;
        if (
          (o.postMessage("loginStart", {}),
          u.finally(function () {
            o.postMessage("loginEnd", {});
          }),
          util.log("[USER SERVICE] Cannot continue without valid user...sending loginRequiredEvent"),
          h.allowTinypassAccountsLogin())
        ) {
          m = !1;
          var f = {
            displayMode: "popup",
            aid: r,
            width: 360,
            height: 660,
            state: e,
            iframeId: "login-" + _randomString(10),
            host_url: l,
            url: window.location.href,
          };
          h.getConfig().fillLoginIframeParams(f);
          var g = TPParam.LOGIN + "?" + $.param(f, !0) + "#/" + e;
          (p = (function (e, t) {
            var n = parseInt(getParameterByName("parentWidth"), 10),
              r = parseInt(getParameterByName("parentHeight"), 10),
              o = e.width ? e.width : n,
              a = e.height ? e.height : r,
              i = parseInt(getParameterByName("parentDualScreenLeft"), 10),
              s = parseInt(getParameterByName("parentDualScreenTop"), 10),
              c = n / 2 - o / 2 + i,
              l = parseInt(getParameterByName("parentOuterHeight"), 10) / 2 - a / 2 + s,
              u = window.open(t, d, "scrollbars=yes,status=0,toolbar=0,resizable=1, width=" + o + ", height=" + a + ", top=" + l + ", left=" + c);
            return window.focus && u.focus(), u;
          })(f, g)),
            a.subscribe("readyToSubmitStats", function () {
              o.customPostMessage("submitStats", h.getConfig().stats, document.location.origin, p);
            }),
            a.subscribe("loginSuccess", function (e, t) {
              if ((((t = t || {}).reloadAfterLogin = !0), E.resolve(t), y(t), p && !1 === p.closed)) {
                try {
                  p.document.body.innerHTML = null;
                } catch (e) {}
                p.close();
              }
            });
        } else {
          var v = {
            aid: r,
          };
          h.getConfig().fillLoginRequiredParamsToGoogleAnalytics(v),
            s.sendGoogleAnalyticsEvent({
              eventAction: "loginRequired",
              eventLabel: "Login required",
              params: v,
            });
          var C = {};
          (C.startScreen = e),
            h.getConfig().fillLoginRequiredEventParams(C),
            (function (e, t) {
              if (t) return Object.assign(e, t);
            })(C, t),
            o.loginRequiredEvent(C).then(function (e) {
              (e.callbackNotFound || !1 !== e.result) && (E.reject(!1), i().terminal(c.trc("checkout.platform", "Cannot start checkout. User not logged in")));
            });
        }
        return E.promise;
      }),
      (h.onLoginSuccess = function (e, t) {
        e &&
          f.push({
            callback: e,
            oneTime: t,
          });
      }),
      (h.cleanSuccessLoginCallbacks = function () {
        f = l.filter(f, function (e) {
          return !e.oneTime;
        });
      }),
      (h.loginSuccessPosted = function () {
        return m;
      }),
      (h.setLoginSuccessPosted = function (e) {
        m = e;
      }),
      (h.onExternalLogin = y),
      a.subscribe("changeLocale", function (e, t) {
        t &&
          t.locale &&
          c.list().then(function (e) {
            for (var n in e)
              if (e[n].locale === t.locale) {
                c.update(t.locale);
                break;
              }
          });
      }),
      a.subscribe("externalLoginSuccess", function (e, t) {
        ((t = t || {}).reloadAfterLogin = !0), y(t);
      }),
      (h.userChanged = function (e) {
        E && E.resolve(e);
      }),
      h
    );
  },
]);
var eventModule = angular.module("eventModule", ["generalModule"]);
eventModule.factory("eventService", [
  "$window",
  "$rootScope",
  "$q",
  "configService",
  function (e, t, n, r) {
    var o = {};
    function a() {
      return getParameterByName("iframeId");
    }
    return (
      (o.last = null),
      (o.resultCallbacks = {}),
      (o.postMessage = function (t, n) {
        var r = ((TPParam || {}).params || {}).os || "desktop";
        try {
          switch (r) {
            case "ios":
              !(function (e, t) {
                window.webkit.messageHandlers[e].postMessage(t);
              })(t, n);
              break;
            case "android":
              !(function (e, t) {
                var n = JSON.stringify(t);
                PianoAndroid[e](n);
              })(t, n);
              break;
            default:
              !(function (t, n) {
                var r = {};
                (o.parentURL = getParameterByName("url")), o.parentURL || (o.parentURL = window.location !== window.parent.location ? document.referrer : document.location.href);
                if (((r.sender = a()), (r.displayMode = getParameterByName("displayMode")), (r.recipient = "opener"), (r.event = t), (r.params = n), n && n.resultCallback)) {
                  var i = _randomString(16);
                  (r.params.resultCallbackId = i), (o.resultCallbacks[i] = n.resultCallback), delete n.resultCallback;
                }
                util.log("[EVENT SERVICE] Post message:" + t, r), $.postMessage(JSON.stringify(r), o.parentURL, "popup" === r.displayMode ? e.opener : e.parent);
              })(t, n);
          }
        } catch (e) {
          util.log("[EVENT SERVICE] Event wasn't expected: ", t);
        }
      }),
      (o.customPostMessage = function (e, t, n, r) {
        var o = {};
        (o.sender = a()), (o.event = e), (o.params = t), util.log("[EVENT SERVICE] Custom post message:" + e, o), $.postMessage(JSON.stringify(o), n, r);
      }),
      (o.resizeEvent = function (e) {
        if (((e.iframeId = a()), null === o.last)) o.postMessage("loaded", e), (o.last = e);
        else if (e.height !== o.last.height || e.width !== o.last.width) {
          var t = r.get().closeButtonType;
          void 0 !== t && (e.closeButtonType = t), o.postMessage("resize", e), (o.last = e);
        }
      }),
      (o.purgeEvent = function (e) {
        o.postMessage("purge", e);
      }),
      (o.closeEvent = function (e) {
        o.postMessage("close", e);
      }),
      (o.closeAndRefreshEvent = function (e) {
        o.postMessage("closeAndRefresh", e);
      }),
      (o.checkoutStateChange = function (e, t) {
        o.postMessage("checkoutStateChange", {
          stateName: e,
          offerId: TPParam.config.offerId,
          term: t,
        });
      }),
      (o.startCheckoutEvent = function (e) {
        o.postMessage("startCheckout", e);
      }),
      (o.showAuthForm = function (e) {
        o.postMessage("showAuthForm", e);
      }),
      (o.startThreeDBankSecure = function () {
        o.postMessage("startThreeDBankSecure");
      }),
      (o.loginRequiredEvent = function (e) {
        var t = n.defer();
        return (
          (e.resultCallback = function (e) {
            t.resolve(e);
          }),
          o.postMessage("loginRequired", e),
          t.promise
        );
      }),
      (o.initContext = function () {
        var e = n.defer();
        return (
          o.postMessage("initContext", {
            resultCallback: function (t) {
              e.resolve(t);
            },
          }),
          e.promise
        );
      }),
      (o.gigyaPasswordlessLoginEvent = function (e) {
        (e.iframeId = a()), o.postMessage("gigyaPasswordlessLogin", e);
      }),
      (o.customEvent = function (e, t) {
        o.postMessage(e, t);
      }),
      (o.systemErrorEvent = function (e) {
        o.postMessage("error", e);
      }),
      (o.submitPayment = function (e) {
        o.postMessage("submitPayment", e);
      }),
      (o.completeEvent = function (e) {
        o.postMessage("complete", e);
      }),
      (o.alreadyPurchasedEvent = function (e) {
        o.postMessage("alreadyPurchased", e);
      }),
      (o.checkoutPaymentErrorEvent = function (e) {
        o.postMessage("checkoutPaymentError", {
          message: e,
        });
      }),
      (o.loginEvent = function (e) {
        o.postMessage("login", e);
      }),
      (o.registerEvent = function (e) {
        o.postMessage("register", e);
      }),
      (o.getParentSize = function () {
        o.postMessage("parentSize");
      }),
      (o.isMobileDevice = function () {
        return TPParam && TPParam.params && ("ios" === TPParam.params.os || "android" === TPParam.params.os);
      }),
      (o.emitGAEvent = function (e) {
        o.postMessage("emitGAEvent", e);
      }),
      (o.emitMetricsEvent = function (e) {
        o.postMessage("emitMetricsEvent", e);
      }),
      (o.completeUpgradePurchase = function (e) {
        o.postMessage("completeUpgradePurchase", e);
      }),
      $().ready(function () {
        $.receiveMessage(function (e) {
          var n;
          try {
            if ((util.log("[EVENT SERVICE] Received message:", e), -1 !== ["https://core.spreedly.com", "https://jsl.prod.obi.aol.com", "https://pay.datatrans.com", "https://vpos.infonet.com.py:8888", "https://vpos.infonet.com.py", "https://flex.cybersource.com", "https://testflex.cybersource.com"].indexOf(e.origin))) return;
            var r = e.data.replace(/\/\*.*?\*\//g, "");
            (n = JSON.parse(r)).sender && 0 === n.sender.indexOf("piano-id-") && (n.event = n.sender + "-" + n.event),
              "init-social" === n.eventName &&
                (n = {
                  event: "init-social",
                  params: n,
                }),
              n.event &&
                -1 !== n.event.indexOf("-3ds-complete") &&
                (n = {
                  event: "3ds-complete",
                  params: n,
                }),
              t.$broadcast(n.event, n.params),
              n.params && n.params.resultCallbackId && o.resultCallbacks[n.params.resultCallbackId] && (o.resultCallbacks[n.params.resultCallbackId](n.params), delete o.resultCallbacks[n.params.resultCallbackId]);
          } catch (t) {
            return void util.log("[EVENT SERVICE][Could not parse message:", e);
          }
        });
      }),
      o
    );
  },
]);
var errorModule = angular.module("errorModule", ["generalModule"]);
errorModule.factory("errorService", [
  "$rootScope",
  "eventService",
  "ngEventService",
  function (e, t, n) {
    var r = {},
      o = {
        GLOBAL: "global",
        COMPONENT: "component",
        TERMINAL: "terminal",
      };
    return function (a) {
      var i = {},
        s = null;
      return (
        (i.error = function (e, t) {
          if (!a) throw Error("The $scope is undefined");
          var r = t;
          r || (r = {}),
            angular.isString(r) &&
              (r = {
                message: t,
              }),
            (r.type = e),
            (r.errorInstanceId = a.errorInstanceId),
            s.errors.push(r),
            n.fire(EVENT_ERRORS_CHANGED);
        }),
        (i.global = function (e) {
          i.error(o.GLOBAL, e);
        }),
        (i.globals = function (e) {
          angular.forEach(e, function (e) {
            i.error(o.GLOBAL, e);
          });
        }),
        (i.component = function (e) {
          i.error(o.COMPONENT, e);
        }),
        (i.components = function (e) {
          angular.forEach(e, function (e) {
            i.error(o.COMPONENT, e);
          });
        }),
        (i.terminal = function (r) {
          var i = r;
          i || (i = {}),
            angular.isString(i) &&
              (i = {
                message: r,
              }),
            (i.type = o.TERMINAL),
            a && (i.errorInstanceId = a.errorInstanceId),
            n.fire(EVENT_TERMINAL_ERROR, i),
            (e.terminalError = i.message),
            (e.terminalErrorHeading = i.heading),
            t.systemErrorEvent({
              message: i.message,
            });
        }),
        (i.reset = function () {
          a && s.errors.length > 0 && ((s.errors = []), n.fire(EVENT_ERRORS_CHANGED, a.errorInstanceId));
        }),
        (i.errors = function (e) {
          var t = [];
          if (a) {
            var n = function (r) {
              angular.forEach(r.errors, function (e) {
                t.push(e);
              }),
                e ||
                  angular.forEach(r.children, function (e) {
                    n(e);
                  });
            };
            n(s);
          } else
            angular.forEach(r, function (e) {
              angular.forEach(e.errors, function (e) {
                t.push(e);
              });
            });
          return t;
        }),
        (i.childrenErrors = function () {
          var e = [];
          if (a) {
            var t = function (n) {
              angular.forEach(n.errors, function (t) {
                e.push(t);
              }),
                angular.forEach(n.children, function (e) {
                  t(e);
                });
            };
            angular.forEach(s.children, function (e) {
              t(e);
            });
          } else e = [];
          return e;
        }),
        (i.resetDisplayed = function () {
          var e = i.getId();
          angular.forEach(r, function (t) {
            var n = [];
            angular.forEach(t.errors, function (t) {
              t.displayedOn !== e && n.push(t);
            }),
              (t.errors = n);
          }),
            n.fire(EVENT_ERRORS_CHANGED, a.errorInstanceId);
        }),
        (i.TYPES = o),
        (i.getId = function () {
          return a ? a.errorInstanceId : null;
        }),
        (function () {
          var e, t, n;
          if (a) {
            if (!((n = a) && n.$evalAsync && n.$watch)) throw Error("The first parameter should be scope");
            a.errorInstanceId
              ? (s = r[a.errorInstanceId])
              : ((a.errorInstanceId = _randomString(16)),
                (s = {
                  children: [],
                  errors: [],
                  errorInstanceId: a.errorInstanceId,
                  $id: a.$id,
                }),
                (r[a.errorInstanceId] = s),
                (e = (t = function (e) {
                  return e ? (e.errorInstanceId ? e.errorInstanceId : e.$parent ? t(e.$parent) : void 0) : null;
                })(a.$parent)) && r[e].children.push(s));
          }
        })(),
        i
      );
    };
  },
]);
var dependencies = [
    "exceptionHandler",
    "generalModule",
    "tpComponentsModule",
    "antifraudCaptchaV3Module",
    "antifraudCaptchaV2ProviderModule",
    "checkoutModule",
    "giftModule",
    "promocodeModule",
    "redemptionModule",
    "externalVerificationModule",
    "authModule",
    "passThroughModule",
    "country.selector",
    "billing.address",
    "tpDrop.module",
    "tp.i18n",
    "paymentProviderModule",
    "consentModule",
    "html5.placeholder",
    "amazonmwsModule",
    "creditCardModule",
    "mockModule",
    "paymentServiceModule",
    "applePayBtModule",
    "payWhatYouWantModule",
    "spreedlyModule",
    "alreadyHasAccessModule",
    "zeroModule",
    "confirmationModule",
    "checkoutMockModule",
    "bankSecureModule",
    "sharedSubscriptionModule",
    "continueThreeDSPurchaseModule",
    "printAddressModule",
    "providersModuleCH",
    "upgradeModule",
    "subscriptionReactivationModule",
    "creditRedemptionModule",
  ],
  checkoutComponentsModule = angular.module("checkoutComponentsModule", dependencies);
checkoutComponentsModule.constant("COMPONENT_TO_OPTIONS_MAP", {
  "account-header-component": {},
  "term-selector-component": {
    termSelector: !0,
  },
  "promo-code-component": {},
  "pay-what-you-want-form-component": {},
  "auth-component": {},
  "payment-form-component": {
    paymentForm: !0,
  },
  "already-has-access-component": {},
  "external-verification-component": {},
  "print-address-component": {},
  "confirmation-component": {},
  "gift-form-component": {},
  "redemption-component": {
    redemptionForm: !0,
  },
  "reactivate-subscription-component": {
    reactivationForm: !0,
  },
  "complete-upgrade-component": {},
  "upgrade-authentication-component": {},
}),
  checkoutComponentsModule.directive("view", [
    "$animate",
    "checkout",
    "COMPONENT_TO_OPTIONS_MAP",
    "$compile",
    "viewService",
    "$timeout",
    "performanceMetricsService",
    "billingConfig",
    "checkoutGoTo",
    "creditRedemptionService",
    function (e, t, n, r, o, a, i, s, c, l) {
      var u = "lazy-transclude",
        d = '<div>    <div error-list=""></div>    <div class="' + u + '"></div>     <div class="clearfix"></div></div>';
      function p(e) {
        var t = NodeFilter ? NodeFilter.SHOW_ELEMENT : 1,
          r = (function e(t, n) {
            var r = n || [],
              o = t.nextNode();
            return o ? e(t, r.concat(o)) : r;
          })(document.createNodeIterator(e.get(0), t, null, null), null)
            .map(function (e) {
              return Array.prototype.slice.call(e.attributes);
            })
            .filter(function (e) {
              return e.length;
            })
            .reduce(function (e, t) {
              return e.concat(t);
            }, [])
            .map(function (e) {
              return e.name;
            });
        return Object.keys(n)
          .filter(function (e) {
            return -1 !== r.indexOf(e);
          })
          .reduce(function (e, t) {
            return angular.extend(e, n[t]);
          }, {});
      }
      return {
        restrict: "A",
        replace: !0,
        template: function (e, t) {
          var n = p(e),
            r = e.get(0).innerHTML.trim();
          return o.registerState(t.view, n, r), d;
        },
        link: function (e, n, s, c) {
          var l = "view-" + s.view,
            d = o.getStateManager(s.view);
          (e.isPreviewMod = t.isPreviewMod),
            n.addClass("view " + l),
            n.attr("id", l),
            (c.setViewAsInactive = function () {
              n.removeClass("view-show");
            }),
            (c.setViewAsActive = function () {
              if ((n.addClass("view-show"), !n.hasClass("view-showed"))) {
                var t = (function (e) {
                  return e.find("." + u);
                })(n);
                n.addClass("view-showed"),
                  t.append(d.template),
                  r(t.contents())(e),
                  a(function () {
                    i.onViewRendered(s.view);
                  }, 0);
              }
            });
        },
        controller: [
          "$scope",
          "$q",
          "$element",
          "$attrs",
          "ngEventService",
          "viewService",
          "$timeout",
          "exposeTemplateParams",
          "exposeCustomVariables",
          "exposeActiveMeters",
          "exposeCustomCookies",
          "userService",
          "giftService",
          "redemptionService",
          "setupTrackingId",
          "statsService",
          "browserIdService",
          "offerStateService",
          "isMobileUserAgent",
          "creditRedemptionService",
          function (e, n, r, o, a, i, c, l, u, d, p, m, f, g, h, E, v, C, y, T) {
            var S = this;
            (this.options = {
              hasTermSelector: !1,
              hasPaymentForm: !1,
              hasRedemptionForm: !1,
              hasPasswordlessLoginForm: !1,
            }),
              (this.active = !1),
              (this.components = []),
              (this.stateName = o.view),
              (this.name = "view-" + this.stateName),
              (this.registerComponentController = function (e, t) {
                e.providerName &&
                  (this.components = this.components.filter(function (t) {
                    return e.providerName !== t.providerName;
                  })),
                  t && this.registerComponentOptions(t),
                  this.components.push(e);
              }),
              (this.unregisterComponentController = function (e) {
                this.components = this.components.filter(function (t) {
                  return t.$id === e.$id && e.unsubscribeNgEventService && e.unsubscribeNgEventService(), t.$id !== e.$id;
                });
              }),
              (this.registerComponentOptions = function (e) {
                e && e.termSelector && (S.options.hasTermSelector = e.termSelector), e && e.paymentForm && (S.options.hasPaymentForm = e.paymentForm), e && e.redemptionForm && (S.options.hasRedemptionForm = e.redemptionForm), e && e.reactivationForm && (S.options.hasReactivationForm = e.reactivationForm), e && e.passwordlessLoginForm && (S.options.hasPasswordlessLoginForm = e.passwordlessLoginForm);
              }),
              (this._isValid = function () {
                var e = n.defer(),
                  t = [];
                return (
                  angular.forEach(this.components, function (e) {
                    (!e._validateViewOnCompletePurchase || (e._validateViewOnCompletePurchase && e._validateViewOnCompletePurchase())) && e._isValid && t.push(n.when(e._isValid()));
                  }),
                  n.all(t).then(
                    function (t) {
                      var n = !0;
                      angular.forEach(t, function (e) {
                        !1 === e && (util.log('["' + S.name + '" validation] component is not valid'), (n = !1));
                      }),
                        e.resolve(n);
                    },
                    function () {
                      util.log('["' + S.name + '" validation] validation has failed with rejection'), e.resolve(!1);
                    }
                  ),
                  e.promise
                );
              }),
              (this.extendScope = function (n) {
                function r() {
                  (n.app = t.config.app),
                    (n.terms = t.config.terms),
                    (n.user = t.config.user),
                    (n.passwordlessCaptchaEnabled = t.config.passwordlessCaptchaEnabled),
                    (n.input = t.input),
                    (n.billingConfig = s),
                    (n.access = t.access),
                    (n.selectedTerm = t.flags.selectedTerm),
                    (n.flags = t.flags),
                    (n.allowLogout = t.allowLogout),
                    (n.isShowBoilerplateCloseButton = t.isShowBoilerplateCloseButton),
                    (n.giftEmailParams = f.form),
                    (n.voucher = g.voucher),
                    (n.externalCheckoutConfig = t.getExternalCheckoutConfig()),
                    (n.gotoOfferState = C.gotoOfferState),
                    (n.getOfferState = C.getOfferState),
                    (n.preselectTermId = t.preselectTermId),
                    (n.startCheckoutWithPreselectedTerm = t.startCheckoutWithPreselectedTerm),
                    T.setupScope && T.setupScope(n),
                    E.getParams().then(function (t) {
                      var r = {};
                      angular.extend(r, TPParam.params),
                        angular.extend(r, t),
                        (n.params = l(r)),
                        (n.custom = u(r.customVariables || {})),
                        (n.customCookies = p(r.customCookies || {})),
                        (n.activeMeters = d(r.activeMeters || [])),
                        v.getBrowserId().then(function (t) {
                          e.browserId = t;
                        });
                    });
                }
                Helper.wrapMethod("startCheckout", t, n),
                  Helper.wrapMethod("startRedemption", t, n),
                  Helper.wrapMethod("allowRedemption", t, n),
                  Helper.wrapMethod("canInitCheckoutWithAnon", t, n),
                  Helper.wrapMethod("isUserValid", t, n),
                  Helper.wrapMethod("isNewCustomer", t, n),
                  Helper.wrapMethod("allowTinypassAccountsLogin", t, n),
                  Helper.wrapMethod("allowTinypassAccountsLogout", t, n),
                  Helper.wrapMethod("allowTinypassAccountsLogout1", t, n),
                  Helper.wrapMethod("logout", t, n),
                  Helper.wrapMethod("login", t, n),
                  Helper.wrapMethod("register", t, n),
                  Helper.wrapMethod("isSelectedTermLocked", t, n),
                  Helper.wrapMethod("isPaymentMethod", t, n),
                  Helper.wrapMethod("isSupportedWorldpayCcMethod", t, n),
                  Helper.wrapMethod("isSupportedSpreedlyCcMethod", t, n),
                  Helper.wrapMethod("isPaymentMethodSelected", t, n),
                  Helper.wrapMethod("isMockUsed", t, n),
                  Helper.wrapMethod("selectPaymentMethod", t, n),
                  Helper.wrapMethod("resetPaymentSelection", t, n),
                  Helper.wrapMethod("close", t, n),
                  Helper.wrapMethod("canSelectPaymentMethod", t, n),
                  Helper.wrapMethod("isPayWhatYouWantTerm", t, n),
                  Helper.wrapMethod("isConfirmStepEnabled", t, n),
                  Helper.wrapMethod("selectTerm", t, n),
                  Helper.wrapMethod("isPasswordlessCheckoutEnabled", t, n),
                  Helper.wrapMethod("isDoubleOptInEnabled", t, n),
                  Helper.wrapMethod("isVatEuEnabled", t, n),
                  Helper.wrapMethod("isVatCanadaEnabled", t, n),
                  Helper.wrapMethod("isTaxUsEnabled", t, n),
                  Helper.wrapMethod("isUsBillingCountry", t, n),
                  Helper.wrapMethod("isUsBillingCountryLabel", t, n),
                  Helper.wrapMethod("isEuBillingCountryLabel", t, n),
                  Helper.wrapMethod("isBillingCountryEnabled", t, n),
                  Helper.wrapMethod("getBillingAddressEnabled", t, n),
                  Helper.wrapMethod("isOneSourceTaxEnabled", t, n),
                  Helper.wrapMethod("isAvalaraTaxEnabled", t, n),
                  Helper.wrapMethod("isUsSelected", t, n),
                  Helper.wrapMethod("isCanadaSelected", t, n),
                  Helper.wrapMethod("isBillingAddressAvailableForSelectedCountry", t, n),
                  Helper.wrapMethod("isPaymentTerm", t, n),
                  Helper.wrapMethod("isTermSelected", t, n),
                  Helper.wrapMethod("isExternalTerm", t, n),
                  Helper.wrapMethod("isGiftTerm", t, n),
                  Helper.wrapMethod("isDynamicTerm", t, n),
                  Helper.wrapMethod("isFreeDynamic", t, n),
                  Helper.wrapMethod("isPayableTerm", t, n),
                  Helper.wrapMethod("isChargingTerm", t, n),
                  Helper.wrapMethod("hasTax", t, n),
                  Helper.wrapMethod("toggleVatColumn", t, n),
                  Helper.wrapMethod("isVatColumnAvailable", t, n),
                  Helper.wrapMethod("isTaxColumnVisible", t, n),
                  Helper.wrapMethod("isVatColumnVisible", t, n),
                  Helper.wrapMethod("getVatLabel", t, n),
                  Helper.wrapMethod("gotoAuthState", t, n),
                  Helper.wrapMethod("hasAccess", t, n),
                  Helper.wrapMethod("isUpgradeOffer", t, n),
                  Helper.wrapMethod("isExternalCheckoutAvailable", t, n),
                  Helper.wrapMethod("startExternalCheckout", t, n),
                  Helper.wrapMethod("isPromoCodeAvailable", t, n),
                  r(),
                  (n.isAuthorizationSupportedByPaymentMethod = function () {
                    var e = t.flags.selectedPaymentMethod;
                    return !e || (e && !0 === e.authSupported) || (e && [50].includes(e.id));
                  }),
                  (n.getFreeTrialType = function () {
                    var e = t.getSelectedTerm(),
                      n = e.originalBillingPlan ? e.originalBillingPlan.billingPlanTable : null,
                      r = e.billingPlanTable.some(function (e, t) {
                        return "true" === e.isFree && (!n || "true" === n[t].isFree);
                      }),
                      o = e.billingPlanTable.some(function (e, t) {
                        return "true" === e.isFree && n && "false" === n[t].isFree;
                      });
                    return r && o ? "FREE_TRIAL_TERM_PROMO" : r ? "FREE_TRIAL_TERM" : o ? "FREE_TRIAL_PROMO" : "NOT_FREE_TRIAL";
                  }),
                  (n.getPayableTermType = function () {
                    var e = t.getSelectedTerm();
                    return t.isPayableTerm(e) ? (!t.alreadyPurchased() && e.isSubscription && e.hasFreeTrial ? "FREE_TRIAL_SUBSCRIPTION" : !t.alreadyPurchased() && e.hasFreeTrial ? "FREE_TRIAL" : "PAYABLE") : "NOT_PAYABLE_TERM";
                  }),
                  (n.getTaxType = function () {
                    if (t.hasTax()) {
                      if (t.isTaxCnbcEnabled()) return "CNBC";
                      if (t.isVatEuEnabled()) return "EU";
                      if (t.isTaxUsEnabled()) return "US";
                      if (t.isVatCanadaEnabled() && t.input.canadianTaxes.length > 1) return "MANY_RATE_CA";
                      if (t.isVatCanadaEnabled() && 1 === t.input.canadianTaxes.length) return "ONE_RATE_CA";
                    }
                    return "NONE";
                  }),
                  (n.getReceiptType = function () {
                    return t.isUpgradeAuthentication()
                      ? "UpgradeAuthentication"
                      : t.isUpgradeOffer()
                      ? "UpgradePurchase"
                      : t.isPaymentMethod(OPENPAY_CASH)
                      ? "OpenpayCash"
                      : t.isPaymentMethod(EASYPAY_MULTIBANCO)
                      ? "EasypayMultibanco"
                      : t.isPaymentMethod(EASYPAY_MBWAY)
                      ? "EasypayMbway"
                      : t.isPaymentMethod(EASYPAY_DIRECT_DEBIT)
                      ? "EasypayDirectDebit"
                      : t.isPaymentMethod(EASYPAY_BOLETO)
                      ? "EasypayBoleto"
                      : t.isPaymentMethod(ONET)
                      ? "Onet"
                      : t.isPaymentMethod(VOLGA)
                      ? "Volga"
                      : t.isPaymentMethod(INVOICE_BASED_FIRST)
                      ? "Inbaf"
                      : t.isPaymentMethod(INVOICE_BASED_SECOND)
                      ? "Inbas"
                      : t.isPaymentMethod(PAY_U_BRAZIL_BOLETO)
                      ? "PayUBrazilBoleto"
                      : t.isGiftTerm(t.flags.selectedTerm)
                      ? "GiftPurchase"
                      : n.isRedemption()
                      ? "GiftRedemption"
                      : t.isExternalTerm(t.flags.selectedTerm)
                      ? "External"
                      : t.isRegistrationTerm(t.flags.selectedTerm)
                      ? "Registration"
                      : "Purchase";
                  }),
                  (n.getReceiptTemplateConfig = function () {
                    var e = {
                      footer: !0,
                    };
                    return t.isPaymentMethod(EASYPAY_BOLETO) ? ((e.footer = !1), e) : e;
                  }),
                  (n.isRedemption = function () {
                    return g.state === g.STATE_DONE;
                  }),
                  (n.getSelectedPaymentMethodName = function () {
                    return t.input.receipt.paymentMethodName ? t.input.receipt.paymentMethodName : t.flags.selectedPaymentMethod ? t.flags.selectedPaymentMethod.name : null;
                  }),
                  (n.isApplePayPaymentMethod = function () {
                    return t.isPasswordlessCheckoutEnabled() && n.getSelectedPaymentMethodName() && n.getSelectedPaymentMethodName().toLowerCase().includes("apple pay");
                  }),
                  (n.isTermDiscounted = function () {
                    return t.flags.isDiscounted;
                  }),
                  (n.isMobileUserAgent = y),
                  (n.isGigyaUserProvider = m.isGigyaUserProvider),
                  (n.allowLogin = m.allowLogin),
                  (n.allowInvalidUser = function () {
                    return t.canInitCheckoutWithAnon() || ("offer" === i.getActiveState() && (m.allowTinypassAccountsLogin() || m.isGigyaUserProvider()));
                  });
                var o = a.subscribe(EVENT_CHECKOUT_RELOADED, function () {
                    r();
                  }),
                  h = a.subscribe(EVENT_VIEW_ACTIVATED, function () {
                    c(function () {
                      t.resize();
                    });
                  }),
                  S = a.subscribe(EVENT_CHECKOUT_TERM_SELECTED, function () {
                    r();
                  }),
                  P = a.subscribe(EVENT_CHECKOUT_PRICE_CHANGED, function () {
                    r();
                  }),
                  A = a.subscribe(EVENT_STATS_TRACKED, function () {
                    r();
                  });
                n.unsubscribeNgEventService = function () {
                  o(), h(), S(), P(), A();
                };
              }),
              this.extendScope(e),
              i.registerView(this),
              this.registerComponentOptions(i.getStateManager(this.stateName).options);
          },
        ],
      };
    },
  ]),
  checkoutComponentsModule.factory("isMobileUserAgent", function () {
    return function () {
      return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
    };
  }),
  checkoutComponentsModule.directive("autoCloseApplePayReceipt", [
    "checkout",
    "eventService",
    function (e, t) {
      return {
        restrict: "A",
        scope: {
          closingDelay: "@?",
          transitionTimeUp: "@?",
          transitionTimeDown: "@?",
          animationOffsetBottom: "@?",
          animationOffsetTop: "@?",
          animationContainerSize: "@?",
        },
        link: {
          pre: function () {
            t.postMessage("toggleIframeShadow", {
              isEnabled: !1,
            });
          },
          post: function (n, r) {
            var o,
              a = anime.timeline({}),
              i = !1,
              s = r.find("button.apple-pay-receipt__close");
            function c() {
              (n.closingDelay = n.closingDelay ? parseInt(n.closingDelay, 10) : 4e3),
                (n.transitionTimeUp = n.transitionTimeUp ? parseInt(n.transitionTimeUp, 10) : 1300),
                (n.transitionTimeDown = n.transitionTimeDown ? parseInt(n.transitionTimeDown, 10) : 1300),
                (n.animationOffsetBottom = n.animationOffsetBottom ? parseInt(n.animationOffsetBottom, 10) : 300),
                (n.animationOffsetTop = n.animationOffsetTop ? parseInt(n.animationOffsetTop, 10) : 100),
                (n.animationContainerSize = n.animationContainerSize ? parseInt(n.animationContainerSize, 10) : 560),
                r.parent().height(n.animationContainerSize),
                (o = r.parent().height() - n.animationOffsetBottom),
                a
                  .add({
                    targets: ".apple-pay-receipt-animation-container",
                    keyframes: [
                      {
                        opacity: 0,
                      },
                      {
                        translateY: o,
                        opacity: 0,
                      },
                      {
                        translateY: n.animationOffsetTop,
                        opacity: 1,
                        duration: n.transitionTimeUp,
                      },
                    ],
                    easing: "easeInOutSine",
                  })
                  .add(
                    {
                      targets: ".in .circle",
                      strokeDashoffset: [anime.setDashoffset, 0],
                      easing: "easeInOutSine",
                      duration: n.transitionTimeUp + 200,
                    },
                    n.transitionTimeUp / 3
                  )
                  .add(
                    {
                      targets: ".in .check",
                      strokeDashoffset: [anime.setDashoffset, 0],
                      easing: "easeInOutSine",
                      duration: 600,
                      complete: function () {
                        s.toggleClass("apple-pay-button--disabled", !1);
                      },
                    },
                    n.transitionTimeUp
                  )
                  .add({
                    targets: ".apple-pay-receipt-animation-container",
                    keyframes: [
                      {
                        translateY: n.animationOffsetTop,
                        opacity: 1,
                      },
                      {
                        translateY: o,
                        opacity: 0,
                      },
                    ],
                    duration: n.transitionTimeDown,
                    easing: "easeInOutSine",
                    delay: 100,
                    begin: a.pause,
                    complete: l,
                  }),
                setTimeout(u, n.closingDelay);
            }
            function l() {
              e.close(function () {
                t.postMessage("toggleIframeShadow", {
                  isEnabled: !0,
                });
              });
            }
            function u() {
              i || ((i = !0), s.toggleClass("apple-pay-button--disabled", !0), a.play());
            }
            r.ready(function () {
              c();
            }),
              s.on("click touch", function () {
                u();
              });
          },
        },
      };
    },
  ]),
  checkoutComponentsModule.directive("errorMsg", [
    "errorService",
    function (e) {
      return {
        restrict: "A",
        require: ["^view", "ngModel"],
        scope: {
          msg: "@errorMsg",
        },
        link: function (t, n, r, o) {
          var a = o[0],
            i = o[1];
          (t._isValid = function () {
            e(t).reset();
            var n = !0;
            return (
              i.$error &&
                angular.forEach(i.$error, function (e, t) {
                  e && (n = !1);
                }),
              n || e(t).global(t.msg),
              n
            );
          }),
            a.registerComponentController(t);
        },
      };
    },
  ]),
  checkoutComponentsModule.directive("termSelectorComponent", [
    "checkout",
    "$sce",
    function (e, t) {
      return {
        restrict: "A",
        require: "^view",
        templateUrl: "/widget/checkout/component/partials/term-selector-component.html",
        link: function (e, t, n, r) {
          r.registerComponentController(e, {
            termSelector: !0,
          }),
            t.attr("id", "term-selector-component"),
            (e.extendScope = function () {
              r.extendScope(e);
            }),
            e.extendScope(),
            t.on("$destroy", function () {
              r.unregisterComponentController(e);
            });
        },
        controller: [
          "$scope",
          "$timeout",
          "ngEventService",
          function (t, n, r) {
            angular.extend(t, BaseComponentController),
              (t.isTermDiscounted = function () {
                return e.flags.isDiscounted;
              }),
              (t.isUnlimInterval = function (e) {
                return e && 2147483647 === parseInt(e.cycles, 10);
              }),
              angular.forEach(e.config.terms, function (e, n) {
                t["term" + (n + 1)] = e;
              }),
              (t._isValid = function () {
                return e.isTermSelected();
              });
            var o = r.subscribe(EVENT_CHECKOUT_RELOADED, function () {
              t.extendScope();
            });
            t.unsubscribeNgEventService = function () {
              o();
            };
          },
        ],
      };
    },
  ]),
  checkoutComponentsModule.directive("dynamicName", [
    "$parse",
    function (e) {
      return {
        restrict: "A",
        priority: 1e4,
        controller: [
          "$scope",
          "$element",
          "$attrs",
          function (t, n, r) {
            var o = e(r.dynamicName)(t);
            delete r.dynamicName, n.removeAttr("data-dynamic-name"), n.removeAttr("dynamic-name"), r.$set("name", o);
          },
        ],
      };
    },
  ]),
  checkoutComponentsModule.directive("paymentFormComponent", [
    "checkout",
    "providersServiceCH",
    "captchaV2Provider",
    "captchaV3Service",
    function (e, t, n, r) {
      return {
        restrict: "A",
        require: "^view",
        templateUrl: "/widget/checkout/component/partials/payment-form-component.html",
        transclude: !0,
        link: function (t, o, a, i) {
          i.registerComponentController(t, {
            paymentForm: !0,
          }),
            o.attr("id", "payment-form-component"),
            n.setSiteKey(e.config.captcha2SiteKey),
            i.extendScope(t),
            (t.isCaptchaV3Enabled = r.isCaptchaV3Enabled()),
            n.instantiateCaptchaVariables(t),
            o.on("$destroy", function () {
              i.unregisterComponentController(t), n.clearCaptchaListeners();
            });
        },
        controller: [
          "$scope",
          function (n) {
            angular.extend(n, BaseComponentController),
              Helper.wrapMethod("isPaymentMethodRequired", e, n),
              Helper.wrapMethod("isZeroPayment", e, n),
              Helper.wrapMethod("isSelectedTermAutoRenewChoiceAvailable", e, n),
              (n.hasNewFlow = function () {
                var n = e.flags.selectedPaymentMethod && e.flags.selectedPaymentMethod.id,
                  r = n === EDGIL_PAYWAY;
                return t.hasNewFlow(n) && !r;
              }),
              (n.input = e.input);
          },
        ],
      };
    },
  ]),
  checkoutComponentsModule.directive("paymentMethodSelectorComponent", [
    "checkout",
    "ngEventService",
    function (e, t) {
      return {
        restrict: "A",
        require: "^view",
        templateUrl: "/widget/checkout/component/partials/payment-method-selector-component.html",
        link: function (e, t, n, r) {
          r.registerComponentController(e),
            t.attr("id", "payment-method-selector-component"),
            t.on("$destroy", function () {
              r.unregisterComponentController(e);
            });
        },
        controller: [
          "$scope",
          function (n) {
            angular.extend(n, BaseComponentController), (n.paymentMethods = e.removeVolgaIfNotSwitzerlandCountrySelected(e.input.paymentMethods)), (n.selectedPaymentMethod = null);
            var r = t.subscribe(EVENT_CHECKOUT_PAYMENT_METHODS_CHANGED, function (t, r) {
                util.log("[PM SELECTOR] Got new payment method event", r), (n.paymentMethods = e.removeVolgaIfNotSwitzerlandCountrySelected(r));
              }),
              o = t.subscribe(EVENT_COUNTRY_OF_RESIDENCE_SELECTED, function (t, r) {
                (n.paymentMethods = e.removeVolgaIfNotSwitzerlandCountrySelected(e.input.paymentMethods, r)), e.resetPaymentSelectionIfVolgaSelected(r);
              }),
              a = t.subscribe(EVENT_CHECKOUT_RESET_SELECTED_PAYMENT_METHOD, function () {
                n.selectedPaymentMethod = null;
              });
            (n.unsubscribeNgEventService = function () {
              r(), a(), o();
            }),
              (n.selectPaymentMethod = function (t) {
                return n.hasErrors() && n.reset(), (n.selectedPaymentMethod = t), e.selectPaymentMethod.apply(e, Array.prototype.slice.call(arguments));
              }),
              Helper.wrapMethod("isPaymentMethod", e, n),
              Helper.wrapMethod("isPaymentMethodSelected", e, n),
              Helper.wrapMethod("resetPaymentSelection", e, n),
              Helper.wrapMethod("canSelectPaymentMethod", e, n),
              Helper.wrapMethod("isPaymentMethodRequired", e, n),
              Helper.wrapMethod("isZeroPayment", e, n),
              (n._isValid = function () {
                return e.isPaymentMethodSelected();
              }),
              (n.getCurrencyClass = function () {
                return e.getSelectedTerm() && e.getSelectedTerm().chargeCurrency && e.getSelectedTerm().chargeCurrency.toLowerCase();
              });
          },
        ],
      };
    },
  ]),
  checkoutComponentsModule.directive("closeButton", [
    "checkout",
    function (e) {
      return {
        restrict: "A",
        require: "^view",
        replace: !0,
        templateUrl: "/widget/checkout/component/partials/close-button-component.html",
        scope: {
          title: "@",
          usePrimaryColor: "=?",
        },
        link: function (t, n, r, o) {
          o.registerComponentController(t),
            n.on("click", function () {
              t.$apply(function () {
                e.close();
              });
            }),
            n.on("$destroy", function () {
              o.unregisterComponentController(t);
            });
        },
        controller: [
          "$scope",
          function (e) {
            angular.extend(e, BaseComponentController);
          },
        ],
      };
    },
  ]),
  checkoutComponentsModule.directive("nextButton", [
    "viewService",
    function (e) {
      return {
        restrict: "A",
        require: "^view",
        replace: !0,
        templateUrl: "/widget/checkout/component/partials/next-button-component.html",
        scope: {
          title: "@",
        },
        link: function (t, n, r, o) {
          o.registerComponentController(t),
            n.on("click", function () {
              t.$apply(function () {
                e.gotoNextView();
              });
            }),
            n.on("$destroy", function () {
              o.unregisterComponentController(t);
            });
        },
        controller: [
          "$scope",
          function (e) {
            angular.extend(e, BaseComponentController);
          },
        ],
      };
    },
  ]),
  checkoutComponentsModule.directive("previousButton", [
    "viewService",
    "ngEventService",
    function (e, t) {
      return {
        restrict: "A",
        require: "^view",
        replace: !0,
        templateUrl: "/widget/checkout/component/partials/previous-button-component.html",
        scope: {
          title: "@",
        },
        link: function (n, r, o, a) {
          a.registerComponentController(n),
            r.on("click", function () {
              t.fire(EVENT_GOTO_PREVIOUS_STATE, {
                isConfirmation: e.isActive("confirmation"),
              }),
                n.$apply(function () {
                  e.gotoPreviousState();
                });
            }),
            r.on("$destroy", function () {
              a.unregisterComponentController(n);
            });
        },
        controller: [
          "$scope",
          function (t) {
            angular.extend(t, BaseComponentController), (t.hasPreviousState = e.hasPreviousState);
          },
        ],
      };
    },
  ]),
  checkoutComponentsModule.directive("errorList", function () {
    return {
      restrict: "A",
      templateUrl: "/widget/checkout/component/partials/error-list-component.html",
      scope: !1,
      controller: [
        "$scope",
        "ngEventService",
        "errorService",
        "$timeout",
        "$rootScope",
        function (e, t, n, r, o) {
          e.errors = [];
          var a = n(e).getId(),
            i = t.subscribe(EVENT_ERRORS_CHANGED, function () {
              (e.errors.length = 0),
                r(function () {
                  var t = [],
                    i = n(o).errors(!0);
                  angular.forEach(i, function (e) {
                    (e.displayed && e.displayedOn !== a) || (t.push(e), (e.displayed = !0), (e.displayedOn = a));
                  });
                  i = n(e).errors(!0);
                  angular.forEach(i, function (e) {
                    (e.displayed && e.displayedOn !== a) || (t.push(e), (e.displayed = !0), (e.displayedOn = a));
                  }),
                    r(function () {
                      var r = n(e).childrenErrors();
                      angular.forEach(r, function (e) {
                        (e.displayed && e.displayedOn !== a) || (t.push(e), (e.displayed = !0), (e.displayedOn = a));
                      }),
                        t.length > 0 && (e.errors = t);
                    }, 0);
                }, 0);
            });
          e.$on("$destroy", function () {
            i();
          }),
            (e.reset = function () {
              n(e).resetDisplayed();
            }),
            (e.hasErrors = function () {
              return e.errors && e.errors.length;
            }),
            (e.hasOneError = function () {
              return e.errors && 1 === e.errors.length;
            });
        },
      ],
    };
  }),
  checkoutComponentsModule.directive("completePurchaseButton", [
    "checkout",
    "ngEventService",
    function (e, t) {
      return {
        restrict: "A",
        require: "^view",
        replace: !0,
        templateUrl: "/widget/checkout/component/partials/complete-purchase-button-component.html",
        scope: {
          title: "@",
          isDisabled: "=",
        },
        link: function (n, r, o, a) {
          var i = !1,
            s = t.subscribe("PURCHASE_FAILED", function () {
              i = !1;
            });
          a.registerComponentController(n),
            r.on("click", function () {
              n.isDisabled ||
                i ||
                ((i = !0),
                e.completePayment().finally(function () {
                  i = !1;
                }));
            }),
            r.on("$destroy", function () {
              a.unregisterComponentController(n), s();
            });
        },
        controller: [
          "$scope",
          function (e) {
            angular.extend(e, BaseComponentController);
          },
        ],
      };
    },
  ]),
  checkoutComponentsModule.directive("gotoConfirmationButton", [
    "checkout",
    function (e) {
      return {
        restrict: "A",
        require: "^view",
        replace: !0,
        templateUrl: "/widget/checkout/component/partials/goto-confirmation-component.html",
        scope: {
          title: "@",
          isDisabled: "=?",
        },
        link: function (t, n, r, o) {
          var a = !1;
          o.registerComponentController(t),
            n.on("click", function () {
              t.isDisabled ||
                a ||
                ((a = !0),
                e.confirmPayment().finally(function () {
                  a = !1;
                }));
            }),
            n.on("$destroy", function () {
              o.unregisterComponentController(t);
            });
        },
        controller: [
          "$scope",
          function (e) {
            angular.extend(e, BaseComponentController);
          },
        ],
      };
    },
  ]),
  checkoutComponentsModule.directive("accountHeaderComponent", [
    "checkout",
    function (e) {
      return {
        restrict: "A",
        templateUrl: "/widget/checkout/component/partials/account-header-component.html",
        replace: !0,
        link: function (e, t, n) {
          e.noLanguage = n.hasOwnProperty("noLanguage");
        },
        controller: [
          "$scope",
          function (t) {
            (t.login = e.login), (t.logout = e.logout), (t.isUserValid = e.isUserValid), (t.allowTinypassAccountsLogin = e.allowTinypassAccountsLogin), (t.allowTinypassAccountsLogout = e.allowTinypassAccountsLogout);
          },
        ],
      };
    },
  ]),
  checkoutComponentsModule.directive("debugger", [
    "checkout",
    function (e) {
      return {
        restrict: "A",
        templateUrl: "/widget/checkout/component/partials/debugger.html",
        link: function (e) {
          e.$watch(
            function () {
              return e.log.length;
            },
            function () {
              $("#debugger #log-output").scrollTop(1e10);
            }
          );
        },
        controller: [
          "$scopes",
          function (t) {
            (t.app = e.config.app), (t.terms = e.config.terms), (t.log = e.log), (t.input = e.input), (t.access = e.access);
          },
        ],
      };
    },
  ]),
  checkoutComponentsModule.directive("checkout", [
    "checkout",
    "eventService",
    function (e, t) {
      return {
        restrict: "A",
        template: '<div ng-if="isContextLoaded" ng-transclude=""></div>',
        transclude: !0,
        link: function (e, t) {
          t.addClass("checkout");
        },
        controller: [
          "$scope",
          "$element",
          "$attrs",
          function (n, r, o) {
            var a = "context" === getParameterByName("initMode");
            n.isContextLoaded = !a;
            var i = {
              preferredWidth: o.width,
              preferredHeight: o.height,
            };
            a
              ? t.initContext().then(function (t) {
                  (n.isContextLoaded = !0), (i = angular.extend({}, i, t)), e.init(n, i);
                })
              : ((n.isContextLoaded = !0), e.init(n, i));
          },
        ],
      };
    },
  ]),
  checkoutComponentsModule.directive("purchaseReceipt", function () {
    return {
      restrict: "A",
      require: "^view",
      templateUrl: "/widget/checkout/component/partials/purchase-receipt-component.html",
      link: function (e, t, n, r) {
        r.registerComponentController(e),
          r.extendScope(e),
          t.on("$destroy", function () {
            r.unregisterComponentController(e);
          });
      },
    };
  }),
  checkoutComponentsModule.directive("registrationReceipt", function () {
    return {
      restrict: "A",
      require: "^view",
      templateUrl: "/widget/checkout/component/partials/registration-receipt-component.html",
      scope: {},
      link: function (e, t, n, r) {
        r.registerComponentController(e),
          r.extendScope(e),
          t.on("$destroy", function () {
            r.unregisterComponentController(e);
          });
      },
    };
  }),
  checkoutComponentsModule.directive("externalReceipt", function () {
    return {
      restrict: "A",
      require: "^view",
      templateUrl: "/widget/checkout/component/partials/external-receipt-component.html",
      link: function (e, t, n, r) {
        r.registerComponentController(e),
          r.extendScope(e),
          t.on("$destroy", function () {
            r.unregisterComponentController(e);
          });
      },
    };
  }),
  checkoutComponentsModule.directive("giftRedemptionReceipt", function () {
    return {
      restrict: "A",
      require: "^view",
      templateUrl: "/widget/checkout/component/partials/gift-redemption-receipt-component.html",
      link: function (e, t, n, r) {
        r.registerComponentController(e),
          r.extendScope(e),
          t.on("$destroy", function () {
            r.unregisterComponentController(e);
          });
      },
    };
  }),
  checkoutComponentsModule.directive("giftPurchaseReceipt", function () {
    return {
      restrict: "A",
      require: "^view",
      templateUrl: "/widget/checkout/component/partials/gift-purchase-receipt-component.html",
      link: function (e, t, n, r) {
        r.registerComponentController(e),
          r.extendScope(e),
          t.on("$destroy", function () {
            r.unregisterComponentController(e);
          });
      },
    };
  }),
  checkoutComponentsModule.directive("openpayCashReceipt", function () {
    return {
      restrict: "A",
      require: "^view",
      templateUrl: "/widget/checkout/component/partials/openpay-cash-receipt-component.html",
      link: function (e, t, n, r) {
        r.registerComponentController(e),
          r.extendScope(e),
          t.on("$destroy", function () {
            r.unregisterComponentController(e);
          });
      },
    };
  }),
  checkoutComponentsModule.directive("easypayMultibancoReceipt", function () {
    return {
      restrict: "A",
      require: "^view",
      templateUrl: "/widget/checkout/component/partials/easypay-multibanco-receipt-component.html",
      link: function (e, t, n, r) {
        r.registerComponentController(e),
          r.extendScope(e),
          t.on("$destroy", function () {
            r.unregisterComponentController(e);
          });
      },
    };
  }),
  checkoutComponentsModule.directive("easypayMbwayReceipt", function () {
    return {
      restrict: "A",
      require: "^view",
      templateUrl: "/widget/checkout/component/partials/easypay-mbway-receipt-component.html",
      link: function (e, t, n, r) {
        r.registerComponentController(e),
          r.extendScope(e),
          t.on("$destroy", function () {
            r.unregisterComponentController(e);
          });
      },
    };
  }),
  checkoutComponentsModule.directive("easypayDirectDebitReceipt", function () {
    return {
      restrict: "A",
      require: "^view",
      templateUrl: "/widget/checkout/component/partials/easypay-direct-debit-receipt-component.html",
      link: function (e, t, n, r) {
        r.registerComponentController(e),
          r.extendScope(e),
          t.on("$destroy", function () {
            r.unregisterComponentController(e);
          });
      },
    };
  }),
  checkoutComponentsModule.directive("easypayBoletoReceipt", function () {
    return {
      restrict: "A",
      require: "^view",
      templateUrl: "/widget/checkout/component/partials/easypay-boleto-receipt-component.html",
      link: function (e, t, n, r) {
        r.registerComponentController(e),
          r.extendScope(e),
          t.on("$destroy", function () {
            r.unregisterComponentController(e);
          });
      },
    };
  }),
  checkoutComponentsModule.directive("onetReceipt", function () {
    return {
      restrict: "A",
      require: "^view",
      templateUrl: "/widget/checkout/component/partials/onet-receipt-component.html",
      link: function (e, t, n, r) {
        r.registerComponentController(e),
          r.extendScope(e),
          t.on("$destroy", function () {
            r.unregisterComponentController(e);
          });
      },
    };
  }),
  checkoutComponentsModule.directive("volgaReceipt", function () {
    return {
      restrict: "A",
      require: "^view",
      templateUrl: "/widget/checkout/component/partials/volga-receipt-component.html",
      link: function (e, t, n, r) {
        r.registerComponentController(e),
          r.extendScope(e),
          t.on("$destroy", function () {
            r.unregisterComponentController(e);
          });
      },
    };
  }),
  checkoutComponentsModule.directive("inbafReceipt", function () {
    return {
      restrict: "A",
      require: "^view",
      templateUrl: "/widget/checkout/component/partials/inbaf-receipt-component.html",
      link: function (e, t, n, r) {
        r.registerComponentController(e),
          r.extendScope(e),
          t.on("$destroy", function () {
            r.unregisterComponentController(e);
          });
      },
    };
  }),
  checkoutComponentsModule.directive("inbasReceipt", function () {
    return {
      restrict: "A",
      require: "^view",
      templateUrl: "/widget/checkout/component/partials/inbas-receipt-component.html",
      link: function (e, t, n, r) {
        r.registerComponentController(e),
          r.extendScope(e),
          t.on("$destroy", function () {
            r.unregisterComponentController(e);
          });
      },
    };
  }),
  checkoutComponentsModule.directive("brazilBoletoReceipt", function () {
    return {
      restrict: "A",
      require: "^view",
      templateUrl: "/widget/checkout/component/partials/brazil-boleto-receipt-component.html",
      link: function (e, t, n, r) {
        r.registerComponentController(e),
          r.extendScope(e),
          t.on("$destroy", function () {
            r.unregisterComponentController(e);
          });
      },
    };
  }),
  checkoutComponentsModule.directive("canadianTaxes", function () {
    return {
      restrict: "A",
      require: "^view",
      templateUrl: "/widget/checkout/component/partials/canadian-taxes.html",
      link: function (e, t, n, r) {
        r.registerComponentController(e),
          r.extendScope(e),
          t.on("$destroy", function () {
            r.unregisterComponentController(e);
          });
      },
    };
  }),
  checkoutComponentsModule.directive("canadianHint", function () {
    return {
      restrict: "A",
      require: "^view",
      templateUrl: "/widget/checkout/component/partials/canadian-taxes-hint.html",
      scope: {},
      controller: [
        "$scope",
        function (e) {
          angular.extend(e, BaseComponentController);
        },
      ],
      link: function (e, t, n, r) {
        r.registerComponentController(e),
          r.extendScope(e),
          t.on("$destroy", function () {
            r.unregisterComponentController(e);
          });
      },
    };
  }),
  checkoutComponentsModule.factory("offerStateService", [
    "containerService",
    "eventService",
    "checkout",
    function (e, t, n) {
      var r = getParameterByName("offerState"),
        o = [];
      return {
        registerState: function (e) {
          r || (r = e), o.push(e);
        },
        getOfferState: function () {
          return r;
        },
        gotoOfferState: function (o) {
          if (e.isInline) return (n.params.offerState = o), void t.startCheckoutEvent(n.params);
          r = o;
        },
      };
    },
  ]),
  checkoutComponentsModule.directive("offerState", function () {
    return {
      restrict: "A",
      replace: !0,
      transclude: !0,
      template: '<div><div class="offer-state" ng-if="state === getOfferState()"  > <div ng-transclude></div></div></div>',
      controller: [
        "$scope",
        "offerStateService",
        function (e, t) {
          (e.state = ""),
            (e.registerState = function (n) {
              (e.state = n), t.registerState(n);
            }),
            (e.gotoOfferState = t.gotoOfferState),
            (e.getOfferState = t.getOfferState);
        },
      ],
      link: function (e, t, n) {
        e.registerState(n.offerState);
      },
    };
  }),
  checkoutComponentsModule.directive("hideIfNoPaymentMethods", function () {
    return {
      restrict: "A",
      scope: {
        subscriptionPaymentMethods: "=",
      },
      link: function (e, t) {
        (e.subscriptionPaymentMethods && e.subscriptionPaymentMethods.length) || t.remove();
      },
    };
  }),
  checkoutComponentsModule.directive("boilerplateLoginDropdown", function () {
    return {
      restrict: "E",
      replace: !0,
      templateUrl: "/widget/checkout/component/partials/boilerplate-login-dropdown.html",
      controller: [
        "$scope",
        "$document",
        function (e, t) {
          (e.isDropdownOpen = !1),
            (e.logoutToggle = function () {
              e.isDropdownOpen = !e.isDropdownOpen;
            }),
            (e.displayUserName = function (e) {
              return e.firstName && e.lastName ? e.firstName + " " + e.lastName : e.firstName || e.lastName ? e.firstName || e.lastName : e.email;
            }),
            t.on("click", function () {
              e.isDropdownOpen && ((e.isDropdownOpen = !1), e.$apply());
            });
        },
      ],
    };
  }),
  checkoutComponentsModule.directive("addressSelector", [
    "errorService",
    "lang",
    function (e, t) {
      return {
        restrict: "E",
        scope: {
          getAddressesList: "=",
          getStructuredAddress: "=?",
          showManually: "=?",
          setInputValue: "=?",
          disabled: "=?",
          preselectedRegion: "=?",
          inputPlaceholder: "@",
          isStatic: "@",
        },
        replace: !0,
        templateUrl: "/widget/checkout/component/partials/address-selector.html",
        link: function (n, r) {
          document.addEventListener("click", function (o) {
            n.isDropdownOpen && 0 === r[0].getElementsByClassName(o.target.className).length && ((n.isDropdownOpen = !1), n.validInput || n.isStatic || "" === n.query || ((n.hasError = !0), n.showManually(n.hasError), e(n).reset(), e(n).component(t.trc("checkout.platform", "Please select one of provided addresses."))), n.$apply());
          });
        },
        controller: [
          "$scope",
          "ngEventService",
          "errorService",
          function (e, t, n) {
            (e.isDropdownOpen = !1), (e.validInput = !1), (e.hasError = !1), (e.query = ""), (e.lastQuery = ""), (e.blockInput = !1), (e.searchTimeout = null), (e.searchResults = e.isStatic ? e.getAddressesList() : []);
            var r = t.subscribe("PAYMENT_BILLING_PLAN_TABLE_UPDATE", function () {
              e.isStatic || ((e.query = ""), (e.validInput = !1), (e.hasError = !1));
            });
            e.$on("$destroy", function () {
              r();
            }),
              (e.search = function () {
                if ((e.blockInput && (e.query = e.lastQuery), (e.validInput = !1), (e.hasError = !1), !e.isStatic && "" === e.query)) return e.setInputValue({}), void e.showManually(e.hasError);
                (e.isDropdownOpen = !0),
                  e.isStatic ||
                    ((e.searchResults = []),
                    clearTimeout(e.searchTimeout),
                    (e.searchTimeout = setTimeout(function () {
                      (tinypass.withoutWaitPanel = !0),
                        (e.blockInput = !0),
                        (e.lastQuery = e.query),
                        "" === e.query
                          ? ((e.searchResults = []), (e.hasError = !1), (e.blockInput = !1), (tinypass.withoutWaitPanel = !1))
                          : e
                              .getAddressesList(e.query)
                              .then(function (t) {
                                e.setInputValue({}), (e.searchResults = t.models.addresses || []), (e.hasError = 0 === e.searchResults.length), e.showManually(e.hasError);
                              })
                              .catch(function (t) {
                                (e.hasError = !0), e.showManually(!0), n(e).reset(), n(e).component(t.errors[0].msg);
                              })
                              .finally(function () {
                                (e.blockInput = !1), (tinypass.withoutWaitPanel = !1);
                              });
                    }, 700)));
              }),
              (e.getFullAddress = function (t) {
                e.isStatic
                  ? e.setInputValue(t)
                  : e
                      .getStructuredAddress(t.id)
                      .then(function (t) {
                        (e.validInput = !0), e.setInputValue(t.models.address);
                      })
                      .catch(function (t) {
                        (e.validInput = !1), (e.hasError = !0), n(e).reset(), n(e).component(t.errors[0].msg);
                      }),
                  (e.query = e.getItem(t)),
                  (e.isDropdownOpen = !1);
              }),
              (e.getItem = function (t) {
                return e.isStatic ? t.regionName : t.suggestion;
              });
          },
        ],
      };
    },
  ]),
  checkoutComponentsModule.directive("banner", [
    "eventService",
    function (e) {
      return {
        restrict: "A",
        link: function (t, n) {
          e.postMessage("bannerInit"),
            n.on("$destroy", function () {
              e.postMessage("bannerDestroy");
            });
        },
      };
    },
  ]);
var checkoutService = angular.module("checkoutServiceModule", ["checkoutModule"]);
checkoutService.factory("checkoutService", [
  "tpHTTP",
  "$q",
  "$window",
  "statsService",
  function (e, t, n, r) {
    var o = {
      getOffer$: null,
      isTimeOutDelay: !1,
      getOffer: function (a, i) {
        return r.getStatsPayload().then(function (r) {
          return !0 === o.isTimeOutDelay
            ? o.getOffer$.promise
            : ((o.getOffer$ = t.defer()),
              (o.isTimeOutDelay = !0),
              setTimeout(function () {
                o.isTimeOutDelay = !1;
                var t = o.getOffer$;
                (o.getOffer$ = null),
                  e({
                    method: "post",
                    url: n.TPParam.GET_OFFER,
                    params: a,
                    data: r,
                  })
                    .then(function (e) {
                      i.mergeStats(e), t.resolve(e);
                    })
                    .catch(function (e) {
                      t.reject(e);
                    })
                    .finally(function () {
                      t = null;
                    });
              }, 10),
              o.getOffer$.promise);
        });
      },
      getAccess: function (t, o) {
        return r.getStatsPayload().then(function (r) {
          var a = o ? o.termId : null;
          return e({
            method: "post",
            url: n.TPParam.GET_ACCESS,
            params: {
              aid: t.params.aid,
              offerId: t.params.offerId,
              termId: a,
              userToken: t.params.userToken,
              userProvider: t.params.userProvider,
              zone: t.params.zone,
              preview: t.params.preview,
              checkoutFlowId: t.params.checkoutFlowId,
              countryCode: t.getBillingCountryCode(),
              residenceCountryCode: t.getResidenceCountryCode(),
              billingZipCode: t.getBillingZipCode(),
              zipCode: t.input.zipCode,
              upgradedTermId: t.params.targetedTermId,
            },
            data: r,
          });
        });
      },
      getUserResource: function (o) {
        return r.getStats().then(function (r) {
          var a = {
            aid: o.params.aid,
            userToken: o.params.userToken,
            userProvider: o.params.userProvider,
            tbc: r.initStatParams.tbc,
            pageViewId: r.initStatParams.pageViewId,
          };
          return e({
            method: "post",
            url: n.TPParam.GET_USER_RESOURCES,
            params: a,
            data: {
              checkoutStats: o.stats,
            },
          }).catch(function (e) {
            t.reject(e);
          });
        });
      },
      setAsDefaultPaymentMethod: function (t) {
        return e({
          method: "post",
          url: n.TPParam.APPLY_DEFAULT_PAYMENT_METHOD,
          params: t,
        });
      },
      createOrder: function (t, o, a, i, s, c) {
        return r.getStatsPayload().then(function (r) {
          return e({
            method: "post",
            url: n.TPParam.CREATE_ORDER,
            params: {
              aid: t,
              offer_id: o,
              offer_template_id: a,
              userToken: i,
              term_id: s,
              zone: c.params.zone,
              experienceId: c.params.experienceId,
              preview: c.params.preview,
              oid: c.input.oid,
              checkoutFlowId: c.params.checkoutFlowId,
              countryCode: c.getBillingCountryCode(),
              residenceCountryCode: c.getResidenceCountryCode(),
              billingZipCode: c.getBillingZipCode(),
              zipCode: c.input.zipCode,
              upgradedTermId: c.params.targetedTermId,
              reactivateSubscriptionId: c.params.reactivateSubscriptionId,
            },
            data: r,
          }).then(function (e) {
            return c.mergeStats(e), e;
          });
        });
      },
      restoreCheckoutObjects: function (t) {
        return e({
          method: "post",
          url: n.TPParam.RESTORE_CHECKOUT_OBJECTS,
          params: {
            oid: t,
          },
          data: {},
        });
      },
      getTaxCountries: function (r) {
        var o = {
          aid: r.params.aid,
          lang: r.getLang(),
        };
        return e({
          method: "post",
          url: n.TPParam.GET_TAX_COUNTRIES,
          params: o,
        }).catch(function (e) {
          t.reject(e);
        });
      },
      getExperianAddressValue: function (t, r, o) {
        return e({
          method: "post",
          url: n.TPParam.EXPERIAN_SEARCH,
          params: {
            query: t,
            country: r,
            aid: o.aid,
            userToken: o.userToken,
            userProvider: o.userProvider,
            userRef: o.userRef,
            janrainCaptureToken: o.janrainCaptureToken,
          },
        });
      },
      verifyAvalaraAddress: function (t, r) {
        r.region || (r.region = {});
        var o = angular.copy(r);
        return (
          delete o.country.regions,
          e({
            method: "post",
            url: n.TPParam.AVALARA_ADDRESS_VERIFY,
            params: {
              aid: t.aid,
              billingAddress: o,
              userToken: t.userToken,
              userProvider: t.userProvider,
            },
          })
        );
      },
      getStructuredExperianAddress: function (t, r, o) {
        return e({
          method: "post",
          url: n.TPParam.EXPERIAN_FORMAT,
          params: {
            id: t,
            country: r,
            aid: o.aid,
            userToken: o.userToken,
            userProvider: o.userProvider,
            userRef: o.userRef,
            janrainCaptureToken: o.janrainCaptureToken,
          },
        });
      },
      billingAddressApply: function (t, r, o, a) {
        var i = {
          addressLine1: r.addressLine1,
          addressLine2: r.addressLine2,
          addressLine3: r.addressLine3,
          city: r.city,
          regionName: r.region.regionName,
          region: {
            pubId: r.region.pubId,
            regionName: r.region.regionName,
          },
          postalCode: r.postalCode,
          country: {
            pubId: r.country.pubId,
            countryCode: r.country.countryCode,
          },
          verified: r.isVerified,
          providerType: a,
        };
        return (
          r.region.pubId || delete i.region,
          e({
            method: "post",
            url: n.TPParam.BILLING_ADDRESS_APPLY,
            params: {
              oid: t,
              aid: o.aid,
              billingAddress: i,
              userToken: o.userToken,
              userProvider: o.userProvider,
              userRef: o.userRef,
              janrainCaptureToken: o.janrainCaptureToken,
            },
          })
        );
      },
      getTaxRegions: function (t) {
        return e({
          method: "post",
          url: n.TPParam.COUNTRIES_AND_REGIONS,
          params: {
            aid: t.aid,
            userToken: t.userToken,
            userProvider: t.userProvider,
            userRef: t.userRef,
            janrainCaptureToken: t.janrainCaptureToken,
          },
        });
      },
    };
    return o;
  },
]);
var viewService = angular.module("viewServiceModule", ["checkoutModule"]);
viewService.factory("viewService", [
  "$q",
  "$document",
  "$window",
  "$rootScope",
  "$state",
  "eventService",
  "ngEventService",
  "lang",
  "errorService",
  "userService",
  "utilsService",
  "$injector",
  "statsService",
  function (e, t, n, r, o, a, i, s, c, l, u, d, p) {
    var m = {
      views: [],
      viewStack: [],
    };
    if (((m.$stateProvider = window.$stateProvider), (m.startState = null), (m.steps = []), (m.disabled = !1), (m.preventStateChange = !1), (m.stateManager = {}), d.has("$transitions"))) {
      var f = d.get("$transitions");
      f.onStart(
        {
          to: !0,
        },
        function (e, t) {
          return m._viewStateChange({}, e.to(), e.params(), e.from()), !1;
        }
      ),
        f.onError({}, function () {
          util.log("NOT FOUND STATE");
        });
    } else
      (m.viewStateChangeListener = r.$on("$stateChangeStart", function (e, t, n, r) {
        e.preventDefault(), m._viewStateChange(e, t, n, r);
      })),
        r.$on("$stateNotFound", function () {
          util.log("NOT FOUND STATE");
        });
    function g(e, t, n) {
      var r = null;
      if (
        (angular.forEach(m.views, function (e) {
          e.options[t] && (r = e);
        }),
        r)
      )
        return m.gotoState(r.stateName, e), r.stateName;
      throw new Error(n);
    }
    return (
      (m._viewStateChange = function (e, t, o, s) {
        if (!m.preventStateChange) {
          for (var l = 0; l < n.document.styleSheets.length; l++) {
            var u = n.document.styleSheets[l],
              d = (u.ownerNode ? u.ownerNode : u.owningElement).getAttribute("tp-style");
            null !== d && d.indexOf("-custom-style") > -1 && (u.disabled = !0);
          }
          angular.forEach(m.views, function (e) {
            if (((e.active = !1), e.setViewAsInactive(), e.stateName === t.name)) {
              p.trackView(e.stateName), (e.active = !0), e.setViewAsActive();
              for (var r = 0; r < n.document.styleSheets.length; r++) {
                var o = n.document.styleSheets[r],
                  a = (o.ownerNode ? o.ownerNode : o.owningElement).getAttribute("tp-style");
                "offer" !== t.name && "checkout-custom-style" === a && (o.disabled = !1), a === t.name + "-custom-style" && (o.disabled = !1);
              }
            }
          });
          var f,
            g = window.navigator.userAgent,
            h = g.indexOf("MSIE"),
            E = g.indexOf("Trident/"),
            v = g.indexOf("Edge/");
          if (h > 0 || E > 0 || v > 0)
            var C = setInterval(function () {
              var e = $("input:visible:focus").first();
              e.length ? (e.blur().focus(), clearInterval(C)) : $("input:visible").first().focus();
            }, 1e3);
          m.viewStack.length > o.step && (f = m.viewStack[o.step].params), c(r).resetDisplayed(), i.fire(EVENT_VIEW_ACTIVATED, t, f), a.postMessage(EVENT_VIEW_ACTIVATED);
        }
      }),
      (m.registerState = function (e, t, n) {
        m.stateManager[e] = {
          options: t || {},
          template: n || "",
        };
      }),
      (m.getStateManager = function (e) {
        return m.stateManager[e];
      }),
      (m.isActive = function (e) {
        var t = !1;
        return (
          angular.forEach(m.views, function (n) {
            n.stateName === e && (t = n.active);
          }),
          t
        );
      }),
      (m.registerView = function (e) {
        e.stateName.match(/^state/) && m.steps.push(e.stateName),
          "error" === e.stateName && (m.errorView = e),
          m.$stateProvider.state(e.stateName, {
            url: "/" + e.stateName + "/:step",
          });
        for (var t = 0; t < m.views.length; t++) if (m.views[t].stateName === e.stateName) return void (m.views[t] = e);
        m.views.push(e);
      }),
      (m._saveHistoryAndGoToState = function (e, t) {
        if (m.isViewExists(e)) {
          var n = u.last(m.viewStack);
          return (
            ((n && "auth" === n.stateName) || (n && "state2" === n.stateName && "alreadyHasAccess" === e)) && m.viewStack.pop(),
            n && n.stateName === e && m.viewStack.pop(),
            e === m.startState && (m.viewStack = []),
            t && t.term ? a.checkoutStateChange(e, t.term) : a.checkoutStateChange(e),
            m.viewStack.push({
              stateName: e,
              params: t,
            }),
            o.go(
              e,
              {
                step: m.viewStack.length - 1,
              },
              {
                location: "replace",
                reload: !1,
              }
            )
          );
        }
        c(r).terminal(s.trc("checkout.platform", "Error. State {0} doesn't exist", e));
      }),
      (m.saveHistory = function (e, t) {
        m.viewStack.push({
          stateName: e,
          params: t,
        });
      }),
      (m.gotoState = function (e, t) {
        return m._saveHistoryAndGoToState(e, t);
      }),
      (m._validateCurrentView = function () {
        util.log("[ViewService] validateCurrentView");
        for (var t = e.defer(), n = [], r = 0; r < m.views.length; r++) m.views[r].stateName === o.current.name && n.push(e.when(m.views[r]._isValid()));
        return (
          e.all(n).then(
            function (e) {
              var n = !0;
              angular.forEach(e, function (e) {
                !1 === e && (util.log('[ViewService] view for state "' + o.current.name + '" is not valid'), (n = !1));
              }),
                util.log("[ViewService] validateCurrentView result = ", n),
                n ? t.resolve() : t.reject();
            },
            function () {
              util.log("[ViewService] validateCurrentView has failed with rejection"), t.reject();
            }
          ),
          t.promise
        );
      }),
      (m.setStartState = function (e) {
        (m.startState = e), p.setCheckoutView(m.startState);
      }),
      (m.getActiveState = function () {
        for (var e = 0; e < m.views.length; e++) if (m.views[e].active) return m.views[e].stateName;
        return null;
      }),
      (m.getViews = function () {
        return m.views;
      }),
      (m.isViewExists = function (e) {
        var t = !1;
        return (
          m.getViews().forEach(function (n) {
            n.stateName === e && (t = !0);
          }),
          t
        );
      }),
      (m._validateViews = function () {
        util.log("[ViewService] validateViews");
        var t = e.defer(),
          n = [];
        return (
          angular.forEach(m.views, function (t) {
            t._isValid && n.push(e.when(t._isValid()));
          }),
          e.all(n).then(
            function (e) {
              var n = !0;
              angular.forEach(e, function (e) {
                !1 === e && (util.log("[ViewService] view is not valid"), (n = !1));
              }),
                util.log("[ViewService] validateViews result = ", n),
                n ? t.resolve() : t.reject();
            },
            function () {
              util.log("[ViewService] validateViews has failed with rejection"), t.reject();
            }
          ),
          t.promise
        );
      }),
      (m.gotoPaymentStateFromBankSecureState = function () {
        "confirmation" === m.getActiveState() ? m.gotoPaymentState() : m.gotoPreviousState();
      }),
      (m._gotoNextState = function (e) {
        for (var t = -1, n = 0; n < m.views.length; n++) m.steps[n] === o.current.name && (t = n + 1);
        t > 0 && t < m.steps.length && m._saveHistoryAndGoToState(m.steps[t], e);
      }),
      (m.gotoPreviousState = function () {
        if (m.viewStack.length > 1) {
          var e = m.viewStack.pop();
          ("auth" !== e.stateName && "state2" !== e.stateName) || l.cleanSuccessLoginCallbacks();
          var t = m.viewStack[m.viewStack.length - 1];
          a.checkoutStateChange(t.stateName),
            o.go(
              t.stateName,
              {
                step: m.viewStack.length - 1,
              },
              {
                location: "replace",
              }
            );
        }
      }),
      (m.hasPreviousState = function () {
        return !1 === m.disabled && m.viewStack && m.viewStack.length > 1;
      }),
      (m.gotoNextView = function (e) {
        m.notify("Next button clicked"),
          m._validateCurrentView().then(function () {
            m._gotoNextState(e);
          });
      }),
      (m.notify = function (e) {}),
      (m.isTermSelectorState = function (e) {
        var t = !1;
        return (
          angular.forEach(m.views, function (n) {
            n.options.hasTermSelector && n.stateName === e && (t = !0);
          }),
          t
        );
      }),
      (m.isPaymentFormState = function (e) {
        var t = !1;
        return (
          angular.forEach(m.views, function (n) {
            n.options.hasPaymentForm && n.stateName === e && (t = !0);
          }),
          t
        );
      }),
      (m.isPasswordlessFormState = function (e) {
        var t = !1;
        return (
          angular.forEach(m.views, function (n) {
            n.options.hasPasswordlessLoginForm && n.stateName === e && (t = !0);
          }),
          t
        );
      }),
      (m.gotoRedemptionState = function (e) {
        g(e, "hasRedemptionForm", s.trc("checkout.platform", "Not found redemption view"));
      }),
      (m.gotoSubscriptionReactivationState = function (e) {
        var t = s.trc("checkout.platform", "Not found subscription reactivation view");
        m.disable(!0), g(e, "hasReactivationForm", t);
      }),
      (m.gotoTermSelectorState = function (e) {
        var t = null;
        if (
          (angular.forEach(m.views, function (e) {
            e.options.hasTermSelector && (t = e);
          }),
          t)
        )
          return m.gotoState(t.stateName, e), t.stateName;
        throw new Error(s.trc("checkout.platform", "Not found term selector view"));
      }),
      (m.gotoPaymentState = function (e) {
        var t = null;
        if (
          (angular.forEach(m.views, function (e) {
            e.options.hasPaymentForm && (t = e);
          }),
          t)
        )
          return m.gotoState(t.stateName, e), t.stateName;
        throw new Error(s.trc("checkout.platform", "Not found term selector view"));
      }),
      (m.disable = function (e) {
        (m.disabled = !0), (m.preventStateChange = !e);
      }),
      (m.reset = function () {
        m.viewStack.length >= 1 && (m.viewStack[0].stateName === m.startState ? (m.viewStack = [m.viewStack[0]]) : (m.viewStack = []));
      }),
      m
    );
  },
]);
var checkoutUpdates = angular.module("checkoutUpdatesModule", ["checkoutModule"]);
checkoutUpdates.factory("checkoutUpdatesService", [
  "ngEventService",
  "containerService",
  "$q",
  function (e, t, n) {
    var r = {
      updateSelectedTerm: function (e) {
        var t,
          n = e.getSelectedTerm();
        n &&
          (t = e._findTerm(n)) &&
          (angular.forEach(e.config.terms, function (e) {
            e.selected = !1;
          }),
          (t.selected = !0),
          angular.copy(t, e.flags.selectedTerm),
          t.isCustomPriceAvailable || e.input.chargeAmount !== e.flags.selectedTerm.chargeAmount || ((e.input.chargeAmount = e.flags.selectedTerm.chargeAmount), (e.input.chargeDisplayAmount = e.flags.selectedTerm.chargeDisplayAmount)),
          (e.input.chargeAmountInMinorUnit = e.flags.selectedTerm.chargeAmountInMinorUnit),
          (e.input.chargeAmountAndTax = e.flags.selectedTerm.chargeAmount),
          (e.input.chargeDisplayAmountAndTax = e.flags.selectedTerm.chargeDisplayAmount),
          (e.input.chargeCurrency = e.flags.selectedTerm.chargeCurrency),
          (e.input.firstRealPriceWithTax = e.flags.selectedTerm.firstRealPriceWithTax),
          (e.input.canadianTaxes = e.canadianTaxes()));
      },
      updatePaymentMethods: function (t, r) {
        var o = r.flags.selectedTerm.isSubscription ? r.flags.selectedTerm.subscriptionPaymentMethods : r.flags.selectedTerm.oneOffPaymentMethods;
        !r.flags.selectedTerm.isZero ||
          r.flags.selectedTerm.isSchedule ||
          r.isDynamicTerm(r.flags.selectedTerm) ||
          (o = [
            {
              id: ZERO,
            },
          ]),
          o || (o = []),
          util.log("[CHECKOUT] Selecting new payment methods list", o),
          angular.copy(o, r.input.paymentMethods),
          (function () {
            if (!r.flags.applePayCanMakePayments) {
              var e = [];
              angular.forEach(r.input.paymentMethods, function (t) {
                "apple_pay" !== t.paymentTypeId && e.push(t);
              }),
                angular.copy(e, r.input.paymentMethods);
            }
          })();
        var a,
          i = !t;
        if (r.input.paymentMethods && 1 === r.input.paymentMethods.length && void 0 !== r.input.paymentMethods[0].id) a = r.selectPaymentMethod(r.input.paymentMethods[0], i);
        else if (r.flags.selectedPaymentMethod && void 0 !== r.flags.selectedPaymentMethod.id) a = r.selectPaymentMethod(r.flags.selectedPaymentMethod, i);
        else {
          var s,
            c = window.ApplePaySession;
          angular.forEach(r.input.paymentMethods, function (e) {
            "apple_pay" === e.paymentTypeId && (s = e);
          }),
            c && s && (a = r.selectPaymentMethod(s, !1));
        }
        return a
          ? n.all([a]).then(function () {
              r.isZeroPayment() || e.fire(EVENT_CHECKOUT_PAYMENT_METHODS_CHANGED, r.input.paymentMethods);
            })
          : (r.isZeroPayment() || e.fire(EVENT_CHECKOUT_PAYMENT_METHODS_CHANGED, r.input.paymentMethods), n.when(!1));
      },
      updatePromoCode: function () {
        e.fire(EVENT_REAPPLY_PROMO_CODE);
      },
      updatePayWhatYouWant: function () {
        e.fire(EVENT_REAPPLY_PAY_WANT_YOU_WANT);
      },
      updatePreferredWith: function (e, n) {
        t.setPreferredWidth(e), n.resize();
      },
    };
    return r;
  },
]);
var metricModule = angular.module("performanceMetricsModule", ["generalModule"]);
metricModule.factory("performanceMetricsService", [
  "$window",
  "stateService",
  "integrationEventsService",
  "eventLogger",
  "eventService",
  "ngEventService",
  function (e, t, n, r, o, a) {
    var i = {},
      s = {
        loadtime: 200,
        rendering: {
          total: 200,
          scripting: 200,
        },
      },
      c = "EVENT_TP_PERFORMANCE_DATA",
      l = [
        {
          resourceRegExp: new RegExp("/checkout/offer/show"),
          label: "showOffer",
        },
        {
          resourceRegExp: new RegExp("/api/tinypass.min.js$"),
          label: "tinypassMinJS",
        },
        {
          resourceRegExp: new RegExp("/xbuilder/experience/execute"),
          label: "experienceExecute",
        },
      ],
      u = {};
    function d(e) {
      var t = (function (e) {
          if (p(e))
            return {
              loadtime: "resource" === e.entryType ? e.responseEnd - e.startTime : e.duration,
              dnsLookup: e.domainLookupEnd - e.domainLookupStart,
              tcp: e.connectEnd - e.connectStart,
              ttfb: e.responseStart - e.startTime,
              fetchStart: e.fetchStart,
              initiatorType: e.initiatorType,
              resource: e.name,
              responseEnd: e.responseEnd,
            };
        })(e),
        n = (function (e) {
          var t = e.name,
            n = l.find(function (e) {
              return t.match(e.resourceRegExp);
            });
          return n && n.label;
        })(e);
      t.loadtime < s.loadtime || (m("fetchStart", t.fetchStart, e.initiatorType, n), m("load", t.loadtime, e.initiatorType, n));
    }
    function p(e) {
      return "script" === e.initiatorType || "iframe" === e.initiatorType;
    }
    function m(e, t, n, r) {
      var a;
      (a = {
        metricName: e,
        metricValue: t,
        metricType: n,
        metricLabel: r,
      }),
        o.emitMetricsEvent({
          hitType: "timing",
          timingCategory: a.metricType,
          timingVar: a.metricName,
          timingValue: Math.round(a.metricValue),
          timingLabel: a.metricLabel,
        });
    }
    return (
      a.subscribe(c, function (e, t) {
        d(t.entry);
      }),
      window.performance &&
        "function" == typeof performance.getEntries &&
        performance.getEntries().forEach(function (e) {
          !(function (e) {
            (function (e) {
              return (
                l.some(function (t) {
                  return e.name.match(t.resourceRegExp);
                }) && p(e)
              );
            })(e) && d(e);
          })(e);
        }),
      (i.onViewRendered = function (e) {
        var t, n;
        "offer" !== e || u.offer || ((u[e] = Date.now()), (t = u[e] - TPPerformance.documentParseStart), (n = u[e] - TPPerformance.domContentLoaded), t > s.rendering.total && m("rendering", t, "viewRendering", "offerScreen:totalTime"), n > s.rendering.scripting && m("rendering", n, "viewRendering", "offerScreen:scripting"));
      }),
      i
    );
  },
]),
  angular.element(document).ready(function () {
    window.TPInjector = angular.bootstrap(document.getElementById("ng-app"), ["checkoutComponentsModule"], {
      strictDi: !0,
    });
  });
var EVENT_VIEW_ACTIVATED = "EVENT_VIEW_ACTIVATED",
  EVENT_VIEW_CHANGED = "EVENT_VIEW_CHANGED",
  EVENT_CHECKOUT_STARTED = ((EVENT_APPLY_REDEEM_CODE = "EVENT_APPLY_REDEEM_CODE"), "EVENT_CHECKOUT_STARTED"),
  EVENT_CHECKOUT_RELOADED = "EVENT_CHECKOUT_RELOADED",
  EVENT_CHECKOUT_SUCCESS = "EVENT_CHECKOUT_SUCCESS",
  EVENT_CHECKOUT_CLOSED = "EVENT_CHECKOUT_CLOSED",
  EVENT_REAPPLY_PROMO_CODE = "EVENT_REAPPLY_PROMO_CODE",
  EVENT_RESET_PROMO_CODE = "EVENT_RESET_PROMO_CODE",
  EVENT_REAPPLY_PAY_WANT_YOU_WANT = "EVENT_REAPPLY_PAY_WANT_YOU_WANT",
  REACTIVATE_SUB_QUERY_PARAM = "reactivate_sub",
  UPGRADE_SUB_QUERY_PARAM = "upgrade_sub",
  LINK_TERM_TYPE_NAME = "link",
  LINK_TERM_PASSED_DATA_KEYS = [
    "name",
    "description",
    "externalProductIds",
    {
      originalKeyName: "customData",
      passedKeyName: "custom_data",
    },
  ];
window.angular = angular;
var checkoutModule = angular.module("checkoutModule", ["ui.router", "ajaxServices", "purchaseServiceModule", "ngSanitize", "generalModule", "eventModule", "errorModule", "performanceMetricsModule", "checkoutUpdatesModule", "checkoutServiceModule", "checkoutGoToModule", "viewServiceModule", "passwordlessModule", "experianModule", "billingConfigModule", "userServiceModule", "containerServiceModule", "tpComponentsModule", "tp.i18n", "consentModule", "authModule", "swgModule", "pianoIdProviderModule", "creditRedemptionModule"]);
checkoutModule.config([
  "$compileProvider",
  "$qProvider",
  "$stateProvider",
  "$httpProvider",
  function (e, t, n, r) {
    var o = ["/frontend/providers/components", "/widget/checkout/component", "/widget/myaccount/partials/common", "/widget/myaccount/partials/wallet"];
    e.debugInfoEnabled && e.debugInfoEnabled(!0),
      e.commentDirectivesEnabled && e.commentDirectivesEnabled(!1),
      e.cssClassDirectivesEnabled && e.cssClassDirectivesEnabled(!1),
      t.errorOnUnhandledRejections && t.errorOnUnhandledRejections(!1),
      e.aHrefSanitizationWhitelist && e.aHrefSanitizationWhitelist(/^\s*(https?|data|local|ftp|mailto|file|javascript|sms):/),
      r.interceptors.push([
        "$templateCache",
        function (e) {
          return {
            request: function (t) {
              return (
                "GET" === t.method &&
                  void 0 === e.get(t.url) &&
                  (function (e) {
                    for (var t = 0; t < o.length; t++) if (-1 !== e.indexOf(o[t])) return !0;
                    return !1;
                  })(t.url) &&
                  (util.log("%c[CHECKOUT] Error: there is no template in $templateCache - ".concat(t.url), "color: red;"), e.put(t.url, "")),
                t
              );
            },
          };
        },
      ]),
      (window.$stateProvider = n);
  },
]),
  checkoutModule.run([
    "interceptAjax",
    function (e) {
      e.appendLoaderTo("checkout");
    },
  ]),
  checkoutModule.factory("checkout", [
    "$window",
    "$rootScope",
    "$state",
    "$rootElement",
    "eventService",
    "purchaseService",
    "$timeout",
    "ngEventService",
    "$q",
    "viewService",
    "modalService",
    "errorService",
    "windowStateService",
    "userService",
    "containerService",
    "tpHTTP",
    "gaService",
    "lang",
    "checkConsents",
    "configService",
    "trackExternalEvent",
    "utilsService",
    "eventLogger",
    "auth",
    "statsService",
    "swgService",
    "setupTrackingId",
    "performanceMetricsService",
    "passwordlessService",
    "externalVerificationService",
    "billingConfig",
    "checkoutService",
    "checkoutUpdatesService",
    "checkoutGoTo",
    "captchaV3Service",
    "pianoIdProvider",
    "creditRedemptionService",
    "updateDirAttrOnLangChanges",
    "printAddressService",
    "windowService",
    "$filter",
    function (e, t, n, r, o, a, i, s, c, l, u, d, p, m, f, g, h, E, v, C, y, T, S, P, A, w, _, b, I, k, M, N, R, O, x, V, D, L, U, B, H) {
      angular.extend(t, window.PP_LIST);
      var $ = null,
        F = {
          name: "",
          details: [],
          startedAt: null,
          renewsOn: null,
          alreadyPurchased: null,
          canBeRenewed: null,
          canBeRenewedUsingExistedUPI: null,
          renewChargeAmount: null,
          renewChargeCurrency: null,
          renewChargeDisplayAmount: null,
          renewFirstRealPriceWithTax: null,
          inRenewal: null,
        },
        G = {
          id: null,
          externalApiConfigurationId: null,
          externalApiFields: [],
          externalApiUserLocation: null,
        },
        Y = {};
      s.subscribe("trackStat", A.handleTrackStatEvent),
        (Y.name = "CheckoutService"),
        (Y.$rootScope = t),
        (Y.rootElement = r),
        (Y.log = []),
        (Y.flags = {}),
        (Y.input = {}),
        (Y.internal = {
          checkAccessAndGotoAlreadyPurchaseScreen: ne,
        });
      var W = {
        oid: null,
        autoRenew: !0,
        chargeDisplayAmount: null,
        chargeAmount: null,
        chargeCurrency: "USD",
        chargeCurrencySymbol: "$",
        originalChargeCurrencySymbol: null,
        originalChargeAmount: null,
        originalChargeCurrency: null,
        originalChargeDisplayAmount: null,
        renewFirstRealPriceWithTax: null,
        promotionBillingPlan: null,
        isTermLockedByPromocode: !1,
        paymentMethods: [],
        receipt: {},
        user_data: {
          first_name: null,
          last_name: null,
        },
        termId: null,
        offerId: null,
        zipCode: null,
        confirmated: {
          billingPlan: null,
          chargeAmount: null,
          taxAmount: null,
          total: null,
          taxRate: null,
          hstRate: null,
          hstAmount: null,
          qstRate: null,
          qstAmount: null,
          pstRate: null,
          pstAmount: null,
          gstRate: null,
          gstAmount: null,
        },
        credit_card: {},
        paypalBt: {},
        applePayBt: {},
        consents: [],
        canadianTaxes: [],
        customFormTermId: null,
      };
      (Y.setUpiId = function (e) {
        var t = null === e && null === Y.input.upiId,
          n = Y.input.upiId !== e;
        (Y.flags.isPaymentMethodChanged = t || n), (Y.input.upiId = e);
      }),
        (Y.getUpiId = function () {
          return Y.input.upiId;
        }),
        angular.copy(W, Y.input),
        (Y.termGate = {}),
        (Y.access = {}),
        angular.copy(F, Y.access),
        (Y.flags.applePayCanMakePayments = !1),
        (Y.flags.selectedTerm = {});
      var q = {};
      function j() {
        return getQueryParamInStringByName(getParameterByName("url"), REACTIVATE_SUB_QUERY_PARAM);
      }
      function K() {
        return getQueryParamInStringByName(getParameterByName("url"), UPGRADE_SUB_QUERY_PARAM);
      }
      function z() {
        return Y.params.purchasedLinkTermData;
      }
      function Z(e) {
        if (e) {
          var t = (function (e) {
            return LINK_TERM_PASSED_DATA_KEYS.reduce(function (t, n) {
              return "object" == typeof n && n.hasOwnProperty("originalKeyName") && n.hasOwnProperty("passedKeyName") ? (t[n.passedKeyName] = e[n.originalKeyName]) : (t[n] = e[n]), t;
            }, {});
          })(e);
          o.postMessage("callLinkTermSelectedCallback", t);
        }
      }
      function J(e) {
        e.alreadyPurchased && z() && ae(JSON.parse(z()));
      }
      function Q(e) {
        return ie(e)
          ? (function () {
              var e = c.defer(),
                t = !1;
              o.showAuthForm();
              var n = s.subscribe("pianoIdLoginSuccess", function () {
                  (t = !0), n && n(), e.resolve();
                }),
                r = s.subscribe("authFormClosed", function (o) {
                  Y.params.userToken ||
                    t ||
                    e.reject({
                      notAuthorized: !0,
                    }),
                    n && n(),
                    r && r();
                });
              return e.promise;
            })()
          : c.when();
      }
      function X(e) {
        return Q(e)
          .then(function () {
            if ("alreadyPurchased" === Y.params.linkTermCheckoutState && z())
              return c.reject({
                alreadyPurchased: !0,
              });
          })
          .then(function () {
            return N.getAccess(Y, e);
          })
          .then(function (t) {
            if (!t.data.models.alreadyPurchased) return e;
            !(function (e, t) {
              var n = angular.extend({}, Y.params, {
                linkTermCheckoutState: "alreadyPurchased",
                purchasedLinkTermData: JSON.stringify(t.data),
              });
              o.startCheckoutEvent(Y.addTermTypeToParams(n, e));
            })(e, t);
          });
      }
      function ee(e) {
        var t = Y.getSelectedTerm();
        return Y.isAvalaraTaxProvider() && t ? e && "00000001" !== t.termLevelTaxProductCategory : e;
      }
      function te(e, t) {
        return e && e.id === window.PP_LIST.VOLGA && "CH" !== t;
      }
      function ne(e) {
        return (
          (e = e || Y.getSelectedTerm()),
          N.getAccess(Y, e).then(function (e) {
            if (e.data.models.alreadyPurchased)
              if (f.isModal || f.isPopup) ae(e.data);
              else {
                if (Y.params.noNeedStartCheckoutAfterLogin) return void delete Y.params.noNeedStartCheckoutAfterLogin;
                Y._findTerm(e.data.models.sourceTermId) ? Y.startCheckout(e.data.models.sourceTermId) : Y.config.terms && Y.config.terms.length && Y.config.terms[0] && Y.config.terms[0].termId && Y.startCheckout(Y.config.terms[0].termId);
              }
            return e.data.models.alreadyPurchased;
          })
        );
      }
      function re() {
        if (((Y.params.userToken = null), Pe({}), Y.config.checkoutAuthenticationInSeparateState && Y.getSelectedTerm() && Y._unselectTerm(), Y.resetAssociatedData(), Y.config.isRedemption && !Y.params.startFromInlineCheckout && l.isActive("redemption"))) l.gotoState("redemption");
        else if ((Y.isPrintAddressPopulated() || "printAddress" === l.getActiveState()) && Y.getSelectedTerm()) {
          Y.termGate.adrCollectionSucceeded = !1;
          let e = Y.getSelectedTerm().termId;
          Y._unselectTerm(), l.reset(), Y.startCheckout(e);
        } else l.gotoState("offer");
      }
      function oe() {
        (Y.flags.isDiscounted = !1), (Y.input.originalChargeAmount = Y.input.chargeAmount), (Y.input.originalChargeCurrency = Y.input.chargeCurrency), (Y.input.originalChargeCurrencySymbol = Y.input.chargeCurrencySymbol), (Y.input.originalChargeDisplayAmount = Y.input.chargeDisplayAmount);
      }
      function ae(e, t, n) {
        util.log("[CHECKOUT] already purchased", e);
        var r = {
          alreadyPurchased: e.models.alreadyPurchased,
          name: e.models.name,
          details: e.models.details.split(";"),
          startedAt: e.models.startedAt,
          renewsOn: e.models.renewsOn,
          expiresOn: e.models.expiresOn,
          canBeRenewed: e.models.canBeRenewed,
          canBeRenewedUsingExistedUPI: e.models.canBeRenewedUsingExistedUPI,
          renewChargeAmount: e.models.renewChargeAmount,
          renewChargeCurrency: e.models.renewChargeCurrency,
          renewChargeDisplayAmount: e.models.renewChargeDisplayAmount,
          renewFirstRealPriceWithTax: e.models.renewFirstRealPriceWithTax,
          sourceTermId: e.models.sourceTermId,
          sourceTerm: e.models.sourceTerm,
          renewBillingCountryCode: e.models.renewBillingCountryCode,
          renewBillingZipCode: e.models.renewBillingZipCode,
          renewResidenceCountryCode: e.models.renewResidenceCountryCode,
          renewHasTax: e.models.renewHasTax,
        };
        if (
          (angular.copy(r, Y.access),
          Y._selectTerm(r.sourceTerm, !0),
          r.canBeRenewed && ((Y.input.chargeAmount = r.renewChargeAmount), (Y.input.chargeCurrency = r.renewChargeCurrency), (Y.input.chargeDisplayAmount = r.renewChargeDisplayAmount), (Y.input.firstRealPriceWithTax = r.renewFirstRealPriceWithTax), (Y.input.chargeAmountAndTax = r.renewChargeAmount), (Y.input.chargeDisplayAmountAndTax = r.renewChargeAmount), oe(), (Y.config.hasTax = r.renewHasTax)),
          (M.renewBillingCountryCode = r.renewBillingCountryCode),
          (M.renewBillingZipCode = r.renewBillingZipCode),
          (M.renewResidenceCountryCode = r.renewResidenceCountryCode),
          (Y.config.hasTax = r.renewHasTax),
          e.models.renewalBillingPlan && (Y.getSelectedTerm().billingPlanTable = e.models.renewalBillingPlan),
          e.models.nextPeriodBillingPlan && (Y.getSelectedTerm().nextPeriodBillingPlanTable = e.models.nextPeriodBillingPlan),
          e.models.renewalBillingPlanModel)
        ) {
          var a = Y.getSelectedTerm();
          angular.forEach(e.models.renewalBillingPlanModel, function (e, t) {
            a[t] = e;
          });
        }
        e.models.renewalOriginalBillingPlanModel && (Y._findTerm(Y.getSelectedTerm()).originalBillingPlan = e.models.renewalOriginalBillingPlanModel),
          s.fire(EVENT_USER_ACCESS_CHANGED),
          (function (e) {
            var t,
              n = Y.getSelectedTerm();
            if (n && n.resource) t = n.resource.rid;
            else if (e.models.sourceTermId) {
              var r = Y._findTerm(e.models.sourceTermId);
              r && r.resource && (t = r.resource.rid);
            }
            o.alreadyPurchasedEvent({
              rid: t,
            });
          })(e),
          n || O.gotoAlreadyHasAccess(Y);
      }
      function ie(e) {
        return !!(Y.isRequirePrintAddress() || "registration" === e.type || (Y.isPasswordlessCheckoutEnabled() && !Y.isSingleStepEnabled()) || (!Y.isPasswordlessCheckoutEnabled() && Y.config.checkoutAuthenticationInSeparateState)) && (!Y.isUserValid() || m.isUserReadOnly());
      }
      angular.copy(q, Y.flags.selectedTerm),
        (Y.flags.isRenewNow = !1),
        (Y.flags.selectedPaymentMethod = null),
        (Y.flags.termComplete = !1),
        (Y.flags.paymentComplete = !1),
        (Y.flags.termSelectorActivated = !1),
        (Y.flags.receiptActivated = !1),
        (Y.flags.hasLoginRequiredCallback = !1),
        (Y.flags.autoCompleteRegistrationTerm = !0),
        (Y.flags.needUpdateUserResources = !1),
        (Y.flags.isPaymentMethodChanged = !0),
        (Y.flags.affiliateState = {}),
        (Y.flags.isCaptchaV3Enabled = !1),
        (Y.flags.isAddressFormNeedLocalValidation = !1),
        (Y.config = {
          terms: [{}],
          originalTerms: [{}],
          additionalTerms: [{}],
          userResources: [{}],
        }),
        (Y.GAProccesses = 0),
        (Y.params = {}),
        (Y.redemptionLoginRequiredParams = {
          state: null,
          form: {
            redeemCode: null,
          },
        }),
        (Y.closeButtonTypes = {
          default: "default",
          boilerplate: "boilerplate",
        }),
        (Y.SYSTEM_ERROR_CODES = {
          100: E.trc("checkout.platform", "Please try again later"),
          101: E.trc("checkout.platform", "Your payment is being processed. Try to refresh the page in 30 seconds"),
        }),
        (Y.init = function (e, t) {
          var n, r, a;
          l.setStartState(((n = "true" === getParameterByName("isCheckout")), (r = void 0 === getParameterByName("termId")), (a = getParameterByName("offerState")), (Y.params.reactivateSubscriptionId = j()), (Y.params.upgradeSubscriptionId = K()), !n || !r || a || Y.params.reactivateSubscriptionId || Y.isUpgradeAuthentication() ? "offer" : "state1")), x.getCaptchaV3Enabled && x.getCaptchaV3Enabled(TPParam.params.aid);
          var c = t.preferredWidth || 450;
          (Y.flags.hasLoginRequiredCallback = "true" === getParameterByName("hasLoginRequiredCallback")), Y.initConfig(), angular.copy(W, Y.input);
          var u = getParameterByName("gaAccount"),
            p = getParameterByName("gaClientId");
          u && p && _e(u, p),
            Y.params.rurl_3ds &&
              window.TPParam.FULL_REDIRECT_3DS_ENABLED &&
              ((Y.input.rurl_3ds = Y.params.rurl_3ds),
              l.setStartState("continueThreeDSPurchase"),
              N.restoreCheckoutObjects(Y.params.oid).then(function (e) {
                (Y.flags.selectedTerm = e.models.currentTerm), (Y.flags.selectedPaymentMethod = e.models.paymentMethod);
              })),
            Y.params.oid && (Y.input.oid = Y.params.oid),
            Y.params.promoCode && (Y.input.promoCode = Y.params.promoCode),
            Y.params.promoCodeId && (Y.input.promoCodeId = Y.params.promoCodeId),
            Y.params.promoCodeTermId && (Y.input.promoCodeTermId = Y.params.promoCodeTermId),
            t.affiliateState && ((Y.flags.affiliateState = t.affiliateState), D.setAffiliateState && D.setAffiliateState(t.affiliateState)),
            this.config.isRedemption && l.setStartState("redemption"),
            (Y.params.reactivateSubscriptionId = j()),
            (Y.params.upgradeSubscriptionId = K());
          var g = getQueryParamInStringByName(getParameterByName("url"), "shared_account_code");
          g || (g = Y.params.shared_account_code || Y.params.sharedAccountCode), g && ((Y.params.shared_account_code = g), l.setStartState("redeemSharedSubscription")), "true" === getParameterByName("isAuth") && (l.setStartState("auth"), (P.currentState.name = getParameterByName("authStartScreen") || "login"));
          var h = angular.element("#checkout-container");
          f.init(
            {
              preferredWidth: c,
            },
            function () {
              return {
                container: h,
              };
            }
          ),
            m.init(function () {
              return {
                app: Y.config.app,
                user: Y.config.user,
                stats: A.getPageView(),
                fillLoginIframeParams: function (e) {
                  (e.offerId = Y.config.offerId), (e.templateId = Y.config.offerTemplateId), (e.templateVariantId = Y.config.offerTemplateVariantId), (e.gaClientId = Y.params.gaClientId), (e.email = Y.config.sharedAccountEmail);
                },
                fillLoginRequiredParamsToGoogleAnalytics: function (e) {
                  (e.offerId = Y.config.offerId), (e.templateId = Y.config.offerTemplateId), (e.templateVariantId = Y.config.offerTemplateVariantId);
                },
                fillLoginRequiredEventParams: function (e) {
                  (e.term = Y._findTerm(Y.params.termId || $)), (e.isRedemption = Y.params.isRedemption), (e.termId = $), (e.currentState = l.getActiveState()), (e.affiliateState = D.affiliateState), (e.redemption = {}), angular.copy(Y.redemptionLoginRequiredParams, e.redemption), Y.params.shared_account_code && (e.sharedAccountCode = Y.params.shared_account_code), Y.params.reactivateSubscriptionId && (e.reactivateSubscriptionId = Y.params.reactivateSubscriptionId), Y.params.upgradeSubscriptionId && (e.upgradeSubscriptionId = Y.params.upgradeSubscriptionId);
                },
                fillLoginSuccessEventParams: function (e) {
                  e.termId = $;
                },
              };
            });
          var v = {
            aid: Y.getAid(),
            isGmSso: Y.params.isGmSso || !1,
            gmSsoCachedUserToken: Y.params.gmSsoCachedUserToken || "",
            gmSsoCachedUserTokenType: Y.params.gmSsoCachedUserTokenType || "",
            pianoIdUrl: Y.params.pianoIdUrl || "https://id.tinypass.com/id/",
            checkout: 1,
            getDoubleOptInParams: function () {
              return Y.getDoubleOptInParams();
            },
            customFormParams: Y.getCustomFormParams,
            passwordlessEmailSentHandler: function (e) {
              I.saveCheckoutParams(Y, e);
            },
            isPasswordlessCheckoutEnabled: Y.isPasswordlessCheckoutEnabled,
            isPreventPasswordlessLogin: Y.isPreventPasswordlessLogin,
            isSingleStepEnabled: Y.isSingleStepEnabled,
            getAffiliateIssuerId: function () {},
            userLoginEmail: function () {
              return Y.config.userLoginEmail;
            },
            passwordlessSetPaymentEmail: function () {
              I.setPaymentEmail(Y);
            },
            isSentLoginEmail: function () {
              return Y.config.isSentLoginEmail;
            },
            isSingleStepFormShown: function (e) {
              return Y.isSingleStepEnabled() && "auth" !== e.stateName;
            },
            getUserToken: function () {
              return Y.params.userToken;
            },
            widgetSpecificCheckIfVisible: function () {
              return !!Y.getCustomFormParams().formName && Y.isPaymentMethodRequired() && (Y.canSelectPaymentMethod() || Y.isPaymentMethodSelected());
            },
            getPageView: A.getPageView,
          };
          function C() {
            "true" === getParameterByName("reloadAfterLogin") && ne();
          }
          V.init(v),
            m.onLoginSuccess(function (e) {
              (Y.params.userToken = e.user_token),
                Pe(e.user),
                (function () {
                  if (!Y.isAutoCompleteRegistrationTerm()) return !1;
                  !Y.isTermSelected() &&
                    Y.config.terms &&
                    1 === Y.config.terms.length &&
                    "registration" === Y.config.terms[0].type &&
                    ((e = Y.config.terms[0]),
                    Y.reload({}).then(function () {
                      if (Y.isUserValid() && m.isUserConfirmed()) {
                        var t = Y._findTerm(e);
                        return Y.selectTerm(t);
                      }
                      return !1;
                    }));
                  var e;
                })();
            }, !1),
            TPParam.error
              ? d().terminal(TPParam.error)
              : (TPParam.config && TPParam.config.consoleError && util.log("%c[CHECKOUT] Error: ".concat(TPParam.config.consoleError), "color: red;"),
                util.log("[CHECKOUT] Startup params", this.params),
                util.log("[CHECKOUT] Startup config", this.config),
                (Y.input.user_data.first_name = Y.config.user.firstName),
                (Y.input.user_data.last_name = Y.config.user.lastName),
                "true" === getParameterByName("allowReturnToStartState") && l.saveHistory(l.startState),
                Y.params.voucherCode && s.fire(EVENT_APPLY_REDEEM_CODE, {}),
                t.isReload ||
                  (s.fire(EVENT_CHECKOUT_STARTED),
                  Y.params.termId
                    ? i(function () {
                        var e = Y._findTerm(Y.params.termId);
                        e && e.newCustomersOnly && !Y.isNewCustomer() ? d().terminal(E.trc("term.name", e.name) + " " + E.trc("checkout.platform", "is restricted for new customers only") + " ") : (l.setStartState("state1"), Y.startCheckout(Y.params.termId), C());
                      }, 0)
                    : "offer" === l.startState
                    ? i(function () {
                        Y.startShowOffer(), C();
                      }, 0)
                    : "redemption" === l.startState
                    ? i(function () {
                        o.startCheckoutEvent(Y.params), Y.startRedemption();
                      }, 0)
                    : "redeemSharedSubscription" === l.startState
                    ? i(function () {
                        o.startCheckoutEvent(Y.params), O.gotoRedeemSharedSubscriptionState();
                      }, 0)
                    : "auth" === l.startState
                    ? i(function () {
                        O.gotoAuthState(
                          Y,
                          null,
                          function () {
                            Y.close();
                          },
                          !0
                        );
                      }, 0)
                    : "continueThreeDSPurchase" === l.startState
                    ? i(function () {
                        o.startCheckoutEvent(Y.params), O.gotoContinueThreeDSPurchaseState();
                      }, 0)
                    : i(function () {
                        O.gotoCheckoutStart(Y), C();
                      }, 0)),
                A.getParams().then(function (e) {
                  _(e.trackingId), s.fire("updatePianoIdAuthIframeUrl");
                }),
                o.postMessage(
                  "ACTIVE_PAYMENT_METHODS_IDS_INITIALIZED",
                  (function (e) {
                    if (!Array.isArray(e) || !e.length) return [];
                    var t = {};
                    return e.reduce(function (e, n) {
                      return (
                        Array.isArray(n.oneOffPaymentMethods) &&
                          n.oneOffPaymentMethods.length &&
                          n.oneOffPaymentMethods.forEach(function (n) {
                            void 0 === n.id || t.hasOwnProperty(n.id) || (e.push(n.id), (t[n.id] = n.id));
                          }),
                        e
                      );
                    }, []);
                  })(this.config.terms)
                ));
        }),
        (Y.initConfig = function () {
          if ((window.TPParam && window.TPParam.config && angular.copy(window.TPParam.config, Y.config), window.TPParam && window.TPParam.params && angular.copy(window.TPParam.params, Y.params), Y.params.userToken && m.isPianoIdUserProvider())) {
            var e = T.jwtDecode(Y.params.userToken);
            (Y.config.user.login_timestamp = e.login_timestamp), (Y.config.user.token_expiration = 1e3 * (e.exp - e.iat));
          }
          angular.copy(Y.config.consents, W.consents);
        }),
        (Y.isUserValid = function () {
          return m.isUserValid();
        }),
        (Y.isNewCustomer = function () {
          return Y.config.isNewCustomer;
        }),
        (Y.isExternalCheckoutAvailable = function (e) {
          return !!w.isAvailableForTerm && w.isAvailableForTerm(e);
        }),
        (Y.isTermAllowedToSelect = function (e) {
          return !Y.isTermRestrictedForNewCustomers(e, Y.isNewCustomer()) && !Y.hasAccess(Y, e.resource.rid);
        }),
        (Y.isTermRestrictedForNewCustomers = function (e, t) {
          var n = e.newCustomersOnly && !t;
          return n && d(Y.$rootScope).global(E.trc("term.name", e.name) + " " + E.trc("checkout.platform", "is restricted for new customers only") + " "), n;
        }),
        (Y.isSelectedTermLocked = function () {
          return Y.flags && Y.flags.selectedTerm && Y.input && Y.input.isTermLockedByPromocode && !Y.input.validUnlockPromoCode && !Y.access.alreadyPurchased;
        }),
        (Y.isPaymentMethodRequired = function () {
          return Y.getSelectedTerm().isPaymentMethodRequired;
        }),
        (Y.isRequirePrintAddress = function () {
          if (Y.isGiftTerm(Y._findTerm(Y.input.termId))) {
            var e = Y.termGate.adrCollectionEnabled && Y.termGate.shippingAddressCollectionEnabled,
              t = e && Y.input.giftParamsFormFilled && !Y.termGate.adrCollectionSucceeded;
            return (Y.flags.isAddressFormNeedLocalValidation = e), t;
          }
          return Y.termGate.adrCollectionEnabled && !Y.termGate.adrCollectionSucceeded;
        }),
        (Y.isZeroPayment = function () {
          return Y.flags && Y.flags.selectedPaymentMethod && Y.flags.selectedPaymentMethod.id === ZERO;
        }),
        (Y.isTermSelected = function () {
          return Y.flags.selectedTerm && Y.flags.selectedTerm.selected;
        }),
        (Y.isPaymentMethod = function (e) {
          return Y.isPaymentMethodSelected() && Y.flags.selectedPaymentMethod.id === e && !Y.isMockUsed();
        }),
        (Y.isPaymentMethodSelected = function () {
          return null != Y.flags.selectedPaymentMethod;
        }),
        (Y.WORLDPAY_PP_LIST = [window.WORLDPAY_PAYPAL, window.WORLDPAY_IDEAL, window.WORLDPAY_ELV]),
        (Y.isSupportedWorldpayCcMethod = function () {
          return (
            Y.WORLDPAY_PP_LIST.findIndex(function (e) {
              return Y.isPaymentMethod(e);
            }) >= 0
          );
        }),
        (Y.SPREEDLY_PP_LIST = [window.SPREEDLY_CC, window.SPREEDLY_STRIPE_CC, window.SPREEDLY_BEANSTREAM, window.SPREEDLY_PAYU_LATAM, window.SPREEDLY_OPENPAY]),
        (Y.isSupportedSpreedlyCcMethod = function () {
          return (
            Y.SPREEDLY_PP_LIST.findIndex(function (e) {
              return Y.isPaymentMethod(e);
            }) >= 0
          );
        }),
        (Y.isPayWhatYouWantTerm = function () {
          return Y.flags.selectedTerm.billingPlanTable && 1 === Y.flags.selectedTerm.billingPlanTable.length && "true" === Y.flags.selectedTerm.billingPlanTable[0].isPayWhatYouWant;
        }),
        (Y.isPaymentTerm = function (e) {
          return e && "payment" === e.type;
        }),
        (Y.isExternalTerm = function (e) {
          return e && "external" === e.type;
        }),
        (Y.isGiftTerm = function (e) {
          return e && "gift" === e.type;
        }),
        (Y.isDynamicTerm = function (e) {
          return e && "dynamic" === e.type;
        }),
        (Y.isFreeDynamic = function (e) {
          return Y.isDynamicTerm(e) && e.isZero;
        }),
        (Y.isPayableTerm = function (e) {
          return Y.isPaymentTerm(e) || Y.isGiftTerm(e) || Y.isDynamicTerm(e);
        }),
        (Y.isChargingTerm = function (e) {
          return e && !e.isZero && !e.hasFreeTrial && Y.isPayableTerm(e);
        }),
        (Y.isRegistrationTerm = function (e) {
          return e && "registration" === e.type;
        }),
        (Y.isSelectedTermAutoRenewChoiceAvailable = function () {
          return Y.flags.selectedTerm.isSubscription && !Y.flags.selectedTerm.forceAutoRenew && ((Y.access && !Y.access.alreadyPurchased) || !Y.access) && !Y.isGiftTerm(Y.flags.selectedTerm) && !Y.isDynamicTerm(Y.flags.selectedTerm);
        }),
        (Y.isConfirmStepEnabled = function () {
          return Y.config.isConfirmStepEnabled && (Y.hasTax() || Y.isTaxCnbcEnabled());
        }),
        (Y.isDoubleOptInEnabled = function () {
          return Y.config.isDoubleOptInEnabled;
        }),
        (Y.passwordlessServiceLogin = function () {
          if (!Y.isUserValid() && I.loginUser) return I.loginUser(Y);
          var e = c.defer();
          return e.resolve(), e.promise;
        }),
        (Y.isPasswordlessCheckoutEnabled = function () {
          return Y.config.isPasswordlessCheckoutEnabled;
        }),
        (Y.isPreventPasswordlessLogin = function () {
          return Y.config.preventPasswordlessLogin;
        }),
        (Y.isPrintAddressPopulated = function () {
          return Y.termGate && Y.termGate.adrCollectionEnabled && Y.termGate.adrCollectionSucceeded;
        }),
        (Y.isSingleStepEnabled = function () {
          return Y.config.isSingleStepEnabled && Y.isPasswordlessCheckoutEnabled();
        }),
        (Y.isPromoCodeApplyWithoutUserEnabled = function () {
          return Y.config.isPromoCodeApplyWithoutUserEnabled;
        }),
        (Y.isPasswordlessCheckoutEnabledAndUserInvalid = function () {
          return Y.config.isPasswordlessCheckoutEnabled && !Y.isUserValid();
        }),
        (Y.isAutoEmailDetectionEnabled = function () {
          return Y.config.isAutoDetectEmailEnabled;
        }),
        (Y.isMockUsed = function () {
          return Y.config && Y.config.useMock;
        }),
        (Y.isPreviewMod = function () {
          return Y.params && Y.params.preview && (!0 === Y.params.preview || "true" === Y.params.preview);
        }),
        (Y.isPromoCodeAvailable = function (e) {
          var t = e || Y.getSelectedTerm();
          return !t.isCustomPriceAvailable && t.allowPromoCodes && !Y.input.validUnlockPromoCode && (Y.access || (Y.access && !Y.access.alreadyPurchased));
        }),
        (Y.isSameResidence = function () {
          return M.sameResidence;
        }),
        (Y.isTaxEnabled = function () {
          return !(!Y.config.taxSupports || !Y.config.taxSupports.length);
        }),
        (Y.isTaxCnbcEnabled = function () {
          return T.contains(Y.config.taxSupports, "tax.cnbc");
        }),
        (Y.isVatEuEnabled = function () {
          var e = T.contains(Y.config.taxSupports, "vat.eu") || T.contains(Y.config.taxSupports, "avalara.vat.eu");
          return e && Y.config.taxSupports.length > 1 ? "vat.eu" === M.countryTaxSupport || "avalara.vat.eu" === M.countryTaxSupport : e;
        }),
        (Y.isBillingCountryEnabled = function () {
          return Y.isVatMXEnabled() || Y.isVatAUEnabled() || Y.isVatNOEnabled() || Y.isVatJPEnabled() || Y.isVatChEnabled() || Y.isVatCanadaEnabled() || Y.isVatEuEnabled() || Y.isTaxUsEnabled() || Y.isCustomVatEnabled() || Y.isUKVatEnabled() || Y.isRUVatEnabled() || Y.isZAVatEnabled();
        }),
        (Y.isEuBillingCountryLabel = function () {
          return M.needResidence;
        }),
        (Y.isUsBillingCountry = function () {
          return !1 === M.needResidence;
        }),
        (Y.isUsBillingCountryLabel = function () {
          return !M.needResidence;
        }),
        (Y.getBillingAddressEnabled = function () {
          return Y.input.billingAddressEnabled;
        }),
        (Y.getConfigForBillingAddress = function () {
          return {
            billingLabel: E.trc("checkout.platform", "Your billing address"),
            billingConfig: M,
            billingRegions: Y.input.billingAddressesRegions,
            onZipChanged: Y.reload,
            dontBlockFieldsOnPrefilled: !0,
            checkFields: !0,
          };
        }),
        (Y.isVatMXEnabled = function () {
          return (T.contains(Y.config.taxSupports, "vat.mx") || T.contains(Y.config.taxSupports, "avalara.vat.mx")) && !Y.isVatEuEnabled();
        }),
        (Y.isVatAUEnabled = function () {
          return (T.contains(Y.config.taxSupports, "vat.au") || T.contains(Y.config.taxSupports, "avalara.vat.au")) && !Y.isVatEuEnabled();
        }),
        (Y.isVatNOEnabled = function () {
          return (T.contains(Y.config.taxSupports, "vat.no") || T.contains(Y.config.taxSupports, "avalara.vat.no")) && !Y.isVatEuEnabled();
        }),
        (Y.isVatJPEnabled = function () {
          return (T.contains(Y.config.taxSupports, "vat.jp") || T.contains(Y.config.taxSupports, "avalara.vat.jp")) && !Y.isVatEuEnabled();
        }),
        (Y.isVatChEnabled = function () {
          return (T.contains(Y.config.taxSupports, "vat.ch") || T.contains(Y.config.taxSupports, "avalara.vat.ch")) && !Y.isVatEuEnabled();
        }),
        (Y.isCustomVatEnabled = function () {
          return (T.contains(Y.config.taxSupports, "custom.vat") || T.contains(Y.config.taxSupports, "avalara.custom.vat")) && !Y.isVatEuEnabled();
        }),
        (Y.isUKVatEnabled = function () {
          return T.contains(Y.config.taxSupports, "avalara.vat.uk") && !Y.isVatEuEnabled();
        }),
        (Y.isRUVatEnabled = function () {
          return T.contains(Y.config.taxSupports, "avalara.vat.ru") && !Y.isVatEuEnabled();
        }),
        (Y.isZAVatEnabled = function () {
          return T.contains(Y.config.taxSupports, "avalara.vat.za") && !Y.isVatEuEnabled();
        }),
        (Y.isVatCanadaEnabled = function () {
          return (T.contains(Y.config.taxSupports, "vat.canada") || T.contains(Y.config.taxSupports, "avalara.vat.canada")) && !Y.isVatEuEnabled();
        }),
        (Y.isTaxUsEnabled = function () {
          return (T.contains(Y.config.taxSupports, "tax.us") || T.contains(Y.config.taxSupports, "avalara.tax.us") || T.contains(Y.config.taxSupports, "onesource.tax.us")) && !Y.isVatEuEnabled();
        }),
        (Y.isAvalaraTaxEnabled = function () {
          return T.contains(Y.config.taxSupports, "avalara.tax.us") || T.contains(Y.config.taxSupports, "avalara.vat.canada");
        }),
        (Y.isAvalaraTaxProvider = function () {
          return Y.config.taxSupports.findIndex((e) => e.indexOf("avalara") > -1) > -1;
        }),
        (Y.isTaxJarPostalCodesEnabled = function () {
          return T.contains(Y.config.taxSupports, "vat.canada") || T.contains(Y.config.taxSupports, "tax.us");
        }),
        (Y.isBillingAddressAvailableForSelectedCountry = function () {
          return -1 !== M.billingAddressCountries.indexOf(M.countryCode);
        }),
        (Y.isOneSourceTaxEnabled = function () {
          return T.contains(Y.config.taxSupports, "onesource.tax.us");
        }),
        (Y.isUsSelected = function () {
          return "US" === M.countryCode;
        }),
        (Y.isCanadaSelected = function () {
          return "CA" === M.countryCode;
        }),
        (Y.isVatColumnVisible = function () {
          return Y.isVatColumnAvailable() && M.showVAT;
        }),
        (Y.isVatColumnAvailable = function () {
          return ee(Y.hasTax() && M.taxIncludeBilling);
        }),
        (Y.isTaxColumnVisible = function () {
          return ee(Y.hasTax() && !M.taxIncludeBilling);
        }),
        (Y.applyTax = function (e, t, n) {
          var r = c.defer();
          return (
            (function (e) {
              M.updateByCountryCode(Y, e.countryCode), (e.residenceCountryCode = M.needResidence ? e.countryCode : null), (Y.input.zipCode = e.zipCode);
              var t = {
                billingCountryCode: e.countryCode,
                residenceCountryCode: e.residenceCountryCode,
                residenceZipCode: e.zipCode,
                billingZipCode: e.billingZipCode,
              };
              M.updateFromTaxRequest(Y, t);
            })(t),
            g({
              method: "post",
              url: TPParam.APPLY_TAX_ACTION,
              params: {
                aid: Y.getAid(),
                oid: Y.input.oid,
                countryCode: Y.getBillingCountryCode(),
                zipCode: Y.getBillingZipCode(),
                billingZipCode: Y.getBillingZipCode(),
                residenceCountryCode: Y.getResidenceCountryCode(),
              },
            })
              .then(function () {
                !n && o.postMessage("applyTaxCompleted", t), r.resolve(t);
              })
              .catch(function (t) {
                !n && o.postMessage("applyTaxFailed"), he(e, t.errors), r.reject();
              }),
            r.promise
          );
        }),
        (Y.isAutoCompleteRegistrationTerm = function () {
          return Y.flags.autoCompleteRegistrationTerm;
        }),
        (Y.isShowBoilerplateCloseButton = function () {
          var e = C.get().closeButtonType,
            t = "false" !== getParameterByName("showCloseButton"),
            n = e === Y.closeButtonTypes.boilerplate;
          return t && n;
        }),
        (Y.hasExternalVerificationGate = function () {
          return Y.termGate.externalApiConfigurationId && "accepted" !== Y.termGate.externalVerificationStatus;
        }),
        (Y.hasAccess = function (e) {
          return (
            Y.flags.needUpdateUserResources &&
              ((Y.flags.needUpdateUserResources = !1),
              N.getUserResource(Y).then(function (e) {
                angular.copy(e.data.models.userResources, Y.config.userResources);
              })),
            Y.config.userResources.indexOf(e) > -1
          );
        }),
        (Y.hasResources = function (e) {
          if (!e) return !1;
          if (!Y.flags.selectedTerm || !Y.flags.selectedTerm.resource || !Y.flags.selectedTerm.resource.rid) return !1;
          var t = [];
          return (
            "string" == typeof e && (t = e.indexOf(",") >= 0 ? e.replace(/\s/gm, "").split(",") : [e]),
            Array.isArray(e) && (t = e.slice(0)),
            t.some(function (e) {
              return e === Y.flags.selectedTerm.resource.rid;
            })
          );
        }),
        (Y.hasMultiplePaymentMethods = function () {
          return Y.input.paymentMethods && Y.input.paymentMethods.length > 1;
        }),
        (Y.hasTax = function () {
          return Y.config.hasTax;
        }),
        (Y.hasOnlyOneTerm = function () {
          return Y.config.terms && 1 === Y.config.terms.length;
        }),
        (Y.reloadIfNeed = function () {
          Ae.apply(Y, arguments);
        }),
        (Y.getGeoCountryCode = function () {
          return window.TPParam.GEO_COUNTRY_CODE;
        }),
        (Y.getCustomFormParams = function () {
          var e,
            t = {},
            n = window.TPParam.params.formNameByTermId;
          if (n) {
            var r = JSON.parse(n),
              o = Y.input.customFormTermId;
            o && (e = r[o]);
          }
          return e && ((t.formName = e), (t.hideCompletedFields = window.TPParam.params.hideCompletedFields || !1)), (t.trackingId = window.TPParam.params.trackingId), t;
        }),
        (Y.mergeStats = function (e) {
          e && e.models && e.models.checkoutStats && A.mergeStats(e.models.checkoutStats);
        }),
        (Y.resize = function () {
          f.resize();
        }),
        (Y.getPreferredWidth = function () {
          return f.getPreferredWidth();
        }),
        (Y.allowTinypassAccountsLogin = function () {
          return m.allowTinypassAccountsLogin();
        }),
        (Y.allowLogout = function () {
          return !Y.isUpgradeOffer() && "receipt" !== l.getActiveState() && m.allowLogout();
        }),
        (Y.allowTinypassAccountsLogout = function () {
          return "receipt" !== l.getActiveState() && m.allowTinypassAccountsLogout();
        }),
        (Y.logout = function () {
          m.logout(), re();
        }),
        (Y.resetAssociatedData = function () {
          s.fire(EVENT_RESET_PROMO_CODE);
        }),
        (Y.sendGoogleAnalyticsEvent = function (e) {
          e && e.params && (e.params.aid = Y.getAid()), h.sendGoogleAnalyticsEvent(e);
        }),
        (Y.register = function () {
          return Y.login("register");
        }),
        (Y.login = function (e) {
          return (function () {
            if (m.isCondeUserProvider()) {
              var t = e || "login";
              if (f.isModal) {
                var n = c.defer();
                return (
                  (P.currentState.name = t),
                  O.gotoAuthState(
                    Y,
                    null,
                    function () {
                      "auth" === l.getActiveState() && l.gotoPreviousState(), n.resolve();
                    },
                    !0
                  ),
                  n.promise
                );
              }
              var r = {};
              return angular.copy(Y.params, r), (r.isAuth = !0), (r.authStartScreen = t), o.startCheckoutEvent(r), c.reject();
            }
            return m.login(e).then(function (e) {
              var t = e.user;
              return Ae(!0, !1, t);
            });
          })().then(function () {
            return ne(null);
          });
        }),
        (Y.startRedemption = function () {
          function e(e) {
            e ? l.gotoRedemptionState() : o.startCheckoutEvent(Y.params);
          }
          (Y.flags.inStartCheckoutFlow = !0), (Y.params.isRedemption = !0), (Y.params.startFromInlineCheckout = !1), f.isModal || f.isPopup ? (o.startCheckoutEvent(Y.params), e(!0)) : ((Y.params.termId = null), (Y.params.startFromInlineCheckout = !0), e(!1)), (Y.flags.inStartCheckoutFlow = !1);
        }),
        (Y.gotoRedemptionState = function () {
          l.gotoRedemptionState();
        }),
        (Y.startUpgradeAuthentication = function () {
          (Y.params.termId = null), (Y.params.startFromInlineCheckout = f.isInline), Y.params.startFromInlineCheckout ? o.startCheckoutEvent(Y.params) : (l.disable(!0), l.gotoState("upgradeAuthentication"));
        }),
        (Y.startSubscriptionReactivation = function () {
          (Y.params.termId = null), (Y.params.startFromInlineCheckout = f.isInline), Y.params.startFromInlineCheckout ? o.startCheckoutEvent(Y.params) : l.gotoSubscriptionReactivationState();
        }),
        (Y.startExternalCheckout = function (e) {
          w.startCheckout(e).then(function () {
            Y.sendGoogleAnalyticsEvent({
              eventAction: "externalReceiptDisplayed",
              eventLabel: "External receipt displayed",
              params: {
                offerId: Y.config.offerId,
                templateId: Y.config.offerTemplateId,
                templateVariantId: Y.config.offerTemplateVariantId,
              },
            });
          });
        }),
        (Y.addTermTypeToParams = function (e, t) {
          var n = Y._findTerm(t);
          return n
            ? Object.assign({}, e, {
                type: n.type,
              })
            : e;
        }),
        (Y.getExternalCheckoutConfig = function () {
          return w.getUiConfig ? w.getUiConfig() : {};
        }),
        (Y.startCheckout = function (e) {
          var t = e && "object" == typeof e ? e.termId : e;
          if ((($ = t), Y.canCheckout() || Y.isPasswordlessCheckoutEnabled())) {
            Y.notify("[CHECKOUT] Starting checkout with termId:" + t),
              A.mergeStats({
                promo_code: "",
                promotion_id: "",
                promo_state: 0,
              }),
              (Y.input.promotionBillingPlan = null),
              t && (Y.params.termId = t),
              Y.input.oid && (Y.params.oid = Y.input.oid),
              Y.input.promoCodeId && (Y.params.promoCodeId = Y.input.promoCodeId),
              Y.input.promoCodeTermId && (Y.params.promoCodeTermId = Y.input.promoCodeTermId),
              Y.flags.affiliateState && (Y.params.affiliateState = Y.flags.affiliateState);
            var n = Y._findTerm(t);
            n && n.type === LINK_TERM_TYPE_NAME ? X(n).then(Z, J) : (o.startCheckoutEvent(Y.addTermTypeToParams(Y.params, e)), f.isInline || (t ? n && Y.selectTerm(n) : O.gotoCheckoutStart(Y)));
          } else
            m.loginSuccessPosted() ||
              m
                .login("register")
                .then(function (e) {
                  return Ae(!0, !1, e.user);
                })
                .then(function () {
                  m.isPublisherUserRefProvider() || m.isPianoIdLiteUserProvider() || Y.startCheckout(t);
                });
        }),
        (Y.removeVolgaIfNotSwitzerlandCountrySelected = function (e, t) {
          return (
            t || (t = M.countryCode),
            Y.input.paymentMethods.filter(function (e) {
              return !te(e, t);
            })
          );
        }),
        (Y.resetPaymentSelectionIfVolgaSelected = function (e) {
          e || (e = M.countryCode), te(Y.flags.selectedPaymentMethod, e) && (Y.resetPaymentSelection(), s.fire(EVENT_CHECKOUT_RESET_SELECTED_PAYMENT_METHOD));
        }),
        (Y.allowRedemption = function () {
          return Y.config.redemptionEnabled;
        }),
        (Y.systemError = function (e) {
          o.systemErrorEvent({
            message: e,
          });
        }),
        (Y.notify = function (e, t) {
          util.log.apply(console, arguments);
        }),
        (Y.canCheckout = function () {
          return !(Y.config.settings.requiresValidUser && !1 === Y.isUserValid() && !Y.canInitCheckoutWithAnon()) || Y.isPasswordlessCheckoutEnabled();
        }),
        (Y.onAlreadyPurchased = ae),
        (Y.preselectTermId = function (e) {
          Y.flags.preselectedTermId = e;
        }),
        (Y.startCheckoutWithPreselectedTerm = function () {
          if ((d(Y.$rootScope).reset(), Y.flags.preselectedTermId)) return Y.startCheckout(Y.flags.preselectedTermId);
          d(Y.$rootScope).global(E.trc("checkout.platform", "Please select a plan before continuing"));
        }),
        (Y.selectTerm = function (e, t, n, r, i) {
          if ("inline" === window.TPParam.params.displayMode) return Y.startCheckout(e), c.reject();
          var s = t;
          if ((s || (s = Y.params.offerId), "string" == typeof e && !(e = Y._findTerm(e)))) return d(Y.$rootScope).reset(), d(Y.$rootScope).global(E.trc("checkout.platform", "Term not found")), Y.enabledCheckout(), c.reject();
          if (e.termId === Y.input.termId && !i) return Y.enabledCheckout(), c.reject();
          if (!Y.canCheckout()) return Y.enabledCheckout(), c.reject();
          var u = e;
          return (
            d(Y.$rootScope).reset(),
            Y.isTermRestrictedForNewCustomers(u, Y.isNewCustomer())
              ? (Y.enabledCheckout(), c.reject())
              : u.restrictCheckoutProcess
              ? (u.sellDate ? d(Y.$rootScope).global(E.trc("term.name", u.name) + " " + E.trc("checkout.platform", "sales start on") + " " + u.sellDate) : u.hasFinishedSales ? d(Y.$rootScope).global(E.trc("term.name", u.name) + " " + E.trc("checkout.platform", "sales of the old season has finished and the sales of new season have not started yet")) : d(Y.$rootScope).global(E.trc("term.name", u.name) + " " + E.trc("checkout.platform", "sales have not started yet")), Y.enabledCheckout(), c.reject())
              : ((Y.input.termId = e.termId),
                (Y.input.offerId = s),
                (Y.input.customFormTermId = e.termId),
                angular.copy(F, Y.access),
                f()
                  .then(function (t) {
                    if (ie(u)) {
                      var n = c.defer();
                      return (
                        O.gotoAuthState(
                          Y,
                          function () {
                            ($ = e.termId), (Y.input.customFormTermId = e.termId);
                          },
                          function () {
                            Y.isRequirePrintAddress() &&
                              U.getAddressList(Y.getAid(), Y.params).then(function (e) {
                                Y.termGate.adrCollectionAvailableAddresses = e;
                              }),
                              m.isUserValid() && !m.isUserConfirmed() ? n.reject() : n.resolve(t);
                          },
                          !0
                        ),
                        n.promise
                      );
                    }
                    return c.when(t);
                  })
                  .then(function () {
                    var e = c.defer();
                    return (
                      ne(u).then(function (t) {
                        t ? e.reject() : e.resolve();
                      }),
                      e.promise
                    );
                  })
                  .then(function (e) {
                    p(e);
                  }))
          );
          function p(t, i) {
            t && t.models.alreadyPurchased && !Y.isUpgradeOffer()
              ? ae(t, u.termId, r)
              : i ||
                (m.isUserValid() && !m.isUserConfirmed()
                  ? l.gotoState("user-non-confirmed")
                  : (Y._selectTerm(e, n, r),
                    o.postMessage("selectTerm", {
                      alreadyPurchased: Y.access.alreadyPurchased,
                    }),
                    "registration" === e.type ? a.purchaseStarting(Y, e) : O.gotoNextState(Y, a, r)));
          }
          function f() {
            return (
              Y.disableCheckout(),
              a
                .createOrder(Y, e.termId, s, Y.params.templateId)
                .then(function (e) {
                  if (
                    (util.log("[CHECKOUT] order created", e),
                    (Y.input.oid = e.models.oid),
                    (Y.input.billingAddressEnabled = e.models.billingAddressEnabled),
                    (Y.input.cyberSourceCollectCardholderName = e.models.cyberSourceCollectCardholderName),
                    (Y.input.sharedAccountCount = e.models.sourceTerm ? e.models.sourceTerm.sharedAccountCount : 0),
                    (Y.input.isTermLockedByPromocode = e.models.isTermLockedByPromocode),
                    angular.copy(F, Y.access),
                    angular.copy(G, Y.termGate),
                    angular.copy(e.models.user, Y.config.user),
                    (Y.input.isApplyPaymentMethodEnabled = e.models.isApplyPaymentMethodEnabled),
                    Y.input.billingAddressEnabled &&
                      ((M.zipCode = ""),
                      (M.geoZipCode = ""),
                      (M.billingAddressFields = e.models.billingAddressFields || {}),
                      (M.billingAddressCountries = Object.keys(M.billingAddressFields)),
                      N.getTaxRegions(Y.params).then(function (e) {
                        (Y.input.billingAddressesRegions = e.models.countries), Y.isAvalaraTaxEnabled() && (Y.input.billingAddressConfig = Y.getConfigForBillingAddress());
                      })),
                    Y.params.userToken && m.isPianoIdUserProvider())
                  ) {
                    var t = T.jwtDecode(Y.params.userToken);
                    (Y.config.user.login_timestamp = t.login_timestamp), (Y.config.user.token_expiration = 1e3 * (t.exp - t.iat));
                  }
                  var n = {
                    id: e.models.termGateId,
                    externalApiTitle: e.models.externalApiTitle,
                    externalApiApplyButtonName: e.models.externalApiApplyButtonName,
                    externalApiVerifyNew: e.models.externalApiVerifyNew,
                    externalApiConfigurationId: e.models.externalApiConfigurationId,
                    externalApiFields: e.models.externalApiFields,
                    externalVerificationStatus: e.models.externalVerificationStatus,
                    externalVerificationConversionId: e.models.externalVerificationConversionId,
                    externalApiSource: e.models.externalApiSource,
                    externalApiFieldCountry: e.models.externalApiFieldCountry,
                    externalApiSavedForms: e.models.externalApiSavedForms,
                    externalApiPrepopulationForm: e.models.externalApiPrepopulationForm,
                    adrCollectionAvailableAddresses: e.models.adrCollectionAvailableAddresses,
                    adrCollectionCountries: e.models.adrCollectionCountries,
                    adrCollectionEnabled: e.models.adrCollectionEnabled,
                    shippingAddressCollectionEnabled: e.models.shippingAddressCollectionEnabled,
                    adrDefaultCountry: e.models.adrDefaultCountry,
                    adrPrepopulationForm: e.models.adrPrepopulationForm,
                  };
                  return (
                    n.externalApiFields &&
                      n.externalApiFields.length &&
                      angular.forEach(n.externalApiFields, function (e) {
                        e.value = e.defaultValue;
                      }),
                    angular.copy(n, Y.termGate),
                    (Y.flags.isDiscounted = !1),
                    c.when(e)
                  );
                })
                .catch(function (e) {
                  var t;
                  return "object" == typeof e && (e.errors && e.errors.length ? (t = e.errors[0].message || e.errors[0].msg) : e.message && (t = e.message)), t ? (getParameterByName("termId") ? d().terminal(E.trc("service.error.codes", t)) : d(Y.$rootScope).global(E.trc("service.error.codes", t))) : d().terminal(E.trc("checkout.platform", "Create order failed")), Y._unselectTerm(), c.reject(e);
                })
                .finally(function () {
                  Y.enabledCheckout();
                })
            );
          }
        }),
        (Y.checkoutWithNewTerm = function (e, t) {
          Y.selectTerm(e, t, !0, !1), "gift" === e.type ? O.gotoGiftParams(Y) : O.gotoPaymentState(Y, a, e, t);
        }),
        (Y.getWidthTerm = function () {
          return f.getNewWidth();
        }),
        (Y.softResetDiscount = function () {
          return !0 === Y.flags.isDiscounted ? (Y.resetDiscount(), R.updatePaymentMethods(!0, Y)) : c.when(!1);
        }),
        (Y.resetDiscount = function () {
          if (
            ((Y.flags.isDiscounted = !1),
            (Y.input.promoCodeId = null),
            (Y.input.promoCodeTermId = null),
            (Y.input.promoCode = null),
            Y.input.originalChargeAmount && ((Y.input.chargeAmount = Y.input.originalChargeAmount), (Y.input.chargeCurrency = Y.input.originalChargeCurrency), (Y.input.chargeCurrencySymbol = Y.input.originalChargeCurrencySymbol), (Y.input.chargeDisplayAmount = Y.input.originalChargeDisplayAmount), (Y.input.promotionBillingPlan = null), delete Y.input.originalChargeAmount, delete Y.input.originalChargeCurrency, delete Y.input.originalChargeDisplayAmount, delete Y.input.originalChargeCurrencySymbol),
            angular.forEach(this.config.terms, function (e) {
              e.originalBillingPlan &&
                (angular.forEach(e.originalBillingPlan, function (t, n) {
                  e[n] = t;
                }),
                delete e.originalBillingPlan);
            }),
            R.updateSelectedTerm(Y),
            Y.isZeroPayment())
          ) {
            var e = null;
            Y.input.paymentMethods && 1 == Y.input.paymentMethods.length && (e = Y.input.paymentMethods[0]), (Y.flags.selectedPaymentMethod = e);
          }
          return (
            s.fire(EVENT_CHECKOUT_PRICE_CHANGED, {
              origin: "resetDiscount",
            }),
            c.when(!1)
          );
        }),
        (Y.getAid = function () {
          return Y.params.aid;
        }),
        (Y.getDoubleOptInParams = function () {
          return A.getStats().then(function (e) {
            var t = {};
            return (
              angular.copy(Y.params, t),
              Y.getLoginTermId() && (t.termId = Y.getLoginTermId()),
              Y.input.oid && (t.oid = Y.input.oid),
              k.passwordlessEVFields && (t.externalVerificationFields = k.passwordlessEVFields),
              {
                tbc: e.initStatParams.tbc,
                pageViewId: e.initStatParams.pageViewId,
                trackingId: e.initStatParams.trackingId,
                params: t,
              }
            );
          });
        }),
        (Y.discountSelectedTerm = function (e, t, n, r, o, a) {
          util.log("[CHECKOUT] Discounting selected with:", e, t, n), oe(), (Y.flags.isDiscounted = !0), (Y.input.chargeAmount = e), (Y.input.chargeCurrency = t), (Y.input.chargeDisplayAmount = n), (Y.input.promotionBillingPlan = r), (Y.input.promoCodeId = o), (Y.input.promoCodeTermId = a);
        }),
        (Y._selectTerm = function (e, t, n) {
          var r;
          if ((r = t && e ? e : Y._findTerm(e))) {
            if (
              (util.log("[CHECKOUT] Selecting term", r),
              angular.forEach(this.config.terms, function (e) {
                e.selected = !1;
              }),
              (r.selected = !0),
              angular.copy(r, Y.flags.selectedTerm),
              (Y.input.chargeAmount = Y.flags.selectedTerm.chargeAmount),
              (Y.input.chargeCurrency = Y.flags.selectedTerm.chargeCurrency),
              (Y.input.chargeCurrencySymbol = Y.flags.selectedTerm.chargeCurrencySymbol),
              (Y.input.firstRealPriceWithTax = Y.flags.selectedTerm.firstRealPriceWithTax),
              (Y.input.chargeDisplayAmount = Y.flags.selectedTerm.chargeDisplayAmount),
              (Y.input.canadianTaxes = Y.canadianTaxes()),
              (Y.input.customFormTermId = Y.flags.selectedTerm.termId),
              (Y.params.termId = Y.flags.selectedTerm.termId),
              n)
            )
              return;
            angular.copy({}, Y.flags.selectedPaymentMethod), s.fire(EVENT_CHECKOUT_TERM_SELECTED, r);
            var a = {
              termName: r.name,
              termId: r.termId,
              resourceName: r.resource.name,
              resourceId: r.resource.rid,
            };
            o.customEvent("checkoutSelectTerm", a),
              Y.sendGoogleAnalyticsEvent({
                eventAction: "termSelected",
                eventLabel: "Term selected",
                params: {
                  offerId: Y.config.offerId,
                  templateId: Y.config.offerTemplateId,
                  templateVariantId: Y.config.offerTemplateVariantId,
                  termId: r.termId,
                },
              });
          } else util.log("Did not find existing term for", e);
        }),
        (Y._unselectTerm = function () {
          angular.forEach(this.config.terms, function (e) {
            e.selected = !1;
          });
          Y.flags.selectedTerm;
          var e = Y.input.zipCode,
            t = Y.input.promoCode;
          angular.copy(W, Y.input), angular.copy(q, Y.flags.selectedTerm), angular.copy(W.consents, Y.input.consents), (Y.params.termId = null), (Y.input.user_data.first_name = Y.config.user.firstName), (Y.input.user_data.last_name = Y.config.user.lastName), (Y.input.zipCode = e), (Y.input.customFormTermId = null), (Y.input.promoCode = t);
        }),
        (Y._findTerm = function (e) {
          if (null === e) return null;
          var t = e;
          "object" == typeof e && e.termId && (t = e.termId);
          var n = null;
          return (
            angular.forEach(this.config.terms, function (e) {
              e && e.termId === t && (Y.notify("[CHECKOUT] Found existing term:" + t), (n = e));
            }),
            n
          );
        });
      var se,
        ce = !1;
      (Y.initPurchase = function (e) {
        var t = e || {
          purchaseInitiated: !1,
        };
        return (
          (ce = !0),
          a
            .initiatePurchase(Y)
            .then(function () {
              return (t.purchaseInitiated = !0), t;
            })
            .finally(function () {
              ce = !1;
            })
        );
      }),
        (Y.selectPaymentMethod = function (e, t) {
          if (!0 === ce) return c.when(!1);
          (Y.flags.selectedPaymentMethod = null),
            angular.forEach(this.input.paymentMethods, function (t) {
              (t.selected = !1), e && t.id === e.id && (Y.notify("[CHECKOUT] Payment method selected:" + e.name), (t.selected = !0), (Y.flags.selectedPaymentMethod = t));
            });
          var n = {
            purchaseInitiated: !1,
          };
          return !Y.flags.selectedPaymentMethod || t || ce
            ? n
            : ((ce = !0),
              a
                .initiatePurchase(Y)
                .then(function () {
                  return (n.purchaseInitiated = !0), n;
                })
                .finally(function () {
                  ce = !1;
                }));
        }),
        (Y.selectPaymentMethodById = function (e, t) {
          var n = Se(e);
          return Y.selectPaymentMethod(n, t);
        }),
        (Y.startRenewal = function () {
          (Y.flags.isRenewNow = !0), Y.access && Y.access.alreadyPurchased && !Y.access.canBeRenewed ? Y._showSubscriptionHasAlreadyRenewed() : ((Y.access.inRenewal = !0), O.gotoPaymentState(Y, a, Y.flags.selectedTerm));
        }),
        (Y.isRefreshBillingInfoNeeded = function () {
          return Y.flags.isPaymentMethodChanged;
        }),
        (Y.startShowOffer = function () {
          l.gotoState("offer");
        }),
        (Y.onUserChanged = function () {
          var e = c.defer(),
            t = m.isUserValid(),
            n = s.subscribe(EVENT_CHECKOUT_RELOADED, function () {
              var r = m.isUserValid();
              t !== r &&
                (n(),
                a.waitInitPurchase().then(function () {
                  e.resolve(r);
                }));
            });
          return e.promise;
        }),
        (Y.close = function (e) {
          e && e(),
            f.close({
              alreadyPurchased: Y.access.alreadyPurchased,
              completePayment: Y.flags.termComplete,
            }),
            s.fire(EVENT_CHECKOUT_CLOSED);
        }),
        (Y.canInitCheckoutWithAnon = function () {
          return Y.config.app && !0 === Y.config.app.canInitCheckoutWithAnon;
        }),
        (Y.fireCheckoutPaymentErrorEvent = function () {
          var e = d(t).errors(!1);
          angular.forEach(e, function (e) {
            o.checkoutPaymentErrorEvent(e.message || e.msg);
          });
        });
      var le = function () {
          se.resolve(), Y.enabledCheckout();
        },
        ue = function () {
          se.reject(), Y.enabledCheckout();
        },
        de = function (e) {
          S.logEvent("successPurchase", {
            async_processing: e ? e.async_processing : "params not provided",
          }),
            "true" === e.async_processing
              ? (util.log("[CHECKOUT] Asynchronous processing. Completing and granting provisional access", e),
                angular.copy(JSON.parse(e.receipt), Y.input.receipt),
                Y.sendGoogleAnalyticsEvent({
                  eventAction: "checkoutSuccess",
                  eventLabel: "Checkout success",
                  params: {
                    offerId: Y.offerId,
                    templateId: Y.config.offerTemplateId,
                    templateVariantId: Y.config.offerTemplateVariantId,
                  },
                }),
                o.completeEvent(Y.addTermTypeToParams(Y.input.receipt, Y.input.receipt.termId)),
                Ee(Y.input.receipt).finally(le))
              : (util.log("[CHECKOUT] completing term", e), Y._completeTerm(e).finally(le));
        },
        pe = function (e) {
          if ("object" == typeof e && e.models && e.models.alreadyPurchased) return ae(e, Y.getSelectedTerm().termId, !1), void ue();
          var n;
          "object" == typeof e ? (e.errors && e.errors.length ? (n = e.errors[0].message || e.errors[0].msg) : e.message && (n = e.message)) : "string" == typeof e && (n = e), n && (d(t).global(E.trc("service.error.codes", n)), Y.fireCheckoutPaymentErrorEvent()), Y.getBillingAddressEnabled() && -1 !== ["18003", "18005"].indexOf(e.errors[0].code) && (M.postalCodeError = !0), ue(), a.initiatePurchase(Y);
        };
      (Y.completePaymentThreeDS = function () {
        a.completePurchaseThreeDS(Y, de, pe);
      }),
        (Y.reInitPurchase = function () {
          a.initiatePurchase(Y);
        }),
        (Y.completePayment = function () {
          return (
            o.submitPayment({
              term: Y._findTerm(Y.params.termId),
            }),
            (se = c.defer()),
            Y.disableCheckout(),
            d(Y.$rootScope).reset(),
            l
              ._validateViews()
              .then(function () {
                d(Y.$rootScope).reset();
                var e = Y.getSelectedTerm(),
                  n = e && "registration" === e.type;
                return Y.checkConsents(!0)
                  .then(function () {
                    return ge();
                  })
                  .then(function () {
                    if (!n) return fe();
                  })
                  .then(function (e) {
                    return !Y.getBillingAddressEnabled() || M.billingAddressPrefilled || (Y.isAvalaraTaxEnabled() && !Y.isBillingAddressAvailableForSelectedCountry())
                      ? c.when(!0)
                      : n || M.billingAddress.postalCode
                      ? (e && e.models && ((M.billingAddress = e.models.billingAddress), (M.billingAddress.isVerified = !0), (M.zipCode = M.billingAddress.postalCode)), N.billingAddressApply(Y.input.oid, M.billingAddress, Y.params, Y.isAvalaraTaxEnabled() ? "Avalara" : Y.isOneSourceTaxEnabled() ? "Experian" : void 0))
                      : (M.billingAddress.isVerified ? d(t).global(E.tr("Address is required")) : M.billingAddress.region.regionName ? d(t).global(E.tr("Postal code is required")) : d(t).global(E.tr("Area is required")), (M.postalCodeError = !0), c.reject());
                  })
                  .then(function () {
                    return Y.passwordlessServiceLogin();
                  })
                  .then(function () {
                    return ve();
                  })
                  .then(function () {
                    return (
                      (e = c.when()),
                      angular.forEach(l.views, function (t) {
                        angular.forEach(t.components, function (t) {
                          Y.isPaymentMethod(t.PAYMENT_PROVIDER_ID) && t.customActionOnCompletePurchase && (e = t.customActionOnCompletePurchase());
                        });
                      }),
                      e
                    );
                    var e;
                  })
                  .then(function () {
                    return a.processPurchase(Y, de, pe);
                  })
                  .catch(function (e) {
                    e &&
                      e.errors &&
                      e.errors.length > 0 &&
                      e.errors[0].msg &&
                      (e.errors.forEach(function (e) {
                        d(t).global({
                          name: e.name,
                          message: E.trc("service.error.codes", e.msg),
                        });
                      }),
                      Y.fireCheckoutPaymentErrorEvent()),
                      ue();
                  });
              })
              .catch(function () {
                util.log("[CHECKOUT] Validation on completePayment has failed"), Y.fireCheckoutPaymentErrorEvent(), ue();
              }),
            se.promise
          );
        }),
        (Y.confirmPayment = function () {
          var e = c.defer();
          return (
            Y.disableCheckout(),
            d(t).reset(),
            l._validateViews().then(
              function () {
                Y.checkConsents(!1)
                  .then(function () {
                    return ge();
                  })
                  .then(function () {
                    return fe();
                  })
                  .then(function (e) {
                    return e && e.models && ((M.billingAddress = e.models.billingAddress), (M.zipCode = M.billingAddress.postalCode)), Y.passwordlessServiceLogin();
                  })
                  .then(function () {
                    return (
                      (e = c.when()),
                      angular.forEach(l.views, function (t) {
                        angular.forEach(t.components, function (t) {
                          Y.isPaymentMethod(t.PAYMENT_PROVIDER_ID) && t.customActionOnConfirmPayment && (e = t.customActionOnConfirmPayment());
                        });
                      }),
                      e
                    );
                    var e;
                  })
                  .then(function () {
                    return a.waitInitPurchase();
                  })
                  .then(function () {
                    return a.confirmPayment(Y);
                  })
                  .then(function (t) {
                    var n = Y.input.confirmated,
                      r = t.models;
                    (n.billingPlan = r.billingPlan),
                      (n.nextPeriodBillingPlanTable = r.nextPeriodBillingPlan),
                      (n.taxAmount = r.taxAmount),
                      (n.chargeAmount = r.chargeAmount),
                      (n.amount = r.amount),
                      (n.total = r.total),
                      (n.taxRate = r.taxRate),
                      (n.taxAmount = r.taxAmount),
                      (n.hstRate = r.hstRate),
                      (n.hstAmount = r.hstAmount),
                      (n.qstRate = r.qstRate),
                      (n.qstAmount = r.qstAmount),
                      (n.pstRate = r.pstRate),
                      (n.pstAmount = r.pstAmount),
                      (n.gstRate = r.gstRate),
                      (n.gstAmount = r.gstAmount),
                      (Y.input.canadianTaxes = Y.canadianTaxes()),
                      O.gotoConfirmation(Y).finally(function () {
                        e.resolve();
                      });
                  })
                  .catch(function (n) {
                    n && n.errors && n.errors.length > 0 && n.errors[0].msg
                      ? n.errors.forEach(function (e) {
                          d(t).global({
                            name: e.name,
                            message: E.trc("service.error.codes", e.msg),
                          }),
                            Y.fireCheckoutPaymentErrorEvent();
                        })
                      : (n && n.isCheckConsentsError) || "BraintreeError" === n.name || d().terminal(E.tr("Confirmation order failed")),
                      e.reject();
                  });
              },
              function () {
                util.log("[CHECKOUT] Validation on confirmPayment has failed"), Y.fireCheckoutPaymentErrorEvent(), e.reject();
              }
            ),
            e.promise.finally(function () {
              Y.enabledCheckout();
            })
          );
        });
      var me,
        fe = function () {
          if (Y.getBillingAddressEnabled() && Y.isAvalaraTaxEnabled() && (!M.countryCode || (!M.sameResidence && !M.residenceCountryCode)))
            return (
              (M.countrySelectorError = !0),
              c.reject({
                errors: [
                  {
                    msg: E.tr("Please select a billing country"),
                  },
                ],
              })
            );
          if (!M.billingAddressFields || !Y.isAvalaraTaxEnabled() || M.billingAddressPrefilled || !Y.isBillingAddressAvailableForSelectedCountry()) return c.when(!0);
          if (!M.zipCode)
            return (
              (M.postalCodeError = !0),
              c.reject({
                errors: [
                  {
                    msg: E.tr("Please enter a postal code"),
                  },
                ],
              })
            );
          for (var e = 0; e < M.requiredBillingAddressFieldsAnchors.length; e += 1) {
            var t = M.requiredBillingAddressFieldsAnchors[e],
              n = !1;
            if (((("regionName" === t || M.billingAddress[t]) && ("regionName" !== t || M.billingAddress.region.regionName)) || (n = !0), n))
              return c.reject({
                errors: [
                  {
                    msg: E.tr("Please fill required fields"),
                  },
                ],
              });
          }
          return N.verifyAvalaraAddress(Y.params, M.billingAddress);
        },
        ge = function () {
          var e = !M.zipCode && (M.residenceRequireZipCode || M.requiredZipCodeAndNotHidden);
          return ((Y.isTaxJarPostalCodesEnabled() && !Y.getIfDuplicateZipCodeIsHidden()) || Y.isAvalaraTaxEnabled() || Y.isOneSourceTaxEnabled()) && e
            ? ((M.postalCodeError = !0),
              c.reject({
                errors: [
                  {
                    msg: E.tr("Please enter a postal code"),
                  },
                ],
              }))
            : c.when(!0);
        },
        he = function (e) {
          e &&
            e.length &&
            (angular.forEach(e, function (e) {
              e.message = e.msg;
            }),
            d(Y.$rootScope).globals(e));
        };
      function Ee(e) {
        return "number" != typeof Y.input.sharedAccountCount || Y.isGiftTerm(Y.getSelectedTerm()) ? O.gotoReceipt(Y) : ((Y.input.sharedAccounts = e.sharedAccounts), (Y.input.termConversionId = e.termConversionId), O.gotoSharedSubscriptionState());
      }
      function ve() {
        var e = Y.getSelectedTerm();
        return e && e.newCustomersOnly && !Y.isNewCustomer() ? (d().terminal(E.trc("term.name", e.name) + " " + E.trc("checkout.platform", "is restricted for new customers only") + " "), c.reject(!1)) : c.when(!0);
      }
      (Y.checkConsents = function (e) {
        var t = c.defer(),
          n = a.checkConsentsFunction(),
          r = {
            isCheckConsentsError: !0,
          };
        return (
          n && !0 === e
            ? n(Y)
                .then(function () {
                  s.fire(EVENT_CHECKOUT_CONSENT_CHANGED), t.resolve();
                })
                .catch(function (e) {
                  he(e), t.reject(r);
                })
            : v.isNeeded(Y)
            ? (Y.isPasswordlessCheckoutEnabled() &&
                -1 !== ["offer", "auth"].indexOf(l.getActiveState()) &&
                angular.forEach(Y.input.consents, function (e) {
                  e.required && (e.checked = !0);
                }),
              v(Y)
                .then(function () {
                  s.fire(EVENT_CHECKOUT_CONSENT_CHANGED), t.resolve();
                })
                .catch(function (e) {
                  he(e.errors), t.reject(r);
                }))
            : t.resolve(),
          t.promise
        );
      }),
        (Y._showSubscriptionHasAlreadyRenewed = function () {
          d().terminal(E.trc("checkout.platform", "The subscription has already been renewed"));
        }),
        (Y._completeTerm = function (e) {
          var n = c.defer();
          return (
            (e.first_name = Y.input.user_data.first_name),
            (e.last_name = Y.input.user_data.last_name),
            (e.url = Y.params.url),
            (e.device_data = Y.input.braintreeDeviceData),
            d(t).reset(),
            a.completePurchase(
              Y,
              Y.input.oid,
              e,
              function (e) {
                S.logEvent("completePurchaseSuccess"),
                  (Y.flags.termComplete = !0),
                  angular.copy(e.receipt, Y.input.receipt),
                  Y.sendGoogleAnalyticsEvent({
                    eventAction: "checkoutSuccess",
                    eventLabel: "Checkout success",
                    params: {
                      offerId: Y.config.offerId,
                      templateId: Y.config.offerTemplateId,
                      templateVariantId: Y.config.offerTemplateVariantId,
                    },
                  }),
                  o.completeEvent(Y.addTermTypeToParams(Y.input.receipt, Y.input.receipt.termId)),
                  Ee(e.receipt).finally(function () {
                    s.fire(EVENT_CHECKOUT_SUCCESS), n.resolve();
                  }),
                  (document.cookie = "ch_sid=; Path=/; expires=Thu, 01 Jan 1970 00:00:01 GMT;"),
                  Y.enabledCheckout();
              },
              function (e) {
                S.logEvent("completePurchaseError"), "object" == typeof e && e.models && e.models.renewalSubscriptionLockException ? Y._showSubscriptionHasAlreadyRenewed() : (Y.enabledCheckout(), n.reject());
              }
            ),
            n.promise
          );
        }),
        (Y.getSelectedTerm = function () {
          return this.flags.selectedTerm;
        }),
        (Y.getLoginTermId = function () {
          return $;
        }),
        (Y.getPaymentMethodId = function () {
          return this.flags && this.flags.selectedPaymentMethod && this.flags.selectedPaymentMethod.id;
        }),
        (Y.goToPasswordlessLoginState = function (e, t) {
          var n = !1;
          l.gotoState("passwordlessLogin");
          var r = s.subscribe("passwordlessLoginLoad", function () {
              r(), e && e();
            }),
            o = s.subscribe("passwordlessLoginSuccess", function () {
              o(), (n = !0), t && t();
            });
          return n;
        }),
        (Y.setAsDefaultPaymentMethod = function (e) {
          return N.setAsDefaultPaymentMethod(e)
            .then(function (e) {
              var t = e.data.models,
                n = (t && t.applyResult && t.applyResult.updateFailedSubscriptionPubIds) || {},
                r = (t && t.applyResult && t.applyResult.updatedSubscriptionPubIds) || [];
              return (
                Object.keys(n).length > 0 ? (console.error(n), d(Y.$rootScope).reset(), r.length > 0 ? d(Y.$rootScope).global(E.trc("checkout.platform", "Could not apply payment method to all subscriptions")) : d(Y.$rootScope).global(E.trc("checkout.platform", "Could not apply payment method"))) : 0 === r.length && d(Y.$rootScope).global(E.trc("checkout.platform", "No active subscriptions")),
                {
                  updated: r.length,
                  failed: Object.keys(n).length,
                }
              );
            })
            .catch(function (e) {
              d(Y.$rootScope).reset(), d(Y.$rootScope).global(e.data.errors[0].msg);
            });
        }),
        (Y.canSelectPaymentMethod = function () {
          return Y.input.paymentMethods && Y.input.paymentMethods.length > 1 && !Y.isZeroPayment();
        }),
        (Y.resetPaymentSelection = function () {
          angular.forEach(this.input.paymentMethods, function (e) {
            e.selected = !1;
          }),
            (Y.flags.selectedPaymentMethod = null);
        }),
        (Y.disableCheckout = function () {
          tinypass.showWaitPanel("checkoutDisable", '<div id="lock-modal-overlay"></div>');
        }),
        (Y.enabledCheckout = function () {
          tinypass.hideWaitPanel("checkoutDisable");
        }),
        (Y.reload = function (e, t) {
          var n = we(e);
          return (
            (n.countryCode = Y.getBillingCountryCode()),
            (n.residenceCountryCode = Y.getResidenceCountryCode()),
            (n.billingZipCode = Y.getBillingZipCode()),
            (n.zipCode = Y.input.zipCode),
            (n.sameResidence = Y.isSameResidence()),
            (n.oid = Y.input.oid),
            (n.promoCodeId = Y.input.promoCodeId),
            (n.promoCodeTermId = Y.input.promoCodeTermId),
            Y.flags.selectedPaymentMethod && void 0 !== Y.flags.selectedPaymentMethod.id && (n.paySourceId = Y.flags.selectedPaymentMethod.id),
            (n.city = void 0),
            M && M.billingAddress && M.billingAddress.city && (n.city = M.billingAddress.city),
            N.getOffer(n, Y).then(
              function (e) {
                util.log("CHECKOUT - RELOAD", getParameterByName("iframeId"), e);
                var r = !1;
                return (window.TPParam.config = e.models.config), (window.TPParam.params = n), Y.initConfig(), R.updateSelectedTerm(Y), Pe(Y.config.user), !Y.isUserValid() && m.loginSuccessPosted() && m.setLoginSuccessPosted(!1), !Y.config.settings.requiresValidUser || Y.isUserValid() || (Y.canInitCheckoutWithAnon() && !Y.isPrintAddressPopulated() && "printAddress" !== l.getActiveState()) || (Y.isPasswordlessCheckoutEnabled() && !Y.isPrintAddressPopulated() && "printAddress" !== l.getActiveState()) || l.isActive("auth") || re(), R.updatePayWhatYouWant(), e.models.alreadyPurchased && Y.getSelectedTerm() && (ae(e, Y.getSelectedTerm().termId, t), (r = !0)), ve(), s.fire(EVENT_CHECKOUT_RELOADED), !r;
              },
              function (e) {
                var t = e && e.errors && e.errors.length && e.errors[0].msg;
                return t ? d().terminal(E.trc("service.error.codes", t)) : d().terminal(E.trc("checkout.platform", "Reload failed")), console.warn(e), util.log("CHECKOUT - RELOAD ERROR", getParameterByName("iframeId"), e), !1;
              }
            )
          );
        }),
        (Y.getBillingCountryCode = function () {
          return M.countryCode;
        }),
        (Y.getRequiredZipCode = function () {
          return M.requiredZipCode || !1;
        }),
        (Y.getBillingZipCode = function () {
          return M.zipCode || (M.billingAddress && M.billingAddress.postalCode);
        }),
        (Y.getIfDuplicateZipCodeIsHidden = function () {
          return M.isDuplicateZipCodeHidden;
        }),
        (Y.onZipCodeChange = T.debounce(function () {
          s.fire(EVENT_CC_ZIP_CODE_CHANGED, {
            zipCode: Y.input.zipCode,
          });
        }, 300)),
        (Y.getResidenceCountryCode = function () {
          return M.residenceCountryCode;
        }),
        (Y.getVatLabel = function () {
          return M.vatLabel;
        }),
        (Y.toggleVatColumn = function () {
          M.showVAT = !M.showVAT;
        }),
        (Y.alreadyPurchased = function () {
          return Y.access && Y.access.alreadyPurchased;
        }),
        (Y.canadianTaxes = function () {
          var e = Y.input.confirmated,
            t = [];
          return e && (n("HST", e.hstRate, e.hstAmount), n("QST", e.qstRate, e.qstAmount), n("PST", e.pstRate, e.pstAmount), n("GST", e.gstRate, e.gstAmount)), t;
          function n(e, n, r) {
            n &&
              n > 0 &&
              t.push({
                name: e,
                rate: n,
                amount: r,
              });
          }
        }),
        (Y.setCustomConfirmationUrl = function (e) {
          me = e;
        }),
        (Y.getCustomOrDefaultConfirmationUrl = function (e) {
          return me || e;
        }),
        (Y.getPasswordlessEmail = function () {
          return I.data.email;
        }),
        (Y.getLang = function () {
          return Ce;
        }),
        (Y.isShowBoilerplateCloseButton = function () {
          var e = C.get().closeButtonType,
            t = "false" !== getParameterByName("showCloseButton"),
            n = e === Y.closeButtonTypes.boilerplate;
          return t && n;
        }),
        (Y.getTermChargeAmount = function (e) {
          return (Y.isFreeTrial(e) && e.authorizationAmount) || e.chargeAmount;
        }),
        (Y.getSelectedTermChargeAmounts = function (e) {
          var t,
            n = Y.getSelectedTerm(),
            r = e || n.authorizationAmount,
            o = Y.isFreeTrial(n),
            a = Y.isFreeDynamic(n),
            i = o || a,
            s = Math.max(Y.input.chargeAmountAndTax || 0, Y.input.chargeAmount || 0);
          r = (i && !Y.access.alreadyPurchased && r) || s || Y.input.originalChargeAmount;
          var c = i ? r : s,
            l = i ? H("currency")(r, Y.input.chargeCurrencySymbol) : Y.input.chargeDisplayAmountAndTax || Y.input.chargeDisplayAmount,
            u = n.billingPlanTable;
          return {
            amount: r,
            verifyAmount:
              c <
              (t = Y.isDynamicTerm(n)
                ? n.verificationAmountWithTax
                : u && u.length > 0
                ? Math.max.apply(
                    Math,
                    u.map(function (e) {
                      return (o && e.originalPriceValue) || e.priceAndTax;
                    })
                  )
                : Y.input.originalChargeAmount || n.chargeAmount)
                ? t
                : r,
            chargeDisplayAmount: c < t ? l : void 0,
            isFree: !Y.isChargingTerm(n),
          };
        }),
        (Y.isFreeTrial = function (e) {
          return !Y.isChargingTerm(e) && e.hasFreeTrial;
        }),
        s.subscribe("successfullyCreditRedeem", function (e, t) {
          util.log("[CHECKOUT] redeem credit successfully: ", t);
        }),
        s.subscribe("creditRedeemFailed", function (e, t) {
          let n = t && t.message;
          d().terminal(E.trc("checkout.platform", "Cannot redeem credit: ") + n), util.log("%c[CHECKOUT] Cannot redeem credit: ".concat(n), "color: red;");
        }),
        s.subscribe(EVENT_TERMINAL_ERROR, function (e, t) {
          l.disable();
        }),
        s.subscribe("afterSuccessDOI", function (e, t) {
          t && (l.gotoPreviousState(), Y.selectTerm(t.termId, t.offerId));
        }),
        s.subscribe(EVENT_APPLE_PAY_CAN_MAKE_PAYMENTS, function (e, t) {
          Y.flags.applePayCanMakePayments = t.canMakePayments;
        }),
        s.subscribe(EVENT_SETUP_CUSTOM_VARIABLES, function (e, t) {
          (Y.config.customVariables = t), (window.TPParam.params.customVariables = t);
        }),
        s.subscribe(EVENT_SETUP_EVT_FIELDS, function (e, t) {
          k.setExternalVerificationFields && k.setExternalVerificationFields(t);
        });
      var Ce,
        ye = !1,
        Te = !1;
      function Se(e) {
        for (var t = 0; t < Y.input.paymentMethods.length; t++) {
          var n = Y.input.paymentMethods[t];
          if (n.id === e) return n;
        }
      }
      function Pe(e) {
        if (e !== Y.config.user && (angular.copy(e, Y.config.user), Y.params.userToken && m.isPianoIdUserProvider())) {
          var t = T.jwtDecode(Y.params.userToken);
          (Y.config.user.login_timestamp = t.login_timestamp), (Y.config.user.token_expiration = 1e3 * (t.exp - t.iat));
        }
        m.userChanged(e);
      }
      function Ae(e, t, n, r, o) {
        return e && n
          ? Y.config.hasTermForNewCustomerBillingPlan
            ? Y.reload(o, r)
            : (Pe(n),
              i(function () {
                if ((angular.copy(n, Y.config.user), Y.params.userToken && m.isPianoIdUserProvider())) {
                  var e = T.jwtDecode(Y.params.userToken);
                  (Y.config.user.login_timestamp = e.login_timestamp), (Y.config.user.token_expiration = 1e3 * (e.exp - e.iat));
                }
                (Y.flags.needUpdateUserResources = !0), s.fire(EVENT_CHECKOUT_RELOADED);
              }, 0))
          : e && t
          ? i(function () {
              Pe({
                valid: !0,
              }),
                s.fire(EVENT_CHECKOUT_RELOADED);
            }, 0)
          : Y.reload(o, r);
      }
      function we(e) {
        var t = e || {};
        angular.forEach(["userToken", "isRedemption", "startFromInlineCheckout"], function (e) {
          var n = Y.params[e];
          void 0 !== t[e] && (n = t[e]), (t[e] = n);
        });
        var n = Y.getSelectedTerm();
        return (
          (t.termId = (n && n.termId) || t.termId),
          angular.forEach(window.TPParam.params, function (e, n) {
            void 0 === t[n] && (t[n] = e);
          }),
          (t.lang = Ce),
          t
        );
      }
      function _e(e, t) {
        var n = new RegExp("^UA-[0-9a-zA-Z]*-[0-9a-zA-Z]*$").test(e),
          r = new RegExp("([{]?[0-9a-fA-F]{8}-([0-9a-fA-F]{4}-){3}[0-9a-fA-F]{12}[}]?)|([0-9]*\\.[0-9]*)").test(t);
        if (!Y.gaAppended && n && r)
          try {
            var o = document.createElement("script");
            (o.innerHTML = "(function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){(i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)})(window,document,'script','https://www.google-analytics.com/analytics.js','ga');ga('create', '" + e + "', {  'storage': 'none',  'clientId': '" + t + "'});"), document.head.appendChild(o), (Y.gaAppended = !0);
          } catch (e) {}
      }
      return (
        s.subscribe(EVENT_VIEW_ACTIVATED, function (e, t, n) {
          ("offer" === t.name &&
            ye &&
            (Y.softResetDiscount(),
            Y.sendGoogleAnalyticsEvent({
              eventAction: "checkoutRestarted",
              eventLabel: "Checkout restarted",
              params: {
                offerId: Y.config.offerId,
                templateId: Y.config.offerTemplateId,
                templateVariantId: Y.config.offerTemplateVariantId,
              },
            })),
          "offer" === t.name) &&
            ((ye = !0),
            Y.sendGoogleAnalyticsEvent({
              eventAction: "showOffer",
              eventLabel: "Show offer",
              params: {
                offerId: Y.config.offerId,
                templateId: Y.config.offerTemplateId,
                templateVariantId: Y.config.offerTemplateVariantId,
              },
            }),
            Y.params.reactivateSubscriptionId && Y.startSubscriptionReactivation(),
            Y.isUpgradeAuthentication() &&
              (Y.isUserValid() ? c.when() : Y.login())
                .catch(function (e) {
                  throw (Y.close(Y.clearUpgradeSubscriptionId), e);
                })
                .then(Y.startUpgradeAuthentication));
          if (("state1" === t.name && Te && Y.softResetDiscount(), "state1" === t.name && (Te = !0), "externalVerification" !== t.name || Y.hasExternalVerificationGate()))
            if ("state2" === t.name && Y.alreadyPurchased() && !Y.access.inRenewal) l.gotoPreviousState();
            else if ("lockedPromoCode" !== t.name || Y.isPromoCodeAvailable())
              if ("auth" === t.name && Y.isUserValid()) l.gotoPreviousState();
              else if ((!l.isTermSelectorState(t.name) || (n && n.termId)) && "offer" !== t.name) {
                if ("state2" === t.name && n.paySource) {
                  var r = Se(+n.paySource);
                  Y.selectPaymentMethod(r);
                }
              } else Y._unselectTerm();
            else l.gotoPreviousState();
          else
            i(function () {
              O.gotoCheckoutStart(Y);
            }, 0);
        }),
        s.subscribe("pianoIdLoginSuccess", function (e, t) {
          t.extendExpiredAccessEnabled && T.setExtendExpiredAccessCookie(Y.getAid(), t.extendExpiredAccessEnabled);
        }),
        s.subscribe("setExtendExpiredAccess", function (e, t) {
          t && T.setExtendExpiredAccessCookie(Y.getAid(), t);
        }),
        s.subscribe("reloadOffer", function (e, t) {
          var n = l.getActiveState(),
            r = l.isPaymentFormState(n) || "auth" === n || "offer" === n;
          t && t.noNeedStartCheckout && (delete t.noNeedStartCheckout, (r = !1));
          var o = !r && "auth" === n,
            a = (t = we(t)).reloadAfterLogin,
            i = t.preventReloadAfterLogin,
            s = t.user;
          (Y.params.userToken = t.userToken), Ae(a, i, s, o, t);
        }),
        s.subscribe(EVENT_CONFIG_RELOAD, function () {
          var e = !0;
          ("false" !== C.get().autoCompleteRegistrationTerm && !1 !== C.get().autoCompleteRegistrationTerm) || (e = !1), (Y.flags.autoCompleteRegistrationTerm = e);
        }),
        L(function (e) {
          var t = Ce && Ce !== e;
          (Ce = e),
            t && Y.reload(null, !0),
            o.postMessage("langChangedWithinOffer", {
              lang: e,
            });
        }),
        s.subscribe("checkProccessesForClose", function () {
          y("EXTERNAL_EVENT", "close"),
            f.purge({
              alreadyPurchased: Y.access.alreadyPurchased,
              completePayment: Y.flags.termComplete,
            });
        }),
        s.subscribe("startDirectCheckout", function () {
          Y.hasOnlyOneTerm() &&
            i(function () {
              Y.startCheckout(Y.config.terms[0]);
            }, 0);
        }),
        s.subscribe("gaAppended", function (e, t) {
          _e(t.gaAccount, t.clientId);
        }),
        s.subscribe("captcha-v3-enabled-value", function (e, t) {
          var n;
          (n = t.isEnabled), (Y.flags.isCaptchaV3Enabled = n);
        }),
        (Y.createOrder = function (e, t, n, r, o) {
          return N.createOrder(e, t, n, r, o, Y);
        }),
        (Y.isUpgradeOffer = function () {
          return "UPGRADE" === Y.config.checkoutFlowType;
        }),
        (Y.getUpgradeOfferId = function () {
          return Y.params.checkoutFlowId;
        }),
        (Y.isUpgradeAuthentication = function () {
          return !!Y.params.upgradeSubscriptionId;
        }),
        (Y.clearUpgradeSubscriptionId = function () {
          delete Y.params.upgradeSubscriptionId,
            o.postMessage("removeQueryParamByName", {
              paramsToRemove: [UPGRADE_SUB_QUERY_PARAM],
            });
        }),
        (Y.openWindow = function (e, t) {
          return B.openWindow(e, function () {
            Y.enabledCheckout(), t && t();
          });
        }),
        Y
      );
    },
  ]),
  checkoutModule.factory("threeDSecureInfoLogger", [
    "tpHTTP",
    "statsService",
    function (e, t) {
      return {
        logThreeDSecureInfo: function (n) {
          return t.getStatsPayload().then(function (t) {
            return (
              (t.checkoutStats.threeDSecureInfo = {
                data: n,
              }),
              e.post(TPParam.LOG_THREE_D_SECURE_INFO, t)
            );
          });
        },
      };
    },
  ]);
("use strict");
angular.module(
  "ngLocale",
  [],
  [
    "$provide",
    function ($provide) {
      var PLURAL_CATEGORY = {
        ZERO: "zero",
        ONE: "one",
        TWO: "two",
        FEW: "few",
        MANY: "many",
        OTHER: "other",
      };
      $provide.value("$locale", {
        DATETIME_FORMATS: {
          AMPMS: ["vorm.", "nachm."],
          DAY: ["Sonntag", "Montag", "Dienstag", "Mittwoch", "Donnerstag", "Freitag", "Samstag"],
          MONTH: ["Januar", "Februar", "M\u00e4rz", "April", "Mai", "Juni", "Juli", "August", "September", "Oktober", "November", "Dezember"],
          SHORTDAY: ["So.", "Mo.", "Di.", "Mi.", "Do.", "Fr.", "Sa."],
          SHORTMONTH: ["Jan", "Feb", "M\u00e4r", "Apr", "Mai", "Jun", "Jul", "Aug", "Sep", "Okt", "Nov", "Dez"],
          fullDate: "EEEE, d. MMMM y",
          longDate: "d. MMMM y",
          medium: "dd.MM.yyyy HH:mm:ss",
          mediumDate: "dd.MM.yyyy",
          mediumTime: "HH:mm:ss",
          short: "dd.MM.yy HH:mm",
          shortDate: "dd.MM.yy",
          shortTime: "HH:mm",
        },
        NUMBER_FORMATS: {
          CURRENCY_SYM: "\u20ac",
          DECIMAL_SEP: ",",
          GROUP_SEP: ".",
          PATTERNS: [
            {
              gSize: 3,
              lgSize: 3,
              macFrac: 0,
              maxFrac: 3,
              minFrac: 0,
              minInt: 1,
              negPre: "-",
              negSuf: "",
              posPre: "",
              posSuf: "",
            },
            {
              gSize: 3,
              lgSize: 3,
              macFrac: 0,
              maxFrac: 2,
              minFrac: 2,
              minInt: 1,
              negPre: "-",
              negSuf: "\u00a0\u00a4",
              posPre: "",
              posSuf: "\u00a0\u00a4",
            },
          ],
        },
        id: "de-de",
        pluralCat: function (n) {
          if (n == 1) {
            return PLURAL_CATEGORY.ONE;
          }
          return PLURAL_CATEGORY.OTHER;
        },
      });
    },
  ]
);
