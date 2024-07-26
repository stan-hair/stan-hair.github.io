document.getElementById("year").innerHTML = new Date().getFullYear();

$(document).ready(function () {
    if (getDeviceType() !== 'mobile' && getDeviceType() !== 'tablet') {
        $('.profile-card__share').hide();
    }
});

// share featue
const shareData = {
        title: document.title,
        url: document.location.href,
    },
    btn = document.querySelector('.profile-card__share');

btn.addEventListener('click', async () => {
    try {
        await navigator.share(shareData)
    } catch (err) {
        console.log('Error: ' + err);
    }
});

function getDeviceType() {
    const ua = navigator.userAgent;
    if (/(tablet|ipad|playbook|silk)|(android(?!.*mobi))/i.test(ua)) {
        return "tablet";
    } else if (/Mobile|Android|iP(hone|od)|IEMobile|BlackBerry|Kindle|Silk-Accelerated|(hpw|web)OS|Opera M(obi|ini)/.test(ua)) {
        return "mobile";
    }
    return "desktop";
}