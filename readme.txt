=== Same Height ===
Contributors: damiarita
Tags: css, javascript, jQuery, shortcode, sameheight, style, bootstrap, responsive
Stable tag: trunk
Requires at least: 1.3.0
Tested up to: 4.7
License: GPLv2 or later
License URI: http://www.gnu.org/licenses/gpl-2.0.html

Force different parts of your content to the same height. Very useful if you want to present to boxes side by side. Responsive and bootstrap-friendly.

== Description ==

Sometimes we want to display to boxes side by side and they have to look the same. CSS doesn't always help.

This plugin will use jQuery to detect the boxes you want and force them all to have the same size. The size is uses is the size of the tallest box.

If you have a some parts of your content that need to have the same height, simply wrap them with the `[sameheight/]` shortcode like this:
`[sameheight]
  This is a short text
[/sameheight]
[sameheight]
  This is a very, very, very, very, very, very, very, very, very, very, very, very, very, very, very, very, very, very, very, very, very, very, very, very, very, very, very, very, very, very, very, very, very, very, very, very, very, very, very long text
[/sameheight]`

When the html renders on your screen, both parts content parts will look equally height. This is very useful if they are floating next to each other and they have a background.

= What if I have different sizes in the same page? =
You can group shortcodes like this:
`[sameheight group="1"]
  This is a very, very, very, very, very, very, very, very, very, very, very, very, very, very, very, very, very, very, very, very, very, very, very, very, very, very, very, very, very, very, very, very, very, very, very, very, very, very, very long text
[/sameheight]
[sameheight group="1"]
  This is a short text
[/sameheight]
[sameheight group="2"]
  This is another short text
[/sameheight]
[sameheight group="2"]
  This text is long, but not quite as long as the previous one. So, I don't want these to parts to look as long. But they should still look the same.
[/sameheight]`

= What if I have a responsive site and I only want the same height to apply in wide-screen, side-by-side configurations? =
You can add a breakpoint like this.
`[sameheight breakpoint="xs" ] (You could even use no breakpoint at all)
  This is a very, very, very, very, very, very, very, very, very, very, very, very, very, very, very, very, very, very, very, very, very, very, very, very, very, very, very, very, very, very, very, very, very, very, very, very, very, very, very long text
[/sameheight]
[sameheight breakpoint="xs" ] (You could even use no breakpoint at all)
  This text always has to use the same height than the previous one.
[/sameheight]
[sameheight breakpoint="md"]
    This is a very, very, very, very, very, very, very, very, very, very, very, very, very, very, very, very, very, very, very, very, very, very, very, very, very, very, very, very, very, very, very, very, very, very, very, very, very, very, very long text
[/sameheight]
[sameheight breakpoint="md"]
  This text only has to use the same height when it is next to the previous, but not when it is underneath on smarphones.
[/sameheight]`

You have these breakpoints (those familiar with bootstrap know them):

* "xs" forces same height for all window widths (extra small window - smartphone). Alternatively, you can use no breakpoint
* "sm" forces same height for window widths > 768px (small window - small tablet)
* "md" forces same height for window widths > 992px (medium window - table or small desktop)
* "lg" forces same height for window widths > 1200px (large window - desktop)

Names and widths are based on bootstrap.

Please, note that shortcodes with different "breakpoint" will be in different groups regardless of the "group" setting. You can still use "group" to separate to groups with the same "breakpoint".

= I have some styles in CSS for my classes. How can I apply classes to the content? =
Easy:
`[sameheight additional_classes="my-class1 my-classA"]
  This is a short text
[/sameheight additional_classes="my-class2 my-classB"]
[sameheight]
  This is a very, very, very, very, very, very long text
[/sameheight]`

= Can I use all the possibilities together? =
Sure:
`[sameheight group="1" breakpoint="md" additional_classes="my-class1 my-classA" /]` will work.

= Do I need to use the shortcode? =
No! If you are editing your html, you can put the right properties in it. That's all tha shortcode does. Make sure you add the class 'same-height'. If you use a break point, add it with a hyphen (-) like this: 'same-height-xs', 'same-height-sm', 'same-height-md', or 'same-height-lg'. The Javascript is looking for those classes to identify the html elements it has to work on.
If you are grouping boxes, use the 'same-height-group' property. Like `<div class="same-height" same-height-group="1" >`

== Installation ==

1. On the left side menu select Plugins > Add New
2. In "Search Plugins" field enter "same height" and search
3. Press "Install Now" button of the "same height"

== Frequently Asked Questions ==

= What if I have different sizes in the same page? =
You can group shortcodes like this:
`[sameheight group="1"]
  This is a very, very, very, very, very, very, very, very, very, very, very, very, very, very, very, very, very, very, very, very, very, very, very, very, very, very, very, very, very, very, very, very, very, very, very, very, very, very, very long text
[/sameheight]
[sameheight group="1"]
  This is a short text
[/sameheight]
[sameheight group="2"]
  This is another short text
[/sameheight]
[sameheight group="2"]
  This text is long, but not quite as long as the previous one. So, I don't want these to parts to look as long. But they should still look the same.
[/sameheight]`

= What if I have a responsive site and I only want the same height to apply in wide-screen, side-by-side configurations? =
You can add a breakpoint like this.
`[sameheight breakpoint="xs" ] (You could even use no breakpoint at all)
  This is a very, very, very, very, very, very, very, very, very, very, very, very, very, very, very, very, very, very, very, very, very, very, very, very, very, very, very, very, very, very, very, very, very, very, very, very, very, very, very long text
[/sameheight]
[sameheight breakpoint="xs" ] (You could even use no breakpoint at all)
  This text always has to use the same height than the previous one.
[/sameheight]
[sameheight breakpoint="md"]
    This is a very, very, very, very, very, very, very, very, very, very, very, very, very, very, very, very, very, very, very, very, very, very, very, very, very, very, very, very, very, very, very, very, very, very, very, very, very, very, very long text
[/sameheight]
[sameheight breakpoint="md"]
  This text only has to use the same height when it is next to the previous, but not when it is underneath on smarphones.
[/sameheight]`

You have these breakpoints (those familiar with bootstrap know them):

* "xs" forces same height for all window widths (extra small window - smartphone). Alternatively, you can use no breakpoint
* "sm" forces same height for window widths > 768px (small window - small tablet)
* "md" forces same height for window widths > 992px (medium window - table or small desktop)
* "lg" forces same height for window widths > 1200px (large window - desktop)

Names and widths are based on bootstrap.

Please, note that shortcodes with different "breakpoint" will be in different groups regardless of the "group" setting. You can still use "group" to separate to groups with the same "breakpoint".

= I have some styles in CSS for my classes. How can I apply classes to the content? =
Easy:
`[sameheight additional_classes="my-class1 my-classA"]
  This is a short text
[/sameheight]
[sameheight additional_classes="my-class2 my-classB"]
  This is a very, very, very, very, very, very long text
[/sameheight]`

= Can I use all the possibilities together? =
Sure:
`[sameheight group="1" breakpoint="md" additional_classes="my-class1 my-classA" /]` will work.

= Do I need to use the shortcode? =
No! If you are editing your html, you can put the right properties in it. That's all tha shortcode does. Make sure you add the class 'same-height'. If you use a break point, add it with a hyphen (-) like this: 'same-height-xs', 'same-height-sm', 'same-height-md', or 'same-height-lg'. The Javascript is looking for those classes to identify the html elements it has to work on.
If you are grouping boxes, use the 'same-height-group' property. Like `<div class="same-height" same-height-group="1" >`


== Screenshots ==


1. To boxes side to side with the same height


== Changelog ==

= 1.3.0 =
*We load the minified JS by default. If SCRIPT_DEBUG is set to true, the non minified is used
*We remove deprecated jQuery functions


= 1.2.0 =
* When blocks are marked to have the same height with a breakpoint, the window widths measurement is improved to have consistency with bootstrap: In stead of usind window.widht, we now use window.matchMedia. For older browser without support to .matchMedia, .width is used.

= 1.1.0 =
* When blocks marked to have the same height contained images, the previous version could do the calculations without taking it into account. Now, all images will be taken into account after they load.

= 1.0.0 =
* First release

== Upgrade Notice ==

= 1.2 =
* Improved consistency with bootstrap. Better performance on iPad.

= 1.1.1 =
* I moved the JS to the footer

= 1.1.0 =
* I improved the JS to better comply with standards and element sizes are recalculated when images load