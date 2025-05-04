import { Dataset } from "./dataset";
import { Subscription } from "./subscription";

export type DataProduct = {
	id: string;
	dataset_id: string;
	price: number;
	created_at: Date;
	updated_at: Date;
	subscriptions: Subscription[];
	datasets: Dataset;
};

// __tablename__ = 'data_product'
// id = Column(String, primary_key=True, default=lambda: str(uuid.uuid4()), nullable=False)
// dataset_id = Column(String, ForeignKey('dataset.id'), nullable=True)
// price = Column(Numeric, nullable=False)
// created_at = Column(TIMESTAMP, nullable=False)
// updated_at = Column(TIMESTAMP, nullable=False)

// subscriptions = relationship("Subscription")
// # 1:N: One product → many datasets
// datasets = relationship("Dataset", back_populates="data_product")
