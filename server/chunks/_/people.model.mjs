import mongoose from 'mongoose';

const peopleSchema = new mongoose.Schema({
  name: { type: String },
  email: { type: String },
  age: { type: String }
});
const people = mongoose.model("amos-test-data", peopleSchema, "people");

export { people as p };
//# sourceMappingURL=people.model.mjs.map
