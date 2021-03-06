import {
  enums, object, oneOf, orSignal,
  booleanType, nullType, numberType, signalRef,
  booleanOrSignal, numberOrSignal
} from './util';

const layoutAlignEnum = ['all', 'each', 'none'];

const layoutBoundsEnum = ['full', 'flush'];

export const layoutAlign = oneOf(
  enums(layoutAlignEnum),
  signalRef
);

const band = oneOf(
  numberOrSignal,
  nullType,
  object({row: numberOrSignal, column: numberOrSignal})
);

const layout = orSignal(object({
  align: oneOf(
    layoutAlign,
    object({row: layoutAlign, column: layoutAlign})
  ),
  bounds: orSignal(enums(layoutBoundsEnum)),
  center: oneOf(
    booleanType,
    signalRef,
    object({row: booleanOrSignal, column: booleanOrSignal})
  ),
  columns: numberOrSignal,
  padding: oneOf(
    numberType,
    signalRef,
    object({row: numberOrSignal, column: numberOrSignal})
  ),
  offset: oneOf(
    numberType,
    signalRef,
    object({
      rowHeader: numberOrSignal,
      rowFooter: numberOrSignal,
      rowTitle: numberOrSignal,
      columnHeader: numberOrSignal,
      columnFooter: numberOrSignal,
      columnTitle: numberOrSignal
    })
  ),
  headerBand: band,
  footerBand: band,
  titleBand: band
}));

export default {
  defs: {
    layout
  }
};
