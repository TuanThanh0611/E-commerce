import {
  toSignal
} from "./chunk-DRQHNJ4G.js";
import {
  ActivatedRoute
} from "./chunk-6D55P5IR.js";
import "./chunk-5M2A4Z2O.js";
import "./chunk-EO7BVNE5.js";
import "./chunk-72NJ7ZHB.js";
import {
  assertInInjectionContext,
  inject
} from "./chunk-DIH56O3V.js";
import {
  map
} from "./chunk-FDESMX7I.js";
import "./chunk-WDMUDEB6.js";

// node_modules/ngxtension/fesm2022/ngxtension-inject-params.mjs
function injectParams(keyOrTransform) {
  assertInInjectionContext(injectParams);
  const route = inject(ActivatedRoute);
  const params = route.snapshot.params;
  if (typeof keyOrTransform === "function") {
    return toSignal(route.params.pipe(map(keyOrTransform)), {
      initialValue: keyOrTransform(params)
    });
  }
  const getParam = (params2) => keyOrTransform ? params2?.[keyOrTransform] ?? null : params2;
  return toSignal(route.params.pipe(map(getParam)), {
    initialValue: getParam(params)
  });
}
export {
  injectParams
};
//# sourceMappingURL=ngxtension_inject-params.js.map
