import { definePreset } from '@openuxkit/styled';
import aura from '@openuxkit/themes/aura/fileupload';
import type { FileUploadDesignTokens } from '@openuxkit/themes/types/fileupload';

export default definePreset<Record<string, unknown>>(aura, {
    css: `
.p-fileupload-file-info {
    font-size: 0.875rem;
    line-height: 1.25rem;
}

.p-fileupload-file-size {
    color: dt('text.muted.color');
}
`
} satisfies FileUploadDesignTokens) as FileUploadDesignTokens;
