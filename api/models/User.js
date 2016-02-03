module.exports = {

    attributes: {
        name: {
            type: 'string'
        },

        email: {
            type: 'string',
            unique: true,
            index: true
        },

        authMethod: {
            type: 'string',
            defaultsTo: 'google'
        },

        apiKey: {
            type: 'string',
            size: 32,
            unique: true,
            index: true
        },

        access: {
            type: 'string',
            enum: ['inactive', 'player', 'mod', 'admin', 'superadmin'],
            defaultsTo: 'inactive'
        },

        signupDate: {
            type: 'datetime',
            defaultsTo: function () {
                return new Date();
            }
        },

        team: {
            type: 'string',
            enum: ['human', 'zombie'],
            defaultsTo: 'human'
        },

        zombieId: {
            type: 'string',
            index: true,
            unique: true
        },

        activeHumanIds: {
            type: 'array',
            defaultsTo: []
        },

        inactiveHumanIds: {
            type: 'array',
            defaultsTo: []
        },

        humansTagged: {
            type: 'integer',
            defaultsTo: 0
        },

        badges: {
            type: 'array',
            defaultsTo: []
        },

        printed: {
            type: 'boolean',
            defaultsTo: false
        },

        clan: {
            type: 'string',
            size: 32,
            defaultsTo: ''
        }
    }
};

