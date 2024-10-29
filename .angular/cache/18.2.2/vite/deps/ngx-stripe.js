import {
  CommonModule,
  NgTemplateOutlet,
  isPlatformBrowser,
  isPlatformServer
} from "./chunk-DF5PLQYK.js";
import {
  ChangeDetectorRef,
  Component,
  ContentChild,
  Directive,
  EventEmitter,
  Inject,
  Injectable,
  InjectionToken,
  Input,
  NgModule,
  Optional,
  Output,
  PLATFORM_ID,
  TemplateRef,
  ViewChild,
  inject,
  makeEnvironmentProviders,
  setClassMetadata,
  ɵɵNgOnChangesFeature,
  ɵɵStandaloneFeature,
  ɵɵadvance,
  ɵɵconditional,
  ɵɵcontentQuery,
  ɵɵdefineComponent,
  ɵɵdefineDirective,
  ɵɵdefineInjectable,
  ɵɵdefineInjector,
  ɵɵdefineNgModule,
  ɵɵdirectiveInject,
  ɵɵelement,
  ɵɵelementContainer,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵinject,
  ɵɵloadQuery,
  ɵɵnextContext,
  ɵɵproperty,
  ɵɵqueryRefresh,
  ɵɵtemplate,
  ɵɵviewQuery
} from "./chunk-WDMVXB4D.js";
import "./chunk-XPU7EA6D.js";
import "./chunk-QN5HDKTT.js";
import {
  BehaviorSubject,
  filter,
  first,
  from,
  map,
  switchMap
} from "./chunk-MHK6ZZQX.js";
import {
  __async,
  __spreadProps,
  __spreadValues
} from "./chunk-WDMUDEB6.js";

// node_modules/ngx-stripe/fesm2022/ngx-stripe.mjs
var _c0 = ["stripeElementRef"];
function StripeAddressComponent_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainer(0, 2);
  }
  if (rf & 2) {
    const ctx_r0 = ɵɵnextContext();
    ɵɵproperty("ngTemplateOutlet", ctx_r0.loadingTemplate);
  }
}
function StripeAffirmMessageComponent_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainer(0, 2);
  }
  if (rf & 2) {
    const ctx_r0 = ɵɵnextContext();
    ɵɵproperty("ngTemplateOutlet", ctx_r0.loadingTemplate);
  }
}
function StripeAfterpayClearpayMessageComponent_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainer(0, 2);
  }
  if (rf & 2) {
    const ctx_r0 = ɵɵnextContext();
    ɵɵproperty("ngTemplateOutlet", ctx_r0.loadingTemplate);
  }
}
function StripeCardComponent_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainer(0, 2);
  }
  if (rf & 2) {
    const ctx_r0 = ɵɵnextContext();
    ɵɵproperty("ngTemplateOutlet", ctx_r0.loadingTemplate);
  }
}
function StripeCardNumberComponent_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainer(0, 2);
  }
  if (rf & 2) {
    const ctx_r0 = ɵɵnextContext();
    ɵɵproperty("ngTemplateOutlet", ctx_r0.loadingTemplate);
  }
}
function StripeCardExpiryComponent_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainer(0, 2);
  }
  if (rf & 2) {
    const ctx_r0 = ɵɵnextContext();
    ɵɵproperty("ngTemplateOutlet", ctx_r0.loadingTemplate);
  }
}
function StripeCardCvcComponent_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainer(0, 2);
  }
  if (rf & 2) {
    const ctx_r0 = ɵɵnextContext();
    ɵɵproperty("ngTemplateOutlet", ctx_r0.loadingTemplate);
  }
}
function StripeEpsBankComponent_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainer(0, 2);
  }
  if (rf & 2) {
    const ctx_r0 = ɵɵnextContext();
    ɵɵproperty("ngTemplateOutlet", ctx_r0.loadingTemplate);
  }
}
function StripeExpressCheckoutComponent_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainer(0, 2);
  }
  if (rf & 2) {
    const ctx_r0 = ɵɵnextContext();
    ɵɵproperty("ngTemplateOutlet", ctx_r0.loadingTemplate);
  }
}
function StripeFpxBankComponent_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainer(0, 2);
  }
  if (rf & 2) {
    const ctx_r0 = ɵɵnextContext();
    ɵɵproperty("ngTemplateOutlet", ctx_r0.loadingTemplate);
  }
}
function StripeIbanComponent_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainer(0, 2);
  }
  if (rf & 2) {
    const ctx_r0 = ɵɵnextContext();
    ɵɵproperty("ngTemplateOutlet", ctx_r0.loadingTemplate);
  }
}
function StripeIdealBankComponent_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainer(0, 2);
  }
  if (rf & 2) {
    const ctx_r0 = ɵɵnextContext();
    ɵɵproperty("ngTemplateOutlet", ctx_r0.loadingTemplate);
  }
}
function StripeIssuingCardCvcDisplayComponent_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainer(0, 2);
  }
  if (rf & 2) {
    const ctx_r0 = ɵɵnextContext();
    ɵɵproperty("ngTemplateOutlet", ctx_r0.loadingTemplate);
  }
}
function StripeIssuingCardExpiryDisplayComponent_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainer(0, 2);
  }
  if (rf & 2) {
    const ctx_r0 = ɵɵnextContext();
    ɵɵproperty("ngTemplateOutlet", ctx_r0.loadingTemplate);
  }
}
function StripeIssuingCardNumberDisplayComponent_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainer(0, 2);
  }
  if (rf & 2) {
    const ctx_r0 = ɵɵnextContext();
    ɵɵproperty("ngTemplateOutlet", ctx_r0.loadingTemplate);
  }
}
function StripeIssuingCardPinDisplayComponent_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainer(0, 2);
  }
  if (rf & 2) {
    const ctx_r0 = ɵɵnextContext();
    ɵɵproperty("ngTemplateOutlet", ctx_r0.loadingTemplate);
  }
}
function StripeLinkAuthenticationComponent_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainer(0, 2);
  }
  if (rf & 2) {
    const ctx_r0 = ɵɵnextContext();
    ɵɵproperty("ngTemplateOutlet", ctx_r0.loadingTemplate);
  }
}
function StripeP24BankComponent_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainer(0, 2);
  }
  if (rf & 2) {
    const ctx_r0 = ɵɵnextContext();
    ɵɵproperty("ngTemplateOutlet", ctx_r0.loadingTemplate);
  }
}
function StripeAuBankAccountComponent_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainer(0, 2);
  }
  if (rf & 2) {
    const ctx_r0 = ɵɵnextContext();
    ɵɵproperty("ngTemplateOutlet", ctx_r0.loadingTemplate);
  }
}
function StripePaymentMethodMessagingComponent_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainer(0, 2);
  }
  if (rf & 2) {
    const ctx_r0 = ɵɵnextContext();
    ɵɵproperty("ngTemplateOutlet", ctx_r0.loadingTemplate);
  }
}
var NgxStripeElementLoadingTemplateDirective = class _NgxStripeElementLoadingTemplateDirective {
  templateRef;
  constructor(templateRef) {
    this.templateRef = templateRef;
  }
  static ɵfac = function NgxStripeElementLoadingTemplateDirective_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _NgxStripeElementLoadingTemplateDirective)(ɵɵdirectiveInject(TemplateRef));
  };
  static ɵdir = ɵɵdefineDirective({
    type: _NgxStripeElementLoadingTemplateDirective,
    selectors: [["", "ngxStripeLoadingTemplate", ""]],
    standalone: true
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NgxStripeElementLoadingTemplateDirective, [{
    type: Directive,
    args: [{
      selector: "[ngxStripeLoadingTemplate]",
      standalone: true
    }]
  }], () => [{
    type: TemplateRef
  }], null);
})();
var STRIPE_PUBLISHABLE_KEY = new InjectionToken("Stripe Publishable Key");
var STRIPE_OPTIONS = new InjectionToken("Stripe Options");
var NGX_STRIPE_VERSION = new InjectionToken("NGX_STRIPE_VERSION");
var StripeInstance = class {
  version;
  loader;
  window;
  key;
  options;
  stripe$ = new BehaviorSubject(void 0);
  stripe = this.stripe$.asObservable().pipe(filter((stripe) => Boolean(stripe)));
  constructor(version, loader, window2, key, options) {
    this.version = version;
    this.loader = loader;
    this.window = window2;
    this.key = key;
    this.options = options;
    this.loader.asStream().pipe(filter((status) => status.loaded === true), first(), map(() => this.window.getNativeWindow().Stripe)).subscribe((stripeInstance) => {
      const stripe = this.options ? stripeInstance(this.key, this.options) : stripeInstance(this.key);
      stripe.registerAppInfo(this.getNgxStripeAppInfo(this.version));
      this.stripe$.next(stripe);
    });
  }
  getInstance() {
    return this.stripe$.getValue();
  }
  elements(options) {
    return this.stripe.pipe(map((stripe) => stripe.elements(options)), first());
  }
  redirectToCheckout(options) {
    return this.stripe.pipe(switchMap((stripe) => from(stripe.redirectToCheckout(options))), first());
  }
  confirmPayment(options) {
    return this.stripe.pipe(switchMap((stripe) => from(stripe.confirmPayment(options))), first());
  }
  confirmAcssDebitPayment(clientSecret, data, options) {
    return this.stripe.pipe(switchMap((stripe) => from(stripe.confirmAcssDebitPayment(clientSecret, data, options))), first());
  }
  confirmUsBankAccountPayment(clientSecret, data) {
    return this.stripe.pipe(switchMap((stripe) => from(stripe.confirmUsBankAccountPayment(clientSecret, data))), first());
  }
  confirmAlipayPayment(clientSecret, data, options) {
    return this.stripe.pipe(switchMap((stripe) => from(stripe.confirmAlipayPayment(clientSecret, data, options))), first());
  }
  confirmAuBecsDebitPayment(clientSecret, data) {
    return this.stripe.pipe(switchMap((stripe) => from(stripe.confirmAuBecsDebitPayment(clientSecret, data))), first());
  }
  confirmBancontactPayment(clientSecret, data, options) {
    return this.stripe.pipe(switchMap((stripe) => from(stripe.confirmBancontactPayment(clientSecret, data, options))), first());
  }
  confirmBlikPayment(clientSecret, data, options) {
    return this.stripe.pipe(switchMap((stripe) => from(stripe.confirmBlikPayment(clientSecret, data, options))), first());
  }
  confirmBoletoPayment(clientSecret, data, options) {
    return this.stripe.pipe(switchMap((stripe) => from(stripe.confirmBoletoPayment(clientSecret, data, options))), first());
  }
  confirmCardPayment(clientSecret, data, options) {
    return this.stripe.pipe(switchMap((stripe) => from(stripe.confirmCardPayment(clientSecret, data, options))), first());
  }
  confirmCashappPayment(clientSecret, data, options) {
    return this.stripe.pipe(switchMap((stripe) => from(stripe.confirmCashappPayment(clientSecret, data, options))), first());
  }
  confirmCustomerBalancePayment(clientSecret, data, options) {
    return this.stripe.pipe(switchMap((stripe) => from(stripe.confirmCustomerBalancePayment(clientSecret, data, options))), first());
  }
  confirmEpsPayment(clientSecret, data, options) {
    return this.stripe.pipe(switchMap((stripe) => from(stripe.confirmEpsPayment(clientSecret, data, options))), first());
  }
  confirmFpxPayment(clientSecret, data, options) {
    return this.stripe.pipe(switchMap((stripe) => from(stripe.confirmFpxPayment(clientSecret, data, options))), first());
  }
  confirmGiropayPayment(clientSecret, data, options) {
    return this.stripe.pipe(switchMap((stripe) => from(stripe.confirmGiropayPayment(clientSecret, data, options))), first());
  }
  confirmGrabPayPayment(clientSecret, data, options) {
    return this.stripe.pipe(switchMap((stripe) => from(stripe.confirmGrabPayPayment(clientSecret, data, options))), first());
  }
  confirmIdealPayment(clientSecret, data, options) {
    return this.stripe.pipe(switchMap((stripe) => from(stripe.confirmIdealPayment(clientSecret, data, options))), first());
  }
  confirmKlarnaPayment(clientSecret, data, options) {
    return this.stripe.pipe(switchMap((stripe) => from(stripe.confirmKlarnaPayment(clientSecret, data, options))), first());
  }
  confirmKonbiniPayment(clientSecret, data, options) {
    return this.stripe.pipe(switchMap((stripe) => from(stripe.confirmKonbiniPayment(clientSecret, data, options))), first());
  }
  confirmMobilepayPayment(clientSecret, data, options) {
    return this.stripe.pipe(switchMap((stripe) => from(stripe.confirmMobilepayPayment(clientSecret, data, options))), first());
  }
  confirmOxxoPayment(clientSecret, data, options) {
    return this.stripe.pipe(switchMap((stripe) => from(stripe.confirmOxxoPayment(clientSecret, data, options))), first());
  }
  confirmP24Payment(clientSecret, data, options) {
    return this.stripe.pipe(switchMap((stripe) => from(stripe.confirmP24Payment(clientSecret, data, options))), first());
  }
  confirmPayNowPayment(clientSecret, data, options) {
    return this.stripe.pipe(switchMap((stripe) => from(stripe.confirmPayNowPayment(clientSecret, data, options))), first());
  }
  confirmPayPalPayment(clientSecret, data) {
    return this.stripe.pipe(switchMap((stripe) => from(stripe.confirmPayPalPayment(clientSecret, data))), first());
  }
  confirmPixPayment(clientSecret, data, options) {
    return this.stripe.pipe(switchMap((stripe) => from(stripe.confirmPixPayment(clientSecret, data, options))), first());
  }
  confirmPromptPayPayment(clientSecret, data, options) {
    return this.stripe.pipe(switchMap((stripe) => from(stripe.confirmPromptPayPayment(clientSecret, data, options))), first());
  }
  confirmSepaDebitPayment(clientSecret, data) {
    return this.stripe.pipe(switchMap((stripe) => from(stripe.confirmSepaDebitPayment(clientSecret, data))), first());
  }
  confirmSofortPayment(clientSecret, data, options) {
    return this.stripe.pipe(switchMap((stripe) => from(stripe.confirmSofortPayment(clientSecret, data, options))), first());
  }
  confirmWechatPayPayment(clientSecret, data, options) {
    return this.stripe.pipe(switchMap((stripe) => from(stripe.confirmWechatPayPayment(clientSecret, data, options))), first());
  }
  handleCardAction(clientSecret) {
    return this.stripe.pipe(switchMap((stripe) => from(stripe.handleCardAction(clientSecret))), first());
  }
  handleNextAction(options) {
    return this.stripe.pipe(switchMap((stripe) => from(stripe.handleNextAction(options))), first());
  }
  verifyMicrodepositsForPayment(clientSecret, data) {
    return this.stripe.pipe(switchMap((stripe) => from(stripe.verifyMicrodepositsForPayment(clientSecret, data))), first());
  }
  createRadarSession() {
    return this.stripe.pipe(switchMap((stripe) => from(stripe.createRadarSession())), first());
  }
  collectBankAccountForPayment(options) {
    return this.stripe.pipe(switchMap((stripe) => from(stripe.collectBankAccountForPayment(options))), first());
  }
  createPaymentMethod(options) {
    return this.stripe.pipe(switchMap((stripe) => from(stripe.createPaymentMethod(options))), first());
  }
  createConfirmationToken(options) {
    return this.stripe.pipe(switchMap((stripe) => from(stripe.createConfirmationToken(options))), first());
  }
  retrievePaymentIntent(clientSecret) {
    return this.stripe.pipe(switchMap((stripe) => from(stripe.retrievePaymentIntent(clientSecret))), first());
  }
  confirmSetup(options) {
    return this.stripe.pipe(switchMap((stripe) => from(stripe.confirmSetup(options))), first());
  }
  confirmAcssDebitSetup(clientSecret, data, options) {
    return this.stripe.pipe(switchMap((stripe) => from(stripe.confirmAcssDebitSetup(clientSecret, data, options))), first());
  }
  confirmUsBankAccountSetup(clientSecret, data) {
    return this.stripe.pipe(switchMap((stripe) => from(stripe.confirmUsBankAccountSetup(clientSecret, data))), first());
  }
  confirmAuBecsDebitSetup(clientSecret, data) {
    return this.stripe.pipe(switchMap((stripe) => from(stripe.confirmAuBecsDebitSetup(clientSecret, data))), first());
  }
  confirmBacsDebitSetup(clientSecret, data) {
    return this.stripe.pipe(switchMap((stripe) => from(stripe.confirmBacsDebitSetup(clientSecret, data))), first());
  }
  confirmBancontactSetup(clientSecret, data) {
    return this.stripe.pipe(switchMap((stripe) => from(stripe.confirmBancontactSetup(clientSecret, data))), first());
  }
  confirmCardSetup(clientSecret, data, options) {
    return this.stripe.pipe(switchMap((stripe) => from(stripe.confirmCardSetup(clientSecret, data, options))), first());
  }
  confirmCashappSetup(clientSecret, data, options) {
    return this.stripe.pipe(switchMap((stripe) => from(stripe.confirmCashappSetup(clientSecret, data, options))), first());
  }
  confirmIdealSetup(clientSecret, data) {
    return this.stripe.pipe(switchMap((stripe) => from(stripe.confirmIdealSetup(clientSecret, data))), first());
  }
  confirmPayPalSetup(clientSecret, data) {
    return this.stripe.pipe(switchMap((stripe) => from(stripe.confirmPayPalSetup(clientSecret, data))), first());
  }
  confirmSepaDebitSetup(clientSecret, data) {
    return this.stripe.pipe(switchMap((stripe) => from(stripe.confirmSepaDebitSetup(clientSecret, data))), first());
  }
  confirmSofortSetup(clientSecret, data, options) {
    return this.stripe.pipe(switchMap((stripe) => from(stripe.confirmSofortSetup(clientSecret, data, options))), first());
  }
  confirmAffirmPayment(clientSecret, data, options) {
    return this.stripe.pipe(switchMap((stripe) => from(stripe.confirmAffirmPayment(clientSecret, data, options))), first());
  }
  confirmAfterpayClearpayPayment(clientSecret, data, options) {
    return this.stripe.pipe(switchMap((stripe) => from(stripe.confirmAfterpayClearpayPayment(clientSecret, data, options))), first());
  }
  verifyMicrodepositsForSetup(clientSecret, data) {
    return this.stripe.pipe(switchMap((stripe) => from(stripe.verifyMicrodepositsForSetup(clientSecret, data))), first());
  }
  collectBankAccountForSetup(options) {
    return this.stripe.pipe(switchMap((stripe) => from(stripe.collectBankAccountForSetup(options))), first());
  }
  retrieveSetupIntent(clientSecret) {
    return this.stripe.pipe(switchMap((stripe) => from(stripe.retrieveSetupIntent(clientSecret))), first());
  }
  processOrder(options) {
    return this.stripe.pipe(switchMap((stripe) => from(stripe.processOrder(options))), first());
  }
  retrieveOrder(clientSecret) {
    return this.stripe.pipe(switchMap((stripe) => from(stripe.retrieveOrder(clientSecret))), first());
  }
  paymentRequest(options) {
    const stripe = this.getInstance();
    return stripe.paymentRequest(options);
  }
  createToken(tokenType, data) {
    return this.stripe.pipe(switchMap((stripe) => from(stripe.createToken(tokenType, data))), first());
  }
  createSource(a, b) {
    return this.stripe.pipe(switchMap((stripe) => from(stripe.createSource(a, b))), first());
  }
  retrieveSource(source) {
    return this.stripe.pipe(switchMap((stripe) => from(stripe.retrieveSource(source))), first());
  }
  verifyIdentity(clientSecret) {
    return this.stripe.pipe(switchMap((stripe) => from(stripe.verifyIdentity(clientSecret))), first());
  }
  collectFinancialConnectionsAccounts(options) {
    return this.stripe.pipe(switchMap((stripe) => from(stripe.collectFinancialConnectionsAccounts(options))), first());
  }
  collectBankAccountToken(options) {
    return this.stripe.pipe(switchMap((stripe) => from(stripe.collectBankAccountToken(options))), first());
  }
  createEphemeralKeyNonce(options) {
    return this.stripe.pipe(switchMap((stripe) => from(stripe.createEphemeralKeyNonce(options))), first());
  }
  initCustomCheckout(options) {
    return this.stripe.pipe(switchMap((stripe) => from(stripe.initCustomCheckout(options))), first());
  }
  initEmbeddedCheckout(options) {
    return this.stripe.pipe(switchMap((stripe) => from(stripe.initEmbeddedCheckout(options))), first());
  }
  /**
   * @deprecated
   */
  handleCardPayment(clientSecret, element, data) {
    return this.stripe.pipe(switchMap((stripe) => from(stripe.handleCardPayment(clientSecret, element, data))), first());
  }
  /**
   * @deprecated
   */
  confirmPaymentIntent(clientSecret, element, data) {
    return this.stripe.pipe(switchMap((stripe) => from(stripe.confirmPaymentIntent(clientSecret, element, data))), first());
  }
  /**
   * @deprecated
   */
  handleCardSetup(clientSecret, element, data) {
    return this.stripe.pipe(switchMap((stripe) => from(stripe.handleCardSetup(clientSecret, element, data))), first());
  }
  /**
   * @deprecated
   */
  confirmSetupIntent(clientSecret, element, data) {
    return this.stripe.pipe(switchMap((stripe) => from(stripe.confirmSetupIntent(clientSecret, element, data))), first());
  }
  /**
   * @deprecated
   */
  handleFpxPayment(clientSecret, element, data) {
    return this.stripe.pipe(switchMap((stripe) => from(stripe.handleFpxPayment(clientSecret, element, data))), first());
  }
  getNgxStripeAppInfo(version) {
    return {
      name: "ngx-stripe",
      url: "https://ngx-stripe.dev",
      partner_id: "pp_partner_JR4l1rmvUoPP4V",
      version
    };
  }
};
var WindowRef = class _WindowRef {
  platformId;
  constructor(platformId) {
    this.platformId = platformId;
  }
  getNativeWindow() {
    if (isPlatformBrowser(this.platformId)) {
      return window;
    }
    return {};
  }
  static ɵfac = function WindowRef_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _WindowRef)(ɵɵinject(PLATFORM_ID));
  };
  static ɵprov = ɵɵdefineInjectable({
    token: _WindowRef,
    factory: _WindowRef.ɵfac
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(WindowRef, [{
    type: Injectable
  }], () => [{
    type: void 0,
    decorators: [{
      type: Inject,
      args: [PLATFORM_ID]
    }]
  }], null);
})();
var DocumentRef = class _DocumentRef {
  platformId;
  constructor(platformId) {
    this.platformId = platformId;
  }
  getNativeDocument() {
    if (isPlatformBrowser(this.platformId)) {
      return document;
    }
    return {};
  }
  static ɵfac = function DocumentRef_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _DocumentRef)(ɵɵinject(PLATFORM_ID));
  };
  static ɵprov = ɵɵdefineInjectable({
    token: _DocumentRef,
    factory: _DocumentRef.ɵfac
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(DocumentRef, [{
    type: Injectable
  }], () => [{
    type: void 0,
    decorators: [{
      type: Inject,
      args: [PLATFORM_ID]
    }]
  }], null);
})();
var LazyStripeAPILoader = class _LazyStripeAPILoader {
  platformId;
  window;
  document;
  status = new BehaviorSubject({
    error: false,
    loaded: false,
    loading: false
  });
  constructor(platformId, window2, document2) {
    this.platformId = platformId;
    this.window = window2;
    this.document = document2;
  }
  asStream() {
    this.load();
    return this.status.asObservable();
  }
  isReady() {
    return this.status.getValue().loaded;
  }
  load() {
    if (isPlatformServer(this.platformId)) {
      return;
    }
    const status = this.status.getValue();
    if (this.window.getNativeWindow().hasOwnProperty("Stripe")) {
      this.status.next({
        error: false,
        loaded: true,
        loading: false
      });
    } else if (!status.loaded && !status.loading) {
      this.status.next(__spreadProps(__spreadValues({}, status), {
        loading: true
      }));
      const script = this.document.getNativeDocument().createElement("script");
      script.type = "text/javascript";
      script.async = true;
      script.defer = true;
      script.src = "https://js.stripe.com/v3/";
      script.onload = () => {
        this.status.next({
          error: false,
          loaded: true,
          loading: false
        });
      };
      script.onerror = () => {
        this.status.next({
          error: true,
          loaded: false,
          loading: false
        });
      };
      this.document.getNativeDocument().body.appendChild(script);
    }
  }
  static ɵfac = function LazyStripeAPILoader_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _LazyStripeAPILoader)(ɵɵinject(PLATFORM_ID), ɵɵinject(WindowRef), ɵɵinject(DocumentRef));
  };
  static ɵprov = ɵɵdefineInjectable({
    token: _LazyStripeAPILoader,
    factory: _LazyStripeAPILoader.ɵfac
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(LazyStripeAPILoader, [{
    type: Injectable
  }], () => [{
    type: void 0,
    decorators: [{
      type: Inject,
      args: [PLATFORM_ID]
    }]
  }, {
    type: WindowRef
  }, {
    type: DocumentRef
  }], null);
})();
var StripeService = class _StripeService {
  version;
  key;
  options;
  loader;
  window;
  stripe;
  constructor(version, key, options, loader, window2) {
    this.version = version;
    this.key = key;
    this.options = options;
    this.loader = loader;
    this.window = window2;
    if (key) {
      this.stripe = new StripeInstance(this.version, this.loader, this.window, key, options);
    }
  }
  getStripeReference() {
    return this.loader.asStream().pipe(filter((status) => status.loaded === true), map(() => this.window.getNativeWindow().Stripe));
  }
  getInstance() {
    return this.stripe.getInstance();
  }
  setKey(key, options) {
    return this.changeKey(key, options);
  }
  changeKey(key, options) {
    this.stripe = new StripeInstance(this.version, this.loader, this.window, key, options);
    return this.stripe;
  }
  elements(options) {
    return this.stripe.elements(options);
  }
  redirectToCheckout(options) {
    return this.stripe.redirectToCheckout(options);
  }
  confirmPayment(options) {
    return this.stripe.confirmPayment(options);
  }
  confirmAcssDebitPayment(clientSecret, data, options) {
    return this.stripe.confirmAcssDebitPayment(clientSecret, data, options);
  }
  confirmUsBankAccountPayment(clientSecret, data) {
    return this.stripe.confirmUsBankAccountPayment(clientSecret, data);
  }
  confirmAlipayPayment(clientSecret, data, options) {
    return this.stripe.confirmAlipayPayment(clientSecret, data, options);
  }
  confirmAuBecsDebitPayment(clientSecret, data) {
    return this.stripe.confirmAuBecsDebitPayment(clientSecret, data);
  }
  confirmBancontactPayment(clientSecret, data, options) {
    return this.stripe.confirmBancontactPayment(clientSecret, data, options);
  }
  confirmBlikPayment(clientSecret, data, options) {
    return this.stripe.confirmBlikPayment(clientSecret, data, options);
  }
  confirmBoletoPayment(clientSecret, data, options) {
    return this.stripe.confirmBoletoPayment(clientSecret, data, options);
  }
  confirmCardPayment(clientSecret, data, options) {
    return this.stripe.confirmCardPayment(clientSecret, data, options);
  }
  confirmCashappPayment(clientSecret, data, options) {
    return this.stripe.confirmCashappPayment(clientSecret, data, options);
  }
  confirmCustomerBalancePayment(clientSecret, data, options) {
    return this.stripe.confirmCustomerBalancePayment(clientSecret, data, options);
  }
  confirmEpsPayment(clientSecret, data, options) {
    return this.stripe.confirmEpsPayment(clientSecret, data, options);
  }
  confirmFpxPayment(clientSecret, data, options) {
    return this.stripe.confirmFpxPayment(clientSecret, data, options);
  }
  confirmGiropayPayment(clientSecret, data, options) {
    return this.stripe.confirmGiropayPayment(clientSecret, data, options);
  }
  confirmGrabPayPayment(clientSecret, data, options) {
    return this.stripe.confirmGrabPayPayment(clientSecret, data, options);
  }
  confirmIdealPayment(clientSecret, data, options) {
    return this.stripe.confirmIdealPayment(clientSecret, data, options);
  }
  confirmKlarnaPayment(clientSecret, data, options) {
    return this.stripe.confirmKlarnaPayment(clientSecret, data, options);
  }
  confirmKonbiniPayment(clientSecret, data, options) {
    return this.stripe.confirmKonbiniPayment(clientSecret, data, options);
  }
  confirmMobilepayPayment(clientSecret, data, options) {
    return this.stripe.confirmMobilepayPayment(clientSecret, data, options);
  }
  confirmOxxoPayment(clientSecret, data, options) {
    return this.stripe.confirmOxxoPayment(clientSecret, data, options);
  }
  confirmP24Payment(clientSecret, data, options) {
    return this.stripe.confirmP24Payment(clientSecret, data, options);
  }
  confirmPayNowPayment(clientSecret, data, options) {
    return this.stripe.confirmPayNowPayment(clientSecret, data, options);
  }
  confirmPayPalPayment(clientSecret, data) {
    return this.stripe.confirmPayPalPayment(clientSecret, data);
  }
  confirmPixPayment(clientSecret, data, options) {
    return this.stripe.confirmPixPayment(clientSecret, data, options);
  }
  confirmPromptPayPayment(clientSecret, data, options) {
    return this.stripe.confirmPromptPayPayment(clientSecret, data, options);
  }
  confirmSepaDebitPayment(clientSecret, data) {
    return this.stripe.confirmSepaDebitPayment(clientSecret, data);
  }
  confirmSofortPayment(clientSecret, data, options) {
    return this.stripe.confirmSofortPayment(clientSecret, data, options);
  }
  confirmWechatPayPayment(clientSecret, data, options) {
    return this.stripe.confirmWechatPayPayment(clientSecret, data, options);
  }
  handleCardAction(clientSecret) {
    return this.stripe.handleCardAction(clientSecret);
  }
  handleNextAction(options) {
    return this.stripe.handleNextAction(options);
  }
  verifyMicrodepositsForPayment(clientSecret, data) {
    return this.stripe.verifyMicrodepositsForPayment(clientSecret, data);
  }
  createRadarSession() {
    return this.stripe.createRadarSession();
  }
  collectBankAccountForPayment(options) {
    return this.stripe.collectBankAccountForPayment(options);
  }
  createPaymentMethod(options) {
    return this.stripe.createPaymentMethod(options);
  }
  createConfirmationToken(options) {
    return this.stripe.createConfirmationToken(options);
  }
  retrievePaymentIntent(clientSecret) {
    return this.stripe.retrievePaymentIntent(clientSecret);
  }
  confirmSetup(options) {
    return this.stripe.confirmSetup(options);
  }
  confirmAcssDebitSetup(clientSecret, data, options) {
    return this.stripe.confirmAcssDebitSetup(clientSecret, data, options);
  }
  confirmUsBankAccountSetup(clientSecret, data) {
    return this.stripe.confirmUsBankAccountSetup(clientSecret, data);
  }
  confirmAuBecsDebitSetup(clientSecret, data) {
    return this.stripe.confirmAuBecsDebitSetup(clientSecret, data);
  }
  confirmBacsDebitSetup(clientSecret, data) {
    return this.stripe.confirmBacsDebitSetup(clientSecret, data);
  }
  confirmBancontactSetup(clientSecret, data) {
    return this.stripe.confirmBancontactSetup(clientSecret, data);
  }
  confirmCardSetup(clientSecret, data, options) {
    return this.stripe.confirmCardSetup(clientSecret, data, options);
  }
  confirmCashappSetup(clientSecret, data, options) {
    return this.stripe.confirmCashappSetup(clientSecret, data, options);
  }
  confirmIdealSetup(clientSecret, data) {
    return this.stripe.confirmIdealSetup(clientSecret, data);
  }
  confirmPayPalSetup(clientSecret, data) {
    return this.stripe.confirmPayPalSetup(clientSecret, data);
  }
  confirmSepaDebitSetup(clientSecret, data) {
    return this.stripe.confirmSepaDebitSetup(clientSecret, data);
  }
  confirmSofortSetup(clientSecret, data, options) {
    return this.stripe.confirmSofortSetup(clientSecret, data, options);
  }
  confirmAffirmPayment(clientSecret, data, options) {
    return this.stripe.confirmAffirmPayment(clientSecret, data, options);
  }
  confirmAfterpayClearpayPayment(clientSecret, data, options) {
    return this.stripe.confirmAfterpayClearpayPayment(clientSecret, data, options);
  }
  verifyMicrodepositsForSetup(clientSecret, data) {
    return this.stripe.verifyMicrodepositsForSetup(clientSecret, data);
  }
  collectBankAccountForSetup(options) {
    return this.stripe.collectBankAccountForSetup(options);
  }
  retrieveSetupIntent(clientSecret) {
    return this.stripe.retrieveSetupIntent(clientSecret);
  }
  processOrder(options) {
    return this.stripe.processOrder(options);
  }
  retrieveOrder(clientSecret) {
    return this.stripe.retrieveOrder(clientSecret);
  }
  paymentRequest(options) {
    return this.stripe.paymentRequest(options);
  }
  createToken(tokenType, data) {
    return this.stripe.createToken(tokenType, data);
  }
  createSource(a, b) {
    return this.stripe.createSource(a, b);
  }
  retrieveSource(source) {
    return this.stripe.retrieveSource(source);
  }
  verifyIdentity(clientSecret) {
    return this.stripe.verifyIdentity(clientSecret);
  }
  collectFinancialConnectionsAccounts(options) {
    return this.stripe.collectFinancialConnectionsAccounts(options);
  }
  collectBankAccountToken(options) {
    return this.stripe.collectBankAccountToken(options);
  }
  createEphemeralKeyNonce(options) {
    return this.stripe.createEphemeralKeyNonce(options);
  }
  initCustomCheckout(options) {
    return this.stripe.initCustomCheckout(options);
  }
  initEmbeddedCheckout(options) {
    return this.stripe.initEmbeddedCheckout(options);
  }
  /**
   * @deprecated
   */
  handleCardPayment(clientSecret, element, data) {
    return this.stripe.handleCardPayment(clientSecret, element, data);
  }
  /**
   * @deprecated
   */
  confirmPaymentIntent(clientSecret, element, data) {
    return this.stripe.confirmPaymentIntent(clientSecret, element, data);
  }
  /**
   * @deprecated
   */
  handleCardSetup(clientSecret, element, data) {
    return this.stripe.handleCardSetup(clientSecret, element, data);
  }
  /**
   * @deprecated
   */
  confirmSetupIntent(clientSecret, element, data) {
    return this.stripe.confirmSetupIntent(clientSecret, element, data);
  }
  /**
   * @deprecated
   */
  handleFpxPayment(clientSecret, element, data) {
    return this.stripe.handleFpxPayment(clientSecret, element, data);
  }
  static ɵfac = function StripeService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _StripeService)(ɵɵinject(NGX_STRIPE_VERSION), ɵɵinject(STRIPE_PUBLISHABLE_KEY), ɵɵinject(STRIPE_OPTIONS), ɵɵinject(LazyStripeAPILoader), ɵɵinject(WindowRef));
  };
  static ɵprov = ɵɵdefineInjectable({
    token: _StripeService,
    factory: _StripeService.ɵfac
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(StripeService, [{
    type: Injectable
  }], () => [{
    type: void 0,
    decorators: [{
      type: Inject,
      args: [NGX_STRIPE_VERSION]
    }]
  }, {
    type: void 0,
    decorators: [{
      type: Inject,
      args: [STRIPE_PUBLISHABLE_KEY]
    }]
  }, {
    type: void 0,
    decorators: [{
      type: Inject,
      args: [STRIPE_OPTIONS]
    }]
  }, {
    type: LazyStripeAPILoader
  }, {
    type: WindowRef
  }], null);
})();
var StripeElementsService = class _StripeElementsService {
  stripeService;
  constructor(stripeService) {
    this.stripeService = stripeService;
  }
  elements(stripe, options = {}) {
    if (stripe) {
      if (Object.keys(options).length > 0) {
        return stripe.elements(options);
      }
      return stripe.elements();
    } else {
      if (Object.keys(options).length > 0) {
        return this.stripeService.elements(options);
      }
      return this.stripeService.elements();
    }
  }
  paymentRequest(stripe, options) {
    return stripe ? stripe.paymentRequest(options) : this.stripeService.paymentRequest(options);
  }
  mergeOptions(options, containerClass) {
    if (!containerClass || options && options.classes) {
      return options || {};
    }
    if (!options || !options.classes) {
      return __spreadProps(__spreadValues({}, options || {}), {
        classes: {
          base: containerClass,
          complete: `${containerClass}--complete`,
          empty: `${containerClass}--empty`,
          focus: `${containerClass}--focus`,
          invalid: `${containerClass}--invalid`,
          webkitAutoFill: `${containerClass}--webkit-autoFill`
        }
      });
    }
    return options || {};
  }
  static ɵfac = function StripeElementsService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _StripeElementsService)(ɵɵinject(StripeService));
  };
  static ɵprov = ɵɵdefineInjectable({
    token: _StripeElementsService,
    factory: _StripeElementsService.ɵfac
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(StripeElementsService, [{
    type: Injectable
  }], () => [{
    type: StripeService
  }], null);
})();
var StripeElementsDirective = class _StripeElementsDirective {
  stripeElementsService;
  elementsOptions;
  stripe;
  elements = new EventEmitter();
  _elements;
  state = "notready";
  constructor(stripeElementsService) {
    this.stripeElementsService = stripeElementsService;
  }
  ngOnChanges(changes) {
    return __async(this, null, function* () {
      this.state = "starting";
      const elementsOptions = this.elementsOptions;
      const stripe = this.stripe;
      if (!stripe) {
        this.state = "notready";
        return;
      }
      if (changes.elementsOptions) {
        if (this._elements) {
          const payload = Object.keys(elementsOptions).reduce((acc, key) => {
            if (elementsOptions[key] !== changes.elementsOptions.previousValue[key] && !["fonts", "loader", "clientSecret"].includes(key)) {
              acc[key] = elementsOptions[key];
            }
            return acc;
          }, {});
          this._elements.update(payload);
        } else {
          this._elements = yield this.stripeElementsService.elements(stripe, elementsOptions).toPromise();
          this.elements.emit(this._elements);
          this.state = "ready";
        }
      }
    });
  }
  ngOnInit() {
    return __async(this, null, function* () {
      if (this.state === "notready") {
        this.state = "starting";
        this._elements = yield this.stripeElementsService.elements(this.stripe).toPromise();
        this.elements.emit(this._elements);
        this.state = "ready";
      }
    });
  }
  fetchUpdates() {
    if (!this._elements) return null;
    return from(this._elements.fetchUpdates());
  }
  update(options) {
    if (!this._elements) return null;
    return this._elements.update(options);
  }
  submit() {
    if (!this._elements) return null;
    return from(this._elements.submit());
  }
  getElement(elementType) {
    if (!this._elements) return null;
    switch (elementType) {
      case "address":
        return this._elements.getElement("address");
      case "paymentMethodMessaging":
        return this._elements.getElement("paymentMethodMessaging");
      case "affirmMessage":
        return this._elements.getElement("affirmMessage");
      case "afterpayClearpayMessage":
        return this._elements.getElement("afterpayClearpayMessage");
      case "auBankAccount":
        return this._elements.getElement("auBankAccount");
      case "card":
        return this._elements.getElement("card");
      case "cardNumber":
        return this._elements.getElement("cardNumber");
      case "cardExpiry":
        return this._elements.getElement("cardExpiry");
      case "cardCvc":
        return this._elements.getElement("cardCvc");
      case "fpxBank":
        return this._elements.getElement("fpxBank");
      case "epsBank":
        return this._elements.getElement("epsBank");
      case "p24Bank":
        return this._elements.getElement("p24Bank");
      case "iban":
        return this._elements.getElement("iban");
      case "idealBank":
        return this._elements.getElement("idealBank");
      case "linkAuthentication":
        return this._elements.getElement("linkAuthentication");
      case "expressCheckout":
        return this._elements.getElement("expressCheckout");
      case "payment":
        return this._elements.getElement("payment");
      case "paymentRequestButton":
        return this._elements.getElement("paymentRequestButton");
      case "shippingAddress":
        return this._elements.getElement("shippingAddress");
      default:
        return this._elements.getElement(elementType);
    }
  }
  static ɵfac = function StripeElementsDirective_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _StripeElementsDirective)(ɵɵdirectiveInject(StripeElementsService));
  };
  static ɵdir = ɵɵdefineDirective({
    type: _StripeElementsDirective,
    selectors: [["ngx-stripe-elements"], ["", "ngxStripeElements", ""]],
    inputs: {
      elementsOptions: "elementsOptions",
      stripe: "stripe"
    },
    outputs: {
      elements: "elements"
    },
    standalone: true,
    features: [ɵɵNgOnChangesFeature]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(StripeElementsDirective, [{
    type: Directive,
    args: [{
      selector: "ngx-stripe-elements,[ngxStripeElements]",
      standalone: true
    }]
  }], () => [{
    type: StripeElementsService
  }], {
    elementsOptions: [{
      type: Input
    }],
    stripe: [{
      type: Input
    }],
    elements: [{
      type: Output
    }]
  });
})();
var StripeAddressComponent = class _StripeAddressComponent {
  stripeElementsService;
  elementsProvider;
  loadingTemplate;
  stripeElementRef;
  element;
  containerClass;
  options;
  elementsOptions;
  stripe;
  load = new EventEmitter();
  blur = new EventEmitter();
  change = new EventEmitter();
  focus = new EventEmitter();
  ready = new EventEmitter();
  escape = new EventEmitter();
  loaderror = new EventEmitter();
  loaderstart = new EventEmitter();
  elements;
  state = "notready";
  elementsSubscription;
  constructor(stripeElementsService, elementsProvider) {
    this.stripeElementsService = stripeElementsService;
    this.elementsProvider = elementsProvider;
  }
  ngOnChanges(changes) {
    return __async(this, null, function* () {
      this.state = "starting";
      let updateElements = false;
      if (!this.elementsProvider && (changes.elementsOptions || changes.stripe || !this.elements)) {
        this.elements = yield this.stripeElementsService.elements(this.stripe, this.elementsOptions).toPromise();
        updateElements = true;
      }
      const options = this.stripeElementsService.mergeOptions(this.options, this.containerClass);
      if (changes.options || changes.containerClass || !this.element || updateElements) {
        if (this.element && !updateElements) {
          this.update(options);
        } else if (this.elements && updateElements) {
          this.createElement(options);
        }
      }
      this.state = "ready";
    });
  }
  ngOnInit() {
    return __async(this, null, function* () {
      const options = this.stripeElementsService.mergeOptions(this.options, this.containerClass);
      if (this.elementsProvider) {
        this.elementsSubscription = this.elementsProvider.elements.subscribe((elements) => {
          this.elements = elements;
          this.createElement(options);
          this.state = "ready";
        });
      } else if (this.state === "notready") {
        this.state = "starting";
        this.elements = yield this.stripeElementsService.elements(this.stripe).toPromise();
        this.createElement(options);
        this.state = "ready";
      }
    });
  }
  ngOnDestroy() {
    if (this.element) {
      this.element.destroy();
    }
    if (this.elementsSubscription) {
      this.elementsSubscription.unsubscribe();
    }
  }
  update(options) {
    return this.element.update(options);
  }
  getValue() {
    const address = this.elements.getElement("address");
    return address.getValue();
  }
  /**
   * @deprecated
   */
  getAddressElement() {
    return this.element;
  }
  createElement(options) {
    if (this.element) {
      this.element.unmount();
    }
    this.element = this.elements.create("address", options);
    this.element.on("change", (ev) => this.change.emit(ev));
    this.element.on("blur", () => this.blur.emit());
    this.element.on("focus", () => this.focus.emit());
    this.element.on("ready", () => this.ready.emit());
    this.element.on("escape", () => this.escape.emit());
    this.element.on("loaderror", () => this.loaderror.emit());
    this.element.on("loaderstart", () => this.loaderstart.emit());
    this.element.mount(this.stripeElementRef.nativeElement);
    this.load.emit(this.element);
  }
  static ɵfac = function StripeAddressComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _StripeAddressComponent)(ɵɵdirectiveInject(StripeElementsService), ɵɵdirectiveInject(StripeElementsDirective, 8));
  };
  static ɵcmp = ɵɵdefineComponent({
    type: _StripeAddressComponent,
    selectors: [["ngx-stripe-address"]],
    contentQueries: function StripeAddressComponent_ContentQueries(rf, ctx, dirIndex) {
      if (rf & 1) {
        ɵɵcontentQuery(dirIndex, NgxStripeElementLoadingTemplateDirective, 5, TemplateRef);
      }
      if (rf & 2) {
        let _t;
        ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.loadingTemplate = _t.first);
      }
    },
    viewQuery: function StripeAddressComponent_Query(rf, ctx) {
      if (rf & 1) {
        ɵɵviewQuery(_c0, 5);
      }
      if (rf & 2) {
        let _t;
        ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.stripeElementRef = _t.first);
      }
    },
    inputs: {
      containerClass: "containerClass",
      options: "options",
      elementsOptions: "elementsOptions",
      stripe: "stripe"
    },
    outputs: {
      load: "load",
      blur: "blur",
      change: "change",
      focus: "focus",
      ready: "ready",
      escape: "escape",
      loaderror: "loaderror",
      loaderstart: "loaderstart"
    },
    standalone: true,
    features: [ɵɵNgOnChangesFeature, ɵɵStandaloneFeature],
    decls: 3,
    vars: 1,
    consts: [["stripeElementRef", ""], [1, "field"], [3, "ngTemplateOutlet"]],
    template: function StripeAddressComponent_Template(rf, ctx) {
      if (rf & 1) {
        ɵɵelementStart(0, "div", 1, 0);
        ɵɵtemplate(2, StripeAddressComponent_Conditional_2_Template, 1, 1, "ng-container", 2);
        ɵɵelementEnd();
      }
      if (rf & 2) {
        ɵɵadvance(2);
        ɵɵconditional(ctx.state !== "ready" && ctx.loadingTemplate ? 2 : -1);
      }
    },
    dependencies: [CommonModule, NgTemplateOutlet],
    encapsulation: 2
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(StripeAddressComponent, [{
    type: Component,
    args: [{
      selector: "ngx-stripe-address",
      standalone: true,
      template: `
    <div class="field" #stripeElementRef>
      @if (state !== 'ready' && loadingTemplate) {
        <ng-container [ngTemplateOutlet]="loadingTemplate" />
      }
    </div>
  `,
      imports: [CommonModule]
    }]
  }], () => [{
    type: StripeElementsService
  }, {
    type: StripeElementsDirective,
    decorators: [{
      type: Optional
    }]
  }], {
    loadingTemplate: [{
      type: ContentChild,
      args: [NgxStripeElementLoadingTemplateDirective, {
        read: TemplateRef
      }]
    }],
    stripeElementRef: [{
      type: ViewChild,
      args: ["stripeElementRef"]
    }],
    containerClass: [{
      type: Input
    }],
    options: [{
      type: Input
    }],
    elementsOptions: [{
      type: Input
    }],
    stripe: [{
      type: Input
    }],
    load: [{
      type: Output
    }],
    blur: [{
      type: Output
    }],
    change: [{
      type: Output
    }],
    focus: [{
      type: Output
    }],
    ready: [{
      type: Output
    }],
    escape: [{
      type: Output
    }],
    loaderror: [{
      type: Output
    }],
    loaderstart: [{
      type: Output
    }]
  });
})();
var StripeAffirmMessageComponent = class _StripeAffirmMessageComponent {
  stripeElementsService;
  elementsProvider;
  loadingTemplate;
  stripeElementRef;
  element;
  containerClass;
  options;
  elementsOptions;
  stripe;
  load = new EventEmitter();
  ready = new EventEmitter();
  elements;
  state = "notready";
  elementsSubscription;
  constructor(stripeElementsService, elementsProvider) {
    this.stripeElementsService = stripeElementsService;
    this.elementsProvider = elementsProvider;
  }
  ngOnChanges(changes) {
    return __async(this, null, function* () {
      this.state = "starting";
      let updateElements = false;
      if (!this.elementsProvider && (changes.elementsOptions || changes.stripe || !this.elements)) {
        this.elements = yield this.stripeElementsService.elements(this.stripe, this.elementsOptions).toPromise();
        updateElements = true;
      }
      const options = this.stripeElementsService.mergeOptions(this.options, this.containerClass);
      if (changes.options || changes.containerClass || !this.element || updateElements) {
        if (this.element && !updateElements) {
          this.update(options);
        } else if (this.elements && updateElements) {
          this.createElement(options);
        }
      }
      this.state = "ready";
    });
  }
  ngOnInit() {
    return __async(this, null, function* () {
      const options = this.stripeElementsService.mergeOptions(this.options, this.containerClass);
      if (this.elementsProvider) {
        this.elementsSubscription = this.elementsProvider.elements.subscribe((elements) => {
          this.elements = elements;
          this.createElement(options);
          this.state = "ready";
        });
      } else if (this.state === "notready") {
        this.state = "starting";
        this.elements = yield this.stripeElementsService.elements(this.stripe).toPromise();
        this.createElement(options);
        this.state = "ready";
      }
    });
  }
  ngOnDestroy() {
    if (this.element) {
      this.element.destroy();
    }
    if (this.elementsSubscription) {
      this.elementsSubscription.unsubscribe();
    }
  }
  update(options) {
    this.element.update(options);
  }
  /**
   * @deprecated
   */
  getAffirmMessage() {
    return this.element;
  }
  createElement(options) {
    if (this.element) {
      this.element.unmount();
    }
    this.element = this.elements.create("affirmMessage", options);
    this.element.on("ready", () => this.ready.emit());
    this.element.mount(this.stripeElementRef.nativeElement);
    this.load.emit(this.element);
  }
  static ɵfac = function StripeAffirmMessageComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _StripeAffirmMessageComponent)(ɵɵdirectiveInject(StripeElementsService), ɵɵdirectiveInject(StripeElementsDirective, 8));
  };
  static ɵcmp = ɵɵdefineComponent({
    type: _StripeAffirmMessageComponent,
    selectors: [["ngx-stripe-affirm-message"]],
    contentQueries: function StripeAffirmMessageComponent_ContentQueries(rf, ctx, dirIndex) {
      if (rf & 1) {
        ɵɵcontentQuery(dirIndex, NgxStripeElementLoadingTemplateDirective, 5, TemplateRef);
      }
      if (rf & 2) {
        let _t;
        ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.loadingTemplate = _t.first);
      }
    },
    viewQuery: function StripeAffirmMessageComponent_Query(rf, ctx) {
      if (rf & 1) {
        ɵɵviewQuery(_c0, 5);
      }
      if (rf & 2) {
        let _t;
        ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.stripeElementRef = _t.first);
      }
    },
    inputs: {
      containerClass: "containerClass",
      options: "options",
      elementsOptions: "elementsOptions",
      stripe: "stripe"
    },
    outputs: {
      load: "load",
      ready: "ready"
    },
    standalone: true,
    features: [ɵɵNgOnChangesFeature, ɵɵStandaloneFeature],
    decls: 3,
    vars: 1,
    consts: [["stripeElementRef", ""], [1, "field"], [3, "ngTemplateOutlet"]],
    template: function StripeAffirmMessageComponent_Template(rf, ctx) {
      if (rf & 1) {
        ɵɵelementStart(0, "div", 1, 0);
        ɵɵtemplate(2, StripeAffirmMessageComponent_Conditional_2_Template, 1, 1, "ng-container", 2);
        ɵɵelementEnd();
      }
      if (rf & 2) {
        ɵɵadvance(2);
        ɵɵconditional(ctx.state !== "ready" && ctx.loadingTemplate ? 2 : -1);
      }
    },
    dependencies: [CommonModule, NgTemplateOutlet],
    encapsulation: 2
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(StripeAffirmMessageComponent, [{
    type: Component,
    args: [{
      selector: "ngx-stripe-affirm-message",
      standalone: true,
      template: `
    <div class="field" #stripeElementRef>
      @if (state !== 'ready' && loadingTemplate) {
        <ng-container [ngTemplateOutlet]="loadingTemplate" />
      }
    </div>
  `,
      imports: [CommonModule]
    }]
  }], () => [{
    type: StripeElementsService
  }, {
    type: StripeElementsDirective,
    decorators: [{
      type: Optional
    }]
  }], {
    loadingTemplate: [{
      type: ContentChild,
      args: [NgxStripeElementLoadingTemplateDirective, {
        read: TemplateRef
      }]
    }],
    stripeElementRef: [{
      type: ViewChild,
      args: ["stripeElementRef"]
    }],
    containerClass: [{
      type: Input
    }],
    options: [{
      type: Input
    }],
    elementsOptions: [{
      type: Input
    }],
    stripe: [{
      type: Input
    }],
    load: [{
      type: Output
    }],
    ready: [{
      type: Output
    }]
  });
})();
var StripeAfterpayClearpayMessageComponent = class _StripeAfterpayClearpayMessageComponent {
  stripeElementsService;
  elementsProvider;
  loadingTemplate;
  stripeElementRef;
  element;
  containerClass;
  options;
  elementsOptions;
  stripe;
  load = new EventEmitter();
  ready = new EventEmitter();
  elements;
  state = "notready";
  elementsSubscription;
  constructor(stripeElementsService, elementsProvider) {
    this.stripeElementsService = stripeElementsService;
    this.elementsProvider = elementsProvider;
  }
  ngOnChanges(changes) {
    return __async(this, null, function* () {
      this.state = "starting";
      let updateElements = false;
      if (!this.elementsProvider && (changes.elementsOptions || changes.stripe || !this.elements)) {
        this.elements = yield this.stripeElementsService.elements(this.stripe, this.elementsOptions).toPromise();
        updateElements = true;
      }
      const options = this.stripeElementsService.mergeOptions(this.options, this.containerClass);
      if (changes.options || changes.containerClass || !this.element || updateElements) {
        if (this.element && !updateElements) {
          this.update(options);
        } else if (this.elements && updateElements) {
          this.createElement(options);
        }
      }
      this.state = "ready";
    });
  }
  ngOnInit() {
    return __async(this, null, function* () {
      const options = this.stripeElementsService.mergeOptions(this.options, this.containerClass);
      if (this.elementsProvider) {
        this.elementsSubscription = this.elementsProvider.elements.subscribe((elements) => {
          this.elements = elements;
          this.createElement(options);
          this.state = "ready";
        });
      } else if (this.state === "notready") {
        this.state = "starting";
        this.elements = yield this.stripeElementsService.elements(this.stripe).toPromise();
        this.createElement(options);
        this.state = "ready";
      }
    });
  }
  ngOnDestroy() {
    if (this.element) {
      this.element.destroy();
    }
    if (this.elementsSubscription) {
      this.elementsSubscription.unsubscribe();
    }
  }
  update(options) {
    this.element.update(options);
  }
  /**
   * @deprecated
   */
  getAfterpayClearpayMessage() {
    return this.element;
  }
  createElement(options) {
    if (this.element) {
      this.element.unmount();
    }
    this.element = this.elements.create("afterpayClearpayMessage", options);
    this.element.on("ready", () => this.ready.emit());
    this.element.mount(this.stripeElementRef.nativeElement);
    this.load.emit(this.element);
  }
  static ɵfac = function StripeAfterpayClearpayMessageComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _StripeAfterpayClearpayMessageComponent)(ɵɵdirectiveInject(StripeElementsService), ɵɵdirectiveInject(StripeElementsDirective, 8));
  };
  static ɵcmp = ɵɵdefineComponent({
    type: _StripeAfterpayClearpayMessageComponent,
    selectors: [["ngx-stripe-afterpay-clearpay-message"]],
    contentQueries: function StripeAfterpayClearpayMessageComponent_ContentQueries(rf, ctx, dirIndex) {
      if (rf & 1) {
        ɵɵcontentQuery(dirIndex, NgxStripeElementLoadingTemplateDirective, 5, TemplateRef);
      }
      if (rf & 2) {
        let _t;
        ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.loadingTemplate = _t.first);
      }
    },
    viewQuery: function StripeAfterpayClearpayMessageComponent_Query(rf, ctx) {
      if (rf & 1) {
        ɵɵviewQuery(_c0, 5);
      }
      if (rf & 2) {
        let _t;
        ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.stripeElementRef = _t.first);
      }
    },
    inputs: {
      containerClass: "containerClass",
      options: "options",
      elementsOptions: "elementsOptions",
      stripe: "stripe"
    },
    outputs: {
      load: "load",
      ready: "ready"
    },
    standalone: true,
    features: [ɵɵNgOnChangesFeature, ɵɵStandaloneFeature],
    decls: 3,
    vars: 1,
    consts: [["stripeElementRef", ""], [1, "field"], [3, "ngTemplateOutlet"]],
    template: function StripeAfterpayClearpayMessageComponent_Template(rf, ctx) {
      if (rf & 1) {
        ɵɵelementStart(0, "div", 1, 0);
        ɵɵtemplate(2, StripeAfterpayClearpayMessageComponent_Conditional_2_Template, 1, 1, "ng-container", 2);
        ɵɵelementEnd();
      }
      if (rf & 2) {
        ɵɵadvance(2);
        ɵɵconditional(ctx.state !== "ready" && ctx.loadingTemplate ? 2 : -1);
      }
    },
    dependencies: [CommonModule, NgTemplateOutlet],
    encapsulation: 2
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(StripeAfterpayClearpayMessageComponent, [{
    type: Component,
    args: [{
      selector: "ngx-stripe-afterpay-clearpay-message",
      standalone: true,
      template: `
    <div class="field" #stripeElementRef>
      @if (state !== 'ready' && loadingTemplate) {
        <ng-container [ngTemplateOutlet]="loadingTemplate" />
      }
    </div>
  `,
      imports: [CommonModule]
    }]
  }], () => [{
    type: StripeElementsService
  }, {
    type: StripeElementsDirective,
    decorators: [{
      type: Optional
    }]
  }], {
    loadingTemplate: [{
      type: ContentChild,
      args: [NgxStripeElementLoadingTemplateDirective, {
        read: TemplateRef
      }]
    }],
    stripeElementRef: [{
      type: ViewChild,
      args: ["stripeElementRef"]
    }],
    containerClass: [{
      type: Input
    }],
    options: [{
      type: Input
    }],
    elementsOptions: [{
      type: Input
    }],
    stripe: [{
      type: Input
    }],
    load: [{
      type: Output
    }],
    ready: [{
      type: Output
    }]
  });
})();
var StripeCardComponent = class _StripeCardComponent {
  cdr;
  stripeElementsService;
  elementsProvider;
  loadingTemplate;
  stripeElementRef;
  element;
  containerClass;
  options;
  elementsOptions;
  stripe;
  load = new EventEmitter();
  blur = new EventEmitter();
  change = new EventEmitter();
  focus = new EventEmitter();
  ready = new EventEmitter();
  escape = new EventEmitter();
  elements;
  state = "notready";
  elementsSubscription;
  constructor(cdr, stripeElementsService, elementsProvider) {
    this.cdr = cdr;
    this.stripeElementsService = stripeElementsService;
    this.elementsProvider = elementsProvider;
  }
  ngOnChanges(changes) {
    return __async(this, null, function* () {
      this.state = "starting";
      let updateElements = false;
      if (!this.elementsProvider && (changes.elementsOptions || changes.stripe || !this.elements)) {
        this.elements = yield this.stripeElementsService.elements(this.stripe, this.elementsOptions).toPromise();
        updateElements = true;
      }
      const options = this.stripeElementsService.mergeOptions(this.options, this.containerClass);
      if (changes.options || changes.containerClass || !this.element || updateElements) {
        if (this.element && !updateElements) {
          this.update(options);
        } else if (this.elements && updateElements) {
          this.createElement(options);
        }
      }
    });
  }
  ngOnInit() {
    return __async(this, null, function* () {
      const options = this.stripeElementsService.mergeOptions(this.options, this.containerClass);
      if (this.elementsProvider) {
        this.elementsSubscription = this.elementsProvider.elements.subscribe((elements) => {
          this.elements = elements;
          this.createElement(options);
        });
      } else if (this.state === "notready") {
        this.state = "starting";
        this.elements = yield this.stripeElementsService.elements(this.stripe).toPromise();
        this.createElement(options);
      }
    });
  }
  ngOnDestroy() {
    if (this.element) {
      this.element.destroy();
    }
    if (this.elementsSubscription) {
      this.elementsSubscription.unsubscribe();
    }
  }
  update(options) {
    this.element.update(options);
  }
  /**
   * @deprecated
   */
  getCard() {
    return this.element;
  }
  createElement(options = {}) {
    this.state = "ready";
    this.cdr.detectChanges();
    if (this.element) {
      this.element.unmount();
    }
    this.element = this.elements.create("card", options);
    this.element.on("change", (ev) => this.change.emit(ev));
    this.element.on("blur", () => this.blur.emit());
    this.element.on("focus", () => this.focus.emit());
    this.element.on("ready", () => this.ready.emit());
    this.element.on("escape", () => this.escape.emit());
    this.element.mount(this.stripeElementRef.nativeElement);
    this.load.emit(this.element);
  }
  static ɵfac = function StripeCardComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _StripeCardComponent)(ɵɵdirectiveInject(ChangeDetectorRef), ɵɵdirectiveInject(StripeElementsService), ɵɵdirectiveInject(StripeElementsDirective, 8));
  };
  static ɵcmp = ɵɵdefineComponent({
    type: _StripeCardComponent,
    selectors: [["ngx-stripe-card"]],
    contentQueries: function StripeCardComponent_ContentQueries(rf, ctx, dirIndex) {
      if (rf & 1) {
        ɵɵcontentQuery(dirIndex, NgxStripeElementLoadingTemplateDirective, 5, TemplateRef);
      }
      if (rf & 2) {
        let _t;
        ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.loadingTemplate = _t.first);
      }
    },
    viewQuery: function StripeCardComponent_Query(rf, ctx) {
      if (rf & 1) {
        ɵɵviewQuery(_c0, 5);
      }
      if (rf & 2) {
        let _t;
        ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.stripeElementRef = _t.first);
      }
    },
    inputs: {
      containerClass: "containerClass",
      options: "options",
      elementsOptions: "elementsOptions",
      stripe: "stripe"
    },
    outputs: {
      load: "load",
      blur: "blur",
      change: "change",
      focus: "focus",
      ready: "ready",
      escape: "escape"
    },
    standalone: true,
    features: [ɵɵNgOnChangesFeature, ɵɵStandaloneFeature],
    decls: 3,
    vars: 1,
    consts: [["stripeElementRef", ""], [1, "field"], [3, "ngTemplateOutlet"]],
    template: function StripeCardComponent_Template(rf, ctx) {
      if (rf & 1) {
        ɵɵelementStart(0, "div", 1, 0);
        ɵɵtemplate(2, StripeCardComponent_Conditional_2_Template, 1, 1, "ng-container", 2);
        ɵɵelementEnd();
      }
      if (rf & 2) {
        ɵɵadvance(2);
        ɵɵconditional(ctx.state !== "ready" && ctx.loadingTemplate ? 2 : -1);
      }
    },
    dependencies: [CommonModule, NgTemplateOutlet],
    encapsulation: 2
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(StripeCardComponent, [{
    type: Component,
    args: [{
      selector: "ngx-stripe-card",
      standalone: true,
      template: `
    <div class="field" #stripeElementRef>
      @if (state !== 'ready' && loadingTemplate) {
        <ng-container [ngTemplateOutlet]="loadingTemplate" />
      }
    </div>
  `,
      imports: [CommonModule]
    }]
  }], () => [{
    type: ChangeDetectorRef
  }, {
    type: StripeElementsService
  }, {
    type: StripeElementsDirective,
    decorators: [{
      type: Optional
    }]
  }], {
    loadingTemplate: [{
      type: ContentChild,
      args: [NgxStripeElementLoadingTemplateDirective, {
        read: TemplateRef
      }]
    }],
    stripeElementRef: [{
      type: ViewChild,
      args: ["stripeElementRef"]
    }],
    containerClass: [{
      type: Input
    }],
    options: [{
      type: Input
    }],
    elementsOptions: [{
      type: Input
    }],
    stripe: [{
      type: Input
    }],
    load: [{
      type: Output
    }],
    blur: [{
      type: Output
    }],
    change: [{
      type: Output
    }],
    focus: [{
      type: Output
    }],
    ready: [{
      type: Output
    }],
    escape: [{
      type: Output
    }]
  });
})();
var StripeCardGroupDirective = class _StripeCardGroupDirective {
  stripeElementsService;
  elementsOptions;
  stripe;
  elements = new EventEmitter();
  load = new EventEmitter();
  blur = new EventEmitter();
  change = new EventEmitter();
  focus = new EventEmitter();
  ready = new EventEmitter();
  escape = new EventEmitter();
  _elements;
  state = "notready";
  constructor(stripeElementsService) {
    this.stripeElementsService = stripeElementsService;
  }
  ngOnChanges(changes) {
    return __async(this, null, function* () {
      this.state = "starting";
      const elementsOptions = this.elementsOptions;
      const stripe = this.stripe;
      if (changes.elementsOptions || changes.stripe || !this._elements) {
        this._elements = yield this.stripeElementsService.elements(stripe, elementsOptions).toPromise();
        this.elements.emit(this._elements);
      }
      this.state = "ready";
    });
  }
  ngOnInit() {
    return __async(this, null, function* () {
      if (this.state === "notready") {
        this.state = "starting";
        this._elements = yield this.stripeElementsService.elements(this.stripe).toPromise();
        this.elements.emit(this._elements);
        this.state = "ready";
      }
    });
  }
  static ɵfac = function StripeCardGroupDirective_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _StripeCardGroupDirective)(ɵɵdirectiveInject(StripeElementsService));
  };
  static ɵdir = ɵɵdefineDirective({
    type: _StripeCardGroupDirective,
    selectors: [["ngx-stripe-card-group"], ["", "ngxStripeCardGroup", ""]],
    inputs: {
      elementsOptions: "elementsOptions",
      stripe: "stripe"
    },
    outputs: {
      elements: "elements",
      load: "load",
      blur: "blur",
      change: "change",
      focus: "focus",
      ready: "ready",
      escape: "escape"
    },
    standalone: true,
    features: [ɵɵNgOnChangesFeature]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(StripeCardGroupDirective, [{
    type: Directive,
    args: [{
      selector: "ngx-stripe-card-group,[ngxStripeCardGroup]",
      standalone: true
    }]
  }], () => [{
    type: StripeElementsService
  }], {
    elementsOptions: [{
      type: Input
    }],
    stripe: [{
      type: Input
    }],
    elements: [{
      type: Output
    }],
    load: [{
      type: Output
    }],
    blur: [{
      type: Output
    }],
    change: [{
      type: Output
    }],
    focus: [{
      type: Output
    }],
    ready: [{
      type: Output
    }],
    escape: [{
      type: Output
    }]
  });
})();
var StripeCardNumberComponent = class _StripeCardNumberComponent {
  stripeElementsService;
  cardGroup;
  elementsProvider;
  loadingTemplate;
  stripeElementRef;
  element;
  containerClass;
  options;
  load = new EventEmitter();
  blur = new EventEmitter();
  change = new EventEmitter();
  focus = new EventEmitter();
  ready = new EventEmitter();
  escape = new EventEmitter();
  elements;
  elementsSubscription;
  constructor(stripeElementsService, cardGroup, elementsProvider) {
    this.stripeElementsService = stripeElementsService;
    this.cardGroup = cardGroup;
    this.elementsProvider = elementsProvider;
  }
  ngOnChanges(changes) {
    return __async(this, null, function* () {
      if (changes.options || changes.containerClass) {
        this.setupElement("options");
      }
    });
  }
  ngOnInit() {
    if (this.cardGroup) {
      this.elementsSubscription = this.cardGroup.elements.subscribe((elements) => {
        this.elements = elements;
        this.setupElement("elements");
      });
    } else if (this.elementsProvider) {
      this.elementsSubscription = this.elementsProvider.elements.subscribe((elements) => {
        this.elements = elements;
        this.setupElement("elements");
      });
    } else {
      throw new Error("StripeCardNumberComponent must have StripeCardGroupDirective or StripeElementsDirective parent");
    }
  }
  ngOnDestroy() {
    if (this.element) {
      this.element.destroy();
    }
    if (this.elementsSubscription) {
      this.elementsSubscription.unsubscribe();
    }
  }
  update(options) {
    this.element.update(options);
  }
  /**
   * @deprecated
   */
  getCardNumber() {
    return this.element;
  }
  setupElement(source) {
    const options = this.stripeElementsService.mergeOptions(this.options, this.containerClass);
    if (this.element && source === "options") {
      this.update(options);
    } else if (this.elements && source === "elements") {
      this.element = this.elements.create("cardNumber", options);
      this.element.on("change", (ev) => {
        this.change.emit(ev);
        this.cardGroup?.change.emit(ev);
      });
      this.element.on("blur", () => {
        this.blur.emit();
        this.cardGroup?.blur.emit();
      });
      this.element.on("focus", () => {
        this.focus.emit();
        this.cardGroup?.focus.emit();
      });
      this.element.on("ready", () => {
        this.ready.emit();
        this.cardGroup?.ready.emit();
      });
      this.element.on("escape", () => {
        this.escape.emit();
        this.cardGroup?.escape.emit();
      });
      this.element.mount(this.stripeElementRef.nativeElement);
      this.load.emit(this.element);
      this.cardGroup?.load.emit(this.element);
    }
  }
  static ɵfac = function StripeCardNumberComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _StripeCardNumberComponent)(ɵɵdirectiveInject(StripeElementsService), ɵɵdirectiveInject(StripeCardGroupDirective, 8), ɵɵdirectiveInject(StripeElementsDirective, 8));
  };
  static ɵcmp = ɵɵdefineComponent({
    type: _StripeCardNumberComponent,
    selectors: [["ngx-stripe-card-number"]],
    contentQueries: function StripeCardNumberComponent_ContentQueries(rf, ctx, dirIndex) {
      if (rf & 1) {
        ɵɵcontentQuery(dirIndex, NgxStripeElementLoadingTemplateDirective, 5, TemplateRef);
      }
      if (rf & 2) {
        let _t;
        ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.loadingTemplate = _t.first);
      }
    },
    viewQuery: function StripeCardNumberComponent_Query(rf, ctx) {
      if (rf & 1) {
        ɵɵviewQuery(_c0, 5);
      }
      if (rf & 2) {
        let _t;
        ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.stripeElementRef = _t.first);
      }
    },
    inputs: {
      containerClass: "containerClass",
      options: "options"
    },
    outputs: {
      load: "load",
      blur: "blur",
      change: "change",
      focus: "focus",
      ready: "ready",
      escape: "escape"
    },
    standalone: true,
    features: [ɵɵNgOnChangesFeature, ɵɵStandaloneFeature],
    decls: 3,
    vars: 1,
    consts: [["stripeElementRef", ""], [1, "field"], [3, "ngTemplateOutlet"]],
    template: function StripeCardNumberComponent_Template(rf, ctx) {
      if (rf & 1) {
        ɵɵelementStart(0, "div", 1, 0);
        ɵɵtemplate(2, StripeCardNumberComponent_Conditional_2_Template, 1, 1, "ng-container", 2);
        ɵɵelementEnd();
      }
      if (rf & 2) {
        ɵɵadvance(2);
        ɵɵconditional(ctx.cardGroup && ctx.cardGroup.state !== "ready" && ctx.loadingTemplate ? 2 : -1);
      }
    },
    dependencies: [CommonModule, NgTemplateOutlet],
    encapsulation: 2
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(StripeCardNumberComponent, [{
    type: Component,
    args: [{
      selector: "ngx-stripe-card-number",
      standalone: true,
      template: `
    <div class="field" #stripeElementRef>
      @if (cardGroup && cardGroup.state !== 'ready' && loadingTemplate) {
        <ng-container [ngTemplateOutlet]="loadingTemplate" />
      }
    </div>
  `,
      imports: [CommonModule]
    }]
  }], () => [{
    type: StripeElementsService
  }, {
    type: StripeCardGroupDirective,
    decorators: [{
      type: Optional
    }]
  }, {
    type: StripeElementsDirective,
    decorators: [{
      type: Optional
    }]
  }], {
    loadingTemplate: [{
      type: ContentChild,
      args: [NgxStripeElementLoadingTemplateDirective, {
        read: TemplateRef
      }]
    }],
    stripeElementRef: [{
      type: ViewChild,
      args: ["stripeElementRef"]
    }],
    containerClass: [{
      type: Input
    }],
    options: [{
      type: Input
    }],
    load: [{
      type: Output
    }],
    blur: [{
      type: Output
    }],
    change: [{
      type: Output
    }],
    focus: [{
      type: Output
    }],
    ready: [{
      type: Output
    }],
    escape: [{
      type: Output
    }]
  });
})();
var StripeCardExpiryComponent = class _StripeCardExpiryComponent {
  stripeElementsService;
  cardGroup;
  elementsProvider;
  loadingTemplate;
  stripeElementRef;
  element;
  containerClass;
  options;
  load = new EventEmitter();
  blur = new EventEmitter();
  change = new EventEmitter();
  focus = new EventEmitter();
  ready = new EventEmitter();
  escape = new EventEmitter();
  elements;
  elementsSubscription;
  constructor(stripeElementsService, cardGroup, elementsProvider) {
    this.stripeElementsService = stripeElementsService;
    this.cardGroup = cardGroup;
    this.elementsProvider = elementsProvider;
  }
  ngOnChanges(changes) {
    return __async(this, null, function* () {
      if (changes.options || changes.containerClass) {
        this.setupElement("options");
      }
    });
  }
  ngOnInit() {
    if (this.cardGroup) {
      this.elementsSubscription = this.cardGroup.elements.subscribe((elements) => {
        this.elements = elements;
        this.setupElement("elements");
      });
    } else if (this.elementsProvider) {
      this.elementsSubscription = this.elementsProvider.elements.subscribe((elements) => {
        this.elements = elements;
        this.setupElement("elements");
      });
    } else {
      throw new Error("StripeCardExpiryComponent must have StripeCardGroupDirective or StripeElementsDirective parent");
    }
  }
  ngOnDestroy() {
    if (this.element) {
      this.element.destroy();
    }
    if (this.elementsSubscription) {
      this.elementsSubscription.unsubscribe();
    }
  }
  update(options) {
    this.element.update(options);
  }
  /**
   * @deprecated
   */
  getCardExpiry() {
    return this.element;
  }
  setupElement(source) {
    const options = this.stripeElementsService.mergeOptions(this.options, this.containerClass);
    if (this.element && source === "options") {
      this.update(options);
    } else if (this.elements && source === "elements") {
      this.element = this.elements.create("cardExpiry", options);
      this.element.on("change", (ev) => {
        this.change.emit(ev);
        this.cardGroup?.change.emit(ev);
      });
      this.element.on("blur", () => {
        this.blur.emit();
        this.cardGroup?.blur.emit();
      });
      this.element.on("focus", () => {
        this.focus.emit();
        this.cardGroup?.focus.emit();
      });
      this.element.on("ready", () => {
        this.ready.emit();
        this.cardGroup?.ready.emit();
      });
      this.element.on("escape", () => {
        this.escape.emit();
        this.cardGroup?.escape.emit();
      });
      this.element.mount(this.stripeElementRef.nativeElement);
      this.load.emit(this.element);
      this.cardGroup?.load.emit(this.element);
    }
  }
  static ɵfac = function StripeCardExpiryComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _StripeCardExpiryComponent)(ɵɵdirectiveInject(StripeElementsService), ɵɵdirectiveInject(StripeCardGroupDirective, 8), ɵɵdirectiveInject(StripeElementsDirective, 8));
  };
  static ɵcmp = ɵɵdefineComponent({
    type: _StripeCardExpiryComponent,
    selectors: [["ngx-stripe-card-expiry"]],
    contentQueries: function StripeCardExpiryComponent_ContentQueries(rf, ctx, dirIndex) {
      if (rf & 1) {
        ɵɵcontentQuery(dirIndex, NgxStripeElementLoadingTemplateDirective, 5, TemplateRef);
      }
      if (rf & 2) {
        let _t;
        ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.loadingTemplate = _t.first);
      }
    },
    viewQuery: function StripeCardExpiryComponent_Query(rf, ctx) {
      if (rf & 1) {
        ɵɵviewQuery(_c0, 5);
      }
      if (rf & 2) {
        let _t;
        ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.stripeElementRef = _t.first);
      }
    },
    inputs: {
      containerClass: "containerClass",
      options: "options"
    },
    outputs: {
      load: "load",
      blur: "blur",
      change: "change",
      focus: "focus",
      ready: "ready",
      escape: "escape"
    },
    standalone: true,
    features: [ɵɵNgOnChangesFeature, ɵɵStandaloneFeature],
    decls: 3,
    vars: 1,
    consts: [["stripeElementRef", ""], [1, "field"], [3, "ngTemplateOutlet"]],
    template: function StripeCardExpiryComponent_Template(rf, ctx) {
      if (rf & 1) {
        ɵɵelementStart(0, "div", 1, 0);
        ɵɵtemplate(2, StripeCardExpiryComponent_Conditional_2_Template, 1, 1, "ng-container", 2);
        ɵɵelementEnd();
      }
      if (rf & 2) {
        ɵɵadvance(2);
        ɵɵconditional(ctx.cardGroup && ctx.cardGroup.state !== "ready" && ctx.loadingTemplate ? 2 : -1);
      }
    },
    dependencies: [CommonModule, NgTemplateOutlet],
    encapsulation: 2
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(StripeCardExpiryComponent, [{
    type: Component,
    args: [{
      selector: "ngx-stripe-card-expiry",
      standalone: true,
      template: `
    <div class="field" #stripeElementRef>
      @if (cardGroup && cardGroup.state !== 'ready' && loadingTemplate) {
        <ng-container [ngTemplateOutlet]="loadingTemplate" />
      }
    </div>
  `,
      imports: [CommonModule]
    }]
  }], () => [{
    type: StripeElementsService
  }, {
    type: StripeCardGroupDirective,
    decorators: [{
      type: Optional
    }]
  }, {
    type: StripeElementsDirective,
    decorators: [{
      type: Optional
    }]
  }], {
    loadingTemplate: [{
      type: ContentChild,
      args: [NgxStripeElementLoadingTemplateDirective, {
        read: TemplateRef
      }]
    }],
    stripeElementRef: [{
      type: ViewChild,
      args: ["stripeElementRef"]
    }],
    containerClass: [{
      type: Input
    }],
    options: [{
      type: Input
    }],
    load: [{
      type: Output
    }],
    blur: [{
      type: Output
    }],
    change: [{
      type: Output
    }],
    focus: [{
      type: Output
    }],
    ready: [{
      type: Output
    }],
    escape: [{
      type: Output
    }]
  });
})();
var StripeCardCvcComponent = class _StripeCardCvcComponent {
  stripeElementsService;
  cardGroup;
  elementsProvider;
  loadingTemplate;
  stripeElementRef;
  element;
  containerClass;
  options;
  load = new EventEmitter();
  blur = new EventEmitter();
  change = new EventEmitter();
  focus = new EventEmitter();
  ready = new EventEmitter();
  escape = new EventEmitter();
  elements;
  elementsSubscription;
  constructor(stripeElementsService, cardGroup, elementsProvider) {
    this.stripeElementsService = stripeElementsService;
    this.cardGroup = cardGroup;
    this.elementsProvider = elementsProvider;
  }
  ngOnChanges(changes) {
    return __async(this, null, function* () {
      if (changes.options || changes.containerClass) {
        this.setupElement("options");
      }
    });
  }
  ngOnInit() {
    if (this.cardGroup) {
      this.elementsSubscription = this.cardGroup.elements.subscribe((elements) => {
        this.elements = elements;
        this.setupElement("elements");
      });
    } else if (this.elementsProvider) {
      this.elementsSubscription = this.elementsProvider.elements.subscribe((elements) => {
        this.elements = elements;
        this.setupElement("elements");
      });
    } else {
      throw new Error("StripeCardCvcComponent must have StripeCardGroupDirective or StripeElementsDirective parent");
    }
  }
  ngOnDestroy() {
    if (this.element) {
      this.element.destroy();
    }
    if (this.elementsSubscription) {
      this.elementsSubscription.unsubscribe();
    }
  }
  update(options) {
    this.element.update(options);
  }
  /**
   * @deprecated
   */
  getCardCvc() {
    return this.element;
  }
  setupElement(source) {
    const options = this.stripeElementsService.mergeOptions(this.options, this.containerClass);
    if (this.element && source === "options") {
      this.update(options);
    } else if (this.elements && source === "elements") {
      this.element = this.elements.create("cardCvc", options);
      this.element.on("change", (ev) => {
        this.change.emit(ev);
        this.cardGroup?.change.emit(ev);
      });
      this.element.on("blur", () => {
        this.blur.emit();
        this.cardGroup?.blur.emit();
      });
      this.element.on("focus", () => {
        this.focus.emit();
        this.cardGroup?.focus.emit();
      });
      this.element.on("ready", () => {
        this.ready.emit();
        this.cardGroup?.ready.emit();
      });
      this.element.on("escape", () => {
        this.escape.emit();
        this.cardGroup?.escape.emit();
      });
      this.element.mount(this.stripeElementRef.nativeElement);
      this.load.emit(this.element);
      this.cardGroup?.load.emit(this.element);
    }
  }
  static ɵfac = function StripeCardCvcComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _StripeCardCvcComponent)(ɵɵdirectiveInject(StripeElementsService), ɵɵdirectiveInject(StripeCardGroupDirective, 8), ɵɵdirectiveInject(StripeElementsDirective, 8));
  };
  static ɵcmp = ɵɵdefineComponent({
    type: _StripeCardCvcComponent,
    selectors: [["ngx-stripe-card-cvc"]],
    contentQueries: function StripeCardCvcComponent_ContentQueries(rf, ctx, dirIndex) {
      if (rf & 1) {
        ɵɵcontentQuery(dirIndex, NgxStripeElementLoadingTemplateDirective, 5, TemplateRef);
      }
      if (rf & 2) {
        let _t;
        ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.loadingTemplate = _t.first);
      }
    },
    viewQuery: function StripeCardCvcComponent_Query(rf, ctx) {
      if (rf & 1) {
        ɵɵviewQuery(_c0, 5);
      }
      if (rf & 2) {
        let _t;
        ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.stripeElementRef = _t.first);
      }
    },
    inputs: {
      containerClass: "containerClass",
      options: "options"
    },
    outputs: {
      load: "load",
      blur: "blur",
      change: "change",
      focus: "focus",
      ready: "ready",
      escape: "escape"
    },
    standalone: true,
    features: [ɵɵNgOnChangesFeature, ɵɵStandaloneFeature],
    decls: 3,
    vars: 1,
    consts: [["stripeElementRef", ""], [1, "field"], [3, "ngTemplateOutlet"]],
    template: function StripeCardCvcComponent_Template(rf, ctx) {
      if (rf & 1) {
        ɵɵelementStart(0, "div", 1, 0);
        ɵɵtemplate(2, StripeCardCvcComponent_Conditional_2_Template, 1, 1, "ng-container", 2);
        ɵɵelementEnd();
      }
      if (rf & 2) {
        ɵɵadvance(2);
        ɵɵconditional(ctx.cardGroup && ctx.cardGroup.state !== "ready" && ctx.loadingTemplate ? 2 : -1);
      }
    },
    dependencies: [CommonModule, NgTemplateOutlet],
    encapsulation: 2
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(StripeCardCvcComponent, [{
    type: Component,
    args: [{
      selector: "ngx-stripe-card-cvc",
      standalone: true,
      template: `
    <div class="field" #stripeElementRef>
      @if (cardGroup && cardGroup.state !== 'ready' && loadingTemplate) {
        <ng-container [ngTemplateOutlet]="loadingTemplate" />
      }
    </div>
  `,
      imports: [CommonModule]
    }]
  }], () => [{
    type: StripeElementsService
  }, {
    type: StripeCardGroupDirective,
    decorators: [{
      type: Optional
    }]
  }, {
    type: StripeElementsDirective,
    decorators: [{
      type: Optional
    }]
  }], {
    loadingTemplate: [{
      type: ContentChild,
      args: [NgxStripeElementLoadingTemplateDirective, {
        read: TemplateRef
      }]
    }],
    stripeElementRef: [{
      type: ViewChild,
      args: ["stripeElementRef"]
    }],
    containerClass: [{
      type: Input
    }],
    options: [{
      type: Input
    }],
    load: [{
      type: Output
    }],
    blur: [{
      type: Output
    }],
    change: [{
      type: Output
    }],
    focus: [{
      type: Output
    }],
    ready: [{
      type: Output
    }],
    escape: [{
      type: Output
    }]
  });
})();
var StripeEpsBankComponent = class _StripeEpsBankComponent {
  stripeElementsService;
  elementsProvider;
  loadingTemplate;
  stripeElementRef;
  element;
  containerClass;
  options;
  elementsOptions;
  stripe;
  load = new EventEmitter();
  blur = new EventEmitter();
  change = new EventEmitter();
  focus = new EventEmitter();
  ready = new EventEmitter();
  escape = new EventEmitter();
  elements;
  state = "notready";
  elementsSubscription;
  constructor(stripeElementsService, elementsProvider) {
    this.stripeElementsService = stripeElementsService;
    this.elementsProvider = elementsProvider;
  }
  ngOnChanges(changes) {
    return __async(this, null, function* () {
      this.state = "starting";
      let updateElements = false;
      if (!this.elementsProvider && (changes.elementsOptions || changes.stripe || !this.elements)) {
        this.elements = yield this.stripeElementsService.elements(this.stripe, this.elementsOptions).toPromise();
        updateElements = true;
      }
      const options = this.stripeElementsService.mergeOptions(this.options, this.containerClass);
      if (changes.options || changes.containerClass || !this.element || updateElements) {
        if (this.element && !updateElements) {
          this.update(options);
        } else if (this.elements && updateElements) {
          this.createElement(options);
        }
      }
      this.state = "ready";
    });
  }
  ngOnInit() {
    return __async(this, null, function* () {
      const options = this.stripeElementsService.mergeOptions(this.options, this.containerClass);
      if (this.elementsProvider) {
        this.elementsSubscription = this.elementsProvider.elements.subscribe((elements) => {
          this.elements = elements;
          this.createElement(options);
          this.state = "ready";
        });
      } else if (this.state === "notready") {
        this.state = "starting";
        this.elements = yield this.stripeElementsService.elements(this.stripe).toPromise();
        this.createElement(options);
        this.state = "ready";
      }
    });
  }
  ngOnDestroy() {
    if (this.element) {
      this.element.destroy();
    }
    if (this.elementsSubscription) {
      this.elementsSubscription.unsubscribe();
    }
  }
  update(options) {
    this.element.update(options);
  }
  /**
   * @deprecated
   */
  getEpsBankelement() {
    return this.element;
  }
  createElement(options) {
    if (this.element) {
      this.element.unmount();
    }
    this.element = this.elements.create("epsBank", options);
    this.element.on("change", (ev) => this.change.emit(ev));
    this.element.on("blur", () => this.blur.emit());
    this.element.on("focus", () => this.focus.emit());
    this.element.on("ready", () => this.ready.emit());
    this.element.on("escape", () => this.escape.emit());
    this.element.mount(this.stripeElementRef.nativeElement);
    this.load.emit(this.element);
  }
  static ɵfac = function StripeEpsBankComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _StripeEpsBankComponent)(ɵɵdirectiveInject(StripeElementsService), ɵɵdirectiveInject(StripeElementsDirective, 8));
  };
  static ɵcmp = ɵɵdefineComponent({
    type: _StripeEpsBankComponent,
    selectors: [["ngx-stripe-eps-bank"]],
    contentQueries: function StripeEpsBankComponent_ContentQueries(rf, ctx, dirIndex) {
      if (rf & 1) {
        ɵɵcontentQuery(dirIndex, NgxStripeElementLoadingTemplateDirective, 5, TemplateRef);
      }
      if (rf & 2) {
        let _t;
        ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.loadingTemplate = _t.first);
      }
    },
    viewQuery: function StripeEpsBankComponent_Query(rf, ctx) {
      if (rf & 1) {
        ɵɵviewQuery(_c0, 5);
      }
      if (rf & 2) {
        let _t;
        ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.stripeElementRef = _t.first);
      }
    },
    inputs: {
      containerClass: "containerClass",
      options: "options",
      elementsOptions: "elementsOptions",
      stripe: "stripe"
    },
    outputs: {
      load: "load",
      blur: "blur",
      change: "change",
      focus: "focus",
      ready: "ready",
      escape: "escape"
    },
    standalone: true,
    features: [ɵɵNgOnChangesFeature, ɵɵStandaloneFeature],
    decls: 3,
    vars: 1,
    consts: [["stripeElementRef", ""], [1, "field"], [3, "ngTemplateOutlet"]],
    template: function StripeEpsBankComponent_Template(rf, ctx) {
      if (rf & 1) {
        ɵɵelementStart(0, "div", 1, 0);
        ɵɵtemplate(2, StripeEpsBankComponent_Conditional_2_Template, 1, 1, "ng-container", 2);
        ɵɵelementEnd();
      }
      if (rf & 2) {
        ɵɵadvance(2);
        ɵɵconditional(ctx.state !== "ready" && ctx.loadingTemplate ? 2 : -1);
      }
    },
    dependencies: [CommonModule, NgTemplateOutlet],
    encapsulation: 2
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(StripeEpsBankComponent, [{
    type: Component,
    args: [{
      selector: "ngx-stripe-eps-bank",
      standalone: true,
      template: `
    <div class="field" #stripeElementRef>
      @if (state !== 'ready' && loadingTemplate) {
        <ng-container [ngTemplateOutlet]="loadingTemplate" />
      }
    </div>
  `,
      imports: [CommonModule]
    }]
  }], () => [{
    type: StripeElementsService
  }, {
    type: StripeElementsDirective,
    decorators: [{
      type: Optional
    }]
  }], {
    loadingTemplate: [{
      type: ContentChild,
      args: [NgxStripeElementLoadingTemplateDirective, {
        read: TemplateRef
      }]
    }],
    stripeElementRef: [{
      type: ViewChild,
      args: ["stripeElementRef"]
    }],
    containerClass: [{
      type: Input
    }],
    options: [{
      type: Input
    }],
    elementsOptions: [{
      type: Input
    }],
    stripe: [{
      type: Input
    }],
    load: [{
      type: Output
    }],
    blur: [{
      type: Output
    }],
    change: [{
      type: Output
    }],
    focus: [{
      type: Output
    }],
    ready: [{
      type: Output
    }],
    escape: [{
      type: Output
    }]
  });
})();
var StripeExpressCheckoutComponent = class _StripeExpressCheckoutComponent {
  stripeElementsService;
  elementsProvider;
  loadingTemplate;
  stripeElementRef;
  element;
  containerClass;
  options;
  elementsOptions;
  stripe;
  load = new EventEmitter();
  blur = new EventEmitter();
  cancel = new EventEmitter();
  clicked = new EventEmitter();
  confirm = new EventEmitter();
  focus = new EventEmitter();
  ready = new EventEmitter();
  escape = new EventEmitter();
  loaderror = new EventEmitter();
  shippingaddresschange = new EventEmitter();
  shippingratechange = new EventEmitter();
  elements;
  state = "notready";
  elementsSubscription;
  constructor(stripeElementsService, elementsProvider) {
    this.stripeElementsService = stripeElementsService;
    this.elementsProvider = elementsProvider;
  }
  ngOnChanges(changes) {
    return __async(this, null, function* () {
      this.state = "starting";
      let updateElements = false;
      if (!this.elementsProvider && (changes.elementsOptions || changes.stripe || !this.elements)) {
        this.elements = yield this.stripeElementsService.elements(this.stripe, this.elementsOptions).toPromise();
        updateElements = true;
      }
      const options = this.stripeElementsService.mergeOptions(this.options, this.containerClass);
      if (changes.options || changes.containerClass || !this.element || updateElements) {
        if (this.elements && updateElements) {
          this.createElement(options);
        }
      }
      this.state = "ready";
    });
  }
  ngOnInit() {
    return __async(this, null, function* () {
      const options = this.stripeElementsService.mergeOptions(this.options, this.containerClass);
      if (this.elementsProvider) {
        this.elementsSubscription = this.elementsProvider.elements.subscribe((elements) => {
          this.elements = elements;
          this.createElement(options);
          this.state = "ready";
        });
      } else if (this.state === "notready") {
        this.state = "starting";
        this.elements = yield this.stripeElementsService.elements(this.stripe).toPromise();
        this.createElement(options);
        this.state = "ready";
      }
    });
  }
  ngOnDestroy() {
    if (this.element) {
      this.element.destroy();
    }
    if (this.elementsSubscription) {
      this.elementsSubscription.unsubscribe();
    }
  }
  update(options) {
    return this.element.update(options);
  }
  /**
   * @deprecated
   */
  getLinkAuthenticationElement() {
    return this.element;
  }
  createElement(options) {
    if (this.element) {
      this.element.unmount();
    }
    this.element = this.elements.create("expressCheckout", options);
    this.element.on("blur", () => this.blur.emit());
    this.element.on("cancel", () => this.cancel.emit());
    this.element.on("click", (ev) => this.clicked.emit(ev));
    this.element.on("confirm", (ev) => this.confirm.emit(ev));
    this.element.on("focus", () => this.focus.emit());
    this.element.on("ready", (ev) => this.ready.emit(ev));
    this.element.on("escape", () => this.escape.emit());
    this.element.on("loaderror", (err) => this.loaderror.emit(err));
    this.element.on("shippingaddresschange", (ev) => this.shippingaddresschange.emit(ev));
    this.element.on("shippingratechange", (ev) => this.shippingratechange.emit(ev));
    this.element.mount(this.stripeElementRef.nativeElement);
    this.load.emit(this.element);
  }
  static ɵfac = function StripeExpressCheckoutComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _StripeExpressCheckoutComponent)(ɵɵdirectiveInject(StripeElementsService), ɵɵdirectiveInject(StripeElementsDirective, 8));
  };
  static ɵcmp = ɵɵdefineComponent({
    type: _StripeExpressCheckoutComponent,
    selectors: [["ngx-stripe-express-checkout"]],
    contentQueries: function StripeExpressCheckoutComponent_ContentQueries(rf, ctx, dirIndex) {
      if (rf & 1) {
        ɵɵcontentQuery(dirIndex, NgxStripeElementLoadingTemplateDirective, 5, TemplateRef);
      }
      if (rf & 2) {
        let _t;
        ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.loadingTemplate = _t.first);
      }
    },
    viewQuery: function StripeExpressCheckoutComponent_Query(rf, ctx) {
      if (rf & 1) {
        ɵɵviewQuery(_c0, 5);
      }
      if (rf & 2) {
        let _t;
        ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.stripeElementRef = _t.first);
      }
    },
    inputs: {
      containerClass: "containerClass",
      options: "options",
      elementsOptions: "elementsOptions",
      stripe: "stripe"
    },
    outputs: {
      load: "load",
      blur: "blur",
      cancel: "cancel",
      clicked: "clicked",
      confirm: "confirm",
      focus: "focus",
      ready: "ready",
      escape: "escape",
      loaderror: "loaderror",
      shippingaddresschange: "shippingaddresschange",
      shippingratechange: "shippingratechange"
    },
    standalone: true,
    features: [ɵɵNgOnChangesFeature, ɵɵStandaloneFeature],
    decls: 3,
    vars: 1,
    consts: [["stripeElementRef", ""], [1, "field"], [3, "ngTemplateOutlet"]],
    template: function StripeExpressCheckoutComponent_Template(rf, ctx) {
      if (rf & 1) {
        ɵɵelementStart(0, "div", 1, 0);
        ɵɵtemplate(2, StripeExpressCheckoutComponent_Conditional_2_Template, 1, 1, "ng-container", 2);
        ɵɵelementEnd();
      }
      if (rf & 2) {
        ɵɵadvance(2);
        ɵɵconditional(ctx.state !== "ready" && ctx.loadingTemplate ? 2 : -1);
      }
    },
    dependencies: [CommonModule, NgTemplateOutlet],
    encapsulation: 2
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(StripeExpressCheckoutComponent, [{
    type: Component,
    args: [{
      selector: "ngx-stripe-express-checkout",
      standalone: true,
      template: `
    <div class="field" #stripeElementRef>
      @if (state !== 'ready' && loadingTemplate) {
        <ng-container [ngTemplateOutlet]="loadingTemplate" />
      }
    </div>
  `,
      imports: [CommonModule]
    }]
  }], () => [{
    type: StripeElementsService
  }, {
    type: StripeElementsDirective,
    decorators: [{
      type: Optional
    }]
  }], {
    loadingTemplate: [{
      type: ContentChild,
      args: [NgxStripeElementLoadingTemplateDirective, {
        read: TemplateRef
      }]
    }],
    stripeElementRef: [{
      type: ViewChild,
      args: ["stripeElementRef"]
    }],
    containerClass: [{
      type: Input
    }],
    options: [{
      type: Input
    }],
    elementsOptions: [{
      type: Input
    }],
    stripe: [{
      type: Input
    }],
    load: [{
      type: Output
    }],
    blur: [{
      type: Output
    }],
    cancel: [{
      type: Output
    }],
    clicked: [{
      type: Output
    }],
    confirm: [{
      type: Output
    }],
    focus: [{
      type: Output
    }],
    ready: [{
      type: Output
    }],
    escape: [{
      type: Output
    }],
    loaderror: [{
      type: Output
    }],
    shippingaddresschange: [{
      type: Output
    }],
    shippingratechange: [{
      type: Output
    }]
  });
})();
var StripeFpxBankComponent = class _StripeFpxBankComponent {
  stripeElementsService;
  elementsProvider;
  loadingTemplate;
  stripeElementRef;
  element;
  containerClass;
  options;
  elementsOptions;
  stripe;
  load = new EventEmitter();
  blur = new EventEmitter();
  change = new EventEmitter();
  focus = new EventEmitter();
  ready = new EventEmitter();
  escape = new EventEmitter();
  elements;
  state = "notready";
  elementsSubscription;
  constructor(stripeElementsService, elementsProvider) {
    this.stripeElementsService = stripeElementsService;
    this.elementsProvider = elementsProvider;
  }
  ngOnChanges(changes) {
    return __async(this, null, function* () {
      this.state = "starting";
      let updateElements = false;
      if (!this.elementsProvider && (changes.elementsOptions || changes.stripe || !this.elements)) {
        this.elements = yield this.stripeElementsService.elements(this.stripe, this.elementsOptions).toPromise();
        updateElements = true;
      }
      const options = this.stripeElementsService.mergeOptions(this.options, this.containerClass);
      if (changes.options || changes.containerClass || !this.element || updateElements) {
        if (this.element && !updateElements) {
          this.update(options);
        } else if (this.elements && updateElements) {
          this.createElement(options);
        }
      }
      this.state = "ready";
    });
  }
  ngOnInit() {
    return __async(this, null, function* () {
      const options = this.stripeElementsService.mergeOptions(this.options, this.containerClass);
      if (this.elementsProvider) {
        this.elementsSubscription = this.elementsProvider.elements.subscribe((elements) => {
          this.elements = elements;
          this.createElement(options);
          this.state = "ready";
        });
      } else if (this.state === "notready") {
        this.state = "starting";
        this.elements = yield this.stripeElementsService.elements(this.stripe).toPromise();
        this.createElement(options);
        this.state = "ready";
      }
    });
  }
  ngOnDestroy() {
    if (this.element) {
      this.element.destroy();
    }
    if (this.elementsSubscription) {
      this.elementsSubscription.unsubscribe();
    }
  }
  update(options) {
    this.element.update(options);
  }
  /**
   * @deprecated
   */
  getFpxBank() {
    return this.element;
  }
  createElement(options = {
    accountHolderType: "individual"
  }) {
    if (this.element) {
      this.element.unmount();
    }
    this.element = this.elements.create("fpxBank", options);
    this.element.on("change", (ev) => this.change.emit(ev));
    this.element.on("blur", () => this.blur.emit());
    this.element.on("focus", () => this.focus.emit());
    this.element.on("ready", () => this.ready.emit());
    this.element.on("escape", () => this.escape.emit());
    this.element.mount(this.stripeElementRef.nativeElement);
    this.load.emit(this.element);
  }
  static ɵfac = function StripeFpxBankComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _StripeFpxBankComponent)(ɵɵdirectiveInject(StripeElementsService), ɵɵdirectiveInject(StripeElementsDirective, 8));
  };
  static ɵcmp = ɵɵdefineComponent({
    type: _StripeFpxBankComponent,
    selectors: [["ngx-stripe-fpx-bank"]],
    contentQueries: function StripeFpxBankComponent_ContentQueries(rf, ctx, dirIndex) {
      if (rf & 1) {
        ɵɵcontentQuery(dirIndex, NgxStripeElementLoadingTemplateDirective, 5, TemplateRef);
      }
      if (rf & 2) {
        let _t;
        ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.loadingTemplate = _t.first);
      }
    },
    viewQuery: function StripeFpxBankComponent_Query(rf, ctx) {
      if (rf & 1) {
        ɵɵviewQuery(_c0, 5);
      }
      if (rf & 2) {
        let _t;
        ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.stripeElementRef = _t.first);
      }
    },
    inputs: {
      containerClass: "containerClass",
      options: "options",
      elementsOptions: "elementsOptions",
      stripe: "stripe"
    },
    outputs: {
      load: "load",
      blur: "blur",
      change: "change",
      focus: "focus",
      ready: "ready",
      escape: "escape"
    },
    standalone: true,
    features: [ɵɵNgOnChangesFeature, ɵɵStandaloneFeature],
    decls: 3,
    vars: 1,
    consts: [["stripeElementRef", ""], [1, "field"], [3, "ngTemplateOutlet"]],
    template: function StripeFpxBankComponent_Template(rf, ctx) {
      if (rf & 1) {
        ɵɵelementStart(0, "div", 1, 0);
        ɵɵtemplate(2, StripeFpxBankComponent_Conditional_2_Template, 1, 1, "ng-container", 2);
        ɵɵelementEnd();
      }
      if (rf & 2) {
        ɵɵadvance(2);
        ɵɵconditional(ctx.state !== "ready" && ctx.loadingTemplate ? 2 : -1);
      }
    },
    dependencies: [CommonModule, NgTemplateOutlet],
    encapsulation: 2
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(StripeFpxBankComponent, [{
    type: Component,
    args: [{
      selector: "ngx-stripe-fpx-bank",
      standalone: true,
      template: `
    <div class="field" #stripeElementRef>
      @if (state !== 'ready' && loadingTemplate) {
        <ng-container [ngTemplateOutlet]="loadingTemplate" />
      }
    </div>
  `,
      imports: [CommonModule]
    }]
  }], () => [{
    type: StripeElementsService
  }, {
    type: StripeElementsDirective,
    decorators: [{
      type: Optional
    }]
  }], {
    loadingTemplate: [{
      type: ContentChild,
      args: [NgxStripeElementLoadingTemplateDirective, {
        read: TemplateRef
      }]
    }],
    stripeElementRef: [{
      type: ViewChild,
      args: ["stripeElementRef"]
    }],
    containerClass: [{
      type: Input
    }],
    options: [{
      type: Input
    }],
    elementsOptions: [{
      type: Input
    }],
    stripe: [{
      type: Input
    }],
    load: [{
      type: Output
    }],
    blur: [{
      type: Output
    }],
    change: [{
      type: Output
    }],
    focus: [{
      type: Output
    }],
    ready: [{
      type: Output
    }],
    escape: [{
      type: Output
    }]
  });
})();
var StripeIbanComponent = class _StripeIbanComponent {
  stripeElementsService;
  elementsProvider;
  loadingTemplate;
  stripeElementRef;
  element;
  containerClass;
  options;
  elementsOptions;
  stripe;
  load = new EventEmitter();
  blur = new EventEmitter();
  change = new EventEmitter();
  focus = new EventEmitter();
  ready = new EventEmitter();
  escape = new EventEmitter();
  elements;
  state = "notready";
  elementsSubscription;
  constructor(stripeElementsService, elementsProvider) {
    this.stripeElementsService = stripeElementsService;
    this.elementsProvider = elementsProvider;
  }
  ngOnChanges(changes) {
    return __async(this, null, function* () {
      this.state = "starting";
      let updateElements = false;
      if (!this.elementsProvider && (changes.elementsOptions || changes.stripe || !this.elements)) {
        this.elements = yield this.stripeElementsService.elements(this.stripe, this.elementsOptions).toPromise();
        updateElements = true;
      }
      const options = this.stripeElementsService.mergeOptions(this.options, this.containerClass);
      if (changes.options || changes.containerClass || !this.element || updateElements) {
        if (this.element && !updateElements) {
          this.update(options);
        } else if (this.elements && updateElements) {
          this.createElement(options);
        }
      }
      this.state = "ready";
    });
  }
  ngOnInit() {
    return __async(this, null, function* () {
      const options = this.stripeElementsService.mergeOptions(this.options, this.containerClass);
      if (this.elementsProvider) {
        this.elementsSubscription = this.elementsProvider.elements.subscribe((elements) => {
          this.elements = elements;
          this.createElement(options);
          this.state = "ready";
        });
      } else if (this.state === "notready") {
        this.state = "starting";
        this.elements = yield this.stripeElementsService.elements(this.stripe).toPromise();
        this.createElement(options);
        this.state = "ready";
      }
    });
  }
  ngOnDestroy() {
    if (this.element) {
      this.element.destroy();
    }
    if (this.elementsSubscription) {
      this.elementsSubscription.unsubscribe();
    }
  }
  update(options) {
    this.element.update(options);
  }
  /**
   * @deprecated
   */
  getIban() {
    return this.element;
  }
  createElement(options = {}) {
    if (this.element) {
      this.element.unmount();
    }
    this.element = this.elements.create("iban", options);
    this.element.on("change", (ev) => this.change.emit(ev));
    this.element.on("blur", () => this.blur.emit());
    this.element.on("focus", () => this.focus.emit());
    this.element.on("ready", () => this.ready.emit());
    this.element.on("escape", () => this.escape.emit());
    this.element.mount(this.stripeElementRef.nativeElement);
    this.load.emit(this.element);
  }
  static ɵfac = function StripeIbanComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _StripeIbanComponent)(ɵɵdirectiveInject(StripeElementsService), ɵɵdirectiveInject(StripeElementsDirective, 8));
  };
  static ɵcmp = ɵɵdefineComponent({
    type: _StripeIbanComponent,
    selectors: [["ngx-stripe-iban"]],
    contentQueries: function StripeIbanComponent_ContentQueries(rf, ctx, dirIndex) {
      if (rf & 1) {
        ɵɵcontentQuery(dirIndex, NgxStripeElementLoadingTemplateDirective, 5, TemplateRef);
      }
      if (rf & 2) {
        let _t;
        ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.loadingTemplate = _t.first);
      }
    },
    viewQuery: function StripeIbanComponent_Query(rf, ctx) {
      if (rf & 1) {
        ɵɵviewQuery(_c0, 5);
      }
      if (rf & 2) {
        let _t;
        ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.stripeElementRef = _t.first);
      }
    },
    inputs: {
      containerClass: "containerClass",
      options: "options",
      elementsOptions: "elementsOptions",
      stripe: "stripe"
    },
    outputs: {
      load: "load",
      blur: "blur",
      change: "change",
      focus: "focus",
      ready: "ready",
      escape: "escape"
    },
    standalone: true,
    features: [ɵɵNgOnChangesFeature, ɵɵStandaloneFeature],
    decls: 3,
    vars: 1,
    consts: [["stripeElementRef", ""], [1, "field"], [3, "ngTemplateOutlet"]],
    template: function StripeIbanComponent_Template(rf, ctx) {
      if (rf & 1) {
        ɵɵelementStart(0, "div", 1, 0);
        ɵɵtemplate(2, StripeIbanComponent_Conditional_2_Template, 1, 1, "ng-container", 2);
        ɵɵelementEnd();
      }
      if (rf & 2) {
        ɵɵadvance(2);
        ɵɵconditional(ctx.state !== "ready" && ctx.loadingTemplate ? 2 : -1);
      }
    },
    dependencies: [CommonModule, NgTemplateOutlet],
    encapsulation: 2
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(StripeIbanComponent, [{
    type: Component,
    args: [{
      selector: "ngx-stripe-iban",
      standalone: true,
      template: `
    <div class="field" #stripeElementRef>
      @if (state !== 'ready' && loadingTemplate) {
        <ng-container [ngTemplateOutlet]="loadingTemplate" />
      }
    </div>
  `,
      imports: [CommonModule]
    }]
  }], () => [{
    type: StripeElementsService
  }, {
    type: StripeElementsDirective,
    decorators: [{
      type: Optional
    }]
  }], {
    loadingTemplate: [{
      type: ContentChild,
      args: [NgxStripeElementLoadingTemplateDirective, {
        read: TemplateRef
      }]
    }],
    stripeElementRef: [{
      type: ViewChild,
      args: ["stripeElementRef"]
    }],
    containerClass: [{
      type: Input
    }],
    options: [{
      type: Input
    }],
    elementsOptions: [{
      type: Input
    }],
    stripe: [{
      type: Input
    }],
    load: [{
      type: Output
    }],
    blur: [{
      type: Output
    }],
    change: [{
      type: Output
    }],
    focus: [{
      type: Output
    }],
    ready: [{
      type: Output
    }],
    escape: [{
      type: Output
    }]
  });
})();
var StripeIdealBankComponent = class _StripeIdealBankComponent {
  stripeElementsService;
  elementsProvider;
  loadingTemplate;
  stripeElementRef;
  element;
  containerClass;
  options;
  elementsOptions;
  stripe;
  load = new EventEmitter();
  blur = new EventEmitter();
  change = new EventEmitter();
  focus = new EventEmitter();
  ready = new EventEmitter();
  escape = new EventEmitter();
  elements;
  state = "notready";
  elementsSubscription;
  constructor(stripeElementsService, elementsProvider) {
    this.stripeElementsService = stripeElementsService;
    this.elementsProvider = elementsProvider;
  }
  ngOnChanges(changes) {
    return __async(this, null, function* () {
      this.state = "starting";
      let updateElements = false;
      if (!this.elementsProvider && (changes.elementsOptions || changes.stripe || !this.elements)) {
        this.elements = yield this.stripeElementsService.elements(this.stripe, this.elementsOptions).toPromise();
        updateElements = true;
      }
      const options = this.stripeElementsService.mergeOptions(this.options, this.containerClass);
      if (changes.options || changes.containerClass || !this.element || updateElements) {
        if (this.element && !updateElements) {
          this.update(options);
        } else if (this.elements && updateElements) {
          this.createElement(options);
        }
      }
      this.state = "ready";
    });
  }
  ngOnInit() {
    return __async(this, null, function* () {
      const options = this.stripeElementsService.mergeOptions(this.options, this.containerClass);
      if (this.elementsProvider) {
        this.elementsSubscription = this.elementsProvider.elements.subscribe((elements) => {
          this.elements = elements;
          this.createElement(options);
          this.state = "ready";
        });
      } else if (this.state === "notready") {
        this.state = "starting";
        this.elements = yield this.stripeElementsService.elements(this.stripe).toPromise();
        this.createElement(options);
        this.state = "ready";
      }
    });
  }
  ngOnDestroy() {
    if (this.element) {
      this.element.destroy();
    }
    if (this.elementsSubscription) {
      this.elementsSubscription.unsubscribe();
    }
  }
  update(options) {
    this.element.update(options);
  }
  /**
   * @deprecated
   */
  getIdealBank() {
    return this.element;
  }
  createElement(options = {}) {
    if (this.element) {
      this.element.unmount();
    }
    this.element = this.elements.create("idealBank", options);
    this.element.on("change", (ev) => this.change.emit(ev));
    this.element.on("blur", () => this.blur.emit());
    this.element.on("focus", () => this.focus.emit());
    this.element.on("ready", () => this.ready.emit());
    this.element.on("escape", () => this.escape.emit());
    this.element.mount(this.stripeElementRef.nativeElement);
    this.load.emit(this.element);
  }
  static ɵfac = function StripeIdealBankComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _StripeIdealBankComponent)(ɵɵdirectiveInject(StripeElementsService), ɵɵdirectiveInject(StripeElementsDirective, 8));
  };
  static ɵcmp = ɵɵdefineComponent({
    type: _StripeIdealBankComponent,
    selectors: [["ngx-stripe-ideal-bank"]],
    contentQueries: function StripeIdealBankComponent_ContentQueries(rf, ctx, dirIndex) {
      if (rf & 1) {
        ɵɵcontentQuery(dirIndex, NgxStripeElementLoadingTemplateDirective, 5, TemplateRef);
      }
      if (rf & 2) {
        let _t;
        ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.loadingTemplate = _t.first);
      }
    },
    viewQuery: function StripeIdealBankComponent_Query(rf, ctx) {
      if (rf & 1) {
        ɵɵviewQuery(_c0, 5);
      }
      if (rf & 2) {
        let _t;
        ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.stripeElementRef = _t.first);
      }
    },
    inputs: {
      containerClass: "containerClass",
      options: "options",
      elementsOptions: "elementsOptions",
      stripe: "stripe"
    },
    outputs: {
      load: "load",
      blur: "blur",
      change: "change",
      focus: "focus",
      ready: "ready",
      escape: "escape"
    },
    standalone: true,
    features: [ɵɵNgOnChangesFeature, ɵɵStandaloneFeature],
    decls: 3,
    vars: 1,
    consts: [["stripeElementRef", ""], [1, "field"], [3, "ngTemplateOutlet"]],
    template: function StripeIdealBankComponent_Template(rf, ctx) {
      if (rf & 1) {
        ɵɵelementStart(0, "div", 1, 0);
        ɵɵtemplate(2, StripeIdealBankComponent_Conditional_2_Template, 1, 1, "ng-container", 2);
        ɵɵelementEnd();
      }
      if (rf & 2) {
        ɵɵadvance(2);
        ɵɵconditional(ctx.state !== "ready" && ctx.loadingTemplate ? 2 : -1);
      }
    },
    dependencies: [CommonModule, NgTemplateOutlet],
    encapsulation: 2
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(StripeIdealBankComponent, [{
    type: Component,
    args: [{
      selector: "ngx-stripe-ideal-bank",
      standalone: true,
      template: `
    <div class="field" #stripeElementRef>
      @if (state !== 'ready' && loadingTemplate) {
        <ng-container [ngTemplateOutlet]="loadingTemplate" />
      }
    </div>
  `,
      imports: [CommonModule]
    }]
  }], () => [{
    type: StripeElementsService
  }, {
    type: StripeElementsDirective,
    decorators: [{
      type: Optional
    }]
  }], {
    loadingTemplate: [{
      type: ContentChild,
      args: [NgxStripeElementLoadingTemplateDirective, {
        read: TemplateRef
      }]
    }],
    stripeElementRef: [{
      type: ViewChild,
      args: ["stripeElementRef"]
    }],
    containerClass: [{
      type: Input
    }],
    options: [{
      type: Input
    }],
    elementsOptions: [{
      type: Input
    }],
    stripe: [{
      type: Input
    }],
    load: [{
      type: Output
    }],
    blur: [{
      type: Output
    }],
    change: [{
      type: Output
    }],
    focus: [{
      type: Output
    }],
    ready: [{
      type: Output
    }],
    escape: [{
      type: Output
    }]
  });
})();
var StripeIssuingCardCvcDisplayComponent = class _StripeIssuingCardCvcDisplayComponent {
  cdr;
  stripeElementsService;
  elementsProvider;
  loadingTemplate;
  stripeElementRef;
  element;
  containerClass;
  options;
  elementsOptions;
  stripe;
  load = new EventEmitter();
  elements;
  state = "notready";
  elementsSubscription;
  constructor(cdr, stripeElementsService, elementsProvider) {
    this.cdr = cdr;
    this.stripeElementsService = stripeElementsService;
    this.elementsProvider = elementsProvider;
  }
  ngOnChanges(changes) {
    return __async(this, null, function* () {
      this.state = "starting";
      let updateElements = false;
      if (!this.elementsProvider && (changes.elementsOptions || changes.stripe || !this.elements)) {
        this.elements = yield this.stripeElementsService.elements(this.stripe, this.elementsOptions).toPromise();
        updateElements = true;
      }
      const options = this.stripeElementsService.mergeOptions(this.options, this.containerClass);
      if (changes.options || changes.containerClass || !this.element || updateElements) {
        if (this.element && !updateElements) {
          this.update(options);
        } else if (this.elements && updateElements) {
          this.createElement(options);
        }
      }
    });
  }
  ngOnInit() {
    return __async(this, null, function* () {
      const options = this.stripeElementsService.mergeOptions(this.options, this.containerClass);
      if (this.elementsProvider) {
        this.elementsSubscription = this.elementsProvider.elements.subscribe((elements) => {
          this.elements = elements;
          this.createElement(options);
        });
      } else if (this.state === "notready") {
        this.state = "starting";
        this.elements = yield this.stripeElementsService.elements(this.stripe).toPromise();
        this.createElement(options);
      }
    });
  }
  ngOnDestroy() {
    if (this.element) {
      this.element.destroy();
    }
    if (this.elementsSubscription) {
      this.elementsSubscription.unsubscribe();
    }
  }
  update(options) {
    this.element.update(options);
  }
  createElement(options) {
    this.state = "ready";
    this.cdr.detectChanges();
    if (this.element) {
      this.element.unmount();
    }
    this.element = this.elements.create("issuingCardCvcDisplay", options);
    this.element.mount(this.stripeElementRef.nativeElement);
    this.load.emit(this.element);
  }
  static ɵfac = function StripeIssuingCardCvcDisplayComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _StripeIssuingCardCvcDisplayComponent)(ɵɵdirectiveInject(ChangeDetectorRef), ɵɵdirectiveInject(StripeElementsService), ɵɵdirectiveInject(StripeElementsDirective, 8));
  };
  static ɵcmp = ɵɵdefineComponent({
    type: _StripeIssuingCardCvcDisplayComponent,
    selectors: [["ngx-stripe-issuing-card-cvc-display"]],
    contentQueries: function StripeIssuingCardCvcDisplayComponent_ContentQueries(rf, ctx, dirIndex) {
      if (rf & 1) {
        ɵɵcontentQuery(dirIndex, NgxStripeElementLoadingTemplateDirective, 5, TemplateRef);
      }
      if (rf & 2) {
        let _t;
        ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.loadingTemplate = _t.first);
      }
    },
    viewQuery: function StripeIssuingCardCvcDisplayComponent_Query(rf, ctx) {
      if (rf & 1) {
        ɵɵviewQuery(_c0, 5);
      }
      if (rf & 2) {
        let _t;
        ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.stripeElementRef = _t.first);
      }
    },
    inputs: {
      containerClass: "containerClass",
      options: "options",
      elementsOptions: "elementsOptions",
      stripe: "stripe"
    },
    outputs: {
      load: "load"
    },
    standalone: true,
    features: [ɵɵNgOnChangesFeature, ɵɵStandaloneFeature],
    decls: 3,
    vars: 1,
    consts: [["stripeElementRef", ""], [1, "field"], [3, "ngTemplateOutlet"]],
    template: function StripeIssuingCardCvcDisplayComponent_Template(rf, ctx) {
      if (rf & 1) {
        ɵɵelementStart(0, "div", 1, 0);
        ɵɵtemplate(2, StripeIssuingCardCvcDisplayComponent_Conditional_2_Template, 1, 1, "ng-container", 2);
        ɵɵelementEnd();
      }
      if (rf & 2) {
        ɵɵadvance(2);
        ɵɵconditional(ctx.state !== "ready" && ctx.loadingTemplate ? 2 : -1);
      }
    },
    dependencies: [CommonModule, NgTemplateOutlet],
    encapsulation: 2
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(StripeIssuingCardCvcDisplayComponent, [{
    type: Component,
    args: [{
      selector: "ngx-stripe-issuing-card-cvc-display",
      standalone: true,
      template: `
    <div class="field" #stripeElementRef>
      @if (state !== 'ready' && loadingTemplate) {
        <ng-container [ngTemplateOutlet]="loadingTemplate" />
      }
    </div>
  `,
      imports: [CommonModule]
    }]
  }], () => [{
    type: ChangeDetectorRef
  }, {
    type: StripeElementsService
  }, {
    type: StripeElementsDirective,
    decorators: [{
      type: Optional
    }]
  }], {
    loadingTemplate: [{
      type: ContentChild,
      args: [NgxStripeElementLoadingTemplateDirective, {
        read: TemplateRef
      }]
    }],
    stripeElementRef: [{
      type: ViewChild,
      args: ["stripeElementRef"]
    }],
    containerClass: [{
      type: Input
    }],
    options: [{
      type: Input
    }],
    elementsOptions: [{
      type: Input
    }],
    stripe: [{
      type: Input
    }],
    load: [{
      type: Output
    }]
  });
})();
var StripeIssuingCardExpiryDisplayComponent = class _StripeIssuingCardExpiryDisplayComponent {
  cdr;
  stripeElementsService;
  elementsProvider;
  loadingTemplate;
  stripeElementRef;
  element;
  containerClass;
  options;
  elementsOptions;
  stripe;
  load = new EventEmitter();
  elements;
  state = "notready";
  elementsSubscription;
  constructor(cdr, stripeElementsService, elementsProvider) {
    this.cdr = cdr;
    this.stripeElementsService = stripeElementsService;
    this.elementsProvider = elementsProvider;
  }
  ngOnChanges(changes) {
    return __async(this, null, function* () {
      this.state = "starting";
      let updateElements = false;
      if (!this.elementsProvider && (changes.elementsOptions || changes.stripe || !this.elements)) {
        this.elements = yield this.stripeElementsService.elements(this.stripe, this.elementsOptions).toPromise();
        updateElements = true;
      }
      const options = this.stripeElementsService.mergeOptions(this.options, this.containerClass);
      if (changes.options || changes.containerClass || !this.element || updateElements) {
        if (this.element && !updateElements) {
          this.update(options);
        } else if (this.elements && updateElements) {
          this.createElement(options);
        }
      }
    });
  }
  ngOnInit() {
    return __async(this, null, function* () {
      const options = this.stripeElementsService.mergeOptions(this.options, this.containerClass);
      if (this.elementsProvider) {
        this.elementsSubscription = this.elementsProvider.elements.subscribe((elements) => {
          this.elements = elements;
          this.createElement(options);
        });
      } else if (this.state === "notready") {
        this.state = "starting";
        this.elements = yield this.stripeElementsService.elements(this.stripe).toPromise();
        this.createElement(options);
      }
    });
  }
  ngOnDestroy() {
    if (this.element) {
      this.element.destroy();
    }
    if (this.elementsSubscription) {
      this.elementsSubscription.unsubscribe();
    }
  }
  update(options) {
    this.element.update(options);
  }
  createElement(options) {
    this.state = "ready";
    this.cdr.detectChanges();
    if (this.element) {
      this.element.unmount();
    }
    this.element = this.elements.create("issuingCardExpiryDisplay", options);
    this.element.mount(this.stripeElementRef.nativeElement);
    this.load.emit(this.element);
  }
  static ɵfac = function StripeIssuingCardExpiryDisplayComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _StripeIssuingCardExpiryDisplayComponent)(ɵɵdirectiveInject(ChangeDetectorRef), ɵɵdirectiveInject(StripeElementsService), ɵɵdirectiveInject(StripeElementsDirective, 8));
  };
  static ɵcmp = ɵɵdefineComponent({
    type: _StripeIssuingCardExpiryDisplayComponent,
    selectors: [["ngx-stripe-issuing-card-expiry-display"]],
    contentQueries: function StripeIssuingCardExpiryDisplayComponent_ContentQueries(rf, ctx, dirIndex) {
      if (rf & 1) {
        ɵɵcontentQuery(dirIndex, NgxStripeElementLoadingTemplateDirective, 5, TemplateRef);
      }
      if (rf & 2) {
        let _t;
        ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.loadingTemplate = _t.first);
      }
    },
    viewQuery: function StripeIssuingCardExpiryDisplayComponent_Query(rf, ctx) {
      if (rf & 1) {
        ɵɵviewQuery(_c0, 5);
      }
      if (rf & 2) {
        let _t;
        ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.stripeElementRef = _t.first);
      }
    },
    inputs: {
      containerClass: "containerClass",
      options: "options",
      elementsOptions: "elementsOptions",
      stripe: "stripe"
    },
    outputs: {
      load: "load"
    },
    standalone: true,
    features: [ɵɵNgOnChangesFeature, ɵɵStandaloneFeature],
    decls: 3,
    vars: 1,
    consts: [["stripeElementRef", ""], [1, "field"], [3, "ngTemplateOutlet"]],
    template: function StripeIssuingCardExpiryDisplayComponent_Template(rf, ctx) {
      if (rf & 1) {
        ɵɵelementStart(0, "div", 1, 0);
        ɵɵtemplate(2, StripeIssuingCardExpiryDisplayComponent_Conditional_2_Template, 1, 1, "ng-container", 2);
        ɵɵelementEnd();
      }
      if (rf & 2) {
        ɵɵadvance(2);
        ɵɵconditional(ctx.state !== "ready" && ctx.loadingTemplate ? 2 : -1);
      }
    },
    dependencies: [CommonModule, NgTemplateOutlet],
    encapsulation: 2
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(StripeIssuingCardExpiryDisplayComponent, [{
    type: Component,
    args: [{
      selector: "ngx-stripe-issuing-card-expiry-display",
      standalone: true,
      template: `
    <div class="field" #stripeElementRef>
      @if (state !== 'ready' && loadingTemplate) {
        <ng-container [ngTemplateOutlet]="loadingTemplate" />
      }
    </div>
  `,
      imports: [CommonModule]
    }]
  }], () => [{
    type: ChangeDetectorRef
  }, {
    type: StripeElementsService
  }, {
    type: StripeElementsDirective,
    decorators: [{
      type: Optional
    }]
  }], {
    loadingTemplate: [{
      type: ContentChild,
      args: [NgxStripeElementLoadingTemplateDirective, {
        read: TemplateRef
      }]
    }],
    stripeElementRef: [{
      type: ViewChild,
      args: ["stripeElementRef"]
    }],
    containerClass: [{
      type: Input
    }],
    options: [{
      type: Input
    }],
    elementsOptions: [{
      type: Input
    }],
    stripe: [{
      type: Input
    }],
    load: [{
      type: Output
    }]
  });
})();
var StripeIssuingCardNumberDisplayComponent = class _StripeIssuingCardNumberDisplayComponent {
  cdr;
  stripeElementsService;
  elementsProvider;
  loadingTemplate;
  stripeElementRef;
  element;
  containerClass;
  options;
  elementsOptions;
  stripe;
  load = new EventEmitter();
  elements;
  state = "notready";
  elementsSubscription;
  constructor(cdr, stripeElementsService, elementsProvider) {
    this.cdr = cdr;
    this.stripeElementsService = stripeElementsService;
    this.elementsProvider = elementsProvider;
  }
  ngOnChanges(changes) {
    return __async(this, null, function* () {
      this.state = "starting";
      let updateElements = false;
      if (!this.elementsProvider && (changes.elementsOptions || changes.stripe || !this.elements)) {
        this.elements = yield this.stripeElementsService.elements(this.stripe, this.elementsOptions).toPromise();
        updateElements = true;
      }
      const options = this.stripeElementsService.mergeOptions(this.options, this.containerClass);
      if (changes.options || changes.containerClass || !this.element || updateElements) {
        if (this.element && !updateElements) {
          this.update(options);
        } else if (this.elements && updateElements) {
          this.createElement(options);
        }
      }
    });
  }
  ngOnInit() {
    return __async(this, null, function* () {
      const options = this.stripeElementsService.mergeOptions(this.options, this.containerClass);
      if (this.elementsProvider) {
        this.elementsSubscription = this.elementsProvider.elements.subscribe((elements) => {
          this.elements = elements;
          this.createElement(options);
        });
      } else if (this.state === "notready") {
        this.state = "starting";
        this.elements = yield this.stripeElementsService.elements(this.stripe).toPromise();
        this.createElement(options);
      }
    });
  }
  ngOnDestroy() {
    if (this.element) {
      this.element.destroy();
    }
    if (this.elementsSubscription) {
      this.elementsSubscription.unsubscribe();
    }
  }
  update(options) {
    this.element.update(options);
  }
  createElement(options) {
    this.state = "ready";
    this.cdr.detectChanges();
    if (this.element) {
      this.element.unmount();
    }
    this.element = this.elements.create("issuingCardNumberDisplay", options);
    this.element.mount(this.stripeElementRef.nativeElement);
    this.load.emit(this.element);
  }
  static ɵfac = function StripeIssuingCardNumberDisplayComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _StripeIssuingCardNumberDisplayComponent)(ɵɵdirectiveInject(ChangeDetectorRef), ɵɵdirectiveInject(StripeElementsService), ɵɵdirectiveInject(StripeElementsDirective, 8));
  };
  static ɵcmp = ɵɵdefineComponent({
    type: _StripeIssuingCardNumberDisplayComponent,
    selectors: [["ngx-stripe-issuing-card-number-display"]],
    contentQueries: function StripeIssuingCardNumberDisplayComponent_ContentQueries(rf, ctx, dirIndex) {
      if (rf & 1) {
        ɵɵcontentQuery(dirIndex, NgxStripeElementLoadingTemplateDirective, 5, TemplateRef);
      }
      if (rf & 2) {
        let _t;
        ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.loadingTemplate = _t.first);
      }
    },
    viewQuery: function StripeIssuingCardNumberDisplayComponent_Query(rf, ctx) {
      if (rf & 1) {
        ɵɵviewQuery(_c0, 5);
      }
      if (rf & 2) {
        let _t;
        ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.stripeElementRef = _t.first);
      }
    },
    inputs: {
      containerClass: "containerClass",
      options: "options",
      elementsOptions: "elementsOptions",
      stripe: "stripe"
    },
    outputs: {
      load: "load"
    },
    standalone: true,
    features: [ɵɵNgOnChangesFeature, ɵɵStandaloneFeature],
    decls: 3,
    vars: 1,
    consts: [["stripeElementRef", ""], [1, "field"], [3, "ngTemplateOutlet"]],
    template: function StripeIssuingCardNumberDisplayComponent_Template(rf, ctx) {
      if (rf & 1) {
        ɵɵelementStart(0, "div", 1, 0);
        ɵɵtemplate(2, StripeIssuingCardNumberDisplayComponent_Conditional_2_Template, 1, 1, "ng-container", 2);
        ɵɵelementEnd();
      }
      if (rf & 2) {
        ɵɵadvance(2);
        ɵɵconditional(ctx.state !== "ready" && ctx.loadingTemplate ? 2 : -1);
      }
    },
    dependencies: [CommonModule, NgTemplateOutlet],
    encapsulation: 2
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(StripeIssuingCardNumberDisplayComponent, [{
    type: Component,
    args: [{
      selector: "ngx-stripe-issuing-card-number-display",
      standalone: true,
      template: `
    <div class="field" #stripeElementRef>
      @if (state !== 'ready' && loadingTemplate) {
        <ng-container [ngTemplateOutlet]="loadingTemplate" />
      }
    </div>
  `,
      imports: [CommonModule]
    }]
  }], () => [{
    type: ChangeDetectorRef
  }, {
    type: StripeElementsService
  }, {
    type: StripeElementsDirective,
    decorators: [{
      type: Optional
    }]
  }], {
    loadingTemplate: [{
      type: ContentChild,
      args: [NgxStripeElementLoadingTemplateDirective, {
        read: TemplateRef
      }]
    }],
    stripeElementRef: [{
      type: ViewChild,
      args: ["stripeElementRef"]
    }],
    containerClass: [{
      type: Input
    }],
    options: [{
      type: Input
    }],
    elementsOptions: [{
      type: Input
    }],
    stripe: [{
      type: Input
    }],
    load: [{
      type: Output
    }]
  });
})();
var StripeIssuingCardPinDisplayComponent = class _StripeIssuingCardPinDisplayComponent {
  cdr;
  stripeElementsService;
  elementsProvider;
  loadingTemplate;
  stripeElementRef;
  element;
  containerClass;
  options;
  elementsOptions;
  stripe;
  load = new EventEmitter();
  elements;
  state = "notready";
  elementsSubscription;
  constructor(cdr, stripeElementsService, elementsProvider) {
    this.cdr = cdr;
    this.stripeElementsService = stripeElementsService;
    this.elementsProvider = elementsProvider;
  }
  ngOnChanges(changes) {
    return __async(this, null, function* () {
      this.state = "starting";
      let updateElements = false;
      if (!this.elementsProvider && (changes.elementsOptions || changes.stripe || !this.elements)) {
        this.elements = yield this.stripeElementsService.elements(this.stripe, this.elementsOptions).toPromise();
        updateElements = true;
      }
      const options = this.stripeElementsService.mergeOptions(this.options, this.containerClass);
      if (changes.options || changes.containerClass || !this.element || updateElements) {
        if (this.element && !updateElements) {
          this.update(options);
        } else if (this.elements && updateElements) {
          this.createElement(options);
        }
      }
    });
  }
  ngOnInit() {
    return __async(this, null, function* () {
      const options = this.stripeElementsService.mergeOptions(this.options, this.containerClass);
      if (this.elementsProvider) {
        this.elementsSubscription = this.elementsProvider.elements.subscribe((elements) => {
          this.elements = elements;
          this.createElement(options);
        });
      } else if (this.state === "notready") {
        this.state = "starting";
        this.elements = yield this.stripeElementsService.elements(this.stripe).toPromise();
        this.createElement(options);
      }
    });
  }
  ngOnDestroy() {
    if (this.element) {
      this.element.destroy();
    }
    if (this.elementsSubscription) {
      this.elementsSubscription.unsubscribe();
    }
  }
  update(options) {
    this.element.update(options);
  }
  createElement(options) {
    this.state = "ready";
    this.cdr.detectChanges();
    if (this.element) {
      this.element.unmount();
    }
    this.element = this.elements.create("issuingCardPinDisplay", options);
    this.element.mount(this.stripeElementRef.nativeElement);
    this.load.emit(this.element);
  }
  static ɵfac = function StripeIssuingCardPinDisplayComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _StripeIssuingCardPinDisplayComponent)(ɵɵdirectiveInject(ChangeDetectorRef), ɵɵdirectiveInject(StripeElementsService), ɵɵdirectiveInject(StripeElementsDirective, 8));
  };
  static ɵcmp = ɵɵdefineComponent({
    type: _StripeIssuingCardPinDisplayComponent,
    selectors: [["ngx-stripe-issuing-card-pin-display"]],
    contentQueries: function StripeIssuingCardPinDisplayComponent_ContentQueries(rf, ctx, dirIndex) {
      if (rf & 1) {
        ɵɵcontentQuery(dirIndex, NgxStripeElementLoadingTemplateDirective, 5, TemplateRef);
      }
      if (rf & 2) {
        let _t;
        ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.loadingTemplate = _t.first);
      }
    },
    viewQuery: function StripeIssuingCardPinDisplayComponent_Query(rf, ctx) {
      if (rf & 1) {
        ɵɵviewQuery(_c0, 5);
      }
      if (rf & 2) {
        let _t;
        ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.stripeElementRef = _t.first);
      }
    },
    inputs: {
      containerClass: "containerClass",
      options: "options",
      elementsOptions: "elementsOptions",
      stripe: "stripe"
    },
    outputs: {
      load: "load"
    },
    standalone: true,
    features: [ɵɵNgOnChangesFeature, ɵɵStandaloneFeature],
    decls: 3,
    vars: 1,
    consts: [["stripeElementRef", ""], [1, "field"], [3, "ngTemplateOutlet"]],
    template: function StripeIssuingCardPinDisplayComponent_Template(rf, ctx) {
      if (rf & 1) {
        ɵɵelementStart(0, "div", 1, 0);
        ɵɵtemplate(2, StripeIssuingCardPinDisplayComponent_Conditional_2_Template, 1, 1, "ng-container", 2);
        ɵɵelementEnd();
      }
      if (rf & 2) {
        ɵɵadvance(2);
        ɵɵconditional(ctx.state !== "ready" && ctx.loadingTemplate ? 2 : -1);
      }
    },
    dependencies: [CommonModule, NgTemplateOutlet],
    encapsulation: 2
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(StripeIssuingCardPinDisplayComponent, [{
    type: Component,
    args: [{
      selector: "ngx-stripe-issuing-card-pin-display",
      standalone: true,
      template: `
    <div class="field" #stripeElementRef>
      @if (state !== 'ready' && loadingTemplate) {
        <ng-container [ngTemplateOutlet]="loadingTemplate" />
      }
    </div>
  `,
      imports: [CommonModule]
    }]
  }], () => [{
    type: ChangeDetectorRef
  }, {
    type: StripeElementsService
  }, {
    type: StripeElementsDirective,
    decorators: [{
      type: Optional
    }]
  }], {
    loadingTemplate: [{
      type: ContentChild,
      args: [NgxStripeElementLoadingTemplateDirective, {
        read: TemplateRef
      }]
    }],
    stripeElementRef: [{
      type: ViewChild,
      args: ["stripeElementRef"]
    }],
    containerClass: [{
      type: Input
    }],
    options: [{
      type: Input
    }],
    elementsOptions: [{
      type: Input
    }],
    stripe: [{
      type: Input
    }],
    load: [{
      type: Output
    }]
  });
})();
var StripeLinkAuthenticationComponent = class _StripeLinkAuthenticationComponent {
  stripeElementsService;
  elementsProvider;
  loadingTemplate;
  stripeElementRef;
  element;
  containerClass;
  options;
  elementsOptions;
  stripe;
  load = new EventEmitter();
  blur = new EventEmitter();
  change = new EventEmitter();
  focus = new EventEmitter();
  ready = new EventEmitter();
  escape = new EventEmitter();
  loaderror = new EventEmitter();
  loaderstart = new EventEmitter();
  elements;
  state = "notready";
  elementsSubscription;
  constructor(stripeElementsService, elementsProvider) {
    this.stripeElementsService = stripeElementsService;
    this.elementsProvider = elementsProvider;
  }
  ngOnChanges(changes) {
    return __async(this, null, function* () {
      this.state = "starting";
      let updateElements = false;
      if (!this.elementsProvider && (changes.elementsOptions || changes.stripe || !this.elements)) {
        this.elements = yield this.stripeElementsService.elements(this.stripe, this.elementsOptions).toPromise();
        updateElements = true;
      }
      const options = this.stripeElementsService.mergeOptions(this.options, this.containerClass);
      if (changes.options || changes.containerClass || !this.element || updateElements) {
        if (this.elements && updateElements) {
          this.createElement(options);
        }
      }
      this.state = "ready";
    });
  }
  ngOnInit() {
    return __async(this, null, function* () {
      const options = this.stripeElementsService.mergeOptions(this.options, this.containerClass);
      if (this.elementsProvider) {
        this.elementsSubscription = this.elementsProvider.elements.subscribe((elements) => {
          this.elements = elements;
          this.createElement(options);
          this.state = "ready";
        });
      } else if (this.state === "notready") {
        this.state = "starting";
        this.elements = yield this.stripeElementsService.elements(this.stripe).toPromise();
        this.createElement(options);
        this.state = "ready";
      }
    });
  }
  ngOnDestroy() {
    if (this.element) {
      this.element.destroy();
    }
    if (this.elementsSubscription) {
      this.elementsSubscription.unsubscribe();
    }
  }
  /**
   * @deprecated
   */
  getLinkAuthenticationElement() {
    return this.element;
  }
  createElement(options) {
    if (this.element) {
      this.element.unmount();
    }
    this.element = this.elements.create("linkAuthentication", options);
    this.element.on("change", (ev) => this.change.emit(ev));
    this.element.on("blur", () => this.blur.emit());
    this.element.on("focus", () => this.focus.emit());
    this.element.on("ready", () => this.ready.emit());
    this.element.on("escape", () => this.escape.emit());
    this.element.on("loaderror", () => this.loaderror.emit());
    this.element.on("loaderstart", () => this.loaderstart.emit());
    this.element.mount(this.stripeElementRef.nativeElement);
    this.load.emit(this.element);
  }
  static ɵfac = function StripeLinkAuthenticationComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _StripeLinkAuthenticationComponent)(ɵɵdirectiveInject(StripeElementsService), ɵɵdirectiveInject(StripeElementsDirective, 8));
  };
  static ɵcmp = ɵɵdefineComponent({
    type: _StripeLinkAuthenticationComponent,
    selectors: [["ngx-stripe-link-authentication"]],
    contentQueries: function StripeLinkAuthenticationComponent_ContentQueries(rf, ctx, dirIndex) {
      if (rf & 1) {
        ɵɵcontentQuery(dirIndex, NgxStripeElementLoadingTemplateDirective, 5, TemplateRef);
      }
      if (rf & 2) {
        let _t;
        ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.loadingTemplate = _t.first);
      }
    },
    viewQuery: function StripeLinkAuthenticationComponent_Query(rf, ctx) {
      if (rf & 1) {
        ɵɵviewQuery(_c0, 5);
      }
      if (rf & 2) {
        let _t;
        ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.stripeElementRef = _t.first);
      }
    },
    inputs: {
      containerClass: "containerClass",
      options: "options",
      elementsOptions: "elementsOptions",
      stripe: "stripe"
    },
    outputs: {
      load: "load",
      blur: "blur",
      change: "change",
      focus: "focus",
      ready: "ready",
      escape: "escape",
      loaderror: "loaderror",
      loaderstart: "loaderstart"
    },
    standalone: true,
    features: [ɵɵNgOnChangesFeature, ɵɵStandaloneFeature],
    decls: 3,
    vars: 1,
    consts: [["stripeElementRef", ""], [1, "field"], [3, "ngTemplateOutlet"]],
    template: function StripeLinkAuthenticationComponent_Template(rf, ctx) {
      if (rf & 1) {
        ɵɵelementStart(0, "div", 1, 0);
        ɵɵtemplate(2, StripeLinkAuthenticationComponent_Conditional_2_Template, 1, 1, "ng-container", 2);
        ɵɵelementEnd();
      }
      if (rf & 2) {
        ɵɵadvance(2);
        ɵɵconditional(ctx.state !== "ready" && ctx.loadingTemplate ? 2 : -1);
      }
    },
    dependencies: [CommonModule, NgTemplateOutlet],
    encapsulation: 2
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(StripeLinkAuthenticationComponent, [{
    type: Component,
    args: [{
      selector: "ngx-stripe-link-authentication",
      standalone: true,
      template: `
    <div class="field" #stripeElementRef>
      @if (state !== 'ready' && loadingTemplate) {
        <ng-container [ngTemplateOutlet]="loadingTemplate" />
      }
    </div>
  `,
      imports: [CommonModule]
    }]
  }], () => [{
    type: StripeElementsService
  }, {
    type: StripeElementsDirective,
    decorators: [{
      type: Optional
    }]
  }], {
    loadingTemplate: [{
      type: ContentChild,
      args: [NgxStripeElementLoadingTemplateDirective, {
        read: TemplateRef
      }]
    }],
    stripeElementRef: [{
      type: ViewChild,
      args: ["stripeElementRef"]
    }],
    containerClass: [{
      type: Input
    }],
    options: [{
      type: Input
    }],
    elementsOptions: [{
      type: Input
    }],
    stripe: [{
      type: Input
    }],
    load: [{
      type: Output
    }],
    blur: [{
      type: Output
    }],
    change: [{
      type: Output
    }],
    focus: [{
      type: Output
    }],
    ready: [{
      type: Output
    }],
    escape: [{
      type: Output
    }],
    loaderror: [{
      type: Output
    }],
    loaderstart: [{
      type: Output
    }]
  });
})();
var StripeP24BankComponent = class _StripeP24BankComponent {
  stripeElementsService;
  elementsProvider;
  loadingTemplate;
  stripeElementRef;
  element;
  containerClass;
  options;
  elementsOptions;
  stripe;
  load = new EventEmitter();
  blur = new EventEmitter();
  change = new EventEmitter();
  focus = new EventEmitter();
  ready = new EventEmitter();
  escape = new EventEmitter();
  elements;
  state = "notready";
  elementsSubscription;
  constructor(stripeElementsService, elementsProvider) {
    this.stripeElementsService = stripeElementsService;
    this.elementsProvider = elementsProvider;
  }
  ngOnChanges(changes) {
    return __async(this, null, function* () {
      this.state = "starting";
      let updateElements = false;
      if (!this.elementsProvider && (changes.elementsOptions || changes.stripe || !this.elements)) {
        this.elements = yield this.stripeElementsService.elements(this.stripe, this.elementsOptions).toPromise();
        updateElements = true;
      }
      const options = this.stripeElementsService.mergeOptions(this.options, this.containerClass);
      if (changes.options || changes.containerClass || !this.element || updateElements) {
        if (this.element && !updateElements) {
          this.update(options);
        } else if (this.elements && updateElements) {
          this.createElement(options);
        }
      }
      this.state = "ready";
    });
  }
  ngOnInit() {
    return __async(this, null, function* () {
      const options = this.stripeElementsService.mergeOptions(this.options, this.containerClass);
      if (this.elementsProvider) {
        this.elementsSubscription = this.elementsProvider.elements.subscribe((elements) => {
          this.elements = elements;
          this.createElement(options);
          this.state = "ready";
        });
      } else if (this.state === "notready") {
        this.state = "starting";
        this.elements = yield this.stripeElementsService.elements(this.stripe).toPromise();
        this.createElement(options);
        this.state = "ready";
      }
    });
  }
  ngOnDestroy() {
    if (this.element) {
      this.element.destroy();
    }
    if (this.elementsSubscription) {
      this.elementsSubscription.unsubscribe();
    }
  }
  update(options) {
    this.element.update(options);
  }
  /**
   * @deprecated
   */
  getP24Bankelement() {
    return this.element;
  }
  createElement(options) {
    if (this.element) {
      this.element.unmount();
    }
    this.element = this.elements.create("p24Bank", options);
    this.element.on("change", (ev) => this.change.emit(ev));
    this.element.on("blur", () => this.blur.emit());
    this.element.on("focus", () => this.focus.emit());
    this.element.on("ready", () => this.ready.emit());
    this.element.on("escape", () => this.escape.emit());
    this.element.mount(this.stripeElementRef.nativeElement);
    this.load.emit(this.element);
  }
  static ɵfac = function StripeP24BankComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _StripeP24BankComponent)(ɵɵdirectiveInject(StripeElementsService), ɵɵdirectiveInject(StripeElementsDirective, 8));
  };
  static ɵcmp = ɵɵdefineComponent({
    type: _StripeP24BankComponent,
    selectors: [["ngx-stripe-p24-bank"]],
    contentQueries: function StripeP24BankComponent_ContentQueries(rf, ctx, dirIndex) {
      if (rf & 1) {
        ɵɵcontentQuery(dirIndex, NgxStripeElementLoadingTemplateDirective, 5, TemplateRef);
      }
      if (rf & 2) {
        let _t;
        ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.loadingTemplate = _t.first);
      }
    },
    viewQuery: function StripeP24BankComponent_Query(rf, ctx) {
      if (rf & 1) {
        ɵɵviewQuery(_c0, 5);
      }
      if (rf & 2) {
        let _t;
        ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.stripeElementRef = _t.first);
      }
    },
    inputs: {
      containerClass: "containerClass",
      options: "options",
      elementsOptions: "elementsOptions",
      stripe: "stripe"
    },
    outputs: {
      load: "load",
      blur: "blur",
      change: "change",
      focus: "focus",
      ready: "ready",
      escape: "escape"
    },
    standalone: true,
    features: [ɵɵNgOnChangesFeature, ɵɵStandaloneFeature],
    decls: 3,
    vars: 1,
    consts: [["stripeElementRef", ""], [1, "field"], [3, "ngTemplateOutlet"]],
    template: function StripeP24BankComponent_Template(rf, ctx) {
      if (rf & 1) {
        ɵɵelementStart(0, "div", 1, 0);
        ɵɵtemplate(2, StripeP24BankComponent_Conditional_2_Template, 1, 1, "ng-container", 2);
        ɵɵelementEnd();
      }
      if (rf & 2) {
        ɵɵadvance(2);
        ɵɵconditional(ctx.state !== "ready" && ctx.loadingTemplate ? 2 : -1);
      }
    },
    dependencies: [CommonModule, NgTemplateOutlet],
    encapsulation: 2
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(StripeP24BankComponent, [{
    type: Component,
    args: [{
      selector: "ngx-stripe-p24-bank",
      standalone: true,
      template: `
    <div class="field" #stripeElementRef>
      @if (state !== 'ready' && loadingTemplate) {
        <ng-container [ngTemplateOutlet]="loadingTemplate" />
      }
    </div>
  `,
      imports: [CommonModule]
    }]
  }], () => [{
    type: StripeElementsService
  }, {
    type: StripeElementsDirective,
    decorators: [{
      type: Optional
    }]
  }], {
    loadingTemplate: [{
      type: ContentChild,
      args: [NgxStripeElementLoadingTemplateDirective, {
        read: TemplateRef
      }]
    }],
    stripeElementRef: [{
      type: ViewChild,
      args: ["stripeElementRef"]
    }],
    containerClass: [{
      type: Input
    }],
    options: [{
      type: Input
    }],
    elementsOptions: [{
      type: Input
    }],
    stripe: [{
      type: Input
    }],
    load: [{
      type: Output
    }],
    blur: [{
      type: Output
    }],
    change: [{
      type: Output
    }],
    focus: [{
      type: Output
    }],
    ready: [{
      type: Output
    }],
    escape: [{
      type: Output
    }]
  });
})();
var StripeAuBankAccountComponent = class _StripeAuBankAccountComponent {
  stripeElementsService;
  elementsProvider;
  loadingTemplate;
  stripeElementRef;
  element;
  containerClass;
  options;
  elementsOptions;
  stripe;
  load = new EventEmitter();
  blur = new EventEmitter();
  change = new EventEmitter();
  focus = new EventEmitter();
  ready = new EventEmitter();
  escape = new EventEmitter();
  elements;
  state = "notready";
  elementsSubscription;
  constructor(stripeElementsService, elementsProvider) {
    this.stripeElementsService = stripeElementsService;
    this.elementsProvider = elementsProvider;
  }
  ngOnChanges(changes) {
    return __async(this, null, function* () {
      this.state = "starting";
      let updateElements = false;
      if (!this.elementsProvider && (changes.elementsOptions || changes.stripe || !this.elements)) {
        this.elements = yield this.stripeElementsService.elements(this.stripe, this.elementsOptions).toPromise();
        updateElements = true;
      }
      const options = this.stripeElementsService.mergeOptions(this.options, this.containerClass);
      if (changes.options || changes.containerClass || !this.element || updateElements) {
        if (this.element && !updateElements) {
          this.update(options);
        } else if (this.elements && updateElements) {
          this.createElement(options);
        }
      }
      this.state = "ready";
    });
  }
  ngOnInit() {
    return __async(this, null, function* () {
      const options = this.stripeElementsService.mergeOptions(this.options, this.containerClass);
      if (this.elementsProvider) {
        this.elementsSubscription = this.elementsProvider.elements.subscribe((elements) => {
          this.elements = elements;
          this.createElement(options);
          this.state = "ready";
        });
      } else if (this.state === "notready") {
        this.state = "starting";
        this.elements = yield this.stripeElementsService.elements(this.stripe).toPromise();
        this.createElement(options);
        this.state = "ready";
      }
    });
  }
  ngOnDestroy() {
    if (this.element) {
      this.element.destroy();
    }
    if (this.elementsSubscription) {
      this.elementsSubscription.unsubscribe();
    }
  }
  update(options) {
    this.element.update(options);
  }
  /**
   * @deprecated
   */
  getAuBankAccount() {
    return this.element;
  }
  createElement(options = {}) {
    if (this.element) {
      this.element.unmount();
    }
    this.element = this.elements.create("auBankAccount", options);
    this.element.on("change", (ev) => this.change.emit(ev));
    this.element.on("blur", () => this.blur.emit());
    this.element.on("focus", () => this.focus.emit());
    this.element.on("ready", () => this.ready.emit());
    this.element.on("escape", () => this.escape.emit());
    this.element.mount(this.stripeElementRef.nativeElement);
    this.load.emit(this.element);
  }
  static ɵfac = function StripeAuBankAccountComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _StripeAuBankAccountComponent)(ɵɵdirectiveInject(StripeElementsService), ɵɵdirectiveInject(StripeElementsDirective, 8));
  };
  static ɵcmp = ɵɵdefineComponent({
    type: _StripeAuBankAccountComponent,
    selectors: [["ngx-stripe-au-bank-account"]],
    contentQueries: function StripeAuBankAccountComponent_ContentQueries(rf, ctx, dirIndex) {
      if (rf & 1) {
        ɵɵcontentQuery(dirIndex, NgxStripeElementLoadingTemplateDirective, 5, TemplateRef);
      }
      if (rf & 2) {
        let _t;
        ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.loadingTemplate = _t.first);
      }
    },
    viewQuery: function StripeAuBankAccountComponent_Query(rf, ctx) {
      if (rf & 1) {
        ɵɵviewQuery(_c0, 5);
      }
      if (rf & 2) {
        let _t;
        ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.stripeElementRef = _t.first);
      }
    },
    inputs: {
      containerClass: "containerClass",
      options: "options",
      elementsOptions: "elementsOptions",
      stripe: "stripe"
    },
    outputs: {
      load: "load",
      blur: "blur",
      change: "change",
      focus: "focus",
      ready: "ready",
      escape: "escape"
    },
    standalone: true,
    features: [ɵɵNgOnChangesFeature, ɵɵStandaloneFeature],
    decls: 3,
    vars: 1,
    consts: [["stripeElementRef", ""], [1, "field"], [3, "ngTemplateOutlet"]],
    template: function StripeAuBankAccountComponent_Template(rf, ctx) {
      if (rf & 1) {
        ɵɵelementStart(0, "div", 1, 0);
        ɵɵtemplate(2, StripeAuBankAccountComponent_Conditional_2_Template, 1, 1, "ng-container", 2);
        ɵɵelementEnd();
      }
      if (rf & 2) {
        ɵɵadvance(2);
        ɵɵconditional(ctx.state !== "ready" && ctx.loadingTemplate ? 2 : -1);
      }
    },
    dependencies: [CommonModule, NgTemplateOutlet],
    encapsulation: 2
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(StripeAuBankAccountComponent, [{
    type: Component,
    args: [{
      selector: "ngx-stripe-au-bank-account",
      standalone: true,
      template: `
    <div class="field" #stripeElementRef>
      @if (state !== 'ready' && loadingTemplate) {
        <ng-container [ngTemplateOutlet]="loadingTemplate" />
      }
    </div>
  `,
      imports: [CommonModule]
    }]
  }], () => [{
    type: StripeElementsService
  }, {
    type: StripeElementsDirective,
    decorators: [{
      type: Optional
    }]
  }], {
    loadingTemplate: [{
      type: ContentChild,
      args: [NgxStripeElementLoadingTemplateDirective, {
        read: TemplateRef
      }]
    }],
    stripeElementRef: [{
      type: ViewChild,
      args: ["stripeElementRef"]
    }],
    containerClass: [{
      type: Input
    }],
    options: [{
      type: Input
    }],
    elementsOptions: [{
      type: Input
    }],
    stripe: [{
      type: Input
    }],
    load: [{
      type: Output
    }],
    blur: [{
      type: Output
    }],
    change: [{
      type: Output
    }],
    focus: [{
      type: Output
    }],
    ready: [{
      type: Output
    }],
    escape: [{
      type: Output
    }]
  });
})();
var StripePaymentElementComponent = class _StripePaymentElementComponent {
  stripeElementsService;
  elementsProvider;
  stripeElementRef;
  element;
  elements;
  containerClass;
  options;
  elementsOptions;
  stripe;
  appearance;
  clientSecret;
  doNotCreateUntilClientSecretIsSet = false;
  load = new EventEmitter();
  blur = new EventEmitter();
  change = new EventEmitter();
  focus = new EventEmitter();
  ready = new EventEmitter();
  escape = new EventEmitter();
  loaderror = new EventEmitter();
  state = "notready";
  elementsSubscription;
  constructor(stripeElementsService, elementsProvider) {
    this.stripeElementsService = stripeElementsService;
    this.elementsProvider = elementsProvider;
  }
  ngOnChanges(changes) {
    return __async(this, null, function* () {
      this.state = "starting";
      let updateElements = false;
      if (!this.elementsProvider && (changes.elementsOptions || changes.stripe || changes.clientSecret || changes.appearance || !this.elements)) {
        this.elements = yield this.stripeElementsService.elements(this.stripe, __spreadValues(__spreadValues(__spreadValues({}, this.elementsOptions || {}), this.appearance ? {
          appearance: this.appearance
        } : {}), this.clientSecret ? {
          clientSecret: this.clientSecret
        } : {})).toPromise();
        updateElements = true;
      }
      const options = this.stripeElementsService.mergeOptions(this.options, this.containerClass);
      if (changes.options || changes.containerClass || !this.element || updateElements) {
        if (this.element && !updateElements) {
          this.update(options);
        } else if (this.elements && updateElements) {
          this.createElement(options);
        }
      }
      this.state = "ready";
    });
  }
  ngOnInit() {
    return __async(this, null, function* () {
      const options = this.stripeElementsService.mergeOptions(this.options, this.containerClass);
      if (this.elementsProvider) {
        this.elementsSubscription = this.elementsProvider.elements.subscribe((elements) => {
          this.elements = elements;
          this.createElement(options);
          this.state = "ready";
        });
      } else if (this.state === "notready") {
        this.state = "starting";
        this.elements = yield this.stripeElementsService.elements(this.stripe, __spreadValues(__spreadValues(__spreadValues({}, this.elementsOptions || {}), this.appearance ? {
          appearance: this.appearance
        } : {}), this.clientSecret ? {
          clientSecret: this.clientSecret
        } : {})).toPromise();
        this.createElement(options);
        this.state = "ready";
      }
    });
  }
  ngOnDestroy() {
    if (this.element) {
      this.element.destroy();
    }
    if (this.elementsSubscription) {
      this.elementsSubscription.unsubscribe();
    }
  }
  update(options) {
    return this.element.update(options);
  }
  collapse() {
    return this.element.collapse();
  }
  fetchUpdates() {
    return from(this.elements.fetchUpdates());
  }
  createElement(options = {}) {
    if (this.element) {
      this.element.unmount();
    }
    try {
      this.element = this.elements.create("payment", options);
    } catch (err) {
      this.elements = null;
      throw err;
    }
    this.element.on("change", (ev) => this.change.emit(ev));
    this.element.on("blur", (ev) => this.blur.emit(ev));
    this.element.on("focus", (ev) => this.focus.emit(ev));
    this.element.on("ready", (ev) => this.ready.emit(ev));
    this.element.on("escape", (ev) => this.escape.emit(ev));
    this.element.on("loaderror", (ev) => this.loaderror.emit(ev));
    this.element.mount(this.stripeElementRef.nativeElement);
    this.load.emit(this.element);
  }
  static ɵfac = function StripePaymentElementComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _StripePaymentElementComponent)(ɵɵdirectiveInject(StripeElementsService), ɵɵdirectiveInject(StripeElementsDirective, 8));
  };
  static ɵcmp = ɵɵdefineComponent({
    type: _StripePaymentElementComponent,
    selectors: [["ngx-stripe-payment"]],
    viewQuery: function StripePaymentElementComponent_Query(rf, ctx) {
      if (rf & 1) {
        ɵɵviewQuery(_c0, 5);
      }
      if (rf & 2) {
        let _t;
        ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.stripeElementRef = _t.first);
      }
    },
    inputs: {
      containerClass: "containerClass",
      options: "options",
      elementsOptions: "elementsOptions",
      stripe: "stripe",
      appearance: "appearance",
      clientSecret: "clientSecret",
      doNotCreateUntilClientSecretIsSet: "doNotCreateUntilClientSecretIsSet"
    },
    outputs: {
      load: "load",
      blur: "blur",
      change: "change",
      focus: "focus",
      ready: "ready",
      escape: "escape",
      loaderror: "loaderror"
    },
    standalone: true,
    features: [ɵɵNgOnChangesFeature, ɵɵStandaloneFeature],
    decls: 2,
    vars: 0,
    consts: [["stripeElementRef", ""], [1, "field"]],
    template: function StripePaymentElementComponent_Template(rf, ctx) {
      if (rf & 1) {
        ɵɵelement(0, "div", 1, 0);
      }
    },
    dependencies: [CommonModule],
    encapsulation: 2
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(StripePaymentElementComponent, [{
    type: Component,
    args: [{
      selector: "ngx-stripe-payment",
      standalone: true,
      template: `<div class="field" #stripeElementRef></div>`,
      imports: [CommonModule]
    }]
  }], () => [{
    type: StripeElementsService
  }, {
    type: StripeElementsDirective,
    decorators: [{
      type: Optional
    }]
  }], {
    stripeElementRef: [{
      type: ViewChild,
      args: ["stripeElementRef"]
    }],
    containerClass: [{
      type: Input
    }],
    options: [{
      type: Input
    }],
    elementsOptions: [{
      type: Input
    }],
    stripe: [{
      type: Input
    }],
    appearance: [{
      type: Input
    }],
    clientSecret: [{
      type: Input
    }],
    doNotCreateUntilClientSecretIsSet: [{
      type: Input
    }],
    load: [{
      type: Output
    }],
    blur: [{
      type: Output
    }],
    change: [{
      type: Output
    }],
    focus: [{
      type: Output
    }],
    ready: [{
      type: Output
    }],
    escape: [{
      type: Output
    }],
    loaderror: [{
      type: Output
    }]
  });
})();
var StripePaymentMethodMessagingComponent = class _StripePaymentMethodMessagingComponent {
  stripeElementsService;
  elementsProvider;
  loadingTemplate;
  stripeElementRef;
  element;
  containerClass;
  options;
  elementsOptions;
  stripe;
  load = new EventEmitter();
  ready = new EventEmitter();
  elements;
  state = "notready";
  elementsSubscription;
  constructor(stripeElementsService, elementsProvider) {
    this.stripeElementsService = stripeElementsService;
    this.elementsProvider = elementsProvider;
  }
  ngOnChanges(changes) {
    return __async(this, null, function* () {
      this.state = "starting";
      let updateElements = false;
      if (!this.elementsProvider && (changes.elementsOptions || changes.stripe || !this.elements)) {
        this.elements = yield this.stripeElementsService.elements(this.stripe, this.elementsOptions).toPromise();
        updateElements = true;
      }
      const options = this.stripeElementsService.mergeOptions(this.options, this.containerClass);
      if (changes.options || changes.containerClass || !this.element || updateElements) {
        if (this.element && !updateElements) {
          this.update(options);
        } else if (this.elements && updateElements) {
          this.createElement(options);
        }
      }
      this.state = "ready";
    });
  }
  ngOnInit() {
    return __async(this, null, function* () {
      const options = this.stripeElementsService.mergeOptions(this.options, this.containerClass);
      if (this.elementsProvider) {
        this.elementsSubscription = this.elementsProvider.elements.subscribe((elements) => {
          this.elements = elements;
          this.createElement(options);
          this.state = "ready";
        });
      } else if (this.state === "notready") {
        this.state = "starting";
        this.elements = yield this.stripeElementsService.elements(this.stripe).toPromise();
        this.createElement(options);
        this.state = "ready";
      }
    });
  }
  ngOnDestroy() {
    if (this.element) {
      this.element.destroy();
    }
    if (this.elementsSubscription) {
      this.elementsSubscription.unsubscribe();
    }
  }
  update(options) {
    this.element.update(options);
  }
  /**
   * @deprecated
   */
  getPaymentMethodMessaging() {
    return this.element;
  }
  createElement(options) {
    if (this.element) {
      this.element.unmount();
    }
    this.element = this.elements.create("paymentMethodMessaging", options);
    this.element.on("ready", () => this.ready.emit());
    this.element.mount(this.stripeElementRef.nativeElement);
    this.load.emit(this.element);
  }
  static ɵfac = function StripePaymentMethodMessagingComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _StripePaymentMethodMessagingComponent)(ɵɵdirectiveInject(StripeElementsService), ɵɵdirectiveInject(StripeElementsDirective, 8));
  };
  static ɵcmp = ɵɵdefineComponent({
    type: _StripePaymentMethodMessagingComponent,
    selectors: [["ngx-stripe-payment-method-messaging"]],
    contentQueries: function StripePaymentMethodMessagingComponent_ContentQueries(rf, ctx, dirIndex) {
      if (rf & 1) {
        ɵɵcontentQuery(dirIndex, NgxStripeElementLoadingTemplateDirective, 5, TemplateRef);
      }
      if (rf & 2) {
        let _t;
        ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.loadingTemplate = _t.first);
      }
    },
    viewQuery: function StripePaymentMethodMessagingComponent_Query(rf, ctx) {
      if (rf & 1) {
        ɵɵviewQuery(_c0, 5);
      }
      if (rf & 2) {
        let _t;
        ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.stripeElementRef = _t.first);
      }
    },
    inputs: {
      containerClass: "containerClass",
      options: "options",
      elementsOptions: "elementsOptions",
      stripe: "stripe"
    },
    outputs: {
      load: "load",
      ready: "ready"
    },
    standalone: true,
    features: [ɵɵNgOnChangesFeature, ɵɵStandaloneFeature],
    decls: 3,
    vars: 1,
    consts: [["stripeElementRef", ""], [1, "field"], [3, "ngTemplateOutlet"]],
    template: function StripePaymentMethodMessagingComponent_Template(rf, ctx) {
      if (rf & 1) {
        ɵɵelementStart(0, "div", 1, 0);
        ɵɵtemplate(2, StripePaymentMethodMessagingComponent_Conditional_2_Template, 1, 1, "ng-container", 2);
        ɵɵelementEnd();
      }
      if (rf & 2) {
        ɵɵadvance(2);
        ɵɵconditional(ctx.state !== "ready" && ctx.loadingTemplate ? 2 : -1);
      }
    },
    dependencies: [CommonModule, NgTemplateOutlet],
    encapsulation: 2
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(StripePaymentMethodMessagingComponent, [{
    type: Component,
    args: [{
      selector: "ngx-stripe-payment-method-messaging",
      standalone: true,
      template: `
    <div class="field" #stripeElementRef>
      @if (state !== 'ready' && loadingTemplate) {
        <ng-container [ngTemplateOutlet]="loadingTemplate" />
      }
    </div>
  `,
      imports: [CommonModule]
    }]
  }], () => [{
    type: StripeElementsService
  }, {
    type: StripeElementsDirective,
    decorators: [{
      type: Optional
    }]
  }], {
    loadingTemplate: [{
      type: ContentChild,
      args: [NgxStripeElementLoadingTemplateDirective, {
        read: TemplateRef
      }]
    }],
    stripeElementRef: [{
      type: ViewChild,
      args: ["stripeElementRef"]
    }],
    containerClass: [{
      type: Input
    }],
    options: [{
      type: Input
    }],
    elementsOptions: [{
      type: Input
    }],
    stripe: [{
      type: Input
    }],
    load: [{
      type: Output
    }],
    ready: [{
      type: Output
    }]
  });
})();
var StripePaymentRequestButtonComponent = class _StripePaymentRequestButtonComponent {
  stripeElementsService;
  elementsProvider;
  stripeElementRef;
  element;
  paymentRequest;
  containerClass;
  paymentOptions;
  options;
  elementsOptions;
  stripe;
  load = new EventEmitter();
  change = new EventEmitter();
  blur = new EventEmitter();
  focus = new EventEmitter();
  ready = new EventEmitter();
  token = new EventEmitter();
  paymentMethod = new EventEmitter();
  source = new EventEmitter();
  cancel = new EventEmitter();
  shippingaddresschange = new EventEmitter();
  shippingoptionchange = new EventEmitter();
  notavailable = new EventEmitter();
  elements;
  state = "notready";
  elementsSubscription;
  constructor(stripeElementsService, elementsProvider) {
    this.stripeElementsService = stripeElementsService;
    this.elementsProvider = elementsProvider;
  }
  ngOnChanges(changes) {
    return __async(this, null, function* () {
      this.state = "starting";
      let updateElements = false;
      if (!this.elementsProvider && (changes.elementsOptions || changes.stripe || !this.elements)) {
        const elements = yield this.stripeElementsService.elements(this.stripe, this.elementsOptions).toPromise();
        this.elements = elements;
        updateElements = true;
      }
      if (changes.paymentOptions && this.paymentRequest) {
        this.updateRequest(this.paymentOptions);
      }
      const options = this.stripeElementsService.mergeOptions(this.options, this.containerClass);
      if (changes.options || changes.containerClass || !this.element || updateElements) {
        if (this.element && !updateElements) {
          this.update(options);
        } else if (this.elements && updateElements) {
          this.createElement(options);
        }
      }
    });
  }
  ngOnInit() {
    return __async(this, null, function* () {
      const options = this.stripeElementsService.mergeOptions(this.options, this.containerClass);
      if (this.elementsProvider) {
        this.elementsSubscription = this.elementsProvider.elements.subscribe((elements) => {
          this.elements = elements;
          this.createElement(options);
          this.state = "ready";
        });
      } else if (this.state === "notready") {
        this.state = "starting";
        this.elements = yield this.stripeElementsService.elements(this.stripe).toPromise();
        this.createElement(options);
        this.state = "ready";
      }
    });
  }
  ngOnDestroy() {
    if (this.element) {
      this.element.destroy();
    }
    if (this.elementsSubscription) {
      this.elementsSubscription.unsubscribe();
    }
  }
  canMakePayment() {
    return from(this.paymentRequest.canMakePayment());
  }
  update(options) {
    this.element.update(options);
  }
  updateRequest(options) {
    const {
      currency,
      total,
      displayItems,
      shippingOptions
    } = options;
    this.paymentRequest.update({
      currency,
      total,
      displayItems,
      shippingOptions
    });
  }
  show() {
    this.paymentRequest.show();
  }
  abort() {
    this.paymentRequest.abort();
  }
  isShowing() {
    return this.paymentRequest.isShowing();
  }
  /**
   * @deprecated
   */
  getButton() {
    return this.element;
  }
  createElement() {
    return __async(this, arguments, function* (options = {}) {
      this.paymentRequest = this.stripeElementsService.paymentRequest(this.stripe, this.paymentOptions);
      this.paymentRequest.on("token", (ev) => this.token.emit(ev));
      if (this.paymentMethod.observed) this.paymentRequest.on("paymentmethod", (ev) => this.paymentMethod.emit(ev));
      if (this.source.observed && !this.paymentMethod.observed) this.paymentRequest.on("source", (ev) => this.source.emit(ev));
      this.paymentRequest.on("cancel", () => this.cancel.emit());
      this.paymentRequest.on("shippingaddresschange", (ev) => this.shippingaddresschange.emit(ev));
      this.paymentRequest.on("shippingoptionchange", (ev) => this.shippingoptionchange.emit(ev));
      if (this.element) {
        this.element.unmount();
      }
      this.element = this.elements.create("paymentRequestButton", __spreadValues({
        paymentRequest: this.paymentRequest
      }, options));
      const result = yield this.paymentRequest.canMakePayment();
      if (result) {
        this.element.on("click", (ev) => this.change.emit(ev));
        this.element.on("blur", () => this.blur.emit());
        this.element.on("focus", () => this.focus.emit());
        this.element.on("ready", () => this.ready.emit());
        this.element.mount(this.stripeElementRef.nativeElement);
        this.load.emit({
          paymentRequestButton: this.element,
          paymentRequest: this.paymentRequest
        });
      } else {
        this.notavailable.emit();
      }
    });
  }
  static ɵfac = function StripePaymentRequestButtonComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _StripePaymentRequestButtonComponent)(ɵɵdirectiveInject(StripeElementsService), ɵɵdirectiveInject(StripeElementsDirective, 8));
  };
  static ɵcmp = ɵɵdefineComponent({
    type: _StripePaymentRequestButtonComponent,
    selectors: [["ngx-stripe-payment-request-button"]],
    viewQuery: function StripePaymentRequestButtonComponent_Query(rf, ctx) {
      if (rf & 1) {
        ɵɵviewQuery(_c0, 5);
      }
      if (rf & 2) {
        let _t;
        ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.stripeElementRef = _t.first);
      }
    },
    inputs: {
      containerClass: "containerClass",
      paymentOptions: "paymentOptions",
      options: "options",
      elementsOptions: "elementsOptions",
      stripe: "stripe"
    },
    outputs: {
      load: "load",
      change: "change",
      blur: "blur",
      focus: "focus",
      ready: "ready",
      token: "token",
      paymentMethod: "paymentMethod",
      source: "source",
      cancel: "cancel",
      shippingaddresschange: "shippingaddresschange",
      shippingoptionchange: "shippingoptionchange",
      notavailable: "notavailable"
    },
    standalone: true,
    features: [ɵɵNgOnChangesFeature, ɵɵStandaloneFeature],
    decls: 2,
    vars: 0,
    consts: [["stripeElementRef", ""], [1, "field"]],
    template: function StripePaymentRequestButtonComponent_Template(rf, ctx) {
      if (rf & 1) {
        ɵɵelement(0, "div", 1, 0);
      }
    },
    dependencies: [CommonModule],
    encapsulation: 2
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(StripePaymentRequestButtonComponent, [{
    type: Component,
    args: [{
      selector: "ngx-stripe-payment-request-button",
      standalone: true,
      template: `<div class="field" #stripeElementRef></div>`,
      imports: [CommonModule]
    }]
  }], () => [{
    type: StripeElementsService
  }, {
    type: StripeElementsDirective,
    decorators: [{
      type: Optional
    }]
  }], {
    stripeElementRef: [{
      type: ViewChild,
      args: ["stripeElementRef"]
    }],
    containerClass: [{
      type: Input
    }],
    paymentOptions: [{
      type: Input
    }],
    options: [{
      type: Input
    }],
    elementsOptions: [{
      type: Input
    }],
    stripe: [{
      type: Input
    }],
    load: [{
      type: Output
    }],
    change: [{
      type: Output
    }],
    blur: [{
      type: Output
    }],
    focus: [{
      type: Output
    }],
    ready: [{
      type: Output
    }],
    token: [{
      type: Output
    }],
    paymentMethod: [{
      type: Output
    }],
    source: [{
      type: Output
    }],
    cancel: [{
      type: Output
    }],
    shippingaddresschange: [{
      type: Output
    }],
    shippingoptionchange: [{
      type: Output
    }],
    notavailable: [{
      type: Output
    }]
  });
})();
var StripeFactoryService = class _StripeFactoryService {
  version;
  baseKey;
  baseOptions;
  loader;
  window;
  constructor(version, baseKey, baseOptions, loader, window2) {
    this.version = version;
    this.baseKey = baseKey;
    this.baseOptions = baseOptions;
    this.loader = loader;
    this.window = window2;
  }
  create(key, options) {
    if (!key && !this.baseKey) {
      throw new Error("No key defined! Either you need to pass it as a parameter or define it when you call NgxStripeModule.forRoot()");
    }
    return new StripeInstance(this.version, this.loader, this.window, key || this.baseKey, options || this.baseOptions);
  }
  static ɵfac = function StripeFactoryService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _StripeFactoryService)(ɵɵinject(NGX_STRIPE_VERSION), ɵɵinject(STRIPE_PUBLISHABLE_KEY), ɵɵinject(STRIPE_OPTIONS), ɵɵinject(LazyStripeAPILoader), ɵɵinject(WindowRef));
  };
  static ɵprov = ɵɵdefineInjectable({
    token: _StripeFactoryService,
    factory: _StripeFactoryService.ɵfac
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(StripeFactoryService, [{
    type: Injectable
  }], () => [{
    type: void 0,
    decorators: [{
      type: Inject,
      args: [NGX_STRIPE_VERSION]
    }]
  }, {
    type: void 0,
    decorators: [{
      type: Inject,
      args: [STRIPE_PUBLISHABLE_KEY]
    }]
  }, {
    type: void 0,
    decorators: [{
      type: Inject,
      args: [STRIPE_OPTIONS]
    }]
  }, {
    type: LazyStripeAPILoader
  }, {
    type: WindowRef
  }], null);
})();
var components = [StripeAddressComponent, StripeAffirmMessageComponent, StripeAfterpayClearpayMessageComponent, StripeCardComponent, StripeCardNumberComponent, StripeCardExpiryComponent, StripeCardCvcComponent, StripeEpsBankComponent, StripeExpressCheckoutComponent, StripeFpxBankComponent, StripeIbanComponent, StripeIdealBankComponent, StripeIssuingCardCvcDisplayComponent, StripeIssuingCardExpiryDisplayComponent, StripeIssuingCardNumberDisplayComponent, StripeIssuingCardPinDisplayComponent, StripeLinkAuthenticationComponent, StripeP24BankComponent, StripeAuBankAccountComponent, StripePaymentElementComponent, StripePaymentMethodMessagingComponent, StripePaymentRequestButtonComponent];
var directives = [StripeCardGroupDirective, StripeElementsDirective, NgxStripeElementLoadingTemplateDirective];
var currentVersion = "17.2.0";
function _provideNgxStripe(publishableKey, options) {
  return [LazyStripeAPILoader, StripeService, StripeFactoryService, StripeElementsService, WindowRef, DocumentRef, {
    provide: STRIPE_PUBLISHABLE_KEY,
    useValue: publishableKey
  }, {
    provide: STRIPE_OPTIONS,
    useValue: options
  }, {
    provide: NGX_STRIPE_VERSION,
    useValue: currentVersion
  }];
}
function provideNgxStripe(publishableKey, options) {
  return makeEnvironmentProviders([..._provideNgxStripe(publishableKey, options)]);
}
var NgxStripeModule = class _NgxStripeModule {
  static forRoot(publishableKey, options) {
    return {
      ngModule: _NgxStripeModule,
      providers: [..._provideNgxStripe(publishableKey, options)]
    };
  }
  /**
   * @deprecated
   */
  static forChild(publishableKey, options) {
    return {
      ngModule: _NgxStripeModule,
      providers: [..._provideNgxStripe(publishableKey, options)]
    };
  }
  static ɵfac = function NgxStripeModule_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _NgxStripeModule)();
  };
  static ɵmod = ɵɵdefineNgModule({
    type: _NgxStripeModule,
    imports: [CommonModule, StripeAddressComponent, StripeAffirmMessageComponent, StripeAfterpayClearpayMessageComponent, StripeCardComponent, StripeCardNumberComponent, StripeCardExpiryComponent, StripeCardCvcComponent, StripeEpsBankComponent, StripeExpressCheckoutComponent, StripeFpxBankComponent, StripeIbanComponent, StripeIdealBankComponent, StripeIssuingCardCvcDisplayComponent, StripeIssuingCardExpiryDisplayComponent, StripeIssuingCardNumberDisplayComponent, StripeIssuingCardPinDisplayComponent, StripeLinkAuthenticationComponent, StripeP24BankComponent, StripeAuBankAccountComponent, StripePaymentElementComponent, StripePaymentMethodMessagingComponent, StripePaymentRequestButtonComponent, StripeCardGroupDirective, StripeElementsDirective, NgxStripeElementLoadingTemplateDirective],
    exports: [StripeAddressComponent, StripeAffirmMessageComponent, StripeAfterpayClearpayMessageComponent, StripeCardComponent, StripeCardNumberComponent, StripeCardExpiryComponent, StripeCardCvcComponent, StripeEpsBankComponent, StripeExpressCheckoutComponent, StripeFpxBankComponent, StripeIbanComponent, StripeIdealBankComponent, StripeIssuingCardCvcDisplayComponent, StripeIssuingCardExpiryDisplayComponent, StripeIssuingCardNumberDisplayComponent, StripeIssuingCardPinDisplayComponent, StripeLinkAuthenticationComponent, StripeP24BankComponent, StripeAuBankAccountComponent, StripePaymentElementComponent, StripePaymentMethodMessagingComponent, StripePaymentRequestButtonComponent, StripeCardGroupDirective, StripeElementsDirective, NgxStripeElementLoadingTemplateDirective]
  });
  static ɵinj = ɵɵdefineInjector({
    imports: [CommonModule, components]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NgxStripeModule, [{
    type: NgModule,
    args: [{
      exports: [...components, ...directives],
      imports: [CommonModule, ...components, ...directives]
    }]
  }], null, null);
})();
function injectStripe(publishableKey, options) {
  if (publishableKey) {
    const factory = inject(StripeFactoryService);
    return factory.create(publishableKey, options);
  } else if (inject(STRIPE_PUBLISHABLE_KEY)) {
    return inject(StripeService);
  }
  throw new Error("Publishable Key is required either global or pass as parameter");
}
export {
  DocumentRef,
  LazyStripeAPILoader,
  NGX_STRIPE_VERSION,
  NgxStripeElementLoadingTemplateDirective,
  NgxStripeModule,
  STRIPE_OPTIONS,
  STRIPE_PUBLISHABLE_KEY,
  StripeAddressComponent,
  StripeAffirmMessageComponent,
  StripeAfterpayClearpayMessageComponent,
  StripeAuBankAccountComponent,
  StripeCardComponent,
  StripeCardCvcComponent,
  StripeCardExpiryComponent,
  StripeCardGroupDirective,
  StripeCardNumberComponent,
  StripeElementsDirective,
  StripeElementsService,
  StripeEpsBankComponent,
  StripeExpressCheckoutComponent,
  StripeFactoryService,
  StripeFpxBankComponent,
  StripeIbanComponent,
  StripeIdealBankComponent,
  StripeInstance,
  StripeIssuingCardCvcDisplayComponent,
  StripeIssuingCardExpiryDisplayComponent,
  StripeIssuingCardNumberDisplayComponent,
  StripeIssuingCardPinDisplayComponent,
  StripeLinkAuthenticationComponent,
  StripeP24BankComponent,
  StripePaymentElementComponent,
  StripePaymentMethodMessagingComponent,
  StripePaymentRequestButtonComponent,
  StripeService,
  WindowRef,
  injectStripe,
  provideNgxStripe
};
//# sourceMappingURL=ngx-stripe.js.map
