const mongoose = require('mongoose');

const streakSchema = new mongoose.Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true, unique: true },
  currentStreak: { type: Number, default: 0 },
  longestStreak: { type: Number, default: 0 },
  lastCheckIn: { type: Date },
  redemptionTokens: { type: Number, default: 0 },
}, { timestamps: true });

module.exports = mongoose.model('Streak', streakSchema); 