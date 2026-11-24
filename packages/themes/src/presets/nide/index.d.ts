import type { NideBaseDesignTokens } from '@openuxkit/themes/nide/base';
import type { Preset } from '@openuxkit/themes/types';

/**
 *
 * _Nide Preset_
 *
 * @group presets
 * @module nide
 *
 */
declare const _default: Preset<NideBaseDesignTokens>;
export default _default;

/**
 * Nide with a brand colour as primary, e.g. `nideBrand('indigo')`.
 * Light mode uses the 600 shade with white text, dark mode the 400 shade.
 *
 * @param color Name of a primitive palette, such as `'indigo'` or `'emerald'`.
 */
export declare function nideBrand(color: string): Preset<NideBaseDesignTokens>;
