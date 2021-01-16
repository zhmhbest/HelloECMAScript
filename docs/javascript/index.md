<link rel="stylesheet" href="https://zhmhbest.gitee.io/hellomathematics/style/index.css">
<script src="https://zhmhbest.gitee.io/hellomathematics/style/index.js"></script>

# [Javascript](../index.html)

<a href="javascript:gotoRepository('src')">查看仓库</a>
<script>
function gotoRepository(source) {
    let matcher = window.location.host.match(/.+(?=\.github\.io$)/);
    if (
        null !== matcher
    ) {
        const pathdir = 'docs';
        const pathname = window.location.pathname;
        const username = matcher[0];
        const pos = pathname.indexOf('/', 1);
        const repository = pathname.substr(1, pos - 1);
        const sub = pathname.substr(pos, pathname.length - pos);
        const path = sub.match(/.+(?=\/.+?\.html$)/)[0];
        console.log(`https://github.com/${username}/${repository}/tree/master/${pathdir}${path}/${source}`);
    }
}
</script>
