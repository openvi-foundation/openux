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

/* The content area reads as a drop zone. */
.p-fileupload-advanced .p-fileupload-content {
    margin: 0 1.125rem 1.125rem;
    padding: 1rem;
    border: 1px dashed dt('content.border.color');
    border-radius: dt('border.radius.md');
    background: color-mix(in srgb, dt('content.hover.background'), transparent 50%);
}

/* The progress bar only shows once an upload has started. */
.p-fileupload-content .p-progressbar:not([aria-valuenow]),
.p-fileupload-content .p-progressbar[aria-valuenow='0'] {
    display: none;
}

/* A quiet status instead of a warning-yellow "Pending" on every file. */
.p-fileupload-file .p-badge {
    background: dt('content.hover.background');
    color: dt('text.muted.color');
}
`
} satisfies FileUploadDesignTokens) as FileUploadDesignTokens;
