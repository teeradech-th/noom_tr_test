import mongoose from 'mongoose';
import mongoosePaginate from 'mongoose-paginate-v2';
import isValidPath from 'is-valid-path';

const schema = new mongoose.Schema({
  title: { type: String, required: true },
  desc: { type: String },
  image: {
    type: String,
    required: true,
    unique: true,
    validate: (value) => {
      return isValidPath(value);
    }
  },
}, {
  timestamps: {
    createdAt: 'created_at',
    updatedAt: 'updated_at',
  }
});

schema.plugin(mongoosePaginate);

export default mongoose.model('User', schema);
