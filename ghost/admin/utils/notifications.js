var Notifications = Ember.ArrayProxy.extend({
    content: Ember.A(),
    timeout: 3000,
    pushObject: function (object) {
        object.typeClass = 'notification-' + object.type;
        // This should be somewhere else.
        if (object.type === 'success') {
            object.typeClass = object.typeClass + " notification-passive";
        }
        this._super(object);
    },
    showError: function (message) {
        this.pushObject({
            type: 'error',
            message: message
        });
    },
    showInfo: function (message) {
        this.pushObject({
            type: 'info',
            message: message
        });
    },
    showSuccess: function (message) {
        this.pushObject({
            type: 'success',
            message: message
        });
    },
    showWarn: function (message) {
        this.pushObject({
            type: 'warn',
            message: message
        });
    }
});

export default Notifications;