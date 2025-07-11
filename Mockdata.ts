export interface ChainMetadata {
    id: string;
    name: string;
    assets: Asset[];
}

export interface UserBalance {
    userId: string;
    balances: AssetBalance[]
}

export interface AssetBalance {
    chainId: string;
    asset: Asset;
    amount: string;
}

export interface Asset {
    name: string;
    symbol: string;
    isNative: boolean;
    isFundingAsset: boolean;
    address: string | null;
    priceUSD: number;
}


export interface TokenInput {
    asset: Asset;
    amount: string;
}

export interface RedeemStatus {
    requestId: string,
    redeemedAsset: Asset;
    amountRedeemed: string,
    redeemRequestTimeStamp: number;
    claimableTimeStamp: number;
    redeemable: boolean;
    redeemed: boolean;
}

export interface Transaction {
    userId: string;
    opportunityId: string;
    type: TransactionType;
    timestamp: number;
    hash: string;
    tokenInputs: TokenInput[];
    tokenOutputs: TokenInput[];
}

export enum TransactionType {
    Invest = 'invest',
    Divest = 'divest',
    RequestDivest = 'requestDivest',
    Approval = 'approval'
}

export interface OpportunityContract {
    contractAddress: string;
    type: 'invest' | 'divest'
}

export interface OpportunityData {
    id: string;
    name: string;
    chain: string;
    inputAssets: Asset[];
    outputAssets: Asset[];
    apy: number;
    enabled: boolean;
    immediateWithdrawal: boolean;
    type: 'Lending' | 'LP' | 'Staking';
    protocol: string;
    contracts: OpportunityContract[];
}

const ETH = {
    name: 'Ethereum',
    symbol: 'ETH',
    isNative: true,
    isFundingAsset: true,
    address: null,
    priceUSD: 2700
} as Asset

const BERA = {
    name: 'Bera',
    symbol: 'BERA',
    isNative: true,
    isFundingAsset: true,
    address: null,
    priceUSD: 5.55
} as Asset

const HONEY = {
    name: 'Honey',
    symbol: 'HONEY',
    isNative: true,
    isFundingAsset: true,
    address: null,
    priceUSD: 1.00
} as Asset

const USDC_BASIC = {
    name: 'USDC',
    symbol: 'USDC',
    isNative: false,
    isFundingAsset: true,
    address: "",
    priceUSD: 1.00
} as Asset

const USDT_BASIC = {
    name: 'USDT',
    symbol: 'USDT',
    isNative: false,
    isFundingAsset: true,
    address: "",
    priceUSD: 1.00
} as Asset

const stETH = {
    name: 'Lido Staked ETH',
    symbol: 'stETH',
    isNative: false,
    isFundingAsset: false,
    address: "0xae7ab96520de3a18e5e111b5eaab095312d7fe84",
    priceUSD: 2700
} as Asset

const aUSDC_ARBITRUM = {
    name: 'Aave USDC',
    symbol: 'aUSDC',
    isNative: false,
    isFundingAsset: false,
    address: "0xaf88d065e77c8cc2239327c5edb3a432268e5831",
    priceUSD: 1.00
} as Asset

const aUSDT_ARBITRUM = {
    name: 'Aave USDT',
    symbol: 'aUSDT',
    isNative: false,
    isFundingAsset: false,
    address: "0xfd086bc7cd5c481dcc9c85ebe478a1c0b69fcbb9",
    priceUSD: 1.00
} as Asset

let stETH_BASE = { ...stETH };
stETH_BASE.address = "0x889edC2eDab5f40e902b864aD4d7AdE8E412F9B1"

const USDC_USDT_LP_ARB = {
    name: 'USDC-USDT LP',
    symbol: 'USDC-USDT LP',
    isNative: false,
    isFundingAsset: false,
    address: "0x68b3465833fb72A70ecDF485E0e4C7bD8665Fc45",
    priceUSD: 0 // this would need to be obtained from uniswap v3
} as Asset


const ETH_USDC_LP_BASE = {
    name: 'ETH-USDC LP',
    symbol: 'ETH-USDC LP',
    isNative: false,
    isFundingAsset: false,
    address: "0x68b3465833fb72A70ecDF485E0e4C7bD8665Fc45",
    priceUSD: 0 // this would need to be obtained from uniswap v3
} as Asset

const BERA_HONEY_LP = {
    name: 'BERA-HONEY LP',
    symbol: 'BERA-HONEY LP',
    isNative: false,
    isFundingAsset: false,
    address: "0x68b3465833fb72A70ecDF485E0e4C7bD8665Fc45",
    priceUSD: 0 // this would need to be obtained from bex
} as Asset

let USDC_ETH = { ...USDC_BASIC };
USDC_ETH.address = "0xa0b86991c6218b36c1d19d4a2e9eb0ce3606eb48"

let USDT_ARBITRUM = { ...USDT_BASIC };
USDT_ARBITRUM.address = "0xfd086bc7cd5c481dcc9c85ebe478a1c0b69fcbb9"
let USDC_ARBITRUM = { ...USDC_BASIC };
USDC_ARBITRUM.address = "0xaf88d065e77c8cc2239327c5edb3a432268e5831"

let USDC_BASE = { ...USDC_BASIC };
USDC_BASE.address = "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913"

export const mockChains: ChainMetadata[] = [
    {
        id: 'ethereum',
        name: 'Ethereum',
        assets: [ //assets are the funding assets for the chain.
            ETH,
        ],
    },
    {
        id: 'arbitrum',
        name: 'Arbitrum',
        assets: [
            ETH
        ],
    },
    {
        id: 'base',
        name: 'Base',
        assets: [
            ETH
        ],
    },
    {
        id: 'berachain',
        name: 'Berachain',
        assets: [
            BERA
        ],
    },
];

export const mockOpportunities: OpportunityData[] = [
    {
        id: "1",
        name: "ETH Staking",
        chain: "ethereum",
        inputAssets: [ETH],
        outputAssets: [stETH],
        apy: 4.8,
        enabled: true,
        immediateWithdrawal: false,
        type: "Staking",
        protocol: "Lido",
        contracts: [
            {
                contractAddress: "0xae7ab96520DE3A18E5e111B5EaAb095312D7fE84",
                type: "invest"
            },
            {
                contractAddress: "0x889edC2eDab5f40e902b864aD4d7AdE8E412F9B1",
                type: "divest"
            }
        ]
    },
    {
        id: "2",
        name: "Uniswap Arbitrum USDT - USDC LP",
        chain: "arbitrum",
        inputAssets: [USDT_ARBITRUM, USDC_ARBITRUM],
        outputAssets: [USDC_USDT_LP_ARB],
        apy: 2.5,
        enabled: false,
        immediateWithdrawal: true,
        type: "LP",
        protocol: "Uniswap",
        contracts: [
            {
                contractAddress: "0x68b3465833fb72A70ecDF485E0e4C7bD8665Fc45",
                type: "invest"
            }
        ]
    },
    {
        id: "3",
        name: "ETH Staking on Base",
        chain: "base",
        inputAssets: [ETH],
        outputAssets: [stETH_BASE],
        apy: 4.2,
        enabled: true,
        immediateWithdrawal: false,
        type: "Staking",
        protocol: "Lido",
        contracts: [
            {
                contractAddress: "0xae7ab96520DE3A18E5e111B5EaAb095312D7fE84",
                type: "invest"
            },
            {
                contractAddress: "0x889edC2eDab5f40e902b864aD4d7AdE8E412F9B1",
                type: "divest"
            }
        ]
    },
    {
        id: "4",
        name: "USDC Lending",
        chain: "arbitrum",
        inputAssets: [USDC_ARBITRUM],
        outputAssets: [aUSDC_ARBITRUM],
        apy: 3.8,
        enabled: true,
        immediateWithdrawal: true,
        type: "Lending",
        protocol: "Aave",
        contracts: [
            {
                contractAddress: "0x2345678901234567890123456789012345678901",
                type: "invest"
            }
        ]
    },
    {
        id: "5",
        name: "BERA HONEY LP",
        chain: "berachain",
        inputAssets: [BERA, HONEY],
        outputAssets: [BERA_HONEY_LP],
        apy: 8.5,
        enabled: true,
        immediateWithdrawal: false,
        type: "LP",
        protocol: "Berachain",
        contracts: [
            {
                contractAddress: "0x3456789012345678901234567890123456789012",
                type: "invest"
            },
            {
                contractAddress: "0x6789012345678901234567890123456789012345",
                type: "divest"
            }
        ]
    },
    {
        id: "6",
        name: "ETH-USDC LP on Base",
        chain: "base",
        inputAssets: [ETH, USDC_BASE],
        outputAssets: [ETH_USDC_LP_BASE],
        apy: 5.2,
        enabled: true,
        immediateWithdrawal: true,
        type: "LP",
        protocol: "BaseSwap",
        contracts: [
            {
                contractAddress: "0x4567890123456789012345678901234567890123",
                type: "invest"
            }
        ]
    },
    {
        id: "7",
        name: "USDT Lending",
        chain: "arbitrum",
        inputAssets: [USDT_ARBITRUM],
        outputAssets: [aUSDT_ARBITRUM],
        apy: 3.6,
        enabled: true,
        immediateWithdrawal: true,
        type: "Lending",
        protocol: "Aave",
        contracts: [
            {
                contractAddress: "0x5678901234567890123456789012345678901234",
                type: "invest"
            }
        ]
    },
];

export const mockTransactions: Transaction[] = [
    {
        userId: "0xf47b7b1c-d4a1-4d4b-88a2-5e3d92f03e1b",
        opportunityId: "1", // ETH Staking
        type: TransactionType.Approval,
        timestamp: 1709225400, // March 1, 10:30 AM
        hash: "0x2b8c4f9e1d3a6b5c9d8e7f6a5b4c3d2e1f9a8b7c6d5e4f3a2b1c0d9e8f7a6b5",
        tokenInputs: [
            {
                asset: ETH,
                amount: "31750000000000000000" // 31.75 ETH
            }
        ],
        tokenOutputs: []
    },
    {
        userId: "0xf47b7b1c-d4a1-4d4b-88a2-5e3d92f03e1b",
        opportunityId: "1", // ETH Staking
        type: TransactionType.Invest,
        timestamp: 1709225520, // 2 minutes later
        hash: "0x3a8d7f12e4b9c6d5a2f1e8b3c4d5e6f7a8b9c0d1e2f3a4b5c6d7e8f9a0b1c2d3",
        tokenInputs: [
            {
                asset: ETH,
                amount: "31750000000000000000" // 31.75 ETH
            }
        ],
        tokenOutputs: [
            {
                asset: stETH,
                amount: "31671125000000000000" // 31.67 stETH (0.25% fee)
            }
        ]
    },
    {
        userId: "0xe3c8a2d5-b6f1-4e7a-9d2c-8b5f4c3d2e1f",
        opportunityId: "4", // USDC Lending
        type: TransactionType.Approval,
        timestamp: 1709280000, // March 2, 1:20 AM
        hash: "0x4f8e2d1c0b9a8f7e6d5c4b3a2f1e0d9c8b7a6f5e4d3c2b1a0f9e8d7c6b5a4f3",
        tokenInputs: [
            {
                asset: USDC_ARBITRUM,
                amount: "47523000000" // 47,523 USDC
            }
        ],
        tokenOutputs: []
    },
    {
        userId: "0xe3c8a2d5-b6f1-4e7a-9d2c-8b5f4c3d2e1f",
        opportunityId: "4", // USDC Lending
        type: TransactionType.Invest,
        timestamp: 1709280120, // 2 minutes later
        hash: "0x7b2c4f8e1d3a6b5c9d8e7f6a5b4c3d2e1f9a8b7c6d5e4f3a2b1c0d9e8f7a6b5",
        tokenInputs: [
            {
                asset: USDC_ARBITRUM,
                amount: "47523000000" // 47,523 USDC
            }
        ],
        tokenOutputs: [
            {
                asset: aUSDC_ARBITRUM,
                amount: "47404091750" // 47,404.09 aUSDC (0.25% fee)
            }
        ]
    },
    {
        userId: "0xb2a9c4e6-f8d1-4e7b-9a3c-5d2f8e1b4a7c",
        opportunityId: "5", // BERA HONEY LP
        type: TransactionType.Approval,
        timestamp: 1709366400, // March 2, 10:00 PM
        hash: "0x8d4a1c7b3e6f5d2c9b8a7f4e1d0c9b8a7f6e5d4c3b2a1f0e9d8c7b6a5f4e3d2",
        tokenInputs: [
            {
                asset: BERA,
                amount: "892500000000000000000" // 892.5 BERA
            }
        ],
        tokenOutputs: []
    },
    {
        userId: "0xb2a9c4e6-f8d1-4e7b-9a3c-5d2f8e1b4a7c",
        opportunityId: "5", // BERA HONEY LP
        type: TransactionType.Approval,
        timestamp: 1709366460, // 1 minute later
        hash: "0x1a2b3c4d5e6f7a8b9c0d1e2f3a4b5c6d7e8f9a0b1c2d3e4f5a6b7c8d9e0f1a2",
        tokenInputs: [
            {
                asset: HONEY,
                amount: "4462500000000000000000" // 4,462.5 HONEY
            }
        ],
        tokenOutputs: []
    },
    {
        userId: "0xb2a9c4e6-f8d1-4e7b-9a3c-5d2f8e1b4a7c",
        opportunityId: "5", // BERA HONEY LP
        type: TransactionType.Invest,
        timestamp: 1709366580, // 2 minutes later
        hash: "0x9e4d2c1b8a7f6e5d4c3b2a1f0e9d8c7b6a5f4e3d2c1b0a9f8e7d6c5b4a3f2e1",
        tokenInputs: [
            {
                asset: BERA,
                amount: "892500000000000000000", // 892.5 BERA
            },
            {
                asset: HONEY,
                amount: "4462500000000000000000", // 4,462.5 HONEY
            }
        ],
        tokenOutputs: [
            {
                asset: BERA_HONEY_LP,
                amount: "1" // NFT position
            }
        ]
    },
    {
        userId: "0xd1e2f3a4-b5c6-4d7e-8f9a-0b1c2d3e4f5a",
        opportunityId: "6", // ETH-USDC LP on Base
        type: TransactionType.Approval,
        timestamp: 1709452800, // March 3, 10:00 AM
        hash: "0x2d3e4f5a6b7c8d9e0f1a2b3c4d5e6f7a8b9c0d1e2f3a4b5c6d7e8f9a0b1c2d3",
        tokenInputs: [
            {
                asset: ETH,
                amount: "15725000000000000000" // 15.725 ETH
            }
        ],
        tokenOutputs: []
    },
    {
        userId: "0xd1e2f3a4-b5c6-4d7e-8f9a-0b1c2d3e4f5a",
        opportunityId: "6", // ETH-USDC LP on Base
        type: TransactionType.Approval,
        timestamp: 1709452860, // 1 minute later
        hash: "0x3e4f5a6b7c8d9e0f1a2b3c4d5e6f7a8b9c0d1e2f3a4b5c6d7e8f9a0b1c2d3e4",
        tokenInputs: [
            {
                asset: USDC_BASE,
                amount: "42457500000" // 42,457.50 USDC
            }
        ],
        tokenOutputs: []
    },
    {
        userId: "0xd1e2f3a4-b5c6-4d7e-8f9a-0b1c2d3e4f5a",
        opportunityId: "6", // ETH-USDC LP on Base
        type: TransactionType.Invest,
        timestamp: 1709452980, // 2 minutes later
        hash: "0x4f5a6b7c8d9e0f1a2b3c4d5e6f7a8b9c0d1e2f3a4b5c6d7e8f9a0b1c2d3e4f5",
        tokenInputs: [
            {
                asset: ETH,
                amount: "15725000000000000000", // 15.725 ETH
            },
            {
                asset: USDC_BASE,
                amount: "42457500000", // 42,457.50 USDC
            }
        ],
        tokenOutputs: [
            {
                asset: ETH_USDC_LP_BASE,
                amount: "1" // NFT position
            }
        ]
    },
    {
        userId: "0xe3c8a2d5-b6f1-4e7a-9d2c-8b5f4c3d2e1f",
        opportunityId: "4", // USDC Lending
        type: TransactionType.Divest,
        timestamp: 1709539200, // March 4, 10:00 AM
        hash: "0x5a6b7c8d9e0f1a2b3c4d5e6f7a8b9c0d1e2f3a4b5c6d7e8f9a0b1c2d3e4f5a",
        tokenInputs: [
            {
                asset: aUSDC_ARBITRUM,
                amount: "47404091750" // 47,404.09 aUSDC
            }
        ],
        tokenOutputs: [
            {
                asset: USDC_ARBITRUM,
                amount: "47523947803" // 47,523.95 USDC (including interest)
            }
        ]
    },
    {
        userId: "0xf47b7b1c-d4a1-4d4b-88a2-5e3d92f03e1b",
        opportunityId: "7", // USDT Lending
        type: TransactionType.Approval,
        timestamp: 1709625600, // March 5, 10:00 AM
        hash: "0x6b7c8d9e0f1a2b3c4d5e6f7a8b9c0d1e2f3a4b5c6d7e8f9a0b1c2d3e4f5a6b",
        tokenInputs: [
            {
                asset: USDT_ARBITRUM,
                amount: "68275000000" // 68,275 USDT
            }
        ],
        tokenOutputs: []
    },
    {
        userId: "0xf47b7b1c-d4a1-4d4b-88a2-5e3d92f03e1b",
        opportunityId: "7", // USDT Lending
        type: TransactionType.Invest,
        timestamp: 1709625720, // 2 minutes later
        hash: "0x7c8d9e0f1a2b3c4d5e6f7a8b9c0d1e2f3a4b5c6d7e8f9a0b1c2d3e4f5a6b7c",
        tokenInputs: [
            {
                asset: USDT_ARBITRUM,
                amount: "68275000000" // 68,275 USDT
            }
        ],
        tokenOutputs: [
            {
                asset: aUSDT_ARBITRUM,
                amount: "68104531250" // 68,104.53 aUSDT (0.25% fee)
            }
        ]
    },
    {
        userId: "0xb2a9c4e6-f8d1-4e7b-9a3c-5d2f8e1b4a7c",
        opportunityId: "5", // BERA HONEY LP
        type: TransactionType.RequestDivest,
        timestamp: 1709712000, // March 6, 10:00 AM
        hash: "0x8d9e0f1a2b3c4d5e6f7a8b9c0d1e2f3a4b5c6d7e8f9a0b1c2d3e4f5a6b7c8d",
        tokenInputs: [
            {
                asset: BERA_HONEY_LP,
                amount: "1" // NFT position
            }
        ],
        tokenOutputs: [
            {
                asset: BERA,
                amount: "897962500000000000000", // 897.96 BERA (small profit)
            },
            {
                asset: HONEY,
                amount: "4484812500000000000000", // 4,484.81 HONEY (small profit)
            }
        ]
    },
    {
        userId: "0xb2a9c4e6-f8d1-4e7b-9a3c-5d2f8e1b4a7c",
        opportunityId: "5", // BERA HONEY LP
        type: TransactionType.Divest,
        timestamp: 1709798400, // March 7, 10:00 AM (24 hours after request)
        hash: "0x9f8e7d6c5b4a3f2e1d0c9b8a7f6e5d4c3b2a1f0e9d8c7b6a5f4e3d2c1b0a9f8",
        tokenInputs: [
            {
                asset: BERA_HONEY_LP,
                amount: "1" // NFT position
            }
        ],
        tokenOutputs: [
            {
                asset: BERA,
                amount: "897962500000000000000", // 897.96 BERA (matching request)
            },
            {
                asset: HONEY,
                amount: "4484812500000000000000", // 4,484.81 HONEY (matching request)
            }
        ]
    },
    {
        userId: "0xd1e2f3a4-b5c6-4d7e-8f9a-0b1c2d3e4f5a",
        opportunityId: "3", // ETH Staking on Base
        type: TransactionType.Approval,
        timestamp: 1709798400, // March 7, 10:00 AM
        hash: "0x9e0f1a2b3c4d5e6f7a8b9c0d1e2f3a4b5c6d7e8f9a0b1c2d3e4f5a6b7c8d9e",
        tokenInputs: [
            {
                asset: ETH,
                amount: "23850000000000000000" // 23.85 ETH
            }
        ],
        tokenOutputs: []
    },
    {
        userId: "0xd1e2f3a4-b5c6-4d7e-8f9a-0b1c2d3e4f5a",
        opportunityId: "3", // ETH Staking on Base
        type: TransactionType.Invest,
        timestamp: 1709798520, // 2 minutes later
        hash: "0x0f1a2b3c4d5e6f7a8b9c0d1e2f3a4b5c6d7e8f9a0b1c2d3e4f5a6b7c8d9e0f",
        tokenInputs: [
            {
                asset: ETH,
                amount: "23850000000000000000" // 23.85 ETH
            }
        ],
        tokenOutputs: [
            {
                asset: stETH_BASE,
                amount: "23790375000000000000" // 23.79 stETH (0.25% fee)
            }
        ]
    },
    {
        userId: "0xe3c8a2d5-b6f1-4e7a-9d2c-8b5f4c3d2e1f",
        opportunityId: "7", // USDT Lending
        type: TransactionType.Approval,
        timestamp: 1709884800, // March 8, 10:00 AM
        hash: "0x1a2b3c4d5e6f7a8b9c0d1e2f3a4b5c6d7e8f9a0b1c2d3e4f5a6b7c8d9e0f1a",
        tokenInputs: [
            {
                asset: USDT_ARBITRUM,
                amount: "52375000000" // 52,375 USDT
            }
        ],
        tokenOutputs: []
    },
    {
        userId: "0xe3c8a2d5-b6f1-4e7a-9d2c-8b5f4c3d2e1f",
        opportunityId: "7", // USDT Lending
        type: TransactionType.Invest,
        timestamp: 1709884920, // 2 minutes later
        hash: "0x2b3c4d5e6f7a8b9c0d1e2f3a4b5c6d7e8f9a0b1c2d3e4f5a6b7c8d9e0f1a2b",
        tokenInputs: [
            {
                asset: USDT_ARBITRUM,
                amount: "52375000000" // 52,375 USDT
            }
        ],
        tokenOutputs: [
            {
                asset: aUSDT_ARBITRUM,
                amount: "52244218750" // 52,244.22 aUSDT (0.25% fee)
            }
        ]
    },
    {
        userId: "0xf47b7b1c-d4a1-4d4b-88a2-5e3d92f03e1b",
        opportunityId: "1", // ETH Staking
        type: TransactionType.Approval,
        timestamp: 1709971200, // March 9, 10:00 AM
        hash: "0x3c4d5e6f7a8b9c0d1e2f3a4b5c6d7e8f9a0b1c2d3e4f5a6b7c8d9e0f1a2b3c",
        tokenInputs: [
            {
                asset: ETH,
                amount: "18325000000000000000" // 18.325 ETH
            }
        ],
        tokenOutputs: []
    },
    {
        userId: "0xf47b7b1c-d4a1-4d4b-88a2-5e3d92f03e1b",
        opportunityId: "1", // ETH Staking
        type: TransactionType.Invest,
        timestamp: 1709971320, // 2 minutes later
        hash: "0x4d5e6f7a8b9c0d1e2f3a4b5c6d7e8f9a0b1c2d3e4f5a6b7c8d9e0f1a2b3c4d",
        tokenInputs: [
            {
                asset: ETH,
                amount: "18325000000000000000" // 18.325 ETH
            }
        ],
        tokenOutputs: [
            {
                asset: stETH,
                amount: "18279156250000000000" // 18.279 stETH (0.25% fee)
            }
        ]
    },
    {
        userId: "0xb2a9c4e6-f8d1-4e7b-9a3c-5d2f8e1b4a7c",
        opportunityId: "2", // USDT-USDC LP
        type: TransactionType.Approval,
        timestamp: 1710057600, // March 10, 10:00 AM
        hash: "0x5e6f7a8b9c0d1e2f3a4b5c6d7e8f9a0b1c2d3e4f5a6b7c8d9e0f1a2b3c4d5e",
        tokenInputs: [
            {
                asset: USDT_ARBITRUM,
                amount: "75625000000" // 75,625 USDT
            }
        ],
        tokenOutputs: []
    },
    {
        userId: "0xb2a9c4e6-f8d1-4e7b-9a3c-5d2f8e1b4a7c",
        opportunityId: "2", // USDT-USDC LP
        type: TransactionType.Approval,
        timestamp: 1710057660, // 1 minute later
        hash: "0x6f7a8b9c0d1e2f3a4b5c6d7e8f9a0b1c2d3e4f5a6b7c8d9e0f1a2b3c4d5e6f",
        tokenInputs: [
            {
                asset: USDC_ARBITRUM,
                amount: "75625000000" // 75,625 USDC
            }
        ],
        tokenOutputs: []
    },
    {
        userId: "0xb2a9c4e6-f8d1-4e7b-9a3c-5d2f8e1b4a7c",
        opportunityId: "2", // USDT-USDC LP
        type: TransactionType.Invest,
        timestamp: 1710057780, // 2 minutes later
        hash: "0x7a8b9c0d1e2f3a4b5c6d7e8f9a0b1c2d3e4f5a6b7c8d9e0f1a2b3c4d5e6f7a",
        tokenInputs: [
            {
                asset: USDT_ARBITRUM,
                amount: "75625000000", // 75,625 USDT
            },
            {
                asset: USDC_ARBITRUM,
                amount: "75625000000", // 75,625 USDC
            }
        ],
        tokenOutputs: [
            {
                asset: USDC_USDT_LP_ARB,
                amount: "1" // NFT position
            }
        ]
    }
];