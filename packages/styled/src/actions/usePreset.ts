import { deepMerge } from '@openuxkit/utils/object';
import Theme from '../config/index';

export default function usePreset<T extends Record<string, unknown>>(...presets: T[]): T {
    const newPreset = deepMerge(...presets);

    Theme.setPreset(newPreset);

    return newPreset as T;
}
