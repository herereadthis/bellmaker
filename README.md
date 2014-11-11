Bellmaker
=========

[![Bower version](https://badge.fury.io/bo/bellmaker.svg)](http://badge.fury.io/bo/bellmaker)
[![Build Status](https://secure.travis-ci.org/herereadthis/bellmaker.svg?branch=master)](http://travis-ci.org/herereadthis/bellmaker)
[![devDependency Status](https://david-dm.org/herereadthis/bellmaker/dev-status.svg)](https://david-dm.org/herereadthis/bellmaker#info=devDependencies)
[![Code Climate](https://codeclimate.com/github/herereadthis/bellmaker/badges/gpa.svg)](https://codeclimate.com/github/herereadthis/bellmaker)

* Project page at ***[herereadthis.com/code/bellmaker/](http://herereadthis.com/code/bellmaker/)***
* Demo page at ***[bellmaker.herereadthis.com](http://bellmaker.herereadthis.com)***

The Bellmaker is a library of ***device-agnostic*** *and* ***device-specific*** media queries that will complement your exisiting CSS. 

* It will help you make *responsive websites*, especially if you are using grid layouts.
* It is free to use and modify as you please.
* Both **LESS** (.less) and **SASS** (.scss) versions are available.
* Can currently complement Bootstrap 3.2.x

## Build and view the Demo

```bash
# install SASS in order to run its compiler
$ gem install sass
# get the repo
$ git clone https://github.com/herereadthis/bellmaker.git
$ cd bellmaker/
$ npm install
$ npm run bower
$ npm run grunt
$ npm run server
```

Site will load at http://localhost:9000/

## Setup

The Bellmaker assumes you have basic terminal skills and knowledge of Git. Additionally, your project is using LESS/SASS and Grunt.

### But what if my project is old school?

Maybe you write your novels on a typewriter. Maybe you develop your Tri-X in Rodinal. In which case, there is supplemental documentation for [***using the Bellmaker as straight CSS***](https://github.com/herereadthis/bellmaker/docs/old_school.md).

### CSS importing

#### Recommended: Add the Bellmaker as a Bower dependency

```bash
$ bower install --save bellmaker
```

#### Alternative: Add the Bellmaker as a submodule

```bash
$ cd my_repo
$ git submodule add https://github.com/herereadthis/bellmaker.git
$ git add bellmaker .gitmodules
$ git commit -m "adds Bellmaker submodule"
```

#### Importing

```CSS
/* Import LESS file */
@import "/PATH_TO_BOWER/bellmaker/src/less/bellmaker.less";
/* Import SASS file */
@import "/PATH_TO_BOWER/bellmaker/src/sass/bellmaker.scss";
```

### Configuration

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

```
$ bower install --save mossflower
```

#### Add vital stuff to your index.html file

```HTML
<meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1" />
<meta name="apple-mobile-web-app-capable" content="yes" />
<meta name="apple-mobile-web-app-status-bar-style" content="black" />
<meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0" />
```

----------------------------


## Concepts

Media queries in Bellmaker bubble up from smallest to largest, in sequence. For resolutions that would mostly likely occur on handheld devices, the Bellmaker will fill the container it is given. The resolutions covered are 320, 360, 480, 568, 640, and 720.

Media queries in the Bellmaker create a pseudo-liquid snapping layout. That is, as the screen gets larger, the elements on the page go to higher fixed widths. Each of the fixed widths was selected because they are divisible by 2, 3, 4, 6, 12, 16, and 24, which makes grid layouts easier. Resolution ranges were selected because the breakpoints are a best-fit for commonly-occurring screen resolutions.

| Breakpoint | Fixed Width | 3 Cols | 4 Cols | 12 Cols | 16 Cols | 24 Cols |
| ---- | ---- | ---- | ---- | ---- | ---- | ---- |
| *768 - 1024*  | **768px**  | 256px | 192px | 64px  | 48px | 32px |
| *1024 - 1280* | **960px**  | 320px | 240px | 80px  | 60px | 40px |
| *1280 - 1440* | **1152px** | 384px | 288px | 96px  | 72px | 48px |
| *1440 and up* | **1344px** | 448px | 336px | 112px | 84px | 56px |

----------------

### Usage

#### Device-agnostic output as LESS

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

#### Device-agnostic output as SASS

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
| 720 HD:2 | 720×1280 | 2| 360:640 | 9:16 | Blackberry Z30; Motorola Droid Maxx, Moto G, Moto X(1), Razr HD; Samsung GN2; Sony Xperia S |
| 768 WXGA:2 | 768×1280 | 2| 384×640 | 3:5 | Google Nexus 4 |
| 768 WXGA:2.4 | 768×1280 | 2.4 | 320×533 | 3:5 | Nokia Lumia 920, 925, 928 |
| 800 WXGA:2 | 800×1280 | 2 | 400×640 | 5:8 | Samsung GN1 |
| 1080 HD:3 | 1080×1920 | 3 | 360×640 | 9:16 | Google Nexus 5; HTC Hero M7+; Motorola Moto X(2); LG G2; Nokia Lumia Icon; Samsung GS4, GS5, GN3; Sony Xperia Z(1-3) |
| WQHD:4 | 1440×2560 | 4 | 360×640 | 9:16 | LG G3, Samsung GN4 |
| early iPhone | 320×480 | 1 | 320×480 | 2:3 | iPhone 1-3 |
| iPhone 4 | 640×960 | 2 | 320×480 | 2:3 | iPhone 4(s) |
| iPhone 5 | 640×1136 | 2 | 320×568 | 40:71 | iPhone 5(s)(c) |
| iPhone 6 | 750×1334 | 2 | 375×667 | 375:667 | iPhone 6 |
| iPhone 6 Plus | 1242×2208 | 3 | 414×736 | 9:16 | iPhone 6 Plus |
| early iPad | 768×1024 | 1 | 768×1024 | 3:4 | iPad 1-2; iPad Mini 1 |
| retina iPad | 1536×2056 | 2 | 768×1024 | 3:4 | iPad 3, 4; iPad Air 1-2; iPad Mini 2-3 |

Notice how at first glance, there seems to be too many different screen resolutions of which to keep track, most actually share the same 360×640 resolution? They are all using a 9:16 aspect ratio. Use the ```ds_ratio_9_16``` variable. ("ds" stands for device-specific)

#### Target all 9:16 phones (LESS)

```LESS
@media @ds_ratio_9_16 {
    #container_id   {width: 100%;}
}
```

#### Target all 9:16 phones (SASS)

```SASS
@media #{ds_ratio_9_16} {
    #container_id   {width: 100%;}
}
```

#### Compiled as CSS

```CSS
@media only screen and (device-aspect-ratio: 9/16) {
    #container_id   {width: 100%;}
}
```

Here is the complete listing of how to target phones by aspect ratio:

| Aspect Ratio | Brand | Models |
| ---- | ---- | ----|
| 9:16 | Blackberry | Z30 |
| 9:16 | Google | Nexus 5 |
| 9:16 | HTC | Hero M7/M8 |
| 9:16 | LG | G2/G3 |
| 9:16 | Motorola | Droid Maxx, Moto G, Moto X(1)/X(2), Razr HD |
| 9:16 | Nokia | Lumia Icon |
| 9:16 | Samsung | GN2/GN3/GN4, GS4/GS5 |
| 9:16 | Sony | Xperia S/Z1/Z2/Z3 |
| 3:5 | Nokia | Lumia 920/925/928 |
| 5:8 | Samsung | GN1 |
| 2:3 | Apple | iPhone 1/2/3/4 |
| 3:4 | Apple | iPad 1/2/3/4, Air 1-2, Mini 1-3 |

### Orientation

There are two ways to target orientation, depending on your personal preference. Declare the orientation as a variable (```orientation_landscape``` vs. ```orientation_portrait```) or use the pre-assigned variable (```_landscape``` vs. ```_portrait```).

#### LESS

```
@media @ds_ratio_9_16 @orientation_landscape {}
@media @ds_ratio_9_16_landscape {}

@media @ds_ratio_9_16 @orientation_portrait {}
@media @ds_ratio_9_16_landscape {}
```

#### SASS

```
@media #{ds_ratio_9_16} #{orientation_landscape} {}
@media #{ds_ratio_9_16_landscape} {}

@media #{ds_ratio_9_16} #{orientation_portrait} {}
@media #{ds_ratio_9_16_landscape} {}
```

#### Compiled as CSS

```CSS
@media only screen and (device-aspect-ratio: 9/16) and (orientation : landscape) {
}
@media only screen and (device-aspect-ratio: 9/16) and (orientation : portrait) {
}
```

------------------------

## Math Operators

Box-model dimensions and offsets can use mixins, which will range from breakpoints ```da_small``` to ```da_x_large```. Breakpoints ```da_baseline```, ```da_2x_small```, and ```da_x_small``` are not part of the math operators because sizing for them is done as percentages. 

Use these mixins especially for moving columns around. Remember that offsets and factors will be calculated as REM units.


```LESS
// LESS: Offset mixin:
.bellmaker_offset(@attribute,@offset) {};
// LESS Factor mixin:
.bellmaker_factor(@attribute,@factor) {};
```

```SCSS
// SASS: Offset mixin:
@include bellmaker_offset($attribute,$offset) {};
// SASS Factor mixin:
@include bellmaker_factor($attribute,$factor) {};
```

#### Example: offset left padding

```LESS
// As LESS: section will now always be 30rem width less than parent
// container, so that a 30rem sidebar can floated right
section {
    float: left;
    .bellmaker_offset(width, -30);
}
aside {
    float: right;
    width: 30rem;
}
```

```SCSS
// As SASS
section {
    float: left;
    @include bellmaker_offset(width, -30);
}
aside {
    float: right;
    width: 30rem;
}
```




```CSS
/* output */
section {
    float: left;
}
@media only screen and (min-width: 768px) {
    section {width: 448px;}
}
@media only screen and (min-width: 1024px) {
    section {width: 660px;}
}
@media only screen and (min-width: 1280px) {
    section {width: 852px;}
}
@media only screen and (min-width: 1440px) {
    section {width: 1044px;}
}
aside {
    float: right;
    width: 30rem;
}
```

Available attributes are ```width```, ```height```, ```padding-top```, ```padding-right```, ```padding-bottom```, ```padding-left```, ```padding-top```, ```padding-right```, ```padding-bottom```, ```padding-left```, ```margin-top```, ```margin-right```, ```margin-bottom```, and ```margin-left```.


------------------------

## Integrate the Bellmaker to your existing frameworks




#### LESS integration with Twitter Bootstrap (add bootstrap_integration.less)

```CSS
@import "/PATH_TO/../bootstrap/less/bootstrap.less";
@import "/PATH_TO/../bellmaker/src/less/bellmaker.less";
@import "/PATH_TO/../bellmaker/src/less/bootstrap_integration.less";
```

Now you will have 7 breakpoints in Bootstrap

```CSS
.col-bl-##
.col-ss-##
.col-xs-##
.col-sm-##
.col-md-##
.col-lg-##
.col-bl-##
```





