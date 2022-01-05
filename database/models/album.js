// Todo: create Album Schema
// Todo: Create Artist Model
const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const SchemaTypes = mongoose.Schema.Types;

const AlbumSchema = new Schema({
  title: String,
  date: Date,
  copiesSold: Number,
  numberTracks: Number,
  image: String,
  revenue: Number,
  //   revenue: SchemaTypes.Double,
});

module.exports = AlbumSchema;
