$(document).ready(function(){
    $('#btnLoad').on('click',function(){
        const from = 'usd';
        let to = 'eur';
        let value = $('#txtDollar').val();
        let exchangeUrl = 'https://openexchangerates.org/api/convert/' + value + '/' + from + '/' + to + '/' + 'app_id=a6f004f12f324b24b2f0372e15040de7';
        $.ajax({
            url: exchangeUrl,
            success: function(data) {
                console.log(data);
                /*let html = 'Euro:' + exchange.eur + '.<br />';
                    $('#divResult').append(html);*/
            }
        });
    });
}); 
