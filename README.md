# Sample Rails 4.2.5 Project for summernote-rails v0.8.1.1
##Reference：https://github.com/summernote/summernote-rails

Enjoy after git cloning.

## Development Environment

* Mac OSX 10.11.3
* Ruby 2.3.0
* Rails 4.2.5

## Installation

Add the following gems to your application's Gemfile:

```ruby

# You'll need to include the following dependencies of Summernote
gem 'bootstrap-sass'
gem "font-awesome-rails"
gem 'summernote-rails'
```

And then execute:

```bash
$ bundle install
```

## Usage

First of all, the summernote editor works on Bootstrap and so it is assumed that you have already set it up.


In app/assets/stylesheets/application.css.scss,

```css
// Bootstrap 3
@import "bootstrap";
@import "font-awesome";
@import "summernote";
@import "posts";
body {padding-top:3em;}
```

In app/assets/javascripts/application.js, you should add the following:

```js
//= require jquery
//= require jquery_ujs
//= require bootstrap
//= require posts
//= require_tree .
//= require turbolinks
```

In app/assets/javascripts/posts.js, you should add the following:

```js
//= require summernote
//= require summernotemt/locales/zh-CN

(function() {
    var ready;
    ready = function() {
        if ($("#topics-form").length > 0) {
            topics.init()
        }
    };

    var topics = {
        init : function (){
          $('.summernote').summernote({
            height:500,
            lang: 'zh-CN'

          });
        }
    };
    $(document).ready(ready);
    $(document).on('page:load', ready);
}).call(this);
```

For example, if you made a `Post` model using `scaffold generator` of Rails, you would see the `post` form view template in app/views/posts/_form.html.erb.

In that template file, you should add `summernote` class to the textarea input as the following:

```html
<%= form_for(@post) do |f| %>
  <%= f.error_notification %>

  <div class="form-group">
    <%= f.text_field :title,  class: 'form-control' %>
  </div>
  <div class="form-group">
      <%= f.text_area :content, class: 'summernote' %>
  </div>

  <div class="form-group">
    <%= f.button :submit, class:'btn btn-default' %>
  </div>
<% end %>
```
