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

Every other piece of metadata is placed at the beggining of each post, in what Jekyll calls *YAML front-matter*.

```yaml
---
layout: post

title: Title Goes Here
synopsis: A synopsis of this post goes here. Used in archives, newsletter, and social sharing.
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
* `twitter` must NOT include the @ character
* `category` should use title case.

## Previewing posts

To preview posts locally, first install Jekyll with `gem install jekyll`.

Then, build the site with `jekyll build --drafts --future`. This includes drafts, even in the future.

To launch a local server do `jekyll server --watch --drafts --future` and open `http://0.0.0.0:4000`.

## Development

### Setup

1. Install [Node.js](http://nodejs.org/download/).
2. Go to the project root.
3. Install Bower with `npm install -g bower`
4. Install Grunt and its plugins with `npm install`
5. Install Bower components with `bower install`

### Working

1. Point a local webserver to the `_site` folder.
2. Run Grunt with `grunt`. It defaults to watch mode.
3. You may want to install the [LiveReload browser extensions](http://go.livereload.com/extensions).
