
import { RESOLUTION } from '@/constants';

export default function divideGrid(size: number): { rows: number, cols: number } {
  const result =  size / RESOLUTION;
  return {
    rows: result,
    cols: result,
  };
}
