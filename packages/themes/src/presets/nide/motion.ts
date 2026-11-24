// Shared CSS for Nide components. Imported relatively, so the build inlines it into each component
// file and the per-component entry points stay self-contained.

// Overlays (Select, MultiSelect, DatePicker, Popover, popup Menu, ...) open and close on Nide's
// quick rhythm instead of the base 300ms.
export const overlayMotion = /*css*/ `
.p-anchored-overlay-enter-active {
    animation: nide-overlay-in 150ms cubic-bezier(0.16, 1, 0.3, 1);
}

.p-anchored-overlay-leave-active {
    animation: nide-overlay-out 100ms ease-in;
}

@keyframes nide-overlay-in {
    from {
        opacity: 0;
        transform: scale(0.97);
    }
}

@keyframes nide-overlay-out {
    to {
        opacity: 0;
        transform: scale(0.97);
    }
}

@media (prefers-reduced-motion: reduce) {
    .p-anchored-overlay-enter-active,
    .p-anchored-overlay-leave-active {
        animation: none;
    }
}
`;

// Hover backgrounds on options, menu items and table rows follow the pointer without the 150ms fade
// (the same rule Aura ships in its global css).
export const instantHover = (selectors: string) => /*css*/ `
${selectors} {
    transition: none;
}
`;
