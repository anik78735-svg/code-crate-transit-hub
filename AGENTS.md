<!-- LOVABLE:BEGIN -->
> [!IMPORTANT]
> This project is connected to [Lovable](https://lovable.dev). Avoid rewriting
> published git history — force pushing, or rebasing/amending/squashing commits
> that are already pushed — as it rewrites history on Lovable's side and the
> user will likely lose their project history.
>
> Commits you push to the connected branch sync back to Lovable and show up in
> the editor, so keep the branch in a working state.
<!-- LOVABLE:END -->

## Architecture

- Migrated TubePilot static site (source: uploaded code archive). Page bodies live in `src/content/*.ts` as raw HTML and render through `src/components/site/parsed-html.tsx` (html-react-parser). Do not hand-rewrite migrated page content into JSX.
- Site CSS is appended to `src/styles.css` with `tp-`-prefixed tokens (`--tp-teal`, `--tp-card`, …) so it never clashes with the shadcn token set.
- Shared chrome (header, footer, back-to-top) lives in `src/components/site/` and is mounted once in `src/routes/__root.tsx`.
