const mongoose = require('mongoose');

const lineItemSchema = mongoose.Schema({
    service: { type: String, required: true },
    description: { type: String, required: true },
    price: { type: Number, required: true, default: 0 },
    isFree: { type: Boolean, default: false },
});

const quotationSchema = mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'User',
    },
    quoteNumber: {
        type: String,
        required: true,
        unique: true,
    },
    clientName: { type: String, required: true },
    companyName: { type: String, required: true },
    contactNumber: { type: String, required: true },
    email: { type: String },
    quoteDate: { type: Date, required: true },
    validUntil: { type: Date, required: true },
    lineItems: [lineItemSchema],
    subtotal: { type: Number, required: true },
    gst: { type: Number, required: true },
    gstRate: { type: Number, required: true },
    totalPayable: { type: Number, required: true },
    status: {
        type: String,
        enum: ['draft', 'sent', 'accepted', 'rejected', 'expired'],
        default: 'draft',
    },
    pdfUrl: { type: String },
}, {
    timestamps: true,
});

const Quotation = mongoose.model('Quotation', quotationSchema);

module.exports = Quotation;
