import type { TerminalTokenSections } from '@openuxkit/themes/types/terminal';

export * from '@openuxkit/themes/types/terminal';

declare const root: TerminalTokenSections.Root;
declare const prompt: TerminalTokenSections.Prompt;
declare const commandResponse: TerminalTokenSections.CommandResponse;
declare const _default: {
    root: TerminalTokenSections.Root;
    prompt: TerminalTokenSections.Prompt;
    commandResponse: TerminalTokenSections.CommandResponse;
};

export { commandResponse, _default as default, prompt, root };
