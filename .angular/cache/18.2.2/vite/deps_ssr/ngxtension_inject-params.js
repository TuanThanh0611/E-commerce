import { createRequire } from 'module';const require = createRequire(import.meta.url);
import {
  toSignal
} from "./chunk-JJRVXWAX.js";
import {
  ActivatedRoute
} from "./chunk-ZGU4U6HF.js";
import "./chunk-6RBVCECK.js";
import "./chunk-OAHFPBWF.js";
import "./chunk-P33GOPED.js";
import {
  assertInInjectionContext,
  inject
} from "./chunk-FFXIWBV5.js";
import {
  require_cjs
} from "./chunk-IXWXOSOL.js";
import "./chunk-IJKRIHJI.js";
import "./chunk-4SNWTT7U.js";
import {
  __toESM
} from "./chunk-NQ4HTGF6.js";

// node_modules/ngxtension/fesm2022/ngxtension-inject-params.mjs
var import_rxjs = __toESM(require_cjs(), 1);
function injectParams(keyOrTransform) {
  assertInInjectionContext(injectParams);
  const route = inject(ActivatedRoute);
  const params = route.snapshot.params;
  if (typeof keyOrTransform === "function") {
    return toSignal(route.params.pipe((0, import_rxjs.map)(keyOrTransform)), {
      initialValue: keyOrTransform(params)
    });
  }
  const getParam = (params2) => keyOrTransform ? params2?.[keyOrTransform] ?? null : params2;
  return toSignal(route.params.pipe((0, import_rxjs.map)(getParam)), {
    initialValue: getParam(params)
  });
}
export {
  injectParams
};
//# sourceMappingURL=ngxtension_inject-params.js.map
