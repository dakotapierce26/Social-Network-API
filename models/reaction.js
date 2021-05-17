const {Schema, model, models, Types} = require('mongoose');



const Reaction = model('Reaction', ReactionSchema);

module.exports = Reaction;