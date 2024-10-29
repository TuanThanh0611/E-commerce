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

// node_modules/ngxtension/fesm2022/ngxtension-inject-query-params.mjs
function injectQueryParams(keyOrParamsTransform, options = {}) {
  assertInInjectionContext(injectQueryParams);
  const route = inject(ActivatedRoute);
  const queryParams = route.snapshot.queryParams || {};
  const {
    transform,
    initialValue
  } = options;
  if (!keyOrParamsTransform) {
    return toSignal(route.queryParams, {
      initialValue: queryParams
    });
  }
  if (typeof keyOrParamsTransform === "function") {
    return toSignal(route.queryParams.pipe(map(keyOrParamsTransform)), {
      initialValue: keyOrParamsTransform(queryParams)
    });
  }
  const getParam = (params) => {
    const param = params?.[keyOrParamsTransform];
    if (!param) {
      return initialValue ?? null;
    }
    if (Array.isArray(param)) {
      if (param.length < 1) {
        return initialValue ?? null;
      }
      return transform ? transform(param[0]) : param[0];
    }
    return transform ? transform(param) : param;
  };
  return toSignal(route.queryParams.pipe(map(getParam)), {
    initialValue: getParam(queryParams)
  });
}
(function(injectQueryParams2) {
  function array(key, options = {}) {
    assertInInjectionContext(injectQueryParams2.array);
    const route = inject(ActivatedRoute);
    const queryParams = route.snapshot.queryParams || {};
    const {
      transform,
      initialValue
    } = options;
    const transformParam = (param) => {
      if (!param) {
        return initialValue ?? null;
      }
      if (Array.isArray(param)) {
        if (param.length < 1) {
          return initialValue ?? null;
        }
        return transform ? param.map((it) => transform(it)) : param;
      }
      return [transform ? transform(param) : param];
    };
    const getParam = (params) => {
      const param = params?.[key];
      return transformParam(param);
    };
    return toSignal(route.queryParams.pipe(map(getParam)), {
      initialValue: getParam(queryParams)
    });
  }
  injectQueryParams2.array = array;
})(injectQueryParams || (injectQueryParams = {}));
export {
  injectQueryParams
};
//# sourceMappingURL=ngxtension_inject-query-params.js.map
