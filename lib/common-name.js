module.exports = function (out) {
    return (
        out.isIE ? "ie" :
        out.isFirefox ? "firefox" :
        out.isChrome ? "chrome" :
        out.isChromium ? "chromium" :
        out.isOpera ? "opera" :
        "unknown"
    );
};