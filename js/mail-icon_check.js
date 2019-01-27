$(document).ready(function() {
  $("#prov").on('click', function() {
    var $email = $("#inputSmall").prop("value");
    if (isEmail($email)) alert("Welcome to Innovator! Check  your email :)");
    else alert("Email is not valid! :(");
  });

  function isEmail($email) {
    var regex = /^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/;
    return regex.test($email);
  }

  $("#contMess").on('click', function() {
    var $name = $("#name").prop("value");
    var $email = $("#email").prop("value");
    var $mess = $("#message").prop("value");
    if ($name == "" && $email == "" && $mess == "") alert("Please fill in all fields!");
    else alert("We have received your message!");

  });

  $("#fb-green").on({
    "mouseover": function() {
      this.src = 'pic/social/fb-icon-hov.png';
    },
    "mouseout": function() {
      this.src = 'pic/social/fb-icon.png';
    }
  });
  $("#insta-green").on({
    "mouseover": function() {
      this.src = 'pic/social/insta-icon-hov.png';
    },
    "mouseout": function() {
      this.src = 'pic/social/insta-icon.png';
    }
  });
  $("#link-green").on({
    "mouseover": function() {
      this.src = 'pic/social/link-icon-hov.png';
    },
    "mouseout": function() {
      this.src = 'pic/social/link-icon.png';
    }
  });


  /* galerry*/
  loadGallery(true, 'a.thumbnail');

    //This function disables buttons when needed
    function disableButtons(counter_max, counter_current){
        $('#show-previous-image, #show-next-image').show();
        if(counter_max == counter_current){
            $('#show-next-image').hide();
        } else if (counter_current == 1){
            $('#show-previous-image').hide();
        }
    }

    function loadGallery(setIDs, setClickAttr){
        var current_image,
            selector,
            counter = 0;

        $('#show-next-image, #show-previous-image').click(function(){
            if($(this).attr('id') == 'show-previous-image'){
                current_image--;
            } else {
                current_image++;
            }

            selector = $('[data-image-id="' + current_image + '"]');
            updateGallery(selector);
        });

        function updateGallery(selector) {
            var $sel = selector;
            current_image = $sel.data('image-id');
            $('#image-gallery-caption').text($sel.data('caption'));
            $('#image-gallery-title').text($sel.data('title'));
            $('#image-gallery-image').attr('src', $sel.data('image'));
            disableButtons(counter, $sel.data('image-id'));
        }

        if(setIDs == true){
            $('[data-image-id]').each(function(){
                counter++;
                $(this).attr('data-image-id',counter);
            });
        }
        $(setClickAttr).on('click',function(){
            updateGallery($(this));
        });
    }

});
