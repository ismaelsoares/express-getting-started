try {
    require('babel-core/register')({
        presets: ["es2015"]
    });
    require('./www');
} catch (err) {
    console.error(err.stack);
}
