import type { AuraBaseDesignTokens } from '../../aura/base/index.d';

type Semantic = NonNullable<AuraBaseDesignTokens['semantic']>;
type ColorScheme = NonNullable<Semantic['colorScheme']>;
type FocusRing = Semantic['focusRing'];

/**
 * Aura's base tokens, plus a focus ring per colour scheme.
 */
export interface NideBaseDesignTokens extends AuraBaseDesignTokens {
    semantic?: Semantic & {
        colorScheme?: {
            light?: ColorScheme['light'] & { focusRing?: FocusRing };
            dark?: ColorScheme['dark'] & { focusRing?: FocusRing };
        };
    };
}

declare const _default: NideBaseDesignTokens;
export default _default;
