$('.tools').hide();

$(document).ready(function() {

    $(".bn2en").keyup(function(){
      var input = $(this).val();
    //   alert('style');
      var numbers = { '০': 0, '১': 1, '২': 2, '৩': 3, '৪': 4, '৫': 5, '৬': 6, '৭': 7, '৮': 8, '৯': 9  };
      var output = [];
      for (var i = 0; i < input.length; ++i) {
          //console.log(input.length);
          if (numbers.hasOwnProperty(input[i])) {
            output.push(numbers[input[i]]);
          } else {
            output.push(input[i]);
          }
      }
      $(this).val(output.join(''));
    });


    $('#ldtax-holding-owners-1-mobile-no,#ldtax-holding-owners-1-nid,.numberFormat').keyup(function(e){
        if(/[^0-9০-৯]/g.test(this.value))
        {
            this.value = this.value.replace(/[^0-9০-৯]/g,'');
            $(this).val(value);
        }
    });

    $('#khatian-no,#ldtax-holding-land-schedules-1-dag-no, #ldtax-holdings-holding-no, #holding-no, #ldtax-holding-land-schedules-1-reference-dag-no,#ldtax-holding-land-schedules-1-reference-holding-no').keyup(function(e){
        if(/[^0-9০-৯/]/g.test(this.value))
        {
            this.value = this.value.replace(/[^0-9০-৯/]/g,'');
            $(this).val(value);
        }
    });

    // $('#ldtax-holding-land-schedules-1-dag-no, #ldtax-holdings-holding-no, #holding-no, #ldtax-holding-land-schedules-1-reference-dag-no,#ldtax-holding-land-schedules-1-reference-holding-no').keyup(function(e){
    //     if(/[^0-9০-৯/]/g.test(this.value))
    //     {
    //         this.value = this.value.replace(/[^0-9০-৯/]/g,'');
    //         $(this).val(value);
    //     }
    // });

});



