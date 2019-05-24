function App(singer,song,album) {
    this.singer = singer;
}
App.prototype.searchSinger = function () {
    return this.singer
}
App.prototype.search