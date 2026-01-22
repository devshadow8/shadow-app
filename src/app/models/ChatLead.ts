import mongoose from "mongoose";

const ChatLeadSchema = new mongoose.Schema(
  {
    name: { type: String, required: true, trim: true, minlength: 2 },
    email: {
      type: String,
      required: true,
      trim: true,
      match: [/^\S+@\S+\.\S+$/, "Invalid email format"],
    },
    phone: {
      type: String,
      required: true,
      trim: true,
      match: [/^[0-9]{10}$/, "Phone must be 10 digits"],
    },
    service: {
      type: String,
      required: true,
      enum: ["Bulk / Volume Hiring", "RPO (End-to-End Hiring)", "Onboarding Support"],
    },
    source: { type: String, default: "chatbot" },
    status: { type: String, enum: ["new", "contacted", "resolved"], default: "new" },
  },
  { timestamps: true }
);

export default mongoose.models.ChatLead || mongoose.model("ChatLead", ChatLeadSchema);
