var fdpOslo = (function () {
  "use strict";
  function t(e, t) {
    if (!(e instanceof t))
      throw new TypeError("Cannot call a class as a function");
  }
  function o(e, t) {
    for (var o = 0; o < t.length; o++) {
      var a = t[o];
      (a.enumerable = a.enumerable || !1),
        (a.configurable = !0),
        "value" in a && (a.writable = !0),
        Object.defineProperty(e, a.key, a);
    }
  }
  function p(n) {
    for (var e = 1; e < arguments.length; e++) {
      var r = null != arguments[e] ? arguments[e] : {},
        t = Object.keys(r);
      "function" == typeof Object.getOwnPropertySymbols &&
        (t = t.concat(
          Object.getOwnPropertySymbols(r).filter(function (e) {
            return Object.getOwnPropertyDescriptor(r, e).enumerable;
          })
        )),
        t.forEach(function (e) {
          var t, o, a;
          (t = n),
            (a = r[(o = e)]),
            o in t
              ? Object.defineProperty(t, o, {
                  value: a,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
                })
              : (t[o] = a);
        });
    }
    return n;
  }
  var e = {
      pc: "HA8350",
      ep: "HA9300",
      rid: "https://edu.abendblatt.de/?widgetid=205159525&view=login_update_rid&art=213926893&sec=33981",
      updateAjaxUrl:
        "https://edu.abendblatt.de/?widgetid=205159525&view=login_update&art=213926893&sec=33981",
      updateRidAjaxUrl:
        "https://edu.abendblatt.de/?widgetid=205159525&view=login_update_rid&art=213926893&sec=33981",
    },
    f = function () {
      return "localhost" === window.location.hostname
        ? "//uat.abendblatt.de"
        : window.location.origin;
    },
    a = "/secure/sso/register/short/",
    r = "/secure/sso/login/",
    s = "/secure/sso/dispatch/piano-userRef/",
    u = function (e) {
      return "/secure/sso/users/".concat(e, "/password/change");
    },
    n = "/secure/sso/resetPassword",
    i = function () {
      return "localhost" === window.location.hostname ? e : window.fdpConfig;
    },
    c = "/secure/sso/dispatch/paidcontent_oslo-debitcard",
    m = function () {
      var e = window.location.hostname.split(".")[0];
      return "uat" === e || "edu" === e
        ? "https://sandbox.tinypass.com"
        : "https://buy.tinypass.com";
    },
    d = "/secure/sso/dispatch/subscription-type-paidcontent";
  function l() {
    window.fdpOslo.customEventsHook.trigger("onCheckoutComplete");
    var e = window.Cookies.get("fdp_dd_user");
    function t(e) {
      var t = document.cookie.match("(^|;) ?" + e + "=([^;]*)(;|$)");
      return t ? t[2] : null;
    }
    window.dataLayer.push({
      level: "purchase",
      template: "Thank you",
      event: "piano_view",
    });
    var o = t("sso") || null,
      a = t("sso_uie") || null,
      n = window.location;
    if (null !== o && null !== a) {
      var r;
      r =
        -1 !== n.host.indexOf("uat") ||
        -1 !== n.host.indexOf("dev") ||
        -1 !== n.host.indexOf("edu")
          ? "dev"
          : "prod";
      var s = encodeURIComponent(n),
        i = encodeURIComponent(o),
        d = encodeURIComponent(a);
      fetch(
        "https://" +
          r +
          ".s.rtd.aws.funkedigital.de/s/s?url=" +
          s +
          "&sso=" +
          i +
          "&ssouie=" +
          d
      )
        .then(function (e) {
          return e.json();
        })
        .then(function (e) {});
    }
    e && 0 < e.length
      ? jQuery
          .ajax(
            p(
              {},
              {
                type: "POST",
                contentType: "application/json; charset=utf-8",
                xhrFields: {
                  withCredentials: !0,
                },
              },
              {
                data: e,
                url: f() + c,
              }
            )
          )
          .done(function (e) {
            window.Cookies.set("pcst_rid", window.fdpConfig.rid, {
              expires: 28,
              path: "/",
            }),
              window.Cookies.remove("fdp_dd_user");
          })
          .fail(function (e) {})
      : window.Cookies.set("pcst_rid", window.fdpConfig.rid, {
          expires: 28,
          path: "/",
        }),
      window.Cookies.remove("pclld");
  }
  function w(e) {
    window.fdpOslo.customEventsHook.trigger("onCheckoutClose"),
      e && "checkoutCompleted" === e.state && window.location.reload();
  }
  function h() {
    window.fdpOslo.customEventsHook.trigger("onCheckoutExternalEvent");
  }
  function g() {
    window.fdpOslo.customEventsHook.trigger("onCheckoutCancel");
  }
  function y() {
    window.fdpOslo.customEventsHook.trigger("onCheckoutError");
  }
  function v() {
    return window.fdpOslo.customEventsHook.trigger("onLoginRequired"), !1;
  }
  function k() {
    window.fdpOslo.customEventsHook.trigger("onLoginSuccess");
  }
  function C() {
    window.fdpOslo.customEventsHook.trigger("onMeterExpired");
  }
  function O() {
    window.fdpOslo.customEventsHook.trigger("onMeterActive");
  }
  function T() {
    window.fdpOslo.customEventsHook.trigger("onExperienceExecute");
  }
  function E() {
    window.fdpOslo.customEventsHook.trigger("onExperienceExecutionFailed");
  }
  function b() {
    window.fdpOslo.customEventsHook.trigger("onShowTemplate");
  }
  var j = (function () {
    function e() {
      t(this, e), (this.actions = []);
    }
    return (
      o(e.prototype, [
        {
          key: "on",
          value: function (e, t) {
            this.actions[e] ? this.actions[e].push(t) : (this.actions[e] = [t]);
          },
        },
        {
          key: "off",
          value: function (o, a) {
            var n = this;
            this.actions[o] &&
              (a
                ? this.actions[o].forEach(function (e, t) {
                    e === a && n.actions[o].splice(t, 1);
                  })
                : delete this.actions[o]);
          },
        },
        {
          key: "trigger",
          value: function (e, t, o) {
            var a = t || {};
            if (this.actions[e])
              this.actions[e].forEach(function (e) {
                return e(a);
              });
            else {
              if (!o) return;
              o(a);
            }
          },
        },
      ]),
      e
    );
  })();
  function P(e, t, o, a, n) {
    var r = jQuery("#".concat(e));
    r.length
      ? r[0].contentWindow.postMessage(
          {
            piano: {
              success: t,
              message: o,
              object: a,
            },
          },
          "*"
        )
      : n(!0, "No iframe found with the id : ".concat(e));
  }
  function _(e, t) {
    var o = {
      system: {
        0: "System error A",
        1: "System error B",
        3: "System error C",
      },
      login: {
        10001: 101,
        10002: 102,
        10090: 103,
      },
      register: {
        999: 201,
        10001: 202,
        10003: 203,
      },
      resetPassword: {
        10009: 301,
        10014: 302,
      },
    };
    if (Object.prototype.hasOwnProperty.call(o, e))
      try {
        return o[e][t];
      } catch (e) {
        return e;
      }
  }
  var S = function () {
    return (
      i(),
      jQuery
        .ajax({
          type: "POST",
          xhrFields: {
            withCredentials: !0,
          },
          contentType: "application/json; charset=utf-8",
          dataType: "json",
          data: JSON.stringify({}),
          url: f() + d,
        })
        .fail(function (e) {})
    );
  };
  function x(n) {
    var l = !(1 < arguments.length && void 0 !== arguments[1]) || arguments[1],
      e = n.params,
      a = {
        userName: e.userName,
        password: e.password,
        rememberMe: "false",
      },
      u = i();
    new Promise(function (t, o) {
      P(n.tpParams.iframeId, !0, "loader", {
        loading: !0,
      }),
        jQuery
          .ajax({
            type: "POST",
            xhrFields: {
              withCredentials: !0,
            },
            crossDomain: !0,
            contentType: "application/json; charset=utf-8",
            dataType: "json",
            url: f() + r,
            data: JSON.stringify(a),
          })
          .done(function (e) {
            t(e);
          })
          .fail(function (e) {
            o(e.responseJSON),
              P(n.tpParams.iframeId, !0, "loader", {
                loading: !1,
              });
            var t = _("login", e.responseJSON.code);
            P(n.tpParams.iframeId, !1, t);
          });
    })
      .then(function (e) {
        var a, c;
        window.Cookies.set("pcsi", e.userId, {
          expires: 28,
          path: "/",
        }),
          Promise.all([
            ((a = e),
            new Promise(function (t) {
              if (a.evolverCookie) {
                var o = document.createElement("div");
                o.innerHTML = a.evolverCookie;
                var e = o.getElementsByTagName("img");
                e[e.length - 1].onload = function () {
                  document.body.appendChild(o);
                  var e = S();
                  e.done(function (e) {
                    e.success &&
                      1 === e.code &&
                      tp.push(["setCustomVariable", "userStateIsPremium", !0]);
                  }),
                    e.always(function (e) {
                      t(e);
                    });
                };
              } else t();
            })),
            ((c = e),
            new Promise(function (e, t) {
              if (l) {
                var o, a, n;
                jQuery(".header .header-top-button--login").addClass(
                  "state-loading"
                ),
                  window.Cookies.set(
                    "pclld",
                    ((a = (o = new Date()).getDate()),
                    (n = o.getMonth() + 1),
                    (
                      "" +
                      o.getFullYear() +
                      (n < 10 ? "0" + n : n) +
                      (a < 10 ? "0" + a : a)
                    ).toString()),
                    {
                      expires: 28,
                      path: "/",
                    }
                  );
                var r = ""
                    .concat(u.updateAjaxUrl, "&pcsi=")
                    .concat(c.userId, "&rst=")
                    .concat(u.pc),
                  s = ""
                    .concat(u.updateAjaxUrl, "&pcsi=")
                    .concat(c.userId, "&rst=")
                    .concat(u.ep),
                  i = ""
                    .concat(u.updateRidAjaxUrl, "&pcsi=")
                    .concat(c.userId, "&rst=")
                    .concat(u.rid),
                  d =
                    "localhost" === document.location.hostname
                      ? {
                          type: "POST",
                          xhrFields: {
                            withCredentials: !0,
                          },
                          beforeSend: function (e) {
                            e.setRequestHeader(
                              "Authorization",
                              "Basic ".concat(window.btoa("hao:Abendblatt!"))
                            );
                          },
                        }
                      : {};
                void 0 !== u.pc || void 0 !== u.ep || void 0 !== u.rid
                  ? jQuery
                      .when(
                        jQuery
                          .ajax(
                            p(
                              {
                                url: r,
                              },
                              d
                            )
                          )
                          .done(function (e) {
                            window.Cookies.set("pcst_pc", e, {
                              expires: 28,
                              path: "/",
                            });
                          }),
                        jQuery
                          .ajax(
                            p(
                              {
                                url: s,
                              },
                              d
                            )
                          )
                          .done(function (e) {
                            window.Cookies.set("pcst_ep", e, {
                              expires: 28,
                              path: "/",
                            });
                          }),
                        jQuery
                          .ajax(
                            p(
                              {
                                url: i,
                              },
                              d
                            )
                          )
                          .done(function (e) {
                            window.Cookies.set("pcst_rid", e, {
                              expires: 28,
                              path: "/",
                            });
                          })
                      )
                      .then(function () {
                        e();
                      })
                  : e();
              } else e("Coming from registration");
            })),
          ])
            .then(function () {
              P(n.tpParams.iframeId, !0, "loader", {
                loading: !0,
              }),
                jQuery(".header .header-top-button--login").removeClass(
                  "state-loading"
                ),
                "" === window.Cookies.get("pcst_pc") ||
                void 0 === window.Cookies.get("pcst_pc")
                  ? jQuery
                      .ajax({
                        type: "POST",
                        xhrFields: {
                          withCredentials: !0,
                        },
                        url: f() + s,
                      })
                      .done(function (e) {
                        tp.push(["setUserRef", e.userRef]),
                          window.fdpOslo.customEventsHook.trigger(
                            "paywall-signin",
                            e
                          ),
                          window.location.reload();
                      })
                      .fail(function (e) {})
                  : window.location.reload();
            })
            .catch(function (e) {});
      })
      .catch(function (e) {});
  }
  var I = new j();
  function H(e) {
    return {
      params: {
        templateId: e.params.templateid,
        templateVariantId: e.params.templatevariantid,
        offerId: e.params.offerid,
        displayMode: e.params.displaymode,
        containerSelector: e.params.containerselector,
        userName: e.params.email,
        password: e.params.pass,
        filterByTag: e.params.tags,
        filterByVar: e.params.customvars,
        trackingVars: e.params.trackingvars,
      },
      tpParams: e.params.params ? JSON.parse(e.params.params) : null,
      raw: e.params,
    };
  }
  function R(e) {
    I.trigger(e.eventName, H(e), function () {
      I.trigger("default", H(e));
    });
  }
  function Q() {
    window.fdpOslo.customEventsHook.trigger("onInit");
  }
  I.on("paywall-register", function (e) {
    !(function (o) {
      P(o.tpParams.iframeId, !0, "loader", {
        loading: !0,
      });
      var e = o.params,
        t = {
          userName: e.userName,
          password: e.password,
        };
      jQuery
        .ajax({
          type: "POST",
          crossDomain: !0,
          contentType: "application/json;",
          url: f() + a,
          data: JSON.stringify(t),
          xhrFields: {
            withCredentials: !0,
          },
        })
        .done(function () {
          window.fdpOslo.customEventsHook.trigger("paywall-register"),
            window.dataLayer.push({
              event: "eec.registration.complete",
            }),
            x(o, !1);
        })
        .fail(function (e) {
          window.fdpOslo.customEventsHook.trigger("paywall-register", e),
            P(o.tpParams.iframeId, !0, "loader", {
              loading: !1,
            });
          var t = _("register", e.responseJSON.code);
          P(o.tpParams.iframeId, !1, t);
        });
    })(e);
  }),
    I.on("paywall-reload-main-page", function () {
      window.location.reload();
    }),
    I.on("paywall-signin", x),
    I.on("paywall-signout", function (t) {
      jQuery
        .ajax({
          type: "POST",
          crossDomain: !0,
          url: "/secure/sso/logout/",
        })
        .done(function (e) {
          window.fdpOslo.customEventsHook.trigger("paywall-signout"),
            jQuery("#paywall-header-logedin").prop("checked", !1),
            tp.user.logout(),
            tp.push(["setUserRef", ""]),
            D.showTemplateByTagVar(t.params),
            sessionStorage.setItem("fdp-paywall-fa", "false");
          try {
            logout();
          } catch (e) {
            window.Cookies.remove("pclld"),
              window.Cookies.remove("pcsi"),
              window.Cookies.remove("pcst"),
              window.Cookies.remove("pcst_pc"),
              window.Cookies.remove("pcst_ep"),
              window.Cookies.remove("pcst_rid"),
              window.location.reload();
          }
        })
        .fail(function (e) {});
    }),
    I.on("paywall-myaccount", function (e) {
      e.params.templateId = "fdpExternalEvent";
      var t = D.showTemplateConfig(e.params);
      tp.myaccount.show(t);
    }),
    I.on("paywall-password-forgotten", function (a) {
      var e = {
        userName: a.params.userName,
      };
      i(),
        new Promise(function (t, o) {
          P(a.tpParams.iframeId, !0, "loader", {
            loading: !0,
          }),
            jQuery
              .ajax({
                type: "POST",
                xhrFields: {
                  withCredentials: !0,
                },
                crossDomain: !0,
                url: f() + n,
                data: e,
              })
              .done(function (e) {
                t(e);
              })
              .fail(function (e) {
                o(e.responseJSON),
                  P(a.tpParams.iframeId, !0, "loader", {
                    loading: !1,
                  });
                var t = _("resetPassword", e.responseJSON.code);
                P(a.tpParams.iframeId, !1, t);
              });
        }).then(function (e) {
          P(a.tpParams.iframeId, !0, "loader", {
            loading: !0,
          }),
            tp.push([
              "setCustomVariable",
              "tp_password_reset_success",
              e.success,
            ]),
            tp.experience.execute();
        });
    }),
    I.on("default", function (e) {
      var t = e.params;
      (t.filterByTag || t.filterByVar) && D.showTemplateByTagVar(t),
        t.templateId &&
          0 < t.templateId.length &&
          (t.offerId && 0 < t.offerId.length
            ? D.showOffer(D.showTemplateConfig(t))
            : D.showTemplate(D.showTemplateConfig(t))),
        t.trackingVars && D.googleTracking(t);
    });
  var D = {
      onCheckoutComplete: l,
      onCheckoutClose: w,
      onCheckoutExternalEvent: h,
      onCheckoutCancel: g,
      onCheckoutError: y,
      onLoginRequired: v,
      onLoginSuccess: k,
      onMeterExpired: C,
      onMeterActive: O,
      onExperienceExecute: T,
      onExperienceExecutionFailed: E,
      onShowTemplate: b,
      customEvent: R,
      debugTemplate: function () {
        try {
          var e = new URLSearchParams(window.location.search).entries(),
            t = {
              templateId: void 0,
              displayMode: void 0,
              containerSelector: void 0,
            };
          return (
            ((o = e),
            (function (e) {
              if (Array.isArray(e)) {
                for (var t = 0, o = new Array(e.length); t < e.length; t++)
                  o[t] = e[t];
                return o;
              }
            })(o) ||
              (function (e) {
                if (
                  Symbol.iterator in Object(e) ||
                  "[object Arguments]" === Object.prototype.toString.call(e)
                )
                  return Array.from(e);
              })(o) ||
              (function () {
                throw new TypeError(
                  "Invalid attempt to spread non-iterable instance"
                );
              })()).forEach(function (e) {
              switch (e[0]) {
                case "cid":
                  t.containerSelector = "#".concat(e[1]);
                  break;
                case "tid":
                  t.templateId = e[1];
                  break;
                case "dm":
                  t.displayMode = e[1];
              }
            }),
            t
          );
        } catch (e) {
          return !1;
        }
        var o;
      },
      showTemplateByTagVar: function (e) {
        var t = e.filterByTag,
          o = e.filterByVar,
          a = t,
          n = !!o && o.replace(/\s/g, "").split(",");
        tp.push(["setTags", a]),
          Object.keys(tp.customVariables).forEach(function (e) {
            (e.match(/tp_/) || "default" === e) &&
              tp.push(["setCustomVariable", e, !1]);
          }),
          n
            ? n.forEach(function (e) {
                tp.push(["setCustomVariable", e, !0]);
              })
            : tp.push(["setCustomVariable", "default", !0]),
          tp.experience.execute();
      },
      showTemplateConfig: function (e) {
        var t = e.templateId,
          o = e.templateVariantId,
          a = e.offerId,
          n = e.containerSelector,
          r = e.displayMode;
        if (!t && !a) throw new Error("There is no template ID defined");
        return {
          offerId: a || "fakeOfferID",
          displayMode: "fdpmodal" === r ? "inline" : r || "inline",
          templateId: t,
          templateVariantId: o,
          containerSelector: n || "#paywall-container",
        };
      },
      sendPostMessageToPiano: P,
      googleTracking: function (e) {
        var t = e.trackingVars.replace(/'/g, '"'),
          o = JSON.parse("{" + t + "}");
        dataLayer.push(o);
      },
      registerTpEventHandlers: function () {
        tp.push(["addHandler", "init", Q]),
          tp.push(["addHandler", "checkoutComplete", l]),
          tp.push(["addHandler", "checkoutClose", w]),
          tp.push(["addHandler", "checkoutCustomEvent", h]),
          tp.push(["addHandler", "checkoutCancel", g]),
          tp.push(["addHandler", "checkoutError", y]),
          tp.push(["addHandler", "loginRequired", v]),
          tp.push(["addHandler", "loginSuccess", k]),
          tp.push(["addHandler", "meterExpired", C]),
          tp.push(["addHandler", "meterActive", O]),
          tp.push(["addHandler", "experienceExecute", T]),
          tp.push(["addHandler", "experienceExecutionFailed", E]),
          tp.push(["addHandler", "showTemplate", b]),
          tp.push(["addHandler", "customEvent", R]);
      },
      checkUserStatus: S,
      setupFdpmodal: function () {
        var t = this,
          s = {},
          i = function (e) {
            R({
              eventName: e.dataset.eventname,
              params: e.dataset,
            });
          },
          o = function (e) {
            var t, o, a, n, r;
            s[e.dataset.fdpmodalTarget]
              ? (i(e), s[e.dataset.fdpmodalTarget].open())
              : ((a = (o = (function (e) {
                  var t = document.createElement("div"),
                    o = e;
                  t.setAttribute("data-remodal-id", o.dataset.fdpmodalTarget),
                    t.classList.add("paywall-wrapper"),
                    o.dataset.containerselector ||
                      (o.dataset.containerselector = "#".concat(
                        Math.random()
                          .toString(36)
                          .replace(/[^a-z]+/g, "")
                          .substr(0, 10)
                      ));
                  var a = "";
                  return (
                    "my_logout_modal_mobile" === o.dataset.fdpmodalTarget &&
                      (a =
                        '<div id="header_profile--logout" class="js-tploader" data-eventname="paywall-signout" data-fdpmodal-target="my_logout_modal" data-remodal-options="hashTracking: false, closeOnOutsideClick: true, appendTo: #paywall-user, modifier: paywall-user-header" data-tags="header" data-customvars="tp_header_logout" data-containerselector="#header_logout_container" data-displaymode="fdpmodal">Abmelden</div>'),
                    (t.innerHTML =
                      '\n      <button data-remodal-action="close" class="remodal-close"></button>\n      <div class="remodal_content" id="'
                        .concat(
                          o.dataset.containerselector.slice(1),
                          '"></div>\n      '
                        )
                        .concat(a)),
                    {
                      remodalTarget: t,
                      remodalTrigger: o,
                    }
                  );
                })(e)).remodalTarget),
                (n = o.remodalTrigger),
                (r = jQuery(a).remodal(
                  (t = n).dataset.remodalOptions
                    ? t.dataset.remodalOptions
                        .replace(/\s/g, "")
                        .split(",")
                        .reduce(function (e, t) {
                          var o = t.split(":");
                          return (
                            (e[o[0]] =
                              "hashTracking" === o[0] ? "true" === o[1] : o[1]),
                            e
                          );
                        }, {})
                    : ""
                )),
                (s[n.dataset.fdpmodalTarget] = r),
                s[n.dataset.fdpmodalTarget].open(),
                i(n));
          };
        jQuery(document).on("click", ".js-tploader", function (e) {
          "fdpmodal" === e.currentTarget.dataset.displaymode
            ? o(e.currentTarget)
            : i(e.currentTarget);
        }),
          jQuery(document).on("click", ".remodal-overlay", function () {
            for (var e = 0; e < jQuery.remodal.lookup.length; e += 1)
              if ("opened" === jQuery.remodal.lookup[e].state) {
                jQuery.remodal.lookup[e].$modal.remodal().close();
                break;
              }
          }),
          jQuery(document).on("closing", ".remodal", function () {
            var e = jQuery(t).find(".remodal_content,.remodal-content");
            0 < e.length && e.html("").css("height", ""),
              jQuery(".paywall-header-buttons").attr("checked", !1);
          }),
          jQuery(document).on("opening", ".remodal", function () {
            window.setTimeout(
              jQuery.remodal.lookup.forEach(function (e) {
                "opening" === e.state && (e.state = "opened");
              }),
              100
            );
          });
      },
      showTemplate: function (e) {
        tp.push([
          "init",
          function () {
            tp.template.show(e);
          },
        ]);
      },
      showOffer: function (e) {
        tp.push([
          "init",
          function () {
            tp.offer.show(e);
          },
        ]);
      },
    },
    N = D;
  return (
    jQuery(function () {
      var e = jQuery("label.header-top-button--login");
      window.tp.push([
        "init",
        function () {
          new RegExp("\\b".concat("login=true", "\\b")).test(
            window.location.search
          ) &&
            !tp.user.isUserValid() &&
            e.trigger("click");
        },
      ]);
    }),
    window.tp.push([
      "addHandler",
      "showOffer",
      function () {
        window.tp.user.isUserValid() &&
          N.checkUserStatus().done(function (e) {
            e.success &&
              1 === e.code &&
              tp.push(["setCustomVariable", "userStateIsPremium", !0]);
          });
      },
    ]),
    new (function e() {
      t(this, e),
        (this.customEventsHook = new j()),
        (this.test = !1),
        (function () {
          if (!window.location.origin) {
            var e = window.location.port
              ? ":".concat(window.location.port)
              : "";
            window.location.origin = ""
              .concat(window.location.protocol, "//")
              .concat(window.location.hostname)
              .concat(e);
          }
          var t = window.Cookies.get("fdp_dd_user");
          t && 0 < t.length && window.Cookies.remove("fdp_dd_user"),
            N.registerTpEventHandlers();
          var o = N.debugTemplate();
          if (o && o.templateId) {
            var a = N.showTemplateConfig(o);
            N.showTemplate(a);
          }
          N.setupFdpmodal(),
            window.addEventListener(
              "message",
              function (e) {
                if (
                  e.origin === m() &&
                  e.data.fdp &&
                  "FDP_PASSWORD_CHANGE" === e.data.fdp.message &&
                  e.data.fdp.data.isChangingPassword
                ) {
                  var t = [],
                    o = e.data.fdp.data,
                    a = o.currentPassword,
                    n = o.newPassword,
                    r = o.newPasswordConfirmation,
                    s = o.iframeId,
                    i = o.uid;
                  if (
                    ((a && "" !== a.trim()) ||
                      t.push({
                        msg: "Das aktuelle Passwort darf nicht leer sein.",
                        key: "FDP_CUSTOM_ERROR",
                      }),
                    (n && "" !== n.trim()) ||
                      t.push({
                        msg: "Das neue Passwort darf nicht leer sein.",
                        key: "FDP_CUSTOM_ERROR",
                      }),
                    (r && "" !== r.trim()) ||
                      t.push({
                        msg: "Das Bestätigungspasswort darf nicht leer sein.",
                        key: "FDP_CUSTOM_ERROR",
                      }),
                    0 < t.length)
                  )
                    P(s, !1, "error", t);
                  else if (
                    (r.trim() !== n.trim() &&
                      t.push({
                        msg: "Die neuen Passwörter stimmen nicht überein.",
                        key: "FDP_CUSTOM_ERROR",
                      }),
                    a.trim() === n.trim() &&
                      t.push({
                        msg: "Neues und aktuelles Passwort müssen sich unterscheiden!",
                        key: "FDP_CUSTOM_ERROR",
                      }),
                    a.trim().length < 6 &&
                      t.push({
                        msg: "Das aktuelle Passwort hat mindestens 6 Zeichen.",
                        key: "FDP_CUSTOM_ERROR",
                      }),
                    n.trim().length < 6 &&
                      t.push({
                        msg: "Das neue Passwort muss mindestens 6 Zeichen haben.",
                        key: "FDP_CUSTOM_ERROR",
                      }),
                    0 < t.length)
                  )
                    P(s, !1, "error", t);
                  else {
                    var d, c, l;
                    (c = {
                      data: JSON.stringify({
                        newPassword: n,
                        newPasswordConfirmation: r,
                        currentPassword: a,
                      }),
                      contentType: "application/json; charset=utf-8",
                      type: "POST",
                      url: f() + u(i),
                      xhrFields: {
                        withCredentials: !0,
                      },
                      crossDomain: !0,
                    }),
                      (l = []),
                      ((d = c), jQuery.ajax(d).fail(function (e) {}))
                        .done(function (e) {
                          P(s, !0, "FDP_NOTIFICATION__PASS_CHANGE_SUCCESS", e);
                        })
                        .fail(function (e) {
                          10002 === e.responseJSON.code &&
                            l.push({
                              msg: "Das aktuelle Passwort ist falsch.",
                              key: "FDP_CUSTOM_ERROR",
                            }),
                            P(s, !1, "error", l);
                        });
                  }
                }
              },
              !1
            );
        })();
    })()
  );
})();
