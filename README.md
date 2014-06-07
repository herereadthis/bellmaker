needle
======

Device-agnostic CSS media queries

## Build

```
npm install
grunt
```

### Setup

#### Add the Bellmaker as a submodule

```
$ cd my_repo
$ git submodule add https://github.com/herereadthis/bellmaker.git
$ git add bellmaker .gitmodules
```

#### Add the Bellmaker to your LESS imports

```
@import "../../bellmaker/src/less/bellmaker.less";
```

#### Add to your watch task in Grunt

```
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

```
<meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1" />
<meta name="apple-mobile-web-app-capable" content="yes" />
<meta name="apple-mobile-web-app-status-bar-style" content="black" />
<meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0" />
<link rel="stylesheet" type="text/css" href="/src/main.css" />
```
