# Bible reader tracker

PWA to track progress reading through chapters of the bible.

## Publish

```
npm run build
```

This will deploy the application to the `docs` folder. Push to GitHub. Turn GitHub Pages on for the
repository and select the `master branch /docs folder` option.

## Bug/issue tracker

[git-bug](https://github.com/MichaelMure/git-bug)

```
git bug ls
```
or

```
git bug termui
```

## References

Image from [Pixabay](https://pixabay.com/) PWA assets generated from Web App Manifest
Generator](https://app-manifest.firebaseapp.com/) and [Favicon Generator](https://realfavicongenerator.net/)

Service worker generated with [Workbox
CLI](https://developers.google.com/web/tools/workbox/modules/workbox-cli).

```
npm install -g workbox-cli -g
workbox wizard
```

Select the default options but select `docs/sw.js` as the output location.

`Package.json` contains basic npm scripts to generate the assets and place them in the `docs` folder
so that they can be served by GitHub pages.
