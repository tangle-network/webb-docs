<h1 align="center">
  <a href="https://www.webb.tools/">
    <img alt="Webb Logo" src="./src/images/svgs/webb-icon.svg" width="30%" />
  </a>
</h1>
<h1 align="center"> Webb Docs </h1>

<br/>

<!-- Badges -->

<!-- Description -->

❗ **Note:** This is a fork of [Substrate Developer Hub](https://github.com/substrate-developer-hub/substrate-docs).

This repository serves as the **documentation** for the **[Webb](https://www.webb.tools/)** ecosystem. The docs are written in [MDX](https://mdxjs.com/) format an extension of
[markdown](https://www.markdownguide.org/), processed by [Gatsby](https://www.gatsbyjs.com/), and
published to Webb Docs.

## Contributing

Thank you for your interest in contributing to documentation for the Webb ecosystem. As a member of the community, you are invited and encouraged to contribute by submitting
issues, offering suggestions for improvements to existing content, adding review comments to
existing pull requests, proposing new content, or creating new pull requests to fix issues or
provide new content. Please review our
[contributor guidelines](http://docs.webb.tools/#contributing) prior to
any contribution. If you have any further questions, please do not hesitate to reach out on our
[Webb Discord channel](https://discord.com/invite/cv8EfJu3Tn)! We
would love to get to know you and your work!

### Directory structure

The content of this website is versioned in separate directories, where `v<VERSION>` is the convention
used. The devhub is then hierarchically separated into the three main types of
content: docs, how-to-guides, and tutorials.

Sub folders in these are of the form:

```
- v<VERSION>
  - <content type>
    - <XX-section>
      - <Y-page>
        - `index.mdx`
```

By convention we use `XX` numbering starting at `00` for sections, and `Y` lettering starting at `a`
for pages.

File directory example: `/v1/docs/00-style-and-contributor-guidelines/a-contributor-guidelines/index.mdx`

Each `index.mdx` page has the content to be rendered to this page, and all pages include a header
section with a `slug` item that is used for navigation on the generated site,

URL example: http://docs.webb.tools/v1/contribute/style-guide/

Configuration and styling files for gatsby live primarily in the `src` folder.

### Builder notes

There are some unique requirements to be aware if you are contributing content in this repository to
make your life, and the life of the maintainers much easier! Please review the
[Builder notes](https://docs.substrate.io/v3/contribute/writing#builder-notes) in the contributor
guidelines if making any non-trivial PRs here.

## 🚀 Quick start

1.  **Clone the repo**

    ```bash
    # create a new folder to get going
    git clone https://github.com/webb-tools/webb-docs.git
    ```

2.  **Get setup**

    Navigate into your new site’s directory and install all dependencies.

    **Note:** You may need to run `yarn set version latest`, please do so if you run into a `Error [ERR_STREAM_PREMATURE_CLOSE]: Premature close`.

    ```bash
    cd webb-docs/
    nvm install
    yarn # alias for `yarn install`
    ```

3.  **Configure environment variables**

    Copy `example.env.development` and rename to `.env.development`

    Config URL variables based on your preferable local setup. URL will be used for links generation between documentation and platform stack

    - `GATSBY_DOCS_URL` represents this project serving documentation
    - `GATSBY_IO_URL`: represents platform website

    ```
    GATSBY_IO_URL=http://localhost:8000  // local or hosted URL
    GATSBY_DOCS_URL=http://localhost:8001 // default https://docs.web.tools if not set
    ```

4.  **Fire the engine**

    Navigate into your new site’s directory and use the following command to start the development server locally.

    ```bash
    yarn dev # alias for `yarn start` and `yarn develop`
    ```

**Note:** If you run into `ERROR: digital envelope routines::unssupported` please set the following variable:

```bash
export NODE_OPTIONS=--openssl-legacy-provider
```

5.  **Open the code and start customizing!**

    Your site is now running at [http://localhost:8001/v1/getting-started/overview/](http://localhost:8001/v1/getting-started/overview/)
    and your GraphQL data layer is running at
    [http://localhost:8000\_\_graphql](http://localhost:8000__graphql).

    Edit to see your site update in real-time on save.

6.  **Learn more about GatbsyJS**

    - [Documentation](https://www.gatsbyjs.com/docs/)

    - [Tutorials](https://www.gatsbyjs.com/tutorial/)
    - [Guides](https://www.gatsbyjs.com/tutorial/)

    - [API Reference](https://www.gatsbyjs.com/docs/api-reference/)

    - [Plugin Library](https://www.gatsbyjs.com/plugins)

    - [Cheat Sheet](https://www.gatsbyjs.com/docs/cheat-sheet/)

## Running link-checking locally

There are more than 10,000 links in this doc repo. So we have a link checker to go through most of
them, both internal and external links, to make sure they are valid. We have settings to exclude
some external links by default (more on this later).

We use [`blc`](https://github.com/stevenvachon/broken-link-checker) (broken-link-checker) for links
checking, which is a javascript project. It will be installed when you run `yarn install` in this
package as it is depended on as a development package.

To run link checker, first in one terminal, build the gatsby site with clean cache:

```bash
yarn serve:fresh
```

This command takes a minute or two for the above command to complete, have the site built, and
finally serving it at `https://localhost:9000`.

In another terminal, run:

```bash
yarn checklinks-local
```

<!--TODO: @dutterbutter update to reflect Webb -->

You can further configure it in `package.json` file. Currently it has a list of paths being
excluded. These paths are not regex-supported and just doing a plain string matching. They are
excluded because for:

- `/substrate-io-staging.netlify.app`: internal staging site.

- `/rustdocs`: all paths to `/rustdocs/<splat>` are going to be redirected to
  [https://paritytech.github.io/substrate/<splat>](https://paritytech.github.io/substrate). The
  redirection is handled by netlify redirect feature. Gatsby server will just rendered them as 404
  pages.

- `/www.substrate.io`, `/docs.substrate.io`: these are public substrate.io pages that can be remove
  from the excluded list once [substrate.io](https://www.substrate.io) is launched.

- `/crates.io`, `/fonts.gstatic.com`, `/github.com`, `/wwww.nuget.org`: they either have
  rate-limiting check or doesn't welcome web crawlers to fetch them and just return a 404 page.

## License

TBD

<!-- Webb **documentation** is license under the [Apache 2 license](./LICENSE). -->
