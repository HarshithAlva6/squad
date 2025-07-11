import {Tables} from './component/tables';
import {mockTransactions, mockOpportunities} from '../Mockdata';

export default function Home() {
  return (
    <div>
      <h1 className="text-center">Render info</h1>
      <Tables data = {mockTransactions} opData = {mockOpportunities}/>
    </div>
  );
}
