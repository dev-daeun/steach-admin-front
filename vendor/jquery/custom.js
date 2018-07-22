(function($){
    $.fn.openTextBox = function(textbox, label){
        let value = this.find(":selected").prevObject[0].value;
        if(value=="기타") {
            textbox.css('visibility', 'visible');
            label.css('visibility', 'visible');
            value="기타";
        }
        else {
            textbox.css('visibility', 'hidden');
            label.css('visibility', 'hidden');
        }
        return value;
    };

    $.fn.setOriginWithBox = function(array, textbox, label){
        if(!array.includes(this.parent().attr("value"))){
            textbox.val(this.parent().attr("value"));
            textbox.css('visibility', 'visible');
            label.css('visibility', 'visible');
            this.val("기타");
        } 
        else{
            for(let i in array){
                if(array[i]==this.parent().attr("value")){
                     this.val(this.parent().attr("value"));
                    label.css('visibility', 'hidden');
                }
            }
        }
    };

    $.fn.setOriginWithKey = function(enums){
        for(let i of enums){
            if(i==this.parent().attr("value"))
                return this.val(this.parent().attr("value"));
        }
    };

    $.fn.setRadioOrigin = function(id){
        if(this.first().val()==this.parents('#'+id).attr("value"))  return this.first().prop('checked', true);
        else return this.last().prop('checked', true);   
        
    };

    $.fn.convertGender = function(){
        this.each(function(){
            switch(parseInt($(this).text())){
                case 0: $(this).text('남'); break;
                case 1: $(this).text('여');
            }
        });
    };

    $.fn.convertUniv = function(){
        this.each(function(){
            switch(parseInt($(this).text())){
                case 1: $(this).text('재학'); break;
                case 2: $(this).text('휴학'); break;
                case 3: $(this).text('수료'); break;
                case 4: $(this).text('졸업'); 
            }
        });
    };

    $.fn.convertAssignStatus = function(){
        this.each(function(){
            switch(parseInt($(this).text())){
                case 1: $(this).text('배정실패'); break;
                case 2: $(this).text('배정중'); break;
                case 3: $(this).text('대기중'); break;
                case 4: $(this).text('재원중'); 
            }
        }); 
    };

    $.fn.convertEmployed = function(){
        this.each(function(){
            switch(parseInt($(this).text())){
                case 1: $(this).text('재직'); break;
                case 2: $(this).text('만강'); break;
                case 3: $(this).text('대기'); 
            }
        }); 
    }

    $.fn.setComma = function(){
        this.each(function(){
            $(this).text(String($(this).text()).replace(/(\d)(?=(?:\d{3})+(?!\d))/g, '$1,'));
        });
    }

    $.fn.unsetComma = function(){
        let won = String(this.text());
        return parseInt(won.replace(/[^\d]+/g, ''));
    }

})(jQuery);