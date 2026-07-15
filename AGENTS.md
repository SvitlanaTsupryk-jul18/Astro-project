## Development

Start the dev server with:

```
npx astro dev
```

It runs on http://localhost:4321 and reloads on file changes; stop it with Ctrl+C.

Astro CLI v6 has NO `stop`, `status`, or `logs` subcommands and NO `--background`
flag — passing them is silently ignored and just starts another server, leaving
stray processes on ports 4321, 4322, 4323… To run it detached, background the
shell process yourself (`npx astro dev &`) and stop it by killing that PID or
freeing the port (`lsof -nP -iTCP:4321 -sTCP:LISTEN`).

## Documentation

Full documentation: https://docs.astro.build

Consult these guides before working on related tasks:

- [Adding pages, dynamic routes, or middleware](https://docs.astro.build/en/guides/routing/)
- [Working with Astro components](https://docs.astro.build/en/basics/astro-components/)
- [Using React, Vue, Svelte, or other framework components](https://docs.astro.build/en/guides/framework-components/)
- [Adding or managing content](https://docs.astro.build/en/guides/content-collections/)
- [Adding styles or using Tailwind](https://docs.astro.build/en/guides/styling/)
- [Supporting multiple languages](https://docs.astro.build/en/guides/internationalization/)
