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


## To edit only the README

Updating an existing package README file (updating version)
The README file will only be updated on the package page when you publish a new version of your package. To update your README file:

- In a text editor, update the contents of the README.md file.
- Save the README.md file.
- On the command line, in the package root directory, run the following commands:
  
  ```
    npm version patch
    npm publish
  ```
