$(function() {
    wx.config({
        debug: true, // 开启调试模式,调用的所有api的返回值会在客户端alert出来，若要查看传入的参数，可以在pc端打开，参数信息会通过log打出，仅在pc端时才会打印。
        appId: '', // 必填，公众号的唯一标识
        timestamp: '', // 必填，生成签名的时间戳
        nonceStr: '', // 必填，生成签名的随机串
        signature: '', // 必填，签名
        jsApiList: [], // 必填，需要使用的JS接口列表
    });

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