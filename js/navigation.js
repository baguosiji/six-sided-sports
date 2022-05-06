$(function() {
    function jumpTo(type) {
        if (type === 'home') {
            window.location.href = './home.html';
            return;
        }
        if (type === 'case') {
            window.location.href = './case.html';
            return;
        }
    }
    $('.navigation-bar-item').each(function(idx) {
        const acitveIdx = $(this).attr('hoverValue');
        if (idx === Number(acitveIdx)) {
            const img = $(this).find('img');
            const iconName = img.attr('icon');
            $(this).css('color', '#00ACBA');
            img.attr('src', '../img/navigator/' + iconName + '_active.png');
        }
        $(this).on('click', function() {
            if (idx === Number(acitveIdx)) {
                return;
            }
            $('.navigation-bar-item').each(function() {
                const img = $(this).find('img');
                const iconName = img.attr('icon');
                $(this).css('color', '#b5b5b5');
                img.attr('src', '../img/navigator/' + iconName + '.png');
            });
            const img = $(this).find('img');
            const iconName = img.attr('icon');
            jumpTo(iconName);
            $(this).css('color', '#00ACBA');
            img.attr('src', '../img/navigator/' + iconName + '_active.png');
        });
    });
});