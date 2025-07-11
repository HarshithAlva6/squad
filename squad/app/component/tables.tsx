'use client'
import React, {useState} from 'react';
import {Transaction, OpportunityData} from "Mockdata";
interface Props {
    data: Transaction[],
    opData: OpportunityData[],

}

export const Tables: React.FC<Props> = ({data, opData}) => {
    const [type, setType] = useState<string>('all');
    const [chain, setChain] = useState<string>('all');
    const [appliedType, setAppliedType] = useState<string>('all');
    const [appliedChain, setAppliedChain] = useState<string>('all');
    const opportunities = (id:string) => {
        return opData.find((op) => op.id === id);
    }
    const allTypes = (transaction: Transaction[]): string[] => {
        const types = new Set<string>();
        transaction.forEach(tr => types.add(tr.type))
        return ['all', ...Array.from(types).sort()];
    }
    const allChains = (opportunities: OpportunityData[]): string[] => {
        const chains = new Set<string>();
        opportunities.forEach(op => chains.add(op.chain))
        return ['all', ...Array.from(chains).sort()];
    }

    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 10;

    const filterTransactions = (
        transactions: Transaction[],
        opportunities: OpportunityData[],
        type: string,
        chain: string
    ): Transaction[] => {
        const opportunitiesMap = new Map(opportunities.map(op => [op.id, op]));
        return transactions.filter(tr => {
            const opp = opportunitiesMap.get(tr.opportunityId);
            const matchesType = type === 'all' || tr.type === type;
            const matchesChain = chain === 'all' || (opp && opp.chain === chain);
            return matchesType && matchesChain;
        });
    };

    const applyFilters = () => {
        setAppliedType(type);
        setAppliedChain(chain);
    }
    const fetchTypes = allTypes(data);
    const fetchChains = allChains(opData);
    const transactions = filterTransactions(data, opData, appliedType, appliedChain);
    const totalPages = Math.ceil(data.length / itemsPerPage);
    const startIndex = (currentPage - 1) * itemsPerPage;
    const currentTableData = transactions.slice(startIndex, startIndex + itemsPerPage);
    const handlePageChange = (page: number) => {
        if (page >= 1 && page <= totalPages) {
            setCurrentPage(page);
        }
    };


    return (
        <>
        <select 
        value={type}
        onChange={(e)=>setType(e.target.value)}>
            {fetchTypes.map(type => (
                <option key={type} value={type} className="text-black">
                    {type === 'all' ? 'All Types':type}
                </option>
            ))}
        </select>
        <select 
        value={chain}
        onChange={(e)=>setChain(e.target.value)}>
            {fetchChains.map(chain => (
                <option key={chain} value={chain} className="text-black">
                    {chain === 'all' ? 'All BlockChains':chain}
                </option>
            ))}
        </select>
        <button onClick={applyFilters} className = "bg-orange-500 hover:bg-orange-700 text-white font-bold py-2 px-4 rounded">Apply Filters</button>
        <table>
            <thead>
                <th>UserId</th>
                <th>Opportunity Data</th>
                <th>Type</th>
                <th>Timestamp</th>
                <th>Hash</th>
                <th>TokenInputs</th>
                <th>TokenOutputs</th>
            </thead>
            <tbody>
                {currentTableData.map((dt, idx) => {
                    const opp: OpportunityData | undefined = opportunities(dt.opportunityId);
                    return(
                    <tr key={idx}>
                    <td>{dt.userId}</td>
                    <td>{opp.name} on {opp.chain}</td>
                    <td>{dt.type}</td>
                    <td>{new Date(dt.timestamp).toLocaleString()}</td>
                    <td>{dt.hash}</td>
                    <td>{dt.tokenInputs.map((tok,ind) => (
                        <span key={ind}>{tok.asset.name} ({tok.asset.symbol})</span>
                    ))}</td>
                    <td>{dt.tokenOutputs.map((tok,ind) => (
                        <span key={ind}>{tok.asset.name} ({tok.asset.symbol})</span>
                    ))}</td>
                    </tr>
                )})}
            </tbody>
        </table>
        {totalPages > 1 && (
                <div className="flex justify-center mt-6 space-x-2">
                    <button
                        onClick={() => handlePageChange(currentPage - 1)}
                        disabled={currentPage === 1}
                        className="bg-orange-600 rounded-md px-4 py-2">
                        Previous
                    </button>
                    {Array.from({ length: totalPages }, (_, i) => i + 1).map(page => (
                        <button
                            key={page}
                            onClick={() => handlePageChange(page)}
                            className={`px-4 py-2 text-sm font-medium rounded-md ${
                                currentPage === page
                                    ? 'bg-orange-600 text-white'
                                    : 'bg-gray-200 text-gray-700'
                            }`}
                        >
                            {page}
                        </button>
                    ))}
                    <button
                        onClick={() => handlePageChange(currentPage + 1)}
                        disabled={currentPage === totalPages}
                        className="bg-orange-600 rounded-md px-4 py-2">
                        Next
                    </button>
                </div>
            )}
        </>
    );
}

//tokenInputs: [
//    {
//        asset: ETH,
//        amount: "31750000000000000000" // 31.75 ETH
//    }
//],
//const stETH = {
//    name: 'Lido Staked ETH',
//    symbol: 'stETH',
//    isNative: false,
//    isFundingAsset: false,
//    address: "0xae7ab96520de3a18e5e111b5eaab095312d7fe84",
//    priceUSD: 2700
//} as Asset
//
//const ETH = {
//    name: 'Ethereum',
//    symbol: 'ETH',
//    isNative: true,
//    isFundingAsset: true,
//    address: null,
//    priceUSD: 2700
//} as Asset