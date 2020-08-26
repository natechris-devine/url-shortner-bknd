const mongoose = require("mongoose");
mongoose.connect("mongodb://localhost/UrlShortner", {
    useNewUrlParser: true,
    useUnifiedTopology: true
});
mongoose.set('useCreateIndex', true);