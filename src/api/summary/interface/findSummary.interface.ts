import { ResponseDefault } from '@/interface/responseDefault.interface';
import { Summary } from '@/interface/summary.interface';

export interface RequestFindSummary {
  userId: string;
}

export interface ResponseFindSummary extends ResponseDefault {
  summary: Summary[];
}
