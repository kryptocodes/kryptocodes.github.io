---
date: "2021-08-01"
title: "WTH is package-lock.json"
slug: "WTH is Package.lock json"
---

package and package-lock are two files that are used to manage your packages in npm

and those files confuse a lot like both contain package right ? welp

```jsx
package-lock.json is automatically generated for any operations where npm modifies either the node_modules tree, or package.json. It describes the exact tree that was generated, such that subsequent installs are able to generate identical trees, regardless of intermediate dependency updates.
This file is intended to be committed into source repositories, and serves various purposes:

Describe a single representation of a dependency tree such that teammates, deployments, and continuous integration are guaranteed to install exactly the same dependencies.
Provide a facility for users to "time-travel" to previous states of node_modules without having to commit the directory itself.

To facilitate greater visibility of tree changes through readable source control diffs.
And optimize the installation process by allowing npm to skip repeated metadata resolutions for previously-installed packages."
```
 
the purpose of the package-lock.json file — it saves all dependencies and subdependencies in a single file, so that they won't ever change unless you run `npm update` or something similar.

## Why is this important ?

So if you've got Karma in your lockfile, it'll also specify a specific version of colors as well, and if you last installed/updated Karma before this incident, then it'll be the correct version, and you will remain unaffected.

This solves a very specific problem that `package.json` left unsolved. In package.json you can set which versions you want to upgrade to (patch or minor), using the **semver** notation, for example:

- if you write `~0.13.0`, you want to only update patch releases: `0.13.1` is ok, but `0.14.0` is not.
- if you write `^0.13.0`, you want to get updates that do not change the leftmost non-zero number: `0.13.1`, `0.13.2` and so on. If you write `^1.13.0`, you will get patch and minor releases: `1.13.1`, `1.14.0` and so on up to `2.0.0` but not `2.0.0`.
- if you write `0.13.0`, that is the exact version that will be used, always

## Example

```jsx
  "node_modules/@adobe/css-tools": {
      "version": "4.0.1",
      "resolved": "https://registry.npmjs.org/@adobe/css-tools/-/css-tools-4.0.1.tgz",
      "integrity": "sha512-+u76oB43nOHrF4DDWRLWDCtci7f3QJoEBigemIdIeTi1ODqjx6Tad9NCVnPRwewWlKkVab5PlK8DCtPTyX7S8g=="
    },
    "node_modules/@ampproject/remapping": {
      "version": "2.2.0",
      "resolved": "https://registry.npmjs.org/@ampproject/remapping/-/remapping-2.2.0.tgz",
      "integrity": "sha512-qRmjj8nj9qmLTQXXmaR1cck3UXSRMPrbsLJAasZpF+t3riI71BXed5ebIOYwQntykeZuhjsdweEc9BxH5Jc26w==",
      "dependencies": {
        "@jridgewell/gen-mapping": "^0.1.0",
        "@jridgewell/trace-mapping": "^0.3.9"
      },
      "engines": {
        "node": ">=6.0.0"
      }
    },
    "node_modules/@babel/code-frame": {
      "version": "7.18.6",
      "resolved": "https://registry.npmjs.org/@babel/code-frame/-/code-frame-7.18.6.tgz",
      "integrity": "sha512-TDCmlK5eOvH+eH7cdAFlNXeVJqWIQ7gW9tY1GJIpUtFb6CmjVyq2VM3u71bOyR8CRihcCgMUYoDNyLXao3+70Q==",
      "dependencies": {
        "@babel/highlight": "^7.18.6"
      },
      "engines": {
        "node": ">=6.9.0"
      }
    },
    "node_modules/@babel/compat-data": {
      "version": "7.18.13",
      "resolved": "https://registry.npmjs.org/@babel/compat-data/-/compat-data-7.18.13.tgz",
      "integrity": "sha512-5yUzC5LqyTFp2HLmDoxGQelcdYgSpP9xsnMWBphAscOdFrHSAVbLNzWiy32sVNDqJRDiJK6klfDnAgu6PAGSHw==",
      "engines": {
        "node": ">=6.9.0"
      }
    },
    "node_modules/@babel/core": {
      "version": "7.18.13",
      "resolved": "https://registry.npmjs.org/@babel/core/-/core-7.18.13.tgz",
      "integrity": "sha512-ZisbOvRRusFktksHSG6pjj1CSvkPkcZq/KHD45LAkVP/oiHJkNBZWfpvlLmX8OtHDG8IuzsFlVRWo08w7Qxn0A==",
      "dependencies": {
        "@ampproject/remapping": "^2.1.0",
        "@babel/code-frame": "^7.18.6",
        "@babel/generator": "^7.18.13",
        "@babel/helper-compilation-targets": "^7.18.9",
        "@babel/helper-module-transforms": "^7.18.9",
        "@babel/helpers": "^7.18.9",
        "@babel/parser": "^7.18.13",
        "@babel/template": "^7.18.10",
        "@babel/traverse": "^7.18.13",
        "@babel/types": "^7.18.13",
        "convert-source-map": "^1.7.0",
        "debug": "^4.1.0",
        "gensync": "^1.0.0-beta.2",
        "json5": "^2.2.1",
        "semver": "^6.3.0"
      },
      "engines": {
        "node": ">=6.9.0"
      },
      "funding": {
        "type": "opencollective",
        "url": "https://opencollective.com/babel"
      }
    },
```


