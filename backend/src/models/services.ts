import { model, Schema, Document } from "mongoose";

interface ServiceProps extends Document {
  serviceName: string;
  servicePrice: string;
  serviceDetails: string;
  serviceType: string;
  serviceDuration: string;
  serviceowner: string;
  serviceUrl: string;
  createdAt: Date;
  updatedAt: Date;
}

const serviceSchema = new Schema<ServiceProps>({
  serviceName: { type: String, required: true },
  servicePrice: { type: String, required: true },
  serviceDetails: { type: String, required: true },
  serviceType: { type: String, required: true },
  serviceDuration: { type: String, required: true },
  serviceowner: { type: String, required: true },
  serviceUrl: { type: String, required: true }
}, {
  timestamps: true
});

const serviceModel = model<ServiceProps>('Service', serviceSchema);

export default serviceModel;
