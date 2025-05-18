export default {
    title: 'CoralChain',
    subtitle: 'A Visual Gadget Collection for Exploring Blockchain Fundamentals',
    menu: {
      home: '🏠Home',
      getStarted: '🚀Get Started',
      learnBasics: '📚Learn the Basics',
      tryItOut: '🧪Try It Out',
      aboutUs: '👀About Us',
    },
    footer: '© 2025 CoralChain. Xinjian Zhang – University of Tartu',
    hello: 'Hello!',
    thisIs: 'This is...',
    school: 'University of Tartu, Estonia',
    thanksToSupervisor: 'Special thanks to my supervisor <strong class=" text-lg font-bold">Dr. Mubashar Iqbal</strong>!',
    copy: 'Copy',
    copied: 'Copied!',
    tryText: {
      lab1: 'Prerequisites',
      lab2: 'Installation & Startup',
      lab3: 'Docker Deployment (Recommended)',
      t1: 'You can run <strong class="font-bold">CoralChain</strong> locally on your machine.',
      t2: 'It built with <strong class="font-bold">Ruby</strong> and <strong class="font-bold">Sinatra</strong>.',
      t3: 'Below is a step-by-step guide to get started.',
      t4: 'Install <strong>Ruby</strong> (recommended version: &ge; 3.2).',
      t5: 'Install Ruby',
      t6: 'Install <strong>Bundler</strong> to manage dependencies, through <strong>Gem</strong> (Ruby package manager).',
      t7: 'Install Bundler',
      t8: 'Clone the Repository',
      t9: 'Enter the Project Directory',
      t10: 'Install Dependencies',
      t11: 'Run the Application',
      t12: 'Once started, open',
      t13: 'To quickly experience CoralChain, it is recommended to use Docker to run it in a containerized environment.',
      t14: 'Build and Start the Container',
      t15: 'Similarly, open'
    },
    basics: {
      blockchain: {
        title: "Blockchain",
        summary: "A blockchain is a distributed ledger composed of cryptographically linked blocks.",
        details: `A blockchain is a decentralized, immutable ledger composed of cryptographically linked blocks.
    Each block contains:
    • Verified transactions
    • Timestamp
    • Previous block hash
    
    This ensures integrity, traceability, and prevents tampering.
    
    Key Concepts:
    - SHA-256
    - Merkle Trees
    - Distributed Consensus`
      },
      node: {
        title: "Node",
        summary: "A node is a participant in the blockchain network, storing data and enforcing rules.",
        details: `Nodes participate in the blockchain by:
    • Validating and relaying transactions
    • Storing ledger data
    
    Types of nodes:
    • Full Node: Full blockchain, validates blocks
    • Light Node: Partial data, lighter computation
    • Validator/Miner: Propose and validate new blocks via consensus`
      },
      consensus: {
        title: "Consensus",
        summary: "Consensus mechanisms allow distributed nodes to agree on the blockchain's state.",
        details: `Consensus ensures that all nodes agree on the current state of the blockchain without a central authority.
    
    Types of consensus:
    • Proof of Work (PoW): Miners solve puzzles (e.g. Bitcoin)
    • Proof of Stake (PoS): Validators are selected based on staked assets (e.g. Ethereum 2.0)
    • Proof of Authority (PoA): Selected, trusted validators maintain the network (e.g. enterprise blockchains)
    
    Each has trade-offs in terms of energy, decentralization, and speed.`
      },
      gossip: {
        title: "Gossip Protocol",
        summary: "Gossip protocols spread data randomly across peers, like rumors in a network.",
        details: `In a gossip protocol:
    • Each node shares updates with a few random peers
    • Information spreads exponentially
    
    This model:
    • Is robust and decentralized
    • Enables rapid block/transaction propagation
    • Reduces single point of failure`
      },
      byzantine: {
        title: "Byzantine Fault",
        summary: "A Byzantine fault is when a node behaves arbitrarily or maliciously.",
        details: `Byzantine faults occur when nodes:
    • Send conflicting or incorrect information
    • Attempt to disrupt consensus
    
    BFT algorithms (e.g. PBFT, HotStuff, Tendermint) are designed to handle up to 1/3 of faulty nodes and still maintain network correctness.`
      },
      forks: {
        title: "Forks",
        summary: "Forks represent a divergence in blockchain history or protocol.",
        details: `Forks occur due to:
    • Conflicting block proposals
    • Protocol upgrades
    
    Types:
    • Soft Fork: Compatible updates
    • Hard Fork: Incompatible, splits chain
    
    Consensus rules usually resolve forks by selecting the longest valid chain.`
      },
      smartContracts: {
        title: "Smart Contracts",
        summary: "Smart contracts are programs that self-execute on the blockchain.",
        details: `Smart contracts are immutable, transparent scripts that enforce conditions like:
    • Payments
    • Token issuance
    • DAO governance
    
    Languages include Solidity (Ethereum), Rust (Solana), and Move (Aptos/Sui).`
      },
      hash: {
        title: "Hash Function",
        summary: "Hash functions transform input into fixed-size outputs securely.",
        details: `A cryptographic hash function:
    • Maps data → fixed-size digest
    • Is one-way, collision-resistant
    
    Used for:
    • Block integrity
    • Merkle roots
    • Digital signatures
    
    Popular algorithms: SHA-256, Keccak256`
      }
    },
    common: {
      expand: "Click to expand ▼",
      collapse: "Click to collapse ▲"
    },
    notFound: 'Page Not Found',
    pageNotExist: 'The page you are looking for does not exist or has been moved.',
    backToHome: 'Back to Home',
    startText: {
        lab1: '1. Block Operations & Verification',
        lab2: '2. Multi-Node Interaction & Synchronization',
        lab3: '3. Consensus & Network Simulation',
        lab4: 'Project Poster',
        t1: 'Create and validate blocks with hash linkage. Tamper data to simulate attacks and view verification results.',
        t2: 'Simulate independent nodes (A, B, X), trigger forks, inject fake chains, and resolve via longest-valid-chain rule.',
        t3: 'Compare PoW, PoA, and PoS performance with benchmarks. Simulate gossip propagation and export experiment results.',
        d1: 'Block Creation Using 2 Consensus Methods',
        d2: 'Blockchain Integrity Verification',
        d3: 'Block Tampering and Verification',
        d4: 'Block Generation and Tampering at Node A',
        d5: 'Block Generation at Node B Followed by Longest Chain Synchronization with Node A',
        d6: 'Fake Chain Generation by Byzantine Node X and Contamination of Node B',
        d7: 'Fork Simulation at Node A and Node B',
        d8: 'Consensus Performance: 50 Blocks Generated per Consensus Method (PoW, PoA, PoS)',
        d9: 'Comparing PoW, PoA, and PoS: 50 Blocks per Mechanism with Generation Time Analysis',
        d10: 'Mining Time under PoW: 10 Blocks per Difficulty Level (1–5 Prefix-Zero Levels)',
        d11: 'Gossip Propagation Simulation: Honest vs. Fake Message Spread Across 7 Nodes',
        nb: '* Note: All videos are silent demonstration recordings.',
        android: 'Android devices do not support embedded previews. Please click the link below to open.',
        poster: 'Open PDF Poster'
    }
  }