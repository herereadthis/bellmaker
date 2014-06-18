Bellmaker
=========

[![Bower version](https://badge.fury.io/bo/bellmaker.svg)](http://badge.fury.io/bo/bellmaker)

The Bellmaker is a library of ***device-agnostic*** *and* ***device-specific*** media queries that will complement your exisiting CSS. 

* It will help you make *responsive websites*, especially if you are using grid layouts.
* It is free to use and modify as you please.
* Both **LESS** (.less) and **SASS** (.scss) versions are available.

## Build

```
$ git clone https://github.com/herereadthis/bellmaker.git
$ cd bellmaker/
$ npm install
$ grunt
```

## View the Demo

```
$ python -m SimpleHTTPServer 8001
```

Site will load at http://localhost:8001/

## Setup

The Bellmaker assumes you have basic terminal skills and knowledge of Git. Additionally, your project is using LESS/SASS and Grunt.

### But what if my project is old school?

Maybe you write your novels on a typewriter. Maybe you develop your Tri-X in Rodinal. In which case, there is supplemental documentation for [***using the Bellmaker as straight CSS***](https://github.com/herereadthis/bellmaker/docs/old_school.md).

### CSS importing

#### Recommended: Add the Bellmaker as a Bower dependency

```
$ bower install --save bellmaker
```

#### Alternative: Add the Bellmaker as a submodule

```
$ cd my_repo
$ git submodule add https://github.com/herereadthis/bellmaker.git
$ git add bellmaker .gitmodules
$ git commit -m "adds Bellmaker submodule"
```

#### As LESS: Add to your imports

```CSS
@import "/PATH_TO/../bellmaker/src/less/bellmaker.less";
```

#### As SASS: Add mixins partial to any file that needs media queries

```CSS
@import "/PATH_TO/../bellmaker/src/less/mixins_variables";
@import "/PATH_TO/../bellmaker/src/less/page_layout";
```

#### Reset page styling to make 10px = 1REM

```CSS
html {
    font-size: 62.5%;
    -webkit-text-size-adjust: 100%;
    -ms-text-size-adjust: 100%;
    /* existing attributes */
}
body {
    font-size: 100%;
    font-size: 1em;
    /* existing attributes */
}
```

(*For more useful global CSS resets and utilities, check out out the companion [**Mossflower**](https://github.com/herereadthis/mossflower) repository on the [herereadthis](https://github.com/herereadthis) Github.*)

### Configuration

#### Add to your watch task in Grunt

##### LESS

```JavaScript
watch: {
    // runs less task when any less files change
    less: {
        files: ["your_other_directories", "./bellmaker/src/less/*"],
        tasks: ["less"]
    }
}
```

##### SASS

```JavaScript
watch: {
    // runs less task when any less files change
    sass: {
        files: ["your_other_directories", "./bellmaker/src/sass/*"],
        tasks: ["sass"]
    }
}
```

#### Add vital stuff to your index.html file

```HTML
<meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1" />
<meta name="apple-mobile-web-app-capable" content="yes" />
<meta name="apple-mobile-web-app-status-bar-style" content="black" />
<meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0" />
```

## Usage

Media queries in Bellmaker bubble up from smallest to largest, in sequence.

### Concepts

#### Liquid Mobile

For resolutions that would mostly likely occur on handheld devices, the Bellmaker will fill the container it is given. The resolutions covered are 320, 360, 480, 568, 640, and 720.

| Breakpoint | Width | iOS Devices | Other Devices |
| ---- | ---- | ---- | ---- |
| *320 - 480* | **100%** | iPhone Portrait | 720 HD:2, 1080 HD:3, WQHD:4 |
| *480 - 640* | **100%** | iPhone Landscape | 768 WXGA:2 |
| *640 - 768* | **100%** | | 720 HD:2 (landscape), 1080 HD:3 (landscape), WQHD:4 (landscape) |

While a breakpoint at 640 pixels does exist, it's okay to skip because it would only become useful if a significant number of people frequently held their HD phones (e.g. Samsung GS5, HTC Hero) in landscape mode, but not many do unless they're gaming.

#### Column Snapping

Media queries in the Bellmaker create a pseudo-liquid snapping layout. That is, as the screen gets larger, the elements on the page go to higher fixed widths. Each of the fixed widths was selected because they are divisible by 2, 3, 4, 6, 12, 16, and 24, which makes grid layouts easier. Resolution ranges were selected because the breakpoints are a best-fit for commonly-occurring screen resolutions.

| Breakpoint | Fixed Width | 3 Cols | 4 Cols | 12 Cols | 16 Cols | 24 Cols |
| ---- | ---- | ---- | ---- | ---- | ---- | ---- |
| *768 - 1024*  | **768px**  | 256px | 192px | 64px  | 48px | 32px |
| *1024 - 1280* | **960px**  | 320px | 240px | 80px  | 60px | 40px |
| *1280 - 1440* | **1152px** | 384px | 288px | 96px  | 72px | 48px |
| *1440 and up* | **1344px** | 448px | 336px | 112px | 84px | 56px |

For example, if your browser window is 1366 pixels wide, then the width of the page content will be 1152 pixels wide, giving you 3 columns of 384 pixels each, or 12 columns of 96 pixels each. The Bellmaker does not do an addtional larger breakpoint because 7 media queries is plenty enough, and designing for screen resolutions for 1600 or 1920 screens runs into usability difficulties with reading long lines of text.

### Device-Agnostic Output

#### As LESS

```
.bellmaker_container {
    @media @da_baseline {
        width: @pw_baseline;
    }
    @media @da_2x_small {
        width: @pw_2x_small;
    }
    @media @da_x_small {
        width: @pw_x_small;
    }
    @media @da_small {
        width: @pw_small;
    }
    @media @da_medium {
        width: @pw_medium;
    }
    @media @da_large {
        width: @pw_large;
    }
    @media @da_x_large {
        width: @pw_x_large;
    }
}
```

#### As SASS

```SASS
.bellmaker_container {
    @media #{$da_baseline} {
        width: $pw_baseline;
    }
    @media #{$da_2x_small} {
        width: $pw_2x_small;
    }
    @media #{$da_x_small} {
        width: $pw_x_small;
    }
    @media #{$da_small} {
        width: $pw_small;
    }
    @media #{$da_medium} {
        width: $pw_medium;
    }
    @media #{$da_large} {
        width: $pw_large;
    }
    @media #{$da_x_large} {
        width: $pw_x_large;
    }
}
```

Note: the abbreviation "da" stands for "device-agnostic," and "pw" stands for "page width."

#### Compiled as CSS

```CSS
@media only screen and (min-width: 320px) {
    .bellmaker_container {
        width: 100%;
    }
}
@media only screen and (min-width: 480px) {
    .bellmaker_container {
        width: 100%;
    }
}
@media only screen and (min-width: 640px) {
    .bellmaker_container {
        width: 100%;
    }
}
@media only screen and (min-width: 768px) {
    .bellmaker_container {
        width: 76.8rem;
    }
}
@media only screen and (min-width: 1024px) {
    .bellmaker_container {
        width: 96rem;
    }
}
@media only screen and (min-width: 1280px) {
    .bellmaker_container {
        width: 115.2rem;
    }
}
@media only screen and (min-width: 1440px) {
    .bellmaker_container {
        width: 134.4rem;
    }
}
```

To speed up development, there is always the option of skipping or omitting breakpoints. In the above code, there is no need to declare breakpoints at 480px or 640px because ```#container_id {}``` would still be 100% width. Also, if you don't feel like (or would rather delay) designing for very large screens, then there is no need to specify ```@media @da_x_large {...}``` As such, **even though the Bellmaker does provide 7 breakpoints,** ***you can use just 4*** **as a bare minimum.**

#### As LESS

```
.bellmaker_container {
    @media @da_baseline {   width: @pw_baseline;}
    @media @da_small {      width: @pw_small;}
    @media @da_medium {     width: @pw_medium;}
    @media @da_large {      width: @pw_large;}
}
```

#### As SASS

```SASS
.bellmaker_container {
    @media #{$da_baseline} {    width: $pw_baseline;}
    @media #{$da_small} {       width: $pw_small;}
    @media #{$da_medium} {      width: $pw_medium;}
    @media #{$da_large} {       width: $pw_large;}
}
```

Notice how the LESS/SASS variable names of the media queries just became very easy to remember?


```CSS
@media only screen and (min-width: 320px) {
    .bellmaker_container {width: 100%;}
}
@media only screen and (min-width: 768px) {
    .bellmaker_container {width: 76.8rem;}
}
@media only screen and (min-width: 1024px) {
    .bellmaker_container {width: 96rem;}
}
@media only screen and (min-width: 1280px) {
    .bellmaker_container {width: 115.2rem;}
}
```

### Device-Specific Output

| Name | Actual Resolution | Pixel Ratio | Display Resolution | Aspect Ratio | Known Devices |
| ---- | ---- | ---- | ---- | ---- | ---- |
| 768 WXGA:2 | 768×1280 | 2| 384×640 | 2:3 | Google Nexus 4 |
| 720 HD:2 | 720×1280 | 2| 360:640 | 9:16 | Blackberry Z30; Motorola Droid Maxx, Razr HD; Samsung GN2; Sony Xperia S |
| 1080 HD:2 | 1080×1920 | 2 | 560×960 | 9:16 | Samsung GN3 |
| 1080 HD:3 | 1080×1920 | 3 | 360×640 | 9:16 | Google Nexus 5; HTC Hero M7+; LG G2; Samsung GS4+; Sony Xperia Z1+ |
| WQHD:4 | 1440×2560 | 4 | 360×640 | 9:16 | LG G3 |
| early iPhone | 320×480 | 1 | 320×480 | 2:3 | iPhone 1-3 |
| iPhone 4(s) | 640×960 | 1 | 320×480 | 2:3 | iPhone 4(s) |
| late iPhone | 640×1136 | 1 | 320×568 | 9:16 | iPhone 5(s)(c) |
| early iPad | 768×1024 | 1 | 768×1024 | 3:4 | iPad 1-2; iPad Mini 1 |
| retina iPad | 1536×2056 | 2 | 768×1024 | 3:4 | iPad 3+; iPad Air; iPad Mini 2 |

Notice how at first glance, there seems to be too many different screen resolutions of which to keep track, most acuually share the same 360×640 resolution? They are all using a 9:16 aspect ratio. Use the ```ds_common_9_16``` variable. ("ds" stands for device-specific)

#### Target all 9:16 phones (LESS)

```LESS
@media @ds_common_9_16 {
    #container_id   {width: 100%;}
}
```

#### Target all 9:16 phones (SASS)

```SASS
@media #{ds_common_9_16} {
    #container_id   {width: 100%;}
}
```

#### Compiled as CSS

```CSS
@media only screen and (min-device-width : 360px) and (max-device-width : 640px) {
    #container_id   {width: 100%;}
}
```

### Orientation

There are two ways to target orientation, depending on your personal preference. Declare the orientation as a variable (```orientation_landscape``` vs. ```orientation_portrait```) or use the pre-assigned variable (```_landscape``` vs. ```_portrait```).

#### LESS

```
@media @ds_common_9_16 @orientation_landscape {}
@media @ds_common_9_16_landscape {}

@media @ds_common_9_16 @orientation_portrait {}
@media @ds_common_9_16_landscape {}
```

#### SASS

```
@media #{ds_common_9_16} #{orientation_landscape} {}
@media #{ds_common_9_16_landscape} {}

@media #{ds_common_9_16} #{orientation_portrait} {}
@media #{ds_common_9_16_landscape} {}
```

#### Compiled as CSS

```CSS
@media only screen and (min-device-width : 360px) and (max-device-width : 640px) and (orientation : landscape) {
}
@media only screen and (min-device-width : 360px) and (max-device-width : 640px) and (orientation : portrait) {
}
```





