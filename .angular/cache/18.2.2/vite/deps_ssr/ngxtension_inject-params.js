import { createRequire } from 'module';const require = createRequire(import.meta.url);
import {
  toSignal
} from "./chunk-3TPJOEZJ.js";
import {
  ActivatedRoute
} from "./chunk-ST5NE7L7.js";
import "./chunk-75EMIFUS.js";
import "./chunk-FQ2SIUFL.js";
import "./chunk-P56HNVUJ.js";
import {
  assertInInjectionContext,
  inject
} from "./chunk-EOKWXOL2.js";
import {
  require_cjs
} from "./chunk-VDZEJD3D.js";
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
