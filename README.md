# FrontLibraries

Directives / components used in most of my projects.

## Generate library

```
ng generate library @dgdc87/libraryName  

tsconfig.lib.json:
"angularCompilerOptions": {
  ....
  "enableIvy": false
}
```

## Build library

```
ng build @dgdc87/libraryName  
```

## Publish library

```
npm init --scope=@dgdc87
cd /dist/dgdc87/libraryname
npm login
npm publish --access public
```
