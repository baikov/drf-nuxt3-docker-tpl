[![code style](https://antfu.me/badge-code-style.svg)](https://github.com/antfu/eslint-config)
# Nuxt 3 production-ready template (with TailwindCSS)


## Notes for an optimal setup

- **Node.js:** Make sure to use an even numbered version (18, 20, etc)
- **Nuxtr:** Install the community-developed [Nuxtr extension](https://marketplace.visualstudio.com/items?itemName=Nuxtr.nuxtr-vscode)
- **Volar:** Either enable [Take Over Mode](https://vuejs.org/guide/typescript/overview.html#volar-takeover-mode)

## Takeover Mode
To enable Takeover Mode, you need to disable VSCode's built-in TS language service in your project's workspace only by following these steps:

- In your project workspace, bring up the command palette with `Ctrl + Shift + P` (macOS: `Cmd + Shift + P`).
- Type `built` and select `"Extensions: Show Built-in Extensions"`.
- Type `typescript` in the extension search box (do not remove `@builtin` prefix).
- Click the little gear icon of `"TypeScript and JavaScript Language Features"`, and select `"Disable (Workspace)"`.
- Reload the workspace. Takeover mode will be enabled when you open a `Vue` or `TS` file.

If you have enabled **Take Over Mode** you can disable generating the shim for *.vue files in your `nuxt.config.ts` file:

```ts
// nuxt.config.ts
export default defineNuxtConfig({
  typescript: {
    shim: false
  }
})
```

## Dev dependencies
- Lint [@antfu/eslint-config](https://github.com/antfu/eslint-config):
