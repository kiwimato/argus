define(["exports","./my-app.js"],function(_exports,_myApp){"use strict";Object.defineProperty(_exports,"__esModule",{value:!0});_exports.usageStatistics$1=_exports.usageStatistics=_exports.runIfDevelopmentMode=_exports.ThemePropertyMixin=_exports.ThemableMixin=_exports.TextFieldMixin=_exports.TextFieldElement=_exports.Templatizer=_exports.StylingMixin=_exports.SortMixin=_exports.SelectionMixin=_exports.ScrollerElement=_exports.ScrollMixin=_exports.RowDetailsMixin=_exports.PolymerIronList=_exports.Lumo=_exports.KeyboardNavigationMixin=_exports.ItemCache=_exports.IronScrollTargetBehavior=_exports.IronResizableBehavior=_exports.GridFilterElement=_exports.GridFilterColumnElement=_exports.GridElement=_exports.GridColumnElement=_exports.FilterMixin=_exports.EventContextMixin=_exports.ElementMixin=_exports.DynamicColumnsMixin=_exports.DragAndDropMixin=_exports.DirMixin=_exports.DataProviderMixin=_exports.ControlStateMixin=_exports.ColumnResizingMixin=_exports.ColumnReorderingMixin=_exports.ColumnBaseMixin=_exports.CheckboxElement=_exports.ArrayDataProviderMixin=_exports.ActiveItemMixin=_exports.A11yMixin=_exports.$version=_exports.$vaadinUsageStatisticsCollect=_exports.$vaadinUsageStatistics=_exports.$vaadinThemePropertyMixin=_exports.$vaadinThemableMixin=_exports.$vaadinTextFieldMixin=_exports.$vaadinTextField=_exports.$vaadinGridTemplatizer=_exports.$vaadinGridStylingMixin=_exports.$vaadinGridSortMixin=_exports.$vaadinGridSelectionMixin=_exports.$vaadinGridScroller=_exports.$vaadinGridScrollMixin=_exports.$vaadinGridRowDetailsMixin=_exports.$vaadinGridKeyboardNavigationMixin=_exports.$vaadinGridFilterMixin=_exports.$vaadinGridFilterColumn=_exports.$vaadinGridFilter=_exports.$vaadinGridEventContextMixin=_exports.$vaadinGridDynamicColumnsMixin=_exports.$vaadinGridDragAndDropMixin=_exports.$vaadinGridDataProviderMixin=_exports.$vaadinGridColumnResizingMixin=_exports.$vaadinGridColumnReorderingMixin=_exports.$vaadinGridColumn=_exports.$vaadinGridArrayDataProviderMixin=_exports.$vaadinGridActiveItemMixin=_exports.$vaadinGridA11yMixin=_exports.$vaadinGrid=_exports.$vaadinElementMixin=_exports.$vaadinDirMixin=_exports.$vaadinDevelopmentModeDetector=_exports.$vaadinControlStateMixin=_exports.$vaadinCheckbox=_exports.$ironScrollTargetBehavior=_exports.$ironResizableBehavior=_exports.$ironList=void 0;/**
 * @polymerMixin
 */const ThemePropertyMixin=superClass=>class VaadinThemePropertyMixin extends superClass{static get properties(){return{/**
       * Helper property with theme attribute value facilitating propagation
       * in shadow DOM.
       *
       * Enables the component implementation to propagate the `theme`
       * attribute value to the subcomponents in Shadow DOM by binding
       * the subcomponent’s "theme" attribute to the `theme` property of
       * the host.
       *
       * **NOTE:** Extending the mixin only provides the property for binding,
       * and does not make the propagation alone.
       *
       * See [Theme Attribute and Subcomponents](https://github.com/vaadin/vaadin-themable-mixin/wiki/5.-Theme-Attribute-and-Subcomponents).
       * page for more information.
       *
       * @protected
       */theme:{type:String,readOnly:!0}}}/** @protected */attributeChangedCallback(name,oldValue,newValue){super.attributeChangedCallback(name,oldValue,newValue);if("theme"===name){this._setTheme(newValue)}}};_exports.ThemePropertyMixin=ThemePropertyMixin;var vaadinThemePropertyMixin={__proto__:null,ThemePropertyMixin:ThemePropertyMixin};_exports.$vaadinThemePropertyMixin=vaadinThemePropertyMixin;const ThemableMixin=superClass=>class VaadinThemableMixin extends ThemePropertyMixin(superClass){/** @protected */static finalize(){super.finalize();const template=this.prototype._template,hasOwnTemplate=this.template&&this.template.parentElement&&this.template.parentElement.id===this.is,inheritedTemplate=Object.getPrototypeOf(this.prototype)._template;if(inheritedTemplate&&!hasOwnTemplate){// The element doesn't define its own template -> include the theme modules from the inherited template
Array.from(inheritedTemplate.content.querySelectorAll("style[include]")).forEach(s=>{this._includeStyle(s.getAttribute("include"),template)})}this._includeMatchingThemes(template)}/** @protected */static _includeMatchingThemes(template){const domModule=_myApp.DomModule,modules=domModule.prototype.modules;let hasThemes=!1;const defaultModuleName=this.is+"-default-theme";Object.keys(modules).sort((moduleNameA,moduleNameB)=>{const vaadinA=0===moduleNameA.indexOf("vaadin-"),vaadinB=0===moduleNameB.indexOf("vaadin-"),vaadinThemePrefixes=["lumo-","material-"],vaadinThemeA=0<vaadinThemePrefixes.filter(prefix=>0===moduleNameA.indexOf(prefix)).length,vaadinThemeB=0<vaadinThemePrefixes.filter(prefix=>0===moduleNameB.indexOf(prefix)).length;if(vaadinA!==vaadinB){// Include vaadin core styles first
return vaadinA?-1:1}else if(vaadinThemeA!==vaadinThemeB){// Include vaadin theme styles after that
return vaadinThemeA?-1:1}else{// Lastly include custom styles so they override all vaadin styles
return 0}}).forEach(moduleName=>{if(moduleName!==defaultModuleName){const themeFor=modules[moduleName].getAttribute("theme-for");if(themeFor){themeFor.split(" ").forEach(themeForToken=>{if(new RegExp("^"+themeForToken.split("*").join(".*")+"$").test(this.is)){hasThemes=!0;this._includeStyle(moduleName,template)}})}}});if(!hasThemes&&modules[defaultModuleName]){// No theme modules found, include the default module if it exists
this._includeStyle(defaultModuleName,template)}}/** @private */static _includeStyle(moduleName,template){if(template&&!template.content.querySelector(`style[include="${moduleName}"]`)){const styleEl=document.createElement("style");styleEl.setAttribute("include",moduleName);template.content.appendChild(styleEl)}}};_exports.ThemableMixin=ThemableMixin;var vaadinThemableMixin={__proto__:null,ThemableMixin:ThemableMixin};/**
   @license
   Copyright (c) 2017 Vaadin Ltd.
   This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
   */ /**
       * A private mixin to avoid problems with dynamic properties and Polymer Analyzer.
       * No need to expose these properties in the API docs.
       * @polymerMixin
       */_exports.$vaadinThemableMixin=vaadinThemableMixin;const TabIndexMixin=superClass=>class VaadinTabIndexMixin extends superClass{static get properties(){var properties={/**
       * Internal property needed to listen to `tabindex` attribute changes.
       *
       * For changing the tabindex of this component use the native `tabIndex` property.
       * @private
       */tabindex:{type:Number,value:0,reflectToAttribute:!0,observer:"_tabindexChanged"}};if(window.ShadyDOM){// ShadyDOM browsers need the `tabIndex` in order to notify when the user changes it programmatically.
properties.tabIndex=properties.tabindex}return properties}},ControlStateMixin=superClass=>class VaadinControlStateMixin extends TabIndexMixin(superClass){static get properties(){return{/**
       * Specify that this control should have input focus when the page loads.
       */autofocus:{type:Boolean},/**
       * Stores the previous value of tabindex attribute of the disabled element
       */_previousTabIndex:{type:Number},/**
       * If true, the user cannot interact with this element.
       */disabled:{type:Boolean,observer:"_disabledChanged",reflectToAttribute:!0},_isShiftTabbing:{type:Boolean}}}ready(){this.addEventListener("focusin",e=>{if(e.composedPath()[0]===this){this._focus(e)}else if(-1!==e.composedPath().indexOf(this.focusElement)&&!this.disabled){this._setFocused(!0)}});this.addEventListener("focusout",e=>this._setFocused(!1));// In super.ready() other 'focusin' and 'focusout' listeners might be
// added, so we call it after our own ones to ensure they execute first.
// Issue to watch out: when incorrect, <vaadin-combo-box> refocuses the
// input field on iOS after “Done” is pressed.
super.ready();// This fixes the bug in Firefox 61 (https://bugzilla.mozilla.org/show_bug.cgi?id=1472887)
// where focusout event does not go out of shady DOM because composed property in the event is not true
const ensureEventComposed=e=>{if(!e.composed){e.target.dispatchEvent(new CustomEvent(e.type,{bubbles:!0,composed:!0,cancelable:!1}))}};this.shadowRoot.addEventListener("focusin",ensureEventComposed);this.shadowRoot.addEventListener("focusout",ensureEventComposed);this.addEventListener("keydown",e=>{if(!e.defaultPrevented&&9===e.keyCode){if(e.shiftKey){// Flag is checked in _focus event handler.
this._isShiftTabbing=!0;HTMLElement.prototype.focus.apply(this);this._setFocused(!1);// Event handling in IE is asynchronous and the flag is removed asynchronously as well
setTimeout(()=>this._isShiftTabbing=!1,0)}else{// Workaround for FF63-65 bug that causes the focus to get lost when
// blurring a slotted component with focusable shadow root content
// https://bugzilla.mozilla.org/show_bug.cgi?id=1528686
// TODO: Remove when safe
const firefox=window.navigator.userAgent.match(/Firefox\/(\d\d\.\d)/);if(firefox&&63<=parseFloat(firefox[1])&&66>parseFloat(firefox[1])&&this.parentNode&&this.nextSibling){const fakeTarget=document.createElement("input");fakeTarget.style.position="absolute";fakeTarget.style.opacity=0;fakeTarget.tabIndex=this.tabIndex;this.parentNode.insertBefore(fakeTarget,this.nextSibling);fakeTarget.focus();fakeTarget.addEventListener("focusout",()=>this.parentNode.removeChild(fakeTarget))}}}});if(this.autofocus&&!this.focused&&!this.disabled){window.requestAnimationFrame(()=>{this._focus();this._setFocused(!0);this.setAttribute("focus-ring","")})}this._boundKeydownListener=this._bodyKeydownListener.bind(this);this._boundKeyupListener=this._bodyKeyupListener.bind(this)}/**
     * @protected
     */connectedCallback(){super.connectedCallback();document.body.addEventListener("keydown",this._boundKeydownListener,!0);document.body.addEventListener("keyup",this._boundKeyupListener,!0)}/**
     * @protected
     */disconnectedCallback(){super.disconnectedCallback();document.body.removeEventListener("keydown",this._boundKeydownListener,!0);document.body.removeEventListener("keyup",this._boundKeyupListener,!0);// in non-Chrome browsers, blur does not fire on the element when it is disconnected.
// reproducible in `<vaadin-date-picker>` when closing on `Cancel` or `Today` click.
if(this.hasAttribute("focused")){this._setFocused(!1)}}_setFocused(focused){if(focused){this.setAttribute("focused","")}else{this.removeAttribute("focused")}// focus-ring is true when the element was focused from the keyboard.
// Focus Ring [A11ycasts]: https://youtu.be/ilj2P5-5CjI
if(focused&&this._tabPressed){this.setAttribute("focus-ring","")}else{this.removeAttribute("focus-ring")}}_bodyKeydownListener(e){this._tabPressed=9===e.keyCode}_bodyKeyupListener(){this._tabPressed=!1}/**
     * Any element extending this mixin is required to implement this getter.
     * It returns the actual focusable element in the component.
     */get focusElement(){window.console.warn(`Please implement the 'focusElement' property in <${this.localName}>`);return this}_focus(e){if(this._isShiftTabbing){return}this.focusElement.focus();this._setFocused(!0)}/**
     * Moving the focus from the host element causes firing of the blur event what leads to problems in IE.
     * @private
     */focus(){if(!this.focusElement||this.disabled){return}this.focusElement.focus();this._setFocused(!0)}/**
     * Native bluring in the host element does nothing because it does not have the focus.
     * In chrome it works, but not in FF.
     * @private
     */blur(){this.focusElement.blur();this._setFocused(!1)}_disabledChanged(disabled){this.focusElement.disabled=disabled;if(disabled){this.blur();this._previousTabIndex=this.tabindex;this.tabindex=-1;this.setAttribute("aria-disabled","true")}else{if("undefined"!==typeof this._previousTabIndex){this.tabindex=this._previousTabIndex}this.removeAttribute("aria-disabled")}}_tabindexChanged(tabindex){if(tabindex!==void 0){this.focusElement.tabIndex=tabindex}if(this.disabled&&this.tabindex){// If tabindex attribute was changed while checkbox was disabled
if(-1!==this.tabindex){this._previousTabIndex=this.tabindex}this.tabindex=tabindex=void 0}if(window.ShadyDOM){this.setProperties({tabIndex:tabindex,tabindex:tabindex})}}/**
     * @protected
     */click(){if(!this.disabled){super.click()}}};/**
    * Polymer.IronControlState is not a proper 2.0 class, also, its tabindex
    * implementation fails in the shadow dom, so we have this for vaadin elements.
    * @polymerMixin
    */_exports.ControlStateMixin=ControlStateMixin;var vaadinControlStateMixin={__proto__:null,ControlStateMixin:ControlStateMixin};/**
    * Array of Vaadin custom element classes that have been subscribed to the dir changes.
    */_exports.$vaadinControlStateMixin=vaadinControlStateMixin;const directionSubscribers=[],directionUpdater=function(){const documentDir=getDocumentDir();directionSubscribers.forEach(element=>{alignDirs(element,documentDir)})},directionObserver=new MutationObserver(directionUpdater);directionObserver.observe(document.documentElement,{attributes:!0,attributeFilter:["dir"]});const alignDirs=function(element,documentDir){if(documentDir){element.setAttribute("dir",documentDir)}else{element.removeAttribute("dir")}},getDocumentDir=function(){return document.documentElement.getAttribute("dir")},DirMixin=superClass=>class VaadinDirMixin extends superClass{static get properties(){return{/**
       * @protected
       */dir:{type:String,readOnly:!0}}}connectedCallback(){super.connectedCallback();if(!this.hasAttribute("dir")){this.__subscribe();alignDirs(this,getDocumentDir())}}/** @protected */attributeChangedCallback(name,oldValue,newValue){super.attributeChangedCallback(name,oldValue,newValue);if("dir"!==name){return}// New value equals to the document direction and the element is not subscribed to the changes
const newValueEqlDocDir=newValue===getDocumentDir()&&-1===directionSubscribers.indexOf(this),newValueEmptied=!newValue&&oldValue&&-1===directionSubscribers.indexOf(this),newDiffValue=newValue!==getDocumentDir()&&oldValue===getDocumentDir();// Value was emptied and the element is not subscribed to the changes
if(newValueEqlDocDir||newValueEmptied){this.__subscribe();alignDirs(this,getDocumentDir())}else if(newDiffValue){this.__subscribe(!1)}}disconnectedCallback(){super.disconnectedCallback();this.__subscribe(!1)}__subscribe(push=!0){if(push){-1===directionSubscribers.indexOf(this)&&directionSubscribers.push(this)}else{-1<directionSubscribers.indexOf(this)&&directionSubscribers.splice(directionSubscribers.indexOf(this),1)}}};_exports.DirMixin=DirMixin;var vaadinDirMixin={__proto__:null,DirMixin:DirMixin};_exports.$vaadinDirMixin=vaadinDirMixin;const DEV_MODE_CODE_REGEXP=/\/\*\*\s+vaadin-dev-mode:start([\s\S]*)vaadin-dev-mode:end\s+\*\*\//i,FlowClients=window.Vaadin&&window.Vaadin.Flow&&window.Vaadin.Flow.clients;function isMinified(){function test(){/** vaadin-dev-mode:start
    return false;
    vaadin-dev-mode:end **/return!0}return uncommentAndRun(test)}function isDevelopmentMode(){try{if(isForcedDevelopmentMode()){return!0}if(!isLocalhost()){return!1}if(FlowClients){return!isFlowProductionMode()}return!isMinified()}catch(e){// Some error in this code, assume production so no further actions will be taken
return!1}}function isForcedDevelopmentMode(){return localStorage.getItem("vaadin.developmentmode.force")}function isLocalhost(){return 0<=["localhost","127.0.0.1"].indexOf(window.location.hostname)}function isFlowProductionMode(){if(FlowClients){const productionModeApps=Object.keys(FlowClients).map(key=>FlowClients[key]).filter(client=>client.productionMode);if(0<productionModeApps.length){return!0}}return!1}function uncommentAndRun(callback,args){if("function"!==typeof callback){return}const match=DEV_MODE_CODE_REGEXP.exec(callback.toString());if(match){try{// requires CSP: script-src 'unsafe-eval'
callback=new Function(match[1])}catch(e){// eat the exception
console.log("vaadin-development-mode-detector: uncommentAndRun() failed",e)}}return callback(args)}// A guard against polymer-modulizer removing the window.Vaadin
// initialization above.
window.Vaadin=window.Vaadin||{};/**
                                            * Inspects the source code of the given `callback` function for
                                            * specially-marked _commented_ code. If such commented code is found in the
                                            * callback source, uncomments and runs that code instead of the callback
                                            * itself. Otherwise runs the callback as is.
                                            *
                                            * The optional arguments are passed into the callback / uncommented code,
                                            * the result is returned.
                                            *
                                            * See the `isMinified()` function source code in this file for an example.
                                            *
                                            */const runIfDevelopmentMode=function(callback,args){if(window.Vaadin.developmentMode){return uncommentAndRun(callback,args)}};_exports.runIfDevelopmentMode=runIfDevelopmentMode;if(window.Vaadin.developmentMode===void 0){window.Vaadin.developmentMode=isDevelopmentMode()}var vaadinDevelopmentModeDetector={__proto__:null,runIfDevelopmentMode:runIfDevelopmentMode};_exports.$vaadinDevelopmentModeDetector=vaadinDevelopmentModeDetector;function maybeGatherAndSendStats(){/** vaadin-dev-mode:start
                                    (function () {
                                    'use strict';
                                    var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) {
                                    return typeof obj;
                                    } : function (obj) {
                                    return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
                                    };
                                    var classCallCheck = function (instance, Constructor) {
                                    if (!(instance instanceof Constructor)) {
                                      throw new TypeError("Cannot call a class as a function");
                                    }
                                    };
                                    var createClass = function () {
                                    function defineProperties(target, props) {
                                      for (var i = 0; i < props.length; i++) {
                                        var descriptor = props[i];
                                        descriptor.enumerable = descriptor.enumerable || false;
                                        descriptor.configurable = true;
                                        if ("value" in descriptor) descriptor.writable = true;
                                        Object.defineProperty(target, descriptor.key, descriptor);
                                      }
                                    }
                                     return function (Constructor, protoProps, staticProps) {
                                      if (protoProps) defineProperties(Constructor.prototype, protoProps);
                                      if (staticProps) defineProperties(Constructor, staticProps);
                                      return Constructor;
                                    };
                                    }();
                                    var getPolymerVersion = function getPolymerVersion() {
                                    return window.Polymer && window.Polymer.version;
                                    };
                                    var StatisticsGatherer = function () {
                                    function StatisticsGatherer(logger) {
                                      classCallCheck(this, StatisticsGatherer);
                                       this.now = new Date().getTime();
                                      this.logger = logger;
                                    }
                                     createClass(StatisticsGatherer, [{
                                      key: 'frameworkVersionDetectors',
                                      value: function frameworkVersionDetectors() {
                                        return {
                                          'Flow': function Flow() {
                                            if (window.Vaadin && window.Vaadin.Flow && window.Vaadin.Flow.clients) {
                                              var flowVersions = Object.keys(window.Vaadin.Flow.clients).map(function (key) {
                                                return window.Vaadin.Flow.clients[key];
                                              }).filter(function (client) {
                                                return client.getVersionInfo;
                                              }).map(function (client) {
                                                return client.getVersionInfo().flow;
                                              });
                                              if (flowVersions.length > 0) {
                                                return flowVersions[0];
                                              }
                                            }
                                          },
                                          'Vaadin Framework': function VaadinFramework() {
                                            if (window.vaadin && window.vaadin.clients) {
                                              var frameworkVersions = Object.values(window.vaadin.clients).filter(function (client) {
                                                return client.getVersionInfo;
                                              }).map(function (client) {
                                                return client.getVersionInfo().vaadinVersion;
                                              });
                                              if (frameworkVersions.length > 0) {
                                                return frameworkVersions[0];
                                              }
                                            }
                                          },
                                          'AngularJs': function AngularJs() {
                                            if (window.angular && window.angular.version && window.angular.version) {
                                              return window.angular.version.full;
                                            }
                                          },
                                          'Angular': function Angular() {
                                            if (window.ng) {
                                              var tags = document.querySelectorAll("[ng-version]");
                                              if (tags.length > 0) {
                                                return tags[0].getAttribute("ng-version");
                                              }
                                              return "Unknown";
                                            }
                                          },
                                          'Backbone.js': function BackboneJs() {
                                            if (window.Backbone) {
                                              return window.Backbone.VERSION;
                                            }
                                          },
                                          'React': function React() {
                                            var reactSelector = '[data-reactroot], [data-reactid]';
                                            if (!!document.querySelector(reactSelector)) {
                                              // React does not publish the version by default
                                              return "unknown";
                                            }
                                          },
                                          'Ember': function Ember() {
                                            if (window.Em && window.Em.VERSION) {
                                              return window.Em.VERSION;
                                            } else if (window.Ember && window.Ember.VERSION) {
                                              return window.Ember.VERSION;
                                            }
                                          },
                                          'jQuery': function (_jQuery) {
                                            function jQuery() {
                                              return _jQuery.apply(this, arguments);
                                            }
                                             jQuery.toString = function () {
                                              return _jQuery.toString();
                                            };
                                             return jQuery;
                                          }(function () {
                                            if (typeof jQuery === 'function' && jQuery.prototype.jquery !== undefined) {
                                              return jQuery.prototype.jquery;
                                            }
                                          }),
                                          'Polymer': function Polymer() {
                                            var version = getPolymerVersion();
                                            if (version) {
                                              return version;
                                            }
                                          },
                                          'LitElement': function LitElement() {
                                            var version = window.litElementVersions && window.litElementVersions[0];
                                            if (version) {
                                              return version;
                                            }
                                          },
                                          'LitHtml': function LitHtml() {
                                            var version = window.litHtmlVersions && window.litHtmlVersions[0];
                                            if (version) {
                                              return version;
                                            }
                                          },
                                          'Vue.js': function VueJs() {
                                            if (window.Vue) {
                                              return window.Vue.version;
                                            }
                                          }
                                        };
                                      }
                                    }, {
                                      key: 'getUsedVaadinElements',
                                      value: function getUsedVaadinElements(elements) {
                                        var version = getPolymerVersion();
                                        var elementClasses = void 0;
                                        // NOTE: In case you edit the code here, YOU MUST UPDATE any statistics reporting code in Flow.
                                        // Check all locations calling the method getEntries() in
                                        // https://github.com/vaadin/flow/blob/master/flow-server/src/main/java/com/vaadin/flow/internal/UsageStatistics.java#L106
                                        // Currently it is only used by BootstrapHandler.
                                        if (version && version.indexOf('2') === 0) {
                                          // Polymer 2: components classes are stored in window.Vaadin
                                          elementClasses = Object.keys(window.Vaadin).map(function (c) {
                                            return window.Vaadin[c];
                                          }).filter(function (c) {
                                            return c.is;
                                          });
                                        } else {
                                          // Polymer 3: components classes are stored in window.Vaadin.registrations
                                          elementClasses = window.Vaadin.registrations || [];
                                        }
                                        elementClasses.forEach(function (klass) {
                                          var version = klass.version ? klass.version : "0.0.0";
                                          elements[klass.is] = { version: version };
                                        });
                                      }
                                    }, {
                                      key: 'getUsedVaadinThemes',
                                      value: function getUsedVaadinThemes(themes) {
                                        ['Lumo', 'Material'].forEach(function (themeName) {
                                          var theme;
                                          var version = getPolymerVersion();
                                          if (version && version.indexOf('2') === 0) {
                                            // Polymer 2: themes are stored in window.Vaadin
                                            theme = window.Vaadin[themeName];
                                          } else {
                                            // Polymer 3: themes are stored in custom element registry
                                            theme = customElements.get('vaadin-' + themeName.toLowerCase() + '-styles');
                                          }
                                          if (theme && theme.version) {
                                            themes[themeName] = { version: theme.version };
                                          }
                                        });
                                      }
                                    }, {
                                      key: 'getFrameworks',
                                      value: function getFrameworks(frameworks) {
                                        var detectors = this.frameworkVersionDetectors();
                                        Object.keys(detectors).forEach(function (framework) {
                                          var detector = detectors[framework];
                                          try {
                                            var version = detector();
                                            if (version) {
                                              frameworks[framework] = { version: version };
                                            }
                                          } catch (e) {}
                                        });
                                      }
                                    }, {
                                      key: 'gather',
                                      value: function gather(storage) {
                                        var storedStats = storage.read();
                                        var gatheredStats = {};
                                        var types = ["elements", "frameworks", "themes"];
                                         types.forEach(function (type) {
                                          gatheredStats[type] = {};
                                          if (!storedStats[type]) {
                                            storedStats[type] = {};
                                          }
                                        });
                                         var previousStats = JSON.stringify(storedStats);
                                         this.getUsedVaadinElements(gatheredStats.elements);
                                        this.getFrameworks(gatheredStats.frameworks);
                                        this.getUsedVaadinThemes(gatheredStats.themes);
                                         var now = this.now;
                                        types.forEach(function (type) {
                                          var keys = Object.keys(gatheredStats[type]);
                                          keys.forEach(function (key) {
                                            if (!storedStats[type][key] || _typeof(storedStats[type][key]) != _typeof({})) {
                                              storedStats[type][key] = { firstUsed: now };
                                            }
                                            // Discards any previously logged version number
                                            storedStats[type][key].version = gatheredStats[type][key].version;
                                            storedStats[type][key].lastUsed = now;
                                          });
                                        });
                                         var newStats = JSON.stringify(storedStats);
                                        storage.write(newStats);
                                        if (newStats != previousStats && Object.keys(storedStats).length > 0) {
                                          this.logger.debug("New stats: " + newStats);
                                        }
                                      }
                                    }]);
                                    return StatisticsGatherer;
                                    }();
                                    var StatisticsStorage = function () {
                                    function StatisticsStorage(key) {
                                      classCallCheck(this, StatisticsStorage);
                                       this.key = key;
                                    }
                                     createClass(StatisticsStorage, [{
                                      key: 'read',
                                      value: function read() {
                                        var localStorageStatsString = localStorage.getItem(this.key);
                                        try {
                                          return JSON.parse(localStorageStatsString ? localStorageStatsString : '{}');
                                        } catch (e) {
                                          return {};
                                        }
                                      }
                                    }, {
                                      key: 'write',
                                      value: function write(data) {
                                        localStorage.setItem(this.key, data);
                                      }
                                    }, {
                                      key: 'clear',
                                      value: function clear() {
                                        localStorage.removeItem(this.key);
                                      }
                                    }, {
                                      key: 'isEmpty',
                                      value: function isEmpty() {
                                        var storedStats = this.read();
                                        var empty = true;
                                        Object.keys(storedStats).forEach(function (key) {
                                          if (Object.keys(storedStats[key]).length > 0) {
                                            empty = false;
                                          }
                                        });
                                         return empty;
                                      }
                                    }]);
                                    return StatisticsStorage;
                                    }();
                                    var StatisticsSender = function () {
                                    function StatisticsSender(url, logger) {
                                      classCallCheck(this, StatisticsSender);
                                       this.url = url;
                                      this.logger = logger;
                                    }
                                     createClass(StatisticsSender, [{
                                      key: 'send',
                                      value: function send(data, errorHandler) {
                                        var logger = this.logger;
                                         if (navigator.onLine === false) {
                                          logger.debug("Offline, can't send");
                                          errorHandler();
                                          return;
                                        }
                                        logger.debug("Sending data to " + this.url);
                                         var req = new XMLHttpRequest();
                                        req.withCredentials = true;
                                        req.addEventListener("load", function () {
                                          // Stats sent, nothing more to do
                                          logger.debug("Response: " + req.responseText);
                                        });
                                        req.addEventListener("error", function () {
                                          logger.debug("Send failed");
                                          errorHandler();
                                        });
                                        req.addEventListener("abort", function () {
                                          logger.debug("Send aborted");
                                          errorHandler();
                                        });
                                        req.open("POST", this.url);
                                        req.setRequestHeader("Content-Type", "application/json");
                                        req.send(data);
                                      }
                                    }]);
                                    return StatisticsSender;
                                    }();
                                    var StatisticsLogger = function () {
                                    function StatisticsLogger(id) {
                                      classCallCheck(this, StatisticsLogger);
                                       this.id = id;
                                    }
                                     createClass(StatisticsLogger, [{
                                      key: '_isDebug',
                                      value: function _isDebug() {
                                        return localStorage.getItem("vaadin." + this.id + ".debug");
                                      }
                                    }, {
                                      key: 'debug',
                                      value: function debug(msg) {
                                        if (this._isDebug()) {
                                          console.info(this.id + ": " + msg);
                                        }
                                      }
                                    }]);
                                    return StatisticsLogger;
                                    }();
                                    var UsageStatistics = function () {
                                    function UsageStatistics() {
                                      classCallCheck(this, UsageStatistics);
                                       this.now = new Date();
                                      this.timeNow = this.now.getTime();
                                      this.gatherDelay = 10; // Delay between loading this file and gathering stats
                                      this.initialDelay = 24 * 60 * 60;
                                       this.logger = new StatisticsLogger("statistics");
                                      this.storage = new StatisticsStorage("vaadin.statistics.basket");
                                      this.gatherer = new StatisticsGatherer(this.logger);
                                      this.sender = new StatisticsSender("https://tools.vaadin.com/usage-stats/submit", this.logger);
                                    }
                                     createClass(UsageStatistics, [{
                                      key: 'maybeGatherAndSend',
                                      value: function maybeGatherAndSend() {
                                        var _this = this;
                                         if (localStorage.getItem(UsageStatistics.optOutKey)) {
                                          return;
                                        }
                                        this.gatherer.gather(this.storage);
                                        setTimeout(function () {
                                          _this.maybeSend();
                                        }, this.gatherDelay * 1000);
                                      }
                                    }, {
                                      key: 'lottery',
                                      value: function lottery() {
                                        return true;
                                      }
                                    }, {
                                      key: 'currentMonth',
                                      value: function currentMonth() {
                                        return this.now.getYear() * 12 + this.now.getMonth();
                                      }
                                    }, {
                                      key: 'maybeSend',
                                      value: function maybeSend() {
                                        var firstUse = Number(localStorage.getItem(UsageStatistics.firstUseKey));
                                        var monthProcessed = Number(localStorage.getItem(UsageStatistics.monthProcessedKey));
                                         if (!firstUse) {
                                          // Use a grace period to avoid interfering with tests, incognito mode etc
                                          firstUse = this.timeNow;
                                          localStorage.setItem(UsageStatistics.firstUseKey, firstUse);
                                        }
                                         if (this.timeNow < firstUse + this.initialDelay * 1000) {
                                          this.logger.debug("No statistics will be sent until the initial delay of " + this.initialDelay + "s has passed");
                                          return;
                                        }
                                        if (this.currentMonth() <= monthProcessed) {
                                          this.logger.debug("This month has already been processed");
                                          return;
                                        }
                                        localStorage.setItem(UsageStatistics.monthProcessedKey, this.currentMonth());
                                        // Use random sampling
                                        if (this.lottery()) {
                                          this.logger.debug("Congratulations, we have a winner!");
                                        } else {
                                          this.logger.debug("Sorry, no stats from you this time");
                                          return;
                                        }
                                         this.send();
                                      }
                                    }, {
                                      key: 'send',
                                      value: function send() {
                                        // Ensure we have the latest data
                                        this.gatherer.gather(this.storage);
                                         // Read, send and clean up
                                        var data = this.storage.read();
                                        data["firstUse"] = Number(localStorage.getItem(UsageStatistics.firstUseKey));
                                        data["usageStatisticsVersion"] = UsageStatistics.version;
                                        var info = 'This request contains usage statistics gathered from the application running in development mode. \n\nStatistics gathering is automatically disabled and excluded from production builds.\n\nFor details and to opt-out, see https://github.com/vaadin/vaadin-usage-statistics.\n\n\n\n';
                                        var self = this;
                                        this.sender.send(info + JSON.stringify(data), function () {
                                          // Revert the 'month processed' flag
                                          localStorage.setItem(UsageStatistics.monthProcessedKey, self.currentMonth() - 1);
                                        });
                                      }
                                    }], [{
                                      key: 'version',
                                      get: function get$1() {
                                        return '2.1.0';
                                      }
                                    }, {
                                      key: 'firstUseKey',
                                      get: function get$1() {
                                        return 'vaadin.statistics.firstuse';
                                      }
                                    }, {
                                      key: 'monthProcessedKey',
                                      get: function get$1() {
                                        return 'vaadin.statistics.monthProcessed';
                                      }
                                    }, {
                                      key: 'optOutKey',
                                      get: function get$1() {
                                        return 'vaadin.statistics.optout';
                                      }
                                    }]);
                                    return UsageStatistics;
                                    }();
                                    try {
                                    window.Vaadin = window.Vaadin || {};
                                    window.Vaadin.usageStatsChecker = window.Vaadin.usageStatsChecker || new UsageStatistics();
                                    window.Vaadin.usageStatsChecker.maybeGatherAndSend();
                                    } catch (e) {
                                    // Intentionally ignored as this is not a problem in the app being developed
                                    }
                                    }());
                                     vaadin-dev-mode:end **/}const usageStatistics=function(){if("function"===typeof runIfDevelopmentMode){return runIfDevelopmentMode(maybeGatherAndSendStats)}};_exports.usageStatistics$1=_exports.usageStatistics=usageStatistics;var vaadinUsageStatisticsCollect={__proto__:null,usageStatistics:usageStatistics};_exports.$vaadinUsageStatisticsCollect=vaadinUsageStatisticsCollect;var vaadinUsageStatistics={__proto__:null,usageStatistics:usageStatistics};_exports.$vaadinUsageStatistics=vaadinUsageStatistics;if(!window.Vaadin){window.Vaadin={}}/**
   * Array of Vaadin custom element classes that have been finalized.
   */window.Vaadin.registrations=window.Vaadin.registrations||[];// Use the hack to prevent polymer-modulizer from converting to exports
window.Vaadin.developmentModeCallback=window.Vaadin.developmentModeCallback||{};window.Vaadin.developmentModeCallback["vaadin-usage-statistics"]=function(){if(usageStatistics){usageStatistics()}};let statsJob;const registered=new Set,ElementMixin=superClass=>class VaadinElementMixin extends DirMixin(superClass){/** @protected */static finalize(){super.finalize();const{is}=this;// Registers a class prototype for telemetry purposes.
if(is&&!registered.has(is)){window.Vaadin.registrations.push(this);registered.add(is);if(window.Vaadin.developmentModeCallback){statsJob=_myApp.Debouncer.debounce(statsJob,_myApp.idlePeriod,()=>{window.Vaadin.developmentModeCallback["vaadin-usage-statistics"]()});(0,_myApp.enqueueDebouncer)(statsJob)}}}constructor(){super();if(null===document.doctype){console.warn("Vaadin components require the \"standards mode\" declaration. Please add <!DOCTYPE html> to the HTML document.")}}};/**
                               * @polymerMixin
                               */_exports.ElementMixin=ElementMixin;var vaadinElementMixin={__proto__:null,ElementMixin:ElementMixin};_exports.$vaadinElementMixin=vaadinElementMixin;class CheckboxElement extends ElementMixin(ControlStateMixin(ThemableMixin((0,_myApp.GestureEventListeners)(_myApp.PolymerElement)))){static get template(){return(0,_myApp.html$1)`
    <style>
      :host {
        display: inline-block;
      }

      :host([hidden]) {
        display: none !important;
      }

      label {
        display: inline-flex;
        align-items: baseline;
        outline: none;
      }

      [part="checkbox"] {
        position: relative;
        display: inline-block;
        flex: none;
      }

      input[type="checkbox"] {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        opacity: 0;
        cursor: inherit;
        margin: 0;
      }

      :host([disabled]) {
        -webkit-tap-highlight-color: transparent;
      }
    </style>

    <label>
      <span part="checkbox">
        <input type="checkbox" checked="{{checked::change}}" disabled\$="[[disabled]]" indeterminate="{{indeterminate::change}}" role="presentation" tabindex="-1">
      </span>

      <span part="label">
        <slot></slot>
      </span>
    </label>
`}static get is(){return"vaadin-checkbox"}static get version(){return"2.2.12"}static get properties(){return{/**
       * True if the checkbox is checked.
       */checked:{type:Boolean,value:!1,notify:!0,observer:"_checkedChanged",reflectToAttribute:!0},/**
       * Indeterminate state of the checkbox when it's neither checked nor unchecked, but undetermined.
       * https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/checkbox#Indeterminate_state_checkboxes
       */indeterminate:{type:Boolean,notify:!0,observer:"_indeterminateChanged",reflectToAttribute:!0,value:!1},/**
       * The value given to the data submitted with the checkbox's name to the server when the control is inside a form.
       */value:{type:String,value:"on"},_nativeCheckbox:{type:Object}}}constructor(){super();/**
              * @type {string}
              * Name of the element.
              */this.name}get name(){return this.checked?this._storedName:""}set name(name){this._storedName=name}ready(){super.ready();this.setAttribute("role","checkbox");this._nativeCheckbox=this.shadowRoot.querySelector("input[type=\"checkbox\"]");this.addEventListener("click",this._handleClick.bind(this));this._addActiveListeners();const attrName=this.getAttribute("name");if(attrName){this.name=attrName}this.shadowRoot.querySelector("[part~=\"label\"]").querySelector("slot").addEventListener("slotchange",this._updateLabelAttribute.bind(this));this._updateLabelAttribute()}_updateLabelAttribute(){const label=this.shadowRoot.querySelector("[part~=\"label\"]"),assignedNodes=label.firstElementChild.assignedNodes();if(this._isAssignedNodesEmpty(assignedNodes)){label.setAttribute("empty","")}else{label.removeAttribute("empty")}}_isAssignedNodesEmpty(nodes){// The assigned nodes considered to be empty if there is no slotted content or only one empty text node
return 0===nodes.length||1==nodes.length&&nodes[0].nodeType==Node.TEXT_NODE&&""===nodes[0].textContent.trim()}_checkedChanged(checked){if(this.indeterminate){this.setAttribute("aria-checked","mixed")}else{this.setAttribute("aria-checked",checked)}}_indeterminateChanged(indeterminate){if(indeterminate){this.setAttribute("aria-checked","mixed")}else{this.setAttribute("aria-checked",this.checked)}}_addActiveListeners(){// DOWN
this._addEventListenerToNode(this,"down",e=>{if(this.__interactionsAllowed(e)){this.setAttribute("active","")}});// UP
this._addEventListenerToNode(this,"up",()=>this.removeAttribute("active"));// KEYDOWN
this.addEventListener("keydown",e=>{if(this.__interactionsAllowed(e)&&32===e.keyCode){e.preventDefault();this.setAttribute("active","")}});// KEYUP
this.addEventListener("keyup",e=>{if(this.__interactionsAllowed(e)&&32===e.keyCode){e.preventDefault();this._toggleChecked();this.removeAttribute("active");if(this.indeterminate){this.indeterminate=!1}}})}/** @protected */get focusElement(){return this.shadowRoot.querySelector("input")}/**
     * True if users' interactions (mouse or keyboard)
     * should toggle the checkbox
     */__interactionsAllowed(e){if(this.disabled){return!1}// https://github.com/vaadin/vaadin-checkbox/issues/63
if("a"===e.target.localName){return!1}return!0}_handleClick(e){if(this.__interactionsAllowed(e)){if(!this.indeterminate){if(e.composedPath()[0]!==this._nativeCheckbox){e.preventDefault();this._toggleChecked()}}else{/*
         * Required for IE 11 and Edge.
         * See issue here: https://developer.microsoft.com/en-us/microsoft-edge/platform/issues/7344418/
         */this.indeterminate=!1;e.preventDefault();this._toggleChecked()}}}_toggleChecked(){this.checked=!this.checked;this.dispatchEvent(new CustomEvent("change",{composed:!1,bubbles:!0}))}/**
     * Fired when the user commits a value change.
     *
     * @event change
     */}_exports.CheckboxElement=CheckboxElement;customElements.define(CheckboxElement.is,CheckboxElement);var vaadinCheckbox={__proto__:null,CheckboxElement:CheckboxElement};_exports.$vaadinCheckbox=vaadinCheckbox;class Lumo extends HTMLElement{static get version(){return"1.6.0"}}_exports.Lumo=Lumo;customElements.define("vaadin-lumo-styles",Lumo);var version={__proto__:null,Lumo:Lumo};_exports.$version=version;const $_documentContainer=document.createElement("template");$_documentContainer.innerHTML=`<custom-style>
  <style>
    html {
      /* Base (background) */
      --lumo-base-color: #FFF;

      /* Tint */
      --lumo-tint-5pct: hsla(0, 0%, 100%, 0.3);
      --lumo-tint-10pct: hsla(0, 0%, 100%, 0.37);
      --lumo-tint-20pct: hsla(0, 0%, 100%, 0.44);
      --lumo-tint-30pct: hsla(0, 0%, 100%, 0.5);
      --lumo-tint-40pct: hsla(0, 0%, 100%, 0.57);
      --lumo-tint-50pct: hsla(0, 0%, 100%, 0.64);
      --lumo-tint-60pct: hsla(0, 0%, 100%, 0.7);
      --lumo-tint-70pct: hsla(0, 0%, 100%, 0.77);
      --lumo-tint-80pct: hsla(0, 0%, 100%, 0.84);
      --lumo-tint-90pct: hsla(0, 0%, 100%, 0.9);
      --lumo-tint: #FFF;

      /* Shade */
      --lumo-shade-5pct: hsla(214, 61%, 25%, 0.05);
      --lumo-shade-10pct: hsla(214, 57%, 24%, 0.1);
      --lumo-shade-20pct: hsla(214, 53%, 23%, 0.16);
      --lumo-shade-30pct: hsla(214, 50%, 22%, 0.26);
      --lumo-shade-40pct: hsla(214, 47%, 21%, 0.38);
      --lumo-shade-50pct: hsla(214, 45%, 20%, 0.5);
      --lumo-shade-60pct: hsla(214, 43%, 19%, 0.61);
      --lumo-shade-70pct: hsla(214, 42%, 18%, 0.72);
      --lumo-shade-80pct: hsla(214, 41%, 17%, 0.83);
      --lumo-shade-90pct: hsla(214, 40%, 16%, 0.94);
      --lumo-shade: hsl(214, 35%, 15%);

      /* Contrast */
      --lumo-contrast-5pct: var(--lumo-shade-5pct);
      --lumo-contrast-10pct: var(--lumo-shade-10pct);
      --lumo-contrast-20pct: var(--lumo-shade-20pct);
      --lumo-contrast-30pct: var(--lumo-shade-30pct);
      --lumo-contrast-40pct: var(--lumo-shade-40pct);
      --lumo-contrast-50pct: var(--lumo-shade-50pct);
      --lumo-contrast-60pct: var(--lumo-shade-60pct);
      --lumo-contrast-70pct: var(--lumo-shade-70pct);
      --lumo-contrast-80pct: var(--lumo-shade-80pct);
      --lumo-contrast-90pct: var(--lumo-shade-90pct);
      --lumo-contrast: var(--lumo-shade);

      /* Text */
      --lumo-header-text-color: var(--lumo-contrast);
      --lumo-body-text-color: var(--lumo-contrast-90pct);
      --lumo-secondary-text-color: var(--lumo-contrast-70pct);
      --lumo-tertiary-text-color: var(--lumo-contrast-50pct);
      --lumo-disabled-text-color: var(--lumo-contrast-30pct);

      /* Primary */
      --lumo-primary-color: hsl(214, 90%, 52%);
      --lumo-primary-color-50pct: hsla(214, 90%, 52%, 0.5);
      --lumo-primary-color-10pct: hsla(214, 90%, 52%, 0.1);
      --lumo-primary-text-color: var(--lumo-primary-color);
      --lumo-primary-contrast-color: #FFF;

      /* Error */
      --lumo-error-color: hsl(3, 100%, 61%);
      --lumo-error-color-50pct: hsla(3, 100%, 60%, 0.5);
      --lumo-error-color-10pct: hsla(3, 100%, 60%, 0.1);
      --lumo-error-text-color: hsl(3, 92%, 53%);
      --lumo-error-contrast-color: #FFF;

      /* Success */
      --lumo-success-color: hsl(145, 80%, 42%); /* hsl(144,82%,37%); */
      --lumo-success-color-50pct: hsla(145, 76%, 44%, 0.55);
      --lumo-success-color-10pct: hsla(145, 76%, 44%, 0.12);
      --lumo-success-text-color: hsl(145, 100%, 32%);
      --lumo-success-contrast-color: #FFF;
    }
  </style>
</custom-style><dom-module id="lumo-color">
  <template>
    <style>
      [theme~="dark"] {
        /* Base (background) */
        --lumo-base-color: hsl(214, 35%, 21%);

        /* Tint */
        --lumo-tint-5pct: hsla(214, 65%, 85%, 0.06);
        --lumo-tint-10pct: hsla(214, 60%, 80%, 0.14);
        --lumo-tint-20pct: hsla(214, 64%, 82%, 0.23);
        --lumo-tint-30pct: hsla(214, 69%, 84%, 0.32);
        --lumo-tint-40pct: hsla(214, 73%, 86%, 0.41);
        --lumo-tint-50pct: hsla(214, 78%, 88%, 0.5);
        --lumo-tint-60pct: hsla(214, 82%, 90%, 0.6);
        --lumo-tint-70pct: hsla(214, 87%, 92%, 0.7);
        --lumo-tint-80pct: hsla(214, 91%, 94%, 0.8);
        --lumo-tint-90pct: hsla(214, 96%, 96%, 0.9);
        --lumo-tint: hsl(214, 100%, 98%);

        /* Shade */
        --lumo-shade-5pct: hsla(214, 0%, 0%, 0.07);
        --lumo-shade-10pct: hsla(214, 4%, 2%, 0.15);
        --lumo-shade-20pct: hsla(214, 8%, 4%, 0.23);
        --lumo-shade-30pct: hsla(214, 12%, 6%, 0.32);
        --lumo-shade-40pct: hsla(214, 16%, 8%, 0.41);
        --lumo-shade-50pct: hsla(214, 20%, 10%, 0.5);
        --lumo-shade-60pct: hsla(214, 24%, 12%, 0.6);
        --lumo-shade-70pct: hsla(214, 28%, 13%, 0.7);
        --lumo-shade-80pct: hsla(214, 32%, 13%, 0.8);
        --lumo-shade-90pct: hsla(214, 33%, 13%, 0.9);
        --lumo-shade: hsl(214, 33%, 13%);

        /* Contrast */
        --lumo-contrast-5pct: var(--lumo-tint-5pct);
        --lumo-contrast-10pct: var(--lumo-tint-10pct);
        --lumo-contrast-20pct: var(--lumo-tint-20pct);
        --lumo-contrast-30pct: var(--lumo-tint-30pct);
        --lumo-contrast-40pct: var(--lumo-tint-40pct);
        --lumo-contrast-50pct: var(--lumo-tint-50pct);
        --lumo-contrast-60pct: var(--lumo-tint-60pct);
        --lumo-contrast-70pct: var(--lumo-tint-70pct);
        --lumo-contrast-80pct: var(--lumo-tint-80pct);
        --lumo-contrast-90pct: var(--lumo-tint-90pct);
        --lumo-contrast: var(--lumo-tint);

        /* Text */
        --lumo-header-text-color: var(--lumo-contrast);
        --lumo-body-text-color: var(--lumo-contrast-90pct);
        --lumo-secondary-text-color: var(--lumo-contrast-70pct);
        --lumo-tertiary-text-color: var(--lumo-contrast-50pct);
        --lumo-disabled-text-color: var(--lumo-contrast-30pct);

        /* Primary */
        --lumo-primary-color: hsl(214, 86%, 55%);
        --lumo-primary-color-50pct: hsla(214, 86%, 55%, 0.5);
        --lumo-primary-color-10pct: hsla(214, 90%, 63%, 0.1);
        --lumo-primary-text-color: hsl(214, 100%, 70%);
        --lumo-primary-contrast-color: #FFF;

        /* Error */
        --lumo-error-color: hsl(3, 90%, 63%);
        --lumo-error-color-50pct: hsla(3, 90%, 63%, 0.5);
        --lumo-error-color-10pct: hsla(3, 90%, 63%, 0.1);
        --lumo-error-text-color: hsl(3, 100%, 67%);

        /* Success */
        --lumo-success-color: hsl(145, 65%, 42%);
        --lumo-success-color-50pct: hsla(145, 65%, 42%, 0.5);
        --lumo-success-color-10pct: hsla(145, 65%, 42%, 0.1);
        --lumo-success-text-color: hsl(145, 85%, 47%);
      }

      html {
        color: var(--lumo-body-text-color);
        background-color: var(--lumo-base-color);
      }

      [theme~="dark"] {
        color: var(--lumo-body-text-color);
        background-color: var(--lumo-base-color);
      }

      h1,
      h2,
      h3,
      h4,
      h5,
      h6 {
        color: var(--lumo-header-text-color);
      }

      a {
        color: var(--lumo-primary-text-color);
      }

      blockquote {
        color: var(--lumo-secondary-text-color);
      }

      code,
      pre {
        background-color: var(--lumo-contrast-10pct);
        border-radius: var(--lumo-border-radius-m);
      }
    </style>
  </template>
</dom-module><dom-module id="lumo-color-legacy">
  <template>
    <style include="lumo-color">
      :host {
        color: var(--lumo-body-text-color) !important;
        background-color: var(--lumo-base-color) !important;
      }
    </style>
  </template>
</dom-module>`;document.head.appendChild($_documentContainer.content);/* Only needed for IE11 when you want to use the dark palette inside the light palette */ /*
                                                                                                                                                    FIXME(polymer-modulizer): the above comments were extracted
                                                                                                                                                    from HTML and may be out of place here. Review them and
                                                                                                                                                    then delete this comment!
                                                                                                                                                  */;const $_documentContainer$1=document.createElement("template");$_documentContainer$1.innerHTML=`<custom-style>
  <style>
    html {
      /* Border radius */
      --lumo-border-radius-s: 0.25em; /* Checkbox, badge, date-picker year indicator, etc */
      --lumo-border-radius-m: var(--lumo-border-radius, 0.25em); /* Button, text field, menu overlay, etc */
      --lumo-border-radius-l: 0.5em; /* Dialog, notification, etc */
      --lumo-border-radius: 0.25em; /* Deprecated */

      /* Shadow */
      --lumo-box-shadow-xs: 0 1px 4px -1px var(--lumo-shade-50pct);
      --lumo-box-shadow-s: 0 2px 4px -1px var(--lumo-shade-20pct), 0 3px 12px -1px var(--lumo-shade-30pct);
      --lumo-box-shadow-m: 0 2px 6px -1px var(--lumo-shade-20pct), 0 8px 24px -4px var(--lumo-shade-40pct);
      --lumo-box-shadow-l: 0 3px 18px -2px var(--lumo-shade-20pct), 0 12px 48px -6px var(--lumo-shade-40pct);
      --lumo-box-shadow-xl: 0 4px 24px -3px var(--lumo-shade-20pct), 0 18px 64px -8px var(--lumo-shade-40pct);

      /* Clickable element cursor */
      --lumo-clickable-cursor: default;
    }
  </style>
</custom-style>`;document.head.appendChild($_documentContainer$1.content);const $_documentContainer$2=(0,_myApp.html$1)`<dom-module id="lumo-checkbox" theme-for="vaadin-checkbox">
  <template>
    <style include="lumo-checkbox-style lumo-checkbox-effects">
      /* IE11 only */
      ::-ms-backdrop,
      [part="checkbox"] {
        line-height: 1;
      }
    </style>
  </template>
</dom-module><dom-module id="lumo-checkbox-style">
  <template>
    <style>
      :host {
        -webkit-tap-highlight-color: transparent;
        -webkit-user-select: none;
        -moz-user-select: none;
        -ms-user-select: none;
        user-select: none;
        cursor: default;
        outline: none;
      }

      [part="label"]:not([empty]) {
        margin: 0.1875em 0.875em 0.1875em 0.375em;
      }

      [part="checkbox"] {
        width: calc(1em + 2px);
        height: calc(1em + 2px);
        margin: 0.1875em;
        position: relative;
        border-radius: var(--lumo-border-radius);
        background-color: var(--lumo-contrast-20pct);
        transition: transform 0.2s cubic-bezier(.12, .32, .54, 2), background-color 0.15s;
        pointer-events: none;
        line-height: 1.2;
      }

      :host([indeterminate]) [part="checkbox"],
      :host([checked]) [part="checkbox"] {
        background-color: var(--lumo-primary-color);
      }

      /* Needed to align the checkbox nicely on the baseline */
      [part="checkbox"]::before {
        content: "\\2003";
      }

      /* Checkmark */
      [part="checkbox"]::after {
        content: "";
        display: inline-block;
        width: 0;
        height: 0;
        border: 0 solid var(--lumo-primary-contrast-color);
        border-width: 0.1875em 0 0 0.1875em;
        box-sizing: border-box;
        transform-origin: 0 0;
        position: absolute;
        top: 0.8125em;
        left: 0.5em;
        transform: scale(0.55) rotate(-135deg);
        opacity: 0;
      }

      :host([checked]) [part="checkbox"]::after {
        opacity: 1;
        width: 0.625em;
        height: 1.0625em;
      }

      /* Indeterminate checkmark */

      :host([indeterminate]) [part="checkbox"]::after {
        transform: none;
        opacity: 1;
        top: 45%;
        height: 10%;
        left: 22%;
        right: 22%;
        width: auto;
        border: 0;
        background-color: var(--lumo-primary-contrast-color);
        transition: opacity 0.25s;
      }

      /* Focus ring */

      :host([focus-ring]) [part="checkbox"] {
        box-shadow: 0 0 0 3px var(--lumo-primary-color-50pct);
      }

      /* Disabled */

      :host([disabled]) {
        pointer-events: none;
        color: var(--lumo-disabled-text-color);
      }

      :host([disabled]) [part="label"] ::slotted(*) {
        color: inherit;
      }

      :host([disabled]) [part="checkbox"] {
        background-color: var(--lumo-contrast-10pct);
      }

      :host([disabled]) [part="checkbox"]::after {
        border-color: var(--lumo-contrast-30pct);
      }

      :host([indeterminate][disabled]) [part="checkbox"]::after {
        background-color: var(--lumo-contrast-30pct);
      }
    </style>
  </template>
</dom-module><dom-module id="lumo-checkbox-effects">
  <template>
    <style>
      /* Transition the checkmark if activated with the mouse (disabled for grid select-all this way) */
      :host(:hover) [part="checkbox"]::after {
        transition: width 0.1s, height 0.25s;
      }

      /* Used for activation "halo" */
      [part="checkbox"]::before {
        color: transparent;
        display: inline-block;
        width: 100%;
        height: 100%;
        border-radius: inherit;
        background-color: inherit;
        transform: scale(1.4);
        opacity: 0;
        transition: transform 0.1s, opacity 0.8s;
      }

      /* Hover */

      :host(:not([checked]):not([indeterminate]):not([disabled]):hover) [part="checkbox"] {
        background-color: var(--lumo-contrast-30pct);
      }

      /* Disable hover for touch devices */
      @media (pointer: coarse) {
        :host(:not([checked]):not([indeterminate]):not([disabled]):hover) [part="checkbox"] {
          background-color: var(--lumo-contrast-20pct);
        }
      }

      /* Active */

      :host([active]) [part="checkbox"] {
        transform: scale(0.9);
        transition-duration: 0.05s;
      }

      :host([active][checked]) [part="checkbox"] {
        transform: scale(1.1);
      }

      :host([active]:not([checked])) [part="checkbox"]::before {
        transition-duration: 0.01s, 0.01s;
        transform: scale(0);
        opacity: 0.4;
      }
    </style>
  </template>
</dom-module>`;document.head.appendChild($_documentContainer$2.content);var ORPHANS=new Set;/**
                          * `IronResizableBehavior` is a behavior that can be used in Polymer elements to
                          * coordinate the flow of resize events between "resizers" (elements that
                          *control the size or hidden state of their children) and "resizables" (elements
                          *that need to be notified when they are resized or un-hidden by their parents
                          *in order to take action on their new measurements).
                          *
                          * Elements that perform measurement should add the `IronResizableBehavior`
                          *behavior to their element definition and listen for the `iron-resize` event on
                          *themselves. This event will be fired when they become showing after having
                          *been hidden, when they are resized explicitly by another resizable, or when
                          *the window has been resized.
                          *
                          * Note, the `iron-resize` event is non-bubbling.
                          *
                          * @polymerBehavior
                          * @demo demo/index.html
                          **/const IronResizableBehavior={properties:{/**
     * The closest ancestor element that implements `IronResizableBehavior`.
     */_parentResizable:{type:Object,observer:"_parentResizableChanged"},/**
     * True if this element is currently notifying its descendant elements of
     * resize.
     */_notifyingDescendant:{type:Boolean,value:!1}},listeners:{"iron-request-resize-notifications":"_onIronRequestResizeNotifications"},created:function(){// We don't really need property effects on these, and also we want them
// to be created before the `_parentResizable` observer fires:
this._interestedResizables=[];this._boundNotifyResize=this.notifyResize.bind(this);this._boundOnDescendantIronResize=this._onDescendantIronResize.bind(this)},attached:function(){this._requestResizeNotifications()},detached:function(){if(this._parentResizable){this._parentResizable.stopResizeNotificationsFor(this)}else{ORPHANS.delete(this);window.removeEventListener("resize",this._boundNotifyResize)}this._parentResizable=null},/**
   * Can be called to manually notify a resizable and its descendant
   * resizables of a resize change.
   */notifyResize:function(){if(!this.isAttached){return}this._interestedResizables.forEach(function(resizable){if(this.resizerShouldNotify(resizable)){this._notifyDescendant(resizable)}},this);this._fireResize()},/**
   * Used to assign the closest resizable ancestor to this resizable
   * if the ancestor detects a request for notifications.
   */assignParentResizable:function(parentResizable){if(this._parentResizable){this._parentResizable.stopResizeNotificationsFor(this)}this._parentResizable=parentResizable;if(parentResizable&&-1===parentResizable._interestedResizables.indexOf(this)){parentResizable._interestedResizables.push(this);parentResizable._subscribeIronResize(this)}},/**
   * Used to remove a resizable descendant from the list of descendants
   * that should be notified of a resize change.
   */stopResizeNotificationsFor:function(target){var index=this._interestedResizables.indexOf(target);if(-1<index){this._interestedResizables.splice(index,1);this._unsubscribeIronResize(target)}},/**
   * Subscribe this element to listen to iron-resize events on the given target.
   *
   * Preferred over target.listen because the property renamer does not
   * understand to rename when the target is not specifically "this"
   *
   * @param {!HTMLElement} target Element to listen to for iron-resize events.
   */_subscribeIronResize:function(target){target.addEventListener("iron-resize",this._boundOnDescendantIronResize)},/**
   * Unsubscribe this element from listening to to iron-resize events on the
   * given target.
   *
   * Preferred over target.unlisten because the property renamer does not
   * understand to rename when the target is not specifically "this"
   *
   * @param {!HTMLElement} target Element to listen to for iron-resize events.
   */_unsubscribeIronResize:function(target){target.removeEventListener("iron-resize",this._boundOnDescendantIronResize)},/**
   * This method can be overridden to filter nested elements that should or
   * should not be notified by the current element. Return true if an element
   * should be notified, or false if it should not be notified.
   *
   * @param {HTMLElement} element A candidate descendant element that
   * implements `IronResizableBehavior`.
   * @return {boolean} True if the `element` should be notified of resize.
   */resizerShouldNotify:function(element){return!0},_onDescendantIronResize:function(event){if(this._notifyingDescendant){event.stopPropagation();return}// no need to use this during shadow dom because of event retargeting
if(!_myApp.useShadow){this._fireResize()}},_fireResize:function(){this.fire("iron-resize",null,{node:this,bubbles:!1})},_onIronRequestResizeNotifications:function(event){var target=/** @type {!EventTarget} */(0,_myApp.dom)(event).rootTarget;if(target===this){return}target.assignParentResizable(this);this._notifyDescendant(target);event.stopPropagation()},_parentResizableChanged:function(parentResizable){if(parentResizable){window.removeEventListener("resize",this._boundNotifyResize)}},_notifyDescendant:function(descendant){// NOTE(cdata): In IE10, attached is fired on children first, so it's
// important not to notify them if the parent is not attached yet (or
// else they will get redundantly notified when the parent attaches).
if(!this.isAttached){return}this._notifyingDescendant=!0;descendant.notifyResize();this._notifyingDescendant=!1},_requestResizeNotifications:function(){if(!this.isAttached){return}if("loading"===document.readyState){var _requestResizeNotifications=this._requestResizeNotifications.bind(this);document.addEventListener("readystatechange",function readystatechanged(){document.removeEventListener("readystatechange",readystatechanged);_requestResizeNotifications()})}else{this._findParent();if(!this._parentResizable){// If this resizable is an orphan, tell other orphans to try to find
// their parent again, in case it's this resizable.
ORPHANS.forEach(function(orphan){if(orphan!==this){orphan._findParent()}},this);window.addEventListener("resize",this._boundNotifyResize);this.notifyResize()}else{// If this resizable has a parent, tell other child resizables of
// that parent to try finding their parent again, in case it's this
// resizable.
this._parentResizable._interestedResizables.forEach(function(resizable){if(resizable!==this){resizable._findParent()}},this)}}},_findParent:function(){this.assignParentResizable(null);this.fire("iron-request-resize-notifications",null,{node:this,bubbles:!0,cancelable:!0});if(!this._parentResizable){ORPHANS.add(this)}else{ORPHANS.delete(this)}}};_exports.IronResizableBehavior=IronResizableBehavior;var ironResizableBehavior={__proto__:null,IronResizableBehavior:IronResizableBehavior};_exports.$ironResizableBehavior=ironResizableBehavior;const IronScrollTargetBehavior={properties:{/**
     * Specifies the element that will handle the scroll event
     * on the behalf of the current element. This is typically a reference to an
     *element, but there are a few more posibilities:
     *
     * ### Elements id
     *
     *```html
     * <div id="scrollable-element" style="overflow: auto;">
     *  <x-element scroll-target="scrollable-element">
     *    <!-- Content-->
     *  </x-element>
     * </div>
     *```
     * In this case, the `scrollTarget` will point to the outer div element.
     *
     * ### Document scrolling
     *
     * For document scrolling, you can use the reserved word `document`:
     *
     *```html
     * <x-element scroll-target="document">
     *   <!-- Content -->
     * </x-element>
     *```
     *
     * ### Elements reference
     *
     *```js
     * appHeader.scrollTarget = document.querySelector('#scrollable-element');
     *```
     *
     * @type {HTMLElement}
     * @default document
     */scrollTarget:{type:HTMLElement,value:function(){return this._defaultScrollTarget}}},observers:["_scrollTargetChanged(scrollTarget, isAttached)"],/**
   * True if the event listener should be installed.
   */_shouldHaveListener:!0,_scrollTargetChanged:function(scrollTarget,isAttached){var eventTarget;if(this._oldScrollTarget){this._toggleScrollListener(!1,this._oldScrollTarget);this._oldScrollTarget=null}if(!isAttached){return}// Support element id references
if("document"===scrollTarget){this.scrollTarget=this._doc}else if("string"===typeof scrollTarget){var domHost=this.domHost;this.scrollTarget=domHost&&domHost.$?domHost.$[scrollTarget]:(0,_myApp.dom)(this.ownerDocument).querySelector("#"+scrollTarget)}else if(this._isValidScrollTarget()){this._oldScrollTarget=scrollTarget;this._toggleScrollListener(this._shouldHaveListener,scrollTarget)}},/**
   * Runs on every scroll event. Consumer of this behavior may override this
   * method.
   *
   * @protected
   */_scrollHandler:function scrollHandler(){},/**
   * The default scroll target. Consumers of this behavior may want to customize
   * the default scroll target.
   *
   * @type {Element}
   */get _defaultScrollTarget(){return this._doc},/**
   * Shortcut for the document element
   *
   * @type {Element}
   */get _doc(){return this.ownerDocument.documentElement},/**
   * Gets the number of pixels that the content of an element is scrolled
   * upward.
   *
   * @type {number}
   */get _scrollTop(){if(this._isValidScrollTarget()){return this.scrollTarget===this._doc?window.pageYOffset:this.scrollTarget.scrollTop}return 0},/**
   * Gets the number of pixels that the content of an element is scrolled to the
   * left.
   *
   * @type {number}
   */get _scrollLeft(){if(this._isValidScrollTarget()){return this.scrollTarget===this._doc?window.pageXOffset:this.scrollTarget.scrollLeft}return 0},/**
   * Sets the number of pixels that the content of an element is scrolled
   * upward.
   *
   * @type {number}
   */set _scrollTop(top){if(this.scrollTarget===this._doc){window.scrollTo(window.pageXOffset,top)}else if(this._isValidScrollTarget()){this.scrollTarget.scrollTop=top}},/**
   * Sets the number of pixels that the content of an element is scrolled to the
   * left.
   *
   * @type {number}
   */set _scrollLeft(left){if(this.scrollTarget===this._doc){window.scrollTo(left,window.pageYOffset)}else if(this._isValidScrollTarget()){this.scrollTarget.scrollLeft=left}},/**
   * Scrolls the content to a particular place.
   *
   * @method scroll
   * @param {number|!{left: number, top: number}} leftOrOptions The left position or scroll options
   * @param {number=} top The top position
   * @return {void}
   */scroll:function(leftOrOptions,top){var left;if("object"===typeof leftOrOptions){left=leftOrOptions.left;top=leftOrOptions.top}else{left=leftOrOptions}left=left||0;top=top||0;if(this.scrollTarget===this._doc){window.scrollTo(left,top)}else if(this._isValidScrollTarget()){this.scrollTarget.scrollLeft=left;this.scrollTarget.scrollTop=top}},/**
   * Gets the width of the scroll target.
   *
   * @type {number}
   */get _scrollTargetWidth(){if(this._isValidScrollTarget()){return this.scrollTarget===this._doc?window.innerWidth:this.scrollTarget.offsetWidth}return 0},/**
   * Gets the height of the scroll target.
   *
   * @type {number}
   */get _scrollTargetHeight(){if(this._isValidScrollTarget()){return this.scrollTarget===this._doc?window.innerHeight:this.scrollTarget.offsetHeight}return 0},/**
   * Returns true if the scroll target is a valid HTMLElement.
   *
   * @return {boolean}
   */_isValidScrollTarget:function(){return this.scrollTarget instanceof HTMLElement},_toggleScrollListener:function(yes,scrollTarget){var eventTarget=scrollTarget===this._doc?window:scrollTarget;if(yes){if(!this._boundScrollHandler){this._boundScrollHandler=this._scrollHandler.bind(this);eventTarget.addEventListener("scroll",this._boundScrollHandler)}}else{if(this._boundScrollHandler){eventTarget.removeEventListener("scroll",this._boundScrollHandler);this._boundScrollHandler=null}}},/**
   * Enables or disables the scroll event listener.
   *
   * @param {boolean} yes True to add the event, False to remove it.
   */toggleScrollListener:function(yes){this._shouldHaveListener=yes;this._toggleScrollListener(yes,this.scrollTarget)}};_exports.IronScrollTargetBehavior=IronScrollTargetBehavior;var ironScrollTargetBehavior={__proto__:null,IronScrollTargetBehavior:IronScrollTargetBehavior};_exports.$ironScrollTargetBehavior=ironScrollTargetBehavior;var IOS=navigator.userAgent.match(/iP(?:hone|ad;(?: U;)? CPU) OS (\d+)/),IOS_TOUCH_SCROLLING=IOS&&8<=IOS[1],DEFAULT_PHYSICAL_COUNT=3,ANIMATION_FRAME=_myApp.animationFrame,IDLE_TIME=_myApp.idlePeriod,MICRO_TASK=_myApp.microTask;const PolymerIronList=(0,_myApp.Class)({behaviors:[IronResizableBehavior,IronScrollTargetBehavior],/**
   * The ratio of hidden tiles that should remain in the scroll direction.
   * Recommended value ~0.5, so it will distribute tiles evenly in both directions.
   */_ratio:.5,/**
   * The padding-top value for the list.
   */_scrollerPaddingTop:0,/**
   * This value is the same as `scrollTop`.
   */_scrollPosition:0,/**
   * The sum of the heights of all the tiles in the DOM.
   */_physicalSize:0,/**
   * The average `offsetHeight` of the tiles observed till now.
   */_physicalAverage:0,/**
   * The number of tiles which `offsetHeight` > 0 observed until now.
   */_physicalAverageCount:0,/**
   * The Y position of the item rendered in the `_physicalStart`
   * tile relative to the scrolling list.
   */_physicalTop:0,/**
   * The number of items in the list.
   */_virtualCount:0,/**
   * The estimated scroll height based on `_physicalAverage`
   */_estScrollHeight:0,/**
   * The scroll height of the dom node
   */_scrollHeight:0,/**
   * The height of the list. This is referred as the viewport in the context of list.
   */_viewportHeight:0,/**
   * The width of the list. This is referred as the viewport in the context of list.
   */_viewportWidth:0,/**
   * An array of DOM nodes that are currently in the tree
   * @type {?Array<!TemplatizerNode>}
   */_physicalItems:null,/**
   * An array of heights for each item in `_physicalItems`
   * @type {?Array<number>}
   */_physicalSizes:null,/**
   * A cached value for the first visible index.
   * See `firstVisibleIndex`
   * @type {?number}
   */_firstVisibleIndexVal:null,/**
   * A Polymer collection for the items.
   * @type {?Polymer.Collection}
   */_collection:null,/**
   * A cached value for the last visible index.
   * See `lastVisibleIndex`
   * @type {?number}
   */_lastVisibleIndexVal:null,/**
   * The max number of pages to render. One page is equivalent to the height of the list.
   */_maxPages:2,/**
   * The virtual index of the focused item.
   */_focusedVirtualIndex:-1,/**
   * The maximum items per row
   */_itemsPerRow:1,/**
   * The height of the row in grid layout.
   */_rowHeight:0,/**
   * The cost of stamping a template in ms.
   */_templateCost:0,/**
   * The bottom of the physical content.
   */get _physicalBottom(){return this._physicalTop+this._physicalSize},/**
   * The bottom of the scroll.
   */get _scrollBottom(){return this._scrollPosition+this._viewportHeight},/**
   * The n-th item rendered in the last physical item.
   */get _virtualEnd(){return this._virtualStart+this._physicalCount-1},/**
   * The height of the physical content that isn't on the screen.
   */get _hiddenContentSize(){var size=this.grid?this._physicalRows*this._rowHeight:this._physicalSize;return size-this._viewportHeight},/**
   * The maximum scroll top value.
   */get _maxScrollTop(){return this._estScrollHeight-this._viewportHeight+this._scrollOffset},/**
   * The largest n-th value for an item such that it can be rendered in `_physicalStart`.
   */get _maxVirtualStart(){var virtualCount=this._convertIndexToCompleteRow(this._virtualCount);return Math.max(0,virtualCount-this._physicalCount)},set _virtualStart(val){val=this._clamp(val,0,this._maxVirtualStart);if(this.grid){val=val-val%this._itemsPerRow}this._virtualStartVal=val},get _virtualStart(){return this._virtualStartVal||0},/**
   * The k-th tile that is at the top of the scrolling list.
   */set _physicalStart(val){val=val%this._physicalCount;if(0>val){val=this._physicalCount+val}if(this.grid){val=val-val%this._itemsPerRow}this._physicalStartVal=val},get _physicalStart(){return this._physicalStartVal||0},/**
   * The k-th tile that is at the bottom of the scrolling list.
   */get _physicalEnd(){return(this._physicalStart+this._physicalCount-1)%this._physicalCount},set _physicalCount(val){this._physicalCountVal=val},get _physicalCount(){return this._physicalCountVal||0},/**
   * An optimal physical size such that we will have enough physical items
   * to fill up the viewport and recycle when the user scrolls.
   *
   * This default value assumes that we will at least have the equivalent
   * to a viewport of physical items above and below the user's viewport.
   */get _optPhysicalSize(){return 0===this._viewportHeight?1/0:this._viewportHeight*this._maxPages},/**
   * True if the current list is visible.
   */get _isVisible(){return!!(this.offsetWidth||this.offsetHeight)},/**
   * Gets the index of the first visible item in the viewport.
   *
   * @type {number}
   */get firstVisibleIndex(){var idx=this._firstVisibleIndexVal;if(null==idx){var physicalOffset=this._physicalTop+this._scrollOffset;idx=this._iterateItems(function(pidx,vidx){physicalOffset+=this._getPhysicalSizeIncrement(pidx);if(physicalOffset>this._scrollPosition){return this.grid?vidx-vidx%this._itemsPerRow:vidx}// Handle a partially rendered final row in grid mode
if(this.grid&&this._virtualCount-1===vidx){return vidx-vidx%this._itemsPerRow}})||0;this._firstVisibleIndexVal=idx}return idx},/**
   * Gets the index of the last visible item in the viewport.
   *
   * @type {number}
   */get lastVisibleIndex(){var idx=this._lastVisibleIndexVal;if(null==idx){if(this.grid){idx=Math.min(this._virtualCount,this.firstVisibleIndex+this._estRowsInView*this._itemsPerRow-1)}else{var physicalOffset=this._physicalTop+this._scrollOffset;this._iterateItems(function(pidx,vidx){if(physicalOffset<this._scrollBottom){idx=vidx}physicalOffset+=this._getPhysicalSizeIncrement(pidx)})}this._lastVisibleIndexVal=idx}return idx},get _scrollOffset(){return this._scrollerPaddingTop},attached:function(){this._debounce("_render",this._render,ANIMATION_FRAME);// `iron-resize` is fired when the list is attached if the event is added
// before attached causing unnecessary work.
this.listen(this,"iron-resize","_resizeHandler")},detached:function(){this.unlisten(this,"iron-resize","_resizeHandler")},/**
   * Invoke this method if you dynamically update the viewport's
   * size or CSS padding.
   *
   * @method updateViewportBoundaries
   */updateViewportBoundaries:function(){var styles=window.getComputedStyle(this);this._scrollerPaddingTop=this.scrollTarget===this?0:parseInt(styles["padding-top"],10);this._isRTL=!!("rtl"===styles.direction);this._viewportWidth=this.$.items.offsetWidth;this._viewportHeight=this._scrollTargetHeight;this.grid&&this._updateGridMetrics()},/**
   * Recycles the physical items when needed.
   */_scrollHandler:function(){var scrollTop=Math.max(0,Math.min(this._maxScrollTop,this._scrollTop)),delta=scrollTop-this._scrollPosition,isScrollingDown=0<=delta;// Track the current scroll position.
this._scrollPosition=scrollTop;// Clear indexes for first and last visible indexes.
this._firstVisibleIndexVal=null;this._lastVisibleIndexVal=null;// Random access.
if(Math.abs(delta)>this._physicalSize&&0<this._physicalSize){delta=delta-this._scrollOffset;var idxAdjustment=Math.round(delta/this._physicalAverage)*this._itemsPerRow;this._virtualStart=this._virtualStart+idxAdjustment;this._physicalStart=this._physicalStart+idxAdjustment;// Estimate new physical offset.
this._physicalTop=Math.floor(this._virtualStart/this._itemsPerRow)*this._physicalAverage;this._update()}else if(0<this._physicalCount){var reusables=this._getReusables(isScrollingDown);if(isScrollingDown){this._physicalTop=reusables.physicalTop;this._virtualStart=this._virtualStart+reusables.indexes.length;this._physicalStart=this._physicalStart+reusables.indexes.length}else{this._virtualStart=this._virtualStart-reusables.indexes.length;this._physicalStart=this._physicalStart-reusables.indexes.length}this._update(reusables.indexes,isScrollingDown?null:reusables.indexes);this._debounce("_increasePoolIfNeeded",this._increasePoolIfNeeded.bind(this,0),MICRO_TASK)}},/**
   * Returns an object that contains the indexes of the physical items
   * that might be reused and the physicalTop.
   *
   * @param {boolean} fromTop If the potential reusable items are above the scrolling region.
   */_getReusables:function(fromTop){var ith,offsetContent,physicalItemHeight,idxs=[],protectedOffsetContent=this._hiddenContentSize*this._ratio,virtualStart=this._virtualStart,virtualEnd=this._virtualEnd,physicalCount=this._physicalCount,top=this._physicalTop+this._scrollOffset,bottom=this._physicalBottom+this._scrollOffset,scrollTop=this._scrollTop,scrollBottom=this._scrollBottom;if(fromTop){ith=this._physicalStart;offsetContent=scrollTop-top}else{ith=this._physicalEnd;offsetContent=bottom-scrollBottom}// eslint-disable-next-line no-constant-condition
while(!0){physicalItemHeight=this._getPhysicalSizeIncrement(ith);offsetContent=offsetContent-physicalItemHeight;if(idxs.length>=physicalCount||offsetContent<=protectedOffsetContent){break}if(fromTop){// Check that index is within the valid range.
if(virtualEnd+idxs.length+1>=this._virtualCount){break}// Check that the index is not visible.
if(top+physicalItemHeight>=scrollTop-this._scrollOffset){break}idxs.push(ith);top=top+physicalItemHeight;ith=(ith+1)%physicalCount}else{// Check that index is within the valid range.
if(0>=virtualStart-idxs.length){break}// Check that the index is not visible.
if(top+this._physicalSize-physicalItemHeight<=scrollBottom){break}idxs.push(ith);top=top-physicalItemHeight;ith=0===ith?physicalCount-1:ith-1}}return{indexes:idxs,physicalTop:top-this._scrollOffset}},/**
   * Update the list of items, starting from the `_virtualStart` item.
   * @param {!Array<number>=} itemSet
   * @param {!Array<number>=} movingUp
   */_update:function(itemSet,movingUp){if(itemSet&&0===itemSet.length||0===this._physicalCount){return}this._manageFocus();this._assignModels(itemSet);this._updateMetrics(itemSet);// Adjust offset after measuring.
if(movingUp){while(movingUp.length){var idx=movingUp.pop();this._physicalTop-=this._getPhysicalSizeIncrement(idx)}}this._positionItems();this._updateScrollerSize()},_isClientFull:function(){return 0!=this._scrollBottom&&this._physicalBottom-1>=this._scrollBottom&&this._physicalTop<=this._scrollPosition},/**
   * Increases the pool size.
   */_increasePoolIfNeeded:function(count){var nextPhysicalCount=this._clamp(this._physicalCount+count,DEFAULT_PHYSICAL_COUNT,this._virtualCount-this._virtualStart);nextPhysicalCount=this._convertIndexToCompleteRow(nextPhysicalCount);var delta=nextPhysicalCount-this._physicalCount,nextIncrease=Math.round(.5*this._physicalCount);if(0>delta){return}if(0<delta){var ts=window.performance.now();// Concat arrays in place.
[].push.apply(this._physicalItems,this._createPool(delta));// Push 0s into physicalSizes. Can't use Array.fill because IE11 doesn't support it.
for(var i=0;i<delta;i++){this._physicalSizes.push(0)}this._physicalCount=this._physicalCount+delta;// Update the physical start if it needs to preserve the model of the focused item.
// In this situation, the focused item is currently rendered and its model would
// have changed after increasing the pool if the physical start remained unchanged.
if(this._physicalStart>this._physicalEnd&&this._isIndexRendered(this._focusedVirtualIndex)&&this._getPhysicalIndex(this._focusedVirtualIndex)<this._physicalEnd){this._physicalStart=this._physicalStart+delta}this._update();this._templateCost=(window.performance.now()-ts)/delta;nextIncrease=Math.round(.5*this._physicalCount)}// The upper bounds is not fixed when dealing with a grid that doesn't
// fill it's last row with the exact number of items per row.
if(this._virtualEnd>=this._virtualCount-1||0===nextIncrease){// Do nothing.
}else if(!this._isClientFull()){this._debounce("_increasePoolIfNeeded",this._increasePoolIfNeeded.bind(this,nextIncrease),MICRO_TASK)}else if(this._physicalSize<this._optPhysicalSize){// Yield and increase the pool during idle time until the physical size is optimal.
this._debounce("_increasePoolIfNeeded",this._increasePoolIfNeeded.bind(this,this._clamp(Math.round(50/this._templateCost),1,nextIncrease)),IDLE_TIME)}},/**
   * Renders the a new list.
   */_render:function(){if(!this.isAttached||!this._isVisible){return}if(0!==this._physicalCount){var reusables=this._getReusables(!0);this._physicalTop=reusables.physicalTop;this._virtualStart=this._virtualStart+reusables.indexes.length;this._physicalStart=this._physicalStart+reusables.indexes.length;this._update(reusables.indexes);this._update();this._increasePoolIfNeeded(0)}else if(0<this._virtualCount){// Initial render
this.updateViewportBoundaries();this._increasePoolIfNeeded(DEFAULT_PHYSICAL_COUNT)}},/**
   * Called when the items have changed. That is, reassignments
   * to `items`, splices or updates to a single item.
   */_itemsChanged:function(change){if("items"===change.path){this._virtualStart=0;this._physicalTop=0;this._virtualCount=this.items?this.items.length:0;this._collection=this.items&&void 0?(void 0).get(this.items):null;this._physicalIndexForKey={};this._firstVisibleIndexVal=null;this._lastVisibleIndexVal=null;this._physicalCount=this._physicalCount||0;this._physicalItems=this._physicalItems||[];this._physicalSizes=this._physicalSizes||[];this._physicalStart=0;if(this._scrollTop>this._scrollOffset){this._resetScrollPosition(0)}this._removeFocusedItem();this._debounce("_render",this._render,ANIMATION_FRAME)}},/**
   * Executes a provided function per every physical index in `itemSet`
   * `itemSet` default value is equivalent to the entire set of physical indexes.
   *
   * @param {!function(number, number)} fn
   * @param {!Array<number>=} itemSet
   */_iterateItems:function(fn,itemSet){var pidx,vidx,rtn,i;if(2===arguments.length&&itemSet){for(i=0;i<itemSet.length;i++){pidx=itemSet[i];vidx=this._computeVidx(pidx);if(null!=(rtn=fn.call(this,pidx,vidx))){return rtn}}}else{pidx=this._physicalStart;vidx=this._virtualStart;for(;pidx<this._physicalCount;pidx++,vidx++){if(null!=(rtn=fn.call(this,pidx,vidx))){return rtn}}for(pidx=0;pidx<this._physicalStart;pidx++,vidx++){if(null!=(rtn=fn.call(this,pidx,vidx))){return rtn}}}},/**
   * Returns the virtual index for a given physical index
   *
   * @param {number} pidx Physical index
   * @return {number}
   */_computeVidx:function(pidx){if(pidx>=this._physicalStart){return this._virtualStart+(pidx-this._physicalStart)}return this._virtualStart+(this._physicalCount-this._physicalStart)+pidx},/**
   * Updates the height for a given set of items.
   *
   * @param {!Array<number>=} itemSet
   */_updateMetrics:function(itemSet){// Make sure we distributed all the physical items
// so we can measure them.
_myApp.flush?(0,_myApp.flush)():(0,_myApp.flush$1)();var newPhysicalSize=0,oldPhysicalSize=0,prevAvgCount=this._physicalAverageCount,prevPhysicalAvg=this._physicalAverage;this._iterateItems(function(pidx,vidx){oldPhysicalSize+=this._physicalSizes[pidx];this._physicalSizes[pidx]=this._physicalItems[pidx].offsetHeight;newPhysicalSize+=this._physicalSizes[pidx];this._physicalAverageCount+=this._physicalSizes[pidx]?1:0},itemSet);if(this.grid){this._updateGridMetrics();this._physicalSize=Math.ceil(this._physicalCount/this._itemsPerRow)*this._rowHeight}else{oldPhysicalSize=1===this._itemsPerRow?oldPhysicalSize:Math.ceil(this._physicalCount/this._itemsPerRow)*this._rowHeight;this._physicalSize=this._physicalSize+newPhysicalSize-oldPhysicalSize;this._itemsPerRow=1}// Update the average if it measured something.
if(this._physicalAverageCount!==prevAvgCount){this._physicalAverage=Math.round((prevPhysicalAvg*prevAvgCount+newPhysicalSize)/this._physicalAverageCount)}},/**
   * Updates the position of the physical items.
   */_positionItems:function(){this._adjustScrollPosition();var y=this._physicalTop;this._iterateItems(function(pidx,vidx){this.translate3d(0,y+"px",0,this._physicalItems[pidx]);y+=this._physicalSizes[pidx]})},_getPhysicalSizeIncrement:function(pidx){if(!this.grid){return this._physicalSizes[pidx]}if(this._computeVidx(pidx)%this._itemsPerRow!==this._itemsPerRow-1){return 0}return this._rowHeight},/**
   * Adjusts the scroll position when it was overestimated.
   */_adjustScrollPosition:function(){var deltaHeight=0===this._virtualStart?this._physicalTop:Math.min(this._scrollPosition+this._physicalTop,0);// Note: the delta can be positive or negative.
if(0!==deltaHeight){this._physicalTop=this._physicalTop-deltaHeight;var scrollTop=this._scrollTop;// juking scroll position during interial scrolling on iOS is no bueno
if(!IOS_TOUCH_SCROLLING&&0<scrollTop){this._resetScrollPosition(scrollTop-deltaHeight)}}},/**
   * Sets the position of the scroll.
   */_resetScrollPosition:function(pos){if(this.scrollTarget&&0<=pos){this._scrollTop=pos;this._scrollPosition=this._scrollTop}},/**
   * Sets the scroll height, that's the height of the content,
   *
   * @param {boolean=} forceUpdate If true, updates the height no matter what.
   */_updateScrollerSize:function(forceUpdate){if(this.grid){this._estScrollHeight=this._virtualRowCount*this._rowHeight}else{this._estScrollHeight=this._physicalBottom+Math.max(this._virtualCount-this._physicalCount-this._virtualStart,0)*this._physicalAverage}forceUpdate=forceUpdate||0===this._scrollHeight;forceUpdate=forceUpdate||this._scrollPosition>=this._estScrollHeight-this._physicalSize;forceUpdate=forceUpdate||this.grid&&this.$.items.style.height<this._estScrollHeight;// Amortize height adjustment, so it won't trigger large repaints too often.
if(forceUpdate||Math.abs(this._estScrollHeight-this._scrollHeight)>=this._viewportHeight){this.$.items.style.height=this._estScrollHeight+"px";this._scrollHeight=this._estScrollHeight}},/**
   * Scroll to a specific index in the virtual list regardless
   * of the physical items in the DOM tree.
   *
   * @method scrollToIndex
   * @param {number} idx The index of the item
   */scrollToIndex:function(idx){if("number"!==typeof idx||0>idx||idx>this.items.length-1){return}_myApp.flush?(0,_myApp.flush)():(0,_myApp.flush$1)();// Items should have been rendered prior scrolling to an index.
if(0===this._physicalCount){return}idx=this._clamp(idx,0,this._virtualCount-1);// Update the virtual start only when needed.
if(!this._isIndexRendered(idx)||idx>=this._maxVirtualStart){this._virtualStart=this.grid?idx-2*this._itemsPerRow:idx-1}this._manageFocus();this._assignModels();this._updateMetrics();// Estimate new physical offset.
this._physicalTop=Math.floor(this._virtualStart/this._itemsPerRow)*this._physicalAverage;var currentTopItem=this._physicalStart,currentVirtualItem=this._virtualStart,targetOffsetTop=0,hiddenContentSize=this._hiddenContentSize;// scroll to the item as much as we can.
while(currentVirtualItem<idx&&targetOffsetTop<=hiddenContentSize){targetOffsetTop=targetOffsetTop+this._getPhysicalSizeIncrement(currentTopItem);currentTopItem=(currentTopItem+1)%this._physicalCount;currentVirtualItem++}this._updateScrollerSize(!0);this._positionItems();this._resetScrollPosition(this._physicalTop+this._scrollOffset+targetOffsetTop);this._increasePoolIfNeeded(0);// clear cached visible index.
this._firstVisibleIndexVal=null;this._lastVisibleIndexVal=null},/**
   * Reset the physical average and the average count.
   */_resetAverage:function(){this._physicalAverage=0;this._physicalAverageCount=0},/**
   * A handler for the `iron-resize` event triggered by `IronResizableBehavior`
   * when the element is resized.
   */_resizeHandler:function(){this._debounce("_render",function(){// clear cached visible index.
this._firstVisibleIndexVal=null;this._lastVisibleIndexVal=null;// Skip the resize event on touch devices when the address bar slides up.
this.updateViewportBoundaries();if(this._isVisible){// Reinstall the scroll event listener.
this.toggleScrollListener(!0);this._resetAverage();this._render()}else{// Uninstall the scroll event listener.
this.toggleScrollListener(!1)}},ANIMATION_FRAME)},/**
   * Converts a random index to the index of the item that completes it's row.
   * Allows for better order and fill computation when grid == true.
   */_convertIndexToCompleteRow:function(idx){// when grid == false _itemPerRow can be unset.
this._itemsPerRow=this._itemsPerRow||1;return this.grid?Math.ceil(idx/this._itemsPerRow)*this._itemsPerRow:idx},_isIndexRendered:function(idx){return idx>=this._virtualStart&&idx<=this._virtualEnd},_getPhysicalIndex:function(vidx){return(this._physicalStart+(vidx-this._virtualStart))%this._physicalCount},_clamp:function(v,min,max){return Math.min(max,Math.max(min,v))},_debounce:function(name,cb,asyncModule){this._debouncers=this._debouncers||{};this._debouncers[name]=_myApp.Debouncer.debounce(this._debouncers[name],asyncModule,cb.bind(this));(0,_myApp.enqueueDebouncer)(this._debouncers[name])}});_exports.PolymerIronList=PolymerIronList;var ironList={__proto__:null,PolymerIronList:PolymerIronList};/**
   @license
   Copyright (c) 2017 Vaadin Ltd.
   This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
   */ /**
       * @polymerMixin
       */_exports.$ironList=ironList;const A11yMixin=superClass=>class A11yMixin extends superClass{static get observers(){return["_a11yUpdateGridSize(size, _columnTree, _columnTree.*)"]}_a11yGetHeaderRowCount(_columnTree){return _columnTree.filter(level=>level.some(col=>col._headerTemplate||col.headerRenderer||col.path||col.header)).length}_a11yGetFooterRowCount(_columnTree){return _columnTree.filter(level=>level.some(col=>col._headerTemplate||col.headerRenderer)).length}_a11yUpdateGridSize(size,_columnTree){if(size===void 0||_columnTree===void 0){return}const bodyColumns=_columnTree[_columnTree.length-1];this.$.table.setAttribute("aria-rowcount",size+this._a11yGetHeaderRowCount(_columnTree)+this._a11yGetFooterRowCount(_columnTree));this.$.table.setAttribute("aria-colcount",bodyColumns&&bodyColumns.length||0);this._a11yUpdateHeaderRows();this._a11yUpdateFooterRows()}_a11yUpdateHeaderRows(){Array.from(this.$.header.children).forEach((headerRow,index)=>headerRow.setAttribute("aria-rowindex",index+1))}_a11yUpdateFooterRows(){Array.from(this.$.footer.children).forEach((footerRow,index)=>footerRow.setAttribute("aria-rowindex",this._a11yGetHeaderRowCount(this._columnTree)+this.size+index+1))}_a11yUpdateRowRowindex(row,index){row.setAttribute("aria-rowindex",index+this._a11yGetHeaderRowCount(this._columnTree)+1)}_a11yUpdateRowSelected(row,selected){// Jaws reads selection only for rows, NVDA only for cells
row.setAttribute("aria-selected",!!selected);Array.from(row.children).forEach(cell=>cell.setAttribute("aria-selected",!!selected))}_a11yUpdateRowLevel(row,level){row.setAttribute("aria-level",level+1)}_a11yUpdateRowDetailsOpened(row,detailsOpened){Array.from(row.children).forEach(cell=>{if("boolean"===typeof detailsOpened){cell.setAttribute("aria-expanded",detailsOpened)}else{if(cell.hasAttribute("aria-expanded")){cell.removeAttribute("aria-expanded")}}})}_a11ySetRowDetailsCell(row,detailsCell){Array.from(row.children).forEach(cell=>{if(cell!==detailsCell){cell.setAttribute("aria-controls",detailsCell.id)}})}_a11yUpdateCellColspan(cell,colspan){cell.setAttribute("aria-colspan",+colspan)}_a11yUpdateSorters(){Array.from(this.querySelectorAll("vaadin-grid-sorter")).forEach(sorter=>{let cellContent=sorter.parentNode;while(cellContent&&"vaadin-grid-cell-content"!==cellContent.localName){cellContent=cellContent.parentNode}if(cellContent&&cellContent.assignedSlot){const cell=cellContent.assignedSlot.parentNode;cell.setAttribute("aria-sort",{asc:"ascending",desc:"descending"}[sorter.direction+""]||"none")}})}};_exports.A11yMixin=A11yMixin;var vaadinGridA11yMixin={__proto__:null,A11yMixin:A11yMixin};/**
   @license
   Copyright (c) 2017 Vaadin Ltd.
   This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
   */ /**
       * @polymerMixin
       */_exports.$vaadinGridA11yMixin=vaadinGridA11yMixin;const ActiveItemMixin=superClass=>class ActiveItemMixin extends superClass{static get properties(){return{/**
       * The item user has last interacted with. Turns to `null` after user deactivates
       * the item by re-interacting with the currently active item.
       */activeItem:{type:Object,notify:!0,value:null}}}ready(){super.ready();this.$.scroller.addEventListener("click",this._onClick.bind(this));this.addEventListener("cell-activate",this._activateItem.bind(this))}_activateItem(e){const model=e.detail.model,clickedItem=model?model.item:null;if(clickedItem){this.activeItem=!this._itemsEqual(this.activeItem,clickedItem)?clickedItem:null}}// we need to listen to click instead of tap because on mobile safari, the
// document.activeElement has not been updated (focus has not been shifted)
// yet at the point when tap event is being executed.
_onClick(e){if(e.defaultPrevented){// Something has handled this click already, e. g., <vaadin-grid-sorter>
return}const path=e.composedPath(),cell=path[path.indexOf(this.$.table)-3];if(!cell||-1<cell.getAttribute("part").indexOf("details-cell")){return}const cellContent=cell._content,activeElement=this.getRootNode().activeElement,cellContentHasFocus=cellContent.contains(activeElement)&&(// MSIE bug: flex children receive focus. Make type & attributes check.
!this._ie||this._isFocusable(activeElement));if(!cellContentHasFocus&&!this._isFocusable(e.target)){this.dispatchEvent(new CustomEvent("cell-activate",{detail:{model:this.__getRowModel(cell.parentElement)}}))}}_isFocusable(target){if(!target.parentNode){return!1}const focusables=Array.from(target.parentNode.querySelectorAll("[tabindex], button, input, select, textarea, object, iframe, label, a[href], area[href]")).filter(element=>"cell body-cell"!==element.getAttribute("part")),isFocusableElement=-1!==focusables.indexOf(target);return!target.disabled&&isFocusableElement}};_exports.ActiveItemMixin=ActiveItemMixin;var vaadinGridActiveItemMixin={__proto__:null,ActiveItemMixin:ActiveItemMixin};_exports.$vaadinGridActiveItemMixin=vaadinGridActiveItemMixin;const ArrayDataProviderMixin=superClass=>class ArrayDataProviderMixin extends superClass{static get properties(){return{/**
       * An array containing the items which will be stamped to the column template
       * instances.
       */items:Array}}static get observers(){return["_itemsChanged(items, items.*, isAttached)"]}_itemsChanged(items,splices,isAttached){if(!isAttached){return}if(!Array.isArray(items)){if(items===void 0||null===items){this.size=0}if(this.dataProvider===this._arrayDataProvider){this.dataProvider=void 0}return}this.size=items.length;this.dataProvider=this.dataProvider||this._arrayDataProvider;this.clearCache();this._ensureFirstPageLoaded()}_arrayDataProvider(opts,cb){let items=(Array.isArray(this.items)?this.items:[]).slice(0);if(this._filters&&this._checkPaths(this._filters,"filtering",items)){items=this._filter(items)}this.size=items.length;if(opts.sortOrders.length&&this._checkPaths(this._sorters,"sorting",items)){items=items.sort(this._multiSort.bind(this))}const start=opts.page*opts.pageSize,end=start+opts.pageSize,slice=items.slice(start,end);cb(slice,items.length)}/**
     * Check array of filters/sorters for paths validity, console.warn invalid items
     * @param {Array}  arrayToCheck The array of filters/sorters to check
     * @param {string} action       The name of action to include in warning (filtering, sorting)
     * @param {Array}  items
     */_checkPaths(arrayToCheck,action,items){if(!items.length){return!1}let result=!0;for(var i in arrayToCheck){const path=arrayToCheck[i].path;// skip simple paths
if(!path||-1===path.indexOf(".")){continue}const parentProperty=path.replace(/\.[^\.]*$/,"");// a.b.c -> a.b
if(_myApp.Base.get(parentProperty,items[0])===void 0){console.warn(`Path "${path}" used for ${action} does not exist in all of the items, ${action} is disabled.`);result=!1}}return result}_multiSort(a,b){return this._sorters.map(sort=>{if("asc"===sort.direction){return this._compare(_myApp.Base.get(sort.path,a),_myApp.Base.get(sort.path,b))}else if("desc"===sort.direction){return this._compare(_myApp.Base.get(sort.path,b),_myApp.Base.get(sort.path,a))}return 0}).reduce((p,n)=>{return p?p:n},0)}_normalizeEmptyValue(value){if(0<=[void 0,null].indexOf(value)){return""}else if(isNaN(value)){return value.toString()}else{return value}}_compare(a,b){a=this._normalizeEmptyValue(a);b=this._normalizeEmptyValue(b);if(a<b){return-1}if(a>b){return 1}return 0}_filter(items){return items.filter((item,index)=>{return 0===this._filters.filter(filter=>{const value=this._normalizeEmptyValue(_myApp.Base.get(filter.path,item)),filterValueLowercase=this._normalizeEmptyValue(filter.value).toString().toLowerCase();return-1===value.toString().toLowerCase().indexOf(filterValueLowercase)}).length})}};_exports.ArrayDataProviderMixin=ArrayDataProviderMixin;var vaadinGridArrayDataProviderMixin={__proto__:null,ArrayDataProviderMixin:ArrayDataProviderMixin};_exports.$vaadinGridArrayDataProviderMixin=vaadinGridArrayDataProviderMixin;const ColumnReorderingMixin=superClass=>class ColumnReorderingMixin extends(0,_myApp.GestureEventListeners)(superClass){static get properties(){return{/**
       * Set to true to allow column reordering.
       */columnReorderingAllowed:{type:Boolean,value:!1},_orderBaseScope:{type:Number,value:1e7}}}static get observers(){return["_updateOrders(_columnTree, _columnTree.*)"]}ready(){super.ready();(0,_myApp.addListener)(this,"track",this._onTrackEvent);this._reorderGhost=this.shadowRoot.querySelector("[part=\"reorder-ghost\"]");this.addEventListener("touchstart",this._onTouchStart.bind(this));this.addEventListener("touchmove",this._onTouchMove.bind(this));this.addEventListener("touchend",this._onTouchEnd.bind(this));this.addEventListener("contextmenu",this._onContextMenu.bind(this))}_onContextMenu(e){if(this.hasAttribute("reordering")){e.preventDefault()}}_onTouchStart(e){// Touch event, delay activation by 100ms
this._startTouchReorderTimeout=setTimeout(()=>{this._onTrackStart({detail:{x:e.touches[0].clientX,y:e.touches[0].clientY}})},100)}_onTouchMove(e){if(this._draggedColumn){e.preventDefault()}clearTimeout(this._startTouchReorderTimeout)}_onTouchEnd(){clearTimeout(this._startTouchReorderTimeout);this._onTrackEnd()}_onTrackEvent(e){if("start"===e.detail.state){const path=e.composedPath(),headerCell=path[path.indexOf(this.$.header)-2];if(!headerCell||!headerCell._content){// Not a header column
return}const activeElement=this.getRootNode().activeElement;if(headerCell._content.contains(this.getRootNode().activeElement)&&(!this._ie||!this._isFocusable(activeElement))){// Something was focused inside the cell
return}if(this.$.scroller.hasAttribute("column-resizing")){// Resizing is in progress
return}if(!this._touchDevice){// Not a touch device
this._onTrackStart(e)}}else if("track"===e.detail.state){this._onTrack(e)}else if("end"===e.detail.state){this._onTrackEnd(e)}}_onTrackStart(e){if(!this.columnReorderingAllowed){return}// Cancel reordering if there are draggable nodes on the event path
const path=e.path||(0,_myApp.dom)(e).path;if(path&&path.filter(node=>node.hasAttribute&&node.hasAttribute("draggable"))[0]){return}const headerCell=this._cellFromPoint(e.detail.x,e.detail.y);if(!headerCell||-1===headerCell.getAttribute("part").indexOf("header-cell")){return}this._toggleAttribute("reordering",!0,this);this._draggedColumn=headerCell._column;while(1===this._draggedColumn.parentElement.childElementCount){// This is the only column in the group, drag the whole group instead
this._draggedColumn=this._draggedColumn.parentElement}this._setSiblingsReorderStatus(this._draggedColumn,"allowed");this._draggedColumn._reorderStatus="dragging";this._updateGhost(headerCell);this._reorderGhost.style.visibility="visible";this._updateGhostPosition(e.detail.x,this._touchDevice?e.detail.y-50:e.detail.y);this._autoScroller()}_onTrack(e){if(!this._draggedColumn){// Reordering didn’t start. Skip this event.
return}const targetCell=this._cellFromPoint(e.detail.x,e.detail.y);if(!targetCell){return}const targetColumn=this._getTargetColumn(targetCell,this._draggedColumn);if(this._isSwapAllowed(this._draggedColumn,targetColumn)&&this._isSwappableByPosition(targetColumn,e.detail.x)){this._swapColumnOrders(this._draggedColumn,targetColumn)}this._updateGhostPosition(e.detail.x,this._touchDevice?e.detail.y-50:e.detail.y);this._lastDragClientX=e.detail.x}_onTrackEnd(){if(!this._draggedColumn){// Reordering didn’t start. Skip this event.
return}this._toggleAttribute("reordering",!1,this);this._draggedColumn._reorderStatus="";this._setSiblingsReorderStatus(this._draggedColumn,"");this._draggedColumn=null;this._lastDragClientX=null;this._reorderGhost.style.visibility="hidden";this.dispatchEvent(new CustomEvent("column-reorder",{detail:{columns:this._getColumnsInOrder()}}))}_getColumnsInOrder(){return this._columnTree.slice(0).pop().filter(c=>!c.hidden).sort((b,a)=>b._order-a._order)}_cellFromPoint(x,y){x=x||0;y=y||0;if(!this._draggedColumn){this._toggleAttribute("no-content-pointer-events",!0,this.$.scroller)}let cell;if(_myApp.useShadow){cell=this.shadowRoot.elementFromPoint(x,y)}else{cell=document.elementFromPoint(x,y);// Workaround a FF58 bug
if("vaadin-grid-cell-content"===cell.localName){cell=cell.assignedSlot.parentNode}}this._toggleAttribute("no-content-pointer-events",!1,this.$.scroller);// Make sure the element is actually a cell
if(cell&&cell._column){return cell}}_updateGhostPosition(eventClientX,eventClientY){const ghostRect=this._reorderGhost.getBoundingClientRect(),targetLeft=eventClientX-ghostRect.width/2,targetTop=eventClientY-ghostRect.height/2,_left=parseInt(this._reorderGhost._left||0),_top=parseInt(this._reorderGhost._top||0);// // This is where we want to position the ghost
// Reposition the ghost
this._reorderGhost._left=_left-(ghostRect.left-targetLeft);this._reorderGhost._top=_top-(ghostRect.top-targetTop);this._reorderGhost.style.transform=`translate(${this._reorderGhost._left}px, ${this._reorderGhost._top}px)`}_getInnerText(e){if(e.localName){// Custom implementation needed since IE11 doesn't respect the spec in case of hidden elements
if("none"===getComputedStyle(e).display){return""}else{return Array.from(e.childNodes).map(n=>this._getInnerText(n)).join("")}}else{return e.textContent}}_updateGhost(cell){const ghost=this._reorderGhost;ghost.textContent=this._getInnerText(cell._content);const style=window.getComputedStyle(cell);["boxSizing","display","width","height","background","alignItems","padding","border","flex-direction","overflow"].forEach(propertyName=>ghost.style[propertyName]=style[propertyName]);return ghost}_updateOrders(columnTree,splices){if(columnTree===void 0||splices===void 0){return}// Reset all column orders
columnTree[0].forEach((column,index)=>column._order=0);// Set order numbers to top-level columns
columnTree[0].forEach((column,index)=>column._order=(index+1)*this._orderBaseScope)}_setSiblingsReorderStatus(column,status){Array.from(column.parentNode.children).filter(child=>/column/.test(child.localName)&&this._isSwapAllowed(child,column)).forEach(sibling=>sibling._reorderStatus=status)}_autoScroller(){if(this._lastDragClientX){const rightDiff=this._lastDragClientX-this.getBoundingClientRect().right+50,leftDiff=this.getBoundingClientRect().left-this._lastDragClientX+50;if(0<rightDiff){this.$.table.scrollLeft+=rightDiff/10}else if(0<leftDiff){this.$.table.scrollLeft-=leftDiff/10}this._scrollHandler()}if(this._draggedColumn){this.async(this._autoScroller,10)}}_isSwapAllowed(column1,column2){if(column1&&column2){const differentColumns=column1!==column2,sameParent=column1.parentElement===column2.parentElement,sameFrozen=column1.frozen===column2.frozen;return differentColumns&&sameParent&&sameFrozen}}_isSwappableByPosition(targetColumn,clientX){const targetCell=Array.from(this.$.header.querySelectorAll("tr:not([hidden]) [part~=\"cell\"]")).filter(cell=>targetColumn.contains(cell._column))[0],sourceCellRect=this.$.header.querySelector("tr:not([hidden]) [reorder-status=dragging]").getBoundingClientRect(),targetRect=targetCell.getBoundingClientRect();if(targetRect.left>sourceCellRect.left){return clientX>targetRect.right-sourceCellRect.width}else{return clientX<targetRect.left+sourceCellRect.width}}_swapColumnOrders(column1,column2){const _order=column1._order;column1._order=column2._order;column2._order=_order;this._updateLastFrozen();this._updateFirstAndLastColumn()}_getTargetColumn(targetCell,draggedColumn){if(targetCell&&draggedColumn){let candidate=targetCell._column;while(candidate.parentElement!==draggedColumn.parentElement&&candidate!==this){candidate=candidate.parentElement}if(candidate.parentElement===draggedColumn.parentElement){return candidate}else{return targetCell._column}}}/**
     * Fired when the columns in the grid are reordered.
     *
     * @event column-reorder
     * @param {Object} detail
     * @param {Object} detail.columns the columns in the new order
     */};_exports.ColumnReorderingMixin=ColumnReorderingMixin;var vaadinGridColumnReorderingMixin={__proto__:null,ColumnReorderingMixin:ColumnReorderingMixin};_exports.$vaadinGridColumnReorderingMixin=vaadinGridColumnReorderingMixin;const ColumnResizingMixin=superClass=>class ColumnResizingMixin extends(0,_myApp.GestureEventListeners)(superClass){ready(){super.ready();const scroller=this.$.scroller;(0,_myApp.addListener)(scroller,"track",this._onHeaderTrack.bind(this));// Disallow scrolling while resizing
scroller.addEventListener("touchmove",e=>scroller.hasAttribute("column-resizing")&&e.preventDefault());// Disable contextmenu on any resize separator.
scroller.addEventListener("contextmenu",e=>"resize-handle"==e.target.getAttribute("part")&&e.preventDefault());// Disable native cell focus when resizing
scroller.addEventListener("mousedown",e=>"resize-handle"===e.target.getAttribute("part")&&e.preventDefault())}_onHeaderTrack(e){const handle=e.target;if("resize-handle"===handle.getAttribute("part")){const cell=handle.parentElement;let column=cell._column;this._toggleAttribute("column-resizing",!0,this.$.scroller);// Get the target column to resize
while("vaadin-grid-column-group"===column.localName){column=Array.prototype.slice.call(column._childColumns,0).sort(function(a,b){return a._order-b._order}).filter(function(column){return!column.hidden}).pop()}const columnRowCells=Array.from(this.$.header.querySelectorAll("[part~=\"row\"]:last-child [part~=\"cell\"]"));var targetCell=columnRowCells.filter(cell=>cell._column===column)[0];// Resize the target column
if(targetCell.offsetWidth){var style=window.getComputedStyle(targetCell),minWidth=10+parseInt(style.paddingLeft)+parseInt(style.paddingRight)+parseInt(style.borderLeftWidth)+parseInt(style.borderRightWidth)+parseInt(style.marginLeft)+parseInt(style.marginRight);column.width=Math.max(minWidth,targetCell.offsetWidth+e.detail.x-targetCell.getBoundingClientRect().right)+"px";column.flexGrow=0}// Fix width and flex-grow for all preceding columns
columnRowCells.sort(function(a,b){return a._column._order-b._column._order}).forEach(function(cell,index,array){if(index<array.indexOf(targetCell)){cell._column.width=cell.offsetWidth+"px";cell._column.flexGrow=0}});if("end"===e.detail.state){this._toggleAttribute("column-resizing",!1,this.$.scroller);this.dispatchEvent(new CustomEvent("column-resize",{detail:{resizedColumn:column}}))}// Notify resize
this._resizeHandler()}}/**
    * Fired when a column in the grid is resized by the user.
    *
    * @event column-resize
    * @param {Object} detail
    * @param {Object} detail.resizedColumn the column that was resized
    */};_exports.ColumnResizingMixin=ColumnResizingMixin;var vaadinGridColumnResizingMixin={__proto__:null,ColumnResizingMixin:ColumnResizingMixin};_exports.$vaadinGridColumnResizingMixin=vaadinGridColumnResizingMixin;class GridTemplatizer extends class extends _myApp.PolymerElement{}{static get is(){return"vaadin-grid-templatizer"}static get properties(){return{dataHost:Object,template:Object,_templateInstances:{type:Array,value:function(){return[]}},_parentPathValues:{value:function(){return{}}},_grid:Object}}static get observers(){return["_templateInstancesChanged(_templateInstances.*, _parentPathValues.*)"]}constructor(){super();this._instanceProps={detailsOpened:!0,index:!0,item:!0,selected:!0,expanded:!0,level:!0}}createInstance(){this._ensureTemplatized();const instance=new this._TemplateClass({});this.addInstance(instance);return instance}addInstance(instance){if(-1===this._templateInstances.indexOf(instance)){this._templateInstances.push(instance);requestAnimationFrame(()=>this.notifyPath("_templateInstances.*",this._templateInstances))}}removeInstance(instance){const index=this._templateInstances.indexOf(instance);this.splice("_templateInstances",index,1)}_ensureTemplatized(){if(!this._TemplateClass){this._TemplateClass=(0,_myApp.templatize)(this.template,this,{instanceProps:this._instanceProps,parentModel:!0,forwardHostProp:function(prop,value){this._forwardParentProp(prop,value);if(this._templateInstances){this._templateInstances.forEach(inst=>inst.notifyPath(prop,value))}},notifyInstanceProp:function(inst,prop,value){if("index"===prop||"item"===prop){// We don’t need a change notification for these.
return}const originalProp=`__${prop}__`;// Notify for only user-action changes, not for scrolling updates. E. g.,
// if `detailsOpened` is different from `__detailsOpened__`, which was set during render.
if(inst[originalProp]===value){return}inst[originalProp]=value;const row=Array.from(this._grid.$.items.children).filter(row=>this._grid._itemsEqual(row._item,inst.item))[0];if(row){Array.from(row.children).forEach(cell=>{if(cell._instance){cell._instance[originalProp]=value;cell._instance.notifyPath(prop,value)}})}const itemPrefix="item.";if(Array.isArray(this._grid.items)&&0===prop.indexOf(itemPrefix)){const itemsIndex=this._grid.items.indexOf(inst.item),path=prop.slice(itemPrefix.length);this._grid.notifyPath(`items.${itemsIndex}.${path}`,value)}const gridCallback=`_${prop}InstanceChangedCallback`;if(this._grid&&this._grid[gridCallback]){this._grid[gridCallback](inst,value)}}})}}_forwardParentProp(prop,value){this._parentPathValues[prop]=value;this._templateInstances.forEach(inst=>inst.notifyPath(prop,value))}_templateInstancesChanged(t,p){let index,count;if("_templateInstances"===t.path){// Iterate all instances
index=0;count=this._templateInstances.length}else if("_templateInstances.splices"===t.path){// Iterate only new instances
index=t.value.index;count=t.value.addedCount}else{return}Object.keys(this._parentPathValues||{}).forEach(keyName=>{for(var i=index;i<index+count;i++){this._templateInstances[i].set(keyName,this._parentPathValues[keyName])}})}}_exports.Templatizer=GridTemplatizer;customElements.define(GridTemplatizer.is,GridTemplatizer);var vaadinGridTemplatizer={__proto__:null,Templatizer:GridTemplatizer};_exports.$vaadinGridTemplatizer=vaadinGridTemplatizer;const ColumnBaseMixin=superClass=>class ColumnBaseMixin extends superClass{static get properties(){return{/**
       * When set to true, the column is user-resizable.
       * @default false
       */resizable:{type:Boolean,value:function(){if("vaadin-grid-column-group"===this.localName){return}const parent=this.parentNode;if(parent&&"vaadin-grid-column-group"===parent.localName){return parent.resizable||!1}else{return!1}}},_headerTemplate:{type:Object},_footerTemplate:{type:Object},/**
       * When true, the column is frozen. When a column inside of a column group is frozen,
       * all of the sibling columns inside the group will get frozen also.
       */frozen:{type:Boolean,value:!1},/**
       * When set to true, the cells for this column are hidden.
       */hidden:{type:Boolean},/**
       * Text content to display in the header cell of the column.
       */header:{type:String},/**
       * Aligns the columns cell content horizontally.
       * Supported values: "start", "center" and "end".
       */textAlign:{type:String},_lastFrozen:{type:Boolean,value:!1},_order:Number,_reorderStatus:Boolean,_emptyCells:Array,_headerCell:Object,_footerCell:Object,_grid:Object,/**
       * Custom function for rendering the header content.
       * Receives two arguments:
       *
       * - `root` The header cell content DOM element. Append your content to it.
       * - `column` The `<vaadin-grid-column>` element.
       */headerRenderer:Function,/**
       * Custom function for rendering the footer content.
       * Receives two arguments:
       *
       * - `root` The footer cell content DOM element. Append your content to it.
       * - `column` The `<vaadin-grid-column>` element.
       */footerRenderer:Function}}static get observers(){return["_widthChanged(width, _headerCell, _footerCell, _cells.*)","_frozenChanged(frozen, _headerCell, _footerCell, _cells.*)","_flexGrowChanged(flexGrow, _headerCell, _footerCell, _cells.*)","_pathOrHeaderChanged(path, header, _headerCell, _footerCell, _cells.*, renderer, headerRenderer, _bodyTemplate, _headerTemplate)","_textAlignChanged(textAlign, _cells.*, _headerCell, _footerCell)","_orderChanged(_order, _headerCell, _footerCell, _cells.*)","_lastFrozenChanged(_lastFrozen)","_setBodyTemplateOrRenderer(_bodyTemplate, renderer, _cells, _cells.*)","_setHeaderTemplateOrRenderer(_headerTemplate, headerRenderer, _headerCell)","_setFooterTemplateOrRenderer(_footerTemplate, footerRenderer, _footerCell)","_resizableChanged(resizable, _headerCell)","_reorderStatusChanged(_reorderStatus, _headerCell, _footerCell, _cells.*)","_hiddenChanged(hidden, _headerCell, _footerCell, _cells.*)"]}/** @protected */connectedCallback(){super.connectedCallback();this._bodyTemplate&&(this._bodyTemplate.templatizer._grid=this._grid);this._headerTemplate&&(this._headerTemplate.templatizer._grid=this._grid);this._footerTemplate&&(this._footerTemplate.templatizer._grid=this._grid);this._templateObserver.flush();if(!this._bodyTemplate){// The observer might not have triggered if the tag is empty. Run manually.
this._templateObserver.callback()}requestAnimationFrame(()=>{this._allCells.forEach(cell=>{if(!cell._content.parentNode){this._grid&&this._grid.appendChild(cell._content)}})})}/** @protected */disconnectedCallback(){super.disconnectedCallback();requestAnimationFrame(()=>{if(!this._findHostGrid()){this._allCells.forEach(cell=>{if(cell._content.parentNode){cell._content.parentNode.removeChild(cell._content)}})}});this._gridValue=void 0}_findHostGrid(){let el=this;// Custom elements extending grid must have a specific localName
while(el&&!/^vaadin.*grid(-pro)?$/.test(el.localName)){el=el.assignedSlot?el.assignedSlot.parentNode:el.parentNode}return el||void 0}get _grid(){if(!this._gridValue){this._gridValue=this._findHostGrid()}return this._gridValue}get _allCells(){return[].concat(this._cells||[]).concat(this._emptyCells||[]).concat(this._headerCell).concat(this._footerCell).filter(cell=>cell)}constructor(){super();this._templateObserver=new _myApp.FlattenedNodesObserver(this,info=>{this._headerTemplate=this._prepareHeaderTemplate();this._footerTemplate=this._prepareFooterTemplate();this._bodyTemplate=this._prepareBodyTemplate()})}_prepareHeaderTemplate(){return this._prepareTemplatizer(this._findTemplate(!0)||null,{})}_prepareFooterTemplate(){return this._prepareTemplatizer(this._findTemplate(!1,!0)||null,{})}_prepareBodyTemplate(){return this._prepareTemplatizer(this._findTemplate()||null)}_prepareTemplatizer(template,instanceProps){if(template&&!template.templatizer){const templatizer=new GridTemplatizer;templatizer._grid=this._grid;templatizer.dataHost=this.dataHost;templatizer._instanceProps=instanceProps||templatizer._instanceProps;templatizer.template=template;template.templatizer=templatizer}return template}_renderHeaderAndFooter(){if(this.headerRenderer){this.__runRenderer(this.headerRenderer,this._headerCell)}if(this.footerRenderer){this.__runRenderer(this.footerRenderer,this._footerCell)}}__runRenderer(renderer,cell,rowData){const args=[cell._content,this];if(rowData&&rowData.item){args.push(rowData)}renderer.apply(this,args)}__setColumnTemplateOrRenderer(template,renderer,cells){if(template&&renderer){throw new Error("You should only use either a renderer or a template")}cells.forEach(cell=>{const model=this._grid.__getRowModel(cell.parentElement);if(renderer){cell._renderer=renderer;if(model.item||renderer===this.headerRenderer||renderer===this.footerRenderer){this.__runRenderer(renderer,cell,model)}}else if(cell._template!==template){cell._template=template;cell._content.innerHTML="";template.templatizer._grid=template.templatizer._grid||this._grid;const inst=template.templatizer.createInstance();cell._content.appendChild(inst.root);cell._instance=inst;if(model.item){cell._instance.setProperties(model)}}})}_setBodyTemplateOrRenderer(template,renderer,cells,splices){if((template||renderer)&&cells){this.__setColumnTemplateOrRenderer(template,renderer,cells)}}_setHeaderTemplateOrRenderer(headerTemplate,headerRenderer,headerCell){if((headerTemplate||headerRenderer)&&headerCell){this.__setColumnTemplateOrRenderer(headerTemplate,headerRenderer,[headerCell])}}_setFooterTemplateOrRenderer(footerTemplate,footerRenderer,footerCell){if((footerTemplate||footerRenderer)&&footerCell){this.__setColumnTemplateOrRenderer(footerTemplate,footerRenderer,[footerCell]);this._grid.__updateHeaderFooterRowVisibility(footerCell.parentElement)}}_selectFirstTemplate(header=!1,footer=!1){return _myApp.FlattenedNodesObserver.getFlattenedNodes(this).filter(node=>"template"===node.localName&&node.classList.contains("header")===header&&node.classList.contains("footer")===footer)[0]}_findTemplate(header,footer){const template=this._selectFirstTemplate(header,footer);if(template){if(this.dataHost){// set dataHost to the context where template has been defined
template._rootDataHost=this.dataHost._rootDataHost||this.dataHost}}return template}_flexGrowChanged(flexGrow,headerCell,footerCell,cells){if(this.parentElement&&this.parentElement._columnPropChanged){this.parentElement._columnPropChanged("flexGrow")}this._allCells.forEach(cell=>cell.style.flexGrow=flexGrow)}_orderChanged(order,headerCell,footerCell,cells){this._allCells.forEach(cell=>cell.style.order=order)}_widthChanged(width,headerCell,footerCell,cells){if(this.parentElement&&this.parentElement._columnPropChanged){this.parentElement._columnPropChanged("width")}this._allCells.forEach(cell=>cell.style.width=width);// Force a reflow to workaround browser issues causing double scrollbars to grid
// https://github.com/vaadin/vaadin-grid/issues/1586
if(this._grid&&this._grid.__forceReflow){this._grid.__forceReflow()}}_frozenChanged(frozen,headerCell,footerCell,cells){if(this.parentElement&&this.parentElement._columnPropChanged){this.parentElement._columnPropChanged("frozen",frozen)}this._allCells.forEach(cell=>this._toggleAttribute("frozen",frozen,cell));this._grid&&this._grid._frozenCellsChanged&&this._grid._frozenCellsChanged()}_lastFrozenChanged(lastFrozen){this._allCells.forEach(cell=>this._toggleAttribute("last-frozen",lastFrozen,cell));if(this.parentElement&&this.parentElement._columnPropChanged){this.parentElement._lastFrozen=lastFrozen}}_pathOrHeaderChanged(path,header,headerCell,footerCell,cells,renderer,headerRenderer,bodyTemplate,headerTemplate){const hasHeaderText=header!==void 0;if(!headerRenderer&&!headerTemplate&&hasHeaderText&&headerCell){this.__setTextContent(headerCell._content,header)}if(path&&cells.value){if(!renderer&&!bodyTemplate){const pathRenderer=(root,owner,{item})=>this.__setTextContent(root,this.get(path,item));this.__setColumnTemplateOrRenderer(void 0,pathRenderer,cells.value)}if(!headerRenderer&&!headerTemplate&&!hasHeaderText&&headerCell&&null!==header){this.__setTextContent(headerCell._content,this._generateHeader(path))}}if(headerCell){this._grid.__updateHeaderFooterRowVisibility(headerCell.parentElement)}}__setTextContent(node,textContent){node.textContent!==textContent&&(node.textContent=textContent)}_generateHeader(path){return path.substr(path.lastIndexOf(".")+1).replace(/([A-Z])/g,"-$1").toLowerCase().replace(/-/g," ").replace(/^./,match=>match.toUpperCase())}_toggleAttribute(name,bool,node){if(node.hasAttribute(name)===!bool){if(bool){node.setAttribute(name,"")}else{node.removeAttribute(name)}}}_reorderStatusChanged(reorderStatus,headerCell,footerCell,cells){this._allCells.forEach(cell=>cell.setAttribute("reorder-status",reorderStatus))}_resizableChanged(resizable,headerCell){if(resizable===void 0||headerCell===void 0){return}if(headerCell){[headerCell].concat(this._emptyCells).forEach(cell=>{if(cell){const existingHandle=cell.querySelector("[part~=\"resize-handle\"]");if(existingHandle){cell.removeChild(existingHandle)}if(resizable){const handle=document.createElement("div");handle.setAttribute("part","resize-handle");cell.appendChild(handle)}}})}}_textAlignChanged(textAlign,_cells,_headerCell,_footerCell){if(textAlign===void 0){return}if(-1===["start","end","center"].indexOf(textAlign)){console.warn("textAlign can only be set as \"start\", \"end\" or \"center\"");return}let textAlignFallback;if("ltr"===getComputedStyle(this._grid).direction){if("start"===textAlign){textAlignFallback="left"}else if("end"===textAlign){textAlignFallback="right"}}else{if("start"===textAlign){textAlignFallback="right"}else if("end"===textAlign){textAlignFallback="left"}}this._allCells.forEach(cell=>{cell._content.style.textAlign=textAlign;if(getComputedStyle(cell._content).textAlign!==textAlign){cell._content.style.textAlign=textAlignFallback}})}_hiddenChanged(hidden,headerCell,footerCell,cells){if(this.parentElement&&this.parentElement._columnPropChanged){this.parentElement._columnPropChanged("hidden",hidden)}this._allCells.forEach(cell=>this._toggleAttribute("hidden",hidden,cell));if(!!hidden!==!!this._previousHidden&&this._grid){this._grid._updateLastFrozen&&this._grid._updateLastFrozen();this._grid.notifyResize&&this._grid.notifyResize();this._grid._resetKeyboardNavigation&&this._grid._resetKeyboardNavigation()}this._previousHidden=hidden}};/**
    * A `<vaadin-grid-column>` is used to configure how a column in `<vaadin-grid>`
    * should look like.
    *
    * See `<vaadin-grid>` documentation and demos for instructions and examples on how
    * to configure the `<vaadin-grid-column>`.
    * ```
    *
    * @memberof Vaadin
    * @mixes Vaadin.Grid.ColumnBaseMixin
    */_exports.ColumnBaseMixin=ColumnBaseMixin;class GridColumnElement extends ColumnBaseMixin(_myApp.PolymerElement){static get is(){return"vaadin-grid-column"}static get properties(){return{/**
       * Width of the cells for this column.
       */width:{type:String,value:"100px"},/**
       * Flex grow ratio for the cell widths. When set to 0, cell width is fixed.
       */flexGrow:{type:Number,value:1},/**
       * Custom function for rendering the cell content.
       * Receives three arguments:
       *
       * - `root` The cell content DOM element. Append your content to it.
       * - `column` The `<vaadin-grid-column>` element.
       * - `rowData` The object with the properties related with
       *   the rendered item, contains:
       *   - `rowData.index` The index of the item.
       *   - `rowData.item` The item.
       *   - `rowData.expanded` Sublevel toggle state.
       *   - `rowData.level` Level of the tree represented with a horizontal offset of the toggle button.
       *   - `rowData.selected` Selected state.
       */renderer:Function,/**
       * Path to an item sub-property whose value gets displayed in the column body cells.
       * The property name is also shown in the column header if an explicit header or renderer isn't defined.
       */path:{type:String},/**
       * Automatically sets the width of the column based on the column contents when this is set to `true`.
       *
       * For performance reasons the column width is calculated automatically only once when the grid items
       * are rendered for the first time and the calculation only considers the rows which are currently
       * rendered in DOM (a bit more than what is currently visible). If the grid is scrolled, or the cell
       * content changes, the column width might not match the contents anymore.
       *
       * Hidden columns are ignored in the calculation and their widths are not automatically updated when
       * you show a column that was initially hidden.
       *
       * You can manually trigger the auto sizing behavior again by calling `grid.recalculateColumnWidths()`.
       *
       * The column width may still grow larger when `flexGrow` is not 0.
       */autoWidth:{type:Boolean,value:!1},_bodyTemplate:{type:Object},_cells:Array}}}_exports.GridColumnElement=GridColumnElement;customElements.define(GridColumnElement.is,GridColumnElement);var vaadinGridColumn={__proto__:null,ColumnBaseMixin:ColumnBaseMixin,GridColumnElement:GridColumnElement};_exports.$vaadinGridColumn=vaadinGridColumn;const ItemCache=class ItemCache{constructor(grid,parentCache,parentItem){this.grid=grid;this.parentCache=parentCache;this.parentItem=parentItem;this.itemCaches={};this.items={};this.effectiveSize=0;this.size=0;this.pendingRequests={}}isLoading(){return Object.keys(this.pendingRequests).length||Object.keys(this.itemCaches).filter(index=>{return this.itemCaches[index].isLoading()})[0]}getItemForIndex(index){const{cache,scaledIndex}=this.getCacheAndIndex(index);return cache.items[scaledIndex]}updateSize(){this.effectiveSize=!this.parentItem||this.grid._isExpanded(this.parentItem)?this.size+Object.keys(this.itemCaches).reduce((prev,curr)=>{const subCache=this.itemCaches[curr];subCache.updateSize();return prev+subCache.effectiveSize},0):0}ensureSubCacheForScaledIndex(scaledIndex){if(!this.itemCaches[scaledIndex]){const subCache=new ItemCache(this.grid,this,this.items[scaledIndex]);this.itemCaches[scaledIndex]=subCache;this.grid._loadPage(0,subCache)}}getCacheAndIndex(index){let thisLevelIndex=index;const keys=Object.keys(this.itemCaches);for(var i=0;i<keys.length;i++){const expandedIndex=+keys[i],subCache=this.itemCaches[expandedIndex];if(thisLevelIndex<=expandedIndex){return{cache:this,scaledIndex:thisLevelIndex}}else if(thisLevelIndex<=expandedIndex+subCache.effectiveSize){return subCache.getCacheAndIndex(thisLevelIndex-expandedIndex-1)}thisLevelIndex-=subCache.effectiveSize}return{cache:this,scaledIndex:thisLevelIndex}}};/**
    * @polymerMixin
    */_exports.ItemCache=ItemCache;const DataProviderMixin=superClass=>class DataProviderMixin extends superClass{static get properties(){return{/**
       * Number of items fetched at a time from the dataprovider.
       */pageSize:{type:Number,value:50,observer:"_pageSizeChanged"},/**
       * Function that provides items lazily. Receives arguments `params`, `callback`
       *
       * `params.page` Requested page index
       *
       * `params.pageSize` Current page size
       *
       * `params.filters` Currently applied filters
       *
       * `params.sortOrders` Currently applied sorting orders
       *
       * `params.parentItem` When tree is used, and sublevel items
       * are requested, reference to parent item of the requested sublevel.
       * Otherwise `undefined`.
       *
       * `callback(items, size)` Callback function with arguments:
       *   - `items` Current page of items
       *   - `size` Total number of items. When tree sublevel items
       *     are requested, total number of items in the requested sublevel.
       *     Optional when tree is not used, required for tree.
       */dataProvider:{type:Object,notify:!0,observer:"_dataProviderChanged"},/**
       * `true` while data is being requested from the data provider.
       */loading:{type:Boolean,notify:!0,readOnly:!0,reflectToAttribute:!0},_cache:{type:Object,value:function(){const cache=new ItemCache(this);return cache}},/**
       * Path to an item sub-property that identifies the item.
       */itemIdPath:{type:String,value:null},/**
       * An array that contains the expanded items.
       */expandedItems:{type:Object,notify:!0,value:()=>[]}}}static get observers(){return["_sizeChanged(size)","_expandedItemsChanged(expandedItems.*)"]}_sizeChanged(size){const delta=size-this._cache.size;this._cache.size+=delta;this._cache.effectiveSize+=delta;this._effectiveSize=this._cache.effectiveSize}_updateRowItem(item,el){el.children.forEach(cell=>{cell._instance&&(cell._instance.item=item)})}_getItem(index,el){if(index>=this._effectiveSize){return}el.index=index;const{cache,scaledIndex}=this._cache.getCacheAndIndex(index),item=cache.items[scaledIndex];if(item){this._toggleAttribute("loading",!1,el);this._updateItem(el,item);if(this._isExpanded(item)){cache.ensureSubCacheForScaledIndex(scaledIndex)}}else{this._toggleAttribute("loading",!0,el);this._loadPage(this._getPageForIndex(scaledIndex),cache)}}_pagesForPhysicalItems(){// TODO: potentially heavy operation to run first visible index,
// reconsider if performance issues occur on data binding / scrolling.
// TODO: _vidxOffset shouldn't be read from here.
const firstVisiblePage=this._getPageForIndex(this._firstVisibleIndex+this._vidxOffset);return[firstVisiblePage].concat(this._physicalItems.filter(row=>row.index).items(row=>this._getPageForIndex(row.index))).reduce((prev,curr)=>{if(-1===prev.indexOf(curr)){prev.push(curr)}return prev},[])}_expandedInstanceChangedCallback(inst,value){if(inst.item===void 0){return}if(value){this.expandItem(inst.item)}else{this.collapseItem(inst.item)}}/**
     * Returns a value that identifies the item. Uses `itemIdPath` if available.
     * Can be customized by overriding.
     */getItemId(item){return this.itemIdPath?this.get(this.itemIdPath,item):item}_isExpanded(item){return this.expandedItems&&-1<this._getItemIndexInArray(item,this.expandedItems)}_expandedItemsChanged(e){this._cache.updateSize();this._effectiveSize=this._cache.effectiveSize;this._assignModels()}/**
     * Expands the given item tree.
     */expandItem(item){if(!this._isExpanded(item)){this.push("expandedItems",item)}}/**
     * Collapses the given item tree.
     */collapseItem(item){if(this._isExpanded(item)){this.splice("expandedItems",this._getItemIndexInArray(item,this.expandedItems),1)}}_getIndexLevel(index){let{cache}=this._cache.getCacheAndIndex(index),level=0;while(cache.parentCache){cache=cache.parentCache;level++}return level}_canPopulate(){return this._hasData&&this._columnTree}_loadPage(page,cache){// make sure same page isn't requested multiple times.
if(!cache.pendingRequests[page]&&this.dataProvider){this._setLoading(!0);cache.pendingRequests[page]=!0;const params={page,pageSize:this.pageSize,sortOrders:this._mapSorters(),filters:this._mapFilters(),parentItem:cache.parentItem};this.dataProvider(params,(items,size)=>{if(size!==void 0){cache.size=size}else{if(params.parentItem){cache.size=items.length}}// Populate the cache with new items
items.forEach((item,itemsIndex)=>{const itemIndex=page*this.pageSize+itemsIndex;cache.items[itemIndex]=item;if(this._isExpanded(item)){// Force synchronous data request for expanded item sub-cache
cache.ensureSubCacheForScaledIndex(itemIndex)}});this._hasData=!0;delete cache.pendingRequests[page];if(!this._cache.isLoading()){// All active requests have finished, update the effective size and rows
this._setLoading(!1);this._cache.updateSize();this._effectiveSize=this._cache.effectiveSize;Array.from(this.$.items.children).filter(row=>!row.hidden).forEach(row=>{const cachedItem=this._cache.getItemForIndex(row.index);if(cachedItem){this._toggleAttribute("loading",!1,row);this._updateItem(row,cachedItem)}});this._increasePoolIfNeeded(0)}this.__setInitialColumnWidths()})}}_getPageForIndex(index){return Math.floor(index/this.pageSize)}/**
     * Clears the cached pages and reloads data from dataprovider when needed.
     */clearCache(){this._cache=new ItemCache(this);Array.from(this.$.items.children).forEach(row=>{Array.from(row.children).forEach(cell=>{// Force data system to pick up subproperty changes
cell._instance&&cell._instance._setPendingProperty("item",{},!1)})});this._cache.size=this.size||0;this._cache.updateSize();this._hasData=!1;this._assignModels();if(!this._effectiveSize){this._loadPage(0,this._cache)}}_flushItemsDebouncer(){if(this._debouncerLoad){this._debouncerLoad.flush()}}_pageSizeChanged(pageSize,oldPageSize){if(oldPageSize!==void 0&&pageSize!==oldPageSize){this.clearCache()}}_checkSize(){if(this.size===void 0&&0===this._effectiveSize){console.warn("The <vaadin-grid> needs the total number of items"+" in order to display rows. Set the total number of items"+" to the `size` property, or provide the total number of items"+" in the second argument of the `dataProvider`\u2019s `callback` call.")}}_dataProviderChanged(dataProvider,oldDataProvider){if(oldDataProvider!==void 0){this.clearCache()}if(dataProvider&&this.items&&this.items.length){// Fixes possibly invalid cached lastVisibleIndex value in <iron-list>
this._scrollToIndex(this._firstVisibleIndex)}this._ensureFirstPageLoaded();this._debouncerCheckSize=_myApp.Debouncer.debounce(this._debouncerCheckSize,_myApp.timeOut.after(2e3),this._checkSize.bind(this));this._scrollHandler()}_ensureFirstPageLoaded(){if(!this._hasData){// load data before adding rows to make sure they have content when
// rendered for the first time.
this._loadPage(0,this._cache,()=>{const hadData=this._hasData;this._hasData=!0;if(!hadData){this.notifyResize()}})}}_itemsEqual(item1,item2){return this.getItemId(item1)===this.getItemId(item2)}_getItemIndexInArray(item,array){let result=-1;array.forEach((i,idx)=>{if(this._itemsEqual(i,item)){result=idx}});return result}};_exports.DataProviderMixin=DataProviderMixin;var vaadinGridDataProviderMixin={__proto__:null,ItemCache:ItemCache,DataProviderMixin:DataProviderMixin};/**
   @license
   Copyright (c) 2019 Vaadin Ltd.
   This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
   */_exports.$vaadinGridDataProviderMixin=vaadinGridDataProviderMixin;const DropMode={BETWEEN:"between",ON_TOP:"on-top",ON_TOP_OR_BETWEEN:"on-top-or-between",ON_GRID:"on-grid"},DropLocation={ON_TOP:"on-top",ABOVE:"above",BELOW:"below",EMPTY:"empty"},DragAndDropMixin=superClass=>class DragAndDropMixin extends superClass{static get properties(){return{/**
       * Defines the locations within the Grid row where an element can be dropped.
       *
       * Possible values are:
       * - `between`: The drop event can happen between Grid rows.
       * - `on-top`: The drop event can happen on top of Grid rows.
       * - `on-top-or-between`: The drop event can happen either on top of or between Grid rows.
       * - `on-grid`: The drop event will not happen on any specific row, it will show the drop target outline around the whole grid.
       */dropMode:String,/**
       * Marks the grid's rows to be available for dragging.
       */rowsDraggable:Boolean,/**
       * A function that filters dragging of specific grid rows. The return value should be false
       * if dragging of the row should be disabled.
       *
       * Receives one argument:
       * - `rowData` The object with the properties related with
       *   the rendered item, contains:
       *   - `rowData.index` The index of the item.
       *   - `rowData.item` The item.
       *   - `rowData.expanded` Sublevel toggle state.
       *   - `rowData.level` Level of the tree represented with a horizontal offset of the toggle button.
       *   - `rowData.selected` Selected state.
       */dragFilter:Function,/**
       * A function that filters dropping on specific grid rows. The return value should be false
       * if dropping on the row should be disabled.
       *
       * Receives one argument:
       * - `rowData` The object with the properties related with
       *   the rendered item, contains:
       *   - `rowData.index` The index of the item.
       *   - `rowData.item` The item.
       *   - `rowData.expanded` Sublevel toggle state.
       *   - `rowData.level` Level of the tree represented with a horizontal offset of the toggle button.
       *   - `rowData.selected` Selected state.
       */dropFilter:Function,__dndAutoScrollThreshold:{value:50}}}static get observers(){return["_dragDropAccessChanged(rowsDraggable, dropMode, dragFilter, dropFilter)"]}ready(){super.ready();this.$.table.addEventListener("dragstart",this._onDragStart.bind(this));this.$.table.addEventListener("dragend",this._onDragEnd.bind(this));this.$.table.addEventListener("dragover",this._onDragOver.bind(this));this.$.table.addEventListener("dragleave",this._onDragLeave.bind(this));this.$.table.addEventListener("drop",this._onDrop.bind(this));this.$.table.addEventListener("dragenter",e=>{if(this.dropMode){e.preventDefault();e.stopPropagation()}})}_onDragStart(e){if(this.rowsDraggable){let row=e.target;if("vaadin-grid-cell-content"===row.localName){// The draggable node is the cell content element on browsers that support native shadow
row=row.assignedSlot.parentNode.parentNode}if(row.parentNode!==this.$.items){return}e.stopPropagation();this._toggleAttribute("dragging-rows",!0,this);if(this._safari){// Safari doesn't get proper drag images from transformed
// elements so we need to switch to top temporarily
const transform=row.style.transform;row.style.top=/translateY\((.*)\)/.exec(transform)[1];row.style.transform="none";requestAnimationFrame(()=>{row.style.top="";row.style.transform=transform})}const rowRect=row.getBoundingClientRect();if(!window.ShadyDOM){if(this._ios){e.dataTransfer.setDragImage(row)}else{e.dataTransfer.setDragImage(row,e.clientX-rowRect.left,e.clientY-rowRect.top)}}let rows=[row];if(this._isSelected(row._item)){rows=this.__getViewportRows().filter(row=>this._isSelected(row._item)).filter(row=>!this.dragFilter||this.dragFilter(this.__getRowModel(row)))}// Set the default transfer data
e.dataTransfer.setData("text",this.__formatDefaultTransferData(rows));row.setAttribute("dragstart",1<rows.length?rows.length:"");this.updateStyles({"--_grid-drag-start-x":`${e.clientX-rowRect.left+20}px`,"--_grid-drag-start-y":`${e.clientY-rowRect.top+10}px`});requestAnimationFrame(()=>{row.removeAttribute("dragstart");this.updateStyles({"--_grid-drag-start-x":"","--_grid-drag-start-y":""})});const event=new CustomEvent("grid-dragstart",{detail:{draggedItems:rows.map(row=>row._item),setDragData:(type,data)=>e.dataTransfer.setData(type,data),setDraggedItemsCount:count=>row.setAttribute("dragstart",count)}});event.originalEvent=e;this.dispatchEvent(event)}}_onDragEnd(e){this._toggleAttribute("dragging-rows",!1,this);e.stopPropagation();const event=new CustomEvent("grid-dragend");event.originalEvent=e;this.dispatchEvent(event)}_onDragLeave(e){e.stopPropagation();this._clearDragStyles()}_onDragOver(e){if(this.dropMode){this._dropLocation=void 0;this._dragOverItem=void 0;if(this.__dndAutoScroll(e.clientY)){this._clearDragStyles();return}let row=e.composedPath().filter(node=>"tr"===node.localName)[0];if(!this._effectiveSize||this.dropMode===DropMode.ON_GRID){// The grid is empty or "on-grid" drop mode was used, always default to "empty"
this._dropLocation=DropLocation.EMPTY}else if(!row||row.parentNode!==this.$.items){// The dragover didn't occur on a body row but the grid has items
if(row){// The dragover occurred over a header/footer row
return}else if(this.dropMode===DropMode.BETWEEN||this.dropMode===DropMode.ON_TOP_OR_BETWEEN){// The drop mode allows setting the last row as the drag over item
row=Array.from(this.$.items.children).filter(row=>!row.hidden).pop();this._dropLocation=DropLocation.BELOW}else{// Drop mode on-top used but the dragover didn't occur over one of the existing rows
return}}else{// The dragover occurred on a body row, determine the drop location from coordinates
const rowRect=row.getBoundingClientRect();this._dropLocation=DropLocation.ON_TOP;if(this.dropMode===DropMode.BETWEEN){const dropAbove=e.clientY-rowRect.top<rowRect.bottom-e.clientY;this._dropLocation=dropAbove?DropLocation.ABOVE:DropLocation.BELOW}else if(this.dropMode===DropMode.ON_TOP_OR_BETWEEN){if(e.clientY-rowRect.top<rowRect.height/3){this._dropLocation=DropLocation.ABOVE}else if(e.clientY-rowRect.top>2*(rowRect.height/3)){this._dropLocation=DropLocation.BELOW}}}if(row&&row.hasAttribute("drop-disabled")){this._dropLocation=void 0;return}e.stopPropagation();e.preventDefault();if(this._dropLocation===DropLocation.EMPTY){this._toggleAttribute("dragover",!0,this)}else if(row){this._dragOverItem=row._item;if(row.getAttribute("dragover")!==this._dropLocation){row.setAttribute("dragover",this._dropLocation)}}else{this._clearDragStyles()}}}__dndAutoScroll(clientY){if(this.__dndAutoScrolling){return!0}const headerBottom=this.$.header.getBoundingClientRect().bottom,footerTop=this.$.footer.getBoundingClientRect().top,topDiff=headerBottom-clientY+this.__dndAutoScrollThreshold,bottomDiff=clientY-footerTop+this.__dndAutoScrollThreshold;let scrollTopDelta=0;if(0<bottomDiff){scrollTopDelta=2*bottomDiff}else if(0<topDiff){scrollTopDelta=2*-topDiff}if(scrollTopDelta){const scrollTop=this.$.table.scrollTop;this.$.table.scrollTop+=scrollTopDelta;const scrollTopChanged=scrollTop!==this.$.table.scrollTop;if(scrollTopChanged){this.__dndAutoScrolling=!0;// Disallow more auto-scrolls within 20ms
setTimeout(()=>this.__dndAutoScrolling=!1,20);this._scrollHandler();return!0}}}__getViewportRows(){const headerBottom=this.$.header.getBoundingClientRect().bottom,footerTop=this.$.footer.getBoundingClientRect().top;return Array.from(this.$.items.children).filter(row=>{const rowRect=row.getBoundingClientRect();return rowRect.bottom>headerBottom&&rowRect.top<footerTop})}_clearDragStyles(){this.removeAttribute("dragover");Array.from(this.$.items.children).forEach(row=>row.removeAttribute("dragover"))}_onDrop(e){if(this.dropMode){e.stopPropagation();e.preventDefault();const dragData=e.dataTransfer.types&&Array.from(e.dataTransfer.types).map(type=>{return{type,data:e.dataTransfer.getData(type)}});this._clearDragStyles();const event=new CustomEvent("grid-drop",{bubbles:e.bubbles,cancelable:e.cancelable,detail:{dropTargetItem:this._dragOverItem,dropLocation:this._dropLocation,dragData}});event.originalEvent=e;this.dispatchEvent(event)}}__formatDefaultTransferData(rows){return rows.map(row=>{return Array.from(row.children).filter(cell=>!cell.hidden&&-1===cell.getAttribute("part").indexOf("details-cell")).sort((a,b)=>{return a._column._order>b._column._order?1:-1}).map(cell=>cell._content.textContent.trim()).filter(content=>content).join("\t")}).join("\n")}_dragDropAccessChanged(rowsDraggable,dropMode,dragFilter,dropFilter){this.filterDragAndDrop()}/**
     * Runs the `dragFilter` and `dropFilter` hooks for the visible cells.
     * If the filter depends on varying conditions, you may need to
     * call this function manually in order to update the draggability when
     * the conditions change.
     */filterDragAndDrop(){Array.from(this.$.items.children).filter(row=>!row.hidden).forEach(row=>{this._filterDragAndDrop(row,this.__getRowModel(row))})}_filterDragAndDrop(row,rowData){const dragDisabled=!this.rowsDraggable||this.dragFilter&&!this.dragFilter(rowData),dropDisabled=!this.dropMode||this.dropFilter&&!this.dropFilter(rowData),draggableElements=window.ShadyDOM?[row]:Array.from(row.children).map(cell=>cell._content);draggableElements.forEach(e=>{if(dragDisabled){e.removeAttribute("draggable")}else{e.setAttribute("draggable",!0)}});this._toggleAttribute("drag-disabled",dragDisabled,row);this._toggleAttribute("drop-disabled",dropDisabled,row)}/**
     * Fired when starting to drag grid rows.
     *
     * @event grid-dragstart
     * @param {Object} originalEvent The native dragstart event
     * @param {Object} detail
     * @param {Object} detail.draggedItems the items in the visible viewport that are dragged
     * @param {Function} detail.setDraggedItemsCount Overrides the default number shown in the drag image on multi row drag.
     * Parameter is of type number.
     * @param {Function} detail.setDragData Sets dataTransfer data for the drag operation.
     * Note that "text" is the only data type supported by all the browsers the grid currently supports (including IE11).
     * The function takes two parameters:
     * - type:string The type of the data
     * - data:string The data
     */ /**
         * Fired when the dragging of the rows ends.
         *
         * @event grid-dragend
         * @param {Object} originalEvent The native dragend event
         */ /**
             * Fired when a drop occurs on top of the grid.
             *
             * @event grid-drop
             * @param {Object} originalEvent The native drop event
             * @param {Object} detail
             * @param {Object} detail.dropTargetItem The item of the grid row on which the drop occurred.
             * @param {string} detail.dropLocation The position at which the drop event took place relative to a row.
             * Depending on the dropMode value, the drop location can be one of the following
             * - `on-top`: when the drop occurred on top of the row
             * - `above`: when the drop occurred above the row
             * - `below`: when the drop occurred below the row
             * - `empty`: when the drop occurred over the grid, not relative to any specific row
             * @param {string} detail.dragData An array of items with the payload as a string representation as the
             * `data` property and the type of the data as `type` property.
             */};_exports.DragAndDropMixin=DragAndDropMixin;var vaadinGridDragAndDropMixin={__proto__:null,DragAndDropMixin:DragAndDropMixin};_exports.$vaadinGridDragAndDropMixin=vaadinGridDragAndDropMixin;const DynamicColumnsMixin=superClass=>class DynamicColumnsMixin extends superClass{ready(){super.ready();this._addNodeObserver()}_hasColumnGroups(columns){for(let i=0;i<columns.length;i++){if("vaadin-grid-column-group"===columns[i].localName){return!0}}return!1}_getChildColumns(el){return _myApp.FlattenedNodesObserver.getFlattenedNodes(el).filter(this._isColumnElement)}_flattenColumnGroups(columns){return columns.map(col=>{if("vaadin-grid-column-group"===col.localName){return this._getChildColumns(col)}else{return[col]}}).reduce((prev,curr)=>{return prev.concat(curr)},[])}_getColumnTree(){for(var rootColumns=_myApp.FlattenedNodesObserver.getFlattenedNodes(this).filter(this._isColumnElement),_columnTree=[],c=rootColumns;;){_columnTree.push(c);if(!this._hasColumnGroups(c)){break}c=this._flattenColumnGroups(c)}return _columnTree}_updateColumnTree(){var columnTree=this._getColumnTree();if(!this._arrayEquals(columnTree,this._columnTree)){this._columnTree=columnTree}}_addNodeObserver(){this._observer=new _myApp.FlattenedNodesObserver(this,info=>{const rowDetailsTemplate=info.addedNodes.filter(n=>"template"===n.localName&&n.classList.contains("row-details"))[0];if(rowDetailsTemplate&&this._rowDetailsTemplate!==rowDetailsTemplate){this._rowDetailsTemplate=rowDetailsTemplate}if(0<info.addedNodes.filter(this._isColumnElement).length||0<info.removedNodes.filter(this._isColumnElement).length){this._updateColumnTree()}this._debouncerCheckImports=_myApp.Debouncer.debounce(this._debouncerCheckImports,_myApp.timeOut.after(2e3),this._checkImports.bind(this));this._ensureFirstPageLoaded()})}_arrayEquals(arr1,arr2){if(!arr1||!arr2||arr1.length!=arr2.length){return!1}for(var i=0,l=arr1.length;i<l;i++){// Check if we have nested arrays
if(arr1[i]instanceof Array&&arr2[i]instanceof Array){// recurse into the nested arrays
if(!this._arrayEquals(arr1[i],arr2[i])){return!1}}else if(arr1[i]!=arr2[i]){return!1}}return!0}_checkImports(){["vaadin-grid-column-group","vaadin-grid-filter","vaadin-grid-filter-column","vaadin-grid-tree-toggle","vaadin-grid-selection-column","vaadin-grid-sort-column","vaadin-grid-sorter"].forEach(elementName=>{var element=this.querySelector(elementName);if(element&&!(element instanceof _myApp.PolymerElement)){console.warn(`Make sure you have imported the required module for <${elementName}> element.`)}})}_updateFirstAndLastColumn(){Array.from(this.shadowRoot.querySelectorAll("tr")).forEach(row=>this._updateFirstAndLastColumnForRow(row))}_updateFirstAndLastColumnForRow(row){Array.from(row.querySelectorAll("[part~=\"cell\"]:not([part~=\"details-cell\"])")).sort((a,b)=>{return a._column._order-b._column._order}).forEach((cell,cellIndex,children)=>{this._toggleAttribute("first-column",0===cellIndex,cell);this._toggleAttribute("last-column",cellIndex===children.length-1,cell)})}_isColumnElement(node){return node.nodeType===Node.ELEMENT_NODE&&/\bcolumn\b/.test(node.localName)}};_exports.DynamicColumnsMixin=DynamicColumnsMixin;var vaadinGridDynamicColumnsMixin={__proto__:null,DynamicColumnsMixin:DynamicColumnsMixin};/**
   @license
   Copyright (c) 2018 Vaadin Ltd.
   This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
   */ /**
       * @polymerMixin
       */_exports.$vaadinGridDynamicColumnsMixin=vaadinGridDynamicColumnsMixin;const EventContextMixin=superClass=>class EventContextMixin extends superClass{/**
   * Returns an object with context information about the event target:
   * - `item`: the data object corresponding to the targeted row (not specified when targeting header or footer)
   * - `column`: the column element corresponding to the targeted cell (not specified when targeting row details)
   * - `section`: whether the event targeted the body, header, footer or details of the grid
   *
   * These additional properties are included when `item` is specified:
   * - `index`: the index of the item
   * - `selected`: the selected state of the item
   * - `detailsOpened`: whether the row details are open for the item
   * - `expanded`: the expanded state of the tree toggle
   * - `level`: the tree hierarchy level
   *
   * The returned object is populated only when a grid cell, header, footer or row details is found in `event.composedPath()`.
   * This means mostly mouse and keyboard events. If such a grid part is not found in the path, an empty object is returned.
   * This may be the case eg. if the event is fired on the `<vaadin-grid>` element and not any deeper in the DOM, or if
   * the event targets the empty part of the grid body.
   */getEventContext(event){const context={},path=event.composedPath(),cell=path[path.indexOf(this.$.table)-3];if(!cell){return context}context.section=["body","header","footer","details"].filter(section=>-1<cell.getAttribute("part").indexOf(section))[0];if(cell._column){context.column=cell._column}if("body"===context.section||"details"===context.section){Object.assign(context,this.__getRowModel(cell.parentElement))}return context}};_exports.EventContextMixin=EventContextMixin;var vaadinGridEventContextMixin={__proto__:null,EventContextMixin:EventContextMixin};_exports.$vaadinGridEventContextMixin=vaadinGridEventContextMixin;const $_documentContainer$3=document.createElement("template");$_documentContainer$3.innerHTML=`<dom-module id="vaadin-text-field-shared-styles">
  <template>
    <style>
      :host {
        display: inline-flex;
        outline: none;
      }

      :host::before {
        content: "\\2003";
        width: 0;
        display: inline-block;
        /* Size and position this element on the same vertical position as the input-field element
           to make vertical align for the host element work as expected */
      }

      :host([hidden]) {
        display: none !important;
      }

      .vaadin-text-field-container,
      .vaadin-text-area-container {
        display: flex;
        flex-direction: column;
        min-width: 100%;
        max-width: 100%;
        width: var(--vaadin-text-field-default-width, 12em);
      }

      [part="label"]:empty {
        display: none;
      }

      [part="input-field"] {
        display: flex;
        align-items: center;
        flex: auto;
      }

      .vaadin-text-field-container [part="input-field"] {
        flex-grow: 0;
      }

      /* Reset the native input styles */
      [part="value"],
      [part="input-field"] ::slotted(input),
      [part="input-field"] ::slotted(textarea) {
        -webkit-appearance: none;
        -moz-appearance: none;
        outline: none;
        margin: 0;
        padding: 0;
        border: 0;
        border-radius: 0;
        min-width: 0;
        font: inherit;
        font-size: 1em;
        line-height: normal;
        color: inherit;
        background-color: transparent;
        /* Disable default invalid style in Firefox */
        box-shadow: none;
      }

      [part="input-field"] ::slotted(*) {
        flex: none;
      }

      [part="value"],
      [part="input-field"] ::slotted(input),
      [part="input-field"] ::slotted(textarea),
      /* Slotted by vaadin-select-text-field */
      [part="input-field"] ::slotted([part="value"]) {
        flex: auto;
        white-space: nowrap;
        overflow: hidden;
        width: 100%;
        height: 100%;
      }

      [part="input-field"] ::slotted(textarea) {
        resize: none;
      }

      [part="value"]::-ms-clear,
      [part="input-field"] ::slotted(input)::-ms-clear {
        display: none;
      }

      [part="clear-button"] {
        cursor: default;
      }

      [part="clear-button"]::before {
        content: "✕";
      }
    </style>
  </template>
</dom-module>`;document.head.appendChild($_documentContainer$3.content);const HOST_PROPS={default:["list","autofocus","pattern","autocapitalize","autocorrect","maxlength","minlength","name","placeholder","autocomplete","title"],accessible:["disabled","readonly","required","invalid"]},PROP_TYPE={DEFAULT:"default",ACCESSIBLE:"accessible"},TextFieldMixin=subclass=>class VaadinTextFieldMixin extends ControlStateMixin(subclass){static get properties(){return{/**
       * Whether the value of the control can be automatically completed by the browser.
       * List of available options at:
       * https://developer.mozilla.org/en/docs/Web/HTML/Element/input#attr-autocomplete
       */autocomplete:{type:String},/**
       * This is a property supported by Safari that is used to control whether
       * autocorrection should be enabled when the user is entering/editing the text.
       * Possible values are:
       * on: Enable autocorrection.
       * off: Disable autocorrection.
       */autocorrect:{type:String},/**
       * This is a property supported by Safari and Chrome that is used to control whether
       * autocapitalization should be enabled when the user is entering/editing the text.
       * Possible values are:
       * characters: Characters capitalization.
       * words: Words capitalization.
       * sentences: Sentences capitalization.
       * none: No capitalization.
       */autocapitalize:{type:String},/**
       * Specify that the value should be automatically selected when the field gains focus.
       */autoselect:{type:Boolean,value:!1},/**
       * Set to true to display the clear icon which clears the input.
       */clearButtonVisible:{type:Boolean,value:!1},/**
       * Error to show when the input value is invalid.
       */errorMessage:{type:String,value:""},/**
       * Object with translated strings used for localization. Has
       * the following structure and default values:
       *
       * ```
       * {
       *   // Translation of the clear icon button accessible label
       *   clear: 'Clear'
       * }
       * ```
       */i18n:{type:Object,value:()=>{return{clear:"Clear"}}},/**
       * String used for the label element.
       */label:{type:String,value:"",observer:"_labelChanged"},/**
       * Maximum number of characters (in Unicode code points) that the user can enter.
       */maxlength:{type:Number},/**
       * Minimum number of characters (in Unicode code points) that the user can enter.
       */minlength:{type:Number},/**
       * The name of the control, which is submitted with the form data.
       */name:{type:String},/**
       * A hint to the user of what can be entered in the control.
       */placeholder:{type:String},/**
       * This attribute indicates that the user cannot modify the value of the control.
       */readonly:{type:Boolean,reflectToAttribute:!0},/**
       * Specifies that the user must fill in a value.
       */required:{type:Boolean,reflectToAttribute:!0},/**
       * The initial value of the control.
       * It can be used for two-way data binding.
       */value:{type:String,value:"",observer:"_valueChanged",notify:!0},/**
       * This property is set to true when the control value is invalid.
       */invalid:{type:Boolean,reflectToAttribute:!0,notify:!0,value:!1},/**
       * Specifies that the text field has value.
       */hasValue:{type:Boolean,reflectToAttribute:!0},/**
       * When set to true, user is prevented from typing a value that
       * conflicts with the given `pattern`.
       */preventInvalidInput:{type:Boolean},/**
       * A pattern matched against individual characters the user inputs.
       * When set, the field will prevent:
       * - `keyDown` events if the entered key doesn't match `/^_enabledCharPattern$/`
       * - `paste` events if the pasted text doesn't match `/^_enabledCharPattern*$/`
       * - `drop` events if the dropped text doesn't match `/^_enabledCharPattern*$/`
       *
       * For example, to enable entering only numbers and minus signs,
       * `_enabledCharPattern = "[\\d-]"`
       */_enabledCharPattern:String,_labelId:String,_errorId:String,_inputId:String}}static get observers(){return["_stateChanged(disabled, readonly, clearButtonVisible, hasValue)","_hostPropsChanged("+HOST_PROPS.default.join(", ")+")","_hostAccessiblePropsChanged("+HOST_PROPS.accessible.join(", ")+")","_getActiveErrorId(invalid, errorMessage, _errorId)","_getActiveLabelId(label, _labelId, _inputId)","__observeOffsetHeight(errorMessage, invalid, label)","__enabledCharPatternChanged(_enabledCharPattern)"]}get focusElement(){if(!this.shadowRoot){return}const slotted=this.querySelector(`${this._slottedTagName}[slot="${this._slottedTagName}"]`);if(slotted){return slotted}return this.shadowRoot.querySelector("[part=\"value\"]")}/**
     * @private
     */get inputElement(){return this.focusElement}get _slottedTagName(){return"input"}_createConstraintsObserver(){// This complex observer needs to be added dynamically here (instead of defining it above in the `get observers()`)
// so that it runs after complex observers of inheriting classes. Otherwise e.g. `_stepOrMinChanged()` observer of
// vaadin-number-field would run after this and the `min` and `step` properties would not yet be propagated to
// the `inputElement` when this runs.
this._createMethodObserver("_constraintsChanged(required, minlength, maxlength, pattern)")}_onInput(e){if(this.__preventInput){e.stopImmediatePropagation();this.__preventInput=!1;return}if(this.preventInvalidInput){const input=this.inputElement;if(0<input.value.length&&!this.checkValidity()){input.value=this.value||"";// add input-prevented attribute for 200ms
this.setAttribute("input-prevented","");this._inputDebouncer=_myApp.Debouncer.debounce(this._inputDebouncer,_myApp.timeOut.after(200),()=>{this.removeAttribute("input-prevented")});return}}if(!e.__fromClearButton){this.__userInput=!0}this.value=e.target.value}// NOTE(yuriy): Workaround needed for IE11 and Edge for proper displaying
// of the clear button instead of setting display property for it depending on state.
_stateChanged(disabled,readonly,clearButtonVisible,hasValue){if(!disabled&&!readonly&&clearButtonVisible&&hasValue){this.$.clearButton.removeAttribute("hidden")}else{this.$.clearButton.setAttribute("hidden",!0)}}_onChange(e){if(this._valueClearing){return}// In the Shadow DOM, the `change` event is not leaked into the
// ancestor tree, so we must do this manually.
const changeEvent=new CustomEvent("change",{detail:{sourceEvent:e},bubbles:e.bubbles,cancelable:e.cancelable});this.dispatchEvent(changeEvent)}_valueChanged(newVal,oldVal){// setting initial value to empty string, skip validation
if(""===newVal&&oldVal===void 0){return}if(""!==newVal&&null!=newVal){this.hasValue=!0}else{this.hasValue=!1}if(this.__userInput){this.__userInput=!1;return}else if(newVal!==void 0){this.inputElement.value=newVal}else{this.value=this.inputElement.value=""}if(this.invalid){this.validate()}}_labelChanged(label){if(""!==label&&null!=label){this.setAttribute("has-label","")}else{this.removeAttribute("has-label")}}_onSlotChange(){const slotted=this.querySelector(`${this._slottedTagName}[slot="${this._slottedTagName}"]`);if(this.value){this.inputElement.value=this.value;this.validate()}if(slotted&&!this._slottedInput){this._validateSlottedValue(slotted);this._addInputListeners(slotted);this._addIEListeners(slotted);this._slottedInput=slotted}else if(!slotted&&this._slottedInput){this._removeInputListeners(this._slottedInput);this._removeIEListeners(this._slottedInput);this._slottedInput=void 0}Object.keys(PROP_TYPE).map(key=>PROP_TYPE[key]).forEach(type=>this._propagateHostAttributes(HOST_PROPS[type].map(attr=>this[attr]),type))}_hostPropsChanged(...attributesValues){this._propagateHostAttributes(attributesValues,PROP_TYPE.DEFAULT)}_hostAccessiblePropsChanged(...attributesValues){this._propagateHostAttributes(attributesValues,PROP_TYPE.ACCESSIBLE)}_validateSlottedValue(slotted){if(slotted.value!==this.value){console.warn("Please define value on the vaadin-text-field component!");slotted.value=""}}_propagateHostAttributes(attributesValues,type){const input=this.inputElement,attributeNames=HOST_PROPS[type];if("accessible"===type){attributeNames.forEach((attr,index)=>{this._setOrToggleAttribute(attr,attributesValues[index],input);this._setOrToggleAttribute(`aria-${attr}`,attributesValues[index],input)})}else{attributeNames.forEach((attr,index)=>{this._setOrToggleAttribute(attr,attributesValues[index],input)})}}_setOrToggleAttribute(name,value,node){if(!name||!node){return}if(value){node.setAttribute(name,"boolean"===typeof value?"":value)}else{node.removeAttribute(name)}}_constraintsChanged(required,minlength,maxlength,pattern){if(!this.invalid){return}if(!required&&!minlength&&!maxlength&&!pattern){this.invalid=!1}else{this.validate()}}/**
     * Returns true if the current input value satisfies all constraints (if any)
     * @returns {boolean}
     */checkValidity(){if(this.required||this.pattern||this.maxlength||this.minlength){return this.inputElement.checkValidity()}else{return!this.invalid}}_addInputListeners(node){node.addEventListener("input",this._boundOnInput);node.addEventListener("change",this._boundOnChange);node.addEventListener("blur",this._boundOnBlur);node.addEventListener("focus",this._boundOnFocus);node.addEventListener("paste",this._boundOnPaste);node.addEventListener("drop",this._boundOnDrop);node.addEventListener("beforeinput",this._boundOnBeforeInput)}_removeInputListeners(node){node.removeEventListener("input",this._boundOnInput);node.removeEventListener("change",this._boundOnChange);node.removeEventListener("blur",this._boundOnBlur);node.removeEventListener("focus",this._boundOnFocus);node.removeEventListener("paste",this._boundOnPaste);node.removeEventListener("drop",this._boundOnDrop);node.removeEventListener("beforeinput",this._boundOnBeforeInput)}ready(){super.ready();this._createConstraintsObserver();this._boundOnInput=this._onInput.bind(this);this._boundOnChange=this._onChange.bind(this);this._boundOnBlur=this._onBlur.bind(this);this._boundOnFocus=this._onFocus.bind(this);this._boundOnPaste=this._onPaste.bind(this);this._boundOnDrop=this._onDrop.bind(this);this._boundOnBeforeInput=this._onBeforeInput.bind(this);const defaultInput=this.shadowRoot.querySelector("[part=\"value\"]");this._slottedInput=this.querySelector(`${this._slottedTagName}[slot="${this._slottedTagName}"]`);this._addInputListeners(defaultInput);this._addIEListeners(defaultInput);if(this._slottedInput){this._addIEListeners(this._slottedInput);this._addInputListeners(this._slottedInput)}this.shadowRoot.querySelector("[name=\"input\"], [name=\"textarea\"]").addEventListener("slotchange",this._onSlotChange.bind(this));if(!(window.ShadyCSS&&window.ShadyCSS.nativeCss)){this.updateStyles()}this.$.clearButton.addEventListener("mousedown",()=>this._valueClearing=!0);this.$.clearButton.addEventListener("mouseleave",()=>this._valueClearing=!1);this.$.clearButton.addEventListener("click",this._onClearButtonClick.bind(this));this.addEventListener("keydown",this._onKeyDown.bind(this));var uniqueId=TextFieldMixin._uniqueId=1+TextFieldMixin._uniqueId||0;this._errorId=`${this.constructor.is}-error-${uniqueId}`;this._labelId=`${this.constructor.is}-label-${uniqueId}`;this._inputId=`${this.constructor.is}-input-${uniqueId}`;// Lumo theme defines a max-height transition for the "error-message"
// part on invalid state change.
this.shadowRoot.querySelector("[part=\"error-message\"]").addEventListener("transitionend",()=>{this.__observeOffsetHeight()})}/**
     * Returns true if `value` is valid.
     * `<iron-form>` uses this to check the validity for all its elements.
     *
     * @return {boolean} True if the value is valid.
     */validate(){return!(this.invalid=!this.checkValidity())}clear(){this.value=""}_onBlur(){this.validate()}_onFocus(){if(this.autoselect){this.inputElement.select();// iOS 9 workaround: https://stackoverflow.com/a/7436574
setTimeout(()=>{try{this.inputElement.setSelectionRange(0,9999)}catch(e){// The workaround may cause errors on different input types.
// Needs to be suppressed. See https://github.com/vaadin/flow/issues/6070
}})}}_onClearButtonClick(e){e.preventDefault();// NOTE(yuriy): This line won't affect focus on the host. Cannot be properly tested.
this.inputElement.focus();this.clear();this._valueClearing=!1;if(navigator.userAgent.match(/Trident/)){// Disable IE input" event prevention here, we want the input event from
// below to propagate normally.
this.__preventInput=!1}const inputEvent=new Event("input",{bubbles:!0,composed:!0});inputEvent.__fromClearButton=!0;const changeEvent=new Event("change",{bubbles:!this._slottedInput});changeEvent.__fromClearButton=!0;this.inputElement.dispatchEvent(inputEvent);this.inputElement.dispatchEvent(changeEvent)}_onKeyDown(e){if(27===e.keyCode&&this.clearButtonVisible){const dispatchChange=!!this.value;this.clear();dispatchChange&&this.inputElement.dispatchEvent(new Event("change",{bubbles:!this._slottedInput}))}if(this._enabledCharPattern&&!this.__shouldAcceptKey(e)){e.preventDefault()}}__shouldAcceptKey(event){return event.metaKey||event.ctrlKey||!event.key// allow typing anything if event.key is not supported
||1!==event.key.length// allow "Backspace", "ArrowLeft" etc.
||this.__enabledCharRegExp.test(event.key)}_onPaste(e){if(this._enabledCharPattern){const pastedText=(e.clipboardData||window.clipboardData).getData("text");if(!this.__enabledTextRegExp.test(pastedText)){e.preventDefault()}}}_onDrop(e){if(this._enabledCharPattern){const draggedText=e.dataTransfer.getData("text");if(!this.__enabledTextRegExp.test(draggedText)){e.preventDefault()}}}_onBeforeInput(e){// The `beforeinput` event covers all the cases for `_enabledCharPattern`: keyboard, pasting and dropping,
// but it is still experimental technology so we can't rely on it. It's used here just as an additional check,
// because it seems to be the only way to detect and prevent specific keys on mobile devices. See issue #429.
if(this._enabledCharPattern&&e.data&&!this.__enabledTextRegExp.test(e.data)){e.preventDefault()}}__enabledCharPatternChanged(_enabledCharPattern){this.__enabledCharRegExp=_enabledCharPattern&&new RegExp("^"+_enabledCharPattern+"$");this.__enabledTextRegExp=_enabledCharPattern&&new RegExp("^"+_enabledCharPattern+"*$")}_addIEListeners(node){/* istanbul ignore if */if(navigator.userAgent.match(/Trident/)){// IE11 dispatches `input` event in following cases:
// - focus or blur, when placeholder attribute is set
// - placeholder attribute value changed
// https://developer.microsoft.com/en-us/microsoft-edge/platform/issues/101220/
this._shouldPreventInput=()=>{this.__preventInput=!0;requestAnimationFrame(()=>{this.__preventInput=!1})};node.addEventListener("focusin",this._shouldPreventInput);node.addEventListener("focusout",this._shouldPreventInput);this._createPropertyObserver("placeholder",this._shouldPreventInput)}}_removeIEListeners(node){/* istanbul ignore if */if(navigator.userAgent.match(/Trident/)){node.removeEventListener("focusin",this._shouldPreventInput);node.removeEventListener("focusout",this._shouldPreventInput)}}_getActiveErrorId(invalid,errorMessage,errorId){this._setOrToggleAttribute("aria-describedby",errorMessage&&invalid?errorId:void 0,this.focusElement)}_getActiveLabelId(label,_labelId,_inputId){let ids=_inputId;if(label){ids=`${_labelId} ${_inputId}`}this.focusElement.setAttribute("aria-labelledby",ids)}_getErrorMessageAriaHidden(invalid,errorMessage,errorId){return(!(errorMessage&&invalid?errorId:void 0)).toString()}_dispatchIronResizeEventIfNeeded(sizePropertyName,value){const previousSizePropertyName="__previous"+sizePropertyName;if(this[previousSizePropertyName]!==void 0&&this[previousSizePropertyName]!==value){this.dispatchEvent(new CustomEvent("iron-resize",{bubbles:!0}))}this[previousSizePropertyName]=value}__observeOffsetHeight(){this._dispatchIronResizeEventIfNeeded("Height",this.offsetHeight)}/**
     * @protected
     */attributeChangedCallback(prop,oldVal,newVal){super.attributeChangedCallback(prop,oldVal,newVal);// Needed until Edge has CSS Custom Properties (present in Edge Preview)
/* istanbul ignore if */if(!(window.ShadyCSS&&window.ShadyCSS.nativeCss)&&/^(focused|focus-ring|invalid|disabled|placeholder|has-value)$/.test(prop)){this.updateStyles()}// Safari has an issue with repainting shadow root element styles when a host attribute changes.
// Need this workaround (toggle any inline css property on and off) until the issue gets fixed.
const isSafari=/^((?!chrome|android).)*safari/i.test(navigator.userAgent);/* istanbul ignore if */if(isSafari&&this.root){const WEBKIT_PROPERTY="-webkit-backface-visibility";this.root.querySelectorAll("*").forEach(el=>{el.style[WEBKIT_PROPERTY]="visible";el.style[WEBKIT_PROPERTY]=""})}}/**
     * Fired when the user commits a value change.
     *
     * @event change
     */ /**
         * Fired when the value is changed by the user: on every typing keystroke,
         * and the value is cleared using the clear button.
         *
         * @event input
         */ /**
             * Fired when the size of the element changes.
             *
             * @event iron-resize
             */};_exports.TextFieldMixin=TextFieldMixin;var vaadinTextFieldMixin={__proto__:null,TextFieldMixin:TextFieldMixin};_exports.$vaadinTextFieldMixin=vaadinTextFieldMixin;class TextFieldElement extends ElementMixin(TextFieldMixin(ThemableMixin(_myApp.PolymerElement))){static get template(){return(0,_myApp.html$1)`
    <style include="vaadin-text-field-shared-styles">
      /* polymer-cli linter breaks with empty line */
    </style>

    <div class="vaadin-text-field-container">

      <label part="label" on-click="focus" id="[[_labelId]]">[[label]]</label>

      <div part="input-field" id="[[_inputId]]">

        <slot name="prefix"></slot>

        <slot name="input">
          <input part="value">
        </slot>

        <div part="clear-button" id="clearButton" role="button" aria-label\$="[[i18n.clear]]"></div>
        <slot name="suffix"></slot>

      </div>

      <div part="error-message" id="[[_errorId]]" aria-live="assertive" aria-hidden\$="[[_getErrorMessageAriaHidden(invalid, errorMessage, _errorId)]]">[[errorMessage]]</div>

    </div>
`}static get is(){return"vaadin-text-field"}static get version(){return"2.5.3"}static get properties(){return{/**
       * Identifies a list of pre-defined options to suggest to the user.
       * The value must be the id of a <datalist> element in the same document.
       */list:{type:String},/**
       * A regular expression that the value is checked against.
       * The pattern must match the entire value, not just some subset.
       */pattern:{type:String},/**
       * The text usually displayed in a tooltip popup when the mouse is over the field.
       */title:{type:String}}}}_exports.TextFieldElement=TextFieldElement;customElements.define(TextFieldElement.is,TextFieldElement);var vaadinTextField={__proto__:null,TextFieldElement:TextFieldElement};_exports.$vaadinTextField=vaadinTextField;class GridFilterElement extends class extends _myApp.PolymerElement{}{static get template(){return(0,_myApp.html$1)`
    <style>
      :host {
        display: inline-flex;
        max-width: 100%;
      }

      #filter {
        width: 100%;
        box-sizing: border-box;
      }
    </style>
    <slot name="filter">
      <vaadin-text-field id="filter" value="{{value}}"></vaadin-text-field>
    </slot>
`}static get is(){return"vaadin-grid-filter"}static get properties(){return{/**
       * JS Path of the property in the item used for filtering the data.
       */path:String,/**
       * Current filter value.
       */value:{type:String,notify:!0},_connected:Boolean}}/** @protected */connectedCallback(){super.connectedCallback();this._connected=!0}static get observers(){return["_filterChanged(path, value, _connected)"]}ready(){super.ready();const child=(0,_myApp.dom)(this).firstElementChild;if(child&&"filter"!==child.getAttribute("slot")){console.warn("Make sure you have assigned slot=\"filter\" to the child elements of <vaadin-grid-filter>");child.setAttribute("slot","filter")}}_filterChanged(path,value,connected){if(path===void 0||value===void 0||!connected){return}if(this._previousValue===void 0&&""===value){return}this._previousValue=value;this._debouncerFilterChanged=_myApp.Debouncer.debounce(this._debouncerFilterChanged,_myApp.timeOut.after(200),()=>{this.dispatchEvent(new CustomEvent("filter-changed",{bubbles:!0}))})}focus(){this.$.filter.focus()}}_exports.GridFilterElement=GridFilterElement;customElements.define(GridFilterElement.is,GridFilterElement);var vaadinGridFilter={__proto__:null,GridFilterElement:GridFilterElement};_exports.$vaadinGridFilter=vaadinGridFilter;class GridFilterColumnElement extends GridColumnElement{static get template(){return(0,_myApp.html$1)`
    <template class="header" id="headerTemplate">
      <vaadin-grid-filter path="[[path]]" value="[[_filterValue]]">
        <vaadin-text-field theme="small" focus-target="" style="max-width: 100%;" slot="filter" value="{{_filterValue}}" label="[[_getHeader(header, path)]]"></vaadin-text-field>
      </vaadin-grid-filter>
    </template>
`}static get is(){return"vaadin-grid-filter-column"}static get properties(){return{/**
       * JS Path of the property in the item used for filtering the data.
       */path:String,/**
       * Text to display as the label of the column filter text-field.
       */header:String}}_prepareHeaderTemplate(){const headerTemplate=this._prepareTemplatizer(this.$.headerTemplate);// needed to override the dataHost correctly in case internal template is used.
headerTemplate.templatizer.dataHost=this;return headerTemplate}_getHeader(header,path){return header||this._generateHeader(path)}}_exports.GridFilterColumnElement=GridFilterColumnElement;customElements.define(GridFilterColumnElement.is,GridFilterColumnElement);var vaadinGridFilterColumn={__proto__:null,GridFilterColumnElement:GridFilterColumnElement};/**
   @license
   Copyright (c) 2017 Vaadin Ltd.
   This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
   */ /**
       * @polymerMixin
       */_exports.$vaadinGridFilterColumn=vaadinGridFilterColumn;const FilterMixin=superClass=>class FilterMixin extends superClass{static get properties(){return{_filters:{type:Array,value:function(){return[]}}}}ready(){super.ready();this.addEventListener("filter-changed",this._filterChanged.bind(this))}_filterChanged(e){if(-1===this._filters.indexOf(e.target)){this._filters.push(e.target)}e.stopPropagation();if(this.dataProvider){this.clearCache()}}_mapFilters(){return this._filters.map(filter=>{return{path:filter.path,value:filter.value}})}};_exports.FilterMixin=FilterMixin;var vaadinGridFilterMixin={__proto__:null,FilterMixin:FilterMixin};/**
   @license
   Copyright (c) 2017 Vaadin Ltd.
   This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
   */ /**
       * @polymerMixin
       */_exports.$vaadinGridFilterMixin=vaadinGridFilterMixin;const KeyboardNavigationMixin=superClass=>class KeyboardNavigationMixin extends superClass{static get properties(){return{_headerFocusable:{type:Object,observer:"_focusableChanged"},_itemsFocusable:{type:Object,observer:"_focusableChanged"},_footerFocusable:{type:Object,observer:"_focusableChanged"},_navigatingIsHidden:Boolean,_focusedItemIndex:{type:Number,value:0},_focusedColumnOrder:Number}}ready(){super.ready();if(this._ios||this._android){// Disable keyboard navigation on mobile devices
return}this.addEventListener("keydown",this._onKeyDown);this.addEventListener("focusin",this._onFocusIn);this.addEventListener("focusout",this._onFocusOut);// When focus goes from cell to another cell, focusin/focusout events do
// not escape the grid’s shadowRoot, thus listening inside the shadowRoot.
this.$.table.addEventListener("focusin",this._onCellFocusIn.bind(this));this.$.table.addEventListener("focusout",this._onCellFocusOut.bind(this));this.addEventListener("mousedown",()=>{this._toggleAttribute("navigating",!1,this);this._isMousedown=!0});this.addEventListener("mouseup",()=>this._isMousedown=!1)}_focusableChanged(focusable,oldFocusable){if(oldFocusable){oldFocusable.setAttribute("tabindex","-1")}if(focusable){focusable.setAttribute("tabindex","0")}}_onKeyDown(e){// Ensure standard key value, unified across browsers
let key=e.key;if("Up"===key||"Down"===key||"Left"===key||"Right"===key){// MSIE & Edge
key="Arrow"+key}if("Esc"===key){// MSIE & Edge
key="Escape"}if("Spacebar"===key){// MSIE
key=" "}let keyGroup;switch(key){case"ArrowUp":case"ArrowDown":case"ArrowLeft":case"ArrowRight":case"PageUp":case"PageDown":case"Home":case"End":keyGroup="Navigation";break;case"Enter":case"Escape":case"F2":keyGroup="Interaction";break;case"Tab":keyGroup="Tab";break;case" ":keyGroup="Space";break;}this._detectInteracting(e);if(this.hasAttribute("interacting")&&"Interaction"!==keyGroup){// When in the interacting mode, only the “Interaction” keys are handled.
keyGroup=void 0}if(keyGroup){this[`_on${keyGroup}KeyDown`](e,key)}}_ensureScrolledToIndex(index){const targetRowInDom=Array.from(this.$.items.children).filter(child=>child.index===index)[0];if(!targetRowInDom){this._scrollToIndex(index)}}_onNavigationKeyDown(e,key){e.preventDefault();function indexOfChildElement(el){return Array.prototype.indexOf.call(el.parentNode.children,el)}const visibleItemsCount=this._lastVisibleIndex-this._firstVisibleIndex-1;let dx=0,dy=0;switch(key){case"ArrowRight":dx=1;break;case"ArrowLeft":dx=-1;break;case"Home":dx=-Infinity;e.ctrlKey&&(dy=-Infinity);break;case"End":dx=1/0;e.ctrlKey&&(dy=1/0);break;case"ArrowDown":dy=1;break;case"ArrowUp":dy=-1;break;case"PageDown":dy=visibleItemsCount;break;case"PageUp":dy=-visibleItemsCount;break;}const activeCell=e.composedPath()[0],columnIndex=indexOfChildElement(activeCell),isRowDetails=this._elementMatches(activeCell,"[part~=\"details-cell\"]"),activeRow=activeCell.parentNode,activeRowGroup=activeRow.parentNode,maxRowIndex=(activeRowGroup===this.$.items?this._effectiveSize:activeRowGroup.children.length)-1,rowIndex=activeRowGroup===this.$.items?this._focusedItemIndex!==void 0?this._focusedItemIndex:activeRow.index:indexOfChildElement(activeRow);// Index of the destination row
let dstRowIndex=Math.max(0,Math.min(rowIndex+dy,maxRowIndex)),dstIsRowDetails=!1;// Row details navigation logic
if(activeRowGroup===this.$.items){const item=activeRow._item,dstItem=this._cache.getItemForIndex(dstRowIndex);// Should we navigate to row details?
if(isRowDetails){dstIsRowDetails=0===dy}else{dstIsRowDetails=1===dy&&this._isDetailsOpened(item)||-1===dy&&dstRowIndex!==rowIndex&&this._isDetailsOpened(dstItem)}// Should we navigate between details and regular cells of the same row?
if(dstIsRowDetails!==isRowDetails&&(1===dy&&dstIsRowDetails||-1===dy&&!dstIsRowDetails)){dstRowIndex=rowIndex}}// Header and footer could have hidden rows, e. g., if none of the columns
// or groups on the given column tree level define template. Skip them
// in vertical keyboard navigation.
if(activeRowGroup!==this.$.items){if(dstRowIndex>rowIndex){while(dstRowIndex<maxRowIndex&&activeRowGroup.children[dstRowIndex].hidden){dstRowIndex++}}else if(dstRowIndex<rowIndex){while(0<dstRowIndex&&activeRowGroup.children[dstRowIndex].hidden){dstRowIndex--}}}// _focusedColumnOrder is memoized — this is to ensure predictable
// navigation when entering and leaving detail and column group cells.
if(this._focusedColumnOrder===void 0){if(isRowDetails){this._focusedColumnOrder=0}else{this._focusedColumnOrder=this._getColumns(activeRowGroup,rowIndex)[columnIndex]._order}}// Find orderedColumnIndex — the index of order closest matching the
// original _focusedColumnOrder in the sorted array of orders
// of the visible columns on the destination row.
const dstColumns=this._getColumns(activeRowGroup,dstRowIndex),dstSortedColumnOrders=dstColumns.filter(c=>!c.hidden).map(c=>c._order).sort((b,a)=>b-a),maxOrderedColumnIndex=dstSortedColumnOrders.length-1,orderedColumnIndex=dstSortedColumnOrders.indexOf(dstSortedColumnOrders.slice(0).sort((b,a)=>Math.abs(b-this._focusedColumnOrder)-Math.abs(a-this._focusedColumnOrder))[0]),dstOrderedColumnIndex=0===dy&&isRowDetails?orderedColumnIndex:Math.max(0,Math.min(orderedColumnIndex+dx,maxOrderedColumnIndex));if(dstOrderedColumnIndex!==orderedColumnIndex){// Horizontal movement invalidates stored _focusedColumnOrder
this._focusedColumnOrder=void 0}// Ensure correct vertical scroll position, destination row is visible
if(activeRowGroup===this.$.items){this._ensureScrolledToIndex(dstRowIndex)}// This has to be set after scrolling, otherwise it can be removed by
// `_preventScrollerRotatingCellFocus(item, index)` during scrolling.
this._toggleAttribute("navigating",!0,this);const columnIndexByOrder=dstColumns.reduce((acc,col,i)=>(acc[col._order]=i,acc),{}),dstColumnIndex=columnIndexByOrder[dstSortedColumnOrders[dstOrderedColumnIndex]],dstRow=activeRowGroup===this.$.items?Array.from(activeRowGroup.children).filter(el=>el.index===dstRowIndex)[0]:activeRowGroup.children[dstRowIndex];if(!dstRow){return}// Here we go!
const dstCell=dstIsRowDetails?Array.from(dstRow.children).filter(el=>this._elementMatches(el,"[part~=\"details-cell\"]"))[0]:dstRow.children[dstColumnIndex];this._scrollHorizontallyToCell(dstCell);if(activeRowGroup===this.$.items){// When scrolling with repeated keydown, sometimes FocusEvent listeners
// are too late to update _focusedItemIndex. Ensure next keydown
// listener invocation gets updated _focusedItemIndex value.
this._focusedItemIndex=dstRowIndex}if(activeRowGroup===this.$.items){const dstRect=dstCell.getBoundingClientRect(),footerTop=this.$.footer.getBoundingClientRect().top,headerBottom=this.$.header.getBoundingClientRect().bottom;if(dstRect.bottom>footerTop){this.$.table.scrollTop+=dstRect.bottom-footerTop;this._scrollHandler()}else if(dstRect.top<headerBottom){this.$.table.scrollTop-=headerBottom-dstRect.top;this._scrollHandler()}}dstCell.focus()}_parseEventPath(path){const tableIndex=path.indexOf(this.$.table);return{rowGroup:path[tableIndex-1],row:path[tableIndex-2],cell:path[tableIndex-3]}}_onInteractionKeyDown(e,key){const localTarget=e.composedPath()[0],localTargetIsTextInput="input"===localTarget.localName&&!/^(button|checkbox|color|file|image|radio|range|reset|submit)$/i.test(localTarget.type);let wantInteracting;switch(key){case"Enter":wantInteracting=this.hasAttribute("interacting")?!localTargetIsTextInput:!0;break;case"Escape":wantInteracting=!1;break;case"F2":wantInteracting=!this.hasAttribute("interacting");break;}const{cell}=this._parseEventPath(e.composedPath());if(this.hasAttribute("interacting")!==wantInteracting){if(wantInteracting){const focusTarget=cell._content.querySelector("[focus-target]")||cell._content.firstElementChild;if(focusTarget){e.preventDefault();focusTarget.focus();this._toggleAttribute("interacting",!0,this);this._toggleAttribute("navigating",!1,this)}}else{e.preventDefault();this._focusedColumnOrder=void 0;cell.focus();this._toggleAttribute("interacting",!1,this);this._toggleAttribute("navigating",!0,this)}}}_predictFocusStepTarget(srcElement,step){const tabOrder=[this.$.table,this._headerFocusable,this._itemsFocusable,this._footerFocusable,this.$.focusexit];let index=tabOrder.indexOf(srcElement);index+=step;while(0<=index&&index<=tabOrder.length-1&&(!tabOrder[index]||tabOrder[index].parentNode.hidden)){index+=step}return tabOrder[index]}_onTabKeyDown(e){const focusTarget=this._predictFocusStepTarget(e.composedPath()[0],e.shiftKey?-1:1);if(focusTarget===this.$.table){// The focus is about to exit the grid to the top.
this.$.table.focus()}else if(focusTarget===this.$.focusexit){// The focus is about to exit the grid to the bottom.
this.$.focusexit.focus()}else if(focusTarget===this._itemsFocusable){let itemsFocusTarget=focusTarget;const targetRow=this._itemsFocusable.parentNode;this._ensureScrolledToIndex(this._focusedItemIndex);if(targetRow.index!==this._focusedItemIndex){// The target row, which is about to be focused next, has been
// assigned with a new index since last focus, probably because of
// scrolling. Focus the row for the stored focused item index instead.
const columnIndex=Array.from(targetRow.children).indexOf(this._itemsFocusable),focusedItemRow=Array.from(this.$.items.children).filter(row=>row.index===this._focusedItemIndex)[0];if(focusedItemRow){itemsFocusTarget=focusedItemRow.children[columnIndex]}}e.preventDefault();itemsFocusTarget.focus()}else{e.preventDefault();focusTarget.focus()}this._toggleAttribute("navigating",!0,this)}_onSpaceKeyDown(e){e.preventDefault();const cell=e.composedPath()[0];if(cell._content&&cell._content.firstElementChild){const wasNavigating=this.hasAttribute("navigating");cell._content.firstElementChild.click();this._toggleAttribute("navigating",wasNavigating,this)}else{this.dispatchEvent(new CustomEvent("cell-activate",{detail:{model:this.__getRowModel(cell.parentElement)}}))}}_onFocusIn(e){if(!this._isMousedown){this._toggleAttribute("navigating",!0,this)}const rootTarget=e.composedPath()[0];if(rootTarget===this.$.table||rootTarget===this.$.focusexit){// The focus enters the top (bottom) of the grid, meaning that user has
// tabbed (shift-tabbed) into the grid. Move the focus to
// the first (the last) focusable.
this._predictFocusStepTarget(rootTarget,rootTarget===this.$.table?1:-1).focus();this._toggleAttribute("interacting",!1,this)}else{this._detectInteracting(e)}}_onFocusOut(e){this._toggleAttribute("navigating",!1,this);this._detectInteracting(e)}_onCellFocusIn(e){this._detectInteracting(e);if(3===e.composedPath().indexOf(this.$.table)){const cell=e.composedPath()[0];this._activeRowGroup=cell.parentNode.parentNode;if(this._activeRowGroup===this.$.header){this._headerFocusable=cell}else if(this._activeRowGroup===this.$.items){this._itemsFocusable=cell}else if(this._activeRowGroup===this.$.footer){this._footerFocusable=cell}// Inform cell content of the focus (used in <vaadin-grid-sorter>)
cell._content.dispatchEvent(new CustomEvent("cell-focusin",{bubbles:!1}))}this._detectFocusedItemIndex(e)}_onCellFocusOut(e){if(3===e.composedPath().indexOf(this.$.table)){const cell=e.composedPath()[0];// Inform cell content of the focus (used in <vaadin-grid-sorter>)
cell._content.dispatchEvent(new CustomEvent("cell-focusout",{bubbles:!1}))}}_detectInteracting(e){this._toggleAttribute("interacting",e.composedPath().some(el=>"vaadin-grid-cell-content"===el.localName),this)}_detectFocusedItemIndex(e){const{rowGroup,row}=this._parseEventPath(e.composedPath());if(rowGroup===this.$.items){this._focusedItemIndex=row.index}}_preventScrollerRotatingCellFocus(item,index){if(item.index===this._focusedItemIndex&&this.hasAttribute("navigating")&&this._activeRowGroup===this.$.items){// Focused item has went, hide navigation mode
this._navigatingIsHidden=!0;this._toggleAttribute("navigating",!1,this)}if(index===this._focusedItemIndex&&this._navigatingIsHidden){// Focused item is back, restore navigation mode
this._navigatingIsHidden=!1;this._toggleAttribute("navigating",!0,this)}}_getColumns(rowGroup,rowIndex){let columnTreeLevel=this._columnTree.length-1;if(rowGroup===this.$.header){columnTreeLevel=rowIndex}else if(rowGroup===this.$.footer){columnTreeLevel=this._columnTree.length-1-rowIndex}return this._columnTree[columnTreeLevel]}_resetKeyboardNavigation(){if(this.$.header.firstElementChild){this._headerFocusable=Array.from(this.$.header.firstElementChild.children).filter(el=>!el.hidden)[0]}if(this.$.items.firstElementChild){const firstVisibleIndexRow=this._iterateItems((pidx,vidx)=>{if(this._firstVisibleIndex===vidx){return this.$.items.children[pidx]}});if(firstVisibleIndexRow){this._itemsFocusable=Array.from(firstVisibleIndexRow.children).filter(el=>!el.hidden)[0]}}if(this.$.footer.firstElementChild){this._footerFocusable=Array.from(this.$.footer.firstElementChild.children).filter(el=>!el.hidden)[0]}}_scrollHorizontallyToCell(dstCell){if(dstCell.hasAttribute("frozen")||this._elementMatches(dstCell,"[part~=\"details-cell\"]")){// These cells are, by design, always visible, no need to scroll.
return}const dstCellRect=dstCell.getBoundingClientRect(),dstRow=dstCell.parentNode,dstCellIndex=Array.from(dstRow.children).indexOf(dstCell),tableRect=this.$.table.getBoundingClientRect();let leftBoundary=tableRect.left,rightBoundary=tableRect.right;for(let i=dstCellIndex-1;0<=i;i--){const cell=dstRow.children[i];if(cell.hasAttribute("hidden")||this._elementMatches(cell,"[part~=\"details-cell\"]")){continue}if(cell.hasAttribute("frozen")){leftBoundary=cell.getBoundingClientRect().right;break}}for(let i=dstCellIndex+1;i<dstRow.children.length;i++){const cell=dstRow.children[i];if(cell.hasAttribute("hidden")||this._elementMatches(cell,"[part~=\"details-cell\"]")){continue}if(cell.hasAttribute("frozen")){rightBoundary=cell.getBoundingClientRect().left;break}}if(dstCellRect.left<leftBoundary){this.$.table.scrollLeft+=Math.round(dstCellRect.left-leftBoundary)}if(dstCellRect.right>rightBoundary){this.$.table.scrollLeft+=Math.round(dstCellRect.right-rightBoundary)}}_elementMatches(el,query){return el.matches?el.matches(query):-1!==Array.from(el.parentNode.querySelectorAll(query)).indexOf(el)}};_exports.KeyboardNavigationMixin=KeyboardNavigationMixin;var vaadinGridKeyboardNavigationMixin={__proto__:null,KeyboardNavigationMixin:KeyboardNavigationMixin};_exports.$vaadinGridKeyboardNavigationMixin=vaadinGridKeyboardNavigationMixin;class GridOuterScrollerElement extends class extends _myApp.PolymerElement{}{static get template(){return(0,_myApp.html$1)`
    <style>
      :host {
        display: block;
        height: 100%;
        width: 100%;
        position: absolute;
        top: 0;
        box-sizing: border-box;
        overflow: auto;
      }

      :host([passthrough]) {
        pointer-events: none;
      }
    </style>

    <slot></slot>
`}static get is(){return"vaadin-grid-outer-scroller"}static get properties(){return{scrollTarget:{type:Object},scrollHandler:{type:Object},passthrough:{type:Boolean,reflectToAttribute:!0,value:!0},outerScrolling:Boolean,noScrollbars:Boolean,_touchDevice:Boolean}}ready(){super.ready();this.addEventListener("scroll",()=>this._syncScrollTarget());this.parentElement.addEventListener("mousemove",this._onMouseMove.bind(this));// for some reason scroll bars are hidden in iOS if this style is
// added in stylesheets or before attaching.
this.style.webkitOverflowScrolling="touch";this.addEventListener("mousedown",_=>this.outerScrolling=!0);this.addEventListener("mouseup",_=>{this.outerScrolling=!1;this.scrollHandler._scrollHandler()})}_onMouseMove(e){// Ignore mousemove events on touch devices
if(!this._touchDevice){if(this.noScrollbars&&this.parentElement.hasAttribute("scroll-period")){this.passthrough=e.offsetY<=this.clientHeight-20&&e.offsetX<=this.clientWidth-20}else{this.passthrough=e.offsetY<=this.clientHeight&&e.offsetX<=this.clientWidth}}}syncOuterScroller(){this.scrollTop=this.scrollTarget.scrollTop;this.scrollLeft=this.scrollTarget.scrollLeft}_syncScrollTarget(){requestAnimationFrame(()=>{this.scrollTarget.scrollTop=this.scrollTop;this.scrollTarget.scrollLeft=this.scrollLeft;this.scrollHandler._scrollHandler()})}}customElements.define(GridOuterScrollerElement.is,GridOuterScrollerElement);const RowDetailsMixin=superClass=>class RowDetailsMixin extends superClass{static get properties(){return{/**
       * An array containing references to items with open row details.
       */detailsOpenedItems:{type:Array,value:function(){return[]}},_rowDetailsTemplate:Object,/**
       * Custom function for rendering the content of the row details.
       * Receives three arguments:
       *
       * - `root` The row details content DOM element. Append your content to it.
       * - `grid` The `<vaadin-grid>` element.
       * - `rowData` The object with the properties related with
       *   the rendered item, contains:
       *   - `rowData.index` The index of the item.
       *   - `rowData.item` The item.
       */rowDetailsRenderer:Function,_detailsCells:{type:Array}}}static get observers(){return["_detailsOpenedItemsChanged(detailsOpenedItems.*, _rowDetailsTemplate, rowDetailsRenderer)","_rowDetailsTemplateOrRendererChanged(_rowDetailsTemplate, rowDetailsRenderer)"]}_rowDetailsTemplateOrRendererChanged(rowDetailsTemplate,rowDetailsRenderer){if(rowDetailsTemplate&&rowDetailsRenderer){throw new Error("You should only use either a renderer or a template for row details")}if(rowDetailsTemplate||rowDetailsRenderer){if(rowDetailsTemplate&&!rowDetailsTemplate.templatizer){var templatizer=new GridTemplatizer;templatizer._grid=this;templatizer.dataHost=this.dataHost;templatizer.template=rowDetailsTemplate;rowDetailsTemplate.templatizer=templatizer}if(this._columnTree){// Only update the rows if the column tree has already been initialized
Array.from(this.$.items.children).forEach(row=>{if(!row.querySelector("[part~=details-cell]")){this._updateRow(row,this._columnTree[this._columnTree.length-1]);this._a11yUpdateRowDetailsOpened(row,!1)}// Clear any old template instances
delete row.querySelector("[part~=details-cell]")._instance})}if(this.detailsOpenedItems.length){Array.from(this.$.items.children).forEach(this._toggleDetailsCell,this);this._update()}}}_detailsOpenedItemsChanged(changeRecord,rowDetailsTemplate,rowDetailsRenderer){if("detailsOpenedItems.length"===changeRecord.path||!changeRecord.value){// Let’s avoid duplicate work of both “.splices” and “.length” updates.
return}Array.from(this.$.items.children).forEach(row=>{this._toggleDetailsCell(row,row._item);this._a11yUpdateRowDetailsOpened(row,this._isDetailsOpened(row._item));this._toggleAttribute("details-opened",this._isDetailsOpened(row._item),row)})}_configureDetailsCell(cell){cell.setAttribute("part","cell details-cell");// Freeze the details cell, so that it does not scroll horizontally
// with the normal cells. This way it looks less weird.
this._toggleAttribute("frozen",!0,cell)}_toggleDetailsCell(row,item){const cell=row.querySelector("[part~=\"details-cell\"]");if(!cell){return}const detailsHidden=!this._isDetailsOpened(item),hiddenChanged=!!cell.hidden!==detailsHidden;if(!cell._instance&&!cell._renderer||cell.hidden!==detailsHidden){cell.hidden=detailsHidden;if(detailsHidden){row.style.removeProperty("padding-bottom")}else{if(this.rowDetailsRenderer){cell._renderer=this.rowDetailsRenderer;cell._renderer.call(this,cell._content,this,{index:row.index,item:item})}else if(this._rowDetailsTemplate&&!cell._instance){// Stamp the template
cell._instance=this._rowDetailsTemplate.templatizer.createInstance();cell._content.innerHTML="";cell._content.appendChild(cell._instance.root);this._updateItem(row,item)}(0,_myApp.flush)();row.style.setProperty("padding-bottom",`${cell.offsetHeight}px`);requestAnimationFrame(()=>this.notifyResize())}}if(hiddenChanged){this._updateMetrics();this._positionItems()}}_updateDetailsCellHeights(){Array.from(this.$.items.querySelectorAll("[part~=\"details-cell\"]:not([hidden])")).forEach(cell=>{cell.parentElement.style.setProperty("padding-bottom",`${cell.offsetHeight}px`)})}_isDetailsOpened(item){return this.detailsOpenedItems&&-1!==this._getItemIndexInArray(item,this.detailsOpenedItems)}/**
     * Open the details row of a given item.
     */openItemDetails(item){if(!this._isDetailsOpened(item)){this.push("detailsOpenedItems",item)}}/**
     * Close the details row of a given item.
     */closeItemDetails(item){if(this._isDetailsOpened(item)){this.splice("detailsOpenedItems",this._getItemIndexInArray(item,this.detailsOpenedItems),1)}}_detailsOpenedInstanceChangedCallback(instance,value){if(super._detailsOpenedInstanceChangedCallback){super._detailsOpenedInstanceChangedCallback(instance,value)}if(value){this.openItemDetails(instance.item)}else{this.closeItemDetails(instance.item)}}};_exports.RowDetailsMixin=RowDetailsMixin;var vaadinGridRowDetailsMixin={__proto__:null,RowDetailsMixin:RowDetailsMixin};_exports.$vaadinGridRowDetailsMixin=vaadinGridRowDetailsMixin;const ScrollMixin=superClass=>class ScrollMixin extends superClass{get _timeouts(){return{SCROLL_PERIOD:1e3,WHEEL_SCROLLING:200,SCROLLING:100,IGNORE_WHEEL:500}}static get properties(){return{// Cached array of frozen cells
_frozenCells:{type:Array,value:function(){return[]}},_scrollbarWidth:{type:Number,value:function(){// Create the measurement node
var scrollDiv=document.createElement("div");scrollDiv.style.width="100px";scrollDiv.style.height="100px";scrollDiv.style.overflow="scroll";scrollDiv.style.position="absolute";scrollDiv.style.top="-9999px";document.body.appendChild(scrollDiv);// Get the scrollbar width
var scrollbarWidth=scrollDiv.offsetWidth-scrollDiv.clientWidth;// Delete the DIV
document.body.removeChild(scrollDiv);return scrollbarWidth}},_rowWithFocusedElement:Element,_deltaYAcc:{type:Number,value:0}}}static get observers(){return["_scrollHeightUpdated(_estScrollHeight)","_scrollViewportHeightUpdated(_viewportHeight)"]}// Override (from iron-scroll-target-behavior) to avoid document scroll
set _scrollTop(top){this.$.table.scrollTop=top}get _scrollTop(){return this.$.table.scrollTop}constructor(){super();this._scrollLineHeight=this._getScrollLineHeight()}/**
     * @returns {Number|undefined} - The browser's default font-size in pixels
     */_getScrollLineHeight(){const el=document.createElement("div");el.style.fontSize="initial";el.style.display="none";document.body.appendChild(el);const fontSize=window.getComputedStyle(el).fontSize;document.body.removeChild(el);return fontSize?window.parseInt(fontSize):void 0}_scrollViewportHeightUpdated(_viewportHeight){this._scrollPageHeight=_viewportHeight-this.$.header.clientHeight-this.$.footer.clientHeight-this._scrollLineHeight}ready(){super.ready();this.scrollTarget=this.$.table;this.addEventListener("wheel",e=>{this._wheelScrolling=!0;this._debouncerWheelScrolling=_myApp.Debouncer.debounce(this._debouncerWheelScrolling,_myApp.timeOut.after(this._timeouts.WHEEL_SCROLLING),()=>this._wheelScrolling=!1);this._onWheel(e)});this.$.table.addEventListener("scroll",e=>{if(this.$.outerscroller.outerScrolling){e.stopImmediatePropagation()}},!0);this.$.items.addEventListener("focusin",e=>{const itemsIndex=e.composedPath().indexOf(this.$.items);this._rowWithFocusedElement=e.composedPath()[itemsIndex-1]});this.$.items.addEventListener("focusout",()=>this._rowWithFocusedElement=void 0)}/**
     * Scroll to a specific row index in the virtual list. Note that the row index is
     * not always the same for any particular item. For example, sorting/filtering/expanding
     * or collapsing hierarchical items can affect the row index related to an item.
     *
     * @param {number} index Row index to scroll to
     */scrollToIndex(index){this._accessIronListAPI(()=>super.scrollToIndex(index))}_onWheel(e){if(e.ctrlKey||this._hasScrolledAncestor(e.target,e.deltaX,e.deltaY)){return}const table=this.$.table;let deltaY=e.deltaY;if(e.deltaMode===WheelEvent.DOM_DELTA_LINE){// Scrolling by "lines of text" instead of pixels
deltaY*=this._scrollLineHeight}else if(e.deltaMode===WheelEvent.DOM_DELTA_PAGE){// Scrolling by "pages" instead of pixels
deltaY*=this._scrollPageHeight}if(this._wheelAnimationFrame){// Skip new wheel events while one is being processed
this._deltaYAcc+=deltaY;e.preventDefault();return}deltaY+=this._deltaYAcc;this._deltaYAcc=0;this._wheelAnimationFrame=!0;this._debouncerWheelAnimationFrame=_myApp.Debouncer.debounce(this._debouncerWheelAnimationFrame,_myApp.animationFrame,()=>this._wheelAnimationFrame=!1);var momentum=Math.abs(e.deltaX)+Math.abs(deltaY);if(this._canScroll(table,e.deltaX,deltaY)){e.preventDefault();table.scrollTop+=deltaY;table.scrollLeft+=e.deltaX;this._scrollHandler();this._hasResidualMomentum=!0;this._ignoreNewWheel=!0;this._debouncerIgnoreNewWheel=_myApp.Debouncer.debounce(this._debouncerIgnoreNewWheel,_myApp.timeOut.after(this._timeouts.IGNORE_WHEEL),()=>this._ignoreNewWheel=!1)}else if(this._hasResidualMomentum&&momentum<=this._previousMomentum||this._ignoreNewWheel){e.preventDefault()}else if(momentum>this._previousMomentum){this._hasResidualMomentum=!1}this._previousMomentum=momentum}/**
     * Determines if the element has an ancestor prior to this
     * cell content that handles the scroll delta
     */_hasScrolledAncestor(el,deltaX,deltaY){if("vaadin-grid-cell-content"===el.localName){return!1}else if(this._canScroll(el,deltaX,deltaY)&&-1!==["auto","scroll"].indexOf(getComputedStyle(el).overflow)){return!0}else if(el!==this&&el.parentElement){return this._hasScrolledAncestor(el.parentElement,deltaX,deltaY)}}/**
     * Determines if the the given scroll deltas can be applied to the element
     * (fully or partially)
     */_canScroll(el,deltaX,deltaY){return 0<deltaY&&el.scrollTop<el.scrollHeight-el.offsetHeight||0>deltaY&&0<el.scrollTop||0<deltaX&&el.scrollLeft<el.scrollWidth-el.offsetWidth||0>deltaX&&0<el.scrollLeft}_scheduleScrolling(){if(!this._scrollingFrame){// Defer setting state attributes to avoid Edge hiccups
this._scrollingFrame=requestAnimationFrame(()=>this._toggleAttribute("scrolling",!0,this.$.scroller))}this._debounceScrolling=_myApp.Debouncer.debounce(this._debounceScrolling,_myApp.timeOut.after(this._timeouts.SCROLLING),()=>{cancelAnimationFrame(this._scrollingFrame);delete this._scrollingFrame;this._toggleAttribute("scrolling",!1,this.$.scroller);if(!this.$.outerscroller.outerScrolling){this._reorderRows()}});if(!this._scrollPeriodFrame){this._scrollPeriodFrame=requestAnimationFrame(()=>this._toggleAttribute("scroll-period",!0,this.$.scroller))}this._debounceScrollPeriod=_myApp.Debouncer.debounce(this._debounceScrollPeriod,_myApp.timeOut.after(this._timeouts.SCROLL_PERIOD),()=>{cancelAnimationFrame(this._scrollPeriodFrame);delete this._scrollPeriodFrame;this._toggleAttribute("scroll-period",!1,this.$.scroller)})}_afterScroll(){this._translateStationaryElements();if(!this.hasAttribute("reordering")){this._scheduleScrolling()}const os=this.$.outerscroller;if(!this._ios&&(this._wheelScrolling||os.passthrough)){os.syncOuterScroller()}if(this._ios){// Enable vertical rubberband feedback
const overScroll=Math.max(-os.scrollTop,0)||Math.min(0,os.scrollHeight-os.scrollTop-os.offsetHeight);this.$.items.style.transform=`translateY(${overScroll}px)`}this._updateOverflow()}_updateOverflow(){// Set overflow styling attributes
let overflow="";const table=this.$.table;if(table.scrollTop<table.scrollHeight-table.clientHeight){overflow+=" bottom"}if(0<table.scrollTop){overflow+=" top"}if(table.scrollLeft<table.scrollWidth-table.clientWidth){overflow+=" right"}if(0<table.scrollLeft){overflow+=" left"}this._debounceOverflow=_myApp.Debouncer.debounce(this._debounceOverflow,_myApp.animationFrame,()=>{const value=overflow.trim();if(0<value.length&&this.getAttribute("overflow")!==value){this.setAttribute("overflow",value)}else if(0==value.length&&this.hasAttribute("overflow")){this.removeAttribute("overflow")}})}// correct order needed for preserving correct tab order between cell contents.
_reorderRows(){const body=this.$.items,items=body.querySelectorAll("tr");if(!items.length){return}const adjustedVirtualStart=this._virtualStart+this._vidxOffset,targetRow=this._rowWithFocusedElement||Array.from(items).filter(row=>!row.hidden)[0];// Which row to use as a target?
if(!targetRow){// All rows are hidden, don't reorder
return}// Where the target row should be?
const targetPhysicalIndex=targetRow.index-adjustedVirtualStart,delta=Array.from(items).indexOf(targetRow)-targetPhysicalIndex;// Reodrer the DOM elements to keep the target row at the target physical index
if(0<delta){for(let i=0;i<delta;i++){body.appendChild(items[i])}}else if(0>delta){for(let i=items.length+delta;i<items.length;i++){body.insertBefore(items[i],items[0])}}}_frozenCellsChanged(){this._debouncerCacheElements=_myApp.Debouncer.debounce(this._debouncerCacheElements,_myApp.microTask,()=>{Array.from(this.root.querySelectorAll("[part~=\"cell\"]")).forEach(function(cell){cell.style.transform=""});this._frozenCells=Array.prototype.slice.call(this.$.table.querySelectorAll("[frozen]"));this._translateStationaryElements()});this._updateLastFrozen()}_updateLastFrozen(){if(!this._columnTree){return}const columnsRow=this._columnTree[this._columnTree.length-1].slice(0);columnsRow.sort((a,b)=>{return a._order-b._order});const lastFrozen=columnsRow.reduce((prev,col,index)=>{col._lastFrozen=!1;return col.frozen&&!col.hidden?index:prev},void 0);if(lastFrozen!==void 0){columnsRow[lastFrozen]._lastFrozen=!0}}_translateStationaryElements(){if(this._edge&&!this._scrollbarWidth){// Fixed mode (Tablet Edge)
this.$.items.style.transform=this._getTranslate(-this._scrollLeft||0,-this._scrollTop||0);this.$.footer.style.transform=this.$.header.style.transform=this._getTranslate(-this._scrollLeft||0,0)}else{this.$.footer.style.transform=this.$.header.style.transform=this._getTranslate(0,this._scrollTop)}for(var frozenCellTransform=this._getTranslate(this._scrollLeft,0),i=0;i<this._frozenCells.length;i++){this._frozenCells[i].style.transform=frozenCellTransform}}_getTranslate(x,y){return"translate("+x+"px,"+y+"px)"}_scrollHeightUpdated(_estScrollHeight){this.$.outersizer.style.top=this.$.fixedsizer.style.top=_estScrollHeight+"px"}};_exports.ScrollMixin=ScrollMixin;var vaadinGridScrollMixin={__proto__:null,ScrollMixin:ScrollMixin};_exports.$vaadinGridScrollMixin=vaadinGridScrollMixin;class GridScrollerElement extends PolymerIronList{static get is(){return"vaadin-grid-scroller"}static get properties(){return{size:{type:Number,notify:!0},_vidxOffset:{value:0}}}static get observers(){return["_effectiveSizeChanged(_effectiveSize)"]}connectedCallback(){super.connectedCallback();this._scrollHandler()}/**
    * @protected
    */_updateScrollerItem(item,index){}/**
                                      * @protected
                                      */_afterScroll(){}/**
                    * @protected
                    */_getRowTarget(){}/**
                     * @protected
                     */_createScrollerRows(){}/**
                           * @protected
                           */_canPopulate(){}/**
                    * @private
                    */scrollToIndex(index){this._warnPrivateAPIAccess("scrollToIndex");if(0<index){this._pendingScrollToIndex=null}if(!parseInt(this.$.items.style.borderTopWidth)&&0<index){// Schedule another scroll to be invoked once init is complete
this._pendingScrollToIndex=index}this._scrollingToIndex=!0;index=Math.min(Math.max(index,0),this._effectiveSize-1);this.$.table.scrollTop=index/this._effectiveSize*(this.$.table.scrollHeight-this.$.table.offsetHeight);this._scrollHandler();if(this._accessIronListAPI(()=>this._maxScrollTop)&&this._virtualCount<this._effectiveSize){this._adjustVirtualIndexOffset(1e6)}this._accessIronListAPI(()=>super.scrollToIndex(index-this._vidxOffset));this._scrollHandler();// Ensure scroll position
const row=Array.from(this.$.items.children).filter(child=>child.index===index)[0];if(row){const headerOffset=row.getBoundingClientRect().top-this.$.header.getBoundingClientRect().bottom;if(1<Math.abs(headerOffset)){this.$.table.scrollTop+=headerOffset;this._scrollHandler()}}this._scrollingToIndex=!1}_effectiveSizeChanged(size){let fvi,fviOffset=0;// first visible (adjusted) index
this._iterateItems((pidx,vidx)=>{if(vidx===this._firstVisibleIndex){const row=this._physicalItems[pidx];fvi=row.index;fviOffset=row.getBoundingClientRect().top}});if(this.items&&size<this.items.length){// Size was reduced, scroll to 0 first
this._scrollTop=0}if(!Array.isArray(this.items)){// Edge/IE seems to have the lowest maximum
const maxVirtualItems=this._edge||this._ie?3e4:1e5;this.items={length:Math.min(size,maxVirtualItems)}}this._accessIronListAPI(()=>super._itemsChanged({path:"items"}));this._virtualCount=Math.min(this.items.length,size)||0;if(0===this._scrollTop){this._accessIronListAPI(()=>this._scrollToIndex(Math.min(size-1,fvi)));this._iterateItems((pidx,vidx)=>{const row=this._physicalItems[pidx];if(row.index===fvi){this.$.table.scrollTop+=Math.round(row.getBoundingClientRect().top-fviOffset)}// Restore keyboard focus to the right cell
if(row.index===this._focusedItemIndex&&this._itemsFocusable&&this.$.items.contains(this.shadowRoot.activeElement)){const cellIndex=Array.from(this._itemsFocusable.parentElement.children).indexOf(this._itemsFocusable);row.children[cellIndex].focus()}})}this._assignModels();requestAnimationFrame(()=>this._update())}_positionItems(){this._adjustScrollPosition();let rePosition;if(isNaN(this._physicalTop)){rePosition=!0;this._physicalTop=0}let y=this._physicalTop;this._iterateItems((pidx,vidx)=>{this._physicalItems[pidx].style.transform=`translateY(${y}px)`;y+=this._physicalSizes[pidx]});if(rePosition){this._scrollToIndex(0)}}_increasePoolIfNeeded(count){if(0===count&&this._scrollingToIndex||!this._canPopulate()||!this._effectiveSize){return}if(!this._initialPoolCreated){this._initialPoolCreated=!0;super._increasePoolIfNeeded(25)}else if(this._optPhysicalSize!==1/0){this._debounceIncreasePool=_myApp.Debouncer.debounce(this._debounceIncreasePool,_myApp.animationFrame,()=>{this._updateMetrics();const remainingPhysicalSize=this._optPhysicalSize-this._physicalSize;let estimatedMissingRowCount=Math.ceil(remainingPhysicalSize/this._physicalAverage);if(this._physicalCount+estimatedMissingRowCount>this._effectiveSize){// Do not increase the physical item count above the this._effectiveSize
estimatedMissingRowCount=Math.max(0,this._effectiveSize-this._physicalCount)}if(this._physicalSize&&0<estimatedMissingRowCount){super._increasePoolIfNeeded(estimatedMissingRowCount);// Ensure the rows are in order after increasing pool
this.__reorderChildNodes()}})}}__reorderChildNodes(){const childNodes=Array.from(this.$.items.childNodes),rowsInOrder=!!childNodes.reduce((inOrder,current,currentIndex,array)=>{if(0===currentIndex||array[currentIndex-1].index===current.index-1){return inOrder}},!0);if(!rowsInOrder){childNodes.sort((row1,row2)=>{return row1.index-row2.index}).forEach(row=>this.$.items.appendChild(row))}}_createPool(size){const fragment=document.createDocumentFragment(),physicalItems=this._createScrollerRows(size);physicalItems.forEach(inst=>fragment.appendChild(inst));this._getRowTarget().appendChild(fragment);// Weird hack needed to get Safari to actually distribute slots
const content=this.querySelector("[slot]");if(content){const slot=content.getAttribute("slot");content.setAttribute("slot","foo-bar");content.setAttribute("slot",slot)}this._updateHeaderFooterMetrics();(0,_myApp.afterNextRender)(this,()=>this.notifyResize());return physicalItems}/**
     * Assigns the data models to a given set of items.
     * @param {!Array<number>=} itemSet
     */_assignModels(itemSet){this._iterateItems((pidx,vidx)=>{const el=this._physicalItems[pidx];this._toggleAttribute("hidden",vidx>=this._effectiveSize,el);this._updateScrollerItem(el,vidx+(this._vidxOffset||0))},itemSet)}_scrollHandler(){const delta=this.$.table.scrollTop-this._scrollPosition;this._accessIronListAPI(super._scrollHandler);const oldOffset=this._vidxOffset;if(this._accessIronListAPI(()=>this._maxScrollTop)&&this._virtualCount<this._effectiveSize){this._adjustVirtualIndexOffset(delta)}if(this._vidxOffset!==oldOffset){this._update()}this._afterScroll()}_adjustVirtualIndexOffset(delta){if(1e4<Math.abs(delta)){if(this._noScale){this._noScale=!1;return}const scale=this.$.table.scrollTop/(this.$.table.scrollHeight-this.$.table.offsetHeight),offset=scale*this._effectiveSize;this._vidxOffset=Math.round(offset-scale*this._virtualCount)}else{// Make sure user can always swipe/wheel scroll to the start and end
const oldOffset=this._vidxOffset||0,threshold=1e3,maxShift=100;// At start
if(0===this._scrollTop){this._vidxOffset=0;if(oldOffset!==this._vidxOffset){super.scrollToIndex(0)}}else if(this.firstVisibleIndex<threshold&&0<this._vidxOffset){this._vidxOffset-=Math.min(this._vidxOffset,maxShift);if(oldOffset!==this._vidxOffset){super.scrollToIndex(this.firstVisibleIndex+(oldOffset-this._vidxOffset))}this._noScale=!0}// At end
const maxOffset=this._effectiveSize-this._virtualCount;if(this._scrollTop>=this._maxScrollTop&&0<this._maxScrollTop){this._vidxOffset=maxOffset;if(oldOffset!==this._vidxOffset){super.scrollToIndex(this._virtualCount)}}else if(this.firstVisibleIndex>this._virtualCount-threshold&&this._vidxOffset<maxOffset){this._vidxOffset+=Math.min(maxOffset-this._vidxOffset,maxShift);if(oldOffset!==this._vidxOffset){super.scrollToIndex(this.firstVisibleIndex-(this._vidxOffset-oldOffset))}this._noScale=!0}}}_accessIronListAPI(cb){this._warnPrivateAPIAccessAsyncEnabled=!1;const returnValue=cb.apply(this);this._debouncerWarnPrivateAPIAccess=_myApp.Debouncer.debounce(this._debouncerWarnPrivateAPIAccess,_myApp.animationFrame,()=>this._warnPrivateAPIAccessAsyncEnabled=!0);return returnValue}/* Allow iron-list to access its APIs from debounced callbacks without warns */_debounceRender(cb,asyncModule){super._debounceRender(()=>this._accessIronListAPI(cb),asyncModule)}/* Warn when iron-list APIs are being accessed directly */_warnPrivateAPIAccess(apiName){if(this._warnPrivateAPIAccessAsyncEnabled){console.warn(`Accessing private API (${apiName})!`)}}_render(){this._accessIronListAPI(super._render)}_createFocusBackfillItem(){/* Ignore */}_multiSelectionChanged(){/* Ignore */}clearSelection(){/* Ignore */}_itemsChanged(){/* Ignore */}_manageFocus(){/* Ignore */}_removeFocusedItem(){/* Ignore */}get _firstVisibleIndex(){return this._accessIronListAPI(()=>super.firstVisibleIndex)}get _lastVisibleIndex(){return this._accessIronListAPI(()=>super.lastVisibleIndex)}_scrollToIndex(index){this._accessIronListAPI(()=>this.scrollToIndex(index))}get firstVisibleIndex(){this._warnPrivateAPIAccess("firstVisibleIndex");return super.firstVisibleIndex}set firstVisibleIndex(value){this._warnPrivateAPIAccess("firstVisibleIndex");super.firstVisibleIndex=value}get lastVisibleIndex(){this._warnPrivateAPIAccess("lastVisibleIndex");return super.lastVisibleIndex}set lastVisibleIndex(value){this._warnPrivateAPIAccess("lastVisibleIndex");super.lastVisibleIndex=value}updateViewportBoundaries(){this._warnPrivateAPIAccess("updateViewportBoundaries");super.updateViewportBoundaries.apply(this,arguments)}_resizeHandler(){super._resizeHandler();(0,_myApp.flush)()}}_exports.ScrollerElement=GridScrollerElement;customElements.define(GridScrollerElement.is,GridScrollerElement);var vaadinGridScroller={__proto__:null,ScrollerElement:GridScrollerElement};/**
   @license
   Copyright (c) 2017 Vaadin Ltd.
   This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
   */ /**
       * @polymerMixin
       */_exports.$vaadinGridScroller=vaadinGridScroller;const SelectionMixin=superClass=>class SelectionMixin extends superClass{static get properties(){return{/**
       * An array that contains the selected items.
       */selectedItems:{type:Object,notify:!0,value:()=>[]}}}static get observers(){return["_selectedItemsChanged(selectedItems.*)"]}_isSelected(item){return this.selectedItems&&-1<this._getItemIndexInArray(item,this.selectedItems)}/**
     * Selects the given item.
     *
     * @method selectItem
     * @param {Object} item The item object
     */selectItem(item){if(!this._isSelected(item)){this.push("selectedItems",item)}}/**
     * Deselects the given item if it is already selected.
     *
     * @method deselect
     * @param {Object} item The item object
     */deselectItem(item){const index=this._getItemIndexInArray(item,this.selectedItems);if(-1<index){this.splice("selectedItems",index,1)}}/**
     * Toggles the selected state of the given item.
     *
     * @method toggle
     * @param {Object} item The item object
     */_toggleItem(item){const index=this._getItemIndexInArray(item,this.selectedItems);if(-1===index){this.selectItem(item)}else{this.deselectItem(item)}}_selectedItemsChanged(e){if(this.$.items.children.length&&("selectedItems"===e.path||"selectedItems.splices"===e.path)){Array.from(this.$.items.children).forEach(row=>{this._updateItem(row,row._item)})}}_selectedInstanceChangedCallback(instance,value){if(super._selectedInstanceChangedCallback){super._selectedInstanceChangedCallback(instance,value)}if(value){this.selectItem(instance.item)}else{this.deselectItem(instance.item)}}};_exports.SelectionMixin=SelectionMixin;var vaadinGridSelectionMixin={__proto__:null,SelectionMixin:SelectionMixin};_exports.$vaadinGridSelectionMixin=vaadinGridSelectionMixin;const SortMixin=superClass=>class SortMixin extends superClass{static get properties(){return{/**
       * When `true`, all `<vaadin-grid-sorter>` are applied for sorting.
       */multiSort:{type:Boolean,value:!1},_sorters:{type:Array,value:function(){return[]}},_previousSorters:{type:Array,value:function(){return[]}}}}ready(){super.ready();this.addEventListener("sorter-changed",this._onSorterChanged);// With Polymer 2 & shady the 'sorter-changed' listener isn't guaranteed to be registered
// before child <vaadin-grid-sorter>'s upgrade and fire the events. The following
// makes sure that 'sorter-changed' is fired for all <vaadin-grid-sorter> elements
// after this (<vaadin-grid>) is ready (and the listeners are active).
if(window.ShadyDOM){_myApp.microTask.run(()=>{const sorters=this.querySelectorAll("vaadin-grid-sorter");Array.from(sorters).forEach(sorter=>{// Don't try to fire if the sorter hasn't been upgraded yet
if(sorter instanceof _myApp.PolymerElement){sorter.dispatchEvent(new CustomEvent("sorter-changed",{bubbles:!0,composed:!0}))}})})}}_onSorterChanged(e){const sorter=e.target;this._removeArrayItem(this._sorters,sorter);sorter._order=null;if(this.multiSort){if(sorter.direction){this._sorters.unshift(sorter)}this._sorters.forEach((sorter,index)=>sorter._order=1<this._sorters.length?index:null,this)}else{if(sorter.direction){this._sorters.forEach(sorter=>{sorter._order=null;sorter.direction=null});this._sorters=[sorter]}}e.stopPropagation();if(this.dataProvider&&// No need to clear cache if sorters didn't change
JSON.stringify(this._previousSorters)!==JSON.stringify(this._mapSorters())){this.clearCache()}this._a11yUpdateSorters();this._previousSorters=this._mapSorters()}_mapSorters(){return this._sorters.map(sorter=>{return{path:sorter.path,direction:sorter.direction}})}_removeArrayItem(array,item){const index=array.indexOf(item);if(-1<index){array.splice(index,1)}}};_exports.SortMixin=SortMixin;var vaadinGridSortMixin={__proto__:null,SortMixin:SortMixin};_exports.$vaadinGridSortMixin=vaadinGridSortMixin;const VaadinGridStyles=document.createElement("dom-module");// NOTE(web-padawan): https://github.com/vaadin/vaadin-grid/issues/1514
VaadinGridStyles.appendChild((0,_myApp.html$1)`
  <style>
    @keyframes vaadin-grid-appear {
      to {
        opacity: 1;
      }
    }

    :host {
      display: block;
      animation: 1ms vaadin-grid-appear;
      height: 400px;
      flex: 1 1 auto;
      align-self: stretch;
      position: relative;
    }

    :host([hidden]) {
      display: none !important;
    }

    #scroller {
      display: block;
      transform: translateY(0);
      width: auto;
      height: auto;
      position: absolute;
      top: 0;
      right: 0;
      bottom: 0;
      left: 0;
    }

    :host([height-by-rows]) {
      height: auto;
      align-self: flex-start;
      flex-grow: 0;
      width: 100%;
    }

    :host([height-by-rows]) #scroller {
      width: 100%;
      height: 100%;
      position: relative;
    }

    #table {
      display: block;
      width: 100%;
      height: 100%;
      overflow: auto;
      z-index: -2;
      position: relative;
      outline: none;
    }

    #header {
      display: block;
      position: absolute;
      top: 0;
      width: 100%;
    }

    th {
      text-align: inherit;
    }

    /* Safari doesn't work with "inherit" */
    [safari] th {
      text-align: initial;
    }

    #footer {
      display: block;
      position: absolute;
      bottom: 0;
      width: 100%;
    }

    #items {
      display: block;
      width: 100%;
      position: relative;
      z-index: -1;
    }

    #items,
    #outersizer,
    #fixedsizer {
      border-top: 0 solid transparent;
      border-bottom: 0 solid transparent;
    }

    [part~="row"] {
      display: flex;
      width: 100%;
      box-sizing: border-box;
      margin: 0;
    }

    [part~="row"][loading] [part~="body-cell"] ::slotted(vaadin-grid-cell-content) {
      opacity: 0;
    }

    #items [part~="row"] {
      position: absolute;
    }

    #items [part~="row"]:empty {
      height: 1em;
    }

    [part~="cell"]:not([part~="details-cell"]) {
      flex-shrink: 0;
      flex-grow: 1;
      box-sizing: border-box;
      display: flex;
      width: 100%;
      position: relative;
      align-items: center;
      padding: 0;
      white-space: nowrap;
    }

    [part~="details-cell"] {
      position: absolute;
      bottom: 0;
      width: 100%;
      box-sizing: border-box;
      padding: 0;
    }

    [part~="cell"] ::slotted(vaadin-grid-cell-content) {
      display: block;
      width: 100%;
      box-sizing: border-box;
      overflow: hidden;
      text-overflow: ellipsis;
    }

    [hidden] {
      display: none !important;
    }

    [frozen] {
      z-index: 2;
      will-change: transform;
    }

    #outerscroller {
      /* Needed (at least) for Android Chrome */
      z-index: 0;
    }

    #scroller:not([safari]) #outerscroller {
      /* Needed for Android Chrome (#1020). Can't be applied to Safari
      since it would re-introduce the sub-pixel overflow bug (#853) */
      will-change: transform;
    }

    [no-scrollbars]:not([safari]):not([firefox]) #outerscroller,
    [no-scrollbars][safari] #table,
    [no-scrollbars][firefox] #table {
      overflow: hidden;
    }

    [no-scrollbars]:not([safari]):not([firefox]) #outerscroller {
      pointer-events: none;
    }

    /* Reordering styles */
    :host([reordering]) [part~="cell"] ::slotted(vaadin-grid-cell-content),
    :host([reordering]) [part~="resize-handle"],
    #scroller[no-content-pointer-events] [part~="cell"] ::slotted(vaadin-grid-cell-content) {
      pointer-events: none;
    }

    [part~="reorder-ghost"] {
      visibility: hidden;
      position: fixed;
      pointer-events: none;
      opacity: 0.5;

      /* Prevent overflowing the grid in Firefox */
      top: 0;
      left: 0;
    }

    :host([reordering]) {
      -moz-user-select: none;
      -webkit-user-select: none;
      user-select: none;
    }

    #scroller[ie][column-reordering-allowed] [part~="header-cell"] {
      -ms-user-select: none;
    }

    :host([reordering]) #outerscroller {
      -webkit-overflow-scrolling: auto !important;
    }

    /* Resizing styles */
    [part~="resize-handle"] {
      position: absolute;
      top: 0;
      right: 0;
      height: 100%;
      cursor: col-resize;
      z-index: 1;
    }

    [part~="resize-handle"]::before {
      position: absolute;
      content: "";
      height: 100%;
      width: 35px;
      transform: translateX(-50%);
    }

    [last-column] [part~="resize-handle"]::before,
    [last-frozen] [part~="resize-handle"]::before {
      width: 18px;
      transform: none;
      right: 0;
    }

    #scroller[column-resizing] {
      -ms-user-select: none;
      -moz-user-select: none;
      -webkit-user-select: none;
      user-select: none;
    }

    /* Sizer styles */
    .sizer {
      display: flex;
      position: relative;
      width: 100%;
      visibility: hidden;
    }

    .sizer [part~="details-cell"] {
      display: none !important;
    }

    .sizer [part~="cell"][hidden] {
      display: none !important;
    }

    .sizer [part~="cell"] {
      display: block;
      flex-shrink: 0;
      line-height: 0;
      margin-top: -1em;
      height: 0 !important;
      min-height: 0 !important;
      max-height: 0 !important;
      padding: 0 !important;
    }

    .sizer [part~="cell"]::before {
      content: "-";
    }

    .sizer [part~="cell"] ::slotted(vaadin-grid-cell-content) {
      display: none !important;
    }

    /* Fixed mode (Tablet Edge) */
    #fixedsizer {
      position: absolute;
    }

    :not([edge][no-scrollbars]) #fixedsizer {
      display: none;
    }

    [edge][no-scrollbars] {
      /* Any value other than ‘none’ for the transform results in the creation of both a stacking context and
      a containing block. The object acts as a containing block for fixed positioned descendants. */
      transform: translateZ(0);
      overflow: hidden;
    }

    [edge][no-scrollbars] #header,
    [edge][no-scrollbars] #footer {
      position: fixed;
    }

    [edge][no-scrollbars] #items {
      position: fixed;
      width: 100%;
      will-change: transform;
    }
  </style>
`);const safari=/^((?!chrome|android).)*safari/i.test(navigator.userAgent),firefox=-1<navigator.userAgent.toLowerCase().indexOf("firefox");if(safari||firefox){const scrollingStyles=document.createElement("style");scrollingStyles.textContent=`
    [scrolling][safari] #outerscroller,
    [scrolling][firefox] #outerscroller {
      pointer-events: auto;
    }

    [ios] #outerscroller {
      pointer-events: auto;
      z-index: -3;
    }

    [ios][scrolling] #outerscroller {
      z-index: 0;
    }

    [ios] [frozen] {
      will-change: auto;
    }
  `;VaadinGridStyles.querySelector("template").content.appendChild(scrollingStyles)}VaadinGridStyles.register("vaadin-grid-styles");/**
                                                 @license
                                                 Copyright (c) 2018 Vaadin Ltd.
                                                 This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
                                                 */ /**
                                                     * @polymerMixin
                                                     */const StylingMixin=superClass=>class StylingMixin extends superClass{static get properties(){return{/**
       * A function that allows generating CSS class names for grid cells
       * based on their row and column. The return value should be the generated
       * class name as a string, or multiple class names separated by whitespace
       * characters.
       *
       * Receives two arguments:
       * - `column` The `<vaadin-grid-column>` element (`undefined` for details-cell).
       * - `rowData` The object with the properties related with
       *   the rendered item, contains:
       *   - `rowData.index` The index of the item.
       *   - `rowData.item` The item.
       *   - `rowData.expanded` Sublevel toggle state.
       *   - `rowData.level` Level of the tree represented with a horizontal offset of the toggle button.
       *   - `rowData.selected` Selected state.
       */cellClassNameGenerator:Function}}static get observers(){return["__cellClassNameGeneratorChanged(cellClassNameGenerator)"]}__cellClassNameGeneratorChanged(cellClassGenerator){this.generateCellClassNames()}/**
     * Runs the `cellClassNameGenerator` for the visible cells.
     * If the generator depends on varying conditions, you need to
     * call this function manually in order to update the styles when
     * the conditions change.
     */generateCellClassNames(){Array.from(this.$.items.children).filter(row=>!row.hidden).forEach(row=>this._generateCellClassNames(row,this.__getRowModel(row)))}_generateCellClassNames(row,rowData){Array.from(row.children).forEach(cell=>{if(cell.__generatedClasses){cell.__generatedClasses.forEach(className=>cell.classList.remove(className))}if(this.cellClassNameGenerator){const result=this.cellClassNameGenerator(cell._column,rowData);cell.__generatedClasses=result&&result.split(" ").filter(className=>0<className.length);if(cell.__generatedClasses){cell.__generatedClasses.forEach(className=>cell.classList.add(className))}}})}};_exports.StylingMixin=StylingMixin;var vaadinGridStylingMixin={__proto__:null,StylingMixin:StylingMixin};_exports.$vaadinGridStylingMixin=vaadinGridStylingMixin;const TOUCH_DEVICE=(()=>{try{document.createEvent("TouchEvent");return!0}catch(e){return!1}})();/**
       *
       * `<vaadin-grid>` is a free, high quality data grid / data table Web Component. The content of the
       * the grid can be populated in two ways: imperatively by using renderer callback function and
       * declaratively by using Polymer's Templates.
       *
       * ### Quick Start
       *
       * Start with an assigning an array to the [`items`](#/elements/vaadin-grid#property-items) property to visualize your data.
       *
       * Use the [`<vaadin-grid-column>`](#/elements/vaadin-grid-column) element to configure the grid columns. Set `path` and `header`
       * shorthand properties for the columns to define what gets rendered in the cells of the column.
       *
       * #### Example:
       * ```html
       * <vaadin-grid>
       *   <vaadin-grid-column path="name.first" header="First name"></vaadin-grid-column>
       *   <vaadin-grid-column path="name.last" header="Last name"></vaadin-grid-column>
       *   <vaadin-grid-column path="email"></vaadin-grid-column>
       * </vaadin-grid>
       * ```
       *
       * For custom content `vaadin-grid-column` element provides you with three types of `renderer` callback functions: `headerRenderer`,
       * `renderer` and `footerRenderer`.
       *
       * Each of those renderer functions provides `root`, `column`, `rowData` arguments when applicable.
       * Generate DOM content, append it to the `root` element and control the state
       * of the host element by accessing `column`. Before generating new content,
       * users are able to check if there is already content in `root` for reusing it.
       *
       * Renderers are called on initialization of new column cells and each time the
       * related row data is updated. DOM generated during the renderer call can be reused
       * in the next renderer call and will be provided with the `root` argument.
       * On first call it will be empty.
       *
       * #### Example:
       * ```html
       * <vaadin-grid>
       *   <vaadin-grid-column></vaadin-grid-column>
       *   <vaadin-grid-column></vaadin-grid-column>
       *   <vaadin-grid-column></vaadin-grid-column>
       * </vaadin-grid>
       * ```
       * ```js
       * const grid = document.querySelector('vaadin-grid');
       * grid.items = [{'name': 'John', 'surname': 'Lennon', 'role': 'singer'},
       *               {'name': 'Ringo', 'surname': 'Starr', 'role': 'drums'}];
       *
       * const columns = grid.querySelectorAll('vaadin-grid-column');
       *
       * columns[0].headerRenderer = function(root) {
       *   root.textContent = 'Name';
       * };
       * columns[0].renderer = function(root, column, rowData) {
       *   root.textContent = rowData.item.name;
       * };
       *
       * columns[1].headerRenderer = function(root) {
       *   root.textContent = 'Surname';
       * };
       * columns[1].renderer = function(root, column, rowData) {
       *   root.textContent = rowData.item.surname;
       * };
       *
       * columns[2].headerRenderer = function(root) {
       *   root.textContent = 'Role';
       * };
       * columns[2].renderer = function(root, column, rowData) {
       *   root.textContent = rowData.item.role;
       * };
       * ```
       *
       * Alternatively, the content can be provided with Polymer's Templates:
       *
       * #### Example:
       * ```html
       * <vaadin-grid items='[{"name": "John", "surname": "Lennon", "role": "singer"},
       * {"name": "Ringo", "surname": "Starr", "role": "drums"}]'>
       *   <vaadin-grid-column>
       *     <template class="header">Name</template>
       *     <template>[[item.name]]</template>
       *   </vaadin-grid-column>
       *   <vaadin-grid-column>
       *     <template class="header">Surname</template>
       *     <template>[[item.surname]]</template>
       *   </vaadin-grid-column>
       *   <vaadin-grid-column>
       *     <template class="header">Role</template>
       *     <template>[[item.role]]</template>
       *   </vaadin-grid-column>
       * </vaadin-grid>
       * ```
       *
       * The following helper elements can be used for further customization:
       * - [`<vaadin-grid-column-group>`](#/elements/vaadin-grid-column-group)
       * - [`<vaadin-grid-filter>`](#/elements/vaadin-grid-filter)
       * - [`<vaadin-grid-sorter>`](#/elements/vaadin-grid-sorter)
       * - [`<vaadin-grid-selection-column>`](#/elements/vaadin-grid-selection-column)
       * - [`<vaadin-grid-tree-toggle>`](#/elements/vaadin-grid-tree-toggle)
       *
       * __Note that the helper elements must be explicitly imported.__
       * If you want to import everything at once you can use the `all-imports.html` bundle.
       *
       * A column template can be decorated with one the following class names to specify its purpose
       * - `header`: Marks a header template
       * - `footer`: Marks a footer template
       * - `row-details`: Marks a row details template
       *
       * The following built-in template variables can be bound to inside the column templates:
       * - `[[index]]`: Number representing the row index
       * - `[[item]]` and it's sub-properties: Data object (provided by a data provider / items array)
       * - `{{selected}}`: True if the item is selected (can be two-way bound)
       * - `{{detailsOpened}}`: True if the item has row details opened (can be two-way bound)
       * - `{{expanded}}`: True if the item has tree sublevel expanded (can be two-way bound)
       * - `[[level]]`: Number of the tree sublevel of the item, first level-items have 0
       *
       * ### Lazy Loading with Function Data Provider
       *
       * In addition to assigning an array to the items property, you can alternatively
       * provide the `<vaadin-grid>` data through the
       * [`dataProvider`](#/elements/vaadin-grid#property-dataProvider) function property.
       * The `<vaadin-grid>` calls this function lazily, only when it needs more data
       * to be displayed.
       *
       * See the [`dataProvider`](#/elements/vaadin-grid#property-dataProvider) in
       * the API reference below for the detailed data provider arguments description,
       * and the “Assigning Data” page in the demos.
       *
       * __Note that expanding the tree grid's item will trigger a call to the `dataProvider`.__
       *
       * __Also, note that when using function data providers, the total number of items
       * needs to be set manually. The total number of items can be returned
       * in the second argument of the data provider callback:__
       *
       * ```javascript
       * grid.dataProvider = function(params, callback) {
       *   var url = 'https://api.example/data' +
       *       '?page=' + params.page +        // the requested page index
       *       '&per_page=' + params.pageSize; // number of items on the page
       *   var xhr = new XMLHttpRequest();
       *   xhr.onload = function() {
       *     var response = JSON.parse(xhr.responseText);
       *     callback(
       *       response.employees, // requested page of items
       *       response.totalSize  // total number of items
       *     );
       *   };
       *   xhr.open('GET', url, true);
       *   xhr.send();
       * };
       * ```
       *
       * __Alternatively, you can use the `size` property to set the total number of items:__
       *
       * ```javascript
       * grid.size = 200; // The total number of items
       * grid.dataProvider = function(params, callback) {
       *   var url = 'https://api.example/data' +
       *       '?page=' + params.page +        // the requested page index
       *       '&per_page=' + params.pageSize; // number of items on the page
       *   var xhr = new XMLHttpRequest();
       *   xhr.onload = function() {
       *     var response = JSON.parse(xhr.responseText);
       *     callback(response.employees);
       *   };
       *   xhr.open('GET', url, true);
       *   xhr.send();
       * };
       * ```
       *
       * ### Styling
       *
       * The following shadow DOM parts are available for styling:
       *
       * Part name | Description
       * ----------------|----------------
       * `row` | Row in the internal table
       * `cell` | Cell in the internal table
       * `header-cell` | Header cell in the internal table
       * `body-cell` | Body cell in the internal table
       * `footer-cell` | Footer cell in the internal table
       * `details-cell` | Row details cell in the internal table
       * `resize-handle` | Handle for resizing the columns
       * `reorder-ghost` | Ghost element of the header cell being dragged
       *
       * The following state attributes are available for styling:
       *
       * Attribute    | Description | Part name
       * -------------|-------------|------------
       * `loading` | Set when the grid is loading data from data provider | :host
       * `interacting` | Keyboard navigation in interaction mode | :host
       * `navigating` | Keyboard navigation in navigation mode | :host
       * `overflow` | Set when rows are overflowing the grid viewport. Possible values: `top`, `bottom`, `left`, `right` | :host
       * `reordering` | Set when the grid's columns are being reordered | :host
       * `dragover` | Set when the grid (not a specific row) is dragged over | :host
       * `dragging-rows` : Set when grid rows are dragged  | :host
       * `reorder-status` | Reflects the status of a cell while columns are being reordered | cell
       * `frozen` | Frozen cell | cell
       * `last-frozen` | Last frozen cell | cell
      * * `first-column` | First visible cell on a row | cell
       * `last-column` | Last visible cell on a row | cell
       * `selected` | Selected row | row
       * `expanded` | Expanded row | row
       * `details-opened` | Row with details open | row
       * `loading` | Row that is waiting for data from data provider | row
       * `odd` | Odd row | row
       * `first` | The first body row | row
       * `dragstart` | Set for one frame when drag of a row is starting. The value is a number when multiple rows are dragged | row
       * `dragover` | Set when the row is dragged over | row
       * `drag-disabled` | Set to a row that isn't available for dragging | row
       * `drop-disabled` | Set to a row that can't be dropped on top of | row
       *
       * See [ThemableMixin – how to apply styles for shadow parts](https://github.com/vaadin/vaadin-themable-mixin/wiki)
       *
       * @memberof Vaadin
       * @mixes Vaadin.ThemableMixin
       * @mixes Vaadin.Grid.A11yMixin
       * @mixes Vaadin.Grid.ActiveItemMixin
       * @mixes Vaadin.Grid.ArrayDataProviderMixin
       * @mixes Vaadin.Grid.ColumnResizingMixin
       * @mixes Vaadin.Grid.DataProviderMixin
       * @mixes Vaadin.Grid.DynamicColumnsMixin
       * @mixes Vaadin.Grid.FilterMixin
       * @mixes Vaadin.Grid.RowDetailsMixin
       * @mixes Vaadin.Grid.ScrollMixin
       * @mixes Vaadin.Grid.SelectionMixin
       * @mixes Vaadin.Grid.SortMixin
       * @mixes Vaadin.Grid.KeyboardNavigationMixin
       * @mixes Vaadin.Grid.ColumnReorderingMixin
       * @mixes Vaadin.Grid.EventContextMixin
       * @mixes Vaadin.Grid.StylingMixin
       * @mixes Vaadin.Grid.DragAndDropMixin
       * @demo demo/index.html
       */class GridElement extends ElementMixin(ThemableMixin(DataProviderMixin(ArrayDataProviderMixin(DynamicColumnsMixin(ActiveItemMixin(ScrollMixin(SelectionMixin(SortMixin(RowDetailsMixin(KeyboardNavigationMixin(A11yMixin(FilterMixin(ColumnReorderingMixin(ColumnResizingMixin(EventContextMixin(DragAndDropMixin(StylingMixin(GridScrollerElement)))))))))))))))))){static get template(){return(0,_myApp.html$1)`
    <style include="vaadin-grid-styles"></style>

    <div id="scroller" no-scrollbars\$="[[!_scrollbarWidth]]" wheel-scrolling\$="[[_wheelScrolling]]" safari\$="[[_safari]]" ios\$="[[_ios]]" loading\$="[[loading]]" edge\$="[[_edge]]" firefox\$="[[_firefox]]" ie\$="[[_ie]]" column-reordering-allowed\$="[[columnReorderingAllowed]]">

      <table id="table" role="grid" aria-multiselectable="true" tabindex="0">
        <caption id="fixedsizer" class="sizer" part="row"></caption>
        <thead id="header" role="rowgroup"></thead>
        <tbody id="items" role="rowgroup"></tbody>
        <tfoot id="footer" role="rowgroup"></tfoot>
      </table>

      <div part="reorder-ghost"></div>
      <vaadin-grid-outer-scroller id="outerscroller" _touch-device="[[_touchDevice]]" scroll-target="[[scrollTarget]]" scroll-handler="[[_this]]" no-scrollbars="[[!_scrollbarWidth]]">
        <div id="outersizer" class="sizer" part="row"></div>
      </vaadin-grid-outer-scroller>
    </div>

    <!-- The template needs at least one slot or else shady doesn't distribute -->
    <slot name="nodistribute"></slot>

    <div id="focusexit" tabindex="0"></div>
`}static get is(){return"vaadin-grid"}static get version(){return"5.5.0"}static get observers(){return["_columnTreeChanged(_columnTree, _columnTree.*)"]}static get properties(){return{_this:{type:Object,value:function(){return this}},_safari:{type:Boolean,value:/^((?!chrome|android).)*safari/i.test(navigator.userAgent)},_ios:{type:Boolean,value:/iPad|iPhone|iPod/.test(navigator.userAgent)&&!window.MSStream||"MacIntel"===navigator.platform&&1<navigator.maxTouchPoints},_edge:{type:Boolean,value:"undefined"!==typeof CSS&&CSS.supports("(-ms-ime-align:auto)")},_ie:{type:Boolean,value:!!(navigator.userAgent.match(/Trident/)&&!navigator.userAgent.match(/MSIE/))},_firefox:{type:Boolean,value:-1<navigator.userAgent.toLowerCase().indexOf("firefox")},_android:{type:Boolean,value:/android/i.test(navigator.userAgent)},_touchDevice:{type:Boolean,value:TOUCH_DEVICE},/**
       * If true, the grid's height is defined by the number of its rows.
       */heightByRows:{type:Boolean,value:!1,reflectToAttribute:!0,observer:"_heightByRowsChanged"}}}constructor(){super();this.addEventListener("animationend",this._onAnimationEnd)}__hasRowsWithClientHeight(){return!!Array.from(this.$.items.children).filter(row=>row.clientHeight).length}__setInitialColumnWidths(){if(!this._initialColumnWidthsSet&&this.__hasRowsWithClientHeight()){this._initialColumnWidthsSet=!0;this.recalculateColumnWidths()}}/**
     * @param {Array<Vaadin.GridColumnElement>} cols the columns to auto size based on their content width
     */_recalculateColumnWidths(cols){// Note: The `cols.forEach()` loops below could be implemented as a single loop but this has been
// split for performance reasons to batch these similar actions [write/read] together to avoid
// unnecessary layout trashing.
// [write] Set automatic width for all cells (breaks column alignment)
cols.forEach(col=>{col.width="auto";col._origFlexGrow=col.flexGrow;col.flexGrow=0});// [read] Measure max cell width in each column
cols.forEach(col=>{col._currentWidth=0;// Note: _allCells only contains cells which are currently rendered in DOM
col._allCells.forEach(c=>{const cellWidth=Math.ceil(c.getBoundingClientRect().width);col._currentWidth=Math.max(col._currentWidth,cellWidth)})});// [write] Set column widths to fit widest measured content
cols.forEach(col=>{col.width=`${col._currentWidth}px`;col.flexGrow=col._origFlexGrow;col._currentWidth=void 0;col._origFlexGrow=void 0})}/**
     * Updates the `width` of all columns which have `autoWidth` set to `true`.
     */recalculateColumnWidths(){if(!this._columnTree){return;// No columns
}const cols=this._getColumns().filter(col=>!col.hidden&&col.autoWidth);this._recalculateColumnWidths(cols)}_createScrollerRows(count){const rows=[];for(var i=0;i<count;i++){const row=document.createElement("tr");row.setAttribute("part","row");row.setAttribute("role","row");if(this._columnTree){this._updateRow(row,this._columnTree[this._columnTree.length-1],"body",!1,!0)}rows.push(row)}if(this._columnTree){this._columnTree[this._columnTree.length-1].forEach(c=>c.notifyPath&&c.notifyPath("_cells.*",c._cells))}(0,_myApp.beforeNextRender)(this,()=>{this._updateFirstAndLastColumn();this._resetKeyboardNavigation()});return rows}_getRowTarget(){return this.$.items}_createCell(tagName){const contentId=this._contentIndex=this._contentIndex+1||0,slotName="vaadin-grid-cell-content-"+contentId,cellContent=document.createElement("vaadin-grid-cell-content");cellContent.setAttribute("slot",slotName);const cell=document.createElement(tagName);cell.id=slotName.replace("-content-","-");cell.setAttribute("tabindex","-1");cell.setAttribute("role","td"===tagName?"gridcell":"columnheader");const slot=document.createElement("slot");slot.setAttribute("name",slotName);cell.appendChild(slot);cell._content=cellContent;// With native Shadow DOM, mousedown on slotted element does not focus
// focusable slot wrapper, that is why cells are not focused with
// mousedown. Workaround: listen for mousedown and focus manually.
cellContent.addEventListener("mousedown",()=>{if(window.chrome){// Chrome bug: focusing before mouseup prevents text selection, see http://crbug.com/771903
const mouseUpListener=()=>{if(!cellContent.contains(this.getRootNode().activeElement)){cell.focus()}// If focus is in the cell content — respect it, do not change.
document.removeEventListener("mouseup",mouseUpListener,!0)};document.addEventListener("mouseup",mouseUpListener,!0)}else{// Focus on mouseup, on the other hand, removes selection on Safari.
// Watch out sync focus removal issue, only async focus works here.
setTimeout(()=>{if(!cellContent.contains(this.getRootNode().activeElement)){cell.focus()}})}});return cell}_updateRow(row,columns,section,isColumnRow,noNotify){section=section||"body";const contentsFragment=document.createDocumentFragment();Array.from(row.children).forEach(cell=>cell._vacant=!0);row.innerHTML="";if("outersizer"!==row.id&&"fixedsizer"!==row.id){row.hidden=!0}columns.forEach((column,index)=>{let cell;if("body"===section){// Body
column._cells=column._cells||[];cell=column._cells.filter(cell=>cell._vacant)[0];if(!cell){cell=this._createCell("td");column._cells.push(cell)}cell.setAttribute("part","cell body-cell");row.appendChild(cell);if(index===columns.length-1&&(this._rowDetailsTemplate||this.rowDetailsRenderer)){// Add details cell as last cell to body rows
this._detailsCells=this._detailsCells||[];const detailsCell=this._detailsCells.filter(cell=>cell._vacant)[0]||this._createCell("td");if(-1===this._detailsCells.indexOf(detailsCell)){this._detailsCells.push(detailsCell)}if(!detailsCell._content.parentElement){contentsFragment.appendChild(detailsCell._content)}this._configureDetailsCell(detailsCell);row.appendChild(detailsCell);this._a11ySetRowDetailsCell(row,detailsCell);detailsCell._vacant=!1}if(column.notifyPath&&!noNotify){column.notifyPath("_cells.*",column._cells)}}else{// Header & footer
const tagName="header"===section?"th":"td";if(isColumnRow||"vaadin-grid-column-group"===column.localName){cell=column[`_${section}Cell`]||this._createCell(tagName);cell._column=column;row.appendChild(cell);column[`_${section}Cell`]=cell}else{column._emptyCells=column._emptyCells||[];cell=column._emptyCells.filter(cell=>cell._vacant)[0]||this._createCell(tagName);cell._column=column;row.appendChild(cell);if(-1===column._emptyCells.indexOf(cell)){column._emptyCells.push(cell)}}cell.setAttribute("part",`cell ${section}-cell`);this.__updateHeaderFooterRowVisibility(row)}if(!cell._content.parentElement){contentsFragment.appendChild(cell._content)}cell._vacant=!1;cell._column=column});// Might be empty if only cache was used
this.appendChild(contentsFragment);this._frozenCellsChanged();this._updateFirstAndLastColumnForRow(row)}__updateHeaderFooterRowVisibility(row){if(!row){return}const visibleRowCells=Array.from(row.children).filter(cell=>{const column=cell._column;if(column._emptyCells&&-1<column._emptyCells.indexOf(cell)){// The cell is an "empty cell"  -> doesn't block hiding the row
return!1}if(row.parentElement===this.$.header){if(column.headerRenderer||column._headerTemplate){// The cell is the header cell of a column that has a header renderer
// or a header template -> row should be visible
return!0}if(null===column.header){// The column header is explicilty set to null -> doesn't block hiding the row
return!1}if(column.path||column.header!==void 0){// The column has an explicit non-null header or a path that generates a header
// -> row should be visible
return!0}}else{if(column.footerRenderer||column._footerTemplate){// The cell is the footer cell of a column that has a footer renderer
// or a footer template -> row should be visible
return!0}}});if(row.hidden!==!visibleRowCells.length){row.hidden=!visibleRowCells.length;this.notifyResize()}}_updateScrollerItem(row,index){this._preventScrollerRotatingCellFocus(row,index);if(!this._columnTree){return}this._toggleAttribute("first",0===index,row);this._toggleAttribute("odd",index%2,row);this._a11yUpdateRowRowindex(row,index);this._getItem(index,row)}_columnTreeChanged(columnTree,splices){Array.from(this.$.items.children).forEach(row=>this._updateRow(row,columnTree[columnTree.length-1]));while(this.$.header.children.length<columnTree.length){const headerRow=document.createElement("tr");headerRow.setAttribute("part","row");headerRow.setAttribute("role","row");this.$.header.appendChild(headerRow);const footerRow=document.createElement("tr");footerRow.setAttribute("part","row");footerRow.setAttribute("role","row");this.$.footer.appendChild(footerRow)}while(this.$.header.children.length>columnTree.length){this.$.header.removeChild(this.$.header.firstElementChild);this.$.footer.removeChild(this.$.footer.firstElementChild)}Array.from(this.$.header.children).forEach((headerRow,index)=>this._updateRow(headerRow,columnTree[index],"header",index===columnTree.length-1));Array.from(this.$.footer.children).forEach((footerRow,index)=>this._updateRow(footerRow,columnTree[columnTree.length-1-index],"footer",0===index));// Sizer rows
this._updateRow(this.$.outersizer,columnTree[columnTree.length-1]);this._updateRow(this.$.fixedsizer,columnTree[columnTree.length-1]);this._resizeHandler();this._frozenCellsChanged();this._updateFirstAndLastColumn();this._resetKeyboardNavigation();this._a11yUpdateHeaderRows();this._a11yUpdateFooterRows()}_updateItem(row,item){row._item=item;const model=this.__getRowModel(row);this._toggleAttribute("selected",model.selected,row);this._a11yUpdateRowSelected(row,model.selected);this._a11yUpdateRowLevel(row,model.level);this._toggleAttribute("expanded",model.expanded,row);if(this._rowDetailsTemplate||this.rowDetailsRenderer){this._toggleDetailsCell(row,item)}this._generateCellClassNames(row,model);this._filterDragAndDrop(row,model);Array.from(row.children).forEach(cell=>{if(cell._renderer){const owner=cell._column||this;cell._renderer.call(owner,cell._content,owner,model)}else if(cell._instance){cell._instance.__detailsOpened__=model.detailsOpened;cell._instance.__selected__=model.selected;cell._instance.__level__=model.level;cell._instance.__expanded__=model.expanded;cell._instance.setProperties(model)}});this._debouncerUpdateHeights=_myApp.Debouncer.debounce(this._debouncerUpdateHeights,_myApp.timeOut.after(1),()=>{this._updateMetrics();this._positionItems();this._updateScrollerSize()})}_resizeHandler(){this._updateDetailsCellHeights();this._accessIronListAPI(super._resizeHandler,!0);this._updateHeaderFooterMetrics()}_updateHeaderFooterMetrics(){const headerHeight=this.$.header.clientHeight+"px",footerHeight=this.$.footer.clientHeight+"px";[this.$.outersizer,this.$.fixedsizer,this.$.items].forEach(element=>{element.style.borderTopWidth=headerHeight;element.style.borderBottomWidth=footerHeight});(0,_myApp.afterNextRender)(this.$.header,()=>{if(this._pendingScrollToIndex){this._scrollToIndex(this._pendingScrollToIndex)}})}_onAnimationEnd(e){// ShadyCSS applies scoping suffixes to animation names
if(0===e.animationName.indexOf("vaadin-grid-appear")){this._render();this._updateHeaderFooterMetrics();e.stopPropagation();this.notifyResize();this.__setInitialColumnWidths()}}_toggleAttribute(name,bool,node){if(node.hasAttribute(name)===!bool){if(bool){node.setAttribute(name,"")}else{node.removeAttribute(name)}}}__getRowModel(row){return{index:row.index,item:row._item,level:this._getIndexLevel(row.index),expanded:this._isExpanded(row._item),selected:this._isSelected(row._item),detailsOpened:!!(this._rowDetailsTemplate||this.rowDetailsRenderer)&&this._isDetailsOpened(row._item)}}/**
     * Manually invoke existing renderers for all the columns
     * (header, footer and body cells) and opened row details.
     */render(){if(this._columnTree){// header and footer renderers
this._columnTree.forEach(level=>{level.forEach(column=>column._renderHeaderAndFooter())});// body and row details renderers
this._update()}}/**
     * Updates the computed metrics and positioning of internal grid parts
     * (row/details cell positioning etc). Needs to be invoked whenever the sizing of grid
     * content changes asynchronously to ensure consistent appearance (e.g. when a
     * contained image whose bounds aren't known beforehand finishes loading).
     */notifyResize(){super.notifyResize()}_heightByRowsChanged(value,oldValue){if(value||oldValue){this.notifyResize()}}__forceReflow(){this._debouncerForceReflow=_myApp.Debouncer.debounce(this._debouncerForceReflow,_myApp.animationFrame,()=>{this.$.scroller.style.overflow="hidden";setTimeout(()=>this.$.scroller.style.overflow="")})}}_exports.GridElement=GridElement;customElements.define(GridElement.is,GridElement);var vaadinGrid={__proto__:null,GridElement:GridElement};_exports.$vaadinGrid=vaadinGrid;const $_documentContainer$4=document.createElement("template");$_documentContainer$4.innerHTML=`<custom-style>
  <style>
    html {
      --lumo-size-xs: 1.625rem;
      --lumo-size-s: 1.875rem;
      --lumo-size-m: 2.25rem;
      --lumo-size-l: 2.75rem;
      --lumo-size-xl: 3.5rem;

      /* Icons */
      --lumo-icon-size-s: 1.25em;
      --lumo-icon-size-m: 1.5em;
      --lumo-icon-size-l: 2.25em;
      /* For backwards compatibility */
      --lumo-icon-size: var(--lumo-icon-size-m);
    }
  </style>
</custom-style>`;document.head.appendChild($_documentContainer$4.content);const $_documentContainer$5=document.createElement("template");$_documentContainer$5.innerHTML=`<custom-style>
  <style>
    html {
      /* Square */
      --lumo-space-xs: 0.25rem;
      --lumo-space-s: 0.5rem;
      --lumo-space-m: 1rem;
      --lumo-space-l: 1.5rem;
      --lumo-space-xl: 2.5rem;

      /* Wide */
      --lumo-space-wide-xs: calc(var(--lumo-space-xs) / 2) var(--lumo-space-xs);
      --lumo-space-wide-s: calc(var(--lumo-space-s) / 2) var(--lumo-space-s);
      --lumo-space-wide-m: calc(var(--lumo-space-m) / 2) var(--lumo-space-m);
      --lumo-space-wide-l: calc(var(--lumo-space-l) / 2) var(--lumo-space-l);
      --lumo-space-wide-xl: calc(var(--lumo-space-xl) / 2) var(--lumo-space-xl);

      /* Tall */
      --lumo-space-tall-xs: var(--lumo-space-xs) calc(var(--lumo-space-xs) / 2);
      --lumo-space-tall-s: var(--lumo-space-s) calc(var(--lumo-space-s) / 2);
      --lumo-space-tall-m: var(--lumo-space-m) calc(var(--lumo-space-m) / 2);
      --lumo-space-tall-l: var(--lumo-space-l) calc(var(--lumo-space-l) / 2);
      --lumo-space-tall-xl: var(--lumo-space-xl) calc(var(--lumo-space-xl) / 2);
    }
  </style>
</custom-style>`;document.head.appendChild($_documentContainer$5.content);const $_documentContainer$6=document.createElement("template");$_documentContainer$6.innerHTML=`<custom-style>
  <style>
    html {
      /* Font families */
      --lumo-font-family: -apple-system, BlinkMacSystemFont, "Roboto", "Segoe UI", Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";

      /* Font sizes */
      --lumo-font-size-xxs: .75rem;
      --lumo-font-size-xs: .8125rem;
      --lumo-font-size-s: .875rem;
      --lumo-font-size-m: 1rem;
      --lumo-font-size-l: 1.125rem;
      --lumo-font-size-xl: 1.375rem;
      --lumo-font-size-xxl: 1.75rem;
      --lumo-font-size-xxxl: 2.5rem;

      /* Line heights */
      --lumo-line-height-xs: 1.25;
      --lumo-line-height-s: 1.375;
      --lumo-line-height-m: 1.625;
    }

  </style>
</custom-style><dom-module id="lumo-typography">
  <template>
    <style>
      html {
        font-family: var(--lumo-font-family);
        font-size: var(--lumo-font-size, var(--lumo-font-size-m));
        line-height: var(--lumo-line-height-m);
        -webkit-text-size-adjust: 100%;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
      }

      /* Can’t combine with the above selector because that doesn’t work in browsers without native shadow dom */
      :host {
        font-family: var(--lumo-font-family);
        font-size: var(--lumo-font-size, var(--lumo-font-size-m));
        line-height: var(--lumo-line-height-m);
        -webkit-text-size-adjust: 100%;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
      }

      small,
      [theme~="font-size-s"] {
        font-size: var(--lumo-font-size-s);
        line-height: var(--lumo-line-height-s);
      }

      [theme~="font-size-xs"] {
        font-size: var(--lumo-font-size-xs);
        line-height: var(--lumo-line-height-xs);
      }

      h1,
      h2,
      h3,
      h4,
      h5,
      h6 {
        font-weight: 600;
        line-height: var(--lumo-line-height-xs);
        margin-top: 1.25em;
      }

      h1 {
        font-size: var(--lumo-font-size-xxxl);
        margin-bottom: 0.75em;
      }

      h2 {
        font-size: var(--lumo-font-size-xxl);
        margin-bottom: 0.5em;
      }

      h3 {
        font-size: var(--lumo-font-size-xl);
        margin-bottom: 0.5em;
      }

      h4 {
        font-size: var(--lumo-font-size-l);
        margin-bottom: 0.5em;
      }

      h5 {
        font-size: var(--lumo-font-size-m);
        margin-bottom: 0.25em;
      }

      h6 {
        font-size: var(--lumo-font-size-xs);
        margin-bottom: 0;
        text-transform: uppercase;
        letter-spacing: 0.03em;
      }

      p,
      blockquote {
        margin-top: 0.5em;
        margin-bottom: 0.75em;
      }

      a {
        text-decoration: none;
      }

      a:hover {
        text-decoration: underline;
      }

      hr {
        display: block;
        align-self: stretch;
        height: 1px;
        border: 0;
        padding: 0;
        margin: var(--lumo-space-s) calc(var(--lumo-border-radius-m) / 2);
        background-color: var(--lumo-contrast-10pct);
      }

      blockquote {
        border-left: 2px solid var(--lumo-contrast-30pct);
      }

      b,
      strong {
        font-weight: 600;
      }

      /* RTL specific styles */

      blockquote[dir="rtl"] {
        border-left: none;
        border-right: 2px solid var(--lumo-contrast-30pct);
      }

    </style>
  </template>
</dom-module>`;document.head.appendChild($_documentContainer$6.content);const $_documentContainer$7=document.createElement("template");$_documentContainer$7.innerHTML=`<dom-module id="lumo-required-field">
  <template>
    <style>
      [part="label"] {
        align-self: flex-start;
        color: var(--lumo-secondary-text-color);
        font-weight: 500;
        font-size: var(--lumo-font-size-s);
        margin-left: calc(var(--lumo-border-radius-m) / 4);
        transition: color 0.2s;
        line-height: 1;
        padding-bottom: 0.5em;
        overflow: hidden;
        white-space: nowrap;
        text-overflow: ellipsis;
        position: relative;
        max-width: 100%;
        box-sizing: border-box;
      }

      :host([has-label])::before {
        margin-top: calc(var(--lumo-font-size-s) * 1.5);
      }

      :host([has-label]) {
        padding-top: var(--lumo-space-m);
      }

      :host([required]) [part="label"] {
        padding-right: 1em;
      }

      [part="label"]::after {
        content: var(--lumo-required-field-indicator, "•");
        transition: opacity 0.2s;
        opacity: 0;
        color: var(--lumo-primary-text-color);
        position: absolute;
        right: 0;
        width: 1em;
        text-align: center;
      }

      :host([required]:not([has-value])) [part="label"]::after {
        opacity: 1;
      }

      :host([invalid]) [part="label"]::after {
        color: var(--lumo-error-text-color);
      }

      [part="error-message"] {
        margin-left: calc(var(--lumo-border-radius-m) / 4);
        font-size: var(--lumo-font-size-xs);
        line-height: var(--lumo-line-height-xs);
        color: var(--lumo-error-text-color);
        will-change: max-height;
        transition: 0.4s max-height;
        max-height: 5em;
      }

      /* Margin that doesn’t reserve space when there’s no error message */
      [part="error-message"]:not(:empty)::before,
      [part="error-message"]:not(:empty)::after {
        content: "";
        display: block;
        height: 0.4em;
      }

      :host(:not([invalid])) [part="error-message"] {
        max-height: 0;
        overflow: hidden;
      }

      /* RTL specific styles */

      :host([dir="rtl"]) [part="label"] {
        margin-left: 0;
        margin-right: calc(var(--lumo-border-radius-m) / 4);
      }

      :host([required][dir="rtl"]) [part="label"] {
        padding-left: 1em;
        padding-right: 0;
      }

      :host([dir="rtl"]) [part="label"]::after {
        right: auto;
        left: 0;
      }

      :host([dir="rtl"]) [part="error-message"] {
        margin-left: 0;
        margin-right: calc(var(--lumo-border-radius-m) / 4);
      }

    </style>
  </template>
</dom-module>`;document.head.appendChild($_documentContainer$7.content);const $_documentContainer$8=document.createElement("template");$_documentContainer$8.innerHTML=`<custom-style>
  <style>
    @font-face {
      font-family: 'lumo-icons';
      src: url(data:application/font-woff;charset=utf-8;base64,d09GRgABAAAAABEgAAsAAAAAIiwAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAABHU1VCAAABCAAAADsAAABUIIslek9TLzIAAAFEAAAAQwAAAFZAIUuKY21hcAAAAYgAAAD4AAADrsCU8d5nbHlmAAACgAAAC2MAABd4h9To2WhlYWQAAA3kAAAAMQAAADYSnCkuaGhlYQAADhgAAAAdAAAAJAbpA35obXR4AAAOOAAAABAAAACspBAAAGxvY2EAAA5IAAAAWAAAAFh55IAsbWF4cAAADqAAAAAfAAAAIAFKAXBuYW1lAAAOwAAAATEAAAIuUUJZCHBvc3QAAA/0AAABKwAAAelm8SzVeJxjYGRgYOBiMGCwY2BycfMJYeDLSSzJY5BiYGGAAJA8MpsxJzM9kYEDxgPKsYBpDiBmg4gCACY7BUgAeJxjYGS+yDiBgZWBgamKaQ8DA0MPhGZ8wGDIyAQUZWBlZsAKAtJcUxgcXjG+0mIO+p/FEMUcxDANKMwIkgMABn8MLQB4nO3SWW6DMABF0UtwCEnIPM/zhLK8LqhfXRybSP14XUYtHV9hGYQwQBNIo3cUIPkhQeM7rib1ekqnXg981XuC1qvy84lzojleh3puxL0hPjGjRU473teloEefAUNGjJkwZcacBUtWrNmwZceeA0dOnLlw5cadB09elPGhGf+j0NTI/65KfXerT6JhqKnpRKtgOpuqaTrtKjPUlqHmhto21I7pL6i6hlqY3q7qGWrfUAeGOjTUkaGODXViqFNDnRnq3FAXhro01JWhrg11Y6hbQ90Z6t5QD4Z6NNSToZ4N9WKoV0O9GerdUB+G+jTUl6GWRvkL24BkEXictVh9bFvVFb/nxvbz+7Rf/N6zHcd2bCfP+Wgc1Z9N0jpNnEL6kbRVS6HA2hQYGh9TGR1CbCqa2rXrWOkQE/sHNJgmtZvoVNZqE1B1DNHxzTQxCehUTYiJTQyENui0qSLezr3PduyQfgmRWOfde8+9551z7rnn/O4jLoJ/bRP0UaKQMLFJjpBAvphLZC3Dk0ok7WBzR2/upJs7Ryw/nfFbln/uuN/apCvwrKLrSvUqRufbm5pn0fs0w4gYxnGVP6qHnO4bWiDQGQgwtS6lm3lB3QoX1M2vwEmuzirF39y+Es2+DJ8d1pkyqBIqoze3D1+Zz4DrFoazxI8dWwMrDlZ2DMqQAR9AROsJU+2cmlTPazTco52F1xTa2a2+K8vvq92dVHmtLoPeQX/AZPRYGthDYOeZjBjKoFsVGulR3lWU95WeCK44qHU7MhWUGUKZDT3oKUcG2GWuh+EDDfUYA/jhAhl0TOsJNYSEu7mQmi3UzfXwZKA4BsVsHLXQYGgRW95uEtpJ1Vfn9XiLriRBlFEqxsDjA09yCNUoQxxwd7KWSTt2y3GTKiflqHRSoWZc3m11Wa/fJdFgXD4sSYfleJBKd8GMz7J8dZn/cGRCcKGDnA2Ge3fKzcvlnTDNthGWLXzX/WaXtUAmRgeLlHSr30r0G9UTXMb0AtmwzOoy73fkSlHZkduw/TYuU9cAD4YutPoxTTsA3797wVr4Z/1NC5zARHr4vtxJjxIfiZMhMkbWk+14BnJZKwqGZwDfswLyxWDSg11rFLJF7Nopxjd1h1/QOT+oezgfu3Yq+Hk+duf5x+40o1GTkaIgikK/IEnC6aYxCUBaZJSN4XTYFjU/YMNIKqJwhDGOCCI8FDXnXmXjtGhGJyShqjAOnBOkW2JG9S7GgYeMWAU5JzhnWmBOaOM+CKEPoqSfFDC2Unq+DLlUgUVUFFLZGJg6jtlojsdsa8kPObPuJdi5dnBdBsLJMGTWDa4t2JvtwuPo9s+Y86suv/W33QG1rAaOAUV+vx4K6f2D04PVKlC7WLSrZzAi45ZV6lIC7WoXqmRyvUqoVwrzUoVsIjeTXWQv+RH5GTlBXiB/In8ln0IbBCAFOajAJrgZYyOHWqOfUe/aHjI12R6OQo1jCgt215l+4f6XPb+0MNou0V+43n2F77tSfRb24d7zitgnKmvYHs69zugaPvBwv6ioXkb2LdL65Atw51uLkXlu1bhMMRcXSPcYoqKIRlh34lQP8/5JbuUFye4vxD6/6MxFF11C0uVLr9Ulgw44tS3pMViNLUExbycFgLIct+QDMibRimx1ydUz8FXZiuOIDBOMVX2nUZc+huNE5XUJ81uiJoiabwqaVF0uacKbau/pl4R2VW0XXlJra6boVrYG646TF5NYzwy4vjENVrDlcNpZPl8DH6XX8XWCx0mvWVZY6KFLrvsY66/zPict5FnxaNUR/juvZCM3TvD60E2W1tZizbXTPDuabcm0nbbzpWKpmA1ayBQ8giedLUM+A0kNjBjQjmuYz7YrgIXYvmF63ZLBwSXrpn9Tb9wwdd/U1H0PMQK3XcO8ul3WT7PyPPdpy0TemKxNRcJNauiXJnnUDpUppQWs4SnUIy0EESGYqJYQLGHxzaGWwVIaS6Y7mQFM8ZjYDQ3axjf61SWjU33JwOZA1pwaG1L9mzf71aHRdX1JHw6Fp0aXhNwbqyeGNg4NbdzGCBxoz4ZXjy4Nu69Zr6sDY6vMrLU5nA1P8JkbdWXJ6ERfMryvNh1JfQ9+T4dIhGvK9w3dxjBBzatsQ/MlOHVIDnYpDz6odAXlQ01t2Pa5Iafd8MMpxAeDKP0C6CjgVLT5osB6icUx01lWjXxzT/GyRF2welEM5Z/7jG3VjQ1SrNn5IbyzOG5dobB3/QHxyZvsXcoz8IoEwS7plCg+zxHQk424q9BfEpkESJbFHQusDBSWFkuBkoPO0kLKwRVYjxGXlHTcTDQMJ/H6TX9afkO7mnraTO1feTnZAXLu4cp7HAXMmNG1yeFk9TgS/NHhZR/4QoBTr/ZB+6hCgyl15Nq1UbN6nE1/ZnP1U2cizCBpvs8cJQZJ4LkYx5N/yZPAUZNQQ0V4f3BQllWrK3YRzl30dOT6RVn2upNur6woSa8CqpdT/aKnBM4o3jNur9d9xqtUT6veBEt9Ca9at+ERzEEhUkR8sa5mQ4aVvJoVeEA8zI4ei5mULXFGyU7z/6TAeYLVcpzSWZY8PYYF5yrTV60sT0+XV141vX++Wf16V2bFeGVPZXxFpkvyeKTWLlzfW0mnKxsY6Y3294/0998SCfX1blm5pbcvFGlq/r07MRAMhYIDiW5JFKWW3vdrEpCsZSJG+om7Zu/PSScZJhNkLbmW5Wsr12pWqW5zKtlwRS4bFOxUw17mCzy6lskCDl1WYOGWDYrADrMA7BDDweWWNd5koiJnR1dz+ytLP2q0SqPB1lnK2ccB7RYe4FSoPks3iB3t4txTSHctb2sy1ivk0pvHuCNm6w1f6wxv3+OCgN78LqdQnUVh7R0oTAp0zOf2rbW770Vu5C2dIyGdTnHo8zSji7dppj0USoVCz+lhRMTh53Teq9VbGfbjuSbAooSdXayY4PYHg374C6f7gl1B/DXuJ4/QXxOBdJFJspFsI3egpoWUUCjlTIFnNYNl+ZyZKmBeYKGHkD1QyDlhaKbKwKcIJqJ4TLJ2OmdY/JWXae4DdGBw8HZ7eXcgFF2zr2SoalDry5iKqoa0Puhe3hPQ2s3elTYM+MI+n3rK0KgL7/La3GeMLt6m7u912vGnvtORiIa0qBmhqVi+XW9XNBmqb8eVgKzIHfGI5bNoG7X0UCzeISmqIcO/nY8FH7U8avX9fx/ST+hx0sezPw9Qy8Mum3GWf2N4Uy/yIYGVBXbJHWIZp7dfTcptdMTr9Qmq7DaiK/ukqCL4kt4RUfS5XPnMtmT22/mQFqF7emSqtrlu8SVElxDRJrZODkpuwe0VfTfjdEp1f7A7v+fozNBXUJ/6WTuK2TtFlpFVZAZ3LcFvUi1Z2p2YT+EMAkGJVStOzLTAPg4IqWIAlzRSjOBkl2zxj3TKycpzT/MnvX3uaSMWM+gU0rkXjohhefVRMaps3/kLMSKv23lT23uxQrkQjyOJleMDsdhAnD6ZGElWZ5MjCXzCE/hkWX+WF4knzGhVOyK2eQZekV3eyo0zL8kuYWCnDCvjjhAkcTPOBDXVdoav3HVcFnQjLvtV9S2p0zA6JegPwMQxt+yFb3ll9zGlq/5dRKb3cEyQYoaNYpharJ7xCB7AWxsLY3jjZXY0XsZj0Wjwc9I6PP/dKABnCZaqHpaZEACxk4ZeLZSKNgZABl+lYQX1sJQOSX3n6r410evcoud5JeAGUXVP9H1tZOKejTq4Ono0z0erro1FrnOpohva1d/hTdtVsQdKN5W9RlT3NjD0nznyKNTgKAMfWNWcyodV0IGLPIHOF0o4JyqufaK4z6WIIzuGh3d8c8cwQg8ER+OVxyrjdm8vNuhts4LoOihGxIMuUdgzwiYN7xhh1+oZnJNuTG7gQZvu4XWZ9GAZZjGEubwePqYhtKDTH+9VQkl17/iGybsnJ+8+sKtyPrcll9ty65Zsdst/9iqpEKh7M5VdBxh3csOdNc6tW3I1uyM1PzOXegSOrLFsFNI2O27M+TF2ApnN9MUv5ud6LjxIvEQnHRzxIu4IsA9MLFkJn2tcZoZ7ON7dXe7ujrc8HrusPKamlqXwd77lQUuLpilau4PUMapueBb7irU4RoUXEYXuVuIGlRGmOp+2lNkaRPVziOqmlaZvaqG4dFgSj0jxEJWrv12IUWntmw+rfQarRE0Aph4ocI6nlUlGqs+u3/+T/ethW62PpHp2eHbZstnh/wOO95yDAHicY2BkYGAAYi2NOJ94fpuvDNzML4AiDNc/fzqEoP+/Zp7KdAvI5WBgAokCAGkcDfgAAAB4nGNgZGBgDvqfBSRfMAAB81QGRgZUoA0AVvYDbwAAAHicY2BgYGB+MTQwAM8EJo8AAAAAAE4AmgDoAQoBLAFOAXABmgHEAe4CGgKcAugEmgS8BNYE8gUOBSoFegXQBf4GRAZmBrYHGAeQCBgIUghqCP4JRgm+CdoKBAo8CoIKuArwC1ALlgu8eJxjYGRgYNBmTGEQZQABJiDmAkIGhv9gPgMAGJQBvAB4nG2RPU7DMBiG3/QP0UoIBGJh8QILavozdmRo9w7d09RpUzlx5LgVvQMn4BAcgoEzcAgOwVvzSZVQbcnf48fvFysJgGt8IcJxROiG9TgauODuj5ukG+EW+UG4jR4ehTv0Q+EunjER7uEWmk+IWpc0d3gVbuAKb8JN+nfhFvlDuI17fAp36L+Fu1jgR7iHp+jF7Arbz1Nb1nO93pnEncSJFtrVuS3VKB6e5EyX2iVer9TyoOr9eux9pjJnCzW1pdfGWFU5u9WpjzfeV5PBIBMfp7aAwQ4FLPrIkbKWqDHn+67pDRK4s4lzbsEux5qHvcIIMb/nueSMyTKkE3jWFdNLHLjW2PPmMa1Hxn3GjGW/wjT0HtOG09JU4WxLk9LH2ISuiv9twJn9y8fh9uIXI+BknAAAAHicbY7ZboMwEEW5CVBCSLrv+76kfJRjTwHFsdGAG+Xvy5JUfehIHp0rnxmNN/D6ir3/a4YBhvARIMQOIowQY4wEE0yxiz3s4wCHOMIxTnCKM5zjApe4wjVucIs73OMBj3jCM17wije84wMzfHqJ0EVmUkmmJo77oOmrHvfIRZbXsTCZplTZldlgb3TYGVHProwFs11t1A57tcON2rErR3PBqcwF1/6ctI6k0GSU4JHMSS6WghdJQ99sTbfuN7QLJ9vQ37dNrgyktnIxlDYLJNuqitpRbYWKFNuyDT6pog6oOYKHtKakeakqKjHXpPwlGRcsC+OqxLIiJpXqoqqDMreG2l5bv9Ri3TRX+c23DZna9WFFgmXuO6Ps1Jm/w6ErW8N3FbHn/QC444j0AA==) format('woff');
      font-weight: normal;
      font-style: normal;
    }

    html {
      --lumo-icons-align-center: "\\ea01";
      --lumo-icons-align-left: "\\ea02";
      --lumo-icons-align-right: "\\ea03";
      --lumo-icons-angle-down: "\\ea04";
      --lumo-icons-angle-left: "\\ea05";
      --lumo-icons-angle-right: "\\ea06";
      --lumo-icons-angle-up: "\\ea07";
      --lumo-icons-arrow-down: "\\ea08";
      --lumo-icons-arrow-left: "\\ea09";
      --lumo-icons-arrow-right: "\\ea0a";
      --lumo-icons-arrow-up: "\\ea0b";
      --lumo-icons-bar-chart: "\\ea0c";
      --lumo-icons-bell: "\\ea0d";
      --lumo-icons-calendar: "\\ea0e";
      --lumo-icons-checkmark: "\\ea0f";
      --lumo-icons-chevron-down: "\\ea10";
      --lumo-icons-chevron-left: "\\ea11";
      --lumo-icons-chevron-right: "\\ea12";
      --lumo-icons-chevron-up: "\\ea13";
      --lumo-icons-clock: "\\ea14";
      --lumo-icons-cog: "\\ea15";
      --lumo-icons-cross: "\\ea16";
      --lumo-icons-download: "\\ea17";
      --lumo-icons-dropdown: "\\ea18";
      --lumo-icons-edit: "\\ea19";
      --lumo-icons-error: "\\ea1a";
      --lumo-icons-eye: "\\ea1b";
      --lumo-icons-eye-disabled: "\\ea1c";
      --lumo-icons-menu: "\\ea1d";
      --lumo-icons-minus: "\\ea1e";
      --lumo-icons-ordered-list: "\\ea1f";
      --lumo-icons-phone: "\\ea20";
      --lumo-icons-photo: "\\ea21";
      --lumo-icons-play: "\\ea22";
      --lumo-icons-plus: "\\ea23";
      --lumo-icons-redo: "\\ea24";
      --lumo-icons-reload: "\\ea25";
      --lumo-icons-search: "\\ea26";
      --lumo-icons-undo: "\\ea27";
      --lumo-icons-unordered-list: "\\ea28";
      --lumo-icons-upload: "\\ea29";
      --lumo-icons-user: "\\ea2a";
    }
  </style>
</custom-style>`;document.head.appendChild($_documentContainer$8.content);/* NOTICE: Generated with 'gulp icons' */ /*
                                                                                                    FIXME(polymer-modulizer): the above comments were extracted
                                                                                                    from HTML and may be out of place here. Review them and
                                                                                                    then delete this comment!
                                                                                                    */;const $_documentContainer$9=document.createElement("template");$_documentContainer$9.innerHTML=`<dom-module id="lumo-field-button">
  <template>
    <style>
      [part\$="button"] {
        flex: none;
        width: 1em;
        height: 1em;
        line-height: 1;
        font-size: var(--lumo-icon-size-m);
        text-align: center;
        color: var(--lumo-contrast-60pct);
        transition: 0.2s color;
        cursor: var(--lumo-clickable-cursor);
      }

      :host(:not([readonly])) [part\$="button"]:hover {
        color: var(--lumo-contrast-90pct);
      }

      :host([disabled]) [part\$="button"],
      :host([readonly]) [part\$="button"] {
        color: var(--lumo-contrast-20pct);
      }

      [part\$="button"]::before {
        font-family: "lumo-icons";
        display: block;
      }
    </style>
  </template>
</dom-module>`;document.head.appendChild($_documentContainer$9.content);const $_documentContainer$a=(0,_myApp.html$1)`<dom-module id="lumo-text-field" theme-for="vaadin-text-field">
  <template>
    <style include="lumo-required-field lumo-field-button">
      :host {
        --lumo-text-field-size: var(--lumo-size-m);
        color: var(--lumo-body-text-color);
        font-size: var(--lumo-font-size-m);
        font-family: var(--lumo-font-family);
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        -webkit-tap-highlight-color: transparent;
        padding: var(--lumo-space-xs) 0;
      }

      :host::before {
        height: var(--lumo-text-field-size);
        box-sizing: border-box;
        display: inline-flex;
        align-items: center;
      }

      :host([focused]:not([readonly])) [part="label"] {
        color: var(--lumo-primary-text-color);
      }

      [part="value"],
      [part="input-field"] ::slotted(input),
      [part="input-field"] ::slotted(textarea),
      /* Slotted by vaadin-select-text-field */
      [part="input-field"] ::slotted([part="value"]) {
        cursor: inherit;
        min-height: var(--lumo-text-field-size);
        padding: 0 0.25em;
        --_lumo-text-field-overflow-mask-image: linear-gradient(to left, transparent, #000 1.25em);
        -webkit-mask-image: var(--_lumo-text-field-overflow-mask-image);
      }

      [part="value"]:focus,
      :host([focused]) [part="input-field"] ::slotted(input),
      :host([focused]) [part="input-field"] ::slotted(textarea) {
        -webkit-mask-image: none;
        mask-image: none;
      }

      /*
        TODO: CSS custom property in \`mask-image\` causes crash in Edge
        see https://developer.microsoft.com/en-us/microsoft-edge/platform/issues/15415089/
      */
      @-moz-document url-prefix() {
        [part="value"],
        [part="input-field"] ::slotted(input),
        [part="input-field"] ::slotted(textarea),
        [part="input-field"] ::slotted([part="value"]) {
          mask-image: var(--_lumo-text-field-overflow-mask-image);
        }
      }

      [part="value"]::-webkit-input-placeholder {
        color: inherit;
        transition: opacity 0.175s 0.05s;
        opacity: 0.5;
      }

      [part="value"]:-ms-input-placeholder {
        color: inherit;
        opacity: 0.5;
      }

      [part="value"]::-moz-placeholder {
        color: inherit;
        transition: opacity 0.175s 0.05s;
        opacity: 0.5;
      }

      [part="value"]::placeholder {
        color: inherit;
        transition: opacity 0.175s 0.1s;
        opacity: 0.5;
      }

      [part="input-field"] {
        border-radius: var(--lumo-border-radius);
        background-color: var(--lumo-contrast-10pct);
        padding: 0 calc(0.375em + var(--lumo-border-radius) / 4 - 1px);
        font-weight: 500;
        line-height: 1;
        position: relative;
        cursor: text;
        box-sizing: border-box;
      }

      /* Used for hover and activation effects */
      [part="input-field"]::after {
        content: "";
        position: absolute;
        top: 0;
        right: 0;
        bottom: 0;
        left: 0;
        border-radius: inherit;
        pointer-events: none;
        background-color: var(--lumo-contrast-50pct);
        opacity: 0;
        transition: transform 0.15s, opacity 0.2s;
        transform-origin: 100% 0;
      }

      /* Hover */

      :host(:hover:not([readonly]):not([focused])) [part="label"] {
        color: var(--lumo-body-text-color);
      }

      :host(:hover:not([readonly]):not([focused])) [part="input-field"]::after {
        opacity: 0.1;
      }

      /* Touch device adjustment */
      @media (pointer: coarse) {
        :host(:hover:not([readonly]):not([focused])) [part="label"] {
          color: var(--lumo-secondary-text-color);
        }

        :host(:hover:not([readonly]):not([focused])) [part="input-field"]::after {
          opacity: 0;
        }

        :host(:active:not([readonly]):not([focused])) [part="input-field"]::after {
          opacity: 0.2;
        }
      }

      /* Trigger when not focusing using the keyboard */
      :host([focused]:not([focus-ring]):not([readonly])) [part="input-field"]::after {
        transform: scaleX(0);
        transition-duration: 0.15s, 1s;
      }

      /* Focus-ring */

      :host([focus-ring]) [part="input-field"] {
        box-shadow: 0 0 0 2px var(--lumo-primary-color-50pct);
      }

      /* Read-only and disabled */
      :host([readonly]) [part="value"]::-webkit-input-placeholder,
      :host([disabled]) [part="value"]::-webkit-input-placeholder {
        opacity: 0;
      }

      :host([readonly]) [part="value"]:-ms-input-placeholder,
      :host([disabled]) [part="value"]:-ms-input-placeholder {
        opacity: 0;
      }

      :host([readonly]) [part="value"]::-moz-placeholder,
      :host([disabled]) [part="value"]::-moz-placeholder {
        opacity: 0;
      }

      :host([readonly]) [part="value"]::placeholder,
      :host([disabled]) [part="value"]::placeholder {
        opacity: 0;
      }

      /* Read-only */

      :host([readonly]) [part="input-field"] {
        color: var(--lumo-secondary-text-color);
        background-color: transparent;
        cursor: default;
      }

      :host([readonly]) [part="input-field"]::after {
        background-color: transparent;
        opacity: 1;
        border: 1px dashed var(--lumo-contrast-30pct);
      }

      /* Disabled style */

      :host([disabled]) {
        pointer-events: none;
      }

      :host([disabled]) [part="input-field"] {
        background-color: var(--lumo-contrast-5pct);
      }

      :host([disabled]) [part="label"],
      :host([disabled]) [part="value"],
      :host([disabled]) [part="input-field"] ::slotted(*) {
        color: var(--lumo-disabled-text-color);
        -webkit-text-fill-color: var(--lumo-disabled-text-color);
      }

      /* Invalid style */

      :host([invalid]) [part="input-field"] {
        background-color: var(--lumo-error-color-10pct);
      }

      :host([invalid]) [part="input-field"]::after {
        background-color: var(--lumo-error-color-50pct);
      }

      :host([invalid][focus-ring]) [part="input-field"] {
        box-shadow: 0 0 0 2px var(--lumo-error-color-50pct);
      }

      :host([input-prevented]) [part="input-field"] {
        color: var(--lumo-error-text-color);
      }

      /* Small theme */

      :host([theme~="small"]) {
        font-size: var(--lumo-font-size-s);
        --lumo-text-field-size: var(--lumo-size-s);
      }

      :host([theme~="small"][has-label]) [part="label"] {
        font-size: var(--lumo-font-size-xs);
      }

      :host([theme~="small"][has-label]) [part="error-message"] {
        font-size: var(--lumo-font-size-xxs);
      }

      /* Text align */

      :host([theme~="align-center"]) [part="value"] {
        text-align: center;
        --_lumo-text-field-overflow-mask-image: none;
      }

      :host([theme~="align-right"]) [part="value"] {
        text-align: right;
        --_lumo-text-field-overflow-mask-image: none;
      }

      @-moz-document url-prefix() {
        /* Firefox is smart enough to align overflowing text to right */
        :host([theme~="align-right"]) [part="value"] {
          --_lumo-text-field-overflow-mask-image: linear-gradient(to right, transparent 0.25em, #000 1.5em);
        }
      }

      /* Slotted content */

      [part="input-field"] ::slotted(:not([part]):not(iron-icon):not(input):not(textarea)) {
        color: var(--lumo-secondary-text-color);
        font-weight: 400;
      }

      /* Slotted icons */

      [part="input-field"] ::slotted(iron-icon) {
        color: var(--lumo-contrast-60pct);
        width: var(--lumo-icon-size-m);
        height: var(--lumo-icon-size-m);
      }

      /* Vaadin icons are based on a 16x16 grid (unlike Lumo and Material icons with 24x24), so they look too big by default */
      [part="input-field"] ::slotted(iron-icon[icon^="vaadin:"]) {
        padding: 0.25em;
        box-sizing: border-box !important;
      }

      [part="clear-button"]::before {
        content: var(--lumo-icons-cross);
      }
    </style>
  </template>
</dom-module>`;document.head.appendChild($_documentContainer$a.content);const $_documentContainer$b=(0,_myApp.html$1)`<dom-module id="lumo-grid" theme-for="vaadin-grid">
  <template>
    <style>
      :host {
        font-family: var(--lumo-font-family);
        font-size: var(--lumo-font-size-m);
        line-height: var(--lumo-line-height-s);
        color: var(--lumo-body-text-color);
        background-color: var(--lumo-base-color);
        box-sizing: border-box;
        -webkit-text-size-adjust: 100%;
        -webkit-tap-highlight-color: transparent;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;

        /* For internal use only */
        --_lumo-grid-border-color: var(--lumo-contrast-20pct);
        --_lumo-grid-secondary-border-color: var(--lumo-contrast-10pct);
        --_lumo-grid-border-width: 1px;
        --_lumo-grid-selected-row-color: var(--lumo-primary-color-10pct);
      }

      /* No (outer) border */

      :host(:not([theme~="no-border"])) {
        border: var(--_lumo-grid-border-width) solid var(--_lumo-grid-border-color);
      }

      /* Cell styles */

      [part~="cell"] {
        min-height: var(--lumo-size-m);
        background-color: var(--lumo-base-color);
      }

      [part~="cell"] ::slotted(vaadin-grid-cell-content) {
        cursor: default;
        padding: var(--lumo-space-xs) var(--lumo-space-m);
      }

      /* Apply row borders by default and introduce the "no-row-borders" variant */
      :host(:not([theme~="no-row-borders"])) [part~="cell"]:not([part~="details-cell"]) {
        border-top: var(--_lumo-grid-border-width) solid var(--_lumo-grid-secondary-border-color);
      }

      /* Hide first body row top border */
      :host(:not([theme~="no-row-borders"])) [part="row"][first] [part~="cell"]:not([part~="details-cell"]) {
        border-top: 0;
        min-height: calc(var(--lumo-size-m) - var(--_lumo-grid-border-width));
      }

      /* Focus-ring */

      [part~="cell"]:focus {
        outline: none;
      }

      :host([navigating]) [part~="cell"]:focus::before {
        content: "";
        position: absolute;
        top: 0;
        right: 0;
        bottom: 0;
        left: 0;
        pointer-events: none;
        box-shadow: inset 0 0 0 2px var(--lumo-primary-color-50pct);
      }

      /* Drag and Drop styles */
      :host([dragover])::after {
        content: "";
        position: absolute;
        z-index: 100;
        top: 0;
        right: 0;
        bottom: 0;
        left: 0;
        pointer-events: none;
        box-shadow: inset 0 0 0 2px var(--lumo-primary-color-50pct);
      }

      [part~="row"][dragover] {
        z-index: 100 !important;
      }

      [part~="row"][dragover] [part~="cell"] {
        overflow: visible;
      }

      [part~="row"][dragover] [part~="cell"]::after {
        content: "";
        position: absolute;
        top: 0;
        right: 0;
        bottom: 0;
        left: 0;
        height: calc(var(--_lumo-grid-border-width) + 2px);
        pointer-events: none;
        background: var(--lumo-primary-color-50pct);
      }

      :host([theme~="no-row-borders"]) [dragover] [part~="cell"]::after {
        height: 2px;
      }

      [part~="row"][dragover="below"] [part~="cell"]::after {
        top: 100%;
        bottom: auto;
        margin-top: -1px;
      }

      [part~="row"][dragover="above"] [part~="cell"]::after {
        top: auto;
        bottom: 100%;
        margin-bottom: -1px;
      }

      [part~="row"][details-opened][dragover="below"] [part~="cell"]:not([part~="details-cell"])::after,
      [part~="row"][details-opened][dragover="above"] [part~="details-cell"]::after {
        display: none;
      }

      [part~="row"][dragover][dragover="on-top"] [part~="cell"]::after {
        height: 100%;
      }

      [part~="row"][dragstart] {
        /* Add bottom-space to the row so the drag number doesn't get clipped. Needed for IE/Edge */
        border-bottom: 100px solid transparent;
        z-index: 100 !important;
        opacity: 0.9;
      }

      [part~="row"][dragstart] [part~="cell"] {
        border: none !important;
        box-shadow: none !important;
      }

      [part~="row"][dragstart] [part~="cell"][last-column] {
        border-radius: 0 var(--lumo-border-radius-s) var(--lumo-border-radius-s) 0;
      }

      [part~="row"][dragstart] [part~="cell"][first-column] {
        border-radius: var(--lumo-border-radius-s) 0 0 var(--lumo-border-radius-s);
      }

      [ios] [part~="row"][dragstart] [part~="cell"] {
        background: var(--lumo-primary-color-50pct);
      }

      #scroller:not([ios]) [part~="row"][dragstart]:not([dragstart=""])::after {
        display: block;
        position: absolute;
        left: var(--_grid-drag-start-x);
        top: var(--_grid-drag-start-y);
        z-index: 100;
        content: attr(dragstart);
        align-items: center;
        justify-content: center;
        box-sizing: border-box;
        padding: calc(var(--lumo-space-xs) * 0.8);
        color: var(--lumo-error-contrast-color);
        background-color: var(--lumo-error-color);
        border-radius: var(--lumo-border-radius-m);
        font-family: var(--lumo-font-family);
        font-size: var(--lumo-font-size-xxs);
        line-height: 1;
        font-weight: 500;
        text-transform: initial;
        letter-spacing: initial;
        min-width: calc(var(--lumo-size-s) * 0.7);
        text-align: center;
      }

      /* Headers and footers */

      [part~="header-cell"] ::slotted(vaadin-grid-cell-content),
      [part~="footer-cell"] ::slotted(vaadin-grid-cell-content),
      [part~="reorder-ghost"] {
        font-size: var(--lumo-font-size-s);
        font-weight: 500;
      }

      [part~="footer-cell"] ::slotted(vaadin-grid-cell-content) {
        font-weight: 400;
      }

      [part="row"]:only-child [part~="header-cell"] {
        min-height: var(--lumo-size-xl);
      }

      /* Header borders */

      /* Hide first header row top border */
      :host(:not([theme~="no-row-borders"])) [part="row"]:first-child [part~="header-cell"] {
        border-top: 0;
      }

      [part="row"]:last-child [part~="header-cell"] {
        border-bottom: var(--_lumo-grid-border-width) solid transparent;
      }

      :host(:not([theme~="no-row-borders"])) [part="row"]:last-child [part~="header-cell"] {
        border-bottom-color: var(--_lumo-grid-secondary-border-color);
      }

      /* Overflow uses a stronger border color */
      :host([overflow~="top"]) [part="row"]:last-child [part~="header-cell"] {
        border-bottom-color: var(--_lumo-grid-border-color);
      }

      /* Footer borders */

      [part="row"]:first-child [part~="footer-cell"] {
        border-top: var(--_lumo-grid-border-width) solid transparent;
      }

      :host(:not([theme~="no-row-borders"])) [part="row"]:first-child [part~="footer-cell"] {
        border-top-color: var(--_lumo-grid-secondary-border-color);
      }

      /* Overflow uses a stronger border color */
      :host([overflow~="bottom"]) [part="row"]:first-child [part~="footer-cell"] {
        border-top-color: var(--_lumo-grid-border-color);
      }

      /* Column reordering */

      :host([reordering]) [part~="cell"] {
        background: linear-gradient(var(--lumo-shade-20pct), var(--lumo-shade-20pct)) var(--lumo-base-color);
      }

      :host([reordering]) [part~="cell"][reorder-status="allowed"] {
        background: var(--lumo-base-color);
      }

      :host([reordering]) [part~="cell"][reorder-status="dragging"] {
        background: linear-gradient(var(--lumo-contrast-5pct), var(--lumo-contrast-5pct)) var(--lumo-base-color);
      }

      [part~="reorder-ghost"] {
        opacity: 0.85;
        box-shadow: var(--lumo-box-shadow-s);
        /* TODO Use the same styles as for the cell element (reorder-ghost copies styles from the cell element) */
        padding: var(--lumo-space-s) var(--lumo-space-m) !important;
      }

      /* Column resizing */

      [part="resize-handle"] {
        width: 3px;
        background-color: var(--lumo-primary-color-50pct);
        opacity: 0;
        transition: opacity 0.2s;
      }

      :host(:not([reordering])) *:not([column-resizing]) [part~="cell"]:hover [part="resize-handle"],
      [part="resize-handle"]:active {
        opacity: 1;
        transition-delay: 0.15s;
      }

      /* Column borders */

      :host([theme~="column-borders"]) [part~="cell"]:not([last-column]):not([part~="details-cell"]) {
        border-right: var(--_lumo-grid-border-width) solid var(--_lumo-grid-secondary-border-color);
      }

      /* Frozen columns */

      [last-frozen] {
        border-right: var(--_lumo-grid-border-width) solid transparent;
        overflow: hidden;
      }

      :host([overflow~="left"]) [part~="cell"][last-frozen]:not([part~="details-cell"]) {
        border-right-color: var(--_lumo-grid-border-color);
      }

      /* Row stripes */

      :host([theme~="row-stripes"]) [part~="row"]:not([odd]) [part~="body-cell"],
      :host([theme~="row-stripes"]) [part~="row"]:not([odd]) [part~="details-cell"] {
        background-image: linear-gradient(var(--lumo-contrast-5pct), var(--lumo-contrast-5pct));
        background-repeat: repeat-x;
      }

      /* Selected row */

      /* Raise the selected rows above unselected rows (so that box-shadow can cover unselected rows) */
      :host(:not([reordering])) [part~="row"][selected] {
        z-index: 1;
      }

      :host(:not([reordering])) [part~="row"][selected] [part~="body-cell"]:not([part~="details-cell"]) {
        background-image: linear-gradient(var(--_lumo-grid-selected-row-color), var(--_lumo-grid-selected-row-color));
        background-repeat: repeat;
      }

      /* Cover the border of an unselected row */
      :host(:not([theme~="no-row-borders"])) [part~="row"][selected] [part~="cell"]:not([part~="details-cell"]) {
        box-shadow: 0 var(--_lumo-grid-border-width) 0 0 var(--_lumo-grid-selected-row-color);
      }

      /* Compact */

      :host([theme~="compact"]) [part="row"]:only-child [part~="header-cell"] {
        min-height: var(--lumo-size-m);
      }

      :host([theme~="compact"]) [part~="cell"] {
        min-height: var(--lumo-size-s);
      }

      :host([theme~="compact"]) [part="row"][first] [part~="cell"]:not([part~="details-cell"]) {
        min-height: calc(var(--lumo-size-s) - var(--_lumo-grid-border-width));
      }

      :host([theme~="compact"]) [part~="cell"] ::slotted(vaadin-grid-cell-content) {
        padding: var(--lumo-space-xs) var(--lumo-space-s);
      }

      /* Wrap cell contents */

      :host([theme~="wrap-cell-content"]) [part~="cell"] ::slotted(vaadin-grid-cell-content) {
        white-space: normal;
      }
    </style>
  </template>
</dom-module><dom-module theme-for="vaadin-checkbox" id="vaadin-grid-select-all-checkbox-lumo">
  <template>
    <style>
      :host(.vaadin-grid-select-all-checkbox) {
        font-size: var(--lumo-font-size-m);
      }
   </style>
  </template>
</dom-module>`;document.head.appendChild($_documentContainer$b.content);class MyView1 extends _myApp.PolymerElement{static get template(){return(0,_myApp.html)`
      <style include="shared-styles">
        :host {
          display: block;

          padding: 10px;
        }
      </style>

      <div class="card">
        <vaadin-grid aria-label="Filtering with Data Provider Example">
          <vaadin-grid-filter-column path="task_status"></vaadin-grid-filter-column>
          <vaadin-grid-column path="task_id"></vaadin-grid-column>
        </vaadin-grid>
      </div>
      
    <script>
      customElements.whenDefined('vaadin-grid').then(function() {
        const grid = document.querySelector('vaadin-grid');
    
        grid.size = 200;
        grid.dataProvider = function(params, callback) {
          const xhr = new XMLHttpRequest();
          xhr.onload = function() {
            const response = JSON.parse(xhr.responseText);
    
            // Number of items changes after filtering. We need
            // to update the grid size based on server response.
            grid.size = response.size;
    
            callback(response.result);
          };
    
          const index = params.page * params.pageSize;
          let url = 'http://gommu/api/recon/task/d18530a2-245b-4191-b74e-a61892972948/' + index + '&count=' + params.pageSize;
    
          // params.filters format: [{path: 'lastName', direction: 'asc'}, ...];
          params.filters.forEach(function(filter) {
            url += '&filters[' + filter.path + ']=' + encodeURIComponent(filter.value);
          });
    
          xhr.open('GET', url, true);
          xhr.send();
        };
      });
    </script>
    `}}window.customElements.define("my-view1",MyView1);window.customElements.define("vaadin-grid",MyView1)});