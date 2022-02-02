/*! For license information please see main.cfbfad46.js.LICENSE.txt */
!(function () {
  var e = {
      7757: function (e, t, n) {
        e.exports = n(9727);
      },
      4437: function (e, t, n) {
        'use strict';
        var r = n(2791),
          i = n(4164);
        function a(e, t) {
          (null == t || t > e.length) && (t = e.length);
          for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
          return r;
        }
        function o(e, t) {
          if (e) {
            if ('string' === typeof e) return a(e, t);
            var n = Object.prototype.toString.call(e).slice(8, -1);
            return (
              'Object' === n && e.constructor && (n = e.constructor.name),
              'Map' === n || 'Set' === n
                ? Array.from(e)
                : 'Arguments' === n ||
                  /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)
                ? a(e, t)
                : void 0
            );
          }
        }
        function s(e, t) {
          return (
            (function (e) {
              if (Array.isArray(e)) return e;
            })(e) ||
            (function (e, t) {
              var n =
                null == e
                  ? null
                  : ('undefined' !== typeof Symbol && e[Symbol.iterator]) ||
                    e['@@iterator'];
              if (null != n) {
                var r,
                  i,
                  a = [],
                  o = !0,
                  s = !1;
                try {
                  for (
                    n = n.call(e);
                    !(o = (r = n.next()).done) &&
                    (a.push(r.value), !t || a.length !== t);
                    o = !0
                  );
                } catch (l) {
                  (s = !0), (i = l);
                } finally {
                  try {
                    o || null == n.return || n.return();
                  } finally {
                    if (s) throw i;
                  }
                }
                return a;
              }
            })(e, t) ||
            o(e, t) ||
            (function () {
              throw new TypeError(
                'Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.',
              );
            })()
          );
        }
        var l = n(184);
        function u(e) {
          return (0, l.jsx)('div', {
            className: 'icon '.concat(e.class),
            children: (0, l.jsx)('img', { src: e.icon, alt: 'icon' }),
          });
        }
        var c = function (e, t) {
          return (
            (c =
              Object.setPrototypeOf ||
              ({ __proto__: [] } instanceof Array &&
                function (e, t) {
                  e.__proto__ = t;
                }) ||
              function (e, t) {
                for (var n in t)
                  Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
              }),
            c(e, t)
          );
        };
        function d(e, t) {
          if ('function' !== typeof t && null !== t)
            throw new TypeError(
              'Class extends value ' +
                String(t) +
                ' is not a constructor or null',
            );
          function n() {
            this.constructor = e;
          }
          c(e, t),
            (e.prototype =
              null === t
                ? Object.create(t)
                : ((n.prototype = t.prototype), new n()));
        }
        var f = function () {
          return (
            (f =
              Object.assign ||
              function (e) {
                for (var t, n = 1, r = arguments.length; n < r; n++)
                  for (var i in (t = arguments[n]))
                    Object.prototype.hasOwnProperty.call(t, i) && (e[i] = t[i]);
                return e;
              }),
            f.apply(this, arguments)
          );
        };
        function p(e, t) {
          var n = {};
          for (var r in e)
            Object.prototype.hasOwnProperty.call(e, r) &&
              t.indexOf(r) < 0 &&
              (n[r] = e[r]);
          if (null != e && 'function' === typeof Object.getOwnPropertySymbols) {
            var i = 0;
            for (r = Object.getOwnPropertySymbols(e); i < r.length; i++)
              t.indexOf(r[i]) < 0 &&
                Object.prototype.propertyIsEnumerable.call(e, r[i]) &&
                (n[r[i]] = e[r[i]]);
          }
          return n;
        }
        Object.create;
        function h(e, t) {
          var n = 'function' === typeof Symbol && e[Symbol.iterator];
          if (!n) return e;
          var r,
            i,
            a = n.call(e),
            o = [];
          try {
            for (; (void 0 === t || t-- > 0) && !(r = a.next()).done; )
              o.push(r.value);
          } catch (s) {
            i = { error: s };
          } finally {
            try {
              r && !r.done && (n = a.return) && n.call(a);
            } finally {
              if (i) throw i.error;
            }
          }
          return o;
        }
        function v(e, t, n) {
          if (n || 2 === arguments.length)
            for (var r, i = 0, a = t.length; i < a; i++)
              (!r && i in t) ||
                (r || (r = Array.prototype.slice.call(t, 0, i)), (r[i] = t[i]));
          return e.concat(r || Array.prototype.slice.call(t));
        }
        Object.create;
        var m = function (e) {
            return {
              isEnabled: function (t) {
                return e.some(function (e) {
                  return !!t[e];
                });
              },
            };
          },
          g = {
            measureLayout: m(['layout', 'layoutId', 'drag']),
            animation: m([
              'animate',
              'exit',
              'variants',
              'whileHover',
              'whileTap',
              'whileFocus',
              'whileDrag',
              'whileInView',
            ]),
            exit: m(['exit']),
            drag: m(['drag', 'dragControls']),
            focus: m(['whileFocus']),
            hover: m(['whileHover', 'onHoverStart', 'onHoverEnd']),
            tap: m(['whileTap', 'onTap', 'onTapStart', 'onTapCancel']),
            pan: m(['onPan', 'onPanStart', 'onPanSessionStart', 'onPanEnd']),
            inView: m(['whileInView', 'onViewportEnter', 'onViewportLeave']),
          };
        var y = (0, r.createContext)({ strict: !1 }),
          b = Object.keys(g),
          w = b.length;
        var x = (0, r.createContext)({
            transformPagePoint: function (e) {
              return e;
            },
            isStatic: !1,
          }),
          S = (0, r.createContext)({});
        var E = (0, r.createContext)(null),
          k = 'undefined' !== typeof window,
          C = k ? r.useLayoutEffect : r.useEffect;
        function T(e, t, n, i) {
          var a = (0, r.useContext)(y),
            o = (0, r.useContext)(S).visualElement,
            s = (0, r.useContext)(E),
            l = (0, r.useRef)(void 0);
          i || (i = a.renderer),
            !l.current &&
              i &&
              (l.current = i(e, {
                visualState: t,
                parent: o,
                props: n,
                presenceId: null === s || void 0 === s ? void 0 : s.id,
                blockInitialAnimation:
                  !1 === (null === s || void 0 === s ? void 0 : s.initial),
              }));
          var u = l.current;
          return (
            C(function () {
              null === u || void 0 === u || u.syncRender();
            }),
            (0, r.useEffect)(function () {
              var e;
              null ===
                (e = null === u || void 0 === u ? void 0 : u.animationState) ||
                void 0 === e ||
                e.animateChanges();
            }),
            C(function () {
              return function () {
                return null === u || void 0 === u ? void 0 : u.notifyUnmount();
              };
            }, []),
            u
          );
        }
        function P(e) {
          return (
            'object' === typeof e &&
            Object.prototype.hasOwnProperty.call(e, 'current')
          );
        }
        function O(e) {
          return Array.isArray(e);
        }
        function j(e) {
          return 'string' === typeof e || O(e);
        }
        function L(e, t, n, r, i) {
          var a;
          return (
            void 0 === r && (r = {}),
            void 0 === i && (i = {}),
            'function' === typeof t &&
              (t = t(null !== n && void 0 !== n ? n : e.custom, r, i)),
            'string' === typeof t &&
              (t = null === (a = e.variants) || void 0 === a ? void 0 : a[t]),
            'function' === typeof t &&
              (t = t(null !== n && void 0 !== n ? n : e.custom, r, i)),
            t
          );
        }
        function _(e, t, n) {
          var r = e.getProps();
          return L(
            r,
            t,
            null !== n && void 0 !== n ? n : r.custom,
            (function (e) {
              var t = {};
              return (
                e.forEachValue(function (e, n) {
                  return (t[n] = e.get());
                }),
                t
              );
            })(e),
            (function (e) {
              var t = {};
              return (
                e.forEachValue(function (e, n) {
                  return (t[n] = e.getVelocity());
                }),
                t
              );
            })(e),
          );
        }
        function A(e) {
          var t;
          return (
            'function' ===
              typeof (null === (t = e.animate) || void 0 === t
                ? void 0
                : t.start) ||
            j(e.initial) ||
            j(e.animate) ||
            j(e.whileHover) ||
            j(e.whileDrag) ||
            j(e.whileTap) ||
            j(e.whileFocus) ||
            j(e.exit)
          );
        }
        function M(e) {
          return Boolean(A(e) || e.variants);
        }
        function N(e) {
          var t = (function (e, t) {
              if (A(e)) {
                var n = e.initial,
                  r = e.animate;
                return {
                  initial: !1 === n || j(n) ? n : void 0,
                  animate: j(r) ? r : void 0,
                };
              }
              return !1 !== e.inherit ? t : {};
            })(e, (0, r.useContext)(S)),
            n = t.initial,
            i = t.animate;
          return (0, r.useMemo)(
            function () {
              return { initial: n, animate: i };
            },
            [R(n), R(i)],
          );
        }
        function R(e) {
          return Array.isArray(e) ? e.join(' ') : e;
        }
        function I(e) {
          var t = (0, r.useRef)(null);
          return null === t.current && (t.current = e()), t.current;
        }
        var D = (1 / 60) * 1e3,
          z =
            'undefined' !== typeof performance
              ? function () {
                  return performance.now();
                }
              : function () {
                  return Date.now();
                },
          V =
            'undefined' !== typeof window
              ? function (e) {
                  return window.requestAnimationFrame(e);
                }
              : function (e) {
                  return setTimeout(function () {
                    return e(z());
                  }, D);
                };
        var F = !0,
          B = !1,
          U = !1,
          $ = { delta: 0, timestamp: 0 },
          q = ['read', 'update', 'preRender', 'render', 'postRender'],
          H = q.reduce(function (e, t) {
            return (
              (e[t] = (function (e) {
                var t = [],
                  n = [],
                  r = 0,
                  i = !1,
                  a = !1,
                  o = new WeakSet(),
                  s = {
                    schedule: function (e) {
                      var a =
                          arguments.length > 2 &&
                          void 0 !== arguments[2] &&
                          arguments[2] &&
                          i,
                        s = a ? t : n;
                      return (
                        arguments.length > 1 &&
                          void 0 !== arguments[1] &&
                          arguments[1] &&
                          o.add(e),
                        -1 === s.indexOf(e) &&
                          (s.push(e), a && i && (r = t.length)),
                        e
                      );
                    },
                    cancel: function (e) {
                      var t = n.indexOf(e);
                      -1 !== t && n.splice(t, 1), o.delete(e);
                    },
                    process: function (l) {
                      if (i) a = !0;
                      else {
                        i = !0;
                        var u = [n, t];
                        if (
                          ((t = u[0]), ((n = u[1]).length = 0), (r = t.length))
                        )
                          for (var c = 0; c < r; c++) {
                            var d = t[c];
                            d(l), o.has(d) && (s.schedule(d), e());
                          }
                        (i = !1), a && ((a = !1), s.process(l));
                      }
                    },
                  };
                return s;
              })(function () {
                return (B = !0);
              })),
              e
            );
          }, {}),
          W = q.reduce(function (e, t) {
            var n = H[t];
            return (
              (e[t] = function (e) {
                var t =
                    arguments.length > 1 &&
                    void 0 !== arguments[1] &&
                    arguments[1],
                  r =
                    arguments.length > 2 &&
                    void 0 !== arguments[2] &&
                    arguments[2];
                return B || K(), n.schedule(e, t, r);
              }),
              e
            );
          }, {}),
          G = q.reduce(function (e, t) {
            return (e[t] = H[t].cancel), e;
          }, {}),
          Y = q.reduce(function (e, t) {
            return (
              (e[t] = function () {
                return H[t].process($);
              }),
              e
            );
          }, {}),
          X = function (e) {
            return H[e].process($);
          },
          Q = function e(t) {
            (B = !1),
              ($.delta = F ? D : Math.max(Math.min(t - $.timestamp, 40), 1)),
              ($.timestamp = t),
              (U = !0),
              q.forEach(X),
              (U = !1),
              B && ((F = !1), V(e));
          },
          K = function () {
            (B = !0), (F = !0), U || V(Q);
          },
          J = function () {
            return $;
          },
          Z = W,
          ee = function (e, t, n) {
            return -n * e + n * t + e;
          };
        function te(e, t) {
          return t ? e * (1e3 / t) : 0;
        }
        function ne(e, t) {
          -1 === e.indexOf(t) && e.push(t);
        }
        function re(e, t) {
          var n = e.indexOf(t);
          n > -1 && e.splice(n, 1);
        }
        var ie = (function () {
            function e() {
              this.subscriptions = [];
            }
            return (
              (e.prototype.add = function (e) {
                var t = this;
                return (
                  ne(this.subscriptions, e),
                  function () {
                    return re(t.subscriptions, e);
                  }
                );
              }),
              (e.prototype.notify = function (e, t, n) {
                var r = this.subscriptions.length;
                if (r)
                  if (1 === r) this.subscriptions[0](e, t, n);
                  else
                    for (var i = 0; i < r; i++) {
                      var a = this.subscriptions[i];
                      a && a(e, t, n);
                    }
              }),
              (e.prototype.getSize = function () {
                return this.subscriptions.length;
              }),
              (e.prototype.clear = function () {
                this.subscriptions.length = 0;
              }),
              e
            );
          })(),
          ae = (function () {
            function e(e) {
              var t = this;
              (this.timeDelta = 0),
                (this.lastUpdated = 0),
                (this.updateSubscribers = new ie()),
                (this.velocityUpdateSubscribers = new ie()),
                (this.renderSubscribers = new ie()),
                (this.canTrackVelocity = !1),
                (this.updateAndNotify = function (e, n) {
                  void 0 === n && (n = !0),
                    (t.prev = t.current),
                    (t.current = e);
                  var r = J(),
                    i = r.delta,
                    a = r.timestamp;
                  t.lastUpdated !== a &&
                    ((t.timeDelta = i),
                    (t.lastUpdated = a),
                    Z.postRender(t.scheduleVelocityCheck)),
                    t.prev !== t.current &&
                      t.updateSubscribers.notify(t.current),
                    t.velocityUpdateSubscribers.getSize() &&
                      t.velocityUpdateSubscribers.notify(t.getVelocity()),
                    n && t.renderSubscribers.notify(t.current);
                }),
                (this.scheduleVelocityCheck = function () {
                  return Z.postRender(t.velocityCheck);
                }),
                (this.velocityCheck = function (e) {
                  e.timestamp !== t.lastUpdated &&
                    ((t.prev = t.current),
                    t.velocityUpdateSubscribers.notify(t.getVelocity()));
                }),
                (this.hasAnimated = !1),
                (this.prev = this.current = e),
                (this.canTrackVelocity = (function (e) {
                  return !isNaN(parseFloat(e));
                })(this.current));
            }
            return (
              (e.prototype.onChange = function (e) {
                return this.updateSubscribers.add(e);
              }),
              (e.prototype.clearListeners = function () {
                this.updateSubscribers.clear();
              }),
              (e.prototype.onRenderRequest = function (e) {
                return e(this.get()), this.renderSubscribers.add(e);
              }),
              (e.prototype.attach = function (e) {
                this.passiveEffect = e;
              }),
              (e.prototype.set = function (e, t) {
                void 0 === t && (t = !0),
                  t && this.passiveEffect
                    ? this.passiveEffect(e, this.updateAndNotify)
                    : this.updateAndNotify(e, t);
              }),
              (e.prototype.get = function () {
                return this.current;
              }),
              (e.prototype.getPrevious = function () {
                return this.prev;
              }),
              (e.prototype.getVelocity = function () {
                return this.canTrackVelocity
                  ? te(
                      parseFloat(this.current) - parseFloat(this.prev),
                      this.timeDelta,
                    )
                  : 0;
              }),
              (e.prototype.start = function (e) {
                var t = this;
                return (
                  this.stop(),
                  new Promise(function (n) {
                    (t.hasAnimated = !0), (t.stopAnimation = e(n));
                  }).then(function () {
                    return t.clearAnimation();
                  })
                );
              }),
              (e.prototype.stop = function () {
                this.stopAnimation && this.stopAnimation(),
                  this.clearAnimation();
              }),
              (e.prototype.isAnimating = function () {
                return !!this.stopAnimation;
              }),
              (e.prototype.clearAnimation = function () {
                this.stopAnimation = null;
              }),
              (e.prototype.destroy = function () {
                this.updateSubscribers.clear(),
                  this.renderSubscribers.clear(),
                  this.stop();
              }),
              e
            );
          })();
        function oe(e) {
          return new ae(e);
        }
        var se = function (e) {
          return Boolean(null !== e && 'object' === typeof e && e.getVelocity);
        };
        var le = function (e, t, n) {
            return Math.min(Math.max(n, e), t);
          },
          ue = 0.001;
        function ce(e) {
          var t,
            n,
            r = e.duration,
            i = void 0 === r ? 800 : r,
            a = e.bounce,
            o = void 0 === a ? 0.25 : a,
            s = e.velocity,
            l = void 0 === s ? 0 : s,
            u = e.mass,
            c = void 0 === u ? 1 : u,
            d = 1 - o;
          (d = le(0.05, 1, d)),
            (i = le(0.01, 10, i / 1e3)),
            d < 1
              ? ((t = function (e) {
                  var t = e * d,
                    n = t * i,
                    r = t - l,
                    a = de(e, d),
                    o = Math.exp(-n);
                  return ue - (r / a) * o;
                }),
                (n = function (e) {
                  var n = e * d * i,
                    r = n * l + l,
                    a = Math.pow(d, 2) * Math.pow(e, 2) * i,
                    o = Math.exp(-n),
                    s = de(Math.pow(e, 2), d);
                  return ((-t(e) + ue > 0 ? -1 : 1) * ((r - a) * o)) / s;
                }))
              : ((t = function (e) {
                  return Math.exp(-e * i) * ((e - l) * i + 1) - 0.001;
                }),
                (n = function (e) {
                  return Math.exp(-e * i) * (i * i * (l - e));
                }));
          var f = (function (e, t, n) {
            for (var r = n, i = 1; i < 12; i++) r -= e(r) / t(r);
            return r;
          })(t, n, 5 / i);
          if (((i *= 1e3), isNaN(f)))
            return { stiffness: 100, damping: 10, duration: i };
          var p = Math.pow(f, 2) * c;
          return {
            stiffness: p,
            damping: 2 * d * Math.sqrt(c * p),
            duration: i,
          };
        }
        function de(e, t) {
          return e * Math.sqrt(1 - t * t);
        }
        var fe = ['duration', 'bounce'],
          pe = ['stiffness', 'damping', 'mass'];
        function he(e, t) {
          return t.some(function (t) {
            return void 0 !== e[t];
          });
        }
        function ve(e) {
          var t = e.from,
            n = void 0 === t ? 0 : t,
            r = e.to,
            i = void 0 === r ? 1 : r,
            a = e.restSpeed,
            o = void 0 === a ? 2 : a,
            s = e.restDelta,
            l = p(e, ['from', 'to', 'restSpeed', 'restDelta']),
            u = { done: !1, value: n },
            c = (function (e) {
              var t = Object.assign(
                {
                  velocity: 0,
                  stiffness: 100,
                  damping: 10,
                  mass: 1,
                  isResolvedFromDuration: !1,
                },
                e,
              );
              if (!he(e, pe) && he(e, fe)) {
                var n = ce(e);
                (t = Object.assign(Object.assign(Object.assign({}, t), n), {
                  velocity: 0,
                  mass: 1,
                })).isResolvedFromDuration = !0;
              }
              return t;
            })(l),
            d = c.stiffness,
            f = c.damping,
            h = c.mass,
            v = c.velocity,
            m = c.duration,
            g = c.isResolvedFromDuration,
            y = me,
            b = me;
          function w() {
            var e = v ? -v / 1e3 : 0,
              t = i - n,
              r = f / (2 * Math.sqrt(d * h)),
              a = Math.sqrt(d / h) / 1e3;
            if (
              (void 0 === s && (s = Math.min(Math.abs(i - n) / 100, 0.4)),
              r < 1)
            ) {
              var o = de(a, r);
              (y = function (n) {
                var s = Math.exp(-r * a * n);
                return (
                  i -
                  s *
                    (((e + r * a * t) / o) * Math.sin(o * n) +
                      t * Math.cos(o * n))
                );
              }),
                (b = function (n) {
                  var i = Math.exp(-r * a * n);
                  return (
                    r *
                      a *
                      i *
                      ((Math.sin(o * n) * (e + r * a * t)) / o +
                        t * Math.cos(o * n)) -
                    i *
                      (Math.cos(o * n) * (e + r * a * t) -
                        o * t * Math.sin(o * n))
                  );
                });
            } else if (1 === r)
              y = function (n) {
                return i - Math.exp(-a * n) * (t + (e + a * t) * n);
              };
            else {
              var l = a * Math.sqrt(r * r - 1);
              y = function (n) {
                var o = Math.exp(-r * a * n),
                  s = Math.min(l * n, 300);
                return (
                  i -
                  (o *
                    ((e + r * a * t) * Math.sinh(s) + l * t * Math.cosh(s))) /
                    l
                );
              };
            }
          }
          return (
            w(),
            {
              next: function (e) {
                var t = y(e);
                if (g) u.done = e >= m;
                else {
                  var n = 1e3 * b(e),
                    r = Math.abs(n) <= o,
                    a = Math.abs(i - t) <= s;
                  u.done = r && a;
                }
                return (u.value = u.done ? i : t), u;
              },
              flipTarget: function () {
                v = -v;
                var e = [i, n];
                (n = e[0]), (i = e[1]), w();
              },
            }
          );
        }
        ve.needsInterpolation = function (e, t) {
          return 'string' === typeof e || 'string' === typeof t;
        };
        var me = function (e) {
            return 0;
          },
          ge = function (e, t, n) {
            var r = t - e;
            return 0 === r ? 1 : (n - e) / r;
          },
          ye = function (e, t) {
            return function (n) {
              return Math.max(Math.min(n, t), e);
            };
          },
          be = function (e) {
            return e % 1 ? Number(e.toFixed(5)) : e;
          },
          we = /(-)?([\d]*\.?[\d])+/g,
          xe =
            /(#[0-9a-f]{6}|#[0-9a-f]{3}|#(?:[0-9a-f]{2}){2,4}|(rgb|hsl)a?\((-?[\d\.]+%?[,\s]+){2,3}\s*\/*\s*[\d\.]+%?\))/gi,
          Se =
            /^(#[0-9a-f]{3}|#(?:[0-9a-f]{2}){2,4}|(rgb|hsl)a?\((-?[\d\.]+%?[,\s]+){2,3}\s*\/*\s*[\d\.]+%?\))$/i;
        function Ee(e) {
          return 'string' === typeof e;
        }
        var ke = {
            test: function (e) {
              return 'number' === typeof e;
            },
            parse: parseFloat,
            transform: function (e) {
              return e;
            },
          },
          Ce = Object.assign(Object.assign({}, ke), { transform: ye(0, 1) }),
          Te = Object.assign(Object.assign({}, ke), { default: 1 });
        function Pe(e, t, n) {
          return (
            t in e
              ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
                })
              : (e[t] = n),
            e
          );
        }
        var Oe = function (e, t) {
            return function (n) {
              return Boolean(
                (Ee(n) && Se.test(n) && n.startsWith(e)) ||
                  (t && Object.prototype.hasOwnProperty.call(n, t)),
              );
            };
          },
          je = function (e, t, n) {
            return function (r) {
              var i;
              if (!Ee(r)) return r;
              var a = s(r.match(we), 4),
                o = a[0],
                l = a[1],
                u = a[2],
                c = a[3];
              return (
                Pe((i = {}), e, parseFloat(o)),
                Pe(i, t, parseFloat(l)),
                Pe(i, n, parseFloat(u)),
                Pe(i, 'alpha', void 0 !== c ? parseFloat(c) : 1),
                i
              );
            };
          },
          Le = ye(0, 255),
          _e = Object.assign(Object.assign({}, ke), {
            transform: function (e) {
              return Math.round(Le(e));
            },
          }),
          Ae = {
            test: Oe('rgb', 'red'),
            parse: je('red', 'green', 'blue'),
            transform: function (e) {
              var t = e.red,
                n = e.green,
                r = e.blue,
                i = e.alpha,
                a = void 0 === i ? 1 : i;
              return (
                'rgba(' +
                _e.transform(t) +
                ', ' +
                _e.transform(n) +
                ', ' +
                _e.transform(r) +
                ', ' +
                be(Ce.transform(a)) +
                ')'
              );
            },
          };
        var Me = {
            test: Oe('#'),
            parse: function (e) {
              var t = '',
                n = '',
                r = '',
                i = '';
              return (
                e.length > 5
                  ? ((t = e.substr(1, 2)),
                    (n = e.substr(3, 2)),
                    (r = e.substr(5, 2)),
                    (i = e.substr(7, 2)))
                  : ((t = e.substr(1, 1)),
                    (n = e.substr(2, 1)),
                    (r = e.substr(3, 1)),
                    (i = e.substr(4, 1)),
                    (t += t),
                    (n += n),
                    (r += r),
                    (i += i)),
                {
                  red: parseInt(t, 16),
                  green: parseInt(n, 16),
                  blue: parseInt(r, 16),
                  alpha: i ? parseInt(i, 16) / 255 : 1,
                }
              );
            },
            transform: Ae.transform,
          },
          Ne = function (e) {
            return {
              test: function (t) {
                return Ee(t) && t.endsWith(e) && 1 === t.split(' ').length;
              },
              parse: parseFloat,
              transform: function (t) {
                return ''.concat(t).concat(e);
              },
            };
          },
          Re = Ne('deg'),
          Ie = Ne('%'),
          De = Ne('px'),
          ze = Ne('vh'),
          Ve = Ne('vw'),
          Fe = Object.assign(Object.assign({}, Ie), {
            parse: function (e) {
              return Ie.parse(e) / 100;
            },
            transform: function (e) {
              return Ie.transform(100 * e);
            },
          }),
          Be = {
            test: Oe('hsl', 'hue'),
            parse: je('hue', 'saturation', 'lightness'),
            transform: function (e) {
              var t = e.hue,
                n = e.saturation,
                r = e.lightness,
                i = e.alpha,
                a = void 0 === i ? 1 : i;
              return (
                'hsla(' +
                Math.round(t) +
                ', ' +
                Ie.transform(be(n)) +
                ', ' +
                Ie.transform(be(r)) +
                ', ' +
                be(Ce.transform(a)) +
                ')'
              );
            },
          };
        function Ue(e, t, n) {
          return (
            n < 0 && (n += 1),
            n > 1 && (n -= 1),
            n < 1 / 6
              ? e + 6 * (t - e) * n
              : n < 0.5
              ? t
              : n < 2 / 3
              ? e + (t - e) * (2 / 3 - n) * 6
              : e
          );
        }
        function $e(e) {
          var t = e.hue,
            n = e.saturation,
            r = e.lightness,
            i = e.alpha;
          (t /= 360), (r /= 100);
          var a = 0,
            o = 0,
            s = 0;
          if ((n /= 100)) {
            var l = r < 0.5 ? r * (1 + n) : r + n - r * n,
              u = 2 * r - l;
            (a = Ue(u, l, t + 1 / 3)),
              (o = Ue(u, l, t)),
              (s = Ue(u, l, t - 1 / 3));
          } else a = o = s = r;
          return {
            red: Math.round(255 * a),
            green: Math.round(255 * o),
            blue: Math.round(255 * s),
            alpha: i,
          };
        }
        var qe = function (e, t, n) {
            var r = e * e,
              i = t * t;
            return Math.sqrt(Math.max(0, n * (i - r) + r));
          },
          He = [Me, Ae, Be],
          We = function (e) {
            return He.find(function (t) {
              return t.test(e);
            });
          },
          Ge = function (e) {
            return "'".concat(
              e,
              "' is not an animatable color. Use the equivalent color code instead.",
            );
          },
          Ye = function (e, t) {
            var n = We(e),
              r = We(t);
            Ge(e), Ge(t);
            var i = n.parse(e),
              a = r.parse(t);
            n === Be && ((i = $e(i)), (n = Ae)),
              r === Be && ((a = $e(a)), (r = Ae));
            var o = Object.assign({}, i);
            return function (e) {
              for (var t in o) 'alpha' !== t && (o[t] = qe(i[t], a[t], e));
              return (o.alpha = ee(i.alpha, a.alpha, e)), n.transform(o);
            };
          };
        function Xe(e) {
          return (
            (function (e) {
              if (Array.isArray(e)) return a(e);
            })(e) ||
            (function (e) {
              if (
                ('undefined' !== typeof Symbol && null != e[Symbol.iterator]) ||
                null != e['@@iterator']
              )
                return Array.from(e);
            })(e) ||
            o(e) ||
            (function () {
              throw new TypeError(
                'Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.',
              );
            })()
          );
        }
        var Qe = {
            test: function (e) {
              return Ae.test(e) || Me.test(e) || Be.test(e);
            },
            parse: function (e) {
              return Ae.test(e)
                ? Ae.parse(e)
                : Be.test(e)
                ? Be.parse(e)
                : Me.parse(e);
            },
            transform: function (e) {
              return Ee(e)
                ? e
                : e.hasOwnProperty('red')
                ? Ae.transform(e)
                : Be.transform(e);
            },
          },
          Ke = '${c}',
          Je = '${n}';
        function Ze(e) {
          'number' === typeof e && (e = ''.concat(e));
          var t = [],
            n = 0,
            r = e.match(xe);
          r &&
            ((n = r.length),
            (e = e.replace(xe, Ke)),
            t.push.apply(t, Xe(r.map(Qe.parse))));
          var i = e.match(we);
          return (
            i &&
              ((e = e.replace(we, Je)), t.push.apply(t, Xe(i.map(ke.parse)))),
            { values: t, numColors: n, tokenised: e }
          );
        }
        function et(e) {
          return Ze(e).values;
        }
        function tt(e) {
          var t = Ze(e),
            n = t.values,
            r = t.numColors,
            i = t.tokenised,
            a = n.length;
          return function (e) {
            for (var t = i, n = 0; n < a; n++)
              t = t.replace(
                n < r ? Ke : Je,
                n < r ? Qe.transform(e[n]) : be(e[n]),
              );
            return t;
          };
        }
        var nt = function (e) {
          return 'number' === typeof e ? 0 : e;
        };
        var rt = {
            test: function (e) {
              var t, n, r, i;
              return (
                isNaN(e) &&
                Ee(e) &&
                (null !==
                  (n =
                    null === (t = e.match(we)) || void 0 === t
                      ? void 0
                      : t.length) && void 0 !== n
                  ? n
                  : 0) +
                  (null !==
                    (i =
                      null === (r = e.match(xe)) || void 0 === r
                        ? void 0
                        : r.length) && void 0 !== i
                    ? i
                    : 0) >
                  0
              );
            },
            parse: et,
            createTransformer: tt,
            getAnimatableNone: function (e) {
              var t = et(e);
              return tt(e)(t.map(nt));
            },
          },
          it = function (e) {
            return 'number' === typeof e;
          },
          at = function (e, t) {
            return function (n) {
              return t(e(n));
            };
          },
          ot = function () {
            for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
              t[n] = arguments[n];
            return t.reduce(at);
          };
        function st(e, t) {
          return it(e)
            ? function (n) {
                return ee(e, t, n);
              }
            : Qe.test(e)
            ? Ye(e, t)
            : dt(e, t);
        }
        var lt = function (e, t) {
            var n = Xe(e),
              r = n.length,
              i = e.map(function (e, n) {
                return st(e, t[n]);
              });
            return function (e) {
              for (var t = 0; t < r; t++) n[t] = i[t](e);
              return n;
            };
          },
          ut = function (e, t) {
            var n = Object.assign(Object.assign({}, e), t),
              r = {};
            for (var i in n)
              void 0 !== e[i] && void 0 !== t[i] && (r[i] = st(e[i], t[i]));
            return function (e) {
              for (var t in r) n[t] = r[t](e);
              return n;
            };
          };
        function ct(e) {
          for (
            var t = rt.parse(e), n = t.length, r = 0, i = 0, a = 0, o = 0;
            o < n;
            o++
          )
            r || 'number' === typeof t[o]
              ? r++
              : void 0 !== t[o].hue
              ? a++
              : i++;
          return { parsed: t, numNumbers: r, numRGB: i, numHSL: a };
        }
        var dt = function (e, t) {
            var n = rt.createTransformer(t),
              r = ct(e),
              i = ct(t);
            return r.numHSL === i.numHSL &&
              r.numRGB === i.numRGB &&
              r.numNumbers >= i.numNumbers
              ? ot(lt(r.parsed, i.parsed), n)
              : ("Complex values '"
                  .concat(e, "' and '")
                  .concat(
                    t,
                    "' too different to mix. Ensure all colors are of the same type, and that each contains the same quantity of number and color values. Falling back to instant transition.",
                  ),
                function (n) {
                  return ''.concat(n > 0 ? t : e);
                });
          },
          ft = function (e, t) {
            return function (n) {
              return ee(e, t, n);
            };
          };
        function pt(e, t, n) {
          for (
            var r,
              i = [],
              a =
                n ||
                ('number' === typeof (r = e[0])
                  ? ft
                  : 'string' === typeof r
                  ? Qe.test(r)
                    ? Ye
                    : dt
                  : Array.isArray(r)
                  ? lt
                  : 'object' === typeof r
                  ? ut
                  : void 0),
              o = e.length - 1,
              s = 0;
            s < o;
            s++
          ) {
            var l = a(e[s], e[s + 1]);
            if (t) {
              var u = Array.isArray(t) ? t[s] : t;
              l = ot(u, l);
            }
            i.push(l);
          }
          return i;
        }
        function ht(e, t) {
          var n = s(e, 2),
            r = n[0],
            i = n[1],
            a = s(t, 1)[0];
          return function (e) {
            return a(ge(r, i, e));
          };
        }
        function vt(e, t) {
          var n = e.length,
            r = n - 1;
          return function (i) {
            var a = 0,
              o = !1;
            if (
              (i <= e[0] ? (o = !0) : i >= e[r] && ((a = r - 1), (o = !0)), !o)
            ) {
              for (var s = 1; s < n && !(e[s] > i || s === r); s++);
              a = s - 1;
            }
            var l = ge(e[a], e[a + 1], i);
            return t[a](l);
          };
        }
        function mt(e, t) {
          var n =
              arguments.length > 2 && void 0 !== arguments[2]
                ? arguments[2]
                : {},
            r = n.clamp,
            i = void 0 === r || r,
            a = n.ease,
            o = n.mixer,
            s = e.length;
          t.length,
            !a || !Array.isArray(a) || a.length,
            e[0] > e[s - 1] &&
              ((e = [].concat(e)),
              (t = [].concat(t)),
              e.reverse(),
              t.reverse());
          var l = pt(t, a, o),
            u = 2 === s ? ht(e, l) : vt(e, l);
          return i
            ? function (t) {
                return u(le(e[0], e[s - 1], t));
              }
            : u;
        }
        var gt,
          yt = function (e) {
            return function (t) {
              return 1 - e(1 - t);
            };
          },
          bt = function (e) {
            return function (t) {
              return t <= 0.5 ? e(2 * t) / 2 : (2 - e(2 * (1 - t))) / 2;
            };
          },
          wt = function (e) {
            return function (t) {
              return t * t * ((e + 1) * t - e);
            };
          },
          xt = function (e) {
            return e;
          },
          St =
            ((gt = 2),
            function (e) {
              return Math.pow(e, gt);
            }),
          Et = yt(St),
          kt = bt(St),
          Ct = function (e) {
            return 1 - Math.sin(Math.acos(e));
          },
          Tt = yt(Ct),
          Pt = bt(Tt),
          Ot = wt(1.525),
          jt = yt(Ot),
          Lt = bt(Ot),
          _t = (function (e) {
            var t = wt(e);
            return function (e) {
              return (e *= 2) < 1
                ? 0.5 * t(e)
                : 0.5 * (2 - Math.pow(2, -10 * (e - 1)));
            };
          })(1.525),
          At = function (e) {
            if (1 === e || 0 === e) return e;
            var t = e * e;
            return e < 0.36363636363636365
              ? 7.5625 * t
              : e < 0.7272727272727273
              ? 9.075 * t - 9.9 * e + 3.4
              : e < 0.9
              ? 12.066481994459833 * t -
                19.63545706371191 * e +
                8.898060941828255
              : 10.8 * e * e - 20.52 * e + 10.72;
          },
          Mt = yt(At);
        function Nt(e, t) {
          return e
            .map(function () {
              return t || kt;
            })
            .splice(0, e.length - 1);
        }
        function Rt(e) {
          var t = e.from,
            n = void 0 === t ? 0 : t,
            r = e.to,
            i = void 0 === r ? 1 : r,
            a = e.ease,
            o = e.offset,
            s = e.duration,
            l = void 0 === s ? 300 : s,
            u = { done: !1, value: n },
            c = Array.isArray(i) ? i : [n, i],
            d = (function (e, t) {
              return e.map(function (e) {
                return e * t;
              });
            })(
              o && o.length === c.length
                ? o
                : (function (e) {
                    var t = e.length;
                    return e.map(function (e, n) {
                      return 0 !== n ? n / (t - 1) : 0;
                    });
                  })(c),
              l,
            );
          function f() {
            return mt(d, c, { ease: Array.isArray(a) ? a : Nt(c, a) });
          }
          var p = f();
          return {
            next: function (e) {
              return (u.value = p(e)), (u.done = e >= l), u;
            },
            flipTarget: function () {
              c.reverse(), (p = f());
            },
          };
        }
        var It = {
          keyframes: Rt,
          spring: ve,
          decay: function (e) {
            var t = e.velocity,
              n = void 0 === t ? 0 : t,
              r = e.from,
              i = void 0 === r ? 0 : r,
              a = e.power,
              o = void 0 === a ? 0.8 : a,
              s = e.timeConstant,
              l = void 0 === s ? 350 : s,
              u = e.restDelta,
              c = void 0 === u ? 0.5 : u,
              d = e.modifyTarget,
              f = { done: !1, value: i },
              p = o * n,
              h = i + p,
              v = void 0 === d ? h : d(h);
            return (
              v !== h && (p = v - i),
              {
                next: function (e) {
                  var t = -p * Math.exp(-e / l);
                  return (
                    (f.done = !(t > c || t < -c)),
                    (f.value = f.done ? v : v + t),
                    f
                  );
                },
                flipTarget: function () {},
              }
            );
          },
        };
        function Dt(e, t) {
          var n =
            arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0;
          return e - t - n;
        }
        var zt = function (e) {
          var t = function (t) {
            var n = t.delta;
            return e(n);
          };
          return {
            start: function () {
              return Z.update(t, !0);
            },
            stop: function () {
              return G.update(t);
            },
          };
        };
        function Vt(e) {
          var t,
            n,
            r,
            i,
            a,
            o = e.from,
            s = e.autoplay,
            l = void 0 === s || s,
            u = e.driver,
            c = void 0 === u ? zt : u,
            d = e.elapsed,
            f = void 0 === d ? 0 : d,
            h = e.repeat,
            v = void 0 === h ? 0 : h,
            m = e.repeatType,
            g = void 0 === m ? 'loop' : m,
            y = e.repeatDelay,
            b = void 0 === y ? 0 : y,
            w = e.onPlay,
            x = e.onStop,
            S = e.onComplete,
            E = e.onRepeat,
            k = e.onUpdate,
            C = p(e, [
              'from',
              'autoplay',
              'driver',
              'elapsed',
              'repeat',
              'repeatType',
              'repeatDelay',
              'onPlay',
              'onStop',
              'onComplete',
              'onRepeat',
              'onUpdate',
            ]),
            T = C.to,
            P = 0,
            O = C.duration,
            j = !1,
            L = !0,
            _ = (function (e) {
              if (Array.isArray(e.to)) return Rt;
              if (It[e.type]) return It[e.type];
              var t = new Set(Object.keys(e));
              return t.has('ease') ||
                (t.has('duration') && !t.has('dampingRatio'))
                ? Rt
                : t.has('dampingRatio') ||
                  t.has('stiffness') ||
                  t.has('mass') ||
                  t.has('damping') ||
                  t.has('restSpeed') ||
                  t.has('restDelta')
                ? ve
                : Rt;
            })(C);
          (null === (n = (t = _).needsInterpolation) || void 0 === n
            ? void 0
            : n.call(t, o, T)) &&
            ((a = mt([0, 100], [o, T], { clamp: !1 })), (o = 0), (T = 100));
          var A = _(Object.assign(Object.assign({}, C), { from: o, to: T }));
          function M() {
            P++,
              'reverse' === g
                ? (f = (function (e, t) {
                    var n =
                      arguments.length > 2 && void 0 !== arguments[2]
                        ? arguments[2]
                        : 0;
                    return arguments.length > 3 &&
                      void 0 !== arguments[3] &&
                      !arguments[3]
                      ? t - (e - t) + n
                      : Dt(t + -e, t, n);
                  })(f, O, b, (L = P % 2 === 0)))
                : ((f = Dt(f, O, b)), 'mirror' === g && A.flipTarget()),
              (j = !1),
              E && E();
          }
          function N(e) {
            if ((L || (e = -e), (f += e), !j)) {
              var t = A.next(Math.max(0, f));
              (i = t.value), a && (i = a(i)), (j = L ? t.done : f <= 0);
            }
            null === k || void 0 === k || k(i),
              j &&
                (0 === P && ((null !== O && void 0 !== O) || (O = f)),
                P < v
                  ? (function (e, t, n, r) {
                      return r ? e >= t + n : e <= -n;
                    })(f, O, b, L) && M()
                  : (r.stop(), S && S()));
          }
          return (
            l && (null === w || void 0 === w || w(), (r = c(N)).start()),
            {
              stop: function () {
                null === x || void 0 === x || x(), r.stop();
              },
            }
          );
        }
        var Ft = function (e) {
            return 1e3 * e;
          },
          Bt = function (e, t) {
            return 1 - 3 * t + 3 * e;
          },
          Ut = function (e, t) {
            return 3 * t - 6 * e;
          },
          $t = function (e) {
            return 3 * e;
          },
          qt = function (e, t, n) {
            return ((Bt(t, n) * e + Ut(t, n)) * e + $t(t)) * e;
          },
          Ht = function (e, t, n) {
            return 3 * Bt(t, n) * e * e + 2 * Ut(t, n) * e + $t(t);
          };
        var Wt = 0.1;
        function Gt(e, t, n, r) {
          if (e === t && n === r) return xt;
          for (var i = new Float32Array(11), a = 0; a < 11; ++a)
            i[a] = qt(a * Wt, e, n);
          function o(t) {
            for (var r = 0, a = 1; 10 !== a && i[a] <= t; ++a) r += Wt;
            --a;
            var o = r + ((t - i[a]) / (i[a + 1] - i[a])) * Wt,
              s = Ht(o, e, n);
            return s >= 0.001
              ? (function (e, t, n, r) {
                  for (var i = 0; i < 8; ++i) {
                    var a = Ht(t, n, r);
                    if (0 === a) return t;
                    t -= (qt(t, n, r) - e) / a;
                  }
                  return t;
                })(t, o, e, n)
              : 0 === s
              ? o
              : (function (e, t, n, r, i) {
                  var a,
                    o,
                    s = 0;
                  do {
                    (a = qt((o = t + (n - t) / 2), r, i) - e) > 0
                      ? (n = o)
                      : (t = o);
                  } while (Math.abs(a) > 1e-7 && ++s < 10);
                  return o;
                })(t, r, r + Wt, e, n);
          }
          return function (e) {
            return 0 === e || 1 === e ? e : qt(o(e), t, r);
          };
        }
        var Yt = {
            linear: xt,
            easeIn: St,
            easeInOut: kt,
            easeOut: Et,
            circIn: Ct,
            circInOut: Pt,
            circOut: Tt,
            backIn: Ot,
            backInOut: Lt,
            backOut: jt,
            anticipate: _t,
            bounceIn: Mt,
            bounceInOut: function (e) {
              return e < 0.5
                ? 0.5 * (1 - At(1 - 2 * e))
                : 0.5 * At(2 * e - 1) + 0.5;
            },
            bounceOut: At,
          },
          Xt = function (e) {
            if (Array.isArray(e)) {
              e.length;
              var t = h(e, 4);
              return Gt(t[0], t[1], t[2], t[3]);
            }
            return 'string' === typeof e
              ? ("Invalid easing type '".concat(e, "'"), Yt[e])
              : e;
          },
          Qt = function (e, t) {
            return (
              'zIndex' !== e &&
              (!('number' !== typeof t && !Array.isArray(t)) ||
                !('string' !== typeof t || !rt.test(t) || t.startsWith('url(')))
            );
          },
          Kt = function (e) {
            return Array.isArray(e);
          },
          Jt = function () {
            return {
              type: 'spring',
              stiffness: 500,
              damping: 25,
              restSpeed: 10,
            };
          },
          Zt = function (e) {
            return {
              type: 'spring',
              stiffness: 550,
              damping: 0 === e ? 2 * Math.sqrt(550) : 30,
              restSpeed: 10,
            };
          },
          en = function () {
            return { type: 'keyframes', ease: 'linear', duration: 0.3 };
          },
          tn = function (e) {
            return { type: 'keyframes', duration: 0.8, values: e };
          },
          nn = {
            x: Jt,
            y: Jt,
            z: Jt,
            rotate: Jt,
            rotateX: Jt,
            rotateY: Jt,
            rotateZ: Jt,
            scaleX: Zt,
            scaleY: Zt,
            scale: Zt,
            opacity: en,
            backgroundColor: en,
            color: en,
            default: Zt,
          },
          rn = new Set(['brightness', 'contrast', 'saturate', 'opacity']);
        function an(e) {
          var t = s(e.slice(0, -1).split('('), 2),
            n = t[0],
            r = t[1];
          if ('drop-shadow' === n) return e;
          var i = s(r.match(we) || [], 1)[0];
          if (!i) return e;
          var a = r.replace(i, ''),
            o = rn.has(n) ? 1 : 0;
          return i !== r && (o *= 100), n + '(' + o + a + ')';
        }
        var on = /([a-z-]*)\(.*?\)/g,
          sn = Object.assign(Object.assign({}, rt), {
            getAnimatableNone: function (e) {
              var t = e.match(on);
              return t ? t.map(an).join(' ') : e;
            },
          }),
          ln = f(f({}, ke), { transform: Math.round }),
          un = {
            borderWidth: De,
            borderTopWidth: De,
            borderRightWidth: De,
            borderBottomWidth: De,
            borderLeftWidth: De,
            borderRadius: De,
            radius: De,
            borderTopLeftRadius: De,
            borderTopRightRadius: De,
            borderBottomRightRadius: De,
            borderBottomLeftRadius: De,
            width: De,
            maxWidth: De,
            height: De,
            maxHeight: De,
            size: De,
            top: De,
            right: De,
            bottom: De,
            left: De,
            padding: De,
            paddingTop: De,
            paddingRight: De,
            paddingBottom: De,
            paddingLeft: De,
            margin: De,
            marginTop: De,
            marginRight: De,
            marginBottom: De,
            marginLeft: De,
            rotate: Re,
            rotateX: Re,
            rotateY: Re,
            rotateZ: Re,
            scale: Te,
            scaleX: Te,
            scaleY: Te,
            scaleZ: Te,
            skew: Re,
            skewX: Re,
            skewY: Re,
            distance: De,
            translateX: De,
            translateY: De,
            translateZ: De,
            x: De,
            y: De,
            z: De,
            perspective: De,
            transformPerspective: De,
            opacity: Ce,
            originX: Fe,
            originY: Fe,
            originZ: De,
            zIndex: ln,
            fillOpacity: Ce,
            strokeOpacity: Ce,
            numOctaves: ln,
          },
          cn = f(f({}, un), {
            color: Qe,
            backgroundColor: Qe,
            outlineColor: Qe,
            fill: Qe,
            stroke: Qe,
            borderColor: Qe,
            borderTopColor: Qe,
            borderRightColor: Qe,
            borderBottomColor: Qe,
            borderLeftColor: Qe,
            filter: sn,
            WebkitFilter: sn,
          }),
          dn = function (e) {
            return cn[e];
          };
        function fn(e, t) {
          var n,
            r = dn(e);
          return (
            r !== sn && (r = rt),
            null === (n = r.getAnimatableNone) || void 0 === n
              ? void 0
              : n.call(r, t)
          );
        }
        var pn = !1,
          hn = function (e) {
            return Kt(e) ? e[e.length - 1] || 0 : e;
          };
        function vn(e) {
          var t = e.ease,
            n = e.times,
            r = e.yoyo,
            i = e.flip,
            a = e.loop,
            o = p(e, ['ease', 'times', 'yoyo', 'flip', 'loop']),
            s = f({}, o);
          return (
            n && (s.offset = n),
            o.duration && (s.duration = Ft(o.duration)),
            o.repeatDelay && (s.repeatDelay = Ft(o.repeatDelay)),
            t &&
              (s.ease = (function (e) {
                return Array.isArray(e) && 'number' !== typeof e[0];
              })(t)
                ? t.map(Xt)
                : Xt(t)),
            'tween' === o.type && (s.type = 'keyframes'),
            (r || a || i) &&
              (!0,
              r
                ? (s.repeatType = 'reverse')
                : a
                ? (s.repeatType = 'loop')
                : i && (s.repeatType = 'mirror'),
              (s.repeat = a || r || i || o.repeat)),
            'spring' !== o.type && (s.type = 'keyframes'),
            s
          );
        }
        function mn(e, t, n) {
          var r;
          return (
            Array.isArray(t.to) &&
              ((null !== (r = e.duration) && void 0 !== r) ||
                (e.duration = 0.8)),
            (function (e) {
              Array.isArray(e.to) &&
                null === e.to[0] &&
                ((e.to = v([], h(e.to), !1)), (e.to[0] = e.from));
            })(t),
            (function (e) {
              e.when,
                e.delay,
                e.delayChildren,
                e.staggerChildren,
                e.staggerDirection,
                e.repeat,
                e.repeatType,
                e.repeatDelay,
                e.from;
              var t = p(e, [
                'when',
                'delay',
                'delayChildren',
                'staggerChildren',
                'staggerDirection',
                'repeat',
                'repeatType',
                'repeatDelay',
                'from',
              ]);
              return !!Object.keys(t).length;
            })(e) ||
              (e = f(
                f({}, e),
                (function (e, t) {
                  var n;
                  return (
                    (n = Kt(t) ? tn : nn[e] || nn.default), f({ to: t }, n(t))
                  );
                })(n, t.to),
              )),
            f(f({}, t), vn(e))
          );
        }
        function gn(e, t, n, r, i) {
          var a,
            o = wn(r, e),
            s = null !== (a = o.from) && void 0 !== a ? a : t.get(),
            l = Qt(e, n);
          'none' === s && l && 'string' === typeof n
            ? (s = fn(e, n))
            : yn(s) && 'string' === typeof n
            ? (s = bn(n))
            : !Array.isArray(n) &&
              yn(n) &&
              'string' === typeof s &&
              (n = bn(s));
          var u = Qt(e, s);
          return (
            'You are trying to animate '
              .concat(e, ' from "')
              .concat(s, '" to "')
              .concat(n, '". ')
              .concat(
                s,
                ' is not an animatable value - to enable this animation set ',
              )
              .concat(s, ' to a value animatable to ')
              .concat(n, ' via the `style` property.'),
            u && l && !1 !== o.type
              ? function () {
                  var r = {
                    from: s,
                    to: n,
                    velocity: t.getVelocity(),
                    onComplete: i,
                    onUpdate: function (e) {
                      return t.set(e);
                    },
                  };
                  return 'inertia' === o.type || 'decay' === o.type
                    ? (function (e) {
                        var t,
                          n = e.from,
                          r = void 0 === n ? 0 : n,
                          i = e.velocity,
                          a = void 0 === i ? 0 : i,
                          o = e.min,
                          s = e.max,
                          l = e.power,
                          u = void 0 === l ? 0.8 : l,
                          c = e.timeConstant,
                          d = void 0 === c ? 750 : c,
                          f = e.bounceStiffness,
                          p = void 0 === f ? 500 : f,
                          h = e.bounceDamping,
                          v = void 0 === h ? 10 : h,
                          m = e.restDelta,
                          g = void 0 === m ? 1 : m,
                          y = e.modifyTarget,
                          b = e.driver,
                          w = e.onUpdate,
                          x = e.onComplete,
                          S = e.onStop;
                        function E(e) {
                          return (
                            (void 0 !== o && e < o) || (void 0 !== s && e > s)
                          );
                        }
                        function k(e) {
                          return void 0 === o
                            ? s
                            : void 0 === s || Math.abs(o - e) < Math.abs(s - e)
                            ? o
                            : s;
                        }
                        function C(e) {
                          null === t || void 0 === t || t.stop(),
                            (t = Vt(
                              Object.assign(Object.assign({}, e), {
                                driver: b,
                                onUpdate: function (t) {
                                  var n;
                                  null === w || void 0 === w || w(t),
                                    null === (n = e.onUpdate) ||
                                      void 0 === n ||
                                      n.call(e, t);
                                },
                                onComplete: x,
                                onStop: S,
                              }),
                            ));
                        }
                        function T(e) {
                          C(
                            Object.assign(
                              {
                                type: 'spring',
                                stiffness: p,
                                damping: v,
                                restDelta: g,
                              },
                              e,
                            ),
                          );
                        }
                        if (E(r)) T({ from: r, velocity: a, to: k(r) });
                        else {
                          var P = u * a + r;
                          'undefined' !== typeof y && (P = y(P));
                          var O,
                            j,
                            L = k(P),
                            _ = L === o ? -1 : 1;
                          C({
                            type: 'decay',
                            from: r,
                            velocity: a,
                            timeConstant: d,
                            power: u,
                            restDelta: g,
                            modifyTarget: y,
                            onUpdate: E(P)
                              ? function (e) {
                                  (O = j),
                                    (j = e),
                                    (a = te(e - O, J().delta)),
                                    ((1 === _ && e > L) ||
                                      (-1 === _ && e < L)) &&
                                      T({ from: e, to: L, velocity: a });
                                }
                              : void 0,
                          });
                        }
                        return {
                          stop: function () {
                            return null === t || void 0 === t
                              ? void 0
                              : t.stop();
                          },
                        };
                      })(f(f({}, r), o))
                    : Vt(
                        f(f({}, mn(o, r, e)), {
                          onUpdate: function (e) {
                            var t;
                            r.onUpdate(e),
                              null === (t = o.onUpdate) ||
                                void 0 === t ||
                                t.call(o, e);
                          },
                          onComplete: function () {
                            var e;
                            r.onComplete(),
                              null === (e = o.onComplete) ||
                                void 0 === e ||
                                e.call(o);
                          },
                        }),
                      );
                }
              : function () {
                  var e,
                    r,
                    a = hn(n);
                  return (
                    t.set(a),
                    i(),
                    null ===
                      (e = null === o || void 0 === o ? void 0 : o.onUpdate) ||
                      void 0 === e ||
                      e.call(o, a),
                    null ===
                      (r =
                        null === o || void 0 === o ? void 0 : o.onComplete) ||
                      void 0 === r ||
                      r.call(o),
                    { stop: function () {} }
                  );
                }
          );
        }
        function yn(e) {
          return (
            0 === e ||
            ('string' === typeof e &&
              0 === parseFloat(e) &&
              -1 === e.indexOf(' '))
          );
        }
        function bn(e) {
          return 'number' === typeof e ? 0 : fn('', e);
        }
        function wn(e, t) {
          return e[t] || e.default || e;
        }
        function xn(e, t, n, r) {
          return (
            void 0 === r && (r = {}),
            pn && (r = { type: !1 }),
            t.start(function (i) {
              var a,
                o,
                s = gn(e, t, n, r, i),
                l = (function (e, t) {
                  var n, r;
                  return null !==
                    (r =
                      null !== (n = (wn(e, t) || {}).delay) && void 0 !== n
                        ? n
                        : e.delay) && void 0 !== r
                    ? r
                    : 0;
                })(r, e),
                u = function () {
                  return (o = s());
                };
              return (
                l ? (a = setTimeout(u, Ft(l))) : u(),
                function () {
                  clearTimeout(a), null === o || void 0 === o || o.stop();
                }
              );
            })
          );
        }
        var Sn = ['TopLeft', 'TopRight', 'BottomLeft', 'BottomRight'],
          En = Sn.length;
        function kn(e, t) {
          var n;
          return null !== (n = e[t]) && void 0 !== n ? n : e.borderRadius;
        }
        var Cn = Pn(0, 0.5, Tt),
          Tn = Pn(0.5, 0.95, xt);
        function Pn(e, t, n) {
          return function (r) {
            return r < e ? 0 : r > t ? 1 : n(ge(e, t, r));
          };
        }
        function On(e, t) {
          (e.min = t.min), (e.max = t.max);
        }
        function jn(e, t) {
          On(e.x, t.x), On(e.y, t.y);
        }
        function Ln(e) {
          return void 0 === e || 1 === e;
        }
        function _n(e) {
          var t = e.scale,
            n = e.scaleX,
            r = e.scaleY;
          return !Ln(t) || !Ln(n) || !Ln(r);
        }
        function An(e) {
          return (
            _n(e) ||
            Mn(e.x) ||
            Mn(e.y) ||
            e.z ||
            e.rotate ||
            e.rotateX ||
            e.rotateY
          );
        }
        function Mn(e) {
          return e && '0%' !== e;
        }
        function Nn(e, t, n) {
          return n + t * (e - n);
        }
        function Rn(e, t, n, r, i) {
          return void 0 !== i && (e = Nn(e, i, r)), Nn(e, n, r) + t;
        }
        function In(e, t, n, r, i) {
          void 0 === t && (t = 0),
            void 0 === n && (n = 1),
            (e.min = Rn(e.min, t, n, r, i)),
            (e.max = Rn(e.max, t, n, r, i));
        }
        function Dn(e, t) {
          var n = t.x,
            r = t.y;
          In(e.x, n.translate, n.scale, n.originPoint),
            In(e.y, r.translate, r.scale, r.originPoint);
        }
        function zn(e, t) {
          (e.min = e.min + t), (e.max = e.max + t);
        }
        function Vn(e, t, n) {
          var r = h(n, 3),
            i = r[0],
            a = r[1],
            o = r[2],
            s = void 0 !== t[o] ? t[o] : 0.5,
            l = ee(e.min, e.max, s);
          In(e, t[i], t[a], l, t.scale);
        }
        var Fn = ['x', 'scaleX', 'originX'],
          Bn = ['y', 'scaleY', 'originY'];
        function Un(e, t) {
          Vn(e.x, t, Fn), Vn(e.y, t, Bn);
        }
        var $n = function (e) {
            return e.hasOwnProperty('x') && e.hasOwnProperty('y');
          },
          qn = function (e) {
            return $n(e) && e.hasOwnProperty('z');
          },
          Hn = function (e, t) {
            return Math.abs(e - t);
          };
        function Wn(e, t) {
          if (it(e) && it(t)) return Hn(e, t);
          if ($n(e) && $n(t)) {
            var n = Hn(e.x, t.x),
              r = Hn(e.y, t.y),
              i = qn(e) && qn(t) ? Hn(e.z, t.z) : 0;
            return Math.sqrt(Math.pow(n, 2) + Math.pow(r, 2) + Math.pow(i, 2));
          }
        }
        function Gn(e) {
          return e.max - e.min;
        }
        function Yn(e, t, n) {
          return (
            void 0 === t && (t = 0), void 0 === n && (n = 0.01), Wn(e, t) < n
          );
        }
        function Xn(e, t, n, r) {
          void 0 === r && (r = 0.5),
            (e.origin = r),
            (e.originPoint = ee(t.min, t.max, e.origin)),
            (e.scale = Gn(n) / Gn(t)),
            (Yn(e.scale, 1, 1e-4) || isNaN(e.scale)) && (e.scale = 1),
            (e.translate = ee(n.min, n.max, e.origin) - e.originPoint),
            (Yn(e.translate) || isNaN(e.translate)) && (e.translate = 0);
        }
        function Qn(e, t, n, r) {
          Xn(e.x, t.x, n.x, null === r || void 0 === r ? void 0 : r.originX),
            Xn(e.y, t.y, n.y, null === r || void 0 === r ? void 0 : r.originY);
        }
        function Kn(e, t, n) {
          (e.min = n.min + t.min), (e.max = e.min + Gn(t));
        }
        function Jn(e, t, n) {
          (e.min = t.min - n.min), (e.max = e.min + Gn(t));
        }
        function Zn(e, t, n) {
          Jn(e.x, t.x, n.x), Jn(e.y, t.y, n.y);
        }
        function er(e, t, n, r, i) {
          return (
            (e = Nn((e -= t), 1 / n, r)),
            void 0 !== i && (e = Nn(e, 1 / i, r)),
            e
          );
        }
        function tr(e, t, n, r, i) {
          var a = h(n, 3),
            o = a[0],
            s = a[1],
            l = a[2];
          !(function (e, t, n, r, i, a, o) {
            if (
              (void 0 === t && (t = 0),
              void 0 === n && (n = 1),
              void 0 === r && (r = 0.5),
              void 0 === a && (a = e),
              void 0 === o && (o = e),
              Ie.test(t) &&
                ((t = parseFloat(t)), (t = ee(o.min, o.max, t / 100) - o.min)),
              'number' === typeof t)
            ) {
              var s = ee(a.min, a.max, r);
              e === a && (s -= t),
                (e.min = er(e.min, t, n, s, i)),
                (e.max = er(e.max, t, n, s, i));
            }
          })(e, t[o], t[s], t[l], t.scale, r, i);
        }
        var nr = ['x', 'scaleX', 'originX'],
          rr = ['y', 'scaleY', 'originY'];
        function ir(e, t, n, r) {
          tr(
            e.x,
            t,
            nr,
            null === n || void 0 === n ? void 0 : n.x,
            null === r || void 0 === r ? void 0 : r.x,
          ),
            tr(
              e.y,
              t,
              rr,
              null === n || void 0 === n ? void 0 : n.y,
              null === r || void 0 === r ? void 0 : r.y,
            );
        }
        function ar(e) {
          return 0 === e.translate && 1 === e.scale;
        }
        function or(e) {
          return ar(e.x) && ar(e.y);
        }
        function sr(e, t) {
          return (
            e.x.min === t.x.min &&
            e.x.max === t.x.max &&
            e.y.min === t.y.min &&
            e.y.max === t.y.max
          );
        }
        var lr = (function () {
            function e() {
              this.members = [];
            }
            return (
              (e.prototype.add = function (e) {
                ne(this.members, e), e.scheduleRender();
              }),
              (e.prototype.remove = function (e) {
                if (
                  (re(this.members, e),
                  e === this.prevLead && (this.prevLead = void 0),
                  e === this.lead)
                ) {
                  var t = this.members[this.members.length - 1];
                  t && this.promote(t);
                }
              }),
              (e.prototype.relegate = function (e) {
                var t,
                  n = this.members.findIndex(function (t) {
                    return e === t;
                  });
                if (0 === n) return !1;
                for (var r = n; r >= 0; r--) {
                  var i = this.members[r];
                  if (!1 !== i.isPresent) {
                    t = i;
                    break;
                  }
                }
                return !!t && (this.promote(t), !0);
              }),
              (e.prototype.promote = function (e, t) {
                var n,
                  r = this.lead;
                e !== r &&
                  ((this.prevLead = r),
                  (this.lead = e),
                  e.show(),
                  r &&
                    (r.instance && r.scheduleRender(),
                    e.scheduleRender(),
                    (e.resumeFrom = r),
                    t && (e.resumeFrom.preserveOpacity = !0),
                    r.snapshot &&
                      ((e.snapshot = r.snapshot),
                      (e.snapshot.latestValues =
                        r.animationValues || r.latestValues),
                      (e.snapshot.isShared = !0)),
                    (null === (n = e.root) || void 0 === n
                      ? void 0
                      : n.isUpdating) && (e.isLayoutDirty = !0),
                    !1 === e.options.crossfade && r.hide()));
              }),
              (e.prototype.exitAnimationComplete = function () {
                this.members.forEach(function (e) {
                  var t, n, r, i, a;
                  null === (n = (t = e.options).onExitComplete) ||
                    void 0 === n ||
                    n.call(t),
                    null ===
                      (a =
                        null === (r = e.resumingFrom) || void 0 === r
                          ? void 0
                          : (i = r.options).onExitComplete) ||
                      void 0 === a ||
                      a.call(i);
                });
              }),
              (e.prototype.scheduleRender = function () {
                this.members.forEach(function (e) {
                  e.instance && e.scheduleRender(!1);
                });
              }),
              (e.prototype.removeLeadSnapshot = function () {
                this.lead &&
                  this.lead.snapshot &&
                  (this.lead.snapshot = void 0);
              }),
              e
            );
          })(),
          ur = {};
        function cr(e, t, n) {
          var r = e.x.translate / t.x,
            i = e.y.translate / t.y,
            a = 'translate3d('.concat(r, 'px, ').concat(i, 'px, 0) ');
          if (n) {
            var o = n.rotate,
              s = n.rotateX,
              l = n.rotateY;
            o && (a += 'rotate('.concat(o, 'deg) ')),
              s && (a += 'rotateX('.concat(s, 'deg) ')),
              l && (a += 'rotateY('.concat(l, 'deg) '));
          }
          return 'translate3d(0px, 0px, 0) scale(1, 1)' ===
            (a += 'scale('.concat(e.x.scale, ', ').concat(e.y.scale, ')'))
            ? 'none'
            : a;
        }
        function dr(e) {
          return [e('x'), e('y')];
        }
        var fr = ['', 'X', 'Y', 'Z'],
          pr = ['transformPerspective', 'x', 'y', 'z'];
        function hr(e, t) {
          return pr.indexOf(e) - pr.indexOf(t);
        }
        ['translate', 'scale', 'rotate', 'skew'].forEach(function (e) {
          return fr.forEach(function (t) {
            return pr.push(e + t);
          });
        });
        var vr = new Set(pr);
        function mr(e) {
          return vr.has(e);
        }
        var gr = new Set(['originX', 'originY', 'originZ']);
        function yr(e) {
          return gr.has(e);
        }
        var br = function (e, t) {
            return e.depth - t.depth;
          },
          wr = (function () {
            function e() {
              (this.children = []), (this.isDirty = !1);
            }
            return (
              (e.prototype.add = function (e) {
                ne(this.children, e), (this.isDirty = !0);
              }),
              (e.prototype.remove = function (e) {
                re(this.children, e), (this.isDirty = !0);
              }),
              (e.prototype.forEach = function (e) {
                this.isDirty && this.children.sort(br),
                  (this.isDirty = !1),
                  this.children.forEach(e);
              }),
              e
            );
          })();
        function xr(e) {
          var t,
            n = se(e) ? e.get() : e;
          return (
            (t = n),
            Boolean(t && 'object' === typeof t && t.mix && t.toValue)
              ? n.toValue()
              : n
          );
        }
        var Sr = { hasAnimatedSinceResize: !0, hasEverUpdated: !1 };
        function Er(e) {
          var t = e.attachResizeListener,
            n = e.defaultParent,
            r = e.measureScroll,
            i = e.resetTransform;
          return (function () {
            function e(e, t, r) {
              var i = this;
              void 0 === t && (t = {}),
                void 0 === r && (r = null === n || void 0 === n ? void 0 : n()),
                (this.children = new Set()),
                (this.options = {}),
                (this.isTreeAnimating = !1),
                (this.isAnimationBlocked = !1),
                (this.isLayoutDirty = !1),
                (this.updateManuallyBlocked = !1),
                (this.updateBlockedByResize = !1),
                (this.isUpdating = !1),
                (this.isSVG = !1),
                (this.needsReset = !1),
                (this.shouldResetTransform = !1),
                (this.treeScale = { x: 1, y: 1 }),
                (this.eventHandlers = new Map()),
                (this.potentialNodes = new Map()),
                (this.checkUpdateFailed = function () {
                  i.isUpdating && ((i.isUpdating = !1), i.clearAllSnapshots());
                }),
                (this.updateProjection = function () {
                  i.nodes.forEach(Lr), i.nodes.forEach(_r);
                }),
                (this.hasProjected = !1),
                (this.isVisible = !0),
                (this.animationProgress = 0),
                (this.sharedNodes = new Map()),
                (this.id = e),
                (this.latestValues = t),
                (this.root = r ? r.root || r : this),
                (this.path = r ? v(v([], h(r.path), !1), [r], !1) : []),
                (this.parent = r),
                (this.depth = r ? r.depth + 1 : 0),
                e && this.root.registerPotentialNode(e, this);
              for (var a = 0; a < this.path.length; a++)
                this.path[a].shouldResetTransform = !0;
              this.root === this && (this.nodes = new wr());
            }
            return (
              (e.prototype.addEventListener = function (e, t) {
                return (
                  this.eventHandlers.has(e) ||
                    this.eventHandlers.set(e, new ie()),
                  this.eventHandlers.get(e).add(t)
                );
              }),
              (e.prototype.notifyListeners = function (e) {
                for (var t = [], n = 1; n < arguments.length; n++)
                  t[n - 1] = arguments[n];
                var r = this.eventHandlers.get(e);
                null === r ||
                  void 0 === r ||
                  r.notify.apply(r, v([], h(t), !1));
              }),
              (e.prototype.hasListeners = function (e) {
                return this.eventHandlers.has(e);
              }),
              (e.prototype.registerPotentialNode = function (e, t) {
                this.potentialNodes.set(e, t);
              }),
              (e.prototype.mount = function (e, n) {
                var r,
                  i = this;
                if ((void 0 === n && (n = !1), !this.instance)) {
                  (this.isSVG = e instanceof SVGElement && 'svg' !== e.tagName),
                    (this.instance = e);
                  var a = this.options,
                    o = a.layoutId,
                    s = a.layout,
                    l = a.visualElement;
                  if (
                    (l && !l.getInstance() && l.mount(e),
                    this.root.nodes.add(this),
                    null === (r = this.parent) ||
                      void 0 === r ||
                      r.children.add(this),
                    this.id && this.root.potentialNodes.delete(this.id),
                    n && (s || o) && (this.isLayoutDirty = !0),
                    t)
                  ) {
                    var u,
                      c = function () {
                        return (i.root.updateBlockedByResize = !1);
                      };
                    t(e, function () {
                      (i.root.updateBlockedByResize = !0),
                        clearTimeout(u),
                        (u = setTimeout(c, 250)),
                        Sr.hasAnimatedSinceResize &&
                          ((Sr.hasAnimatedSinceResize = !1),
                          i.nodes.forEach(jr));
                    });
                  }
                  o && this.root.registerSharedNode(o, this),
                    !1 !== this.options.animate &&
                      l &&
                      (o || s) &&
                      this.addEventListener('didUpdate', function (e) {
                        var t,
                          n,
                          r,
                          a,
                          o,
                          s = e.delta,
                          u = e.hasLayoutChanged,
                          c = e.hasRelativeTargetChanged,
                          d = e.layout;
                        if (i.isTreeAnimationBlocked())
                          return (
                            (i.target = void 0),
                            void (i.relativeTarget = void 0)
                          );
                        var p =
                            null !==
                              (n =
                                null !== (t = i.options.transition) &&
                                void 0 !== t
                                  ? t
                                  : l.getDefaultTransition()) && void 0 !== n
                              ? n
                              : Dr,
                          h = l.getProps().onLayoutAnimationComplete,
                          v = !i.targetLayout || !sr(i.targetLayout, d) || c,
                          m = !u && c;
                        (null === (r = i.resumeFrom) || void 0 === r
                          ? void 0
                          : r.instance) ||
                        m ||
                        (u && (v || !i.currentAnimation))
                          ? (i.resumeFrom &&
                              ((i.resumingFrom = i.resumeFrom),
                              (i.resumingFrom.resumingFrom = void 0)),
                            i.setAnimationOrigin(s, m),
                            i.startAnimation(
                              f(f({}, wn(p, 'layout')), { onComplete: h }),
                            ))
                          : i.isLead() &&
                            (null === (o = (a = i.options).onExitComplete) ||
                              void 0 === o ||
                              o.call(a)),
                          (i.targetLayout = d);
                      });
                }
              }),
              (e.prototype.unmount = function () {
                var e, t;
                this.options.layoutId && this.willUpdate(),
                  this.root.nodes.remove(this),
                  null === (e = this.getStack()) ||
                    void 0 === e ||
                    e.remove(this),
                  null === (t = this.parent) ||
                    void 0 === t ||
                    t.children.delete(this),
                  (this.instance = void 0),
                  G.preRender(this.updateProjection);
              }),
              (e.prototype.blockUpdate = function () {
                this.updateManuallyBlocked = !0;
              }),
              (e.prototype.unblockUpdate = function () {
                this.updateManuallyBlocked = !1;
              }),
              (e.prototype.isUpdateBlocked = function () {
                return this.updateManuallyBlocked || this.updateBlockedByResize;
              }),
              (e.prototype.isTreeAnimationBlocked = function () {
                var e;
                return (
                  this.isAnimationBlocked ||
                  (null === (e = this.parent) || void 0 === e
                    ? void 0
                    : e.isTreeAnimationBlocked()) ||
                  !1
                );
              }),
              (e.prototype.startUpdate = function () {
                var e;
                this.isUpdateBlocked() ||
                  ((this.isUpdating = !0),
                  null === (e = this.nodes) || void 0 === e || e.forEach(Ar));
              }),
              (e.prototype.willUpdate = function (e) {
                var t, n, r;
                if ((void 0 === e && (e = !0), this.root.isUpdateBlocked()))
                  null === (n = (t = this.options).onExitComplete) ||
                    void 0 === n ||
                    n.call(t);
                else if (
                  (!this.root.isUpdating && this.root.startUpdate(),
                  !this.isLayoutDirty)
                ) {
                  this.isLayoutDirty = !0;
                  for (var i = 0; i < this.path.length; i++) {
                    var a = this.path[i];
                    (a.shouldResetTransform = !0), a.updateScroll();
                  }
                  var o = this.options,
                    s = o.layoutId,
                    l = o.layout;
                  if (void 0 !== s || l) {
                    var u =
                      null === (r = this.options.visualElement) || void 0 === r
                        ? void 0
                        : r.getProps().transformTemplate;
                    (this.prevTransformTemplateValue =
                      null === u || void 0 === u
                        ? void 0
                        : u(this.latestValues, '')),
                      this.updateSnapshot(),
                      e && this.notifyListeners('willUpdate');
                  }
                }
              }),
              (e.prototype.didUpdate = function () {
                if (this.isUpdateBlocked())
                  return (
                    this.unblockUpdate(),
                    this.clearAllSnapshots(),
                    void this.nodes.forEach(Pr)
                  );
                this.isUpdating &&
                  ((this.isUpdating = !1),
                  this.potentialNodes.size &&
                    (this.potentialNodes.forEach(zr),
                    this.potentialNodes.clear()),
                  this.nodes.forEach(Or),
                  this.nodes.forEach(kr),
                  this.nodes.forEach(Cr),
                  this.clearAllSnapshots(),
                  Y.update(),
                  Y.preRender(),
                  Y.render());
              }),
              (e.prototype.clearAllSnapshots = function () {
                this.nodes.forEach(Tr), this.sharedNodes.forEach(Mr);
              }),
              (e.prototype.scheduleUpdateProjection = function () {
                Z.preRender(this.updateProjection, !1, !0);
              }),
              (e.prototype.scheduleCheckAfterUnmount = function () {
                var e = this;
                Z.postRender(function () {
                  e.isLayoutDirty
                    ? e.root.didUpdate()
                    : e.root.checkUpdateFailed();
                });
              }),
              (e.prototype.updateSnapshot = function () {
                if (!this.snapshot && this.instance) {
                  var e = this.measure(),
                    t = this.removeTransform(this.removeElementScroll(e));
                  Fr(t),
                    (this.snapshot = {
                      measured: e,
                      layout: t,
                      latestValues: {},
                    });
                }
              }),
              (e.prototype.updateLayout = function () {
                var e;
                if (
                  this.instance &&
                  (this.updateScroll(),
                  (this.options.alwaysMeasureLayout && this.isLead()) ||
                    this.isLayoutDirty)
                ) {
                  if (this.resumeFrom && !this.resumeFrom.instance)
                    for (var t = 0; t < this.path.length; t++) {
                      this.path[t].updateScroll();
                    }
                  var n = this.measure();
                  Fr(n);
                  var r = this.layout;
                  (this.layout = {
                    measured: n,
                    actual: this.removeElementScroll(n),
                  }),
                    (this.layoutCorrected = {
                      x: { min: 0, max: 0 },
                      y: { min: 0, max: 0 },
                    }),
                    (this.isLayoutDirty = !1),
                    (this.projectionDelta = void 0),
                    this.notifyListeners('measure', this.layout.actual),
                    null === (e = this.options.visualElement) ||
                      void 0 === e ||
                      e.notifyLayoutMeasure(
                        this.layout.actual,
                        null === r || void 0 === r ? void 0 : r.actual,
                      );
                }
              }),
              (e.prototype.updateScroll = function () {
                this.options.layoutScroll &&
                  this.instance &&
                  (this.scroll = r(this.instance));
              }),
              (e.prototype.resetTransform = function () {
                var e;
                if (i) {
                  var t = this.isLayoutDirty || this.shouldResetTransform,
                    n = this.projectionDelta && !or(this.projectionDelta),
                    r =
                      null === (e = this.options.visualElement) || void 0 === e
                        ? void 0
                        : e.getProps().transformTemplate,
                    a =
                      null === r || void 0 === r
                        ? void 0
                        : r(this.latestValues, ''),
                    o = a !== this.prevTransformTemplateValue;
                  t &&
                    (n || An(this.latestValues) || o) &&
                    (i(this.instance, a),
                    (this.shouldResetTransform = !1),
                    this.scheduleRender());
                }
              }),
              (e.prototype.measure = function () {
                var e = this.options.visualElement;
                if (!e) return { x: { min: 0, max: 0 }, y: { min: 0, max: 0 } };
                var t = e.measureViewportBox(),
                  n = this.root.scroll;
                return n && (zn(t.x, n.x), zn(t.y, n.y)), t;
              }),
              (e.prototype.removeElementScroll = function (e) {
                var t = { x: { min: 0, max: 0 }, y: { min: 0, max: 0 } };
                jn(t, e);
                for (var n = 0; n < this.path.length; n++) {
                  var r = this.path[n],
                    i = r.scroll,
                    a = r.options;
                  r !== this.root &&
                    i &&
                    a.layoutScroll &&
                    (zn(t.x, i.x), zn(t.y, i.y));
                }
                return t;
              }),
              (e.prototype.applyTransform = function (e, t) {
                void 0 === t && (t = !1);
                var n = { x: { min: 0, max: 0 }, y: { min: 0, max: 0 } };
                jn(n, e);
                for (var r = 0; r < this.path.length; r++) {
                  var i = this.path[r];
                  !t &&
                    i.options.layoutScroll &&
                    i.scroll &&
                    i !== i.root &&
                    Un(n, { x: -i.scroll.x, y: -i.scroll.y }),
                    An(i.latestValues) && Un(n, i.latestValues);
                }
                return An(this.latestValues) && Un(n, this.latestValues), n;
              }),
              (e.prototype.removeTransform = function (e) {
                var t,
                  n = { x: { min: 0, max: 0 }, y: { min: 0, max: 0 } };
                jn(n, e);
                for (var r = 0; r < this.path.length; r++) {
                  var i = this.path[r];
                  if (i.instance && An(i.latestValues)) {
                    _n(i.latestValues) && i.updateSnapshot();
                    var a = { x: { min: 0, max: 0 }, y: { min: 0, max: 0 } };
                    jn(a, i.measure()),
                      ir(
                        n,
                        i.latestValues,
                        null === (t = i.snapshot) || void 0 === t
                          ? void 0
                          : t.layout,
                        a,
                      );
                  }
                }
                return An(this.latestValues) && ir(n, this.latestValues), n;
              }),
              (e.prototype.setTargetDelta = function (e) {
                (this.targetDelta = e), this.root.scheduleUpdateProjection();
              }),
              (e.prototype.setOptions = function (e) {
                var t;
                this.options = f(f(f({}, this.options), e), {
                  crossfade: null === (t = e.crossfade) || void 0 === t || t,
                });
              }),
              (e.prototype.clearMeasurements = function () {
                (this.scroll = void 0),
                  (this.layout = void 0),
                  (this.snapshot = void 0),
                  (this.prevTransformTemplateValue = void 0),
                  (this.targetDelta = void 0),
                  (this.target = void 0),
                  (this.isLayoutDirty = !1);
              }),
              (e.prototype.resolveTargetDelta = function () {
                var e,
                  t,
                  n,
                  r,
                  i = this.options,
                  a = i.layout,
                  o = i.layoutId;
                this.layout &&
                  (a || o) &&
                  (this.targetDelta ||
                    this.relativeTarget ||
                    ((this.relativeParent = this.getClosestProjectingParent()),
                    this.relativeParent &&
                      this.relativeParent.layout &&
                      ((this.relativeTarget = {
                        x: { min: 0, max: 0 },
                        y: { min: 0, max: 0 },
                      }),
                      (this.relativeTargetOrigin = {
                        x: { min: 0, max: 0 },
                        y: { min: 0, max: 0 },
                      }),
                      Zn(
                        this.relativeTargetOrigin,
                        this.layout.actual,
                        this.relativeParent.layout.actual,
                      ),
                      jn(this.relativeTarget, this.relativeTargetOrigin))),
                  (this.relativeTarget || this.targetDelta) &&
                    (this.target ||
                      ((this.target = {
                        x: { min: 0, max: 0 },
                        y: { min: 0, max: 0 },
                      }),
                      (this.targetWithTransforms = {
                        x: { min: 0, max: 0 },
                        y: { min: 0, max: 0 },
                      })),
                    this.relativeTarget &&
                    this.relativeTargetOrigin &&
                    (null === (e = this.relativeParent) || void 0 === e
                      ? void 0
                      : e.target)
                      ? ((t = this.target),
                        (n = this.relativeTarget),
                        (r = this.relativeParent.target),
                        Kn(t.x, n.x, r.x),
                        Kn(t.y, n.y, r.y))
                      : this.targetDelta
                      ? (Boolean(this.resumingFrom)
                          ? (this.target = this.applyTransform(
                              this.layout.actual,
                            ))
                          : jn(this.target, this.layout.actual),
                        Dn(this.target, this.targetDelta))
                      : jn(this.target, this.layout.actual),
                    this.attemptToResolveRelativeTarget &&
                      ((this.attemptToResolveRelativeTarget = !1),
                      (this.relativeParent = this.getClosestProjectingParent()),
                      this.relativeParent &&
                        Boolean(this.relativeParent.resumingFrom) ===
                          Boolean(this.resumingFrom) &&
                        !this.relativeParent.options.layoutScroll &&
                        this.relativeParent.target &&
                        ((this.relativeTarget = {
                          x: { min: 0, max: 0 },
                          y: { min: 0, max: 0 },
                        }),
                        (this.relativeTargetOrigin = {
                          x: { min: 0, max: 0 },
                          y: { min: 0, max: 0 },
                        }),
                        Zn(
                          this.relativeTargetOrigin,
                          this.target,
                          this.relativeParent.target,
                        ),
                        jn(this.relativeTarget, this.relativeTargetOrigin)))));
              }),
              (e.prototype.getClosestProjectingParent = function () {
                if (this.parent && !An(this.parent.latestValues))
                  return (this.parent.relativeTarget ||
                    this.parent.targetDelta) &&
                    this.parent.layout
                    ? this.parent
                    : this.parent.getClosestProjectingParent();
              }),
              (e.prototype.calcProjection = function () {
                var e,
                  t = this.options,
                  n = t.layout,
                  r = t.layoutId;
                if (
                  ((this.isTreeAnimating = Boolean(
                    (null === (e = this.parent) || void 0 === e
                      ? void 0
                      : e.isTreeAnimating) ||
                      this.currentAnimation ||
                      this.pendingAnimation,
                  )),
                  this.isTreeAnimating ||
                    (this.targetDelta = this.relativeTarget = void 0),
                  this.layout && (n || r))
                ) {
                  var i = this.getLead();
                  jn(this.layoutCorrected, this.layout.actual),
                    (function (e, t, n, r) {
                      var i, a;
                      void 0 === r && (r = !1);
                      var o = n.length;
                      if (o) {
                        var s, l;
                        t.x = t.y = 1;
                        for (var u = 0; u < o; u++)
                          (l = (s = n[u]).projectionDelta),
                            'contents' !==
                              (null ===
                                (a =
                                  null === (i = s.instance) || void 0 === i
                                    ? void 0
                                    : i.style) || void 0 === a
                                ? void 0
                                : a.display) &&
                              (r &&
                                s.options.layoutScroll &&
                                s.scroll &&
                                s !== s.root &&
                                Un(e, { x: -s.scroll.x, y: -s.scroll.y }),
                              l &&
                                ((t.x *= l.x.scale),
                                (t.y *= l.y.scale),
                                Dn(e, l)),
                              r && An(s.latestValues) && Un(e, s.latestValues));
                      }
                    })(
                      this.layoutCorrected,
                      this.treeScale,
                      this.path,
                      Boolean(this.resumingFrom) || this !== i,
                    );
                  var a = i.target;
                  if (a) {
                    this.projectionDelta ||
                      ((this.projectionDelta = {
                        x: {
                          translate: 0,
                          scale: 1,
                          origin: 0,
                          originPoint: 0,
                        },
                        y: {
                          translate: 0,
                          scale: 1,
                          origin: 0,
                          originPoint: 0,
                        },
                      }),
                      (this.projectionDeltaWithTransform = {
                        x: {
                          translate: 0,
                          scale: 1,
                          origin: 0,
                          originPoint: 0,
                        },
                        y: {
                          translate: 0,
                          scale: 1,
                          origin: 0,
                          originPoint: 0,
                        },
                      }));
                    var o = this.treeScale.x,
                      s = this.treeScale.y,
                      l = this.projectionTransform;
                    Qn(
                      this.projectionDelta,
                      this.layoutCorrected,
                      a,
                      this.latestValues,
                    ),
                      (this.projectionTransform = cr(
                        this.projectionDelta,
                        this.treeScale,
                      )),
                      (this.projectionTransform === l &&
                        this.treeScale.x === o &&
                        this.treeScale.y === s) ||
                        ((this.hasProjected = !0),
                        this.scheduleRender(),
                        this.notifyListeners('projectionUpdate', a));
                  }
                }
              }),
              (e.prototype.hide = function () {
                this.isVisible = !1;
              }),
              (e.prototype.show = function () {
                this.isVisible = !0;
              }),
              (e.prototype.scheduleRender = function (e) {
                var t, n, r;
                void 0 === e && (e = !0),
                  null === (n = (t = this.options).scheduleRender) ||
                    void 0 === n ||
                    n.call(t),
                  e &&
                    (null === (r = this.getStack()) ||
                      void 0 === r ||
                      r.scheduleRender()),
                  this.resumingFrom &&
                    !this.resumingFrom.instance &&
                    (this.resumingFrom = void 0);
              }),
              (e.prototype.setAnimationOrigin = function (e, t) {
                var n,
                  r = this;
                void 0 === t && (t = !1);
                var i = this.snapshot,
                  a =
                    (null === i || void 0 === i ? void 0 : i.latestValues) ||
                    {},
                  o = f({}, this.latestValues),
                  s = {
                    x: { translate: 0, scale: 1, origin: 0, originPoint: 0 },
                    y: { translate: 0, scale: 1, origin: 0, originPoint: 0 },
                  };
                (this.relativeTarget = this.relativeTargetOrigin = void 0),
                  (this.attemptToResolveRelativeTarget = !t);
                var l = { x: { min: 0, max: 0 }, y: { min: 0, max: 0 } },
                  u = null === i || void 0 === i ? void 0 : i.isShared,
                  c =
                    ((null === (n = this.getStack()) || void 0 === n
                      ? void 0
                      : n.members.length) || 0) <= 1,
                  d = Boolean(
                    u &&
                      !c &&
                      !0 === this.options.crossfade &&
                      !this.path.some(Ir),
                  );
                (this.mixTargetDelta = function (t) {
                  var n,
                    i,
                    f,
                    p,
                    h,
                    v = t / 1e3;
                  Nr(s.x, e.x, v),
                    Nr(s.y, e.y, v),
                    r.setTargetDelta(s),
                    r.relativeTarget &&
                      r.relativeTargetOrigin &&
                      r.layout &&
                      (null === (n = r.relativeParent) || void 0 === n
                        ? void 0
                        : n.layout) &&
                      (Zn(l, r.layout.actual, r.relativeParent.layout.actual),
                      (i = r.relativeTarget),
                      (f = r.relativeTargetOrigin),
                      (p = l),
                      (h = v),
                      Rr(i.x, f.x, p.x, h),
                      Rr(i.y, f.y, p.y, h)),
                    u &&
                      ((r.animationValues = o),
                      (function (e, t, n, r, i, a) {
                        var o, s, l, u;
                        i
                          ? ((e.opacity = ee(
                              0,
                              null !== (o = n.opacity) && void 0 !== o ? o : 1,
                              Cn(r),
                            )),
                            (e.opacityExit = ee(
                              null !== (s = t.opacity) && void 0 !== s ? s : 1,
                              0,
                              Tn(r),
                            )))
                          : a &&
                            (e.opacity = ee(
                              null !== (l = t.opacity) && void 0 !== l ? l : 1,
                              null !== (u = n.opacity) && void 0 !== u ? u : 1,
                              r,
                            ));
                        for (var c = 0; c < En; c++) {
                          var d = 'border'.concat(Sn[c], 'Radius'),
                            f = kn(t, d),
                            p = kn(n, d);
                          if (
                            (void 0 !== f || void 0 !== p) &&
                            (f || (f = 0),
                            p || (p = 0),
                            'number' === typeof f && 'number' === typeof p)
                          ) {
                            var h = Math.max(ee(f, p, r), 0);
                            e[d] = h;
                          }
                        }
                        (t.rotate || n.rotate) &&
                          (e.rotate = ee(t.rotate || 0, n.rotate || 0, r));
                      })(o, a, r.latestValues, v, d, c)),
                    r.root.scheduleUpdateProjection(),
                    r.scheduleRender();
                }),
                  this.mixTargetDelta(0);
              }),
              (e.prototype.startAnimation = function (e) {
                var t,
                  n,
                  r = this;
                null === (t = this.currentAnimation) ||
                  void 0 === t ||
                  t.stop(),
                  this.resumingFrom &&
                    (null === (n = this.resumingFrom.currentAnimation) ||
                      void 0 === n ||
                      n.stop()),
                  this.pendingAnimation &&
                    (G.update(this.pendingAnimation),
                    (this.pendingAnimation = void 0)),
                  (this.pendingAnimation = Z.update(function () {
                    (Sr.hasAnimatedSinceResize = !0),
                      (r.currentAnimation = (function (e, t, n) {
                        void 0 === n && (n = {});
                        var r = se(e) ? e : oe(e);
                        return (
                          xn('', r, t, n),
                          {
                            stop: function () {
                              return r.stop();
                            },
                            isAnimating: function () {
                              return r.isAnimating();
                            },
                          }
                        );
                      })(
                        0,
                        1e3,
                        f(f({}, e), {
                          onUpdate: function (t) {
                            var n;
                            r.mixTargetDelta(t),
                              null === (n = e.onUpdate) ||
                                void 0 === n ||
                                n.call(e, t);
                          },
                          onComplete: function () {
                            var t;
                            null === (t = e.onComplete) ||
                              void 0 === t ||
                              t.call(e),
                              r.completeAnimation();
                          },
                        }),
                      )),
                      r.resumingFrom &&
                        (r.resumingFrom.currentAnimation = r.currentAnimation),
                      (r.pendingAnimation = void 0);
                  }));
              }),
              (e.prototype.completeAnimation = function () {
                var e;
                this.resumingFrom &&
                  ((this.resumingFrom.currentAnimation = void 0),
                  (this.resumingFrom.preserveOpacity = void 0)),
                  null === (e = this.getStack()) ||
                    void 0 === e ||
                    e.exitAnimationComplete(),
                  (this.resumingFrom =
                    this.currentAnimation =
                    this.animationValues =
                      void 0),
                  this.notifyListeners('animationComplete');
              }),
              (e.prototype.finishAnimation = function () {
                var e;
                this.currentAnimation &&
                  (null === (e = this.mixTargetDelta) ||
                    void 0 === e ||
                    e.call(this, 1e3),
                  this.currentAnimation.stop()),
                  this.completeAnimation();
              }),
              (e.prototype.applyTransformsToTarget = function () {
                var e = this.getLead(),
                  t = e.targetWithTransforms,
                  n = e.target,
                  r = e.layout,
                  i = e.latestValues;
                t &&
                  n &&
                  r &&
                  (jn(t, n),
                  Un(t, i),
                  Qn(
                    this.projectionDeltaWithTransform,
                    this.layoutCorrected,
                    t,
                    i,
                  ));
              }),
              (e.prototype.registerSharedNode = function (e, t) {
                var n, r, i;
                this.sharedNodes.has(e) || this.sharedNodes.set(e, new lr()),
                  this.sharedNodes.get(e).add(t),
                  t.promote({
                    transition:
                      null === (n = t.options.initialPromotionConfig) ||
                      void 0 === n
                        ? void 0
                        : n.transition,
                    preserveFollowOpacity:
                      null ===
                        (i =
                          null === (r = t.options.initialPromotionConfig) ||
                          void 0 === r
                            ? void 0
                            : r.shouldPreserveFollowOpacity) || void 0 === i
                        ? void 0
                        : i.call(r, t),
                  });
              }),
              (e.prototype.isLead = function () {
                var e = this.getStack();
                return !e || e.lead === this;
              }),
              (e.prototype.getLead = function () {
                var e;
                return (
                  (this.options.layoutId &&
                    (null === (e = this.getStack()) || void 0 === e
                      ? void 0
                      : e.lead)) ||
                  this
                );
              }),
              (e.prototype.getPrevLead = function () {
                var e;
                return this.options.layoutId
                  ? null === (e = this.getStack()) || void 0 === e
                    ? void 0
                    : e.prevLead
                  : void 0;
              }),
              (e.prototype.getStack = function () {
                var e = this.options.layoutId;
                if (e) return this.root.sharedNodes.get(e);
              }),
              (e.prototype.promote = function (e) {
                var t = void 0 === e ? {} : e,
                  n = t.needsReset,
                  r = t.transition,
                  i = t.preserveFollowOpacity,
                  a = this.getStack();
                a && a.promote(this, i),
                  n &&
                    ((this.projectionDelta = void 0), (this.needsReset = !0)),
                  r && this.setOptions({ transition: r });
              }),
              (e.prototype.relegate = function () {
                var e = this.getStack();
                return !!e && e.relegate(this);
              }),
              (e.prototype.resetRotation = function () {
                var e = this.options.visualElement;
                if (e) {
                  for (var t = !1, n = {}, r = 0; r < fr.length; r++) {
                    var i = 'rotate' + fr[r];
                    e.getStaticValue(i) &&
                      ((t = !0),
                      (n[i] = e.getStaticValue(i)),
                      e.setStaticValue(i, 0));
                  }
                  if (t) {
                    for (var i in (null === e || void 0 === e || e.syncRender(),
                    n))
                      e.setStaticValue(i, n[i]);
                    e.scheduleRender();
                  }
                }
              }),
              (e.prototype.getProjectionStyles = function (e) {
                var t, n, r, i, a, o;
                void 0 === e && (e = {});
                var s = {};
                if (!this.instance || this.isSVG) return s;
                if (!this.isVisible) return { visibility: 'hidden' };
                s.visibility = '';
                var l =
                  null === (t = this.options.visualElement) || void 0 === t
                    ? void 0
                    : t.getProps().transformTemplate;
                if (this.needsReset)
                  return (
                    (this.needsReset = !1),
                    (s.opacity = ''),
                    (s.pointerEvents = xr(e.pointerEvents) || ''),
                    (s.transform = l ? l(this.latestValues, '') : 'none'),
                    s
                  );
                var u = this.getLead();
                if (!this.projectionDelta || !this.layout || !u.target) {
                  var c = {};
                  return (
                    this.options.layoutId &&
                      ((c.opacity =
                        null !== (n = this.latestValues.opacity) && void 0 !== n
                          ? n
                          : 1),
                      (c.pointerEvents = xr(e.pointerEvents) || '')),
                    this.hasProjected &&
                      !An(this.latestValues) &&
                      ((c.transform = l ? l({}, '') : 'none'),
                      (this.hasProjected = !1)),
                    c
                  );
                }
                var d = u.animationValues || u.latestValues;
                this.applyTransformsToTarget(),
                  (s.transform = cr(
                    this.projectionDeltaWithTransform,
                    this.treeScale,
                    d,
                  )),
                  l && (s.transform = l(d, s.transform));
                var f = this.projectionDelta,
                  p = f.x,
                  h = f.y;
                for (var v in ((s.transformOrigin = ''
                  .concat(100 * p.origin, '% ')
                  .concat(100 * h.origin, '% 0')),
                u.animationValues
                  ? (s.opacity =
                      u === this
                        ? null !==
                            (i =
                              null !== (r = d.opacity) && void 0 !== r
                                ? r
                                : this.latestValues.opacity) && void 0 !== i
                          ? i
                          : 1
                        : this.preserveOpacity
                        ? this.latestValues.opacity
                        : d.opacityExit)
                  : (s.opacity =
                      u === this
                        ? null !== (a = d.opacity) && void 0 !== a
                          ? a
                          : ''
                        : null !== (o = d.opacityExit) && void 0 !== o
                        ? o
                        : 0),
                ur))
                  if (void 0 !== d[v]) {
                    var m = ur[v],
                      g = m.correct,
                      y = m.applyTo,
                      b = g(d[v], u);
                    if (y)
                      for (var w = y.length, x = 0; x < w; x++) s[y[x]] = b;
                    else s[v] = b;
                  }
                return (
                  this.options.layoutId &&
                    (s.pointerEvents =
                      u === this ? xr(e.pointerEvents) || '' : 'none'),
                  s
                );
              }),
              (e.prototype.clearSnapshot = function () {
                this.resumeFrom = this.snapshot = void 0;
              }),
              (e.prototype.resetTree = function () {
                this.root.nodes.forEach(function (e) {
                  var t;
                  return null === (t = e.currentAnimation) || void 0 === t
                    ? void 0
                    : t.stop();
                }),
                  this.root.nodes.forEach(Pr),
                  this.root.sharedNodes.clear();
              }),
              e
            );
          })();
        }
        function kr(e) {
          e.updateLayout();
        }
        function Cr(e) {
          var t,
            n,
            r,
            i,
            a =
              null !==
                (n =
                  null === (t = e.resumeFrom) || void 0 === t
                    ? void 0
                    : t.snapshot) && void 0 !== n
                ? n
                : e.snapshot;
          if (e.isLead() && e.layout && a && e.hasListeners('didUpdate')) {
            var o = e.layout,
              s = o.actual,
              l = o.measured;
            'size' === e.options.animationType
              ? dr(function (e) {
                  var t = a.isShared ? a.measured[e] : a.layout[e],
                    n = Gn(t);
                  (t.min = s[e].min), (t.max = t.min + n);
                })
              : 'position' === e.options.animationType &&
                dr(function (e) {
                  var t = a.isShared ? a.measured[e] : a.layout[e],
                    n = Gn(s[e]);
                  t.max = t.min + n;
                });
            var u = {
              x: { translate: 0, scale: 1, origin: 0, originPoint: 0 },
              y: { translate: 0, scale: 1, origin: 0, originPoint: 0 },
            };
            Qn(u, s, a.layout);
            var c = {
              x: { translate: 0, scale: 1, origin: 0, originPoint: 0 },
              y: { translate: 0, scale: 1, origin: 0, originPoint: 0 },
            };
            a.isShared
              ? Qn(c, e.applyTransform(l, !0), a.measured)
              : Qn(c, s, a.layout);
            var d = !or(u),
              f = !1;
            if (
              !e.resumeFrom &&
              ((e.relativeParent = e.getClosestProjectingParent()),
              e.relativeParent && !e.relativeParent.resumeFrom)
            ) {
              var p = e.relativeParent,
                h = p.snapshot,
                v = p.layout;
              if (h && v) {
                var m = { x: { min: 0, max: 0 }, y: { min: 0, max: 0 } };
                Zn(m, a.layout, h.layout);
                var g = { x: { min: 0, max: 0 }, y: { min: 0, max: 0 } };
                Zn(g, s, v.actual), sr(m, g) || (f = !0);
              }
            }
            e.notifyListeners('didUpdate', {
              layout: s,
              snapshot: a,
              delta: c,
              layoutDelta: u,
              hasLayoutChanged: d,
              hasRelativeTargetChanged: f,
            });
          } else
            e.isLead() &&
              (null === (i = (r = e.options).onExitComplete) ||
                void 0 === i ||
                i.call(r));
          e.options.transition = void 0;
        }
        function Tr(e) {
          e.clearSnapshot();
        }
        function Pr(e) {
          e.clearMeasurements();
        }
        function Or(e) {
          e.resetTransform();
        }
        function jr(e) {
          e.finishAnimation(),
            (e.targetDelta = e.relativeTarget = e.target = void 0);
        }
        function Lr(e) {
          e.resolveTargetDelta();
        }
        function _r(e) {
          e.calcProjection();
        }
        function Ar(e) {
          e.resetRotation();
        }
        function Mr(e) {
          e.removeLeadSnapshot();
        }
        function Nr(e, t, n) {
          (e.translate = ee(t.translate, 0, n)),
            (e.scale = ee(t.scale, 1, n)),
            (e.origin = t.origin),
            (e.originPoint = t.originPoint);
        }
        function Rr(e, t, n, r) {
          (e.min = ee(t.min, n.min, r)), (e.max = ee(t.max, n.max, r));
        }
        function Ir(e) {
          return e.animationValues && void 0 !== e.animationValues.opacityExit;
        }
        var Dr = { duration: 0.45, ease: [0.4, 0, 0.1, 1] };
        function zr(e, t) {
          for (var n = e.root, r = e.path.length - 1; r >= 0; r--)
            if (Boolean(e.path[r].instance)) {
              n = e.path[r];
              break;
            }
          var i = (n && n !== e.root ? n.instance : document).querySelector(
            '[data-projection-id="'.concat(t, '"]'),
          );
          i && e.mount(i, !0);
        }
        function Vr(e) {
          (e.min = Math.round(e.min)), (e.max = Math.round(e.max));
        }
        function Fr(e) {
          Vr(e.x), Vr(e.y);
        }
        var Br = 1;
        var Ur = (0, r.createContext)({}),
          $r = (0, r.createContext)({});
        var qr = (function (e) {
          function t() {
            return (null !== e && e.apply(this, arguments)) || this;
          }
          return (
            d(t, e),
            (t.prototype.getSnapshotBeforeUpdate = function () {
              return this.updateProps(), null;
            }),
            (t.prototype.componentDidUpdate = function () {}),
            (t.prototype.updateProps = function () {
              var e = this.props,
                t = e.visualElement,
                n = e.props;
              t && t.setProps(n);
            }),
            (t.prototype.render = function () {
              return this.props.children;
            }),
            t
          );
        })(r.Component);
        function Hr(e) {
          var t = e.preloadedFeatures,
            n = e.createVisualElement,
            i = e.projectionNodeConstructor,
            a = e.useRender,
            o = e.useVisualState,
            s = e.Component;
          return (
            t &&
              (function (e) {
                for (var t in e)
                  null !== e[t] &&
                    ('projectionNodeConstructor' === t
                      ? (g.projectionNodeConstructor = e[t])
                      : (g[t].Component = e[t]));
              })(t),
            (0, r.forwardRef)(function (e, t) {
              var l = (function (e) {
                var t,
                  n = e.layoutId,
                  i =
                    null === (t = (0, r.useContext)(Ur)) || void 0 === t
                      ? void 0
                      : t.id;
                return i && void 0 !== n ? i + '-' + n : n;
              })(e);
              e = f(f({}, e), { layoutId: l });
              var u = (0, r.useContext)(x),
                c = null,
                d = N(e),
                p = u.isStatic
                  ? void 0
                  : I(function () {
                      if (Sr.hasEverUpdated) return Br++;
                    }),
                h = o(e, u.isStatic);
              return (
                !u.isStatic &&
                  k &&
                  ((d.visualElement = T(s, h, f(f({}, u), e), n)),
                  (function (e, t, n, i) {
                    var a,
                      o = t.layoutId,
                      s = t.layout,
                      l = t.drag,
                      u = t.dragConstraints,
                      c = t.layoutScroll,
                      d = (0, r.useContext)($r);
                    i &&
                      n &&
                      !(null === n || void 0 === n ? void 0 : n.projection) &&
                      ((n.projection = new i(
                        e,
                        n.getLatestValues(),
                        null === (a = n.parent) || void 0 === a
                          ? void 0
                          : a.projection,
                      )),
                      n.projection.setOptions({
                        layoutId: o,
                        layout: s,
                        alwaysMeasureLayout: Boolean(l) || (u && P(u)),
                        visualElement: n,
                        scheduleRender: function () {
                          return n.scheduleRender();
                        },
                        animationType: 'string' === typeof s ? s : 'both',
                        initialPromotionConfig: d,
                        layoutScroll: c,
                      }));
                  })(p, e, d.visualElement, i || g.projectionNodeConstructor),
                  (c = (function (e, t, n) {
                    var i = [];
                    if (((0, r.useContext)(y), !t)) return null;
                    for (var a = 0; a < w; a++) {
                      var o = b[a],
                        s = g[o],
                        l = s.isEnabled,
                        u = s.Component;
                      l(e) &&
                        u &&
                        i.push(
                          r.createElement(
                            u,
                            f({ key: o }, e, { visualElement: t }),
                          ),
                        );
                    }
                    return i;
                  })(e, d.visualElement))),
                r.createElement(
                  qr,
                  { visualElement: d.visualElement, props: f(f({}, u), e) },
                  c,
                  r.createElement(
                    S.Provider,
                    { value: d },
                    a(
                      s,
                      e,
                      p,
                      (function (e, t, n) {
                        return (0, r.useCallback)(
                          function (r) {
                            var i;
                            r &&
                              (null === (i = e.mount) ||
                                void 0 === i ||
                                i.call(e, r)),
                              t && (r ? t.mount(r) : t.unmount()),
                              n &&
                                ('function' === typeof n
                                  ? n(r)
                                  : P(n) && (n.current = r));
                          },
                          [t],
                        );
                      })(h, d.visualElement, t),
                      h,
                      u.isStatic,
                      d.visualElement,
                    ),
                  ),
                )
              );
            })
          );
        }
        function Wr(e) {
          function t(t, n) {
            return void 0 === n && (n = {}), Hr(e(t, n));
          }
          if ('undefined' === typeof Proxy) return t;
          var n = new Map();
          return new Proxy(t, {
            get: function (e, r) {
              return n.has(r) || n.set(r, t(r)), n.get(r);
            },
          });
        }
        var Gr = [
          'animate',
          'circle',
          'defs',
          'desc',
          'ellipse',
          'g',
          'image',
          'line',
          'filter',
          'marker',
          'mask',
          'metadata',
          'path',
          'pattern',
          'polygon',
          'polyline',
          'rect',
          'stop',
          'svg',
          'switch',
          'symbol',
          'text',
          'tspan',
          'use',
          'view',
        ];
        function Yr(e) {
          return (
            'string' === typeof e &&
            !e.includes('-') &&
            !!(Gr.indexOf(e) > -1 || /[A-Z]/.test(e))
          );
        }
        function Xr(e, t) {
          var n = t.layout,
            r = t.layoutId;
          return (
            mr(e) ||
            yr(e) ||
            ((n || void 0 !== r) && (!!ur[e] || 'opacity' === e))
          );
        }
        var Qr = {
          x: 'translateX',
          y: 'translateY',
          z: 'translateZ',
          transformPerspective: 'perspective',
        };
        function Kr(e) {
          return e.startsWith('--');
        }
        var Jr = function (e, t) {
          return t && 'number' === typeof e ? t.transform(e) : e;
        };
        function Zr(e, t, n, r) {
          var i,
            a = e.style,
            o = e.vars,
            s = e.transform,
            l = e.transformKeys,
            u = e.transformOrigin;
          l.length = 0;
          var c = !1,
            d = !1,
            f = !0;
          for (var p in t) {
            var h = t[p];
            if (Kr(p)) o[p] = h;
            else {
              var v = un[p],
                m = Jr(h, v);
              if (mr(p)) {
                if (((c = !0), (s[p] = m), l.push(p), !f)) continue;
                h !== (null !== (i = v.default) && void 0 !== i ? i : 0) &&
                  (f = !1);
              } else yr(p) ? ((u[p] = m), (d = !0)) : (a[p] = m);
            }
          }
          c
            ? (a.transform = (function (e, t, n, r) {
                var i = e.transform,
                  a = e.transformKeys,
                  o = t.enableHardwareAcceleration,
                  s = void 0 === o || o,
                  l = t.allowTransformNone,
                  u = void 0 === l || l,
                  c = '';
                a.sort(hr);
                for (var d = !1, f = a.length, p = 0; p < f; p++) {
                  var h = a[p];
                  (c += ''.concat(Qr[h] || h, '(').concat(i[h], ') ')),
                    'z' === h && (d = !0);
                }
                return (
                  !d && s ? (c += 'translateZ(0)') : (c = c.trim()),
                  r ? (c = r(i, n ? '' : c)) : u && n && (c = 'none'),
                  c
                );
              })(e, n, f, r))
            : r && (a.transform = r({}, '')),
            d &&
              (a.transformOrigin = (function (e) {
                var t = e.originX,
                  n = void 0 === t ? '50%' : t,
                  r = e.originY,
                  i = void 0 === r ? '50%' : r,
                  a = e.originZ,
                  o = void 0 === a ? 0 : a;
                return ''.concat(n, ' ').concat(i, ' ').concat(o);
              })(u));
        }
        var ei = function () {
          return {
            style: {},
            transform: {},
            transformKeys: [],
            transformOrigin: {},
            vars: {},
          };
        };
        function ti(e, t, n) {
          for (var r in t) se(t[r]) || Xr(r, n) || (e[r] = t[r]);
        }
        function ni(e, t, n) {
          var i = {};
          return (
            ti(i, e.style || {}, e),
            Object.assign(
              i,
              (function (e, t, n) {
                var i = e.transformTemplate;
                return (0, r.useMemo)(
                  function () {
                    var e = {
                      style: {},
                      transform: {},
                      transformKeys: [],
                      transformOrigin: {},
                      vars: {},
                    };
                    Zr(e, t, { enableHardwareAcceleration: !n }, i);
                    var r = e.style;
                    return f(f({}, e.vars), r);
                  },
                  [t],
                );
              })(e, t, n),
            ),
            e.transformValues && (i = e.transformValues(i)),
            i
          );
        }
        function ri(e, t, n) {
          var r = {},
            i = ni(e, t, n);
          return (
            Boolean(e.drag) &&
              !1 !== e.dragListener &&
              ((r.draggable = !1),
              (i.userSelect =
                i.WebkitUserSelect =
                i.WebkitTouchCallout =
                  'none'),
              (i.touchAction =
                !0 === e.drag
                  ? 'none'
                  : 'pan-'.concat('x' === e.drag ? 'y' : 'x'))),
            (r.style = i),
            r
          );
        }
        var ii = new Set([
          'initial',
          'animate',
          'exit',
          'style',
          'variants',
          'transition',
          'transformTemplate',
          'transformValues',
          'custom',
          'inherit',
          'layout',
          'layoutId',
          'layoutDependency',
          'onLayoutAnimationComplete',
          'onLayoutMeasure',
          'onBeforeLayoutMeasure',
          'onAnimationStart',
          'onAnimationComplete',
          'onUpdate',
          'onDragStart',
          'onDrag',
          'onDragEnd',
          'onMeasureDragConstraints',
          'onDirectionLock',
          'onDragTransitionEnd',
          'drag',
          'dragControls',
          'dragListener',
          'dragConstraints',
          'dragDirectionLock',
          'dragSnapToOrigin',
          '_dragX',
          '_dragY',
          'dragElastic',
          'dragMomentum',
          'dragPropagation',
          'dragTransition',
          'whileDrag',
          'onPan',
          'onPanStart',
          'onPanEnd',
          'onPanSessionStart',
          'onTap',
          'onTapStart',
          'onTapCancel',
          'onHoverStart',
          'onHoverEnd',
          'whileFocus',
          'whileTap',
          'whileHover',
          'whileInView',
          'onViewportEnter',
          'onViewportLeave',
          'viewport',
          'layoutScroll',
        ]);
        function ai(e) {
          return ii.has(e);
        }
        var oi = function (e) {
          return !ai(e);
        };
        try {
          var si = require('@emotion/is-prop-valid').default;
          oi = function (e) {
            return e.startsWith('on') ? !ai(e) : si(e);
          };
        } catch (tf) {}
        function li(e, t, n) {
          return 'string' === typeof e ? e : De.transform(t + n * e);
        }
        var ui = { offset: 'stroke-dashoffset', array: 'stroke-dasharray' },
          ci = { offset: 'strokeDashoffset', array: 'strokeDasharray' };
        function di(e, t, n, r) {
          var i = t.attrX,
            a = t.attrY,
            o = t.originX,
            s = t.originY,
            l = t.pathLength,
            u = t.pathSpacing,
            c = void 0 === u ? 1 : u,
            d = t.pathOffset,
            f = void 0 === d ? 0 : d;
          Zr(
            e,
            p(t, [
              'attrX',
              'attrY',
              'originX',
              'originY',
              'pathLength',
              'pathSpacing',
              'pathOffset',
            ]),
            n,
            r,
          ),
            (e.attrs = e.style),
            (e.style = {});
          var h = e.attrs,
            v = e.style,
            m = e.dimensions;
          h.transform && (m && (v.transform = h.transform), delete h.transform),
            m &&
              (void 0 !== o || void 0 !== s || v.transform) &&
              (v.transformOrigin = (function (e, t, n) {
                var r = li(t, e.x, e.width),
                  i = li(n, e.y, e.height);
                return ''.concat(r, ' ').concat(i);
              })(m, void 0 !== o ? o : 0.5, void 0 !== s ? s : 0.5)),
            void 0 !== i && (h.x = i),
            void 0 !== a && (h.y = a),
            void 0 !== l &&
              (function (e, t, n, r, i) {
                void 0 === n && (n = 1),
                  void 0 === r && (r = 0),
                  void 0 === i && (i = !0),
                  (e.pathLength = 1);
                var a = i ? ui : ci;
                e[a.offset] = De.transform(-r);
                var o = De.transform(t),
                  s = De.transform(n);
                e[a.array] = ''.concat(o, ' ').concat(s);
              })(h, l, c, f, !1);
        }
        var fi = function () {
          return f(
            f(
              {},
              {
                style: {},
                transform: {},
                transformKeys: [],
                transformOrigin: {},
                vars: {},
              },
            ),
            { attrs: {} },
          );
        };
        function pi(e, t) {
          var n = (0, r.useMemo)(
            function () {
              var n = fi();
              return (
                di(
                  n,
                  t,
                  { enableHardwareAcceleration: !1 },
                  e.transformTemplate,
                ),
                f(f({}, n.attrs), { style: f({}, n.style) })
              );
            },
            [t],
          );
          if (e.style) {
            var i = {};
            ti(i, e.style, e), (n.style = f(f({}, i), n.style));
          }
          return n;
        }
        function hi(e) {
          void 0 === e && (e = !1);
          return function (t, n, i, a, o, s) {
            var l = o.latestValues,
              u = (Yr(t) ? pi : ri)(n, l, s),
              c = (function (e, t, n) {
                var r = {};
                for (var i in e)
                  (oi(i) ||
                    (!0 === n && ai(i)) ||
                    (!t && !ai(i)) ||
                    (e.draggable && i.startsWith('onDrag'))) &&
                    (r[i] = e[i]);
                return r;
              })(n, 'string' === typeof t, e),
              d = f(f(f({}, c), u), { ref: a });
            return (
              i && (d['data-projection-id'] = i), (0, r.createElement)(t, d)
            );
          };
        }
        var vi = /([a-z])([A-Z])/g,
          mi = function (e) {
            return e.replace(vi, '$1-$2').toLowerCase();
          };
        function gi(e, t, n, r) {
          var i = t.style,
            a = t.vars;
          for (var o in (Object.assign(
            e.style,
            i,
            r && r.getProjectionStyles(n),
          ),
          a))
            e.style.setProperty(o, a[o]);
        }
        var yi = new Set([
          'baseFrequency',
          'diffuseConstant',
          'kernelMatrix',
          'kernelUnitLength',
          'keySplines',
          'keyTimes',
          'limitingConeAngle',
          'markerHeight',
          'markerWidth',
          'numOctaves',
          'targetX',
          'targetY',
          'surfaceScale',
          'specularConstant',
          'specularExponent',
          'stdDeviation',
          'tableValues',
          'viewBox',
          'gradientTransform',
          'pathLength',
        ]);
        function bi(e, t) {
          for (var n in (gi(e, t), t.attrs))
            e.setAttribute(yi.has(n) ? n : mi(n), t.attrs[n]);
        }
        function wi(e) {
          var t = e.style,
            n = {};
          for (var r in t) (se(t[r]) || Xr(r, e)) && (n[r] = t[r]);
          return n;
        }
        function xi(e) {
          var t = wi(e);
          for (var n in e) {
            if (se(e[n]))
              t['x' === n || 'y' === n ? 'attr' + n.toUpperCase() : n] = e[n];
          }
          return t;
        }
        function Si(e) {
          return 'object' === typeof e && 'function' === typeof e.start;
        }
        function Ei(e, t, n, r) {
          var i = e.scrapeMotionValuesFromProps,
            a = e.createRenderState,
            o = e.onMount,
            s = { latestValues: Ci(t, n, r, i), renderState: a() };
          return (
            o &&
              (s.mount = function (e) {
                return o(t, e, s);
              }),
            s
          );
        }
        var ki = function (e) {
          return function (t, n) {
            var i = (0, r.useContext)(S),
              a = (0, r.useContext)(E);
            return n
              ? Ei(e, t, i, a)
              : I(function () {
                  return Ei(e, t, i, a);
                });
          };
        };
        function Ci(e, t, n, r) {
          var i = {},
            a = !1 === (null === n || void 0 === n ? void 0 : n.initial),
            o = r(e);
          for (var s in o) i[s] = xr(o[s]);
          var l = e.initial,
            u = e.animate,
            c = A(e),
            d = M(e);
          t &&
            d &&
            !c &&
            !1 !== e.inherit &&
            ((null !== l && void 0 !== l) || (l = t.initial),
            (null !== u && void 0 !== u) || (u = t.animate));
          var f = a || !1 === l,
            h = f ? u : l;
          h &&
            'boolean' !== typeof h &&
            !Si(h) &&
            (Array.isArray(h) ? h : [h]).forEach(function (t) {
              var n = L(e, t);
              if (n) {
                var r = n.transitionEnd;
                n.transition;
                var a = p(n, ['transitionEnd', 'transition']);
                for (var o in a) {
                  var s = a[o];
                  if (Array.isArray(s)) s = s[f ? s.length - 1 : 0];
                  null !== s && (i[o] = s);
                }
                for (var o in r) i[o] = r[o];
              }
            });
          return i;
        }
        var Ti,
          Pi = {
            useVisualState: ki({
              scrapeMotionValuesFromProps: xi,
              createRenderState: fi,
              onMount: function (e, t, n) {
                var r = n.renderState,
                  i = n.latestValues;
                try {
                  r.dimensions =
                    'function' === typeof t.getBBox
                      ? t.getBBox()
                      : t.getBoundingClientRect();
                } catch (a) {
                  r.dimensions = { x: 0, y: 0, width: 0, height: 0 };
                }
                di(
                  r,
                  i,
                  { enableHardwareAcceleration: !1 },
                  e.transformTemplate,
                ),
                  bi(t, r);
              },
            }),
          },
          Oi = {
            useVisualState: ki({
              scrapeMotionValuesFromProps: wi,
              createRenderState: ei,
            }),
          };
        function ji(e, t, n, r) {
          return (
            e.addEventListener(t, n, r),
            function () {
              return e.removeEventListener(t, n, r);
            }
          );
        }
        function Li(e, t, n, i) {
          (0, r.useEffect)(
            function () {
              var r = e.current;
              if (n && r) return ji(r, t, n, i);
            },
            [e, t, n, i],
          );
        }
        function _i(e) {
          return 'undefined' !== typeof PointerEvent &&
            e instanceof PointerEvent
            ? !('mouse' !== e.pointerType)
            : e instanceof MouseEvent;
        }
        function Ai(e) {
          return !!e.touches;
        }
        !(function (e) {
          (e.Animate = 'animate'),
            (e.Hover = 'whileHover'),
            (e.Tap = 'whileTap'),
            (e.Drag = 'whileDrag'),
            (e.Focus = 'whileFocus'),
            (e.InView = 'whileInView'),
            (e.Exit = 'exit');
        })(Ti || (Ti = {}));
        var Mi = { pageX: 0, pageY: 0 };
        function Ni(e, t) {
          void 0 === t && (t = 'page');
          var n = e.touches[0] || e.changedTouches[0] || Mi;
          return { x: n[t + 'X'], y: n[t + 'Y'] };
        }
        function Ri(e, t) {
          return void 0 === t && (t = 'page'), { x: e[t + 'X'], y: e[t + 'Y'] };
        }
        function Ii(e, t) {
          return (
            void 0 === t && (t = 'page'), { point: Ai(e) ? Ni(e, t) : Ri(e, t) }
          );
        }
        var Di = function (e, t) {
            void 0 === t && (t = !1);
            var n,
              r = function (t) {
                return e(t, Ii(t));
              };
            return t
              ? ((n = r),
                function (e) {
                  var t = e instanceof MouseEvent;
                  (!t || (t && 0 === e.button)) && n(e);
                })
              : r;
          },
          zi = {
            pointerdown: 'mousedown',
            pointermove: 'mousemove',
            pointerup: 'mouseup',
            pointercancel: 'mousecancel',
            pointerover: 'mouseover',
            pointerout: 'mouseout',
            pointerenter: 'mouseenter',
            pointerleave: 'mouseleave',
          },
          Vi = {
            pointerdown: 'touchstart',
            pointermove: 'touchmove',
            pointerup: 'touchend',
            pointercancel: 'touchcancel',
          };
        function Fi(e) {
          return k && null === window.onpointerdown
            ? e
            : k && null === window.ontouchstart
            ? Vi[e]
            : k && null === window.onmousedown
            ? zi[e]
            : e;
        }
        function Bi(e, t, n, r) {
          return ji(e, Fi(t), Di(n, 'pointerdown' === t), r);
        }
        function Ui(e, t, n, r) {
          return Li(e, Fi(t), n && Di(n, 'pointerdown' === t), r);
        }
        function $i(e) {
          var t = null;
          return function () {
            return (
              null === t &&
              ((t = e),
              function () {
                t = null;
              })
            );
          };
        }
        var qi = $i('dragHorizontal'),
          Hi = $i('dragVertical');
        function Wi(e) {
          var t = !1;
          if ('y' === e) t = Hi();
          else if ('x' === e) t = qi();
          else {
            var n = qi(),
              r = Hi();
            n && r
              ? (t = function () {
                  n(), r();
                })
              : (n && n(), r && r());
          }
          return t;
        }
        function Gi() {
          var e = Wi(!0);
          return !e || (e(), !1);
        }
        function Yi(e, t, n) {
          return function (r, i) {
            var a;
            _i(r) &&
              !Gi() &&
              (null === (a = e.animationState) ||
                void 0 === a ||
                a.setActive(Ti.Hover, t),
              null === n || void 0 === n || n(r, i));
          };
        }
        var Xi = function e(t, n) {
          return !!n && (t === n || e(t, n.parentElement));
        };
        function Qi(e) {
          return (0, r.useEffect)(function () {
            return function () {
              return e();
            };
          }, []);
        }
        var Ki = new WeakMap(),
          Ji = new WeakMap(),
          Zi = function (e) {
            var t;
            null === (t = Ki.get(e.target)) || void 0 === t || t(e);
          },
          ea = function (e) {
            e.forEach(Zi);
          };
        function ta(e, t, n) {
          var r = (function (e) {
            var t = e.root,
              n = p(e, ['root']),
              r = t || document;
            Ji.has(r) || Ji.set(r, {});
            var i = Ji.get(r),
              a = JSON.stringify(n);
            return (
              i[a] || (i[a] = new IntersectionObserver(ea, f({ root: t }, n))),
              i[a]
            );
          })(t);
          return (
            Ki.set(e, n),
            r.observe(e),
            function () {
              Ki.delete(e), r.unobserve(e);
            }
          );
        }
        var na = { some: 0, all: 1 };
        function ra(e, t, n, i) {
          var a = i.root,
            o = i.margin,
            s = i.amount,
            l = void 0 === s ? 'some' : s,
            u = i.once;
          (0, r.useEffect)(
            function () {
              if (e) {
                var r = {
                  root: null === a || void 0 === a ? void 0 : a.current,
                  rootMargin: o,
                  threshold: 'number' === typeof l ? l : na[l],
                };
                return ta(n.getInstance(), r, function (e) {
                  var r,
                    i = e.isIntersecting;
                  if (
                    t.isInView !== i &&
                    ((t.isInView = i), !u || i || !t.hasEnteredView)
                  ) {
                    i && (t.hasEnteredView = !0),
                      null === (r = n.animationState) ||
                        void 0 === r ||
                        r.setActive(Ti.InView, i);
                    var a = n.getProps(),
                      o = i ? a.onViewportEnter : a.onViewportLeave;
                    null === o || void 0 === o || o(e);
                  }
                });
              }
            },
            [e, a, o, l],
          );
        }
        function ia(e, t, n) {
          (0, r.useEffect)(
            function () {
              e &&
                requestAnimationFrame(function () {
                  var e;
                  t.hasEnteredView = !0;
                  var r = n.getProps().onViewportEnter;
                  null === r || void 0 === r || r(null),
                    null === (e = n.animationState) ||
                      void 0 === e ||
                      e.setActive(Ti.InView, !0);
                });
            },
            [e],
          );
        }
        var aa = function (e) {
            return function (t) {
              return e(t), null;
            };
          },
          oa = {
            inView: aa(function (e) {
              var t = e.visualElement,
                n = e.whileInView,
                i = e.onViewportEnter,
                a = e.onViewportLeave,
                o = e.viewport,
                s = void 0 === o ? {} : o,
                l = (0, r.useRef)({ hasEnteredView: !1, isInView: !1 }),
                u = Boolean(n || i || a);
              s.once && l.current.hasEnteredView && (u = !1),
                ('undefined' === typeof IntersectionObserver ? ia : ra)(
                  u,
                  l.current,
                  t,
                  s,
                );
            }),
            tap: aa(function (e) {
              var t = e.onTap,
                n = e.onTapStart,
                i = e.onTapCancel,
                a = e.whileTap,
                o = e.visualElement,
                s = t || n || i || a,
                l = (0, r.useRef)(!1),
                u = (0, r.useRef)(null);
              function c() {
                var e;
                null === (e = u.current) || void 0 === e || e.call(u),
                  (u.current = null);
              }
              function d() {
                var e;
                return (
                  c(),
                  (l.current = !1),
                  null === (e = o.animationState) ||
                    void 0 === e ||
                    e.setActive(Ti.Tap, !1),
                  !Gi()
                );
              }
              function f(e, n) {
                d() &&
                  (Xi(o.getInstance(), e.target)
                    ? null === t || void 0 === t || t(e, n)
                    : null === i || void 0 === i || i(e, n));
              }
              function p(e, t) {
                d() && (null === i || void 0 === i || i(e, t));
              }
              Ui(
                o,
                'pointerdown',
                s
                  ? function (e, t) {
                      var r;
                      c(),
                        l.current ||
                          ((l.current = !0),
                          (u.current = ot(
                            Bi(window, 'pointerup', f),
                            Bi(window, 'pointercancel', p),
                          )),
                          null === (r = o.animationState) ||
                            void 0 === r ||
                            r.setActive(Ti.Tap, !0),
                          null === n || void 0 === n || n(e, t));
                    }
                  : void 0,
              ),
                Qi(c);
            }),
            focus: aa(function (e) {
              var t = e.whileFocus,
                n = e.visualElement;
              Li(
                n,
                'focus',
                t
                  ? function () {
                      var e;
                      null === (e = n.animationState) ||
                        void 0 === e ||
                        e.setActive(Ti.Focus, !0);
                    }
                  : void 0,
              ),
                Li(
                  n,
                  'blur',
                  t
                    ? function () {
                        var e;
                        null === (e = n.animationState) ||
                          void 0 === e ||
                          e.setActive(Ti.Focus, !1);
                      }
                    : void 0,
                );
            }),
            hover: aa(function (e) {
              var t = e.onHoverStart,
                n = e.onHoverEnd,
                r = e.whileHover,
                i = e.visualElement;
              Ui(i, 'pointerenter', t || r ? Yi(i, !0, t) : void 0),
                Ui(i, 'pointerleave', n || r ? Yi(i, !1, n) : void 0);
            }),
          };
        function sa() {
          var e = (0, r.useContext)(E);
          if (null === e) return [!0, null];
          var t = e.isPresent,
            n = e.onExitComplete,
            i = e.register,
            a = ca();
          (0, r.useEffect)(function () {
            return i(a);
          }, []);
          return !t && n
            ? [
                !1,
                function () {
                  return null === n || void 0 === n ? void 0 : n(a);
                },
              ]
            : [!0];
        }
        var la = 0,
          ua = function () {
            return la++;
          },
          ca = function () {
            return I(ua);
          };
        function da(e, t) {
          if (!Array.isArray(t)) return !1;
          var n = t.length;
          if (n !== e.length) return !1;
          for (var r = 0; r < n; r++) if (t[r] !== e[r]) return !1;
          return !0;
        }
        var fa = function (e) {
            return /^0[^.\s]+$/.test(e);
          },
          pa = function (e) {
            return function (t) {
              return t.test(e);
            };
          },
          ha = [
            ke,
            De,
            Ie,
            Re,
            Ve,
            ze,
            {
              test: function (e) {
                return 'auto' === e;
              },
              parse: function (e) {
                return e;
              },
            },
          ],
          va = function (e) {
            return ha.find(pa(e));
          },
          ma = v(v([], h(ha), !1), [Qe, rt], !1),
          ga = function (e) {
            return ma.find(pa(e));
          };
        function ya(e, t, n) {
          e.hasValue(t) ? e.getValue(t).set(n) : e.addValue(t, oe(n));
        }
        function ba(e, t) {
          var n = _(e, t),
            r = n ? e.makeTargetAnimatable(n, !1) : {},
            i = r.transitionEnd,
            a = void 0 === i ? {} : i;
          r.transition;
          var o = p(r, ['transitionEnd', 'transition']);
          for (var s in (o = f(f({}, o), a))) {
            ya(e, s, hn(o[s]));
          }
        }
        function wa(e, t) {
          v([], h(t), !1)
            .reverse()
            .forEach(function (n) {
              var r,
                i = e.getVariant(n);
              i && ba(e, i),
                null === (r = e.variantChildren) ||
                  void 0 === r ||
                  r.forEach(function (e) {
                    wa(e, t);
                  });
            });
        }
        function xa(e, t) {
          if (t) return (t[e] || t.default || t).from;
        }
        function Sa(e, t, n) {
          var r;
          if (
            (void 0 === n && (n = {}),
            e.notifyAnimationStart(t),
            Array.isArray(t))
          ) {
            var i = t.map(function (t) {
              return Ea(e, t, n);
            });
            r = Promise.all(i);
          } else if ('string' === typeof t) r = Ea(e, t, n);
          else {
            var a = 'function' === typeof t ? _(e, t, n.custom) : t;
            r = ka(e, a, n);
          }
          return r.then(function () {
            return e.notifyAnimationComplete(t);
          });
        }
        function Ea(e, t, n) {
          var r;
          void 0 === n && (n = {});
          var i = _(e, t, n.custom),
            a = (i || {}).transition,
            o = void 0 === a ? e.getDefaultTransition() || {} : a;
          n.transitionOverride && (o = n.transitionOverride);
          var s = i
              ? function () {
                  return ka(e, i, n);
                }
              : function () {
                  return Promise.resolve();
                },
            l = (
              null === (r = e.variantChildren) || void 0 === r ? void 0 : r.size
            )
              ? function (r) {
                  void 0 === r && (r = 0);
                  var i = o.delayChildren,
                    a = void 0 === i ? 0 : i,
                    s = o.staggerChildren,
                    l = o.staggerDirection;
                  return (function (e, t, n, r, i, a) {
                    void 0 === n && (n = 0);
                    void 0 === r && (r = 0);
                    void 0 === i && (i = 1);
                    var o = [],
                      s = (e.variantChildren.size - 1) * r,
                      l =
                        1 === i
                          ? function (e) {
                              return void 0 === e && (e = 0), e * r;
                            }
                          : function (e) {
                              return void 0 === e && (e = 0), s - e * r;
                            };
                    return (
                      Array.from(e.variantChildren)
                        .sort(Ca)
                        .forEach(function (e, r) {
                          o.push(
                            Ea(e, t, f(f({}, a), { delay: n + l(r) })).then(
                              function () {
                                return e.notifyAnimationComplete(t);
                              },
                            ),
                          );
                        }),
                      Promise.all(o)
                    );
                  })(e, t, a + r, s, l, n);
                }
              : function () {
                  return Promise.resolve();
                },
            u = o.when;
          if (u) {
            var c = h('beforeChildren' === u ? [s, l] : [l, s], 2),
              d = c[0],
              p = c[1];
            return d().then(p);
          }
          return Promise.all([s(), l(n.delay)]);
        }
        function ka(e, t, n) {
          var r,
            i = void 0 === n ? {} : n,
            a = i.delay,
            o = void 0 === a ? 0 : a,
            s = i.transitionOverride,
            l = i.type,
            u = e.makeTargetAnimatable(t),
            c = u.transition,
            d = void 0 === c ? e.getDefaultTransition() : c,
            h = u.transitionEnd,
            v = p(u, ['transition', 'transitionEnd']);
          s && (d = s);
          var m = [],
            g =
              l &&
              (null === (r = e.animationState) || void 0 === r
                ? void 0
                : r.getState()[l]);
          for (var y in v) {
            var b = e.getValue(y),
              w = v[y];
            if (!(!b || void 0 === w || (g && Ta(g, y)))) {
              var x = xn(y, b, w, f({ delay: o }, d));
              m.push(x);
            }
          }
          return Promise.all(m).then(function () {
            h && ba(e, h);
          });
        }
        function Ca(e, t) {
          return e.sortNodePosition(t);
        }
        function Ta(e, t) {
          var n = e.protectedKeys,
            r = e.needsAnimating,
            i = n.hasOwnProperty(t) && !0 !== r[t];
          return (r[t] = !1), i;
        }
        var Pa = [
            Ti.Animate,
            Ti.InView,
            Ti.Focus,
            Ti.Hover,
            Ti.Tap,
            Ti.Drag,
            Ti.Exit,
          ],
          Oa = v([], h(Pa), !1).reverse(),
          ja = Pa.length;
        function La(e) {
          var t = (function (e) {
              return function (t) {
                return Promise.all(
                  t.map(function (t) {
                    var n = t.animation,
                      r = t.options;
                    return Sa(e, n, r);
                  }),
                );
              };
            })(e),
            n = (function () {
              var e;
              return (
                ((e = {})[Ti.Animate] = _a(!0)),
                (e[Ti.InView] = _a()),
                (e[Ti.Hover] = _a()),
                (e[Ti.Tap] = _a()),
                (e[Ti.Drag] = _a()),
                (e[Ti.Focus] = _a()),
                (e[Ti.Exit] = _a()),
                e
              );
            })(),
            r = {},
            i = !0,
            a = function (t, n) {
              var r = _(e, n);
              if (r) {
                r.transition;
                var i = r.transitionEnd,
                  a = p(r, ['transition', 'transitionEnd']);
                t = f(f(f({}, t), a), i);
              }
              return t;
            };
          function o(o, s) {
            for (
              var l,
                u = e.getProps(),
                c = e.getVariantContext(!0) || {},
                d = [],
                p = new Set(),
                m = {},
                g = 1 / 0,
                y = function (t) {
                  var r = Oa[t],
                    y = n[r],
                    b = null !== (l = u[r]) && void 0 !== l ? l : c[r],
                    w = j(b),
                    x = r === s ? y.isActive : null;
                  !1 === x && (g = t);
                  var S = b === c[r] && b !== u[r] && w;
                  if (
                    (S && i && e.manuallyAnimateOnMount && (S = !1),
                    (y.protectedKeys = f({}, m)),
                    (!y.isActive && null === x) ||
                      (!b && !y.prevProp) ||
                      Si(b) ||
                      'boolean' === typeof b)
                  )
                    return 'continue';
                  var E = (function (e, t) {
                      if ('string' === typeof t) return t !== e;
                      if (O(t)) return !da(t, e);
                      return !1;
                    })(y.prevProp, b),
                    k = E || (r === s && y.isActive && !S && w) || (t > g && w),
                    C = Array.isArray(b) ? b : [b],
                    T = C.reduce(a, {});
                  !1 === x && (T = {});
                  var P = y.prevResolvedValues,
                    L = void 0 === P ? {} : P,
                    _ = f(f({}, L), T),
                    A = function (e) {
                      (k = !0), p.delete(e), (y.needsAnimating[e] = !0);
                    };
                  for (var M in _) {
                    var N = T[M],
                      R = L[M];
                    m.hasOwnProperty(M) ||
                      (N !== R
                        ? Kt(N) && Kt(R)
                          ? !da(N, R) || E
                            ? A(M)
                            : (y.protectedKeys[M] = !0)
                          : void 0 !== N
                          ? A(M)
                          : p.add(M)
                        : void 0 !== N && p.has(M)
                        ? A(M)
                        : (y.protectedKeys[M] = !0));
                  }
                  (y.prevProp = b),
                    (y.prevResolvedValues = T),
                    y.isActive && (m = f(f({}, m), T)),
                    i && e.blockInitialAnimation && (k = !1),
                    k &&
                      !S &&
                      d.push.apply(
                        d,
                        v(
                          [],
                          h(
                            C.map(function (e) {
                              return {
                                animation: e,
                                options: f({ type: r }, o),
                              };
                            }),
                          ),
                          !1,
                        ),
                      );
                },
                b = 0;
              b < ja;
              b++
            )
              y(b);
            if (((r = f({}, m)), p.size)) {
              var w = {};
              p.forEach(function (t) {
                var n = e.getBaseTarget(t);
                void 0 !== n && (w[t] = n);
              }),
                d.push({ animation: w });
            }
            var x = Boolean(d.length);
            return (
              i && !1 === u.initial && !e.manuallyAnimateOnMount && (x = !1),
              (i = !1),
              x ? t(d) : Promise.resolve()
            );
          }
          return {
            isAnimated: function (e) {
              return void 0 !== r[e];
            },
            animateChanges: o,
            setActive: function (t, r, i) {
              var a;
              return n[t].isActive === r
                ? Promise.resolve()
                : (null === (a = e.variantChildren) ||
                    void 0 === a ||
                    a.forEach(function (e) {
                      var n;
                      return null === (n = e.animationState) || void 0 === n
                        ? void 0
                        : n.setActive(t, r);
                    }),
                  (n[t].isActive = r),
                  o(i, t));
            },
            setAnimateFunction: function (n) {
              t = n(e);
            },
            getState: function () {
              return n;
            },
          };
        }
        function _a(e) {
          return (
            void 0 === e && (e = !1),
            {
              isActive: e,
              protectedKeys: {},
              needsAnimating: {},
              prevResolvedValues: {},
            }
          );
        }
        var Aa = {
            animation: aa(function (e) {
              var t = e.visualElement,
                n = e.animate;
              t.animationState || (t.animationState = La(t)),
                Si(n) &&
                  (0, r.useEffect)(
                    function () {
                      return n.subscribe(t);
                    },
                    [n],
                  );
            }),
            exit: aa(function (e) {
              var t = e.custom,
                n = e.visualElement,
                i = h(sa(), 2),
                a = i[0],
                o = i[1],
                s = (0, r.useContext)(E);
              (0, r.useEffect)(
                function () {
                  var e, r;
                  n.isPresent = a;
                  var i =
                    null === (e = n.animationState) || void 0 === e
                      ? void 0
                      : e.setActive(Ti.Exit, !a, {
                          custom:
                            null !==
                              (r =
                                null === s || void 0 === s
                                  ? void 0
                                  : s.custom) && void 0 !== r
                              ? r
                              : t,
                        });
                  !a && (null === i || void 0 === i || i.then(o));
                },
                [a],
              );
            }),
          },
          Ma = (function () {
            function e(e, t, n) {
              var r = this,
                i = (void 0 === n ? {} : n).transformPagePoint;
              if (
                ((this.startEvent = null),
                (this.lastMoveEvent = null),
                (this.lastMoveEventInfo = null),
                (this.handlers = {}),
                (this.updatePoint = function () {
                  if (r.lastMoveEvent && r.lastMoveEventInfo) {
                    var e = Ia(r.lastMoveEventInfo, r.history),
                      t = null !== r.startEvent,
                      n = Wn(e.offset, { x: 0, y: 0 }) >= 3;
                    if (t || n) {
                      var i = e.point,
                        a = J().timestamp;
                      r.history.push(f(f({}, i), { timestamp: a }));
                      var o = r.handlers,
                        s = o.onStart,
                        l = o.onMove;
                      t ||
                        (s && s(r.lastMoveEvent, e),
                        (r.startEvent = r.lastMoveEvent)),
                        l && l(r.lastMoveEvent, e);
                    }
                  }
                }),
                (this.handlePointerMove = function (e, t) {
                  (r.lastMoveEvent = e),
                    (r.lastMoveEventInfo = Na(t, r.transformPagePoint)),
                    _i(e) && 0 === e.buttons
                      ? r.handlePointerUp(e, t)
                      : Z.update(r.updatePoint, !0);
                }),
                (this.handlePointerUp = function (e, t) {
                  r.end();
                  var n = r.handlers,
                    i = n.onEnd,
                    a = n.onSessionEnd,
                    o = Ia(Na(t, r.transformPagePoint), r.history);
                  r.startEvent && i && i(e, o), a && a(e, o);
                }),
                !(Ai(e) && e.touches.length > 1))
              ) {
                (this.handlers = t), (this.transformPagePoint = i);
                var a = Na(Ii(e), this.transformPagePoint),
                  o = a.point,
                  s = J().timestamp;
                this.history = [f(f({}, o), { timestamp: s })];
                var l = t.onSessionStart;
                l && l(e, Ia(a, this.history)),
                  (this.removeListeners = ot(
                    Bi(window, 'pointermove', this.handlePointerMove),
                    Bi(window, 'pointerup', this.handlePointerUp),
                    Bi(window, 'pointercancel', this.handlePointerUp),
                  ));
              }
            }
            return (
              (e.prototype.updateHandlers = function (e) {
                this.handlers = e;
              }),
              (e.prototype.end = function () {
                this.removeListeners && this.removeListeners(),
                  G.update(this.updatePoint);
              }),
              e
            );
          })();
        function Na(e, t) {
          return t ? { point: t(e.point) } : e;
        }
        function Ra(e, t) {
          return { x: e.x - t.x, y: e.y - t.y };
        }
        function Ia(e, t) {
          var n = e.point;
          return {
            point: n,
            delta: Ra(n, za(t)),
            offset: Ra(n, Da(t)),
            velocity: Va(t, 0.1),
          };
        }
        function Da(e) {
          return e[0];
        }
        function za(e) {
          return e[e.length - 1];
        }
        function Va(e, t) {
          if (e.length < 2) return { x: 0, y: 0 };
          for (
            var n = e.length - 1, r = null, i = za(e);
            n >= 0 && ((r = e[n]), !(i.timestamp - r.timestamp > Ft(t)));

          )
            n--;
          if (!r) return { x: 0, y: 0 };
          var a = (i.timestamp - r.timestamp) / 1e3;
          if (0 === a) return { x: 0, y: 0 };
          var o = { x: (i.x - r.x) / a, y: (i.y - r.y) / a };
          return o.x === 1 / 0 && (o.x = 0), o.y === 1 / 0 && (o.y = 0), o;
        }
        function Fa(e, t, n) {
          return {
            min: void 0 !== t ? e.min + t : void 0,
            max: void 0 !== n ? e.max + n - (e.max - e.min) : void 0,
          };
        }
        function Ba(e, t) {
          var n,
            r = t.min - e.min,
            i = t.max - e.max;
          return (
            t.max - t.min < e.max - e.min &&
              ((r = (n = h([i, r], 2))[0]), (i = n[1])),
            { min: r, max: i }
          );
        }
        var Ua = 0.35;
        function $a(e, t, n) {
          return { min: qa(e, t), max: qa(e, n) };
        }
        function qa(e, t) {
          var n;
          return 'number' === typeof e
            ? e
            : null !== (n = e[t]) && void 0 !== n
            ? n
            : 0;
        }
        function Ha(e) {
          var t = e.top;
          return {
            x: { min: e.left, max: e.right },
            y: { min: t, max: e.bottom },
          };
        }
        function Wa(e, t) {
          return Ha(
            (function (e, t) {
              if (!t) return e;
              var n = t({ x: e.left, y: e.top }),
                r = t({ x: e.right, y: e.bottom });
              return { top: n.y, left: n.x, bottom: r.y, right: r.x };
            })(e.getBoundingClientRect(), t),
          );
        }
        var Ga = new WeakMap(),
          Ya = (function () {
            function e(e) {
              (this.openGlobalLock = null),
                (this.isDragging = !1),
                (this.currentDirection = null),
                (this.originPoint = { x: 0, y: 0 }),
                (this.constraints = !1),
                (this.hasMutatedConstraints = !1),
                (this.elastic = {
                  x: { min: 0, max: 0 },
                  y: { min: 0, max: 0 },
                }),
                (this.visualElement = e);
            }
            return (
              (e.prototype.start = function (e, t) {
                var n = this,
                  r = (void 0 === t ? {} : t).snapToCursor,
                  i = void 0 !== r && r;
                if (!1 !== this.visualElement.isPresent) {
                  this.panSession = new Ma(
                    e,
                    {
                      onSessionStart: function (e) {
                        n.stopAnimation(),
                          i && n.snapToCursor(Ii(e, 'page').point);
                      },
                      onStart: function (e, t) {
                        var r,
                          i = n.getProps(),
                          a = i.drag,
                          o = i.dragPropagation,
                          s = i.onDragStart;
                        (!a ||
                          o ||
                          (n.openGlobalLock && n.openGlobalLock(),
                          (n.openGlobalLock = Wi(a)),
                          n.openGlobalLock)) &&
                          ((n.isDragging = !0),
                          (n.currentDirection = null),
                          n.resolveConstraints(),
                          n.visualElement.projection &&
                            ((n.visualElement.projection.isAnimationBlocked =
                              !0),
                            (n.visualElement.projection.target = void 0)),
                          dr(function (e) {
                            var t,
                              r,
                              i = n.getAxisMotionValue(e).get() || 0;
                            if (Ie.test(i)) {
                              var a =
                                null ===
                                  (r =
                                    null === (t = n.visualElement.projection) ||
                                    void 0 === t
                                      ? void 0
                                      : t.layout) || void 0 === r
                                  ? void 0
                                  : r.actual[e];
                              if (a) i = Gn(a) * (parseFloat(i) / 100);
                            }
                            n.originPoint[e] = i;
                          }),
                          null === s || void 0 === s || s(e, t),
                          null === (r = n.visualElement.animationState) ||
                            void 0 === r ||
                            r.setActive(Ti.Drag, !0));
                      },
                      onMove: function (e, t) {
                        var r = n.getProps(),
                          i = r.dragPropagation,
                          a = r.dragDirectionLock,
                          o = r.onDirectionLock,
                          s = r.onDrag;
                        if (i || n.openGlobalLock) {
                          var l = t.offset;
                          if (a && null === n.currentDirection)
                            return (
                              (n.currentDirection = (function (e, t) {
                                void 0 === t && (t = 10);
                                var n = null;
                                Math.abs(e.y) > t
                                  ? (n = 'y')
                                  : Math.abs(e.x) > t && (n = 'x');
                                return n;
                              })(l)),
                              void (
                                null !== n.currentDirection &&
                                (null === o ||
                                  void 0 === o ||
                                  o(n.currentDirection))
                              )
                            );
                          n.updateAxis('x', t.point, l),
                            n.updateAxis('y', t.point, l),
                            n.visualElement.syncRender(),
                            null === s || void 0 === s || s(e, t);
                        }
                      },
                      onSessionEnd: function (e, t) {
                        return n.stop(e, t);
                      },
                    },
                    {
                      transformPagePoint:
                        this.visualElement.getTransformPagePoint(),
                    },
                  );
                }
              }),
              (e.prototype.stop = function (e, t) {
                var n = this.isDragging;
                if ((this.cancel(), n)) {
                  var r = t.velocity;
                  this.startAnimation(r);
                  var i = this.getProps().onDragEnd;
                  null === i || void 0 === i || i(e, t);
                }
              }),
              (e.prototype.cancel = function () {
                var e, t;
                (this.isDragging = !1),
                  this.visualElement.projection &&
                    (this.visualElement.projection.isAnimationBlocked = !1),
                  null === (e = this.panSession) || void 0 === e || e.end(),
                  (this.panSession = void 0),
                  !this.getProps().dragPropagation &&
                    this.openGlobalLock &&
                    (this.openGlobalLock(), (this.openGlobalLock = null)),
                  null === (t = this.visualElement.animationState) ||
                    void 0 === t ||
                    t.setActive(Ti.Drag, !1);
              }),
              (e.prototype.updateAxis = function (e, t, n) {
                var r = this.getProps().drag;
                if (n && Xa(e, r, this.currentDirection)) {
                  var i = this.getAxisMotionValue(e),
                    a = this.originPoint[e] + n[e];
                  this.constraints &&
                    this.constraints[e] &&
                    (a = (function (e, t, n) {
                      var r = t.min,
                        i = t.max;
                      return (
                        void 0 !== r && e < r
                          ? (e = n ? ee(r, e, n.min) : Math.max(e, r))
                          : void 0 !== i &&
                            e > i &&
                            (e = n ? ee(i, e, n.max) : Math.min(e, i)),
                        e
                      );
                    })(a, this.constraints[e], this.elastic[e])),
                    i.set(a);
                }
              }),
              (e.prototype.resolveConstraints = function () {
                var e = this,
                  t = this.getProps(),
                  n = t.dragConstraints,
                  r = t.dragElastic,
                  i = (this.visualElement.projection || {}).layout,
                  a = this.constraints;
                n && P(n)
                  ? this.constraints ||
                    (this.constraints = this.resolveRefConstraints())
                  : (this.constraints =
                      !(!n || !i) &&
                      (function (e, t) {
                        var n = t.top,
                          r = t.left,
                          i = t.bottom,
                          a = t.right;
                        return { x: Fa(e.x, r, a), y: Fa(e.y, n, i) };
                      })(i.actual, n)),
                  (this.elastic = (function (e) {
                    return (
                      void 0 === e && (e = Ua),
                      !1 === e ? (e = 0) : !0 === e && (e = Ua),
                      { x: $a(e, 'left', 'right'), y: $a(e, 'top', 'bottom') }
                    );
                  })(r)),
                  a !== this.constraints &&
                    i &&
                    this.constraints &&
                    !this.hasMutatedConstraints &&
                    dr(function (t) {
                      e.getAxisMotionValue(t) &&
                        (e.constraints[t] = (function (e, t) {
                          var n = {};
                          return (
                            void 0 !== t.min && (n.min = t.min - e.min),
                            void 0 !== t.max && (n.max = t.max - e.min),
                            n
                          );
                        })(i.actual[t], e.constraints[t]));
                    });
              }),
              (e.prototype.resolveRefConstraints = function () {
                var e = this.getProps(),
                  t = e.dragConstraints,
                  n = e.onMeasureDragConstraints;
                if (!t || !P(t)) return !1;
                var r = t.current,
                  i = this.visualElement.projection;
                if (!i || !i.layout) return !1;
                var a = (function (e, t, n) {
                    var r = Wa(e, n),
                      i = t.scroll;
                    return i && (zn(r.x, i.x), zn(r.y, i.y)), r;
                  })(r, i.root, this.visualElement.getTransformPagePoint()),
                  o = (function (e, t) {
                    return { x: Ba(e.x, t.x), y: Ba(e.y, t.y) };
                  })(i.layout.actual, a);
                if (n) {
                  var s = n(
                    (function (e) {
                      var t = e.x,
                        n = e.y;
                      return {
                        top: n.min,
                        right: t.max,
                        bottom: n.max,
                        left: t.min,
                      };
                    })(o),
                  );
                  (this.hasMutatedConstraints = !!s), s && (o = Ha(s));
                }
                return o;
              }),
              (e.prototype.startAnimation = function (e) {
                var t = this,
                  n = this.getProps(),
                  r = n.drag,
                  i = n.dragMomentum,
                  a = n.dragElastic,
                  o = n.dragTransition,
                  s = n.dragSnapToOrigin,
                  l = n.onDragTransitionEnd,
                  u = this.constraints || {},
                  c = dr(function (n) {
                    var l;
                    if (Xa(n, r, t.currentDirection)) {
                      var c =
                        null !==
                          (l = null === u || void 0 === u ? void 0 : u[n]) &&
                        void 0 !== l
                          ? l
                          : {};
                      s && (c = { min: 0, max: 0 });
                      var d = a ? 200 : 1e6,
                        p = a ? 40 : 1e7,
                        h = f(
                          f(
                            {
                              type: 'inertia',
                              velocity: i ? e[n] : 0,
                              bounceStiffness: d,
                              bounceDamping: p,
                              timeConstant: 750,
                              restDelta: 1,
                              restSpeed: 10,
                            },
                            o,
                          ),
                          c,
                        );
                      return t.startAxisValueAnimation(n, h);
                    }
                  });
                return Promise.all(c).then(l);
              }),
              (e.prototype.startAxisValueAnimation = function (e, t) {
                return xn(e, this.getAxisMotionValue(e), 0, t);
              }),
              (e.prototype.stopAnimation = function () {
                var e = this;
                dr(function (t) {
                  return e.getAxisMotionValue(t).stop();
                });
              }),
              (e.prototype.getAxisMotionValue = function (e) {
                var t,
                  n,
                  r = '_drag' + e.toUpperCase(),
                  i = this.visualElement.getProps()[r];
                return (
                  i ||
                  this.visualElement.getValue(
                    e,
                    null !==
                      (n =
                        null === (t = this.visualElement.getProps().initial) ||
                        void 0 === t
                          ? void 0
                          : t[e]) && void 0 !== n
                      ? n
                      : 0,
                  )
                );
              }),
              (e.prototype.snapToCursor = function (e) {
                var t = this;
                dr(function (n) {
                  if (Xa(n, t.getProps().drag, t.currentDirection)) {
                    var r = t.visualElement.projection,
                      i = t.getAxisMotionValue(n);
                    if (r && r.layout) {
                      var a = r.layout.actual[n],
                        o = a.min,
                        s = a.max;
                      i.set(e[n] - ee(o, s, 0.5));
                    }
                  }
                });
              }),
              (e.prototype.scalePositionWithinConstraints = function () {
                var e,
                  t = this,
                  n = this.getProps(),
                  r = n.drag,
                  i = n.dragConstraints,
                  a = this.visualElement.projection;
                if (P(i) && a && this.constraints) {
                  this.stopAnimation();
                  var o = { x: 0, y: 0 };
                  dr(function (e) {
                    var n = t.getAxisMotionValue(e);
                    if (n) {
                      var r = n.get();
                      o[e] = (function (e, t) {
                        var n = 0.5,
                          r = Gn(e),
                          i = Gn(t);
                        return (
                          i > r
                            ? (n = ge(t.min, t.max - r, e.min))
                            : r > i && (n = ge(e.min, e.max - i, t.min)),
                          le(0, 1, n)
                        );
                      })({ min: r, max: r }, t.constraints[e]);
                    }
                  });
                  var s = this.visualElement.getProps().transformTemplate;
                  (this.visualElement.getInstance().style.transform = s
                    ? s({}, '')
                    : 'none'),
                    null === (e = a.root) || void 0 === e || e.updateScroll(),
                    a.updateLayout(),
                    this.resolveConstraints(),
                    dr(function (e) {
                      if (Xa(e, r, null)) {
                        var n = t.getAxisMotionValue(e),
                          i = t.constraints[e],
                          a = i.min,
                          s = i.max;
                        n.set(ee(a, s, o[e]));
                      }
                    });
                }
              }),
              (e.prototype.addListeners = function () {
                var e,
                  t = this;
                Ga.set(this.visualElement, this);
                var n = Bi(
                    this.visualElement.getInstance(),
                    'pointerdown',
                    function (e) {
                      var n = t.getProps(),
                        r = n.drag,
                        i = n.dragListener;
                      r && (void 0 === i || i) && t.start(e);
                    },
                  ),
                  r = function () {
                    P(t.getProps().dragConstraints) &&
                      (t.constraints = t.resolveRefConstraints());
                  },
                  i = this.visualElement.projection,
                  a = i.addEventListener('measure', r);
                i &&
                  !i.layout &&
                  (null === (e = i.root) || void 0 === e || e.updateScroll(),
                  i.updateLayout()),
                  r();
                var o = ji(window, 'resize', function () {
                  t.scalePositionWithinConstraints();
                });
                return (
                  i.addEventListener('didUpdate', function (e) {
                    var n = e.delta,
                      r = e.hasLayoutChanged;
                    t.isDragging &&
                      r &&
                      (dr(function (e) {
                        var r = t.getAxisMotionValue(e);
                        r &&
                          ((t.originPoint[e] += n[e].translate),
                          r.set(r.get() + n[e].translate));
                      }),
                      t.visualElement.syncRender());
                  }),
                  function () {
                    o(), n(), a();
                  }
                );
              }),
              (e.prototype.getProps = function () {
                var e = this.visualElement.getProps(),
                  t = e.drag,
                  n = void 0 !== t && t,
                  r = e.dragDirectionLock,
                  i = void 0 !== r && r,
                  a = e.dragPropagation,
                  o = void 0 !== a && a,
                  s = e.dragConstraints,
                  l = void 0 !== s && s,
                  u = e.dragElastic,
                  c = void 0 === u ? Ua : u,
                  d = e.dragMomentum,
                  p = void 0 === d || d;
                return f(f({}, e), {
                  drag: n,
                  dragDirectionLock: i,
                  dragPropagation: o,
                  dragConstraints: l,
                  dragElastic: c,
                  dragMomentum: p,
                });
              }),
              e
            );
          })();
        function Xa(e, t, n) {
          return (!0 === t || t === e) && (null === n || n === e);
        }
        var Qa = {
            pan: aa(function (e) {
              var t = e.onPan,
                n = e.onPanStart,
                i = e.onPanEnd,
                a = e.onPanSessionStart,
                o = e.visualElement,
                s = t || n || i || a,
                l = (0, r.useRef)(null),
                u = (0, r.useContext)(x).transformPagePoint,
                c = {
                  onSessionStart: a,
                  onStart: n,
                  onMove: t,
                  onEnd: function (e, t) {
                    (l.current = null), i && i(e, t);
                  },
                };
              (0, r.useEffect)(function () {
                null !== l.current && l.current.updateHandlers(c);
              }),
                Ui(
                  o,
                  'pointerdown',
                  s &&
                    function (e) {
                      l.current = new Ma(e, c, { transformPagePoint: u });
                    },
                ),
                Qi(function () {
                  return l.current && l.current.end();
                });
            }),
            drag: aa(function (e) {
              var t = e.dragControls,
                n = e.visualElement,
                i = I(function () {
                  return new Ya(n);
                });
              (0, r.useEffect)(
                function () {
                  return t && t.subscribe(i);
                },
                [i, t],
              ),
                (0, r.useEffect)(
                  function () {
                    return i.addListeners();
                  },
                  [i],
                );
            }),
          },
          Ka = [
            'LayoutMeasure',
            'BeforeLayoutMeasure',
            'LayoutUpdate',
            'ViewportBoxUpdate',
            'Update',
            'Render',
            'AnimationComplete',
            'LayoutAnimationComplete',
            'AnimationStart',
            'SetAxisTarget',
            'Unmount',
          ];
        var Ja = function (e) {
            var t = e.treeType,
              n = void 0 === t ? '' : t,
              r = e.build,
              i = e.getBaseTarget,
              a = e.makeTargetAnimatable,
              o = e.measureViewportBox,
              s = e.render,
              l = e.readValueFromInstance,
              u = e.removeValueFromRenderState,
              c = e.sortNodePosition,
              d = e.scrapeMotionValuesFromProps;
            return function (e, t) {
              var p = e.parent,
                m = e.props,
                g = e.presenceId,
                y = e.blockInitialAnimation,
                b = e.visualState;
              void 0 === t && (t = {});
              var w,
                x,
                S = !1,
                E = b.latestValues,
                k = b.renderState,
                C = (function () {
                  var e = Ka.map(function () {
                      return new ie();
                    }),
                    t = {},
                    n = {
                      clearAllListeners: function () {
                        return e.forEach(function (e) {
                          return e.clear();
                        });
                      },
                      updatePropListeners: function (e) {
                        Ka.forEach(function (r) {
                          var i,
                            a = 'on' + r,
                            o = e[a];
                          null === (i = t[r]) || void 0 === i || i.call(t),
                            o && (t[r] = n[a](o));
                        });
                      },
                    };
                  return (
                    e.forEach(function (e, t) {
                      (n['on' + Ka[t]] = function (t) {
                        return e.add(t);
                      }),
                        (n['notify' + Ka[t]] = function () {
                          for (var t = [], n = 0; n < arguments.length; n++)
                            t[n] = arguments[n];
                          e.notify.apply(e, v([], h(t), !1));
                        });
                    }),
                    n
                  );
                })(),
                T = new Map(),
                P = new Map(),
                O = {},
                L = f({}, E);
              function _() {
                w && S && (N(), s(w, k, m.style, B.projection));
              }
              function N() {
                r(B, k, E, t, m);
              }
              function R() {
                C.notifyUpdate(E);
              }
              var I = d(m);
              for (var D in I) {
                var z = I[D];
                void 0 !== E[D] && se(z) && z.set(E[D], !1);
              }
              var V = A(m),
                F = M(m),
                B = f(
                  f(
                    {
                      treeType: n,
                      current: null,
                      depth: p ? p.depth + 1 : 0,
                      parent: p,
                      children: new Set(),
                      presenceId: g,
                      variantChildren: F ? new Set() : void 0,
                      isVisible: void 0,
                      manuallyAnimateOnMount: Boolean(
                        null === p || void 0 === p ? void 0 : p.isMounted(),
                      ),
                      blockInitialAnimation: y,
                      isMounted: function () {
                        return Boolean(w);
                      },
                      mount: function (e) {
                        (S = !0),
                          (w = B.current = e),
                          B.projection && B.projection.mount(e),
                          F &&
                            p &&
                            !V &&
                            (x =
                              null === p || void 0 === p
                                ? void 0
                                : p.addVariantChild(B)),
                          null === p || void 0 === p || p.children.add(B),
                          B.setProps(m);
                      },
                      unmount: function () {
                        var e;
                        null === (e = B.projection) ||
                          void 0 === e ||
                          e.unmount(),
                          G.update(R),
                          G.render(_),
                          P.forEach(function (e) {
                            return e();
                          }),
                          null === x || void 0 === x || x(),
                          null === p || void 0 === p || p.children.delete(B),
                          C.clearAllListeners(),
                          (w = void 0),
                          (S = !1);
                      },
                      addVariantChild: function (e) {
                        var t,
                          n = B.getClosestVariantNode();
                        if (n)
                          return (
                            null === (t = n.variantChildren) ||
                              void 0 === t ||
                              t.add(e),
                            function () {
                              return n.variantChildren.delete(e);
                            }
                          );
                      },
                      sortNodePosition: function (e) {
                        return c && n === e.treeType
                          ? c(B.getInstance(), e.getInstance())
                          : 0;
                      },
                      getClosestVariantNode: function () {
                        return F
                          ? B
                          : null === p || void 0 === p
                          ? void 0
                          : p.getClosestVariantNode();
                      },
                      getLayoutId: function () {
                        return m.layoutId;
                      },
                      getInstance: function () {
                        return w;
                      },
                      getStaticValue: function (e) {
                        return E[e];
                      },
                      setStaticValue: function (e, t) {
                        return (E[e] = t);
                      },
                      getLatestValues: function () {
                        return E;
                      },
                      setVisibility: function (e) {
                        B.isVisible !== e &&
                          ((B.isVisible = e), B.scheduleRender());
                      },
                      makeTargetAnimatable: function (e, t) {
                        return void 0 === t && (t = !0), a(B, e, m, t);
                      },
                      measureViewportBox: function () {
                        return o(w, m);
                      },
                      addValue: function (e, t) {
                        B.hasValue(e) && B.removeValue(e),
                          T.set(e, t),
                          (E[e] = t.get()),
                          (function (e, t) {
                            var n = t.onChange(function (t) {
                                (E[e] = t), m.onUpdate && Z.update(R, !1, !0);
                              }),
                              r = t.onRenderRequest(B.scheduleRender);
                            P.set(e, function () {
                              n(), r();
                            });
                          })(e, t);
                      },
                      removeValue: function (e) {
                        var t;
                        T.delete(e),
                          null === (t = P.get(e)) || void 0 === t || t(),
                          P.delete(e),
                          delete E[e],
                          u(e, k);
                      },
                      hasValue: function (e) {
                        return T.has(e);
                      },
                      getValue: function (e, t) {
                        var n = T.get(e);
                        return (
                          void 0 === n &&
                            void 0 !== t &&
                            ((n = oe(t)), B.addValue(e, n)),
                          n
                        );
                      },
                      forEachValue: function (e) {
                        return T.forEach(e);
                      },
                      readValue: function (e) {
                        var n;
                        return null !== (n = E[e]) && void 0 !== n
                          ? n
                          : l(w, e, t);
                      },
                      setBaseTarget: function (e, t) {
                        L[e] = t;
                      },
                      getBaseTarget: function (e) {
                        if (i) {
                          var t = i(m, e);
                          if (void 0 !== t && !se(t)) return t;
                        }
                        return L[e];
                      },
                    },
                    C,
                  ),
                  {
                    build: function () {
                      return N(), k;
                    },
                    scheduleRender: function () {
                      Z.render(_, !1, !0);
                    },
                    syncRender: _,
                    setProps: function (e) {
                      (m = e),
                        C.updatePropListeners(e),
                        (O = (function (e, t, n) {
                          var r;
                          for (var i in t) {
                            var a = t[i],
                              o = n[i];
                            if (se(a)) e.addValue(i, a);
                            else if (se(o)) e.addValue(i, oe(a));
                            else if (o !== a)
                              if (e.hasValue(i)) {
                                var s = e.getValue(i);
                                !s.hasAnimated && s.set(a);
                              } else
                                e.addValue(
                                  i,
                                  oe(
                                    null !== (r = e.getStaticValue(i)) &&
                                      void 0 !== r
                                      ? r
                                      : a,
                                  ),
                                );
                          }
                          for (var i in n) void 0 === t[i] && e.removeValue(i);
                          return t;
                        })(B, d(m), O));
                    },
                    getProps: function () {
                      return m;
                    },
                    getVariant: function (e) {
                      var t;
                      return null === (t = m.variants) || void 0 === t
                        ? void 0
                        : t[e];
                    },
                    getDefaultTransition: function () {
                      return m.transition;
                    },
                    getTransformPagePoint: function () {
                      return m.transformPagePoint;
                    },
                    getVariantContext: function (e) {
                      if ((void 0 === e && (e = !1), e))
                        return null === p || void 0 === p
                          ? void 0
                          : p.getVariantContext();
                      if (!V) {
                        var t =
                          (null === p || void 0 === p
                            ? void 0
                            : p.getVariantContext()) || {};
                        return (
                          void 0 !== m.initial && (t.initial = m.initial), t
                        );
                      }
                      for (var n = {}, r = 0; r < eo; r++) {
                        var i = Za[r],
                          a = m[i];
                        (j(a) || !1 === a) && (n[i] = a);
                      }
                      return n;
                    },
                  },
                );
              return B;
            };
          },
          Za = v(['initial'], h(Pa), !1),
          eo = Za.length;
        function to(e) {
          return 'string' === typeof e && e.startsWith('var(--');
        }
        var no = /var\((--[a-zA-Z0-9-_]+),? ?([a-zA-Z0-9 ()%#.,-]+)?\)/;
        function ro(e, t, n) {
          void 0 === n && (n = 1),
            'Max CSS variable fallback depth detected in property "'.concat(
              e,
              '". This may indicate a circular fallback dependency.',
            );
          var r = h(
              (function (e) {
                var t = no.exec(e);
                if (!t) return [,];
                var n = h(t, 3);
                return [n[1], n[2]];
              })(e),
              2,
            ),
            i = r[0],
            a = r[1];
          if (i) {
            var o = window.getComputedStyle(t).getPropertyValue(i);
            return o ? o.trim() : to(a) ? ro(a, t, n + 1) : a;
          }
        }
        var io,
          ao = new Set([
            'width',
            'height',
            'top',
            'left',
            'right',
            'bottom',
            'x',
            'y',
          ]),
          oo = function (e) {
            return ao.has(e);
          },
          so = function (e, t) {
            e.set(t, !1), e.set(t);
          },
          lo = function (e) {
            return e === ke || e === De;
          };
        !(function (e) {
          (e.width = 'width'),
            (e.height = 'height'),
            (e.left = 'left'),
            (e.right = 'right'),
            (e.top = 'top'),
            (e.bottom = 'bottom');
        })(io || (io = {}));
        var uo = function (e, t) {
            return parseFloat(e.split(', ')[t]);
          },
          co = function (e, t) {
            return function (n, r) {
              var i = r.transform;
              if ('none' === i || !i) return 0;
              var a = i.match(/^matrix3d\((.+)\)$/);
              if (a) return uo(a[1], t);
              var o = i.match(/^matrix\((.+)\)$/);
              return o ? uo(o[1], e) : 0;
            };
          },
          fo = new Set(['x', 'y', 'z']),
          po = pr.filter(function (e) {
            return !fo.has(e);
          });
        var ho = {
            width: function (e, t) {
              var n = e.x,
                r = t.paddingLeft,
                i = void 0 === r ? '0' : r,
                a = t.paddingRight,
                o = void 0 === a ? '0' : a;
              return n.max - n.min - parseFloat(i) - parseFloat(o);
            },
            height: function (e, t) {
              var n = e.y,
                r = t.paddingTop,
                i = void 0 === r ? '0' : r,
                a = t.paddingBottom,
                o = void 0 === a ? '0' : a;
              return n.max - n.min - parseFloat(i) - parseFloat(o);
            },
            top: function (e, t) {
              var n = t.top;
              return parseFloat(n);
            },
            left: function (e, t) {
              var n = t.left;
              return parseFloat(n);
            },
            bottom: function (e, t) {
              var n = e.y,
                r = t.top;
              return parseFloat(r) + (n.max - n.min);
            },
            right: function (e, t) {
              var n = e.x,
                r = t.left;
              return parseFloat(r) + (n.max - n.min);
            },
            x: co(4, 13),
            y: co(5, 14),
          },
          vo = function (e, t, n, r) {
            void 0 === n && (n = {}),
              void 0 === r && (r = {}),
              (t = f({}, t)),
              (r = f({}, r));
            var i = Object.keys(t).filter(oo),
              a = [],
              o = !1,
              s = [];
            if (
              (i.forEach(function (i) {
                var l = e.getValue(i);
                if (e.hasValue(i)) {
                  var u,
                    c = n[i],
                    d = va(c),
                    f = t[i];
                  if (Kt(f)) {
                    var p = f.length,
                      h = null === f[0] ? 1 : 0;
                    (c = f[h]), (d = va(c));
                    for (var v = h; v < p; v++)
                      u ? va(f[v]) : (u = va(f[v])) === d || (lo(d) && lo(u));
                  } else u = va(f);
                  if (d !== u)
                    if (lo(d) && lo(u)) {
                      var m = l.get();
                      'string' === typeof m && l.set(parseFloat(m)),
                        'string' === typeof f
                          ? (t[i] = parseFloat(f))
                          : Array.isArray(f) &&
                            u === De &&
                            (t[i] = f.map(parseFloat));
                    } else
                      (null === d || void 0 === d ? void 0 : d.transform) &&
                      (null === u || void 0 === u ? void 0 : u.transform) &&
                      (0 === c || 0 === f)
                        ? 0 === c
                          ? l.set(u.transform(c))
                          : (t[i] = d.transform(f))
                        : (o ||
                            ((a = (function (e) {
                              var t = [];
                              return (
                                po.forEach(function (n) {
                                  var r = e.getValue(n);
                                  void 0 !== r &&
                                    (t.push([n, r.get()]),
                                    r.set(n.startsWith('scale') ? 1 : 0));
                                }),
                                t.length && e.syncRender(),
                                t
                              );
                            })(e)),
                            (o = !0)),
                          s.push(i),
                          (r[i] = void 0 !== r[i] ? r[i] : t[i]),
                          so(l, f));
                }
              }),
              s.length)
            ) {
              var l = (function (e, t, n) {
                var r = t.measureViewportBox(),
                  i = t.getInstance(),
                  a = getComputedStyle(i),
                  o = a.display,
                  s = {};
                'none' === o &&
                  t.setStaticValue('display', e.display || 'block'),
                  n.forEach(function (e) {
                    s[e] = ho[e](r, a);
                  }),
                  t.syncRender();
                var l = t.measureViewportBox();
                return (
                  n.forEach(function (n) {
                    var r = t.getValue(n);
                    so(r, s[n]), (e[n] = ho[n](l, a));
                  }),
                  e
                );
              })(t, e, s);
              return (
                a.length &&
                  a.forEach(function (t) {
                    var n = h(t, 2),
                      r = n[0],
                      i = n[1];
                    e.getValue(r).set(i);
                  }),
                e.syncRender(),
                { target: l, transitionEnd: r }
              );
            }
            return { target: t, transitionEnd: r };
          };
        function mo(e, t, n, r) {
          return (function (e) {
            return Object.keys(e).some(oo);
          })(t)
            ? vo(e, t, n, r)
            : { target: t, transitionEnd: r };
        }
        var go = function (e, t, n, r) {
          var i = (function (e, t, n) {
            var r,
              i = p(t, []),
              a = e.getInstance();
            if (!(a instanceof Element)) return { target: i, transitionEnd: n };
            for (var o in (n && (n = f({}, n)),
            e.forEachValue(function (e) {
              var t = e.get();
              if (to(t)) {
                var n = ro(t, a);
                n && e.set(n);
              }
            }),
            i)) {
              var s = i[o];
              if (to(s)) {
                var l = ro(s, a);
                l &&
                  ((i[o] = l),
                  n && ((null !== (r = n[o]) && void 0 !== r) || (n[o] = s)));
              }
            }
            return { target: i, transitionEnd: n };
          })(e, t, r);
          return mo(e, (t = i.target), n, (r = i.transitionEnd));
        };
        var yo = {
            treeType: 'dom',
            readValueFromInstance: function (e, t) {
              if (mr(t)) {
                var n = dn(t);
                return (n && n.default) || 0;
              }
              var r,
                i = ((r = e), window.getComputedStyle(r));
              return (Kr(t) ? i.getPropertyValue(t) : i[t]) || 0;
            },
            sortNodePosition: function (e, t) {
              return 2 & e.compareDocumentPosition(t) ? 1 : -1;
            },
            getBaseTarget: function (e, t) {
              var n;
              return null === (n = e.style) || void 0 === n ? void 0 : n[t];
            },
            measureViewportBox: function (e, t) {
              return Wa(e, t.transformPagePoint);
            },
            resetTransform: function (e, t, n) {
              var r = n.transformTemplate;
              (t.style.transform = r ? r({}, '') : 'none'), e.scheduleRender();
            },
            restoreTransform: function (e, t) {
              e.style.transform = t.style.transform;
            },
            removeValueFromRenderState: function (e, t) {
              var n = t.vars,
                r = t.style;
              delete n[e], delete r[e];
            },
            makeTargetAnimatable: function (e, t, n, r) {
              var i = n.transformValues;
              void 0 === r && (r = !0);
              var a = t.transition,
                o = t.transitionEnd,
                s = p(t, ['transition', 'transitionEnd']),
                l = (function (e, t, n) {
                  var r,
                    i,
                    a = {};
                  for (var o in e)
                    a[o] =
                      null !== (r = xa(o, t)) && void 0 !== r
                        ? r
                        : null === (i = n.getValue(o)) || void 0 === i
                        ? void 0
                        : i.get();
                  return a;
                })(s, a || {}, e);
              if (
                (i && (o && (o = i(o)), s && (s = i(s)), l && (l = i(l))), r)
              ) {
                !(function (e, t, n) {
                  var r,
                    i,
                    a,
                    o,
                    s = Object.keys(t).filter(function (t) {
                      return !e.hasValue(t);
                    }),
                    l = s.length;
                  if (l)
                    for (var u = 0; u < l; u++) {
                      var c = s[u],
                        d = t[c],
                        f = null;
                      Array.isArray(d) && (f = d[0]),
                        null === f &&
                          (f =
                            null !==
                              (i =
                                null !== (r = n[c]) && void 0 !== r
                                  ? r
                                  : e.readValue(c)) && void 0 !== i
                              ? i
                              : t[c]),
                        void 0 !== f &&
                          null !== f &&
                          ('string' === typeof f &&
                          (/^\-?\d*\.?\d+$/.test(f) || fa(f))
                            ? (f = parseFloat(f))
                            : !ga(f) && rt.test(d) && (f = fn(c, d)),
                          e.addValue(c, oe(f)),
                          (null !== (a = (o = n)[c]) && void 0 !== a) ||
                            (o[c] = f),
                          e.setBaseTarget(c, f));
                    }
                })(e, s, l);
                var u = go(e, s, l, o);
                (o = u.transitionEnd), (s = u.target);
              }
              return f({ transition: a, transitionEnd: o }, s);
            },
            scrapeMotionValuesFromProps: wi,
            build: function (e, t, n, r, i) {
              void 0 !== e.isVisible &&
                (t.style.visibility = e.isVisible ? 'visible' : 'hidden'),
                Zr(t, n, r, i.transformTemplate);
            },
            render: gi,
          },
          bo = Ja(yo),
          wo = Ja(
            f(f({}, yo), {
              getBaseTarget: function (e, t) {
                return e[t];
              },
              readValueFromInstance: function (e, t) {
                var n;
                return mr(t)
                  ? (null === (n = dn(t)) || void 0 === n
                      ? void 0
                      : n.default) || 0
                  : ((t = yi.has(t) ? t : mi(t)), e.getAttribute(t));
              },
              scrapeMotionValuesFromProps: xi,
              build: function (e, t, n, r, i) {
                di(t, n, r, i.transformTemplate);
              },
              render: bi,
            }),
          ),
          xo = function (e, t) {
            return Yr(e)
              ? wo(t, { enableHardwareAcceleration: !1 })
              : bo(t, { enableHardwareAcceleration: !0 });
          };
        function So(e, t) {
          return t.max === t.min ? 0 : (e / (t.max - t.min)) * 100;
        }
        var Eo = {
            correct: function (e, t) {
              if (!t.target) return e;
              if ('string' === typeof e) {
                if (!De.test(e)) return e;
                e = parseFloat(e);
              }
              var n = So(e, t.target.x),
                r = So(e, t.target.y);
              return ''.concat(n, '% ').concat(r, '%');
            },
          },
          ko = '_$css',
          Co = {
            correct: function (e, t) {
              var n = t.treeScale,
                r = t.projectionDelta,
                i = e,
                a = e.includes('var('),
                o = [];
              a &&
                (e = e.replace(no, function (e) {
                  return o.push(e), ko;
                }));
              var s = rt.parse(e);
              if (s.length > 5) return i;
              var l = rt.createTransformer(e),
                u = 'number' !== typeof s[0] ? 1 : 0,
                c = r.x.scale * n.x,
                d = r.y.scale * n.y;
              (s[0 + u] /= c), (s[1 + u] /= d);
              var f = ee(c, d, 0.5);
              'number' === typeof s[2 + u] && (s[2 + u] /= f),
                'number' === typeof s[3 + u] && (s[3 + u] /= f);
              var p = l(s);
              if (a) {
                var h = 0;
                p = p.replace(ko, function () {
                  var e = o[h];
                  return h++, e;
                });
              }
              return p;
            },
          },
          To = (function (e) {
            function t() {
              return (null !== e && e.apply(this, arguments)) || this;
            }
            return (
              d(t, e),
              (t.prototype.componentDidMount = function () {
                var e,
                  t = this,
                  n = this.props,
                  r = n.visualElement,
                  i = n.layoutGroup,
                  a = n.switchLayoutGroup,
                  o = n.layoutId,
                  s = r.projection;
                (e = Po),
                  Object.assign(ur, e),
                  s &&
                    ((null === i || void 0 === i ? void 0 : i.group) &&
                      i.group.add(s),
                    (null === a || void 0 === a ? void 0 : a.register) &&
                      o &&
                      a.register(s),
                    s.root.didUpdate(),
                    s.addEventListener('animationComplete', function () {
                      t.safeToRemove();
                    }),
                    s.setOptions(
                      f(f({}, s.options), {
                        onExitComplete: function () {
                          return t.safeToRemove();
                        },
                      }),
                    )),
                  (Sr.hasEverUpdated = !0);
              }),
              (t.prototype.getSnapshotBeforeUpdate = function (e) {
                var t = this,
                  n = this.props,
                  r = n.layoutDependency,
                  i = n.visualElement,
                  a = n.drag,
                  o = n.isPresent,
                  s = i.projection;
                return s
                  ? ((s.isPresent = o),
                    a || e.layoutDependency !== r || void 0 === r
                      ? s.willUpdate()
                      : this.safeToRemove(),
                    e.isPresent !== o &&
                      (o
                        ? s.promote()
                        : s.relegate() ||
                          Z.postRender(function () {
                            var e;
                            (null === (e = s.getStack()) || void 0 === e
                              ? void 0
                              : e.members.length) || t.safeToRemove();
                          })),
                    null)
                  : null;
              }),
              (t.prototype.componentDidUpdate = function () {
                var e = this.props.visualElement.projection;
                e &&
                  (e.root.didUpdate(),
                  !e.currentAnimation && e.isLead() && this.safeToRemove());
              }),
              (t.prototype.componentWillUnmount = function () {
                var e = this.props,
                  t = e.visualElement,
                  n = e.layoutGroup,
                  r = e.switchLayoutGroup,
                  i = t.projection;
                i &&
                  (i.scheduleCheckAfterUnmount(),
                  (null === n || void 0 === n ? void 0 : n.group) &&
                    n.group.remove(i),
                  (null === r || void 0 === r ? void 0 : r.deregister) &&
                    r.deregister(i));
              }),
              (t.prototype.safeToRemove = function () {
                var e = this.props.safeToRemove;
                null === e || void 0 === e || e();
              }),
              (t.prototype.render = function () {
                return null;
              }),
              t
            );
          })(r.Component);
        var Po = {
            borderRadius: f(f({}, Eo), {
              applyTo: [
                'borderTopLeftRadius',
                'borderTopRightRadius',
                'borderBottomLeftRadius',
                'borderBottomRightRadius',
              ],
            }),
            borderTopLeftRadius: Eo,
            borderTopRightRadius: Eo,
            borderBottomLeftRadius: Eo,
            borderBottomRightRadius: Eo,
            boxShadow: Co,
          },
          Oo = {
            measureLayout: function (e) {
              var t = h(sa(), 2),
                n = t[0],
                i = t[1],
                a = (0, r.useContext)(Ur);
              return r.createElement(
                To,
                f({}, e, {
                  layoutGroup: a,
                  switchLayoutGroup: (0, r.useContext)($r),
                  isPresent: n,
                  safeToRemove: i,
                }),
              );
            },
          },
          jo = Er({
            attachResizeListener: function (e, t) {
              return (
                e.addEventListener('resize', t, { passive: !0 }),
                function () {
                  return e.removeEventListener('resize', t);
                }
              );
            },
            measureScroll: function () {
              return {
                x:
                  document.documentElement.scrollLeft ||
                  document.body.scrollLeft,
                y:
                  document.documentElement.scrollTop || document.body.scrollTop,
              };
            },
          }),
          Lo = { current: void 0 },
          _o = Er({
            measureScroll: function (e) {
              return { x: e.scrollLeft, y: e.scrollTop };
            },
            defaultParent: function () {
              if (!Lo.current) {
                var e = new jo(0, {});
                e.mount(window),
                  e.setOptions({ layoutScroll: !0 }),
                  (Lo.current = e);
              }
              return Lo.current;
            },
            resetTransform: function (e, t) {
              e.style.transform = null !== t && void 0 !== t ? t : 'none';
            },
          }),
          Ao = f(f(f(f({}, Aa), oa), Qa), Oo),
          Mo = Wr(function (e, t) {
            return (function (e, t, n, r, i) {
              var a = t.forwardMotionProps,
                o = void 0 !== a && a,
                s = Yr(e) ? Pi : Oi;
              return f(f({}, s), {
                preloadedFeatures: n,
                useRender: hi(o),
                createVisualElement: r,
                projectionNodeConstructor: i,
                Component: e,
              });
            })(e, t, Ao, xo, _o);
          });
        function No(e) {
          e.animation;
          var t = e.x,
            n = e.y,
            r = (e.second, e.third, e.id),
            i = e.icon,
            a = e.text,
            o = t,
            s = n;
          return (0, l.jsx)('div', {
            className: 'value',
            style: {
              transform: 'translate(-50%, -50%) rotate('.concat(o, ')'),
            },
            children: (0, l.jsxs)(Mo.div, {
              className: 'value-group',
              style: {
                transform: 'translate(0px, 0px) rotate('.concat(s, ')'),
              },
              id: r,
              animate: {
                x: [null, 50, 0],
                rotate: [s, null],
                scale: [null, 1.2, 1],
                transition: { duration: 10, repeat: 1 / 0 },
              },
              children: [
                (0, l.jsx)(u, { icon: i, class: 'value-icon' }),
                (0, l.jsx)('p', { children: a }),
              ],
            }),
          });
        }
        function Ro(e) {
          return (0, l.jsx)('div', {
            className: 'logo '.concat(e.class),
            children: (0, l.jsx)(Mo.img, {
              src: e.logo,
              alt: 'logo',
              style: { width: e.width, height: e.height },
            }),
          });
        }
        var Io = JSON.parse(
            '[{"id":1,"title":"Managed IT","paragraph":"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Tempus quam pellentesque nec nam aliquam sem. Aliquet nec ullamcorper sit amet risus nullam eget. Urna nunc id cursus metus aliquam eleifend mi. Felis imperdiet proin fermentum leo vel orci porta non pulvinar. Ultrices in iaculis nunc sed augue. Malesuada pellentesque elit eget gravida cum sociis natoque penatibus. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Tempus quam pellentesque nec nam aliquam sem. Aliquet nec ullamcorper sit amet risus nullam eget. Urna nunc id cursus metus aliquam eleifend mi. Felis imperdiet proin fermentum leo vel orci porta non pulvinar. Ultrices in iaculis nunc sed augue. Malesuada pellentesque elit eget gravida cum sociis natoque penatibus.","icon":"/build/icons/iconManagedIT.svg","link":"services/managed-it","image":"/build/images/services/managed-it.webp"},{"id":2,"title":"CCTV/IP Surveillance Systems","paragraph":"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Vel elit scelerisque mauris pellentesque pulvinar pellentesque habitant. Massa sapien faucibus et molestie ac feugiat sed. Vitae congue eu consequat ac felis donec et. Scelerisque viverra mauris in aliquam sem. Ullamcorper sit amet risus nullam eget felis eget. Hac habitasse platea dictumst vestibulum rhoncus est pellentesque elit ullamcorper.","icon":"/build/icons/iconSurveillanceSystems.svg","link":"services/surveillance-systems","image":"/build/images/services/surveillance-systems.webp"},{"id":3,"title":"Audio/Visual","paragraph":"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Rhoncus dolor purus non enim praesent elementum facilisis. Tincidunt praesent semper feugiat nibh sed pulvinar proin. Varius quam quisque id diam vel quam elementum. Fermentum dui faucibus in ornare quam viverra orci. Ornare arcu dui vivamus arcu. Eget est lorem ipsum dolor sit amet consectetur adipiscing elit.","icon":"/build/icons/iconAudioVisual.svg","link":"services/audio-visual","image":"/build/images/services/audio-visual.webp"},{"id":4,"title":"Cloud Services","paragraph":"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Dolor sit amet consectetur adipiscing elit ut aliquam. Blandit turpis cursus in hac habitasse platea. Tortor vitae purus faucibus ornare. Vitae auctor eu augue ut lectus arcu. Vel fringilla est ullamcorper eget nulla facilisi etiam dignissim. Aliquet risus feugiat in ante metus dictum at tempor commodo.","icon":"/build/icons/iconCloudServices.svg","link":"services/cloud-services","image":"/build/images/services/cloud-services.webp"},{"id":5,"title":"Cybersecurity","paragraph":"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Magna eget est lorem ipsum. Ut enim blandit volutpat maecenas volutpat. Nulla facilisi morbi tempus iaculis. Ut faucibus pulvinar elementum integer enim neque volutpat. Molestie at elementum eu facilisis sed odio morbi quis. Faucibus interdum posuere lorem ipsum dolor sit amet consectetur adipiscing. Amet mattis vulputate enim nulla.","icon":"/build/icons/iconCybersecurity.svg","link":"services/cybersecurity","image":"/build/images/services/cybersecurity.webp"},{"id":6,"title":"VOIP","paragraph":"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Risus feugiat in ante metus dictum at tempor. Habitant morbi tristique senectus et netus et. Eu tincidunt tortor aliquam nulla facilisi cras. Bibendum neque egestas congue quisque egestas. Egestas dui id ornare arcu odio ut sem.","icon":"/build/icons//iconVOIP.svg","link":"services/voip","image":"/build/images/services/voip.webp"},{"id":7,"title":"Networking","paragraph":"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Maecenas sed enim ut sem viverra aliquet eget sit. Cursus eget nunc scelerisque viverra. Non tellus orci ac auctor augue mauris. Vitae auctor eu augue ut lectus arcu bibendum at. Cursus turpis massa tincidunt dui ut ornare lectus sit amet. Faucibus pulvinar elementum integer enim neque volutpat ac tincidunt vitae. Donec adipiscing tristique risus nec feugiat in fermentum posuere.","icon":"/build/icons/iconNetworking.svg","link":"services/networking","image":"/build/images/services/networking.webp"},{"id":8,"title":"Smart Home Automation","paragraph":"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Maecenas sed enim ut sem viverra aliquet eget sit. Cursus eget nunc scelerisque viverra. Non tellus orci ac auctor augue mauris. Vitae auctor eu augue ut lectus arcu bibendum at. Cursus turpis massa tincidunt dui ut ornare lectus sit amet. Faucibus pulvinar elementum integer enim neque volutpat ac tincidunt vitae. Donec adipiscing tristique risus nec feugiat in fermentum posuere.","icon":"/build/icons/iconSmarthome.svg","link":"services/smarthome-automation","image":"/build/images/services/smarthome-automation.webp"}]',
          ),
          Do = JSON.parse(
            '[{"id":1,"title":"assistance","icon":{"dark":"/build/icons/values/assistanceIconDarkBg.svg","light":"/build/icons/values/assistanceIconLightBg.svg"},"coordonates":{"x":"15deg","y":"-15deg"},"animation":"animateAssistance","rotate":{"second":15,"third":-25}},{"id":2,"title":"quality","icon":{"dark":"/build/icons/values/qualityIconDarkBg.svg","light":"/build/icons/values/qualityIconLightBg.svg"},"coordonates":{"x":"75deg","y":"-75deg"},"animation":"animateQuality","rotate":{"second":-45,"third":-85}},{"id":3,"title":"support","icon":{"dark":"/build/icons/values/supportIconDarkBg.svg","light":"/build/icons/values/supportIconLightBg.svg"},"coordonates":{"x":"135deg","y":"-135deg"},"animation":"animateSupport","rotate":{"second":-105,"third":-145}},{"id":4,"title":"relationship","icon":{"dark":"/build/icons/values/relationshipIconDarkBg.svg","light":"/build/icons/values/relationshipIconLightBg.svg"},"coordonates":{"x":"195deg","y":"-195deg"},"animation":"animateRelationship","rotate":{"second":-1655,"third":-205}},{"id":5,"title":"guidance","icon":{"dark":"/build/icons/values/guidanceIconDarkBg.svg","light":"/build/icons/values/guidanceIconLightBg.svg"},"coordonates":{"x":"255deg","y":"-255deg"},"animation":"animateGuidance","rotate":{"second":-225,"third":-265}},{"id":6,"title":"solution","icon":{"dark":"/build/icons/values/solutionIconDarkBg.svg","light":"/build/icons/values/solutionIconLightBg.svg"},"coordonates":{"x":"315deg","y":"-315deg"},"animation":"animateSolution","rotate":{"second":-284,"third":-325}}]',
          ),
          zo = n(4805),
          Vo = (0, r.createContext)(),
          Fo = function (e) {
            var t = (0, zo.useMediaQuery)({ query: '(min-width: 0px)' }),
              n = (0, zo.useMediaQuery)({ query: '(min-width: 576px)' }),
              i = (0, zo.useMediaQuery)({ query: '(min-width: 768px)' }),
              a = (0, zo.useMediaQuery)({ query: '(min-width: 992px)' }),
              o = (0, zo.useMediaQuery)({ query: '(min-width: 1200px)' }),
              u = (0, zo.useMediaQuery)({ query: '(min-width: 1400px)' }),
              c = s((0, r.useState)('light'), 2),
              d = c[0],
              f = c[1],
              p = s((0, r.useState)(null), 2),
              h = p[0],
              v = p[1],
              m = s((0, r.useState)(null), 2),
              g = m[0],
              y = m[1],
              b = s((0, r.useState)('/'), 2),
              w = b[0],
              x = b[1],
              S = s((0, r.useState)(null), 2),
              E = S[0],
              k = S[1],
              C = s((0, r.useState)(''), 2),
              T = C[0],
              P = C[1],
              O = s((0, r.useState)(''), 2),
              j = O[0],
              L = O[1],
              _ = s((0, r.useState)(''), 2),
              A = _[0],
              M = _[1],
              N = s((0, r.useState)(!1), 2),
              R = N[0],
              I = N[1];
            return (0, l.jsx)(Vo.Provider, {
              value: {
                browserHistoryObj: [w, x],
                portofolioPageIdObj: [E, k],
                changePortofolioPageId: function (e) {
                  k(e);
                },
                themeColorObj: [d, f],
                toggleSwitcherObj: [h, v],
                isMenuOpenObj: [g, y],
                mobileMenuOpenObj: [R, I],
                portfolioData: Io,
                valuesData: Do,
                isXS: t,
                isSM: n,
                isMD: i,
                isLG: a,
                isXL: o,
                isXXL: u,
                portfolioPageTitleObj: [T, P],
                portfolioPageIconObj: [j, L],
                portfolioPageParagraphObj: [A, M],
              },
              children: e.children,
            });
          };
        var Bo =
          n.p +
          'static/media/logoSecondaryColorFull.9f8e760b6b79ecffcbc62a7d9ecc0665.svg';
        var Uo =
          n.p +
          'static/media/logoPrimaryColorFull.16943c205ff5cc91d8037ae1dce32732.svg';
        function $o() {
          var e = (0, r.useContext)(Vo).isLG,
            t = (0, r.useContext)(Vo).valuesData,
            n = s((0, r.useContext)(Vo).themeColorObj, 2),
            i = n[0];
          n[1];
          return (0, l.jsxs)('section', {
            className: 'values full-vh',
            id: 'values',
            children: [
              t.map(function (e) {
                return (0,
                l.jsx)(No, { icon: 'light' === i ? e.icon.light : e.icon.dark, text: e.title, x: e.coordonates.x, y: e.coordonates.y, animation: e.animation, id: e.title, second: e.rotate.second, third: e.rotate.third }, e.id);
              }),
              (0, l.jsx)(Mo.div, {
                className: 'logo-value',
                animate: {
                  scale: [null, 1.2, 1],
                  transition: { duration: 10, repeat: 1 / 0 },
                },
                children: (0, l.jsx)(Ro, {
                  logo: 'light' === i ? Uo : Bo,
                  width: 'auto',
                  height: e ? '64px' : '40px',
                  class: 'logo-value',
                }),
              }),
            ],
          });
        }
        function qo(e) {
          return (0, l.jsx)('h1', { children: e.h1 });
        }
        function Ho(e) {
          return (0, l.jsx)('p', {
            className: 'paragraph',
            children: e.paragraph,
          });
        }
        function Wo(e) {
          return (0, l.jsxs)('div', {
            className: 'section-intro',
            children: [
              (0, l.jsx)(qo, { h1: e.h1 }),
              (0, l.jsx)(Ho, { paragraph: e.paragraph }),
            ],
          });
        }
        var Go = '#1d1934',
          Yo = '#1bb2b2',
          Xo = '#fbfbfb',
          Qo = 'rgba(29,25,52,0.7)',
          Ko = 'rgba(240,240,240,0.7)';
        function Jo(e) {
          e.id;
          var t = e.icon,
            n = e.title,
            i = s((0, r.useContext)(Vo).themeColorObj, 2),
            a = i[0];
          i[1];
          return (0, l.jsxs)('div', {
            className: 'card',
            style:
              'light' === a ? { backgroundColor: Ko } : { backgroundColor: Qo },
            children: [
              (0, l.jsx)('div', {
                className: 'card-image-socket',
                children: (0, l.jsx)('img', { src: t, alt: 'icon' }),
              }),
              (0, l.jsx)('div', {
                className: 'paragraph-socket',
                children: (0, l.jsx)('p', { children: n }),
              }),
            ],
          });
        }
        var Zo =
          n.p + 'static/media/sShape.b8d698da0288bb9dfaac0e33c02eb2de.svg';
        function es() {
          return (
            (es =
              Object.assign ||
              function (e) {
                for (var t = 1; t < arguments.length; t++) {
                  var n = arguments[t];
                  for (var r in n)
                    Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
                }
                return e;
              }),
            es.apply(this, arguments)
          );
        }
        var ts,
          ns = ts || (ts = {});
        (ns.Pop = 'POP'), (ns.Push = 'PUSH'), (ns.Replace = 'REPLACE');
        var rs = function (e) {
          return e;
        };
        function is(e) {
          e.preventDefault(), (e.returnValue = '');
        }
        function as() {
          var e = [];
          return {
            get length() {
              return e.length;
            },
            push: function (t) {
              return (
                e.push(t),
                function () {
                  e = e.filter(function (e) {
                    return e !== t;
                  });
                }
              );
            },
            call: function (t) {
              e.forEach(function (e) {
                return e && e(t);
              });
            },
          };
        }
        function os() {
          return Math.random().toString(36).substr(2, 8);
        }
        function ss(e) {
          var t = e.pathname;
          t = void 0 === t ? '/' : t;
          var n = e.search;
          return (
            (n = void 0 === n ? '' : n),
            (e = void 0 === (e = e.hash) ? '' : e),
            n && '?' !== n && (t += '?' === n.charAt(0) ? n : '?' + n),
            e && '#' !== e && (t += '#' === e.charAt(0) ? e : '#' + e),
            t
          );
        }
        function ls(e) {
          var t = {};
          if (e) {
            var n = e.indexOf('#');
            0 <= n && ((t.hash = e.substr(n)), (e = e.substr(0, n))),
              0 <= (n = e.indexOf('?')) &&
                ((t.search = e.substr(n)), (e = e.substr(0, n))),
              e && (t.pathname = e);
          }
          return t;
        }
        function us(e, t) {
          if (!e) throw new Error(t);
        }
        var cs = (0, r.createContext)(null);
        var ds = (0, r.createContext)(null);
        var fs = (0, r.createContext)({ outlet: null, matches: [] });
        function ps(e) {
          return (function (e) {
            var t = (0, r.useContext)(fs).outlet;
            if (t) return (0, r.createElement)(Ss.Provider, { value: e }, t);
            return t;
          })(e.context);
        }
        function hs(e) {
          us(!1);
        }
        function vs(e) {
          var t = e.basename,
            n = void 0 === t ? '/' : t,
            i = e.children,
            a = void 0 === i ? null : i,
            o = e.location,
            s = e.navigationType,
            l = void 0 === s ? ts.Pop : s,
            u = e.navigator,
            c = e.static,
            d = void 0 !== c && c;
          ys() && us(!1);
          var f = Rs(n),
            p = (0, r.useMemo)(
              function () {
                return { basename: f, navigator: u, static: d };
              },
              [f, u, d],
            );
          'string' === typeof o && (o = ls(o));
          var h = o,
            v = h.pathname,
            m = void 0 === v ? '/' : v,
            g = h.search,
            y = void 0 === g ? '' : g,
            b = h.hash,
            w = void 0 === b ? '' : b,
            x = h.state,
            S = void 0 === x ? null : x,
            E = h.key,
            k = void 0 === E ? 'default' : E,
            C = (0, r.useMemo)(
              function () {
                var e = Ms(m, f);
                return null == e
                  ? null
                  : { pathname: e, search: y, hash: w, state: S, key: k };
              },
              [f, m, y, w, S, k],
            );
          return null == C
            ? null
            : (0, r.createElement)(
                cs.Provider,
                { value: p },
                (0, r.createElement)(ds.Provider, {
                  children: a,
                  value: { location: C, navigationType: l },
                }),
              );
        }
        function ms(e) {
          var t = e.children,
            n = e.location;
          return (function (e, t) {
            ys() || us(!1);
            var n = (0, r.useContext)(fs).matches,
              i = n[n.length - 1],
              a = i ? i.params : {},
              o = (i && i.pathname, i ? i.pathnameBase : '/');
            i && i.route;
            0;
            var s,
              l = bs();
            if (t) {
              var u,
                c = 'string' === typeof t ? ls(t) : t;
              '/' === o ||
                (null == (u = c.pathname) ? void 0 : u.startsWith(o)) ||
                us(!1),
                (s = c);
            } else s = l;
            var d = s.pathname || '/',
              f = '/' === o ? d : d.slice(o.length) || '/',
              p = (function (e, t, n) {
                void 0 === n && (n = '/');
                var r = Ms(
                  ('string' === typeof t ? ls(t) : t).pathname || '/',
                  n,
                );
                if (null == r) return null;
                var i = Cs(e);
                !(function (e) {
                  e.sort(function (e, t) {
                    return e.score !== t.score
                      ? t.score - e.score
                      : (function (e, t) {
                          var n =
                            e.length === t.length &&
                            e.slice(0, -1).every(function (e, n) {
                              return e === t[n];
                            });
                          return n ? e[e.length - 1] - t[t.length - 1] : 0;
                        })(
                          e.routesMeta.map(function (e) {
                            return e.childrenIndex;
                          }),
                          t.routesMeta.map(function (e) {
                            return e.childrenIndex;
                          }),
                        );
                  });
                })(i);
                for (var a = null, o = 0; null == a && o < i.length; ++o)
                  a = js(i[o], r);
                return a;
              })(e, { pathname: f });
            0;
            return Ls(
              p &&
                p.map(function (e) {
                  return Object.assign({}, e, {
                    params: Object.assign({}, a, e.params),
                    pathname: Ns([o, e.pathname]),
                    pathnameBase:
                      '/' === e.pathnameBase ? o : Ns([o, e.pathnameBase]),
                  });
                }),
              n,
            );
          })(ks(t), n);
        }
        function gs(e) {
          ys() || us(!1);
          var t = (0, r.useContext)(cs),
            n = t.basename,
            i = t.navigator,
            a = Es(e),
            o = a.hash,
            s = a.pathname,
            l = a.search,
            u = s;
          if ('/' !== n) {
            var c = (function (e) {
                return '' === e || '' === e.pathname
                  ? '/'
                  : 'string' === typeof e
                  ? ls(e).pathname
                  : e.pathname;
              })(e),
              d = null != c && c.endsWith('/');
            u = '/' === s ? n + (d ? '/' : '') : Ns([n, s]);
          }
          return i.createHref({ pathname: u, search: l, hash: o });
        }
        function ys() {
          return null != (0, r.useContext)(ds);
        }
        function bs() {
          return ys() || us(!1), (0, r.useContext)(ds).location;
        }
        function ws(e) {
          ys() || us(!1);
          var t = bs().pathname;
          return (0, r.useMemo)(
            function () {
              return _s(e, t);
            },
            [t, e],
          );
        }
        function xs() {
          ys() || us(!1);
          var e = (0, r.useContext)(cs),
            t = e.basename,
            n = e.navigator,
            i = (0, r.useContext)(fs).matches,
            a = bs().pathname,
            o = JSON.stringify(
              i.map(function (e) {
                return e.pathnameBase;
              }),
            ),
            s = (0, r.useRef)(!1);
          return (
            (0, r.useEffect)(function () {
              s.current = !0;
            }),
            (0, r.useCallback)(
              function (e, r) {
                if ((void 0 === r && (r = {}), s.current))
                  if ('number' !== typeof e) {
                    var i = As(e, JSON.parse(o), a);
                    '/' !== t && (i.pathname = Ns([t, i.pathname])),
                      (r.replace ? n.replace : n.push)(i, r.state);
                  } else n.go(e);
              },
              [t, n, o, a],
            )
          );
        }
        var Ss = (0, r.createContext)(null);
        function Es(e) {
          var t = (0, r.useContext)(fs).matches,
            n = bs().pathname,
            i = JSON.stringify(
              t.map(function (e) {
                return e.pathnameBase;
              }),
            );
          return (0, r.useMemo)(
            function () {
              return As(e, JSON.parse(i), n);
            },
            [e, i, n],
          );
        }
        function ks(e) {
          var t = [];
          return (
            r.Children.forEach(e, function (e) {
              if ((0, r.isValidElement)(e))
                if (e.type !== r.Fragment) {
                  e.type !== hs && us(!1);
                  var n = {
                    caseSensitive: e.props.caseSensitive,
                    element: e.props.element,
                    index: e.props.index,
                    path: e.props.path,
                  };
                  e.props.children && (n.children = ks(e.props.children)),
                    t.push(n);
                } else t.push.apply(t, ks(e.props.children));
            }),
            t
          );
        }
        function Cs(e, t, n, r) {
          return (
            void 0 === t && (t = []),
            void 0 === n && (n = []),
            void 0 === r && (r = ''),
            e.forEach(function (e, i) {
              var a = {
                relativePath: e.path || '',
                caseSensitive: !0 === e.caseSensitive,
                childrenIndex: i,
                route: e,
              };
              a.relativePath.startsWith('/') &&
                (a.relativePath.startsWith(r) || us(!1),
                (a.relativePath = a.relativePath.slice(r.length)));
              var o = Ns([r, a.relativePath]),
                s = n.concat(a);
              e.children &&
                e.children.length > 0 &&
                (!0 === e.index && us(!1), Cs(e.children, t, s, o)),
                (null != e.path || e.index) &&
                  t.push({ path: o, score: Os(o, e.index), routesMeta: s });
            }),
            t
          );
        }
        var Ts = /^:\w+$/,
          Ps = function (e) {
            return '*' === e;
          };
        function Os(e, t) {
          var n = e.split('/'),
            r = n.length;
          return (
            n.some(Ps) && (r += -2),
            t && (r += 2),
            n
              .filter(function (e) {
                return !Ps(e);
              })
              .reduce(function (e, t) {
                return e + (Ts.test(t) ? 3 : '' === t ? 1 : 10);
              }, r)
          );
        }
        function js(e, t) {
          for (
            var n = e.routesMeta, r = {}, i = '/', a = [], o = 0;
            o < n.length;
            ++o
          ) {
            var s = n[o],
              l = o === n.length - 1,
              u = '/' === i ? t : t.slice(i.length) || '/',
              c = _s(
                {
                  path: s.relativePath,
                  caseSensitive: s.caseSensitive,
                  end: l,
                },
                u,
              );
            if (!c) return null;
            Object.assign(r, c.params);
            var d = s.route;
            a.push({
              params: r,
              pathname: Ns([i, c.pathname]),
              pathnameBase: Ns([i, c.pathnameBase]),
              route: d,
            }),
              '/' !== c.pathnameBase && (i = Ns([i, c.pathnameBase]));
          }
          return a;
        }
        function Ls(e, t) {
          return (
            void 0 === t && (t = []),
            null == e
              ? null
              : e.reduceRight(function (n, i, a) {
                  return (0,
                  r.createElement)(fs.Provider, { children: void 0 !== i.route.element ? i.route.element : (0, r.createElement)(ps, null), value: { outlet: n, matches: t.concat(e.slice(0, a + 1)) } });
                }, null)
          );
        }
        function _s(e, t) {
          'string' === typeof e &&
            (e = { path: e, caseSensitive: !1, end: !0 });
          var n = (function (e, t, n) {
              void 0 === t && (t = !1);
              void 0 === n && (n = !0);
              var r = [],
                i =
                  '^' +
                  e
                    .replace(/\/*\*?$/, '')
                    .replace(/^\/*/, '/')
                    .replace(/[\\.*+^$?{}|()[\]]/g, '\\$&')
                    .replace(/:(\w+)/g, function (e, t) {
                      return r.push(t), '([^\\/]+)';
                    });
              e.endsWith('*')
                ? (r.push('*'),
                  (i +=
                    '*' === e || '/*' === e ? '(.*)$' : '(?:\\/(.+)|\\/*)$'))
                : (i += n ? '\\/*$' : '(?:\\b|\\/|$)');
              return [new RegExp(i, t ? void 0 : 'i'), r];
            })(e.path, e.caseSensitive, e.end),
            r = s(n, 2),
            i = r[0],
            a = r[1],
            o = t.match(i);
          if (!o) return null;
          var l = o[0],
            u = l.replace(/(.)\/+$/, '$1'),
            c = o.slice(1),
            d = a.reduce(function (e, t, n) {
              if ('*' === t) {
                var r = c[n] || '';
                u = l.slice(0, l.length - r.length).replace(/(.)\/+$/, '$1');
              }
              return (
                (e[t] = (function (e, t) {
                  try {
                    return decodeURIComponent(e);
                  } catch (n) {
                    return e;
                  }
                })(c[n] || '')),
                e
              );
            }, {});
          return { params: d, pathname: l, pathnameBase: u, pattern: e };
        }
        function As(e, t, n) {
          var r,
            i = 'string' === typeof e ? ls(e) : e,
            a = '' === e || '' === i.pathname ? '/' : i.pathname;
          if (null == a) r = n;
          else {
            var o = t.length - 1;
            if (a.startsWith('..')) {
              for (var s = a.split('/'); '..' === s[0]; ) s.shift(), (o -= 1);
              i.pathname = s.join('/');
            }
            r = o >= 0 ? t[o] : '/';
          }
          var l = (function (e, t) {
            void 0 === t && (t = '/');
            var n = 'string' === typeof e ? ls(e) : e,
              r = n.pathname,
              i = n.search,
              a = void 0 === i ? '' : i,
              o = n.hash,
              s = void 0 === o ? '' : o,
              l = r
                ? r.startsWith('/')
                  ? r
                  : (function (e, t) {
                      var n = t.replace(/\/+$/, '').split('/');
                      return (
                        e.split('/').forEach(function (e) {
                          '..' === e
                            ? n.length > 1 && n.pop()
                            : '.' !== e && n.push(e);
                        }),
                        n.length > 1 ? n.join('/') : '/'
                      );
                    })(r, t)
                : t;
            return { pathname: l, search: Is(a), hash: Ds(s) };
          })(i, r);
          return (
            a &&
              '/' !== a &&
              a.endsWith('/') &&
              !l.pathname.endsWith('/') &&
              (l.pathname += '/'),
            l
          );
        }
        function Ms(e, t) {
          if ('/' === t) return e;
          if (!e.toLowerCase().startsWith(t.toLowerCase())) return null;
          var n = e.charAt(t.length);
          return n && '/' !== n ? null : e.slice(t.length) || '/';
        }
        var Ns = function (e) {
            return e.join('/').replace(/\/\/+/g, '/');
          },
          Rs = function (e) {
            return e.replace(/\/+$/, '').replace(/^\/*/, '/');
          },
          Is = function (e) {
            return e && '?' !== e ? (e.startsWith('?') ? e : '?' + e) : '';
          },
          Ds = function (e) {
            return e && '#' !== e ? (e.startsWith('#') ? e : '#' + e) : '';
          };
        function zs() {
          return (
            (zs =
              Object.assign ||
              function (e) {
                for (var t = 1; t < arguments.length; t++) {
                  var n = arguments[t];
                  for (var r in n)
                    Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
                }
                return e;
              }),
            zs.apply(this, arguments)
          );
        }
        function Vs(e, t) {
          if (null == e) return {};
          var n,
            r,
            i = {},
            a = Object.keys(e);
          for (r = 0; r < a.length; r++)
            (n = a[r]), t.indexOf(n) >= 0 || (i[n] = e[n]);
          return i;
        }
        var Fs = [
          'onClick',
          'reloadDocument',
          'replace',
          'state',
          'target',
          'to',
        ];
        function Bs(e) {
          var t = e.basename,
            n = e.children,
            i = e.window,
            a = (0, r.useRef)();
          null == a.current &&
            (a.current = (function (e) {
              function t() {
                var e = o.location,
                  t = s.state || {};
                return [
                  t.idx,
                  rs({
                    pathname: e.pathname,
                    search: e.search,
                    hash: e.hash,
                    state: t.usr || null,
                    key: t.key || 'default',
                  }),
                ];
              }
              function n(e) {
                return 'string' === typeof e ? e : ss(e);
              }
              function r(e, t) {
                return (
                  void 0 === t && (t = null),
                  rs(
                    es(
                      { pathname: d.pathname, hash: '', search: '' },
                      'string' === typeof e ? ls(e) : e,
                      { state: t, key: os() },
                    ),
                  )
                );
              }
              function i(e) {
                (u = e),
                  (e = t()),
                  (c = e[0]),
                  (d = e[1]),
                  f.call({ action: u, location: d });
              }
              function a(e) {
                s.go(e);
              }
              void 0 === e && (e = {});
              var o = void 0 === (e = e.window) ? document.defaultView : e,
                s = o.history,
                l = null;
              o.addEventListener('popstate', function () {
                if (l) p.call(l), (l = null);
                else {
                  var e = ts.Pop,
                    n = t(),
                    r = n[0];
                  if (((n = n[1]), p.length)) {
                    if (null != r) {
                      var o = c - r;
                      o &&
                        ((l = {
                          action: e,
                          location: n,
                          retry: function () {
                            a(-1 * o);
                          },
                        }),
                        a(o));
                    }
                  } else i(e);
                }
              });
              var u = ts.Pop,
                c = (e = t())[0],
                d = e[1],
                f = as(),
                p = as();
              return (
                null == c &&
                  ((c = 0), s.replaceState(es({}, s.state, { idx: c }), '')),
                {
                  get action() {
                    return u;
                  },
                  get location() {
                    return d;
                  },
                  createHref: n,
                  push: function e(t, a) {
                    var l = ts.Push,
                      u = r(t, a);
                    if (
                      !p.length ||
                      (p.call({
                        action: l,
                        location: u,
                        retry: function () {
                          e(t, a);
                        },
                      }),
                      0)
                    ) {
                      var d = [{ usr: u.state, key: u.key, idx: c + 1 }, n(u)];
                      (u = d[0]), (d = d[1]);
                      try {
                        s.pushState(u, '', d);
                      } catch (f) {
                        o.location.assign(d);
                      }
                      i(l);
                    }
                  },
                  replace: function e(t, a) {
                    var o = ts.Replace,
                      l = r(t, a);
                    (p.length &&
                      (p.call({
                        action: o,
                        location: l,
                        retry: function () {
                          e(t, a);
                        },
                      }),
                      1)) ||
                      ((l = [{ usr: l.state, key: l.key, idx: c }, n(l)]),
                      s.replaceState(l[0], '', l[1]),
                      i(o));
                  },
                  go: a,
                  back: function () {
                    a(-1);
                  },
                  forward: function () {
                    a(1);
                  },
                  listen: function (e) {
                    return f.push(e);
                  },
                  block: function (e) {
                    var t = p.push(e);
                    return (
                      1 === p.length && o.addEventListener('beforeunload', is),
                      function () {
                        t(),
                          p.length || o.removeEventListener('beforeunload', is);
                      }
                    );
                  },
                }
              );
            })({ window: i }));
          var o = a.current,
            l = s(
              (0, r.useState)({ action: o.action, location: o.location }),
              2,
            ),
            u = l[0],
            c = l[1];
          return (
            (0, r.useLayoutEffect)(
              function () {
                return o.listen(c);
              },
              [o],
            ),
            (0, r.createElement)(vs, {
              basename: t,
              children: n,
              location: u.location,
              navigationType: u.action,
              navigator: o,
            })
          );
        }
        var Us = (0, r.forwardRef)(function (e, t) {
          var n = e.onClick,
            i = e.reloadDocument,
            a = e.replace,
            o = void 0 !== a && a,
            s = e.state,
            l = e.target,
            u = e.to,
            c = Vs(e, Fs),
            d = gs(u),
            f = (function (e, t) {
              var n = void 0 === t ? {} : t,
                i = n.target,
                a = n.replace,
                o = n.state,
                s = xs(),
                l = bs(),
                u = Es(e);
              return (0, r.useCallback)(
                function (t) {
                  if (
                    0 === t.button &&
                    (!i || '_self' === i) &&
                    !(function (e) {
                      return !!(
                        e.metaKey ||
                        e.altKey ||
                        e.ctrlKey ||
                        e.shiftKey
                      );
                    })(t)
                  ) {
                    t.preventDefault();
                    var n = !!a || ss(l) === ss(u);
                    s(e, { replace: n, state: o });
                  }
                },
                [l, s, u, a, o, i, e],
              );
            })(u, { replace: o, state: s, target: l });
          return (0, r.createElement)(
            'a',
            zs({}, c, {
              href: d,
              onClick: function (e) {
                n && n(e), e.defaultPrevented || i || f(e);
              },
              ref: t,
              target: l,
            }),
          );
        });
        function $s() {
          var e = (0, r.useContext)(Vo).portfolioData,
            t = s((0, r.useContext)(Vo).portfolioPageTitleObj, 2),
            n = (t[0], t[1]),
            i = s((0, r.useContext)(Vo).portfolioPageIconObj, 2),
            a = (i[0], i[1]),
            o = s((0, r.useContext)(Vo).portfolioPageParagraphObj, 2),
            c = (o[0], o[1]),
            d = (0, r.useContext)(Vo).changePortofolioPageId;
          return (0, l.jsxs)('section', {
            className: 'portfolio',
            id: 'services',
            children: [
              (0, l.jsx)(u, { icon: Zo, class: 's-shape-up' }),
              (0, l.jsx)(Wo, {
                h1: 'our services',
                paragraph:
                  'Lorem ipsum dolor sit amet, consectetur adipiscing elit. In pellentesque egestas nunc, tincidunt aliquam sit aliquet aliquam.',
              }),
              e.map(function (e) {
                return (0, l.jsx)(Us, {
                  to: { pathname: ''.concat(e.link) },
                  state: { from: 'mystate' },
                  onClick: function () {
                    n(e.title), a(e.icon), c(e.paragraph), d(e.id);
                  },
                  className: 'card-link',
                  children: (0, l.jsx)(
                    Jo,
                    { id: e.id, icon: e.icon, title: e.title },
                    e.id,
                  ),
                });
              }),
            ],
          });
        }
        function qs(e) {
          return (0, l.jsx)('div', {
            className: 'slide',
            children: (0, l.jsx)('img', { src: e.icon, alt: 'slide' }),
          });
        }
        function Hs(e, t) {
          if (null == e) return {};
          var n,
            r,
            i = (function (e, t) {
              if (null == e) return {};
              var n,
                r,
                i = {},
                a = Object.keys(e);
              for (r = 0; r < a.length; r++)
                (n = a[r]), t.indexOf(n) >= 0 || (i[n] = e[n]);
              return i;
            })(e, t);
          if (Object.getOwnPropertySymbols) {
            var a = Object.getOwnPropertySymbols(e);
            for (r = 0; r < a.length; r++)
              (n = a[r]),
                t.indexOf(n) >= 0 ||
                  (Object.prototype.propertyIsEnumerable.call(e, n) &&
                    (i[n] = e[n]));
          }
          return i;
        }
        function Ws(e, t) {
          if (!(e instanceof t))
            throw new TypeError('Cannot call a class as a function');
        }
        function Gs(e, t) {
          for (var n = 0; n < t.length; n++) {
            var r = t[n];
            (r.enumerable = r.enumerable || !1),
              (r.configurable = !0),
              'value' in r && (r.writable = !0),
              Object.defineProperty(e, r.key, r);
          }
        }
        function Ys(e, t, n) {
          return (
            t && Gs(e.prototype, t),
            n && Gs(e, n),
            Object.defineProperty(e, 'prototype', { writable: !1 }),
            e
          );
        }
        function Xs(e) {
          return (
            null !== e &&
            'object' === typeof e &&
            'constructor' in e &&
            e.constructor === Object
          );
        }
        function Qs() {
          var e =
              arguments.length > 0 && void 0 !== arguments[0]
                ? arguments[0]
                : {},
            t =
              arguments.length > 1 && void 0 !== arguments[1]
                ? arguments[1]
                : {};
          Object.keys(t).forEach(function (n) {
            'undefined' === typeof e[n]
              ? (e[n] = t[n])
              : Xs(t[n]) &&
                Xs(e[n]) &&
                Object.keys(t[n]).length > 0 &&
                Qs(e[n], t[n]);
          });
        }
        var Ks = {
          body: {},
          addEventListener: function () {},
          removeEventListener: function () {},
          activeElement: { blur: function () {}, nodeName: '' },
          querySelector: function () {
            return null;
          },
          querySelectorAll: function () {
            return [];
          },
          getElementById: function () {
            return null;
          },
          createEvent: function () {
            return { initEvent: function () {} };
          },
          createElement: function () {
            return {
              children: [],
              childNodes: [],
              style: {},
              setAttribute: function () {},
              getElementsByTagName: function () {
                return [];
              },
            };
          },
          createElementNS: function () {
            return {};
          },
          importNode: function () {
            return null;
          },
          location: {
            hash: '',
            host: '',
            hostname: '',
            href: '',
            origin: '',
            pathname: '',
            protocol: '',
            search: '',
          },
        };
        function Js() {
          var e = 'undefined' !== typeof document ? document : {};
          return Qs(e, Ks), e;
        }
        var Zs = {
          document: Ks,
          navigator: { userAgent: '' },
          location: {
            hash: '',
            host: '',
            hostname: '',
            href: '',
            origin: '',
            pathname: '',
            protocol: '',
            search: '',
          },
          history: {
            replaceState: function () {},
            pushState: function () {},
            go: function () {},
            back: function () {},
          },
          CustomEvent: function () {
            return this;
          },
          addEventListener: function () {},
          removeEventListener: function () {},
          getComputedStyle: function () {
            return {
              getPropertyValue: function () {
                return '';
              },
            };
          },
          Image: function () {},
          Date: function () {},
          screen: {},
          setTimeout: function () {},
          clearTimeout: function () {},
          matchMedia: function () {
            return {};
          },
          requestAnimationFrame: function (e) {
            return 'undefined' === typeof setTimeout
              ? (e(), null)
              : setTimeout(e, 0);
          },
          cancelAnimationFrame: function (e) {
            'undefined' !== typeof setTimeout && clearTimeout(e);
          },
        };
        function el() {
          var e = 'undefined' !== typeof window ? window : {};
          return Qs(e, Zs), e;
        }
        function tl(e) {
          return (
            (tl =
              'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator
                ? function (e) {
                    return typeof e;
                  }
                : function (e) {
                    return e &&
                      'function' == typeof Symbol &&
                      e.constructor === Symbol &&
                      e !== Symbol.prototype
                      ? 'symbol'
                      : typeof e;
                  }),
            tl(e)
          );
        }
        function nl(e) {
          if (void 0 === e)
            throw new ReferenceError(
              "this hasn't been initialised - super() hasn't been called",
            );
          return e;
        }
        function rl(e, t) {
          if (t && ('object' === tl(t) || 'function' === typeof t)) return t;
          if (void 0 !== t)
            throw new TypeError(
              'Derived constructors may only return object or undefined',
            );
          return nl(e);
        }
        function il(e, t) {
          return (
            (il =
              Object.setPrototypeOf ||
              function (e, t) {
                return (e.__proto__ = t), e;
              }),
            il(e, t)
          );
        }
        function al(e) {
          return (
            (al = Object.setPrototypeOf
              ? Object.getPrototypeOf
              : function (e) {
                  return e.__proto__ || Object.getPrototypeOf(e);
                }),
            al(e)
          );
        }
        function ol() {
          if ('undefined' === typeof Reflect || !Reflect.construct) return !1;
          if (Reflect.construct.sham) return !1;
          if ('function' === typeof Proxy) return !0;
          try {
            return (
              Boolean.prototype.valueOf.call(
                Reflect.construct(Boolean, [], function () {}),
              ),
              !0
            );
          } catch (e) {
            return !1;
          }
        }
        function sl(e, t, n) {
          return (
            (sl = ol()
              ? Reflect.construct
              : function (e, t, n) {
                  var r = [null];
                  r.push.apply(r, t);
                  var i = new (Function.bind.apply(e, r))();
                  return n && il(i, n.prototype), i;
                }),
            sl.apply(null, arguments)
          );
        }
        function ll(e) {
          var t = 'function' === typeof Map ? new Map() : void 0;
          return (
            (ll = function (e) {
              if (
                null === e ||
                ((n = e),
                -1 === Function.toString.call(n).indexOf('[native code]'))
              )
                return e;
              var n;
              if ('function' !== typeof e)
                throw new TypeError(
                  'Super expression must either be null or a function',
                );
              if ('undefined' !== typeof t) {
                if (t.has(e)) return t.get(e);
                t.set(e, r);
              }
              function r() {
                return sl(e, arguments, al(this).constructor);
              }
              return (
                (r.prototype = Object.create(e.prototype, {
                  constructor: {
                    value: r,
                    enumerable: !1,
                    writable: !0,
                    configurable: !0,
                  },
                })),
                il(r, e)
              );
            }),
            ll(e)
          );
        }
        var ul = (function (e) {
          !(function (e, t) {
            if ('function' !== typeof t && null !== t)
              throw new TypeError(
                'Super expression must either be null or a function',
              );
            (e.prototype = Object.create(t && t.prototype, {
              constructor: { value: e, writable: !0, configurable: !0 },
            })),
              Object.defineProperty(e, 'prototype', { writable: !1 }),
              t && il(e, t);
          })(n, e);
          var t = (function (e) {
            var t = ol();
            return function () {
              var n,
                r = al(e);
              if (t) {
                var i = al(this).constructor;
                n = Reflect.construct(r, arguments, i);
              } else n = r.apply(this, arguments);
              return rl(this, n);
            };
          })(n);
          function n(e) {
            var r;
            return (
              Ws(this, n),
              'number' === typeof e
                ? (r = t.call(this, e))
                : (function (e) {
                    var t = e.__proto__;
                    Object.defineProperty(e, '__proto__', {
                      get: function () {
                        return t;
                      },
                      set: function (e) {
                        t.__proto__ = e;
                      },
                    });
                  })(nl((r = t.call.apply(t, [this].concat(Xe(e || [])))))),
              rl(r)
            );
          }
          return Ys(n);
        })(ll(Array));
        function cl() {
          var e =
              arguments.length > 0 && void 0 !== arguments[0]
                ? arguments[0]
                : [],
            t = [];
          return (
            e.forEach(function (e) {
              Array.isArray(e) ? t.push.apply(t, Xe(cl(e))) : t.push(e);
            }),
            t
          );
        }
        function dl(e, t) {
          return Array.prototype.filter.call(e, t);
        }
        function fl(e, t) {
          var n = el(),
            r = Js(),
            i = [];
          if (!t && e instanceof ul) return e;
          if (!e) return new ul(i);
          if ('string' === typeof e) {
            var a = e.trim();
            if (a.indexOf('<') >= 0 && a.indexOf('>') >= 0) {
              var o = 'div';
              0 === a.indexOf('<li') && (o = 'ul'),
                0 === a.indexOf('<tr') && (o = 'tbody'),
                (0 !== a.indexOf('<td') && 0 !== a.indexOf('<th')) ||
                  (o = 'tr'),
                0 === a.indexOf('<tbody') && (o = 'table'),
                0 === a.indexOf('<option') && (o = 'select');
              var s = r.createElement(o);
              s.innerHTML = a;
              for (var l = 0; l < s.childNodes.length; l += 1)
                i.push(s.childNodes[l]);
            } else
              i = (function (e, t) {
                if ('string' !== typeof e) return [e];
                for (
                  var n = [], r = t.querySelectorAll(e), i = 0;
                  i < r.length;
                  i += 1
                )
                  n.push(r[i]);
                return n;
              })(e.trim(), t || r);
          } else if (e.nodeType || e === n || e === r) i.push(e);
          else if (Array.isArray(e)) {
            if (e instanceof ul) return e;
            i = e;
          }
          return new ul(
            (function (e) {
              for (var t = [], n = 0; n < e.length; n += 1)
                -1 === t.indexOf(e[n]) && t.push(e[n]);
              return t;
            })(i),
          );
        }
        fl.fn = ul.prototype;
        var pl = 'resize scroll'.split(' ');
        function hl(e) {
          return function () {
            for (var t = arguments.length, n = new Array(t), r = 0; r < t; r++)
              n[r] = arguments[r];
            if ('undefined' === typeof n[0]) {
              for (var i = 0; i < this.length; i += 1)
                pl.indexOf(e) < 0 &&
                  (e in this[i] ? this[i][e]() : fl(this[i]).trigger(e));
              return this;
            }
            return this.on.apply(this, [e].concat(n));
          };
        }
        hl('click'),
          hl('blur'),
          hl('focus'),
          hl('focusin'),
          hl('focusout'),
          hl('keyup'),
          hl('keydown'),
          hl('keypress'),
          hl('submit'),
          hl('change'),
          hl('mousedown'),
          hl('mousemove'),
          hl('mouseup'),
          hl('mouseenter'),
          hl('mouseleave'),
          hl('mouseout'),
          hl('mouseover'),
          hl('touchstart'),
          hl('touchend'),
          hl('touchmove'),
          hl('resize'),
          hl('scroll');
        var vl = {
          addClass: function () {
            for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
              t[n] = arguments[n];
            var r = cl(
              t.map(function (e) {
                return e.split(' ');
              }),
            );
            return (
              this.forEach(function (e) {
                var t;
                (t = e.classList).add.apply(t, Xe(r));
              }),
              this
            );
          },
          removeClass: function () {
            for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
              t[n] = arguments[n];
            var r = cl(
              t.map(function (e) {
                return e.split(' ');
              }),
            );
            return (
              this.forEach(function (e) {
                var t;
                (t = e.classList).remove.apply(t, Xe(r));
              }),
              this
            );
          },
          hasClass: function () {
            for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
              t[n] = arguments[n];
            var r = cl(
              t.map(function (e) {
                return e.split(' ');
              }),
            );
            return (
              dl(this, function (e) {
                return (
                  r.filter(function (t) {
                    return e.classList.contains(t);
                  }).length > 0
                );
              }).length > 0
            );
          },
          toggleClass: function () {
            for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
              t[n] = arguments[n];
            var r = cl(
              t.map(function (e) {
                return e.split(' ');
              }),
            );
            this.forEach(function (e) {
              r.forEach(function (t) {
                e.classList.toggle(t);
              });
            });
          },
          attr: function (e, t) {
            if (1 === arguments.length && 'string' === typeof e)
              return this[0] ? this[0].getAttribute(e) : void 0;
            for (var n = 0; n < this.length; n += 1)
              if (2 === arguments.length) this[n].setAttribute(e, t);
              else
                for (var r in e)
                  (this[n][r] = e[r]), this[n].setAttribute(r, e[r]);
            return this;
          },
          removeAttr: function (e) {
            for (var t = 0; t < this.length; t += 1) this[t].removeAttribute(e);
            return this;
          },
          transform: function (e) {
            for (var t = 0; t < this.length; t += 1)
              this[t].style.transform = e;
            return this;
          },
          transition: function (e) {
            for (var t = 0; t < this.length; t += 1)
              this[t].style.transitionDuration =
                'string' !== typeof e ? ''.concat(e, 'ms') : e;
            return this;
          },
          on: function () {
            for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
              t[n] = arguments[n];
            var r = t[0],
              i = t[1],
              a = t[2],
              o = t[3];
            function s(e) {
              var t = e.target;
              if (t) {
                var n = e.target.dom7EventData || [];
                if ((n.indexOf(e) < 0 && n.unshift(e), fl(t).is(i)))
                  a.apply(t, n);
                else
                  for (var r = fl(t).parents(), o = 0; o < r.length; o += 1)
                    fl(r[o]).is(i) && a.apply(r[o], n);
              }
            }
            function l(e) {
              var t = (e && e.target && e.target.dom7EventData) || [];
              t.indexOf(e) < 0 && t.unshift(e), a.apply(this, t);
            }
            'function' === typeof t[1] &&
              ((r = t[0]), (a = t[1]), (o = t[2]), (i = void 0)),
              o || (o = !1);
            for (var u, c = r.split(' '), d = 0; d < this.length; d += 1) {
              var f = this[d];
              if (i)
                for (u = 0; u < c.length; u += 1) {
                  var p = c[u];
                  f.dom7LiveListeners || (f.dom7LiveListeners = {}),
                    f.dom7LiveListeners[p] || (f.dom7LiveListeners[p] = []),
                    f.dom7LiveListeners[p].push({
                      listener: a,
                      proxyListener: s,
                    }),
                    f.addEventListener(p, s, o);
                }
              else
                for (u = 0; u < c.length; u += 1) {
                  var h = c[u];
                  f.dom7Listeners || (f.dom7Listeners = {}),
                    f.dom7Listeners[h] || (f.dom7Listeners[h] = []),
                    f.dom7Listeners[h].push({ listener: a, proxyListener: l }),
                    f.addEventListener(h, l, o);
                }
            }
            return this;
          },
          off: function () {
            for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
              t[n] = arguments[n];
            var r = t[0],
              i = t[1],
              a = t[2],
              o = t[3];
            'function' === typeof t[1] &&
              ((r = t[0]), (a = t[1]), (o = t[2]), (i = void 0)),
              o || (o = !1);
            for (var s = r.split(' '), l = 0; l < s.length; l += 1)
              for (var u = s[l], c = 0; c < this.length; c += 1) {
                var d = this[c],
                  f = void 0;
                if (
                  (!i && d.dom7Listeners
                    ? (f = d.dom7Listeners[u])
                    : i && d.dom7LiveListeners && (f = d.dom7LiveListeners[u]),
                  f && f.length)
                )
                  for (var p = f.length - 1; p >= 0; p -= 1) {
                    var h = f[p];
                    (a && h.listener === a) ||
                    (a &&
                      h.listener &&
                      h.listener.dom7proxy &&
                      h.listener.dom7proxy === a)
                      ? (d.removeEventListener(u, h.proxyListener, o),
                        f.splice(p, 1))
                      : a ||
                        (d.removeEventListener(u, h.proxyListener, o),
                        f.splice(p, 1));
                  }
              }
            return this;
          },
          trigger: function () {
            for (
              var e = el(), t = arguments.length, n = new Array(t), r = 0;
              r < t;
              r++
            )
              n[r] = arguments[r];
            for (var i = n[0].split(' '), a = n[1], o = 0; o < i.length; o += 1)
              for (var s = i[o], l = 0; l < this.length; l += 1) {
                var u = this[l];
                if (e.CustomEvent) {
                  var c = new e.CustomEvent(s, {
                    detail: a,
                    bubbles: !0,
                    cancelable: !0,
                  });
                  (u.dom7EventData = n.filter(function (e, t) {
                    return t > 0;
                  })),
                    u.dispatchEvent(c),
                    (u.dom7EventData = []),
                    delete u.dom7EventData;
                }
              }
            return this;
          },
          transitionEnd: function (e) {
            var t = this;
            return (
              e &&
                t.on('transitionend', function n(r) {
                  r.target === this &&
                    (e.call(this, r), t.off('transitionend', n));
                }),
              this
            );
          },
          outerWidth: function (e) {
            if (this.length > 0) {
              if (e) {
                var t = this.styles();
                return (
                  this[0].offsetWidth +
                  parseFloat(t.getPropertyValue('margin-right')) +
                  parseFloat(t.getPropertyValue('margin-left'))
                );
              }
              return this[0].offsetWidth;
            }
            return null;
          },
          outerHeight: function (e) {
            if (this.length > 0) {
              if (e) {
                var t = this.styles();
                return (
                  this[0].offsetHeight +
                  parseFloat(t.getPropertyValue('margin-top')) +
                  parseFloat(t.getPropertyValue('margin-bottom'))
                );
              }
              return this[0].offsetHeight;
            }
            return null;
          },
          styles: function () {
            var e = el();
            return this[0] ? e.getComputedStyle(this[0], null) : {};
          },
          offset: function () {
            if (this.length > 0) {
              var e = el(),
                t = Js(),
                n = this[0],
                r = n.getBoundingClientRect(),
                i = t.body,
                a = n.clientTop || i.clientTop || 0,
                o = n.clientLeft || i.clientLeft || 0,
                s = n === e ? e.scrollY : n.scrollTop,
                l = n === e ? e.scrollX : n.scrollLeft;
              return { top: r.top + s - a, left: r.left + l - o };
            }
            return null;
          },
          css: function (e, t) {
            var n,
              r = el();
            if (1 === arguments.length) {
              if ('string' !== typeof e) {
                for (n = 0; n < this.length; n += 1)
                  for (var i in e) this[n].style[i] = e[i];
                return this;
              }
              if (this[0])
                return r.getComputedStyle(this[0], null).getPropertyValue(e);
            }
            if (2 === arguments.length && 'string' === typeof e) {
              for (n = 0; n < this.length; n += 1) this[n].style[e] = t;
              return this;
            }
            return this;
          },
          each: function (e) {
            return e
              ? (this.forEach(function (t, n) {
                  e.apply(t, [t, n]);
                }),
                this)
              : this;
          },
          html: function (e) {
            if ('undefined' === typeof e)
              return this[0] ? this[0].innerHTML : null;
            for (var t = 0; t < this.length; t += 1) this[t].innerHTML = e;
            return this;
          },
          text: function (e) {
            if ('undefined' === typeof e)
              return this[0] ? this[0].textContent.trim() : null;
            for (var t = 0; t < this.length; t += 1) this[t].textContent = e;
            return this;
          },
          is: function (e) {
            var t,
              n,
              r = el(),
              i = Js(),
              a = this[0];
            if (!a || 'undefined' === typeof e) return !1;
            if ('string' === typeof e) {
              if (a.matches) return a.matches(e);
              if (a.webkitMatchesSelector) return a.webkitMatchesSelector(e);
              if (a.msMatchesSelector) return a.msMatchesSelector(e);
              for (t = fl(e), n = 0; n < t.length; n += 1)
                if (t[n] === a) return !0;
              return !1;
            }
            if (e === i) return a === i;
            if (e === r) return a === r;
            if (e.nodeType || e instanceof ul) {
              for (t = e.nodeType ? [e] : e, n = 0; n < t.length; n += 1)
                if (t[n] === a) return !0;
              return !1;
            }
            return !1;
          },
          index: function () {
            var e,
              t = this[0];
            if (t) {
              for (e = 0; null !== (t = t.previousSibling); )
                1 === t.nodeType && (e += 1);
              return e;
            }
          },
          eq: function (e) {
            if ('undefined' === typeof e) return this;
            var t = this.length;
            if (e > t - 1) return fl([]);
            if (e < 0) {
              var n = t + e;
              return fl(n < 0 ? [] : [this[n]]);
            }
            return fl([this[e]]);
          },
          append: function () {
            for (var e, t = Js(), n = 0; n < arguments.length; n += 1) {
              e = n < 0 || arguments.length <= n ? void 0 : arguments[n];
              for (var r = 0; r < this.length; r += 1)
                if ('string' === typeof e) {
                  var i = t.createElement('div');
                  for (i.innerHTML = e; i.firstChild; )
                    this[r].appendChild(i.firstChild);
                } else if (e instanceof ul)
                  for (var a = 0; a < e.length; a += 1)
                    this[r].appendChild(e[a]);
                else this[r].appendChild(e);
            }
            return this;
          },
          prepend: function (e) {
            var t,
              n,
              r = Js();
            for (t = 0; t < this.length; t += 1)
              if ('string' === typeof e) {
                var i = r.createElement('div');
                for (
                  i.innerHTML = e, n = i.childNodes.length - 1;
                  n >= 0;
                  n -= 1
                )
                  this[t].insertBefore(i.childNodes[n], this[t].childNodes[0]);
              } else if (e instanceof ul)
                for (n = 0; n < e.length; n += 1)
                  this[t].insertBefore(e[n], this[t].childNodes[0]);
              else this[t].insertBefore(e, this[t].childNodes[0]);
            return this;
          },
          next: function (e) {
            return this.length > 0
              ? e
                ? this[0].nextElementSibling &&
                  fl(this[0].nextElementSibling).is(e)
                  ? fl([this[0].nextElementSibling])
                  : fl([])
                : this[0].nextElementSibling
                ? fl([this[0].nextElementSibling])
                : fl([])
              : fl([]);
          },
          nextAll: function (e) {
            var t = [],
              n = this[0];
            if (!n) return fl([]);
            for (; n.nextElementSibling; ) {
              var r = n.nextElementSibling;
              e ? fl(r).is(e) && t.push(r) : t.push(r), (n = r);
            }
            return fl(t);
          },
          prev: function (e) {
            if (this.length > 0) {
              var t = this[0];
              return e
                ? t.previousElementSibling && fl(t.previousElementSibling).is(e)
                  ? fl([t.previousElementSibling])
                  : fl([])
                : t.previousElementSibling
                ? fl([t.previousElementSibling])
                : fl([]);
            }
            return fl([]);
          },
          prevAll: function (e) {
            var t = [],
              n = this[0];
            if (!n) return fl([]);
            for (; n.previousElementSibling; ) {
              var r = n.previousElementSibling;
              e ? fl(r).is(e) && t.push(r) : t.push(r), (n = r);
            }
            return fl(t);
          },
          parent: function (e) {
            for (var t = [], n = 0; n < this.length; n += 1)
              null !== this[n].parentNode &&
                (e
                  ? fl(this[n].parentNode).is(e) && t.push(this[n].parentNode)
                  : t.push(this[n].parentNode));
            return fl(t);
          },
          parents: function (e) {
            for (var t = [], n = 0; n < this.length; n += 1)
              for (var r = this[n].parentNode; r; )
                e ? fl(r).is(e) && t.push(r) : t.push(r), (r = r.parentNode);
            return fl(t);
          },
          closest: function (e) {
            var t = this;
            return 'undefined' === typeof e
              ? fl([])
              : (t.is(e) || (t = t.parents(e).eq(0)), t);
          },
          find: function (e) {
            for (var t = [], n = 0; n < this.length; n += 1)
              for (
                var r = this[n].querySelectorAll(e), i = 0;
                i < r.length;
                i += 1
              )
                t.push(r[i]);
            return fl(t);
          },
          children: function (e) {
            for (var t = [], n = 0; n < this.length; n += 1)
              for (var r = this[n].children, i = 0; i < r.length; i += 1)
                (e && !fl(r[i]).is(e)) || t.push(r[i]);
            return fl(t);
          },
          filter: function (e) {
            return fl(dl(this, e));
          },
          remove: function () {
            for (var e = 0; e < this.length; e += 1)
              this[e].parentNode && this[e].parentNode.removeChild(this[e]);
            return this;
          },
        };
        Object.keys(vl).forEach(function (e) {
          Object.defineProperty(fl.fn, e, { value: vl[e], writable: !0 });
        });
        var ml,
          gl,
          yl,
          bl = fl;
        function wl(e) {
          var t = e;
          Object.keys(t).forEach(function (e) {
            try {
              t[e] = null;
            } catch (n) {}
            try {
              delete t[e];
            } catch (n) {}
          });
        }
        function xl(e) {
          var t =
            arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
          return setTimeout(e, t);
        }
        function Sl() {
          return Date.now();
        }
        function El(e) {
          var t,
            n = el();
          return (
            n.getComputedStyle && (t = n.getComputedStyle(e, null)),
            !t && e.currentStyle && (t = e.currentStyle),
            t || (t = e.style),
            t
          );
        }
        function kl(e) {
          var t,
            n,
            r,
            i =
              arguments.length > 1 && void 0 !== arguments[1]
                ? arguments[1]
                : 'x',
            a = el(),
            o = El(e);
          return (
            a.WebKitCSSMatrix
              ? ((n = o.transform || o.webkitTransform).split(',').length > 6 &&
                  (n = n
                    .split(', ')
                    .map(function (e) {
                      return e.replace(',', '.');
                    })
                    .join(', ')),
                (r = new a.WebKitCSSMatrix('none' === n ? '' : n)))
              : (t = (r =
                  o.MozTransform ||
                  o.OTransform ||
                  o.MsTransform ||
                  o.msTransform ||
                  o.transform ||
                  o
                    .getPropertyValue('transform')
                    .replace('translate(', 'matrix(1, 0, 0, 1,'))
                  .toString()
                  .split(',')),
            'x' === i &&
              (n = a.WebKitCSSMatrix
                ? r.m41
                : 16 === t.length
                ? parseFloat(t[12])
                : parseFloat(t[4])),
            'y' === i &&
              (n = a.WebKitCSSMatrix
                ? r.m42
                : 16 === t.length
                ? parseFloat(t[13])
                : parseFloat(t[5])),
            n || 0
          );
        }
        function Cl(e) {
          return (
            'object' === typeof e &&
            null !== e &&
            e.constructor &&
            'Object' === Object.prototype.toString.call(e).slice(8, -1)
          );
        }
        function Tl(e) {
          return 'undefined' !== typeof window &&
            'undefined' !== typeof window.HTMLElement
            ? e instanceof HTMLElement
            : e && (1 === e.nodeType || 11 === e.nodeType);
        }
        function Pl() {
          for (
            var e = Object(arguments.length <= 0 ? void 0 : arguments[0]),
              t = ['__proto__', 'constructor', 'prototype'],
              n = 1;
            n < arguments.length;
            n += 1
          ) {
            var r = n < 0 || arguments.length <= n ? void 0 : arguments[n];
            if (void 0 !== r && null !== r && !Tl(r))
              for (
                var i = Object.keys(Object(r)).filter(function (e) {
                    return t.indexOf(e) < 0;
                  }),
                  a = 0,
                  o = i.length;
                a < o;
                a += 1
              ) {
                var s = i[a],
                  l = Object.getOwnPropertyDescriptor(r, s);
                void 0 !== l &&
                  l.enumerable &&
                  (Cl(e[s]) && Cl(r[s])
                    ? r[s].__swiper__
                      ? (e[s] = r[s])
                      : Pl(e[s], r[s])
                    : !Cl(e[s]) && Cl(r[s])
                    ? ((e[s] = {}),
                      r[s].__swiper__ ? (e[s] = r[s]) : Pl(e[s], r[s]))
                    : (e[s] = r[s]));
              }
          }
          return e;
        }
        function Ol(e, t, n) {
          e.style.setProperty(t, n);
        }
        function jl(e) {
          var t,
            n = e.swiper,
            r = e.targetPosition,
            i = e.side,
            a = el(),
            o = -n.translate,
            s = null,
            l = n.params.speed;
          (n.wrapperEl.style.scrollSnapType = 'none'),
            a.cancelAnimationFrame(n.cssModeFrameID);
          var u = r > o ? 'next' : 'prev',
            c = function (e, t) {
              return ('next' === u && e >= t) || ('prev' === u && e <= t);
            };
          !(function e() {
            (t = new Date().getTime()), null === s && (s = t);
            var u = Math.max(Math.min((t - s) / l, 1), 0),
              d = 0.5 - Math.cos(u * Math.PI) / 2,
              f = o + d * (r - o);
            if (
              (c(f, r) && (f = r), n.wrapperEl.scrollTo(Pe({}, i, f)), c(f, r))
            )
              return (
                (n.wrapperEl.style.overflow = 'hidden'),
                (n.wrapperEl.style.scrollSnapType = ''),
                setTimeout(function () {
                  (n.wrapperEl.style.overflow = ''),
                    n.wrapperEl.scrollTo(Pe({}, i, f));
                }),
                void a.cancelAnimationFrame(n.cssModeFrameID)
              );
            n.cssModeFrameID = a.requestAnimationFrame(e);
          })();
        }
        function Ll() {
          return (
            ml ||
              (ml = (function () {
                var e = el(),
                  t = Js();
                return {
                  smoothScroll:
                    t.documentElement &&
                    'scrollBehavior' in t.documentElement.style,
                  touch: !!(
                    'ontouchstart' in e ||
                    (e.DocumentTouch && t instanceof e.DocumentTouch)
                  ),
                  passiveListener: (function () {
                    var t = !1;
                    try {
                      var n = Object.defineProperty({}, 'passive', {
                        get: function () {
                          t = !0;
                        },
                      });
                      e.addEventListener('testPassiveListener', null, n);
                    } catch (r) {}
                    return t;
                  })(),
                  gestures: 'ongesturestart' in e,
                };
              })()),
            ml
          );
        }
        function _l() {
          var e =
              arguments.length > 0 && void 0 !== arguments[0]
                ? arguments[0]
                : {},
            t = e.userAgent,
            n = Ll(),
            r = el(),
            i = r.navigator.platform,
            a = t || r.navigator.userAgent,
            o = { ios: !1, android: !1 },
            s = r.screen.width,
            l = r.screen.height,
            u = a.match(/(Android);?[\s\/]+([\d.]+)?/),
            c = a.match(/(iPad).*OS\s([\d_]+)/),
            d = a.match(/(iPod)(.*OS\s([\d_]+))?/),
            f = !c && a.match(/(iPhone\sOS|iOS)\s([\d_]+)/),
            p = 'Win32' === i,
            h = 'MacIntel' === i,
            v = [
              '1024x1366',
              '1366x1024',
              '834x1194',
              '1194x834',
              '834x1112',
              '1112x834',
              '768x1024',
              '1024x768',
              '820x1180',
              '1180x820',
              '810x1080',
              '1080x810',
            ];
          return (
            !c &&
              h &&
              n.touch &&
              v.indexOf(''.concat(s, 'x').concat(l)) >= 0 &&
              ((c = a.match(/(Version)\/([\d.]+)/)) || (c = [0, 1, '13_0_0']),
              (h = !1)),
            u && !p && ((o.os = 'android'), (o.android = !0)),
            (c || f || d) && ((o.os = 'ios'), (o.ios = !0)),
            o
          );
        }
        function Al() {
          var e =
            arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
          return gl || (gl = _l(e)), gl;
        }
        function Ml() {
          return (
            yl ||
              (yl = (function () {
                var e = el();
                return {
                  isSafari: (function () {
                    var t = e.navigator.userAgent.toLowerCase();
                    return (
                      t.indexOf('safari') >= 0 &&
                      t.indexOf('chrome') < 0 &&
                      t.indexOf('android') < 0
                    );
                  })(),
                  isWebView:
                    /(iPhone|iPod|iPad).*AppleWebKit(?!.*Safari)/i.test(
                      e.navigator.userAgent,
                    ),
                };
              })()),
            yl
          );
        }
        var Nl = {
          on: function (e, t, n) {
            var r = this;
            if ('function' !== typeof t) return r;
            var i = n ? 'unshift' : 'push';
            return (
              e.split(' ').forEach(function (e) {
                r.eventsListeners[e] || (r.eventsListeners[e] = []),
                  r.eventsListeners[e][i](t);
              }),
              r
            );
          },
          once: function (e, t, n) {
            var r = this;
            if ('function' !== typeof t) return r;
            function i() {
              r.off(e, i), i.__emitterProxy && delete i.__emitterProxy;
              for (
                var n = arguments.length, a = new Array(n), o = 0;
                o < n;
                o++
              )
                a[o] = arguments[o];
              t.apply(r, a);
            }
            return (i.__emitterProxy = t), r.on(e, i, n);
          },
          onAny: function (e, t) {
            var n = this;
            if ('function' !== typeof e) return n;
            var r = t ? 'unshift' : 'push';
            return (
              n.eventsAnyListeners.indexOf(e) < 0 && n.eventsAnyListeners[r](e),
              n
            );
          },
          offAny: function (e) {
            var t = this;
            if (!t.eventsAnyListeners) return t;
            var n = t.eventsAnyListeners.indexOf(e);
            return n >= 0 && t.eventsAnyListeners.splice(n, 1), t;
          },
          off: function (e, t) {
            var n = this;
            return n.eventsListeners
              ? (e.split(' ').forEach(function (e) {
                  'undefined' === typeof t
                    ? (n.eventsListeners[e] = [])
                    : n.eventsListeners[e] &&
                      n.eventsListeners[e].forEach(function (r, i) {
                        (r === t ||
                          (r.__emitterProxy && r.__emitterProxy === t)) &&
                          n.eventsListeners[e].splice(i, 1);
                      });
                }),
                n)
              : n;
          },
          emit: function () {
            var e,
              t,
              n,
              r = this;
            if (!r.eventsListeners) return r;
            for (var i = arguments.length, a = new Array(i), o = 0; o < i; o++)
              a[o] = arguments[o];
            'string' === typeof a[0] || Array.isArray(a[0])
              ? ((e = a[0]), (t = a.slice(1, a.length)), (n = r))
              : ((e = a[0].events), (t = a[0].data), (n = a[0].context || r)),
              t.unshift(n);
            var s = Array.isArray(e) ? e : e.split(' ');
            return (
              s.forEach(function (e) {
                r.eventsAnyListeners &&
                  r.eventsAnyListeners.length &&
                  r.eventsAnyListeners.forEach(function (r) {
                    r.apply(n, [e].concat(Xe(t)));
                  }),
                  r.eventsListeners &&
                    r.eventsListeners[e] &&
                    r.eventsListeners[e].forEach(function (e) {
                      e.apply(n, t);
                    });
              }),
              r
            );
          },
        };
        var Rl = {
          updateSize: function () {
            var e,
              t,
              n = this,
              r = n.$el;
            (e =
              'undefined' !== typeof n.params.width && null !== n.params.width
                ? n.params.width
                : r[0].clientWidth),
              (t =
                'undefined' !== typeof n.params.height &&
                null !== n.params.height
                  ? n.params.height
                  : r[0].clientHeight),
              (0 === e && n.isHorizontal()) ||
                (0 === t && n.isVertical()) ||
                ((e =
                  e -
                  parseInt(r.css('padding-left') || 0, 10) -
                  parseInt(r.css('padding-right') || 0, 10)),
                (t =
                  t -
                  parseInt(r.css('padding-top') || 0, 10) -
                  parseInt(r.css('padding-bottom') || 0, 10)),
                Number.isNaN(e) && (e = 0),
                Number.isNaN(t) && (t = 0),
                Object.assign(n, {
                  width: e,
                  height: t,
                  size: n.isHorizontal() ? e : t,
                }));
          },
          updateSlides: function () {
            var e = this;
            function t(t) {
              return e.isHorizontal()
                ? t
                : {
                    width: 'height',
                    'margin-top': 'margin-left',
                    'margin-bottom ': 'margin-right',
                    'margin-left': 'margin-top',
                    'margin-right': 'margin-bottom',
                    'padding-left': 'padding-top',
                    'padding-right': 'padding-bottom',
                    marginRight: 'marginBottom',
                  }[t];
            }
            function n(e, n) {
              return parseFloat(e.getPropertyValue(t(n)) || 0);
            }
            var r = e.params,
              i = e.$wrapperEl,
              a = e.size,
              o = e.rtlTranslate,
              s = e.wrongRTL,
              l = e.virtual && r.virtual.enabled,
              u = l ? e.virtual.slides.length : e.slides.length,
              c = i.children('.'.concat(e.params.slideClass)),
              d = l ? e.virtual.slides.length : c.length,
              f = [],
              p = [],
              h = [],
              v = r.slidesOffsetBefore;
            'function' === typeof v && (v = r.slidesOffsetBefore.call(e));
            var m = r.slidesOffsetAfter;
            'function' === typeof m && (m = r.slidesOffsetAfter.call(e));
            var g = e.snapGrid.length,
              y = e.slidesGrid.length,
              b = r.spaceBetween,
              w = -v,
              x = 0,
              S = 0;
            if ('undefined' !== typeof a) {
              'string' === typeof b &&
                b.indexOf('%') >= 0 &&
                (b = (parseFloat(b.replace('%', '')) / 100) * a),
                (e.virtualSize = -b),
                o
                  ? c.css({ marginLeft: '', marginBottom: '', marginTop: '' })
                  : c.css({ marginRight: '', marginBottom: '', marginTop: '' }),
                r.centeredSlides &&
                  r.cssMode &&
                  (Ol(e.wrapperEl, '--swiper-centered-offset-before', ''),
                  Ol(e.wrapperEl, '--swiper-centered-offset-after', ''));
              var E,
                k = r.grid && r.grid.rows > 1 && e.grid;
              k && e.grid.initSlides(d);
              for (
                var C =
                    'auto' === r.slidesPerView &&
                    r.breakpoints &&
                    Object.keys(r.breakpoints).filter(function (e) {
                      return (
                        'undefined' !== typeof r.breakpoints[e].slidesPerView
                      );
                    }).length > 0,
                  T = 0;
                T < d;
                T += 1
              ) {
                E = 0;
                var P = c.eq(T);
                if (
                  (k && e.grid.updateSlide(T, P, d, t),
                  'none' !== P.css('display'))
                ) {
                  if ('auto' === r.slidesPerView) {
                    C && (c[T].style[t('width')] = '');
                    var O = getComputedStyle(P[0]),
                      j = P[0].style.transform,
                      L = P[0].style.webkitTransform;
                    if (
                      (j && (P[0].style.transform = 'none'),
                      L && (P[0].style.webkitTransform = 'none'),
                      r.roundLengths)
                    )
                      E = e.isHorizontal()
                        ? P.outerWidth(!0)
                        : P.outerHeight(!0);
                    else {
                      var _ = n(O, 'width'),
                        A = n(O, 'padding-left'),
                        M = n(O, 'padding-right'),
                        N = n(O, 'margin-left'),
                        R = n(O, 'margin-right'),
                        I = O.getPropertyValue('box-sizing');
                      if (I && 'border-box' === I) E = _ + N + R;
                      else {
                        var D = P[0],
                          z = D.clientWidth;
                        E = _ + A + M + N + R + (D.offsetWidth - z);
                      }
                    }
                    j && (P[0].style.transform = j),
                      L && (P[0].style.webkitTransform = L),
                      r.roundLengths && (E = Math.floor(E));
                  } else
                    (E = (a - (r.slidesPerView - 1) * b) / r.slidesPerView),
                      r.roundLengths && (E = Math.floor(E)),
                      c[T] && (c[T].style[t('width')] = ''.concat(E, 'px'));
                  c[T] && (c[T].swiperSlideSize = E),
                    h.push(E),
                    r.centeredSlides
                      ? ((w = w + E / 2 + x / 2 + b),
                        0 === x && 0 !== T && (w = w - a / 2 - b),
                        0 === T && (w = w - a / 2 - b),
                        Math.abs(w) < 0.001 && (w = 0),
                        r.roundLengths && (w = Math.floor(w)),
                        S % r.slidesPerGroup === 0 && f.push(w),
                        p.push(w))
                      : (r.roundLengths && (w = Math.floor(w)),
                        (S - Math.min(e.params.slidesPerGroupSkip, S)) %
                          e.params.slidesPerGroup ===
                          0 && f.push(w),
                        p.push(w),
                        (w = w + E + b)),
                    (e.virtualSize += E + b),
                    (x = E),
                    (S += 1);
                }
              }
              if (
                ((e.virtualSize = Math.max(e.virtualSize, a) + m),
                o &&
                  s &&
                  ('slide' === r.effect || 'coverflow' === r.effect) &&
                  i.css({
                    width: ''.concat(e.virtualSize + r.spaceBetween, 'px'),
                  }),
                r.setWrapperSize &&
                  i.css(
                    Pe(
                      {},
                      t('width'),
                      ''.concat(e.virtualSize + r.spaceBetween, 'px'),
                    ),
                  ),
                k && e.grid.updateWrapperSize(E, f, t),
                !r.centeredSlides)
              ) {
                for (var V = [], F = 0; F < f.length; F += 1) {
                  var B = f[F];
                  r.roundLengths && (B = Math.floor(B)),
                    f[F] <= e.virtualSize - a && V.push(B);
                }
                (f = V),
                  Math.floor(e.virtualSize - a) - Math.floor(f[f.length - 1]) >
                    1 && f.push(e.virtualSize - a);
              }
              if ((0 === f.length && (f = [0]), 0 !== r.spaceBetween)) {
                var U = e.isHorizontal() && o ? 'marginLeft' : t('marginRight');
                c.filter(function (e, t) {
                  return !r.cssMode || t !== c.length - 1;
                }).css(Pe({}, U, ''.concat(b, 'px')));
              }
              if (r.centeredSlides && r.centeredSlidesBounds) {
                var $ = 0;
                h.forEach(function (e) {
                  $ += e + (r.spaceBetween ? r.spaceBetween : 0);
                });
                var q = ($ -= r.spaceBetween) - a;
                f = f.map(function (e) {
                  return e < 0 ? -v : e > q ? q + m : e;
                });
              }
              if (r.centerInsufficientSlides) {
                var H = 0;
                if (
                  (h.forEach(function (e) {
                    H += e + (r.spaceBetween ? r.spaceBetween : 0);
                  }),
                  (H -= r.spaceBetween) < a)
                ) {
                  var W = (a - H) / 2;
                  f.forEach(function (e, t) {
                    f[t] = e - W;
                  }),
                    p.forEach(function (e, t) {
                      p[t] = e + W;
                    });
                }
              }
              if (
                (Object.assign(e, {
                  slides: c,
                  snapGrid: f,
                  slidesGrid: p,
                  slidesSizesGrid: h,
                }),
                r.centeredSlides && r.cssMode && !r.centeredSlidesBounds)
              ) {
                Ol(
                  e.wrapperEl,
                  '--swiper-centered-offset-before',
                  ''.concat(-f[0], 'px'),
                ),
                  Ol(
                    e.wrapperEl,
                    '--swiper-centered-offset-after',
                    ''.concat(e.size / 2 - h[h.length - 1] / 2, 'px'),
                  );
                var G = -e.snapGrid[0],
                  Y = -e.slidesGrid[0];
                (e.snapGrid = e.snapGrid.map(function (e) {
                  return e + G;
                })),
                  (e.slidesGrid = e.slidesGrid.map(function (e) {
                    return e + Y;
                  }));
              }
              d !== u && e.emit('slidesLengthChange'),
                f.length !== g &&
                  (e.params.watchOverflow && e.checkOverflow(),
                  e.emit('snapGridLengthChange')),
                p.length !== y && e.emit('slidesGridLengthChange'),
                r.watchSlidesProgress && e.updateSlidesOffset();
            }
          },
          updateAutoHeight: function (e) {
            var t,
              n = this,
              r = [],
              i = n.virtual && n.params.virtual.enabled,
              a = 0;
            'number' === typeof e
              ? n.setTransition(e)
              : !0 === e && n.setTransition(n.params.speed);
            var o = function (e) {
              return i
                ? n.slides.filter(function (t) {
                    return (
                      parseInt(
                        t.getAttribute('data-swiper-slide-index'),
                        10,
                      ) === e
                    );
                  })[0]
                : n.slides.eq(e)[0];
            };
            if ('auto' !== n.params.slidesPerView && n.params.slidesPerView > 1)
              if (n.params.centeredSlides)
                n.visibleSlides.each(function (e) {
                  r.push(e);
                });
              else
                for (t = 0; t < Math.ceil(n.params.slidesPerView); t += 1) {
                  var s = n.activeIndex + t;
                  if (s > n.slides.length && !i) break;
                  r.push(o(s));
                }
            else r.push(o(n.activeIndex));
            for (t = 0; t < r.length; t += 1)
              if ('undefined' !== typeof r[t]) {
                var l = r[t].offsetHeight;
                a = l > a ? l : a;
              }
            (a || 0 === a) && n.$wrapperEl.css('height', ''.concat(a, 'px'));
          },
          updateSlidesOffset: function () {
            for (var e = this.slides, t = 0; t < e.length; t += 1)
              e[t].swiperSlideOffset = this.isHorizontal()
                ? e[t].offsetLeft
                : e[t].offsetTop;
          },
          updateSlidesProgress: function () {
            var e =
                arguments.length > 0 && void 0 !== arguments[0]
                  ? arguments[0]
                  : (this && this.translate) || 0,
              t = this,
              n = t.params,
              r = t.slides,
              i = t.rtlTranslate,
              a = t.snapGrid;
            if (0 !== r.length) {
              'undefined' === typeof r[0].swiperSlideOffset &&
                t.updateSlidesOffset();
              var o = -e;
              i && (o = e),
                r.removeClass(n.slideVisibleClass),
                (t.visibleSlidesIndexes = []),
                (t.visibleSlides = []);
              for (var s = 0; s < r.length; s += 1) {
                var l = r[s],
                  u = l.swiperSlideOffset;
                n.cssMode && n.centeredSlides && (u -= r[0].swiperSlideOffset);
                var c =
                    (o + (n.centeredSlides ? t.minTranslate() : 0) - u) /
                    (l.swiperSlideSize + n.spaceBetween),
                  d =
                    (o - a[0] + (n.centeredSlides ? t.minTranslate() : 0) - u) /
                    (l.swiperSlideSize + n.spaceBetween),
                  f = -(o - u),
                  p = f + t.slidesSizesGrid[s],
                  h =
                    (f >= 0 && f < t.size - 1) ||
                    (p > 1 && p <= t.size) ||
                    (f <= 0 && p >= t.size);
                h &&
                  (t.visibleSlides.push(l),
                  t.visibleSlidesIndexes.push(s),
                  r.eq(s).addClass(n.slideVisibleClass)),
                  (l.progress = i ? -c : c),
                  (l.originalProgress = i ? -d : d);
              }
              t.visibleSlides = bl(t.visibleSlides);
            }
          },
          updateProgress: function (e) {
            var t = this;
            if ('undefined' === typeof e) {
              var n = t.rtlTranslate ? -1 : 1;
              e = (t && t.translate && t.translate * n) || 0;
            }
            var r = t.params,
              i = t.maxTranslate() - t.minTranslate(),
              a = t.progress,
              o = t.isBeginning,
              s = t.isEnd,
              l = o,
              u = s;
            0 === i
              ? ((a = 0), (o = !0), (s = !0))
              : ((o = (a = (e - t.minTranslate()) / i) <= 0), (s = a >= 1)),
              Object.assign(t, { progress: a, isBeginning: o, isEnd: s }),
              (r.watchSlidesProgress || (r.centeredSlides && r.autoHeight)) &&
                t.updateSlidesProgress(e),
              o && !l && t.emit('reachBeginning toEdge'),
              s && !u && t.emit('reachEnd toEdge'),
              ((l && !o) || (u && !s)) && t.emit('fromEdge'),
              t.emit('progress', a);
          },
          updateSlidesClasses: function () {
            var e,
              t = this,
              n = t.slides,
              r = t.params,
              i = t.$wrapperEl,
              a = t.activeIndex,
              o = t.realIndex,
              s = t.virtual && r.virtual.enabled;
            n.removeClass(
              ''
                .concat(r.slideActiveClass, ' ')
                .concat(r.slideNextClass, ' ')
                .concat(r.slidePrevClass, ' ')
                .concat(r.slideDuplicateActiveClass, ' ')
                .concat(r.slideDuplicateNextClass, ' ')
                .concat(r.slideDuplicatePrevClass),
            ),
              (e = s
                ? t.$wrapperEl.find(
                    '.'
                      .concat(r.slideClass, '[data-swiper-slide-index="')
                      .concat(a, '"]'),
                  )
                : n.eq(a)).addClass(r.slideActiveClass),
              r.loop &&
                (e.hasClass(r.slideDuplicateClass)
                  ? i
                      .children(
                        '.'
                          .concat(r.slideClass, ':not(.')
                          .concat(
                            r.slideDuplicateClass,
                            ')[data-swiper-slide-index="',
                          )
                          .concat(o, '"]'),
                      )
                      .addClass(r.slideDuplicateActiveClass)
                  : i
                      .children(
                        '.'
                          .concat(r.slideClass, '.')
                          .concat(
                            r.slideDuplicateClass,
                            '[data-swiper-slide-index="',
                          )
                          .concat(o, '"]'),
                      )
                      .addClass(r.slideDuplicateActiveClass));
            var l = e
              .nextAll('.'.concat(r.slideClass))
              .eq(0)
              .addClass(r.slideNextClass);
            r.loop &&
              0 === l.length &&
              (l = n.eq(0)).addClass(r.slideNextClass);
            var u = e
              .prevAll('.'.concat(r.slideClass))
              .eq(0)
              .addClass(r.slidePrevClass);
            r.loop &&
              0 === u.length &&
              (u = n.eq(-1)).addClass(r.slidePrevClass),
              r.loop &&
                (l.hasClass(r.slideDuplicateClass)
                  ? i
                      .children(
                        '.'
                          .concat(r.slideClass, ':not(.')
                          .concat(
                            r.slideDuplicateClass,
                            ')[data-swiper-slide-index="',
                          )
                          .concat(l.attr('data-swiper-slide-index'), '"]'),
                      )
                      .addClass(r.slideDuplicateNextClass)
                  : i
                      .children(
                        '.'
                          .concat(r.slideClass, '.')
                          .concat(
                            r.slideDuplicateClass,
                            '[data-swiper-slide-index="',
                          )
                          .concat(l.attr('data-swiper-slide-index'), '"]'),
                      )
                      .addClass(r.slideDuplicateNextClass),
                u.hasClass(r.slideDuplicateClass)
                  ? i
                      .children(
                        '.'
                          .concat(r.slideClass, ':not(.')
                          .concat(
                            r.slideDuplicateClass,
                            ')[data-swiper-slide-index="',
                          )
                          .concat(u.attr('data-swiper-slide-index'), '"]'),
                      )
                      .addClass(r.slideDuplicatePrevClass)
                  : i
                      .children(
                        '.'
                          .concat(r.slideClass, '.')
                          .concat(
                            r.slideDuplicateClass,
                            '[data-swiper-slide-index="',
                          )
                          .concat(u.attr('data-swiper-slide-index'), '"]'),
                      )
                      .addClass(r.slideDuplicatePrevClass)),
              t.emitSlidesClasses();
          },
          updateActiveIndex: function (e) {
            var t,
              n = this,
              r = n.rtlTranslate ? n.translate : -n.translate,
              i = n.slidesGrid,
              a = n.snapGrid,
              o = n.params,
              s = n.activeIndex,
              l = n.realIndex,
              u = n.snapIndex,
              c = e;
            if ('undefined' === typeof c) {
              for (var d = 0; d < i.length; d += 1)
                'undefined' !== typeof i[d + 1]
                  ? r >= i[d] && r < i[d + 1] - (i[d + 1] - i[d]) / 2
                    ? (c = d)
                    : r >= i[d] && r < i[d + 1] && (c = d + 1)
                  : r >= i[d] && (c = d);
              o.normalizeSlideIndex &&
                (c < 0 || 'undefined' === typeof c) &&
                (c = 0);
            }
            if (a.indexOf(r) >= 0) t = a.indexOf(r);
            else {
              var f = Math.min(o.slidesPerGroupSkip, c);
              t = f + Math.floor((c - f) / o.slidesPerGroup);
            }
            if ((t >= a.length && (t = a.length - 1), c !== s)) {
              var p = parseInt(
                n.slides.eq(c).attr('data-swiper-slide-index') || c,
                10,
              );
              Object.assign(n, {
                snapIndex: t,
                realIndex: p,
                previousIndex: s,
                activeIndex: c,
              }),
                n.emit('activeIndexChange'),
                n.emit('snapIndexChange'),
                l !== p && n.emit('realIndexChange'),
                (n.initialized || n.params.runCallbacksOnInit) &&
                  n.emit('slideChange');
            } else t !== u && ((n.snapIndex = t), n.emit('snapIndexChange'));
          },
          updateClickedSlide: function (e) {
            var t,
              n = this,
              r = n.params,
              i = bl(e).closest('.'.concat(r.slideClass))[0],
              a = !1;
            if (i)
              for (var o = 0; o < n.slides.length; o += 1)
                if (n.slides[o] === i) {
                  (a = !0), (t = o);
                  break;
                }
            if (!i || !a)
              return (n.clickedSlide = void 0), void (n.clickedIndex = void 0);
            (n.clickedSlide = i),
              n.virtual && n.params.virtual.enabled
                ? (n.clickedIndex = parseInt(
                    bl(i).attr('data-swiper-slide-index'),
                    10,
                  ))
                : (n.clickedIndex = t),
              r.slideToClickedSlide &&
                void 0 !== n.clickedIndex &&
                n.clickedIndex !== n.activeIndex &&
                n.slideToClickedSlide();
          },
        };
        var Il = {
          getTranslate: function () {
            var e =
                arguments.length > 0 && void 0 !== arguments[0]
                  ? arguments[0]
                  : this.isHorizontal()
                  ? 'x'
                  : 'y',
              t = this,
              n = t.params,
              r = t.rtlTranslate,
              i = t.translate,
              a = t.$wrapperEl;
            if (n.virtualTranslate) return r ? -i : i;
            if (n.cssMode) return i;
            var o = kl(a[0], e);
            return r && (o = -o), o || 0;
          },
          setTranslate: function (e, t) {
            var n = this,
              r = n.rtlTranslate,
              i = n.params,
              a = n.$wrapperEl,
              o = n.wrapperEl,
              s = n.progress,
              l = 0,
              u = 0;
            n.isHorizontal() ? (l = r ? -e : e) : (u = e),
              i.roundLengths && ((l = Math.floor(l)), (u = Math.floor(u))),
              i.cssMode
                ? (o[n.isHorizontal() ? 'scrollLeft' : 'scrollTop'] =
                    n.isHorizontal() ? -l : -u)
                : i.virtualTranslate ||
                  a.transform(
                    'translate3d('
                      .concat(l, 'px, ')
                      .concat(u, 'px, ')
                      .concat(0, 'px)'),
                  ),
              (n.previousTranslate = n.translate),
              (n.translate = n.isHorizontal() ? l : u);
            var c = n.maxTranslate() - n.minTranslate();
            (0 === c ? 0 : (e - n.minTranslate()) / c) !== s &&
              n.updateProgress(e),
              n.emit('setTranslate', n.translate, t);
          },
          minTranslate: function () {
            return -this.snapGrid[0];
          },
          maxTranslate: function () {
            return -this.snapGrid[this.snapGrid.length - 1];
          },
          translateTo: function () {
            var e =
                arguments.length > 0 && void 0 !== arguments[0]
                  ? arguments[0]
                  : 0,
              t =
                arguments.length > 1 && void 0 !== arguments[1]
                  ? arguments[1]
                  : this.params.speed,
              n =
                !(arguments.length > 2 && void 0 !== arguments[2]) ||
                arguments[2],
              r =
                !(arguments.length > 3 && void 0 !== arguments[3]) ||
                arguments[3],
              i = arguments.length > 4 ? arguments[4] : void 0,
              a = this,
              o = a.params,
              s = a.wrapperEl;
            if (a.animating && o.preventInteractionOnTransition) return !1;
            var l,
              u = a.minTranslate(),
              c = a.maxTranslate();
            if (
              ((l = r && e > u ? u : r && e < c ? c : e),
              a.updateProgress(l),
              o.cssMode)
            ) {
              var d = a.isHorizontal();
              if (0 === t) s[d ? 'scrollLeft' : 'scrollTop'] = -l;
              else {
                var f;
                if (!a.support.smoothScroll)
                  return (
                    jl({
                      swiper: a,
                      targetPosition: -l,
                      side: d ? 'left' : 'top',
                    }),
                    !0
                  );
                s.scrollTo(
                  (Pe((f = {}), d ? 'left' : 'top', -l),
                  Pe(f, 'behavior', 'smooth'),
                  f),
                );
              }
              return !0;
            }
            return (
              0 === t
                ? (a.setTransition(0),
                  a.setTranslate(l),
                  n &&
                    (a.emit('beforeTransitionStart', t, i),
                    a.emit('transitionEnd')))
                : (a.setTransition(t),
                  a.setTranslate(l),
                  n &&
                    (a.emit('beforeTransitionStart', t, i),
                    a.emit('transitionStart')),
                  a.animating ||
                    ((a.animating = !0),
                    a.onTranslateToWrapperTransitionEnd ||
                      (a.onTranslateToWrapperTransitionEnd = function (e) {
                        a &&
                          !a.destroyed &&
                          e.target === this &&
                          (a.$wrapperEl[0].removeEventListener(
                            'transitionend',
                            a.onTranslateToWrapperTransitionEnd,
                          ),
                          a.$wrapperEl[0].removeEventListener(
                            'webkitTransitionEnd',
                            a.onTranslateToWrapperTransitionEnd,
                          ),
                          (a.onTranslateToWrapperTransitionEnd = null),
                          delete a.onTranslateToWrapperTransitionEnd,
                          n && a.emit('transitionEnd'));
                      }),
                    a.$wrapperEl[0].addEventListener(
                      'transitionend',
                      a.onTranslateToWrapperTransitionEnd,
                    ),
                    a.$wrapperEl[0].addEventListener(
                      'webkitTransitionEnd',
                      a.onTranslateToWrapperTransitionEnd,
                    ))),
              !0
            );
          },
        };
        function Dl(e) {
          var t = e.swiper,
            n = e.runCallbacks,
            r = e.direction,
            i = e.step,
            a = t.activeIndex,
            o = t.previousIndex,
            s = r;
          if (
            (s || (s = a > o ? 'next' : a < o ? 'prev' : 'reset'),
            t.emit('transition'.concat(i)),
            n && a !== o)
          ) {
            if ('reset' === s)
              return void t.emit('slideResetTransition'.concat(i));
            t.emit('slideChangeTransition'.concat(i)),
              'next' === s
                ? t.emit('slideNextTransition'.concat(i))
                : t.emit('slidePrevTransition'.concat(i));
          }
        }
        var zl = {
          setTransition: function (e, t) {
            var n = this;
            n.params.cssMode || n.$wrapperEl.transition(e),
              n.emit('setTransition', e, t);
          },
          transitionStart: function () {
            var e =
                !(arguments.length > 0 && void 0 !== arguments[0]) ||
                arguments[0],
              t = arguments.length > 1 ? arguments[1] : void 0,
              n = this,
              r = n.params;
            r.cssMode ||
              (r.autoHeight && n.updateAutoHeight(),
              Dl({ swiper: n, runCallbacks: e, direction: t, step: 'Start' }));
          },
          transitionEnd: function () {
            var e =
                !(arguments.length > 0 && void 0 !== arguments[0]) ||
                arguments[0],
              t = arguments.length > 1 ? arguments[1] : void 0,
              n = this,
              r = n.params;
            (n.animating = !1),
              r.cssMode ||
                (n.setTransition(0),
                Dl({ swiper: n, runCallbacks: e, direction: t, step: 'End' }));
          },
        };
        var Vl = {
          slideTo: function () {
            var e =
                arguments.length > 0 && void 0 !== arguments[0]
                  ? arguments[0]
                  : 0,
              t =
                arguments.length > 1 && void 0 !== arguments[1]
                  ? arguments[1]
                  : this.params.speed,
              n =
                !(arguments.length > 2 && void 0 !== arguments[2]) ||
                arguments[2],
              r = arguments.length > 3 ? arguments[3] : void 0,
              i = arguments.length > 4 ? arguments[4] : void 0;
            if ('number' !== typeof e && 'string' !== typeof e)
              throw new Error(
                "The 'index' argument cannot have type other than 'number' or 'string'. [".concat(
                  typeof e,
                  '] given.',
                ),
              );
            if ('string' === typeof e) {
              var a = parseInt(e, 10),
                o = isFinite(a);
              if (!o)
                throw new Error(
                  "The passed-in 'index' (string) couldn't be converted to 'number'. [".concat(
                    e,
                    '] given.',
                  ),
                );
              e = a;
            }
            var s = this,
              l = e;
            l < 0 && (l = 0);
            var u = s.params,
              c = s.snapGrid,
              d = s.slidesGrid,
              f = s.previousIndex,
              p = s.activeIndex,
              h = s.rtlTranslate,
              v = s.wrapperEl,
              m = s.enabled;
            if (
              (s.animating && u.preventInteractionOnTransition) ||
              (!m && !r && !i)
            )
              return !1;
            var g = Math.min(s.params.slidesPerGroupSkip, l),
              y = g + Math.floor((l - g) / s.params.slidesPerGroup);
            y >= c.length && (y = c.length - 1),
              (p || u.initialSlide || 0) === (f || 0) &&
                n &&
                s.emit('beforeSlideChangeStart');
            var b,
              w = -c[y];
            if ((s.updateProgress(w), u.normalizeSlideIndex))
              for (var x = 0; x < d.length; x += 1) {
                var S = -Math.floor(100 * w),
                  E = Math.floor(100 * d[x]),
                  k = Math.floor(100 * d[x + 1]);
                'undefined' !== typeof d[x + 1]
                  ? S >= E && S < k - (k - E) / 2
                    ? (l = x)
                    : S >= E && S < k && (l = x + 1)
                  : S >= E && (l = x);
              }
            if (s.initialized && l !== p) {
              if (!s.allowSlideNext && w < s.translate && w < s.minTranslate())
                return !1;
              if (
                !s.allowSlidePrev &&
                w > s.translate &&
                w > s.maxTranslate() &&
                (p || 0) !== l
              )
                return !1;
            }
            if (
              ((b = l > p ? 'next' : l < p ? 'prev' : 'reset'),
              (h && -w === s.translate) || (!h && w === s.translate))
            )
              return (
                s.updateActiveIndex(l),
                u.autoHeight && s.updateAutoHeight(),
                s.updateSlidesClasses(),
                'slide' !== u.effect && s.setTranslate(w),
                'reset' !== b &&
                  (s.transitionStart(n, b), s.transitionEnd(n, b)),
                !1
              );
            if (u.cssMode) {
              var C = s.isHorizontal(),
                T = h ? w : -w;
              if (0 === t) {
                var P = s.virtual && s.params.virtual.enabled;
                P &&
                  ((s.wrapperEl.style.scrollSnapType = 'none'),
                  (s._immediateVirtual = !0)),
                  (v[C ? 'scrollLeft' : 'scrollTop'] = T),
                  P &&
                    requestAnimationFrame(function () {
                      (s.wrapperEl.style.scrollSnapType = ''),
                        (s._swiperImmediateVirtual = !1);
                    });
              } else {
                var O;
                if (!s.support.smoothScroll)
                  return (
                    jl({
                      swiper: s,
                      targetPosition: T,
                      side: C ? 'left' : 'top',
                    }),
                    !0
                  );
                v.scrollTo(
                  (Pe((O = {}), C ? 'left' : 'top', T),
                  Pe(O, 'behavior', 'smooth'),
                  O),
                );
              }
              return !0;
            }
            return (
              s.setTransition(t),
              s.setTranslate(w),
              s.updateActiveIndex(l),
              s.updateSlidesClasses(),
              s.emit('beforeTransitionStart', t, r),
              s.transitionStart(n, b),
              0 === t
                ? s.transitionEnd(n, b)
                : s.animating ||
                  ((s.animating = !0),
                  s.onSlideToWrapperTransitionEnd ||
                    (s.onSlideToWrapperTransitionEnd = function (e) {
                      s &&
                        !s.destroyed &&
                        e.target === this &&
                        (s.$wrapperEl[0].removeEventListener(
                          'transitionend',
                          s.onSlideToWrapperTransitionEnd,
                        ),
                        s.$wrapperEl[0].removeEventListener(
                          'webkitTransitionEnd',
                          s.onSlideToWrapperTransitionEnd,
                        ),
                        (s.onSlideToWrapperTransitionEnd = null),
                        delete s.onSlideToWrapperTransitionEnd,
                        s.transitionEnd(n, b));
                    }),
                  s.$wrapperEl[0].addEventListener(
                    'transitionend',
                    s.onSlideToWrapperTransitionEnd,
                  ),
                  s.$wrapperEl[0].addEventListener(
                    'webkitTransitionEnd',
                    s.onSlideToWrapperTransitionEnd,
                  )),
              !0
            );
          },
          slideToLoop: function () {
            var e =
                arguments.length > 0 && void 0 !== arguments[0]
                  ? arguments[0]
                  : 0,
              t =
                arguments.length > 1 && void 0 !== arguments[1]
                  ? arguments[1]
                  : this.params.speed,
              n =
                !(arguments.length > 2 && void 0 !== arguments[2]) ||
                arguments[2],
              r = arguments.length > 3 ? arguments[3] : void 0,
              i = this,
              a = e;
            return (
              i.params.loop && (a += i.loopedSlides), i.slideTo(a, t, n, r)
            );
          },
          slideNext: function () {
            var e =
                arguments.length > 0 && void 0 !== arguments[0]
                  ? arguments[0]
                  : this.params.speed,
              t =
                !(arguments.length > 1 && void 0 !== arguments[1]) ||
                arguments[1],
              n = arguments.length > 2 ? arguments[2] : void 0,
              r = this,
              i = r.animating,
              a = r.enabled,
              o = r.params;
            if (!a) return r;
            var s = o.slidesPerGroup;
            'auto' === o.slidesPerView &&
              1 === o.slidesPerGroup &&
              o.slidesPerGroupAuto &&
              (s = Math.max(r.slidesPerViewDynamic('current', !0), 1));
            var l = r.activeIndex < o.slidesPerGroupSkip ? 1 : s;
            if (o.loop) {
              if (i && o.loopPreventsSlide) return !1;
              r.loopFix(), (r._clientLeft = r.$wrapperEl[0].clientLeft);
            }
            return o.rewind && r.isEnd
              ? r.slideTo(0, e, t, n)
              : r.slideTo(r.activeIndex + l, e, t, n);
          },
          slidePrev: function () {
            var e =
                arguments.length > 0 && void 0 !== arguments[0]
                  ? arguments[0]
                  : this.params.speed,
              t =
                !(arguments.length > 1 && void 0 !== arguments[1]) ||
                arguments[1],
              n = arguments.length > 2 ? arguments[2] : void 0,
              r = this,
              i = r.params,
              a = r.animating,
              o = r.snapGrid,
              s = r.slidesGrid,
              l = r.rtlTranslate,
              u = r.enabled;
            if (!u) return r;
            if (i.loop) {
              if (a && i.loopPreventsSlide) return !1;
              r.loopFix(), (r._clientLeft = r.$wrapperEl[0].clientLeft);
            }
            var c = l ? r.translate : -r.translate;
            function d(e) {
              return e < 0 ? -Math.floor(Math.abs(e)) : Math.floor(e);
            }
            var f,
              p = d(c),
              h = o.map(function (e) {
                return d(e);
              }),
              v = o[h.indexOf(p) - 1];
            'undefined' === typeof v &&
              i.cssMode &&
              (o.forEach(function (e, t) {
                p >= e && (f = t);
              }),
              'undefined' !== typeof f && (v = o[f > 0 ? f - 1 : f]));
            var m = 0;
            return (
              'undefined' !== typeof v &&
                ((m = s.indexOf(v)) < 0 && (m = r.activeIndex - 1),
                'auto' === i.slidesPerView &&
                  1 === i.slidesPerGroup &&
                  i.slidesPerGroupAuto &&
                  ((m = m - r.slidesPerViewDynamic('previous', !0) + 1),
                  (m = Math.max(m, 0)))),
              i.rewind && r.isBeginning
                ? r.slideTo(r.slides.length - 1, e, t, n)
                : r.slideTo(m, e, t, n)
            );
          },
          slideReset: function () {
            var e =
                arguments.length > 0 && void 0 !== arguments[0]
                  ? arguments[0]
                  : this.params.speed,
              t =
                !(arguments.length > 1 && void 0 !== arguments[1]) ||
                arguments[1],
              n = arguments.length > 2 ? arguments[2] : void 0,
              r = this;
            return r.slideTo(r.activeIndex, e, t, n);
          },
          slideToClosest: function () {
            var e =
                arguments.length > 0 && void 0 !== arguments[0]
                  ? arguments[0]
                  : this.params.speed,
              t =
                !(arguments.length > 1 && void 0 !== arguments[1]) ||
                arguments[1],
              n = arguments.length > 2 ? arguments[2] : void 0,
              r =
                arguments.length > 3 && void 0 !== arguments[3]
                  ? arguments[3]
                  : 0.5,
              i = this,
              a = i.activeIndex,
              o = Math.min(i.params.slidesPerGroupSkip, a),
              s = o + Math.floor((a - o) / i.params.slidesPerGroup),
              l = i.rtlTranslate ? i.translate : -i.translate;
            if (l >= i.snapGrid[s]) {
              var u = i.snapGrid[s],
                c = i.snapGrid[s + 1];
              l - u > (c - u) * r && (a += i.params.slidesPerGroup);
            } else {
              var d = i.snapGrid[s - 1],
                f = i.snapGrid[s];
              l - d <= (f - d) * r && (a -= i.params.slidesPerGroup);
            }
            return (
              (a = Math.max(a, 0)),
              (a = Math.min(a, i.slidesGrid.length - 1)),
              i.slideTo(a, e, t, n)
            );
          },
          slideToClickedSlide: function () {
            var e,
              t = this,
              n = t.params,
              r = t.$wrapperEl,
              i =
                'auto' === n.slidesPerView
                  ? t.slidesPerViewDynamic()
                  : n.slidesPerView,
              a = t.clickedIndex;
            if (n.loop) {
              if (t.animating) return;
              (e = parseInt(
                bl(t.clickedSlide).attr('data-swiper-slide-index'),
                10,
              )),
                n.centeredSlides
                  ? a < t.loopedSlides - i / 2 ||
                    a > t.slides.length - t.loopedSlides + i / 2
                    ? (t.loopFix(),
                      (a = r
                        .children(
                          '.'
                            .concat(n.slideClass, '[data-swiper-slide-index="')
                            .concat(e, '"]:not(.')
                            .concat(n.slideDuplicateClass, ')'),
                        )
                        .eq(0)
                        .index()),
                      xl(function () {
                        t.slideTo(a);
                      }))
                    : t.slideTo(a)
                  : a > t.slides.length - i
                  ? (t.loopFix(),
                    (a = r
                      .children(
                        '.'
                          .concat(n.slideClass, '[data-swiper-slide-index="')
                          .concat(e, '"]:not(.')
                          .concat(n.slideDuplicateClass, ')'),
                      )
                      .eq(0)
                      .index()),
                    xl(function () {
                      t.slideTo(a);
                    }))
                  : t.slideTo(a);
            } else t.slideTo(a);
          },
        };
        var Fl = {
          loopCreate: function () {
            var e = this,
              t = Js(),
              n = e.params,
              r = e.$wrapperEl,
              i = r.children().length > 0 ? bl(r.children()[0].parentNode) : r;
            i.children(
              '.'.concat(n.slideClass, '.').concat(n.slideDuplicateClass),
            ).remove();
            var a = i.children('.'.concat(n.slideClass));
            if (n.loopFillGroupWithBlank) {
              var o = n.slidesPerGroup - (a.length % n.slidesPerGroup);
              if (o !== n.slidesPerGroup) {
                for (var s = 0; s < o; s += 1) {
                  var l = bl(t.createElement('div')).addClass(
                    ''.concat(n.slideClass, ' ').concat(n.slideBlankClass),
                  );
                  i.append(l);
                }
                a = i.children('.'.concat(n.slideClass));
              }
            }
            'auto' !== n.slidesPerView ||
              n.loopedSlides ||
              (n.loopedSlides = a.length),
              (e.loopedSlides = Math.ceil(
                parseFloat(n.loopedSlides || n.slidesPerView, 10),
              )),
              (e.loopedSlides += n.loopAdditionalSlides),
              e.loopedSlides > a.length && (e.loopedSlides = a.length);
            var u = [],
              c = [];
            a.each(function (t, n) {
              var r = bl(t);
              n < e.loopedSlides && c.push(t),
                n < a.length && n >= a.length - e.loopedSlides && u.push(t),
                r.attr('data-swiper-slide-index', n);
            });
            for (var d = 0; d < c.length; d += 1)
              i.append(bl(c[d].cloneNode(!0)).addClass(n.slideDuplicateClass));
            for (var f = u.length - 1; f >= 0; f -= 1)
              i.prepend(bl(u[f].cloneNode(!0)).addClass(n.slideDuplicateClass));
          },
          loopFix: function () {
            var e = this;
            e.emit('beforeLoopFix');
            var t,
              n = e.activeIndex,
              r = e.slides,
              i = e.loopedSlides,
              a = e.allowSlidePrev,
              o = e.allowSlideNext,
              s = e.snapGrid,
              l = e.rtlTranslate;
            (e.allowSlidePrev = !0), (e.allowSlideNext = !0);
            var u = -s[n] - e.getTranslate();
            if (n < i)
              (t = r.length - 3 * i + n),
                (t += i),
                e.slideTo(t, 0, !1, !0) &&
                  0 !== u &&
                  e.setTranslate((l ? -e.translate : e.translate) - u);
            else if (n >= r.length - i) {
              (t = -r.length + n + i),
                (t += i),
                e.slideTo(t, 0, !1, !0) &&
                  0 !== u &&
                  e.setTranslate((l ? -e.translate : e.translate) - u);
            }
            (e.allowSlidePrev = a), (e.allowSlideNext = o), e.emit('loopFix');
          },
          loopDestroy: function () {
            var e = this,
              t = e.$wrapperEl,
              n = e.params,
              r = e.slides;
            t
              .children(
                '.'
                  .concat(n.slideClass, '.')
                  .concat(n.slideDuplicateClass, ',.')
                  .concat(n.slideClass, '.')
                  .concat(n.slideBlankClass),
              )
              .remove(),
              r.removeAttr('data-swiper-slide-index');
          },
        };
        function Bl(e) {
          var t = this,
            n = Js(),
            r = el(),
            i = t.touchEventsData,
            a = t.params,
            o = t.touches;
          if (
            t.enabled &&
            (!t.animating || !a.preventInteractionOnTransition)
          ) {
            !t.animating && a.cssMode && a.loop && t.loopFix();
            var s = e;
            s.originalEvent && (s = s.originalEvent);
            var l = bl(s.target);
            if (
              ('wrapper' !== a.touchEventsTarget ||
                l.closest(t.wrapperEl).length) &&
              ((i.isTouchEvent = 'touchstart' === s.type),
              (i.isTouchEvent || !('which' in s) || 3 !== s.which) &&
                !(!i.isTouchEvent && 'button' in s && s.button > 0) &&
                (!i.isTouched || !i.isMoved))
            ) {
              !!a.noSwipingClass &&
                '' !== a.noSwipingClass &&
                s.target &&
                s.target.shadowRoot &&
                e.path &&
                e.path[0] &&
                (l = bl(e.path[0]));
              var u = a.noSwipingSelector
                  ? a.noSwipingSelector
                  : '.'.concat(a.noSwipingClass),
                c = !(!s.target || !s.target.shadowRoot);
              if (
                a.noSwiping &&
                (c
                  ? (function (e) {
                      function t(n) {
                        return n && n !== Js() && n !== el()
                          ? (n.assignedSlot && (n = n.assignedSlot),
                            n.closest(e) || t(n.getRootNode().host))
                          : null;
                      }
                      return t(
                        arguments.length > 1 && void 0 !== arguments[1]
                          ? arguments[1]
                          : this,
                      );
                    })(u, s.target)
                  : l.closest(u)[0])
              )
                t.allowClick = !0;
              else if (!a.swipeHandler || l.closest(a.swipeHandler)[0]) {
                (o.currentX =
                  'touchstart' === s.type ? s.targetTouches[0].pageX : s.pageX),
                  (o.currentY =
                    'touchstart' === s.type
                      ? s.targetTouches[0].pageY
                      : s.pageY);
                var d = o.currentX,
                  f = o.currentY,
                  p = a.edgeSwipeDetection || a.iOSEdgeSwipeDetection,
                  h = a.edgeSwipeThreshold || a.iOSEdgeSwipeThreshold;
                if (p && (d <= h || d >= r.innerWidth - h)) {
                  if ('prevent' !== p) return;
                  e.preventDefault();
                }
                if (
                  (Object.assign(i, {
                    isTouched: !0,
                    isMoved: !1,
                    allowTouchCallbacks: !0,
                    isScrolling: void 0,
                    startMoving: void 0,
                  }),
                  (o.startX = d),
                  (o.startY = f),
                  (i.touchStartTime = Sl()),
                  (t.allowClick = !0),
                  t.updateSize(),
                  (t.swipeDirection = void 0),
                  a.threshold > 0 && (i.allowThresholdMove = !1),
                  'touchstart' !== s.type)
                ) {
                  var v = !0;
                  l.is(i.focusableElements) && (v = !1),
                    n.activeElement &&
                      bl(n.activeElement).is(i.focusableElements) &&
                      n.activeElement !== l[0] &&
                      n.activeElement.blur();
                  var m = v && t.allowTouchMove && a.touchStartPreventDefault;
                  (!a.touchStartForcePreventDefault && !m) ||
                    l[0].isContentEditable ||
                    s.preventDefault();
                }
                t.emit('touchStart', s);
              }
            }
          }
        }
        function Ul(e) {
          var t = Js(),
            n = this,
            r = n.touchEventsData,
            i = n.params,
            a = n.touches,
            o = n.rtlTranslate;
          if (n.enabled) {
            var s = e;
            if ((s.originalEvent && (s = s.originalEvent), r.isTouched)) {
              if (!r.isTouchEvent || 'touchmove' === s.type) {
                var l =
                    'touchmove' === s.type &&
                    s.targetTouches &&
                    (s.targetTouches[0] || s.changedTouches[0]),
                  u = 'touchmove' === s.type ? l.pageX : s.pageX,
                  c = 'touchmove' === s.type ? l.pageY : s.pageY;
                if (s.preventedByNestedSwiper)
                  return (a.startX = u), void (a.startY = c);
                if (!n.allowTouchMove)
                  return (
                    (n.allowClick = !1),
                    void (
                      r.isTouched &&
                      (Object.assign(a, {
                        startX: u,
                        startY: c,
                        currentX: u,
                        currentY: c,
                      }),
                      (r.touchStartTime = Sl()))
                    )
                  );
                if (r.isTouchEvent && i.touchReleaseOnEdges && !i.loop)
                  if (n.isVertical()) {
                    if (
                      (c < a.startY && n.translate <= n.maxTranslate()) ||
                      (c > a.startY && n.translate >= n.minTranslate())
                    )
                      return (r.isTouched = !1), void (r.isMoved = !1);
                  } else if (
                    (u < a.startX && n.translate <= n.maxTranslate()) ||
                    (u > a.startX && n.translate >= n.minTranslate())
                  )
                    return;
                if (
                  r.isTouchEvent &&
                  t.activeElement &&
                  s.target === t.activeElement &&
                  bl(s.target).is(r.focusableElements)
                )
                  return (r.isMoved = !0), void (n.allowClick = !1);
                if (
                  (r.allowTouchCallbacks && n.emit('touchMove', s),
                  !(s.targetTouches && s.targetTouches.length > 1))
                ) {
                  (a.currentX = u), (a.currentY = c);
                  var d = a.currentX - a.startX,
                    f = a.currentY - a.startY;
                  if (
                    !(
                      n.params.threshold &&
                      Math.sqrt(Math.pow(d, 2) + Math.pow(f, 2)) <
                        n.params.threshold
                    )
                  ) {
                    var p;
                    if ('undefined' === typeof r.isScrolling)
                      (n.isHorizontal() && a.currentY === a.startY) ||
                      (n.isVertical() && a.currentX === a.startX)
                        ? (r.isScrolling = !1)
                        : d * d + f * f >= 25 &&
                          ((p =
                            (180 * Math.atan2(Math.abs(f), Math.abs(d))) /
                            Math.PI),
                          (r.isScrolling = n.isHorizontal()
                            ? p > i.touchAngle
                            : 90 - p > i.touchAngle));
                    if (
                      (r.isScrolling && n.emit('touchMoveOpposite', s),
                      'undefined' === typeof r.startMoving &&
                        ((a.currentX === a.startX && a.currentY === a.startY) ||
                          (r.startMoving = !0)),
                      r.isScrolling)
                    )
                      r.isTouched = !1;
                    else if (r.startMoving) {
                      (n.allowClick = !1),
                        !i.cssMode && s.cancelable && s.preventDefault(),
                        i.touchMoveStopPropagation &&
                          !i.nested &&
                          s.stopPropagation(),
                        r.isMoved ||
                          (i.loop && !i.cssMode && n.loopFix(),
                          (r.startTranslate = n.getTranslate()),
                          n.setTransition(0),
                          n.animating &&
                            n.$wrapperEl.trigger(
                              'webkitTransitionEnd transitionend',
                            ),
                          (r.allowMomentumBounce = !1),
                          !i.grabCursor ||
                            (!0 !== n.allowSlideNext &&
                              !0 !== n.allowSlidePrev) ||
                            n.setGrabCursor(!0),
                          n.emit('sliderFirstMove', s)),
                        n.emit('sliderMove', s),
                        (r.isMoved = !0);
                      var h = n.isHorizontal() ? d : f;
                      (a.diff = h),
                        (h *= i.touchRatio),
                        o && (h = -h),
                        (n.swipeDirection = h > 0 ? 'prev' : 'next'),
                        (r.currentTranslate = h + r.startTranslate);
                      var v = !0,
                        m = i.resistanceRatio;
                      if (
                        (i.touchReleaseOnEdges && (m = 0),
                        h > 0 && r.currentTranslate > n.minTranslate()
                          ? ((v = !1),
                            i.resistance &&
                              (r.currentTranslate =
                                n.minTranslate() -
                                1 +
                                Math.pow(
                                  -n.minTranslate() + r.startTranslate + h,
                                  m,
                                )))
                          : h < 0 &&
                            r.currentTranslate < n.maxTranslate() &&
                            ((v = !1),
                            i.resistance &&
                              (r.currentTranslate =
                                n.maxTranslate() +
                                1 -
                                Math.pow(
                                  n.maxTranslate() - r.startTranslate - h,
                                  m,
                                ))),
                        v && (s.preventedByNestedSwiper = !0),
                        !n.allowSlideNext &&
                          'next' === n.swipeDirection &&
                          r.currentTranslate < r.startTranslate &&
                          (r.currentTranslate = r.startTranslate),
                        !n.allowSlidePrev &&
                          'prev' === n.swipeDirection &&
                          r.currentTranslate > r.startTranslate &&
                          (r.currentTranslate = r.startTranslate),
                        n.allowSlidePrev ||
                          n.allowSlideNext ||
                          (r.currentTranslate = r.startTranslate),
                        i.threshold > 0)
                      ) {
                        if (
                          !(Math.abs(h) > i.threshold || r.allowThresholdMove)
                        )
                          return void (r.currentTranslate = r.startTranslate);
                        if (!r.allowThresholdMove)
                          return (
                            (r.allowThresholdMove = !0),
                            (a.startX = a.currentX),
                            (a.startY = a.currentY),
                            (r.currentTranslate = r.startTranslate),
                            void (a.diff = n.isHorizontal()
                              ? a.currentX - a.startX
                              : a.currentY - a.startY)
                          );
                      }
                      i.followFinger &&
                        !i.cssMode &&
                        (((i.freeMode && i.freeMode.enabled && n.freeMode) ||
                          i.watchSlidesProgress) &&
                          (n.updateActiveIndex(), n.updateSlidesClasses()),
                        n.params.freeMode &&
                          i.freeMode.enabled &&
                          n.freeMode &&
                          n.freeMode.onTouchMove(),
                        n.updateProgress(r.currentTranslate),
                        n.setTranslate(r.currentTranslate));
                    }
                  }
                }
              }
            } else
              r.startMoving && r.isScrolling && n.emit('touchMoveOpposite', s);
          }
        }
        function $l(e) {
          var t = this,
            n = t.touchEventsData,
            r = t.params,
            i = t.touches,
            a = t.rtlTranslate,
            o = t.slidesGrid;
          if (t.enabled) {
            var s = e;
            if (
              (s.originalEvent && (s = s.originalEvent),
              n.allowTouchCallbacks && t.emit('touchEnd', s),
              (n.allowTouchCallbacks = !1),
              !n.isTouched)
            )
              return (
                n.isMoved && r.grabCursor && t.setGrabCursor(!1),
                (n.isMoved = !1),
                void (n.startMoving = !1)
              );
            r.grabCursor &&
              n.isMoved &&
              n.isTouched &&
              (!0 === t.allowSlideNext || !0 === t.allowSlidePrev) &&
              t.setGrabCursor(!1);
            var l,
              u = Sl(),
              c = u - n.touchStartTime;
            if (t.allowClick) {
              var d = s.path || (s.composedPath && s.composedPath());
              t.updateClickedSlide((d && d[0]) || s.target),
                t.emit('tap click', s),
                c < 300 &&
                  u - n.lastClickTime < 300 &&
                  t.emit('doubleTap doubleClick', s);
            }
            if (
              ((n.lastClickTime = Sl()),
              xl(function () {
                t.destroyed || (t.allowClick = !0);
              }),
              !n.isTouched ||
                !n.isMoved ||
                !t.swipeDirection ||
                0 === i.diff ||
                n.currentTranslate === n.startTranslate)
            )
              return (
                (n.isTouched = !1), (n.isMoved = !1), void (n.startMoving = !1)
              );
            if (
              ((n.isTouched = !1),
              (n.isMoved = !1),
              (n.startMoving = !1),
              (l = r.followFinger
                ? a
                  ? t.translate
                  : -t.translate
                : -n.currentTranslate),
              !r.cssMode)
            )
              if (t.params.freeMode && r.freeMode.enabled)
                t.freeMode.onTouchEnd({ currentPos: l });
              else {
                for (
                  var f = 0, p = t.slidesSizesGrid[0], h = 0;
                  h < o.length;
                  h += h < r.slidesPerGroupSkip ? 1 : r.slidesPerGroup
                ) {
                  var v = h < r.slidesPerGroupSkip - 1 ? 1 : r.slidesPerGroup;
                  'undefined' !== typeof o[h + v]
                    ? l >= o[h] &&
                      l < o[h + v] &&
                      ((f = h), (p = o[h + v] - o[h]))
                    : l >= o[h] &&
                      ((f = h), (p = o[o.length - 1] - o[o.length - 2]));
                }
                var m = (l - o[f]) / p,
                  g = f < r.slidesPerGroupSkip - 1 ? 1 : r.slidesPerGroup;
                if (c > r.longSwipesMs) {
                  if (!r.longSwipes) return void t.slideTo(t.activeIndex);
                  'next' === t.swipeDirection &&
                    (m >= r.longSwipesRatio ? t.slideTo(f + g) : t.slideTo(f)),
                    'prev' === t.swipeDirection &&
                      (m > 1 - r.longSwipesRatio
                        ? t.slideTo(f + g)
                        : t.slideTo(f));
                } else {
                  if (!r.shortSwipes) return void t.slideTo(t.activeIndex);
                  t.navigation &&
                  (s.target === t.navigation.nextEl ||
                    s.target === t.navigation.prevEl)
                    ? s.target === t.navigation.nextEl
                      ? t.slideTo(f + g)
                      : t.slideTo(f)
                    : ('next' === t.swipeDirection && t.slideTo(f + g),
                      'prev' === t.swipeDirection && t.slideTo(f));
                }
              }
          }
        }
        function ql() {
          var e = this,
            t = e.params,
            n = e.el;
          if (!n || 0 !== n.offsetWidth) {
            t.breakpoints && e.setBreakpoint();
            var r = e.allowSlideNext,
              i = e.allowSlidePrev,
              a = e.snapGrid;
            (e.allowSlideNext = !0),
              (e.allowSlidePrev = !0),
              e.updateSize(),
              e.updateSlides(),
              e.updateSlidesClasses(),
              ('auto' === t.slidesPerView || t.slidesPerView > 1) &&
              e.isEnd &&
              !e.isBeginning &&
              !e.params.centeredSlides
                ? e.slideTo(e.slides.length - 1, 0, !1, !0)
                : e.slideTo(e.activeIndex, 0, !1, !0),
              e.autoplay &&
                e.autoplay.running &&
                e.autoplay.paused &&
                e.autoplay.run(),
              (e.allowSlidePrev = i),
              (e.allowSlideNext = r),
              e.params.watchOverflow && a !== e.snapGrid && e.checkOverflow();
          }
        }
        function Hl(e) {
          var t = this;
          t.enabled &&
            (t.allowClick ||
              (t.params.preventClicks && e.preventDefault(),
              t.params.preventClicksPropagation &&
                t.animating &&
                (e.stopPropagation(), e.stopImmediatePropagation())));
        }
        function Wl() {
          var e = this,
            t = e.wrapperEl,
            n = e.rtlTranslate;
          if (e.enabled) {
            (e.previousTranslate = e.translate),
              e.isHorizontal()
                ? (e.translate = -t.scrollLeft)
                : (e.translate = -t.scrollTop),
              -0 === e.translate && (e.translate = 0),
              e.updateActiveIndex(),
              e.updateSlidesClasses();
            var r = e.maxTranslate() - e.minTranslate();
            (0 === r ? 0 : (e.translate - e.minTranslate()) / r) !==
              e.progress && e.updateProgress(n ? -e.translate : e.translate),
              e.emit('setTranslate', e.translate, !1);
          }
        }
        var Gl = !1;
        function Yl() {}
        var Xl = function (e, t) {
          var n = Js(),
            r = e.params,
            i = e.touchEvents,
            a = e.el,
            o = e.wrapperEl,
            s = e.device,
            l = e.support,
            u = !!r.nested,
            c = 'on' === t ? 'addEventListener' : 'removeEventListener',
            d = t;
          if (l.touch) {
            var f = !(
              'touchstart' !== i.start ||
              !l.passiveListener ||
              !r.passiveListeners
            ) && { passive: !0, capture: !1 };
            a[c](i.start, e.onTouchStart, f),
              a[c](
                i.move,
                e.onTouchMove,
                l.passiveListener ? { passive: !1, capture: u } : u,
              ),
              a[c](i.end, e.onTouchEnd, f),
              i.cancel && a[c](i.cancel, e.onTouchEnd, f);
          } else
            a[c](i.start, e.onTouchStart, !1),
              n[c](i.move, e.onTouchMove, u),
              n[c](i.end, e.onTouchEnd, !1);
          (r.preventClicks || r.preventClicksPropagation) &&
            a[c]('click', e.onClick, !0),
            r.cssMode && o[c]('scroll', e.onScroll),
            r.updateOnWindowResize
              ? e[d](
                  s.ios || s.android
                    ? 'resize orientationchange observerUpdate'
                    : 'resize observerUpdate',
                  ql,
                  !0,
                )
              : e[d]('observerUpdate', ql, !0);
        };
        var Ql = {
            attachEvents: function () {
              var e = this,
                t = Js(),
                n = e.params,
                r = e.support;
              (e.onTouchStart = Bl.bind(e)),
                (e.onTouchMove = Ul.bind(e)),
                (e.onTouchEnd = $l.bind(e)),
                n.cssMode && (e.onScroll = Wl.bind(e)),
                (e.onClick = Hl.bind(e)),
                r.touch &&
                  !Gl &&
                  (t.addEventListener('touchstart', Yl), (Gl = !0)),
                Xl(e, 'on');
            },
            detachEvents: function () {
              Xl(this, 'off');
            },
          },
          Kl = function (e, t) {
            return e.grid && t.grid && t.grid.rows > 1;
          };
        var Jl = {
          setBreakpoint: function () {
            var e = this,
              t = e.activeIndex,
              n = e.initialized,
              r = e.loopedSlides,
              i = void 0 === r ? 0 : r,
              a = e.params,
              o = e.$el,
              s = a.breakpoints;
            if (s && (!s || 0 !== Object.keys(s).length)) {
              var l = e.getBreakpoint(s, e.params.breakpointsBase, e.el);
              if (l && e.currentBreakpoint !== l) {
                var u = (l in s ? s[l] : void 0) || e.originalParams,
                  c = Kl(e, a),
                  d = Kl(e, u),
                  f = a.enabled;
                c && !d
                  ? (o.removeClass(
                      ''
                        .concat(a.containerModifierClass, 'grid ')
                        .concat(a.containerModifierClass, 'grid-column'),
                    ),
                    e.emitContainerClasses())
                  : !c &&
                    d &&
                    (o.addClass(''.concat(a.containerModifierClass, 'grid')),
                    ((u.grid.fill && 'column' === u.grid.fill) ||
                      (!u.grid.fill && 'column' === a.grid.fill)) &&
                      o.addClass(
                        ''.concat(a.containerModifierClass, 'grid-column'),
                      ),
                    e.emitContainerClasses());
                var p = u.direction && u.direction !== a.direction,
                  h = a.loop && (u.slidesPerView !== a.slidesPerView || p);
                p && n && e.changeDirection(), Pl(e.params, u);
                var v = e.params.enabled;
                Object.assign(e, {
                  allowTouchMove: e.params.allowTouchMove,
                  allowSlideNext: e.params.allowSlideNext,
                  allowSlidePrev: e.params.allowSlidePrev,
                }),
                  f && !v ? e.disable() : !f && v && e.enable(),
                  (e.currentBreakpoint = l),
                  e.emit('_beforeBreakpoint', u),
                  h &&
                    n &&
                    (e.loopDestroy(),
                    e.loopCreate(),
                    e.updateSlides(),
                    e.slideTo(t - i + e.loopedSlides, 0, !1)),
                  e.emit('breakpoint', u);
              }
            }
          },
          getBreakpoint: function (e) {
            var t =
                arguments.length > 1 && void 0 !== arguments[1]
                  ? arguments[1]
                  : 'window',
              n = arguments.length > 2 ? arguments[2] : void 0;
            if (e && ('container' !== t || n)) {
              var r = !1,
                i = el(),
                a = 'window' === t ? i.innerHeight : n.clientHeight,
                o = Object.keys(e).map(function (e) {
                  if ('string' === typeof e && 0 === e.indexOf('@')) {
                    var t = parseFloat(e.substr(1));
                    return { value: a * t, point: e };
                  }
                  return { value: e, point: e };
                });
              o.sort(function (e, t) {
                return parseInt(e.value, 10) - parseInt(t.value, 10);
              });
              for (var s = 0; s < o.length; s += 1) {
                var l = o[s],
                  u = l.point,
                  c = l.value;
                'window' === t
                  ? i.matchMedia('(min-width: '.concat(c, 'px)')).matches &&
                    (r = u)
                  : c <= n.clientWidth && (r = u);
              }
              return r || 'max';
            }
          },
        };
        var Zl = {
          addClasses: function () {
            var e = this,
              t = e.classNames,
              n = e.params,
              r = e.rtl,
              i = e.$el,
              a = e.device,
              o = e.support,
              s = (function (e, t) {
                var n = [];
                return (
                  e.forEach(function (e) {
                    'object' === typeof e
                      ? Object.keys(e).forEach(function (r) {
                          e[r] && n.push(t + r);
                        })
                      : 'string' === typeof e && n.push(t + e);
                  }),
                  n
                );
              })(
                [
                  'initialized',
                  n.direction,
                  { 'pointer-events': !o.touch },
                  { 'free-mode': e.params.freeMode && n.freeMode.enabled },
                  { autoheight: n.autoHeight },
                  { rtl: r },
                  { grid: n.grid && n.grid.rows > 1 },
                  {
                    'grid-column':
                      n.grid && n.grid.rows > 1 && 'column' === n.grid.fill,
                  },
                  { android: a.android },
                  { ios: a.ios },
                  { 'css-mode': n.cssMode },
                  { centered: n.cssMode && n.centeredSlides },
                ],
                n.containerModifierClass,
              );
            t.push.apply(t, Xe(s)),
              i.addClass(Xe(t).join(' ')),
              e.emitContainerClasses();
          },
          removeClasses: function () {
            var e = this,
              t = e.$el,
              n = e.classNames;
            t.removeClass(n.join(' ')), e.emitContainerClasses();
          },
        };
        var eu = {
          init: !0,
          direction: 'horizontal',
          touchEventsTarget: 'wrapper',
          initialSlide: 0,
          speed: 300,
          cssMode: !1,
          updateOnWindowResize: !0,
          resizeObserver: !0,
          nested: !1,
          createElements: !1,
          enabled: !0,
          focusableElements:
            'input, select, option, textarea, button, video, label',
          width: null,
          height: null,
          preventInteractionOnTransition: !1,
          userAgent: null,
          url: null,
          edgeSwipeDetection: !1,
          edgeSwipeThreshold: 20,
          autoHeight: !1,
          setWrapperSize: !1,
          virtualTranslate: !1,
          effect: 'slide',
          breakpoints: void 0,
          breakpointsBase: 'window',
          spaceBetween: 0,
          slidesPerView: 1,
          slidesPerGroup: 1,
          slidesPerGroupSkip: 0,
          slidesPerGroupAuto: !1,
          centeredSlides: !1,
          centeredSlidesBounds: !1,
          slidesOffsetBefore: 0,
          slidesOffsetAfter: 0,
          normalizeSlideIndex: !0,
          centerInsufficientSlides: !1,
          watchOverflow: !0,
          roundLengths: !1,
          touchRatio: 1,
          touchAngle: 45,
          simulateTouch: !0,
          shortSwipes: !0,
          longSwipes: !0,
          longSwipesRatio: 0.5,
          longSwipesMs: 300,
          followFinger: !0,
          allowTouchMove: !0,
          threshold: 0,
          touchMoveStopPropagation: !1,
          touchStartPreventDefault: !0,
          touchStartForcePreventDefault: !1,
          touchReleaseOnEdges: !1,
          uniqueNavElements: !0,
          resistance: !0,
          resistanceRatio: 0.85,
          watchSlidesProgress: !1,
          grabCursor: !1,
          preventClicks: !0,
          preventClicksPropagation: !0,
          slideToClickedSlide: !1,
          preloadImages: !0,
          updateOnImagesReady: !0,
          loop: !1,
          loopAdditionalSlides: 0,
          loopedSlides: null,
          loopFillGroupWithBlank: !1,
          loopPreventsSlide: !0,
          rewind: !1,
          allowSlidePrev: !0,
          allowSlideNext: !0,
          swipeHandler: null,
          noSwiping: !0,
          noSwipingClass: 'swiper-no-swiping',
          noSwipingSelector: null,
          passiveListeners: !0,
          containerModifierClass: 'swiper-',
          slideClass: 'swiper-slide',
          slideBlankClass: 'swiper-slide-invisible-blank',
          slideActiveClass: 'swiper-slide-active',
          slideDuplicateActiveClass: 'swiper-slide-duplicate-active',
          slideVisibleClass: 'swiper-slide-visible',
          slideDuplicateClass: 'swiper-slide-duplicate',
          slideNextClass: 'swiper-slide-next',
          slideDuplicateNextClass: 'swiper-slide-duplicate-next',
          slidePrevClass: 'swiper-slide-prev',
          slideDuplicatePrevClass: 'swiper-slide-duplicate-prev',
          wrapperClass: 'swiper-wrapper',
          runCallbacksOnInit: !0,
          _emitClasses: !1,
        };
        function tu(e, t) {
          return function () {
            var n =
                arguments.length > 0 && void 0 !== arguments[0]
                  ? arguments[0]
                  : {},
              r = Object.keys(n)[0],
              i = n[r];
            'object' === typeof i && null !== i
              ? (['navigation', 'pagination', 'scrollbar'].indexOf(r) >= 0 &&
                  !0 === e[r] &&
                  (e[r] = { auto: !0 }),
                r in e && 'enabled' in i
                  ? (!0 === e[r] && (e[r] = { enabled: !0 }),
                    'object' !== typeof e[r] ||
                      'enabled' in e[r] ||
                      (e[r].enabled = !0),
                    e[r] || (e[r] = { enabled: !1 }),
                    Pl(t, n))
                  : Pl(t, n))
              : Pl(t, n);
          };
        }
        var nu = {
            eventsEmitter: Nl,
            update: Rl,
            translate: Il,
            transition: zl,
            slide: Vl,
            loop: Fl,
            grabCursor: {
              setGrabCursor: function (e) {
                var t = this;
                if (
                  !(
                    t.support.touch ||
                    !t.params.simulateTouch ||
                    (t.params.watchOverflow && t.isLocked) ||
                    t.params.cssMode
                  )
                ) {
                  var n =
                    'container' === t.params.touchEventsTarget
                      ? t.el
                      : t.wrapperEl;
                  (n.style.cursor = 'move'),
                    (n.style.cursor = e ? '-webkit-grabbing' : '-webkit-grab'),
                    (n.style.cursor = e ? '-moz-grabbin' : '-moz-grab'),
                    (n.style.cursor = e ? 'grabbing' : 'grab');
                }
              },
              unsetGrabCursor: function () {
                var e = this;
                e.support.touch ||
                  (e.params.watchOverflow && e.isLocked) ||
                  e.params.cssMode ||
                  (e[
                    'container' === e.params.touchEventsTarget
                      ? 'el'
                      : 'wrapperEl'
                  ].style.cursor = '');
              },
            },
            events: Ql,
            breakpoints: Jl,
            checkOverflow: {
              checkOverflow: function () {
                var e = this,
                  t = e.isLocked,
                  n = e.params,
                  r = n.slidesOffsetBefore;
                if (r) {
                  var i = e.slides.length - 1,
                    a = e.slidesGrid[i] + e.slidesSizesGrid[i] + 2 * r;
                  e.isLocked = e.size > a;
                } else e.isLocked = 1 === e.snapGrid.length;
                !0 === n.allowSlideNext && (e.allowSlideNext = !e.isLocked),
                  !0 === n.allowSlidePrev && (e.allowSlidePrev = !e.isLocked),
                  t && t !== e.isLocked && (e.isEnd = !1),
                  t !== e.isLocked && e.emit(e.isLocked ? 'lock' : 'unlock');
              },
            },
            classes: Zl,
            images: {
              loadImage: function (e, t, n, r, i, a) {
                var o,
                  s = el();
                function l() {
                  a && a();
                }
                bl(e).parent('picture')[0] || (e.complete && i)
                  ? l()
                  : t
                  ? (((o = new s.Image()).onload = l),
                    (o.onerror = l),
                    r && (o.sizes = r),
                    n && (o.srcset = n),
                    t && (o.src = t))
                  : l();
              },
              preloadImages: function () {
                var e = this;
                function t() {
                  'undefined' !== typeof e &&
                    null !== e &&
                    e &&
                    !e.destroyed &&
                    (void 0 !== e.imagesLoaded && (e.imagesLoaded += 1),
                    e.imagesLoaded === e.imagesToLoad.length &&
                      (e.params.updateOnImagesReady && e.update(),
                      e.emit('imagesReady')));
                }
                e.imagesToLoad = e.$el.find('img');
                for (var n = 0; n < e.imagesToLoad.length; n += 1) {
                  var r = e.imagesToLoad[n];
                  e.loadImage(
                    r,
                    r.currentSrc || r.getAttribute('src'),
                    r.srcset || r.getAttribute('srcset'),
                    r.sizes || r.getAttribute('sizes'),
                    !0,
                    t,
                  );
                }
              },
            },
          },
          ru = {},
          iu = (function () {
            function e() {
              var t, n;
              Ws(this, e);
              for (
                var r = arguments.length, i = new Array(r), a = 0;
                a < r;
                a++
              )
                i[a] = arguments[a];
              if (
                (1 === i.length &&
                i[0].constructor &&
                'Object' === Object.prototype.toString.call(i[0]).slice(8, -1)
                  ? (n = i[0])
                  : ((t = i[0]), (n = i[1])),
                n || (n = {}),
                (n = Pl({}, n)),
                t && !n.el && (n.el = t),
                n.el && bl(n.el).length > 1)
              ) {
                var o = [];
                return (
                  bl(n.el).each(function (t) {
                    var r = Pl({}, n, { el: t });
                    o.push(new e(r));
                  }),
                  o
                );
              }
              var s,
                l = this;
              ((l.__swiper__ = !0),
              (l.support = Ll()),
              (l.device = Al({ userAgent: n.userAgent })),
              (l.browser = Ml()),
              (l.eventsListeners = {}),
              (l.eventsAnyListeners = []),
              (l.modules = Xe(l.__modules__)),
              n.modules && Array.isArray(n.modules)) &&
                (s = l.modules).push.apply(s, Xe(n.modules));
              var u = {};
              l.modules.forEach(function (e) {
                e({
                  swiper: l,
                  extendParams: tu(n, u),
                  on: l.on.bind(l),
                  once: l.once.bind(l),
                  off: l.off.bind(l),
                  emit: l.emit.bind(l),
                });
              });
              var c = Pl({}, eu, u);
              return (
                (l.params = Pl({}, c, ru, n)),
                (l.originalParams = Pl({}, l.params)),
                (l.passedParams = Pl({}, n)),
                l.params &&
                  l.params.on &&
                  Object.keys(l.params.on).forEach(function (e) {
                    l.on(e, l.params.on[e]);
                  }),
                l.params && l.params.onAny && l.onAny(l.params.onAny),
                (l.$ = bl),
                Object.assign(l, {
                  enabled: l.params.enabled,
                  el: t,
                  classNames: [],
                  slides: bl(),
                  slidesGrid: [],
                  snapGrid: [],
                  slidesSizesGrid: [],
                  isHorizontal: function () {
                    return 'horizontal' === l.params.direction;
                  },
                  isVertical: function () {
                    return 'vertical' === l.params.direction;
                  },
                  activeIndex: 0,
                  realIndex: 0,
                  isBeginning: !0,
                  isEnd: !1,
                  translate: 0,
                  previousTranslate: 0,
                  progress: 0,
                  velocity: 0,
                  animating: !1,
                  allowSlideNext: l.params.allowSlideNext,
                  allowSlidePrev: l.params.allowSlidePrev,
                  touchEvents: (function () {
                    var e = [
                        'touchstart',
                        'touchmove',
                        'touchend',
                        'touchcancel',
                      ],
                      t = ['pointerdown', 'pointermove', 'pointerup'];
                    return (
                      (l.touchEventsTouch = {
                        start: e[0],
                        move: e[1],
                        end: e[2],
                        cancel: e[3],
                      }),
                      (l.touchEventsDesktop = {
                        start: t[0],
                        move: t[1],
                        end: t[2],
                      }),
                      l.support.touch || !l.params.simulateTouch
                        ? l.touchEventsTouch
                        : l.touchEventsDesktop
                    );
                  })(),
                  touchEventsData: {
                    isTouched: void 0,
                    isMoved: void 0,
                    allowTouchCallbacks: void 0,
                    touchStartTime: void 0,
                    isScrolling: void 0,
                    currentTranslate: void 0,
                    startTranslate: void 0,
                    allowThresholdMove: void 0,
                    focusableElements: l.params.focusableElements,
                    lastClickTime: Sl(),
                    clickTimeout: void 0,
                    velocities: [],
                    allowMomentumBounce: void 0,
                    isTouchEvent: void 0,
                    startMoving: void 0,
                  },
                  allowClick: !0,
                  allowTouchMove: l.params.allowTouchMove,
                  touches: {
                    startX: 0,
                    startY: 0,
                    currentX: 0,
                    currentY: 0,
                    diff: 0,
                  },
                  imagesToLoad: [],
                  imagesLoaded: 0,
                }),
                l.emit('_swiper'),
                l.params.init && l.init(),
                l
              );
            }
            return (
              Ys(
                e,
                [
                  {
                    key: 'enable',
                    value: function () {
                      var e = this;
                      e.enabled ||
                        ((e.enabled = !0),
                        e.params.grabCursor && e.setGrabCursor(),
                        e.emit('enable'));
                    },
                  },
                  {
                    key: 'disable',
                    value: function () {
                      var e = this;
                      e.enabled &&
                        ((e.enabled = !1),
                        e.params.grabCursor && e.unsetGrabCursor(),
                        e.emit('disable'));
                    },
                  },
                  {
                    key: 'setProgress',
                    value: function (e, t) {
                      var n = this;
                      e = Math.min(Math.max(e, 0), 1);
                      var r = n.minTranslate(),
                        i = (n.maxTranslate() - r) * e + r;
                      n.translateTo(i, 'undefined' === typeof t ? 0 : t),
                        n.updateActiveIndex(),
                        n.updateSlidesClasses();
                    },
                  },
                  {
                    key: 'emitContainerClasses',
                    value: function () {
                      var e = this;
                      if (e.params._emitClasses && e.el) {
                        var t = e.el.className.split(' ').filter(function (t) {
                          return (
                            0 === t.indexOf('swiper') ||
                            0 === t.indexOf(e.params.containerModifierClass)
                          );
                        });
                        e.emit('_containerClasses', t.join(' '));
                      }
                    },
                  },
                  {
                    key: 'getSlideClasses',
                    value: function (e) {
                      var t = this;
                      return e.className
                        .split(' ')
                        .filter(function (e) {
                          return (
                            0 === e.indexOf('swiper-slide') ||
                            0 === e.indexOf(t.params.slideClass)
                          );
                        })
                        .join(' ');
                    },
                  },
                  {
                    key: 'emitSlidesClasses',
                    value: function () {
                      var e = this;
                      if (e.params._emitClasses && e.el) {
                        var t = [];
                        e.slides.each(function (n) {
                          var r = e.getSlideClasses(n);
                          t.push({ slideEl: n, classNames: r }),
                            e.emit('_slideClass', n, r);
                        }),
                          e.emit('_slideClasses', t);
                      }
                    },
                  },
                  {
                    key: 'slidesPerViewDynamic',
                    value: function () {
                      var e =
                          arguments.length > 0 && void 0 !== arguments[0]
                            ? arguments[0]
                            : 'current',
                        t =
                          arguments.length > 1 &&
                          void 0 !== arguments[1] &&
                          arguments[1],
                        n = this,
                        r = n.params,
                        i = n.slides,
                        a = n.slidesGrid,
                        o = n.slidesSizesGrid,
                        s = n.size,
                        l = n.activeIndex,
                        u = 1;
                      if (r.centeredSlides) {
                        for (
                          var c, d = i[l].swiperSlideSize, f = l + 1;
                          f < i.length;
                          f += 1
                        )
                          i[f] &&
                            !c &&
                            ((u += 1),
                            (d += i[f].swiperSlideSize) > s && (c = !0));
                        for (var p = l - 1; p >= 0; p -= 1)
                          i[p] &&
                            !c &&
                            ((u += 1),
                            (d += i[p].swiperSlideSize) > s && (c = !0));
                      } else if ('current' === e)
                        for (var h = l + 1; h < i.length; h += 1) {
                          var v = t ? a[h] + o[h] - a[l] < s : a[h] - a[l] < s;
                          v && (u += 1);
                        }
                      else
                        for (var m = l - 1; m >= 0; m -= 1) {
                          var g = a[l] - a[m] < s;
                          g && (u += 1);
                        }
                      return u;
                    },
                  },
                  {
                    key: 'update',
                    value: function () {
                      var e = this;
                      if (e && !e.destroyed) {
                        var t = e.snapGrid,
                          n = e.params;
                        n.breakpoints && e.setBreakpoint(),
                          e.updateSize(),
                          e.updateSlides(),
                          e.updateProgress(),
                          e.updateSlidesClasses(),
                          e.params.freeMode && e.params.freeMode.enabled
                            ? (r(), e.params.autoHeight && e.updateAutoHeight())
                            : (('auto' === e.params.slidesPerView ||
                                e.params.slidesPerView > 1) &&
                              e.isEnd &&
                              !e.params.centeredSlides
                                ? e.slideTo(e.slides.length - 1, 0, !1, !0)
                                : e.slideTo(e.activeIndex, 0, !1, !0)) || r(),
                          n.watchOverflow &&
                            t !== e.snapGrid &&
                            e.checkOverflow(),
                          e.emit('update');
                      }
                      function r() {
                        var t = e.rtlTranslate ? -1 * e.translate : e.translate,
                          n = Math.min(
                            Math.max(t, e.maxTranslate()),
                            e.minTranslate(),
                          );
                        e.setTranslate(n),
                          e.updateActiveIndex(),
                          e.updateSlidesClasses();
                      }
                    },
                  },
                  {
                    key: 'changeDirection',
                    value: function (e) {
                      var t =
                          !(arguments.length > 1 && void 0 !== arguments[1]) ||
                          arguments[1],
                        n = this,
                        r = n.params.direction;
                      return (
                        e ||
                          (e = 'horizontal' === r ? 'vertical' : 'horizontal'),
                        e === r ||
                          ('horizontal' !== e && 'vertical' !== e) ||
                          (n.$el
                            .removeClass(
                              ''
                                .concat(n.params.containerModifierClass)
                                .concat(r),
                            )
                            .addClass(
                              ''
                                .concat(n.params.containerModifierClass)
                                .concat(e),
                            ),
                          n.emitContainerClasses(),
                          (n.params.direction = e),
                          n.slides.each(function (t) {
                            'vertical' === e
                              ? (t.style.width = '')
                              : (t.style.height = '');
                          }),
                          n.emit('changeDirection'),
                          t && n.update()),
                        n
                      );
                    },
                  },
                  {
                    key: 'mount',
                    value: function (e) {
                      var t = this;
                      if (t.mounted) return !0;
                      var n = bl(e || t.params.el);
                      if (!(e = n[0])) return !1;
                      e.swiper = t;
                      var r = function () {
                          return '.'.concat(
                            (t.params.wrapperClass || '')
                              .trim()
                              .split(' ')
                              .join('.'),
                          );
                        },
                        i = (function () {
                          if (e && e.shadowRoot && e.shadowRoot.querySelector) {
                            var t = bl(e.shadowRoot.querySelector(r()));
                            return (
                              (t.children = function (e) {
                                return n.children(e);
                              }),
                              t
                            );
                          }
                          return n.children(r());
                        })();
                      if (0 === i.length && t.params.createElements) {
                        var a = Js().createElement('div');
                        (i = bl(a)),
                          (a.className = t.params.wrapperClass),
                          n.append(a),
                          n
                            .children('.'.concat(t.params.slideClass))
                            .each(function (e) {
                              i.append(e);
                            });
                      }
                      return (
                        Object.assign(t, {
                          $el: n,
                          el: e,
                          $wrapperEl: i,
                          wrapperEl: i[0],
                          mounted: !0,
                          rtl:
                            'rtl' === e.dir.toLowerCase() ||
                            'rtl' === n.css('direction'),
                          rtlTranslate:
                            'horizontal' === t.params.direction &&
                            ('rtl' === e.dir.toLowerCase() ||
                              'rtl' === n.css('direction')),
                          wrongRTL: '-webkit-box' === i.css('display'),
                        }),
                        !0
                      );
                    },
                  },
                  {
                    key: 'init',
                    value: function (e) {
                      var t = this;
                      return (
                        t.initialized ||
                          !1 === t.mount(e) ||
                          (t.emit('beforeInit'),
                          t.params.breakpoints && t.setBreakpoint(),
                          t.addClasses(),
                          t.params.loop && t.loopCreate(),
                          t.updateSize(),
                          t.updateSlides(),
                          t.params.watchOverflow && t.checkOverflow(),
                          t.params.grabCursor && t.enabled && t.setGrabCursor(),
                          t.params.preloadImages && t.preloadImages(),
                          t.params.loop
                            ? t.slideTo(
                                t.params.initialSlide + t.loopedSlides,
                                0,
                                t.params.runCallbacksOnInit,
                                !1,
                                !0,
                              )
                            : t.slideTo(
                                t.params.initialSlide,
                                0,
                                t.params.runCallbacksOnInit,
                                !1,
                                !0,
                              ),
                          t.attachEvents(),
                          (t.initialized = !0),
                          t.emit('init'),
                          t.emit('afterInit')),
                        t
                      );
                    },
                  },
                  {
                    key: 'destroy',
                    value: function () {
                      var e =
                          !(arguments.length > 0 && void 0 !== arguments[0]) ||
                          arguments[0],
                        t =
                          !(arguments.length > 1 && void 0 !== arguments[1]) ||
                          arguments[1],
                        n = this,
                        r = n.params,
                        i = n.$el,
                        a = n.$wrapperEl,
                        o = n.slides;
                      return (
                        'undefined' === typeof n.params ||
                          n.destroyed ||
                          (n.emit('beforeDestroy'),
                          (n.initialized = !1),
                          n.detachEvents(),
                          r.loop && n.loopDestroy(),
                          t &&
                            (n.removeClasses(),
                            i.removeAttr('style'),
                            a.removeAttr('style'),
                            o &&
                              o.length &&
                              o
                                .removeClass(
                                  [
                                    r.slideVisibleClass,
                                    r.slideActiveClass,
                                    r.slideNextClass,
                                    r.slidePrevClass,
                                  ].join(' '),
                                )
                                .removeAttr('style')
                                .removeAttr('data-swiper-slide-index')),
                          n.emit('destroy'),
                          Object.keys(n.eventsListeners).forEach(function (e) {
                            n.off(e);
                          }),
                          !1 !== e && ((n.$el[0].swiper = null), wl(n)),
                          (n.destroyed = !0)),
                        null
                      );
                    },
                  },
                ],
                [
                  {
                    key: 'extendDefaults',
                    value: function (e) {
                      Pl(ru, e);
                    },
                  },
                  {
                    key: 'extendedDefaults',
                    get: function () {
                      return ru;
                    },
                  },
                  {
                    key: 'defaults',
                    get: function () {
                      return eu;
                    },
                  },
                  {
                    key: 'installModule',
                    value: function (t) {
                      e.prototype.__modules__ || (e.prototype.__modules__ = []);
                      var n = e.prototype.__modules__;
                      'function' === typeof t && n.indexOf(t) < 0 && n.push(t);
                    },
                  },
                  {
                    key: 'use',
                    value: function (t) {
                      return Array.isArray(t)
                        ? (t.forEach(function (t) {
                            return e.installModule(t);
                          }),
                          e)
                        : (e.installModule(t), e);
                    },
                  },
                ],
              ),
              e
            );
          })();
        Object.keys(nu).forEach(function (e) {
          Object.keys(nu[e]).forEach(function (t) {
            iu.prototype[t] = nu[e][t];
          });
        }),
          iu.use([
            function (e) {
              var t = e.swiper,
                n = e.on,
                r = e.emit,
                i = el(),
                a = null,
                o = function () {
                  t &&
                    !t.destroyed &&
                    t.initialized &&
                    (r('beforeResize'), r('resize'));
                },
                s = function () {
                  t && !t.destroyed && t.initialized && r('orientationchange');
                };
              n('init', function () {
                t.params.resizeObserver &&
                'undefined' !== typeof i.ResizeObserver
                  ? t &&
                    !t.destroyed &&
                    t.initialized &&
                    ((a = new ResizeObserver(function (e) {
                      var n = t.width,
                        r = t.height,
                        i = n,
                        a = r;
                      e.forEach(function (e) {
                        var n = e.contentBoxSize,
                          r = e.contentRect,
                          o = e.target;
                        (o && o !== t.el) ||
                          ((i = r ? r.width : (n[0] || n).inlineSize),
                          (a = r ? r.height : (n[0] || n).blockSize));
                      }),
                        (i === n && a === r) || o();
                    })),
                    a.observe(t.el))
                  : (i.addEventListener('resize', o),
                    i.addEventListener('orientationchange', s));
              }),
                n('destroy', function () {
                  a && a.unobserve && t.el && (a.unobserve(t.el), (a = null)),
                    i.removeEventListener('resize', o),
                    i.removeEventListener('orientationchange', s);
                });
            },
            function (e) {
              var t = e.swiper,
                n = e.extendParams,
                r = e.on,
                i = e.emit,
                a = [],
                o = el(),
                s = function (e) {
                  var t =
                      arguments.length > 1 && void 0 !== arguments[1]
                        ? arguments[1]
                        : {},
                    n = o.MutationObserver || o.WebkitMutationObserver,
                    r = new n(function (e) {
                      if (1 !== e.length) {
                        var t = function () {
                          i('observerUpdate', e[0]);
                        };
                        o.requestAnimationFrame
                          ? o.requestAnimationFrame(t)
                          : o.setTimeout(t, 0);
                      } else i('observerUpdate', e[0]);
                    });
                  r.observe(e, {
                    attributes:
                      'undefined' === typeof t.attributes || t.attributes,
                    childList:
                      'undefined' === typeof t.childList || t.childList,
                    characterData:
                      'undefined' === typeof t.characterData || t.characterData,
                  }),
                    a.push(r);
                };
              n({ observer: !1, observeParents: !1, observeSlideChildren: !1 }),
                r('init', function () {
                  if (t.params.observer) {
                    if (t.params.observeParents)
                      for (var e = t.$el.parents(), n = 0; n < e.length; n += 1)
                        s(e[n]);
                    s(t.$el[0], { childList: t.params.observeSlideChildren }),
                      s(t.$wrapperEl[0], { attributes: !1 });
                  }
                }),
                r('destroy', function () {
                  a.forEach(function (e) {
                    e.disconnect();
                  }),
                    a.splice(0, a.length);
                });
            },
          ]);
        var au = iu;
        function ou(e) {
          var t,
            n,
            r,
            i,
            a = e.swiper,
            o = e.extendParams,
            s = e.on,
            l = e.emit,
            u = Js(),
            c = !1,
            d = null,
            f = null;
          function p() {
            if (a.params.scrollbar.el && a.scrollbar.el) {
              var e = a.scrollbar,
                t = a.rtlTranslate,
                i = a.progress,
                o = e.$dragEl,
                s = e.$el,
                l = a.params.scrollbar,
                u = n,
                c = (r - n) * i;
              t
                ? (c = -c) > 0
                  ? ((u = n - c), (c = 0))
                  : -c + n > r && (u = r + c)
                : c < 0
                ? ((u = n + c), (c = 0))
                : c + n > r && (u = r - c),
                a.isHorizontal()
                  ? (o.transform('translate3d('.concat(c, 'px, 0, 0)')),
                    (o[0].style.width = ''.concat(u, 'px')))
                  : (o.transform('translate3d(0px, '.concat(c, 'px, 0)')),
                    (o[0].style.height = ''.concat(u, 'px'))),
                l.hide &&
                  (clearTimeout(d),
                  (s[0].style.opacity = 1),
                  (d = setTimeout(function () {
                    (s[0].style.opacity = 0), s.transition(400);
                  }, 1e3)));
            }
          }
          function h() {
            if (a.params.scrollbar.el && a.scrollbar.el) {
              var e = a.scrollbar,
                t = e.$dragEl,
                o = e.$el;
              (t[0].style.width = ''),
                (t[0].style.height = ''),
                (r = a.isHorizontal() ? o[0].offsetWidth : o[0].offsetHeight),
                (i =
                  a.size /
                  (a.virtualSize +
                    a.params.slidesOffsetBefore -
                    (a.params.centeredSlides ? a.snapGrid[0] : 0))),
                (n =
                  'auto' === a.params.scrollbar.dragSize
                    ? r * i
                    : parseInt(a.params.scrollbar.dragSize, 10)),
                a.isHorizontal()
                  ? (t[0].style.width = ''.concat(n, 'px'))
                  : (t[0].style.height = ''.concat(n, 'px')),
                (o[0].style.display = i >= 1 ? 'none' : ''),
                a.params.scrollbar.hide && (o[0].style.opacity = 0),
                a.params.watchOverflow &&
                  a.enabled &&
                  e.$el[a.isLocked ? 'addClass' : 'removeClass'](
                    a.params.scrollbar.lockClass,
                  );
            }
          }
          function v(e) {
            return a.isHorizontal()
              ? 'touchstart' === e.type || 'touchmove' === e.type
                ? e.targetTouches[0].clientX
                : e.clientX
              : 'touchstart' === e.type || 'touchmove' === e.type
              ? e.targetTouches[0].clientY
              : e.clientY;
          }
          function m(e) {
            var i,
              o = a.scrollbar,
              s = a.rtlTranslate,
              l = o.$el;
            (i =
              (v(e) -
                l.offset()[a.isHorizontal() ? 'left' : 'top'] -
                (null !== t ? t : n / 2)) /
              (r - n)),
              (i = Math.max(Math.min(i, 1), 0)),
              s && (i = 1 - i);
            var u =
              a.minTranslate() + (a.maxTranslate() - a.minTranslate()) * i;
            a.updateProgress(u),
              a.setTranslate(u),
              a.updateActiveIndex(),
              a.updateSlidesClasses();
          }
          function g(e) {
            var n = a.params.scrollbar,
              r = a.scrollbar,
              i = a.$wrapperEl,
              o = r.$el,
              s = r.$dragEl;
            (c = !0),
              (t =
                e.target === s[0] || e.target === s
                  ? v(e) -
                    e.target.getBoundingClientRect()[
                      a.isHorizontal() ? 'left' : 'top'
                    ]
                  : null),
              e.preventDefault(),
              e.stopPropagation(),
              i.transition(100),
              s.transition(100),
              m(e),
              clearTimeout(f),
              o.transition(0),
              n.hide && o.css('opacity', 1),
              a.params.cssMode && a.$wrapperEl.css('scroll-snap-type', 'none'),
              l('scrollbarDragStart', e);
          }
          function y(e) {
            var t = a.scrollbar,
              n = a.$wrapperEl,
              r = t.$el,
              i = t.$dragEl;
            c &&
              (e.preventDefault ? e.preventDefault() : (e.returnValue = !1),
              m(e),
              n.transition(0),
              r.transition(0),
              i.transition(0),
              l('scrollbarDragMove', e));
          }
          function b(e) {
            var t = a.params.scrollbar,
              n = a.scrollbar,
              r = a.$wrapperEl,
              i = n.$el;
            c &&
              ((c = !1),
              a.params.cssMode &&
                (a.$wrapperEl.css('scroll-snap-type', ''), r.transition('')),
              t.hide &&
                (clearTimeout(f),
                (f = xl(function () {
                  i.css('opacity', 0), i.transition(400);
                }, 1e3))),
              l('scrollbarDragEnd', e),
              t.snapOnRelease && a.slideToClosest());
          }
          function w(e) {
            var t = a.scrollbar,
              n = a.touchEventsTouch,
              r = a.touchEventsDesktop,
              i = a.params,
              o = a.support,
              s = t.$el[0],
              l = !(!o.passiveListener || !i.passiveListeners) && {
                passive: !1,
                capture: !1,
              },
              c = !(!o.passiveListener || !i.passiveListeners) && {
                passive: !0,
                capture: !1,
              };
            if (s) {
              var d = 'on' === e ? 'addEventListener' : 'removeEventListener';
              o.touch
                ? (s[d](n.start, g, l), s[d](n.move, y, l), s[d](n.end, b, c))
                : (s[d](r.start, g, l), u[d](r.move, y, l), u[d](r.end, b, c));
            }
          }
          function x() {
            var e = a.scrollbar,
              t = a.$el;
            a.params.scrollbar = (function (e, t, n, r) {
              var i = Js();
              return (
                e.params.createElements &&
                  Object.keys(r).forEach(function (a) {
                    if (!n[a] && !0 === n.auto) {
                      var o = e.$el.children('.'.concat(r[a]))[0];
                      o ||
                        (((o = i.createElement('div')).className = r[a]),
                        e.$el.append(o)),
                        (n[a] = o),
                        (t[a] = o);
                    }
                  }),
                n
              );
            })(a, a.originalParams.scrollbar, a.params.scrollbar, {
              el: 'swiper-scrollbar',
            });
            var n = a.params.scrollbar;
            if (n.el) {
              var r = bl(n.el);
              a.params.uniqueNavElements &&
                'string' === typeof n.el &&
                r.length > 1 &&
                1 === t.find(n.el).length &&
                (r = t.find(n.el));
              var i = r.find('.'.concat(a.params.scrollbar.dragClass));
              0 === i.length &&
                ((i = bl(
                  '<div class="'.concat(
                    a.params.scrollbar.dragClass,
                    '"></div>',
                  ),
                )),
                r.append(i)),
                Object.assign(e, {
                  $el: r,
                  el: r[0],
                  $dragEl: i,
                  dragEl: i[0],
                }),
                n.draggable && a.params.scrollbar.el && w('on'),
                r &&
                  r[a.enabled ? 'removeClass' : 'addClass'](
                    a.params.scrollbar.lockClass,
                  );
            }
          }
          function S() {
            a.params.scrollbar.el && w('off');
          }
          o({
            scrollbar: {
              el: null,
              dragSize: 'auto',
              hide: !1,
              draggable: !1,
              snapOnRelease: !0,
              lockClass: 'swiper-scrollbar-lock',
              dragClass: 'swiper-scrollbar-drag',
            },
          }),
            (a.scrollbar = {
              el: null,
              dragEl: null,
              $el: null,
              $dragEl: null,
            }),
            s('init', function () {
              x(), h(), p();
            }),
            s('update resize observerUpdate lock unlock', function () {
              h();
            }),
            s('setTranslate', function () {
              p();
            }),
            s('setTransition', function (e, t) {
              !(function (e) {
                a.params.scrollbar.el &&
                  a.scrollbar.el &&
                  a.scrollbar.$dragEl.transition(e);
              })(t);
            }),
            s('enable disable', function () {
              var e = a.scrollbar.$el;
              e &&
                e[a.enabled ? 'removeClass' : 'addClass'](
                  a.params.scrollbar.lockClass,
                );
            }),
            s('destroy', function () {
              S();
            }),
            Object.assign(a.scrollbar, {
              updateSize: h,
              setTranslate: p,
              init: x,
              destroy: S,
            });
        }
        function su(e) {
          var t,
            n = e.swiper,
            r = e.extendParams,
            i = e.on,
            a = e.emit;
          function o() {
            var e = n.slides.eq(n.activeIndex),
              r = n.params.autoplay.delay;
            e.attr('data-swiper-autoplay') &&
              (r = e.attr('data-swiper-autoplay') || n.params.autoplay.delay),
              clearTimeout(t),
              (t = xl(function () {
                var e;
                n.params.autoplay.reverseDirection
                  ? n.params.loop
                    ? (n.loopFix(),
                      (e = n.slidePrev(n.params.speed, !0, !0)),
                      a('autoplay'))
                    : n.isBeginning
                    ? n.params.autoplay.stopOnLastSlide
                      ? l()
                      : ((e = n.slideTo(
                          n.slides.length - 1,
                          n.params.speed,
                          !0,
                          !0,
                        )),
                        a('autoplay'))
                    : ((e = n.slidePrev(n.params.speed, !0, !0)), a('autoplay'))
                  : n.params.loop
                  ? (n.loopFix(),
                    (e = n.slideNext(n.params.speed, !0, !0)),
                    a('autoplay'))
                  : n.isEnd
                  ? n.params.autoplay.stopOnLastSlide
                    ? l()
                    : ((e = n.slideTo(0, n.params.speed, !0, !0)),
                      a('autoplay'))
                  : ((e = n.slideNext(n.params.speed, !0, !0)), a('autoplay')),
                  ((n.params.cssMode && n.autoplay.running) || !1 === e) && o();
              }, r));
          }
          function s() {
            return (
              'undefined' === typeof t &&
              !n.autoplay.running &&
              ((n.autoplay.running = !0), a('autoplayStart'), o(), !0)
            );
          }
          function l() {
            return (
              !!n.autoplay.running &&
              'undefined' !== typeof t &&
              (t && (clearTimeout(t), (t = void 0)),
              (n.autoplay.running = !1),
              a('autoplayStop'),
              !0)
            );
          }
          function u(e) {
            n.autoplay.running &&
              (n.autoplay.paused ||
                (t && clearTimeout(t),
                (n.autoplay.paused = !0),
                0 !== e && n.params.autoplay.waitForTransition
                  ? ['transitionend', 'webkitTransitionEnd'].forEach(function (
                      e,
                    ) {
                      n.$wrapperEl[0].addEventListener(e, d);
                    })
                  : ((n.autoplay.paused = !1), o())));
          }
          function c() {
            var e = Js();
            'hidden' === e.visibilityState && n.autoplay.running && u(),
              'visible' === e.visibilityState &&
                n.autoplay.paused &&
                (o(), (n.autoplay.paused = !1));
          }
          function d(e) {
            n &&
              !n.destroyed &&
              n.$wrapperEl &&
              e.target === n.$wrapperEl[0] &&
              (['transitionend', 'webkitTransitionEnd'].forEach(function (e) {
                n.$wrapperEl[0].removeEventListener(e, d);
              }),
              (n.autoplay.paused = !1),
              n.autoplay.running ? o() : l());
          }
          function f() {
            n.params.autoplay.disableOnInteraction ? l() : u(),
              ['transitionend', 'webkitTransitionEnd'].forEach(function (e) {
                n.$wrapperEl[0].removeEventListener(e, d);
              });
          }
          function p() {
            n.params.autoplay.disableOnInteraction ||
              ((n.autoplay.paused = !1), o());
          }
          (n.autoplay = { running: !1, paused: !1 }),
            r({
              autoplay: {
                enabled: !1,
                delay: 3e3,
                waitForTransition: !0,
                disableOnInteraction: !0,
                stopOnLastSlide: !1,
                reverseDirection: !1,
                pauseOnMouseEnter: !1,
              },
            }),
            i('init', function () {
              n.params.autoplay.enabled &&
                (s(),
                Js().addEventListener('visibilitychange', c),
                n.params.autoplay.pauseOnMouseEnter &&
                  (n.$el.on('mouseenter', f), n.$el.on('mouseleave', p)));
            }),
            i('beforeTransitionStart', function (e, t, r) {
              n.autoplay.running &&
                (r || !n.params.autoplay.disableOnInteraction
                  ? n.autoplay.pause(t)
                  : l());
            }),
            i('sliderFirstMove', function () {
              n.autoplay.running &&
                (n.params.autoplay.disableOnInteraction ? l() : u());
            }),
            i('touchEnd', function () {
              n.params.cssMode &&
                n.autoplay.paused &&
                !n.params.autoplay.disableOnInteraction &&
                o();
            }),
            i('destroy', function () {
              n.$el.off('mouseenter', f),
                n.$el.off('mouseleave', p),
                n.autoplay.running && l(),
                Js().removeEventListener('visibilitychange', c);
            }),
            Object.assign(n.autoplay, { pause: u, run: o, start: s, stop: l });
        }
        function lu(e) {
          return (
            'object' === typeof e &&
            null !== e &&
            e.constructor &&
            'Object' === Object.prototype.toString.call(e).slice(8, -1)
          );
        }
        function uu(e, t) {
          var n = ['__proto__', 'constructor', 'prototype'];
          Object.keys(t)
            .filter(function (e) {
              return n.indexOf(e) < 0;
            })
            .forEach(function (n) {
              'undefined' === typeof e[n]
                ? (e[n] = t[n])
                : lu(t[n]) && lu(e[n]) && Object.keys(t[n]).length > 0
                ? t[n].__swiper__
                  ? (e[n] = t[n])
                  : uu(e[n], t[n])
                : (e[n] = t[n]);
            });
        }
        function cu() {
          var e =
            arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
          return (
            e.navigation &&
            'undefined' === typeof e.navigation.nextEl &&
            'undefined' === typeof e.navigation.prevEl
          );
        }
        function du() {
          var e =
            arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
          return e.pagination && 'undefined' === typeof e.pagination.el;
        }
        function fu() {
          var e =
            arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
          return e.scrollbar && 'undefined' === typeof e.scrollbar.el;
        }
        function pu() {
          var e =
              arguments.length > 0 && void 0 !== arguments[0]
                ? arguments[0]
                : '',
            t = e
              .split(' ')
              .map(function (e) {
                return e.trim();
              })
              .filter(function (e) {
                return !!e;
              }),
            n = [];
          return (
            t.forEach(function (e) {
              n.indexOf(e) < 0 && n.push(e);
            }),
            n.join(' ')
          );
        }
        var hu = [
          'modules',
          'init',
          '_direction',
          'touchEventsTarget',
          'initialSlide',
          '_speed',
          'cssMode',
          'updateOnWindowResize',
          'resizeObserver',
          'nested',
          'focusableElements',
          '_enabled',
          '_width',
          '_height',
          'preventInteractionOnTransition',
          'userAgent',
          'url',
          '_edgeSwipeDetection',
          '_edgeSwipeThreshold',
          '_freeMode',
          '_autoHeight',
          'setWrapperSize',
          'virtualTranslate',
          '_effect',
          'breakpoints',
          '_spaceBetween',
          '_slidesPerView',
          '_grid',
          '_slidesPerGroup',
          '_slidesPerGroupSkip',
          '_slidesPerGroupAuto',
          '_centeredSlides',
          '_centeredSlidesBounds',
          '_slidesOffsetBefore',
          '_slidesOffsetAfter',
          'normalizeSlideIndex',
          '_centerInsufficientSlides',
          '_watchOverflow',
          'roundLengths',
          'touchRatio',
          'touchAngle',
          'simulateTouch',
          '_shortSwipes',
          '_longSwipes',
          'longSwipesRatio',
          'longSwipesMs',
          '_followFinger',
          'allowTouchMove',
          '_threshold',
          'touchMoveStopPropagation',
          'touchStartPreventDefault',
          'touchStartForcePreventDefault',
          'touchReleaseOnEdges',
          'uniqueNavElements',
          '_resistance',
          '_resistanceRatio',
          '_watchSlidesProgress',
          '_grabCursor',
          'preventClicks',
          'preventClicksPropagation',
          '_slideToClickedSlide',
          '_preloadImages',
          'updateOnImagesReady',
          '_loop',
          '_loopAdditionalSlides',
          '_loopedSlides',
          '_loopFillGroupWithBlank',
          'loopPreventsSlide',
          '_rewind',
          '_allowSlidePrev',
          '_allowSlideNext',
          '_swipeHandler',
          '_noSwiping',
          'noSwipingClass',
          'noSwipingSelector',
          'passiveListeners',
          'containerModifierClass',
          'slideClass',
          'slideBlankClass',
          'slideActiveClass',
          'slideDuplicateActiveClass',
          'slideVisibleClass',
          'slideDuplicateClass',
          'slideNextClass',
          'slideDuplicateNextClass',
          'slidePrevClass',
          'slideDuplicatePrevClass',
          'wrapperClass',
          'runCallbacksOnInit',
          'observer',
          'observeParents',
          'observeSlideChildren',
          'a11y',
          'autoplay',
          '_controller',
          'coverflowEffect',
          'cubeEffect',
          'fadeEffect',
          'flipEffect',
          'creativeEffect',
          'cardsEffect',
          'hashNavigation',
          'history',
          'keyboard',
          'lazy',
          'mousewheel',
          '_navigation',
          '_pagination',
          'parallax',
          '_scrollbar',
          '_thumbs',
          'virtual',
          'zoom',
        ];
        function vu() {
          var e =
              arguments.length > 0 && void 0 !== arguments[0]
                ? arguments[0]
                : {},
            t = { on: {} },
            n = {},
            r = {};
          uu(t, au.defaults),
            uu(t, au.extendedDefaults),
            (t._emitClasses = !0),
            (t.init = !1);
          var i = {},
            a = hu.map(function (e) {
              return e.replace(/_/, '');
            });
          return (
            Object.keys(e).forEach(function (o) {
              a.indexOf(o) >= 0
                ? lu(e[o])
                  ? ((t[o] = {}), (r[o] = {}), uu(t[o], e[o]), uu(r[o], e[o]))
                  : ((t[o] = e[o]), (r[o] = e[o]))
                : 0 === o.search(/on[A-Z]/) && 'function' === typeof e[o]
                ? (n[''.concat(o[2].toLowerCase()).concat(o.substr(3))] = e[o])
                : (i[o] = e[o]);
            }),
            ['navigation', 'pagination', 'scrollbar'].forEach(function (e) {
              !0 === t[e] && (t[e] = {}), !1 === t[e] && delete t[e];
            }),
            { params: t, passedParams: r, rest: i, events: n }
          );
        }
        function mu(e) {
          return new au(e);
        }
        function gu(e, t) {
          var n = e.el,
            r = e.nextEl,
            i = e.prevEl,
            a = e.paginationEl,
            o = e.scrollbarEl,
            s = e.swiper;
          cu(t) &&
            r &&
            i &&
            ((s.params.navigation.nextEl = r),
            (s.originalParams.navigation.nextEl = r),
            (s.params.navigation.prevEl = i),
            (s.originalParams.navigation.prevEl = i)),
            du(t) &&
              a &&
              ((s.params.pagination.el = a),
              (s.originalParams.pagination.el = a)),
            fu(t) &&
              o &&
              ((s.params.scrollbar.el = o),
              (s.originalParams.scrollbar.el = o)),
            s.init(n);
        }
        function yu(e, t) {
          var n = t.slidesPerView;
          if (t.breakpoints) {
            var r = au.prototype.getBreakpoint(t.breakpoints),
              i = r in t.breakpoints ? t.breakpoints[r] : void 0;
            i && i.slidesPerView && (n = i.slidesPerView);
          }
          var a = Math.ceil(parseFloat(t.loopedSlides || n, 10));
          return (a += t.loopAdditionalSlides) > e.length && (a = e.length), a;
        }
        function bu(e, t, n) {
          var i = t.map(function (t, n) {
            return r.cloneElement(t, {
              swiper: e,
              'data-swiper-slide-index': n,
            });
          });
          function a(e, t, i) {
            return r.cloneElement(e, {
              key: ''.concat(e.key, '-duplicate-').concat(t, '-').concat(i),
              className: ''
                .concat(e.props.className || '', ' ')
                .concat(n.slideDuplicateClass),
            });
          }
          if (n.loopFillGroupWithBlank) {
            var o = n.slidesPerGroup - (i.length % n.slidesPerGroup);
            if (o !== n.slidesPerGroup)
              for (var s = 0; s < o; s += 1) {
                var l = r.createElement('div', {
                  className: ''
                    .concat(n.slideClass, ' ')
                    .concat(n.slideBlankClass),
                });
                i.push(l);
              }
          }
          'auto' !== n.slidesPerView ||
            n.loopedSlides ||
            (n.loopedSlides = i.length);
          var u = yu(i, n),
            c = [],
            d = [];
          return (
            i.forEach(function (e, t) {
              t < u && d.push(a(e, t, 'prepend')),
                t < i.length && t >= i.length - u && c.push(a(e, t, 'append'));
            }),
            e && (e.loopedSlides = u),
            [].concat(c, Xe(i), d)
          );
        }
        function wu(e, t, n, r) {
          var i = [];
          if (!t) return i;
          var a = function (e) {
              i.indexOf(e) < 0 && i.push(e);
            },
            o = r.map(function (e) {
              return e.key;
            }),
            s = n.map(function (e) {
              return e.key;
            });
          return (
            o.join('') !== s.join('') && a('children'),
            r.length !== n.length && a('children'),
            hu
              .filter(function (e) {
                return '_' === e[0];
              })
              .map(function (e) {
                return e.replace(/_/, '');
              })
              .forEach(function (n) {
                if (n in e && n in t)
                  if (lu(e[n]) && lu(t[n])) {
                    var r = Object.keys(e[n]),
                      i = Object.keys(t[n]);
                    r.length !== i.length
                      ? a(n)
                      : (r.forEach(function (r) {
                          e[n][r] !== t[n][r] && a(n);
                        }),
                        i.forEach(function (r) {
                          e[n][r] !== t[n][r] && a(n);
                        }));
                  } else e[n] !== t[n] && a(n);
              }),
            i
          );
        }
        function xu(e) {
          var t = [];
          return (
            r.Children.toArray(e).forEach(function (e) {
              e.type && 'SwiperSlide' === e.type.displayName
                ? t.push(e)
                : e.props &&
                  e.props.children &&
                  xu(e.props.children).forEach(function (e) {
                    return t.push(e);
                  });
            }),
            t
          );
        }
        function Su(e) {
          var t = [],
            n = {
              'container-start': [],
              'container-end': [],
              'wrapper-start': [],
              'wrapper-end': [],
            };
          return (
            r.Children.toArray(e).forEach(function (e) {
              if (e.type && 'SwiperSlide' === e.type.displayName) t.push(e);
              else if (e.props && e.props.slot && n[e.props.slot])
                n[e.props.slot].push(e);
              else if (e.props && e.props.children) {
                var r = xu(e.props.children);
                r.length > 0
                  ? r.forEach(function (e) {
                      return t.push(e);
                    })
                  : n['container-end'].push(e);
              } else n['container-end'].push(e);
            }),
            { slides: t, slots: n }
          );
        }
        function Eu(e) {
          var t,
            n,
            r,
            i,
            a,
            o = e.swiper,
            s = e.slides,
            l = e.passedParams,
            u = e.changedParams,
            c = e.nextEl,
            d = e.prevEl,
            f = e.scrollbarEl,
            p = e.paginationEl,
            h = u.filter(function (e) {
              return 'children' !== e && 'direction' !== e;
            }),
            v = o.params,
            m = o.pagination,
            g = o.navigation,
            y = o.scrollbar,
            b = o.virtual,
            w = o.thumbs;
          u.includes('thumbs') &&
            l.thumbs &&
            l.thumbs.swiper &&
            v.thumbs &&
            !v.thumbs.swiper &&
            (t = !0),
            u.includes('controller') &&
              l.controller &&
              l.controller.control &&
              v.controller &&
              !v.controller.control &&
              (n = !0),
            u.includes('pagination') &&
              l.pagination &&
              (l.pagination.el || p) &&
              (v.pagination || !1 === v.pagination) &&
              m &&
              !m.el &&
              (r = !0),
            u.includes('scrollbar') &&
              l.scrollbar &&
              (l.scrollbar.el || f) &&
              (v.scrollbar || !1 === v.scrollbar) &&
              y &&
              !y.el &&
              (i = !0),
            u.includes('navigation') &&
              l.navigation &&
              (l.navigation.prevEl || d) &&
              (l.navigation.nextEl || c) &&
              (v.navigation || !1 === v.navigation) &&
              g &&
              !g.prevEl &&
              !g.nextEl &&
              (a = !0);
          (h.forEach(function (e) {
            if (lu(v[e]) && lu(l[e])) uu(v[e], l[e]);
            else {
              var t = l[e];
              (!0 !== t && !1 !== t) ||
              ('navigation' !== e && 'pagination' !== e && 'scrollbar' !== e)
                ? (v[e] = l[e])
                : !1 === t &&
                  o[(n = e)] &&
                  (o[n].destroy(),
                  'navigation' === n
                    ? ((v[n].prevEl = void 0),
                      (v[n].nextEl = void 0),
                      (o[n].prevEl = void 0),
                      (o[n].nextEl = void 0))
                    : ((v[n].el = void 0), (o[n].el = void 0)));
            }
            var n;
          }),
          u.includes('children') && b && v.virtual.enabled
            ? ((b.slides = s), b.update(!0))
            : u.includes('children') &&
              o.lazy &&
              o.params.lazy.enabled &&
              o.lazy.load(),
          t) &&
            w.init() &&
            w.update(!0);
          n && (o.controller.control = v.controller.control),
            r && (p && (v.pagination.el = p), m.init(), m.render(), m.update()),
            i &&
              (f && (v.scrollbar.el = f),
              y.init(),
              y.updateSize(),
              y.setTranslate()),
            a &&
              (c && (v.navigation.nextEl = c),
              d && (v.navigation.prevEl = d),
              g.init(),
              g.update()),
            u.includes('allowSlideNext') &&
              (o.allowSlideNext = l.allowSlideNext),
            u.includes('allowSlidePrev') &&
              (o.allowSlidePrev = l.allowSlidePrev),
            u.includes('direction') && o.changeDirection(l.direction, !1),
            o.update();
        }
        function ku(e) {
          !e ||
            e.destroyed ||
            !e.params.virtual ||
            (e.params.virtual && !e.params.virtual.enabled) ||
            (e.updateSlides(),
            e.updateProgress(),
            e.updateSlidesClasses(),
            e.lazy && e.params.lazy.enabled && e.lazy.load(),
            e.parallax &&
              e.params.parallax &&
              e.params.parallax.enabled &&
              e.parallax.setTranslate());
        }
        function Cu(e, t, n) {
          if (!n) return null;
          var i = e.isHorizontal()
            ? Pe(
                {},
                e.rtlTranslate ? 'right' : 'left',
                ''.concat(n.offset, 'px'),
              )
            : { top: ''.concat(n.offset, 'px') };
          return t
            .filter(function (e, t) {
              return t >= n.from && t <= n.to;
            })
            .map(function (t) {
              return r.cloneElement(t, { swiper: e, style: i });
            });
        }
        function Tu(e, t) {
          return 'undefined' === typeof window
            ? (0, r.useEffect)(e, t)
            : (0, r.useLayoutEffect)(e, t);
        }
        var Pu = ['className', 'tag', 'wrapperTag', 'children', 'onSwiper'];
        function Ou() {
          return (
            (Ou =
              Object.assign ||
              function (e) {
                for (var t = 1; t < arguments.length; t++) {
                  var n = arguments[t];
                  for (var r in n)
                    Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
                }
                return e;
              }),
            Ou.apply(this, arguments)
          );
        }
        var ju = (0, r.forwardRef)(function () {
          var e =
              arguments.length > 0 && void 0 !== arguments[0]
                ? arguments[0]
                : {},
            t = e.className,
            n = e.tag,
            i = void 0 === n ? 'div' : n,
            a = e.wrapperTag,
            o = void 0 === a ? 'div' : a,
            l = e.children,
            u = e.onSwiper,
            c = Hs(e, Pu),
            d = arguments.length > 1 ? arguments[1] : void 0,
            f = !1,
            p = (0, r.useState)('swiper'),
            h = s(p, 2),
            v = h[0],
            m = h[1],
            g = (0, r.useState)(null),
            y = s(g, 2),
            b = y[0],
            w = y[1],
            x = (0, r.useState)(!1),
            S = s(x, 2),
            E = S[0],
            k = S[1],
            C = (0, r.useRef)(!1),
            T = (0, r.useRef)(null),
            P = (0, r.useRef)(null),
            O = (0, r.useRef)(null),
            j = (0, r.useRef)(null),
            L = (0, r.useRef)(null),
            _ = (0, r.useRef)(null),
            A = (0, r.useRef)(null),
            M = (0, r.useRef)(null),
            N = vu(c),
            R = N.params,
            I = N.passedParams,
            D = N.rest,
            z = N.events,
            V = Su(l),
            F = V.slides,
            B = V.slots,
            U = function () {
              k(!E);
            };
          if (
            (Object.assign(R.on, {
              _containerClasses: function (e, t) {
                m(t);
              },
            }),
            !T.current &&
              (Object.assign(R.on, z),
              (f = !0),
              (P.current = mu(R)),
              (P.current.loopCreate = function () {}),
              (P.current.loopDestroy = function () {}),
              R.loop && (P.current.loopedSlides = yu(F, R)),
              P.current.virtual && P.current.params.virtual.enabled))
          ) {
            P.current.virtual.slides = F;
            var $ = {
              cache: !1,
              slides: F,
              renderExternal: w,
              renderExternalUpdate: !1,
            };
            uu(P.current.params.virtual, $),
              uu(P.current.originalParams.virtual, $);
          }
          P.current && P.current.on('_beforeBreakpoint', U);
          var q = function () {
              !f &&
                z &&
                P.current &&
                Object.keys(z).forEach(function (e) {
                  P.current.on(e, z[e]);
                });
            },
            H = function () {
              z &&
                P.current &&
                Object.keys(z).forEach(function (e) {
                  P.current.off(e, z[e]);
                });
            };
          function W() {
            return R.virtual
              ? Cu(P.current, F, b)
              : !R.loop || (P.current && P.current.destroyed)
              ? F.map(function (e) {
                  return r.cloneElement(e, { swiper: P.current });
                })
              : bu(P.current, F, R);
          }
          return (
            (0, r.useEffect)(function () {
              return function () {
                P.current && P.current.off('_beforeBreakpoint', U);
              };
            }),
            (0, r.useEffect)(function () {
              !C.current &&
                P.current &&
                (P.current.emitSlidesClasses(), (C.current = !0));
            }),
            Tu(function () {
              if ((d && (d.current = T.current), T.current))
                return (
                  gu(
                    {
                      el: T.current,
                      nextEl: L.current,
                      prevEl: _.current,
                      paginationEl: A.current,
                      scrollbarEl: M.current,
                      swiper: P.current,
                    },
                    R,
                  ),
                  u && u(P.current),
                  function () {
                    P.current &&
                      !P.current.destroyed &&
                      P.current.destroy(!0, !1);
                  }
                );
            }, []),
            Tu(function () {
              q();
              var e = wu(I, O.current, F, j.current);
              return (
                (O.current = I),
                (j.current = F),
                e.length &&
                  P.current &&
                  !P.current.destroyed &&
                  Eu({
                    swiper: P.current,
                    slides: F,
                    passedParams: I,
                    changedParams: e,
                    nextEl: L.current,
                    prevEl: _.current,
                    scrollbarEl: M.current,
                    paginationEl: A.current,
                  }),
                function () {
                  H();
                }
              );
            }),
            Tu(
              function () {
                ku(P.current);
              },
              [b],
            ),
            r.createElement(
              i,
              Ou(
                {
                  ref: T,
                  className: pu(''.concat(v).concat(t ? ' '.concat(t) : '')),
                },
                D,
              ),
              B['container-start'],
              cu(R) &&
                r.createElement(
                  r.Fragment,
                  null,
                  r.createElement('div', {
                    ref: _,
                    className: 'swiper-button-prev',
                  }),
                  r.createElement('div', {
                    ref: L,
                    className: 'swiper-button-next',
                  }),
                ),
              fu(R) &&
                r.createElement('div', {
                  ref: M,
                  className: 'swiper-scrollbar',
                }),
              du(R) &&
                r.createElement('div', {
                  ref: A,
                  className: 'swiper-pagination',
                }),
              r.createElement(
                o,
                { className: 'swiper-wrapper' },
                B['wrapper-start'],
                W(),
                B['wrapper-end'],
              ),
              B['container-end'],
            )
          );
        });
        ju.displayName = 'Swiper';
        var Lu = [
          'tag',
          'children',
          'className',
          'swiper',
          'zoom',
          'virtualIndex',
        ];
        function _u() {
          return (
            (_u =
              Object.assign ||
              function (e) {
                for (var t = 1; t < arguments.length; t++) {
                  var n = arguments[t];
                  for (var r in n)
                    Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
                }
                return e;
              }),
            _u.apply(this, arguments)
          );
        }
        var Au = (0, r.forwardRef)(function () {
          var e,
            t =
              arguments.length > 0 && void 0 !== arguments[0]
                ? arguments[0]
                : {},
            n = t.tag,
            i = void 0 === n ? 'div' : n,
            a = t.children,
            o = t.className,
            l = void 0 === o ? '' : o,
            u = t.swiper,
            c = t.zoom,
            d = t.virtualIndex,
            f = Hs(t, Lu),
            p = arguments.length > 1 ? arguments[1] : void 0,
            h = (0, r.useRef)(null),
            v = (0, r.useState)('swiper-slide'),
            m = s(v, 2),
            g = m[0],
            y = m[1];
          function b(e, t, n) {
            t === h.current && y(n);
          }
          Tu(function () {
            if ((p && (p.current = h.current), h.current && u)) {
              if (!u.destroyed)
                return (
                  u.on('_slideClass', b),
                  function () {
                    u && u.off('_slideClass', b);
                  }
                );
              'swiper-slide' !== g && y('swiper-slide');
            }
          }),
            Tu(
              function () {
                u && h.current && y(u.getSlideClasses(h.current));
              },
              [u],
            ),
            'function' === typeof a &&
              (e = {
                isActive:
                  g.indexOf('swiper-slide-active') >= 0 ||
                  g.indexOf('swiper-slide-duplicate-active') >= 0,
                isVisible: g.indexOf('swiper-slide-visible') >= 0,
                isDuplicate: g.indexOf('swiper-slide-duplicate') >= 0,
                isPrev:
                  g.indexOf('swiper-slide-prev') >= 0 ||
                  g.indexOf('swiper-slide-duplicate-prev') >= 0,
                isNext:
                  g.indexOf('swiper-slide-next') >= 0 ||
                  g.indexOf('swiper-slide-duplicate-next') >= 0,
              });
          var w = function () {
            return 'function' === typeof a ? a(e) : a;
          };
          return r.createElement(
            i,
            _u(
              {
                ref: h,
                className: pu(''.concat(g).concat(l ? ' '.concat(l) : '')),
                'data-swiper-slide-index': d,
              },
              f,
            ),
            c
              ? r.createElement(
                  'div',
                  {
                    className: 'swiper-zoom-container',
                    'data-swiper-zoom': 'number' === typeof c ? c : void 0,
                  },
                  w(),
                )
              : w(),
          );
        });
        Au.displayName = 'SwiperSlide';
        var Mu =
          n.p +
          'static/media/iconPartnerApple.e6848f14a62c6b8be75684a5e7750862.svg';
        var Nu =
          n.p +
          'static/media/iconPartnerCisco.8249aa3134c5cbdde695e4ca4fda51e6.svg';
        var Ru =
          n.p +
          'static/media/iconPartnerMeraki.b09123a5d31150054f48688e36d35afa.svg';
        var Iu =
          n.p +
          'static/media/iconPartnerNetgear.4704cb363d86cfd82cd8a5e9fe064bd9.svg';
        var Du =
          n.p +
          'static/media/iconPartnerTPLink.4aec89c060128d2cc29e73c7b933ca1b.svg';
        var zu =
          n.p +
          'static/media/iconPartnerMicrosoft.4a68738c746d7dad864bb2c950979048.svg';
        var Vu =
          n.p +
          'static/media/iconPartnerUbiquity.97565d894c63090f835d10ac8b97cb8b.svg';
        var Fu =
          n.p +
          'static/media/iconPartnerHP.217c55258562ed92f79f83ea231aaf5e.svg';
        var Bu =
          n.p +
          'static/media/iconPartnerEpson.63c79cc4b2aeef02eab3c13763ce7f58.svg';
        var Uu =
          n.p +
          'static/media/iconPartnerAWS.df1035620b6f6e6650d58b096579a066.svg';
        function $u() {
          return (0, l.jsxs)(ju, {
            modules: [su, ou],
            spaceBetween: 0,
            slidesPerView: 1,
            autoplay: !0,
            loop: !0,
            scrollbar: { hide: !0 },
            children: [
              (0, l.jsx)(Au, { children: (0, l.jsx)(qs, { icon: Mu }) }),
              (0, l.jsx)(Au, { children: (0, l.jsx)(qs, { icon: Nu }) }),
              (0, l.jsx)(Au, { children: (0, l.jsx)(qs, { icon: Ru }) }),
              (0, l.jsx)(Au, { children: (0, l.jsx)(qs, { icon: Iu }) }),
              (0, l.jsx)(Au, { children: (0, l.jsx)(qs, { icon: Du }) }),
              (0, l.jsx)(Au, { children: (0, l.jsx)(qs, { icon: zu }) }),
              (0, l.jsx)(Au, { children: (0, l.jsx)(qs, { icon: Vu }) }),
              (0, l.jsx)(Au, { children: (0, l.jsx)(qs, { icon: Fu }) }),
              (0, l.jsx)(Au, { children: (0, l.jsx)(qs, { icon: Bu }) }),
              (0, l.jsx)(Au, { children: (0, l.jsx)(qs, { icon: Uu }) }),
            ],
          });
        }
        function qu() {
          return (0, l.jsxs)('section', {
            className: 'partners',
            id: 'partners',
            children: [
              (0, l.jsx)(Wo, {
                h1: ['partners &', (0, l.jsx)('br', {}), 'certifications'],
                paragraph:
                  'Lorem ipsum dolor sit amet, consectetur adipiscing elit. In pellentesque egestas nunc, tincidunt aliquam sit aliquet aliquam.',
              }),
              (0, l.jsx)($u, {}),
            ],
          });
        }
        function Hu(e, t, n, r, i, a, o) {
          try {
            var s = e[a](o),
              l = s.value;
          } catch (u) {
            return void n(u);
          }
          s.done ? t(l) : Promise.resolve(l).then(r, i);
        }
        function Wu(e) {
          return function () {
            var t = this,
              n = arguments;
            return new Promise(function (r, i) {
              var a = e.apply(t, n);
              function o(e) {
                Hu(a, r, i, o, s, 'next', e);
              }
              function s(e) {
                Hu(a, r, i, o, s, 'throw', e);
              }
              o(void 0);
            });
          };
        }
        function Gu(e, t) {
          var n = Object.keys(e);
          if (Object.getOwnPropertySymbols) {
            var r = Object.getOwnPropertySymbols(e);
            t &&
              (r = r.filter(function (t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable;
              })),
              n.push.apply(n, r);
          }
          return n;
        }
        function Yu(e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = null != arguments[t] ? arguments[t] : {};
            t % 2
              ? Gu(Object(n), !0).forEach(function (t) {
                  Pe(e, t, n[t]);
                })
              : Object.getOwnPropertyDescriptors
              ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
              : Gu(Object(n)).forEach(function (t) {
                  Object.defineProperty(
                    e,
                    t,
                    Object.getOwnPropertyDescriptor(n, t),
                  );
                });
          }
          return e;
        }
        var Xu = n(7757),
          Qu = n.n(Xu),
          Ku = n(4569),
          Ju = n.n(Ku);
        function Zu(e) {
          return (0, l.jsx)('h2', { children: e.h2 });
        }
        function ec(e) {
          var t = e.label,
            n = e.name,
            r = e.type,
            i = e.value,
            a = e.placeholder,
            o = e.onChange,
            s = e.error;
          return (0, l.jsxs)('div', {
            className: 'input',
            children: [
              (0, l.jsx)('label', {
                children: (0, l.jsx)('p', {
                  className: 'caption',
                  children: t,
                }),
              }),
              (0, l.jsx)('input', {
                type: r,
                placeholder: a,
                onChange: o,
                value: i,
                name: n,
              }),
              (0, l.jsx)('p', { className: 'small error', children: s }),
            ],
          });
        }
        function tc(e) {
          var t = e.label,
            n = e.name,
            r = (e.type, e.value),
            i = e.placeholder,
            a = e.onChange,
            o = e.error;
          return (0, l.jsxs)('div', {
            className: 'textarea',
            children: [
              (0, l.jsx)('label', {
                children: (0, l.jsx)('p', {
                  className: 'caption',
                  children: t,
                }),
              }),
              (0, l.jsx)('textarea', {
                placeholder: i,
                onChange: a,
                name: n,
                value: r,
              }),
              (0, l.jsx)('p', { className: 'small error', children: o }),
            ],
          });
        }
        function nc(e) {
          var t = e.type,
            n = e.text,
            r = e.status;
          return (0, l.jsx)('button', {
            className: 'form-send-button',
            type: t,
            children: (0, l.jsx)('p', { className: 'btn', children: n || r }),
          });
        }
        var rc = n(2007),
          ic = n.n(rc);
        function ac() {
          return (
            (ac =
              Object.assign ||
              function (e) {
                for (var t = 1; t < arguments.length; t++) {
                  var n = arguments[t];
                  for (var r in n)
                    Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
                }
                return e;
              }),
            ac.apply(this, arguments)
          );
        }
        function oc(e) {
          if (void 0 === e)
            throw new ReferenceError(
              "this hasn't been initialised - super() hasn't been called",
            );
          return e;
        }
        var sc = (function (e) {
          var t, n;
          function i() {
            var t;
            return (
              ((t = e.call(this) || this).handleExpired = t.handleExpired.bind(
                oc(t),
              )),
              (t.handleErrored = t.handleErrored.bind(oc(t))),
              (t.handleChange = t.handleChange.bind(oc(t))),
              (t.handleRecaptchaRef = t.handleRecaptchaRef.bind(oc(t))),
              t
            );
          }
          (n = e),
            ((t = i).prototype = Object.create(n.prototype)),
            (t.prototype.constructor = t),
            (t.__proto__ = n);
          var a = i.prototype;
          return (
            (a.getValue = function () {
              return this.props.grecaptcha && void 0 !== this._widgetId
                ? this.props.grecaptcha.getResponse(this._widgetId)
                : null;
            }),
            (a.getWidgetId = function () {
              return this.props.grecaptcha && void 0 !== this._widgetId
                ? this._widgetId
                : null;
            }),
            (a.execute = function () {
              var e = this.props.grecaptcha;
              if (e && void 0 !== this._widgetId)
                return e.execute(this._widgetId);
              this._executeRequested = !0;
            }),
            (a.executeAsync = function () {
              var e = this;
              return new Promise(function (t, n) {
                (e.executionResolve = t), (e.executionReject = n), e.execute();
              });
            }),
            (a.reset = function () {
              this.props.grecaptcha &&
                void 0 !== this._widgetId &&
                this.props.grecaptcha.reset(this._widgetId);
            }),
            (a.handleExpired = function () {
              this.props.onExpired
                ? this.props.onExpired()
                : this.handleChange(null);
            }),
            (a.handleErrored = function () {
              this.props.onErrored && this.props.onErrored(),
                this.executionReject &&
                  (this.executionReject(),
                  delete this.executionResolve,
                  delete this.executionReject);
            }),
            (a.handleChange = function (e) {
              this.props.onChange && this.props.onChange(e),
                this.executionResolve &&
                  (this.executionResolve(e),
                  delete this.executionReject,
                  delete this.executionResolve);
            }),
            (a.explicitRender = function () {
              if (
                this.props.grecaptcha &&
                this.props.grecaptcha.render &&
                void 0 === this._widgetId
              ) {
                var e = document.createElement('div');
                (this._widgetId = this.props.grecaptcha.render(e, {
                  sitekey: this.props.sitekey,
                  callback: this.handleChange,
                  theme: this.props.theme,
                  type: this.props.type,
                  tabindex: this.props.tabindex,
                  'expired-callback': this.handleExpired,
                  'error-callback': this.handleErrored,
                  size: this.props.size,
                  stoken: this.props.stoken,
                  hl: this.props.hl,
                  badge: this.props.badge,
                })),
                  this.captcha.appendChild(e);
              }
              this._executeRequested &&
                this.props.grecaptcha &&
                void 0 !== this._widgetId &&
                ((this._executeRequested = !1), this.execute());
            }),
            (a.componentDidMount = function () {
              this.explicitRender();
            }),
            (a.componentDidUpdate = function () {
              this.explicitRender();
            }),
            (a.componentWillUnmount = function () {
              void 0 !== this._widgetId &&
                (this.delayOfCaptchaIframeRemoving(), this.reset());
            }),
            (a.delayOfCaptchaIframeRemoving = function () {
              var e = document.createElement('div');
              for (
                document.body.appendChild(e), e.style.display = 'none';
                this.captcha.firstChild;

              )
                e.appendChild(this.captcha.firstChild);
              setTimeout(function () {
                document.body.removeChild(e);
              }, 5e3);
            }),
            (a.handleRecaptchaRef = function (e) {
              this.captcha = e;
            }),
            (a.render = function () {
              var e = this.props,
                t =
                  (e.sitekey,
                  e.onChange,
                  e.theme,
                  e.type,
                  e.tabindex,
                  e.onExpired,
                  e.onErrored,
                  e.size,
                  e.stoken,
                  e.grecaptcha,
                  e.badge,
                  e.hl,
                  (function (e, t) {
                    if (null == e) return {};
                    var n,
                      r,
                      i = {},
                      a = Object.keys(e);
                    for (r = 0; r < a.length; r++)
                      (n = a[r]), t.indexOf(n) >= 0 || (i[n] = e[n]);
                    return i;
                  })(e, [
                    'sitekey',
                    'onChange',
                    'theme',
                    'type',
                    'tabindex',
                    'onExpired',
                    'onErrored',
                    'size',
                    'stoken',
                    'grecaptcha',
                    'badge',
                    'hl',
                  ]));
              return r.createElement(
                'div',
                ac({}, t, { ref: this.handleRecaptchaRef }),
              );
            }),
            i
          );
        })(r.Component);
        (sc.displayName = 'ReCAPTCHA'),
          (sc.propTypes = {
            sitekey: ic().string.isRequired,
            onChange: ic().func,
            grecaptcha: ic().object,
            theme: ic().oneOf(['dark', 'light']),
            type: ic().oneOf(['image', 'audio']),
            tabindex: ic().number,
            onExpired: ic().func,
            onErrored: ic().func,
            size: ic().oneOf(['compact', 'normal', 'invisible']),
            stoken: ic().string,
            hl: ic().string,
            badge: ic().oneOf(['bottomright', 'bottomleft', 'inline']),
          }),
          (sc.defaultProps = {
            onChange: function () {},
            theme: 'light',
            type: 'image',
            tabindex: 0,
            size: 'normal',
            badge: 'bottomright',
          });
        var lc = n(2110),
          uc = n.n(lc);
        function cc() {
          return (
            (cc =
              Object.assign ||
              function (e) {
                for (var t = 1; t < arguments.length; t++) {
                  var n = arguments[t];
                  for (var r in n)
                    Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
                }
                return e;
              }),
            cc.apply(this, arguments)
          );
        }
        var dc = {},
          fc = 0;
        var pc = 'onloadcallback';
        var hc,
          vc,
          mc = ((hc = function () {
            return (
              'https://' +
              ((
                ('undefined' !== typeof window && window.recaptchaOptions) ||
                {}
              ).useRecaptchaNet
                ? 'recaptcha.net'
                : 'www.google.com') +
              '/recaptcha/api.js?onload=' +
              pc +
              '&render=explicit'
            );
          }),
          (vc = (vc = { callbackName: pc, globalName: 'grecaptcha' }) || {}),
          function (e) {
            var t = e.displayName || e.name || 'Component',
              n = (function (t) {
                var n, i;
                function a(e, n) {
                  var r;
                  return (
                    ((r = t.call(this, e, n) || this).state = {}),
                    (r.__scriptURL = ''),
                    r
                  );
                }
                (i = t),
                  ((n = a).prototype = Object.create(i.prototype)),
                  (n.prototype.constructor = n),
                  (n.__proto__ = i);
                var o = a.prototype;
                return (
                  (o.asyncScriptLoaderGetScriptLoaderID = function () {
                    return (
                      this.__scriptLoaderID ||
                        (this.__scriptLoaderID = 'async-script-loader-' + fc++),
                      this.__scriptLoaderID
                    );
                  }),
                  (o.setupScriptURL = function () {
                    return (
                      (this.__scriptURL = 'function' === typeof hc ? hc() : hc),
                      this.__scriptURL
                    );
                  }),
                  (o.asyncScriptLoaderHandleLoad = function (e) {
                    var t = this;
                    this.setState(e, function () {
                      return (
                        t.props.asyncScriptOnLoad &&
                        t.props.asyncScriptOnLoad(t.state)
                      );
                    });
                  }),
                  (o.asyncScriptLoaderTriggerOnScriptLoaded = function () {
                    var e = dc[this.__scriptURL];
                    if (!e || !e.loaded)
                      throw new Error('Script is not loaded.');
                    for (var t in e.observers) e.observers[t](e);
                    delete window[vc.callbackName];
                  }),
                  (o.componentDidMount = function () {
                    var e = this,
                      t = this.setupScriptURL(),
                      n = this.asyncScriptLoaderGetScriptLoaderID(),
                      r = vc,
                      i = r.globalName,
                      a = r.callbackName,
                      o = r.scriptId;
                    if (
                      (i &&
                        'undefined' !== typeof window[i] &&
                        (dc[t] = { loaded: !0, observers: {} }),
                      dc[t])
                    ) {
                      var s = dc[t];
                      return s && (s.loaded || s.errored)
                        ? void this.asyncScriptLoaderHandleLoad(s)
                        : void (s.observers[n] = function (t) {
                            return e.asyncScriptLoaderHandleLoad(t);
                          });
                    }
                    var l = {};
                    (l[n] = function (t) {
                      return e.asyncScriptLoaderHandleLoad(t);
                    }),
                      (dc[t] = { loaded: !1, observers: l });
                    var u = document.createElement('script');
                    for (var c in ((u.src = t), (u.async = !0), vc.attributes))
                      u.setAttribute(c, vc.attributes[c]);
                    o && (u.id = o);
                    var d = function (e) {
                      if (dc[t]) {
                        var n = dc[t].observers;
                        for (var r in n) e(n[r]) && delete n[r];
                      }
                    };
                    a &&
                      'undefined' !== typeof window &&
                      (window[a] = function () {
                        return e.asyncScriptLoaderTriggerOnScriptLoaded();
                      }),
                      (u.onload = function () {
                        var e = dc[t];
                        e &&
                          ((e.loaded = !0),
                          d(function (t) {
                            return !a && (t(e), !0);
                          }));
                      }),
                      (u.onerror = function () {
                        var e = dc[t];
                        e &&
                          ((e.errored = !0),
                          d(function (t) {
                            return t(e), !0;
                          }));
                      }),
                      document.body.appendChild(u);
                  }),
                  (o.componentWillUnmount = function () {
                    var e = this.__scriptURL;
                    if (!0 === vc.removeOnUnmount)
                      for (
                        var t = document.getElementsByTagName('script'), n = 0;
                        n < t.length;
                        n += 1
                      )
                        t[n].src.indexOf(e) > -1 &&
                          t[n].parentNode &&
                          t[n].parentNode.removeChild(t[n]);
                    var r = dc[e];
                    r &&
                      (delete r.observers[
                        this.asyncScriptLoaderGetScriptLoaderID()
                      ],
                      !0 === vc.removeOnUnmount && delete dc[e]);
                  }),
                  (o.render = function () {
                    var t = vc.globalName,
                      n = this.props,
                      i = (n.asyncScriptOnLoad, n.forwardedRef),
                      a = (function (e, t) {
                        if (null == e) return {};
                        var n,
                          r,
                          i = {},
                          a = Object.keys(e);
                        for (r = 0; r < a.length; r++)
                          (n = a[r]), t.indexOf(n) >= 0 || (i[n] = e[n]);
                        return i;
                      })(n, ['asyncScriptOnLoad', 'forwardedRef']);
                    return (
                      t &&
                        'undefined' !== typeof window &&
                        (a[t] =
                          'undefined' !== typeof window[t]
                            ? window[t]
                            : void 0),
                      (a.ref = i),
                      (0, r.createElement)(e, a)
                    );
                  }),
                  a
                );
              })(r.Component),
              i = (0, r.forwardRef)(function (e, t) {
                return (0, r.createElement)(n, cc({}, e, { forwardedRef: t }));
              });
            return (
              (i.displayName = 'AsyncScriptLoader(' + t + ')'),
              (i.propTypes = { asyncScriptOnLoad: ic().func }),
              uc()(i, e)
            );
          })(sc),
          gc = mc;
        function yc() {
          var e = { name: '', email: '', message: '' },
            t = s((0, r.useState)(e), 2),
            n = t[0],
            i = t[1],
            a = s((0, r.useState)({}), 2),
            o = a[0],
            u = a[1],
            c = s((0, r.useState)(!1), 2),
            d = c[0],
            f = c[1],
            p = s((0, r.useState)('SEND INQUIRY'), 2),
            h = p[0],
            v = p[1],
            m = s((0, r.useState)(!1), 2),
            g = m[0],
            y = m[1],
            b = s((0, r.useContext)(Vo).themeColorObj, 2),
            w = b[0],
            x = (b[1], (0, r.useRef)()),
            S =
              /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
            E = function (e) {
              var t = e.target,
                r = t.name,
                a = t.value;
              i(Yu(Yu({}, n), {}, Pe({}, r, a)));
            },
            k = (function () {
              var e = Wu(
                Qu().mark(function e(t) {
                  return Qu().wrap(function (e) {
                    for (;;)
                      switch ((e.prev = e.next)) {
                        case 0:
                          t.preventDefault(), u(C(n)), f(!0), console.log(o);
                        case 4:
                        case 'end':
                          return e.stop();
                      }
                  }, e);
                }),
              );
              return function (t) {
                return e.apply(this, arguments);
              };
            })();
          (0, r.useEffect)(
            function () {
              var t = (function () {
                var e = Wu(
                  Qu().mark(function e() {
                    var t, r, i, a, o;
                    return Qu().wrap(
                      function (e) {
                        for (;;)
                          switch ((e.prev = e.next)) {
                            case 0:
                              if (!g) {
                                e.next = 17;
                                break;
                              }
                              return (e.next = 3), x.current.executeAsync();
                            case 3:
                              return (
                                (t = e.sent),
                                (r = n.name),
                                (i = n.email),
                                (a = n.message),
                                (e.prev = 5),
                                (e.next = 8),
                                Ju().post('/contact', {
                                  name: r,
                                  email: i,
                                  message: a,
                                  token: t,
                                })
                              );
                            case 8:
                              (o = e.sent),
                                console.log('Request back', o),
                                (e.next = 17);
                              break;
                            case 12:
                              (e.prev = 12),
                                (e.t0 = e.catch(5)),
                                console.error(e.t0.code),
                                console.error(e.t0.message),
                                console.error(e.t0.stack);
                            case 17:
                            case 'end':
                              return e.stop();
                          }
                      },
                      e,
                      null,
                      [[5, 12]],
                    );
                  }),
                );
                return function () {
                  return e.apply(this, arguments);
                };
              })();
              0 !== Object.keys(o).length && d
                ? (v('TRY AGAIN!'),
                  y(!1),
                  console.log('Form not sent'),
                  setTimeout(function () {
                    f(!1);
                  }, 3e3))
                : 0 === Object.keys(o).length &&
                  d &&
                  (v('THANK YOU!'),
                  y(!0),
                  t(),
                  console.log('Form sent'),
                  setTimeout(function () {
                    v('SEND INQUIRY'), f(!1), i(e), y(!1);
                  }, 3e3));
            },
            [d, g, o, n],
          );
          var C = function (e) {
            var t = {};
            return (
              e.name || (t.name = 'Your name is required!'),
              e.email
                ? S.test(e.email) || (t.email = 'Your email is not valid!')
                : (t.email = 'Your email is required!'),
              e.message || (t.message = 'A message is required!'),
              t
            );
          };
          return (0, l.jsxs)('form', {
            onSubmit: k,
            children: [
              (0, l.jsx)(Zu, { h2: 'Send your inquiry' }),
              (0, l.jsx)(ec, {
                label: 'name',
                type: 'text',
                placeholder: 'Your name',
                onChange: E,
                name: 'name',
                value: n.name,
                error: o.name,
              }),
              (0, l.jsx)(ec, {
                label: 'email',
                type: 'email',
                placeholder: 'Your email address',
                onChange: E,
                name: 'email',
                value: n.email,
                error: o.email,
              }),
              (0, l.jsx)(tc, {
                label: 'message',
                placeholder: 'Please type your message',
                onChange: E,
                name: 'message',
                value: n.message,
                error: o.message,
              }),
              (0, l.jsx)('div', {
                children: (0, l.jsxs)('p', {
                  className: 'small',
                  children: [
                    'This site is protected by reCAPTCHA and the Google',
                    (0, l.jsx)('a', {
                      href: 'https://policies.google.com/privacy',
                      style: { color: ''.concat(Yo) },
                      children: ' Privacy Policy',
                    }),
                    ' and',
                    (0, l.jsx)('a', {
                      href: 'https://policies.google.com/terms',
                      style: { color: ''.concat(Yo) },
                      children: ' Terms of Service',
                    }),
                    ' apply.',
                  ],
                }),
              }),
              (0, l.jsx)(nc, { type: 'submit', status: h }),
              (0, l.jsx)(gc, {
                ref: x,
                sitekey: '6LeMJE4eAAAAAMTccweQVhjvYKhRjfAO9wrVFsQI',
                theme: 'light' === w ? 'light' : 'dark',
                size: 'invisible',
              }),
            ],
          });
        }
        function bc(e) {
          return (0, l.jsx)('h3', { children: e.h3 });
        }
        function wc(e) {
          return (0, l.jsx)('address', {
            children: (0, l.jsx)('img', {
              src: e.icon,
              alt: 'social-media-icon',
              className: e.class,
            }),
          });
        }
        function xc() {
          return (0, l.jsxs)('div', {
            className: 'copyright',
            children: [
              (0, l.jsx)(Ro, { logo: Bo }),
              (0, l.jsxs)('p', {
                className: 'small',
                children: [
                  '2021 copyright ISR TEchnology. ',
                  (0, l.jsx)('br', {}),
                  'all rights reserved.',
                ],
              }),
            ],
          });
        }
        var Sc =
          n.p +
          'static/media/googleMapsIconDark.727df924abc5848b7d7b092e725b2f13.svg';
        var Ec =
          n.p +
          'static/media/wazeIconDark.94c415aaba3d1909e2538e9cb9aa3189.svg';
        var kc =
          n.p +
          'static/media/googleMapsIconLight.a2e13ddea93c770fadc789eed67b2072.svg';
        var Cc =
          n.p +
          'static/media/wazeIconLight.3559451ea4cb09f6c5be398f03a4efb2.svg';
        var Tc =
          n.p +
          'static/media/linkedinIcon.427e0a8bacb5f7d5ac8a62b233a115ce.svg';
        var Pc =
          n.p +
          'static/media/facebookIcon.0d724a3844c289cb3e968938f68f3515.svg';
        var Oc =
          n.p +
          'static/media/instagramIcon.d7ee05ebe3871f8d97ba0fed6aba6086.svg';
        var jc =
          n.p + 'static/media/youtubeIcon.d97eb5d786ed081287ac728371dd7672.svg';
        var Lc =
          n.p +
          'static/media/imnotLogoLight.7ac0ca76fe9662b0d0be086dee0c1772.svg';
        var _c =
          n.p +
          'static/media/imnotLogoDark.f865781a7f493fcea8fa832565021314.svg';
        function Ac() {
          var e = s((0, r.useContext)(Vo).themeColorObj, 2),
            t = e[0];
          e[1];
          return (0, l.jsxs)('section', {
            className: 'contact',
            id: 'contact',
            children: [
              (0, l.jsxs)('div', {
                className: 'container',
                children: [
                  (0, l.jsx)(Wo, {
                    h1: [
                      'contact,',
                      (0, l.jsx)('br', {}),
                      'navigation &',
                      (0, l.jsx)('br', {}),
                      'social media',
                    ],
                    paragraph:
                      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. In pellentesque egestas nunc, tincidunt aliquam sit aliquet aliquam.',
                  }),
                  (0, l.jsx)(yc, {}),
                  (0, l.jsxs)('div', {
                    className: 'contact-info',
                    children: [
                      (0, l.jsxs)('div', {
                        className: 'location-navigation',
                        children: [
                          (0, l.jsx)(Zu, { h2: 'Location & Navigation' }),
                          (0, l.jsxs)('div', {
                            className: 'address-navigation',
                            children: [
                              (0, l.jsxs)('div', {
                                className: 'address',
                                children: [
                                  (0, l.jsx)(bc, { h3: 'Address' }),
                                  (0, l.jsxs)('p', {
                                    children: [
                                      '701 Brickell Avenue',
                                      (0, l.jsx)('br', {}),
                                      'Suite 1550',
                                      (0, l.jsx)('br', {}),
                                      'Miami, FL 33131',
                                    ],
                                  }),
                                  (0, l.jsxs)('p', {
                                    children: [
                                      '+1 305 328 9110',
                                      (0, l.jsx)('br', {}),
                                      'contact@isr-technology.com',
                                    ],
                                  }),
                                ],
                              }),
                              (0, l.jsxs)('div', {
                                className: 'navigation',
                                children: [
                                  (0, l.jsx)(bc, { h3: 'Navigation' }),
                                  (0, l.jsxs)('div', {
                                    className: 'navigation-icons',
                                    children: [
                                      'light' === t
                                        ? (0, l.jsx)('a', {
                                            href: 'https://www.google.com/maps/place/701+Brickell+Ave,+Miami,+FL+33131,+USA/@25.7668374,-80.1909157,17z/data=!3m1!4b1!4m5!3m4!1s0x88d9b682ea3a24d1:0x33476300065862a2!8m2!3d25.7668326!4d-80.188727',
                                            target: '_blank',
                                            rel: 'noopener noreferrer',
                                            children: (0, l.jsx)(u, {
                                              icon: kc,
                                            }),
                                          })
                                        : (0, l.jsx)('a', {
                                            href: 'https://www.google.com/maps/place/701+Brickell+Ave,+Miami,+FL+33131,+USA/@25.7668374,-80.1909157,17z/data=!3m1!4b1!4m5!3m4!1s0x88d9b682ea3a24d1:0x33476300065862a2!8m2!3d25.7668326!4d-80.188727',
                                            target: '_blank',
                                            rel: 'noopener noreferrer',
                                            children: (0, l.jsx)(u, {
                                              icon: Sc,
                                            }),
                                          }),
                                      'light' === t
                                        ? (0, l.jsx)('a', {
                                            href: 'https://ul.waze.com/ul?place=ChIJ0SQ66oK22YgRomJYBgBjRzM&ll=25.76683260%2C-80.18872700&navigate=yes&utm_campaign=default&utm_source=waze_website&utm_medium=lm_share_location',
                                            target: '_blank',
                                            rel: 'noopener noreferrer',
                                            children: (0, l.jsx)(u, {
                                              icon: Cc,
                                            }),
                                          })
                                        : (0, l.jsx)('a', {
                                            href: 'https://ul.waze.com/ul?place=ChIJ0SQ66oK22YgRomJYBgBjRzM&ll=25.76683260%2C-80.18872700&navigate=yes&utm_campaign=default&utm_source=waze_website&utm_medium=lm_share_location',
                                            target: '_blank',
                                            rel: 'noopener noreferrer',
                                            children: (0, l.jsx)(u, {
                                              icon: Ec,
                                            }),
                                          }),
                                    ],
                                  }),
                                ],
                              }),
                            ],
                          }),
                        ],
                      }),
                      (0, l.jsxs)('div', {
                        className: 'social-media',
                        children: [
                          (0, l.jsx)(Zu, { h2: 'Follow Us' }),
                          (0, l.jsxs)('div', {
                            className: 'social-media-icons',
                            children: [
                              (0, l.jsx)('a', {
                                href: 'https://www.linkedin.com/company/isr-technology',
                                target: '_blank',
                                rel: 'noopener noreferrer',
                                children: (0, l.jsx)(wc, { icon: Tc }),
                              }),
                              (0, l.jsx)('a', {
                                href: 'https://www.facebook.com/Isr-Technology-104523352137948',
                                target: '_blank',
                                rel: 'noopener noreferrer',
                                children: (0, l.jsx)(wc, { icon: Pc }),
                              }),
                              (0, l.jsx)('a', {
                                href: 'https://www.instagram.com/isr_technology/',
                                target: '_blank',
                                rel: 'noopener noreferrer',
                                children: (0, l.jsx)(wc, { icon: Oc }),
                              }),
                              (0, l.jsx)('a', {
                                href: 'http://',
                                target: '_blank',
                                rel: 'noopener noreferrer',
                                children: (0, l.jsx)(wc, { icon: jc }),
                              }),
                            ],
                          }),
                        ],
                      }),
                      (0, l.jsxs)('div', {
                        className: 'footer',
                        children: [
                          (0, l.jsxs)('div', {
                            className: 'design-and-development',
                            children: [
                              (0, l.jsx)('p', {
                                className: 'caption',
                                children: 'design & development',
                              }),
                              (0, l.jsx)('a', {
                                href: 'http://imnot.agency',
                                target: '_blank',
                                rel: 'noopener noreferrer',
                                children:
                                  'light' === t
                                    ? (0, l.jsx)(Ro, {
                                        logo: Lc,
                                        class: 'imnot',
                                      })
                                    : (0, l.jsx)(Ro, {
                                        logo: _c,
                                        class: 'imnot',
                                      }),
                              }),
                            ],
                          }),
                          (0, l.jsx)(xc, {}),
                        ],
                      }),
                    ],
                  }),
                ],
              }),
              (0, l.jsx)(u, { icon: Zo, class: 's-shape-down' }),
            ],
          });
        }
        function Mc(e) {
          var t = (0, r.useContext)(Vo).isLG;
          return (0, l.jsxs)('svg', {
            width: t ? '32px' : '40px',
            height: 'auto',
            viewBox: '0 0 32 32',
            xmlns: 'http://www.w3.org/2000/svg',
            children: [
              (0, l.jsx)('rect', {
                width: '31.9949',
                height: '31.9982',
                rx: '15.9975',
                fill: ''.concat(e.fillCircle),
              }),
              (0, l.jsx)('path', {
                d: 'M17.2284 17.2287C15.6454 18.8107 13.8114 20.3247 13.0864 19.5997C12.0494 18.5627 11.4094 17.6587 9.12142 19.4977C6.83442 21.3357 8.59142 22.5617 9.59642 23.5657C10.7564 24.7257 15.0804 23.6277 19.3544 19.3547C23.6274 15.0807 24.7224 10.7567 23.5614 9.59667C22.5564 8.59067 21.3364 6.83467 19.4984 9.12167C17.6594 11.4087 18.5624 12.0487 19.6014 13.0867C20.3234 13.8117 18.8104 15.6457 17.2284 17.2287Z',
                fill: ''.concat(e.fillPhone),
              }),
            ],
          });
        }
        function Nc() {
          var e = s((0, r.useContext)(Vo).themeColorObj, 2),
            t = e[0],
            n = (e[1], (0, r.useContext)(Vo).isLG);
          return (0, l.jsx)('div', {
            className: 'call navlinks',
            children: (0, l.jsxs)('a', {
              href: 'tel:+13053289110',
              children: [
                (0, l.jsx)('p', {
                  className: 'navlinks',
                  style:
                    n && 'light' === t
                      ? { color: Go, display: 'flex' }
                      : n && 'dark' === t
                      ? { color: Xo }
                      : { display: 'none' },
                  children: '305-328-9110',
                }),
                (0, l.jsx)(Mc, {
                  fillCircle: Yo,
                  fillPhone: 'light' === t ? Xo : Go,
                }),
              ],
            }),
          });
        }
        function Rc() {
          (0, r.useContext)(Vo).isLG;
          var e = s((0, r.useContext)(Vo).themeColorObj, 2),
            t = e[0],
            n = (e[1], s((0, r.useContext)(Vo).browserHistoryObj, 2)),
            i = n[0];
          n[1];
          return (
            (0, r.useEffect)(
              function () {
                i[i.length - 2] &&
                  i[i.length - 2].includes('/services') &&
                  document
                    .getElementById('services')
                    .scrollIntoView({ behavior: 'smooth', block: 'start' });
              },
              [i],
            ),
            (0, l.jsxs)('main', {
              className: 'home-page',
              children: [
                (0, l.jsx)($o, { themeColor: t }),
                (0, l.jsx)($s, { themeColor: t }),
                (0, l.jsx)(qu, {}),
                (0, l.jsx)(Ac, {}),
                (0, l.jsx)(Nc, {}),
              ],
            })
          );
        }
        var Ic = function (e) {
            var t = e.children;
            return (0, l.jsx)('div', {
              className: 'layout-page',
              id: 'layout-page',
              children: t,
            });
          },
          Dc = n(9475),
          zc = n.n(Dc),
          Vc = n(77),
          Fc = n.n(Vc),
          Bc = n(1725),
          Uc = n.n(Bc),
          $c = 'bodyAttributes',
          qc = 'htmlAttributes',
          Hc = 'titleAttributes',
          Wc = {
            BASE: 'base',
            BODY: 'body',
            HEAD: 'head',
            HTML: 'html',
            LINK: 'link',
            META: 'meta',
            NOSCRIPT: 'noscript',
            SCRIPT: 'script',
            STYLE: 'style',
            TITLE: 'title',
          },
          Gc =
            (Object.keys(Wc).map(function (e) {
              return Wc[e];
            }),
            'charset'),
          Yc = 'cssText',
          Xc = 'href',
          Qc = 'http-equiv',
          Kc = 'innerHTML',
          Jc = 'itemprop',
          Zc = 'name',
          ed = 'property',
          td = 'rel',
          nd = 'src',
          rd = 'target',
          id = {
            accesskey: 'accessKey',
            charset: 'charSet',
            class: 'className',
            contenteditable: 'contentEditable',
            contextmenu: 'contextMenu',
            'http-equiv': 'httpEquiv',
            itemprop: 'itemProp',
            tabindex: 'tabIndex',
          },
          ad = 'defaultTitle',
          od = 'defer',
          sd = 'encodeSpecialCharacters',
          ld = 'onChangeClientState',
          ud = 'titleTemplate',
          cd = Object.keys(id).reduce(function (e, t) {
            return (e[id[t]] = t), e;
          }, {}),
          dd = [Wc.NOSCRIPT, Wc.SCRIPT, Wc.STYLE],
          fd = 'data-react-helmet',
          pd =
            'function' === typeof Symbol && 'symbol' === typeof Symbol.iterator
              ? function (e) {
                  return typeof e;
                }
              : function (e) {
                  return e &&
                    'function' === typeof Symbol &&
                    e.constructor === Symbol &&
                    e !== Symbol.prototype
                    ? 'symbol'
                    : typeof e;
                },
          hd = function (e, t) {
            if (!(e instanceof t))
              throw new TypeError('Cannot call a class as a function');
          },
          vd = (function () {
            function e(e, t) {
              for (var n = 0; n < t.length; n++) {
                var r = t[n];
                (r.enumerable = r.enumerable || !1),
                  (r.configurable = !0),
                  'value' in r && (r.writable = !0),
                  Object.defineProperty(e, r.key, r);
              }
            }
            return function (t, n, r) {
              return n && e(t.prototype, n), r && e(t, r), t;
            };
          })(),
          md =
            Object.assign ||
            function (e) {
              for (var t = 1; t < arguments.length; t++) {
                var n = arguments[t];
                for (var r in n)
                  Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
              }
              return e;
            },
          gd = function (e, t) {
            var n = {};
            for (var r in e)
              t.indexOf(r) >= 0 ||
                (Object.prototype.hasOwnProperty.call(e, r) && (n[r] = e[r]));
            return n;
          },
          yd = function (e, t) {
            if (!e)
              throw new ReferenceError(
                "this hasn't been initialised - super() hasn't been called",
              );
            return !t || ('object' !== typeof t && 'function' !== typeof t)
              ? e
              : t;
          },
          bd = function (e) {
            var t =
              !(arguments.length > 1 && void 0 !== arguments[1]) ||
              arguments[1];
            return !1 === t
              ? String(e)
              : String(e)
                  .replace(/&/g, '&amp;')
                  .replace(/</g, '&lt;')
                  .replace(/>/g, '&gt;')
                  .replace(/"/g, '&quot;')
                  .replace(/'/g, '&#x27;');
          },
          wd = function (e) {
            var t = Cd(e, Wc.TITLE),
              n = Cd(e, ud);
            if (n && t)
              return n.replace(/%s/g, function () {
                return Array.isArray(t) ? t.join('') : t;
              });
            var r = Cd(e, ad);
            return t || r || void 0;
          },
          xd = function (e) {
            return Cd(e, ld) || function () {};
          },
          Sd = function (e, t) {
            return t
              .filter(function (t) {
                return 'undefined' !== typeof t[e];
              })
              .map(function (t) {
                return t[e];
              })
              .reduce(function (e, t) {
                return md({}, e, t);
              }, {});
          },
          Ed = function (e, t) {
            return t
              .filter(function (e) {
                return 'undefined' !== typeof e[Wc.BASE];
              })
              .map(function (e) {
                return e[Wc.BASE];
              })
              .reverse()
              .reduce(function (t, n) {
                if (!t.length)
                  for (var r = Object.keys(n), i = 0; i < r.length; i++) {
                    var a = r[i].toLowerCase();
                    if (-1 !== e.indexOf(a) && n[a]) return t.concat(n);
                  }
                return t;
              }, []);
          },
          kd = function (e, t, n) {
            var r = {};
            return n
              .filter(function (t) {
                return (
                  !!Array.isArray(t[e]) ||
                  ('undefined' !== typeof t[e] &&
                    Ld(
                      'Helmet: ' +
                        e +
                        ' should be of type "Array". Instead found type "' +
                        pd(t[e]) +
                        '"',
                    ),
                  !1)
                );
              })
              .map(function (t) {
                return t[e];
              })
              .reverse()
              .reduce(function (e, n) {
                var i = {};
                n.filter(function (e) {
                  for (
                    var n = void 0, a = Object.keys(e), o = 0;
                    o < a.length;
                    o++
                  ) {
                    var s = a[o],
                      l = s.toLowerCase();
                    -1 === t.indexOf(l) ||
                      (n === td && 'canonical' === e[n].toLowerCase()) ||
                      (l === td && 'stylesheet' === e[l].toLowerCase()) ||
                      (n = l),
                      -1 === t.indexOf(s) ||
                        (s !== Kc && s !== Yc && s !== Jc) ||
                        (n = s);
                  }
                  if (!n || !e[n]) return !1;
                  var u = e[n].toLowerCase();
                  return (
                    r[n] || (r[n] = {}),
                    i[n] || (i[n] = {}),
                    !r[n][u] && ((i[n][u] = !0), !0)
                  );
                })
                  .reverse()
                  .forEach(function (t) {
                    return e.push(t);
                  });
                for (var a = Object.keys(i), o = 0; o < a.length; o++) {
                  var s = a[o],
                    l = Uc()({}, r[s], i[s]);
                  r[s] = l;
                }
                return e;
              }, [])
              .reverse();
          },
          Cd = function (e, t) {
            for (var n = e.length - 1; n >= 0; n--) {
              var r = e[n];
              if (r.hasOwnProperty(t)) return r[t];
            }
            return null;
          },
          Td = (function () {
            var e = Date.now();
            return function (t) {
              var n = Date.now();
              n - e > 16
                ? ((e = n), t(n))
                : setTimeout(function () {
                    Td(t);
                  }, 0);
            };
          })(),
          Pd = function (e) {
            return clearTimeout(e);
          },
          Od =
            'undefined' !== typeof window
              ? (window.requestAnimationFrame &&
                  window.requestAnimationFrame.bind(window)) ||
                window.webkitRequestAnimationFrame ||
                window.mozRequestAnimationFrame ||
                Td
              : n.g.requestAnimationFrame || Td,
          jd =
            'undefined' !== typeof window
              ? window.cancelAnimationFrame ||
                window.webkitCancelAnimationFrame ||
                window.mozCancelAnimationFrame ||
                Pd
              : n.g.cancelAnimationFrame || Pd,
          Ld = function (e) {
            return (
              console && 'function' === typeof console.warn && console.warn(e)
            );
          },
          _d = null,
          Ad = function (e, t) {
            var n = e.baseTag,
              r = e.bodyAttributes,
              i = e.htmlAttributes,
              a = e.linkTags,
              o = e.metaTags,
              s = e.noscriptTags,
              l = e.onChangeClientState,
              u = e.scriptTags,
              c = e.styleTags,
              d = e.title,
              f = e.titleAttributes;
            Rd(Wc.BODY, r), Rd(Wc.HTML, i), Nd(d, f);
            var p = {
                baseTag: Id(Wc.BASE, n),
                linkTags: Id(Wc.LINK, a),
                metaTags: Id(Wc.META, o),
                noscriptTags: Id(Wc.NOSCRIPT, s),
                scriptTags: Id(Wc.SCRIPT, u),
                styleTags: Id(Wc.STYLE, c),
              },
              h = {},
              v = {};
            Object.keys(p).forEach(function (e) {
              var t = p[e],
                n = t.newTags,
                r = t.oldTags;
              n.length && (h[e] = n), r.length && (v[e] = p[e].oldTags);
            }),
              t && t(),
              l(e, h, v);
          },
          Md = function (e) {
            return Array.isArray(e) ? e.join('') : e;
          },
          Nd = function (e, t) {
            'undefined' !== typeof e &&
              document.title !== e &&
              (document.title = Md(e)),
              Rd(Wc.TITLE, t);
          },
          Rd = function (e, t) {
            var n = document.getElementsByTagName(e)[0];
            if (n) {
              for (
                var r = n.getAttribute(fd),
                  i = r ? r.split(',') : [],
                  a = [].concat(i),
                  o = Object.keys(t),
                  s = 0;
                s < o.length;
                s++
              ) {
                var l = o[s],
                  u = t[l] || '';
                n.getAttribute(l) !== u && n.setAttribute(l, u),
                  -1 === i.indexOf(l) && i.push(l);
                var c = a.indexOf(l);
                -1 !== c && a.splice(c, 1);
              }
              for (var d = a.length - 1; d >= 0; d--) n.removeAttribute(a[d]);
              i.length === a.length
                ? n.removeAttribute(fd)
                : n.getAttribute(fd) !== o.join(',') &&
                  n.setAttribute(fd, o.join(','));
            }
          },
          Id = function (e, t) {
            var n = document.head || document.querySelector(Wc.HEAD),
              r = n.querySelectorAll(e + '[' + 'data-react-helmet]'),
              i = Array.prototype.slice.call(r),
              a = [],
              o = void 0;
            return (
              t &&
                t.length &&
                t.forEach(function (t) {
                  var n = document.createElement(e);
                  for (var r in t)
                    if (t.hasOwnProperty(r))
                      if (r === Kc) n.innerHTML = t.innerHTML;
                      else if (r === Yc)
                        n.styleSheet
                          ? (n.styleSheet.cssText = t.cssText)
                          : n.appendChild(document.createTextNode(t.cssText));
                      else {
                        var s = 'undefined' === typeof t[r] ? '' : t[r];
                        n.setAttribute(r, s);
                      }
                  n.setAttribute(fd, 'true'),
                    i.some(function (e, t) {
                      return (o = t), n.isEqualNode(e);
                    })
                      ? i.splice(o, 1)
                      : a.push(n);
                }),
              i.forEach(function (e) {
                return e.parentNode.removeChild(e);
              }),
              a.forEach(function (e) {
                return n.appendChild(e);
              }),
              { oldTags: i, newTags: a }
            );
          },
          Dd = function (e) {
            return Object.keys(e).reduce(function (t, n) {
              var r =
                'undefined' !== typeof e[n] ? n + '="' + e[n] + '"' : '' + n;
              return t ? t + ' ' + r : r;
            }, '');
          },
          zd = function (e) {
            var t =
              arguments.length > 1 && void 0 !== arguments[1]
                ? arguments[1]
                : {};
            return Object.keys(e).reduce(function (t, n) {
              return (t[id[n] || n] = e[n]), t;
            }, t);
          },
          Vd = function (e, t, n) {
            switch (e) {
              case Wc.TITLE:
                return {
                  toComponent: function () {
                    return (function (e, t, n) {
                      var i,
                        a = (((i = { key: t })[fd] = !0), i),
                        o = zd(n, a);
                      return [r.createElement(Wc.TITLE, o, t)];
                    })(0, t.title, t.titleAttributes);
                  },
                  toString: function () {
                    return (function (e, t, n, r) {
                      var i = Dd(n),
                        a = Md(t);
                      return i
                        ? '<' +
                            e +
                            ' data-react-helmet="true" ' +
                            i +
                            '>' +
                            bd(a, r) +
                            '</' +
                            e +
                            '>'
                        : '<' +
                            e +
                            ' data-react-helmet="true">' +
                            bd(a, r) +
                            '</' +
                            e +
                            '>';
                    })(e, t.title, t.titleAttributes, n);
                  },
                };
              case $c:
              case qc:
                return {
                  toComponent: function () {
                    return zd(t);
                  },
                  toString: function () {
                    return Dd(t);
                  },
                };
              default:
                return {
                  toComponent: function () {
                    return (function (e, t) {
                      return t.map(function (t, n) {
                        var i,
                          a = (((i = { key: n })[fd] = !0), i);
                        return (
                          Object.keys(t).forEach(function (e) {
                            var n = id[e] || e;
                            if (n === Kc || n === Yc) {
                              var r = t.innerHTML || t.cssText;
                              a.dangerouslySetInnerHTML = { __html: r };
                            } else a[n] = t[e];
                          }),
                          r.createElement(e, a)
                        );
                      });
                    })(e, t);
                  },
                  toString: function () {
                    return (function (e, t, n) {
                      return t.reduce(function (t, r) {
                        var i = Object.keys(r)
                            .filter(function (e) {
                              return !(e === Kc || e === Yc);
                            })
                            .reduce(function (e, t) {
                              var i =
                                'undefined' === typeof r[t]
                                  ? t
                                  : t + '="' + bd(r[t], n) + '"';
                              return e ? e + ' ' + i : i;
                            }, ''),
                          a = r.innerHTML || r.cssText || '',
                          o = -1 === dd.indexOf(e);
                        return (
                          t +
                          '<' +
                          e +
                          ' data-react-helmet="true" ' +
                          i +
                          (o ? '/>' : '>' + a + '</' + e + '>')
                        );
                      }, '');
                    })(e, t, n);
                  },
                };
            }
          },
          Fd = function (e) {
            var t = e.baseTag,
              n = e.bodyAttributes,
              r = e.encode,
              i = e.htmlAttributes,
              a = e.linkTags,
              o = e.metaTags,
              s = e.noscriptTags,
              l = e.scriptTags,
              u = e.styleTags,
              c = e.title,
              d = void 0 === c ? '' : c,
              f = e.titleAttributes;
            return {
              base: Vd(Wc.BASE, t, r),
              bodyAttributes: Vd($c, n, r),
              htmlAttributes: Vd(qc, i, r),
              link: Vd(Wc.LINK, a, r),
              meta: Vd(Wc.META, o, r),
              noscript: Vd(Wc.NOSCRIPT, s, r),
              script: Vd(Wc.SCRIPT, l, r),
              style: Vd(Wc.STYLE, u, r),
              title: Vd(Wc.TITLE, { title: d, titleAttributes: f }, r),
            };
          },
          Bd = (function (e) {
            var t, n;
            return (
              (n = t =
                (function (t) {
                  function n() {
                    return hd(this, n), yd(this, t.apply(this, arguments));
                  }
                  return (
                    (function (e, t) {
                      if ('function' !== typeof t && null !== t)
                        throw new TypeError(
                          'Super expression must either be null or a function, not ' +
                            typeof t,
                        );
                      (e.prototype = Object.create(t && t.prototype, {
                        constructor: {
                          value: e,
                          enumerable: !1,
                          writable: !0,
                          configurable: !0,
                        },
                      })),
                        t &&
                          (Object.setPrototypeOf
                            ? Object.setPrototypeOf(e, t)
                            : (e.__proto__ = t));
                    })(n, t),
                    (n.prototype.shouldComponentUpdate = function (e) {
                      return !Fc()(this.props, e);
                    }),
                    (n.prototype.mapNestedChildrenToProps = function (e, t) {
                      if (!t) return null;
                      switch (e.type) {
                        case Wc.SCRIPT:
                        case Wc.NOSCRIPT:
                          return { innerHTML: t };
                        case Wc.STYLE:
                          return { cssText: t };
                      }
                      throw new Error(
                        '<' +
                          e.type +
                          ' /> elements are self-closing and can not contain children. Refer to our API for more information.',
                      );
                    }),
                    (n.prototype.flattenArrayTypeChildren = function (e) {
                      var t,
                        n = e.child,
                        r = e.arrayTypeChildren,
                        i = e.newChildProps,
                        a = e.nestedChildren;
                      return md(
                        {},
                        r,
                        (((t = {})[n.type] = [].concat(r[n.type] || [], [
                          md({}, i, this.mapNestedChildrenToProps(n, a)),
                        ])),
                        t),
                      );
                    }),
                    (n.prototype.mapObjectTypeChildren = function (e) {
                      var t,
                        n,
                        r = e.child,
                        i = e.newProps,
                        a = e.newChildProps,
                        o = e.nestedChildren;
                      switch (r.type) {
                        case Wc.TITLE:
                          return md(
                            {},
                            i,
                            (((t = {})[r.type] = o),
                            (t.titleAttributes = md({}, a)),
                            t),
                          );
                        case Wc.BODY:
                          return md({}, i, { bodyAttributes: md({}, a) });
                        case Wc.HTML:
                          return md({}, i, { htmlAttributes: md({}, a) });
                      }
                      return md({}, i, (((n = {})[r.type] = md({}, a)), n));
                    }),
                    (n.prototype.mapArrayTypeChildrenToProps = function (e, t) {
                      var n = md({}, t);
                      return (
                        Object.keys(e).forEach(function (t) {
                          var r;
                          n = md({}, n, (((r = {})[t] = e[t]), r));
                        }),
                        n
                      );
                    }),
                    (n.prototype.warnOnInvalidChildren = function (e, t) {
                      return !0;
                    }),
                    (n.prototype.mapChildrenToProps = function (e, t) {
                      var n = this,
                        i = {};
                      return (
                        r.Children.forEach(e, function (e) {
                          if (e && e.props) {
                            var r = e.props,
                              a = r.children,
                              o = (function (e) {
                                var t =
                                  arguments.length > 1 &&
                                  void 0 !== arguments[1]
                                    ? arguments[1]
                                    : {};
                                return Object.keys(e).reduce(function (t, n) {
                                  return (t[cd[n] || n] = e[n]), t;
                                }, t);
                              })(gd(r, ['children']));
                            switch ((n.warnOnInvalidChildren(e, a), e.type)) {
                              case Wc.LINK:
                              case Wc.META:
                              case Wc.NOSCRIPT:
                              case Wc.SCRIPT:
                              case Wc.STYLE:
                                i = n.flattenArrayTypeChildren({
                                  child: e,
                                  arrayTypeChildren: i,
                                  newChildProps: o,
                                  nestedChildren: a,
                                });
                                break;
                              default:
                                t = n.mapObjectTypeChildren({
                                  child: e,
                                  newProps: t,
                                  newChildProps: o,
                                  nestedChildren: a,
                                });
                            }
                          }
                        }),
                        (t = this.mapArrayTypeChildrenToProps(i, t))
                      );
                    }),
                    (n.prototype.render = function () {
                      var t = this.props,
                        n = t.children,
                        i = gd(t, ['children']),
                        a = md({}, i);
                      return (
                        n && (a = this.mapChildrenToProps(n, a)),
                        r.createElement(e, a)
                      );
                    }),
                    vd(n, null, [
                      {
                        key: 'canUseDOM',
                        set: function (t) {
                          e.canUseDOM = t;
                        },
                      },
                    ]),
                    n
                  );
                })(r.Component)),
              (t.propTypes = {
                base: ic().object,
                bodyAttributes: ic().object,
                children: ic().oneOfType([ic().arrayOf(ic().node), ic().node]),
                defaultTitle: ic().string,
                defer: ic().bool,
                encodeSpecialCharacters: ic().bool,
                htmlAttributes: ic().object,
                link: ic().arrayOf(ic().object),
                meta: ic().arrayOf(ic().object),
                noscript: ic().arrayOf(ic().object),
                onChangeClientState: ic().func,
                script: ic().arrayOf(ic().object),
                style: ic().arrayOf(ic().object),
                title: ic().string,
                titleAttributes: ic().object,
                titleTemplate: ic().string,
              }),
              (t.defaultProps = { defer: !0, encodeSpecialCharacters: !0 }),
              (t.peek = e.peek),
              (t.rewind = function () {
                var t = e.rewind();
                return (
                  t ||
                    (t = Fd({
                      baseTag: [],
                      bodyAttributes: {},
                      encodeSpecialCharacters: !0,
                      htmlAttributes: {},
                      linkTags: [],
                      metaTags: [],
                      noscriptTags: [],
                      scriptTags: [],
                      styleTags: [],
                      title: '',
                      titleAttributes: {},
                    })),
                  t
                );
              }),
              n
            );
          })(
            zc()(
              function (e) {
                return {
                  baseTag: Ed([Xc, rd], e),
                  bodyAttributes: Sd($c, e),
                  defer: Cd(e, od),
                  encode: Cd(e, sd),
                  htmlAttributes: Sd(qc, e),
                  linkTags: kd(Wc.LINK, [td, Xc], e),
                  metaTags: kd(Wc.META, [Zc, Gc, Qc, ed, Jc], e),
                  noscriptTags: kd(Wc.NOSCRIPT, [Kc], e),
                  onChangeClientState: xd(e),
                  scriptTags: kd(Wc.SCRIPT, [nd, Kc], e),
                  styleTags: kd(Wc.STYLE, [Yc], e),
                  title: wd(e),
                  titleAttributes: Sd(Hc, e),
                };
              },
              function (e) {
                _d && jd(_d),
                  e.defer
                    ? (_d = Od(function () {
                        Ad(e, function () {
                          _d = null;
                        });
                      }))
                    : (Ad(e), (_d = null));
              },
              Fd,
            )(function () {
              return null;
            }),
          );
        Bd.renderStatic = Bd.rewind;
        function Ud(e) {
          var t = bs().pathname;
          return Io.map(function (e) {
            if ('/'.concat(e.link) === t)
              return (0, l.jsxs)(Ic, {
                children: [
                  (0, l.jsxs)(Bd, {
                    children: [
                      (0, l.jsx)('title', { children: e.title }),
                      (0, l.jsx)('meta', {
                        name: 'description',
                        content: 'ISR Technology - USA, MIAMI, FL. '.concat(
                          e.paragraph,
                        ),
                      }),
                    ],
                  }),
                  (0, l.jsxs)('div', {
                    className: 'service-image-socket',
                    id: 'service-image-socket',
                    children: [
                      (0, l.jsx)('div', { className: 'overlay' }),
                      (0, l.jsx)('img', {
                        src: e.image,
                        alt: e.title,
                        className: 'portfolio-image',
                      }),
                    ],
                  }),
                  (0, l.jsxs)('div', {
                    className: 'page-content',
                    id: 'page-content',
                    children: [
                      (0, l.jsx)('div', {
                        className: 'icon-set container',
                        children: (0, l.jsx)(Zu, { h2: e.title }),
                      }),
                      (0, l.jsx)('div', {
                        className: 'text-content container',
                        children: (0, l.jsx)(Ho, { paragraph: e.paragraph }),
                      }),
                    ],
                  }),
                ],
              });
          });
        }
        function $d() {
          var e = !1,
            t = [],
            n = new Set(),
            r = {
              subscribe: function (e) {
                return (
                  n.add(e),
                  function () {
                    n.delete(e);
                  }
                );
              },
              start: function (r, i) {
                if (e) {
                  var a = [];
                  return (
                    n.forEach(function (e) {
                      a.push(Sa(e, r, { transitionOverride: i }));
                    }),
                    Promise.all(a)
                  );
                }
                return new Promise(function (e) {
                  t.push({ animation: [r, i], resolve: e });
                });
              },
              set: function (e) {
                return n.forEach(function (t) {
                  !(function (e, t) {
                    Array.isArray(t)
                      ? wa(e, t)
                      : 'string' === typeof t
                      ? wa(e, [t])
                      : ba(e, t);
                  })(t, e);
                });
              },
              stop: function () {
                n.forEach(function (e) {
                  !(function (e) {
                    e.forEachValue(function (e) {
                      return e.stop();
                    });
                  })(e);
                });
              },
              mount: function () {
                return (
                  (e = !0),
                  t.forEach(function (e) {
                    var t = e.animation,
                      n = e.resolve;
                    r.start.apply(r, v([], h(t), !1)).then(n);
                  }),
                  function () {
                    (e = !1), r.stop();
                  }
                );
              },
            };
          return r;
        }
        function qd(e) {
          var t = s((0, r.useContext)(Vo).themeColorObj, 2),
            n = t[0],
            i = (t[1], s((0, r.useContext)(Vo).toggleSwitcherObj, 2)),
            a = i[0],
            o = i[1],
            u = s((0, r.useContext)(Vo).mobileMenuOpenObj, 2),
            c = (u[0], u[1]),
            d = (0, r.useContext)(Vo).isLG;
          return (0, l.jsxs)('div', {
            className: 'switcher',
            children: [
              (0, l.jsx)('div', {
                className: 'theme-mode',
                children:
                  'light' === n
                    ? (0, l.jsx)('p', {
                        className: 'navlinks',
                        children: 'Go Dark',
                      })
                    : (0, l.jsx)('p', {
                        className: 'navlinks',
                        children: 'Go Light',
                      }),
              }),
              (0, l.jsxs)('label', {
                className: 'toggle-switch',
                children: [
                  (0, l.jsx)('input', {
                    type: 'checkbox',
                    checked: a,
                    onChange: function () {
                      o(!a), !d && e.closeMenu(), c(!1);
                    },
                  }),
                  (0, l.jsx)('span', { className: 'switch' }),
                ],
              }),
            ],
          });
        }
        function Hd(e) {
          var t = s((0, r.useContext)(Vo).themeColorObj, 2),
            n = t[0],
            i = (t[1], s((0, r.useContext)(Vo).isMenuOpenObj, 2)),
            a = i[0],
            o = (i[1], s((0, r.useContext)(Vo).mobileMenuOpenObj, 2)),
            u = (o[0], o[1]),
            c = (0, r.useContext)(Vo).isLG,
            d = ws('/'),
            f = (function () {
              var e = I($d);
              return (0, r.useEffect)(e.mount, []), e;
            })(),
            p = function (e) {
              setTimeout(function () {
                document
                  .getElementById(e)
                  .scrollIntoView({ behavior: 'smooth', block: 'start' });
              }, 300);
            },
            h = function () {
              e.handleOpen(!a);
            };
          return (
            (0, r.useEffect)(
              function () {
                c || (f.set({ x: '100vw' }), f.start({ x: 0 }));
              },
              [c, f],
            ),
            (0, l.jsx)(Mo.div, {
              className: 'menu',
              style:
                'light' === n && c && d
                  ? { color: '#130f33' }
                  : { color: '#1dcad3' },
              animate: f,
              children: (0, l.jsxs)('ul', {
                children: [
                  (0, l.jsx)(qd, { closeMenu: h }),
                  (0, l.jsx)('li', {
                    children: (0, l.jsx)(Us, {
                      to: '/',
                      onClick: function () {
                        p('values'), !c && h(), u(!1);
                      },
                      animate: { y: 0 },
                      children: (0, l.jsx)('p', {
                        className: 'navlinks',
                        children: 'home',
                      }),
                    }),
                  }),
                  (0, l.jsx)('li', {
                    children: (0, l.jsx)(Us, {
                      to: '/',
                      onClick: function () {
                        p('services'), !c && h(), u(!1);
                      },
                      children: (0, l.jsx)('p', {
                        className: 'navlinks',
                        children: 'services',
                      }),
                    }),
                  }),
                  (0, l.jsx)('li', {
                    children: (0, l.jsx)(Us, {
                      to: '/',
                      onClick: function () {
                        p('partners'), !c && h(), u(!1);
                      },
                      children: (0, l.jsx)('p', {
                        className: 'navlinks',
                        children: 'about',
                      }),
                    }),
                  }),
                  (0, l.jsx)('li', {
                    children: (0, l.jsx)(Us, {
                      to: '/',
                      onClick: function () {
                        p('contact'), !c && h(), u(!1);
                      },
                      children: (0, l.jsx)('p', {
                        className: 'navlinks',
                        children: 'contact',
                      }),
                    }),
                  }),
                ],
              }),
            })
          );
        }
        var Wd =
          n.p +
          'static/media/logoSecondaryColorSimple.92ad91c8147372e88d628bf10126ab9e.svg';
        var Gd =
          n.p +
          'static/media/logoPrimaryColorSimple.0c65982f0cbacfd9a101adf04020406f.svg';
        var Yd =
          n.p +
          'static/media/menuIconPrimaryColor.f3c7fa5509b2df0a079bd35641dd5666.svg';
        var Xd =
          n.p +
          'static/media/menuIconSecondaryColor.ca9f994a76224aaa625eb8ceec380c51.svg';
        function Qd() {
          var e = s((0, r.useContext)(Vo).themeColorObj, 2),
            t = e[0],
            n = (e[1], (0, r.useContext)(Vo).isLG),
            i = s((0, r.useContext)(Vo).isMenuOpenObj, 2),
            a = i[0],
            o = i[1],
            u =
              ((0, r.useContext)(Vo).portfolioPageTitleObj,
              s((0, r.useContext)(Vo).mobileMenuOpenObj, 2)),
            c = u[0],
            d = u[1],
            f = ws('/');
          (0, r.useEffect)(
            function () {
              o(!!n);
            },
            [n, o],
          );
          var p;
          return (
            a &&
              (p = (0, l.jsx)(Hd, {
                handleOpen: function () {
                  o();
                },
              })),
            (0, r.useEffect)(function () {
              var e = document.getElementById('navbar'),
                r = document.getElementById('app'),
                i = 0;
              r.addEventListener(
                'scroll',
                function () {
                  var a = window.pageYOffset || r.scrollTop;
                  a > i
                    ? (e.classList.remove('scrolled-up'),
                      e.classList.add('scrolled-down'))
                    : a < i &&
                      (e.classList.remove('scrolled-down'),
                      e.classList.add('scrolled-up')),
                    (i = a <= 0 ? 0 : a),
                    a > 200 && 'light' === t
                      ? ((e.style.backgroundColor = '#fbfbfb'),
                        n && (e.style.padding = '16px'))
                      : a > 200 && 'dark' === t
                      ? ((e.style.backgroundColor = '#130f33'),
                        n && (e.style.padding = '16px'))
                      : a < 200 &&
                        (e.classList.remove('scrolled-down'),
                        e.classList.add('scrolled-up'),
                        (e.style.backgroundColor = 'rgba(0,0,0,0)'),
                        n && (e.style.padding = '32px'));
                },
                { passive: !0 },
              );
            }),
            (0, l.jsx)('nav', {
              className: 'navbar',
              id: 'navbar',
              children: (0, l.jsxs)('div', {
                className: 'navbar-content',
                children: [
                  (0, l.jsx)(Us, {
                    to: '/',
                    children: (0, l.jsx)(Ro, {
                      logo: !c && 'light' === t && f ? Gd : Wd,
                      width: 'auto',
                      height: n ? '40px' : '32px',
                      class: 'logo-isr',
                    }),
                  }),
                  (0, l.jsx)('button', {
                    onClick: function () {
                      o(!a), d(!c);
                    },
                    className: 'toggle-menu-icon',
                    style: n ? { display: 'none' } : { display: 'flex' },
                    children: (0, l.jsx)('img', {
                      src: !c && 'light' === t && f ? Yd : Xd,
                      alt: 'toggle menu icon',
                    }),
                  }),
                  p,
                ],
              }),
            })
          );
        }
        var Kd = function () {
            var e = s((0, r.useContext)(Vo).themeColorObj, 2),
              t = e[0],
              n = e[1],
              i = s((0, r.useContext)(Vo).toggleSwitcherObj, 2),
              a = i[0],
              o = i[1],
              u = s((0, r.useContext)(Vo).portofolioPageIdObj, 2);
            return (
              u[0],
              u[1],
              (0, r.useEffect)(
                function () {
                  window
                    .matchMedia('(prefers-color-scheme: dark)')
                    .addEventListener('change', function (e) {
                      e.matches ? o(!0) : o(!1);
                    }),
                    localStorage.getItem('theme')
                      ? 'dark' === localStorage.getItem('theme') && o(!0)
                      : window.matchMedia &&
                        window.matchMedia('(prefers-color-scheme: dark)')
                          .matches
                      ? o(!0)
                      : o(!1);
                },
                [o, t],
              ),
              (0, r.useEffect)(
                function () {
                  a
                    ? (n('dark'),
                      localStorage.setItem('theme', 'dark'),
                      document.documentElement.setAttribute(
                        'data-theme',
                        'dark',
                      ))
                    : (n('light'),
                      localStorage.setItem('theme', 'light'),
                      document.documentElement.setAttribute(
                        'data-theme',
                        'light',
                      ));
                },
                [a, n],
              ),
              (0, l.jsxs)('div', {
                className: 'App',
                'data-theme': t,
                id: 'app',
                children: [
                  (0, l.jsxs)(Bd, {
                    children: [
                      (0, l.jsx)('title', { children: 'ISR Technology' }),
                      (0, l.jsx)('meta', {
                        name: 'description',
                        content:
                          'ISR Technology - USA, MIAMI, FL. Our services: managed IT, wireless systems, networking, audio/visual, cybersecurity, VOIP, cloud services, security.',
                      }),
                    ],
                  }),
                  (0, l.jsx)(Qd, {}),
                  (0, l.jsxs)(ms, {
                    children: [
                      (0, l.jsx)(hs, {
                        path: '/',
                        element: (0, l.jsx)(Rc, {}),
                      }),
                      (0, l.jsx)(hs, {
                        path: '/services/managed-it',
                        element: (0, l.jsx)(Ud, {}),
                      }),
                      (0, l.jsx)(hs, {
                        path: '/services/surveillance-systems',
                        element: (0, l.jsx)(Ud, {}),
                      }),
                      (0, l.jsx)(hs, {
                        path: '/services/audio-visual',
                        element: (0, l.jsx)(Ud, {}),
                      }),
                      (0, l.jsx)(hs, {
                        path: '/services/wireless-systems',
                        element: (0, l.jsx)(Ud, {}),
                      }),
                      (0, l.jsx)(hs, {
                        path: '/services/cloud-services',
                        element: (0, l.jsx)(Ud, {}),
                      }),
                      (0, l.jsx)(hs, {
                        path: '/services/cybersecurity',
                        element: (0, l.jsx)(Ud, {}),
                      }),
                      (0, l.jsx)(hs, {
                        path: '/services/voip',
                        element: (0, l.jsx)(Ud, {}),
                      }),
                      (0, l.jsx)(hs, {
                        path: '/services/networking',
                        element: (0, l.jsx)(Ud, {}),
                      }),
                      (0, l.jsx)(hs, {
                        path: '/services/smarthome-automation',
                        element: (0, l.jsx)(Ud, {}),
                      }),
                    ],
                  }),
                ],
              })
            );
          },
          Jd = function (e) {
            e &&
              e instanceof Function &&
              n
                .e(787)
                .then(n.bind(n, 787))
                .then(function (t) {
                  var n = t.getCLS,
                    r = t.getFID,
                    i = t.getFCP,
                    a = t.getLCP,
                    o = t.getTTFB;
                  n(e), r(e), i(e), a(e), o(e);
                });
          };
        function Zd() {
          var e = bs().pathname;
          return (
            (0, r.useEffect)(
              function () {
                document
                  .getElementById('app')
                  .scrollTo({ top: 0, left: 0, behavior: 'smooth' });
              },
              [e],
            ),
            null
          );
        }
        function ef() {
          var e = bs().pathname,
            t = s((0, r.useContext)(Vo).browserHistoryObj, 2),
            n = t[0],
            i = t[1];
          return (
            (0, r.useEffect)(
              function () {
                var t = [].concat(Xe(n), [e]);
                i(t);
              },
              [e],
            ),
            null
          );
        }
        i.render(
          (0, l.jsx)(r.StrictMode, {
            children: (0, l.jsx)(Bs, {
              children: (0, l.jsxs)(Fo, {
                children: [
                  (0, l.jsx)(Zd, {}),
                  (0, l.jsx)(ef, {}),
                  (0, l.jsx)(Kd, {}),
                ],
              }),
            }),
          }),
          document.getElementById('root'),
        ),
          Jd();
      },
      4569: function (e, t, n) {
        e.exports = n(8036);
      },
      3381: function (e, t, n) {
        'use strict';
        var r = n(3589),
          i = n(7297),
          a = n(9301),
          o = n(9774),
          s = n(1804),
          l = n(9145),
          u = n(5411),
          c = n(6467),
          d = n(221),
          f = n(9346);
        e.exports = function (e) {
          return new Promise(function (t, n) {
            var p,
              h = e.data,
              v = e.headers,
              m = e.responseType;
            function g() {
              e.cancelToken && e.cancelToken.unsubscribe(p),
                e.signal && e.signal.removeEventListener('abort', p);
            }
            r.isFormData(h) && delete v['Content-Type'];
            var y = new XMLHttpRequest();
            if (e.auth) {
              var b = e.auth.username || '',
                w = e.auth.password
                  ? unescape(encodeURIComponent(e.auth.password))
                  : '';
              v.Authorization = 'Basic ' + btoa(b + ':' + w);
            }
            var x = s(e.baseURL, e.url);
            function S() {
              if (y) {
                var r =
                    'getAllResponseHeaders' in y
                      ? l(y.getAllResponseHeaders())
                      : null,
                  a = {
                    data:
                      m && 'text' !== m && 'json' !== m
                        ? y.response
                        : y.responseText,
                    status: y.status,
                    statusText: y.statusText,
                    headers: r,
                    config: e,
                    request: y,
                  };
                i(
                  function (e) {
                    t(e), g();
                  },
                  function (e) {
                    n(e), g();
                  },
                  a,
                ),
                  (y = null);
              }
            }
            if (
              (y.open(
                e.method.toUpperCase(),
                o(x, e.params, e.paramsSerializer),
                !0,
              ),
              (y.timeout = e.timeout),
              'onloadend' in y
                ? (y.onloadend = S)
                : (y.onreadystatechange = function () {
                    y &&
                      4 === y.readyState &&
                      (0 !== y.status ||
                        (y.responseURL &&
                          0 === y.responseURL.indexOf('file:'))) &&
                      setTimeout(S);
                  }),
              (y.onabort = function () {
                y &&
                  (n(c('Request aborted', e, 'ECONNABORTED', y)), (y = null));
              }),
              (y.onerror = function () {
                n(c('Network Error', e, null, y)), (y = null);
              }),
              (y.ontimeout = function () {
                var t = e.timeout
                    ? 'timeout of ' + e.timeout + 'ms exceeded'
                    : 'timeout exceeded',
                  r = e.transitional || d.transitional;
                e.timeoutErrorMessage && (t = e.timeoutErrorMessage),
                  n(
                    c(
                      t,
                      e,
                      r.clarifyTimeoutError ? 'ETIMEDOUT' : 'ECONNABORTED',
                      y,
                    ),
                  ),
                  (y = null);
              }),
              r.isStandardBrowserEnv())
            ) {
              var E =
                (e.withCredentials || u(x)) && e.xsrfCookieName
                  ? a.read(e.xsrfCookieName)
                  : void 0;
              E && (v[e.xsrfHeaderName] = E);
            }
            'setRequestHeader' in y &&
              r.forEach(v, function (e, t) {
                'undefined' === typeof h && 'content-type' === t.toLowerCase()
                  ? delete v[t]
                  : y.setRequestHeader(t, e);
              }),
              r.isUndefined(e.withCredentials) ||
                (y.withCredentials = !!e.withCredentials),
              m && 'json' !== m && (y.responseType = e.responseType),
              'function' === typeof e.onDownloadProgress &&
                y.addEventListener('progress', e.onDownloadProgress),
              'function' === typeof e.onUploadProgress &&
                y.upload &&
                y.upload.addEventListener('progress', e.onUploadProgress),
              (e.cancelToken || e.signal) &&
                ((p = function (e) {
                  y &&
                    (n(!e || (e && e.type) ? new f('canceled') : e),
                    y.abort(),
                    (y = null));
                }),
                e.cancelToken && e.cancelToken.subscribe(p),
                e.signal &&
                  (e.signal.aborted
                    ? p()
                    : e.signal.addEventListener('abort', p))),
              h || (h = null),
              y.send(h);
          });
        };
      },
      8036: function (e, t, n) {
        'use strict';
        var r = n(3589),
          i = n(4049),
          a = n(3773),
          o = n(777);
        var s = (function e(t) {
          var n = new a(t),
            s = i(a.prototype.request, n);
          return (
            r.extend(s, a.prototype, n),
            r.extend(s, n),
            (s.create = function (n) {
              return e(o(t, n));
            }),
            s
          );
        })(n(221));
        (s.Axios = a),
          (s.Cancel = n(9346)),
          (s.CancelToken = n(6857)),
          (s.isCancel = n(5517)),
          (s.VERSION = n(7600).version),
          (s.all = function (e) {
            return Promise.all(e);
          }),
          (s.spread = n(8089)),
          (s.isAxiosError = n(9580)),
          (e.exports = s),
          (e.exports.default = s);
      },
      9346: function (e) {
        'use strict';
        function t(e) {
          this.message = e;
        }
        (t.prototype.toString = function () {
          return 'Cancel' + (this.message ? ': ' + this.message : '');
        }),
          (t.prototype.__CANCEL__ = !0),
          (e.exports = t);
      },
      6857: function (e, t, n) {
        'use strict';
        var r = n(9346);
        function i(e) {
          if ('function' !== typeof e)
            throw new TypeError('executor must be a function.');
          var t;
          this.promise = new Promise(function (e) {
            t = e;
          });
          var n = this;
          this.promise.then(function (e) {
            if (n._listeners) {
              var t,
                r = n._listeners.length;
              for (t = 0; t < r; t++) n._listeners[t](e);
              n._listeners = null;
            }
          }),
            (this.promise.then = function (e) {
              var t,
                r = new Promise(function (e) {
                  n.subscribe(e), (t = e);
                }).then(e);
              return (
                (r.cancel = function () {
                  n.unsubscribe(t);
                }),
                r
              );
            }),
            e(function (e) {
              n.reason || ((n.reason = new r(e)), t(n.reason));
            });
        }
        (i.prototype.throwIfRequested = function () {
          if (this.reason) throw this.reason;
        }),
          (i.prototype.subscribe = function (e) {
            this.reason
              ? e(this.reason)
              : this._listeners
              ? this._listeners.push(e)
              : (this._listeners = [e]);
          }),
          (i.prototype.unsubscribe = function (e) {
            if (this._listeners) {
              var t = this._listeners.indexOf(e);
              -1 !== t && this._listeners.splice(t, 1);
            }
          }),
          (i.source = function () {
            var e;
            return {
              token: new i(function (t) {
                e = t;
              }),
              cancel: e,
            };
          }),
          (e.exports = i);
      },
      5517: function (e) {
        'use strict';
        e.exports = function (e) {
          return !(!e || !e.__CANCEL__);
        };
      },
      3773: function (e, t, n) {
        'use strict';
        var r = n(3589),
          i = n(9774),
          a = n(7470),
          o = n(2733),
          s = n(777),
          l = n(7835),
          u = l.validators;
        function c(e) {
          (this.defaults = e),
            (this.interceptors = { request: new a(), response: new a() });
        }
        (c.prototype.request = function (e) {
          'string' === typeof e
            ? ((e = arguments[1] || {}).url = arguments[0])
            : (e = e || {}),
            (e = s(this.defaults, e)).method
              ? (e.method = e.method.toLowerCase())
              : this.defaults.method
              ? (e.method = this.defaults.method.toLowerCase())
              : (e.method = 'get');
          var t = e.transitional;
          void 0 !== t &&
            l.assertOptions(
              t,
              {
                silentJSONParsing: u.transitional(u.boolean),
                forcedJSONParsing: u.transitional(u.boolean),
                clarifyTimeoutError: u.transitional(u.boolean),
              },
              !1,
            );
          var n = [],
            r = !0;
          this.interceptors.request.forEach(function (t) {
            ('function' === typeof t.runWhen && !1 === t.runWhen(e)) ||
              ((r = r && t.synchronous), n.unshift(t.fulfilled, t.rejected));
          });
          var i,
            a = [];
          if (
            (this.interceptors.response.forEach(function (e) {
              a.push(e.fulfilled, e.rejected);
            }),
            !r)
          ) {
            var c = [o, void 0];
            for (
              Array.prototype.unshift.apply(c, n),
                c = c.concat(a),
                i = Promise.resolve(e);
              c.length;

            )
              i = i.then(c.shift(), c.shift());
            return i;
          }
          for (var d = e; n.length; ) {
            var f = n.shift(),
              p = n.shift();
            try {
              d = f(d);
            } catch (h) {
              p(h);
              break;
            }
          }
          try {
            i = o(d);
          } catch (h) {
            return Promise.reject(h);
          }
          for (; a.length; ) i = i.then(a.shift(), a.shift());
          return i;
        }),
          (c.prototype.getUri = function (e) {
            return (
              (e = s(this.defaults, e)),
              i(e.url, e.params, e.paramsSerializer).replace(/^\?/, '')
            );
          }),
          r.forEach(['delete', 'get', 'head', 'options'], function (e) {
            c.prototype[e] = function (t, n) {
              return this.request(
                s(n || {}, { method: e, url: t, data: (n || {}).data }),
              );
            };
          }),
          r.forEach(['post', 'put', 'patch'], function (e) {
            c.prototype[e] = function (t, n, r) {
              return this.request(s(r || {}, { method: e, url: t, data: n }));
            };
          }),
          (e.exports = c);
      },
      7470: function (e, t, n) {
        'use strict';
        var r = n(3589);
        function i() {
          this.handlers = [];
        }
        (i.prototype.use = function (e, t, n) {
          return (
            this.handlers.push({
              fulfilled: e,
              rejected: t,
              synchronous: !!n && n.synchronous,
              runWhen: n ? n.runWhen : null,
            }),
            this.handlers.length - 1
          );
        }),
          (i.prototype.eject = function (e) {
            this.handlers[e] && (this.handlers[e] = null);
          }),
          (i.prototype.forEach = function (e) {
            r.forEach(this.handlers, function (t) {
              null !== t && e(t);
            });
          }),
          (e.exports = i);
      },
      1804: function (e, t, n) {
        'use strict';
        var r = n(4044),
          i = n(9549);
        e.exports = function (e, t) {
          return e && !r(t) ? i(e, t) : t;
        };
      },
      6467: function (e, t, n) {
        'use strict';
        var r = n(6460);
        e.exports = function (e, t, n, i, a) {
          var o = new Error(e);
          return r(o, t, n, i, a);
        };
      },
      2733: function (e, t, n) {
        'use strict';
        var r = n(3589),
          i = n(2693),
          a = n(5517),
          o = n(221),
          s = n(9346);
        function l(e) {
          if (
            (e.cancelToken && e.cancelToken.throwIfRequested(),
            e.signal && e.signal.aborted)
          )
            throw new s('canceled');
        }
        e.exports = function (e) {
          return (
            l(e),
            (e.headers = e.headers || {}),
            (e.data = i.call(e, e.data, e.headers, e.transformRequest)),
            (e.headers = r.merge(
              e.headers.common || {},
              e.headers[e.method] || {},
              e.headers,
            )),
            r.forEach(
              ['delete', 'get', 'head', 'post', 'put', 'patch', 'common'],
              function (t) {
                delete e.headers[t];
              },
            ),
            (e.adapter || o.adapter)(e).then(
              function (t) {
                return (
                  l(e),
                  (t.data = i.call(e, t.data, t.headers, e.transformResponse)),
                  t
                );
              },
              function (t) {
                return (
                  a(t) ||
                    (l(e),
                    t &&
                      t.response &&
                      (t.response.data = i.call(
                        e,
                        t.response.data,
                        t.response.headers,
                        e.transformResponse,
                      ))),
                  Promise.reject(t)
                );
              },
            )
          );
        };
      },
      6460: function (e) {
        'use strict';
        e.exports = function (e, t, n, r, i) {
          return (
            (e.config = t),
            n && (e.code = n),
            (e.request = r),
            (e.response = i),
            (e.isAxiosError = !0),
            (e.toJSON = function () {
              return {
                message: this.message,
                name: this.name,
                description: this.description,
                number: this.number,
                fileName: this.fileName,
                lineNumber: this.lineNumber,
                columnNumber: this.columnNumber,
                stack: this.stack,
                config: this.config,
                code: this.code,
                status:
                  this.response && this.response.status
                    ? this.response.status
                    : null,
              };
            }),
            e
          );
        };
      },
      777: function (e, t, n) {
        'use strict';
        var r = n(3589);
        e.exports = function (e, t) {
          t = t || {};
          var n = {};
          function i(e, t) {
            return r.isPlainObject(e) && r.isPlainObject(t)
              ? r.merge(e, t)
              : r.isPlainObject(t)
              ? r.merge({}, t)
              : r.isArray(t)
              ? t.slice()
              : t;
          }
          function a(n) {
            return r.isUndefined(t[n])
              ? r.isUndefined(e[n])
                ? void 0
                : i(void 0, e[n])
              : i(e[n], t[n]);
          }
          function o(e) {
            if (!r.isUndefined(t[e])) return i(void 0, t[e]);
          }
          function s(n) {
            return r.isUndefined(t[n])
              ? r.isUndefined(e[n])
                ? void 0
                : i(void 0, e[n])
              : i(void 0, t[n]);
          }
          function l(n) {
            return n in t ? i(e[n], t[n]) : n in e ? i(void 0, e[n]) : void 0;
          }
          var u = {
            url: o,
            method: o,
            data: o,
            baseURL: s,
            transformRequest: s,
            transformResponse: s,
            paramsSerializer: s,
            timeout: s,
            timeoutMessage: s,
            withCredentials: s,
            adapter: s,
            responseType: s,
            xsrfCookieName: s,
            xsrfHeaderName: s,
            onUploadProgress: s,
            onDownloadProgress: s,
            decompress: s,
            maxContentLength: s,
            maxBodyLength: s,
            transport: s,
            httpAgent: s,
            httpsAgent: s,
            cancelToken: s,
            socketPath: s,
            responseEncoding: s,
            validateStatus: l,
          };
          return (
            r.forEach(Object.keys(e).concat(Object.keys(t)), function (e) {
              var t = u[e] || a,
                i = t(e);
              (r.isUndefined(i) && t !== l) || (n[e] = i);
            }),
            n
          );
        };
      },
      7297: function (e, t, n) {
        'use strict';
        var r = n(6467);
        e.exports = function (e, t, n) {
          var i = n.config.validateStatus;
          n.status && i && !i(n.status)
            ? t(
                r(
                  'Request failed with status code ' + n.status,
                  n.config,
                  null,
                  n.request,
                  n,
                ),
              )
            : e(n);
        };
      },
      2693: function (e, t, n) {
        'use strict';
        var r = n(3589),
          i = n(221);
        e.exports = function (e, t, n) {
          var a = this || i;
          return (
            r.forEach(n, function (n) {
              e = n.call(a, e, t);
            }),
            e
          );
        };
      },
      221: function (e, t, n) {
        'use strict';
        var r = n(3589),
          i = n(4341),
          a = n(6460),
          o = { 'Content-Type': 'application/x-www-form-urlencoded' };
        function s(e, t) {
          !r.isUndefined(e) &&
            r.isUndefined(e['Content-Type']) &&
            (e['Content-Type'] = t);
        }
        var l = {
          transitional: {
            silentJSONParsing: !0,
            forcedJSONParsing: !0,
            clarifyTimeoutError: !1,
          },
          adapter: (function () {
            var e;
            return (
              ('undefined' !== typeof XMLHttpRequest ||
                ('undefined' !== typeof process &&
                  '[object process]' ===
                    Object.prototype.toString.call(process))) &&
                (e = n(3381)),
              e
            );
          })(),
          transformRequest: [
            function (e, t) {
              return (
                i(t, 'Accept'),
                i(t, 'Content-Type'),
                r.isFormData(e) ||
                r.isArrayBuffer(e) ||
                r.isBuffer(e) ||
                r.isStream(e) ||
                r.isFile(e) ||
                r.isBlob(e)
                  ? e
                  : r.isArrayBufferView(e)
                  ? e.buffer
                  : r.isURLSearchParams(e)
                  ? (s(t, 'application/x-www-form-urlencoded;charset=utf-8'),
                    e.toString())
                  : r.isObject(e) ||
                    (t && 'application/json' === t['Content-Type'])
                  ? (s(t, 'application/json'),
                    (function (e, t, n) {
                      if (r.isString(e))
                        try {
                          return (t || JSON.parse)(e), r.trim(e);
                        } catch (i) {
                          if ('SyntaxError' !== i.name) throw i;
                        }
                      return (n || JSON.stringify)(e);
                    })(e))
                  : e
              );
            },
          ],
          transformResponse: [
            function (e) {
              var t = this.transitional || l.transitional,
                n = t && t.silentJSONParsing,
                i = t && t.forcedJSONParsing,
                o = !n && 'json' === this.responseType;
              if (o || (i && r.isString(e) && e.length))
                try {
                  return JSON.parse(e);
                } catch (s) {
                  if (o) {
                    if ('SyntaxError' === s.name)
                      throw a(s, this, 'E_JSON_PARSE');
                    throw s;
                  }
                }
              return e;
            },
          ],
          timeout: 0,
          xsrfCookieName: 'XSRF-TOKEN',
          xsrfHeaderName: 'X-XSRF-TOKEN',
          maxContentLength: -1,
          maxBodyLength: -1,
          validateStatus: function (e) {
            return e >= 200 && e < 300;
          },
          headers: { common: { Accept: 'application/json, text/plain, */*' } },
        };
        r.forEach(['delete', 'get', 'head'], function (e) {
          l.headers[e] = {};
        }),
          r.forEach(['post', 'put', 'patch'], function (e) {
            l.headers[e] = r.merge(o);
          }),
          (e.exports = l);
      },
      7600: function (e) {
        e.exports = { version: '0.24.0' };
      },
      4049: function (e) {
        'use strict';
        e.exports = function (e, t) {
          return function () {
            for (var n = new Array(arguments.length), r = 0; r < n.length; r++)
              n[r] = arguments[r];
            return e.apply(t, n);
          };
        };
      },
      9774: function (e, t, n) {
        'use strict';
        var r = n(3589);
        function i(e) {
          return encodeURIComponent(e)
            .replace(/%3A/gi, ':')
            .replace(/%24/g, '$')
            .replace(/%2C/gi, ',')
            .replace(/%20/g, '+')
            .replace(/%5B/gi, '[')
            .replace(/%5D/gi, ']');
        }
        e.exports = function (e, t, n) {
          if (!t) return e;
          var a;
          if (n) a = n(t);
          else if (r.isURLSearchParams(t)) a = t.toString();
          else {
            var o = [];
            r.forEach(t, function (e, t) {
              null !== e &&
                'undefined' !== typeof e &&
                (r.isArray(e) ? (t += '[]') : (e = [e]),
                r.forEach(e, function (e) {
                  r.isDate(e)
                    ? (e = e.toISOString())
                    : r.isObject(e) && (e = JSON.stringify(e)),
                    o.push(i(t) + '=' + i(e));
                }));
            }),
              (a = o.join('&'));
          }
          if (a) {
            var s = e.indexOf('#');
            -1 !== s && (e = e.slice(0, s)),
              (e += (-1 === e.indexOf('?') ? '?' : '&') + a);
          }
          return e;
        };
      },
      9549: function (e) {
        'use strict';
        e.exports = function (e, t) {
          return t ? e.replace(/\/+$/, '') + '/' + t.replace(/^\/+/, '') : e;
        };
      },
      9301: function (e, t, n) {
        'use strict';
        var r = n(3589);
        e.exports = r.isStandardBrowserEnv()
          ? {
              write: function (e, t, n, i, a, o) {
                var s = [];
                s.push(e + '=' + encodeURIComponent(t)),
                  r.isNumber(n) &&
                    s.push('expires=' + new Date(n).toGMTString()),
                  r.isString(i) && s.push('path=' + i),
                  r.isString(a) && s.push('domain=' + a),
                  !0 === o && s.push('secure'),
                  (document.cookie = s.join('; '));
              },
              read: function (e) {
                var t = document.cookie.match(
                  new RegExp('(^|;\\s*)(' + e + ')=([^;]*)'),
                );
                return t ? decodeURIComponent(t[3]) : null;
              },
              remove: function (e) {
                this.write(e, '', Date.now() - 864e5);
              },
            }
          : {
              write: function () {},
              read: function () {
                return null;
              },
              remove: function () {},
            };
      },
      4044: function (e) {
        'use strict';
        e.exports = function (e) {
          return /^([a-z][a-z\d\+\-\.]*:)?\/\//i.test(e);
        };
      },
      9580: function (e) {
        'use strict';
        e.exports = function (e) {
          return 'object' === typeof e && !0 === e.isAxiosError;
        };
      },
      5411: function (e, t, n) {
        'use strict';
        var r = n(3589);
        e.exports = r.isStandardBrowserEnv()
          ? (function () {
              var e,
                t = /(msie|trident)/i.test(navigator.userAgent),
                n = document.createElement('a');
              function i(e) {
                var r = e;
                return (
                  t && (n.setAttribute('href', r), (r = n.href)),
                  n.setAttribute('href', r),
                  {
                    href: n.href,
                    protocol: n.protocol ? n.protocol.replace(/:$/, '') : '',
                    host: n.host,
                    search: n.search ? n.search.replace(/^\?/, '') : '',
                    hash: n.hash ? n.hash.replace(/^#/, '') : '',
                    hostname: n.hostname,
                    port: n.port,
                    pathname:
                      '/' === n.pathname.charAt(0)
                        ? n.pathname
                        : '/' + n.pathname,
                  }
                );
              }
              return (
                (e = i(window.location.href)),
                function (t) {
                  var n = r.isString(t) ? i(t) : t;
                  return n.protocol === e.protocol && n.host === e.host;
                }
              );
            })()
          : function () {
              return !0;
            };
      },
      4341: function (e, t, n) {
        'use strict';
        var r = n(3589);
        e.exports = function (e, t) {
          r.forEach(e, function (n, r) {
            r !== t &&
              r.toUpperCase() === t.toUpperCase() &&
              ((e[t] = n), delete e[r]);
          });
        };
      },
      9145: function (e, t, n) {
        'use strict';
        var r = n(3589),
          i = [
            'age',
            'authorization',
            'content-length',
            'content-type',
            'etag',
            'expires',
            'from',
            'host',
            'if-modified-since',
            'if-unmodified-since',
            'last-modified',
            'location',
            'max-forwards',
            'proxy-authorization',
            'referer',
            'retry-after',
            'user-agent',
          ];
        e.exports = function (e) {
          var t,
            n,
            a,
            o = {};
          return e
            ? (r.forEach(e.split('\n'), function (e) {
                if (
                  ((a = e.indexOf(':')),
                  (t = r.trim(e.substr(0, a)).toLowerCase()),
                  (n = r.trim(e.substr(a + 1))),
                  t)
                ) {
                  if (o[t] && i.indexOf(t) >= 0) return;
                  o[t] =
                    'set-cookie' === t
                      ? (o[t] ? o[t] : []).concat([n])
                      : o[t]
                      ? o[t] + ', ' + n
                      : n;
                }
              }),
              o)
            : o;
        };
      },
      8089: function (e) {
        'use strict';
        e.exports = function (e) {
          return function (t) {
            return e.apply(null, t);
          };
        };
      },
      7835: function (e, t, n) {
        'use strict';
        var r = n(7600).version,
          i = {};
        ['object', 'boolean', 'number', 'function', 'string', 'symbol'].forEach(
          function (e, t) {
            i[e] = function (n) {
              return typeof n === e || 'a' + (t < 1 ? 'n ' : ' ') + e;
            };
          },
        );
        var a = {};
        (i.transitional = function (e, t, n) {
          function i(e, t) {
            return (
              '[Axios v' +
              r +
              "] Transitional option '" +
              e +
              "'" +
              t +
              (n ? '. ' + n : '')
            );
          }
          return function (n, r, o) {
            if (!1 === e)
              throw new Error(
                i(r, ' has been removed' + (t ? ' in ' + t : '')),
              );
            return (
              t &&
                !a[r] &&
                ((a[r] = !0),
                console.warn(
                  i(
                    r,
                    ' has been deprecated since v' +
                      t +
                      ' and will be removed in the near future',
                  ),
                )),
              !e || e(n, r, o)
            );
          };
        }),
          (e.exports = {
            assertOptions: function (e, t, n) {
              if ('object' !== typeof e)
                throw new TypeError('options must be an object');
              for (var r = Object.keys(e), i = r.length; i-- > 0; ) {
                var a = r[i],
                  o = t[a];
                if (o) {
                  var s = e[a],
                    l = void 0 === s || o(s, a, e);
                  if (!0 !== l)
                    throw new TypeError('option ' + a + ' must be ' + l);
                } else if (!0 !== n) throw Error('Unknown option ' + a);
              }
            },
            validators: i,
          });
      },
      3589: function (e, t, n) {
        'use strict';
        var r = n(4049),
          i = Object.prototype.toString;
        function a(e) {
          return '[object Array]' === i.call(e);
        }
        function o(e) {
          return 'undefined' === typeof e;
        }
        function s(e) {
          return null !== e && 'object' === typeof e;
        }
        function l(e) {
          if ('[object Object]' !== i.call(e)) return !1;
          var t = Object.getPrototypeOf(e);
          return null === t || t === Object.prototype;
        }
        function u(e) {
          return '[object Function]' === i.call(e);
        }
        function c(e, t) {
          if (null !== e && 'undefined' !== typeof e)
            if (('object' !== typeof e && (e = [e]), a(e)))
              for (var n = 0, r = e.length; n < r; n++)
                t.call(null, e[n], n, e);
            else
              for (var i in e)
                Object.prototype.hasOwnProperty.call(e, i) &&
                  t.call(null, e[i], i, e);
        }
        e.exports = {
          isArray: a,
          isArrayBuffer: function (e) {
            return '[object ArrayBuffer]' === i.call(e);
          },
          isBuffer: function (e) {
            return (
              null !== e &&
              !o(e) &&
              null !== e.constructor &&
              !o(e.constructor) &&
              'function' === typeof e.constructor.isBuffer &&
              e.constructor.isBuffer(e)
            );
          },
          isFormData: function (e) {
            return 'undefined' !== typeof FormData && e instanceof FormData;
          },
          isArrayBufferView: function (e) {
            return 'undefined' !== typeof ArrayBuffer && ArrayBuffer.isView
              ? ArrayBuffer.isView(e)
              : e && e.buffer && e.buffer instanceof ArrayBuffer;
          },
          isString: function (e) {
            return 'string' === typeof e;
          },
          isNumber: function (e) {
            return 'number' === typeof e;
          },
          isObject: s,
          isPlainObject: l,
          isUndefined: o,
          isDate: function (e) {
            return '[object Date]' === i.call(e);
          },
          isFile: function (e) {
            return '[object File]' === i.call(e);
          },
          isBlob: function (e) {
            return '[object Blob]' === i.call(e);
          },
          isFunction: u,
          isStream: function (e) {
            return s(e) && u(e.pipe);
          },
          isURLSearchParams: function (e) {
            return (
              'undefined' !== typeof URLSearchParams &&
              e instanceof URLSearchParams
            );
          },
          isStandardBrowserEnv: function () {
            return (
              ('undefined' === typeof navigator ||
                ('ReactNative' !== navigator.product &&
                  'NativeScript' !== navigator.product &&
                  'NS' !== navigator.product)) &&
              'undefined' !== typeof window &&
              'undefined' !== typeof document
            );
          },
          forEach: c,
          merge: function e() {
            var t = {};
            function n(n, r) {
              l(t[r]) && l(n)
                ? (t[r] = e(t[r], n))
                : l(n)
                ? (t[r] = e({}, n))
                : a(n)
                ? (t[r] = n.slice())
                : (t[r] = n);
            }
            for (var r = 0, i = arguments.length; r < i; r++)
              c(arguments[r], n);
            return t;
          },
          extend: function (e, t, n) {
            return (
              c(t, function (t, i) {
                e[i] = n && 'function' === typeof t ? r(t, n) : t;
              }),
              e
            );
          },
          trim: function (e) {
            return e.trim ? e.trim() : e.replace(/^\s+|\s+$/g, '');
          },
          stripBOM: function (e) {
            return 65279 === e.charCodeAt(0) && (e = e.slice(1)), e;
          },
        };
      },
      2110: function (e, t, n) {
        'use strict';
        var r = n(8309),
          i = {
            childContextTypes: !0,
            contextType: !0,
            contextTypes: !0,
            defaultProps: !0,
            displayName: !0,
            getDefaultProps: !0,
            getDerivedStateFromError: !0,
            getDerivedStateFromProps: !0,
            mixins: !0,
            propTypes: !0,
            type: !0,
          },
          a = {
            name: !0,
            length: !0,
            prototype: !0,
            caller: !0,
            callee: !0,
            arguments: !0,
            arity: !0,
          },
          o = {
            $$typeof: !0,
            compare: !0,
            defaultProps: !0,
            displayName: !0,
            propTypes: !0,
            type: !0,
          },
          s = {};
        function l(e) {
          return r.isMemo(e) ? o : s[e.$$typeof] || i;
        }
        (s[r.ForwardRef] = {
          $$typeof: !0,
          render: !0,
          defaultProps: !0,
          displayName: !0,
          propTypes: !0,
        }),
          (s[r.Memo] = o);
        var u = Object.defineProperty,
          c = Object.getOwnPropertyNames,
          d = Object.getOwnPropertySymbols,
          f = Object.getOwnPropertyDescriptor,
          p = Object.getPrototypeOf,
          h = Object.prototype;
        e.exports = function e(t, n, r) {
          if ('string' !== typeof n) {
            if (h) {
              var i = p(n);
              i && i !== h && e(t, i, r);
            }
            var o = c(n);
            d && (o = o.concat(d(n)));
            for (var s = l(t), v = l(n), m = 0; m < o.length; ++m) {
              var g = o[m];
              if (!a[g] && (!r || !r[g]) && (!v || !v[g]) && (!s || !s[g])) {
                var y = f(n, g);
                try {
                  u(t, g, y);
                } catch (b) {}
              }
            }
          }
          return t;
        };
      },
      746: function (e, t) {
        'use strict';
        var n = 'function' === typeof Symbol && Symbol.for,
          r = n ? Symbol.for('react.element') : 60103,
          i = n ? Symbol.for('react.portal') : 60106,
          a = n ? Symbol.for('react.fragment') : 60107,
          o = n ? Symbol.for('react.strict_mode') : 60108,
          s = n ? Symbol.for('react.profiler') : 60114,
          l = n ? Symbol.for('react.provider') : 60109,
          u = n ? Symbol.for('react.context') : 60110,
          c = n ? Symbol.for('react.async_mode') : 60111,
          d = n ? Symbol.for('react.concurrent_mode') : 60111,
          f = n ? Symbol.for('react.forward_ref') : 60112,
          p = n ? Symbol.for('react.suspense') : 60113,
          h = n ? Symbol.for('react.suspense_list') : 60120,
          v = n ? Symbol.for('react.memo') : 60115,
          m = n ? Symbol.for('react.lazy') : 60116,
          g = n ? Symbol.for('react.block') : 60121,
          y = n ? Symbol.for('react.fundamental') : 60117,
          b = n ? Symbol.for('react.responder') : 60118,
          w = n ? Symbol.for('react.scope') : 60119;
        function x(e) {
          if ('object' === typeof e && null !== e) {
            var t = e.$$typeof;
            switch (t) {
              case r:
                switch ((e = e.type)) {
                  case c:
                  case d:
                  case a:
                  case s:
                  case o:
                  case p:
                    return e;
                  default:
                    switch ((e = e && e.$$typeof)) {
                      case u:
                      case f:
                      case m:
                      case v:
                      case l:
                        return e;
                      default:
                        return t;
                    }
                }
              case i:
                return t;
            }
          }
        }
        function S(e) {
          return x(e) === d;
        }
        (t.AsyncMode = c),
          (t.ConcurrentMode = d),
          (t.ContextConsumer = u),
          (t.ContextProvider = l),
          (t.Element = r),
          (t.ForwardRef = f),
          (t.Fragment = a),
          (t.Lazy = m),
          (t.Memo = v),
          (t.Portal = i),
          (t.Profiler = s),
          (t.StrictMode = o),
          (t.Suspense = p),
          (t.isAsyncMode = function (e) {
            return S(e) || x(e) === c;
          }),
          (t.isConcurrentMode = S),
          (t.isContextConsumer = function (e) {
            return x(e) === u;
          }),
          (t.isContextProvider = function (e) {
            return x(e) === l;
          }),
          (t.isElement = function (e) {
            return 'object' === typeof e && null !== e && e.$$typeof === r;
          }),
          (t.isForwardRef = function (e) {
            return x(e) === f;
          }),
          (t.isFragment = function (e) {
            return x(e) === a;
          }),
          (t.isLazy = function (e) {
            return x(e) === m;
          }),
          (t.isMemo = function (e) {
            return x(e) === v;
          }),
          (t.isPortal = function (e) {
            return x(e) === i;
          }),
          (t.isProfiler = function (e) {
            return x(e) === s;
          }),
          (t.isStrictMode = function (e) {
            return x(e) === o;
          }),
          (t.isSuspense = function (e) {
            return x(e) === p;
          }),
          (t.isValidElementType = function (e) {
            return (
              'string' === typeof e ||
              'function' === typeof e ||
              e === a ||
              e === d ||
              e === s ||
              e === o ||
              e === p ||
              e === h ||
              ('object' === typeof e &&
                null !== e &&
                (e.$$typeof === m ||
                  e.$$typeof === v ||
                  e.$$typeof === l ||
                  e.$$typeof === u ||
                  e.$$typeof === f ||
                  e.$$typeof === y ||
                  e.$$typeof === b ||
                  e.$$typeof === w ||
                  e.$$typeof === g))
            );
          }),
          (t.typeOf = x);
      },
      8309: function (e, t, n) {
        'use strict';
        e.exports = n(746);
      },
      1725: function (e) {
        'use strict';
        var t = Object.getOwnPropertySymbols,
          n = Object.prototype.hasOwnProperty,
          r = Object.prototype.propertyIsEnumerable;
        function i(e) {
          if (null === e || void 0 === e)
            throw new TypeError(
              'Object.assign cannot be called with null or undefined',
            );
          return Object(e);
        }
        e.exports = (function () {
          try {
            if (!Object.assign) return !1;
            var e = new String('abc');
            if (((e[5] = 'de'), '5' === Object.getOwnPropertyNames(e)[0]))
              return !1;
            for (var t = {}, n = 0; n < 10; n++)
              t['_' + String.fromCharCode(n)] = n;
            if (
              '0123456789' !==
              Object.getOwnPropertyNames(t)
                .map(function (e) {
                  return t[e];
                })
                .join('')
            )
              return !1;
            var r = {};
            return (
              'abcdefghijklmnopqrst'.split('').forEach(function (e) {
                r[e] = e;
              }),
              'abcdefghijklmnopqrst' ===
                Object.keys(Object.assign({}, r)).join('')
            );
          } catch (i) {
            return !1;
          }
        })()
          ? Object.assign
          : function (e, a) {
              for (var o, s, l = i(e), u = 1; u < arguments.length; u++) {
                for (var c in (o = Object(arguments[u])))
                  n.call(o, c) && (l[c] = o[c]);
                if (t) {
                  s = t(o);
                  for (var d = 0; d < s.length; d++)
                    r.call(o, s[d]) && (l[s[d]] = o[s[d]]);
                }
              }
              return l;
            };
      },
      888: function (e, t, n) {
        'use strict';
        var r = n(9047);
        function i() {}
        function a() {}
        (a.resetWarningCache = i),
          (e.exports = function () {
            function e(e, t, n, i, a, o) {
              if (o !== r) {
                var s = new Error(
                  'Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types',
                );
                throw ((s.name = 'Invariant Violation'), s);
              }
            }
            function t() {
              return e;
            }
            e.isRequired = e;
            var n = {
              array: e,
              bigint: e,
              bool: e,
              func: e,
              number: e,
              object: e,
              string: e,
              symbol: e,
              any: e,
              arrayOf: t,
              element: e,
              elementType: e,
              instanceOf: t,
              node: e,
              objectOf: t,
              oneOf: t,
              oneOfType: t,
              shape: t,
              exact: t,
              checkPropTypes: a,
              resetWarningCache: i,
            };
            return (n.PropTypes = n), n;
          });
      },
      2007: function (e, t, n) {
        e.exports = n(888)();
      },
      9047: function (e) {
        'use strict';
        e.exports = 'SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED';
      },
      4463: function (e, t, n) {
        'use strict';
        var r = n(2791),
          i = n(1725),
          a = n(5296);
        function o(e) {
          for (
            var t =
                'https://reactjs.org/docs/error-decoder.html?invariant=' + e,
              n = 1;
            n < arguments.length;
            n++
          )
            t += '&args[]=' + encodeURIComponent(arguments[n]);
          return (
            'Minified React error #' +
            e +
            '; visit ' +
            t +
            ' for the full message or use the non-minified dev environment for full errors and additional helpful warnings.'
          );
        }
        if (!r) throw Error(o(227));
        var s = new Set(),
          l = {};
        function u(e, t) {
          c(e, t), c(e + 'Capture', t);
        }
        function c(e, t) {
          for (l[e] = t, e = 0; e < t.length; e++) s.add(t[e]);
        }
        var d = !(
            'undefined' === typeof window ||
            'undefined' === typeof window.document ||
            'undefined' === typeof window.document.createElement
          ),
          f =
            /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,
          p = Object.prototype.hasOwnProperty,
          h = {},
          v = {};
        function m(e, t, n, r, i, a, o) {
          (this.acceptsBooleans = 2 === t || 3 === t || 4 === t),
            (this.attributeName = r),
            (this.attributeNamespace = i),
            (this.mustUseProperty = n),
            (this.propertyName = e),
            (this.type = t),
            (this.sanitizeURL = a),
            (this.removeEmptyString = o);
        }
        var g = {};
        'children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style'
          .split(' ')
          .forEach(function (e) {
            g[e] = new m(e, 0, !1, e, null, !1, !1);
          }),
          [
            ['acceptCharset', 'accept-charset'],
            ['className', 'class'],
            ['htmlFor', 'for'],
            ['httpEquiv', 'http-equiv'],
          ].forEach(function (e) {
            var t = e[0];
            g[t] = new m(t, 1, !1, e[1], null, !1, !1);
          }),
          ['contentEditable', 'draggable', 'spellCheck', 'value'].forEach(
            function (e) {
              g[e] = new m(e, 2, !1, e.toLowerCase(), null, !1, !1);
            },
          ),
          [
            'autoReverse',
            'externalResourcesRequired',
            'focusable',
            'preserveAlpha',
          ].forEach(function (e) {
            g[e] = new m(e, 2, !1, e, null, !1, !1);
          }),
          'allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope'
            .split(' ')
            .forEach(function (e) {
              g[e] = new m(e, 3, !1, e.toLowerCase(), null, !1, !1);
            }),
          ['checked', 'multiple', 'muted', 'selected'].forEach(function (e) {
            g[e] = new m(e, 3, !0, e, null, !1, !1);
          }),
          ['capture', 'download'].forEach(function (e) {
            g[e] = new m(e, 4, !1, e, null, !1, !1);
          }),
          ['cols', 'rows', 'size', 'span'].forEach(function (e) {
            g[e] = new m(e, 6, !1, e, null, !1, !1);
          }),
          ['rowSpan', 'start'].forEach(function (e) {
            g[e] = new m(e, 5, !1, e.toLowerCase(), null, !1, !1);
          });
        var y = /[\-:]([a-z])/g;
        function b(e) {
          return e[1].toUpperCase();
        }
        function w(e, t, n, r) {
          var i = g.hasOwnProperty(t) ? g[t] : null;
          (null !== i
            ? 0 === i.type
            : !r &&
              2 < t.length &&
              ('o' === t[0] || 'O' === t[0]) &&
              ('n' === t[1] || 'N' === t[1])) ||
            ((function (e, t, n, r) {
              if (
                null === t ||
                'undefined' === typeof t ||
                (function (e, t, n, r) {
                  if (null !== n && 0 === n.type) return !1;
                  switch (typeof t) {
                    case 'function':
                    case 'symbol':
                      return !0;
                    case 'boolean':
                      return (
                        !r &&
                        (null !== n
                          ? !n.acceptsBooleans
                          : 'data-' !== (e = e.toLowerCase().slice(0, 5)) &&
                            'aria-' !== e)
                      );
                    default:
                      return !1;
                  }
                })(e, t, n, r)
              )
                return !0;
              if (r) return !1;
              if (null !== n)
                switch (n.type) {
                  case 3:
                    return !t;
                  case 4:
                    return !1 === t;
                  case 5:
                    return isNaN(t);
                  case 6:
                    return isNaN(t) || 1 > t;
                }
              return !1;
            })(t, n, i, r) && (n = null),
            r || null === i
              ? (function (e) {
                  return (
                    !!p.call(v, e) ||
                    (!p.call(h, e) &&
                      (f.test(e) ? (v[e] = !0) : ((h[e] = !0), !1)))
                  );
                })(t) &&
                (null === n ? e.removeAttribute(t) : e.setAttribute(t, '' + n))
              : i.mustUseProperty
              ? (e[i.propertyName] = null === n ? 3 !== i.type && '' : n)
              : ((t = i.attributeName),
                (r = i.attributeNamespace),
                null === n
                  ? e.removeAttribute(t)
                  : ((n =
                      3 === (i = i.type) || (4 === i && !0 === n)
                        ? ''
                        : '' + n),
                    r ? e.setAttributeNS(r, t, n) : e.setAttribute(t, n))));
        }
        'accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height'
          .split(' ')
          .forEach(function (e) {
            var t = e.replace(y, b);
            g[t] = new m(t, 1, !1, e, null, !1, !1);
          }),
          'xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type'
            .split(' ')
            .forEach(function (e) {
              var t = e.replace(y, b);
              g[t] = new m(t, 1, !1, e, 'http://www.w3.org/1999/xlink', !1, !1);
            }),
          ['xml:base', 'xml:lang', 'xml:space'].forEach(function (e) {
            var t = e.replace(y, b);
            g[t] = new m(
              t,
              1,
              !1,
              e,
              'http://www.w3.org/XML/1998/namespace',
              !1,
              !1,
            );
          }),
          ['tabIndex', 'crossOrigin'].forEach(function (e) {
            g[e] = new m(e, 1, !1, e.toLowerCase(), null, !1, !1);
          }),
          (g.xlinkHref = new m(
            'xlinkHref',
            1,
            !1,
            'xlink:href',
            'http://www.w3.org/1999/xlink',
            !0,
            !1,
          )),
          ['src', 'href', 'action', 'formAction'].forEach(function (e) {
            g[e] = new m(e, 1, !1, e.toLowerCase(), null, !0, !0);
          });
        var x = r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,
          S = 60103,
          E = 60106,
          k = 60107,
          C = 60108,
          T = 60114,
          P = 60109,
          O = 60110,
          j = 60112,
          L = 60113,
          _ = 60120,
          A = 60115,
          M = 60116,
          N = 60121,
          R = 60128,
          I = 60129,
          D = 60130,
          z = 60131;
        if ('function' === typeof Symbol && Symbol.for) {
          var V = Symbol.for;
          (S = V('react.element')),
            (E = V('react.portal')),
            (k = V('react.fragment')),
            (C = V('react.strict_mode')),
            (T = V('react.profiler')),
            (P = V('react.provider')),
            (O = V('react.context')),
            (j = V('react.forward_ref')),
            (L = V('react.suspense')),
            (_ = V('react.suspense_list')),
            (A = V('react.memo')),
            (M = V('react.lazy')),
            (N = V('react.block')),
            V('react.scope'),
            (R = V('react.opaque.id')),
            (I = V('react.debug_trace_mode')),
            (D = V('react.offscreen')),
            (z = V('react.legacy_hidden'));
        }
        var F,
          B = 'function' === typeof Symbol && Symbol.iterator;
        function U(e) {
          return null === e || 'object' !== typeof e
            ? null
            : 'function' === typeof (e = (B && e[B]) || e['@@iterator'])
            ? e
            : null;
        }
        function $(e) {
          if (void 0 === F)
            try {
              throw Error();
            } catch (n) {
              var t = n.stack.trim().match(/\n( *(at )?)/);
              F = (t && t[1]) || '';
            }
          return '\n' + F + e;
        }
        var q = !1;
        function H(e, t) {
          if (!e || q) return '';
          q = !0;
          var n = Error.prepareStackTrace;
          Error.prepareStackTrace = void 0;
          try {
            if (t)
              if (
                ((t = function () {
                  throw Error();
                }),
                Object.defineProperty(t.prototype, 'props', {
                  set: function () {
                    throw Error();
                  },
                }),
                'object' === typeof Reflect && Reflect.construct)
              ) {
                try {
                  Reflect.construct(t, []);
                } catch (l) {
                  var r = l;
                }
                Reflect.construct(e, [], t);
              } else {
                try {
                  t.call();
                } catch (l) {
                  r = l;
                }
                e.call(t.prototype);
              }
            else {
              try {
                throw Error();
              } catch (l) {
                r = l;
              }
              e();
            }
          } catch (l) {
            if (l && r && 'string' === typeof l.stack) {
              for (
                var i = l.stack.split('\n'),
                  a = r.stack.split('\n'),
                  o = i.length - 1,
                  s = a.length - 1;
                1 <= o && 0 <= s && i[o] !== a[s];

              )
                s--;
              for (; 1 <= o && 0 <= s; o--, s--)
                if (i[o] !== a[s]) {
                  if (1 !== o || 1 !== s)
                    do {
                      if ((o--, 0 > --s || i[o] !== a[s]))
                        return '\n' + i[o].replace(' at new ', ' at ');
                    } while (1 <= o && 0 <= s);
                  break;
                }
            }
          } finally {
            (q = !1), (Error.prepareStackTrace = n);
          }
          return (e = e ? e.displayName || e.name : '') ? $(e) : '';
        }
        function W(e) {
          switch (e.tag) {
            case 5:
              return $(e.type);
            case 16:
              return $('Lazy');
            case 13:
              return $('Suspense');
            case 19:
              return $('SuspenseList');
            case 0:
            case 2:
            case 15:
              return (e = H(e.type, !1));
            case 11:
              return (e = H(e.type.render, !1));
            case 22:
              return (e = H(e.type._render, !1));
            case 1:
              return (e = H(e.type, !0));
            default:
              return '';
          }
        }
        function G(e) {
          if (null == e) return null;
          if ('function' === typeof e) return e.displayName || e.name || null;
          if ('string' === typeof e) return e;
          switch (e) {
            case k:
              return 'Fragment';
            case E:
              return 'Portal';
            case T:
              return 'Profiler';
            case C:
              return 'StrictMode';
            case L:
              return 'Suspense';
            case _:
              return 'SuspenseList';
          }
          if ('object' === typeof e)
            switch (e.$$typeof) {
              case O:
                return (e.displayName || 'Context') + '.Consumer';
              case P:
                return (e._context.displayName || 'Context') + '.Provider';
              case j:
                var t = e.render;
                return (
                  (t = t.displayName || t.name || ''),
                  e.displayName ||
                    ('' !== t ? 'ForwardRef(' + t + ')' : 'ForwardRef')
                );
              case A:
                return G(e.type);
              case N:
                return G(e._render);
              case M:
                (t = e._payload), (e = e._init);
                try {
                  return G(e(t));
                } catch (n) {}
            }
          return null;
        }
        function Y(e) {
          switch (typeof e) {
            case 'boolean':
            case 'number':
            case 'object':
            case 'string':
            case 'undefined':
              return e;
            default:
              return '';
          }
        }
        function X(e) {
          var t = e.type;
          return (
            (e = e.nodeName) &&
            'input' === e.toLowerCase() &&
            ('checkbox' === t || 'radio' === t)
          );
        }
        function Q(e) {
          e._valueTracker ||
            (e._valueTracker = (function (e) {
              var t = X(e) ? 'checked' : 'value',
                n = Object.getOwnPropertyDescriptor(e.constructor.prototype, t),
                r = '' + e[t];
              if (
                !e.hasOwnProperty(t) &&
                'undefined' !== typeof n &&
                'function' === typeof n.get &&
                'function' === typeof n.set
              ) {
                var i = n.get,
                  a = n.set;
                return (
                  Object.defineProperty(e, t, {
                    configurable: !0,
                    get: function () {
                      return i.call(this);
                    },
                    set: function (e) {
                      (r = '' + e), a.call(this, e);
                    },
                  }),
                  Object.defineProperty(e, t, { enumerable: n.enumerable }),
                  {
                    getValue: function () {
                      return r;
                    },
                    setValue: function (e) {
                      r = '' + e;
                    },
                    stopTracking: function () {
                      (e._valueTracker = null), delete e[t];
                    },
                  }
                );
              }
            })(e));
        }
        function K(e) {
          if (!e) return !1;
          var t = e._valueTracker;
          if (!t) return !0;
          var n = t.getValue(),
            r = '';
          return (
            e && (r = X(e) ? (e.checked ? 'true' : 'false') : e.value),
            (e = r) !== n && (t.setValue(e), !0)
          );
        }
        function J(e) {
          if (
            'undefined' ===
            typeof (e =
              e || ('undefined' !== typeof document ? document : void 0))
          )
            return null;
          try {
            return e.activeElement || e.body;
          } catch (t) {
            return e.body;
          }
        }
        function Z(e, t) {
          var n = t.checked;
          return i({}, t, {
            defaultChecked: void 0,
            defaultValue: void 0,
            value: void 0,
            checked: null != n ? n : e._wrapperState.initialChecked,
          });
        }
        function ee(e, t) {
          var n = null == t.defaultValue ? '' : t.defaultValue,
            r = null != t.checked ? t.checked : t.defaultChecked;
          (n = Y(null != t.value ? t.value : n)),
            (e._wrapperState = {
              initialChecked: r,
              initialValue: n,
              controlled:
                'checkbox' === t.type || 'radio' === t.type
                  ? null != t.checked
                  : null != t.value,
            });
        }
        function te(e, t) {
          null != (t = t.checked) && w(e, 'checked', t, !1);
        }
        function ne(e, t) {
          te(e, t);
          var n = Y(t.value),
            r = t.type;
          if (null != n)
            'number' === r
              ? ((0 === n && '' === e.value) || e.value != n) &&
                (e.value = '' + n)
              : e.value !== '' + n && (e.value = '' + n);
          else if ('submit' === r || 'reset' === r)
            return void e.removeAttribute('value');
          t.hasOwnProperty('value')
            ? ie(e, t.type, n)
            : t.hasOwnProperty('defaultValue') &&
              ie(e, t.type, Y(t.defaultValue)),
            null == t.checked &&
              null != t.defaultChecked &&
              (e.defaultChecked = !!t.defaultChecked);
        }
        function re(e, t, n) {
          if (t.hasOwnProperty('value') || t.hasOwnProperty('defaultValue')) {
            var r = t.type;
            if (
              !(
                ('submit' !== r && 'reset' !== r) ||
                (void 0 !== t.value && null !== t.value)
              )
            )
              return;
            (t = '' + e._wrapperState.initialValue),
              n || t === e.value || (e.value = t),
              (e.defaultValue = t);
          }
          '' !== (n = e.name) && (e.name = ''),
            (e.defaultChecked = !!e._wrapperState.initialChecked),
            '' !== n && (e.name = n);
        }
        function ie(e, t, n) {
          ('number' === t && J(e.ownerDocument) === e) ||
            (null == n
              ? (e.defaultValue = '' + e._wrapperState.initialValue)
              : e.defaultValue !== '' + n && (e.defaultValue = '' + n));
        }
        function ae(e, t) {
          return (
            (e = i({ children: void 0 }, t)),
            (t = (function (e) {
              var t = '';
              return (
                r.Children.forEach(e, function (e) {
                  null != e && (t += e);
                }),
                t
              );
            })(t.children)) && (e.children = t),
            e
          );
        }
        function oe(e, t, n, r) {
          if (((e = e.options), t)) {
            t = {};
            for (var i = 0; i < n.length; i++) t['$' + n[i]] = !0;
            for (n = 0; n < e.length; n++)
              (i = t.hasOwnProperty('$' + e[n].value)),
                e[n].selected !== i && (e[n].selected = i),
                i && r && (e[n].defaultSelected = !0);
          } else {
            for (n = '' + Y(n), t = null, i = 0; i < e.length; i++) {
              if (e[i].value === n)
                return (
                  (e[i].selected = !0), void (r && (e[i].defaultSelected = !0))
                );
              null !== t || e[i].disabled || (t = e[i]);
            }
            null !== t && (t.selected = !0);
          }
        }
        function se(e, t) {
          if (null != t.dangerouslySetInnerHTML) throw Error(o(91));
          return i({}, t, {
            value: void 0,
            defaultValue: void 0,
            children: '' + e._wrapperState.initialValue,
          });
        }
        function le(e, t) {
          var n = t.value;
          if (null == n) {
            if (((n = t.children), (t = t.defaultValue), null != n)) {
              if (null != t) throw Error(o(92));
              if (Array.isArray(n)) {
                if (!(1 >= n.length)) throw Error(o(93));
                n = n[0];
              }
              t = n;
            }
            null == t && (t = ''), (n = t);
          }
          e._wrapperState = { initialValue: Y(n) };
        }
        function ue(e, t) {
          var n = Y(t.value),
            r = Y(t.defaultValue);
          null != n &&
            ((n = '' + n) !== e.value && (e.value = n),
            null == t.defaultValue &&
              e.defaultValue !== n &&
              (e.defaultValue = n)),
            null != r && (e.defaultValue = '' + r);
        }
        function ce(e) {
          var t = e.textContent;
          t === e._wrapperState.initialValue &&
            '' !== t &&
            null !== t &&
            (e.value = t);
        }
        var de = 'http://www.w3.org/1999/xhtml',
          fe = 'http://www.w3.org/2000/svg';
        function pe(e) {
          switch (e) {
            case 'svg':
              return 'http://www.w3.org/2000/svg';
            case 'math':
              return 'http://www.w3.org/1998/Math/MathML';
            default:
              return 'http://www.w3.org/1999/xhtml';
          }
        }
        function he(e, t) {
          return null == e || 'http://www.w3.org/1999/xhtml' === e
            ? pe(t)
            : 'http://www.w3.org/2000/svg' === e && 'foreignObject' === t
            ? 'http://www.w3.org/1999/xhtml'
            : e;
        }
        var ve,
          me,
          ge =
            ((me = function (e, t) {
              if (e.namespaceURI !== fe || 'innerHTML' in e) e.innerHTML = t;
              else {
                for (
                  (ve = ve || document.createElement('div')).innerHTML =
                    '<svg>' + t.valueOf().toString() + '</svg>',
                    t = ve.firstChild;
                  e.firstChild;

                )
                  e.removeChild(e.firstChild);
                for (; t.firstChild; ) e.appendChild(t.firstChild);
              }
            }),
            'undefined' !== typeof MSApp && MSApp.execUnsafeLocalFunction
              ? function (e, t, n, r) {
                  MSApp.execUnsafeLocalFunction(function () {
                    return me(e, t);
                  });
                }
              : me);
        function ye(e, t) {
          if (t) {
            var n = e.firstChild;
            if (n && n === e.lastChild && 3 === n.nodeType)
              return void (n.nodeValue = t);
          }
          e.textContent = t;
        }
        var be = {
            animationIterationCount: !0,
            borderImageOutset: !0,
            borderImageSlice: !0,
            borderImageWidth: !0,
            boxFlex: !0,
            boxFlexGroup: !0,
            boxOrdinalGroup: !0,
            columnCount: !0,
            columns: !0,
            flex: !0,
            flexGrow: !0,
            flexPositive: !0,
            flexShrink: !0,
            flexNegative: !0,
            flexOrder: !0,
            gridArea: !0,
            gridRow: !0,
            gridRowEnd: !0,
            gridRowSpan: !0,
            gridRowStart: !0,
            gridColumn: !0,
            gridColumnEnd: !0,
            gridColumnSpan: !0,
            gridColumnStart: !0,
            fontWeight: !0,
            lineClamp: !0,
            lineHeight: !0,
            opacity: !0,
            order: !0,
            orphans: !0,
            tabSize: !0,
            widows: !0,
            zIndex: !0,
            zoom: !0,
            fillOpacity: !0,
            floodOpacity: !0,
            stopOpacity: !0,
            strokeDasharray: !0,
            strokeDashoffset: !0,
            strokeMiterlimit: !0,
            strokeOpacity: !0,
            strokeWidth: !0,
          },
          we = ['Webkit', 'ms', 'Moz', 'O'];
        function xe(e, t, n) {
          return null == t || 'boolean' === typeof t || '' === t
            ? ''
            : n ||
              'number' !== typeof t ||
              0 === t ||
              (be.hasOwnProperty(e) && be[e])
            ? ('' + t).trim()
            : t + 'px';
        }
        function Se(e, t) {
          for (var n in ((e = e.style), t))
            if (t.hasOwnProperty(n)) {
              var r = 0 === n.indexOf('--'),
                i = xe(n, t[n], r);
              'float' === n && (n = 'cssFloat'),
                r ? e.setProperty(n, i) : (e[n] = i);
            }
        }
        Object.keys(be).forEach(function (e) {
          we.forEach(function (t) {
            (t = t + e.charAt(0).toUpperCase() + e.substring(1)),
              (be[t] = be[e]);
          });
        });
        var Ee = i(
          { menuitem: !0 },
          {
            area: !0,
            base: !0,
            br: !0,
            col: !0,
            embed: !0,
            hr: !0,
            img: !0,
            input: !0,
            keygen: !0,
            link: !0,
            meta: !0,
            param: !0,
            source: !0,
            track: !0,
            wbr: !0,
          },
        );
        function ke(e, t) {
          if (t) {
            if (
              Ee[e] &&
              (null != t.children || null != t.dangerouslySetInnerHTML)
            )
              throw Error(o(137, e));
            if (null != t.dangerouslySetInnerHTML) {
              if (null != t.children) throw Error(o(60));
              if (
                'object' !== typeof t.dangerouslySetInnerHTML ||
                !('__html' in t.dangerouslySetInnerHTML)
              )
                throw Error(o(61));
            }
            if (null != t.style && 'object' !== typeof t.style)
              throw Error(o(62));
          }
        }
        function Ce(e, t) {
          if (-1 === e.indexOf('-')) return 'string' === typeof t.is;
          switch (e) {
            case 'annotation-xml':
            case 'color-profile':
            case 'font-face':
            case 'font-face-src':
            case 'font-face-uri':
            case 'font-face-format':
            case 'font-face-name':
            case 'missing-glyph':
              return !1;
            default:
              return !0;
          }
        }
        function Te(e) {
          return (
            (e = e.target || e.srcElement || window).correspondingUseElement &&
              (e = e.correspondingUseElement),
            3 === e.nodeType ? e.parentNode : e
          );
        }
        var Pe = null,
          Oe = null,
          je = null;
        function Le(e) {
          if ((e = ri(e))) {
            if ('function' !== typeof Pe) throw Error(o(280));
            var t = e.stateNode;
            t && ((t = ai(t)), Pe(e.stateNode, e.type, t));
          }
        }
        function _e(e) {
          Oe ? (je ? je.push(e) : (je = [e])) : (Oe = e);
        }
        function Ae() {
          if (Oe) {
            var e = Oe,
              t = je;
            if (((je = Oe = null), Le(e), t))
              for (e = 0; e < t.length; e++) Le(t[e]);
          }
        }
        function Me(e, t) {
          return e(t);
        }
        function Ne(e, t, n, r, i) {
          return e(t, n, r, i);
        }
        function Re() {}
        var Ie = Me,
          De = !1,
          ze = !1;
        function Ve() {
          (null === Oe && null === je) || (Re(), Ae());
        }
        function Fe(e, t) {
          var n = e.stateNode;
          if (null === n) return null;
          var r = ai(n);
          if (null === r) return null;
          n = r[t];
          e: switch (t) {
            case 'onClick':
            case 'onClickCapture':
            case 'onDoubleClick':
            case 'onDoubleClickCapture':
            case 'onMouseDown':
            case 'onMouseDownCapture':
            case 'onMouseMove':
            case 'onMouseMoveCapture':
            case 'onMouseUp':
            case 'onMouseUpCapture':
            case 'onMouseEnter':
              (r = !r.disabled) ||
                (r = !(
                  'button' === (e = e.type) ||
                  'input' === e ||
                  'select' === e ||
                  'textarea' === e
                )),
                (e = !r);
              break e;
            default:
              e = !1;
          }
          if (e) return null;
          if (n && 'function' !== typeof n) throw Error(o(231, t, typeof n));
          return n;
        }
        var Be = !1;
        if (d)
          try {
            var Ue = {};
            Object.defineProperty(Ue, 'passive', {
              get: function () {
                Be = !0;
              },
            }),
              window.addEventListener('test', Ue, Ue),
              window.removeEventListener('test', Ue, Ue);
          } catch (me) {
            Be = !1;
          }
        function $e(e, t, n, r, i, a, o, s, l) {
          var u = Array.prototype.slice.call(arguments, 3);
          try {
            t.apply(n, u);
          } catch (c) {
            this.onError(c);
          }
        }
        var qe = !1,
          He = null,
          We = !1,
          Ge = null,
          Ye = {
            onError: function (e) {
              (qe = !0), (He = e);
            },
          };
        function Xe(e, t, n, r, i, a, o, s, l) {
          (qe = !1), (He = null), $e.apply(Ye, arguments);
        }
        function Qe(e) {
          var t = e,
            n = e;
          if (e.alternate) for (; t.return; ) t = t.return;
          else {
            e = t;
            do {
              0 !== (1026 & (t = e).flags) && (n = t.return), (e = t.return);
            } while (e);
          }
          return 3 === t.tag ? n : null;
        }
        function Ke(e) {
          if (13 === e.tag) {
            var t = e.memoizedState;
            if (
              (null === t &&
                null !== (e = e.alternate) &&
                (t = e.memoizedState),
              null !== t)
            )
              return t.dehydrated;
          }
          return null;
        }
        function Je(e) {
          if (Qe(e) !== e) throw Error(o(188));
        }
        function Ze(e) {
          if (
            ((e = (function (e) {
              var t = e.alternate;
              if (!t) {
                if (null === (t = Qe(e))) throw Error(o(188));
                return t !== e ? null : e;
              }
              for (var n = e, r = t; ; ) {
                var i = n.return;
                if (null === i) break;
                var a = i.alternate;
                if (null === a) {
                  if (null !== (r = i.return)) {
                    n = r;
                    continue;
                  }
                  break;
                }
                if (i.child === a.child) {
                  for (a = i.child; a; ) {
                    if (a === n) return Je(i), e;
                    if (a === r) return Je(i), t;
                    a = a.sibling;
                  }
                  throw Error(o(188));
                }
                if (n.return !== r.return) (n = i), (r = a);
                else {
                  for (var s = !1, l = i.child; l; ) {
                    if (l === n) {
                      (s = !0), (n = i), (r = a);
                      break;
                    }
                    if (l === r) {
                      (s = !0), (r = i), (n = a);
                      break;
                    }
                    l = l.sibling;
                  }
                  if (!s) {
                    for (l = a.child; l; ) {
                      if (l === n) {
                        (s = !0), (n = a), (r = i);
                        break;
                      }
                      if (l === r) {
                        (s = !0), (r = a), (n = i);
                        break;
                      }
                      l = l.sibling;
                    }
                    if (!s) throw Error(o(189));
                  }
                }
                if (n.alternate !== r) throw Error(o(190));
              }
              if (3 !== n.tag) throw Error(o(188));
              return n.stateNode.current === n ? e : t;
            })(e)),
            !e)
          )
            return null;
          for (var t = e; ; ) {
            if (5 === t.tag || 6 === t.tag) return t;
            if (t.child) (t.child.return = t), (t = t.child);
            else {
              if (t === e) break;
              for (; !t.sibling; ) {
                if (!t.return || t.return === e) return null;
                t = t.return;
              }
              (t.sibling.return = t.return), (t = t.sibling);
            }
          }
          return null;
        }
        function et(e, t) {
          for (var n = e.alternate; null !== t; ) {
            if (t === e || t === n) return !0;
            t = t.return;
          }
          return !1;
        }
        var tt,
          nt,
          rt,
          it,
          at = !1,
          ot = [],
          st = null,
          lt = null,
          ut = null,
          ct = new Map(),
          dt = new Map(),
          ft = [],
          pt =
            'mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit'.split(
              ' ',
            );
        function ht(e, t, n, r, i) {
          return {
            blockedOn: e,
            domEventName: t,
            eventSystemFlags: 16 | n,
            nativeEvent: i,
            targetContainers: [r],
          };
        }
        function vt(e, t) {
          switch (e) {
            case 'focusin':
            case 'focusout':
              st = null;
              break;
            case 'dragenter':
            case 'dragleave':
              lt = null;
              break;
            case 'mouseover':
            case 'mouseout':
              ut = null;
              break;
            case 'pointerover':
            case 'pointerout':
              ct.delete(t.pointerId);
              break;
            case 'gotpointercapture':
            case 'lostpointercapture':
              dt.delete(t.pointerId);
          }
        }
        function mt(e, t, n, r, i, a) {
          return null === e || e.nativeEvent !== a
            ? ((e = ht(t, n, r, i, a)),
              null !== t && null !== (t = ri(t)) && nt(t),
              e)
            : ((e.eventSystemFlags |= r),
              (t = e.targetContainers),
              null !== i && -1 === t.indexOf(i) && t.push(i),
              e);
        }
        function gt(e) {
          var t = ni(e.target);
          if (null !== t) {
            var n = Qe(t);
            if (null !== n)
              if (13 === (t = n.tag)) {
                if (null !== (t = Ke(n)))
                  return (
                    (e.blockedOn = t),
                    void it(e.lanePriority, function () {
                      a.unstable_runWithPriority(e.priority, function () {
                        rt(n);
                      });
                    })
                  );
              } else if (3 === t && n.stateNode.hydrate)
                return void (e.blockedOn =
                  3 === n.tag ? n.stateNode.containerInfo : null);
          }
          e.blockedOn = null;
        }
        function yt(e) {
          if (null !== e.blockedOn) return !1;
          for (var t = e.targetContainers; 0 < t.length; ) {
            var n = Zt(e.domEventName, e.eventSystemFlags, t[0], e.nativeEvent);
            if (null !== n)
              return null !== (t = ri(n)) && nt(t), (e.blockedOn = n), !1;
            t.shift();
          }
          return !0;
        }
        function bt(e, t, n) {
          yt(e) && n.delete(t);
        }
        function wt() {
          for (at = !1; 0 < ot.length; ) {
            var e = ot[0];
            if (null !== e.blockedOn) {
              null !== (e = ri(e.blockedOn)) && tt(e);
              break;
            }
            for (var t = e.targetContainers; 0 < t.length; ) {
              var n = Zt(
                e.domEventName,
                e.eventSystemFlags,
                t[0],
                e.nativeEvent,
              );
              if (null !== n) {
                e.blockedOn = n;
                break;
              }
              t.shift();
            }
            null === e.blockedOn && ot.shift();
          }
          null !== st && yt(st) && (st = null),
            null !== lt && yt(lt) && (lt = null),
            null !== ut && yt(ut) && (ut = null),
            ct.forEach(bt),
            dt.forEach(bt);
        }
        function xt(e, t) {
          e.blockedOn === t &&
            ((e.blockedOn = null),
            at ||
              ((at = !0),
              a.unstable_scheduleCallback(a.unstable_NormalPriority, wt)));
        }
        function St(e) {
          function t(t) {
            return xt(t, e);
          }
          if (0 < ot.length) {
            xt(ot[0], e);
            for (var n = 1; n < ot.length; n++) {
              var r = ot[n];
              r.blockedOn === e && (r.blockedOn = null);
            }
          }
          for (
            null !== st && xt(st, e),
              null !== lt && xt(lt, e),
              null !== ut && xt(ut, e),
              ct.forEach(t),
              dt.forEach(t),
              n = 0;
            n < ft.length;
            n++
          )
            (r = ft[n]).blockedOn === e && (r.blockedOn = null);
          for (; 0 < ft.length && null === (n = ft[0]).blockedOn; )
            gt(n), null === n.blockedOn && ft.shift();
        }
        function Et(e, t) {
          var n = {};
          return (
            (n[e.toLowerCase()] = t.toLowerCase()),
            (n['Webkit' + e] = 'webkit' + t),
            (n['Moz' + e] = 'moz' + t),
            n
          );
        }
        var kt = {
            animationend: Et('Animation', 'AnimationEnd'),
            animationiteration: Et('Animation', 'AnimationIteration'),
            animationstart: Et('Animation', 'AnimationStart'),
            transitionend: Et('Transition', 'TransitionEnd'),
          },
          Ct = {},
          Tt = {};
        function Pt(e) {
          if (Ct[e]) return Ct[e];
          if (!kt[e]) return e;
          var t,
            n = kt[e];
          for (t in n)
            if (n.hasOwnProperty(t) && t in Tt) return (Ct[e] = n[t]);
          return e;
        }
        d &&
          ((Tt = document.createElement('div').style),
          'AnimationEvent' in window ||
            (delete kt.animationend.animation,
            delete kt.animationiteration.animation,
            delete kt.animationstart.animation),
          'TransitionEvent' in window || delete kt.transitionend.transition);
        var Ot = Pt('animationend'),
          jt = Pt('animationiteration'),
          Lt = Pt('animationstart'),
          _t = Pt('transitionend'),
          At = new Map(),
          Mt = new Map(),
          Nt = [
            'abort',
            'abort',
            Ot,
            'animationEnd',
            jt,
            'animationIteration',
            Lt,
            'animationStart',
            'canplay',
            'canPlay',
            'canplaythrough',
            'canPlayThrough',
            'durationchange',
            'durationChange',
            'emptied',
            'emptied',
            'encrypted',
            'encrypted',
            'ended',
            'ended',
            'error',
            'error',
            'gotpointercapture',
            'gotPointerCapture',
            'load',
            'load',
            'loadeddata',
            'loadedData',
            'loadedmetadata',
            'loadedMetadata',
            'loadstart',
            'loadStart',
            'lostpointercapture',
            'lostPointerCapture',
            'playing',
            'playing',
            'progress',
            'progress',
            'seeking',
            'seeking',
            'stalled',
            'stalled',
            'suspend',
            'suspend',
            'timeupdate',
            'timeUpdate',
            _t,
            'transitionEnd',
            'waiting',
            'waiting',
          ];
        function Rt(e, t) {
          for (var n = 0; n < e.length; n += 2) {
            var r = e[n],
              i = e[n + 1];
            (i = 'on' + (i[0].toUpperCase() + i.slice(1))),
              Mt.set(r, t),
              At.set(r, i),
              u(i, [r]);
          }
        }
        (0, a.unstable_now)();
        var It = 8;
        function Dt(e) {
          if (0 !== (1 & e)) return (It = 15), 1;
          if (0 !== (2 & e)) return (It = 14), 2;
          if (0 !== (4 & e)) return (It = 13), 4;
          var t = 24 & e;
          return 0 !== t
            ? ((It = 12), t)
            : 0 !== (32 & e)
            ? ((It = 11), 32)
            : 0 !== (t = 192 & e)
            ? ((It = 10), t)
            : 0 !== (256 & e)
            ? ((It = 9), 256)
            : 0 !== (t = 3584 & e)
            ? ((It = 8), t)
            : 0 !== (4096 & e)
            ? ((It = 7), 4096)
            : 0 !== (t = 4186112 & e)
            ? ((It = 6), t)
            : 0 !== (t = 62914560 & e)
            ? ((It = 5), t)
            : 67108864 & e
            ? ((It = 4), 67108864)
            : 0 !== (134217728 & e)
            ? ((It = 3), 134217728)
            : 0 !== (t = 805306368 & e)
            ? ((It = 2), t)
            : 0 !== (1073741824 & e)
            ? ((It = 1), 1073741824)
            : ((It = 8), e);
        }
        function zt(e, t) {
          var n = e.pendingLanes;
          if (0 === n) return (It = 0);
          var r = 0,
            i = 0,
            a = e.expiredLanes,
            o = e.suspendedLanes,
            s = e.pingedLanes;
          if (0 !== a) (r = a), (i = It = 15);
          else if (0 !== (a = 134217727 & n)) {
            var l = a & ~o;
            0 !== l
              ? ((r = Dt(l)), (i = It))
              : 0 !== (s &= a) && ((r = Dt(s)), (i = It));
          } else
            0 !== (a = n & ~o)
              ? ((r = Dt(a)), (i = It))
              : 0 !== s && ((r = Dt(s)), (i = It));
          if (0 === r) return 0;
          if (
            ((r = n & (((0 > (r = 31 - qt(r)) ? 0 : 1 << r) << 1) - 1)),
            0 !== t && t !== r && 0 === (t & o))
          ) {
            if ((Dt(t), i <= It)) return t;
            It = i;
          }
          if (0 !== (t = e.entangledLanes))
            for (e = e.entanglements, t &= r; 0 < t; )
              (i = 1 << (n = 31 - qt(t))), (r |= e[n]), (t &= ~i);
          return r;
        }
        function Vt(e) {
          return 0 !== (e = -1073741825 & e.pendingLanes)
            ? e
            : 1073741824 & e
            ? 1073741824
            : 0;
        }
        function Ft(e, t) {
          switch (e) {
            case 15:
              return 1;
            case 14:
              return 2;
            case 12:
              return 0 === (e = Bt(24 & ~t)) ? Ft(10, t) : e;
            case 10:
              return 0 === (e = Bt(192 & ~t)) ? Ft(8, t) : e;
            case 8:
              return (
                0 === (e = Bt(3584 & ~t)) &&
                  0 === (e = Bt(4186112 & ~t)) &&
                  (e = 512),
                e
              );
            case 2:
              return 0 === (t = Bt(805306368 & ~t)) && (t = 268435456), t;
          }
          throw Error(o(358, e));
        }
        function Bt(e) {
          return e & -e;
        }
        function Ut(e) {
          for (var t = [], n = 0; 31 > n; n++) t.push(e);
          return t;
        }
        function $t(e, t, n) {
          e.pendingLanes |= t;
          var r = t - 1;
          (e.suspendedLanes &= r),
            (e.pingedLanes &= r),
            ((e = e.eventTimes)[(t = 31 - qt(t))] = n);
        }
        var qt = Math.clz32
            ? Math.clz32
            : function (e) {
                return 0 === e ? 32 : (31 - ((Ht(e) / Wt) | 0)) | 0;
              },
          Ht = Math.log,
          Wt = Math.LN2;
        var Gt = a.unstable_UserBlockingPriority,
          Yt = a.unstable_runWithPriority,
          Xt = !0;
        function Qt(e, t, n, r) {
          De || Re();
          var i = Jt,
            a = De;
          De = !0;
          try {
            Ne(i, e, t, n, r);
          } finally {
            (De = a) || Ve();
          }
        }
        function Kt(e, t, n, r) {
          Yt(Gt, Jt.bind(null, e, t, n, r));
        }
        function Jt(e, t, n, r) {
          var i;
          if (Xt)
            if ((i = 0 === (4 & t)) && 0 < ot.length && -1 < pt.indexOf(e))
              (e = ht(null, e, t, n, r)), ot.push(e);
            else {
              var a = Zt(e, t, n, r);
              if (null === a) i && vt(e, r);
              else {
                if (i) {
                  if (-1 < pt.indexOf(e))
                    return (e = ht(a, e, t, n, r)), void ot.push(e);
                  if (
                    (function (e, t, n, r, i) {
                      switch (t) {
                        case 'focusin':
                          return (st = mt(st, e, t, n, r, i)), !0;
                        case 'dragenter':
                          return (lt = mt(lt, e, t, n, r, i)), !0;
                        case 'mouseover':
                          return (ut = mt(ut, e, t, n, r, i)), !0;
                        case 'pointerover':
                          var a = i.pointerId;
                          return (
                            ct.set(a, mt(ct.get(a) || null, e, t, n, r, i)), !0
                          );
                        case 'gotpointercapture':
                          return (
                            (a = i.pointerId),
                            dt.set(a, mt(dt.get(a) || null, e, t, n, r, i)),
                            !0
                          );
                      }
                      return !1;
                    })(a, e, t, n, r)
                  )
                    return;
                  vt(e, r);
                }
                Rr(e, t, r, null, n);
              }
            }
        }
        function Zt(e, t, n, r) {
          var i = Te(r);
          if (null !== (i = ni(i))) {
            var a = Qe(i);
            if (null === a) i = null;
            else {
              var o = a.tag;
              if (13 === o) {
                if (null !== (i = Ke(a))) return i;
                i = null;
              } else if (3 === o) {
                if (a.stateNode.hydrate)
                  return 3 === a.tag ? a.stateNode.containerInfo : null;
                i = null;
              } else a !== i && (i = null);
            }
          }
          return Rr(e, t, r, i, n), null;
        }
        var en = null,
          tn = null,
          nn = null;
        function rn() {
          if (nn) return nn;
          var e,
            t,
            n = tn,
            r = n.length,
            i = 'value' in en ? en.value : en.textContent,
            a = i.length;
          for (e = 0; e < r && n[e] === i[e]; e++);
          var o = r - e;
          for (t = 1; t <= o && n[r - t] === i[a - t]; t++);
          return (nn = i.slice(e, 1 < t ? 1 - t : void 0));
        }
        function an(e) {
          var t = e.keyCode;
          return (
            'charCode' in e
              ? 0 === (e = e.charCode) && 13 === t && (e = 13)
              : (e = t),
            10 === e && (e = 13),
            32 <= e || 13 === e ? e : 0
          );
        }
        function on() {
          return !0;
        }
        function sn() {
          return !1;
        }
        function ln(e) {
          function t(t, n, r, i, a) {
            for (var o in ((this._reactName = t),
            (this._targetInst = r),
            (this.type = n),
            (this.nativeEvent = i),
            (this.target = a),
            (this.currentTarget = null),
            e))
              e.hasOwnProperty(o) && ((t = e[o]), (this[o] = t ? t(i) : i[o]));
            return (
              (this.isDefaultPrevented = (
                null != i.defaultPrevented
                  ? i.defaultPrevented
                  : !1 === i.returnValue
              )
                ? on
                : sn),
              (this.isPropagationStopped = sn),
              this
            );
          }
          return (
            i(t.prototype, {
              preventDefault: function () {
                this.defaultPrevented = !0;
                var e = this.nativeEvent;
                e &&
                  (e.preventDefault
                    ? e.preventDefault()
                    : 'unknown' !== typeof e.returnValue &&
                      (e.returnValue = !1),
                  (this.isDefaultPrevented = on));
              },
              stopPropagation: function () {
                var e = this.nativeEvent;
                e &&
                  (e.stopPropagation
                    ? e.stopPropagation()
                    : 'unknown' !== typeof e.cancelBubble &&
                      (e.cancelBubble = !0),
                  (this.isPropagationStopped = on));
              },
              persist: function () {},
              isPersistent: on,
            }),
            t
          );
        }
        var un,
          cn,
          dn,
          fn = {
            eventPhase: 0,
            bubbles: 0,
            cancelable: 0,
            timeStamp: function (e) {
              return e.timeStamp || Date.now();
            },
            defaultPrevented: 0,
            isTrusted: 0,
          },
          pn = ln(fn),
          hn = i({}, fn, { view: 0, detail: 0 }),
          vn = ln(hn),
          mn = i({}, hn, {
            screenX: 0,
            screenY: 0,
            clientX: 0,
            clientY: 0,
            pageX: 0,
            pageY: 0,
            ctrlKey: 0,
            shiftKey: 0,
            altKey: 0,
            metaKey: 0,
            getModifierState: On,
            button: 0,
            buttons: 0,
            relatedTarget: function (e) {
              return void 0 === e.relatedTarget
                ? e.fromElement === e.srcElement
                  ? e.toElement
                  : e.fromElement
                : e.relatedTarget;
            },
            movementX: function (e) {
              return 'movementX' in e
                ? e.movementX
                : (e !== dn &&
                    (dn && 'mousemove' === e.type
                      ? ((un = e.screenX - dn.screenX),
                        (cn = e.screenY - dn.screenY))
                      : (cn = un = 0),
                    (dn = e)),
                  un);
            },
            movementY: function (e) {
              return 'movementY' in e ? e.movementY : cn;
            },
          }),
          gn = ln(mn),
          yn = ln(i({}, mn, { dataTransfer: 0 })),
          bn = ln(i({}, hn, { relatedTarget: 0 })),
          wn = ln(
            i({}, fn, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }),
          ),
          xn = i({}, fn, {
            clipboardData: function (e) {
              return 'clipboardData' in e
                ? e.clipboardData
                : window.clipboardData;
            },
          }),
          Sn = ln(xn),
          En = ln(i({}, fn, { data: 0 })),
          kn = {
            Esc: 'Escape',
            Spacebar: ' ',
            Left: 'ArrowLeft',
            Up: 'ArrowUp',
            Right: 'ArrowRight',
            Down: 'ArrowDown',
            Del: 'Delete',
            Win: 'OS',
            Menu: 'ContextMenu',
            Apps: 'ContextMenu',
            Scroll: 'ScrollLock',
            MozPrintableKey: 'Unidentified',
          },
          Cn = {
            8: 'Backspace',
            9: 'Tab',
            12: 'Clear',
            13: 'Enter',
            16: 'Shift',
            17: 'Control',
            18: 'Alt',
            19: 'Pause',
            20: 'CapsLock',
            27: 'Escape',
            32: ' ',
            33: 'PageUp',
            34: 'PageDown',
            35: 'End',
            36: 'Home',
            37: 'ArrowLeft',
            38: 'ArrowUp',
            39: 'ArrowRight',
            40: 'ArrowDown',
            45: 'Insert',
            46: 'Delete',
            112: 'F1',
            113: 'F2',
            114: 'F3',
            115: 'F4',
            116: 'F5',
            117: 'F6',
            118: 'F7',
            119: 'F8',
            120: 'F9',
            121: 'F10',
            122: 'F11',
            123: 'F12',
            144: 'NumLock',
            145: 'ScrollLock',
            224: 'Meta',
          },
          Tn = {
            Alt: 'altKey',
            Control: 'ctrlKey',
            Meta: 'metaKey',
            Shift: 'shiftKey',
          };
        function Pn(e) {
          var t = this.nativeEvent;
          return t.getModifierState
            ? t.getModifierState(e)
            : !!(e = Tn[e]) && !!t[e];
        }
        function On() {
          return Pn;
        }
        var jn = i({}, hn, {
            key: function (e) {
              if (e.key) {
                var t = kn[e.key] || e.key;
                if ('Unidentified' !== t) return t;
              }
              return 'keypress' === e.type
                ? 13 === (e = an(e))
                  ? 'Enter'
                  : String.fromCharCode(e)
                : 'keydown' === e.type || 'keyup' === e.type
                ? Cn[e.keyCode] || 'Unidentified'
                : '';
            },
            code: 0,
            location: 0,
            ctrlKey: 0,
            shiftKey: 0,
            altKey: 0,
            metaKey: 0,
            repeat: 0,
            locale: 0,
            getModifierState: On,
            charCode: function (e) {
              return 'keypress' === e.type ? an(e) : 0;
            },
            keyCode: function (e) {
              return 'keydown' === e.type || 'keyup' === e.type ? e.keyCode : 0;
            },
            which: function (e) {
              return 'keypress' === e.type
                ? an(e)
                : 'keydown' === e.type || 'keyup' === e.type
                ? e.keyCode
                : 0;
            },
          }),
          Ln = ln(jn),
          _n = ln(
            i({}, mn, {
              pointerId: 0,
              width: 0,
              height: 0,
              pressure: 0,
              tangentialPressure: 0,
              tiltX: 0,
              tiltY: 0,
              twist: 0,
              pointerType: 0,
              isPrimary: 0,
            }),
          ),
          An = ln(
            i({}, hn, {
              touches: 0,
              targetTouches: 0,
              changedTouches: 0,
              altKey: 0,
              metaKey: 0,
              ctrlKey: 0,
              shiftKey: 0,
              getModifierState: On,
            }),
          ),
          Mn = ln(
            i({}, fn, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }),
          ),
          Nn = i({}, mn, {
            deltaX: function (e) {
              return 'deltaX' in e
                ? e.deltaX
                : 'wheelDeltaX' in e
                ? -e.wheelDeltaX
                : 0;
            },
            deltaY: function (e) {
              return 'deltaY' in e
                ? e.deltaY
                : 'wheelDeltaY' in e
                ? -e.wheelDeltaY
                : 'wheelDelta' in e
                ? -e.wheelDelta
                : 0;
            },
            deltaZ: 0,
            deltaMode: 0,
          }),
          Rn = ln(Nn),
          In = [9, 13, 27, 32],
          Dn = d && 'CompositionEvent' in window,
          zn = null;
        d && 'documentMode' in document && (zn = document.documentMode);
        var Vn = d && 'TextEvent' in window && !zn,
          Fn = d && (!Dn || (zn && 8 < zn && 11 >= zn)),
          Bn = String.fromCharCode(32),
          Un = !1;
        function $n(e, t) {
          switch (e) {
            case 'keyup':
              return -1 !== In.indexOf(t.keyCode);
            case 'keydown':
              return 229 !== t.keyCode;
            case 'keypress':
            case 'mousedown':
            case 'focusout':
              return !0;
            default:
              return !1;
          }
        }
        function qn(e) {
          return 'object' === typeof (e = e.detail) && 'data' in e
            ? e.data
            : null;
        }
        var Hn = !1;
        var Wn = {
          color: !0,
          date: !0,
          datetime: !0,
          'datetime-local': !0,
          email: !0,
          month: !0,
          number: !0,
          password: !0,
          range: !0,
          search: !0,
          tel: !0,
          text: !0,
          time: !0,
          url: !0,
          week: !0,
        };
        function Gn(e) {
          var t = e && e.nodeName && e.nodeName.toLowerCase();
          return 'input' === t ? !!Wn[e.type] : 'textarea' === t;
        }
        function Yn(e, t, n, r) {
          _e(r),
            0 < (t = Dr(t, 'onChange')).length &&
              ((n = new pn('onChange', 'change', null, n, r)),
              e.push({ event: n, listeners: t }));
        }
        var Xn = null,
          Qn = null;
        function Kn(e) {
          jr(e, 0);
        }
        function Jn(e) {
          if (K(ii(e))) return e;
        }
        function Zn(e, t) {
          if ('change' === e) return t;
        }
        var er = !1;
        if (d) {
          var tr;
          if (d) {
            var nr = 'oninput' in document;
            if (!nr) {
              var rr = document.createElement('div');
              rr.setAttribute('oninput', 'return;'),
                (nr = 'function' === typeof rr.oninput);
            }
            tr = nr;
          } else tr = !1;
          er = tr && (!document.documentMode || 9 < document.documentMode);
        }
        function ir() {
          Xn && (Xn.detachEvent('onpropertychange', ar), (Qn = Xn = null));
        }
        function ar(e) {
          if ('value' === e.propertyName && Jn(Qn)) {
            var t = [];
            if ((Yn(t, Qn, e, Te(e)), (e = Kn), De)) e(t);
            else {
              De = !0;
              try {
                Me(e, t);
              } finally {
                (De = !1), Ve();
              }
            }
          }
        }
        function or(e, t, n) {
          'focusin' === e
            ? (ir(), (Qn = n), (Xn = t).attachEvent('onpropertychange', ar))
            : 'focusout' === e && ir();
        }
        function sr(e) {
          if ('selectionchange' === e || 'keyup' === e || 'keydown' === e)
            return Jn(Qn);
        }
        function lr(e, t) {
          if ('click' === e) return Jn(t);
        }
        function ur(e, t) {
          if ('input' === e || 'change' === e) return Jn(t);
        }
        var cr =
            'function' === typeof Object.is
              ? Object.is
              : function (e, t) {
                  return (
                    (e === t && (0 !== e || 1 / e === 1 / t)) ||
                    (e !== e && t !== t)
                  );
                },
          dr = Object.prototype.hasOwnProperty;
        function fr(e, t) {
          if (cr(e, t)) return !0;
          if (
            'object' !== typeof e ||
            null === e ||
            'object' !== typeof t ||
            null === t
          )
            return !1;
          var n = Object.keys(e),
            r = Object.keys(t);
          if (n.length !== r.length) return !1;
          for (r = 0; r < n.length; r++)
            if (!dr.call(t, n[r]) || !cr(e[n[r]], t[n[r]])) return !1;
          return !0;
        }
        function pr(e) {
          for (; e && e.firstChild; ) e = e.firstChild;
          return e;
        }
        function hr(e, t) {
          var n,
            r = pr(e);
          for (e = 0; r; ) {
            if (3 === r.nodeType) {
              if (((n = e + r.textContent.length), e <= t && n >= t))
                return { node: r, offset: t - e };
              e = n;
            }
            e: {
              for (; r; ) {
                if (r.nextSibling) {
                  r = r.nextSibling;
                  break e;
                }
                r = r.parentNode;
              }
              r = void 0;
            }
            r = pr(r);
          }
        }
        function vr(e, t) {
          return (
            !(!e || !t) &&
            (e === t ||
              ((!e || 3 !== e.nodeType) &&
                (t && 3 === t.nodeType
                  ? vr(e, t.parentNode)
                  : 'contains' in e
                  ? e.contains(t)
                  : !!e.compareDocumentPosition &&
                    !!(16 & e.compareDocumentPosition(t)))))
          );
        }
        function mr() {
          for (var e = window, t = J(); t instanceof e.HTMLIFrameElement; ) {
            try {
              var n = 'string' === typeof t.contentWindow.location.href;
            } catch (r) {
              n = !1;
            }
            if (!n) break;
            t = J((e = t.contentWindow).document);
          }
          return t;
        }
        function gr(e) {
          var t = e && e.nodeName && e.nodeName.toLowerCase();
          return (
            t &&
            (('input' === t &&
              ('text' === e.type ||
                'search' === e.type ||
                'tel' === e.type ||
                'url' === e.type ||
                'password' === e.type)) ||
              'textarea' === t ||
              'true' === e.contentEditable)
          );
        }
        var yr = d && 'documentMode' in document && 11 >= document.documentMode,
          br = null,
          wr = null,
          xr = null,
          Sr = !1;
        function Er(e, t, n) {
          var r =
            n.window === n
              ? n.document
              : 9 === n.nodeType
              ? n
              : n.ownerDocument;
          Sr ||
            null == br ||
            br !== J(r) ||
            ('selectionStart' in (r = br) && gr(r)
              ? (r = { start: r.selectionStart, end: r.selectionEnd })
              : (r = {
                  anchorNode: (r = (
                    (r.ownerDocument && r.ownerDocument.defaultView) ||
                    window
                  ).getSelection()).anchorNode,
                  anchorOffset: r.anchorOffset,
                  focusNode: r.focusNode,
                  focusOffset: r.focusOffset,
                }),
            (xr && fr(xr, r)) ||
              ((xr = r),
              0 < (r = Dr(wr, 'onSelect')).length &&
                ((t = new pn('onSelect', 'select', null, t, n)),
                e.push({ event: t, listeners: r }),
                (t.target = br))));
        }
        Rt(
          'cancel cancel click click close close contextmenu contextMenu copy copy cut cut auxclick auxClick dblclick doubleClick dragend dragEnd dragstart dragStart drop drop focusin focus focusout blur input input invalid invalid keydown keyDown keypress keyPress keyup keyUp mousedown mouseDown mouseup mouseUp paste paste pause pause play play pointercancel pointerCancel pointerdown pointerDown pointerup pointerUp ratechange rateChange reset reset seeked seeked submit submit touchcancel touchCancel touchend touchEnd touchstart touchStart volumechange volumeChange'.split(
            ' ',
          ),
          0,
        ),
          Rt(
            'drag drag dragenter dragEnter dragexit dragExit dragleave dragLeave dragover dragOver mousemove mouseMove mouseout mouseOut mouseover mouseOver pointermove pointerMove pointerout pointerOut pointerover pointerOver scroll scroll toggle toggle touchmove touchMove wheel wheel'.split(
              ' ',
            ),
            1,
          ),
          Rt(Nt, 2);
        for (
          var kr =
              'change selectionchange textInput compositionstart compositionend compositionupdate'.split(
                ' ',
              ),
            Cr = 0;
          Cr < kr.length;
          Cr++
        )
          Mt.set(kr[Cr], 0);
        c('onMouseEnter', ['mouseout', 'mouseover']),
          c('onMouseLeave', ['mouseout', 'mouseover']),
          c('onPointerEnter', ['pointerout', 'pointerover']),
          c('onPointerLeave', ['pointerout', 'pointerover']),
          u(
            'onChange',
            'change click focusin focusout input keydown keyup selectionchange'.split(
              ' ',
            ),
          ),
          u(
            'onSelect',
            'focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange'.split(
              ' ',
            ),
          ),
          u('onBeforeInput', [
            'compositionend',
            'keypress',
            'textInput',
            'paste',
          ]),
          u(
            'onCompositionEnd',
            'compositionend focusout keydown keypress keyup mousedown'.split(
              ' ',
            ),
          ),
          u(
            'onCompositionStart',
            'compositionstart focusout keydown keypress keyup mousedown'.split(
              ' ',
            ),
          ),
          u(
            'onCompositionUpdate',
            'compositionupdate focusout keydown keypress keyup mousedown'.split(
              ' ',
            ),
          );
        var Tr =
            'abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange seeked seeking stalled suspend timeupdate volumechange waiting'.split(
              ' ',
            ),
          Pr = new Set(
            'cancel close invalid load scroll toggle'.split(' ').concat(Tr),
          );
        function Or(e, t, n) {
          var r = e.type || 'unknown-event';
          (e.currentTarget = n),
            (function (e, t, n, r, i, a, s, l, u) {
              if ((Xe.apply(this, arguments), qe)) {
                if (!qe) throw Error(o(198));
                var c = He;
                (qe = !1), (He = null), We || ((We = !0), (Ge = c));
              }
            })(r, t, void 0, e),
            (e.currentTarget = null);
        }
        function jr(e, t) {
          t = 0 !== (4 & t);
          for (var n = 0; n < e.length; n++) {
            var r = e[n],
              i = r.event;
            r = r.listeners;
            e: {
              var a = void 0;
              if (t)
                for (var o = r.length - 1; 0 <= o; o--) {
                  var s = r[o],
                    l = s.instance,
                    u = s.currentTarget;
                  if (((s = s.listener), l !== a && i.isPropagationStopped()))
                    break e;
                  Or(i, s, u), (a = l);
                }
              else
                for (o = 0; o < r.length; o++) {
                  if (
                    ((l = (s = r[o]).instance),
                    (u = s.currentTarget),
                    (s = s.listener),
                    l !== a && i.isPropagationStopped())
                  )
                    break e;
                  Or(i, s, u), (a = l);
                }
            }
          }
          if (We) throw ((e = Ge), (We = !1), (Ge = null), e);
        }
        function Lr(e, t) {
          var n = oi(t),
            r = e + '__bubble';
          n.has(r) || (Nr(t, e, 2, !1), n.add(r));
        }
        var _r = '_reactListening' + Math.random().toString(36).slice(2);
        function Ar(e) {
          e[_r] ||
            ((e[_r] = !0),
            s.forEach(function (t) {
              Pr.has(t) || Mr(t, !1, e, null), Mr(t, !0, e, null);
            }));
        }
        function Mr(e, t, n, r) {
          var i =
              4 < arguments.length && void 0 !== arguments[4]
                ? arguments[4]
                : 0,
            a = n;
          if (
            ('selectionchange' === e &&
              9 !== n.nodeType &&
              (a = n.ownerDocument),
            null !== r && !t && Pr.has(e))
          ) {
            if ('scroll' !== e) return;
            (i |= 2), (a = r);
          }
          var o = oi(a),
            s = e + '__' + (t ? 'capture' : 'bubble');
          o.has(s) || (t && (i |= 4), Nr(a, e, i, t), o.add(s));
        }
        function Nr(e, t, n, r) {
          var i = Mt.get(t);
          switch (void 0 === i ? 2 : i) {
            case 0:
              i = Qt;
              break;
            case 1:
              i = Kt;
              break;
            default:
              i = Jt;
          }
          (n = i.bind(null, t, n, e)),
            (i = void 0),
            !Be ||
              ('touchstart' !== t && 'touchmove' !== t && 'wheel' !== t) ||
              (i = !0),
            r
              ? void 0 !== i
                ? e.addEventListener(t, n, { capture: !0, passive: i })
                : e.addEventListener(t, n, !0)
              : void 0 !== i
              ? e.addEventListener(t, n, { passive: i })
              : e.addEventListener(t, n, !1);
        }
        function Rr(e, t, n, r, i) {
          var a = r;
          if (0 === (1 & t) && 0 === (2 & t) && null !== r)
            e: for (;;) {
              if (null === r) return;
              var o = r.tag;
              if (3 === o || 4 === o) {
                var s = r.stateNode.containerInfo;
                if (s === i || (8 === s.nodeType && s.parentNode === i)) break;
                if (4 === o)
                  for (o = r.return; null !== o; ) {
                    var l = o.tag;
                    if (
                      (3 === l || 4 === l) &&
                      ((l = o.stateNode.containerInfo) === i ||
                        (8 === l.nodeType && l.parentNode === i))
                    )
                      return;
                    o = o.return;
                  }
                for (; null !== s; ) {
                  if (null === (o = ni(s))) return;
                  if (5 === (l = o.tag) || 6 === l) {
                    r = a = o;
                    continue e;
                  }
                  s = s.parentNode;
                }
              }
              r = r.return;
            }
          !(function (e, t, n) {
            if (ze) return e(t, n);
            ze = !0;
            try {
              Ie(e, t, n);
            } finally {
              (ze = !1), Ve();
            }
          })(function () {
            var r = a,
              i = Te(n),
              o = [];
            e: {
              var s = At.get(e);
              if (void 0 !== s) {
                var l = pn,
                  u = e;
                switch (e) {
                  case 'keypress':
                    if (0 === an(n)) break e;
                  case 'keydown':
                  case 'keyup':
                    l = Ln;
                    break;
                  case 'focusin':
                    (u = 'focus'), (l = bn);
                    break;
                  case 'focusout':
                    (u = 'blur'), (l = bn);
                    break;
                  case 'beforeblur':
                  case 'afterblur':
                    l = bn;
                    break;
                  case 'click':
                    if (2 === n.button) break e;
                  case 'auxclick':
                  case 'dblclick':
                  case 'mousedown':
                  case 'mousemove':
                  case 'mouseup':
                  case 'mouseout':
                  case 'mouseover':
                  case 'contextmenu':
                    l = gn;
                    break;
                  case 'drag':
                  case 'dragend':
                  case 'dragenter':
                  case 'dragexit':
                  case 'dragleave':
                  case 'dragover':
                  case 'dragstart':
                  case 'drop':
                    l = yn;
                    break;
                  case 'touchcancel':
                  case 'touchend':
                  case 'touchmove':
                  case 'touchstart':
                    l = An;
                    break;
                  case Ot:
                  case jt:
                  case Lt:
                    l = wn;
                    break;
                  case _t:
                    l = Mn;
                    break;
                  case 'scroll':
                    l = vn;
                    break;
                  case 'wheel':
                    l = Rn;
                    break;
                  case 'copy':
                  case 'cut':
                  case 'paste':
                    l = Sn;
                    break;
                  case 'gotpointercapture':
                  case 'lostpointercapture':
                  case 'pointercancel':
                  case 'pointerdown':
                  case 'pointermove':
                  case 'pointerout':
                  case 'pointerover':
                  case 'pointerup':
                    l = _n;
                }
                var c = 0 !== (4 & t),
                  d = !c && 'scroll' === e,
                  f = c ? (null !== s ? s + 'Capture' : null) : s;
                c = [];
                for (var p, h = r; null !== h; ) {
                  var v = (p = h).stateNode;
                  if (
                    (5 === p.tag &&
                      null !== v &&
                      ((p = v),
                      null !== f &&
                        null != (v = Fe(h, f)) &&
                        c.push(Ir(h, v, p))),
                    d)
                  )
                    break;
                  h = h.return;
                }
                0 < c.length &&
                  ((s = new l(s, u, null, n, i)),
                  o.push({ event: s, listeners: c }));
              }
            }
            if (0 === (7 & t)) {
              if (
                ((l = 'mouseout' === e || 'pointerout' === e),
                (!(s = 'mouseover' === e || 'pointerover' === e) ||
                  0 !== (16 & t) ||
                  !(u = n.relatedTarget || n.fromElement) ||
                  (!ni(u) && !u[ei])) &&
                  (l || s) &&
                  ((s =
                    i.window === i
                      ? i
                      : (s = i.ownerDocument)
                      ? s.defaultView || s.parentWindow
                      : window),
                  l
                    ? ((l = r),
                      null !==
                        (u = (u = n.relatedTarget || n.toElement)
                          ? ni(u)
                          : null) &&
                        (u !== (d = Qe(u)) || (5 !== u.tag && 6 !== u.tag)) &&
                        (u = null))
                    : ((l = null), (u = r)),
                  l !== u))
              ) {
                if (
                  ((c = gn),
                  (v = 'onMouseLeave'),
                  (f = 'onMouseEnter'),
                  (h = 'mouse'),
                  ('pointerout' !== e && 'pointerover' !== e) ||
                    ((c = _n),
                    (v = 'onPointerLeave'),
                    (f = 'onPointerEnter'),
                    (h = 'pointer')),
                  (d = null == l ? s : ii(l)),
                  (p = null == u ? s : ii(u)),
                  ((s = new c(v, h + 'leave', l, n, i)).target = d),
                  (s.relatedTarget = p),
                  (v = null),
                  ni(i) === r &&
                    (((c = new c(f, h + 'enter', u, n, i)).target = p),
                    (c.relatedTarget = d),
                    (v = c)),
                  (d = v),
                  l && u)
                )
                  e: {
                    for (f = u, h = 0, p = c = l; p; p = zr(p)) h++;
                    for (p = 0, v = f; v; v = zr(v)) p++;
                    for (; 0 < h - p; ) (c = zr(c)), h--;
                    for (; 0 < p - h; ) (f = zr(f)), p--;
                    for (; h--; ) {
                      if (c === f || (null !== f && c === f.alternate)) break e;
                      (c = zr(c)), (f = zr(f));
                    }
                    c = null;
                  }
                else c = null;
                null !== l && Vr(o, s, l, c, !1),
                  null !== u && null !== d && Vr(o, d, u, c, !0);
              }
              if (
                'select' ===
                  (l =
                    (s = r ? ii(r) : window).nodeName &&
                    s.nodeName.toLowerCase()) ||
                ('input' === l && 'file' === s.type)
              )
                var m = Zn;
              else if (Gn(s))
                if (er) m = ur;
                else {
                  m = sr;
                  var g = or;
                }
              else
                (l = s.nodeName) &&
                  'input' === l.toLowerCase() &&
                  ('checkbox' === s.type || 'radio' === s.type) &&
                  (m = lr);
              switch (
                (m && (m = m(e, r))
                  ? Yn(o, m, n, i)
                  : (g && g(e, s, r),
                    'focusout' === e &&
                      (g = s._wrapperState) &&
                      g.controlled &&
                      'number' === s.type &&
                      ie(s, 'number', s.value)),
                (g = r ? ii(r) : window),
                e)
              ) {
                case 'focusin':
                  (Gn(g) || 'true' === g.contentEditable) &&
                    ((br = g), (wr = r), (xr = null));
                  break;
                case 'focusout':
                  xr = wr = br = null;
                  break;
                case 'mousedown':
                  Sr = !0;
                  break;
                case 'contextmenu':
                case 'mouseup':
                case 'dragend':
                  (Sr = !1), Er(o, n, i);
                  break;
                case 'selectionchange':
                  if (yr) break;
                case 'keydown':
                case 'keyup':
                  Er(o, n, i);
              }
              var y;
              if (Dn)
                e: {
                  switch (e) {
                    case 'compositionstart':
                      var b = 'onCompositionStart';
                      break e;
                    case 'compositionend':
                      b = 'onCompositionEnd';
                      break e;
                    case 'compositionupdate':
                      b = 'onCompositionUpdate';
                      break e;
                  }
                  b = void 0;
                }
              else
                Hn
                  ? $n(e, n) && (b = 'onCompositionEnd')
                  : 'keydown' === e &&
                    229 === n.keyCode &&
                    (b = 'onCompositionStart');
              b &&
                (Fn &&
                  'ko' !== n.locale &&
                  (Hn || 'onCompositionStart' !== b
                    ? 'onCompositionEnd' === b && Hn && (y = rn())
                    : ((tn = 'value' in (en = i) ? en.value : en.textContent),
                      (Hn = !0))),
                0 < (g = Dr(r, b)).length &&
                  ((b = new En(b, e, null, n, i)),
                  o.push({ event: b, listeners: g }),
                  y ? (b.data = y) : null !== (y = qn(n)) && (b.data = y))),
                (y = Vn
                  ? (function (e, t) {
                      switch (e) {
                        case 'compositionend':
                          return qn(t);
                        case 'keypress':
                          return 32 !== t.which ? null : ((Un = !0), Bn);
                        case 'textInput':
                          return (e = t.data) === Bn && Un ? null : e;
                        default:
                          return null;
                      }
                    })(e, n)
                  : (function (e, t) {
                      if (Hn)
                        return 'compositionend' === e || (!Dn && $n(e, t))
                          ? ((e = rn()), (nn = tn = en = null), (Hn = !1), e)
                          : null;
                      switch (e) {
                        case 'paste':
                        default:
                          return null;
                        case 'keypress':
                          if (
                            !(t.ctrlKey || t.altKey || t.metaKey) ||
                            (t.ctrlKey && t.altKey)
                          ) {
                            if (t.char && 1 < t.char.length) return t.char;
                            if (t.which) return String.fromCharCode(t.which);
                          }
                          return null;
                        case 'compositionend':
                          return Fn && 'ko' !== t.locale ? null : t.data;
                      }
                    })(e, n)) &&
                  0 < (r = Dr(r, 'onBeforeInput')).length &&
                  ((i = new En('onBeforeInput', 'beforeinput', null, n, i)),
                  o.push({ event: i, listeners: r }),
                  (i.data = y));
            }
            jr(o, t);
          });
        }
        function Ir(e, t, n) {
          return { instance: e, listener: t, currentTarget: n };
        }
        function Dr(e, t) {
          for (var n = t + 'Capture', r = []; null !== e; ) {
            var i = e,
              a = i.stateNode;
            5 === i.tag &&
              null !== a &&
              ((i = a),
              null != (a = Fe(e, n)) && r.unshift(Ir(e, a, i)),
              null != (a = Fe(e, t)) && r.push(Ir(e, a, i))),
              (e = e.return);
          }
          return r;
        }
        function zr(e) {
          if (null === e) return null;
          do {
            e = e.return;
          } while (e && 5 !== e.tag);
          return e || null;
        }
        function Vr(e, t, n, r, i) {
          for (var a = t._reactName, o = []; null !== n && n !== r; ) {
            var s = n,
              l = s.alternate,
              u = s.stateNode;
            if (null !== l && l === r) break;
            5 === s.tag &&
              null !== u &&
              ((s = u),
              i
                ? null != (l = Fe(n, a)) && o.unshift(Ir(n, l, s))
                : i || (null != (l = Fe(n, a)) && o.push(Ir(n, l, s)))),
              (n = n.return);
          }
          0 !== o.length && e.push({ event: t, listeners: o });
        }
        function Fr() {}
        var Br = null,
          Ur = null;
        function $r(e, t) {
          switch (e) {
            case 'button':
            case 'input':
            case 'select':
            case 'textarea':
              return !!t.autoFocus;
          }
          return !1;
        }
        function qr(e, t) {
          return (
            'textarea' === e ||
            'option' === e ||
            'noscript' === e ||
            'string' === typeof t.children ||
            'number' === typeof t.children ||
            ('object' === typeof t.dangerouslySetInnerHTML &&
              null !== t.dangerouslySetInnerHTML &&
              null != t.dangerouslySetInnerHTML.__html)
          );
        }
        var Hr = 'function' === typeof setTimeout ? setTimeout : void 0,
          Wr = 'function' === typeof clearTimeout ? clearTimeout : void 0;
        function Gr(e) {
          1 === e.nodeType
            ? (e.textContent = '')
            : 9 === e.nodeType && null != (e = e.body) && (e.textContent = '');
        }
        function Yr(e) {
          for (; null != e; e = e.nextSibling) {
            var t = e.nodeType;
            if (1 === t || 3 === t) break;
          }
          return e;
        }
        function Xr(e) {
          e = e.previousSibling;
          for (var t = 0; e; ) {
            if (8 === e.nodeType) {
              var n = e.data;
              if ('$' === n || '$!' === n || '$?' === n) {
                if (0 === t) return e;
                t--;
              } else '/$' === n && t++;
            }
            e = e.previousSibling;
          }
          return null;
        }
        var Qr = 0;
        var Kr = Math.random().toString(36).slice(2),
          Jr = '__reactFiber$' + Kr,
          Zr = '__reactProps$' + Kr,
          ei = '__reactContainer$' + Kr,
          ti = '__reactEvents$' + Kr;
        function ni(e) {
          var t = e[Jr];
          if (t) return t;
          for (var n = e.parentNode; n; ) {
            if ((t = n[ei] || n[Jr])) {
              if (
                ((n = t.alternate),
                null !== t.child || (null !== n && null !== n.child))
              )
                for (e = Xr(e); null !== e; ) {
                  if ((n = e[Jr])) return n;
                  e = Xr(e);
                }
              return t;
            }
            n = (e = n).parentNode;
          }
          return null;
        }
        function ri(e) {
          return !(e = e[Jr] || e[ei]) ||
            (5 !== e.tag && 6 !== e.tag && 13 !== e.tag && 3 !== e.tag)
            ? null
            : e;
        }
        function ii(e) {
          if (5 === e.tag || 6 === e.tag) return e.stateNode;
          throw Error(o(33));
        }
        function ai(e) {
          return e[Zr] || null;
        }
        function oi(e) {
          var t = e[ti];
          return void 0 === t && (t = e[ti] = new Set()), t;
        }
        var si = [],
          li = -1;
        function ui(e) {
          return { current: e };
        }
        function ci(e) {
          0 > li || ((e.current = si[li]), (si[li] = null), li--);
        }
        function di(e, t) {
          li++, (si[li] = e.current), (e.current = t);
        }
        var fi = {},
          pi = ui(fi),
          hi = ui(!1),
          vi = fi;
        function mi(e, t) {
          var n = e.type.contextTypes;
          if (!n) return fi;
          var r = e.stateNode;
          if (r && r.__reactInternalMemoizedUnmaskedChildContext === t)
            return r.__reactInternalMemoizedMaskedChildContext;
          var i,
            a = {};
          for (i in n) a[i] = t[i];
          return (
            r &&
              (((e = e.stateNode).__reactInternalMemoizedUnmaskedChildContext =
                t),
              (e.__reactInternalMemoizedMaskedChildContext = a)),
            a
          );
        }
        function gi(e) {
          return null !== (e = e.childContextTypes) && void 0 !== e;
        }
        function yi() {
          ci(hi), ci(pi);
        }
        function bi(e, t, n) {
          if (pi.current !== fi) throw Error(o(168));
          di(pi, t), di(hi, n);
        }
        function wi(e, t, n) {
          var r = e.stateNode;
          if (
            ((e = t.childContextTypes), 'function' !== typeof r.getChildContext)
          )
            return n;
          for (var a in (r = r.getChildContext()))
            if (!(a in e)) throw Error(o(108, G(t) || 'Unknown', a));
          return i({}, n, r);
        }
        function xi(e) {
          return (
            (e =
              ((e = e.stateNode) &&
                e.__reactInternalMemoizedMergedChildContext) ||
              fi),
            (vi = pi.current),
            di(pi, e),
            di(hi, hi.current),
            !0
          );
        }
        function Si(e, t, n) {
          var r = e.stateNode;
          if (!r) throw Error(o(169));
          n
            ? ((e = wi(e, t, vi)),
              (r.__reactInternalMemoizedMergedChildContext = e),
              ci(hi),
              ci(pi),
              di(pi, e))
            : ci(hi),
            di(hi, n);
        }
        var Ei = null,
          ki = null,
          Ci = a.unstable_runWithPriority,
          Ti = a.unstable_scheduleCallback,
          Pi = a.unstable_cancelCallback,
          Oi = a.unstable_shouldYield,
          ji = a.unstable_requestPaint,
          Li = a.unstable_now,
          _i = a.unstable_getCurrentPriorityLevel,
          Ai = a.unstable_ImmediatePriority,
          Mi = a.unstable_UserBlockingPriority,
          Ni = a.unstable_NormalPriority,
          Ri = a.unstable_LowPriority,
          Ii = a.unstable_IdlePriority,
          Di = {},
          zi = void 0 !== ji ? ji : function () {},
          Vi = null,
          Fi = null,
          Bi = !1,
          Ui = Li(),
          $i =
            1e4 > Ui
              ? Li
              : function () {
                  return Li() - Ui;
                };
        function qi() {
          switch (_i()) {
            case Ai:
              return 99;
            case Mi:
              return 98;
            case Ni:
              return 97;
            case Ri:
              return 96;
            case Ii:
              return 95;
            default:
              throw Error(o(332));
          }
        }
        function Hi(e) {
          switch (e) {
            case 99:
              return Ai;
            case 98:
              return Mi;
            case 97:
              return Ni;
            case 96:
              return Ri;
            case 95:
              return Ii;
            default:
              throw Error(o(332));
          }
        }
        function Wi(e, t) {
          return (e = Hi(e)), Ci(e, t);
        }
        function Gi(e, t, n) {
          return (e = Hi(e)), Ti(e, t, n);
        }
        function Yi() {
          if (null !== Fi) {
            var e = Fi;
            (Fi = null), Pi(e);
          }
          Xi();
        }
        function Xi() {
          if (!Bi && null !== Vi) {
            Bi = !0;
            var e = 0;
            try {
              var t = Vi;
              Wi(99, function () {
                for (; e < t.length; e++) {
                  var n = t[e];
                  do {
                    n = n(!0);
                  } while (null !== n);
                }
              }),
                (Vi = null);
            } catch (n) {
              throw (null !== Vi && (Vi = Vi.slice(e + 1)), Ti(Ai, Yi), n);
            } finally {
              Bi = !1;
            }
          }
        }
        var Qi = x.ReactCurrentBatchConfig;
        function Ki(e, t) {
          if (e && e.defaultProps) {
            for (var n in ((t = i({}, t)), (e = e.defaultProps)))
              void 0 === t[n] && (t[n] = e[n]);
            return t;
          }
          return t;
        }
        var Ji = ui(null),
          Zi = null,
          ea = null,
          ta = null;
        function na() {
          ta = ea = Zi = null;
        }
        function ra(e) {
          var t = Ji.current;
          ci(Ji), (e.type._context._currentValue = t);
        }
        function ia(e, t) {
          for (; null !== e; ) {
            var n = e.alternate;
            if ((e.childLanes & t) === t) {
              if (null === n || (n.childLanes & t) === t) break;
              n.childLanes |= t;
            } else (e.childLanes |= t), null !== n && (n.childLanes |= t);
            e = e.return;
          }
        }
        function aa(e, t) {
          (Zi = e),
            (ta = ea = null),
            null !== (e = e.dependencies) &&
              null !== e.firstContext &&
              (0 !== (e.lanes & t) && (Do = !0), (e.firstContext = null));
        }
        function oa(e, t) {
          if (ta !== e && !1 !== t && 0 !== t)
            if (
              (('number' === typeof t && 1073741823 !== t) ||
                ((ta = e), (t = 1073741823)),
              (t = { context: e, observedBits: t, next: null }),
              null === ea)
            ) {
              if (null === Zi) throw Error(o(308));
              (ea = t),
                (Zi.dependencies = {
                  lanes: 0,
                  firstContext: t,
                  responders: null,
                });
            } else ea = ea.next = t;
          return e._currentValue;
        }
        var sa = !1;
        function la(e) {
          e.updateQueue = {
            baseState: e.memoizedState,
            firstBaseUpdate: null,
            lastBaseUpdate: null,
            shared: { pending: null },
            effects: null,
          };
        }
        function ua(e, t) {
          (e = e.updateQueue),
            t.updateQueue === e &&
              (t.updateQueue = {
                baseState: e.baseState,
                firstBaseUpdate: e.firstBaseUpdate,
                lastBaseUpdate: e.lastBaseUpdate,
                shared: e.shared,
                effects: e.effects,
              });
        }
        function ca(e, t) {
          return {
            eventTime: e,
            lane: t,
            tag: 0,
            payload: null,
            callback: null,
            next: null,
          };
        }
        function da(e, t) {
          if (null !== (e = e.updateQueue)) {
            var n = (e = e.shared).pending;
            null === n ? (t.next = t) : ((t.next = n.next), (n.next = t)),
              (e.pending = t);
          }
        }
        function fa(e, t) {
          var n = e.updateQueue,
            r = e.alternate;
          if (null !== r && n === (r = r.updateQueue)) {
            var i = null,
              a = null;
            if (null !== (n = n.firstBaseUpdate)) {
              do {
                var o = {
                  eventTime: n.eventTime,
                  lane: n.lane,
                  tag: n.tag,
                  payload: n.payload,
                  callback: n.callback,
                  next: null,
                };
                null === a ? (i = a = o) : (a = a.next = o), (n = n.next);
              } while (null !== n);
              null === a ? (i = a = t) : (a = a.next = t);
            } else i = a = t;
            return (
              (n = {
                baseState: r.baseState,
                firstBaseUpdate: i,
                lastBaseUpdate: a,
                shared: r.shared,
                effects: r.effects,
              }),
              void (e.updateQueue = n)
            );
          }
          null === (e = n.lastBaseUpdate)
            ? (n.firstBaseUpdate = t)
            : (e.next = t),
            (n.lastBaseUpdate = t);
        }
        function pa(e, t, n, r) {
          var a = e.updateQueue;
          sa = !1;
          var o = a.firstBaseUpdate,
            s = a.lastBaseUpdate,
            l = a.shared.pending;
          if (null !== l) {
            a.shared.pending = null;
            var u = l,
              c = u.next;
            (u.next = null), null === s ? (o = c) : (s.next = c), (s = u);
            var d = e.alternate;
            if (null !== d) {
              var f = (d = d.updateQueue).lastBaseUpdate;
              f !== s &&
                (null === f ? (d.firstBaseUpdate = c) : (f.next = c),
                (d.lastBaseUpdate = u));
            }
          }
          if (null !== o) {
            for (f = a.baseState, s = 0, d = c = u = null; ; ) {
              l = o.lane;
              var p = o.eventTime;
              if ((r & l) === l) {
                null !== d &&
                  (d = d.next =
                    {
                      eventTime: p,
                      lane: 0,
                      tag: o.tag,
                      payload: o.payload,
                      callback: o.callback,
                      next: null,
                    });
                e: {
                  var h = e,
                    v = o;
                  switch (((l = t), (p = n), v.tag)) {
                    case 1:
                      if ('function' === typeof (h = v.payload)) {
                        f = h.call(p, f, l);
                        break e;
                      }
                      f = h;
                      break e;
                    case 3:
                      h.flags = (-4097 & h.flags) | 64;
                    case 0:
                      if (
                        null ===
                          (l =
                            'function' === typeof (h = v.payload)
                              ? h.call(p, f, l)
                              : h) ||
                        void 0 === l
                      )
                        break e;
                      f = i({}, f, l);
                      break e;
                    case 2:
                      sa = !0;
                  }
                }
                null !== o.callback &&
                  ((e.flags |= 32),
                  null === (l = a.effects) ? (a.effects = [o]) : l.push(o));
              } else
                (p = {
                  eventTime: p,
                  lane: l,
                  tag: o.tag,
                  payload: o.payload,
                  callback: o.callback,
                  next: null,
                }),
                  null === d ? ((c = d = p), (u = f)) : (d = d.next = p),
                  (s |= l);
              if (null === (o = o.next)) {
                if (null === (l = a.shared.pending)) break;
                (o = l.next),
                  (l.next = null),
                  (a.lastBaseUpdate = l),
                  (a.shared.pending = null);
              }
            }
            null === d && (u = f),
              (a.baseState = u),
              (a.firstBaseUpdate = c),
              (a.lastBaseUpdate = d),
              (Bs |= s),
              (e.lanes = s),
              (e.memoizedState = f);
          }
        }
        function ha(e, t, n) {
          if (((e = t.effects), (t.effects = null), null !== e))
            for (t = 0; t < e.length; t++) {
              var r = e[t],
                i = r.callback;
              if (null !== i) {
                if (((r.callback = null), (r = n), 'function' !== typeof i))
                  throw Error(o(191, i));
                i.call(r);
              }
            }
        }
        var va = new r.Component().refs;
        function ma(e, t, n, r) {
          (n =
            null === (n = n(r, (t = e.memoizedState))) || void 0 === n
              ? t
              : i({}, t, n)),
            (e.memoizedState = n),
            0 === e.lanes && (e.updateQueue.baseState = n);
        }
        var ga = {
          isMounted: function (e) {
            return !!(e = e._reactInternals) && Qe(e) === e;
          },
          enqueueSetState: function (e, t, n) {
            e = e._reactInternals;
            var r = fl(),
              i = pl(e),
              a = ca(r, i);
            (a.payload = t),
              void 0 !== n && null !== n && (a.callback = n),
              da(e, a),
              hl(e, i, r);
          },
          enqueueReplaceState: function (e, t, n) {
            e = e._reactInternals;
            var r = fl(),
              i = pl(e),
              a = ca(r, i);
            (a.tag = 1),
              (a.payload = t),
              void 0 !== n && null !== n && (a.callback = n),
              da(e, a),
              hl(e, i, r);
          },
          enqueueForceUpdate: function (e, t) {
            e = e._reactInternals;
            var n = fl(),
              r = pl(e),
              i = ca(n, r);
            (i.tag = 2),
              void 0 !== t && null !== t && (i.callback = t),
              da(e, i),
              hl(e, r, n);
          },
        };
        function ya(e, t, n, r, i, a, o) {
          return 'function' === typeof (e = e.stateNode).shouldComponentUpdate
            ? e.shouldComponentUpdate(r, a, o)
            : !t.prototype ||
                !t.prototype.isPureReactComponent ||
                !fr(n, r) ||
                !fr(i, a);
        }
        function ba(e, t, n) {
          var r = !1,
            i = fi,
            a = t.contextType;
          return (
            'object' === typeof a && null !== a
              ? (a = oa(a))
              : ((i = gi(t) ? vi : pi.current),
                (a = (r = null !== (r = t.contextTypes) && void 0 !== r)
                  ? mi(e, i)
                  : fi)),
            (t = new t(n, a)),
            (e.memoizedState =
              null !== t.state && void 0 !== t.state ? t.state : null),
            (t.updater = ga),
            (e.stateNode = t),
            (t._reactInternals = e),
            r &&
              (((e = e.stateNode).__reactInternalMemoizedUnmaskedChildContext =
                i),
              (e.__reactInternalMemoizedMaskedChildContext = a)),
            t
          );
        }
        function wa(e, t, n, r) {
          (e = t.state),
            'function' === typeof t.componentWillReceiveProps &&
              t.componentWillReceiveProps(n, r),
            'function' === typeof t.UNSAFE_componentWillReceiveProps &&
              t.UNSAFE_componentWillReceiveProps(n, r),
            t.state !== e && ga.enqueueReplaceState(t, t.state, null);
        }
        function xa(e, t, n, r) {
          var i = e.stateNode;
          (i.props = n), (i.state = e.memoizedState), (i.refs = va), la(e);
          var a = t.contextType;
          'object' === typeof a && null !== a
            ? (i.context = oa(a))
            : ((a = gi(t) ? vi : pi.current), (i.context = mi(e, a))),
            pa(e, n, i, r),
            (i.state = e.memoizedState),
            'function' === typeof (a = t.getDerivedStateFromProps) &&
              (ma(e, t, a, n), (i.state = e.memoizedState)),
            'function' === typeof t.getDerivedStateFromProps ||
              'function' === typeof i.getSnapshotBeforeUpdate ||
              ('function' !== typeof i.UNSAFE_componentWillMount &&
                'function' !== typeof i.componentWillMount) ||
              ((t = i.state),
              'function' === typeof i.componentWillMount &&
                i.componentWillMount(),
              'function' === typeof i.UNSAFE_componentWillMount &&
                i.UNSAFE_componentWillMount(),
              t !== i.state && ga.enqueueReplaceState(i, i.state, null),
              pa(e, n, i, r),
              (i.state = e.memoizedState)),
            'function' === typeof i.componentDidMount && (e.flags |= 4);
        }
        var Sa = Array.isArray;
        function Ea(e, t, n) {
          if (
            null !== (e = n.ref) &&
            'function' !== typeof e &&
            'object' !== typeof e
          ) {
            if (n._owner) {
              if ((n = n._owner)) {
                if (1 !== n.tag) throw Error(o(309));
                var r = n.stateNode;
              }
              if (!r) throw Error(o(147, e));
              var i = '' + e;
              return null !== t &&
                null !== t.ref &&
                'function' === typeof t.ref &&
                t.ref._stringRef === i
                ? t.ref
                : ((t = function (e) {
                    var t = r.refs;
                    t === va && (t = r.refs = {}),
                      null === e ? delete t[i] : (t[i] = e);
                  }),
                  (t._stringRef = i),
                  t);
            }
            if ('string' !== typeof e) throw Error(o(284));
            if (!n._owner) throw Error(o(290, e));
          }
          return e;
        }
        function ka(e, t) {
          if ('textarea' !== e.type)
            throw Error(
              o(
                31,
                '[object Object]' === Object.prototype.toString.call(t)
                  ? 'object with keys {' + Object.keys(t).join(', ') + '}'
                  : t,
              ),
            );
        }
        function Ca(e) {
          function t(t, n) {
            if (e) {
              var r = t.lastEffect;
              null !== r
                ? ((r.nextEffect = n), (t.lastEffect = n))
                : (t.firstEffect = t.lastEffect = n),
                (n.nextEffect = null),
                (n.flags = 8);
            }
          }
          function n(n, r) {
            if (!e) return null;
            for (; null !== r; ) t(n, r), (r = r.sibling);
            return null;
          }
          function r(e, t) {
            for (e = new Map(); null !== t; )
              null !== t.key ? e.set(t.key, t) : e.set(t.index, t),
                (t = t.sibling);
            return e;
          }
          function i(e, t) {
            return ((e = Wl(e, t)).index = 0), (e.sibling = null), e;
          }
          function a(t, n, r) {
            return (
              (t.index = r),
              e
                ? null !== (r = t.alternate)
                  ? (r = r.index) < n
                    ? ((t.flags = 2), n)
                    : r
                  : ((t.flags = 2), n)
                : n
            );
          }
          function s(t) {
            return e && null === t.alternate && (t.flags = 2), t;
          }
          function l(e, t, n, r) {
            return null === t || 6 !== t.tag
              ? (((t = Ql(n, e.mode, r)).return = e), t)
              : (((t = i(t, n)).return = e), t);
          }
          function u(e, t, n, r) {
            return null !== t && t.elementType === n.type
              ? (((r = i(t, n.props)).ref = Ea(e, t, n)), (r.return = e), r)
              : (((r = Gl(n.type, n.key, n.props, null, e.mode, r)).ref = Ea(
                  e,
                  t,
                  n,
                )),
                (r.return = e),
                r);
          }
          function c(e, t, n, r) {
            return null === t ||
              4 !== t.tag ||
              t.stateNode.containerInfo !== n.containerInfo ||
              t.stateNode.implementation !== n.implementation
              ? (((t = Kl(n, e.mode, r)).return = e), t)
              : (((t = i(t, n.children || [])).return = e), t);
          }
          function d(e, t, n, r, a) {
            return null === t || 7 !== t.tag
              ? (((t = Yl(n, e.mode, r, a)).return = e), t)
              : (((t = i(t, n)).return = e), t);
          }
          function f(e, t, n) {
            if ('string' === typeof t || 'number' === typeof t)
              return ((t = Ql('' + t, e.mode, n)).return = e), t;
            if ('object' === typeof t && null !== t) {
              switch (t.$$typeof) {
                case S:
                  return (
                    ((n = Gl(t.type, t.key, t.props, null, e.mode, n)).ref = Ea(
                      e,
                      null,
                      t,
                    )),
                    (n.return = e),
                    n
                  );
                case E:
                  return ((t = Kl(t, e.mode, n)).return = e), t;
              }
              if (Sa(t) || U(t))
                return ((t = Yl(t, e.mode, n, null)).return = e), t;
              ka(e, t);
            }
            return null;
          }
          function p(e, t, n, r) {
            var i = null !== t ? t.key : null;
            if ('string' === typeof n || 'number' === typeof n)
              return null !== i ? null : l(e, t, '' + n, r);
            if ('object' === typeof n && null !== n) {
              switch (n.$$typeof) {
                case S:
                  return n.key === i
                    ? n.type === k
                      ? d(e, t, n.props.children, r, i)
                      : u(e, t, n, r)
                    : null;
                case E:
                  return n.key === i ? c(e, t, n, r) : null;
              }
              if (Sa(n) || U(n)) return null !== i ? null : d(e, t, n, r, null);
              ka(e, n);
            }
            return null;
          }
          function h(e, t, n, r, i) {
            if ('string' === typeof r || 'number' === typeof r)
              return l(t, (e = e.get(n) || null), '' + r, i);
            if ('object' === typeof r && null !== r) {
              switch (r.$$typeof) {
                case S:
                  return (
                    (e = e.get(null === r.key ? n : r.key) || null),
                    r.type === k
                      ? d(t, e, r.props.children, i, r.key)
                      : u(t, e, r, i)
                  );
                case E:
                  return c(
                    t,
                    (e = e.get(null === r.key ? n : r.key) || null),
                    r,
                    i,
                  );
              }
              if (Sa(r) || U(r))
                return d(t, (e = e.get(n) || null), r, i, null);
              ka(t, r);
            }
            return null;
          }
          function v(i, o, s, l) {
            for (
              var u = null, c = null, d = o, v = (o = 0), m = null;
              null !== d && v < s.length;
              v++
            ) {
              d.index > v ? ((m = d), (d = null)) : (m = d.sibling);
              var g = p(i, d, s[v], l);
              if (null === g) {
                null === d && (d = m);
                break;
              }
              e && d && null === g.alternate && t(i, d),
                (o = a(g, o, v)),
                null === c ? (u = g) : (c.sibling = g),
                (c = g),
                (d = m);
            }
            if (v === s.length) return n(i, d), u;
            if (null === d) {
              for (; v < s.length; v++)
                null !== (d = f(i, s[v], l)) &&
                  ((o = a(d, o, v)),
                  null === c ? (u = d) : (c.sibling = d),
                  (c = d));
              return u;
            }
            for (d = r(i, d); v < s.length; v++)
              null !== (m = h(d, i, v, s[v], l)) &&
                (e &&
                  null !== m.alternate &&
                  d.delete(null === m.key ? v : m.key),
                (o = a(m, o, v)),
                null === c ? (u = m) : (c.sibling = m),
                (c = m));
            return (
              e &&
                d.forEach(function (e) {
                  return t(i, e);
                }),
              u
            );
          }
          function m(i, s, l, u) {
            var c = U(l);
            if ('function' !== typeof c) throw Error(o(150));
            if (null == (l = c.call(l))) throw Error(o(151));
            for (
              var d = (c = null), v = s, m = (s = 0), g = null, y = l.next();
              null !== v && !y.done;
              m++, y = l.next()
            ) {
              v.index > m ? ((g = v), (v = null)) : (g = v.sibling);
              var b = p(i, v, y.value, u);
              if (null === b) {
                null === v && (v = g);
                break;
              }
              e && v && null === b.alternate && t(i, v),
                (s = a(b, s, m)),
                null === d ? (c = b) : (d.sibling = b),
                (d = b),
                (v = g);
            }
            if (y.done) return n(i, v), c;
            if (null === v) {
              for (; !y.done; m++, y = l.next())
                null !== (y = f(i, y.value, u)) &&
                  ((s = a(y, s, m)),
                  null === d ? (c = y) : (d.sibling = y),
                  (d = y));
              return c;
            }
            for (v = r(i, v); !y.done; m++, y = l.next())
              null !== (y = h(v, i, m, y.value, u)) &&
                (e &&
                  null !== y.alternate &&
                  v.delete(null === y.key ? m : y.key),
                (s = a(y, s, m)),
                null === d ? (c = y) : (d.sibling = y),
                (d = y));
            return (
              e &&
                v.forEach(function (e) {
                  return t(i, e);
                }),
              c
            );
          }
          return function (e, r, a, l) {
            var u =
              'object' === typeof a &&
              null !== a &&
              a.type === k &&
              null === a.key;
            u && (a = a.props.children);
            var c = 'object' === typeof a && null !== a;
            if (c)
              switch (a.$$typeof) {
                case S:
                  e: {
                    for (c = a.key, u = r; null !== u; ) {
                      if (u.key === c) {
                        if (7 === u.tag) {
                          if (a.type === k) {
                            n(e, u.sibling),
                              ((r = i(u, a.props.children)).return = e),
                              (e = r);
                            break e;
                          }
                        } else if (u.elementType === a.type) {
                          n(e, u.sibling),
                            ((r = i(u, a.props)).ref = Ea(e, u, a)),
                            (r.return = e),
                            (e = r);
                          break e;
                        }
                        n(e, u);
                        break;
                      }
                      t(e, u), (u = u.sibling);
                    }
                    a.type === k
                      ? (((r = Yl(a.props.children, e.mode, l, a.key)).return =
                          e),
                        (e = r))
                      : (((l = Gl(
                          a.type,
                          a.key,
                          a.props,
                          null,
                          e.mode,
                          l,
                        )).ref = Ea(e, r, a)),
                        (l.return = e),
                        (e = l));
                  }
                  return s(e);
                case E:
                  e: {
                    for (u = a.key; null !== r; ) {
                      if (r.key === u) {
                        if (
                          4 === r.tag &&
                          r.stateNode.containerInfo === a.containerInfo &&
                          r.stateNode.implementation === a.implementation
                        ) {
                          n(e, r.sibling),
                            ((r = i(r, a.children || [])).return = e),
                            (e = r);
                          break e;
                        }
                        n(e, r);
                        break;
                      }
                      t(e, r), (r = r.sibling);
                    }
                    ((r = Kl(a, e.mode, l)).return = e), (e = r);
                  }
                  return s(e);
              }
            if ('string' === typeof a || 'number' === typeof a)
              return (
                (a = '' + a),
                null !== r && 6 === r.tag
                  ? (n(e, r.sibling), ((r = i(r, a)).return = e), (e = r))
                  : (n(e, r), ((r = Ql(a, e.mode, l)).return = e), (e = r)),
                s(e)
              );
            if (Sa(a)) return v(e, r, a, l);
            if (U(a)) return m(e, r, a, l);
            if ((c && ka(e, a), 'undefined' === typeof a && !u))
              switch (e.tag) {
                case 1:
                case 22:
                case 0:
                case 11:
                case 15:
                  throw Error(o(152, G(e.type) || 'Component'));
              }
            return n(e, r);
          };
        }
        var Ta = Ca(!0),
          Pa = Ca(!1),
          Oa = {},
          ja = ui(Oa),
          La = ui(Oa),
          _a = ui(Oa);
        function Aa(e) {
          if (e === Oa) throw Error(o(174));
          return e;
        }
        function Ma(e, t) {
          switch ((di(_a, t), di(La, e), di(ja, Oa), (e = t.nodeType))) {
            case 9:
            case 11:
              t = (t = t.documentElement) ? t.namespaceURI : he(null, '');
              break;
            default:
              t = he(
                (t = (e = 8 === e ? t.parentNode : t).namespaceURI || null),
                (e = e.tagName),
              );
          }
          ci(ja), di(ja, t);
        }
        function Na() {
          ci(ja), ci(La), ci(_a);
        }
        function Ra(e) {
          Aa(_a.current);
          var t = Aa(ja.current),
            n = he(t, e.type);
          t !== n && (di(La, e), di(ja, n));
        }
        function Ia(e) {
          La.current === e && (ci(ja), ci(La));
        }
        var Da = ui(0);
        function za(e) {
          for (var t = e; null !== t; ) {
            if (13 === t.tag) {
              var n = t.memoizedState;
              if (
                null !== n &&
                (null === (n = n.dehydrated) ||
                  '$?' === n.data ||
                  '$!' === n.data)
              )
                return t;
            } else if (19 === t.tag && void 0 !== t.memoizedProps.revealOrder) {
              if (0 !== (64 & t.flags)) return t;
            } else if (null !== t.child) {
              (t.child.return = t), (t = t.child);
              continue;
            }
            if (t === e) break;
            for (; null === t.sibling; ) {
              if (null === t.return || t.return === e) return null;
              t = t.return;
            }
            (t.sibling.return = t.return), (t = t.sibling);
          }
          return null;
        }
        var Va = null,
          Fa = null,
          Ba = !1;
        function Ua(e, t) {
          var n = ql(5, null, null, 0);
          (n.elementType = 'DELETED'),
            (n.type = 'DELETED'),
            (n.stateNode = t),
            (n.return = e),
            (n.flags = 8),
            null !== e.lastEffect
              ? ((e.lastEffect.nextEffect = n), (e.lastEffect = n))
              : (e.firstEffect = e.lastEffect = n);
        }
        function $a(e, t) {
          switch (e.tag) {
            case 5:
              var n = e.type;
              return (
                null !==
                  (t =
                    1 !== t.nodeType ||
                    n.toLowerCase() !== t.nodeName.toLowerCase()
                      ? null
                      : t) && ((e.stateNode = t), !0)
              );
            case 6:
              return (
                null !==
                  (t = '' === e.pendingProps || 3 !== t.nodeType ? null : t) &&
                ((e.stateNode = t), !0)
              );
            default:
              return !1;
          }
        }
        function qa(e) {
          if (Ba) {
            var t = Fa;
            if (t) {
              var n = t;
              if (!$a(e, t)) {
                if (!(t = Yr(n.nextSibling)) || !$a(e, t))
                  return (
                    (e.flags = (-1025 & e.flags) | 2), (Ba = !1), void (Va = e)
                  );
                Ua(Va, n);
              }
              (Va = e), (Fa = Yr(t.firstChild));
            } else (e.flags = (-1025 & e.flags) | 2), (Ba = !1), (Va = e);
          }
        }
        function Ha(e) {
          for (
            e = e.return;
            null !== e && 5 !== e.tag && 3 !== e.tag && 13 !== e.tag;

          )
            e = e.return;
          Va = e;
        }
        function Wa(e) {
          if (e !== Va) return !1;
          if (!Ba) return Ha(e), (Ba = !0), !1;
          var t = e.type;
          if (
            5 !== e.tag ||
            ('head' !== t && 'body' !== t && !qr(t, e.memoizedProps))
          )
            for (t = Fa; t; ) Ua(e, t), (t = Yr(t.nextSibling));
          if ((Ha(e), 13 === e.tag)) {
            if (!(e = null !== (e = e.memoizedState) ? e.dehydrated : null))
              throw Error(o(317));
            e: {
              for (e = e.nextSibling, t = 0; e; ) {
                if (8 === e.nodeType) {
                  var n = e.data;
                  if ('/$' === n) {
                    if (0 === t) {
                      Fa = Yr(e.nextSibling);
                      break e;
                    }
                    t--;
                  } else ('$' !== n && '$!' !== n && '$?' !== n) || t++;
                }
                e = e.nextSibling;
              }
              Fa = null;
            }
          } else Fa = Va ? Yr(e.stateNode.nextSibling) : null;
          return !0;
        }
        function Ga() {
          (Fa = Va = null), (Ba = !1);
        }
        var Ya = [];
        function Xa() {
          for (var e = 0; e < Ya.length; e++)
            Ya[e]._workInProgressVersionPrimary = null;
          Ya.length = 0;
        }
        var Qa = x.ReactCurrentDispatcher,
          Ka = x.ReactCurrentBatchConfig,
          Ja = 0,
          Za = null,
          eo = null,
          to = null,
          no = !1,
          ro = !1;
        function io() {
          throw Error(o(321));
        }
        function ao(e, t) {
          if (null === t) return !1;
          for (var n = 0; n < t.length && n < e.length; n++)
            if (!cr(e[n], t[n])) return !1;
          return !0;
        }
        function oo(e, t, n, r, i, a) {
          if (
            ((Ja = a),
            (Za = t),
            (t.memoizedState = null),
            (t.updateQueue = null),
            (t.lanes = 0),
            (Qa.current = null === e || null === e.memoizedState ? Mo : No),
            (e = n(r, i)),
            ro)
          ) {
            a = 0;
            do {
              if (((ro = !1), !(25 > a))) throw Error(o(301));
              (a += 1),
                (to = eo = null),
                (t.updateQueue = null),
                (Qa.current = Ro),
                (e = n(r, i));
            } while (ro);
          }
          if (
            ((Qa.current = Ao),
            (t = null !== eo && null !== eo.next),
            (Ja = 0),
            (to = eo = Za = null),
            (no = !1),
            t)
          )
            throw Error(o(300));
          return e;
        }
        function so() {
          var e = {
            memoizedState: null,
            baseState: null,
            baseQueue: null,
            queue: null,
            next: null,
          };
          return (
            null === to ? (Za.memoizedState = to = e) : (to = to.next = e), to
          );
        }
        function lo() {
          if (null === eo) {
            var e = Za.alternate;
            e = null !== e ? e.memoizedState : null;
          } else e = eo.next;
          var t = null === to ? Za.memoizedState : to.next;
          if (null !== t) (to = t), (eo = e);
          else {
            if (null === e) throw Error(o(310));
            (e = {
              memoizedState: (eo = e).memoizedState,
              baseState: eo.baseState,
              baseQueue: eo.baseQueue,
              queue: eo.queue,
              next: null,
            }),
              null === to ? (Za.memoizedState = to = e) : (to = to.next = e);
          }
          return to;
        }
        function uo(e, t) {
          return 'function' === typeof t ? t(e) : t;
        }
        function co(e) {
          var t = lo(),
            n = t.queue;
          if (null === n) throw Error(o(311));
          n.lastRenderedReducer = e;
          var r = eo,
            i = r.baseQueue,
            a = n.pending;
          if (null !== a) {
            if (null !== i) {
              var s = i.next;
              (i.next = a.next), (a.next = s);
            }
            (r.baseQueue = i = a), (n.pending = null);
          }
          if (null !== i) {
            (i = i.next), (r = r.baseState);
            var l = (s = a = null),
              u = i;
            do {
              var c = u.lane;
              if ((Ja & c) === c)
                null !== l &&
                  (l = l.next =
                    {
                      lane: 0,
                      action: u.action,
                      eagerReducer: u.eagerReducer,
                      eagerState: u.eagerState,
                      next: null,
                    }),
                  (r = u.eagerReducer === e ? u.eagerState : e(r, u.action));
              else {
                var d = {
                  lane: c,
                  action: u.action,
                  eagerReducer: u.eagerReducer,
                  eagerState: u.eagerState,
                  next: null,
                };
                null === l ? ((s = l = d), (a = r)) : (l = l.next = d),
                  (Za.lanes |= c),
                  (Bs |= c);
              }
              u = u.next;
            } while (null !== u && u !== i);
            null === l ? (a = r) : (l.next = s),
              cr(r, t.memoizedState) || (Do = !0),
              (t.memoizedState = r),
              (t.baseState = a),
              (t.baseQueue = l),
              (n.lastRenderedState = r);
          }
          return [t.memoizedState, n.dispatch];
        }
        function fo(e) {
          var t = lo(),
            n = t.queue;
          if (null === n) throw Error(o(311));
          n.lastRenderedReducer = e;
          var r = n.dispatch,
            i = n.pending,
            a = t.memoizedState;
          if (null !== i) {
            n.pending = null;
            var s = (i = i.next);
            do {
              (a = e(a, s.action)), (s = s.next);
            } while (s !== i);
            cr(a, t.memoizedState) || (Do = !0),
              (t.memoizedState = a),
              null === t.baseQueue && (t.baseState = a),
              (n.lastRenderedState = a);
          }
          return [a, r];
        }
        function po(e, t, n) {
          var r = t._getVersion;
          r = r(t._source);
          var i = t._workInProgressVersionPrimary;
          if (
            (null !== i
              ? (e = i === r)
              : ((e = e.mutableReadLanes),
                (e = (Ja & e) === e) &&
                  ((t._workInProgressVersionPrimary = r), Ya.push(t))),
            e)
          )
            return n(t._source);
          throw (Ya.push(t), Error(o(350)));
        }
        function ho(e, t, n, r) {
          var i = Ms;
          if (null === i) throw Error(o(349));
          var a = t._getVersion,
            s = a(t._source),
            l = Qa.current,
            u = l.useState(function () {
              return po(i, t, n);
            }),
            c = u[1],
            d = u[0];
          u = to;
          var f = e.memoizedState,
            p = f.refs,
            h = p.getSnapshot,
            v = f.source;
          f = f.subscribe;
          var m = Za;
          return (
            (e.memoizedState = { refs: p, source: t, subscribe: r }),
            l.useEffect(
              function () {
                (p.getSnapshot = n), (p.setSnapshot = c);
                var e = a(t._source);
                if (!cr(s, e)) {
                  (e = n(t._source)),
                    cr(d, e) ||
                      (c(e),
                      (e = pl(m)),
                      (i.mutableReadLanes |= e & i.pendingLanes)),
                    (e = i.mutableReadLanes),
                    (i.entangledLanes |= e);
                  for (var r = i.entanglements, o = e; 0 < o; ) {
                    var l = 31 - qt(o),
                      u = 1 << l;
                    (r[l] |= e), (o &= ~u);
                  }
                }
              },
              [n, t, r],
            ),
            l.useEffect(
              function () {
                return r(t._source, function () {
                  var e = p.getSnapshot,
                    n = p.setSnapshot;
                  try {
                    n(e(t._source));
                    var r = pl(m);
                    i.mutableReadLanes |= r & i.pendingLanes;
                  } catch (a) {
                    n(function () {
                      throw a;
                    });
                  }
                });
              },
              [t, r],
            ),
            (cr(h, n) && cr(v, t) && cr(f, r)) ||
              (((e = {
                pending: null,
                dispatch: null,
                lastRenderedReducer: uo,
                lastRenderedState: d,
              }).dispatch = c =
                _o.bind(null, Za, e)),
              (u.queue = e),
              (u.baseQueue = null),
              (d = po(i, t, n)),
              (u.memoizedState = u.baseState = d)),
            d
          );
        }
        function vo(e, t, n) {
          return ho(lo(), e, t, n);
        }
        function mo(e) {
          var t = so();
          return (
            'function' === typeof e && (e = e()),
            (t.memoizedState = t.baseState = e),
            (e = (e = t.queue =
              {
                pending: null,
                dispatch: null,
                lastRenderedReducer: uo,
                lastRenderedState: e,
              }).dispatch =
              _o.bind(null, Za, e)),
            [t.memoizedState, e]
          );
        }
        function go(e, t, n, r) {
          return (
            (e = { tag: e, create: t, destroy: n, deps: r, next: null }),
            null === (t = Za.updateQueue)
              ? ((t = { lastEffect: null }),
                (Za.updateQueue = t),
                (t.lastEffect = e.next = e))
              : null === (n = t.lastEffect)
              ? (t.lastEffect = e.next = e)
              : ((r = n.next), (n.next = e), (e.next = r), (t.lastEffect = e)),
            e
          );
        }
        function yo(e) {
          return (e = { current: e }), (so().memoizedState = e);
        }
        function bo() {
          return lo().memoizedState;
        }
        function wo(e, t, n, r) {
          var i = so();
          (Za.flags |= e),
            (i.memoizedState = go(1 | t, n, void 0, void 0 === r ? null : r));
        }
        function xo(e, t, n, r) {
          var i = lo();
          r = void 0 === r ? null : r;
          var a = void 0;
          if (null !== eo) {
            var o = eo.memoizedState;
            if (((a = o.destroy), null !== r && ao(r, o.deps)))
              return void go(t, n, a, r);
          }
          (Za.flags |= e), (i.memoizedState = go(1 | t, n, a, r));
        }
        function So(e, t) {
          return wo(516, 4, e, t);
        }
        function Eo(e, t) {
          return xo(516, 4, e, t);
        }
        function ko(e, t) {
          return xo(4, 2, e, t);
        }
        function Co(e, t) {
          return 'function' === typeof t
            ? ((e = e()),
              t(e),
              function () {
                t(null);
              })
            : null !== t && void 0 !== t
            ? ((e = e()),
              (t.current = e),
              function () {
                t.current = null;
              })
            : void 0;
        }
        function To(e, t, n) {
          return (
            (n = null !== n && void 0 !== n ? n.concat([e]) : null),
            xo(4, 2, Co.bind(null, t, e), n)
          );
        }
        function Po() {}
        function Oo(e, t) {
          var n = lo();
          t = void 0 === t ? null : t;
          var r = n.memoizedState;
          return null !== r && null !== t && ao(t, r[1])
            ? r[0]
            : ((n.memoizedState = [e, t]), e);
        }
        function jo(e, t) {
          var n = lo();
          t = void 0 === t ? null : t;
          var r = n.memoizedState;
          return null !== r && null !== t && ao(t, r[1])
            ? r[0]
            : ((e = e()), (n.memoizedState = [e, t]), e);
        }
        function Lo(e, t) {
          var n = qi();
          Wi(98 > n ? 98 : n, function () {
            e(!0);
          }),
            Wi(97 < n ? 97 : n, function () {
              var n = Ka.transition;
              Ka.transition = 1;
              try {
                e(!1), t();
              } finally {
                Ka.transition = n;
              }
            });
        }
        function _o(e, t, n) {
          var r = fl(),
            i = pl(e),
            a = {
              lane: i,
              action: n,
              eagerReducer: null,
              eagerState: null,
              next: null,
            },
            o = t.pending;
          if (
            (null === o ? (a.next = a) : ((a.next = o.next), (o.next = a)),
            (t.pending = a),
            (o = e.alternate),
            e === Za || (null !== o && o === Za))
          )
            ro = no = !0;
          else {
            if (
              0 === e.lanes &&
              (null === o || 0 === o.lanes) &&
              null !== (o = t.lastRenderedReducer)
            )
              try {
                var s = t.lastRenderedState,
                  l = o(s, n);
                if (((a.eagerReducer = o), (a.eagerState = l), cr(l, s)))
                  return;
              } catch (u) {}
            hl(e, i, r);
          }
        }
        var Ao = {
            readContext: oa,
            useCallback: io,
            useContext: io,
            useEffect: io,
            useImperativeHandle: io,
            useLayoutEffect: io,
            useMemo: io,
            useReducer: io,
            useRef: io,
            useState: io,
            useDebugValue: io,
            useDeferredValue: io,
            useTransition: io,
            useMutableSource: io,
            useOpaqueIdentifier: io,
            unstable_isNewReconciler: !1,
          },
          Mo = {
            readContext: oa,
            useCallback: function (e, t) {
              return (so().memoizedState = [e, void 0 === t ? null : t]), e;
            },
            useContext: oa,
            useEffect: So,
            useImperativeHandle: function (e, t, n) {
              return (
                (n = null !== n && void 0 !== n ? n.concat([e]) : null),
                wo(4, 2, Co.bind(null, t, e), n)
              );
            },
            useLayoutEffect: function (e, t) {
              return wo(4, 2, e, t);
            },
            useMemo: function (e, t) {
              var n = so();
              return (
                (t = void 0 === t ? null : t),
                (e = e()),
                (n.memoizedState = [e, t]),
                e
              );
            },
            useReducer: function (e, t, n) {
              var r = so();
              return (
                (t = void 0 !== n ? n(t) : t),
                (r.memoizedState = r.baseState = t),
                (e = (e = r.queue =
                  {
                    pending: null,
                    dispatch: null,
                    lastRenderedReducer: e,
                    lastRenderedState: t,
                  }).dispatch =
                  _o.bind(null, Za, e)),
                [r.memoizedState, e]
              );
            },
            useRef: yo,
            useState: mo,
            useDebugValue: Po,
            useDeferredValue: function (e) {
              var t = mo(e),
                n = t[0],
                r = t[1];
              return (
                So(
                  function () {
                    var t = Ka.transition;
                    Ka.transition = 1;
                    try {
                      r(e);
                    } finally {
                      Ka.transition = t;
                    }
                  },
                  [e],
                ),
                n
              );
            },
            useTransition: function () {
              var e = mo(!1),
                t = e[0];
              return yo((e = Lo.bind(null, e[1]))), [e, t];
            },
            useMutableSource: function (e, t, n) {
              var r = so();
              return (
                (r.memoizedState = {
                  refs: { getSnapshot: t, setSnapshot: null },
                  source: e,
                  subscribe: n,
                }),
                ho(r, e, t, n)
              );
            },
            useOpaqueIdentifier: function () {
              if (Ba) {
                var e = !1,
                  t = (function (e) {
                    return { $$typeof: R, toString: e, valueOf: e };
                  })(function () {
                    throw (
                      (e || ((e = !0), n('r:' + (Qr++).toString(36))),
                      Error(o(355)))
                    );
                  }),
                  n = mo(t)[1];
                return (
                  0 === (2 & Za.mode) &&
                    ((Za.flags |= 516),
                    go(
                      5,
                      function () {
                        n('r:' + (Qr++).toString(36));
                      },
                      void 0,
                      null,
                    )),
                  t
                );
              }
              return mo((t = 'r:' + (Qr++).toString(36))), t;
            },
            unstable_isNewReconciler: !1,
          },
          No = {
            readContext: oa,
            useCallback: Oo,
            useContext: oa,
            useEffect: Eo,
            useImperativeHandle: To,
            useLayoutEffect: ko,
            useMemo: jo,
            useReducer: co,
            useRef: bo,
            useState: function () {
              return co(uo);
            },
            useDebugValue: Po,
            useDeferredValue: function (e) {
              var t = co(uo),
                n = t[0],
                r = t[1];
              return (
                Eo(
                  function () {
                    var t = Ka.transition;
                    Ka.transition = 1;
                    try {
                      r(e);
                    } finally {
                      Ka.transition = t;
                    }
                  },
                  [e],
                ),
                n
              );
            },
            useTransition: function () {
              var e = co(uo)[0];
              return [bo().current, e];
            },
            useMutableSource: vo,
            useOpaqueIdentifier: function () {
              return co(uo)[0];
            },
            unstable_isNewReconciler: !1,
          },
          Ro = {
            readContext: oa,
            useCallback: Oo,
            useContext: oa,
            useEffect: Eo,
            useImperativeHandle: To,
            useLayoutEffect: ko,
            useMemo: jo,
            useReducer: fo,
            useRef: bo,
            useState: function () {
              return fo(uo);
            },
            useDebugValue: Po,
            useDeferredValue: function (e) {
              var t = fo(uo),
                n = t[0],
                r = t[1];
              return (
                Eo(
                  function () {
                    var t = Ka.transition;
                    Ka.transition = 1;
                    try {
                      r(e);
                    } finally {
                      Ka.transition = t;
                    }
                  },
                  [e],
                ),
                n
              );
            },
            useTransition: function () {
              var e = fo(uo)[0];
              return [bo().current, e];
            },
            useMutableSource: vo,
            useOpaqueIdentifier: function () {
              return fo(uo)[0];
            },
            unstable_isNewReconciler: !1,
          },
          Io = x.ReactCurrentOwner,
          Do = !1;
        function zo(e, t, n, r) {
          t.child = null === e ? Pa(t, null, n, r) : Ta(t, e.child, n, r);
        }
        function Vo(e, t, n, r, i) {
          n = n.render;
          var a = t.ref;
          return (
            aa(t, i),
            (r = oo(e, t, n, r, a, i)),
            null === e || Do
              ? ((t.flags |= 1), zo(e, t, r, i), t.child)
              : ((t.updateQueue = e.updateQueue),
                (t.flags &= -517),
                (e.lanes &= ~i),
                as(e, t, i))
          );
        }
        function Fo(e, t, n, r, i, a) {
          if (null === e) {
            var o = n.type;
            return 'function' !== typeof o ||
              Hl(o) ||
              void 0 !== o.defaultProps ||
              null !== n.compare ||
              void 0 !== n.defaultProps
              ? (((e = Gl(n.type, null, r, t, t.mode, a)).ref = t.ref),
                (e.return = t),
                (t.child = e))
              : ((t.tag = 15), (t.type = o), Bo(e, t, o, r, i, a));
          }
          return (
            (o = e.child),
            0 === (i & a) &&
            ((i = o.memoizedProps),
            (n = null !== (n = n.compare) ? n : fr)(i, r) && e.ref === t.ref)
              ? as(e, t, a)
              : ((t.flags |= 1),
                ((e = Wl(o, r)).ref = t.ref),
                (e.return = t),
                (t.child = e))
          );
        }
        function Bo(e, t, n, r, i, a) {
          if (null !== e && fr(e.memoizedProps, r) && e.ref === t.ref) {
            if (((Do = !1), 0 === (a & i)))
              return (t.lanes = e.lanes), as(e, t, a);
            0 !== (16384 & e.flags) && (Do = !0);
          }
          return qo(e, t, n, r, a);
        }
        function Uo(e, t, n) {
          var r = t.pendingProps,
            i = r.children,
            a = null !== e ? e.memoizedState : null;
          if ('hidden' === r.mode || 'unstable-defer-without-hiding' === r.mode)
            if (0 === (4 & t.mode))
              (t.memoizedState = { baseLanes: 0 }), Sl(t, n);
            else {
              if (0 === (1073741824 & n))
                return (
                  (e = null !== a ? a.baseLanes | n : n),
                  (t.lanes = t.childLanes = 1073741824),
                  (t.memoizedState = { baseLanes: e }),
                  Sl(t, e),
                  null
                );
              (t.memoizedState = { baseLanes: 0 }),
                Sl(t, null !== a ? a.baseLanes : n);
            }
          else
            null !== a
              ? ((r = a.baseLanes | n), (t.memoizedState = null))
              : (r = n),
              Sl(t, r);
          return zo(e, t, i, n), t.child;
        }
        function $o(e, t) {
          var n = t.ref;
          ((null === e && null !== n) || (null !== e && e.ref !== n)) &&
            (t.flags |= 128);
        }
        function qo(e, t, n, r, i) {
          var a = gi(n) ? vi : pi.current;
          return (
            (a = mi(t, a)),
            aa(t, i),
            (n = oo(e, t, n, r, a, i)),
            null === e || Do
              ? ((t.flags |= 1), zo(e, t, n, i), t.child)
              : ((t.updateQueue = e.updateQueue),
                (t.flags &= -517),
                (e.lanes &= ~i),
                as(e, t, i))
          );
        }
        function Ho(e, t, n, r, i) {
          if (gi(n)) {
            var a = !0;
            xi(t);
          } else a = !1;
          if ((aa(t, i), null === t.stateNode))
            null !== e &&
              ((e.alternate = null), (t.alternate = null), (t.flags |= 2)),
              ba(t, n, r),
              xa(t, n, r, i),
              (r = !0);
          else if (null === e) {
            var o = t.stateNode,
              s = t.memoizedProps;
            o.props = s;
            var l = o.context,
              u = n.contextType;
            'object' === typeof u && null !== u
              ? (u = oa(u))
              : (u = mi(t, (u = gi(n) ? vi : pi.current)));
            var c = n.getDerivedStateFromProps,
              d =
                'function' === typeof c ||
                'function' === typeof o.getSnapshotBeforeUpdate;
            d ||
              ('function' !== typeof o.UNSAFE_componentWillReceiveProps &&
                'function' !== typeof o.componentWillReceiveProps) ||
              ((s !== r || l !== u) && wa(t, o, r, u)),
              (sa = !1);
            var f = t.memoizedState;
            (o.state = f),
              pa(t, r, o, i),
              (l = t.memoizedState),
              s !== r || f !== l || hi.current || sa
                ? ('function' === typeof c &&
                    (ma(t, n, c, r), (l = t.memoizedState)),
                  (s = sa || ya(t, n, s, r, f, l, u))
                    ? (d ||
                        ('function' !== typeof o.UNSAFE_componentWillMount &&
                          'function' !== typeof o.componentWillMount) ||
                        ('function' === typeof o.componentWillMount &&
                          o.componentWillMount(),
                        'function' === typeof o.UNSAFE_componentWillMount &&
                          o.UNSAFE_componentWillMount()),
                      'function' === typeof o.componentDidMount &&
                        (t.flags |= 4))
                    : ('function' === typeof o.componentDidMount &&
                        (t.flags |= 4),
                      (t.memoizedProps = r),
                      (t.memoizedState = l)),
                  (o.props = r),
                  (o.state = l),
                  (o.context = u),
                  (r = s))
                : ('function' === typeof o.componentDidMount && (t.flags |= 4),
                  (r = !1));
          } else {
            (o = t.stateNode),
              ua(e, t),
              (s = t.memoizedProps),
              (u = t.type === t.elementType ? s : Ki(t.type, s)),
              (o.props = u),
              (d = t.pendingProps),
              (f = o.context),
              'object' === typeof (l = n.contextType) && null !== l
                ? (l = oa(l))
                : (l = mi(t, (l = gi(n) ? vi : pi.current)));
            var p = n.getDerivedStateFromProps;
            (c =
              'function' === typeof p ||
              'function' === typeof o.getSnapshotBeforeUpdate) ||
              ('function' !== typeof o.UNSAFE_componentWillReceiveProps &&
                'function' !== typeof o.componentWillReceiveProps) ||
              ((s !== d || f !== l) && wa(t, o, r, l)),
              (sa = !1),
              (f = t.memoizedState),
              (o.state = f),
              pa(t, r, o, i);
            var h = t.memoizedState;
            s !== d || f !== h || hi.current || sa
              ? ('function' === typeof p &&
                  (ma(t, n, p, r), (h = t.memoizedState)),
                (u = sa || ya(t, n, u, r, f, h, l))
                  ? (c ||
                      ('function' !== typeof o.UNSAFE_componentWillUpdate &&
                        'function' !== typeof o.componentWillUpdate) ||
                      ('function' === typeof o.componentWillUpdate &&
                        o.componentWillUpdate(r, h, l),
                      'function' === typeof o.UNSAFE_componentWillUpdate &&
                        o.UNSAFE_componentWillUpdate(r, h, l)),
                    'function' === typeof o.componentDidUpdate &&
                      (t.flags |= 4),
                    'function' === typeof o.getSnapshotBeforeUpdate &&
                      (t.flags |= 256))
                  : ('function' !== typeof o.componentDidUpdate ||
                      (s === e.memoizedProps && f === e.memoizedState) ||
                      (t.flags |= 4),
                    'function' !== typeof o.getSnapshotBeforeUpdate ||
                      (s === e.memoizedProps && f === e.memoizedState) ||
                      (t.flags |= 256),
                    (t.memoizedProps = r),
                    (t.memoizedState = h)),
                (o.props = r),
                (o.state = h),
                (o.context = l),
                (r = u))
              : ('function' !== typeof o.componentDidUpdate ||
                  (s === e.memoizedProps && f === e.memoizedState) ||
                  (t.flags |= 4),
                'function' !== typeof o.getSnapshotBeforeUpdate ||
                  (s === e.memoizedProps && f === e.memoizedState) ||
                  (t.flags |= 256),
                (r = !1));
          }
          return Wo(e, t, n, r, a, i);
        }
        function Wo(e, t, n, r, i, a) {
          $o(e, t);
          var o = 0 !== (64 & t.flags);
          if (!r && !o) return i && Si(t, n, !1), as(e, t, a);
          (r = t.stateNode), (Io.current = t);
          var s =
            o && 'function' !== typeof n.getDerivedStateFromError
              ? null
              : r.render();
          return (
            (t.flags |= 1),
            null !== e && o
              ? ((t.child = Ta(t, e.child, null, a)),
                (t.child = Ta(t, null, s, a)))
              : zo(e, t, s, a),
            (t.memoizedState = r.state),
            i && Si(t, n, !0),
            t.child
          );
        }
        function Go(e) {
          var t = e.stateNode;
          t.pendingContext
            ? bi(0, t.pendingContext, t.pendingContext !== t.context)
            : t.context && bi(0, t.context, !1),
            Ma(e, t.containerInfo);
        }
        var Yo,
          Xo,
          Qo,
          Ko = { dehydrated: null, retryLane: 0 };
        function Jo(e, t, n) {
          var r,
            i = t.pendingProps,
            a = Da.current,
            o = !1;
          return (
            (r = 0 !== (64 & t.flags)) ||
              (r = (null === e || null !== e.memoizedState) && 0 !== (2 & a)),
            r
              ? ((o = !0), (t.flags &= -65))
              : (null !== e && null === e.memoizedState) ||
                void 0 === i.fallback ||
                !0 === i.unstable_avoidThisFallback ||
                (a |= 1),
            di(Da, 1 & a),
            null === e
              ? (void 0 !== i.fallback && qa(t),
                (e = i.children),
                (a = i.fallback),
                o
                  ? ((e = Zo(t, e, a, n)),
                    (t.child.memoizedState = { baseLanes: n }),
                    (t.memoizedState = Ko),
                    e)
                  : 'number' === typeof i.unstable_expectedLoadTime
                  ? ((e = Zo(t, e, a, n)),
                    (t.child.memoizedState = { baseLanes: n }),
                    (t.memoizedState = Ko),
                    (t.lanes = 33554432),
                    e)
                  : (((n = Xl(
                      { mode: 'visible', children: e },
                      t.mode,
                      n,
                      null,
                    )).return = t),
                    (t.child = n)))
              : (e.memoizedState,
                o
                  ? ((i = ts(e, t, i.children, i.fallback, n)),
                    (o = t.child),
                    (a = e.child.memoizedState),
                    (o.memoizedState =
                      null === a
                        ? { baseLanes: n }
                        : { baseLanes: a.baseLanes | n }),
                    (o.childLanes = e.childLanes & ~n),
                    (t.memoizedState = Ko),
                    i)
                  : ((n = es(e, t, i.children, n)),
                    (t.memoizedState = null),
                    n))
          );
        }
        function Zo(e, t, n, r) {
          var i = e.mode,
            a = e.child;
          return (
            (t = { mode: 'hidden', children: t }),
            0 === (2 & i) && null !== a
              ? ((a.childLanes = 0), (a.pendingProps = t))
              : (a = Xl(t, i, 0, null)),
            (n = Yl(n, i, r, null)),
            (a.return = e),
            (n.return = e),
            (a.sibling = n),
            (e.child = a),
            n
          );
        }
        function es(e, t, n, r) {
          var i = e.child;
          return (
            (e = i.sibling),
            (n = Wl(i, { mode: 'visible', children: n })),
            0 === (2 & t.mode) && (n.lanes = r),
            (n.return = t),
            (n.sibling = null),
            null !== e &&
              ((e.nextEffect = null),
              (e.flags = 8),
              (t.firstEffect = t.lastEffect = e)),
            (t.child = n)
          );
        }
        function ts(e, t, n, r, i) {
          var a = t.mode,
            o = e.child;
          e = o.sibling;
          var s = { mode: 'hidden', children: n };
          return (
            0 === (2 & a) && t.child !== o
              ? (((n = t.child).childLanes = 0),
                (n.pendingProps = s),
                null !== (o = n.lastEffect)
                  ? ((t.firstEffect = n.firstEffect),
                    (t.lastEffect = o),
                    (o.nextEffect = null))
                  : (t.firstEffect = t.lastEffect = null))
              : (n = Wl(o, s)),
            null !== e ? (r = Wl(e, r)) : ((r = Yl(r, a, i, null)).flags |= 2),
            (r.return = t),
            (n.return = t),
            (n.sibling = r),
            (t.child = n),
            r
          );
        }
        function ns(e, t) {
          e.lanes |= t;
          var n = e.alternate;
          null !== n && (n.lanes |= t), ia(e.return, t);
        }
        function rs(e, t, n, r, i, a) {
          var o = e.memoizedState;
          null === o
            ? (e.memoizedState = {
                isBackwards: t,
                rendering: null,
                renderingStartTime: 0,
                last: r,
                tail: n,
                tailMode: i,
                lastEffect: a,
              })
            : ((o.isBackwards = t),
              (o.rendering = null),
              (o.renderingStartTime = 0),
              (o.last = r),
              (o.tail = n),
              (o.tailMode = i),
              (o.lastEffect = a));
        }
        function is(e, t, n) {
          var r = t.pendingProps,
            i = r.revealOrder,
            a = r.tail;
          if ((zo(e, t, r.children, n), 0 !== (2 & (r = Da.current))))
            (r = (1 & r) | 2), (t.flags |= 64);
          else {
            if (null !== e && 0 !== (64 & e.flags))
              e: for (e = t.child; null !== e; ) {
                if (13 === e.tag) null !== e.memoizedState && ns(e, n);
                else if (19 === e.tag) ns(e, n);
                else if (null !== e.child) {
                  (e.child.return = e), (e = e.child);
                  continue;
                }
                if (e === t) break e;
                for (; null === e.sibling; ) {
                  if (null === e.return || e.return === t) break e;
                  e = e.return;
                }
                (e.sibling.return = e.return), (e = e.sibling);
              }
            r &= 1;
          }
          if ((di(Da, r), 0 === (2 & t.mode))) t.memoizedState = null;
          else
            switch (i) {
              case 'forwards':
                for (n = t.child, i = null; null !== n; )
                  null !== (e = n.alternate) && null === za(e) && (i = n),
                    (n = n.sibling);
                null === (n = i)
                  ? ((i = t.child), (t.child = null))
                  : ((i = n.sibling), (n.sibling = null)),
                  rs(t, !1, i, n, a, t.lastEffect);
                break;
              case 'backwards':
                for (n = null, i = t.child, t.child = null; null !== i; ) {
                  if (null !== (e = i.alternate) && null === za(e)) {
                    t.child = i;
                    break;
                  }
                  (e = i.sibling), (i.sibling = n), (n = i), (i = e);
                }
                rs(t, !0, n, null, a, t.lastEffect);
                break;
              case 'together':
                rs(t, !1, null, null, void 0, t.lastEffect);
                break;
              default:
                t.memoizedState = null;
            }
          return t.child;
        }
        function as(e, t, n) {
          if (
            (null !== e && (t.dependencies = e.dependencies),
            (Bs |= t.lanes),
            0 !== (n & t.childLanes))
          ) {
            if (null !== e && t.child !== e.child) throw Error(o(153));
            if (null !== t.child) {
              for (
                n = Wl((e = t.child), e.pendingProps),
                  t.child = n,
                  n.return = t;
                null !== e.sibling;

              )
                (e = e.sibling),
                  ((n = n.sibling = Wl(e, e.pendingProps)).return = t);
              n.sibling = null;
            }
            return t.child;
          }
          return null;
        }
        function os(e, t) {
          if (!Ba)
            switch (e.tailMode) {
              case 'hidden':
                t = e.tail;
                for (var n = null; null !== t; )
                  null !== t.alternate && (n = t), (t = t.sibling);
                null === n ? (e.tail = null) : (n.sibling = null);
                break;
              case 'collapsed':
                n = e.tail;
                for (var r = null; null !== n; )
                  null !== n.alternate && (r = n), (n = n.sibling);
                null === r
                  ? t || null === e.tail
                    ? (e.tail = null)
                    : (e.tail.sibling = null)
                  : (r.sibling = null);
            }
        }
        function ss(e, t, n) {
          var r = t.pendingProps;
          switch (t.tag) {
            case 2:
            case 16:
            case 15:
            case 0:
            case 11:
            case 7:
            case 8:
            case 12:
            case 9:
            case 14:
              return null;
            case 1:
            case 17:
              return gi(t.type) && yi(), null;
            case 3:
              return (
                Na(),
                ci(hi),
                ci(pi),
                Xa(),
                (r = t.stateNode).pendingContext &&
                  ((r.context = r.pendingContext), (r.pendingContext = null)),
                (null !== e && null !== e.child) ||
                  (Wa(t) ? (t.flags |= 4) : r.hydrate || (t.flags |= 256)),
                null
              );
            case 5:
              Ia(t);
              var a = Aa(_a.current);
              if (((n = t.type), null !== e && null != t.stateNode))
                Xo(e, t, n, r), e.ref !== t.ref && (t.flags |= 128);
              else {
                if (!r) {
                  if (null === t.stateNode) throw Error(o(166));
                  return null;
                }
                if (((e = Aa(ja.current)), Wa(t))) {
                  (r = t.stateNode), (n = t.type);
                  var s = t.memoizedProps;
                  switch (((r[Jr] = t), (r[Zr] = s), n)) {
                    case 'dialog':
                      Lr('cancel', r), Lr('close', r);
                      break;
                    case 'iframe':
                    case 'object':
                    case 'embed':
                      Lr('load', r);
                      break;
                    case 'video':
                    case 'audio':
                      for (e = 0; e < Tr.length; e++) Lr(Tr[e], r);
                      break;
                    case 'source':
                      Lr('error', r);
                      break;
                    case 'img':
                    case 'image':
                    case 'link':
                      Lr('error', r), Lr('load', r);
                      break;
                    case 'details':
                      Lr('toggle', r);
                      break;
                    case 'input':
                      ee(r, s), Lr('invalid', r);
                      break;
                    case 'select':
                      (r._wrapperState = { wasMultiple: !!s.multiple }),
                        Lr('invalid', r);
                      break;
                    case 'textarea':
                      le(r, s), Lr('invalid', r);
                  }
                  for (var u in (ke(n, s), (e = null), s))
                    s.hasOwnProperty(u) &&
                      ((a = s[u]),
                      'children' === u
                        ? 'string' === typeof a
                          ? r.textContent !== a && (e = ['children', a])
                          : 'number' === typeof a &&
                            r.textContent !== '' + a &&
                            (e = ['children', '' + a])
                        : l.hasOwnProperty(u) &&
                          null != a &&
                          'onScroll' === u &&
                          Lr('scroll', r));
                  switch (n) {
                    case 'input':
                      Q(r), re(r, s, !0);
                      break;
                    case 'textarea':
                      Q(r), ce(r);
                      break;
                    case 'select':
                    case 'option':
                      break;
                    default:
                      'function' === typeof s.onClick && (r.onclick = Fr);
                  }
                  (r = e), (t.updateQueue = r), null !== r && (t.flags |= 4);
                } else {
                  switch (
                    ((u = 9 === a.nodeType ? a : a.ownerDocument),
                    e === de && (e = pe(n)),
                    e === de
                      ? 'script' === n
                        ? (((e = u.createElement('div')).innerHTML =
                            '<script></script>'),
                          (e = e.removeChild(e.firstChild)))
                        : 'string' === typeof r.is
                        ? (e = u.createElement(n, { is: r.is }))
                        : ((e = u.createElement(n)),
                          'select' === n &&
                            ((u = e),
                            r.multiple
                              ? (u.multiple = !0)
                              : r.size && (u.size = r.size)))
                      : (e = u.createElementNS(e, n)),
                    (e[Jr] = t),
                    (e[Zr] = r),
                    Yo(e, t),
                    (t.stateNode = e),
                    (u = Ce(n, r)),
                    n)
                  ) {
                    case 'dialog':
                      Lr('cancel', e), Lr('close', e), (a = r);
                      break;
                    case 'iframe':
                    case 'object':
                    case 'embed':
                      Lr('load', e), (a = r);
                      break;
                    case 'video':
                    case 'audio':
                      for (a = 0; a < Tr.length; a++) Lr(Tr[a], e);
                      a = r;
                      break;
                    case 'source':
                      Lr('error', e), (a = r);
                      break;
                    case 'img':
                    case 'image':
                    case 'link':
                      Lr('error', e), Lr('load', e), (a = r);
                      break;
                    case 'details':
                      Lr('toggle', e), (a = r);
                      break;
                    case 'input':
                      ee(e, r), (a = Z(e, r)), Lr('invalid', e);
                      break;
                    case 'option':
                      a = ae(e, r);
                      break;
                    case 'select':
                      (e._wrapperState = { wasMultiple: !!r.multiple }),
                        (a = i({}, r, { value: void 0 })),
                        Lr('invalid', e);
                      break;
                    case 'textarea':
                      le(e, r), (a = se(e, r)), Lr('invalid', e);
                      break;
                    default:
                      a = r;
                  }
                  ke(n, a);
                  var c = a;
                  for (s in c)
                    if (c.hasOwnProperty(s)) {
                      var d = c[s];
                      'style' === s
                        ? Se(e, d)
                        : 'dangerouslySetInnerHTML' === s
                        ? null != (d = d ? d.__html : void 0) && ge(e, d)
                        : 'children' === s
                        ? 'string' === typeof d
                          ? ('textarea' !== n || '' !== d) && ye(e, d)
                          : 'number' === typeof d && ye(e, '' + d)
                        : 'suppressContentEditableWarning' !== s &&
                          'suppressHydrationWarning' !== s &&
                          'autoFocus' !== s &&
                          (l.hasOwnProperty(s)
                            ? null != d && 'onScroll' === s && Lr('scroll', e)
                            : null != d && w(e, s, d, u));
                    }
                  switch (n) {
                    case 'input':
                      Q(e), re(e, r, !1);
                      break;
                    case 'textarea':
                      Q(e), ce(e);
                      break;
                    case 'option':
                      null != r.value &&
                        e.setAttribute('value', '' + Y(r.value));
                      break;
                    case 'select':
                      (e.multiple = !!r.multiple),
                        null != (s = r.value)
                          ? oe(e, !!r.multiple, s, !1)
                          : null != r.defaultValue &&
                            oe(e, !!r.multiple, r.defaultValue, !0);
                      break;
                    default:
                      'function' === typeof a.onClick && (e.onclick = Fr);
                  }
                  $r(n, r) && (t.flags |= 4);
                }
                null !== t.ref && (t.flags |= 128);
              }
              return null;
            case 6:
              if (e && null != t.stateNode) Qo(0, t, e.memoizedProps, r);
              else {
                if ('string' !== typeof r && null === t.stateNode)
                  throw Error(o(166));
                (n = Aa(_a.current)),
                  Aa(ja.current),
                  Wa(t)
                    ? ((r = t.stateNode),
                      (n = t.memoizedProps),
                      (r[Jr] = t),
                      r.nodeValue !== n && (t.flags |= 4))
                    : (((r = (
                        9 === n.nodeType ? n : n.ownerDocument
                      ).createTextNode(r))[Jr] = t),
                      (t.stateNode = r));
              }
              return null;
            case 13:
              return (
                ci(Da),
                (r = t.memoizedState),
                0 !== (64 & t.flags)
                  ? ((t.lanes = n), t)
                  : ((r = null !== r),
                    (n = !1),
                    null === e
                      ? void 0 !== t.memoizedProps.fallback && Wa(t)
                      : (n = null !== e.memoizedState),
                    r &&
                      !n &&
                      0 !== (2 & t.mode) &&
                      ((null === e &&
                        !0 !== t.memoizedProps.unstable_avoidThisFallback) ||
                      0 !== (1 & Da.current)
                        ? 0 === zs && (zs = 3)
                        : ((0 !== zs && 3 !== zs) || (zs = 4),
                          null === Ms ||
                            (0 === (134217727 & Bs) &&
                              0 === (134217727 & Us)) ||
                            yl(Ms, Rs))),
                    (r || n) && (t.flags |= 4),
                    null)
              );
            case 4:
              return Na(), null === e && Ar(t.stateNode.containerInfo), null;
            case 10:
              return ra(t), null;
            case 19:
              if ((ci(Da), null === (r = t.memoizedState))) return null;
              if (((s = 0 !== (64 & t.flags)), null === (u = r.rendering)))
                if (s) os(r, !1);
                else {
                  if (0 !== zs || (null !== e && 0 !== (64 & e.flags)))
                    for (e = t.child; null !== e; ) {
                      if (null !== (u = za(e))) {
                        for (
                          t.flags |= 64,
                            os(r, !1),
                            null !== (s = u.updateQueue) &&
                              ((t.updateQueue = s), (t.flags |= 4)),
                            null === r.lastEffect && (t.firstEffect = null),
                            t.lastEffect = r.lastEffect,
                            r = n,
                            n = t.child;
                          null !== n;

                        )
                          (e = r),
                            ((s = n).flags &= 2),
                            (s.nextEffect = null),
                            (s.firstEffect = null),
                            (s.lastEffect = null),
                            null === (u = s.alternate)
                              ? ((s.childLanes = 0),
                                (s.lanes = e),
                                (s.child = null),
                                (s.memoizedProps = null),
                                (s.memoizedState = null),
                                (s.updateQueue = null),
                                (s.dependencies = null),
                                (s.stateNode = null))
                              : ((s.childLanes = u.childLanes),
                                (s.lanes = u.lanes),
                                (s.child = u.child),
                                (s.memoizedProps = u.memoizedProps),
                                (s.memoizedState = u.memoizedState),
                                (s.updateQueue = u.updateQueue),
                                (s.type = u.type),
                                (e = u.dependencies),
                                (s.dependencies =
                                  null === e
                                    ? null
                                    : {
                                        lanes: e.lanes,
                                        firstContext: e.firstContext,
                                      })),
                            (n = n.sibling);
                        return di(Da, (1 & Da.current) | 2), t.child;
                      }
                      e = e.sibling;
                    }
                  null !== r.tail &&
                    $i() > Ws &&
                    ((t.flags |= 64),
                    (s = !0),
                    os(r, !1),
                    (t.lanes = 33554432));
                }
              else {
                if (!s)
                  if (null !== (e = za(u))) {
                    if (
                      ((t.flags |= 64),
                      (s = !0),
                      null !== (n = e.updateQueue) &&
                        ((t.updateQueue = n), (t.flags |= 4)),
                      os(r, !0),
                      null === r.tail &&
                        'hidden' === r.tailMode &&
                        !u.alternate &&
                        !Ba)
                    )
                      return (
                        null !== (t = t.lastEffect = r.lastEffect) &&
                          (t.nextEffect = null),
                        null
                      );
                  } else
                    2 * $i() - r.renderingStartTime > Ws &&
                      1073741824 !== n &&
                      ((t.flags |= 64),
                      (s = !0),
                      os(r, !1),
                      (t.lanes = 33554432));
                r.isBackwards
                  ? ((u.sibling = t.child), (t.child = u))
                  : (null !== (n = r.last) ? (n.sibling = u) : (t.child = u),
                    (r.last = u));
              }
              return null !== r.tail
                ? ((n = r.tail),
                  (r.rendering = n),
                  (r.tail = n.sibling),
                  (r.lastEffect = t.lastEffect),
                  (r.renderingStartTime = $i()),
                  (n.sibling = null),
                  (t = Da.current),
                  di(Da, s ? (1 & t) | 2 : 1 & t),
                  n)
                : null;
            case 23:
            case 24:
              return (
                El(),
                null !== e &&
                  (null !== e.memoizedState) !== (null !== t.memoizedState) &&
                  'unstable-defer-without-hiding' !== r.mode &&
                  (t.flags |= 4),
                null
              );
          }
          throw Error(o(156, t.tag));
        }
        function ls(e) {
          switch (e.tag) {
            case 1:
              gi(e.type) && yi();
              var t = e.flags;
              return 4096 & t ? ((e.flags = (-4097 & t) | 64), e) : null;
            case 3:
              if ((Na(), ci(hi), ci(pi), Xa(), 0 !== (64 & (t = e.flags))))
                throw Error(o(285));
              return (e.flags = (-4097 & t) | 64), e;
            case 5:
              return Ia(e), null;
            case 13:
              return (
                ci(Da),
                4096 & (t = e.flags) ? ((e.flags = (-4097 & t) | 64), e) : null
              );
            case 19:
              return ci(Da), null;
            case 4:
              return Na(), null;
            case 10:
              return ra(e), null;
            case 23:
            case 24:
              return El(), null;
            default:
              return null;
          }
        }
        function us(e, t) {
          try {
            var n = '',
              r = t;
            do {
              (n += W(r)), (r = r.return);
            } while (r);
            var i = n;
          } catch (a) {
            i = '\nError generating stack: ' + a.message + '\n' + a.stack;
          }
          return { value: e, source: t, stack: i };
        }
        function cs(e, t) {
          try {
            console.error(t.value);
          } catch (n) {
            setTimeout(function () {
              throw n;
            });
          }
        }
        (Yo = function (e, t) {
          for (var n = t.child; null !== n; ) {
            if (5 === n.tag || 6 === n.tag) e.appendChild(n.stateNode);
            else if (4 !== n.tag && null !== n.child) {
              (n.child.return = n), (n = n.child);
              continue;
            }
            if (n === t) break;
            for (; null === n.sibling; ) {
              if (null === n.return || n.return === t) return;
              n = n.return;
            }
            (n.sibling.return = n.return), (n = n.sibling);
          }
        }),
          (Xo = function (e, t, n, r) {
            var a = e.memoizedProps;
            if (a !== r) {
              (e = t.stateNode), Aa(ja.current);
              var o,
                s = null;
              switch (n) {
                case 'input':
                  (a = Z(e, a)), (r = Z(e, r)), (s = []);
                  break;
                case 'option':
                  (a = ae(e, a)), (r = ae(e, r)), (s = []);
                  break;
                case 'select':
                  (a = i({}, a, { value: void 0 })),
                    (r = i({}, r, { value: void 0 })),
                    (s = []);
                  break;
                case 'textarea':
                  (a = se(e, a)), (r = se(e, r)), (s = []);
                  break;
                default:
                  'function' !== typeof a.onClick &&
                    'function' === typeof r.onClick &&
                    (e.onclick = Fr);
              }
              for (d in (ke(n, r), (n = null), a))
                if (!r.hasOwnProperty(d) && a.hasOwnProperty(d) && null != a[d])
                  if ('style' === d) {
                    var u = a[d];
                    for (o in u)
                      u.hasOwnProperty(o) && (n || (n = {}), (n[o] = ''));
                  } else
                    'dangerouslySetInnerHTML' !== d &&
                      'children' !== d &&
                      'suppressContentEditableWarning' !== d &&
                      'suppressHydrationWarning' !== d &&
                      'autoFocus' !== d &&
                      (l.hasOwnProperty(d)
                        ? s || (s = [])
                        : (s = s || []).push(d, null));
              for (d in r) {
                var c = r[d];
                if (
                  ((u = null != a ? a[d] : void 0),
                  r.hasOwnProperty(d) && c !== u && (null != c || null != u))
                )
                  if ('style' === d)
                    if (u) {
                      for (o in u)
                        !u.hasOwnProperty(o) ||
                          (c && c.hasOwnProperty(o)) ||
                          (n || (n = {}), (n[o] = ''));
                      for (o in c)
                        c.hasOwnProperty(o) &&
                          u[o] !== c[o] &&
                          (n || (n = {}), (n[o] = c[o]));
                    } else n || (s || (s = []), s.push(d, n)), (n = c);
                  else
                    'dangerouslySetInnerHTML' === d
                      ? ((c = c ? c.__html : void 0),
                        (u = u ? u.__html : void 0),
                        null != c && u !== c && (s = s || []).push(d, c))
                      : 'children' === d
                      ? ('string' !== typeof c && 'number' !== typeof c) ||
                        (s = s || []).push(d, '' + c)
                      : 'suppressContentEditableWarning' !== d &&
                        'suppressHydrationWarning' !== d &&
                        (l.hasOwnProperty(d)
                          ? (null != c && 'onScroll' === d && Lr('scroll', e),
                            s || u === c || (s = []))
                          : 'object' === typeof c &&
                            null !== c &&
                            c.$$typeof === R
                          ? c.toString()
                          : (s = s || []).push(d, c));
              }
              n && (s = s || []).push('style', n);
              var d = s;
              (t.updateQueue = d) && (t.flags |= 4);
            }
          }),
          (Qo = function (e, t, n, r) {
            n !== r && (t.flags |= 4);
          });
        var ds = 'function' === typeof WeakMap ? WeakMap : Map;
        function fs(e, t, n) {
          ((n = ca(-1, n)).tag = 3), (n.payload = { element: null });
          var r = t.value;
          return (
            (n.callback = function () {
              Qs || ((Qs = !0), (Ks = r)), cs(0, t);
            }),
            n
          );
        }
        function ps(e, t, n) {
          (n = ca(-1, n)).tag = 3;
          var r = e.type.getDerivedStateFromError;
          if ('function' === typeof r) {
            var i = t.value;
            n.payload = function () {
              return cs(0, t), r(i);
            };
          }
          var a = e.stateNode;
          return (
            null !== a &&
              'function' === typeof a.componentDidCatch &&
              (n.callback = function () {
                'function' !== typeof r &&
                  (null === Js ? (Js = new Set([this])) : Js.add(this),
                  cs(0, t));
                var e = t.stack;
                this.componentDidCatch(t.value, {
                  componentStack: null !== e ? e : '',
                });
              }),
            n
          );
        }
        var hs = 'function' === typeof WeakSet ? WeakSet : Set;
        function vs(e) {
          var t = e.ref;
          if (null !== t)
            if ('function' === typeof t)
              try {
                t(null);
              } catch (n) {
                Fl(e, n);
              }
            else t.current = null;
        }
        function ms(e, t) {
          switch (t.tag) {
            case 0:
            case 11:
            case 15:
            case 22:
            case 5:
            case 6:
            case 4:
            case 17:
              return;
            case 1:
              if (256 & t.flags && null !== e) {
                var n = e.memoizedProps,
                  r = e.memoizedState;
                (t = (e = t.stateNode).getSnapshotBeforeUpdate(
                  t.elementType === t.type ? n : Ki(t.type, n),
                  r,
                )),
                  (e.__reactInternalSnapshotBeforeUpdate = t);
              }
              return;
            case 3:
              return void (256 & t.flags && Gr(t.stateNode.containerInfo));
          }
          throw Error(o(163));
        }
        function gs(e, t, n) {
          switch (n.tag) {
            case 0:
            case 11:
            case 15:
            case 22:
              if (
                null !==
                (t = null !== (t = n.updateQueue) ? t.lastEffect : null)
              ) {
                e = t = t.next;
                do {
                  if (3 === (3 & e.tag)) {
                    var r = e.create;
                    e.destroy = r();
                  }
                  e = e.next;
                } while (e !== t);
              }
              if (
                null !==
                (t = null !== (t = n.updateQueue) ? t.lastEffect : null)
              ) {
                e = t = t.next;
                do {
                  var i = e;
                  (r = i.next),
                    0 !== (4 & (i = i.tag)) &&
                      0 !== (1 & i) &&
                      (Dl(n, e), Il(n, e)),
                    (e = r);
                } while (e !== t);
              }
              return;
            case 1:
              return (
                (e = n.stateNode),
                4 & n.flags &&
                  (null === t
                    ? e.componentDidMount()
                    : ((r =
                        n.elementType === n.type
                          ? t.memoizedProps
                          : Ki(n.type, t.memoizedProps)),
                      e.componentDidUpdate(
                        r,
                        t.memoizedState,
                        e.__reactInternalSnapshotBeforeUpdate,
                      ))),
                void (null !== (t = n.updateQueue) && ha(n, t, e))
              );
            case 3:
              if (null !== (t = n.updateQueue)) {
                if (((e = null), null !== n.child))
                  switch (n.child.tag) {
                    case 5:
                    case 1:
                      e = n.child.stateNode;
                  }
                ha(n, t, e);
              }
              return;
            case 5:
              return (
                (e = n.stateNode),
                void (
                  null === t &&
                  4 & n.flags &&
                  $r(n.type, n.memoizedProps) &&
                  e.focus()
                )
              );
            case 6:
            case 4:
            case 12:
            case 19:
            case 17:
            case 20:
            case 21:
            case 23:
            case 24:
              return;
            case 13:
              return void (
                null === n.memoizedState &&
                ((n = n.alternate),
                null !== n &&
                  ((n = n.memoizedState),
                  null !== n && ((n = n.dehydrated), null !== n && St(n))))
              );
          }
          throw Error(o(163));
        }
        function ys(e, t) {
          for (var n = e; ; ) {
            if (5 === n.tag) {
              var r = n.stateNode;
              if (t)
                'function' === typeof (r = r.style).setProperty
                  ? r.setProperty('display', 'none', 'important')
                  : (r.display = 'none');
              else {
                r = n.stateNode;
                var i = n.memoizedProps.style;
                (i =
                  void 0 !== i && null !== i && i.hasOwnProperty('display')
                    ? i.display
                    : null),
                  (r.style.display = xe('display', i));
              }
            } else if (6 === n.tag)
              n.stateNode.nodeValue = t ? '' : n.memoizedProps;
            else if (
              ((23 !== n.tag && 24 !== n.tag) ||
                null === n.memoizedState ||
                n === e) &&
              null !== n.child
            ) {
              (n.child.return = n), (n = n.child);
              continue;
            }
            if (n === e) break;
            for (; null === n.sibling; ) {
              if (null === n.return || n.return === e) return;
              n = n.return;
            }
            (n.sibling.return = n.return), (n = n.sibling);
          }
        }
        function bs(e, t) {
          if (ki && 'function' === typeof ki.onCommitFiberUnmount)
            try {
              ki.onCommitFiberUnmount(Ei, t);
            } catch (a) {}
          switch (t.tag) {
            case 0:
            case 11:
            case 14:
            case 15:
            case 22:
              if (null !== (e = t.updateQueue) && null !== (e = e.lastEffect)) {
                var n = (e = e.next);
                do {
                  var r = n,
                    i = r.destroy;
                  if (((r = r.tag), void 0 !== i))
                    if (0 !== (4 & r)) Dl(t, n);
                    else {
                      r = t;
                      try {
                        i();
                      } catch (a) {
                        Fl(r, a);
                      }
                    }
                  n = n.next;
                } while (n !== e);
              }
              break;
            case 1:
              if (
                (vs(t),
                'function' === typeof (e = t.stateNode).componentWillUnmount)
              )
                try {
                  (e.props = t.memoizedProps),
                    (e.state = t.memoizedState),
                    e.componentWillUnmount();
                } catch (a) {
                  Fl(t, a);
                }
              break;
            case 5:
              vs(t);
              break;
            case 4:
              Cs(e, t);
          }
        }
        function ws(e) {
          (e.alternate = null),
            (e.child = null),
            (e.dependencies = null),
            (e.firstEffect = null),
            (e.lastEffect = null),
            (e.memoizedProps = null),
            (e.memoizedState = null),
            (e.pendingProps = null),
            (e.return = null),
            (e.updateQueue = null);
        }
        function xs(e) {
          return 5 === e.tag || 3 === e.tag || 4 === e.tag;
        }
        function Ss(e) {
          e: {
            for (var t = e.return; null !== t; ) {
              if (xs(t)) break e;
              t = t.return;
            }
            throw Error(o(160));
          }
          var n = t;
          switch (((t = n.stateNode), n.tag)) {
            case 5:
              var r = !1;
              break;
            case 3:
            case 4:
              (t = t.containerInfo), (r = !0);
              break;
            default:
              throw Error(o(161));
          }
          16 & n.flags && (ye(t, ''), (n.flags &= -17));
          e: t: for (n = e; ; ) {
            for (; null === n.sibling; ) {
              if (null === n.return || xs(n.return)) {
                n = null;
                break e;
              }
              n = n.return;
            }
            for (
              n.sibling.return = n.return, n = n.sibling;
              5 !== n.tag && 6 !== n.tag && 18 !== n.tag;

            ) {
              if (2 & n.flags) continue t;
              if (null === n.child || 4 === n.tag) continue t;
              (n.child.return = n), (n = n.child);
            }
            if (!(2 & n.flags)) {
              n = n.stateNode;
              break e;
            }
          }
          r ? Es(e, n, t) : ks(e, n, t);
        }
        function Es(e, t, n) {
          var r = e.tag,
            i = 5 === r || 6 === r;
          if (i)
            (e = i ? e.stateNode : e.stateNode.instance),
              t
                ? 8 === n.nodeType
                  ? n.parentNode.insertBefore(e, t)
                  : n.insertBefore(e, t)
                : (8 === n.nodeType
                    ? (t = n.parentNode).insertBefore(e, n)
                    : (t = n).appendChild(e),
                  (null !== (n = n._reactRootContainer) && void 0 !== n) ||
                    null !== t.onclick ||
                    (t.onclick = Fr));
          else if (4 !== r && null !== (e = e.child))
            for (Es(e, t, n), e = e.sibling; null !== e; )
              Es(e, t, n), (e = e.sibling);
        }
        function ks(e, t, n) {
          var r = e.tag,
            i = 5 === r || 6 === r;
          if (i)
            (e = i ? e.stateNode : e.stateNode.instance),
              t ? n.insertBefore(e, t) : n.appendChild(e);
          else if (4 !== r && null !== (e = e.child))
            for (ks(e, t, n), e = e.sibling; null !== e; )
              ks(e, t, n), (e = e.sibling);
        }
        function Cs(e, t) {
          for (var n, r, i = t, a = !1; ; ) {
            if (!a) {
              a = i.return;
              e: for (;;) {
                if (null === a) throw Error(o(160));
                switch (((n = a.stateNode), a.tag)) {
                  case 5:
                    r = !1;
                    break e;
                  case 3:
                  case 4:
                    (n = n.containerInfo), (r = !0);
                    break e;
                }
                a = a.return;
              }
              a = !0;
            }
            if (5 === i.tag || 6 === i.tag) {
              e: for (var s = e, l = i, u = l; ; )
                if ((bs(s, u), null !== u.child && 4 !== u.tag))
                  (u.child.return = u), (u = u.child);
                else {
                  if (u === l) break e;
                  for (; null === u.sibling; ) {
                    if (null === u.return || u.return === l) break e;
                    u = u.return;
                  }
                  (u.sibling.return = u.return), (u = u.sibling);
                }
              r
                ? ((s = n),
                  (l = i.stateNode),
                  8 === s.nodeType
                    ? s.parentNode.removeChild(l)
                    : s.removeChild(l))
                : n.removeChild(i.stateNode);
            } else if (4 === i.tag) {
              if (null !== i.child) {
                (n = i.stateNode.containerInfo),
                  (r = !0),
                  (i.child.return = i),
                  (i = i.child);
                continue;
              }
            } else if ((bs(e, i), null !== i.child)) {
              (i.child.return = i), (i = i.child);
              continue;
            }
            if (i === t) break;
            for (; null === i.sibling; ) {
              if (null === i.return || i.return === t) return;
              4 === (i = i.return).tag && (a = !1);
            }
            (i.sibling.return = i.return), (i = i.sibling);
          }
        }
        function Ts(e, t) {
          switch (t.tag) {
            case 0:
            case 11:
            case 14:
            case 15:
            case 22:
              var n = t.updateQueue;
              if (null !== (n = null !== n ? n.lastEffect : null)) {
                var r = (n = n.next);
                do {
                  3 === (3 & r.tag) &&
                    ((e = r.destroy),
                    (r.destroy = void 0),
                    void 0 !== e && e()),
                    (r = r.next);
                } while (r !== n);
              }
              return;
            case 1:
            case 12:
            case 17:
              return;
            case 5:
              if (null != (n = t.stateNode)) {
                r = t.memoizedProps;
                var i = null !== e ? e.memoizedProps : r;
                e = t.type;
                var a = t.updateQueue;
                if (((t.updateQueue = null), null !== a)) {
                  for (
                    n[Zr] = r,
                      'input' === e &&
                        'radio' === r.type &&
                        null != r.name &&
                        te(n, r),
                      Ce(e, i),
                      t = Ce(e, r),
                      i = 0;
                    i < a.length;
                    i += 2
                  ) {
                    var s = a[i],
                      l = a[i + 1];
                    'style' === s
                      ? Se(n, l)
                      : 'dangerouslySetInnerHTML' === s
                      ? ge(n, l)
                      : 'children' === s
                      ? ye(n, l)
                      : w(n, s, l, t);
                  }
                  switch (e) {
                    case 'input':
                      ne(n, r);
                      break;
                    case 'textarea':
                      ue(n, r);
                      break;
                    case 'select':
                      (e = n._wrapperState.wasMultiple),
                        (n._wrapperState.wasMultiple = !!r.multiple),
                        null != (a = r.value)
                          ? oe(n, !!r.multiple, a, !1)
                          : e !== !!r.multiple &&
                            (null != r.defaultValue
                              ? oe(n, !!r.multiple, r.defaultValue, !0)
                              : oe(n, !!r.multiple, r.multiple ? [] : '', !1));
                  }
                }
              }
              return;
            case 6:
              if (null === t.stateNode) throw Error(o(162));
              return void (t.stateNode.nodeValue = t.memoizedProps);
            case 3:
              return void (
                (n = t.stateNode).hydrate &&
                ((n.hydrate = !1), St(n.containerInfo))
              );
            case 13:
              return (
                null !== t.memoizedState && ((Hs = $i()), ys(t.child, !0)),
                void Ps(t)
              );
            case 19:
              return void Ps(t);
            case 23:
            case 24:
              return void ys(t, null !== t.memoizedState);
          }
          throw Error(o(163));
        }
        function Ps(e) {
          var t = e.updateQueue;
          if (null !== t) {
            e.updateQueue = null;
            var n = e.stateNode;
            null === n && (n = e.stateNode = new hs()),
              t.forEach(function (t) {
                var r = Ul.bind(null, e, t);
                n.has(t) || (n.add(t), t.then(r, r));
              });
          }
        }
        function Os(e, t) {
          return (
            null !== e &&
            (null === (e = e.memoizedState) || null !== e.dehydrated) &&
            null !== (t = t.memoizedState) &&
            null === t.dehydrated
          );
        }
        var js = Math.ceil,
          Ls = x.ReactCurrentDispatcher,
          _s = x.ReactCurrentOwner,
          As = 0,
          Ms = null,
          Ns = null,
          Rs = 0,
          Is = 0,
          Ds = ui(0),
          zs = 0,
          Vs = null,
          Fs = 0,
          Bs = 0,
          Us = 0,
          $s = 0,
          qs = null,
          Hs = 0,
          Ws = 1 / 0;
        function Gs() {
          Ws = $i() + 500;
        }
        var Ys,
          Xs = null,
          Qs = !1,
          Ks = null,
          Js = null,
          Zs = !1,
          el = null,
          tl = 90,
          nl = [],
          rl = [],
          il = null,
          al = 0,
          ol = null,
          sl = -1,
          ll = 0,
          ul = 0,
          cl = null,
          dl = !1;
        function fl() {
          return 0 !== (48 & As) ? $i() : -1 !== sl ? sl : (sl = $i());
        }
        function pl(e) {
          if (0 === (2 & (e = e.mode))) return 1;
          if (0 === (4 & e)) return 99 === qi() ? 1 : 2;
          if ((0 === ll && (ll = Fs), 0 !== Qi.transition)) {
            0 !== ul && (ul = null !== qs ? qs.pendingLanes : 0), (e = ll);
            var t = 4186112 & ~ul;
            return (
              0 === (t &= -t) &&
                0 === (t = (e = 4186112 & ~e) & -e) &&
                (t = 8192),
              t
            );
          }
          return (
            (e = qi()),
            0 !== (4 & As) && 98 === e
              ? (e = Ft(12, ll))
              : (e = Ft(
                  (e = (function (e) {
                    switch (e) {
                      case 99:
                        return 15;
                      case 98:
                        return 10;
                      case 97:
                      case 96:
                        return 8;
                      case 95:
                        return 2;
                      default:
                        return 0;
                    }
                  })(e)),
                  ll,
                )),
            e
          );
        }
        function hl(e, t, n) {
          if (50 < al) throw ((al = 0), (ol = null), Error(o(185)));
          if (null === (e = vl(e, t))) return null;
          $t(e, t, n), e === Ms && ((Us |= t), 4 === zs && yl(e, Rs));
          var r = qi();
          1 === t
            ? 0 !== (8 & As) && 0 === (48 & As)
              ? bl(e)
              : (ml(e, n), 0 === As && (Gs(), Yi()))
            : (0 === (4 & As) ||
                (98 !== r && 99 !== r) ||
                (null === il ? (il = new Set([e])) : il.add(e)),
              ml(e, n)),
            (qs = e);
        }
        function vl(e, t) {
          e.lanes |= t;
          var n = e.alternate;
          for (null !== n && (n.lanes |= t), n = e, e = e.return; null !== e; )
            (e.childLanes |= t),
              null !== (n = e.alternate) && (n.childLanes |= t),
              (n = e),
              (e = e.return);
          return 3 === n.tag ? n.stateNode : null;
        }
        function ml(e, t) {
          for (
            var n = e.callbackNode,
              r = e.suspendedLanes,
              i = e.pingedLanes,
              a = e.expirationTimes,
              s = e.pendingLanes;
            0 < s;

          ) {
            var l = 31 - qt(s),
              u = 1 << l,
              c = a[l];
            if (-1 === c) {
              if (0 === (u & r) || 0 !== (u & i)) {
                (c = t), Dt(u);
                var d = It;
                a[l] = 10 <= d ? c + 250 : 6 <= d ? c + 5e3 : -1;
              }
            } else c <= t && (e.expiredLanes |= u);
            s &= ~u;
          }
          if (((r = zt(e, e === Ms ? Rs : 0)), (t = It), 0 === r))
            null !== n &&
              (n !== Di && Pi(n),
              (e.callbackNode = null),
              (e.callbackPriority = 0));
          else {
            if (null !== n) {
              if (e.callbackPriority === t) return;
              n !== Di && Pi(n);
            }
            15 === t
              ? ((n = bl.bind(null, e)),
                null === Vi ? ((Vi = [n]), (Fi = Ti(Ai, Xi))) : Vi.push(n),
                (n = Di))
              : 14 === t
              ? (n = Gi(99, bl.bind(null, e)))
              : ((n = (function (e) {
                  switch (e) {
                    case 15:
                    case 14:
                      return 99;
                    case 13:
                    case 12:
                    case 11:
                    case 10:
                      return 98;
                    case 9:
                    case 8:
                    case 7:
                    case 6:
                    case 4:
                    case 5:
                      return 97;
                    case 3:
                    case 2:
                    case 1:
                      return 95;
                    case 0:
                      return 90;
                    default:
                      throw Error(o(358, e));
                  }
                })(t)),
                (n = Gi(n, gl.bind(null, e)))),
              (e.callbackPriority = t),
              (e.callbackNode = n);
          }
        }
        function gl(e) {
          if (((sl = -1), (ul = ll = 0), 0 !== (48 & As))) throw Error(o(327));
          var t = e.callbackNode;
          if (Rl() && e.callbackNode !== t) return null;
          var n = zt(e, e === Ms ? Rs : 0);
          if (0 === n) return null;
          var r = n,
            i = As;
          As |= 16;
          var a = Tl();
          for ((Ms === e && Rs === r) || (Gs(), kl(e, r)); ; )
            try {
              jl();
              break;
            } catch (l) {
              Cl(e, l);
            }
          if (
            (na(),
            (Ls.current = a),
            (As = i),
            null !== Ns ? (r = 0) : ((Ms = null), (Rs = 0), (r = zs)),
            0 !== (Fs & Us))
          )
            kl(e, 0);
          else if (0 !== r) {
            if (
              (2 === r &&
                ((As |= 64),
                e.hydrate && ((e.hydrate = !1), Gr(e.containerInfo)),
                0 !== (n = Vt(e)) && (r = Pl(e, n))),
              1 === r)
            )
              throw ((t = Vs), kl(e, 0), yl(e, n), ml(e, $i()), t);
            switch (
              ((e.finishedWork = e.current.alternate), (e.finishedLanes = n), r)
            ) {
              case 0:
              case 1:
                throw Error(o(345));
              case 2:
              case 5:
                Al(e);
                break;
              case 3:
                if (
                  (yl(e, n), (62914560 & n) === n && 10 < (r = Hs + 500 - $i()))
                ) {
                  if (0 !== zt(e, 0)) break;
                  if (((i = e.suspendedLanes) & n) !== n) {
                    fl(), (e.pingedLanes |= e.suspendedLanes & i);
                    break;
                  }
                  e.timeoutHandle = Hr(Al.bind(null, e), r);
                  break;
                }
                Al(e);
                break;
              case 4:
                if ((yl(e, n), (4186112 & n) === n)) break;
                for (r = e.eventTimes, i = -1; 0 < n; ) {
                  var s = 31 - qt(n);
                  (a = 1 << s), (s = r[s]) > i && (i = s), (n &= ~a);
                }
                if (
                  ((n = i),
                  10 <
                    (n =
                      (120 > (n = $i() - n)
                        ? 120
                        : 480 > n
                        ? 480
                        : 1080 > n
                        ? 1080
                        : 1920 > n
                        ? 1920
                        : 3e3 > n
                        ? 3e3
                        : 4320 > n
                        ? 4320
                        : 1960 * js(n / 1960)) - n))
                ) {
                  e.timeoutHandle = Hr(Al.bind(null, e), n);
                  break;
                }
                Al(e);
                break;
              default:
                throw Error(o(329));
            }
          }
          return ml(e, $i()), e.callbackNode === t ? gl.bind(null, e) : null;
        }
        function yl(e, t) {
          for (
            t &= ~$s,
              t &= ~Us,
              e.suspendedLanes |= t,
              e.pingedLanes &= ~t,
              e = e.expirationTimes;
            0 < t;

          ) {
            var n = 31 - qt(t),
              r = 1 << n;
            (e[n] = -1), (t &= ~r);
          }
        }
        function bl(e) {
          if (0 !== (48 & As)) throw Error(o(327));
          if ((Rl(), e === Ms && 0 !== (e.expiredLanes & Rs))) {
            var t = Rs,
              n = Pl(e, t);
            0 !== (Fs & Us) && (n = Pl(e, (t = zt(e, t))));
          } else n = Pl(e, (t = zt(e, 0)));
          if (
            (0 !== e.tag &&
              2 === n &&
              ((As |= 64),
              e.hydrate && ((e.hydrate = !1), Gr(e.containerInfo)),
              0 !== (t = Vt(e)) && (n = Pl(e, t))),
            1 === n)
          )
            throw ((n = Vs), kl(e, 0), yl(e, t), ml(e, $i()), n);
          return (
            (e.finishedWork = e.current.alternate),
            (e.finishedLanes = t),
            Al(e),
            ml(e, $i()),
            null
          );
        }
        function wl(e, t) {
          var n = As;
          As |= 1;
          try {
            return e(t);
          } finally {
            0 === (As = n) && (Gs(), Yi());
          }
        }
        function xl(e, t) {
          var n = As;
          (As &= -2), (As |= 8);
          try {
            return e(t);
          } finally {
            0 === (As = n) && (Gs(), Yi());
          }
        }
        function Sl(e, t) {
          di(Ds, Is), (Is |= t), (Fs |= t);
        }
        function El() {
          (Is = Ds.current), ci(Ds);
        }
        function kl(e, t) {
          (e.finishedWork = null), (e.finishedLanes = 0);
          var n = e.timeoutHandle;
          if ((-1 !== n && ((e.timeoutHandle = -1), Wr(n)), null !== Ns))
            for (n = Ns.return; null !== n; ) {
              var r = n;
              switch (r.tag) {
                case 1:
                  null !== (r = r.type.childContextTypes) &&
                    void 0 !== r &&
                    yi();
                  break;
                case 3:
                  Na(), ci(hi), ci(pi), Xa();
                  break;
                case 5:
                  Ia(r);
                  break;
                case 4:
                  Na();
                  break;
                case 13:
                case 19:
                  ci(Da);
                  break;
                case 10:
                  ra(r);
                  break;
                case 23:
                case 24:
                  El();
              }
              n = n.return;
            }
          (Ms = e),
            (Ns = Wl(e.current, null)),
            (Rs = Is = Fs = t),
            (zs = 0),
            (Vs = null),
            ($s = Us = Bs = 0);
        }
        function Cl(e, t) {
          for (;;) {
            var n = Ns;
            try {
              if ((na(), (Qa.current = Ao), no)) {
                for (var r = Za.memoizedState; null !== r; ) {
                  var i = r.queue;
                  null !== i && (i.pending = null), (r = r.next);
                }
                no = !1;
              }
              if (
                ((Ja = 0),
                (to = eo = Za = null),
                (ro = !1),
                (_s.current = null),
                null === n || null === n.return)
              ) {
                (zs = 1), (Vs = t), (Ns = null);
                break;
              }
              e: {
                var a = e,
                  o = n.return,
                  s = n,
                  l = t;
                if (
                  ((t = Rs),
                  (s.flags |= 2048),
                  (s.firstEffect = s.lastEffect = null),
                  null !== l &&
                    'object' === typeof l &&
                    'function' === typeof l.then)
                ) {
                  var u = l;
                  if (0 === (2 & s.mode)) {
                    var c = s.alternate;
                    c
                      ? ((s.updateQueue = c.updateQueue),
                        (s.memoizedState = c.memoizedState),
                        (s.lanes = c.lanes))
                      : ((s.updateQueue = null), (s.memoizedState = null));
                  }
                  var d = 0 !== (1 & Da.current),
                    f = o;
                  do {
                    var p;
                    if ((p = 13 === f.tag)) {
                      var h = f.memoizedState;
                      if (null !== h) p = null !== h.dehydrated;
                      else {
                        var v = f.memoizedProps;
                        p =
                          void 0 !== v.fallback &&
                          (!0 !== v.unstable_avoidThisFallback || !d);
                      }
                    }
                    if (p) {
                      var m = f.updateQueue;
                      if (null === m) {
                        var g = new Set();
                        g.add(u), (f.updateQueue = g);
                      } else m.add(u);
                      if (0 === (2 & f.mode)) {
                        if (
                          ((f.flags |= 64),
                          (s.flags |= 16384),
                          (s.flags &= -2981),
                          1 === s.tag)
                        )
                          if (null === s.alternate) s.tag = 17;
                          else {
                            var y = ca(-1, 1);
                            (y.tag = 2), da(s, y);
                          }
                        s.lanes |= 1;
                        break e;
                      }
                      (l = void 0), (s = t);
                      var b = a.pingCache;
                      if (
                        (null === b
                          ? ((b = a.pingCache = new ds()),
                            (l = new Set()),
                            b.set(u, l))
                          : void 0 === (l = b.get(u)) &&
                            ((l = new Set()), b.set(u, l)),
                        !l.has(s))
                      ) {
                        l.add(s);
                        var w = Bl.bind(null, a, u, s);
                        u.then(w, w);
                      }
                      (f.flags |= 4096), (f.lanes = t);
                      break e;
                    }
                    f = f.return;
                  } while (null !== f);
                  l = Error(
                    (G(s.type) || 'A React component') +
                      ' suspended while rendering, but no fallback UI was specified.\n\nAdd a <Suspense fallback=...> component higher in the tree to provide a loading indicator or placeholder to display.',
                  );
                }
                5 !== zs && (zs = 2), (l = us(l, s)), (f = o);
                do {
                  switch (f.tag) {
                    case 3:
                      (a = l),
                        (f.flags |= 4096),
                        (t &= -t),
                        (f.lanes |= t),
                        fa(f, fs(0, a, t));
                      break e;
                    case 1:
                      a = l;
                      var x = f.type,
                        S = f.stateNode;
                      if (
                        0 === (64 & f.flags) &&
                        ('function' === typeof x.getDerivedStateFromError ||
                          (null !== S &&
                            'function' === typeof S.componentDidCatch &&
                            (null === Js || !Js.has(S))))
                      ) {
                        (f.flags |= 4096),
                          (t &= -t),
                          (f.lanes |= t),
                          fa(f, ps(f, a, t));
                        break e;
                      }
                  }
                  f = f.return;
                } while (null !== f);
              }
              _l(n);
            } catch (E) {
              (t = E), Ns === n && null !== n && (Ns = n = n.return);
              continue;
            }
            break;
          }
        }
        function Tl() {
          var e = Ls.current;
          return (Ls.current = Ao), null === e ? Ao : e;
        }
        function Pl(e, t) {
          var n = As;
          As |= 16;
          var r = Tl();
          for ((Ms === e && Rs === t) || kl(e, t); ; )
            try {
              Ol();
              break;
            } catch (i) {
              Cl(e, i);
            }
          if ((na(), (As = n), (Ls.current = r), null !== Ns))
            throw Error(o(261));
          return (Ms = null), (Rs = 0), zs;
        }
        function Ol() {
          for (; null !== Ns; ) Ll(Ns);
        }
        function jl() {
          for (; null !== Ns && !Oi(); ) Ll(Ns);
        }
        function Ll(e) {
          var t = Ys(e.alternate, e, Is);
          (e.memoizedProps = e.pendingProps),
            null === t ? _l(e) : (Ns = t),
            (_s.current = null);
        }
        function _l(e) {
          var t = e;
          do {
            var n = t.alternate;
            if (((e = t.return), 0 === (2048 & t.flags))) {
              if (null !== (n = ss(n, t, Is))) return void (Ns = n);
              if (
                (24 !== (n = t).tag && 23 !== n.tag) ||
                null === n.memoizedState ||
                0 !== (1073741824 & Is) ||
                0 === (4 & n.mode)
              ) {
                for (var r = 0, i = n.child; null !== i; )
                  (r |= i.lanes | i.childLanes), (i = i.sibling);
                n.childLanes = r;
              }
              null !== e &&
                0 === (2048 & e.flags) &&
                (null === e.firstEffect && (e.firstEffect = t.firstEffect),
                null !== t.lastEffect &&
                  (null !== e.lastEffect &&
                    (e.lastEffect.nextEffect = t.firstEffect),
                  (e.lastEffect = t.lastEffect)),
                1 < t.flags &&
                  (null !== e.lastEffect
                    ? (e.lastEffect.nextEffect = t)
                    : (e.firstEffect = t),
                  (e.lastEffect = t)));
            } else {
              if (null !== (n = ls(t))) return (n.flags &= 2047), void (Ns = n);
              null !== e &&
                ((e.firstEffect = e.lastEffect = null), (e.flags |= 2048));
            }
            if (null !== (t = t.sibling)) return void (Ns = t);
            Ns = t = e;
          } while (null !== t);
          0 === zs && (zs = 5);
        }
        function Al(e) {
          var t = qi();
          return Wi(99, Ml.bind(null, e, t)), null;
        }
        function Ml(e, t) {
          do {
            Rl();
          } while (null !== el);
          if (0 !== (48 & As)) throw Error(o(327));
          var n = e.finishedWork;
          if (null === n) return null;
          if (((e.finishedWork = null), (e.finishedLanes = 0), n === e.current))
            throw Error(o(177));
          e.callbackNode = null;
          var r = n.lanes | n.childLanes,
            i = r,
            a = e.pendingLanes & ~i;
          (e.pendingLanes = i),
            (e.suspendedLanes = 0),
            (e.pingedLanes = 0),
            (e.expiredLanes &= i),
            (e.mutableReadLanes &= i),
            (e.entangledLanes &= i),
            (i = e.entanglements);
          for (var s = e.eventTimes, l = e.expirationTimes; 0 < a; ) {
            var u = 31 - qt(a),
              c = 1 << u;
            (i[u] = 0), (s[u] = -1), (l[u] = -1), (a &= ~c);
          }
          if (
            (null !== il && 0 === (24 & r) && il.has(e) && il.delete(e),
            e === Ms && ((Ns = Ms = null), (Rs = 0)),
            1 < n.flags
              ? null !== n.lastEffect
                ? ((n.lastEffect.nextEffect = n), (r = n.firstEffect))
                : (r = n)
              : (r = n.firstEffect),
            null !== r)
          ) {
            if (
              ((i = As),
              (As |= 32),
              (_s.current = null),
              (Br = Xt),
              gr((s = mr())))
            ) {
              if ('selectionStart' in s)
                l = { start: s.selectionStart, end: s.selectionEnd };
              else
                e: if (
                  ((l = ((l = s.ownerDocument) && l.defaultView) || window),
                  (c = l.getSelection && l.getSelection()) &&
                    0 !== c.rangeCount)
                ) {
                  (l = c.anchorNode),
                    (a = c.anchorOffset),
                    (u = c.focusNode),
                    (c = c.focusOffset);
                  try {
                    l.nodeType, u.nodeType;
                  } catch (T) {
                    l = null;
                    break e;
                  }
                  var d = 0,
                    f = -1,
                    p = -1,
                    h = 0,
                    v = 0,
                    m = s,
                    g = null;
                  t: for (;;) {
                    for (
                      var y;
                      m !== l || (0 !== a && 3 !== m.nodeType) || (f = d + a),
                        m !== u || (0 !== c && 3 !== m.nodeType) || (p = d + c),
                        3 === m.nodeType && (d += m.nodeValue.length),
                        null !== (y = m.firstChild);

                    )
                      (g = m), (m = y);
                    for (;;) {
                      if (m === s) break t;
                      if (
                        (g === l && ++h === a && (f = d),
                        g === u && ++v === c && (p = d),
                        null !== (y = m.nextSibling))
                      )
                        break;
                      g = (m = g).parentNode;
                    }
                    m = y;
                  }
                  l = -1 === f || -1 === p ? null : { start: f, end: p };
                } else l = null;
              l = l || { start: 0, end: 0 };
            } else l = null;
            (Ur = { focusedElem: s, selectionRange: l }),
              (Xt = !1),
              (cl = null),
              (dl = !1),
              (Xs = r);
            do {
              try {
                Nl();
              } catch (T) {
                if (null === Xs) throw Error(o(330));
                Fl(Xs, T), (Xs = Xs.nextEffect);
              }
            } while (null !== Xs);
            (cl = null), (Xs = r);
            do {
              try {
                for (s = e; null !== Xs; ) {
                  var b = Xs.flags;
                  if ((16 & b && ye(Xs.stateNode, ''), 128 & b)) {
                    var w = Xs.alternate;
                    if (null !== w) {
                      var x = w.ref;
                      null !== x &&
                        ('function' === typeof x
                          ? x(null)
                          : (x.current = null));
                    }
                  }
                  switch (1038 & b) {
                    case 2:
                      Ss(Xs), (Xs.flags &= -3);
                      break;
                    case 6:
                      Ss(Xs), (Xs.flags &= -3), Ts(Xs.alternate, Xs);
                      break;
                    case 1024:
                      Xs.flags &= -1025;
                      break;
                    case 1028:
                      (Xs.flags &= -1025), Ts(Xs.alternate, Xs);
                      break;
                    case 4:
                      Ts(Xs.alternate, Xs);
                      break;
                    case 8:
                      Cs(s, (l = Xs));
                      var S = l.alternate;
                      ws(l), null !== S && ws(S);
                  }
                  Xs = Xs.nextEffect;
                }
              } catch (T) {
                if (null === Xs) throw Error(o(330));
                Fl(Xs, T), (Xs = Xs.nextEffect);
              }
            } while (null !== Xs);
            if (
              ((x = Ur),
              (w = mr()),
              (b = x.focusedElem),
              (s = x.selectionRange),
              w !== b &&
                b &&
                b.ownerDocument &&
                vr(b.ownerDocument.documentElement, b))
            ) {
              null !== s &&
                gr(b) &&
                ((w = s.start),
                void 0 === (x = s.end) && (x = w),
                'selectionStart' in b
                  ? ((b.selectionStart = w),
                    (b.selectionEnd = Math.min(x, b.value.length)))
                  : (x =
                      ((w = b.ownerDocument || document) && w.defaultView) ||
                      window).getSelection &&
                    ((x = x.getSelection()),
                    (l = b.textContent.length),
                    (S = Math.min(s.start, l)),
                    (s = void 0 === s.end ? S : Math.min(s.end, l)),
                    !x.extend && S > s && ((l = s), (s = S), (S = l)),
                    (l = hr(b, S)),
                    (a = hr(b, s)),
                    l &&
                      a &&
                      (1 !== x.rangeCount ||
                        x.anchorNode !== l.node ||
                        x.anchorOffset !== l.offset ||
                        x.focusNode !== a.node ||
                        x.focusOffset !== a.offset) &&
                      ((w = w.createRange()).setStart(l.node, l.offset),
                      x.removeAllRanges(),
                      S > s
                        ? (x.addRange(w), x.extend(a.node, a.offset))
                        : (w.setEnd(a.node, a.offset), x.addRange(w))))),
                (w = []);
              for (x = b; (x = x.parentNode); )
                1 === x.nodeType &&
                  w.push({ element: x, left: x.scrollLeft, top: x.scrollTop });
              for (
                'function' === typeof b.focus && b.focus(), b = 0;
                b < w.length;
                b++
              )
                ((x = w[b]).element.scrollLeft = x.left),
                  (x.element.scrollTop = x.top);
            }
            (Xt = !!Br), (Ur = Br = null), (e.current = n), (Xs = r);
            do {
              try {
                for (b = e; null !== Xs; ) {
                  var E = Xs.flags;
                  if ((36 & E && gs(b, Xs.alternate, Xs), 128 & E)) {
                    w = void 0;
                    var k = Xs.ref;
                    if (null !== k) {
                      var C = Xs.stateNode;
                      Xs.tag,
                        (w = C),
                        'function' === typeof k ? k(w) : (k.current = w);
                    }
                  }
                  Xs = Xs.nextEffect;
                }
              } catch (T) {
                if (null === Xs) throw Error(o(330));
                Fl(Xs, T), (Xs = Xs.nextEffect);
              }
            } while (null !== Xs);
            (Xs = null), zi(), (As = i);
          } else e.current = n;
          if (Zs) (Zs = !1), (el = e), (tl = t);
          else
            for (Xs = r; null !== Xs; )
              (t = Xs.nextEffect),
                (Xs.nextEffect = null),
                8 & Xs.flags &&
                  (((E = Xs).sibling = null), (E.stateNode = null)),
                (Xs = t);
          if (
            (0 === (r = e.pendingLanes) && (Js = null),
            1 === r ? (e === ol ? al++ : ((al = 0), (ol = e))) : (al = 0),
            (n = n.stateNode),
            ki && 'function' === typeof ki.onCommitFiberRoot)
          )
            try {
              ki.onCommitFiberRoot(
                Ei,
                n,
                void 0,
                64 === (64 & n.current.flags),
              );
            } catch (T) {}
          if ((ml(e, $i()), Qs)) throw ((Qs = !1), (e = Ks), (Ks = null), e);
          return 0 !== (8 & As) || Yi(), null;
        }
        function Nl() {
          for (; null !== Xs; ) {
            var e = Xs.alternate;
            dl ||
              null === cl ||
              (0 !== (8 & Xs.flags)
                ? et(Xs, cl) && (dl = !0)
                : 13 === Xs.tag && Os(e, Xs) && et(Xs, cl) && (dl = !0));
            var t = Xs.flags;
            0 !== (256 & t) && ms(e, Xs),
              0 === (512 & t) ||
                Zs ||
                ((Zs = !0),
                Gi(97, function () {
                  return Rl(), null;
                })),
              (Xs = Xs.nextEffect);
          }
        }
        function Rl() {
          if (90 !== tl) {
            var e = 97 < tl ? 97 : tl;
            return (tl = 90), Wi(e, zl);
          }
          return !1;
        }
        function Il(e, t) {
          nl.push(t, e),
            Zs ||
              ((Zs = !0),
              Gi(97, function () {
                return Rl(), null;
              }));
        }
        function Dl(e, t) {
          rl.push(t, e),
            Zs ||
              ((Zs = !0),
              Gi(97, function () {
                return Rl(), null;
              }));
        }
        function zl() {
          if (null === el) return !1;
          var e = el;
          if (((el = null), 0 !== (48 & As))) throw Error(o(331));
          var t = As;
          As |= 32;
          var n = rl;
          rl = [];
          for (var r = 0; r < n.length; r += 2) {
            var i = n[r],
              a = n[r + 1],
              s = i.destroy;
            if (((i.destroy = void 0), 'function' === typeof s))
              try {
                s();
              } catch (u) {
                if (null === a) throw Error(o(330));
                Fl(a, u);
              }
          }
          for (n = nl, nl = [], r = 0; r < n.length; r += 2) {
            (i = n[r]), (a = n[r + 1]);
            try {
              var l = i.create;
              i.destroy = l();
            } catch (u) {
              if (null === a) throw Error(o(330));
              Fl(a, u);
            }
          }
          for (l = e.current.firstEffect; null !== l; )
            (e = l.nextEffect),
              (l.nextEffect = null),
              8 & l.flags && ((l.sibling = null), (l.stateNode = null)),
              (l = e);
          return (As = t), Yi(), !0;
        }
        function Vl(e, t, n) {
          da(e, (t = fs(0, (t = us(n, t)), 1))),
            (t = fl()),
            null !== (e = vl(e, 1)) && ($t(e, 1, t), ml(e, t));
        }
        function Fl(e, t) {
          if (3 === e.tag) Vl(e, e, t);
          else
            for (var n = e.return; null !== n; ) {
              if (3 === n.tag) {
                Vl(n, e, t);
                break;
              }
              if (1 === n.tag) {
                var r = n.stateNode;
                if (
                  'function' === typeof n.type.getDerivedStateFromError ||
                  ('function' === typeof r.componentDidCatch &&
                    (null === Js || !Js.has(r)))
                ) {
                  var i = ps(n, (e = us(t, e)), 1);
                  if ((da(n, i), (i = fl()), null !== (n = vl(n, 1))))
                    $t(n, 1, i), ml(n, i);
                  else if (
                    'function' === typeof r.componentDidCatch &&
                    (null === Js || !Js.has(r))
                  )
                    try {
                      r.componentDidCatch(t, e);
                    } catch (a) {}
                  break;
                }
              }
              n = n.return;
            }
        }
        function Bl(e, t, n) {
          var r = e.pingCache;
          null !== r && r.delete(t),
            (t = fl()),
            (e.pingedLanes |= e.suspendedLanes & n),
            Ms === e &&
              (Rs & n) === n &&
              (4 === zs ||
              (3 === zs && (62914560 & Rs) === Rs && 500 > $i() - Hs)
                ? kl(e, 0)
                : ($s |= n)),
            ml(e, t);
        }
        function Ul(e, t) {
          var n = e.stateNode;
          null !== n && n.delete(t),
            0 === (t = 0) &&
              (0 === (2 & (t = e.mode))
                ? (t = 1)
                : 0 === (4 & t)
                ? (t = 99 === qi() ? 1 : 2)
                : (0 === ll && (ll = Fs),
                  0 === (t = Bt(62914560 & ~ll)) && (t = 4194304))),
            (n = fl()),
            null !== (e = vl(e, t)) && ($t(e, t, n), ml(e, n));
        }
        function $l(e, t, n, r) {
          (this.tag = e),
            (this.key = n),
            (this.sibling =
              this.child =
              this.return =
              this.stateNode =
              this.type =
              this.elementType =
                null),
            (this.index = 0),
            (this.ref = null),
            (this.pendingProps = t),
            (this.dependencies =
              this.memoizedState =
              this.updateQueue =
              this.memoizedProps =
                null),
            (this.mode = r),
            (this.flags = 0),
            (this.lastEffect = this.firstEffect = this.nextEffect = null),
            (this.childLanes = this.lanes = 0),
            (this.alternate = null);
        }
        function ql(e, t, n, r) {
          return new $l(e, t, n, r);
        }
        function Hl(e) {
          return !(!(e = e.prototype) || !e.isReactComponent);
        }
        function Wl(e, t) {
          var n = e.alternate;
          return (
            null === n
              ? (((n = ql(e.tag, t, e.key, e.mode)).elementType =
                  e.elementType),
                (n.type = e.type),
                (n.stateNode = e.stateNode),
                (n.alternate = e),
                (e.alternate = n))
              : ((n.pendingProps = t),
                (n.type = e.type),
                (n.flags = 0),
                (n.nextEffect = null),
                (n.firstEffect = null),
                (n.lastEffect = null)),
            (n.childLanes = e.childLanes),
            (n.lanes = e.lanes),
            (n.child = e.child),
            (n.memoizedProps = e.memoizedProps),
            (n.memoizedState = e.memoizedState),
            (n.updateQueue = e.updateQueue),
            (t = e.dependencies),
            (n.dependencies =
              null === t
                ? null
                : { lanes: t.lanes, firstContext: t.firstContext }),
            (n.sibling = e.sibling),
            (n.index = e.index),
            (n.ref = e.ref),
            n
          );
        }
        function Gl(e, t, n, r, i, a) {
          var s = 2;
          if (((r = e), 'function' === typeof e)) Hl(e) && (s = 1);
          else if ('string' === typeof e) s = 5;
          else
            e: switch (e) {
              case k:
                return Yl(n.children, i, a, t);
              case I:
                (s = 8), (i |= 16);
                break;
              case C:
                (s = 8), (i |= 1);
                break;
              case T:
                return (
                  ((e = ql(12, n, t, 8 | i)).elementType = T),
                  (e.type = T),
                  (e.lanes = a),
                  e
                );
              case L:
                return (
                  ((e = ql(13, n, t, i)).type = L),
                  (e.elementType = L),
                  (e.lanes = a),
                  e
                );
              case _:
                return (
                  ((e = ql(19, n, t, i)).elementType = _), (e.lanes = a), e
                );
              case D:
                return Xl(n, i, a, t);
              case z:
                return (
                  ((e = ql(24, n, t, i)).elementType = z), (e.lanes = a), e
                );
              default:
                if ('object' === typeof e && null !== e)
                  switch (e.$$typeof) {
                    case P:
                      s = 10;
                      break e;
                    case O:
                      s = 9;
                      break e;
                    case j:
                      s = 11;
                      break e;
                    case A:
                      s = 14;
                      break e;
                    case M:
                      (s = 16), (r = null);
                      break e;
                    case N:
                      s = 22;
                      break e;
                  }
                throw Error(o(130, null == e ? e : typeof e, ''));
            }
          return (
            ((t = ql(s, n, t, i)).elementType = e),
            (t.type = r),
            (t.lanes = a),
            t
          );
        }
        function Yl(e, t, n, r) {
          return ((e = ql(7, e, r, t)).lanes = n), e;
        }
        function Xl(e, t, n, r) {
          return ((e = ql(23, e, r, t)).elementType = D), (e.lanes = n), e;
        }
        function Ql(e, t, n) {
          return ((e = ql(6, e, null, t)).lanes = n), e;
        }
        function Kl(e, t, n) {
          return (
            ((t = ql(
              4,
              null !== e.children ? e.children : [],
              e.key,
              t,
            )).lanes = n),
            (t.stateNode = {
              containerInfo: e.containerInfo,
              pendingChildren: null,
              implementation: e.implementation,
            }),
            t
          );
        }
        function Jl(e, t, n) {
          (this.tag = t),
            (this.containerInfo = e),
            (this.finishedWork =
              this.pingCache =
              this.current =
              this.pendingChildren =
                null),
            (this.timeoutHandle = -1),
            (this.pendingContext = this.context = null),
            (this.hydrate = n),
            (this.callbackNode = null),
            (this.callbackPriority = 0),
            (this.eventTimes = Ut(0)),
            (this.expirationTimes = Ut(-1)),
            (this.entangledLanes =
              this.finishedLanes =
              this.mutableReadLanes =
              this.expiredLanes =
              this.pingedLanes =
              this.suspendedLanes =
              this.pendingLanes =
                0),
            (this.entanglements = Ut(0)),
            (this.mutableSourceEagerHydrationData = null);
        }
        function Zl(e, t, n) {
          var r =
            3 < arguments.length && void 0 !== arguments[3]
              ? arguments[3]
              : null;
          return {
            $$typeof: E,
            key: null == r ? null : '' + r,
            children: e,
            containerInfo: t,
            implementation: n,
          };
        }
        function eu(e, t, n, r) {
          var i = t.current,
            a = fl(),
            s = pl(i);
          e: if (n) {
            t: {
              if (Qe((n = n._reactInternals)) !== n || 1 !== n.tag)
                throw Error(o(170));
              var l = n;
              do {
                switch (l.tag) {
                  case 3:
                    l = l.stateNode.context;
                    break t;
                  case 1:
                    if (gi(l.type)) {
                      l = l.stateNode.__reactInternalMemoizedMergedChildContext;
                      break t;
                    }
                }
                l = l.return;
              } while (null !== l);
              throw Error(o(171));
            }
            if (1 === n.tag) {
              var u = n.type;
              if (gi(u)) {
                n = wi(n, u, l);
                break e;
              }
            }
            n = l;
          } else n = fi;
          return (
            null === t.context ? (t.context = n) : (t.pendingContext = n),
            ((t = ca(a, s)).payload = { element: e }),
            null !== (r = void 0 === r ? null : r) && (t.callback = r),
            da(i, t),
            hl(i, s, a),
            s
          );
        }
        function tu(e) {
          return (e = e.current).child
            ? (e.child.tag, e.child.stateNode)
            : null;
        }
        function nu(e, t) {
          if (null !== (e = e.memoizedState) && null !== e.dehydrated) {
            var n = e.retryLane;
            e.retryLane = 0 !== n && n < t ? n : t;
          }
        }
        function ru(e, t) {
          nu(e, t), (e = e.alternate) && nu(e, t);
        }
        function iu(e, t, n) {
          var r =
            (null != n &&
              null != n.hydrationOptions &&
              n.hydrationOptions.mutableSources) ||
            null;
          if (
            ((n = new Jl(e, t, null != n && !0 === n.hydrate)),
            (t = ql(3, null, null, 2 === t ? 7 : 1 === t ? 3 : 0)),
            (n.current = t),
            (t.stateNode = n),
            la(t),
            (e[ei] = n.current),
            Ar(8 === e.nodeType ? e.parentNode : e),
            r)
          )
            for (e = 0; e < r.length; e++) {
              var i = (t = r[e])._getVersion;
              (i = i(t._source)),
                null == n.mutableSourceEagerHydrationData
                  ? (n.mutableSourceEagerHydrationData = [t, i])
                  : n.mutableSourceEagerHydrationData.push(t, i);
            }
          this._internalRoot = n;
        }
        function au(e) {
          return !(
            !e ||
            (1 !== e.nodeType &&
              9 !== e.nodeType &&
              11 !== e.nodeType &&
              (8 !== e.nodeType ||
                ' react-mount-point-unstable ' !== e.nodeValue))
          );
        }
        function ou(e, t, n, r, i) {
          var a = n._reactRootContainer;
          if (a) {
            var o = a._internalRoot;
            if ('function' === typeof i) {
              var s = i;
              i = function () {
                var e = tu(o);
                s.call(e);
              };
            }
            eu(t, o, e, i);
          } else {
            if (
              ((a = n._reactRootContainer =
                (function (e, t) {
                  if (
                    (t ||
                      (t = !(
                        !(t = e
                          ? 9 === e.nodeType
                            ? e.documentElement
                            : e.firstChild
                          : null) ||
                        1 !== t.nodeType ||
                        !t.hasAttribute('data-reactroot')
                      )),
                    !t)
                  )
                    for (var n; (n = e.lastChild); ) e.removeChild(n);
                  return new iu(e, 0, t ? { hydrate: !0 } : void 0);
                })(n, r)),
              (o = a._internalRoot),
              'function' === typeof i)
            ) {
              var l = i;
              i = function () {
                var e = tu(o);
                l.call(e);
              };
            }
            xl(function () {
              eu(t, o, e, i);
            });
          }
          return tu(o);
        }
        function su(e, t) {
          var n =
            2 < arguments.length && void 0 !== arguments[2]
              ? arguments[2]
              : null;
          if (!au(t)) throw Error(o(200));
          return Zl(e, t, null, n);
        }
        (Ys = function (e, t, n) {
          var r = t.lanes;
          if (null !== e)
            if (e.memoizedProps !== t.pendingProps || hi.current) Do = !0;
            else {
              if (0 === (n & r)) {
                switch (((Do = !1), t.tag)) {
                  case 3:
                    Go(t), Ga();
                    break;
                  case 5:
                    Ra(t);
                    break;
                  case 1:
                    gi(t.type) && xi(t);
                    break;
                  case 4:
                    Ma(t, t.stateNode.containerInfo);
                    break;
                  case 10:
                    r = t.memoizedProps.value;
                    var i = t.type._context;
                    di(Ji, i._currentValue), (i._currentValue = r);
                    break;
                  case 13:
                    if (null !== t.memoizedState)
                      return 0 !== (n & t.child.childLanes)
                        ? Jo(e, t, n)
                        : (di(Da, 1 & Da.current),
                          null !== (t = as(e, t, n)) ? t.sibling : null);
                    di(Da, 1 & Da.current);
                    break;
                  case 19:
                    if (
                      ((r = 0 !== (n & t.childLanes)), 0 !== (64 & e.flags))
                    ) {
                      if (r) return is(e, t, n);
                      t.flags |= 64;
                    }
                    if (
                      (null !== (i = t.memoizedState) &&
                        ((i.rendering = null),
                        (i.tail = null),
                        (i.lastEffect = null)),
                      di(Da, Da.current),
                      r)
                    )
                      break;
                    return null;
                  case 23:
                  case 24:
                    return (t.lanes = 0), Uo(e, t, n);
                }
                return as(e, t, n);
              }
              Do = 0 !== (16384 & e.flags);
            }
          else Do = !1;
          switch (((t.lanes = 0), t.tag)) {
            case 2:
              if (
                ((r = t.type),
                null !== e &&
                  ((e.alternate = null), (t.alternate = null), (t.flags |= 2)),
                (e = t.pendingProps),
                (i = mi(t, pi.current)),
                aa(t, n),
                (i = oo(null, t, r, e, i, n)),
                (t.flags |= 1),
                'object' === typeof i &&
                  null !== i &&
                  'function' === typeof i.render &&
                  void 0 === i.$$typeof)
              ) {
                if (
                  ((t.tag = 1),
                  (t.memoizedState = null),
                  (t.updateQueue = null),
                  gi(r))
                ) {
                  var a = !0;
                  xi(t);
                } else a = !1;
                (t.memoizedState =
                  null !== i.state && void 0 !== i.state ? i.state : null),
                  la(t);
                var s = r.getDerivedStateFromProps;
                'function' === typeof s && ma(t, r, s, e),
                  (i.updater = ga),
                  (t.stateNode = i),
                  (i._reactInternals = t),
                  xa(t, r, e, n),
                  (t = Wo(null, t, r, !0, a, n));
              } else (t.tag = 0), zo(null, t, i, n), (t = t.child);
              return t;
            case 16:
              i = t.elementType;
              e: {
                switch (
                  (null !== e &&
                    ((e.alternate = null),
                    (t.alternate = null),
                    (t.flags |= 2)),
                  (e = t.pendingProps),
                  (i = (a = i._init)(i._payload)),
                  (t.type = i),
                  (a = t.tag =
                    (function (e) {
                      if ('function' === typeof e) return Hl(e) ? 1 : 0;
                      if (void 0 !== e && null !== e) {
                        if ((e = e.$$typeof) === j) return 11;
                        if (e === A) return 14;
                      }
                      return 2;
                    })(i)),
                  (e = Ki(i, e)),
                  a)
                ) {
                  case 0:
                    t = qo(null, t, i, e, n);
                    break e;
                  case 1:
                    t = Ho(null, t, i, e, n);
                    break e;
                  case 11:
                    t = Vo(null, t, i, e, n);
                    break e;
                  case 14:
                    t = Fo(null, t, i, Ki(i.type, e), r, n);
                    break e;
                }
                throw Error(o(306, i, ''));
              }
              return t;
            case 0:
              return (
                (r = t.type),
                (i = t.pendingProps),
                qo(e, t, r, (i = t.elementType === r ? i : Ki(r, i)), n)
              );
            case 1:
              return (
                (r = t.type),
                (i = t.pendingProps),
                Ho(e, t, r, (i = t.elementType === r ? i : Ki(r, i)), n)
              );
            case 3:
              if ((Go(t), (r = t.updateQueue), null === e || null === r))
                throw Error(o(282));
              if (
                ((r = t.pendingProps),
                (i = null !== (i = t.memoizedState) ? i.element : null),
                ua(e, t),
                pa(t, r, null, n),
                (r = t.memoizedState.element) === i)
              )
                Ga(), (t = as(e, t, n));
              else {
                if (
                  ((a = (i = t.stateNode).hydrate) &&
                    ((Fa = Yr(t.stateNode.containerInfo.firstChild)),
                    (Va = t),
                    (a = Ba = !0)),
                  a)
                ) {
                  if (null != (e = i.mutableSourceEagerHydrationData))
                    for (i = 0; i < e.length; i += 2)
                      ((a = e[i])._workInProgressVersionPrimary = e[i + 1]),
                        Ya.push(a);
                  for (n = Pa(t, null, r, n), t.child = n; n; )
                    (n.flags = (-3 & n.flags) | 1024), (n = n.sibling);
                } else zo(e, t, r, n), Ga();
                t = t.child;
              }
              return t;
            case 5:
              return (
                Ra(t),
                null === e && qa(t),
                (r = t.type),
                (i = t.pendingProps),
                (a = null !== e ? e.memoizedProps : null),
                (s = i.children),
                qr(r, i)
                  ? (s = null)
                  : null !== a && qr(r, a) && (t.flags |= 16),
                $o(e, t),
                zo(e, t, s, n),
                t.child
              );
            case 6:
              return null === e && qa(t), null;
            case 13:
              return Jo(e, t, n);
            case 4:
              return (
                Ma(t, t.stateNode.containerInfo),
                (r = t.pendingProps),
                null === e ? (t.child = Ta(t, null, r, n)) : zo(e, t, r, n),
                t.child
              );
            case 11:
              return (
                (r = t.type),
                (i = t.pendingProps),
                Vo(e, t, r, (i = t.elementType === r ? i : Ki(r, i)), n)
              );
            case 7:
              return zo(e, t, t.pendingProps, n), t.child;
            case 8:
            case 12:
              return zo(e, t, t.pendingProps.children, n), t.child;
            case 10:
              e: {
                (r = t.type._context),
                  (i = t.pendingProps),
                  (s = t.memoizedProps),
                  (a = i.value);
                var l = t.type._context;
                if (
                  (di(Ji, l._currentValue), (l._currentValue = a), null !== s)
                )
                  if (
                    ((l = s.value),
                    0 ===
                      (a = cr(l, a)
                        ? 0
                        : 0 |
                          ('function' === typeof r._calculateChangedBits
                            ? r._calculateChangedBits(l, a)
                            : 1073741823)))
                  ) {
                    if (s.children === i.children && !hi.current) {
                      t = as(e, t, n);
                      break e;
                    }
                  } else
                    for (
                      null !== (l = t.child) && (l.return = t);
                      null !== l;

                    ) {
                      var u = l.dependencies;
                      if (null !== u) {
                        s = l.child;
                        for (var c = u.firstContext; null !== c; ) {
                          if (c.context === r && 0 !== (c.observedBits & a)) {
                            1 === l.tag &&
                              (((c = ca(-1, n & -n)).tag = 2), da(l, c)),
                              (l.lanes |= n),
                              null !== (c = l.alternate) && (c.lanes |= n),
                              ia(l.return, n),
                              (u.lanes |= n);
                            break;
                          }
                          c = c.next;
                        }
                      } else
                        s = 10 === l.tag && l.type === t.type ? null : l.child;
                      if (null !== s) s.return = l;
                      else
                        for (s = l; null !== s; ) {
                          if (s === t) {
                            s = null;
                            break;
                          }
                          if (null !== (l = s.sibling)) {
                            (l.return = s.return), (s = l);
                            break;
                          }
                          s = s.return;
                        }
                      l = s;
                    }
                zo(e, t, i.children, n), (t = t.child);
              }
              return t;
            case 9:
              return (
                (i = t.type),
                (r = (a = t.pendingProps).children),
                aa(t, n),
                (r = r((i = oa(i, a.unstable_observedBits)))),
                (t.flags |= 1),
                zo(e, t, r, n),
                t.child
              );
            case 14:
              return (
                (a = Ki((i = t.type), t.pendingProps)),
                Fo(e, t, i, (a = Ki(i.type, a)), r, n)
              );
            case 15:
              return Bo(e, t, t.type, t.pendingProps, r, n);
            case 17:
              return (
                (r = t.type),
                (i = t.pendingProps),
                (i = t.elementType === r ? i : Ki(r, i)),
                null !== e &&
                  ((e.alternate = null), (t.alternate = null), (t.flags |= 2)),
                (t.tag = 1),
                gi(r) ? ((e = !0), xi(t)) : (e = !1),
                aa(t, n),
                ba(t, r, i),
                xa(t, r, i, n),
                Wo(null, t, r, !0, e, n)
              );
            case 19:
              return is(e, t, n);
            case 23:
            case 24:
              return Uo(e, t, n);
          }
          throw Error(o(156, t.tag));
        }),
          (iu.prototype.render = function (e) {
            eu(e, this._internalRoot, null, null);
          }),
          (iu.prototype.unmount = function () {
            var e = this._internalRoot,
              t = e.containerInfo;
            eu(null, e, null, function () {
              t[ei] = null;
            });
          }),
          (tt = function (e) {
            13 === e.tag && (hl(e, 4, fl()), ru(e, 4));
          }),
          (nt = function (e) {
            13 === e.tag && (hl(e, 67108864, fl()), ru(e, 67108864));
          }),
          (rt = function (e) {
            if (13 === e.tag) {
              var t = fl(),
                n = pl(e);
              hl(e, n, t), ru(e, n);
            }
          }),
          (it = function (e, t) {
            return t();
          }),
          (Pe = function (e, t, n) {
            switch (t) {
              case 'input':
                if ((ne(e, n), (t = n.name), 'radio' === n.type && null != t)) {
                  for (n = e; n.parentNode; ) n = n.parentNode;
                  for (
                    n = n.querySelectorAll(
                      'input[name=' +
                        JSON.stringify('' + t) +
                        '][type="radio"]',
                    ),
                      t = 0;
                    t < n.length;
                    t++
                  ) {
                    var r = n[t];
                    if (r !== e && r.form === e.form) {
                      var i = ai(r);
                      if (!i) throw Error(o(90));
                      K(r), ne(r, i);
                    }
                  }
                }
                break;
              case 'textarea':
                ue(e, n);
                break;
              case 'select':
                null != (t = n.value) && oe(e, !!n.multiple, t, !1);
            }
          }),
          (Me = wl),
          (Ne = function (e, t, n, r, i) {
            var a = As;
            As |= 4;
            try {
              return Wi(98, e.bind(null, t, n, r, i));
            } finally {
              0 === (As = a) && (Gs(), Yi());
            }
          }),
          (Re = function () {
            0 === (49 & As) &&
              ((function () {
                if (null !== il) {
                  var e = il;
                  (il = null),
                    e.forEach(function (e) {
                      (e.expiredLanes |= 24 & e.pendingLanes), ml(e, $i());
                    });
                }
                Yi();
              })(),
              Rl());
          }),
          (Ie = function (e, t) {
            var n = As;
            As |= 2;
            try {
              return e(t);
            } finally {
              0 === (As = n) && (Gs(), Yi());
            }
          });
        var lu = { Events: [ri, ii, ai, _e, Ae, Rl, { current: !1 }] },
          uu = {
            findFiberByHostInstance: ni,
            bundleType: 0,
            version: '17.0.2',
            rendererPackageName: 'react-dom',
          },
          cu = {
            bundleType: uu.bundleType,
            version: uu.version,
            rendererPackageName: uu.rendererPackageName,
            rendererConfig: uu.rendererConfig,
            overrideHookState: null,
            overrideHookStateDeletePath: null,
            overrideHookStateRenamePath: null,
            overrideProps: null,
            overridePropsDeletePath: null,
            overridePropsRenamePath: null,
            setSuspenseHandler: null,
            scheduleUpdate: null,
            currentDispatcherRef: x.ReactCurrentDispatcher,
            findHostInstanceByFiber: function (e) {
              return null === (e = Ze(e)) ? null : e.stateNode;
            },
            findFiberByHostInstance:
              uu.findFiberByHostInstance ||
              function () {
                return null;
              },
            findHostInstancesForRefresh: null,
            scheduleRefresh: null,
            scheduleRoot: null,
            setRefreshHandler: null,
            getCurrentFiber: null,
          };
        if ('undefined' !== typeof __REACT_DEVTOOLS_GLOBAL_HOOK__) {
          var du = __REACT_DEVTOOLS_GLOBAL_HOOK__;
          if (!du.isDisabled && du.supportsFiber)
            try {
              (Ei = du.inject(cu)), (ki = du);
            } catch (me) {}
        }
        (t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = lu),
          (t.createPortal = su),
          (t.findDOMNode = function (e) {
            if (null == e) return null;
            if (1 === e.nodeType) return e;
            var t = e._reactInternals;
            if (void 0 === t) {
              if ('function' === typeof e.render) throw Error(o(188));
              throw Error(o(268, Object.keys(e)));
            }
            return (e = null === (e = Ze(t)) ? null : e.stateNode);
          }),
          (t.flushSync = function (e, t) {
            var n = As;
            if (0 !== (48 & n)) return e(t);
            As |= 1;
            try {
              if (e) return Wi(99, e.bind(null, t));
            } finally {
              (As = n), Yi();
            }
          }),
          (t.hydrate = function (e, t, n) {
            if (!au(t)) throw Error(o(200));
            return ou(null, e, t, !0, n);
          }),
          (t.render = function (e, t, n) {
            if (!au(t)) throw Error(o(200));
            return ou(null, e, t, !1, n);
          }),
          (t.unmountComponentAtNode = function (e) {
            if (!au(e)) throw Error(o(40));
            return (
              !!e._reactRootContainer &&
              (xl(function () {
                ou(null, null, e, !1, function () {
                  (e._reactRootContainer = null), (e[ei] = null);
                });
              }),
              !0)
            );
          }),
          (t.unstable_batchedUpdates = wl),
          (t.unstable_createPortal = function (e, t) {
            return su(
              e,
              t,
              2 < arguments.length && void 0 !== arguments[2]
                ? arguments[2]
                : null,
            );
          }),
          (t.unstable_renderSubtreeIntoContainer = function (e, t, n, r) {
            if (!au(n)) throw Error(o(200));
            if (null == e || void 0 === e._reactInternals) throw Error(o(38));
            return ou(e, t, n, !1, r);
          }),
          (t.version = '17.0.2');
      },
      4164: function (e, t, n) {
        'use strict';
        !(function e() {
          if (
            'undefined' !== typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ &&
            'function' === typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE
          )
            try {
              __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(e);
            } catch (t) {
              console.error(t);
            }
        })(),
          (e.exports = n(4463));
      },
      77: function (e) {
        var t = 'undefined' !== typeof Element,
          n = 'function' === typeof Map,
          r = 'function' === typeof Set,
          i = 'function' === typeof ArrayBuffer && !!ArrayBuffer.isView;
        function a(e, o) {
          if (e === o) return !0;
          if (e && o && 'object' == typeof e && 'object' == typeof o) {
            if (e.constructor !== o.constructor) return !1;
            var s, l, u, c;
            if (Array.isArray(e)) {
              if ((s = e.length) != o.length) return !1;
              for (l = s; 0 !== l--; ) if (!a(e[l], o[l])) return !1;
              return !0;
            }
            if (n && e instanceof Map && o instanceof Map) {
              if (e.size !== o.size) return !1;
              for (c = e.entries(); !(l = c.next()).done; )
                if (!o.has(l.value[0])) return !1;
              for (c = e.entries(); !(l = c.next()).done; )
                if (!a(l.value[1], o.get(l.value[0]))) return !1;
              return !0;
            }
            if (r && e instanceof Set && o instanceof Set) {
              if (e.size !== o.size) return !1;
              for (c = e.entries(); !(l = c.next()).done; )
                if (!o.has(l.value[0])) return !1;
              return !0;
            }
            if (i && ArrayBuffer.isView(e) && ArrayBuffer.isView(o)) {
              if ((s = e.length) != o.length) return !1;
              for (l = s; 0 !== l--; ) if (e[l] !== o[l]) return !1;
              return !0;
            }
            if (e.constructor === RegExp)
              return e.source === o.source && e.flags === o.flags;
            if (e.valueOf !== Object.prototype.valueOf)
              return e.valueOf() === o.valueOf();
            if (e.toString !== Object.prototype.toString)
              return e.toString() === o.toString();
            if ((s = (u = Object.keys(e)).length) !== Object.keys(o).length)
              return !1;
            for (l = s; 0 !== l--; )
              if (!Object.prototype.hasOwnProperty.call(o, u[l])) return !1;
            if (t && e instanceof Element) return !1;
            for (l = s; 0 !== l--; )
              if (
                (('_owner' !== u[l] && '__v' !== u[l] && '__o' !== u[l]) ||
                  !e.$$typeof) &&
                !a(e[u[l]], o[u[l]])
              )
                return !1;
            return !0;
          }
          return e !== e && o !== o;
        }
        e.exports = function (e, t) {
          try {
            return a(e, t);
          } catch (n) {
            if ((n.message || '').match(/stack|recursion/i))
              return (
                console.warn('react-fast-compare cannot handle circular refs'),
                !1
              );
            throw n;
          }
        };
      },
      4805: function (e, t, n) {
        !(function (t, r) {
          var i;
          e.exports =
            ((i = n(2791)),
            (function (e) {
              function t(r) {
                if (n[r]) return n[r].exports;
                var i = (n[r] = { i: r, l: !1, exports: {} });
                return (
                  e[r].call(i.exports, i, i.exports, t), (i.l = !0), i.exports
                );
              }
              var n = {};
              return (
                (t.m = e),
                (t.c = n),
                (t.d = function (e, n, r) {
                  t.o(e, n) ||
                    Object.defineProperty(e, n, {
                      configurable: !1,
                      enumerable: !0,
                      get: r,
                    });
                }),
                (t.n = function (e) {
                  var n =
                    e && e.__esModule
                      ? function () {
                          return e.default;
                        }
                      : function () {
                          return e;
                        };
                  return t.d(n, 'a', n), n;
                }),
                (t.o = function (e, t) {
                  return Object.prototype.hasOwnProperty.call(e, t);
                }),
                (t.p = ''),
                t((t.s = 7))
              );
            })([
              function (e, t, n) {
                'use strict';
                var r =
                  (this && this.__importDefault) ||
                  function (e) {
                    return e && e.__esModule ? e : { default: e };
                  };
                Object.defineProperty(t, '__esModule', { value: !0 });
                var i = r(n(1)),
                  a = r(n(8)),
                  o = r(n(2)),
                  s = n(10),
                  l = r(n(3)),
                  u = r(n(6)),
                  c = function (e) {
                    return e.query || (0, l.default)(e);
                  },
                  d = function (e) {
                    if (!e) return null;
                    var t = Object.keys(e);
                    return 0 === t.length
                      ? null
                      : t.reduce(function (t, n) {
                          return (t[(0, o.default)(n)] = e[n]), t;
                        }, {});
                  },
                  f = function () {
                    var e = i.default.useRef(!1);
                    return (
                      i.default.useEffect(function () {
                        e.current = !0;
                      }, []),
                      e.current
                    );
                  },
                  p = function (e) {
                    var t = i.default.useContext(u.default),
                      n = function () {
                        return d(e) || d(t) || {};
                      },
                      r = i.default.useState(n),
                      a = r[0],
                      o = r[1];
                    return (
                      i.default.useEffect(
                        function () {
                          var e = n();
                          (0, s.shallowEqualObjects)(a, e) || o(e);
                        },
                        [e, t],
                      ),
                      a
                    );
                  },
                  h = function (e) {
                    var t = function () {
                        return c(e);
                      },
                      n = i.default.useState(t),
                      r = n[0],
                      a = n[1];
                    return (
                      i.default.useEffect(
                        function () {
                          var e = t();
                          r !== e && a(e);
                        },
                        [e],
                      ),
                      r
                    );
                  },
                  v = function (e, t) {
                    var n = function () {
                        return (0, a.default)(e, t);
                      },
                      r = i.default.useState(n),
                      o = r[0],
                      s = r[1],
                      l = f();
                    return (
                      i.default.useEffect(
                        function () {
                          if (l) {
                            var e = n();
                            return (
                              s(e),
                              function () {
                                e && e.dispose();
                              }
                            );
                          }
                        },
                        [e, t],
                      ),
                      o
                    );
                  },
                  m = function (e) {
                    var t = i.default.useState(e.matches),
                      n = t[0],
                      r = t[1];
                    return (
                      i.default.useEffect(
                        function () {
                          var t = function () {
                            r(e.matches);
                          };
                          return (
                            e.addListener(t),
                            t(),
                            function () {
                              e.removeListener(t);
                            }
                          );
                        },
                        [e],
                      ),
                      n
                    );
                  },
                  g = function (e, t, n) {
                    var r = p(t),
                      a = h(e);
                    if (!a) throw new Error('Invalid or missing MediaQuery!');
                    var o = v(a, r),
                      s = m(o),
                      l = f();
                    return (
                      i.default.useEffect(
                        function () {
                          l && n && n(s);
                        },
                        [s],
                      ),
                      i.default.useEffect(function () {
                        return function () {
                          o && o.dispose();
                        };
                      }, []),
                      s
                    );
                  };
                t.default = g;
              },
              function (e, t) {
                e.exports = i;
              },
              function (e, t, n) {
                'use strict';
                function r(e) {
                  return '-' + e.toLowerCase();
                }
                function i(e) {
                  if (s.hasOwnProperty(e)) return s[e];
                  var t = e.replace(a, r);
                  return (s[e] = o.test(t) ? '-' + t : t);
                }
                Object.defineProperty(t, '__esModule', { value: !0 });
                var a = /[A-Z]/g,
                  o = /^ms-/,
                  s = {};
                t.default = i;
              },
              function (e, t, n) {
                'use strict';
                var r =
                  (this && this.__importDefault) ||
                  function (e) {
                    return e && e.__esModule ? e : { default: e };
                  };
                Object.defineProperty(t, '__esModule', { value: !0 });
                var i = r(n(2)),
                  a = r(n(11)),
                  o = function (e) {
                    return 'not '.concat(e);
                  },
                  s = function (e, t) {
                    var n = (0, i.default)(e);
                    return (
                      'number' == typeof t && (t = ''.concat(t, 'px')),
                      !0 === t
                        ? n
                        : !1 === t
                        ? o(n)
                        : '('.concat(n, ': ').concat(t, ')')
                    );
                  },
                  l = function (e) {
                    return e.join(' and ');
                  },
                  u = function (e) {
                    var t = [];
                    return (
                      Object.keys(a.default.all).forEach(function (n) {
                        var r = e[n];
                        null != r && t.push(s(n, r));
                      }),
                      l(t)
                    );
                  };
                t.default = u;
              },
              function (e, t, n) {
                'use strict';
                e.exports = n(13);
              },
              function (e, t, n) {
                'use strict';
                e.exports = 'SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED';
              },
              function (e, t, n) {
                'use strict';
                var r =
                  (this && this.__importDefault) ||
                  function (e) {
                    return e && e.__esModule ? e : { default: e };
                  };
                Object.defineProperty(t, '__esModule', { value: !0 });
                var i = r(n(1)).default.createContext({});
                t.default = i;
              },
              function (e, t, n) {
                'use strict';
                var r =
                  (this && this.__importDefault) ||
                  function (e) {
                    return e && e.__esModule ? e : { default: e };
                  };
                Object.defineProperty(t, '__esModule', { value: !0 }),
                  (t.Context =
                    t.toQuery =
                    t.useMediaQuery =
                    t.default =
                      void 0);
                var i = r(n(0));
                t.useMediaQuery = i.default;
                var a = r(n(17));
                t.default = a.default;
                var o = r(n(3));
                t.toQuery = o.default;
                var s = r(n(6));
                t.Context = s.default;
              },
              function (e, t, n) {
                'use strict';
                function r(e, t, n) {
                  function r(e) {
                    c && c.addListener(e);
                  }
                  function i(e) {
                    c && c.removeListener(e);
                  }
                  function s(e) {
                    (u.matches = e.matches), (u.media = e.media);
                  }
                  function l() {
                    c && c.removeListener(s);
                  }
                  var u = this;
                  if (o && !n) {
                    var c = o.call(window, e);
                    (this.matches = c.matches),
                      (this.media = c.media),
                      c.addListener(s);
                  } else (this.matches = a(e, t)), (this.media = e);
                  (this.addListener = r),
                    (this.removeListener = i),
                    (this.dispose = l);
                }
                function i(e, t, n) {
                  return new r(e, t, n);
                }
                var a = n(9).match,
                  o = 'undefined' != typeof window ? window.matchMedia : null;
                e.exports = i;
              },
              function (e, t, n) {
                'use strict';
                function r(e, t) {
                  return i(e).some(function (e) {
                    var n = e.inverse,
                      r = 'all' === e.type || t.type === e.type;
                    if ((r && n) || (!r && !n)) return !1;
                    var i = e.expressions.every(function (e) {
                      var n = e.feature,
                        r = e.modifier,
                        i = e.value,
                        l = t[n];
                      if (!l) return !1;
                      switch (n) {
                        case 'orientation':
                        case 'scan':
                          return l.toLowerCase() === i.toLowerCase();
                        case 'width':
                        case 'height':
                        case 'device-width':
                        case 'device-height':
                          (i = s(i)), (l = s(l));
                          break;
                        case 'resolution':
                          (i = o(i)), (l = o(l));
                          break;
                        case 'aspect-ratio':
                        case 'device-aspect-ratio':
                        case 'device-pixel-ratio':
                          (i = a(i)), (l = a(l));
                          break;
                        case 'grid':
                        case 'color':
                        case 'color-index':
                        case 'monochrome':
                          (i = parseInt(i, 10) || 1),
                            (l = parseInt(l, 10) || 0);
                      }
                      switch (r) {
                        case 'min':
                          return l >= i;
                        case 'max':
                          return l <= i;
                        default:
                          return l === i;
                      }
                    });
                    return (i && !n) || (!i && n);
                  });
                }
                function i(e) {
                  return e.split(',').map(function (e) {
                    var t = (e = e.trim()).match(l),
                      n = t[1],
                      r = t[2],
                      i = t[3] || '',
                      a = {};
                    return (
                      (a.inverse = !!n && 'not' === n.toLowerCase()),
                      (a.type = r ? r.toLowerCase() : 'all'),
                      (i = i.match(/\([^\)]+\)/g) || []),
                      (a.expressions = i.map(function (e) {
                        var t = e.match(u),
                          n = t[1].toLowerCase().match(c);
                        return { modifier: n[1], feature: n[2], value: t[2] };
                      })),
                      a
                    );
                  });
                }
                function a(e) {
                  var t,
                    n = Number(e);
                  return (
                    n || (n = (t = e.match(/^(\d+)\s*\/\s*(\d+)$/))[1] / t[2]),
                    n
                  );
                }
                function o(e) {
                  var t = parseFloat(e);
                  switch (String(e).match(f)[1]) {
                    case 'dpcm':
                      return t / 2.54;
                    case 'dppx':
                      return 96 * t;
                    default:
                      return t;
                  }
                }
                function s(e) {
                  var t = parseFloat(e);
                  switch (String(e).match(d)[1]) {
                    case 'em':
                    case 'rem':
                      return 16 * t;
                    case 'cm':
                      return (96 * t) / 2.54;
                    case 'mm':
                      return (96 * t) / 2.54 / 10;
                    case 'in':
                      return 96 * t;
                    case 'pt':
                      return 72 * t;
                    case 'pc':
                      return (72 * t) / 12;
                    default:
                      return t;
                  }
                }
                (t.match = r), (t.parse = i);
                var l = /(?:(only|not)?\s*([^\s\(\)]+)(?:\s*and)?\s*)?(.+)?/i,
                  u = /\(\s*([^\s\:\)]+)\s*(?:\:\s*([^\s\)]+))?\s*\)/,
                  c = /^(?:(min|max)-)?(.+)/,
                  d = /(em|rem|px|cm|mm|in|pt|pc)?$/,
                  f = /(dpi|dpcm|dppx)?$/;
              },
              function (e, t, n) {
                'use strict';
                function r(e, t) {
                  if (e === t) return !0;
                  if (!e || !t) return !1;
                  var n = Object.keys(e),
                    r = Object.keys(t),
                    i = n.length;
                  if (r.length !== i) return !1;
                  for (var a = 0; a < i; a++) {
                    var o = n[a];
                    if (
                      e[o] !== t[o] ||
                      !Object.prototype.hasOwnProperty.call(t, o)
                    )
                      return !1;
                  }
                  return !0;
                }
                function i(e, t) {
                  if (e === t) return !0;
                  if (!e || !t) return !1;
                  var n = e.length;
                  if (t.length !== n) return !1;
                  for (var r = 0; r < n; r++) if (e[r] !== t[r]) return !1;
                  return !0;
                }
                Object.defineProperty(t, '__esModule', { value: !0 }),
                  n.d(t, 'shallowEqualArrays', function () {
                    return i;
                  }),
                  n.d(t, 'shallowEqualObjects', function () {
                    return r;
                  });
              },
              function (e, t, n) {
                'use strict';
                var r =
                    (this && this.__assign) ||
                    function () {
                      return (
                        (r =
                          Object.assign ||
                          function (e) {
                            for (var t, n = 1, r = arguments.length; n < r; n++)
                              for (var i in (t = arguments[n]))
                                Object.prototype.hasOwnProperty.call(t, i) &&
                                  (e[i] = t[i]);
                            return e;
                          }),
                        r.apply(this, arguments)
                      );
                    },
                  i =
                    (this && this.__rest) ||
                    function (e, t) {
                      var n = {};
                      for (var r in e)
                        Object.prototype.hasOwnProperty.call(e, r) &&
                          t.indexOf(r) < 0 &&
                          (n[r] = e[r]);
                      if (
                        null != e &&
                        'function' == typeof Object.getOwnPropertySymbols
                      ) {
                        var i = 0;
                        for (
                          r = Object.getOwnPropertySymbols(e);
                          i < r.length;
                          i++
                        )
                          t.indexOf(r[i]) < 0 &&
                            Object.prototype.propertyIsEnumerable.call(
                              e,
                              r[i],
                            ) &&
                            (n[r[i]] = e[r[i]]);
                      }
                      return n;
                    },
                  a =
                    (this && this.__importDefault) ||
                    function (e) {
                      return e && e.__esModule ? e : { default: e };
                    };
                Object.defineProperty(t, '__esModule', { value: !0 });
                var o = a(n(12)),
                  s = o.default.oneOfType([o.default.string, o.default.number]),
                  l = {
                    all: o.default.bool,
                    grid: o.default.bool,
                    aural: o.default.bool,
                    braille: o.default.bool,
                    handheld: o.default.bool,
                    print: o.default.bool,
                    projection: o.default.bool,
                    screen: o.default.bool,
                    tty: o.default.bool,
                    tv: o.default.bool,
                    embossed: o.default.bool,
                  },
                  u = {
                    orientation: o.default.oneOf(['portrait', 'landscape']),
                    scan: o.default.oneOf(['progressive', 'interlace']),
                    aspectRatio: o.default.string,
                    deviceAspectRatio: o.default.string,
                    height: s,
                    deviceHeight: s,
                    width: s,
                    deviceWidth: s,
                    color: o.default.bool,
                    colorIndex: o.default.bool,
                    monochrome: o.default.bool,
                    resolution: s,
                    type: Object.keys(l),
                  },
                  c = i(u, ['type']),
                  d = r(
                    {
                      minAspectRatio: o.default.string,
                      maxAspectRatio: o.default.string,
                      minDeviceAspectRatio: o.default.string,
                      maxDeviceAspectRatio: o.default.string,
                      minHeight: s,
                      maxHeight: s,
                      minDeviceHeight: s,
                      maxDeviceHeight: s,
                      minWidth: s,
                      maxWidth: s,
                      minDeviceWidth: s,
                      maxDeviceWidth: s,
                      minColor: o.default.number,
                      maxColor: o.default.number,
                      minColorIndex: o.default.number,
                      maxColorIndex: o.default.number,
                      minMonochrome: o.default.number,
                      maxMonochrome: o.default.number,
                      minResolution: s,
                      maxResolution: s,
                    },
                    c,
                  ),
                  f = r(r({}, l), d);
                t.default = { all: f, types: l, matchers: u, features: d };
              },
              function (e, t, n) {
                var r = n(4);
                e.exports = n(14)(r.isElement, !0);
              },
              function (e, t, n) {
                'use strict';
                !(function () {
                  function e(e) {
                    return (
                      'string' == typeof e ||
                      'function' == typeof e ||
                      e === b ||
                      e === C ||
                      e === x ||
                      e === w ||
                      e === P ||
                      e === O ||
                      ('object' == typeof e &&
                        null !== e &&
                        (e.$$typeof === L ||
                          e.$$typeof === j ||
                          e.$$typeof === S ||
                          e.$$typeof === E ||
                          e.$$typeof === T ||
                          e.$$typeof === A ||
                          e.$$typeof === M ||
                          e.$$typeof === N ||
                          e.$$typeof === _))
                    );
                  }
                  function n(e) {
                    if ('object' == typeof e && null !== e) {
                      var t = e.$$typeof;
                      switch (t) {
                        case g:
                          var n = e.type;
                          switch (n) {
                            case k:
                            case C:
                            case b:
                            case x:
                            case w:
                            case P:
                              return n;
                            default:
                              var r = n && n.$$typeof;
                              switch (r) {
                                case E:
                                case T:
                                case L:
                                case j:
                                case S:
                                  return r;
                                default:
                                  return t;
                              }
                          }
                        case y:
                          return t;
                      }
                    }
                  }
                  function r(e) {
                    return (
                      Y ||
                        ((Y = !0),
                        console.warn(
                          'The ReactIs.isAsyncMode() alias has been deprecated, and will be removed in React 17+. Update your code to use ReactIs.isConcurrentMode() instead. It has the exact same API.',
                        )),
                      i(e) || n(e) === k
                    );
                  }
                  function i(e) {
                    return n(e) === C;
                  }
                  function a(e) {
                    return n(e) === E;
                  }
                  function o(e) {
                    return n(e) === S;
                  }
                  function s(e) {
                    return (
                      'object' == typeof e && null !== e && e.$$typeof === g
                    );
                  }
                  function l(e) {
                    return n(e) === T;
                  }
                  function u(e) {
                    return n(e) === b;
                  }
                  function c(e) {
                    return n(e) === L;
                  }
                  function d(e) {
                    return n(e) === j;
                  }
                  function f(e) {
                    return n(e) === y;
                  }
                  function p(e) {
                    return n(e) === x;
                  }
                  function h(e) {
                    return n(e) === w;
                  }
                  function v(e) {
                    return n(e) === P;
                  }
                  var m = 'function' == typeof Symbol && Symbol.for,
                    g = m ? Symbol.for('react.element') : 60103,
                    y = m ? Symbol.for('react.portal') : 60106,
                    b = m ? Symbol.for('react.fragment') : 60107,
                    w = m ? Symbol.for('react.strict_mode') : 60108,
                    x = m ? Symbol.for('react.profiler') : 60114,
                    S = m ? Symbol.for('react.provider') : 60109,
                    E = m ? Symbol.for('react.context') : 60110,
                    k = m ? Symbol.for('react.async_mode') : 60111,
                    C = m ? Symbol.for('react.concurrent_mode') : 60111,
                    T = m ? Symbol.for('react.forward_ref') : 60112,
                    P = m ? Symbol.for('react.suspense') : 60113,
                    O = m ? Symbol.for('react.suspense_list') : 60120,
                    j = m ? Symbol.for('react.memo') : 60115,
                    L = m ? Symbol.for('react.lazy') : 60116,
                    _ = m ? Symbol.for('react.block') : 60121,
                    A = m ? Symbol.for('react.fundamental') : 60117,
                    M = m ? Symbol.for('react.responder') : 60118,
                    N = m ? Symbol.for('react.scope') : 60119,
                    R = k,
                    I = C,
                    D = E,
                    z = S,
                    V = g,
                    F = T,
                    B = b,
                    U = L,
                    $ = j,
                    q = y,
                    H = x,
                    W = w,
                    G = P,
                    Y = !1;
                  (t.AsyncMode = R),
                    (t.ConcurrentMode = I),
                    (t.ContextConsumer = D),
                    (t.ContextProvider = z),
                    (t.Element = V),
                    (t.ForwardRef = F),
                    (t.Fragment = B),
                    (t.Lazy = U),
                    (t.Memo = $),
                    (t.Portal = q),
                    (t.Profiler = H),
                    (t.StrictMode = W),
                    (t.Suspense = G),
                    (t.isAsyncMode = r),
                    (t.isConcurrentMode = i),
                    (t.isContextConsumer = a),
                    (t.isContextProvider = o),
                    (t.isElement = s),
                    (t.isForwardRef = l),
                    (t.isFragment = u),
                    (t.isLazy = c),
                    (t.isMemo = d),
                    (t.isPortal = f),
                    (t.isProfiler = p),
                    (t.isStrictMode = h),
                    (t.isSuspense = v),
                    (t.isValidElementType = e),
                    (t.typeOf = n);
                })();
              },
              function (e, t, n) {
                'use strict';
                function r() {
                  return null;
                }
                var i = n(4),
                  a = n(15),
                  o = n(5),
                  s = n(16),
                  l = Function.call.bind(Object.prototype.hasOwnProperty),
                  u = function () {};
                (u = function (e) {
                  var t = 'Warning: ' + e;
                  'undefined' != typeof console && console.error(t);
                  try {
                    throw new Error(t);
                  } catch (n) {}
                }),
                  (e.exports = function (e, t) {
                    function n(e) {
                      var t = e && ((P && e[P]) || e[O]);
                      if ('function' == typeof t) return t;
                    }
                    function c(e, t) {
                      return e === t
                        ? 0 !== e || 1 / e == 1 / t
                        : e !== e && t !== t;
                    }
                    function d(e) {
                      (this.message = e), (this.stack = '');
                    }
                    function f(e) {
                      function n(n, a, s, l, c, f, p) {
                        if (((l = l || j), (f = f || s), p !== o)) {
                          if (t) {
                            var h = new Error(
                              'Calling PropTypes validators directly is not supported by the `prop-types` package. Use `PropTypes.checkPropTypes()` to call them. Read more at http://fb.me/use-check-prop-types',
                            );
                            throw ((h.name = 'Invariant Violation'), h);
                          }
                          if ('undefined' != typeof console) {
                            var v = l + ':' + s;
                            !r[v] &&
                              i < 3 &&
                              (u(
                                'You are manually calling a React.PropTypes validation function for the `' +
                                  f +
                                  '` prop on `' +
                                  l +
                                  '`. This is deprecated and will throw in the standalone `prop-types` package. You may be seeing this warning due to a third-party PropTypes library. See https://fb.me/react-warning-dont-call-proptypes for details.',
                              ),
                              (r[v] = !0),
                              i++);
                          }
                        }
                        return null == a[s]
                          ? n
                            ? new d(
                                null === a[s]
                                  ? 'The ' +
                                    c +
                                    ' `' +
                                    f +
                                    '` is marked as required in `' +
                                    l +
                                    '`, but its value is `null`.'
                                  : 'The ' +
                                    c +
                                    ' `' +
                                    f +
                                    '` is marked as required in `' +
                                    l +
                                    '`, but its value is `undefined`.',
                              )
                            : null
                          : e(a, s, l, c, f);
                      }
                      var r = {},
                        i = 0,
                        a = n.bind(null, !1);
                      return (a.isRequired = n.bind(null, !0)), a;
                    }
                    function p(e) {
                      function t(t, n, r, i, a, o) {
                        var s = t[n];
                        return E(s) !== e
                          ? new d(
                              'Invalid ' +
                                i +
                                ' `' +
                                a +
                                '` of type `' +
                                k(s) +
                                '` supplied to `' +
                                r +
                                '`, expected `' +
                                e +
                                '`.',
                            )
                          : null;
                      }
                      return f(t);
                    }
                    function h(e) {
                      function t(t, n, r, i, a) {
                        if ('function' != typeof e)
                          return new d(
                            'Property `' +
                              a +
                              '` of component `' +
                              r +
                              '` has invalid PropType notation inside arrayOf.',
                          );
                        var s = t[n];
                        if (!Array.isArray(s))
                          return new d(
                            'Invalid ' +
                              i +
                              ' `' +
                              a +
                              '` of type `' +
                              E(s) +
                              '` supplied to `' +
                              r +
                              '`, expected an array.',
                          );
                        for (var l = 0; l < s.length; l++) {
                          var u = e(s, l, r, i, a + '[' + l + ']', o);
                          if (u instanceof Error) return u;
                        }
                        return null;
                      }
                      return f(t);
                    }
                    function v(e) {
                      function t(t, n, r, i, a) {
                        if (!(t[n] instanceof e)) {
                          var o = e.name || j;
                          return new d(
                            'Invalid ' +
                              i +
                              ' `' +
                              a +
                              '` of type `' +
                              T(t[n]) +
                              '` supplied to `' +
                              r +
                              '`, expected instance of `' +
                              o +
                              '`.',
                          );
                        }
                        return null;
                      }
                      return f(t);
                    }
                    function m(e) {
                      function t(t, n, r, i, a) {
                        for (var o = t[n], s = 0; s < e.length; s++)
                          if (c(o, e[s])) return null;
                        var l = JSON.stringify(e, function (e, t) {
                          return 'symbol' === k(t) ? String(t) : t;
                        });
                        return new d(
                          'Invalid ' +
                            i +
                            ' `' +
                            a +
                            '` of value `' +
                            String(o) +
                            '` supplied to `' +
                            r +
                            '`, expected one of ' +
                            l +
                            '.',
                        );
                      }
                      return Array.isArray(e)
                        ? f(t)
                        : (u(
                            arguments.length > 1
                              ? 'Invalid arguments supplied to oneOf, expected an array, got ' +
                                  arguments.length +
                                  ' arguments. A common mistake is to write oneOf(x, y, z) instead of oneOf([x, y, z]).'
                              : 'Invalid argument supplied to oneOf, expected an array.',
                          ),
                          r);
                    }
                    function g(e) {
                      function t(t, n, r, i, a) {
                        if ('function' != typeof e)
                          return new d(
                            'Property `' +
                              a +
                              '` of component `' +
                              r +
                              '` has invalid PropType notation inside objectOf.',
                          );
                        var s = t[n],
                          u = E(s);
                        if ('object' !== u)
                          return new d(
                            'Invalid ' +
                              i +
                              ' `' +
                              a +
                              '` of type `' +
                              u +
                              '` supplied to `' +
                              r +
                              '`, expected an object.',
                          );
                        for (var c in s)
                          if (l(s, c)) {
                            var f = e(s, c, r, i, a + '.' + c, o);
                            if (f instanceof Error) return f;
                          }
                        return null;
                      }
                      return f(t);
                    }
                    function y(e) {
                      function t(t, n, r, i, a) {
                        for (var s = 0; s < e.length; s++)
                          if (null == (0, e[s])(t, n, r, i, a, o)) return null;
                        return new d(
                          'Invalid ' +
                            i +
                            ' `' +
                            a +
                            '` supplied to `' +
                            r +
                            '`.',
                        );
                      }
                      if (!Array.isArray(e))
                        return (
                          u(
                            'Invalid argument supplied to oneOfType, expected an instance of array.',
                          ),
                          r
                        );
                      for (var n = 0; n < e.length; n++) {
                        var i = e[n];
                        if ('function' != typeof i)
                          return (
                            u(
                              'Invalid argument supplied to oneOfType. Expected an array of check functions, but received ' +
                                C(i) +
                                ' at index ' +
                                n +
                                '.',
                            ),
                            r
                          );
                      }
                      return f(t);
                    }
                    function b(e) {
                      function t(t, n, r, i, a) {
                        var s = t[n],
                          l = E(s);
                        if ('object' !== l)
                          return new d(
                            'Invalid ' +
                              i +
                              ' `' +
                              a +
                              '` of type `' +
                              l +
                              '` supplied to `' +
                              r +
                              '`, expected `object`.',
                          );
                        for (var u in e) {
                          var c = e[u];
                          if (c) {
                            var f = c(s, u, r, i, a + '.' + u, o);
                            if (f) return f;
                          }
                        }
                        return null;
                      }
                      return f(t);
                    }
                    function w(e) {
                      function t(t, n, r, i, s) {
                        var l = t[n],
                          u = E(l);
                        if ('object' !== u)
                          return new d(
                            'Invalid ' +
                              i +
                              ' `' +
                              s +
                              '` of type `' +
                              u +
                              '` supplied to `' +
                              r +
                              '`, expected `object`.',
                          );
                        var c = a({}, t[n], e);
                        for (var f in c) {
                          var p = e[f];
                          if (!p)
                            return new d(
                              'Invalid ' +
                                i +
                                ' `' +
                                s +
                                '` key `' +
                                f +
                                '` supplied to `' +
                                r +
                                '`.\nBad object: ' +
                                JSON.stringify(t[n], null, '  ') +
                                '\nValid keys: ' +
                                JSON.stringify(Object.keys(e), null, '  '),
                            );
                          var h = p(l, f, r, i, s + '.' + f, o);
                          if (h) return h;
                        }
                        return null;
                      }
                      return f(t);
                    }
                    function x(t) {
                      switch (typeof t) {
                        case 'number':
                        case 'string':
                        case 'undefined':
                          return !0;
                        case 'boolean':
                          return !t;
                        case 'object':
                          if (Array.isArray(t)) return t.every(x);
                          if (null === t || e(t)) return !0;
                          var r = n(t);
                          if (!r) return !1;
                          var i,
                            a = r.call(t);
                          if (r !== t.entries) {
                            for (; !(i = a.next()).done; )
                              if (!x(i.value)) return !1;
                          } else
                            for (; !(i = a.next()).done; ) {
                              var o = i.value;
                              if (o && !x(o[1])) return !1;
                            }
                          return !0;
                        default:
                          return !1;
                      }
                    }
                    function S(e, t) {
                      return (
                        'symbol' === e ||
                        (!!t &&
                          ('Symbol' === t['@@toStringTag'] ||
                            ('function' == typeof Symbol &&
                              t instanceof Symbol)))
                      );
                    }
                    function E(e) {
                      var t = typeof e;
                      return Array.isArray(e)
                        ? 'array'
                        : e instanceof RegExp
                        ? 'object'
                        : S(t, e)
                        ? 'symbol'
                        : t;
                    }
                    function k(e) {
                      if (void 0 === e || null === e) return '' + e;
                      var t = E(e);
                      if ('object' === t) {
                        if (e instanceof Date) return 'date';
                        if (e instanceof RegExp) return 'regexp';
                      }
                      return t;
                    }
                    function C(e) {
                      var t = k(e);
                      switch (t) {
                        case 'array':
                        case 'object':
                          return 'an ' + t;
                        case 'boolean':
                        case 'date':
                        case 'regexp':
                          return 'a ' + t;
                        default:
                          return t;
                      }
                    }
                    function T(e) {
                      return e.constructor && e.constructor.name
                        ? e.constructor.name
                        : j;
                    }
                    var P = 'function' == typeof Symbol && Symbol.iterator,
                      O = '@@iterator',
                      j = '<<anonymous>>',
                      L = {
                        array: p('array'),
                        bool: p('boolean'),
                        func: p('function'),
                        number: p('number'),
                        object: p('object'),
                        string: p('string'),
                        symbol: p('symbol'),
                        any: f(r),
                        arrayOf: h,
                        element: (function () {
                          function t(t, n, r, i, a) {
                            var o = t[n];
                            return e(o)
                              ? null
                              : new d(
                                  'Invalid ' +
                                    i +
                                    ' `' +
                                    a +
                                    '` of type `' +
                                    E(o) +
                                    '` supplied to `' +
                                    r +
                                    '`, expected a single ReactElement.',
                                );
                          }
                          return f(t);
                        })(),
                        elementType: (function () {
                          function e(e, t, n, r, a) {
                            var o = e[t];
                            return i.isValidElementType(o)
                              ? null
                              : new d(
                                  'Invalid ' +
                                    r +
                                    ' `' +
                                    a +
                                    '` of type `' +
                                    E(o) +
                                    '` supplied to `' +
                                    n +
                                    '`, expected a single ReactElement type.',
                                );
                          }
                          return f(e);
                        })(),
                        instanceOf: v,
                        node: (function () {
                          function e(e, t, n, r, i) {
                            return x(e[t])
                              ? null
                              : new d(
                                  'Invalid ' +
                                    r +
                                    ' `' +
                                    i +
                                    '` supplied to `' +
                                    n +
                                    '`, expected a ReactNode.',
                                );
                          }
                          return f(e);
                        })(),
                        objectOf: g,
                        oneOf: m,
                        oneOfType: y,
                        shape: b,
                        exact: w,
                      };
                    return (
                      (d.prototype = Error.prototype),
                      (L.checkPropTypes = s),
                      (L.resetWarningCache = s.resetWarningCache),
                      (L.PropTypes = L),
                      L
                    );
                  });
              },
              function (e, t, n) {
                'use strict';
                function r(e) {
                  if (null === e || void 0 === e)
                    throw new TypeError(
                      'Object.assign cannot be called with null or undefined',
                    );
                  return Object(e);
                }
                var i = Object.getOwnPropertySymbols,
                  a = Object.prototype.hasOwnProperty,
                  o = Object.prototype.propertyIsEnumerable;
                e.exports = (function () {
                  try {
                    if (!Object.assign) return !1;
                    var e = new String('abc');
                    if (
                      ((e[5] = 'de'), '5' === Object.getOwnPropertyNames(e)[0])
                    )
                      return !1;
                    for (var t = {}, n = 0; n < 10; n++)
                      t['_' + String.fromCharCode(n)] = n;
                    if (
                      '0123456789' !==
                      Object.getOwnPropertyNames(t)
                        .map(function (e) {
                          return t[e];
                        })
                        .join('')
                    )
                      return !1;
                    var r = {};
                    return (
                      'abcdefghijklmnopqrst'.split('').forEach(function (e) {
                        r[e] = e;
                      }),
                      'abcdefghijklmnopqrst' ===
                        Object.keys(Object.assign({}, r)).join('')
                    );
                  } catch (i) {
                    return !1;
                  }
                })()
                  ? Object.assign
                  : function (e, t) {
                      for (
                        var n, s, l = r(e), u = 1;
                        u < arguments.length;
                        u++
                      ) {
                        for (var c in (n = Object(arguments[u])))
                          a.call(n, c) && (l[c] = n[c]);
                        if (i) {
                          s = i(n);
                          for (var d = 0; d < s.length; d++)
                            o.call(n, s[d]) && (l[s[d]] = n[s[d]]);
                        }
                      }
                      return l;
                    };
              },
              function (e, t, n) {
                'use strict';
                function r(e, t, n, r, l) {
                  for (var u in e)
                    if (s(e, u)) {
                      var c;
                      try {
                        if ('function' != typeof e[u]) {
                          var d = Error(
                            (r || 'React class') +
                              ': ' +
                              n +
                              ' type `' +
                              u +
                              '` is invalid; it must be a function, usually from the `prop-types` package, but received `' +
                              typeof e[u] +
                              '`.',
                          );
                          throw ((d.name = 'Invariant Violation'), d);
                        }
                        c = e[u](t, u, r, n, null, a);
                      } catch (p) {
                        c = p;
                      }
                      if (
                        (!c ||
                          c instanceof Error ||
                          i(
                            (r || 'React class') +
                              ': type specification of ' +
                              n +
                              ' `' +
                              u +
                              '` is invalid; the type checker function must return `null` or an `Error` but returned a ' +
                              typeof c +
                              '. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).',
                          ),
                        c instanceof Error && !(c.message in o))
                      ) {
                        o[c.message] = !0;
                        var f = l ? l() : '';
                        i(
                          'Failed ' +
                            n +
                            ' type: ' +
                            c.message +
                            (null != f ? f : ''),
                        );
                      }
                    }
                }
                var i = function () {},
                  a = n(5),
                  o = {},
                  s = Function.call.bind(Object.prototype.hasOwnProperty);
                (i = function (e) {
                  var t = 'Warning: ' + e;
                  'undefined' != typeof console && console.error(t);
                  try {
                    throw new Error(t);
                  } catch (n) {}
                }),
                  (r.resetWarningCache = function () {
                    o = {};
                  }),
                  (e.exports = r);
              },
              function (e, t, n) {
                'use strict';
                var r =
                    (this && this.__rest) ||
                    function (e, t) {
                      var n = {};
                      for (var r in e)
                        Object.prototype.hasOwnProperty.call(e, r) &&
                          t.indexOf(r) < 0 &&
                          (n[r] = e[r]);
                      if (
                        null != e &&
                        'function' == typeof Object.getOwnPropertySymbols
                      ) {
                        var i = 0;
                        for (
                          r = Object.getOwnPropertySymbols(e);
                          i < r.length;
                          i++
                        )
                          t.indexOf(r[i]) < 0 &&
                            Object.prototype.propertyIsEnumerable.call(
                              e,
                              r[i],
                            ) &&
                            (n[r[i]] = e[r[i]]);
                      }
                      return n;
                    },
                  i =
                    (this && this.__importDefault) ||
                    function (e) {
                      return e && e.__esModule ? e : { default: e };
                    };
                Object.defineProperty(t, '__esModule', { value: !0 });
                var a = i(n(0)),
                  o = function (e) {
                    var t = e.children,
                      n = e.device,
                      i = e.onChange,
                      o = r(e, ['children', 'device', 'onChange']),
                      s = (0, a.default)(o, n, i);
                    return 'function' == typeof t ? t(s) : s ? t : null;
                  };
                t.default = o;
              },
            ]));
        })('undefined' != typeof self && self);
      },
      9475: function (e, t, n) {
        'use strict';
        var r,
          i = n(2791),
          a =
            (r = i) && 'object' === typeof r && 'default' in r ? r.default : r;
        function o(e, t, n) {
          return (
            t in e
              ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
                })
              : (e[t] = n),
            e
          );
        }
        var s = !(
          'undefined' === typeof window ||
          !window.document ||
          !window.document.createElement
        );
        e.exports = function (e, t, n) {
          if ('function' !== typeof e)
            throw new Error('Expected reducePropsToState to be a function.');
          if ('function' !== typeof t)
            throw new Error(
              'Expected handleStateChangeOnClient to be a function.',
            );
          if ('undefined' !== typeof n && 'function' !== typeof n)
            throw new Error(
              'Expected mapStateOnServer to either be undefined or a function.',
            );
          return function (r) {
            if ('function' !== typeof r)
              throw new Error(
                'Expected WrappedComponent to be a React component.',
              );
            var l,
              u = [];
            function c() {
              (l = e(
                u.map(function (e) {
                  return e.props;
                }),
              )),
                d.canUseDOM ? t(l) : n && (l = n(l));
            }
            var d = (function (e) {
              var t, n;
              function i() {
                return e.apply(this, arguments) || this;
              }
              (n = e),
                ((t = i).prototype = Object.create(n.prototype)),
                (t.prototype.constructor = t),
                (t.__proto__ = n),
                (i.peek = function () {
                  return l;
                }),
                (i.rewind = function () {
                  if (i.canUseDOM)
                    throw new Error(
                      'You may only call rewind() on the server. Call peek() to read the current state.',
                    );
                  var e = l;
                  return (l = void 0), (u = []), e;
                });
              var o = i.prototype;
              return (
                (o.UNSAFE_componentWillMount = function () {
                  u.push(this), c();
                }),
                (o.componentDidUpdate = function () {
                  c();
                }),
                (o.componentWillUnmount = function () {
                  var e = u.indexOf(this);
                  u.splice(e, 1), c();
                }),
                (o.render = function () {
                  return a.createElement(r, this.props);
                }),
                i
              );
            })(i.PureComponent);
            return (
              o(
                d,
                'displayName',
                'SideEffect(' +
                  (function (e) {
                    return e.displayName || e.name || 'Component';
                  })(r) +
                  ')',
              ),
              o(d, 'canUseDOM', s),
              d
            );
          };
        };
      },
      6374: function (e, t, n) {
        'use strict';
        n(1725);
        var r = n(2791),
          i = 60103;
        if ((60107, 'function' === typeof Symbol && Symbol.for)) {
          var a = Symbol.for;
          (i = a('react.element')), a('react.fragment');
        }
        var o =
            r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED
              .ReactCurrentOwner,
          s = Object.prototype.hasOwnProperty,
          l = { key: !0, ref: !0, __self: !0, __source: !0 };
        function u(e, t, n) {
          var r,
            a = {},
            u = null,
            c = null;
          for (r in (void 0 !== n && (u = '' + n),
          void 0 !== t.key && (u = '' + t.key),
          void 0 !== t.ref && (c = t.ref),
          t))
            s.call(t, r) && !l.hasOwnProperty(r) && (a[r] = t[r]);
          if (e && e.defaultProps)
            for (r in (t = e.defaultProps)) void 0 === a[r] && (a[r] = t[r]);
          return {
            $$typeof: i,
            type: e,
            key: u,
            ref: c,
            props: a,
            _owner: o.current,
          };
        }
        (t.jsx = u), (t.jsxs = u);
      },
      9117: function (e, t, n) {
        'use strict';
        var r = n(1725),
          i = 60103,
          a = 60106;
        (t.Fragment = 60107), (t.StrictMode = 60108), (t.Profiler = 60114);
        var o = 60109,
          s = 60110,
          l = 60112;
        t.Suspense = 60113;
        var u = 60115,
          c = 60116;
        if ('function' === typeof Symbol && Symbol.for) {
          var d = Symbol.for;
          (i = d('react.element')),
            (a = d('react.portal')),
            (t.Fragment = d('react.fragment')),
            (t.StrictMode = d('react.strict_mode')),
            (t.Profiler = d('react.profiler')),
            (o = d('react.provider')),
            (s = d('react.context')),
            (l = d('react.forward_ref')),
            (t.Suspense = d('react.suspense')),
            (u = d('react.memo')),
            (c = d('react.lazy'));
        }
        var f = 'function' === typeof Symbol && Symbol.iterator;
        function p(e) {
          for (
            var t =
                'https://reactjs.org/docs/error-decoder.html?invariant=' + e,
              n = 1;
            n < arguments.length;
            n++
          )
            t += '&args[]=' + encodeURIComponent(arguments[n]);
          return (
            'Minified React error #' +
            e +
            '; visit ' +
            t +
            ' for the full message or use the non-minified dev environment for full errors and additional helpful warnings.'
          );
        }
        var h = {
            isMounted: function () {
              return !1;
            },
            enqueueForceUpdate: function () {},
            enqueueReplaceState: function () {},
            enqueueSetState: function () {},
          },
          v = {};
        function m(e, t, n) {
          (this.props = e),
            (this.context = t),
            (this.refs = v),
            (this.updater = n || h);
        }
        function g() {}
        function y(e, t, n) {
          (this.props = e),
            (this.context = t),
            (this.refs = v),
            (this.updater = n || h);
        }
        (m.prototype.isReactComponent = {}),
          (m.prototype.setState = function (e, t) {
            if ('object' !== typeof e && 'function' !== typeof e && null != e)
              throw Error(p(85));
            this.updater.enqueueSetState(this, e, t, 'setState');
          }),
          (m.prototype.forceUpdate = function (e) {
            this.updater.enqueueForceUpdate(this, e, 'forceUpdate');
          }),
          (g.prototype = m.prototype);
        var b = (y.prototype = new g());
        (b.constructor = y), r(b, m.prototype), (b.isPureReactComponent = !0);
        var w = { current: null },
          x = Object.prototype.hasOwnProperty,
          S = { key: !0, ref: !0, __self: !0, __source: !0 };
        function E(e, t, n) {
          var r,
            a = {},
            o = null,
            s = null;
          if (null != t)
            for (r in (void 0 !== t.ref && (s = t.ref),
            void 0 !== t.key && (o = '' + t.key),
            t))
              x.call(t, r) && !S.hasOwnProperty(r) && (a[r] = t[r]);
          var l = arguments.length - 2;
          if (1 === l) a.children = n;
          else if (1 < l) {
            for (var u = Array(l), c = 0; c < l; c++) u[c] = arguments[c + 2];
            a.children = u;
          }
          if (e && e.defaultProps)
            for (r in (l = e.defaultProps)) void 0 === a[r] && (a[r] = l[r]);
          return {
            $$typeof: i,
            type: e,
            key: o,
            ref: s,
            props: a,
            _owner: w.current,
          };
        }
        function k(e) {
          return 'object' === typeof e && null !== e && e.$$typeof === i;
        }
        var C = /\/+/g;
        function T(e, t) {
          return 'object' === typeof e && null !== e && null != e.key
            ? (function (e) {
                var t = { '=': '=0', ':': '=2' };
                return (
                  '$' +
                  e.replace(/[=:]/g, function (e) {
                    return t[e];
                  })
                );
              })('' + e.key)
            : t.toString(36);
        }
        function P(e, t, n, r, o) {
          var s = typeof e;
          ('undefined' !== s && 'boolean' !== s) || (e = null);
          var l = !1;
          if (null === e) l = !0;
          else
            switch (s) {
              case 'string':
              case 'number':
                l = !0;
                break;
              case 'object':
                switch (e.$$typeof) {
                  case i:
                  case a:
                    l = !0;
                }
            }
          if (l)
            return (
              (o = o((l = e))),
              (e = '' === r ? '.' + T(l, 0) : r),
              Array.isArray(o)
                ? ((n = ''),
                  null != e && (n = e.replace(C, '$&/') + '/'),
                  P(o, t, n, '', function (e) {
                    return e;
                  }))
                : null != o &&
                  (k(o) &&
                    (o = (function (e, t) {
                      return {
                        $$typeof: i,
                        type: e.type,
                        key: t,
                        ref: e.ref,
                        props: e.props,
                        _owner: e._owner,
                      };
                    })(
                      o,
                      n +
                        (!o.key || (l && l.key === o.key)
                          ? ''
                          : ('' + o.key).replace(C, '$&/') + '/') +
                        e,
                    )),
                  t.push(o)),
              1
            );
          if (((l = 0), (r = '' === r ? '.' : r + ':'), Array.isArray(e)))
            for (var u = 0; u < e.length; u++) {
              var c = r + T((s = e[u]), u);
              l += P(s, t, n, c, o);
            }
          else if (
            ((c = (function (e) {
              return null === e || 'object' !== typeof e
                ? null
                : 'function' === typeof (e = (f && e[f]) || e['@@iterator'])
                ? e
                : null;
            })(e)),
            'function' === typeof c)
          )
            for (e = c.call(e), u = 0; !(s = e.next()).done; )
              l += P((s = s.value), t, n, (c = r + T(s, u++)), o);
          else if ('object' === s)
            throw (
              ((t = '' + e),
              Error(
                p(
                  31,
                  '[object Object]' === t
                    ? 'object with keys {' + Object.keys(e).join(', ') + '}'
                    : t,
                ),
              ))
            );
          return l;
        }
        function O(e, t, n) {
          if (null == e) return e;
          var r = [],
            i = 0;
          return (
            P(e, r, '', '', function (e) {
              return t.call(n, e, i++);
            }),
            r
          );
        }
        function j(e) {
          if (-1 === e._status) {
            var t = e._result;
            (t = t()),
              (e._status = 0),
              (e._result = t),
              t.then(
                function (t) {
                  0 === e._status &&
                    ((t = t.default), (e._status = 1), (e._result = t));
                },
                function (t) {
                  0 === e._status && ((e._status = 2), (e._result = t));
                },
              );
          }
          if (1 === e._status) return e._result;
          throw e._result;
        }
        var L = { current: null };
        function _() {
          var e = L.current;
          if (null === e) throw Error(p(321));
          return e;
        }
        var A = {
          ReactCurrentDispatcher: L,
          ReactCurrentBatchConfig: { transition: 0 },
          ReactCurrentOwner: w,
          IsSomeRendererActing: { current: !1 },
          assign: r,
        };
        (t.Children = {
          map: O,
          forEach: function (e, t, n) {
            O(
              e,
              function () {
                t.apply(this, arguments);
              },
              n,
            );
          },
          count: function (e) {
            var t = 0;
            return (
              O(e, function () {
                t++;
              }),
              t
            );
          },
          toArray: function (e) {
            return (
              O(e, function (e) {
                return e;
              }) || []
            );
          },
          only: function (e) {
            if (!k(e)) throw Error(p(143));
            return e;
          },
        }),
          (t.Component = m),
          (t.PureComponent = y),
          (t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = A),
          (t.cloneElement = function (e, t, n) {
            if (null === e || void 0 === e) throw Error(p(267, e));
            var a = r({}, e.props),
              o = e.key,
              s = e.ref,
              l = e._owner;
            if (null != t) {
              if (
                (void 0 !== t.ref && ((s = t.ref), (l = w.current)),
                void 0 !== t.key && (o = '' + t.key),
                e.type && e.type.defaultProps)
              )
                var u = e.type.defaultProps;
              for (c in t)
                x.call(t, c) &&
                  !S.hasOwnProperty(c) &&
                  (a[c] = void 0 === t[c] && void 0 !== u ? u[c] : t[c]);
            }
            var c = arguments.length - 2;
            if (1 === c) a.children = n;
            else if (1 < c) {
              u = Array(c);
              for (var d = 0; d < c; d++) u[d] = arguments[d + 2];
              a.children = u;
            }
            return {
              $$typeof: i,
              type: e.type,
              key: o,
              ref: s,
              props: a,
              _owner: l,
            };
          }),
          (t.createContext = function (e, t) {
            return (
              void 0 === t && (t = null),
              ((e = {
                $$typeof: s,
                _calculateChangedBits: t,
                _currentValue: e,
                _currentValue2: e,
                _threadCount: 0,
                Provider: null,
                Consumer: null,
              }).Provider = { $$typeof: o, _context: e }),
              (e.Consumer = e)
            );
          }),
          (t.createElement = E),
          (t.createFactory = function (e) {
            var t = E.bind(null, e);
            return (t.type = e), t;
          }),
          (t.createRef = function () {
            return { current: null };
          }),
          (t.forwardRef = function (e) {
            return { $$typeof: l, render: e };
          }),
          (t.isValidElement = k),
          (t.lazy = function (e) {
            return {
              $$typeof: c,
              _payload: { _status: -1, _result: e },
              _init: j,
            };
          }),
          (t.memo = function (e, t) {
            return { $$typeof: u, type: e, compare: void 0 === t ? null : t };
          }),
          (t.useCallback = function (e, t) {
            return _().useCallback(e, t);
          }),
          (t.useContext = function (e, t) {
            return _().useContext(e, t);
          }),
          (t.useDebugValue = function () {}),
          (t.useEffect = function (e, t) {
            return _().useEffect(e, t);
          }),
          (t.useImperativeHandle = function (e, t, n) {
            return _().useImperativeHandle(e, t, n);
          }),
          (t.useLayoutEffect = function (e, t) {
            return _().useLayoutEffect(e, t);
          }),
          (t.useMemo = function (e, t) {
            return _().useMemo(e, t);
          }),
          (t.useReducer = function (e, t, n) {
            return _().useReducer(e, t, n);
          }),
          (t.useRef = function (e) {
            return _().useRef(e);
          }),
          (t.useState = function (e) {
            return _().useState(e);
          }),
          (t.version = '17.0.2');
      },
      2791: function (e, t, n) {
        'use strict';
        e.exports = n(9117);
      },
      184: function (e, t, n) {
        'use strict';
        e.exports = n(6374);
      },
      9727: function (e) {
        var t = (function (e) {
          'use strict';
          var t,
            n = Object.prototype,
            r = n.hasOwnProperty,
            i = 'function' === typeof Symbol ? Symbol : {},
            a = i.iterator || '@@iterator',
            o = i.asyncIterator || '@@asyncIterator',
            s = i.toStringTag || '@@toStringTag';
          function l(e, t, n) {
            return (
              Object.defineProperty(e, t, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              }),
              e[t]
            );
          }
          try {
            l({}, '');
          } catch (_) {
            l = function (e, t, n) {
              return (e[t] = n);
            };
          }
          function u(e, t, n, r) {
            var i = t && t.prototype instanceof m ? t : m,
              a = Object.create(i.prototype),
              o = new O(r || []);
            return (
              (a._invoke = (function (e, t, n) {
                var r = d;
                return function (i, a) {
                  if (r === p) throw new Error('Generator is already running');
                  if (r === h) {
                    if ('throw' === i) throw a;
                    return L();
                  }
                  for (n.method = i, n.arg = a; ; ) {
                    var o = n.delegate;
                    if (o) {
                      var s = C(o, n);
                      if (s) {
                        if (s === v) continue;
                        return s;
                      }
                    }
                    if ('next' === n.method) n.sent = n._sent = n.arg;
                    else if ('throw' === n.method) {
                      if (r === d) throw ((r = h), n.arg);
                      n.dispatchException(n.arg);
                    } else 'return' === n.method && n.abrupt('return', n.arg);
                    r = p;
                    var l = c(e, t, n);
                    if ('normal' === l.type) {
                      if (((r = n.done ? h : f), l.arg === v)) continue;
                      return { value: l.arg, done: n.done };
                    }
                    'throw' === l.type &&
                      ((r = h), (n.method = 'throw'), (n.arg = l.arg));
                  }
                };
              })(e, n, o)),
              a
            );
          }
          function c(e, t, n) {
            try {
              return { type: 'normal', arg: e.call(t, n) };
            } catch (_) {
              return { type: 'throw', arg: _ };
            }
          }
          e.wrap = u;
          var d = 'suspendedStart',
            f = 'suspendedYield',
            p = 'executing',
            h = 'completed',
            v = {};
          function m() {}
          function g() {}
          function y() {}
          var b = {};
          l(b, a, function () {
            return this;
          });
          var w = Object.getPrototypeOf,
            x = w && w(w(j([])));
          x && x !== n && r.call(x, a) && (b = x);
          var S = (y.prototype = m.prototype = Object.create(b));
          function E(e) {
            ['next', 'throw', 'return'].forEach(function (t) {
              l(e, t, function (e) {
                return this._invoke(t, e);
              });
            });
          }
          function k(e, t) {
            function n(i, a, o, s) {
              var l = c(e[i], e, a);
              if ('throw' !== l.type) {
                var u = l.arg,
                  d = u.value;
                return d && 'object' === typeof d && r.call(d, '__await')
                  ? t.resolve(d.__await).then(
                      function (e) {
                        n('next', e, o, s);
                      },
                      function (e) {
                        n('throw', e, o, s);
                      },
                    )
                  : t.resolve(d).then(
                      function (e) {
                        (u.value = e), o(u);
                      },
                      function (e) {
                        return n('throw', e, o, s);
                      },
                    );
              }
              s(l.arg);
            }
            var i;
            this._invoke = function (e, r) {
              function a() {
                return new t(function (t, i) {
                  n(e, r, t, i);
                });
              }
              return (i = i ? i.then(a, a) : a());
            };
          }
          function C(e, n) {
            var r = e.iterator[n.method];
            if (r === t) {
              if (((n.delegate = null), 'throw' === n.method)) {
                if (
                  e.iterator.return &&
                  ((n.method = 'return'),
                  (n.arg = t),
                  C(e, n),
                  'throw' === n.method)
                )
                  return v;
                (n.method = 'throw'),
                  (n.arg = new TypeError(
                    "The iterator does not provide a 'throw' method",
                  ));
              }
              return v;
            }
            var i = c(r, e.iterator, n.arg);
            if ('throw' === i.type)
              return (
                (n.method = 'throw'), (n.arg = i.arg), (n.delegate = null), v
              );
            var a = i.arg;
            return a
              ? a.done
                ? ((n[e.resultName] = a.value),
                  (n.next = e.nextLoc),
                  'return' !== n.method && ((n.method = 'next'), (n.arg = t)),
                  (n.delegate = null),
                  v)
                : a
              : ((n.method = 'throw'),
                (n.arg = new TypeError('iterator result is not an object')),
                (n.delegate = null),
                v);
          }
          function T(e) {
            var t = { tryLoc: e[0] };
            1 in e && (t.catchLoc = e[1]),
              2 in e && ((t.finallyLoc = e[2]), (t.afterLoc = e[3])),
              this.tryEntries.push(t);
          }
          function P(e) {
            var t = e.completion || {};
            (t.type = 'normal'), delete t.arg, (e.completion = t);
          }
          function O(e) {
            (this.tryEntries = [{ tryLoc: 'root' }]),
              e.forEach(T, this),
              this.reset(!0);
          }
          function j(e) {
            if (e) {
              var n = e[a];
              if (n) return n.call(e);
              if ('function' === typeof e.next) return e;
              if (!isNaN(e.length)) {
                var i = -1,
                  o = function n() {
                    for (; ++i < e.length; )
                      if (r.call(e, i))
                        return (n.value = e[i]), (n.done = !1), n;
                    return (n.value = t), (n.done = !0), n;
                  };
                return (o.next = o);
              }
            }
            return { next: L };
          }
          function L() {
            return { value: t, done: !0 };
          }
          return (
            (g.prototype = y),
            l(S, 'constructor', y),
            l(y, 'constructor', g),
            (g.displayName = l(y, s, 'GeneratorFunction')),
            (e.isGeneratorFunction = function (e) {
              var t = 'function' === typeof e && e.constructor;
              return (
                !!t &&
                (t === g || 'GeneratorFunction' === (t.displayName || t.name))
              );
            }),
            (e.mark = function (e) {
              return (
                Object.setPrototypeOf
                  ? Object.setPrototypeOf(e, y)
                  : ((e.__proto__ = y), l(e, s, 'GeneratorFunction')),
                (e.prototype = Object.create(S)),
                e
              );
            }),
            (e.awrap = function (e) {
              return { __await: e };
            }),
            E(k.prototype),
            l(k.prototype, o, function () {
              return this;
            }),
            (e.AsyncIterator = k),
            (e.async = function (t, n, r, i, a) {
              void 0 === a && (a = Promise);
              var o = new k(u(t, n, r, i), a);
              return e.isGeneratorFunction(n)
                ? o
                : o.next().then(function (e) {
                    return e.done ? e.value : o.next();
                  });
            }),
            E(S),
            l(S, s, 'Generator'),
            l(S, a, function () {
              return this;
            }),
            l(S, 'toString', function () {
              return '[object Generator]';
            }),
            (e.keys = function (e) {
              var t = [];
              for (var n in e) t.push(n);
              return (
                t.reverse(),
                function n() {
                  for (; t.length; ) {
                    var r = t.pop();
                    if (r in e) return (n.value = r), (n.done = !1), n;
                  }
                  return (n.done = !0), n;
                }
              );
            }),
            (e.values = j),
            (O.prototype = {
              constructor: O,
              reset: function (e) {
                if (
                  ((this.prev = 0),
                  (this.next = 0),
                  (this.sent = this._sent = t),
                  (this.done = !1),
                  (this.delegate = null),
                  (this.method = 'next'),
                  (this.arg = t),
                  this.tryEntries.forEach(P),
                  !e)
                )
                  for (var n in this)
                    't' === n.charAt(0) &&
                      r.call(this, n) &&
                      !isNaN(+n.slice(1)) &&
                      (this[n] = t);
              },
              stop: function () {
                this.done = !0;
                var e = this.tryEntries[0].completion;
                if ('throw' === e.type) throw e.arg;
                return this.rval;
              },
              dispatchException: function (e) {
                if (this.done) throw e;
                var n = this;
                function i(r, i) {
                  return (
                    (s.type = 'throw'),
                    (s.arg = e),
                    (n.next = r),
                    i && ((n.method = 'next'), (n.arg = t)),
                    !!i
                  );
                }
                for (var a = this.tryEntries.length - 1; a >= 0; --a) {
                  var o = this.tryEntries[a],
                    s = o.completion;
                  if ('root' === o.tryLoc) return i('end');
                  if (o.tryLoc <= this.prev) {
                    var l = r.call(o, 'catchLoc'),
                      u = r.call(o, 'finallyLoc');
                    if (l && u) {
                      if (this.prev < o.catchLoc) return i(o.catchLoc, !0);
                      if (this.prev < o.finallyLoc) return i(o.finallyLoc);
                    } else if (l) {
                      if (this.prev < o.catchLoc) return i(o.catchLoc, !0);
                    } else {
                      if (!u)
                        throw new Error(
                          'try statement without catch or finally',
                        );
                      if (this.prev < o.finallyLoc) return i(o.finallyLoc);
                    }
                  }
                }
              },
              abrupt: function (e, t) {
                for (var n = this.tryEntries.length - 1; n >= 0; --n) {
                  var i = this.tryEntries[n];
                  if (
                    i.tryLoc <= this.prev &&
                    r.call(i, 'finallyLoc') &&
                    this.prev < i.finallyLoc
                  ) {
                    var a = i;
                    break;
                  }
                }
                a &&
                  ('break' === e || 'continue' === e) &&
                  a.tryLoc <= t &&
                  t <= a.finallyLoc &&
                  (a = null);
                var o = a ? a.completion : {};
                return (
                  (o.type = e),
                  (o.arg = t),
                  a
                    ? ((this.method = 'next'), (this.next = a.finallyLoc), v)
                    : this.complete(o)
                );
              },
              complete: function (e, t) {
                if ('throw' === e.type) throw e.arg;
                return (
                  'break' === e.type || 'continue' === e.type
                    ? (this.next = e.arg)
                    : 'return' === e.type
                    ? ((this.rval = this.arg = e.arg),
                      (this.method = 'return'),
                      (this.next = 'end'))
                    : 'normal' === e.type && t && (this.next = t),
                  v
                );
              },
              finish: function (e) {
                for (var t = this.tryEntries.length - 1; t >= 0; --t) {
                  var n = this.tryEntries[t];
                  if (n.finallyLoc === e)
                    return this.complete(n.completion, n.afterLoc), P(n), v;
                }
              },
              catch: function (e) {
                for (var t = this.tryEntries.length - 1; t >= 0; --t) {
                  var n = this.tryEntries[t];
                  if (n.tryLoc === e) {
                    var r = n.completion;
                    if ('throw' === r.type) {
                      var i = r.arg;
                      P(n);
                    }
                    return i;
                  }
                }
                throw new Error('illegal catch attempt');
              },
              delegateYield: function (e, n, r) {
                return (
                  (this.delegate = {
                    iterator: j(e),
                    resultName: n,
                    nextLoc: r,
                  }),
                  'next' === this.method && (this.arg = t),
                  v
                );
              },
            }),
            e
          );
        })(e.exports);
        try {
          regeneratorRuntime = t;
        } catch (n) {
          'object' === typeof globalThis
            ? (globalThis.regeneratorRuntime = t)
            : Function('r', 'regeneratorRuntime = r')(t);
        }
      },
      6813: function (e, t) {
        'use strict';
        var n, r, i, a;
        if (
          'object' === typeof performance &&
          'function' === typeof performance.now
        ) {
          var o = performance;
          t.unstable_now = function () {
            return o.now();
          };
        } else {
          var s = Date,
            l = s.now();
          t.unstable_now = function () {
            return s.now() - l;
          };
        }
        if (
          'undefined' === typeof window ||
          'function' !== typeof MessageChannel
        ) {
          var u = null,
            c = null,
            d = function e() {
              if (null !== u)
                try {
                  var n = t.unstable_now();
                  u(!0, n), (u = null);
                } catch (r) {
                  throw (setTimeout(e, 0), r);
                }
            };
          (n = function (e) {
            null !== u ? setTimeout(n, 0, e) : ((u = e), setTimeout(d, 0));
          }),
            (r = function (e, t) {
              c = setTimeout(e, t);
            }),
            (i = function () {
              clearTimeout(c);
            }),
            (t.unstable_shouldYield = function () {
              return !1;
            }),
            (a = t.unstable_forceFrameRate = function () {});
        } else {
          var f = window.setTimeout,
            p = window.clearTimeout;
          if ('undefined' !== typeof console) {
            var h = window.cancelAnimationFrame;
            'function' !== typeof window.requestAnimationFrame &&
              console.error(
                "This browser doesn't support requestAnimationFrame. Make sure that you load a polyfill in older browsers. https://reactjs.org/link/react-polyfills",
              ),
              'function' !== typeof h &&
                console.error(
                  "This browser doesn't support cancelAnimationFrame. Make sure that you load a polyfill in older browsers. https://reactjs.org/link/react-polyfills",
                );
          }
          var v = !1,
            m = null,
            g = -1,
            y = 5,
            b = 0;
          (t.unstable_shouldYield = function () {
            return t.unstable_now() >= b;
          }),
            (a = function () {}),
            (t.unstable_forceFrameRate = function (e) {
              0 > e || 125 < e
                ? console.error(
                    'forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported',
                  )
                : (y = 0 < e ? Math.floor(1e3 / e) : 5);
            });
          var w = new MessageChannel(),
            x = w.port2;
          (w.port1.onmessage = function () {
            if (null !== m) {
              var e = t.unstable_now();
              b = e + y;
              try {
                m(!0, e) ? x.postMessage(null) : ((v = !1), (m = null));
              } catch (n) {
                throw (x.postMessage(null), n);
              }
            } else v = !1;
          }),
            (n = function (e) {
              (m = e), v || ((v = !0), x.postMessage(null));
            }),
            (r = function (e, n) {
              g = f(function () {
                e(t.unstable_now());
              }, n);
            }),
            (i = function () {
              p(g), (g = -1);
            });
        }
        function S(e, t) {
          var n = e.length;
          e.push(t);
          e: for (;;) {
            var r = (n - 1) >>> 1,
              i = e[r];
            if (!(void 0 !== i && 0 < C(i, t))) break e;
            (e[r] = t), (e[n] = i), (n = r);
          }
        }
        function E(e) {
          return void 0 === (e = e[0]) ? null : e;
        }
        function k(e) {
          var t = e[0];
          if (void 0 !== t) {
            var n = e.pop();
            if (n !== t) {
              e[0] = n;
              e: for (var r = 0, i = e.length; r < i; ) {
                var a = 2 * (r + 1) - 1,
                  o = e[a],
                  s = a + 1,
                  l = e[s];
                if (void 0 !== o && 0 > C(o, n))
                  void 0 !== l && 0 > C(l, o)
                    ? ((e[r] = l), (e[s] = n), (r = s))
                    : ((e[r] = o), (e[a] = n), (r = a));
                else {
                  if (!(void 0 !== l && 0 > C(l, n))) break e;
                  (e[r] = l), (e[s] = n), (r = s);
                }
              }
            }
            return t;
          }
          return null;
        }
        function C(e, t) {
          var n = e.sortIndex - t.sortIndex;
          return 0 !== n ? n : e.id - t.id;
        }
        var T = [],
          P = [],
          O = 1,
          j = null,
          L = 3,
          _ = !1,
          A = !1,
          M = !1;
        function N(e) {
          for (var t = E(P); null !== t; ) {
            if (null === t.callback) k(P);
            else {
              if (!(t.startTime <= e)) break;
              k(P), (t.sortIndex = t.expirationTime), S(T, t);
            }
            t = E(P);
          }
        }
        function R(e) {
          if (((M = !1), N(e), !A))
            if (null !== E(T)) (A = !0), n(I);
            else {
              var t = E(P);
              null !== t && r(R, t.startTime - e);
            }
        }
        function I(e, n) {
          (A = !1), M && ((M = !1), i()), (_ = !0);
          var a = L;
          try {
            for (
              N(n), j = E(T);
              null !== j &&
              (!(j.expirationTime > n) || (e && !t.unstable_shouldYield()));

            ) {
              var o = j.callback;
              if ('function' === typeof o) {
                (j.callback = null), (L = j.priorityLevel);
                var s = o(j.expirationTime <= n);
                (n = t.unstable_now()),
                  'function' === typeof s
                    ? (j.callback = s)
                    : j === E(T) && k(T),
                  N(n);
              } else k(T);
              j = E(T);
            }
            if (null !== j) var l = !0;
            else {
              var u = E(P);
              null !== u && r(R, u.startTime - n), (l = !1);
            }
            return l;
          } finally {
            (j = null), (L = a), (_ = !1);
          }
        }
        var D = a;
        (t.unstable_IdlePriority = 5),
          (t.unstable_ImmediatePriority = 1),
          (t.unstable_LowPriority = 4),
          (t.unstable_NormalPriority = 3),
          (t.unstable_Profiling = null),
          (t.unstable_UserBlockingPriority = 2),
          (t.unstable_cancelCallback = function (e) {
            e.callback = null;
          }),
          (t.unstable_continueExecution = function () {
            A || _ || ((A = !0), n(I));
          }),
          (t.unstable_getCurrentPriorityLevel = function () {
            return L;
          }),
          (t.unstable_getFirstCallbackNode = function () {
            return E(T);
          }),
          (t.unstable_next = function (e) {
            switch (L) {
              case 1:
              case 2:
              case 3:
                var t = 3;
                break;
              default:
                t = L;
            }
            var n = L;
            L = t;
            try {
              return e();
            } finally {
              L = n;
            }
          }),
          (t.unstable_pauseExecution = function () {}),
          (t.unstable_requestPaint = D),
          (t.unstable_runWithPriority = function (e, t) {
            switch (e) {
              case 1:
              case 2:
              case 3:
              case 4:
              case 5:
                break;
              default:
                e = 3;
            }
            var n = L;
            L = e;
            try {
              return t();
            } finally {
              L = n;
            }
          }),
          (t.unstable_scheduleCallback = function (e, a, o) {
            var s = t.unstable_now();
            switch (
              ('object' === typeof o && null !== o
                ? (o = 'number' === typeof (o = o.delay) && 0 < o ? s + o : s)
                : (o = s),
              e)
            ) {
              case 1:
                var l = -1;
                break;
              case 2:
                l = 250;
                break;
              case 5:
                l = 1073741823;
                break;
              case 4:
                l = 1e4;
                break;
              default:
                l = 5e3;
            }
            return (
              (e = {
                id: O++,
                callback: a,
                priorityLevel: e,
                startTime: o,
                expirationTime: (l = o + l),
                sortIndex: -1,
              }),
              o > s
                ? ((e.sortIndex = o),
                  S(P, e),
                  null === E(T) &&
                    e === E(P) &&
                    (M ? i() : (M = !0), r(R, o - s)))
                : ((e.sortIndex = l), S(T, e), A || _ || ((A = !0), n(I))),
              e
            );
          }),
          (t.unstable_wrapCallback = function (e) {
            var t = L;
            return function () {
              var n = L;
              L = t;
              try {
                return e.apply(this, arguments);
              } finally {
                L = n;
              }
            };
          });
      },
      5296: function (e, t, n) {
        'use strict';
        e.exports = n(6813);
      },
    },
    t = {};
  function n(r) {
    var i = t[r];
    if (void 0 !== i) return i.exports;
    var a = (t[r] = { exports: {} });
    return e[r].call(a.exports, a, a.exports, n), a.exports;
  }
  (n.m = e),
    (n.n = function (e) {
      var t =
        e && e.__esModule
          ? function () {
              return e.default;
            }
          : function () {
              return e;
            };
      return n.d(t, { a: t }), t;
    }),
    (n.d = function (e, t) {
      for (var r in t)
        n.o(t, r) &&
          !n.o(e, r) &&
          Object.defineProperty(e, r, { enumerable: !0, get: t[r] });
    }),
    (n.f = {}),
    (n.e = function (e) {
      return Promise.all(
        Object.keys(n.f).reduce(function (t, r) {
          return n.f[r](e, t), t;
        }, []),
      );
    }),
    (n.u = function (e) {
      return 'static/js/' + e + '.6c2c6fb1.chunk.js';
    }),
    (n.miniCssF = function (e) {}),
    (n.g = (function () {
      if ('object' === typeof globalThis) return globalThis;
      try {
        return this || new Function('return this')();
      } catch (e) {
        if ('object' === typeof window) return window;
      }
    })()),
    (n.o = function (e, t) {
      return Object.prototype.hasOwnProperty.call(e, t);
    }),
    (function () {
      var e = {},
        t = 'isr-technology:';
      n.l = function (r, i, a, o) {
        if (e[r]) e[r].push(i);
        else {
          var s, l;
          if (void 0 !== a)
            for (
              var u = document.getElementsByTagName('script'), c = 0;
              c < u.length;
              c++
            ) {
              var d = u[c];
              if (
                d.getAttribute('src') == r ||
                d.getAttribute('data-webpack') == t + a
              ) {
                s = d;
                break;
              }
            }
          s ||
            ((l = !0),
            ((s = document.createElement('script')).charset = 'utf-8'),
            (s.timeout = 120),
            n.nc && s.setAttribute('nonce', n.nc),
            s.setAttribute('data-webpack', t + a),
            (s.src = r)),
            (e[r] = [i]);
          var f = function (t, n) {
              (s.onerror = s.onload = null), clearTimeout(p);
              var i = e[r];
              if (
                (delete e[r],
                s.parentNode && s.parentNode.removeChild(s),
                i &&
                  i.forEach(function (e) {
                    return e(n);
                  }),
                t)
              )
                return t(n);
            },
            p = setTimeout(
              f.bind(null, void 0, { type: 'timeout', target: s }),
              12e4,
            );
          (s.onerror = f.bind(null, s.onerror)),
            (s.onload = f.bind(null, s.onload)),
            l && document.head.appendChild(s);
        }
      };
    })(),
    (n.r = function (e) {
      'undefined' !== typeof Symbol &&
        Symbol.toStringTag &&
        Object.defineProperty(e, Symbol.toStringTag, { value: 'Module' }),
        Object.defineProperty(e, '__esModule', { value: !0 });
    }),
    (n.p = '/'),
    (function () {
      var e = { 179: 0 };
      n.f.j = function (t, r) {
        var i = n.o(e, t) ? e[t] : void 0;
        if (0 !== i)
          if (i) r.push(i[2]);
          else {
            var a = new Promise(function (n, r) {
              i = e[t] = [n, r];
            });
            r.push((i[2] = a));
            var o = n.p + n.u(t),
              s = new Error();
            n.l(
              o,
              function (r) {
                if (n.o(e, t) && (0 !== (i = e[t]) && (e[t] = void 0), i)) {
                  var a = r && ('load' === r.type ? 'missing' : r.type),
                    o = r && r.target && r.target.src;
                  (s.message =
                    'Loading chunk ' + t + ' failed.\n(' + a + ': ' + o + ')'),
                    (s.name = 'ChunkLoadError'),
                    (s.type = a),
                    (s.request = o),
                    i[1](s);
                }
              },
              'chunk-' + t,
              t,
            );
          }
      };
      var t = function (t, r) {
          var i,
            a,
            o = r[0],
            s = r[1],
            l = r[2],
            u = 0;
          if (
            o.some(function (t) {
              return 0 !== e[t];
            })
          ) {
            for (i in s) n.o(s, i) && (n.m[i] = s[i]);
            if (l) l(n);
          }
          for (t && t(r); u < o.length; u++)
            (a = o[u]), n.o(e, a) && e[a] && e[a][0](), (e[o[u]] = 0);
        },
        r = (self.webpackChunkisr_technology =
          self.webpackChunkisr_technology || []);
      r.forEach(t.bind(null, 0)), (r.push = t.bind(null, r.push.bind(r)));
    })();
  n(4437);
})();
//# sourceMappingURL=main.cfbfad46.js.map
