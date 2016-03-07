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
