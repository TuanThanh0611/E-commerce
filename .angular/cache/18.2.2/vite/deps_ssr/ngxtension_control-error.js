import { createRequire } from 'module';const require = createRequire(import.meta.url);
import {
  takeUntilDestroyed,
  toObservable,
  toSignal
} from "./chunk-JJRVXWAX.js";
import {
  FormGroupDirective,
  NgForm
} from "./chunk-5KC4EDJZ.js";
import "./chunk-P33GOPED.js";
import {
  Directive,
  InjectionToken,
  Input,
  TemplateRef,
  ViewContainerRef,
  inject,
  setClassMetadata,
  signal,
  ɵɵdefineDirective
} from "./chunk-FFXIWBV5.js";
import {
  require_cjs
} from "./chunk-IXWXOSOL.js";
import "./chunk-IJKRIHJI.js";
import "./chunk-4SNWTT7U.js";
import {
  __toESM
} from "./chunk-NQ4HTGF6.js";

// node_modules/ngxtension/fesm2022/ngxtension-filter-nil.mjs
var import_rxjs = __toESM(require_cjs(), 1);
var filterNil = () => (0, import_rxjs.filter)((value) => value !== void 0 && value !== null);

// node_modules/ngxtension/fesm2022/ngxtension-control-error.mjs
var import_rxjs2 = __toESM(require_cjs(), 1);
var dirty$ = (control) => {
  const dirty$2 = new import_rxjs2.BehaviorSubject(control.dirty);
  const markAsPristine = control.markAsPristine.bind(control);
  const markAsDirty = control.markAsDirty.bind(control);
  control.markAsPristine = (...args) => {
    markAsPristine(...args);
    dirty$2.next(false);
  };
  control.markAsDirty = (...args) => {
    markAsDirty(...args);
    dirty$2.next(true);
  };
  return dirty$2.pipe((0, import_rxjs2.distinctUntilChanged)());
};
var touched$ = (control) => {
  const touched$2 = new import_rxjs2.BehaviorSubject(control.touched);
  const markAsTouched = control.markAsTouched.bind(control);
  const markAsUntouched = control.markAsUntouched.bind(control);
  control.markAsTouched = (...args) => {
    markAsTouched(...args);
    touched$2.next(true);
  };
  control.markAsUntouched = (...args) => {
    markAsUntouched(...args);
    touched$2.next(false);
  };
  return touched$2.pipe((0, import_rxjs2.distinctUntilChanged)());
};
var NGX_DEFAULT_CONTROL_ERROR_STATE_MATCHER = (control, parent) => (0, import_rxjs2.combineLatest)([control.valueChanges.pipe((0, import_rxjs2.startWith)(control.value)), control.statusChanges.pipe((0, import_rxjs2.startWith)(control.status), (0, import_rxjs2.distinctUntilChanged)()), touched$(control), parent?.ngSubmit.pipe((0, import_rxjs2.map)(() => true), (0, import_rxjs2.startWith)(parent.submitted), (0, import_rxjs2.distinctUntilChanged)()) ?? (0, import_rxjs2.of)(false)], (value, status, touched, submitted) => status === "INVALID" && (touched || submitted));
var NGX_CONTROL_ERROR_STATE_MATCHER = new InjectionToken("NGX_CONTROL_ERROR_STATE_MATCHER", {
  factory: () => NGX_DEFAULT_CONTROL_ERROR_STATE_MATCHER
});
var NGX_CONTROL_ERROR_PARENT = new InjectionToken("NGX_CONTROL_ERROR_PARENT");
var provideNgxControlError = (options) => {
  const provider = [];
  if (options?.errorStateMatcher) provider.push({
    provide: NGX_CONTROL_ERROR_STATE_MATCHER,
    useFactory: options.errorStateMatcher
  });
  if (options?.parent) provider.push({
    provide: NGX_CONTROL_ERROR_PARENT,
    useFactory: options.parent
  });
  return provider;
};
var _NgxControlError = class _NgxControlError {
  constructor() {
    this.templateRef = inject(TemplateRef);
    this.viewContainerRef = inject(ViewContainerRef);
    this.track$ = signal(void 0);
    this.parent$ = signal(inject(NGX_CONTROL_ERROR_PARENT, {
      optional: true
    }) ?? inject(FormGroupDirective, {
      optional: true
    }) ?? inject(NgForm, {
      optional: true
    }) ?? void 0);
    this.control$ = signal(void 0);
    this.errorStateMatcher$ = signal(inject(NGX_CONTROL_ERROR_STATE_MATCHER));
    this._hasError$ = (0, import_rxjs2.combineLatest)([toObservable(this.track$), toObservable(this.errorStateMatcher$), toObservable(this.control$).pipe(filterNil()), toObservable(this.parent$)]).pipe((0, import_rxjs2.switchMap)(([track, errorStateMatcher, control, parent]) => errorStateMatcher(control, parent).pipe((0, import_rxjs2.map)((errorState) => errorState && track != null && control != null && (typeof track === "string" ? control.hasError(track) : track.some((x) => control.hasError(x)))))), (0, import_rxjs2.shareReplay)(1));
    this.hasError$ = toSignal(this._hasError$, {
      initialValue: false
    });
    (0, import_rxjs2.combineLatest)([toObservable(this.track$), toObservable(this.control$), this._hasError$], (track, control, hasError) => {
      this.viewContainerRef.clear();
      if (hasError && control != null && track != null) this.viewContainerRef.createEmbeddedView(this.templateRef, {
        $implicit: control.errors ?? {},
        track,
        control
      });
    }).pipe(takeUntilDestroyed()).subscribe();
  }
  /**
   * The errors this directive tracks, when a {@link control$ control} is provided.
   */
  set track(track) {
    this.track$.set(track);
  }
  get track() {
    return this.track$();
  }
  /**
   * The control which `errors` are tracked.
   *
   * @see {@link AbstractControl.errors}
   */
  set control(control) {
    this.control$.set(control);
  }
  get control() {
    return this.control$();
  }
  /**
   *  A `StateMatcher` which defines when this {@link control$ control} is in an *error state*.
   *  This directive **ONLY** renders this template when the `StateMatcher` evaluates to `true`.
   *
   *  Defaults to {@link NGX_CONTROL_ERROR_STATE_MATCHER}.
   */
  set errorStateMatcher(errorStateMatcher) {
    this.errorStateMatcher$.set(errorStateMatcher);
  }
  get errorStateMatcher() {
    return this.errorStateMatcher$();
  }
  /**
   * The parent of this {@link control$ control}.
   *
   * NOTE: Might not be the control referenced by {@link AbstractControl.parent parent} of this {@link control$ control}.
   */
  set parent(parent) {
    this.parent$.set(parent);
  }
  get parent() {
    return this.parent$();
  }
  /**
   * The context of this template.
   */
  get context() {
    return this.viewContainerRef.get(0)?.context;
  }
};
_NgxControlError.ngTemplateContextGuard = (directive, context) => true;
_NgxControlError.ɵfac = function NgxControlError_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _NgxControlError)();
};
_NgxControlError.ɵdir = ɵɵdefineDirective({
  type: _NgxControlError,
  selectors: [["", "ngxControlError", ""]],
  inputs: {
    track: [0, "ngxControlErrorTrack", "track"],
    control: [0, "ngxControlError", "control"],
    errorStateMatcher: [0, "ngxControlErrorErrorStateMatcher", "errorStateMatcher"],
    parent: [0, "ngxControlErrorParent", "parent"]
  },
  standalone: true
});
var NgxControlError = _NgxControlError;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NgxControlError, [{
    type: Directive,
    args: [{
      selector: "[ngxControlError]",
      standalone: true
    }]
  }], () => [], {
    track: [{
      type: Input,
      args: [{
        alias: "ngxControlErrorTrack",
        required: true
      }]
    }],
    control: [{
      type: Input,
      args: [{
        alias: "ngxControlError",
        required: true
      }]
    }],
    errorStateMatcher: [{
      type: Input,
      args: [{
        alias: "ngxControlErrorErrorStateMatcher"
      }]
    }],
    parent: [{
      type: Input,
      args: [{
        alias: "ngxControlErrorParent"
      }]
    }]
  });
})();
export {
  NGX_CONTROL_ERROR_PARENT,
  NGX_CONTROL_ERROR_STATE_MATCHER,
  NGX_DEFAULT_CONTROL_ERROR_STATE_MATCHER,
  NgxControlError,
  dirty$,
  provideNgxControlError,
  touched$
};
//# sourceMappingURL=ngxtension_control-error.js.map
