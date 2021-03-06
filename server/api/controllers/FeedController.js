var Promise = require('bluebird');

module.exports = {
	get: function (req, res) {
        Feed.find({relevantUser: req.user.id, sort: {createdAt: -1}}, function (err, entries) {
            if (err)
                return res.negotiate(err);
            
            if (req.param('stringify') !== undefined) {
                var promises = [];
                entries.forEach(function (entry) {
                    promises.push(entry.getMessageString().then(function (message) {
                        return {viewed: entry.viewed, message: message, image: entry.image, time: entry.createdAt};
                    }));
                });

                Promise.all(promises).then(function (results) {
                    res.ok({
                        feed: results
                    });
                }).catch(function (err) {
                    res.negotiate(err);
                });
            }
            else {
                var results = [];
                entries.forEach(function (entry) {
                    results.push({viewed: entry.viewed, message: entry.message, image: entry.image, time: entry.createdAt});
                });

                res.ok({
                    feed: results
                });
            }
        });
    },

    view: function (req, res) {
        Feed.update({relevantUser: req.user.id}, {viewed: true}, function (err) {
            if (err)
                return err.negotiate(err);

            return res.ok({message: "All notifications have been marked as viewed."});
        });
    }
};

