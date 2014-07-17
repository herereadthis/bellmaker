Sunflash
========

[![Bower version](https://badge.fury.io/bo/sunflash.svg)](http://badge.fury.io/bo/sunflash)

Sunflash is a CSS library of utilities and helper classes that every website uses

## Build

```
$ git clone https://github.com/herereadthis/sunflash.git
$ cd sunflash/
$ npm install
$ grunt
```

### CSS importing

#### Recommended: Add Sunflashas a Bower dependency

```
$ bower install --save sunflash
```

#### Alternative: Add Sunflash as a submodule

```
$ cd my_repo
$ git submodule add https://github.com/herereadthis/sunflash.git
$ git add sunflash .gitmodules
$ git commit -m "adds Sunflash submodule"
```

#### As LESS: Add to your imports

```CSS
@import "/PATH_TO/../sunflash/src/less/sunflash.less";
```
