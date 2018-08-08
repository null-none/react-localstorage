exports.reactLocalStorage = {
    set: function(key, value) {
        localStorage[key] = value;
        return localStorage[key];
    },
    get: function(key, defaultValue) {
        return localStorage[key] || defaultValue;
    },
    setObject: function(key, value) {
        localStorage[key] = JSON.stringify(value);
        return localStorage[key];
    },
    getObject: function(key, value) {
        return JSON.parse(localStorage[key] || '{}');
    },
    clear: function() {
        return localStorage.clear();
    },
    remove: function(key) {
        return localStorage.removeItem(key);
    }
}
