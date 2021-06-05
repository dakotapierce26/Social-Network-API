const {Schema, model, models} = require('mongoose');


const UserSchema = new Schema({
    username: {
        type: String,
        required: true,
        unique: true,
        trim: true
    },
    email: {
        type: String,
        required: true,
        unique: true,
        trim: true,
        match:  [/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, 'Please fill a valid email address']
    },
    thoughts: [{
        type: Schema.Types.ObjectId,
        ref: 'thought'
    }],
    friends:  [{
        type: Schema.Types.ObjectId,
        ref: 'user'
    }]
},
{
    toJSON: {
        virtuals: true, 
        getters: true
    },
    id: false
});

UserSchema.virtual('friendCount').get(function() {
    return this.friends.length;
  });

const User = model('user', UserSchema);

module.exports = User;