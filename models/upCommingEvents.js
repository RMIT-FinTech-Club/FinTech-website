import mongoose from "mongoose";

const upCommingEventsSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: [true, "Please provide event name"],
        },   
        description: {
            type: String,
            required: [true, "Please provide event description"],
        },
        imageUrl: {
            type: String,
            required: [true, "Please provide event image"],
        },
        registrationLink: {
            type: String,
            required: [true, "Please provide event registration link"],
        },
        dateTime: {
            type: String,
            required: [true, "Please provide event date time"],
        },
        time: {
            type: String,
            required: [true, "Please provide event time"],
        },
        date: {
            type: String,
            required: [true, "Please provide event date"],
        },
        location: {
            type: String,
            required: [true, "Please provide event location"],
        },
        type: {
            type: String,
            required: [true, "Please provide event type"],
        }
    },
    {timestamps: true}
);

const UpCommingEvents = mongoose.models.UpCommingEvents || mongoose.model("UpCommingEvents", upCommingEventsSchema);

export default UpCommingEvents;