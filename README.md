needle
======

Device-agnostic CSS media queries

## Build

```
npm install
grunt
```

### Add the Bellmaker as a submodule

```
$ cd my_repo
$ git submodule add https://github.com/herereadthis/bellmaker.git
$ git add bellmaker .gitmodules
```

### Add the Bellmaker to your LESS imports

```
@import "../../bellmaker/src/less/bellmaker.less";
```

### Add to your watch task in Grunt

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
