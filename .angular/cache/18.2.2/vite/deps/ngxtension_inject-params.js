import {
  ActivatedRoute
} from "./chunk-ILYL3FMR.js";
import "./chunk-LFQGC3NA.js";
import {
  toSignal
} from "./chunk-R4IJ2EJH.js";
import "./chunk-KSQUHJTU.js";
import "./chunk-DF5PLQYK.js";
import {
  assertInInjectionContext,
  inject
} from "./chunk-WDMVXB4D.js";
import "./chunk-XPU7EA6D.js";
import "./chunk-QN5HDKTT.js";
import {
  map
} from "./chunk-MHK6ZZQX.js";
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
