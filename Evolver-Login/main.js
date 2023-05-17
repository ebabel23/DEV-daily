/*!
 *
 * @preserve Funke Digital GmbH - JavaScript library
 *
 * Copyright 2019, Funke Digital GmbH
 * http://www.funkedigital.de/
 *
 */
!(function (f, y, v, d) {
  var c = {},
    R = function (e, t, i) {
      return t && E(e.prototype, t), i && E(e, i), e;
    };
  function E(e, t) {
    for (var i = 0; i < t.length; i++) {
      var o = t[i];
      (o.enumerable = o.enumerable || !1),
        (o.configurable = !0),
        "value" in o && (o.writable = !0),
        Object.defineProperty(e, o.key, o);
    }
  }
  var s,
    D,
    H,
    o =
      "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
        ? function (e) {
            return typeof e;
          }
        : function (e) {
            return e &&
              "function" == typeof Symbol &&
              e.constructor === Symbol &&
              e !== Symbol.prototype
              ? "symbol"
              : typeof e;
          };
  function U(e, t) {
    if (!(e instanceof t))
      throw new TypeError("Cannot call a class as a function");
  }
  function M(t, e) {
    var i = new XMLHttpRequest();
    if (
      ("withCredentials" in i
        ? i.open("GET", e, !0)
        : "undefined" != typeof XDomainRequest
        ? (i = new XDomainRequest()).open("GET", e)
        : (i = null),
      !i)
    )
      throw new Error("ad-longtail: CORS not supported");
    (i.onload = function () {
      var e;
      (e = i.responseText), jQuery(t).find(".ad--marker-inner").append(e);
    }),
      (i.onerror = function () {
        throw new Error("ad-longtail: error performing XHR request");
      }),
      i.send();
  }
  function z(e) {
    y.adBlockActive = e;
  }
  function W(e, t) {
    (this.rootNode = e), (this.opts = t), this.init(t);
  }
  function O(e) {
    var t = this;
    (this.rootNode = e),
      f(e).on("click", ".calendar__control", function (e) {
        e.preventDefault();
        e = f(this).data("ajax-url");
        t.replaceCalendar(t.rootNode, e);
      });
  }
  function t(e, t) {
    (this.rootNode = e),
      (this.$rootNode = jQuery(this.rootNode)),
      (this.staticHeight = 0),
      (this.ajax = t.ajax),
      (this.autoplay = t.autoplay),
      (this.autoplayDuration = t.autoplayDuration),
      (this.centeredSlides = t.centeredSlides),
      (this.cube = t.cube),
      (this.countPrefix = t.countPrefix || ""),
      (this.countSplitter = t.countSplitter || "/"),
      (this.direction = t.direction),
      (this.loop = t.loop),
      (this.mousewheelControl = t.mousewheelControl),
      (this.paginationType = t.paginationType),
      (this.pageCount = t.pageCount),
      (this.slidesPerView = t.slidesPerView),
      (this.spaceBetween = t.spaceBetween),
      (this.start = t.start),
      (this.initialSlide = t.initialSlide),
      (this.slidesPerColumn = t.slidesPerColumn),
      (this.view = t.view),
      (this.watchSlidesVisibility = !0),
      (this.paginationOnImageBottom = t.paginationOnImageBottom),
      (this.dfpAdHandlingEnabled =
        "boolean" != typeof t.dfpAdHandlingEnabled || t.dfpAdHandlingEnabled),
      (this.dfpGalleryAds = t.dfpGalleryAds),
      (this.dfpGlobalAdRefresh = t.dfpGlobalAdRefresh),
      (this.outbrainRecommendationsOnendEnabled =
        t.outbrainRecommendationsOnendEnabled),
      (this.preloadImages = t.preloadImages || !1),
      (this.updateOnImagesReady = t.updateOnImagesReady || !1),
      (this.galleryTitle = t.galleryTitle || !1),
      (this.minImageHeight = 200),
      1 !== this.slidesPerView
        ? (this.autoHeight = !1)
        : (this.autoHeight = !0),
      !0 !== this.autoplay && (this.autoplayDuration = 0),
      this.setupSwiper(),
      (this.count = 2);
  }
  function e() {
    jQuery(".carousel-ajax").each(function () {
      var e = jQuery(this);
      e.hasClass("swiper-loaded") || e.carouselAjax(e.data("options"));
    });
  }
  function i(e, t) {
    (this.rootNode = e),
      (this.index = 0),
      (this.length = jQuery(".carousel__item", this.rootNode).length),
      (this.$list = jQuery(".carousel__list", this.rootNode)),
      (this.$items = jQuery(".carousel__item", this.rootNode)),
      (this.$index = jQuery(".carousel__index", this.rootNode)),
      (this.isTripple =
        "tripple" === jQuery(this.rootNode).data("carousel-type")),
      (this.enableTracking = t.enableTracking),
      (this.afterRotateCallback = t.afterRotateCallback),
      this.resize(),
      this.orderElements(),
      this.resizePortraitImages(),
      this.bindEvents();
  }
  function F(e, t) {
    var i = s(v);
    i.data("CmpConsentReady")
      ? i.trigger("CmpConsentChanged", t)
      : (i.data("CmpConsentReady", !0), i.trigger("CmpConsentReady", t));
  }
  jQuery(function () {
    jQuery.fn.cmpHelper.onConsented(1016, function () {
      Array.prototype.slice
        .call(v.getElementsByClassName("ad--longtail"))
        .forEach(function (e) {
          M(e, e.dataset.longtailUrl);
        });
    });
  }),
    f(function () {
      jQuery.fn.cmpHelper.onConsented(164, function () {
        var e, t;
        (t = v.getElementsByClassName("OUTBRAIN")).length &&
          ((t =
            "//widgets.outbrain.com/outbrain.js" +
            ((t = t[0].dataset.dsId || "").length ? "?i=" + String(t) : "")),
          ((e = v.createElement("script")).type = "text/javascript"),
          (e.async = !0),
          (e.src = t),
          v.body.appendChild(e));
      });
    }),
    jQuery(function () {
      var e = v.createElement("div");
      (e.innerHTML = "&nbsp;"),
        (e.className = "adsbox"),
        v.body.appendChild(e),
        y.setTimeout(function () {
          0 === e.offsetHeight ? z(!0) : z(!1), e.remove();
        }, 100);
    }),
    (jQuery.fn.ajaxComments = function (a, e) {
      return this.each(function () {
        var e,
          t = this,
          o = jQuery(this),
          i = jQuery("form", this),
          n = jQuery("#community-comments-list"),
          s = jQuery("a.submit", this),
          r = jQuery.extend(
            {
              before: null,
              context: v.body,
              fail: null,
              done: null,
              type: "POST",
              url: "",
              reCaptcha: o.find(".g-recaptcha").length,
            },
            a
          );
        if (0 < o.find(".g-recaptcha").length)
          return (
            (e = jQuery(this).serializeArray()),
            "function" == typeof r.before && (e = r.before.call(this, e)),
            jQuery
              .ajax({
                cache: !1,
                context: r.context,
                data: e,
                dataType: "HTML",
                type: r.type,
                url: r.url,
              })
              .done(function (e, t, i) {
                jQuery("<div>")
                  .append(jQuery.parseHTML(e))
                  .find(".comment_success").length
                  ? o.hasClass("comment__response-form")
                    ? (o
                        .nextAll(".comment__answers.answers")
                        .find("ul")
                        .prepend(e)
                        .show(),
                      o.hide(),
                      o.trigger("reset"),
                      o.find(".error.comment_error").remove())
                    : (n.prepend(e),
                      o.html(""),
                      jQuery(y).scrollTop(parseInt(o.offset().top) - 200))
                  : (o.find(".error.comment_error").remove(), o.prepend(e)),
                  "function" == typeof r.done && r.done.call();
              })
              .fail(function (e, t, i) {
                "function" == typeof r.fail && r.fail.call();
              }),
            !1
          );
        o.on("submit", "form", function () {
          var e = jQuery(this).serializeArray();
          return (
            "function" == typeof r.before && (e = r.before.call(this, e)),
            jQuery
              .ajax({
                cache: !1,
                context: r.context,
                data: e,
                type: r.type,
                url: r.url,
              })
              .done(function (e, t, i) {
                o.html(e), "function" == typeof r.done && r.done.call();
              })
              .fail(function (e, t, i) {
                "function" == typeof r.fail && r.fail.call();
              }),
            !1
          );
        }),
          r.reCaptcha
            ? i.trigger("submit")
            : (s.on("click", function () {
                return jQuery(this).closest("form").trigger("submit"), !1;
              }),
              jQuery("input[type=submit]", this).on("click", function () {
                jQuery("input[name=action]", t).val(jQuery(this).attr("name"));
              }));
      });
    }),
    (f.fn.ajaxForm = function (s) {
      function r(e, t, i) {
        !f("<div>").append(f.parseHTML(e)).find("input[name='success']")
          .length && t.find(".form-result").length
          ? t.find(".form-result").html(e)
          : (t.html(e), f(y).scrollTop(parseInt(t.offset().top) - 200)),
          "function" == typeof i.done && i.done.call();
      }
      return this.each(function () {
        var e = this,
          o = f(this),
          t = f("form", this),
          i = f("a.submit", this),
          n = f.extend(
            {
              before: null,
              context: v.body,
              fail: null,
              done: null,
              type: "POST",
              url: "",
              reCaptcha: t.find(".g-recaptcha").length,
            },
            s
          );
        0 < t.find(".g-recaptcha").length
          ? t.off("submit").on("submit", function () {
              var e = f(this).serializeArray();
              return (
                "function" == typeof n.before && (e = n.before.call(this, e)),
                f
                  .ajax({
                    cache: !1,
                    context: n.context,
                    data: e,
                    dataType: "HTML",
                    type: n.type,
                    url: n.url,
                  })
                  .done(function (e, t, i) {
                    r(e, o, n);
                  })
                  .fail(function (e, t, i) {
                    "function" == typeof n.fail && n.fail.call();
                  }),
                !1
              );
            })
          : o.on("submit", "form", function () {
              var e = f(this).serializeArray();
              return (
                "function" == typeof n.before && (e = n.before.call(this, e)),
                f
                  .ajax({
                    cache: !1,
                    context: n.context,
                    data: e,
                    type: n.type,
                    url: n.url,
                  })
                  .done(function (e, t, i) {
                    r(e, o, n);
                  })
                  .fail(function (e, t, i) {
                    "function" == typeof n.fail && n.fail.call();
                  }),
                !1
              );
            }),
          n.reCaptcha
            ? n.submit && t.trigger("submit")
            : (i.on("click", function () {
                return f(this).closest("form").trigger("submit"), !1;
              }),
              f("input[type=submit]", this).on("click", function () {
                f("input[name=action]", e).val(f(this).attr("name"));
              }));
      });
    }),
    (f.fn.ajaxLink = function (e) {
      return this.each(function () {
        var n = this,
          s = f.extend(
            {
              before: null,
              context: v.body,
              data: null,
              fail: null,
              done: null,
              target: null,
              type: "POST",
              url: f(this).data("ajax-url") || f(this).attr("href"),
            },
            e
          );
        f(this).on("click", function () {
          var e = s.data;
          return (
            e || "POST" !== s.type || (e = "nocache=" + 1e5 * Math.random()),
            "function" == typeof s.before && (e = s.before.call(this, e)),
            f
              .ajax({
                cache: !1,
                context: s.context,
                data: e,
                type: s.type,
                url: s.url,
              })
              .done(function (e, t, i) {
                var o = f(n).closest(".lightbox");
                o.length && o.trigger("gallery_slide_changed"),
                  f(s.target).html(e),
                  "function" == typeof s.done && s.done.call(),
                  y.setTimeout(function () {
                    f(s.target).trigger("center-ads");
                  }, 500);
              })
              .fail(function (e, t, i) {
                "function" == typeof s.fail && s.fail.call();
              }),
            !1
          );
        });
      });
    }),
    (f.fn.ajaxRefresh = function (i) {
      return this.each(function () {
        var e = this,
          t = f.extend(
            {
              before: null,
              context: v.body,
              data: null,
              fail: null,
              initial: !0,
              interval: null,
              refresh: !0,
              done: null,
              type: "GET",
              url: null,
            },
            i
          );
        t.initial && (f(e).ajaxUpdate(t), (t.initial = !1)),
          t.refresh &&
            y.setTimeout(function () {
              f(e).ajaxUpdate(t).ajaxRefresh(t);
            }, t.interval);
      });
    }),
    (f.fn.ajaxUpdate = function (o) {
      return this.each(function () {
        var t = this,
          i = f.extend(
            {
              before: null,
              context: v.body,
              data: null,
              fail: null,
              done: null,
              type: "GET",
              url: null,
            },
            o
          ),
          e = i.data;
        e || "POST" !== i.type || (e = "nocache=" + 1e5 * Math.random()),
          "function" == typeof i.before && (e = i.before.call(this, e)),
          f
            .ajax({
              cache: !1,
              context: i.context,
              data: e,
              type: i.type,
              url: i.url,
            })
            .done(function (e) {
              f(t).html(e), "function" == typeof i.done && i.done.call();
            })
            .fail(function () {
              "function" == typeof i.fail && i.fail.call();
            });
      });
    }),
    f.ajaxSetup({ cache: "false", headers: { "cache-control": "no-cache" } }),
    (W.prototype.init = function (e) {
      var d = this,
        c = jQuery.extend(
          {
            timetoredirect: "2000",
            previewOpacity: "0.5",
            previewCustomClass: "custom-article_preview",
            disableRedirect: !1,
            showButtonUpscroll: !1,
            fadeOutDelay: "2500",
          },
          e
        ),
        h = 0,
        u = null;
      jQuery("." + String(c.previewCustomClass))
        .css({ opacity: c.previewOpacity })
        .addClass("back-to-home_overlay"),
        y.addEventListener(
          "scroll",
          function (e) {
            var t = this.scrollY,
              i = jQuery(v).outerHeight(),
              o = jQuery(y).innerHeight(),
              n = jQuery("." + String(c.previewCustomClass)).position(),
              s = i - n.top,
              r = Math.abs(i - s - (t + o)) / (s / 360),
              a = jQuery(d.rootNode).find(".radial-progress"),
              l = jQuery(d.rootNode).find(".back-to-home_link").attr("href");
            n.top +
              jQuery("." + String(c.previewCustomClass)).height() +
              a.height() / 2 <
              t + o &&
              768 < jQuery(y).width() &&
              (a.hasClass("no-fix") ||
                a.addClass("no-fix").css({
                  top:
                    n.top +
                    jQuery("." + String(c.previewCustomClass)).height() / 2 -
                    a.height() / 2 +
                    "px",
                })),
              !1 === c.disableRedirect
                ? (i - s < t + o
                    ? (jQuery(d.rootNode).removeClass("back-to-home_hidden"),
                      a.find(".fix").css({ transform: "rotate(" + r + "deg)" }),
                      r < 180
                        ? (a.find(".full").css({ transform: "rotate(0deg)" }),
                          a
                            .find(".full")
                            .find(".fill")
                            .css({ transform: "rotate(" + r + "deg)" }),
                          a.find(".half").removeAttr("style"),
                          a.find(".half").find(".fill").removeAttr("style"))
                        : (a
                            .find(".full")
                            .find(".fill")
                            .css({ transform: "rotate(180deg)" }),
                          a.find(".half").css({ transform: "rotate(180deg)" }),
                          a
                            .find(".half")
                            .find(".fill")
                            .css({
                              transform: "rotate(" + (r - 180) + "deg)",
                            })))
                    : (a.find(".full").removeAttr("style"),
                      a.find(".half").removeAttr("style"),
                      a.find(".fill").removeAttr("style"),
                      jQuery(d.rootNode).addClass("back-to-home_hidden"),
                      !0 === c.showButtonUpscroll &&
                        (t < h
                          ? (jQuery(d.rootNode)
                              .addClass("back-to-home_disableRedirect")
                              .removeClass("back-to-home_hidden"),
                            clearTimeout(u),
                            (u = setTimeout(function () {
                              jQuery(d.rootNode)
                                .removeClass("back-to-home_disableRedirect")
                                .addClass("back-to-home_hidden");
                            }, c.fadeOutDelay)))
                          : jQuery(d.rootNode).removeClass(
                              "back-to-home_disableRedirect"
                            ),
                        (h = t))),
                  i - 5 < t + o
                    ? (jQuery(d.rootNode).addClass("back-to-home_redirect"),
                      a.find(".full").removeAttr("style"),
                      a.find(".half").removeAttr("style"),
                      a.find(".full").find(".fill").removeAttr("style"),
                      a.find(".half").find(".fill").removeAttr("style"),
                      setTimeout(function () {
                        jQuery(d.rootNode).hasClass("back-to-home_redirect") &&
                          (y.dataLayer.push({ event: "backToHome" }),
                          (y.location.href = l));
                      }, c.timetoredirect))
                    : jQuery(d.rootNode).removeClass("back-to-home_redirect"))
                : (i - s < t + o
                    ? jQuery(d.rootNode)
                        .removeClass("back-to-home_hidden")
                        .addClass("back-to-home_disableRedirect")
                    : (a.find(".full").removeAttr("style"),
                      a.find(".half").removeAttr("style"),
                      a.find(".fill").removeAttr("style"),
                      jQuery(d.rootNode).addClass("back-to-home_hidden")),
                  !0 === c.showButtonUpscroll &&
                    (t < h
                      ? (jQuery(d.rootNode)
                          .addClass("back-to-home_disableRedirect")
                          .removeClass("back-to-home_hidden"),
                        clearTimeout(u),
                        (u = setTimeout(function () {
                          jQuery(d.rootNode)
                            .removeClass("back-to-home_disableRedirect")
                            .addClass("back-to-home_hidden");
                        }, c.fadeOutDelay)))
                      : (jQuery(d.rootNode).removeClass(
                          "back-to-home_disableRedirect"
                        ),
                        !0 === c.disableRedirect &&
                          jQuery(d.rootNode).addClass(
                            "back-to-home_disableRedirect"
                          )),
                    (h = t)));
          },
          !1
        );
    }),
    (jQuery.fn.backToHome = function (e) {
      return this.each(function () {
        new W(this, e);
      });
    }),
    jQuery(y).on("load", function (e) {
      jQuery(y).width() < 767 &&
        jQuery(y).on("scroll touchend", function () {
          var e = jQuery(".header");
          jQuery(".teaser--breaking-news").length &&
            (jQuery(y).scrollTop() > e.outerHeight()
              ? e.addClass("fixed")
              : e.removeClass("fixed"));
        });
    }),
    (c.BreakingNews = {}),
    (c.BreakingNews.Model = function (e) {
      var o = { cookieName: "bnc", cookieTtl: 2 };
      (this.newsIsDisabled = function (e, t) {
        var i = y.readCookie(o.cookieName);
        return (
          null != i && -1 < i.indexOf("|" + String(this.getArticleMarker(e, t)))
        );
      }),
        (this.storeNewsAsDisabled = function (e, t) {
          var i = y.readCookie(o.cookieName);
          y.createCookie(
            o.cookieName,
            String(i) + "|" + String(this.getArticleMarker(e, t)),
            o.cookieTtl
          );
        }),
        (this.getWidgetUpdateUri = function () {
          return o.widgetUrl;
        }),
        (this.getArticleMarker = function (e, t) {
          return e !== d || t !== d
            ? String(e) + "-" + String(new Date(t).getTime())
            : "-";
        }),
        (o = f.extend(o, e)),
        null === y.readCookie(o.cookieName) &&
          y.createCookie(o.cookieName, "", o.cookieTtl);
    }),
    (c.BreakingNews.View = function (e, t) {
      var i = {
          closeButtonCssClass: ".icon-close",
          articleLinkCssClass: ".breaking-news__article-link",
          menuContainerCssClass: ".header",
          mainContainerCssClass: ".main",
          pageContainerCssClass: ".page",
          breakingNewsInnContainerCssClass: ".breaking-news__inner-container",
          breakingNewsAnimateInCssClass: "breaking-news-animate-in",
          breakingNewsAnimateOutCssClass: "breaking-news-animate-out",
          breakingNewsAnimateInDuration: 500,
          breakingNewsAnimateOutDuration: 500,
          view: "",
        },
        o = null,
        n = null,
        s = null,
        r = null,
        a = !1;
      (this.update = function (e) {
        n.html(e);
      }),
        (this.getCurrentContent = function () {
          return n.html();
        }),
        (this.hideContainer = function () {
          o.removeClass(i.breakingNewsAnimateInCssClass), o.hide(), (a = !1);
        }),
        (this.showContainer = function () {
          "mobile" === i.view || r <= 1024
            ? o.fadeIn(200)
            : (o.show(), o.addClass(i.breakingNewsAnimateInCssClass)),
            (a = !0);
        }),
        (this.animateContainerOut = function () {
          o.removeClass(i.breakingNewsAnimateInCssClass),
            o.addClass(i.breakingNewsAnimateOutCssClass),
            (a = !1),
            setTimeout(function () {
              o.hide(), o.removeClass(i.breakingNewsAnimateOutCssClass);
            }, i.breakingNewsAnimateOutDuration);
        }),
        (this.getCurrentArticle = function () {
          return o.find("[data-art-id][data-art-lmd]").first();
        }),
        (this.getCloseButton = function () {
          return s;
        }),
        (this.getArticleLink = function () {
          return o.find(i.articleLinkCssClass);
        }),
        (this.isVisible = function () {
          return !0 === a;
        }),
        (this.getContainer = function () {
          return o;
        }),
        (this.getInnerContainer = function () {
          return n;
        }),
        (this.getOptions = function () {
          return i;
        }),
        (e = e),
        (i = f.extend(i, t)),
        (n = (o = e).find(i.breakingNewsInnContainerCssClass)),
        (s = e.find(i.closeButtonCssClass)),
        f(i.menuContainerCssClass),
        f(i.mainContainerCssClass),
        f(i.pageContainerCssClass),
        (r = f(y).width());
    }),
    (c.BreakingNews.Controller = function (e, t) {
      var i = { updateInterval: 12e4 },
        r = null,
        a = null;
      function o(e) {
        e.preventDefault(), a.animateContainerOut();
        e = a.getCurrentArticle();
        r.storeNewsAsDisabled(e.data("art-id"), e.data("art-lmd"));
      }
      function n(e) {
        e.preventDefault(), e.stopPropagation();
        e = a.getCurrentArticle();
        r.storeNewsAsDisabled(e.data("art-id"), e.data("art-lmd")),
          (y.location.href = a.getArticleLink().attr("href"));
      }
      function l(s) {
        f.get(r.getWidgetUpdateUri())
          .done(function (e, t, i) {
            var o, n;
            a.getCurrentArticle();
            "" !== (e = e.replace(/\s?\/\>/g, ">"))
              ? ((n = a.getCurrentArticle()),
                r.getArticleMarker(n.data("art-id"), n.data("art-lmd")) !==
                  ((n = f((n = e))),
                  r.getArticleMarker(n.data("art-id"), n.data("art-lmd"))) &&
                  (a.isVisible() && a.hideContainer(),
                  a.update(e),
                  (n = a.getCurrentArticle()),
                  -1 < (e = y.location.href).indexOf("-id") &&
                    ((o = a.getCurrentArticle()),
                    parseInt(e.match(new RegExp(/\d+(?!.*-)/)), 10) ===
                      o.data("art-id")) &&
                    r.storeNewsAsDisabled(o.data("art-id"), o.data("art-lmd")),
                  r.newsIsDisabled(n.data("art-id"), n.data("art-lmd")) ||
                    a.showContainer()))
              : a.isVisible() && a.hideContainer(),
              "init" === s &&
                a.isVisible() &&
                y.dataLayer &&
                y.dataLayer.push({
                  event: "news_toast",
                  toast_action: "news_toast_view",
                });
          })
          .fail(function () {
            y.console.error(arguments);
          })
          .done(function () {
            y.setTimeout(l, i.updateInterval);
          });
      }
      function s() {
        y.dataLayer &&
          y.dataLayer.push({
            event: "news_toast",
            toast_action: "news_toast_klick",
          });
      }
      if (
        (void 0 === (i = f.extend(i, t)).widgetUrl &&
          (i.widgetUrl = e.data("breaking-news-url")),
        void 0 === i.widgetUrl)
      )
        throw "options.widgetUrl is missing. Aborting!";
      (r = new c.BreakingNews.Model(i)),
        (a = new c.BreakingNews.View(e, i)).getCloseButton().on("click", o),
        a.getInnerContainer().on("click", n),
        a.getContainer().one("click", a.getOptions().articleLinkCssClass, s),
        l("init");
    }),
    (f.fn.breakingNews = function (e) {
      return this.each(function () {
        new c.BreakingNews.Controller(f(this), e);
      });
    }),
    (O.prototype.replaceCalendar = function (o, e) {
      e = f.ajax({ url: e });
      e.done(function (e, t, i) {
        e = f(e).html();
        f(o).html(e);
      }),
        e.fail(function (e, t, i) {});
    }),
    (f.fn.calendar = function () {
      return this.each(function () {
        new O(this);
      });
    }),
    (t.prototype.setupSwiper = function () {
      var i,
        e = this,
        t = e.$rootNode.attr("id"),
        o = ".swiper-pagination-" + String(t),
        n = ".swiper-button-next-" + String(t),
        t = ".swiper-button-prev-" + String(t);
      1 < e.slidesPerView && e.$rootNode.addClass("multi-columns"),
        3 === e.slidesPerView &&
          "mobile" === e.view &&
          ((e.slidesPerView = 1), (e.start = 1)),
        2 === e.slidesPerView &&
          "mobile" === e.view &&
          !1 === e.cube &&
          !1 === e.ajax &&
          ((e.slidesPerView = 2), (e.start = 1)),
        ("desktop" === e.view || ("mobile" === e.view && !1 === e.cube)) &&
          (e.swiperInstance = new Swiper(e.rootNode, {
            nextButton: n,
            pagination: o,
            paginationType: e.paginationType,
            prevButton: t,
            preloadImages: e.preloadImages,
            updateOnImagesReady: e.updateOnImagesReady,
            lazyLoading: !0,
            lazyLoadingInPrevNext: !0,
            lazyLoadingInPrevNextAmount: 2,
            lazyLoadingOnTransitionStart: !0,
            paginationClickable: !0,
            spaceBetween: e.spaceBetween,
            slidesPerView: e.slidesPerView,
            slidesPerColumn: e.slidesPerColumn,
            slidesPerGroup: e.slidesPerGroup,
            watchSlidesVisibility: e.watchSlidesVisibility,
            autoplay: e.autoplayDuration,
            direction: e.direction,
            initialSlide: e.initialSlide,
            grabCursor: !0,
            loop: e.loop,
            mousewheelControl: e.mousewheelControl,
            roundLengths: !0,
            autoHeight: e.autoHeight,
            paginationOnImageBottom: !1,
            zoom: !1,
            runCallbacksOnInit: !0,
            onTransitionEnd: function () {},
          })),
        "mobile" === e.view &&
          !0 === e.cube &&
          (e.swiperInstance = new Swiper(e.rootNode, {
            effect: "cube",
            cube: {
              shadow: !1,
              slideShadows: !1,
              shadowOffset: 0,
              shadowScale: 0,
            },
            lazyLoading: !1,
            lazyLoadingInPrevNext: !1,
            lazyLoadingInPrevNextAmount: 2,
            lazyLoadingOnTransitionStart: !1,
            pagination: o,
            preloadImages: !0,
            paginationType: e.paginationType,
            paginationClickable: !0,
            setWrapperSize: !1,
            watchSlidesVisibility: e.watchSlidesVisibility,
            autoplay: e.autoplayDuration,
            grabCursor: !0,
            loop: e.loop,
            autoHeight: !1,
            paginationOnImageBottom: !1,
            runCallbacksOnInit: !0,
          })),
        ("mobile" !== e.view && "desktop" !== e.view) ||
          ((e.gptAdCount = e.$rootNode
            .find(".swiper-slide-ad")
            .not(".swiper-slide-duplicate").length),
          (e.outbrainAdCount = e.$rootNode
            .find(".swiper-slide-outbrain")
            .not(".swiper-slide-duplicate").length),
          (e.imageCount = e.$rootNode
            .find(".swiper-pagination")
            .find(".swiper-pagination-bullet").length),
          (e.imageCountSubAdCount =
            e.imageCount - e.gptAdCount - e.outbrainAdCount),
          (i = 0),
          e.$rootNode
            .find(".swiper-slide")
            .not(".swiper-slide-duplicate")
            .each(function (e) {
              var t = jQuery(this);
              (t.hasClass("swiper-slide-ad") ||
                t.hasClass("swiper-slide-outbrain")) &&
                i++,
                t.attr("data-swiper-slide-index", e + 1 - i);
            }),
          e.loop &&
            (e.$rootNode
              .find(".swiper-slide:first-child")
              .attr("data-swiper-slide-index", e.imageCountSubAdCount),
            e.$rootNode
              .find(".swiper-slide:last-child")
              .attr("data-swiper-slide-index", 1)),
          e.$rootNode.hasClass("container-leader")) ||
          e.$rootNode.find(".swiper-pagecount").length ||
          !1 === e.pageCount ||
          e.$rootNode.append(
            '<div class="swiper-pagecount">' +
              String(e.countPrefix) +
              " 1 " +
              String(e.countSplitter) +
              " " +
              String(e.imageCountSubAdCount) +
              "</div>"
          ),
        e.setDataImageHeight(),
        (e.$rootNode.parent().hasClass("inline-block--right-25") ||
          e.$rootNode.parent().hasClass("inline-block--right") ||
          e.$rootNode.parent().hasClass("inline-block--left-25") ||
          e.$rootNode.parent().hasClass("inline-block--left")) &&
          (e.$rootNode.find(".swiper-slide-ad").remove(),
          e.swiperInstance.update()),
        e.$rootNode.addClass("swiper-loaded"),
        e.swiperTransitions(e.swiperInstance);
    }),
    (t.prototype.swiperTransitions = function () {
      var n = this,
        e = n.$rootNode.width();
      n.currentSlideId = n.$rootNode
        .find(".swiper-slide-visible")
        .attr("data-hash");
      try {
        !0 === n.autoplay
          ? n.swiperInstance.startAutoplay()
          : n.swiperInstance.stopAutoplay();
      } catch (e) {
        y.console.log(e.message);
      }
      n.swiperInstance.on("onSlideNextStart", function () {
        n.swipeTo = "next";
      }),
        n.swiperInstance.on("onSlidePrevStart", function () {
          n.swipeTo = "prev";
        }),
        n.swiperInstance.on("onTransitionStart", function () {
          (n.currentSlideId = n.$rootNode
            .find(".swiper-slide-visible")
            .attr("data-hash")),
            n.$rootNode.find(".swiper-slide-visible").attr("data-adrefresh") &&
              0 !== n.dfpGalleryAds &&
              n.adsGalleryReload(),
            n.refreshPageCount(),
            n.arrowPosition();
        }),
        n.swiperInstance.on("onTransitionEnd", function () {
          n.currentSlideId = n.$rootNode
            .find(".swiper-slide-visible")
            .attr("data-hash");
          try {
            var e,
              t,
              i = n.$rootNode
                .find(".swiper-slide-visible")
                .find("img")
                .attr("srcset"),
              o = n.$rootNode
                .find(".swiper-slide-visible")
                .data("swiper-slide-index");
            (0 < y.navigator.userAgent.indexOf("MSIE ") ||
              navigator.userAgent.match(/Trident.*rv:11\./) ||
              -1 < navigator.userAgent.indexOf("Safari")) &&
              0 <=
                (e = n.$rootNode.find(".swiper-slide-visible").find("img"))
                  .attr("src")
                  .indexOf("/placeholder.png") &&
              ((t = (t = i.substr(0, i.lastIndexOf(" "))).substr(
                t.lastIndexOf(" ") + 1,
                t.length
              )),
              e.attr("src", t)),
              ga(
                "send",
                "event",
                "Bildergalerie - Bild - " + String(n.view) + ", swipe",
                i
              ),
              n.ivwTracking(),
              n.reloadAds(),
              y.dataLayer.push({
                event: "galleryclick",
                bildCount: o,
                gallerytitle: n.galleryTitle,
              });
          } catch (e) {}
          try {
            n.$rootNode.attr("data-current-slide", n.currentSlideId),
              jQuery(v).trigger("data-current-slide");
          } catch (e) {
            y.console.log(
              "There is no data-current-slide function: " + String(e.message)
            );
          }
          !1 !== n.dfpGlobalAdRefresh && n.adsGlobalReload();
        }),
        n.swiperInstance.on("onLazyImageReady", function () {
          n.swiperInstance.update(), n.arrowPosition();
        });
      var t = setInterval(function () {
        e !== n.$rootNode.width() &&
          (n.setupSwiper(),
          n.swiperInstance.update(),
          (e = n.$rootNode.width()));
      }, 1e3);
      jQuery(y).on("load", function () {
        clearInterval(t);
      });
    }),
    (t.prototype.refreshPageCount = function () {
      var e = this.$rootNode.find(".swiper-slide-visible"),
        t = this.$rootNode.find(".swiper-pagecount"),
        i = e.attr("data-swiper-slide-index"),
        e = e.is(".swiper-slide-outbrain, .swiper-slide-ad");
      t.text(
        String(this.countPrefix) +
          " " +
          String(i) +
          " " +
          String(this.countSplitter) +
          " " +
          String(this.imageCountSubAdCount)
      ),
        t.css("visibility", e ? "hidden" : "visible");
    }),
    (t.prototype.setDataImageHeight = function () {
      var o = this,
        e = o.$rootNode.find(".swiper-slide"),
        n = e.length;
      e.each(function (e, t) {
        var i = jQuery(t);
        (t.slideWidth = i.width()),
          (t.slideHeight = i.height()),
          (t.imageNewHeight = 0.75 * t.slideWidth),
          (t.imageWidth = parseInt(i.find("img").attr("width"), 10)),
          (t.imageHeight = parseInt(i.find("img").attr("height"), 10)),
          t.imageWidth > t.imageHeight
            ? ((t.ratio = t.imageWidth / t.imageHeight), (t.maxWidth = "100%"))
            : ((t.ratio = t.imageHeight / t.imageWidth),
              (t.maxWidth =
                String(Math.round(t.slideWidth / t.ratio, 10)) + "px")),
          "desktop" === o.view && (o.minImageHeight = t.imageHeight),
          i.find("img").css({
            minHeight: String(o.minImageHeight) + "px",
            maxHeight: String(t.imageNewHeight) + "px",
            maxWidth: t.maxWidth,
          }),
          isNaN(t.imageNewHeight) ||
            i.attr("data-image-height", t.imageNewHeight),
          e === n - 1 && o.arrowPosition();
      });
    }),
    (t.prototype.adsGalleryReload = function () {
      var e,
        t = this;
      if (t.dfpAdHandlingEnabled)
        if (
          (t.$rootNode
            .find(".swiper-slide-visible")
            .hasClass("swiper-slide-ad") &&
            ((e = t.$rootNode.find(".swiper-buttons")),
            t.swiperInstance.lockSwipes(),
            e.css({ opacity: 0.25 }),
            setTimeout(function () {
              t.swiperInstance.unlockSwipes(), e.css({ opacity: "" });
            }, 1500)),
          (t.adRefresh = t.$rootNode.find(".swiper-slide-visible")),
          t.adRefresh && t.$rootNode.find(".swiper-slide-active"))
        ) {
          var i = t.adRefresh.attr("data-gId"),
            o = v.getElementById("gAds-" + String(i)),
            n = t.adRefresh.attr("data-hash").split("-", 2),
            s = 0 < f(o).find(".carousel-spark-ad").length;
          try {
            var r,
              a = void 0;
            (o.style.display = "flex"),
              t.adRefresh.append(o),
              (a =
                2 === n.length
                  ? String(n[0]) + "-" + String(n[1])
                  : "" + String(n[0])),
              s
                ? ((r = new CustomEvent("refresh-carousel-spark-ad", {
                    detail: { slot: a },
                  })),
                  v.dispatchEvent(r))
                : adRefresh(a, i);
          } catch (e) {
            y.console.log("Ads could not be displayed!", e);
            var l = t.$rootNode.find(".swiper-buttons");
            t.swiperInstance.lockSwipes(),
              l.css({ opacity: 0.25 }),
              setTimeout(function () {
                t.swiperInstance.unlockSwipes(), l.css({ opacity: "" });
              }, 1500),
              "next" === t.swipeTo &&
                (t.swiperInstance.unlockSwipes(),
                l.css({ opacity: "" }),
                t.swiperInstance.slideNext(!1, 200),
                t.refreshPageCount()),
              "prev" === t.swipeTo &&
                (t.swiperInstance.unlockSwipes(),
                l.css({ opacity: "" }),
                t.swiperInstance.slidePrev(!1, 200),
                t.refreshPageCount());
          }
          try {
            t.adRefresh.find(".ad--marker").length &&
              t.adRefresh.find(".ad--marker").attr("style") &&
              -1 !==
                t.adRefresh
                  .find(".ad--marker")
                  .attr("style")
                  .indexOf("display") &&
              (t.adRefresh.hasClass ||
                t.adRefresh.find(".ad--marker").removeAttr("style"));
          } catch (e) {
            y.console.log("There is a bug with ads: " + String(e.message));
          }
        } else elAd.style.display = "none";
    }),
    (t.prototype.adsGlobalReload = function () {
      var e = this;
      if (e.dfpAdHandlingEnabled) {
        (e.gptAdCount = e.$rootNode.find(".swiper-slide-ad").length),
          e.globalRandomCounter === d
            ? (e.globalRandomCounter = 1)
            : (e.globalRandomCounter += 1);
        try {
          var t = Math.floor(Math.random() * e.gptAdSlots);
          e.globalRandomCounter >= e.dfpGlobalAdRefresh &&
            ((e.gptAdSlots = y.gptAdSlots.length),
            !1 === e.dfpGlobalAdRefresh ||
              !1 !== e.autoplay ||
              isNaN(t) ||
              (0 === t
                ? jQuery("#omsv_sky_DhtmlLayer").length
                  ? jQuery("#oms_gpt_skyscraper").css({ display: "none" })
                  : (y.adRefresh(t), y.adRefresh(1))
                : 1 === t
                ? jQuery("#omsv_sky_DhtmlLayer").length
                  ? jQuery("#oms_gpt_skyscraper").css({ display: "none" })
                  : (y.adRefresh(t), y.adRefresh(0))
                : y.adRefresh(t),
              (e.globalRandomCounter = d)));
        } catch (e) {
          y.console.log("There is a bug with ads: " + String(e.message));
        }
      }
    }),
    (t.prototype.arrowPosition = function () {
      var e,
        t,
        i = this.$rootNode.find(".swiper-buttons");
      1 !== this.slidesPerView ||
      ((t = this.$rootNode.find(".swiper-slide-visible")),
      (e = this.$rootNode.find(".swiper-button-next")),
      t.hasClass("swiper-slide-ad")) ||
      t.hasClass("swiper-slide-outbrain")
        ? i.removeAttr("style")
        : ((t = parseInt(t.find("img").height(), 10) / 2 - e.height() / 2),
          i.css({ top: Math.round(t, 10) }));
    }),
    (t.prototype.paginationPosition = function () {
      var e, t, i, o;
      this.paginationOnImageBottom &&
        ((e = parseInt(
          this.$rootNode.find(".swiper-slide-visible").find("img").height(),
          10
        )),
        (t = parseInt(
          this.$rootNode.find(".swiper-slide-visible").find("img").width(),
          10
        )),
        (i = this.$rootNode.find(".swiper-pagination")),
        (o = parseInt(i.height(), 10)),
        i.css({ top: e - o, bottom: "inherit", maxWidth: t }),
        0 === e || e < 0) &&
        i.removeAttr("style");
    }),
    (t.prototype.reloadAds = function () {
      5 === this.count && ((this.count = 0), y.sas_callAds()),
        (this.count += 1);
    }),
    (t.prototype.ivwTracking = function () {
      if ("function" == typeof y.countIVW)
        try {
          y.countIVW();
        } catch (e) {}
    }),
    (jQuery.fn.carouselAjax = function (e) {
      return this.each(function () {
        new t(this, e);
      });
    }),
    jQuery(function () {
      e(),
        jQuery(v).on("paywall-deobfuscation-complete", e),
        jQuery(v).ajaxStop(e);
    }),
    (i.prototype.rotateDone = function () {
      "function" == typeof this.afterRotateCallback &&
        this.afterRotateCallback();
    }),
    (i.prototype.refreshList = function () {
      this.$items = jQuery(".carousel__item", this.rootNode);
    }),
    (i.prototype.getIndex = function () {
      return this.index;
    }),
    (i.prototype.bindEvents = function () {
      var t = this,
        e = new Hammer(this.rootNode);
      function i(e) {
        return 0 <= e && e <= t.length - 1;
      }
      jQuery(y).on("resize load", function () {
        t.resize();
      }),
        jQuery(y).on("refreshList", function () {
          y.console.log("refreshList"), t.refreshList();
        }),
        e.get("swipe").set({
          direction: Hammer.DIRECTION_HORIZONTAL,
          threshold: 5,
          velocity: 0.3,
        }),
        e.on("swiperight", function (e) {
          e.preventDefault(),
            i(t.index - 1) && t.rotate(--t.index),
            t.track(),
            y.dataLayer.push({ event: "galleryswipe", bildCount: t.index });
        }),
        e.on("swipeleft", function (e) {
          e.preventDefault(),
            i(t.index + 1) && t.rotate((t.index += 1)),
            t.track(),
            y.dataLayer.push({ event: "galleryswipe", bildCount: t.index });
        }),
        jQuery(this.rootNode)
          .on("click", ".carousel__control--prev", function (e) {
            e.preventDefault(),
              i(t.index - 1) && t.rotate(--t.index),
              t.track(),
              y.dataLayer.push({ event: "galleryclick", bildCount: t.index });
          })
          .on("click", ".carousel__control--next", function (e) {
            e.preventDefault(),
              i(t.index + 1) && t.rotate((t.index += 1)),
              t.track(),
              y.dataLayer.push({ event: "galleryclick", bildCount: t.index });
          });
    }),
    (i.prototype.track = function () {
      this.enableTracking &&
        ("function" == typeof y.countIVW && y.countIVW(),
        "function" == typeof y.countAT) &&
        y.countAT();
    }),
    (i.prototype.resize = function () {
      var e = jQuery(this.$items[this.index]).children(":first-child");
      this.$list.stop(!0, !0).animate({ height: e.height() || "100px" });
    }),
    (i.prototype.orderElements = function (e) {
      this.isTripple &&
        jQuery.utils.isDesktopByWidth() &&
        (this.$items.removeClass(
          "carousel__item--prev carousel__item--center carousel__item--next carousel__item--next-after carousel__item--prev-after"
        ),
        this.$items.eq(0).addClass("carousel__item--prev"),
        this.$items.eq(1).addClass("carousel__item--center"),
        this.$items.eq(2).addClass("carousel__item--next"),
        this.$items.eq(3).addClass("carousel__item--next-after"),
        jQuery(this.rootNode)
          .find(".carousel__positions .carousel__index:nth-last-child(2)")
          .css("display", "none"),
        jQuery(this.rootNode)
          .find(".carousel__positions .carousel__index:nth-last-child(1)")
          .css("display", "none"),
        jQuery(this.rootNode)
          .find(".carousel__controls .carousel__control--prev")
          .css("display", "none"));
    }),
    (i.prototype.rotate = function (e) {
      function t(e, t) {
        return -2 === e ? t - 2 : e < 0 ? t - 1 : e === t ? 0 : t < e ? 1 : e;
      }
      this.resize(),
        this.isTripple && jQuery.utils.isDesktopByWidth()
          ? (jQuery(this.rootNode)
              .find(".carousel__controls .carousel__control--prev")
              .removeAttr("style"),
            e + 3 <= this.length &&
              this.$items
                .removeClass(
                  "carousel__item--prev carousel__item--center carousel__item--next carousel__item--next-after carousel__item--prev-after"
                )
                .eq(t(e - 1, this.length))
                .addClass("carousel__item--prev-after")
                .end()
                .eq(t(e + 1, this.length))
                .addClass("carousel__item--center")
                .end()
                .eq(e)
                .addClass("carousel__item--prev")
                .end()
                .eq(t(e + 2, this.length))
                .addClass("carousel__item--next")
                .removeClass("carousel__item--center")
                .end()
                .eq(t(e + 3, this.length))
                .addClass("carousel__item--next-after")
                .removeClass("carousel__item--next")
                .end(),
            e + 3 === this.length &&
              jQuery(this.rootNode)
                .find(".carousel__controls .carousel__control--next")
                .css("display", "none"),
            e + 3 < this.length &&
              jQuery(this.rootNode)
                .find(".carousel__controls .carousel__control--next")
                .removeAttr("style"),
            0 === e &&
              jQuery(this.rootNode)
                .find(".carousel__controls .carousel__control--prev")
                .css("display", "none"))
          : (this.$items
              .removeClass(
                "carousel__item--prev carousel__item--center carousel__item--next carousel__item--next-after carousel__item--prev-after"
              )
              .eq(t(e - 1, this.length))
              .addClass("carousel__item--prev")
              .end()
              .eq(t(e + 1, this.length))
              .addClass("carousel__item--next")
              .end()
              .eq(e)
              .addClass("carousel__item--center")
              .end()
              .eq(t(e + 2, this.length))
              .addClass("carousel__item--next-after")
              .removeClass("carousel__item--next")
              .end()
              .eq(t(e - 2, this.length))
              .addClass("carousel__item--prev-after")
              .removeClass("carousel__item--prev"),
            e + 1 === this.length &&
              jQuery(this.rootNode)
                .find(".carousel__controls .carousel__control--next")
                .css("display", "none"),
            e + 1 < this.length &&
              jQuery(this.rootNode)
                .find(".carousel__controls .carousel__control--next")
                .removeAttr("style"),
            0 === e &&
              jQuery(this.rootNode)
                .find(".carousel__controls .carousel__control--prev")
                .css("display", "none"),
            0 !== e &&
              jQuery(this.rootNode)
                .find(".carousel__controls .carousel__control--prev")
                .removeAttr("style")),
        this.$index
          .removeClass("carousel__index--active")
          .eq(e)
          .addClass("carousel__index--active"),
        this.rotateDone();
    }),
    (i.prototype.resizePortraitImages = function () {
      var t = this;
      jQuery(y).on("load", function () {
        jQuery(".carousel__item", t.rootNode).css("display", "block");
        var e = jQuery(t.rootNode).find(".medialandscape").find("img").height();
        jQuery(".carousel__item", t.rootNode).removeAttr("style"),
          jQuery(t.rootNode).find(".mediaportrait").find("img").height(e);
      });
    }),
    (jQuery.fn.carousel = function (t) {
      return this.each(function () {
        var e = jQuery.extend({ enableTracking: !1 }, t);
        f.data(this, "carousel") || f.data(this, "carousel", new i(this, e));
      });
    }),
    ((s = jQuery).fn.cmpHelper = {
      onConsentReady: function (i) {
        s(v).data("CmpConsentReady")
          ? i({})
          : s(v).one("CmpConsentReady", function (e, t) {
              i(t);
            });
      },
      isConsented: function (e) {
        var t,
          i = !1;
        return (i =
          "function" == typeof __cmp &&
          "object" ===
            (void 0 === (t = __cmp("getCMPData")) ? "undefined" : o(t)) &&
          "object" === o(t.vendorConsents)
            ? !!t.vendorConsents[e]
            : i);
      },
      setConsent: function (e, t) {
        "function" == typeof __cmp && __cmp("setVendorConsent", [e, t ? 1 : 0]);
      },
      onConsentChange: function (i) {
        s(v).on("CmpConsentChanged", function (e, t) {
          i(t);
        });
      },
      onConsented: function (i, o) {
        var n;
        s.fn.cmpHelper.isConsented(i)
          ? o({})
          : ((n = !1),
            s(v).on("CmpConsentReady CmpConsentChanged", function (e, t) {
              !n && s.fn.cmpHelper.isConsented(i) && ((n = !0), o(t));
            }));
      },
      triggerConsentChange: function (e) {
        s(v).trigger("CmpConsentChanged", e || {});
      },
    }),
    "undefined" == typeof __cmp
      ? (D = setInterval(function () {
          "undefined" != typeof __cmp &&
            (y.clearInterval(D),
            __cmp("addEventListener", ["consent", F, !1], null));
        }, 200))
      : __cmp("addEventListener", ["consent", F, !1], null),
    (ye = jQuery),
    (H = new EventManager()),
    ye.extend({
      getEventManager: function () {
        return H;
      },
    }),
    f(v).on("opened", ".remodal", function () {
      f(".remodal .carousel").trigger("resize");
    }),
    (y.sas_loadHandler = function (e) {
      e.hasAd
        ? (f("#sas_" + String(e.id))
            .closest(".ad--asmi")
            .show(),
          (4458 === y.parseInt(e.id) || 4459 === y.parseInt(e.id)) &&
          350 < f("#sas_" + String(e.id)).height()
            ? (f(".hide-on-halfpage-ad").hide(),
              f(".show-on-halfpage-ad").show())
            : (4458 === y.parseInt(e.id) || 4459 === y.parseInt(e.id)) &&
              f("#sas_" + String(e.id)).height() <= 350 &&
              (f(".hide-on-halfpage-ad").show(),
              f(".show-on-halfpage-ad").hide()))
        : e.hasAd ||
          (f("#sas_" + String(e.id))
            .closest(".ad--asmi")
            .css({ height: 0, overflow: "hidden" })
            .show(),
          4458 !== y.parseInt(e.id) && 4459 !== y.parseInt(e.id)) ||
          f(".hide-on-halfpage-ad").show(),
        y.asmi_ads === d && (y.asmi_ads = {}),
        (y.asmi_ads[e.id] = e.hasAd),
        f(y).trigger("asmi-returned-" + String(e.id));
    }),
    f(v).ajaxComplete(function () {
      "function" == typeof y.picturefill && y.picturefill();
    }),
    (y.openLayer = function (e, s) {
      var r = null,
        a = f.extend(
          {
            data: null,
            method: "GET",
            hideCloseButton: !1,
            showMobileInline: !1,
            url: "",
          },
          e
        );
      y.layerInterval && clearInterval(y.layerInterval),
        (y.layerInterval = setInterval(function () {
          "complete" === v.readyState &&
            (clearInterval(y.layerInterval),
            f
              .ajax({ data: a.data, type: a.method, url: a.url })
              .done(function (e) {
                var t = void 0,
                  i = void 0,
                  o = a.showMobileInline && !jQuery.utils.isDesktopByWidth(),
                  n =
                    (o
                      ? (t = f("#inline-overlay"))
                      : ((t = f("[data-remodal-id=modal]")),
                        (r = r || t.remodal())),
                    t.find(".remodal-close"));
                (i = t.find(".remodal-content")).length < 1 &&
                  ((i = f("<div>").addClass("remodal-content")),
                  t.append(i),
                  t.append(
                    '<div data-remodal-action="close" class="remodal-close"></div>'
                  )),
                  i.html(e),
                  o
                    ? (i = f(".nav-main-toggle")).hasClass(
                        "nav-main-toggle--closed"
                      ) && i.trigger("click")
                    : r.open(),
                  a.hideCloseButton || o
                    ? n.addClass("hidden")
                    : n.removeClass("hidden"),
                  "function" == typeof s && s(t);
              })
              .fail(function () {}));
        }, 200));
    }),
    (y.closeLayer = function () {
      f("[data-remodal-id=modal]").find(".remodal-content").html("");
      var e = location.href.indexOf("#modal");
      0 < e && (location.href = location.href.substr(0, e)),
        f("#inline-overlay").find(".remodal-content").html("");
    }),
    f(v).on("closed", "[data-remodal-id=modal]", function () {
      f("[data-remodal-id=modal]").find(".remodal-content").html("");
    }),
    f(v).on("click", ".collapsable .block-header", function (e) {
      (f.utils.isMobileByWidth() ||
        f(this).closest(".collapsable").hasClass("collapsable--desktop")) &&
        (e.preventDefault(),
        f(this).closest(".collapsable").toggleClass("open"));
    }),
    f(v).on("click", ".mediagalery__filters .active a", function (e) {
      e.preventDefault(),
        f(this).closest(".mediagalery__filters__list").toggleClass("open");
    }),
    f(v).on("click", ".tab-navigation .active a", function (e) {
      f.utils.isMobileByWidth() &&
        (e.preventDefault(),
        f(this).closest(".tab-navigation__list").toggleClass("open"));
    }),
    f.getEventManager().on("picturefill", function () {
      y.picturefill();
    }),
    f(v).on("click", "[data-remodal-target=modal]", function (e) {
      e.preventDefault();
      var e = f(e.target),
        t = e.data("ajax-url"),
        e = e.data("ajax-method") || "GET";
      y.openLayer({ method: e, url: t });
    }),
    f(v).on("click", "[data-open-target='lightbox']", function (e) {
      var t, i;
      "function" == typeof y.videoLightbox &&
        (e.preventDefault(),
        (t =
          (e = f(this)).data("video-article-id") ||
          e.data("gallery-article-id")),
        (i = e.data("share-url") || e.attr("href") || ""),
        e.data("video-article-id")
          ? y.videoLightbox(t, i)
          : e.data("gallery-article-id") && y.galleryLightbox(t));
    });
  function q(e, t) {
    (t = f(t)).animate({
      left: 0 === parseInt(t.css("left"), 10) ? "100%" : 0,
    });
  }
  var b, r, n, a, l, h, u, V, G, X, p, m, Y, g, J, K;
  function w(e, t) {
    (this.rootNode = e), this.init(), this.caption("right"), this.resize();
  }
  function C(e, t) {
    (this.rootNode = e), this.init();
  }
  function k(e, t) {
    (this.rootNode = e),
      this.facebookInlineBlockCheck(t),
      (this.rootNodeWidth = jQuery(this.rootNode).width());
  }
  function S(e, t) {
    (this.rootNode = e), this.pinterestInlineBlockCheck();
  }
  function _(e) {
    var t = this;
    t.draw(e),
      f(e).on("redraw", function () {
        t.redraw(e);
      }),
      f(e)
        .off("click")
        .on("click", ".inline-table-button-prev", function () {
          t.switchColum("prev", e);
        }),
      f(e).on("click", ".inline-table-button-next", function () {
        t.switchColum("next", e);
      });
  }
  function Z(e) {
    var t = this;
    t.draw(e),
      f(e).on("redraw", function () {
        t.redraw(e);
      });
  }
  function j(e, t) {
    (this.element = e),
      (this.options = r.extend(!0, {}, h, t)),
      (this.options.share = t.share),
      (this._defaults = h),
      (this._name = l),
      this.init();
  }
  function ee(e, t) {
    (this.$root = p(e)),
      (this.isInitialized = !1),
      (this.config = p.extend(
        {
          animateDesktop: this.getDataAttr(this.$root, "marquee-desktop", !0),
          animateMobile: this.getDataAttr(this.$root, "marquee-mobile", !0),
          duration: this.getDataAttr(this.$root, "marquee-duration", 1e4),
          pauseOnHover: this.getDataAttr(
            this.$root,
            "marquee-pause-on-hover",
            !0
          ),
        },
        t
      )),
      this.init();
  }
  function te(e, t) {
    (this.settings = m.extend({ lazyOffset: 300, enableCaching: !0 }, t)),
      (this.$menu = m(e)),
      (this.isDesktop = jQuery.utils.isDesktopByWidth()),
      (this.visibilityClass = "nav-main__flyout--visible"),
      (this.cache = {}),
      this.init();
  }
  function x(e, t) {
    (this.rootNode = e),
      (this.$navButton = f(".nav-main-toggle", this.rootNode)),
      (this.$nav = f(".nav-main, .search--header", this.rootNode)),
      (this.$submenuButtons = f(".nav-main__toggle-sub", this.rootNode)),
      (this.options = f.extend(
        {
          iconClassOpen: null,
          iconClassClose: null,
          iconButtonCloseClass: "nav-main-toggle--closed",
          navPrimaryActiveClass: "visible",
          navSecondaryActiveClass: "nav-main__list--level2--active",
        },
        t
      )),
      this.$submenuButtons.addClass(t.iconClassOpen),
      this.bindEvents();
  }
  function N(e) {
    for (
      var t,
        i = decodeURIComponent(y.location.search.substring(1)).split("&"),
        o = void 0,
        o = 0;
      o < i.length;
      o++
    )
      if ((t = i[o].split("="))[0] === e) return t[1] === d || t[1];
  }
  function I(e) {
    return f(f.parseHTML(e)).text();
  }
  function ie(e, t) {
    (e = e.attr("class").split(/\s+/)[t]), (t = e.indexOf("-") + 1);
    return e.substring(t);
  }
  function oe(e, t) {
    var i,
      o,
      n,
      s,
      r,
      a = f(".article__body"),
      l = a.find(".page-" + String(e)),
      d = a.find(".page-container").length,
      c = (h = y.location.href).split("/"),
      h =
        String(c[0]) +
        "//" +
        String(y.location.hostname) +
        String(y.location.pathname),
      c = parseInt(e, 10) + 2,
      u = e,
      p = parseInt(e, 10) + 1;
    0 !== l.length &&
      (0 === e && f("figure.hero-img").css("display", "block"),
      0 < e && f("figure.hero-img").css("display", "none"),
      a.offset().top,
      f(".nav-main").outerHeight(),
      f(".article__header__multi__container").outerHeight(),
      f(".article__header__headline").html(t[e]),
      (v.title = I(t[e])),
      (t = a),
      (a = e),
      (i = c),
      (o = d),
      (r = ".pageLink-" + String(a)),
      t.find(".pager a").removeClass("active"),
      t.find(".page-active").removeClass("page-active"),
      t.find(r).addClass("active"),
      f(".pager__button--prev").toggleClass("pager__button--hidden", a <= 0),
      f(".pager__button--next").toggleClass("pager__button--hidden", o < i),
      3 < o &&
        ((r = parseInt(a, 10) + 2),
        parseInt(a, 10),
        (i = f(".pager .page-links a:nth-child(" + String(r) + ")")),
        (r = f(".pager .page-links a:nth-child(" + String(a) + ")")),
        (n = f(".pager .page-links a:nth-child(1)")),
        (o = f(".pager .page-links a:nth-child(" + o + ")")),
        0 !== i.length &&
          i.hasClass("hidden-link") &&
          ((s = parseInt(a, 10) - 1),
          (s = f(".pager .page-links a:nth-child(" + s + ")")),
          i.removeClass("hidden-link"),
          s.addClass("hidden-link")),
        0 !== r.length &&
          r.hasClass("hidden-link") &&
          ((i = parseInt(a, 10) + 3),
          (s = f(".pager .page-links a:nth-child(" + String(i) + ")")),
          r.removeClass("hidden-link"),
          s.addClass("hidden-link")),
        n.hasClass("hidden-link")
          ? t.find(".pager .link-dots-before").removeClass("dots-hidden")
          : t.find(".pager .link-dots-before").addClass("dots-hidden"),
        o.hasClass("hidden-link")
          ? t.find(".pager .link-dots-after").removeClass("dots-hidden")
          : t.find(".pager .link-dots-after").addClass("dots-hidden")),
      d - 1 === e
        ? (f("link[rel='canonical']").attr(
            "href",
            String(h) + "?seite=" + String(p)
          ),
          f("link[rel='prev']").length
            ? f("link[rel='prev']").attr(
                "href",
                String(h) + "?seite=" + String(u)
              )
            : f(
                "<link rel='prev' href='" +
                  String(h) +
                  "?seite=" +
                  String(u) +
                  "' />'"
              ).insertAfter("link[rel='canonical']"))
        : 0 === e
        ? (f("link[rel='canonical']").attr("href", h),
          f("link[rel='next']").length
            ? f("link[rel='next']").attr("href", String(h) + "?seite=2")
            : f(
                "<link rel='next' href='" + String(h) + "?seite=2' />'"
              ).insertAfter("link[rel='canonical']"))
        : (f("link[rel='canonical']").attr(
            "href",
            String(h) + "?seite=" + String(p)
          ),
          f("link[rel='next']").length
            ? f("link[rel='next']").attr(
                "href",
                String(h) + "?seite=" + String(c)
              )
            : f(
                "<link rel='next' href='" +
                  String(h) +
                  "?seite=" +
                  String(c) +
                  "' />'"
              ).insertAfter("link[rel='canonical']"),
          f("link[rel='prev']").length
            ? 1 === u
              ? f("link[rel='prev']").attr("href", h)
              : f("link[rel='prev']").attr(
                  "href",
                  String(h) + "?seite=" + String(u)
                )
            : f(
                1 === u
                  ? "<link rel='prev' href='" + String(h) + "' />'"
                  : "<link rel='prev' href='" +
                      String(h) +
                      "?seite=" +
                      String(u) +
                      "' />'"
              ).insertAfter("link[rel='canonical']")),
      l.addClass("page-active"));
  }
  function ne() {
    var t,
      e = f(".article__body"),
      i = [],
      o =
        (i.push(
          (0 < (o = f(".article__header__headline")).text().length
            ? o
            : f("#pageMainHeadline")
          ).html()
        ),
        e.find("h5")),
      n =
        (f.each(o, function (e, t) {
          i.push(t.innerHTML);
        }),
        0 === (t = f(".article__body").find("h5").length)
          ? f(".pager").css({ display: "none" })
          : (f(".article__body")
              .children()
              .first()
              .nextUntil("h5")
              .addBack()
              .wrapAll("<div class='page-container page-0 page-active'></div>"),
            f("h5").each(function (e) {
              e += 1;
              (e !== t
                ? f(this).nextUntil("h5")
                : f(this).nextUntil(".pager")
              ).wrapAll(
                "<div class='page-container page-" + String(e) + "'></div>"
              );
            }),
            f(".pager.pager__top").length &&
              (f(".article__body").prepend(f(".pager.pager__top")),
              f(".pager.pager__top").first().addClass("moved")),
            f(".pager.pager__top").not(".moved").remove(),
            N("displayDropdownTop") &&
              f("#pager__dropdown__top").css(
                "display",
                N("displayDropdownTop")
              ),
            N("displayDropdownBottom") &&
              f("#pager__dropdown__bottom").css(
                "display",
                N("displayDropdownBottom")
              )),
        i),
      e = f(".article__body"),
      s = e.find("h5").length + 1,
      r = void 0,
      a = e.find(".pager .page-links__top .link-dots-before");
    if (
      (a = a.length ? a : e.find(".pager .page-links .link-dots-before")).length
    )
      for (r = 1; r <= s; r++)
        (linkString =
          n.length === s
            ? 1 === r
              ? "<a class='pageLink-" +
                (r - 1) +
                " page-links__item' href='" +
                String(y.location.href.split("?")[0]) +
                "?displayDropdownTop=block&displayDropdownBottom=none'><strong>Seite " +
                r +
                ":</strong> " +
                String(I(n[r - 1])) +
                "</a>"
              : "<a class='pageLink-" +
                (r - 1) +
                " page-links__item' href='" +
                String(y.location.href.split("?")[0]) +
                "?seite=" +
                r +
                "&displayDropdownTop=block&displayDropdownBottom=none'><strong>Seite " +
                r +
                ":</strong> " +
                String(I(n[r - 1])) +
                "</a>"
            : "<a class='pageLink-" +
              (r - 1) +
              " page-links__item' href='" +
              String(y.location.href.split("?")[0]) +
              "?seite=" +
              String(r) +
              "'>Seite " +
              String(r) +
              "</a>"),
          a.before(linkString);
    if ((a = e.find(".pager .page-links__bottom .link-dots-before")).length)
      for (r = 1; r <= s; r++)
        (linkString = ""),
          (linkString =
            n.length === s
              ? 1 === r
                ? "<a class='pageLink-" +
                  (r - 1) +
                  " page-links__item' href='" +
                  String(y.location.href.split("?")[0]) +
                  "?displayDropdownTop=none&displayDropdownBottom=block'><strong>Seite " +
                  r +
                  ":</strong> " +
                  String(I(n[r - 1])) +
                  "</a>"
                : "<a class='pageLink-" +
                  (r - 1) +
                  " page-links__item' href='" +
                  String(y.location.href.split("?")[0]) +
                  "?seite=" +
                  r +
                  "&displayDropdownTop=none&displayDropdownBottom=block'><strong>Seite " +
                  r +
                  ":</strong> " +
                  String(I(n[r - 1])) +
                  "</a>"
              : "<a class='pageLink-" +
                (r - 1) +
                " page-links__item' href='" +
                String(y.location.href.split("?")[0]) +
                "?seite=" +
                String(r) +
                "'>Seite " +
                String(r) +
                "</a>"),
          a.before(linkString);
    if (3 < s) {
      for (r = 4; r <= s; r++)
        f(".pager .page-links a:nth-child(" + String(r) + ")").addClass(
          "hidden-link"
        );
      e.find(".pager .link-dots-after").removeClass("dots-hidden");
    }
    e.find(".pager a").first().addClass("active");
    o = 1;
    N("seite") && (o = N("seite")),
      (o = parseInt(o) - 1) !== d && "" !== o && oe(o, i),
      f("#nextPage__top, #nextPage__bottom").on("click", function () {
        var e;
        (e = ie(f(".article__body").find(".page-active"), 1)),
          (e = parseInt(e, 10) + 2),
          (y.location.href =
            String(y.location.href.split("?")[0]) +
            "?seite=" +
            String(e) +
            "&displayDropdownTop=" +
            String(f("#pager__dropdown__top").css("display")) +
            "&displayDropdownBottom=" +
            String(f("#pager__dropdown__bottom").css("display")));
      }),
      f("#prevPage__top, #prevPage__bottom").on("click", function () {
        var e;
        (e = ie(f(".article__body").find(".page-active"), 1)),
          (e = parseInt(e, 10)),
          (y.location.href =
            String(y.location.href.split("?")[0]) +
            "?seite=" +
            String(e) +
            "&displayDropdownTop=" +
            String(f("#pager__dropdown__top").css("display")) +
            "&displayDropdownBottom=" +
            String(f("#pager__dropdown__bottom").css("display")));
      }),
      f("#paging__dropdown__click__top").on("click", function () {
        f("#pager__dropdown__top").toggle();
      }),
      f("#paging__dropdown__click__bottom").on("click", function () {
        f("#pager__dropdown__bottom").toggle();
      }),
      f("#paging__single__click__top, #paging__single__click__bottom").on(
        "click",
        function () {
          var e = y.location.href.split("/");
          y.location.href =
            String(e[0]) +
            "//" +
            String(y.location.hostname) +
            String(y.location.pathname) +
            "?one=true";
        }
      ),
      f(".paging__dropdown__top, .paging__dropdown__bottom").append(
        '<svg version="1.1" xmlns="http://www.w3.org/2000/svg" width="11px" height="12px" viewBox="0 0 11 12" xml:space="preserve"><path d="M5.6,1L10,5H1L5.6,1z M5.4,11L1,7h9L5.4,11z" fill="currentColor"/></svg>'
      );
  }
  function se() {
    f(".pager").css({ display: "none" });
  }
  function Q(e) {
    var t = this;
    t.draw(e),
      f(e).on("redraw", function () {
        t.redraw(e);
      });
  }
  function re(e, t) {
    (this.rootNode = e), this.init();
  }
  function ae(e) {
    (this.rootNode = e),
      (this.loginButton = v.getElementById("paywall-header-button-one")),
      (this.mobileModifier = v.getElementById("paywall-mobile-user")),
      (this.state = { menuButton: !1, userButton: !1 }),
      this.clickEvents();
  }
  function P(e) {
    (this.$rootNode = f(e)),
      (this.$listItems = f("[data-more-item]", this.$rootNode)),
      (this.shouldReloadAfterPick = this.$rootNode.data("should-reload") || !1),
      (this.chosenSelect = f("[data-chosen-entry-label]", e)),
      (this.$listItemsSet = []),
      (this.$listItemsUnset = []),
      (this.resourceName = ""),
      (this.choice = ""),
      this.initialize();
  }
  function le(e, t) {
    (this.rootNode = e),
      (this.city = t.city),
      (this.plz = t.plz),
      (this.proxyPath = t.proxyPath),
      (this.dataUrl =
        String(this.proxyPath) +
        "?service=jsonp&url=https://api.wetterkontor.de/json/funke/wr_json.asp?s=" +
        String(this.plz) +
        "&list=0&int=0&dt=0&name=" +
        String(this.city)),
      this.setupWeatherData();
  }
  function T(e) {
    var t = this;
    (this.$body = jQuery("body")),
      (this.$document = jQuery(v)),
      jQuery(e).on("click", function () {
        t.$body.fadeToggle("slow", function () {
          t.openPrint();
        });
      }),
      this.$document.data("print-initialized") || this.initToolbar();
  }
  function de(e) {
    (this.root = e),
      (this.archiveYear = f(this.root).data("archive-year")),
      (this.archiveMonth = f(this.root).data("archive-month")),
      (this.archiveDay = f(this.root).data("archive-day")),
      (this.day = d),
      (this.month = d),
      (this.year = d),
      this.init();
  }
  function $(e) {
    (this.result = []),
      (this.$rootNode = f(e)),
      (this.currentCount = 0),
      (this.totalCount = this.$rootNode.find(".quiz__item").length);
    var i = this;
    this.bindEvents(),
      this.updateUI(),
      this.$rootNode.on("questionAnswered", function (e, t) {
        i.result.push(i.evaluateAnswer(t)), i.updateUI(t), i.showAnswer(t);
      }),
      this.$rootNode.on("nextPage", function () {
        i.result.length === i.totalCount
          ? i.showResult(e, i.result)
          : (i.nextQuestion(), i.currentCount++);
      });
  }
  function ce(e, t) {
    (this.rootNode = e), this.initRedirect(e, t);
  }
  function he(e, t) {
    (this.settings = f.extend(Y, t)),
      (this.$root = f(e)),
      (this.$window = f(y)),
      this.init();
  }
  function B(e, t) {
    (this.rootNode = e),
      (this.opts = t),
      (this.proxyPath = t.proxyPath),
      this.setupElements(),
      this.appendApiScripts();
  }
  function ue(e, t) {
    (this.settings = f.extend({ callback: !1 }, t)),
      (this.$element = f(e)),
      (this.callback = this.settings.callback),
      this.init();
  }
  function pe(e, t) {
    U(this, pe),
      (this.rootNode = e),
      (this.rawPortalName = t.portal),
      (this.portal = t.portal.toLowerCase()),
      (this.embedId = t.embedId),
      (this.type = t.type),
      (this.privacyUrl = t.privacyUrl || ""),
      (this.isEmbedded = !1),
      (this.isRendered = !1),
      (this.consentBoxDisabled = "true" === t.consentBoxDisabled),
      (this.renderedInterval = null),
      (this.apiLog = !1),
      (this.$consentBox = g("<div />")),
      (this.$toggle = g("<input />")),
      (this.embedWidgetId = (
        g(this.rootNode).is("FIGURE")
          ? g(this.rootNode).parent(".social-embed")
          : g(this.rootNode)
      ).attr("id")),
      (this.portalNames = {
        facebook: "Facebook",
        twitter: "Twitter",
        instagram: "Instagram",
        pinterest: "Pinterest",
        vimeo: "Vimeo",
        youtube: "YouTube",
        xhtml: "verschiedenen Quellen",
      }),
      (this.portalCmpVendorCodes = {
        facebook: "s7",
        twitter: "s34",
        instagram: "s14",
        pinterest: "s49",
        youtube: "s30",
        vimeo: null,
        xhtml: null,
      }),
      this.init();
  }
  function fe(e, t) {
    (this.settings = f.extend(K, t)),
      (this.$window = f(y)),
      (this.$document = f(v)),
      (this.$header = f(e)),
      (this.$pageContent = f(this.settings.pageContentSelector)),
      (this.$placeholder = f("<div>")),
      (this.headerHeight = this.$header.outerHeight(!0)),
      (this.prevScrollPosition = 0),
      this.init();
  }
  function me(e, t) {
    var i = this;
    (this.rootNode = e),
      (this.tabClass = t.tabClass),
      (this.bodyClass = t.bodyClass),
      (this.triggerEvent = t.triggerEvent),
      (this.activeTabClass = String(this.tabClass) + "--active"),
      (this.activeBodyClass = String(this.bodyClass) + "--active"),
      (this.$tabs = f("." + String(this.tabClass), this.rootNode)),
      (this.$bodyItems = f("." + String(this.bodyClass), this.rootNode)),
      this.$tabs.on(this.triggerEvent, function (e) {
        e.preventDefault(),
          e.stopPropagation(),
          f(this).hasClass(i.activeTabClass) || i.switchToTab(this);
      });
  }
  function ge(e, t) {
    (this.rootNode = e), this.loadTrippleCarousel(t);
  }
  f(v).on("click", "[data-slider]", function (e) {
    e.preventDefault();
    function t() {
      i.toggleClass("open");
    }
    for (
      var i = f(this),
        o = i.data("slider-target-id").split(","),
        n = void 0,
        s = 0;
      s < o.length;
      s++
    )
      (n = f("[data-slider-id=" + String(o[s]) + "]")),
        "horizontal" === i.data("slide-direction")
          ? f.each(n, q)
          : n.slideToggle(t);
  }),
    f(v).on("click", "[data-toggle-self]", function (e) {
      var t = f(this).closest("[data-toggle-self-pane]");
      e.preventDefault(),
        "string" != typeof t.attr("data-toggle-is-overlay") ||
          t.hasClass("open") ||
          f.getEventManager().fire("close-overlays", null, this),
        t.toggleClass("open");
    }),
    f(function () {
      f("[data-toggle-is-overlay]").each(function () {
        var e = f(this);
        f.getEventManager().on(
          "close-overlays",
          function () {
            e.removeClass("open");
          },
          this
        );
      });
    }),
    (y.createCookie = function (e, t, i) {
      Cookies.set(e, t, { expires: i, path: "/" });
    }),
    (y.readCookieJson = function (e) {
      return Cookies.getJSON(e);
    }),
    (y.readCookie = function (e) {
      return Cookies.get(e);
    }),
    (y.eraseCookie = function (e) {
      Cookies.remove(e);
    }),
    (y.reloadPage = function () {
      var e = location.href.indexOf("#");
      0 < e ? (location.href = location.href.substr(0, e)) : location.reload();
    }),
    (y.handleHalfpageAdAppnexus = function (o) {
      y.addEventListener("adInfo", function (e) {
        if (e.detail.id === o)
          try {
            var t = e.detail.placementSize.split("x")[1],
              i = e.detail.crea1.height;
            300 < t || 300 < i
              ? (f(".show-on-halfpage-ad").show(),
                f(".hide-on-halfpage-ad").hide())
              : (f(".show-on-halfpage-ad").hide(),
                f(".hide-on-halfpage-ad").show());
          } catch (e) {}
      });
    }),
    f(function () {
      var t = {
        commentPostUrl: "/template/framework/tools/post_comment.jsp",
        extLoginUrl: "/community-webservice/service/extloginuser/",
        passwordResetUrl: "/template/framework/tools/password_reset.jsp",
        urlLogin: "/community-webservice/service/login/",
        urlLogout: "/community-webservice/service/logout/",
      };
      function e(e) {
        (this.settings = f.extend({}, t)),
          (this.$community = f(e)),
          (this.$commentRoot = f(
            ".community__comment-list--root",
            this.$community
          )),
          (this.unknownErrorMessage =
            "Es ist ein Fehler aufgetreten. Bitte versuchen Sie es erneut."),
          this.init();
      }
      f.extend(e.prototype, {
        init: function () {
          this.initCommentRespond(),
            this.initReportComment(),
            this.initCommentReportOpen(),
            this.initLogin(),
            this.initCharCounters(),
            this.initPostComment(),
            this.initToggleAnswers(),
            this.initReadMore(),
            this.initHideReportForm(),
            this.initHideAnswerForm(),
            this.initLoadHeaderForms(),
            this.initWriteCommentHandle(),
            this.initRegistration(),
            this.initPreventReload(),
            this.loadPage(this.getUrlParameter("page"));
        },
        initWriteCommentHandle: function () {
          var t = this;
          this.$community.on(
            "click",
            ".community__comment-form-opener",
            function (e) {
              e.preventDefault(),
                t.isLoggedInCommunity()
                  ? t.toggleWriteCommentForm()
                  : t.isLoggedInSso()
                  ? t.toggleRegistrationForm()
                  : t.toggleLoginForm();
            }
          );
        },
        hideMessages: function () {
          f(".error, .message", this.$community).hide();
        },
        getErrorMessage: function (e) {
          return f("<p>").addClass("error").text(e);
        },
        isLoggedInSso: function () {
          return null !== y.readCookie("sso_data");
        },
        isLoggedInCommunity: function () {
          var e = null !== y.readCookie("communitycookie"),
            t = null !== y.readCookie("communitydata"),
            i = null !== y.readCookie("communitydata2");
          return this.isLoggedInSso && e && t && i;
        },
        initLogin: function () {
          var n = this;
          this.$community.on("submit", ".community__login-form", function (e) {
            var o = f(this);
            e.preventDefault(),
              f.ajax({
                type: "POST",
                xhrFields: { withCredentials: !0 },
                data: o.serializeArray(),
                url:
                  "https://" +
                  String(y.location.hostname) +
                  "/secure/sso/login",
                success: function () {
                  (y.location.hash = "#community-anchor"), location.reload();
                },
                error: function (e) {
                  var e = e.responseJSON
                      ? e.responseJSON.message
                      : n.unknownErrorMessage,
                    t = f("[type=email], [type=password]", o),
                    i = f(".community__message-target", o);
                  t.addClass("form__input--error"), i.text(e);
                },
              });
          });
        },
        enableForm: function (e) {
          e.removeClass("form--disabled");
        },
        disableForm: function (e) {
          e.addClass("form--disabled");
        },
        initPostComment: function () {
          var r = this,
            a = !1;
          this.$community.on(
            "submit",
            ".comment__response-form, .community__write-comment-form",
            function (e) {
              if (a) return !1;
              var n = f(this),
                s = f(".community__message-target", n);
              (a = !0),
                e.preventDefault(),
                r.hideMessages(),
                r.disableForm(n),
                f.ajax({
                  type: "POST",
                  url: n.data("comment-url") || r.settings.commentPostUrl,
                  data: n.serialize(),
                  success: function (e) {
                    var t = void 0,
                      i = void 0,
                      o = f(e).hasClass("error");
                    (a = !1),
                      r.enableForm(n),
                      o
                        ? s.html(e)
                        : (n.slideUp(),
                          0 <
                          (i = n
                            .closest(".comment")
                            .find(".community__comment-list--answer")).length
                            ? (i.prepend(e).show(),
                              i
                                .closest(".comment")
                                .find(".comment__answer-toggle-text")
                                .addClass("open"),
                              (t = i
                                .closest(".comment")
                                .find(".answers__counter")).text(
                                parseInt(t.text(), 10) + 1
                              ))
                            : r.$community
                                .find(".community__comment-list")
                                .first()
                                .prepend(e));
                  },
                  error: function () {
                    var e = r.getErrorMessage(
                      "Beim Speichern des Kommentars ist ein Fehler aufgetreten!"
                    );
                    (a = !1), r.enableForm(n), s.html(e);
                  },
                });
            }
          );
        },
        initCharCounters: function () {
          this.$community.on("keyup", ".community__text-area", function () {
            var e = f(this),
              t = e.closest("form").find(".word_count_span"),
              e = e.val().length;
            e <= 3e3 && t.text(3e3 - e);
          });
        },
        initCommentRespond: function () {
          var a = this;
          this.$community.on("click", ".comment__answer-button", function (e) {
            var t = f(this).closest(".comment"),
              i = f(".comment__response-form", a.$community),
              o = t.find(".comment__response-form"),
              n = t.find(".community-credentialform--report"),
              s = t.find(".community__comment-list--answer"),
              r = f(".comment__answer-toggle-text", t);
            e.preventDefault(),
              a.isLoggedInCommunity()
                ? (i.slideUp(),
                  n.slideUp(),
                  s.slideUp(function () {
                    r.removeClass("open");
                  }),
                  o.stop().slideToggle())
                : a.isLoggedInSso()
                ? a.scrollToCommunityTop(function () {
                    a.showRegistrationForm();
                  })
                : a.scrollToCommunityTop(function () {
                    a.showLoginForm();
                  });
          });
        },
        initCommentReportOpen: function () {
          this.$community.on(
            "click",
            ".comment__report-link--open",
            function (e) {
              var t = f(this).closest(".comment"),
                i = t.find(".community-credentialform--report"),
                o = t.find(".comment__response-form"),
                n = t.find(".community__comment-list--answer"),
                s = f(".comment__answer-toggle-text", t);
              e.preventDefault(),
                o.slideUp(),
                n.slideUp(function () {
                  s.removeClass("open");
                }),
                i.stop().slideToggle();
            }
          );
        },
        initHideReportForm: function () {
          this.$community.on(
            "click",
            ".community-credentialform--report .button--quinary",
            function () {
              f(this)
                .closest(".community-credentialform--report")
                .stop()
                .slideUp();
            }
          );
        },
        initToggleAnswers: function () {
          this.$community.on("click", ".answers__toggle", function (e) {
            var t = f(this).closest(".comment"),
              i = t.find(".community-credentialform--report"),
              o = t.find(".comment__response-form"),
              n = f(".comment__answer-toggle-text", t),
              t = t.find(".community__comment-list--answer");
            e.preventDefault(),
              o.slideUp(),
              i.slideUp(),
              t.stop().slideToggle(function () {
                n.toggleClass("open");
              });
          });
        },
        initHideAnswerForm: function () {
          this.$community.on(
            "click",
            ".comment__response-form .button--quinary",
            function () {
              f(this).closest(".comment__response-form").stop().slideUp();
            }
          );
        },
        initReportComment: function () {
          this.$community.on(
            "click",
            ".comment__report-link--send",
            function (e) {
              var t = f(this),
                i = f(this).closest(".comment"),
                o = f(".community-credentialform--report", i).first(),
                n = f(".comment__report-link--open", i).first(),
                s = f(".community__registration-message--report", i).first(),
                r = t.data("report-url"),
                a = f("[name=firstNameReport]", i).val(),
                l = f("[name=lastNameReport]", i).val(),
                d = f("[name=emailReport]", i).val(),
                c = f("[name=body]", i).val(),
                h = f("[name=captchaId]", i).val(),
                i = f("[name=captcha]", i).val(),
                u = t.data("post-type"),
                p = t.data("post-id"),
                t = t.data("article-id");
              e.preventDefault(),
                f.ajax({
                  type: "POST",
                  url: r,
                  data: {
                    postId: p,
                    articleId: t,
                    postType: u,
                    firstName: a,
                    lastName: l,
                    email: d,
                    body: c,
                    captchaId: h,
                    captcha: i,
                  },
                  success: function (e) {
                    "Gemeldet" === f(e).text()
                      ? (o.slideUp(), n.hide().after(e))
                      : s.html(e);
                  },
                });
            }
          );
        },
        initRegistration: function () {
          var o = this;
          this.$community.on(
            "submit",
            ".community__registration-form",
            function (e) {
              var t = f(this),
                i = t.find(".community__message-target");
              e.preventDefault(),
                f.ajax({
                  type: "POST",
                  url: t.data("register-url"),
                  data: t.serialize(),
                  success: function (e) {
                    (e = f(e)).hasClass("error")
                      ? i.text(e.text())
                      : o.updateSsoUserData(t.serialize(), i);
                  },
                });
            }
          );
        },
        updateSsoUserData: function (e, t) {
          f.ajax({
            type: "POST",
            url:
              "https://" +
              String(y.location.hostname) +
              "/secure/sso-community/update",
            xhrFields: { withCredentials: !0 },
            data: e,
            success: function () {
              (location.hash = "#community-anchor"), location.reload(!0);
            },
            error: function (e) {
              t.text(e.responseJSON.message);
            },
          });
        },
        initReadMore: function () {
          this.$community.on(
            "click",
            ".comment__show-more, .comment__show-less",
            function (e) {
              e.preventDefault(),
                f(this)
                  .closest(".comment__text")
                  .find(".comment__full-text, .comment__short-tex")
                  .toggle();
            }
          );
        },
        initLoadHeaderForms: function () {
          this.$community.find(".community__header-forms").each(function () {
            var t = f(this);
            f.ajax({
              type: "POST",
              url: t.data("header-forms-url"),
              success: function (e) {
                t.replaceWith(e);
              },
            });
          });
        },
        initPreventReload: function () {
          var o = this;
          this.$community.on("click", ".paging a", function () {
            event.preventDefault();
            var e = f(this).attr("href"),
              t = e.indexOf("page=") + 5,
              i = e.indexOf("#"),
              e = e.substring(t, i);
            o.loadPage(e), o.scrollToCommunityTop();
          });
        },
        loadPage: function (e) {
          var t = this,
            i = this.$commentRoot.data("comment-ajax-url");
          f.ajax({
            type: "POST",
            url: i,
            data: { page: (e = e === d ? 1 : e) },
            success: function (e) {
              t.$commentRoot.html(e);
            },
          });
        },
        showLoginForm: function () {
          f(".community__login-form", this.$community).slideDown();
        },
        showRegistrationForm: function () {
          f(".community__registration-form", this.$community).slideDown();
        },
        toggleLoginForm: function () {
          f(".community__login-form", this.$community).slideToggle();
        },
        toggleRegistrationForm: function () {
          f(".community__registration-form", this.$community).slideToggle();
        },
        toggleWriteCommentForm: function () {
          f(".community__write-comment-form", this.$community).slideToggle();
        },
        scrollToCommunityTop: function (e) {
          f("html, body").animate(
            { scrollTop: this.$community.offset().top - 50 },
            800,
            e
          );
        },
        getUrlParameter: function (e) {
          for (
            var t,
              i = decodeURIComponent(y.location.search.substring(1)).split("&"),
              o = void 0,
              o = 0;
            o < i.length;
            o++
          )
            if ((t = i[o].split("="))[0] === e) return t[1] === d || t[1];
        },
      }),
        f("[data-plugin-community]").each(function () {
          f.data(this, "community") || f.data(this, "community", new e(this));
        });
    }),
    f(function () {
      f("[data-compact-weather]").each(function () {
        var e = f(this);
        e.portalWeather({
          proxyPath: e.data("compact-weather-proxy-path"),
          city: e.data("compact-weather-city"),
          plz: e.data("compact-weather-plz"),
        });
      });
    }),
    (w.prototype.init = function (e) {
      var t = this,
        i = jQuery(this.rootNode).find(".compare-slider--wrapper").offset(),
        o = jQuery(this.rootNode).find(".compare-slider--wrapper").width();
      jQuery(this.rootNode)
        .find(".compare-slider--img-left img")
        .css({ minWidth: String(o) + "px", maxWidth: String(o) + "px" }),
        jQuery(this.rootNode)
          .find(".compare-slider--button")
          .on("mousedown touchstart", function (e) {
            jQuery(this).addClass("move"),
              jQuery(this).removeClass("animate"),
              jQuery(t.rootNode)
                .find(".compare-slider--img-left")
                .removeClass("animate");
          })
          .on("mouseup touchend", function () {
            jQuery(this).removeClass("move").removeClass("animate");
          }),
        jQuery(this.rootNode)
          .find(".compare-slider--wrapper")
          .on("mousemove touchmove", function (e) {
            e.preventDefault(),
              "mousemove" === e.type
                ? (this.relX = e.pageX - i.left)
                : "touchmove" === e.type &&
                  (this.relX = e.originalEvent.touches[0].pageX - i.left),
              jQuery(t.rootNode)
                .find(".compare-slider--button")
                .hasClass("move") &&
                0 <= this.relX &&
                this.relX <= jQuery(this).width() &&
                (jQuery(t.rootNode)
                  .find(".compare-slider--button")
                  .css({
                    left:
                      this.relX -
                      jQuery(t.rootNode)
                        .find(".compare-slider--button")
                        .outerWidth() /
                        2 +
                      "px",
                  }),
                jQuery(t.rootNode)
                  .find(".compare-slider--img-left")
                  .css({ width: String(this.relX) + "px" }),
                this.relX >= jQuery(this).width() / 2
                  ? t.caption("right")
                  : t.caption("left"));
          }),
        jQuery(this.rootNode)
          .find(".compare-slider--wrapper")
          .on("mousedown touchstart", function (e) {
            jQuery(t.rootNode)
              .find(".compare-slider--button")
              .hasClass("move") ||
              ("mousedown" === event.type
                ? ((this.relX = e.pageX - i.left), t.snap(this.relX))
                : "touchstart" === event.type &&
                  ((this.relX = e.originalEvent.touches[0].pageX - i.left),
                  t.snap(this.relX)));
          }),
        jQuery(this.rootNode).on("mouseleave", function () {
          jQuery(t.rootNode)
            .find(".compare-slider--button")
            .removeClass("move")
            .removeClass("animate"),
            jQuery(t.rootNode)
              .find(".compare-slider--img-left")
              .removeClass("animate");
        });
    }),
    (w.prototype.snap = function (e) {
      var t = jQuery(this.rootNode).width();
      try {
        jQuery(this.rootNode)
          .find(".compare-slider--button")
          .addClass("animate")
          .css({
            left:
              e -
              jQuery(this.rootNode).find(".compare-slider--button").width() / 2,
          }),
          jQuery(this.rootNode)
            .find(".compare-slider--img-left")
            .addClass("animate")
            .css({ width: e }),
          jQuery(this.rootNode).find(".compare-slider--button").width() / 2 +
            e >
            t &&
            (jQuery(this.rootNode)
              .find(".compare-slider--button")
              .addClass("animate")
              .css({
                left:
                  t -
                  jQuery(this.rootNode)
                    .find(".compare-slider--button")
                    .width() /
                    2,
              }),
            jQuery(this.rootNode)
              .find(".compare-slider--img-left")
              .addClass("animate")
              .css({ width: t })),
          e <
            jQuery(this.rootNode).find(".compare-slider--button").width() / 2 &&
            (jQuery(this.rootNode)
              .find(".compare-slider--button")
              .addClass("animate")
              .css({
                left:
                  -jQuery(this.rootNode)
                    .find(".compare-slider--button")
                    .width() / 2,
              }),
            jQuery(this.rootNode)
              .find(".compare-slider--img-left")
              .addClass("animate")
              .css({ width: 0 })),
          e -
            jQuery(this.rootNode).find(".compare-slider--button").width() / 2 >=
          t / 2
            ? this.caption("right")
            : this.caption("left");
      } catch (e) {
        y.console.log(e.message);
      }
    }),
    (w.prototype.caption = function (e) {
      0 < jQuery(this.rootNode).find(".compare-slider--caption-left").length &&
      0 < jQuery(this.rootNode).find(".compare-slider--caption-right").length
        ? ("left" === e &&
            (jQuery(this.rootNode)
              .find(".compare-slider--caption-right")
              .removeClass("hidden"),
            jQuery(this.rootNode)
              .find(".compare-slider--caption-left")
              .addClass("hidden")),
          "right" === e &&
            (jQuery(this.rootNode)
              .find(".compare-slider--caption-left")
              .removeClass("hidden"),
            jQuery(this.rootNode)
              .find(".compare-slider--caption-right")
              .addClass("hidden")))
        : jQuery(this.rootNode)
            .find(".compare-slider--caption-right")
            .removeClass("hidden");
    }),
    (w.prototype.resize = function () {
      var t = this,
        i = 0;
      jQuery(y).on("resize", function () {
        var e;
        jQuery(y).width() !== i &&
          (jQuery(t.rootNode)
            .find(".compare-slider--img-left")
            .removeAttr("style"),
          jQuery(t.rootNode)
            .find(".compare-slider--img-left img")
            .removeAttr("style"),
          jQuery(t.rootNode)
            .find(".compare-slider--button")
            .removeAttr("style"),
          (e = jQuery(t.rootNode).find(".compare-slider--wrapper").width()),
          jQuery(t.rootNode)
            .find(".compare-slider--img-left img")
            .css({ minWidth: String(e) + "px", maxWidth: String(e) + "px" }),
          (i = jQuery(y).width()),
          t.init());
      });
    }),
    (jQuery.fn.compareSlider = function (e) {
      return this.each(function () {
        new w(this);
      });
    }),
    (C.prototype.init = function (e) {
      var t = this;
      "yes" !== y.readCookie("acceptcookies") &&
        (jQuery(this.rootNode).hasClass("cookie-note--middle") &&
          this.bannerPosition(),
        jQuery(this.rootNode).removeClass("hidden"),
        jQuery(this.rootNode)
          .find(".cookie-note__button")
          .on("click", function () {
            y.createCookie("acceptcookies", "yes", 14),
              jQuery(t.rootNode).addClass("hidden");
          })),
        jQuery(y).on("resize", function () {
          jQuery(t.rootNode).hasClass("cookie-note--middle") &&
            t.bannerPosition();
        });
    }),
    (C.prototype.bannerPosition = function (e) {
      var t = jQuery(y).width(),
        i = jQuery(y).height(),
        t = t / 2 - jQuery(this.rootNode).width() / 2,
        i = i / 2 - jQuery(this.rootNode).height() / 2 - 30;
      jQuery(this.rootNode).css({ left: t, top: i });
    }),
    (jQuery.fn.cookieNotification = function (e) {
      return this.each(function () {
        new C(this);
      });
    }),
    (b = jQuery)(function () {
      function t() {
        return y.readCookie(p);
      }
      function s(e) {
        function t() {
          ++o >= i && location.reload();
        }
        var i, o;
        "string" == typeof e.evolverCookie &&
          ((e = b(e.evolverCookie)),
          (i = e.length),
          (o = 0),
          b("body").append(e),
          e.on({ load: t, error: t }));
      }
      function i() {
        c.addClass(u);
      }
      function o() {
        b(".abo-area").hide(),
          b(".pw-area").hide(),
          b("#profileBox").hide(),
          (g = !1),
          b("#reg-success").hide(),
          b("#reg-error").hide(),
          b("#reg-outdated").hide(),
          a.removeClass("open"),
          "reg=".indexOf(y.location.hash.substring(1)) &&
            history.pushState("", v.title, y.location.pathname),
          c.removeClass(u);
      }
      function n() {
        b.ajax({
          url: "https://" + String(y.location.hostname) + "/secure/sso/logout",
          type: "post",
          xhrFields: { withCredentials: !0 },
          success: s,
          complete: function () {
            y.eraseCookie(p),
              y.eraseCookie(f),
              y.eraseCookie(m),
              y.eraseCookie("piano_userref"),
              y.eraseCookie("piano_userref_timestamp");
          },
        });
      }
      function r(e) {
        var t = h.loginUrl;
        e && (t += "&suc=" + String(e)),
          b.ajax({
            type: "POST",
            url: t,
            success: function (e) {
              b(".abo-area").html(e).show(), b(".pw-area").hide(), i();
            },
            error: function (e) {},
          });
      }
      var e = b(v),
        a = b(".header-top-abo--login"),
        l = b(".header-top-abo--profile"),
        d = b(".header-top-abo-text", a),
        c = b(".header-overlay"),
        h = y.headerWidgetConfig,
        u = "header-overlay--visible",
        p = "sso_data",
        f = "sso_uie_biscuit",
        m = "fpcacc",
        g = !1,
        d =
          (t()
            ? (a.addClass("logout"),
              a.attr("title", "Abmelden"),
              d.text("Abmelden"),
              l.show())
            : l.hide(),
          b.getEventManager().on(
            "close-overlays",
            function () {
              o();
            },
            a
          ),
          b(v).on("click", ".header-top-abo--login.logout", function () {
            b.utils.isMobileByWidth() && g && o(), (g = !g);
          }),
          e.on("keyup", ".form__input--error", function () {
            b(this).removeClass("form__input--error");
          }),
          e.on("showLoginForm", function () {
            a.addClass("open"), r();
          }),
          a.on("click", function (e) {
            b.getEventManager().fire("close-overlays", null, a),
              e && e.preventDefault(),
              t()
                ? (b.utils.isMobileByWidth()
                    ? (b("#profileBox").show(), i)
                    : n)()
                : a.hasClass("open")
                ? o()
                : (r(), a.addClass("open"));
          }),
          -1 !== v.location.search.indexOf("showlogin=true"));
      readCookie("sso_data") || !0 != d || r(),
        e.on("click", ".form__logout", function (e) {
          e.preventDefault(), n();
        }),
        e.on("submit", "#loginFormNrw", function (e) {
          e.preventDefault();
          var i = b(this),
            o = b("#email"),
            n = b("#password");
          b.ajax({
            type: "POST",
            xhrFields: { withCredentials: !0 },
            data: {
              userName: b("#email", i).val(),
              password: b("#password", i).val(),
              remember: b("#remember", i).is(":checked"),
            },
            url: "https://" + String(y.location.hostname) + "/secure/sso/login",
            success: s,
            error: function (e) {
              var t = (e = e.responseJSON)
                ? e.message
                : "Es ist ein Fehler aufgetreten. Bitte versuchen Sie es erneut.";
              10007 === (e = void 0 === e ? 0 : e.code)
                ? (t =
                    "Bitte klicken sie den Link in Ihrer Registrierungs-E-Mail.")
                : (10001 !== e && 10002 !== e) ||
                  (t = "Benutzername und/oder Passwort nicht korrekt."),
                n.addClass("form__input--error"),
                o.addClass("form__input--error"),
                b(".form__error", i).text(t);
            },
          });
        }),
        e.on("click", ".header-overlay", function (e) {
          e.preventDefault(), o();
        }),
        "reg=suc" === (l = y.location.hash.substring(1))
          ? r("success")
          : "reg=err" === l
          ? r("error")
          : "reg=out" === l && r("outdated");
    }),
    "undefined" != typeof Hyphenator &&
      (Hyphenator.config({ defaultlanguage: "de" }), Hyphenator.run()),
    (k.prototype.facebookInlineBlockCheck = function (e) {
      var i = this;
      "socialEmbed" === jQuery.extend({ type: "" }, e).type
        ? this.facebookResizerSocialWidget()
        : (i.facebookResizer(),
          jQuery(y).on("resize", function () {
            var e = jQuery(i.rootNode).width(),
              t =
                (i.rootNodeWidth !== e &&
                  (jQuery(i.rootNode).removeClass(i.currentClass),
                  jQuery(i.rootNode).find("style").remove(),
                  jQuery(i.rootNode).find(".fb-post").find("span").width(351),
                  i.facebookResizer(),
                  (i.rootNodeWidth = e)),
                setInterval(function () {
                  e === i.rootNodeWidth && clearInterval(t);
                }, 2e3));
          }));
    }),
    (k.prototype.facebookResizer = function () {
      var e = this,
        t = jQuery(e.rootNode).width(),
        i = "fb-width-" + String(Math.floor(1e4 * Math.random() + 1));
      (this.currentClass = i),
        jQuery(this.rootNode).hasClass("social-facebook") &&
          (jQuery(this.rootNode).addClass(i),
          jQuery(this.rootNode).prepend(
            "\n            <style>\n                ." +
              i +
              " iframe { \n                    width: " +
              String(t) +
              "px !important\n                } \n                \n                ." +
              i +
              " .fb_iframe_widget {\n                    width: " +
              String(t) +
              "px !important; \n                    max-width: 1000px !important\n                }\n                \n                ." +
              i +
              " .fb_iframe_widget span {\n                    width:" +
              String(t) +
              "px !important; \n                    max-width: 1000px !important\n                }\n            </style>\n        "
          ),
          setTimeout(function () {
            y.FB.XFBML.parse(v.getElementById(jQuery(e.rootNode).attr("id")));
          }, 200));
    }),
    (k.prototype.facebookResizerSocialWidget = function () {
      var t = this,
        i = !1;
      (this.facebookWidgetId = jQuery(this.rootNode).attr("id")),
        (this.rootNodeWidth = jQuery(this.rootNode).width()),
        (this.Random = Math.floor(1e3 * Math.random() + 300)),
        (this.myCheckIntervall = setInterval(function () {
          !1 === i && jQuery(v).trigger("myElementRendered"),
            !0 === i && clearInterval(t.myCheckIntervall);
        }, 1e3)),
        jQuery(t.rootNode).find(".fb-post").length &&
          (350 < this.rootNodeWidth
            ? (this.style =
                "#" +
                String(this.facebookWidgetId) +
                " iframe {width:" +
                String(this.rootNodeWidth) +
                "px !important;}#" +
                String(this.facebookWidgetId) +
                " span {width:" +
                String(this.rootNodeWidth) +
                "px !important;}")
            : (this.style =
                "#" +
                String(this.facebookWidgetId) +
                " iframe {width: 350px !important;}#" +
                String(this.facebookWidgetId) +
                " span {width:" +
                String(this.rootNodeWidth) +
                "px !important;}"),
          jQuery(this.rootNode)
            .append("<style>" + String(this.style) + "</style>")
            .ready(function () {
              var e;
              y.FB.XFBML.parse(v.getElementById(t.facebookWidgetId)),
                t.rootNodeWidth < 350 &&
                  ((e = ((100 / 350) * t.rootNodeWidth) / 100),
                  jQuery(t.rootNode)
                    .find(".fb-post")
                    .css({
                      "-webkit-transform-origin": "0 0",
                      "-moz-transform-origin": "0 0",
                      "-ms-transform-origin": "0 0",
                      "-o-transform-origin": "0 0",
                      "transform-origin": "0 0",
                      "-webkit-transform": "scale(" + e,
                      "-moz-transform": "scale(" + e,
                      "-ms-transform": "scale(" + e,
                      "-o-transform": "scale(" + e,
                      transform: "scale(" + e,
                    }),
                  jQuery(v).on("myElementRendered", function () {
                    var e;
                    (t.elementRenderData = "fb-xfbml-state"),
                      "rendered" ===
                        jQuery(t.rootNode)
                          .find(".fb-post")
                          .attr(t.elementRenderData) &&
                        !1 === i &&
                        ((i = !0),
                        clearInterval(t.myCheckIntervall),
                        (e = jQuery(t.rootNode)
                          .find(".fb-post")[0]
                          .getBoundingClientRect()),
                        jQuery(t.rootNode).height(e.height));
                  }));
            }));
    }),
    (jQuery.fn.facebookInlineResizer = function (e) {
      return this.each(function () {
        new k(this, e);
      });
    }),
    jQuery(y).on("load", function () {
      jQuery(".inline-block--left").hasClass("social-embed") ||
        jQuery(".inline-block--left").facebookInlineResizer(),
        jQuery(".inline-block--right").hasClass("social-embed") ||
          jQuery(".inline-block--right").facebookInlineResizer(),
        jQuery(".inline-block--left-25").hasClass("social-embed") ||
          jQuery(".inline-block--left-25").facebookInlineResizer(),
        jQuery(".inline-block--right-25").hasClass("social-embed") ||
          jQuery(".inline-block--right-25").facebookInlineResizer(),
        jQuery(".inline-block--wide").hasClass("social-embed") ||
          jQuery(".inline-block--wide").facebookInlineResizer();
    }),
    (S.prototype.pinterestInlineBlockCheck = function () {
      var t = this;
      jQuery(this.rootNode).each(function (e) {
        jQuery(this).find("span").first().length && t.pinterestResizer();
      });
    }),
    (S.prototype.pinterestResizer = function () {
      var n = this,
        s = setInterval(function () {
          var e,
            t,
            i,
            o = jQuery(n.rootNode).find("span").first();
          ("embed_pin_large" !== o.attr("data-pin-log") &&
            "embed_pin_medium" !== o.attr("data-pin-log") &&
            "embed_pin_small" !== o.attr("data-pin-log")) ||
            ((e = jQuery(n.rootNode).outerWidth()),
            (i = o.outerWidth()),
            (t = ((100 / i) * e) / 100),
            i < e
              ? (t = 1 < t ? 1 : 2 - t)
              : jQuery(o).css({ padding: "12px 12px 0" }),
            o.css({
              "-webkit-transform-origin": "0 0",
              "-moz-transform-origin": "0 0",
              "-ms-transform-origin": "0 0",
              "-o-transform-origin": "0 0",
              "transform-origin": "0 0",
              "-webkit-transform": "scale(" + t + ")",
              "-moz-transform": "scale(" + t + ")",
              "-ms-transform": "scale(" + t + ")",
              "-o-transform": "scale(" + t + ")",
              transform: "scale(" + t + ")",
            }),
            (i = o[0].getBoundingClientRect()),
            jQuery(n.rootNode).height(i.height),
            clearInterval(s));
        }, 200);
    }),
    (jQuery.fn.pinterestInlineResizer = function (e) {
      return this.each(function () {
        new S(this);
      });
    }),
    jQuery(y).on("load", function () {
      jQuery(".inline-block--left").hasClass("social-embed") ||
        jQuery(".inline-block--left").pinterestInlineResizer(),
        jQuery(".inline-block--right").hasClass("social-embed") ||
          jQuery(".inline-block--right").pinterestInlineResizer(),
        jQuery(".inline-block--left-25").hasClass("social-embed") ||
          jQuery(".inline-block--left-25").pinterestInlineResizer(),
        jQuery(".inline-block--right-25").hasClass("social-embed") ||
          jQuery(".inline-block--right-25").pinterestInlineResizer(),
        jQuery(".inline-block--wide").hasClass("social-embed") ||
          jQuery(".inline-block--wide").pinterestInlineResizer();
    }),
    (Z.prototype.draw = function (e) {
      var t = f(e).find("tr").first().find("td").length,
        i = f(e).width(),
        o = i / t + i / t / 0,
        i = i / t - i / t / 0 / (t - 1);
      f(e)
        .find("table tr")
        .first()
        .find("td")
        .css("width", i + "px"),
        f(e)
          .find("table tr")
          .first()
          .find("td")
          .first()
          .css("width", o + "px");
    }),
    (_.prototype.draw = function (e) {
      var t = f(e).find("td"),
        i = f(e).find("tr").first().find("td").length,
        o = [];
      i <= 2 &&
        (f(e).find(".inline-table-button-prev").css("display", "none"),
        f(e).find(".inline-table-button-next").css("display", "none")),
        f.each(t, function (e, t) {
          o.push("1");
        });
      for (var n = 0; n < o.length; n++)
        f(t[n]).is(":nth-child(2)") && f(t[n]).addClass("inline-table-show"),
          f(t[n]).is(":first-child") ||
            f(t[n]).is(":nth-child(2)") ||
            f(t[n]).addClass("inline-table-hidden");
      return !0;
    }),
    (_.prototype.switchColum = function (e, t) {
      "prev" === e &&
        f(t)
          .find(".inline-table-show")
          .each(function (e) {
            (f(this).prev().attr("class")
              ? (f(this)
                  .removeClass("inline-table-show")
                  .addClass("inline-table-hidden"),
                f(this).prev())
              : (f(this)
                  .removeClass("inline-table-show")
                  .addClass("inline-table-hidden"),
                f(t).find("tr").children(":last-child"))
            )
              .removeClass("inline-table-hidden")
              .addClass("inline-table-show");
          }),
        "next" === e &&
          f(t)
            .find(".inline-table-show")
            .each(function (e) {
              (0 !== f(this).next().length
                ? (f(this)
                    .removeClass("inline-table-show")
                    .addClass("inline-table-hidden"),
                  f(this).next())
                : (f(this)
                    .removeClass("inline-table-show")
                    .addClass("inline-table-hidden"),
                  f(t).find("tr").children(":nth-child(2)"))
              )
                .removeClass("inline-table-hidden")
                .addClass("inline-table-show");
            });
    }),
    (f.fn.inlineTable = function () {
      return this.each(function () {
        new (f(y).width() <= 767 ? _ : Z)(this);
      });
    }),
    (r = jQuery),
    (n = y),
    (h = {
      className: (l = "sharrre"),
      share: {
        googlePlus: !1,
        facebook: !1,
        twitter: !1,
        digg: !1,
        delicious: !1,
        stumbleupon: !1,
        linkedin: !1,
        pinterest: !1,
      },
      shareTotal: 0,
      template: "",
      title: "",
      url: (a = v).location.href,
      text: a.title,
      urlCurl: "sharrre.php",
      count: {},
      total: 0,
      shorterTotal: !0,
      enableHover: !0,
      enableCounter: !1,
      enableTracking: !1,
      hover: function () {},
      hide: function () {},
      click: function () {},
      render: function () {},
      buttons: {
        facebook: {
          url: "",
          urlCount: !1,
          action: "like",
          layout: "button_count",
          width: "",
          send: "false",
          faces: "false",
          colorscheme: "",
          font: "",
          lang: "en_US",
        },
        twitter: {
          url: "",
          urlCount: !1,
          count: "horizontal",
          hashtags: "",
          via: "",
          related: "",
          lang: "en",
        },
        digg: { url: "", urlCount: !1, type: "DiggCompact" },
        delicious: { url: "", urlCount: !1, size: "medium" },
        stumbleupon: { url: "", urlCount: !1, layout: "1" },
        linkedin: { url: "", urlCount: !1, counter: "" },
        pinterest: {
          url: "",
          media: "",
          description: "",
          layout: "horizontal",
        },
      },
    }),
    (u = {
      facebook: "https://graph.facebook.com/?id={url}&callback=?",
      digg: "https://services.digg.com/2.0/story.getInfo?links={url}&type=javascript&callback=?",
      delicious:
        "https://feeds.delicious.com/v2/json/urlinfo/data?url={url}&callback=?",
      stumbleupon: "",
      linkedin:
        "https://www.linkedin.com/countserv/count/share?format=jsonp&url={url}&callback=?",
      pinterest:
        "https://api.pinterest.com/v1/urls/count.json?url={url}&callback=?",
    }),
    (V = {
      facebook: function (e) {
        var t,
          i,
          o,
          n = e.options.buttons.facebook;
        r(e.element)
          .find(".buttons")
          .append(
            '<div class="button facebook"><div id="fb-root"></div><div class="fb-like" data-href="' +
              String(("" !== n.url ? n : e.options).url) +
              '" data-send="' +
              String(n.send) +
              '" data-layout="' +
              String(n.layout) +
              '" data-width="' +
              String(n.width) +
              '" data-show-faces="' +
              String(n.faces) +
              '" data-action="' +
              String(n.action) +
              '" data-colorscheme="' +
              String(n.colorscheme) +
              '" data-font="' +
              String(n.font) +
              '" data-via="' +
              String(n.via) +
              '"></div></div>'
          ),
          "undefined" == typeof FB
            ? ((e = "facebook-jssdk"),
              (i = void 0),
              (o = (t = a).getElementsByTagName("script")[0]),
              t.getElementById(e) ||
                (((i = t.createElement("script")).id = e),
                (i.src =
                  "//connect.facebook.net/" +
                  String(n.lang) +
                  "/all.js#xfbml=1"),
                o.parentNode.insertBefore(i, o)))
            : FB.XFBML.parse();
      },
      twitter: function (e) {
        var t = e.options.buttons.twitter;
        r(e.element)
          .find(".buttons")
          .append(
            '<div class="button twitter"><a href="https://twitter.com/share" class="twitter-share-button" data-url="' +
              String(("" !== t.url ? t : e.options).url) +
              '" data-count="' +
              String(t.count) +
              '" data-text="' +
              String(e.options.text) +
              '" data-via="' +
              String(t.via) +
              '" data-hashtags="' +
              String(t.hashtags) +
              '" data-related="' +
              String(t.related) +
              '" data-lang="' +
              String(t.lang) +
              '">Tweet</a></div>'
          ),
          "undefined" == typeof twttr
            ? (((e = a.createElement("script")).type = "text/javascript"),
              (e.async = !0),
              (e.src = "//platform.twitter.com/widgets.js"),
              (t = a.getElementsByTagName("script")[0]).parentNode.insertBefore(
                e,
                t
              ))
            : r.ajax({
                url: "//platform.twitter.com/widgets.js",
                dataType: "script",
                cache: !0,
              });
      },
      digg: function (e) {
        var t = e.options.buttons.digg;
        r(e.element)
          .find(".buttons")
          .append(
            '<div class="button digg"><a class="DiggThisButton ' +
              String(t.type) +
              '" rel="nofollow external" href="http://digg.com/submit?url=' +
              String(encodeURIComponent(("" !== t.url ? t : e.options).url)) +
              '"></a></div>'
          ),
          "undefined" == typeof __DBW &&
            ((t = a.createElement("SCRIPT")),
            (e = a.getElementsByTagName("SCRIPT")[0]),
            (t.type = "text/javascript"),
            (t.async = !0),
            (t.src = "//widgets.digg.com/buttons.js"),
            e.parentNode.insertBefore(t, e));
      },
      delicious: function (e) {
        var t = "width:93px;",
          i =
            "float:right;padding:0 3px;height:20px;width:26px;line-height:20px;",
          o = "float:left;height:20px;line-height:20px;",
          n =
            ("tall" === e.options.buttons.delicious.size &&
              ((t = "width:50px;"),
              (i = "height:35px;width:50px;font-size:15px;line-height:35px;"),
              (o = "height:18px;line-height:18px;margin-top:3px;")),
            e.shorterTotal(e.options.count.delicious));
        void 0 === n && (n = 0),
          r(e.element)
            .find(".buttons")
            .append(
              '<div class="button delicious"><div style="' +
                t +
                'font:12px Arial,Helvetica,sans-serif;cursor:pointer;color:#666666;display:inline-block;float:none;height:20px;line-height:normal;margin:0;padding:0;text-indent:0;vertical-align:baseline;"><div style="' +
                i +
                'background-color:#fff;margin-bottom:5px;overflow:hidden;text-align:center;border:1px solid #ccc;border-radius:3px;">' +
                String(n) +
                '</div><div style="' +
                o +
                'display:block;padding:0;text-align:center;text-decoration:none;width:50px;background-color:#7EACEE;border:1px solid #40679C;border-radius:3px;color:#fff;"><img src="http://www.delicious.com/static/img/delicious.small.gif" height="10" width="10" alt="Delicious" /> Add</div></div></div>'
            ),
          r(e.element)
            .find(".delicious")
            .on("click", function () {
              e.openPopup("delicious");
            });
      },
      stumbleupon: function (e) {
        var t,
          i = e.options.buttons.stumbleupon;
        r(e.element)
          .find(".buttons")
          .append(
            '<div class="button stumbleupon"><su:badge layout="' +
              String(i.layout) +
              '" location="' +
              String(("" !== i.url ? i : e.options).url) +
              '"></su:badge></div>'
          ),
          "undefined" == typeof STMBLPN
            ? (((i = a.createElement("script")).type = "text/javascript"),
              (i.async = !0),
              (i.src = "//platform.stumbleupon.com/1/widgets.js"),
              (e = a.getElementsByTagName("script")[0]).parentNode.insertBefore(
                i,
                e
              ),
              (t = n.setTimeout(function () {
                "undefined" != typeof STMBLPN &&
                  (STMBLPN.processWidgets(), clearInterval(t));
              }, 500)))
            : STMBLPN.processWidgets();
      },
      linkedin: function (e) {
        var t = e.options.buttons.linkedin;
        r(e.element)
          .find(".buttons")
          .append(
            '<div class="button linkedin"><script type="in/share" data-url="' +
              String(("" !== t.url ? t : e.options).url) +
              '" data-counter="' +
              String(t.counter) +
              '"></script></div>'
          ),
          void 0 === n.IN
            ? (((e = a.createElement("script")).type = "text/javascript"),
              (e.async = !0),
              (e.src = "//platform.linkedin.com/in.js"),
              (t = a.getElementsByTagName("script")[0]).parentNode.insertBefore(
                e,
                t
              ))
            : n.IN.init();
      },
      pinterest: function (e) {
        var t = e.options.buttons.pinterest;
        r(e.element)
          .find(".buttons")
          .append(
            '<div class="button pinterest"><a href="http://pinterest.com/pin/create/button/?url=' +
              String(("" !== t.url ? t : e.options).url) +
              "&media=" +
              String(t.media) +
              "&description=" +
              String(t.description) +
              '" class="pin-it-button" count-layout="' +
              String(t.layout) +
              '">Pin It</a></div>'
          ),
          ((e = a.createElement("script")).type = "text/javascript"),
          (e.async = !0),
          (e.src = "//assets.pinterest.com/js/pinit.js"),
          (t = a.getElementsByTagName("script")[0]).parentNode.insertBefore(
            e,
            t
          );
      },
    }),
    (G = {
      facebook: function () {
        var e = n.setInterval(function () {
          "undefined" != typeof FB &&
            (FB.Event.subscribe("edge.create", function (e) {
              _gaq.push(["_trackSocial", "facebook", "like", e]);
            }),
            FB.Event.subscribe("edge.remove", function (e) {
              _gaq.push(["_trackSocial", "facebook", "unlike", e]);
            }),
            FB.Event.subscribe("message.send", function (e) {
              _gaq.push(["_trackSocial", "facebook", "send", e]);
            }),
            clearInterval(e));
        }, 1e3);
      },
      twitter: function () {
        var e = n.setInterval(function () {
          "undefined" != typeof twttr &&
            (twttr.events.on("tweet", function (e) {
              e && _gaq.push(["_trackSocial", "twitter", "tweet"]);
            }),
            clearInterval(e));
        }, 1e3);
      },
      digg: function () {},
      delicious: function () {},
      stumbleupon: function () {},
      linkedin: function () {},
      pinterest: function () {},
    }),
    (X = {
      facebook: function (e) {
        n.open(
          "http://www.facebook.com/sharer/sharer.php?u=" +
            String(
              encodeURIComponent(
                ("" !== e.buttons.facebook.url ? e.buttons.facebook : e).url
              )
            ) +
            "&t=" +
            String(e.text),
          "",
          "toolbar=0, status=0, width=900, height=500"
        );
      },
      twitter: function (e) {
        n.open(
          "https://twitter.com/intent/tweet?text=" +
            String(encodeURIComponent(e.text)) +
            "&url=" +
            String(
              encodeURIComponent(
                ("" !== e.buttons.twitter.url ? e.buttons.twitter : e).url
              )
            ) +
            ("" !== e.buttons.twitter.via
              ? "&via=" + String(e.buttons.twitter.via)
              : ""),
          "",
          "toolbar=0, status=0, width=650, height=360"
        );
      },
      digg: function (e) {
        n.open(
          "http://digg.com/tools/diggthis/submit?url=" +
            String(
              encodeURIComponent(
                ("" !== e.buttons.digg.url ? e.buttons.digg : e).url
              )
            ) +
            "&title=" +
            String(e.text) +
            "&related=true&style=true",
          "",
          "toolbar=0, status=0, width=650, height=360"
        );
      },
      delicious: function (e) {
        n.open(
          "http://www.delicious.com/save?v=5&noui&jump=close&url=" +
            String(
              encodeURIComponent(
                ("" !== e.buttons.delicious.url ? e.buttons.delicious : e).url
              )
            ) +
            "&title=" +
            String(e.text),
          "delicious",
          "toolbar=no,width=550,height=550"
        );
      },
      stumbleupon: function (e) {
        n.open(
          "http://www.stumbleupon.com/badge/?url=" +
            String(
              encodeURIComponent(
                ("" !== e.buttons.delicious.url ? e.buttons.delicious : e).url
              )
            ),
          "stumbleupon",
          "toolbar=no,width=550,height=550"
        );
      },
      linkedin: function (e) {
        n.open(
          "https://www.linkedin.com/cws/share?url=" +
            String(
              encodeURIComponent(
                ("" !== e.buttons.delicious.url ? e.buttons.delicious : e).url
              )
            ) +
            "&token=&isFramed=true",
          "linkedin",
          "toolbar=no,width=550,height=550"
        );
      },
      pinterest: function (e) {
        n.open(
          "http://pinterest.com/pin/create/button/?url=" +
            String(
              encodeURIComponent(
                ("" !== e.buttons.pinterest.url ? e.buttons.pinterest : e).url
              )
            ) +
            "&media=" +
            String(encodeURIComponent(e.buttons.pinterest.media)) +
            "&description=" +
            String(e.buttons.pinterest.description),
          "pinterest",
          "toolbar=no,width=700,height=300"
        );
      },
    }),
    (j.prototype.init = function () {
      var i = this;
      "" !== this.options.urlCurl &&
        (u.stumbleupon =
          String(this.options.urlCurl) + "?url={url}&type=stumbleupon"),
        r(this.element).addClass(this.options.className),
        void 0 !== r(this.element).data("title") &&
          (this.options.title = r(this.element).attr("data-title")),
        void 0 !== r(this.element).data("url") &&
          (this.options.url = r(this.element).data("url")),
        void 0 !== r(this.element).data("text") &&
          (this.options.text = r(this.element).data("text")),
        r.each(this.options.share, function (e, t) {
          !0 === t && i.options.shareTotal++;
        }),
        !0 === i.options.enableCounter
          ? r.each(this.options.share, function (e, t) {
              if (!0 === t)
                try {
                  i.getSocialJson(e);
                } catch (e) {}
            })
          : "" !== i.options.template
          ? this.options.render(this, this.options)
          : this.loadButtons(),
        r(this.element).on(
          "hover",
          function () {
            0 === r(this).find(".buttons").length &&
              !0 === i.options.enableHover &&
              i.loadButtons(),
              i.options.hover(i, i.options);
          },
          function () {
            i.options.hide(i, i.options);
          }
        ),
        r(this.element).on("click", function () {
          return i.options.click(i, i.options), !1;
        });
    }),
    (j.prototype.loadButtons = function () {
      var i = this;
      r(this.element).append('<div class="buttons"></div>'),
        r.each(i.options.share, function (e, t) {
          !0 === t && (V[e](i), !0 === i.options.enableTracking) && G[e]();
        });
    }),
    (j.prototype.getSocialJson = function (i) {
      var o = this,
        n = 0,
        e = void 0;
      "" !==
        (e =
          !0 === this.options.buttons[i].urlCount &&
          "" !== this.options.buttons[i].url
            ? u[i].replace("{url}", this.options.buttons[i].url)
            : u[i].replace("{url}", encodeURIComponent(this.options.url))) &&
      "" !== o.options.urlCurl
        ? r
            .getJSON(e, function (e) {
              var t;
              void 0 !== e.count
                ? ((t = (t = "" + String(e.count)).replace("Ã‚Â ", "")),
                  (n += parseInt(t, 10)))
                : e.share && e.share && void 0 !== e.share.share_count
                ? (n += parseInt(e.share.share_count, 10))
                : void 0 !== e[0]
                ? (n += parseInt(e[0].total_posts, 10))
                : e.error && (n = 0),
                (o.options.count[i] = n),
                (o.options.total += n),
                o.renderer(),
                o.rendererPerso();
            })
            .fail(function () {
              (o.options.count[i] = 0), o.rendererPerso();
            })
        : (o.renderer(), (o.options.count[i] = 0), o.rendererPerso());
    }),
    (j.prototype.rendererPerso = function () {
      var e,
        t = 0;
      for (e in this.options.count) t++;
      t === this.options.shareTotal && this.options.render(this, this.options);
    }),
    (j.prototype.renderer = function () {
      var e = this.options.total,
        t = this.options.template;
      !0 === this.options.shorterTotal && (e = this.shorterTotal(e)),
        "" !== t
          ? ((t = t.replace("{total}", e)), r(this.element).html(t))
          : r(this.element).html(
              '<div class="box"><a class="count" href="#">' +
                String(e) +
                "</a>" +
                ("" !== this.options.title
                  ? '<a class="share" href="#">' +
                    String(this.options.title) +
                    "</a>"
                  : "") +
                "</div>"
            );
    }),
    (j.prototype.shorterTotal = function (e) {
      return (
        1e6 <= e
          ? (e = String((e / 1e6).toFixed(2)) + "M")
          : 1e3 <= e && (e = String((e / 1e3).toFixed(1)) + "k"),
        e
      );
    }),
    (j.prototype.openPopup = function (e) {
      var t;
      X[e](this.options),
        !0 === this.options.enableTracking &&
          ((t = {
            googlePlus: { site: "Google", action: "+1" },
            facebook: { site: "facebook", action: "like" },
            twitter: { site: "twitter", action: "tweet" },
            digg: { site: "digg", action: "add" },
            delicious: { site: "delicious", action: "add" },
            stumbleupon: { site: "stumbleupon", action: "add" },
            linkedin: { site: "linkedin", action: "share" },
            pinterest: { site: "pinterest", action: "pin" },
          }),
          _gaq.push(["_trackSocial", t[e].site, t[e].action]));
    }),
    (j.prototype.simulateClick = function () {
      var e = r(this.element).html();
      r(this.element).html(
        e.replace(this.options.total, this.options.total + 1)
      );
    }),
    (j.prototype.update = function (e, t) {
      "" !== e && (this.options.url = e), "" !== t && (this.options.text = t);
    }),
    (r.fn[l] = function (t) {
      var i = arguments;
      return void 0 === t || "object" === (void 0 === t ? "undefined" : o(t))
        ? this.each(function () {
            r.data(this, "plugin_" + l) ||
              r.data(this, "plugin_" + l, new j(this, t));
          })
        : "string" == typeof t && "_" !== t[0] && "init" !== t
        ? this.each(function () {
            var e = r.data(this, "plugin_" + l);
            e instanceof j &&
              "function" == typeof e[t] &&
              e[t].apply(
                e,
                (function (e) {
                  if (Array.isArray(e)) {
                    for (var t = 0, i = Array(e.length); t < e.length; t++)
                      i[t] = e[t];
                    return i;
                  }
                  return Array.from(e);
                })(Array.prototype.slice.call(i, 1))
              );
          })
        : void 0;
    }),
    f(function () {
      R(i, [
        {
          key: "init",
          value: function () {
            this.isSetupCorrectly() &&
              (this.registerHashtagHandler(),
              this.registerLoginHandler(),
              this.registerLogoutHandler(),
              this.redirectHandler(),
              this.connectKeycloakAndPiano());
          },
        },
        {
          key: "isSetupCorrectly",
          value: function () {
            var e = !0;
            return (e =
              void 0 !== y.jwt_decode && this.loginUrl && this.logoutUrl
                ? e
                : !1);
          },
        },
        {
          key: "createUUID",
          value: function () {
            return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(
              /[xy]/g,
              function (e) {
                var t = (16 * Math.random()) | 0;
                return ("x" === e ? t : (3 & t) | 8).toString(16);
              }
            );
          },
        },
        {
          key: "getPreviousUrl",
          value: function () {
            var e = y.location.origin;
            return y.localStorage.getItem("keycloak-previous-url") || e;
          },
        },
        {
          key: "getRedirectUrl",
          value: function () {
            return (
              String(y.location.origin) +
              "/resources/static/keycloak-redirect.html"
            );
          },
        },
        {
          key: "registerHashtagHandler",
          value: function () {
            var e = this;
            this.redirectByHash(),
              y.addEventListener(
                "hashchange",
                function () {
                  e.redirectByHash();
                },
                !1
              );
          },
        },
        {
          key: "redirectByHash",
          value: function () {
            "#keycloak-login" === y.location.hash
              ? this.goToLogin(!0)
              : "#keycloak-logout" === y.location.hash
              ? this.goToLogout(!0)
              : "#keycloak-registration" === y.location.hash
              ? this.goToRegistration(!0)
              : "#keycloak-change-password" === y.location.hash &&
                this.goToChangePassword(!0);
          },
        },
        {
          key: "registerLoginHandler",
          value: function () {
            var t = this;
            f(".header-top-button--keycloak-login").click(function (e) {
              e.preventDefault(), t.goToLogin();
            });
          },
        },
        {
          key: "registerLogoutHandler",
          value: function () {
            var t = this;
            f(".header-top-button--keycloak-logout").click(function (e) {
              e.preventDefault(), t.goToLogout();
            });
          },
        },
        {
          key: "goToLogin",
          value: function (e) {
            var t = this.createUUID(),
              i = this.getRedirectUrl(),
              i = encodeURIComponent(i),
              t = this.loginUrl.replace("{nonce}", t).replace("{uri}", i);
            e ? y.location.replace(t) : (y.location.href = t);
          },
        },
        {
          key: "goToLogout",
          value: function (e) {
            y.localStorage.removeItem("loggedin");
            var t = encodeURIComponent(this.getPreviousUrl()),
              i = y.sessionStorage.getItem("jwt") || "",
              o = void 0,
              o = i
                ? (y.sessionStorage.setItem("oldjwt", i),
                  y.sessionStorage.removeItem("jwt"),
                  y.tp.pianoId.logout(),
                  this.logoutUrl.replace("{uri}", t).replace("{loginToken}", i))
                : this.getPreviousUrl();
            e ? y.location.replace(o) : (y.location.href = o);
          },
        },
        {
          key: "goToRegistration",
          value: function (e) {
            var t = this.createUUID(),
              i = this.getRedirectUrl(),
              i = encodeURIComponent(i),
              t = this.registrationUrl
                .replace("{nonce}", t)
                .replace("{uri}", i);
            e ? y.location.replace(t) : (y.location.href = t);
          },
        },
        {
          key: "goToChangePassword",
          value: function (e) {
            var t = this.createUUID(),
              i = this.getRedirectUrl(),
              i = encodeURIComponent(i),
              t = this.changePasswordUrl
                .replace("{nonce}", t)
                .replace("{uri}", i);
            e ? y.location.replace(t) : (y.location.href = t);
          },
        },
        {
          key: "redirectHandler",
          value: function () {
            var e = y.location.hash.substr(1),
              e = new URLSearchParams(e).get("id_token") || "",
              t = "";
            if (e) {
              try {
                t = y.jwt_decode(e);
              } catch (e) {
                return;
              }
              " " === t.evolverid
                ? this.goToLogin()
                : (y.sessionStorage.setItem("jwt", e),
                  (y.location.href = this.getPreviousUrl()));
            }
          },
        },
        {
          key: "connectKeycloakAndPiano",
          value: function () {
            y.location.hash.indexOf("#keycloak") < 0 &&
              y.localStorage.setItem("keycloak-previous-url", y.location.href),
              y.localStorage.setItem("keycloak-login-url", this.loginUrl),
              (y.tp = y.tp || []),
              y.tp.push(["setUseTinypassAccounts", !1]),
              y.tp.push(["setUsePianoIdUserProvider", !1]),
              y.tp.push(["setUsePianoIdLiteUserProvider", !0]),
              y.tp.push(["setExternalJWT", y.sessionStorage.jwt]),
              y.tp.push([
                "addHandler",
                "externalCheckoutComplete",
                function () {
                  y.location.reload();
                },
              ]),
              y.tp.push([
                "addHandler",
                "experienceExecute",
                function (e) {
                  e.accessList.map(function (e) {
                    e.active &&
                      ((v.getElementById("paywall-header-logedin").checked =
                        !0),
                      y.localStorage.setItem("loggedin", "true"));
                  }),
                    e.user &&
                      "anon" !== e.user.uid &&
                      ((v.getElementById("paywall-header-logedin").checked =
                        !0),
                      y.localStorage.setItem("loggedin", "true"));
                },
              ]),
              y.tp.push([
                "addHandler",
                "loginSuccess",
                function (e) {
                  (v.getElementById("paywall-header-logedin").checked = !0),
                    "PIANOID" === e.source && y.location.reload(),
                    y.localStorage.setItem("loggedin", "true");
                },
              ]),
              "true" !== y.localStorage.getItem("loggedin") ||
                y.sessionStorage.getItem("jwt") ||
                (y.localStorage.removeItem("loggedin"), this.goToLogin());
          },
        },
      ]);
      var e,
        t = i;
      function i(e) {
        U(this, i),
          (this.loginUrl = e.loginUrl),
          (this.logoutUrl = e.logoutUrl),
          (this.registrationUrl = e.registrationUrl),
          (this.changePasswordUrl = e.changePasswordUrl),
          this.init();
      }
      "object" === o(y.fdKeycloakLoginOptions) &&
        !0 === (e = y.fdKeycloakLoginOptions).enabled &&
        new t(e);
    }),
    (f.fn.lightboxCarousel = function () {
      return this.each(function () {
        function t() {
          var e, t;
          f(y).width() < 767 &&
            (f(".lightbox--media .hero-media__media").removeAttr("style"),
            (e = f(y).height()),
            (t = f(y).width()),
            e < t
              ? (f(".lightbox--media .hero-media__media").height(e),
                f(".lightbox--media .carousel__list").height(e),
                f(".lightbox--media .hero-media__caption").hide())
              : t < e &&
                (f(".carousel").carousel(),
                f(".lightbox--media .hero-media__media").removeAttr("style"),
                f(".lightbox--media .hero-media__caption").show()));
        }
        f(y).on("orientationchange", function (e) {
          t();
        }),
          f(y).on("resize", function () {
            t();
          }),
          f(v).on("click", ".carousel__caption__button", function () {
            f(".lightbox--media .hero-media__caption").slideToggle();
          }),
          t();
      });
    }),
    (p = jQuery).extend(ee.prototype, {
      init: function () {
        var e = this;
        this.refresh(),
          p(y).on("resize", function () {
            e.refresh();
          });
      },
      getDataAttr: function (e, t, i) {
        return void 0 !== (e = e.data(t)) && "" !== e ? e : i;
      },
      refresh: function () {
        var e =
          (this.config.animateMobile && p.utils.isMobileByWidth()) ||
          (this.config.animateDesktop && p.utils.isDesktopByWidth());
        e && !this.isInitialized
          ? ((this.isInitialized = !0), this.$root.marquee(this.config))
          : !e &&
            this.isInitialized &&
            ((this.isInitialized = !1), this.$root.marquee("destroy"));
      },
    }),
    (p.fn.jsMarquee = function (e) {
      return this.each(function () {
        p.data(this, "jsMarquee") || p.data(this, "jsMarquee", new ee(this, e));
      });
    }),
    p(function () {
      p("[data-marquee]").jsMarquee();
    }),
    (m = jQuery).extend(te.prototype, {
      init: function () {
        this.isDesktop && (this.initToggling(), this.initLoadContent());
      },
      initToggling: function () {
        var e = this,
          t = e.$menu.find(".has-submenu.nav-main__item--level1");
        t.on("mouseenter mouseleave", function () {
          e.toggleHandler(this);
        }),
          m.getEventManager().on(
            "close-overlays",
            function () {
              t.removeClass(e.visibilityClass);
            },
            e
          );
      },
      initLoadContent: function () {
        var t = this;
        t.$menu.find("[data-ajax-url]").on("mouseenter", function (e) {
          0 < m(this).closest(".nav-main__flyout").length &&
            e.stopPropagation(),
            t.loadContentHandler(this);
        });
      },
      toggleHandler: function (e) {
        var t = m(e),
          i = this,
          o = void 0;
        y.setTimeout(function () {
          (o = t.find(".nav-main__flyout")),
            t.is(":hover")
              ? (m.getEventManager().fire("close-overlays", null, i),
                o.addClass(i.visibilityClass))
              : o.removeClass(i.visibilityClass);
        }, i.settings.lazyOffset);
      },
      loadContentHandler: function (e) {
        var t = this,
          i = (e = m(e)).data("ajax-url"),
          o = e
            .closest(".nav-main__item--level1")
            .find(".nav-main__teaser-container");
        t.settings.enableCaching &&
        Object.prototype.hasOwnProperty.call(t.cache, i)
          ? (o.html(t.cache[i]), m.getEventManager().fire("picturefill"))
          : jQuery.ajax({
              url: i,
              type: "GET",
              success: function (e) {
                (t.cache[i] = e),
                  o.html(t.cache[i]),
                  m.getEventManager().fire("picturefill");
              },
            });
      },
    }),
    (m.fn.menuFlyout = function (e) {
      return this.each(function () {
        m.data(this, "menuFlyout") ||
          m.data(this, "menuFlyout", new te(this, e));
      });
    }),
    f(function () {
      f(".nav-main li.has-submenu a").on("touchstart touchend", function (e) {
        var t;
        768 <= y.innerWidth &&
          ((t =
            0 !== f(this).closest(".nav-li--level2").length ||
            0 !== f(this).closest(".nav-main__list--level2").length),
          f(this).hasClass("hover-simulate") ||
            t ||
            (e.preventDefault(),
            f(".hover-simulate").each(function () {
              f(this).removeClass("hover-simulate");
            }),
            f(this).closest("li.has-submenu").addClass("hover-simulate"),
            f(this).addClass("hover-simulate")));
      }),
        f("body").on("touchstart touchend", function (e) {
          var t;
          768 <= y.innerWidth &&
            (f(e.target).parents().addBack().is(".nav-main") ||
              ((t = f(".hover-simulate")).length &&
                (e.preventDefault(),
                t.each(function () {
                  f(this).removeClass("hover-simulate");
                }))));
        });
    }),
    (x.prototype.bindEvents = function () {
      var t = this;
      f(this.rootNode).on("click", ".nav-main-toggle", function (e) {
        e.preventDefault(),
          t.onMenuToggle(
            t.options.navPrimaryActiveClass,
            t.options.iconButtonCloseClass
          );
      }),
        f(this.rootNode).on("click", ".nav-main__toggle-sub", function (e) {
          e.preventDefault(),
            f(this).closest("li").hasClass("has-submenu") &&
              t.onSubMenuToggle(
                this,
                t.options.iconClassClose,
                t.options.iconClassOpen,
                t.options.navSecondaryActiveClass
              );
        }),
        f.getEventManager().on(
          "close-overlays",
          function () {
            t.$navButton.removeClass(t.options.iconButtonCloseClass),
              t.$nav.removeClass(t.options.navPrimaryActiveClass);
          },
          t
        );
    }),
    (x.prototype.onMenuToggle = function (e, t) {
      this.$navButton.hasClass(t) ||
        f.getEventManager().fire("close-overlays", null, this),
        this.$navButton.toggleClass(t),
        this.$nav.toggleClass(e);
    }),
    (x.prototype.onSubMenuToggle = function (e, t, i) {
      var e = f(e),
        o = e.closest("li").find("ul").first(),
        n = o.siblings("ul").addBack(),
        s = "nav-main__list--level2",
        r = "nav-main__list--level3";
      e.toggleClass(t).toggleClass(i),
        o.hasClass(s)
          ? n.toggleClass(s + "--active")
          : o.hasClass(r) && n.toggleClass(r + "--active");
    }),
    (f.fn.navigation = function (e) {
      return this.each(function () {
        new x(this, e);
      });
    }),
    f(function () {
      var n,
        e = f(".article__body").find(".pager").length,
        t = f("#paywall-container"),
        i = !1;
      (i = N("one") ? N("one") : i) && se(),
        e &&
          !i &&
          (0 < t.length && void 0 !== y.tp
            ? ((n = !1),
              y.tp.push([
                "addHandler",
                "experienceExecute",
                function (e) {
                  if (!n) {
                    var t,
                      i = !1;
                    try {
                      if (e.accessList && 0 < e.accessList.length)
                        for (var o = 0; o < e.accessList.length; o++)
                          if (e.accessList[o].aid === tp.aid) {
                            i = !0;
                            break;
                          }
                    } catch (e) {}
                    (i
                      ? ((t = f("#paywall-container"))
                          .children()
                          .insertBefore(t),
                        ne)
                      : se)(),
                      (n = !0);
                  }
                },
              ]))
            : ne());
    }),
    (Q.prototype.redraw = function (e) {
      f.each(f(e).find(".panel"), function (e, t) {
        f(t).css("height", "");
      }),
        this.draw(e);
    }),
    (Q.prototype.draw = function (e) {
      if (f(e).width() <= 0) return !1;
      if (f(e).find(".panel").length < 2) return !1;
      var t = f(e).find(".panel"),
        i = Math.round(f(e).width() / t.first().width(), 0),
        o = [],
        n = 0;
      f.each(t, function (e, t) {
        t = f(t).height();
        o.push(t),
          (n = (e + 1) % i == 0 ? ((o[e] = o[e - 1] = n < t ? t : n), 0) : t);
      });
      for (var s = 0; s < o.length; s++) f(t[s]).height(o[s]);
      return !0;
    }),
    (f.fn.panelEqualizer = function () {
      return this.each(function () {
        new Q(this);
      });
    }),
    (re.prototype.init = function () {
      var i = this;
      jQuery(".obfuscated").each(function (e, t) {
        i.replaceTextContent(t),
          jQuery(t).removeClass("obfuscated").addClass("deobfuscated");
      }),
        jQuery(v).trigger("paywall-deobfuscation-complete");
    }),
    (re.prototype.replaceTextContent = function (e) {
      var t = jQuery(e);
      if (t.hasClass("obfuscated")) {
        for (var i = e.textContent, o = "", n = 0; n < i.length; n++) {
          var s = i.charCodeAt(n);
          177 === s
            ? (o += "%")
            : 178 === s
            ? (o += "!")
            : 180 === s
            ? (o += ";")
            : 181 === s
            ? (o += "=")
            : 32 === s
            ? (o += " ")
            : 10 === s
            ? (o += "\n")
            : 33 < s && (o += String.fromCharCode(s - 1));
        }
        t.html(o);
      }
    }),
    (jQuery.fn.deobfuscateText = function (e) {
      return this.each(function () {
        new re(this);
      });
    }),
    jQuery(function () {
      "true" === sessionStorage.deobfuscate &&
        jQuery(".article__body").deobfuscateText();
    }),
    (ae.prototype.setState = function (t) {
      var i = this;
      Object.keys(this.state).forEach(function (e) {
        t[e] === d ? (i.state[e] = !1) : (i.state[e] = !i.state[e]),
          (i.loginButton.checked = i.state[e]),
          (i.mobileModifier.checked = i.state[e]);
      });
    }),
    (ae.prototype.clickEvents = function () {
      var i = this,
        o = void 0;
      jQuery(v).on(
        "click",
        ".header-top--mobile .header-top-button",
        function (e) {
          var e = e.target,
            t = jQuery(e);
          t.hasClass("header-top-button--keycloak-login") ||
            (jQuery(".nav-main-toggle--closed").trigger("click"),
            t.hasClass("header-top-button--close")
              ? o.close()
              : (o = jQuery(
                  "[data-remodal-id=" + String(e.dataset.fdpmodalTarget) + "]"
                ).remodal()),
            i.setState({ userButton: !i.state.userButton }));
        }
      ),
        jQuery(v).on("click", ".nav-main-toggle", function () {
          i.setState({ menuButton: !i.state.menuButton });
        });
    }),
    (jQuery.fn.paywallHeaderMobile = function (e) {
      return this.each(function () {
        new ae(this);
      });
    }),
    jQuery(function () {
      var e = jQuery.utils.getUrlParameter("paywall-passwort-reset-status");
      if (e)
        switch (e) {
          case "erfolgreich":
            staticMessage(
              "Ihnen wurde erfolgreich ein neues Passwort zugesendet. Bitte Ã¼berprÃ¼fen Sie Ihr Postfach.",
              "success"
            );
            break;
          case "fehlerhaft":
            staticMessage(
              "Es ist ein Fehler beim ZurÃ¼cksetzen Ihres Passwortes aufgetreten. FÃ¼r weitere Fragen wenden Sie sich bitte an unseren Leserservice.",
              "error"
            );
            break;
          case "abgelaufen":
            staticMessage(
              "Der Link zum ZurÃ¼cksetzen Ihres Passwortes ist abgelaufen. Bitte versuchen Sie es noch einmal von vorn oder wenden Sie sich fÃ¼r weitere Fragen an unseren Leserservice.",
              "error"
            );
        }
    }),
    (P.prototype.postChoice = function () {
      this.shouldReloadAfterPick && y.location.reload();
    }),
    (P.prototype.setChoice = function (e) {
      if (void 0 === e) return !1;
      (this.choice = e), this.setPersistantValue(e), this.postChoice();
    }),
    (P.prototype.unsetChoice = function () {
      this.setPersistantValue(""), this.postChoice();
    }),
    (P.prototype.initialize = function () {
      var i,
        e = this.$rootNode.data("persist-list-selection-name"),
        o = this;
      if (void 0 === e || 0 === e.length) return !1;
      (this.resourceName = e),
        (i = this.getPersistantValue()),
        f.each(this.$listItems, function () {
          var e = f(this),
            t = e.data("more-item") || "";
          0 < t.length && t === i
            ? (o.$listItemsUnset.push(this),
              e.addClass("current"),
              o.$rootNode.removeClass("choice-empty"),
              o.chosenSelect.text(e.data("more-label")))
            : o.$listItemsSet.push(this);
        }),
        f(this.$listItemsSet).on("click", function () {
          o.setChoice(f(this).data("more-item"));
        }),
        f(this.$listItemsUnset).on("click", function () {
          o.unsetChoice();
        });
    }),
    (P.prototype.getPersistantValue = function () {
      var e = this.resourceName;
      if (
        2 ===
        (e = ("; " + String(y.document.cookie)).split("; " + String(e) + "="))
          .length
      )
        return e.pop().split(";").shift();
    }),
    (P.prototype.setPersistantValue = function (e) {
      var t, i;
      (t = this.resourceName),
        (e = e),
        void 0 === t ||
          t.length <= 0 ||
          ((i = new Date()).setTime(i.getTime() + 864e7),
          (y.document.cookie =
            String(t) +
            "=" +
            String(e) +
            "; expires=" +
            String(i.toUTCString()) +
            ";path=/"));
    }),
    (f.fn.persistListSelection = function () {
      return this.each(function () {
        new P(this);
      });
    }),
    f(function () {
      f("[data-persist-list-selection-name]")
        .addClass("choice-empty")
        .persistListSelection();
    }),
    (f.fn.poll = function () {}),
    (jQuery.fn.pollSelect = function () {
      return this.each(function () {
        var e, t;
        (t = f((e = this)).find(".poll__answer")),
          jQuery(e).on("click", function () {
            t.each(function (e, t) {
              t = f(t);
              t.find(".poll__answer__input").is(":checked")
                ? t.addClass("selected")
                : t.removeClass("selected");
            });
          });
      });
    }),
    (le.prototype.setupWeatherData = function () {
      var t = this;
      jQuery.ajax({
        type: "GET",
        async: !0,
        cache: !0,
        url: this.dataUrl,
        dataType: "jsonp",
        jsonp: "callback",
        jsonpCallback: "jsonp_callback",
        success: function (e) {
          (t.currentDayNight = e.actual_weather.daynight),
            (t.temperature =
              String(Math.round(e.actual_weather.temperature)) + " Â°C"),
            (t.weatherSymbol = e.actual_weather.weather_symbol),
            "sonnig" === t.weatherSymbol &&
              ("day" === t.currentDayNight
                ? (t.WeatherSymbol = "wetter--icon-sonnig-tag")
                : (t.WeatherSymbol = "wetter--icon-sonnig-nacht")),
            "heiter" === t.weatherSymbol &&
              ("day" === t.currentDayNight
                ? (t.WeatherSymbol = "wetter--icon-heiter-tag")
                : (t.WeatherSymbol = "wetter--icon-heiter-nacht")),
            ("wolkig" !== t.weatherSymbol && "wolkig_n" !== t.weatherSymbol) ||
              ("day" === t.currentDayNight
                ? (t.WeatherSymbol = "wetter--icon-wolkig-tag")
                : (t.WeatherSymbol = "wetter--icon-wolkig-nacht")),
            "starkbewoelkt" === t.weatherSymbol &&
              ("day" === t.currentDayNight
                ? (t.WeatherSymbol = "wetter--icon-stark-bewoelkt-tag")
                : (t.WeatherSymbol = "wetter--icon-stark-bewoelkt-nacht")),
            ("bedeckt" !== t.weatherSymbol &&
              "bedeckt_n" !== t.weatherSymbol) ||
              (t.WeatherSymbol = "wetter--icon-bedeckt-tag"),
            "spruehregen" === t.weatherSymbol &&
              (t.WeatherSymbol = "wetter--icon-sprueh-nieselregen-tag"),
            "regen" === t.weatherSymbol &&
              (t.WeatherSymbol = "wetter--icon-regen-tag"),
            "schneeregen" === t.weatherSymbol &&
              (t.WeatherSymbol = "wetter--icon-schneeregen-tag"),
            "schneefall" === t.weatherSymbol &&
              (t.WeatherSymbol = "wetter--icon-schneefall-tag"),
            "schneegriesel" === t.weatherSymbol &&
              (t.WeatherSymbol = "wetter--icon-schneegriesel-tag"),
            "regenschauer" === t.weatherSymbol &&
              ("day" === t.currentDayNight
                ? (t.WeatherSymbol = "wetter--icon-regenschauer-tag")
                : (t.WeatherSymbol = "wetter--icon-regenschauer-nacht")),
            "schneeschauer" === t.weatherSymbol &&
              ("day" === t.currentDayNight
                ? (t.WeatherSymbol = "wetter--icon-schneeschauer-tag")
                : (t.WeatherSymbol = "wetter--icon-schneeschauer-nacht")),
            "schneeregenschauer" === t.weatherSymbol &&
              ("day" === t.currentDayNight
                ? (t.WeatherSymbol = "wetter--icon-schneeregenschauer-tag")
                : (t.WeatherSymbol = "wetter--icon-schneeregenschauer-nacht")),
            "gewitter" === t.weatherSymbol &&
              (t.WeatherSymbol = "wetter--icon-gewitter-tag"),
            "gefrierenderregen" === t.weatherSymbol &&
              (t.WeatherSymbol = "wetter--icon-gewitter-tag"),
            "nebel" === t.weatherSymbol &&
              (t.WeatherSymbol = "wetter--icon-nebel-tag"),
            jQuery(".temperature").html(
              "<span>" +
                String(t.temperature) +
                "</span><span class='icon-wetter " +
                String(t.WeatherSymbol) +
                "'></span>"
            );
        },
      });
    }),
    (jQuery.fn.portalWeather = function (e) {
      return this.each(function () {
        new le(this, e);
      });
    }),
    (T.prototype.initToolbar = function () {
      var e = this;
      this.$document.data("print-initialized", !0),
        this.$document.on("click", ".body__print .print-noimages", function () {
          e.hideImagesPrint();
        }),
        this.$document.on("click", ".body__print .print-back", function () {
          e.$body.fadeToggle("slow", function () {
            jQuery(this).removeClass("body__print"),
              jQuery(".print-bar").remove(),
              jQuery(".print-header-adress").remove(),
              e.closePrint();
          });
        });
    }),
    (T.prototype.closePrint = function () {
      this.$body.fadeToggle("slow", function () {
        jQuery(this).removeAttr("style");
      });
    }),
    (T.prototype.openPrint = function () {
      var e;
      this.$body.hasClass("body__print") ||
        ((e = y.location.href),
        this.$body.addClass("body__print"),
        jQuery(".page-wrapper").prepend(
          "<div class='print-bar'><div class='print-nav'><span class='print-noimages'>Bilder ausblenden</span><span class='print-page'> <a href='javascript:window.print();'>Seite drucken</a></span><span class='print-back'>zurÃ¼ck zum Artikel</span></div></div>"
        ),
        jQuery(".nav-main ").append(
          "<div class='print-header-adress'>Adresse dieses Artikels:<a class='print-header-adress-link' href='" +
            String(e) +
            "'>" +
            String(e) +
            "</a></div>"
        ),
        jQuery(y).scrollTop(0),
        this.$body.fadeToggle("slow", function () {
          jQuery(this).removeAttr("style");
        }));
    }),
    (T.prototype.hideImagesPrint = function () {
      this.$body.hasClass("body__print--imagehide")
        ? (this.$body.removeClass("body__print--imagehide"),
          jQuery(".print-noimages").text("Bilder ausblenden"))
        : (this.$body.addClass("body__print--imagehide"),
          jQuery(".print-noimages").text("Bilder einblenden"));
    }),
    (jQuery.fn.print = function (e) {
      return this.each(function () {
        new T(this);
      });
    }),
    f.extend(de.prototype, {
      init: function () {
        var e = this;
        e.setDate(),
          f("select", e.root).on("change", function () {
            e.setDate();
          });
      },
      getDay: function () {
        return parseInt(
          f(".form__input--day", this.root).find("option:selected").text(),
          10
        );
      },
      getMonth: function () {
        return parseInt(
          f(".form__input--month", this.root).find("option:selected").text(),
          10
        );
      },
      getYear: function () {
        return parseInt(
          f(".form__input--year", this.root).find("option:selected").text(),
          10
        );
      },
      setDate: function () {
        (this.year = this.getYear()),
          (this.month = this.getMonth()),
          (this.day = this.getDay());
        var e = new Date(this.year, this.month - 1, 1),
          t = new Date(this.year, this.month, 1);
        this.setDay(this.year, this.month, (t - e) / 864e5),
          this.setMonth(this.year),
          this.setButtonLink(this.day, this.month, this.year);
      },
      setDay: function (n, s, r) {
        var a = this,
          e = f(".form__input--day", a.root),
          t = e.find("select"),
          l = 1;
        e.find("option").each(function (e, t) {
          var i = t.value > r,
            o =
              n === a.archiveYear &&
              s === a.archiveMonth &&
              t.value > a.archiveDay;
          i || o
            ? t.setAttribute("disabled", "disabled")
            : (t.removeAttribute("disabled"), (l = e));
        }),
          t.prop("selectedIndex") > l && (t.val(l), (this.day = l));
      },
      setMonth: function (i) {
        var o = this;
        f(".form__input--month", o.root)
          .find("option")
          .each(function (e, t) {
            i === o.archiveYear && t.value > o.archiveMonth
              ? t.setAttribute("disabled", "disabled")
              : t.removeAttribute("disabled");
          });
      },
      setButtonLink: function (e, t, i) {
        f(this.root).attr(
          "action",
          "/printarchiv/nachrichten-vom-" +
            String(e) +
            "-" +
            String(t) +
            "-" +
            String(i) +
            ".html"
        );
      },
    }),
    f(function () {
      f("[data-printarchive]").each(function () {
        f.data(this, "printarchive") ||
          f.data(this, "printarchive", new de(this));
      });
    }),
    ($.prototype.bindEvents = function () {
      var t = this;
      this.$rootNode.on("click", ".quiz__restart", function (e) {
        e.preventDefault(), t.restartQuiz();
      }),
        this.$rootNode.on("click", ".quiz-frage__next", function () {
          t.$rootNode.trigger("nextPage");
        }),
        this.$rootNode.on("click", ".quiz-answer", function () {
          0 === f(this).closest(".lock").length &&
            t.$rootNode.trigger("questionAnswered", [this]);
        });
    }),
    ($.prototype.showAnswer = function (e) {
      e = f(e);
      0 < e.find(".quiz-richtig").length
        ? (this.$rootNode
            .find(".quiz-antwort")
            .removeClass("quiz-antwort--falsch")
            .addClass("quiz-antwort--richtig")
            .find("p:first-child")
            .text("Das war richtig!"),
          e.find(".quiz-richtig").addClass("quiz-richtig--selected"))
        : (this.$rootNode
            .find(".quiz-antwort")
            .removeClass("quiz-antwort--richtig")
            .addClass("quiz-antwort--falsch")
            .find("p:first-child")
            .text("Das war leider falsch!"),
          e.find(".quiz-falsch").addClass("quiz-falsch--selected")),
        this.$rootNode.find(".quiz-antwort").slideToggle("fast");
    }),
    ($.prototype.evaluateAnswer = function (e) {
      return 0 < f(e).find(".quiz-richtig").length ? 1 : 0;
    }),
    ($.prototype.updateUI = function (e) {
      f(e).closest(".quiz__item").addClass("lock"),
        this.totalCount === this.currentCount + 1 &&
          this.$rootNode.find(".quiz-frage__next").text("zum Ergebnis");
    }),
    ($.prototype.restartQuiz = function () {
      y.location.reload();
    }),
    ($.prototype.nextQuestion = function () {
      var e = this.$rootNode.find(".quiz__index").eq(this.currentCount),
        t = this.$rootNode
          .find(".quiz__item")
          .eq(this.currentCount)
          .hide()
          .next()
          .show();
      this.$rootNode
        .find(".quiz__page")
        .text(
          "Frage " +
            String(this.currentCount + 2) +
            " von " +
            String(this.totalCount)
        ),
        e.addClass("quiz__index--done").next().addClass("quiz__index--active"),
        this.$rootNode.find(".quiz-antwort").hide(),
        t.trigger("redraw");
    }),
    ($.prototype.showResult = function () {
      var e = this.$rootNode.find(".quiz-result__questions__item"),
        i = this,
        t = 0;
      this.$rootNode.find(".quiz__page").hide(),
        this.$rootNode.find(".quiz__positions").hide(),
        this.$rootNode.find(".quiz__list").hide(),
        this.$rootNode.find(".quiz-form").show();
      for (var o = 0; o < this.result.length; o++) t += this.result[o];
      var n = 100 / this.totalCount,
        n = Math.round(n * t),
        s = 100 - n;
      this.$rootNode.find(".quiz-result__bar--right").width(String(n) + "%"),
        this.$rootNode.find(".quiz-result__bar--wrong").width(s + "%"),
        this.$rootNode
          .find(".quiz-result__result")
          .text(String(t) + " von " + String(this.totalCount)),
        e.each(function (e, t) {
          f(t).addClass(i.result[e] ? "right" : "wrong");
        });
    }),
    (f.fn.quiz = function () {
      return this.each(function () {
        new $(this);
      });
    }),
    (jQuery.fn.stars = function (e) {
      jQuery(this).html("");
      for (
        var t = jQuery.extend(
            {
              stars: 5,
              emptyIcon: "fa-star-o",
              filledIcon: "fa-star",
              filledHalfIcon: "fa-star-half-o",
              value: 0,
              text: null,
              click: function () {},
            },
            e
          ),
          i = this,
          o = 0;
        o < t.stars;
        o++
      ) {
        var n = jQuery("<i>").addClass("fa").addClass(t.emptyIcon);
        t.text && n.attr("data-rating-text", t.text[o]), this.append(n);
      }
      t.text && ((e = jQuery("<div>").addClass("rating-text")), this.append(e));
      var s = this.find("i");
      s.on("mouseover", function () {
        var e = jQuery(this).index() + 1,
          e = s.slice(0, e);
        l.removeFilledStars(s, t),
          l.fillStars(e, t),
          t.text &&
            i.find(".rating-text").html(jQuery(this).data("rating-text"));
      })
        .on("mouseout", function () {
          l.removeFilledStars(s, t), l.fillStars(s.filter(".selected"), t);
          var e = l.fillHalfStars(a, t);
          e !== d && e.addClass("selected"),
            t.text && i.find(".rating-text").html("");
        })
        .on("click", function () {
          var e = jQuery(this).index();
          (t.value = e + 1),
            t.click.call(s.get(e), t.value),
            l.removeFilledStars(s, t),
            l.fillStars(s, t);
        });
      try {
        var r,
          a,
          l = {
            removeFilledStars: function (e, t) {
              return (
                e.removeClass(t.filledIcon).addClass(t.emptyIcon),
                e.removeClass(t.filledHalfIcon).addClass(t.emptyIcon),
                e
              );
            },
            fillStars: function (e, t) {
              return e.removeClass(t.emptyIcon).addClass(t.filledIcon), e;
            },
            fillHalfStars: function (e, t) {
              return (
                e !== d &&
                  e.removeClass(t.emptyIcon).addClass(t.filledHalfIcon),
                e
              );
            },
          };
        0 < t.value &&
          ((t.value = 0.5 * Math.round(t.value / 0.5)),
          (r = s.slice(0, t.value)),
          (a = s.slice(t.value, Math.round(t.value))),
          (t.value = 0.5 * Math.round(t.value / 0.5)),
          (t.value + 0.5 === Math.round(t.value)
            ? (l.fillStars(r, t).addClass("selected"), l.fillHalfStars(a, t))
            : l.fillStars(r, t)
          ).addClass("selected"));
      } catch (e) {}
    }),
    (ce.prototype.initRedirect = function (e, t) {
      (i = (i = t.urlParam).replace(/[\[]/, "\\[").replace(/[\]]/, "\\]")),
        (i = "[\\?&]" + String(i) + "=([^&#]*)");
      var i = null == (i = new RegExp(i).exec(y.location.href)) ? "" : i[1];
      "" !== i &&
        ((i = decodeURIComponent(i)),
        "" !== t.destParam &&
          t.destParam !== d &&
          (i =
            -1 !== i.indexOf("?")
              ? String(i) + "&" + String(t.destParam)
              : String(i) + "?" + String(t.destParam)),
        f(e).find(".redirect-link").attr("href", i),
        f(e).show(),
        f(e)
          .find(".redirect-close")
          .on("click", function () {
            f(e).fadeOut();
          }),
        0 < t.fadeOutTime) &&
        setTimeout(function () {
          f(e).fadeOut();
        }, t.fadeOutTime);
    }),
    (jQuery.fn.redirect = function (e) {
      return this.each(function () {
        new ce(this, e);
      });
    }),
    (jQuery.fn.redirectionSelectbox = function () {
      return this.each(function () {
        jQuery(this).on("change", function (e) {
          var t = f(this).find("option:selected").data("redirection");
          y.location.href = t || y.location.href;
        });
      });
    }),
    jQuery,
    (Y = {
      itemsSelector: ".menu__item",
      targetWrapperSelector: ".menu__more",
      targetSelector: ".menu__more-links",
      createTargetElement: function () {},
    }),
    f.extend(he.prototype, {
      init: function () {
        var i = this,
          e = f(i.settings.itemsSelector, i.$root),
          o = !1;
        if (!i.hasOverflow(i.$root, e.last())) return !0;
        i.settings.createTargetElement.apply();
        var n = f(this.settings.targetWrapperSelector, this.$root),
          s = f(this.settings.targetSelector, this.$root);
        n.is(f(i.settings.itemsSelector, i.$root).last()) && (o = !0),
          f(e.get().reverse()).each(function () {
            var e = f(this),
              t = o ? n : e;
            if (!i.hasOverflow(i.$root, t)) return !1;
            e.is(n) || s.prepend(this);
          });
      },
      hasOverflow: function (e, t) {
        var i = e.position().top + e.outerHeight(),
          e = e.position().left + e.outerWidth(),
          o = t.position().top + t.outerHeight(!0),
          t = t.position().left + t.outerWidth(!0);
        return i < o || e < t;
      },
    }),
    (f.fn.relocateOverflow = function (e) {
      f.data(this, "relocate-overflow") ||
        f.data(this, "relocate-overflow", new he(this, e));
    }),
    (B.prototype.appendApiScripts = function () {
      var e, t, i, o;
      0 ===
        jQuery("script[src='//connect.facebook.net/de_DE/all.js']").length &&
        (((t = v.createElement("script")).async = !0),
        (t.src = "//connect.facebook.net/de_DE/all.js"),
        jQuery("#fb-root").length) &&
        v.getElementById("fb-root").appendChild(t),
        (y.fbAsyncInit = function () {
          y.FB.init({
            appId: "1650819678556421",
            autoLogAppEvents: !0,
            xfbml: !0,
            version: "v2.8",
          }),
            y.FB.AppEvents.logPageView();
        }),
        0 ===
          jQuery("script[src='//platform.twitter.com/widgets.js']").length &&
          (y.twttr =
            ((t = "twitter-wjs"),
            (i = (e = v).getElementsByTagName("script")[0]),
            (o = y.twttr || {}),
            e.getElementById(t) ||
              (((e = e.createElement("script")).id = t),
              (e.src = "//platform.twitter.com/widgets.js"),
              i.parentNode.insertBefore(e, i),
              (o._e = []),
              (o.ready = function (e) {
                o._e.push(e);
              })),
            o)),
        0 ===
          jQuery("script[src='//platform.instagram.com/en_US/embeds.js']")
            .length &&
          ((this.jsCode = v.createElement("script")),
          (this.jsCode.type = "text/javascript"),
          (this.jsCode.async = !0),
          (this.jsCode.defer = !0),
          this.jsCode.setAttribute(
            "src",
            "//platform.instagram.com/en_US/embeds.js"
          ),
          v.body.appendChild(this.jsCode));
    }),
    (B.prototype.setupElements = function () {
      var e = this;
      jQuery(this.rootNode).html(
        "<div class='scribble-live-title'></div><div class='scribble-live-description'></div><div class='scribble-live-wrapper scribble-animate'><ul class='scribble-live-list'><li class='scribble-list-item scribble-loader scribble-list-item-start'></li></ul><div class='dots-after'></div><div class='scribble-load-more-outer'><div class='scribble-load-more'>Mehr laden</div></div></div>"
      ),
        setTimeout(function () {
          e.getScribbleLiveList("init"), e.bindEvents();
        }, 200);
    }),
    (B.prototype.bindEvents = function () {
      var t = this;
      jQuery(this.rootNode)
        .find(".scribble-load-more")
        .on("click", function () {
          var e = jQuery(t.rootNode)
            .find(".scribble-live-list")
            .find(".scribble-list-item").length;
          t.setupScribbleLiveList("refresh", e),
            jQuery(this).addClass("scribble-live-loading").text("wird geladen"),
            setTimeout(function () {
              var e = jQuery(t.rootNode)
                .find(".scribble-live-list")
                .find(".scribble-list-item").length;
              t.setupScribbleLiveList("loadmore", e);
            }, 200);
        });
    }),
    (B.prototype.getScribbleLiveList = function (e) {
      (this.eventUrl =
        "//apiv1.scribblelive.com/event/" +
        String(this.opts.EventId) +
        "/page/?Token=" +
        String(this.opts.APIToken) +
        "&pageSize=1000&Order=asc&format=json"),
        this.setupScribbleLiveList(e);
    }),
    (B.prototype.setupScribbleLiveList = function (s, r) {
      var a = this,
        l = [];
      jQuery
        .ajax({
          typ: "GET",
          async: !0,
          cache: !0,
          jsonpCallback: "jsonCallback",
          url: this.eventUrl,
          dataType: "jsonp",
          success: function (n) {
            jQuery(a.rootNode).find(".scribble-live-title").text(n.Title),
              1 === n.IsLive
                ? jQuery(a.rootNode)
                    .find(".scribble-live-title")
                    .append("<div class='scribble-live-state'>live</div>")
                : jQuery(a.rootNode).find(".scribble-live-state").remove(),
              "" !== n.Description
                ? (jQuery(a.rootNode)
                    .find(".scribble-live-description")
                    .text(n.Description),
                  jQuery(a.rootNode)
                    .find(".scribble-live-description")
                    .css("display", "block"))
                : jQuery(a.rootNode)
                    .find(".scribble-live-description")
                    .css("display", "none");
            try {
              jQuery.each(n.Posts, function (e, t) {
                var i, o;
                (a.postId = n.Posts[e].Id),
                  (a.type = n.Posts[e].Type),
                  (a.Created = n.Posts[e].Created),
                  (a.Content = n.Posts[e].Content),
                  (a.socialPlattform = n.Posts[e].PostMeta),
                  (a.socialPlattformTwitter = n.Posts[e].Source),
                  (a.socialPlattformContent = n.Posts[e].Content),
                  (a.socialPlattform = n.Posts[e].PostMeta),
                  "facebook:post" === a.socialPlattform.Type ||
                  "facebook" === a.socialPlattform.source
                    ? "facebook:post" === a.socialPlattform.Type
                      ? ((a.isSocialPlattformUrl = JSON.parse(
                          a.socialPlattform.Facebook
                        ).link),
                        (a.isSocialPlattformType = JSON.parse(
                          a.socialPlattform.Facebook
                        ).type),
                        (a.Source =
                          "von " +
                          String(
                            JSON.parse(a.socialPlattform.Facebook).from.name
                          ) +
                          " via Facebook"))
                      : ((a.isSocialPlattformUrl = JSON.parse(
                          a.socialPlattform.data
                        ).link),
                        (a.isSocialPlattformType = JSON.parse(
                          a.socialPlattform.data
                        ).type),
                        (a.Source =
                          "von " +
                          String(JSON.parse(a.socialPlattform.data).from.name) +
                          " via Facebook"),
                        "link" === a.isSocialPlattformType &&
                          (a.isSocialPlattformType = "post"))
                    : "twitter:tweet" === a.socialPlattform.Type ||
                      "twitter" === a.socialPlattform.source
                    ? ((a.isSocialPlattformUrl = a.socialPlattformTwitter),
                      (a.isSocialPlattformUrl = a.isSocialPlattformUrl.replace(
                        "<a href='",
                        ""
                      )),
                      (a.isSocialPlattformUrl = a.isSocialPlattformUrl.replace(
                        "'>twitter</a>",
                        ""
                      )),
                      (a.Source =
                        "von " +
                        String(JSON.parse(a.socialPlattform.Tweet).user.name) +
                        " via Twitter"))
                    : "instagram:post" === a.socialPlattform.Type
                    ? ((a.isSocialPlattformUrl = JSON.parse(
                        a.socialPlattform.Instagram
                      ).link),
                      (a.Source =
                        "von " +
                        String(
                          JSON.parse(a.socialPlattform.Instagram).user.full_name
                        ) +
                        " via Instagram"))
                    : "youtube:post" === a.socialPlattform.Type
                    ? (a.Source =
                        "von " +
                        String(
                          JSON.parse(a.socialPlattform.Youtube).snippet
                            .channelTitle
                        ) +
                        " via Youtube")
                    : "IMAGE" === a.type
                    ? (a.Image = n.Posts[e].Media[0].Url)
                    : "VIDEO" === a.type
                    ? (a.Video =
                        "<video class='embed-video' controls poster='" +
                        String(n.Posts[e].Media[1].Url) +
                        "'><source src='" +
                        String(n.Posts[e].Media[0].Url) +
                        "' type='video/mp4'><source src='movie.ogg' type='video/ogg'>Your browser does not support the video tag.</video>")
                    : "AUDIO" === a.type
                    ? (a.Audio =
                        "<audio class='embed-audio' controls><source src='" +
                        String(n.Posts[e].Media[0].Url) +
                        "' type='audio/mpeg'><source src='audio.ogg' type='audio/ogg'>Your browser does not support the audio tag.</audio>")
                    : "" !== n.Posts[e].Creator.Avatar
                    ? ((a.scribbleAvatar =
                        "<span class='scribble-list-content-avatar'><img src='" +
                        String(n.Posts[e].Creator.Avatar) +
                        "'></span>"),
                      (a.Source =
                        String(a.scribbleAvatar) +
                        "<span class='scribble-list-content-author'>von " +
                        String(n.Posts[e].Creator.Name) +
                        "</span>"))
                    : (a.Source = "von " + String(n.Posts[e].Creator.Name)),
                  ("VIDEO" === a.type ||
                    "AUDIO" === a.type ||
                    ("IMAGE" === a.type &&
                      "instagram:post" !== a.socialPlattform.Type)) &&
                    ("" !== n.Posts[e].Creator.Avatar
                      ? ((a.scribbleAvatar =
                          "<span class='scribble-list-content-avatar'><img src='" +
                          String(n.Posts[e].Creator.Avatar) +
                          "'></span>"),
                        (a.Source =
                          String(a.scribbleAvatar) +
                          "<span class='scribble-list-content-author'>von " +
                          String(n.Posts[e].Creator.Name) +
                          "</span>"))
                      : (a.Source = "von " + String(n.Posts[e].Creator.Name))),
                  1 === n.Posts[e].IsStuck
                    ? (this.StuckClass = "stucked")
                    : (this.StuckClass = ""),
                  "loadmore" !== s
                    ? 0 ===
                      jQuery("#scribbleLive-" + String(n.Posts[e].Id)).length
                      ? "refresh" === s
                        ? e < a.opts.preloadLimit &&
                          ((i =
                            "<li data-public='1' id='scribbleLive-" +
                            String(n.Posts[e].Id) +
                            "' class='scribble-list-item new scribble-loader " +
                            String(this.StuckClass) +
                            "'><div class='scribble-list-time'></div><div class='scribble-list-content scribble-animate'></div></li>"),
                          0 === jQuery(a.rootNode).find(".new").length
                            ? 0 === jQuery(a.rootNode).find(".stucked").length
                              ? jQuery(a.rootNode)
                                  .find(".scribble-live-list")
                                  .prepend(i)
                              : jQuery(i).insertAfter(".stucked:last")
                            : jQuery(i).insertAfter(".new:last"),
                          a.placeScribbleLivePost(a.Source))
                        : e < a.opts.preloadLimit &&
                          (jQuery(a.rootNode)
                            .find(".scribble-live-list")
                            .append(
                              "<li data-public='1' id='scribbleLive-" +
                                String(n.Posts[e].Id) +
                                "' class='scribble-list-item scribble-loader " +
                                String(this.StuckClass) +
                                "'><div class='scribble-list-time'></div><div class='scribble-list-content scribble-animate'></div></li>"
                            ),
                          a.placeScribbleLivePost(a.Source))
                      : (jQuery(
                          "#scribbleLive-" + String(n.Posts[e].Id)
                        ).hasClass("stucked") || 1 !== n.Posts[e].IsStuck
                          ? jQuery(
                              "#scribbleLive-" + String(n.Posts[e].Id)
                            ).hasClass("stucked") &&
                            0 === n.Posts[e].IsStuck &&
                            (jQuery(a.rootNode)
                              .find(".scribble-live-list")
                              .html(""),
                            setTimeout(function () {
                              a.getScribbleLiveList("init");
                            }, 200))
                          : ((o = jQuery(
                              "#scribbleLive-" + String(n.Posts[e].Id)
                            ).html()),
                            setTimeout(function () {
                              jQuery(
                                "#scribbleLive-" + String(n.Posts[e].Id)
                              ).remove(),
                                jQuery(a.rootNode)
                                  .find(".scribble-live-list")
                                  .prepend(
                                    "<li data-public='1' id='scribbleLive-" +
                                      String(n.Posts[e].Id) +
                                      "' class='scribble-list-item stucked'>" +
                                      String(o) +
                                      "</li>"
                                  );
                            }, 200)),
                        a.Content !==
                          jQuery("#scribbleLive-" + String(n.Posts[e].Id))
                            .find(".scribble-list-content-inner")
                            .html() &&
                          jQuery("#scribbleLive-" + String(n.Posts[e].Id))
                            .find(".scribble-list-content-inner")
                            .html(a.Content))
                    : r <= e &&
                      e < r + a.opts.preloadLimit &&
                      (jQuery(a.rootNode)
                        .find(".scribble-live-list")
                        .append(
                          "<li data-public='1' id='scribbleLive-" +
                            String(n.Posts[e].Id) +
                            "' class='scribble-list-item scribble-loader" +
                            String(this.StuckClass) +
                            "'><div class='scribble-list-time'></div><div class='scribble-list-content scribble-animate'></div></li>"
                        ),
                      a.placeScribbleLivePost(a.Source)),
                  l.push("scribbleLive-" + String(n.Posts[e].Id)),
                  e === n.Posts.length - 1 &&
                    n.Posts.length > a.opts.preloadLimit &&
                    jQuery(a.rootNode)
                      .find(".scribble-list-item")
                      .last()
                      .attr("id") ===
                      "scribbleLive-" +
                        String(n.Posts[n.Posts.length - 1].Id) &&
                    jQuery(a.rootNode)
                      .find(".scribble-load-more")
                      .css("visibility", "hidden"),
                  setTimeout(function () {
                    jQuery(a.rootNode)
                      .find(".scribble-list-item")
                      .removeClass("new");
                  }, 1e3);
              });
            } catch (e) {
              y.console.log("SCRIBBLE-LIVE:", e.message);
            }
          },
        })
        .done(function () {
          "loadmore" !== s &&
            (a.refreshScribbleLiveList(),
            setTimeout(function () {
              a.deletePost(l);
            }, 1e3)),
            jQuery(a.rootNode).find(".scribble-list-item-start").remove(),
            jQuery(a.rootNode)
              .find(".scribble-load-more")
              .removeClass("scribble-live-loading")
              .text("Mehr laden");
        });
    }),
    (B.prototype.deletePost = function (e) {
      var t = [],
        i = e,
        o = t,
        n = [];
      jQuery(".scribble-live-list")
        .find(".scribble-list-item")
        .each(function (e) {
          t.push(jQuery(this).attr("id"));
        }),
        setTimeout(function () {
          jQuery.grep(o, function (e) {
            -1 === jQuery.inArray(e, i) && (n.push(e), 0);
          }),
            jQuery.each(n, function (e, t) {
              jQuery("#" + String(t)).remove();
            });
        }, 200),
        setTimeout(function () {
          t = [];
        }, 500);
    }),
    (B.prototype.placeScribbleLivePost = function (e) {
      var t = this.Created.replace("/", "");
      (t = (t = (t = t.replace(")/", "")).replace("Date(", "")).replace(
        "+0000",
        ""
      )),
        (t = parseInt(t, 10)),
        (this.postDate = new Date(t)),
        this.postDate.getMonth() + 1 < 10
          ? (this.month = "0" + String(this.postDate.getMonth() + 1))
          : (this.month = this.postDate.getMonth() + 1),
        this.postDate.getDate() < 10
          ? (this.day = "0" + String(this.postDate.getDate()))
          : (this.day = this.postDate.getDate()),
        this.postDate.getHours() < 10
          ? (this.hours = "0" + String(this.postDate.getHours()))
          : (this.hours = this.postDate.getHours()),
        this.postDate.getMinutes() < 10
          ? (this.minutes = "0" + String(this.postDate.getMinutes()))
          : (this.minutes = this.postDate.getMinutes()),
        (this.creditsHTML =
          "<span class='scribble-list-content-credits'>" +
          String(e) +
          "</span>"),
        (this.postDateRender =
          "<span class='scribble-date'>" +
          String(this.day) +
          "." +
          String(this.month) +
          "." +
          String(this.postDate.getFullYear()) +
          "</span><span class='scribble-time'>" +
          String(this.hours) +
          ":" +
          String(this.minutes) +
          "</span>"),
        this.loadStandardPosts(this.creditsHTML);
    }),
    (B.prototype.loadStandardPosts = function (e) {
      var t, i;
      this.socialPlattform.Type === d && this.socialPlattform.source === d
        ? "POLL" === this.type
          ? ((this.postHtml =
              "<div class='scrbbl-embed scrbbl-embed-poll' data-src='/post/" +
              String(this.postId) +
              "'></div><script>(function(d, s, id) {var js,ijs=d.getElementsByTagName(s)[0];if(d.getElementById(id))return;js=d.createElement(s);js.id=id;js.src='//embed.scribblelive.com/widgets/embed.js';ijs.parentNode.insertBefore(js, ijs);}(document, 'script', 'scrbbl-js'));</script>"),
            this.loadHtml(this.postId, this.postDateRender, this.postHtml))
          : "TEXT" === this.type || "EMBED" === this.type
          ? ((this.postHtml =
              "<div class='scribble-list-content-html'><div class='scribble-list-content-inner'>" +
              String(this.Content) +
              "</div>" +
              String(e) +
              "</div>"),
            this.loadHtml(this.postId, this.postDateRender, this.postHtml))
          : "IMAGE" === this.type
          ? ((this.postHtml =
              "<div class='scribble-list-content-image'><img src='" +
              String(this.Image) +
              "'></div><div class='scribble-list-content-html'><p>" +
              String(this.Content) +
              "</p>" +
              String(e) +
              "</div>"),
            this.loadHtml(this.postId, this.postDateRender, this.postHtml))
          : "AUDIO" === this.type
          ? ((this.postHtml =
              "<div class='scribble-list-content-audio'>" +
              String(this.Audio) +
              "</div><div class='scribble-list-content-html'><p>" +
              String(this.Content) +
              "</p>" +
              String(e) +
              "</div>"),
            this.loadHtml(this.postId, this.postDateRender, this.postHtml))
          : "VIDEO" === this.type
          ? ((this.postHtml =
              "<div class='scribble-list-content-video'>" +
              String(this.Video) +
              "</div><div class='scribble-list-content-html'><p>" +
              String(this.Content) +
              "</p>" +
              String(e) +
              "</div>"),
            this.loadHtml(this.postId, this.postDateRender, this.postHtml))
          : "HTML" === this.type &&
            ((this.postHtml =
              "<div class='scribble-list-content-html'>" +
              String(this.Content) +
              "</div>" +
              String(e) +
              "</div>"),
            (this.videoTest =
              -1 !== this.postHtml.indexOf("scrbbl-post-embed")),
            (this.slideShowTest = -1 !== this.postHtml.indexOf("data-url")),
            this.loadHtml(this.postId, this.postDateRender, this.postHtml),
            (!0 !== this.videoTest && !0 !== this.slideShowTest) ||
              (this.htmlElement = jQuery(
                "#scribbleLive-" + String(this.postId)
              ).find(".scrbbl-post-embed")),
            !0 === this.videoTest &&
              ((this.videoUrl = this.htmlElement.attr("data-url")),
              (this.videoHTML =
                '<video class="scrbbl-post-embed-video-player" width="320" height="240" controls controlsList="nodownload">\n  <source src=\'' +
                String(this.videoUrl) +
                '\' type="video/mp4">\nYour browser does not support the video tag.\n</video>'),
              this.htmlElement.html(this.videoHTML)),
            !0 === this.slideShowTest) &&
            (((t = v.createElement("script")).src =
              this.htmlElement.attr("data-url")),
            this.htmlElement.append(t),
            (i = setInterval(function () {
              1 === jQuery("body > .sl-slideshow").length &&
                (clearInterval(i), jQuery("body > .sl-slideshow").remove());
            }, 100)))
        : this.loadSocialPosts(this.postId, this.postDateRender, e);
    }),
    (B.prototype.loadSocialPosts = function (t, i, o) {
      var n = this;
      "twitter:tweet" === this.socialPlattform.Type ||
      "twitter" === this.socialPlattform.source
        ? jQuery
            .ajax({
              typ: "GET",
              async: !0,
              cache: !0,
              url:
                "https://publish.twitter.com/oembed?url=" +
                String(this.isSocialPlattformUrl) +
                "&omit_script=true",
              dataType: "jsonp",
              success: function (e) {
                n.postHtml = e.html + o;
              },
            })
            .done(function (e) {
              n.loadHtml(t, i, n.postHtml);
            })
        : "instagram:post" === this.socialPlattform.Type
        ? jQuery
            .ajax({
              typ: "GET",
              async: !0,
              cache: !0,
              url:
                "https://api.instagram.com/oembed?url=" +
                String(this.isSocialPlattformUrl) +
                "&omitscript=true",
              dataType: "jsonp",
              success: function (e) {
                n.postHtml = e.html + o;
              },
            })
            .done(function (e) {
              n.loadHtml(t, i, n.postHtml);
            })
        : "youtube:post" === this.socialPlattform.Type
        ? (this.loadHtml(t, i, n.socialPlattformContent + o),
          jQuery(this.rootNode)
            .find(".youtubePlayer")
            .parent()
            .addClass("scribble-list-content-video"))
        : ("facebook:post" !== this.socialPlattform.Type &&
            "facebook" !== this.socialPlattform.source) ||
          ("photo" === this.isSocialPlattformType ||
          "post" === this.isSocialPlattformType ||
          "link" === this.isSocialPlattformType
            ? ((this.isSocialPlattformUrl = this.isSocialPlattformUrl.replace(
                ":",
                "%3A"
              )),
              (this.facebookApiUrl =
                "https://www.facebook.com/plugins/post/oembed.json/?url=" +
                String(this.isSocialPlattformUrl) +
                "&maxwidth1000&omitscript=true"))
            : "video" === this.isSocialPlattformType &&
              ((this.isSocialPlattformUrl = this.isSocialPlattformUrl.replace(
                ":",
                "%3A"
              )),
              (this.facebookApiUrl =
                "https://www.facebook.com/plugins/video/oembed.json/?url=" +
                String(this.isSocialPlattformUrl) +
                "&maxwidth1000&omitscript=true")),
          jQuery
            .ajax({
              typ: "GET",
              async: !0,
              cache: !0,
              url: this.facebookApiUrl,
              dataType: "jsonp",
              success: function (e) {
                (e = (e = (e = (e = e.html + o).replace(
                  '<div id="fb-root"></div>',
                  ""
                )).replace(
                  '<div class="fb-post"',
                  '<div class="fb-post" data-width="750"'
                )).replace(
                  "<script>(function(d, s, id) {var js, fjs = d.getElementsByTagName(s)[0];if (d.getElementById(id)) return;js = d.createElement(s); js.id = id;js.src = \"//connect.facebook.net/de_DE/sdk.js#xfbml=1&version=v2.3\";fjs.parentNode.insertBefore(js, fjs);}(document, 'script', 'facebook-jssdk'));</script>",
                  ""
                )),
                  (n.postHtml = e);
              },
              error: function (e) {},
            })
            .done(function (e) {
              jQuery(n.rootNode)
                .find("#scribbleLive-" + String(t))
                .addClass("social-facebook"),
                n.loadHtml(t, i, n.postHtml);
            }),
          (n.postHtml = n.Facebook));
    }),
    (B.prototype.loadHtml = function (t, e, i) {
      var o = this;
      jQuery(this.rootNode)
        .find("#scribbleLive-" + String(t))
        .find(".scribble-list-time")
        .html(e),
        jQuery(this.rootNode)
          .find("#scribbleLive-" + String(t))
          .find(".scribble-list-content")
          .html(i);
      try {
        y.FB.XFBML.parse(
          v.getElementById("scribbleLive-" + String(t)),
          function () {
            jQuery(o.rootNode)
              .find("#scribbleLive-" + String(t))
              .find(".scribble-list-content")
              .removeClass("scribble-animate"),
              jQuery(o.rootNode)
                .find("#scribbleLive-" + String(t))
                .find(".new")
                .removeClass("scribble-animate"),
              jQuery(o.rootNode)
                .find("#scribbleLive-" + String(t))
                .removeClass("scribble-loader");
            jQuery(o.rootNode).attr("id");
          }
        );
      } catch (e) {
        y.console.log(e.message),
          setTimeout(function () {
            o.animatePosts(t);
          }, 5e3);
      }
      try {
        setTimeout(function () {
          y.twttr.widgets.load(),
            y.twttr.events.bind("rendered", function (e) {
              o.animatePosts(t);
            });
        }, 1500);
      } catch (e) {
        y.console.log(e.message), o.animatePosts(t);
      }
      try {
        setTimeout(function () {
          y.instgrm.Embeds.process();
        }, 1500);
      } catch (e) {
        y.console.log(e.message), o.animatePosts(t);
      }
      setTimeout(function () {
        jQuery(o.rootNode)
          .find(".scribble-list-item")
          .find(".scribble-list-content")
          .removeClass("scribble-animate"),
          jQuery(o.rootNode)
            .find(".scribble-list-item")
            .find(".new")
            .removeClass("scribble-animate"),
          jQuery(o.rootNode)
            .find(".scribble-list-item")
            .removeClass("scribble-loader");
      }, 5e3);
    }),
    (B.prototype.animatePosts = function (e) {
      jQuery(this.rootNode)
        .find("#scribbleLive-" + String(e))
        .find(".scribble-list-content")
        .removeClass("scribble-animate"),
        jQuery(this.rootNode)
          .find("#scribbleLive-" + String(e))
          .find(".new")
          .removeClass("scribble-animate"),
        jQuery(this.rootNode)
          .find("#scribbleLive-" + String(e))
          .removeClass("scribble-loader");
    }),
    (B.prototype.refreshScribbleLiveList = function () {
      var e = this;
      setTimeout(function () {
        e.setupScribbleLiveList("refresh");
      }, this.opts.refreshTime);
    }),
    (jQuery.fn.scribbleLive = function (e) {
      return this.each(function () {
        new B(this, e);
      });
    }),
    f.extend(ue.prototype, {
      init: function () {
        var t = this;
        this.$element.on("click", function (e) {
          e.preventDefault(),
            f("html, body").animate({ scrollTop: 0 }, "fast", function () {
              "function" == typeof t.callback && t.callback.apply();
            });
        });
      },
    }),
    (f.fn.scrollToTop = function (e) {
      return this.each(function () {
        f.data(this, "scrollToTop") ||
          f.data(this, "scrollToTop", new ue(this, e));
      });
    }),
    jQuery(v).on("page.ready", function (e) {
      try {
        jQuery(".share-button.facebook")
          .not(".header .share-button.facebook")
          .sharrre({
            share: { facebook: !0 },
            enableHover: !1,
            enableTracking: !1,
            click: function (e, t) {
              e.simulateClick(), e.openPopup("facebook");
            },
            template:
              "<span class='share-button__icon'></span><span class='share-button__count'>{total}</span>",
          }),
          jQuery(".share-button.twitter")
            .not(".header .share-button.twitter")
            .sharrre({
              share: { twitter: !0 },
              enableHover: !1,
              enableTracking: !1,
              click: function (e, t) {
                e.simulateClick(), e.openPopup("twitter");
              },
              template: "<span class='share-button__icon'></span>",
            });
      } catch (e) {}
    }),
    jQuery(function () {
      jQuery(v).trigger("page.ready");
    }),
    (g = jQuery),
    R(pe, [
      {
        key: "init",
        value: function () {
          var e = this;
          this.consentBoxDisabled || this.renderConsentBox(),
            this.getCmpVendorCode()
              ? g.fn.cmpHelper.onConsentReady(function () {
                  e.refresh();
                })
              : this.refresh(),
            g.fn.cmpHelper.onConsentChange(function () {
              e.refresh();
            });
        },
      },
      {
        key: "refresh",
        value: function () {
          this.isConsented() || this.consentBoxDisabled
            ? (this.isEmbedded ||
                ((this.isEmbedded = !0),
                "facebook" === this.portal
                  ? this.embedFacebook()
                  : "twitter" === this.portal
                  ? this.embedTwitter()
                  : "instagram" === this.portal
                  ? this.embedInstagram()
                  : "pinterest" === this.portal
                  ? this.embedPinterest()
                  : "vimeo" === this.portal
                  ? this.embedVimeo()
                  : this.embedXhtml()),
              this.consentBoxDisabled || this.showCompactView())
            : this.consentBoxDisabled || this.showDescriptionView();
        },
      },
      {
        key: "renderConsentBox",
        value: function () {
          var e = this,
            t = g("<strong />")
              .addClass("consent-box__headline")
              .text("Empfohlener externer Inhalt"),
            i = g("<div />")
              .addClass(
                "consent-box__description consent-box__description--" +
                  String(this.portal)
              )
              .text(
                "An dieser Stelle befindet sich ein externer Inhalt von " +
                  String(this.getDisplayPortalName()) +
                  ",\n                    der von unserer Redaktion empfohlen wird. Er ergÃ¤nzt den Artikel und kann mit einem Klick angezeigt\n                    und wieder ausgeblendet werden."
              ),
            o = g("<label>")
              .addClass("consent-box__toggle-wrapper")
              .attr(
                "title",
                "Empfohlene externe Inhalte von " +
                  String(this.getDisplayPortalName()) +
                  " ein-/ausschalten"
              ),
            n =
              (this.$toggle
                .attr({ type: "checkbox", name: "consent" })
                .addClass("consent-box__toggle"),
              g("<strong />").addClass("consent-box__toggle-visual")),
            n =
              (o.append(this.$toggle, n),
              g("<div />")
                .addClass("consent-box__privacy-text")
                .html(
                  'Ich bin damit einverstanden, dass mir dieser externe Inhalt angezeigt wird.\n                    Es kÃ¶nnen dabei personenbezogene Daten an den Anbieter des Inhalts und Drittdienste Ã¼bermittelt\n                    werden. Mehr dazu in unserer <a href="' +
                    String(this.privacyUrl) +
                    '">DatenschutzerklÃ¤rung</a>.'
                )),
            s = g("<a />")
              .addClass("consent-box__privacy-url")
              .attr("href", this.privacyUrl)
              .text("DatenschutzerklÃ¤rung");
          this.isConsented() && (this.$toggle[0].checked = !0),
            this.$toggle.on("change", function () {
              e.handleToggleConsent();
            }),
            this.$consentBox.addClass("consent-box").append(t, i, o, n, s),
            this.$consentBox.insertAfter(
              g(this.rootNode).closest(".social-embed")
            );
        },
      },
      {
        key: "handleToggleConsent",
        value: function () {
          var e = this.isConsented();
          this.persistConsent(!e),
            e && !this.isConsented() && v.location.reload();
        },
      },
      {
        key: "getDisplayPortalName",
        value: function () {
          return this.portalNames[this.portal] || this.rawPortalName;
        },
      },
      {
        key: "getCmpVendorCode",
        value: function () {
          return this.portalCmpVendorCodes[this.portal] || null;
        },
      },
      {
        key: "persistConsent",
        value: function (e) {
          var t = this.getCmpVendorCode();
          t
            ? g.fn.cmpHelper.setConsent(t, e)
            : y.localStorage.setItem(
                "funke-social-media-consent-" + String(this.portal),
                e ? "allowed" : "not-allowed"
              ),
            g.fn.cmpHelper.triggerConsentChange();
        },
      },
      {
        key: "isConsented",
        value: function () {
          var e = this.getCmpVendorCode();
          return e
            ? g.fn.cmpHelper.isConsented(e)
            : "allowed" ===
                y.localStorage.getItem(
                  "funke-social-media-consent-" + String(this.portal)
                );
        },
      },
      {
        key: "showDescriptionView",
        value: function () {
          (this.$toggle[0].checked = !1),
            this.$consentBox
              .addClass("consent-box--show-description")
              .removeClass("consent-box--show-compact");
        },
      },
      {
        key: "showCompactView",
        value: function () {
          (this.$toggle[0].checked = !0),
            this.$consentBox
              .addClass("consent-box--show-compact")
              .removeClass("consent-box--show-description");
        },
      },
      {
        key: "embedFacebook",
        value: function () {
          var e,
            t,
            i,
            o = this,
            n = (g(this.rootNode).addClass("social-facebook"), void 0),
            s = Math.floor(g(this.rootNode).width());
          switch (this.type) {
            case "post":
              n =
                '<div class="fb-post" data-href="' +
                String(this.embedId) +
                '" data-width="' +
                String(s) +
                '"></div>';
              break;
            case "video":
              n =
                '<div class="fb-video" data-href="' +
                String(this.embedId) +
                '" data-allowfullscreen="true"></div>';
              break;
            case "comment-embed":
              n =
                '<div class="fb-comment-embed" data-href="' +
                String(this.embedId) +
                '" data-width="' +
                String(Math.max(560, s)) +
                '"></div>';
          }
          g(this.rootNode).append(n),
            y.FB
              ? y.FB.XFBML.parse()
              : ((t = "facebook-jssdk"),
                (i = (e = v).getElementsByTagName("script")[0]),
                e.getElementById(t) ||
                  (((e = e.createElement("script")).id = t),
                  (e.src = "//connect.facebook.net/de_DE/all.js"),
                  i.parentNode.insertBefore(e, i))),
            (y.fbAsyncInit = function () {
              y.FB.init({
                appId: "1650819678556421",
                xfbml: !0,
                version: "v2.8",
              }),
                y.FB.AppEvents && y.FB.AppEvents.logPageView();
            }),
            g(v).on("elementRendered", function () {
              o.postprocessFacebook();
            }),
            this.checkRendered();
        },
      },
      {
        key: "postprocessFacebook",
        value: function () {
          (this.elementRenderData = "fb-xfbml-state"),
            "rendered" !==
              g(this.rootNode)
                .find(".fb-" + String(this.type))
                .attr(this.elementRenderData) ||
              this.isRendered ||
              (g("#" + String(this.embedWidgetId)).facebookInlineResizer({
                type: "socialEmbed",
              }),
              (this.isRendered = !0),
              clearInterval(this.renderedInterval),
              this.showEmbeddedMedia());
        },
      },
      {
        key: "embedTwitter",
        value: function () {
          var e,
            t,
            i,
            o,
            n = this;
          0 === g("script[src='//platform.twitter.com/widgets.js']").length &&
            (y.twttr =
              ((t = "twitter-wjs"),
              (i = (e = v).getElementsByTagName("script")[0]),
              (o = y.twttr || {}),
              e.getElementById(t) ||
                (((e = e.createElement("script")).id = t),
                (e.src = "//platform.twitter.com/widgets.js"),
                i.parentNode.insertBefore(e, i),
                (o._e = []),
                (o.ready = function (e) {
                  o._e.push(e),
                    y.twttr.widgets.load(v.getElementById(this.embedWidgetId));
                })),
              o)),
            g(v).on("elementRendered", function () {
              n.postprocessTwitter();
            }),
            this.checkRendered();
        },
      },
      {
        key: "postprocessTwitter",
        value: function () {
          (this.elementClass = "twitter-tweet"),
            (this.elementRenderClass = "twitter-tweet-rendered"),
            g(this.rootNode)
              .find("." + String(this.elementClass))
              .hasClass(this.elementRenderClass) &&
              !this.isRendered &&
              ((this.isRendered = !0),
              clearInterval(this.renderedInterval),
              this.showEmbeddedMedia());
        },
      },
      {
        key: "embedInstagram",
        value: function () {
          var e = this;
          0 ===
            g("script[src='//platform.instagram.com/de_DE/embeds.js']")
              .length &&
            ((this.jsCode = v.createElement("script")),
            (this.jsCode.type = "text/javascript"),
            (this.jsCode.async = !0),
            (this.jsCode.defer = !0),
            this.jsCode.setAttribute(
              "src",
              "//platform.instagram.com/en_US/embeds.js"
            ),
            v.body.appendChild(this.jsCode)),
            g(v).on("elementRendered", function () {
              e.postprocessInstagram();
            }),
            this.checkRendered();
        },
      },
      {
        key: "postprocessInstagram",
        value: function () {
          try {
            this.apiLog ||
              (y.instgrm.Embeds.process(),
              (this.apiLog = !0),
              y.console.log("Instargam Api Found"));
          } catch (e) {
            y.console.log(this.portal, e.message);
          }
          (this.elementClass = "instagram-media"),
            (this.elementRenderClass = "instagram-media-rendered"),
            g(this.rootNode)
              .find("." + String(this.elementClass))
              .hasClass(this.elementRenderClass) &&
              !this.isRendered &&
              ((this.isRendered = !0),
              clearInterval(this.renderedInterval),
              this.showEmbeddedMedia());
        },
      },
      {
        key: "embedPinterest",
        value: function () {
          var e = this;
          0 === g("script[src='//assets.pinterest.com/js/pinit.js']").length &&
            ((this.jsCode = v.createElement("script")),
            (this.jsCode.async = !0),
            (this.jsCode.defer = !0),
            this.jsCode.setAttribute(
              "src",
              "//assets.pinterest.com/js/pinit.js"
            ),
            v.body.appendChild(this.jsCode)),
            g(v).on("elementRendered", function () {
              e.postprocessPinterest();
            }),
            this.checkRendered();
        },
      },
      {
        key: "postprocessPinterest",
        value: function () {
          !g(this.rootNode).find("[data-pin-log^=embed_pin]").length ||
            this.isRendered ||
            ((this.isRendered = !0),
            clearInterval(this.renderedInterval),
            g("#" + String(this.embedWidgetId)).pinterestInlineResizer(),
            this.showEmbeddedMedia());
        },
      },
      {
        key: "embedVimeo",
        value: function () {
          var e = this,
            t = g(this.rootNode).find("iframe").height(),
            i = g(this.rootNode).find("iframe").width(),
            t = Math.round(t * (g(this.rootNode).width() / i), 10);
          g(this.rootNode)
            .find("iframe")
            .css({ width: "100%", height: String(t) + "px" }),
            g(v).on("elementRendered", function () {
              e.postprocessVimeo();
            }),
            this.checkRendered();
        },
      },
      {
        key: "postprocessVimeo",
        value: function () {
          var e = this;
          (this.elementClass = "iframe"),
            g(this.rootNode)
              .find(this.elementClass)
              .on("load", function () {
                (e.isRendered = !0),
                  clearInterval(e.renderedInterval),
                  e.showEmbeddedMedia();
              });
        },
      },
      {
        key: "embedXhtml",
        value: function () {
          var e = g(this.rootNode);
          e.replaceWith(e.html()), (this.isRendered = !0);
        },
      },
      {
        key: "checkRendered",
        value: function () {
          var e = this;
          g(v).trigger("elementRendered"),
            (this.renderedInterval = setInterval(function () {
              e.isRendered
                ? clearInterval(e.renderedInterval)
                : g(v).trigger("elementRendered");
            }, 1e3)),
            setTimeout(function () {
              clearInterval(e.renderedInterval), e.showEmbeddedMedia();
            }, 3e4);
        },
      },
      {
        key: "showEmbeddedMedia",
        value: function () {
          var e = this;
          setTimeout(function () {
            (g(e.rootNode).is("FIGURE")
              ? g(e.rootNode).parent(".social-embed")
              : g(e.rootNode)
            ).removeClass("widget-hidden");
          }, 1500);
        },
      },
    ]),
    (J = pe),
    (g.fn.socialMediaWidget = function (e) {
      return this.each(function () {
        new J(this, e);
      });
    }),
    f(function () {
      var h = -1 < y.location.search.indexOf("gtm-debug");
      [
        ".follow-us a",
        ".socialmedia-icons-header a",
        ".header-top .social-channels a",
        ".nav-meta__list a",
        ".header-social-icons a",
        ".header-top__links.socialbar a",
        ".footer__social a",
      ].forEach(function (c) {
        jQuery(c).each(function (e, t) {
          var i,
            o,
            n,
            s,
            r,
            a,
            l,
            d,
            t = f(t);
          t.length &&
            t.is(":visible") &&
            ((i = t.attr("href")),
            (o = t.attr("title")),
            (n = ""),
            (s = "follow"),
            i) &&
            (-1 !== i.indexOf("facebook")
              ? ((n = "Facebook"), (s = "like-facebook-page"))
              : -1 !== i.indexOf("twitter")
              ? (n = "Twitter")
              : -1 !== i.indexOf("pinterest")
              ? (n = "Pinterest")
              : -1 !== i.indexOf("plus.google") || "Google+" === o
              ? ((n = "Google Plus"), (s = "plus-one"))
              : -1 !== i.indexOf("linkedin")
              ? ((n = "LinkedIn"), (s = "connect"))
              : -1 !== i.indexOf("youtube")
              ? (n = "YouTube")
              : -1 !== i.indexOf("instagram")
              ? (n = "Instagram")
              : -1 !== i.indexOf("xing")
              ? (n = "Xing")
              : -1 !== i.indexOf("flipboard") && (n = "Flipboard"),
            "" !== n) &&
            (h &&
              y.console.debug(
                "gtm-debug - social-tracking.js: registering click handler for selector %c%s",
                "font-weight: bold",
                c
              ),
            (r = n),
            (a = s),
            (l = c),
            (d = h),
            t.on("click", function (e) {
              var t = {
                event: "socialTrigger",
                socialNetwork: r,
                socialAction: a,
              };
              d &&
                (y.console.debug(
                  "gtm-debug - social-tracking.js: clicked on ",
                  e.delegateTarget
                ),
                y.console.debug(
                  "gtm-debug - social-tracking.js: click handler called because of selector %c%s",
                  "font-weight: bold",
                  l
                ),
                y.console.debug(
                  "gtm-debug - social-tracking.js: calling window.dataLayer.push(%o)",
                  t
                )),
                y.dataLayer.push(t);
            }));
        });
      });
      [
        {
          selector: "article .share-button.facebook",
          network: "Facebook",
          action: "share",
        },
        {
          selector: "article .share-button.twitter",
          network: "Twitter",
          action: "tweet",
        },
        {
          selector: "article .share-button.pinterest",
          network: "Pinterest",
          action: "pin",
        },
        {
          selector: "article .share-button.pinterest2",
          network: "Pinterest",
          action: "pin",
        },
        {
          selector: "article .share-button.whatsapp",
          network: "WhatsApp",
          action: "share",
        },
        {
          selector: "article .share-button.fb-messenger",
          network: "Facebook Messenger",
          action: "share",
        },
        {
          selector: "article .share-button.email",
          network: "email",
          action: "share",
        },
        {
          selector: "article .share-button.instagram",
          network: "Instagram",
          action: "share",
        },
        {
          selector: "article .share-button.xing",
          network: "Xing",
          action: "share",
        },
        {
          selector: "article .share-button.flipboard",
          network: "Flipboard",
          action: "share",
        },
        {
          selector: "article .share-button.linkedin",
          network: "LinkedIn",
          action: "share",
        },
      ].forEach(function (i) {
        var e = jQuery(i.selector);
        e.length &&
          e.is(":visible") &&
          (h &&
            y.console.debug(
              "gtm-debug - social-tracking.js: registering click handler for selector %c%s%c (%i match/es)",
              "font-weight: bold",
              i.selector,
              "font-weight: normal",
              e.length
            ),
          e.on("click", function (e) {
            var t = {
              event: "socialTrigger",
              socialNetwork: i.network,
              socialAction: i.action,
            };
            h &&
              (y.console.debug(
                "gtm-debug - social-tracking.js: clicked on ",
                e.delegateTarget
              ),
              y.console.debug(
                "gtm-debug - social-tracking.js: click handler called because of selector %c%s",
                "font-weight: bold",
                i.selector
              ),
              y.console.debug(
                "gtm-debug - social-tracking.js: calling window.dataLayer.push(%o)",
                t
              )),
              y.dataLayer.push(t);
          }));
      });
    }),
    (y.staticMessage = function (e, t) {
      var i, o, n;
      e &&
        ((o = "fd-static-message"),
        (t =
          -1 !== ["success", "warning", "error"].indexOf(t)
            ? o + "-" + String(t)
            : ""),
        (i = jQuery(
          '<div class="' + o + " " + t + '"><p>' + String(e) + "</p></div>"
        )).appendTo(".page-wrapper"),
        (o = jQuery(".ad__superbanner")).is(":visible") &&
          i.css({ top: String(i.position().top + o.height()) + "px" }),
        (n = y.setTimeout(function () {
          i.fadeOut(500, function () {
            i.remove();
          });
        }, 9500)),
        i.on("click", function () {
          i.fadeOut(250, function () {
            i.remove(), clearTimeout(n);
          });
        }));
    }),
    jQuery,
    (K = {
      stickyClassName: "header--sticky",
      noStickyClassName: "header--solid",
      pageContentSelector: ".page",
      activeMaxWidth: 99999,
      activeMinWidth: 768,
    }),
    f.extend(fe.prototype, {
      init: function () {
        var e = this;
        this.isActive() &&
          (this.refreshHeader(),
          this.$placeholder.insertAfter(this.$header),
          this.$window.on("scroll resize", function () {
            e.refreshHeader();
          }),
          this.initSolidClassToHeader());
      },
      isActive: function () {
        var e = this.$document.width();
        return (
          e >= this.settings.activeMinWidth && e <= this.settings.activeMaxWidth
        );
      },
      initSolidClassToHeader: function () {
        this.$header.hasClass(this.settings.noStickyClassName) ||
          this.$header.hasClass(this.settings.stickyClassName) ||
          (f(y).width() > this.settings.activeMinWidth &&
            this.$header
              .removeClass(this.settings.stickyClassName)
              .addClass(this.settings.noStickyClassName));
      },
      refreshHeader: function () {
        var e = f(v).scrollTop(),
          t = this.prevScrollPosition - e,
          i =
            (this.$header.hasClass(this.settings.stickyClassName) ||
              (this.headerHeight = this.$header.outerHeight(!0)),
            this.headerHeight + this.$pageContent.offset().top);
        t < 0 && i < e
          ? (this.$header
              .addClass(this.settings.stickyClassName)
              .removeClass(this.settings.noStickyClassName),
            this.$placeholder.css("height", String(this.headerHeight) + "px"))
          : 0 < t &&
            e <= i &&
            (this.$header
              .removeClass(this.settings.stickyClassName)
              .addClass(this.settings.noStickyClassName),
            this.$placeholder.css("height", 0)),
          (this.prevScrollPosition = e);
      },
    }),
    (f.fn.stickyHeader = function (e) {
      f.data(this, "sticky-header") ||
        f.data(this, "sticky-header", new fe(this, e));
    }),
    f(function () {
      f(".header").stickyHeader();
    }),
    (f.fn.stickyContent = function () {
      return this.each(function () {
        var s, r, a;
        (s = f(this)),
          (r = s.outerHeight(!0)),
          (a = f(".article__body")[0]),
          f(y).on("resize scroll touchend", function (e) {
            try {
              var t,
                i = 2 * f(".socialbar").height() + r,
                o = Math.round(
                  s.closest("article").offset().top +
                    s.closest("article").height() -
                    i
                ),
                n =
                  (767 < f(y).width() &&
                  a !== d &&
                  0 === f(".body__print").length
                    ? ((t = f(v).scrollTop()),
                      a.getBoundingClientRect().top < 0 &&
                        t <= o &&
                        (s.addClass("sticky"), s.fadeIn("0.5", "linear")),
                      0 < a.getBoundingClientRect().top &&
                        (s.removeAttr("style"), s.removeClass("sticky")),
                      s.hasClass("sticky") &&
                        f(v).scrollTop() > o + i / 2 - 15 &&
                        (s.addClass("solid").removeClass("sticky"),
                        s.css("left", "0    ")),
                      s.hasClass("solid") &&
                        f(v).scrollTop() <= o + i / 2 - 15 &&
                        s.removeClass("solid").addClass("sticky"))
                    : s.removeClass("sticky").removeClass("solid"),
                  f(".article").offset());
              f(".sticky").css({ left: n.left - f(this).scrollLeft() });
            } catch (e) {}
          });
      });
    }),
    (me.prototype.switchToTab = function (e) {
      var e = f(e),
        t = e.prevAll("." + String(this.tabClass)).length,
        t = f(this.$bodyItems.get(t));
      this.$tabs.removeClass(this.activeTabClass),
        this.$bodyItems.removeClass(this.activeBodyClass),
        e.addClass(this.activeTabClass),
        t.addClass(this.activeBodyClass);
    }),
    (f.fn.tabs = function (e) {
      return this.each(function () {
        new me(
          this,
          f.extend(
            {
              tabClass: "tabs__tab",
              bodyClass: "tabs__body",
              triggerEvent: "click",
            },
            e
          )
        );
      });
    }),
    jQuery(function () {
      jQuery(".teaser__icons")
        .find(".share-button__icon")
        .on("click", function () {
          var e =
            jQuery(this).attr("data-url") ||
            jQuery(this).closest("article").find(".teaser__link").attr("href");
          e && (y.location.href = e);
        });
    }),
    (ge.prototype.loadTrippleCarousel = function (o) {
      var n = this,
        s = jQuery(this.rootNode).find(".swiper-slide").length,
        r = 0,
        a = 0;
      jQuery(this.rootNode)
        .find(".swiper-slide")
        .each(function (e) {
          var t = jQuery(this).find("img").attr("height"),
            i = jQuery(this).find("img").attr("width");
          i < t || t === i
            ? (jQuery(this).find("picture").addClass("mediaportrait"), (a += 1))
            : jQuery(this).find("picture").addClass("medialandscape"),
            r < t &&
              !jQuery(this).find("picture").hasClass("mediaportrait") &&
              (r = t),
            "desktop" === o.view &&
              (a === s
                ? ((i = jQuery(n.rootNode).width() / 1.5),
                  jQuery(n.rootNode)
                    .find("picture")
                    .css("max-height", i + "px")
                    .css("overflow", "hidden"),
                  jQuery(n.rootNode)
                    .find("picture")
                    .find("img")
                    .height(i)
                    .css("width", "auto"),
                  jQuery(n.rootNode)
                    .find(".swiper-buttons")
                    .height(i)
                    .css("display", "block"))
                : (jQuery(n.rootNode)
                    .find("picture")
                    .css("max-height", String(r) + "px")
                    .css("overflow", "hidden"),
                  jQuery(n.rootNode)
                    .find(".swiper-buttons")
                    .height(r)
                    .css("display", "block"),
                  jQuery(n.rootNode)
                    .find("picture")
                    .hasClass("mediaportrait") &&
                    jQuery(n.rootNode)
                      .find(".mediaportrait")
                      .find("img")
                      .height(r)
                      .css("width", "auto"))),
            e + 1 === s && n.setupTrippleCarousel(o, 0);
        });
    }),
    (ge.prototype.setupTrippleCarousel = function (e, t) {
      var i = this,
        o = jQuery(this.rootNode).attr("id"),
        n = ".swiper-pagination-" + String(o),
        s = ".swiper-button-next-" + String(o),
        r = ".swiper-button-prev-" + String(o);
      "desktop" === e.view &&
        new Swiper("#" + String(o), {
          pagination: n,
          grabCursor: !0,
          nextButton: s,
          prevButton: r,
          preloadImages: !0,
          paginationClickable: !0,
          slidesPerView: 3,
          spaceBetween: 30,
          loop: !0,
          autoplay: 3e3,
          setWrapperSize: !0,
        }),
        "mobile" === e.view &&
          new Swiper("#" + String(o), {
            onInit: function () {
              jQuery(i.rootNode).find("article.teaser").css("display", "block");
            },
            pagination: n,
            effect: "cube",
            grabCursor: !0,
            lazyLoading: !1,
            preloadImages: !1,
            paginationClickable: !0,
            updateOnImagesReady: !0,
            cube: {
              shadow: !1,
              slideShadows: !1,
              shadowOffset: 20,
              shadowScale: 0.94,
            },
            loop: !0,
            autoplay: 3e3,
            setWrapperSize: !0,
          });
    }),
    (jQuery.fn.trippleCarousel = function (e) {
      return this.each(function () {
        new ge(this, e);
      });
    });
  var A,
    ye = {
      isMobileByWidth: function () {
        return f(y).width() < 768;
      },
      isDesktopByWidth: function () {
        return 768 <= f(y).width();
      },
      isMobileByUseragent: function () {
        return /Mobi/.test(navigator.userAgent);
      },
      getUrlParameter: function (e) {
        for (
          var t, i = y.location.search.substring(1).split("&"), o = 0;
          o < i.length;
          o++
        )
          if ((t = i[o].split("="))[0] === e)
            return t[1] === d || decodeURIComponent(t[1]);
        return null;
      },
    };
  function ve(e, t) {
    (this.rootNode = e), this.cookie();
  }
  function L(e, t) {
    (this.rootNode = e),
      (this.isSticky = !1),
      (this.isPlaying = !1),
      (this.isPaused = !1),
      (this.$player = A(this.rootNode)),
      (this.player = this.rootNode),
      (this.$pageWrapper = A(".main").first()),
      (this.playerId = this.$player.attr("id")),
      (this.$dummyOverlay = this.$player
        .closest(".video")
        .find(".kaltura_dummy_overlay")),
      (this.$placeholder = A(
        "<div id='placeholder-" + String(this.playerId) + "'></div>"
      ).addClass("video-placeholder")),
      (this.$closeButton = A(
        "<div id='player-fixed--close-" + String(this.playerId) + "'></div>"
      ).addClass("player-fixed--close")),
      (this.$playerTitle = A("#" + String(this.playerId) + "-title")),
      (this.stickyDisabledByUser = !1),
      (this.isBildDerFrau = A("body").hasClass("pub-bdf")),
      (this.playerAspectRatio = 16 / 9),
      (this.settings = A.extend(
        { minimumSpaceLeft: 300, fixedElementSpace: 16, maxMobileWidth: 767 },
        t
      )),
      (this.iframeHead = this.$player.find("iframe").contents().find("head")),
      (this.playerStyles = this.iframeHead.find(
        "#stylePlayer_" + String(this.playerId)
      )),
      (this.playlistStyles = this.iframeHead.find(
        "#stylePlaylist_" + String(this.playerId)
      )),
      "function" == typeof this.player.kBind &&
        "function" == typeof this.player.sendNotification &&
        this.init();
  }
  jQuery.utils === d && (y.jQuery.utils = {}),
    y.jQuery.extend(jQuery.utils, ye),
    (ve.prototype.cookie = function () {
      jQuery(this.rootNode).on("change", function () {
        var e = f(this);
        !0 === e.prop("checked") &&
          (y.createCookie("videoAutoplay", "no", 14),
          y.createCookie("videoAutoplayUserChoice", "no", 14)),
          !1 === e.prop("checked") &&
            (y.eraseCookie("videoAutoplay"),
            y.eraseCookie("videoAutoplayUserChoice")),
          null == y.readCookie("videoAutoplayUserChanged") &&
            y.createCookie("videoAutoplayUserChanged", "yes", 14);
      }),
        (("yes" === y.readCookie("autoplayByLoginStatus") &&
          null === y.readCookie("videoAutoplayUserChanged")) ||
          ("no" === y.readCookie("videoAutoplayUserChoice") &&
            "no" === y.readCookie("videoAutoplay")) ||
          ("yes" === y.readCookie("videoAutoplayUserChanged") &&
            "yes" === y.readCookie("autoplayByLoginStatus"))) &&
          jQuery(this.rootNode).prop("checked", !0);
    }),
    (jQuery.fn.videoAutoplay = function (e) {
      return this.each(function () {
        new ve(this);
      });
    }),
    (A = jQuery),
    (L.prototype.init = function () {
      this.$player.append(this.$closeButton),
        this.$player.append(this.$playerTitle),
        this.$placeholder.insertBefore(this.$player),
        this.$placeholder.hide(),
        this.$dummyOverlay.addClass("kaltura_dummy_overlay_with_controlbar"),
        this.bindHandlers(),
        this.refresh(),
        A("<style/>", {
          type: "text/css",
          id: "stylePlayer_" + String(this.playerId),
        }).appendTo(this.iframeHead),
        A("<style/>", {
          type: "text/css",
          id: "stylePlaylist_" + String(this.playerId),
        }).appendTo(this.iframeHead),
        (this.playerStyles = this.iframeHead.find(
          "#stylePlayer_" + String(this.playerId)
        )),
        (this.playlistStyles = this.iframeHead.find(
          "#stylePlaylist_" + String(this.playerId)
        ));
    }),
    (L.prototype.bindHandlers = function () {
      var e = this;
      this.player.kBind("userInitiatedPlay", function () {
        e.stickyDisabledByUser = !1;
      }),
        this.player.kBind("playerPlayed", function () {
          (e.isPlaying = !0), (e.isPaused = !1), e.refresh();
        }),
        this.player.kBind("onAdPlay", function () {
          (e.isPlaying = !0), (e.isPaused = !1), e.refresh();
        }),
        this.player.kBind("playerPaused", function () {
          (e.isPaused = !0), (e.isPlaying = !1), e.refresh();
        }),
        this.player.kBind("playerPlayEnd", function () {
          (e.playerPlaying = !1), (e.isPaused = !1), e.refresh();
        }),
        this.$closeButton.on("click", function () {
          (e.stickyDisabledByUser = !0),
            e.player.sendNotification("changeVolume", 0),
            e.removeSticky();
        }),
        this.player.kBind("openFullScreen", function () {
          (e.stickyDisabledByUser = !0), e.removeSticky();
        }),
        this.player.kBind("closeFullScreen", function () {
          y.setTimeout(function () {
            (e.stickyDisabledByUser = !1), e.refresh();
          }, 20);
        }),
        A(y).on("scroll", function () {
          e.refresh();
        }),
        A(y).on("resize", function () {
          e.refreshPlayerTransition(), e.refresh(!0);
        });
    }),
    (L.prototype.isMobile = function () {
      return A(y).width() <= this.settings.maxMobileWidth;
    }),
    (L.prototype.removeSticky = function () {
      this.hidePlaylist(!1),
        this.$dummyOverlay.show(),
        this.$playerTitle.hide(),
        this.$player
          .removeClass(
            "player-fixed player-fixed--mobile player-fixed--desktop player-fixed-hover video-transition"
          )
          .removeAttr("style"),
        this.$player.find("iframe").css({ minHeight: "100%" }),
        this.$placeholder.removeClass("video-placeholder--styled").hide(),
        (this.isSticky = !1),
        this.playerStyles.text("FDP - No Change"),
        this.playlistStyles.text("FDP - No Change");
    }),
    (L.prototype.makeSticky = function () {
      this.$placeholder
        .css({ height: this.$player.height() })
        .addClass("video-placeholder--styled"),
        this.$dummyOverlay.hide(),
        this.$player.addClass(
          "player-fixed player-fixed--mobile player-fixed--desktop player-fixed-hover"
        ),
        this.$placeholder.show(),
        this.refreshPlayerTransition(),
        (this.isSticky = !0);
    }),
    (L.prototype.refreshPlayerTransition = function () {
      var e = this.$pageWrapper[0].getBoundingClientRect().left,
        t = this.getHeaderHeight(),
        i = A("#" + String(this.playerId) + "_ifp")
          .contents()
          .find(".controlBarContainer")
          .outerHeight(),
        o =
          ".unMuteOverlayButton span{display: none} .unMuteOverlayButton {width: auto}";
      this.$player.removeClass("player-fixed--mobile player-fixed--desktop"),
        e > this.settings.minimumSpaceLeft
          ? (this.hidePlaylist(!0, "desktop"),
            this.$player
              .addClass("player-fixed--desktop video-transition player-fixed")
              .css({
                height: Math.round((e - 50) / this.playerAspectRatio + i),
                width: Math.round(e - 50),
              }),
            this.$player.find("iframe").css({
              minHeight: Math.round((e - 50) / this.playerAspectRatio + i),
            }),
            this.$playerTitle.hide())
          : (this.hidePlaylist(!0, "mobile"),
            this.$player
              .addClass("player-fixed--mobile video-transition player-fixed")
              .css({ left: e, top: t }),
            this.$playerTitle.show()),
        this.playerStyles.text(o);
    }),
    (L.prototype.hidePlaylist = function (e, t) {
      var i =
        ".mwPlayerContainer{height: 100% !important} .playlistAPI{display: none !important;}";
      "mobile" === t &&
        (i += " .controlBarContainer{display: none !important;}"),
        !0 === e
          ? this.playlistStyles.text(i)
          : this.playlistStyles.text("FDP - No Change");
    }),
    (L.prototype.isElementBelowViewportTop = function (e) {
      var e = A(e),
        t = e[0].getBoundingClientRect(),
        e = e.height() / 3;
      return 0 <= t.top + e;
    }),
    (L.prototype.getHeaderHeight = function () {
      if (this.isMobile()) {
        var e = A(".header-top");
        if ("fixed" === e.css("position"))
          return e[0].getBoundingClientRect().height;
      } else {
        e = A(".header");
        if (this.isBildDerFrau) return A(".nav-main").height() + 10;
        if (e.hasClass("fixed") || e.hasClass("header--sticky"))
          return e.height() + 5;
      }
      return 0;
    }),
    (L.prototype.refresh = function (e) {
      this.stickyDisabledByUser
        ? this.$player.hasClass("player-fixed") && this.removeSticky()
        : (!this.isPlaying && !this.isPaused) ||
          ((e || this.isSticky) &&
            this.isElementBelowViewportTop(this.$placeholder))
        ? this.removeSticky()
        : (!e && this.isSticky) ||
          this.isElementBelowViewportTop(this.$player) ||
          this.makeSticky();
    }),
    (jQuery.fn.kalturaPlayerStickyMode = function (e) {
      return this.each(function () {
        new L(this, e);
      });
    });
  var be = "",
    we = "";
  function Ce(e, t) {
    (this.rootNode = e), this.scroll();
  }
  function ke(e, t) {
    (this.rootNode = e),
      (this.contentId = t.contentId),
      (this.autoplayYoutube = t.autoplayYoutube || "0"),
      this.init();
  }
  (Ce.prototype.scroll = function () {
    try {
      function e() {
        (be = a.brightcovePlayer.id_),
          (a.videoIsPlay = be),
          (a.brightcovePlayerPlay = !0),
          (a.placeholderTop = jQuery(
            i.rootNode
          )[0].getBoundingClientRect().top),
          a.element.dispatchEvent(r);
      }
      function t() {
        (we = a.brightcovePlayer.id_),
          (a.videoIsPause = we),
          (a.brightcovePlayerPlay = !1),
          (a.placeholderTop = jQuery(
            i.rootNode
          )[0].getBoundingClientRect().top),
          a.element.dispatchEvent(r);
      }
      var i = this,
        o = jQuery(this.rootNode).attr("id"),
        n = v.querySelector("#" + String(o) + " .video-js"),
        s = n.dataset.videoId || n.dataset.playlistId,
        r = new CustomEvent("videosticky", {
          detail: {
            brightcovePlayerPlay: !1,
            brightcovePlayer: y.bc("video-" + String(s)),
            element: v.getElementById(o),
            elementHeight: jQuery(this.rootNode)[0].getBoundingClientRect()
              .height,
            elementTop: jQuery(this.rootNode)[0].getBoundingClientRect().top,
            elementLeft: jQuery(this.rootNode)[0].getBoundingClientRect().left,
            pageWrapperLeft: jQuery(".main")[0].getBoundingClientRect().left,
            pageInnerSpace: parseInt(jQuery(".page").css("paddingLeft")),
            placeholderTop: 0,
            placeholderId:
              "placeholder-" + String(jQuery(this.rootNode).attr("id")),
            closeButtonId:
              "player-fixed--close-" + String(jQuery(this.rootNode).attr("id")),
            stickyState: !1,
            videoIsPlay: "",
            videoIsPause: "",
            headerHeight: 20,
            minimumSpaceLeft: 300,
            fixedElementSpace: 16,
            playerFixedMaxWidth: 500,
          },
        }),
        a = r.detail;
      a.element.addEventListener("videosticky", function (e) {
        function t() {
          jQuery(i.rootNode)
            .removeClass(
              "player-fixed player-fixed--mobile player-fixed--desktop player-fixed-hover"
            )
            .removeAttr("style"),
            !(e.detail.pageWrapperLeft > e.detail.minimumSpaceLeft) ||
            !0 === e.detail.brightcovePlayerPlay
              ? jQuery("#" + String(e.detail.placeholderId)).remove()
              : jQuery(i.rootNode).one(
                  "webkitTransitionEnd otransitionend oTransitionEnd msTransitionEnd transitionend",
                  function () {
                    jQuery("#" + String(e.detail.placeholderId)).remove();
                  }
                );
        }
        e.detail.brightcovePlayer.id_ !== e.detail.videoIsPlay &&
          "" !== e.detail.videoIsPause &&
          e.detail.videoIsPlay !== e.detail.videoIsPause &&
          jQuery(i.rootNode).removeClass("player-fixed--locked"),
          !0 === e.detail.brightcovePlayerPlay
            ? (e.detail.pageWrapperLeft > e.detail.minimumSpaceLeft
                ? jQuery(i.rootNode).hasClass("video-transition") ||
                  (jQuery(i.rootNode).addClass("video-transition"),
                  (e.detail.elementHeight = jQuery(
                    i.rootNode
                  )[0].getBoundingClientRect().height))
                : jQuery(i.rootNode).removeClass("video-transition"),
              "" !== e.detail.videoIsPause.id_ &&
                e.detail.videoIsPause.id_ !== e.detail.videoIsPlay.id_ &&
                0 <
                  jQuery(i.rootNode).find(
                    "#" + String(e.detail.videoIsPause.id_)
                  ).length &&
                jQuery(i.rootNode)
                  .removeClass(
                    "player-fixed player-fixed--mobile player-fixed--desktop player-fixed-hover"
                  )
                  .removeAttr("style"),
              !0 === e.detail.stickyState
                ? 0 === jQuery("#" + String(e.detail.placeholderId)).length
                  ? (jQuery(
                      "<div id='" +
                        String(e.detail.placeholderId) +
                        "' class='video-placeholder'></div>"
                    )
                      .insertBefore(i.rootNode)
                      .css({ height: e.detail.elementHeight }),
                    e.detail.pageWrapperLeft > e.detail.minimumSpaceLeft
                      ? (jQuery(i.rootNode).addClass(
                          "player-fixed player-fixed--desktop"
                        ),
                        jQuery("#" + String(e.detail.placeholderId))
                          .css({ height: e.detail.elementHeight })
                          .addClass("video-placeholder--styled"),
                        e.detail.pageWrapperLeft < e.detail.playerFixedMaxWidth
                          ? ((i.pageInnerSpace = e.detail.pageInnerSpace),
                            (i.elementStickyWidth =
                              e.detail.pageWrapperLeft -
                              2 * e.detail.fixedElementSpace -
                              e.detail.pageInnerSpace))
                          : ((i.pageInnerSpace = 0),
                            (i.elementStickyWidth =
                              e.detail.playerFixedMaxWidth)),
                        jQuery(i.rootNode)
                          .css({
                            width: i.elementStickyWidth,
                            transform:
                              "translate3d(" +
                              -(
                                i.elementStickyWidth -
                                (e.detail.pageWrapperLeft -
                                  e.detail.elementLeft -
                                  e.detail.fixedElementSpace) +
                                i.pageInnerSpace
                              ) +
                              "px, " +
                              String(e.detail.fixedElementSpace) +
                              "px , 0px)",
                          })
                          .addClass("player-fixed-hover"))
                      : (jQuery(i.rootNode).addClass(
                          "player-fixed player-fixed--mobile"
                        ),
                        jQuery(y).width(),
                        jQuery(i.rootNode).css({
                          transform:
                            "translate3d(" +
                            -(e.detail.elementLeft - e.detail.pageWrapperLeft) +
                            "px, 0px, 0px)",
                          top: e.detail.headerHeight - 1,
                        })))
                  : (a.placeholderTop = jQuery(
                      "#" + String(e.detail.placeholderId)
                    )[0].getBoundingClientRect().top)
                : t())
            : "" !== e.detail.videoIsPause.id_ &&
              e.detail.videoIsPlay !== e.detail.videoIsPause &&
              ((e.detail.stickyState = !1), t()),
          0 < jQuery("#" + String(e.detail.placeholderId)).length &&
            !1 === e.detail.brightcovePlayerPlay &&
            0 <
              jQuery(
                "#" + String(e.detail.placeholderId)
              )[0].getBoundingClientRect().top &&
            ((a.placeholderTop = 0), t());
      }),
        jQuery(y).on("resize", function () {
          jQuery("#" + String(a.placeholderId)).remove(),
            jQuery(i.rootNode)
              .removeClass(
                "player-fixed player-fixed--mobile player-fixed--desktop player-fixed-hover"
              )
              .removeAttr("style"),
            jQuery(".player-fixed--close").remove(),
            (a.elementTop < a.headerHeight &&
              a.placeholderTop <= a.headerHeight) ||
              (a.placeholderTop = 0),
            (a.stickyState = !1),
            a.element.dispatchEvent(r),
            (a.elementLeft = jQuery(
              i.rootNode
            )[0].getBoundingClientRect().left),
            a.element.dispatchEvent(r);
        }),
        jQuery(y).on("scroll", function () {
          var e;
          (a.videoIsPause = we),
            (a.videoIsPlay = be),
            (a.pageWrapperLeft =
              jQuery(".main")[0].getBoundingClientRect().left),
            (a.elementTop = jQuery(i.rootNode)[0].getBoundingClientRect().top),
            a.element.dispatchEvent(r),
            jQuery(y).width() < 768 &&
              ((e = v.getElementsByClassName("header-top")[0]),
              (e = y.getComputedStyle(e, null).getPropertyValue("position")),
              (a.headerHeight =
                "fixed" === e
                  ? jQuery(".header-top")[0].getBoundingClientRect().height + 10
                  : 1),
              a.element.dispatchEvent(r)),
            768 < jQuery(y).width() &&
              a.pageWrapperLeft < a.minimumSpaceLeft &&
              ((jQuery(".header").hasClass("fixed") ||
                jQuery(".header").hasClass("header--sticky")) &&
                (a.headerHeight = jQuery(".header").height() + 5),
              jQuery("body").hasClass("pub-bdf") &&
                (a.headerHeight = jQuery(".nav-main").height() + 10),
              a.element.dispatchEvent(r)),
            0 === jQuery("#" + String(a.closeButtonId)).length &&
              (a.pageWrapperLeft < a.minimumSpaceLeft &&
                jQuery(i.rootNode).prepend(
                  "<div id='" +
                    String(a.closeButtonId) +
                    "' class='player-fixed--close'></div>"
                ),
              jQuery("#" + String(a.closeButtonId)).on("click", function () {
                jQuery(i.rootNode).addClass("player-fixed--locked"),
                  jQuery(".player-fixed--close").remove(),
                  (a.stickyState = !1),
                  a.element.dispatchEvent(r);
              })),
            a.elementTop < a.headerHeight && a.placeholderTop <= a.headerHeight
              ? jQuery(i.rootNode).hasClass("player-fixed--locked")
                ? (jQuery(".player-fixed--close").remove(),
                  (a.stickyState = !1))
                : (a.stickyState = !0)
              : ((a.placeholderTop = 0), (a.stickyState = !1)),
            a.element.dispatchEvent(r);
        });
      a.brightcovePlayer.ready(function () {
        a.brightcovePlayer.on("play", function () {
          e();
        }),
          a.brightcovePlayer.on("pause", function () {
            t();
          }),
          a.brightcovePlayer.on("ended", function () {
            (a.brightcovePlayerPlay = !1), a.element.dispatchEvent(r);
          });
      }),
        a.brightcovePlayer.ima3.ready(function () {
          a.brightcovePlayer.on("ads-play", function () {
            e();
          }),
            a.brightcovePlayer.on("ads-pause", function () {
              t();
            }),
            a.brightcovePlayer.on("ads-ad-started", function () {
              e();
            });
        });
    } catch (e) {
      y.console.log("video-sticky-mode:", e.message);
    }
  }),
    (jQuery.fn.videoStickyMode = function (e) {
      return this.each(function () {
        new Ce(this);
      });
    }),
    (ke.prototype.init = function (e) {
      var t = this;
      (this.player = new YT.Player("youtube-" + String(this.contentId), {
        playerVars: { autoplay: this.autoplayYoutube },
        events: {
          onReady: function (e) {
            jQuery("body").on("videoPlay", function (e) {
              e.id !== t.contentId && t.player.stopVideo();
            }),
              "1" === t.autoplayYoutube && t.player.playVideo();
          },
          onStateChange: function (e) {
            e.data === YT.PlayerState.PLAYING &&
              (jQuery(".video-youtube")
                .next(".grosse-nachrichtenlage-headline")
                .addClass("hidden"),
              jQuery("body").trigger(t.videoIdEvent)),
              e.data === YT.PlayerState.ENDED && stopVideo(),
              (e.data !== YT.PlayerState.ENDED &&
                e.data !== YT.PlayerState.PAUSED) ||
                jQuery(t.rootNode)
                  .next(".grosse-nachrichtenlage-headline")
                  .removeClass("hidden");
          },
        },
      })),
        (this.videoIdEvent = jQuery.Event("videoPlay", { id: this.contentId }));
    }),
    (jQuery.fn.youtubePlayer = function (e) {
      return this.each(function () {
        new ke(this, e);
      });
    });
})((jQuery = $.noConflict()), window, document);
//# sourceMappingURL=main.min.js.map
