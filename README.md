needle
======

Device-agnostic CSS media queries

## Build

```
npm install
grunt
```

## Setup

### CSS importing

#### Add the Bellmaker as a submodule

```
$ cd my_repo
$ git submodule add https://github.com/herereadthis/bellmaker.git
$ git add bellmaker .gitmodules
```

#### Add the Bellmaker to your LESS imports

```CSS
@import "../../bellmaker/src/less/bellmaker.less";
```

### Configuration

#### Add to your watch task in Grunt

```JavaScript
watch: {
    // runs less task when any less files change
    less: {
        files: ["your_other_directories", "./bellmaker/src/less/*"],
        tasks: ["less"]
    },
    ...: {
        files: "..."
    }
}
```

#### Add vital stuff to your index.html file

```HTML
<meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1" />
<meta name="apple-mobile-web-app-capable" content="yes" />
<meta name="apple-mobile-web-app-status-bar-style" content="black" />
<meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0" />
<link rel="stylesheet" type="text/css" href="/src/main.css" />
```

## Usage

Media queries in Bellmaker bubble up from smallest to largest, in sequence.

### Concepts

#### Column Snapping

Media queries in the Bellmaker create a pseudo-liquid snapping layout. That is, as the screen gets larger, the elements on the page go to higher fixed widths. Each of the fixed widths is selected because they are divisible by 2, 3, 4, 6, 12, 16, and 24, which makes grid layouts easier.

* 768-1024: 768 pixels = 12 X 64px columns
* 1024-1280: 960 pixels = 12 X 80px columns
* 1280-1440: 1152 pixels = 12 X 96px columns
* 1440 and up: 1344 pixels = 12 X 108px columns

### In practice

As LESS

```LESS
@media @mq_2x_small {
}
@media @mq_x_small {
}
@media @mq_small {
}
@media @mq_medium {
}
@media @mq_large {
}
@media @mq_x_large {
}
```

Compiled as CSS

```CSS
@media only screen and (min-width: 320px) {
}
@media only screen and (min-width: 568px) {
}
@media only screen and (min-width: 768px) {
}
@media only screen and (min-width: 1024px) {
}
@media only screen and (min-width: 1280px) {
}
@media only screen and (min-width: 1440px) {
}
```



