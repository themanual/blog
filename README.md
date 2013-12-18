# The Manual Blog

Temporary blog for The Manual, running on Jekyll.

## Writing posts

Posts are written in Markdown, and have some special rules in regards to metadata. Final posts should be placed on `_posts`, and drafts may be kept in `_drafts` to preview them locally. Posts in `_drafts`, even if commited and pushed, won't be published live, so don't forget to move them to `_posts` to publish them.

### Date and Permalink

Posts are files named `yyyy-mm-dd-permalink.md` on `_posts`, where:
  
* `yyyy-mm-dd` is the final publication date of the post
* `permalink` is the post’s permalink

With the current configuration, the resulting path will be `/yyyy/mm/dd/permalink/`.

### Topic, Title, Synopsis, Byline

Every other piece of metadata is placed in what Jekyll calls *YAML front-matter*. The base structure is:

```yaml
---
layout: post

title: Title Goes Here
synopsis: A synopsis of this post goes here, for archives, email newsletter, and social sharing.
author:
  name: Author Name
  twitter: authorusername
category: Category Name
---
```

**Notes:**

* All fields are mandatory.
* `title` should use title case.
* `synopsis` should use sentence case.
* `author` must stay blank.
* `name` and `twitter` must be indented with two spaces. Never tabs.
* `category` should use title case.

## Previewing posts

To preview posts locally, first install Jekyll with `gem install jekyll`.

Then, build the site with `jekyll build --drafts --future`. This includes drafts, even in the future.

To launch a local server that auto-builds whenever a post changes, do `jekyll server --watch --drafts --future`.

## Developing the site

You'll need:

* Node.js and NPM
* Bower: `npm install -g bower`
* Sass: `gem install sass`

## Instructions

First, install all the NPM modules required in `package.json`:

`npm install`

Then, install all the Bower components required in `bower.json`:

`bower install`

Then build and watch the site with Grunt:

`grunt`