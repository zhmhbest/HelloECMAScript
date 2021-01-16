function gotoRepository(source) {
    const HOST = window.location.host;
    const PATHNAME = window.location.pathname;
    // console.log(HOST);
    let matcher;

    // Github
    matcher = HOST.match(/.+(?=\.github\.io$)/);
    if (null !== matcher) {
        const pathdir = 'docs';
        const username = matcher[0];
        const pos = PATHNAME.indexOf('/', 1);
        const repository = PATHNAME.substr(1, pos - 1);
        const sub = PATHNAME.substr(pos, PATHNAME.length - pos);
        const path = sub.match(/.+(?=\/.+?\.html$)/)[0];
        const destination = `https://github.com/${username}/${repository}/tree/master/${pathdir}${path}/${source}`;
        window.location = destination;
    }

    // File
    if (null !== HOST.match(/^127.0.0.1/)) {
        const path = PATHNAME.match(/.+(?=\/.+?\.html$)/)[0];
        window.location.pathname = `${path}/${source}`;
    }
}