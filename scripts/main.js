$(window).ready(function () {
    $('#albumDetail').load('2017/albums/50.html');
    $('#countdownList a').on('click', function () {
        var albumToLoad = $(this).attr('href');
        var year = $('.year').text();
        $('#albumDetail').load(year + '/albums/' + albumToLoad + '.html');
        $('#countdownList a').removeClass('active');
        $(this).addClass('active');
        return false;
    });

    $('#siteNav a').on('click', function () {
        if ($('.yearNav').hasClass('hiddenItem')) {
            $('.yearNav').removeClass('hiddenItem');
        } else {
            $('.yearNav').addClass('hiddenItem');
        }
        return false;
    });

    $('.yearNav a').on('click', function () {
        $('body').removeClass();
        $('#countdownList a').removeClass('active');
        var year = $(this).text();
        switch (year) {
            case '2017':
                $('body').addClass('year2017');
                break;
            case '2016':
                $('body').addClass('year2016');
                break;
            case '2015':
                $('body').addClass('year2015');
                break;
            case '2014':
                $('body').addClass('year2014');
                break;
            case '2013':
                $('body').addClass('year2013');
                break;
            case '2012':
                $('body').addClass('year2012');
                break;
            case '2011':
                $('body').addClass('year2011');
                break;
            default:
                $('body').addClass('year2017');
        }
        $('.year').text(year);
        $('#albumDetail').load(year + '/albums/50.html');
        $('#countdownList a').first().addClass('active');
        $('.yearNav').addClass('hiddenItem');
        return false;
    });
});