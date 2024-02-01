
function isValidTopBannerClick(input: any): input is TopBannerClick {
    return typeof input.linkClickUrl === 'string' &&
           typeof input.linkClickText === 'string' &&
           typeof input.locale === 'string' &&
           typeof input.language === 'string' &&
           typeof input.guestHashedEmail === 'string' &&
           typeof input.browserUserAgent === 'string';
}