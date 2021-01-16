function gotoRepository(source) {
    let matcher = window.location.host.match(/.+(?=\.github\.io$)/);
    if (null !== matcher) {
        const pathdir = 'docs';
        const pathname = window.location.pathname;
        const username = matcher[0];
        const pos = pathname.indexOf('/', 1);
        const repository = pathname.substr(1, pos - 1);
        const sub = pathname.substr(pos, pathname.length - pos);
        const path = sub.match(/.+(?=\/.+?\.html$)/)[0];
        const destination = `https://github.com/${username}/${repository}/tree/master/${pathdir}${path}/${source}`;
        window.location = destination;
    }
}