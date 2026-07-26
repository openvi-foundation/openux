import type { ConfirmDialogDesignTokens, ConfirmDialogTokenSections } from '@openuxkit/themes/types/confirmdialog';

export const icon: ConfirmDialogTokenSections.Icon = {
    size: '2rem',
    color: '{overlay.modal.color}'
};

export const content: ConfirmDialogTokenSections.Content = {
    gap: '1rem'
};

export default {
    icon,
    content
} satisfies ConfirmDialogDesignTokens;
