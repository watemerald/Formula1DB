
function getRequest(url, offset, limit) {
    return fetch(url + "?offset=" + offset + "&limit=" + limit);
}

module.exports = getRequest;