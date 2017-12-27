const FILTER_START_BLOCK_ROPSTEN = 1941956;//set to the earliest block either one of the factory contracts was created on
const FILTER_START_BLOCK = 4435671;
const BOP_FACTORY_ADDRESS = "";
const BOP_FACTORY_ADDRESS_ROPSTEN = "0xd50A2fe7FcB3a7f762f31952f6089e3f0F8fF23a";
const BOP_FACTORY_ABI = [{"constant":false,"inputs":[{"name":"payer","type":"address"},{"name":"serviceDeposit","type":"uint256"},{"name":"autoreleaseInterval","type":"uint256"},{"name":"title","type":"string"},{"name":"initialStatement","type":"string"}],"name":"newWorkableOpenPayment","outputs":[{"name":"","type":"address"}],"payable":true,"stateMutability":"payable","type":"function"},{"constant":true,"inputs":[{"name":"","type":"uint256"}],"name":"WOPs","outputs":[{"name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"getWOPCount","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"anonymous":false,"inputs":[{"indexed":true,"name":"newWOPAddress","type":"address"},{"indexed":false,"name":"payer","type":"address"},{"indexed":false,"name":"serviceDeposit","type":"uint256"},{"indexed":false,"name":"autoreleaseTime","type":"uint256"},{"indexed":false,"name":"title","type":"string"},{"indexed":false,"name":"initialStatement","type":"string"}],"name":"NewWOP","type":"event"}]
const BOP_ABI = [
    {
        "constant": true,
        "inputs": [],
        "name": "worker",
        "outputs": [
            {
                "name": "",
                "type": "address"
            }
        ],
        "payable": false,
        "stateMutability": "view",
        "type": "function"
    },
    {
        "constant": true,
        "inputs": [],
        "name": "title",
        "outputs": [
            {
                "name": "",
                "type": "string"
            }
        ],
        "payable": false,
        "stateMutability": "view",
        "type": "function"
    },
    {
        "constant": true,
        "inputs": [],
        "name": "state",
        "outputs": [
            {
                "name": "",
                "type": "uint8"
            }
        ],
        "payable": false,
        "stateMutability": "view",
        "type": "function"
    },
    {
        "constant": true,
        "inputs": [],
        "name": "serviceDeposit",
        "outputs": [
            {
                "name": "",
                "type": "uint256"
            }
        ],
        "payable": false,
        "stateMutability": "view",
        "type": "function"
    },
    {
        "constant": true,
        "inputs": [],
        "name": "amountBurned",
        "outputs": [
            {
                "name": "",
                "type": "uint256"
            }
        ],
        "payable": false,
        "stateMutability": "view",
        "type": "function"
    },
    {
        "constant": true,
        "inputs": [],
        "name": "amountDeposited",
        "outputs": [
            {
                "name": "",
                "type": "uint256"
            }
        ],
        "payable": false,
        "stateMutability": "view",
        "type": "function"
    },
    {
        "constant": true,
        "inputs": [],
        "name": "payer",
        "outputs": [
            {
                "name": "",
                "type": "address"
            }
        ],
        "payable": false,
        "stateMutability": "view",
        "type": "function"
    },
    {
        "constant": true,
        "inputs": [],
        "name": "amountReleased",
        "outputs": [
            {
                "name": "",
                "type": "uint256"
            }
        ],
        "payable": false,
        "stateMutability": "view",
        "type": "function"
    },
    {
        "constant": true,
        "inputs": [],
        "name": "autoreleaseTime",
        "outputs": [
            {
                "name": "",
                "type": "uint256"
            }
        ],
        "payable": false,
        "stateMutability": "view",
        "type": "function"
    },
    {
        "constant": true,
        "inputs": [],
        "name": "getFullState",
        "outputs": [
            {
                "name": "",
                "type": "address"
            },
            {
                "name": "",
                "type": "string"
            },
            {
                "name": "",
                "type": "uint8"
            },
            {
                "name": "",
                "type": "address"
            },
            {
                "name": "",
                "type": "uint256"
            },
            {
                "name": "",
                "type": "uint256"
            },
            {
                "name": "",
                "type": "uint256"
            },
            {
                "name": "",
                "type": "uint256"
            },
            {
                "name": "",
                "type": "uint256"
            },
            {
                "name": "",
                "type": "uint256"
            },
            {
                "name": "",
                "type": "uint256"
            }
        ],
        "payable": false,
        "stateMutability": "view",
        "type": "function"
    },
    {
        "constant": true,
        "inputs": [],
        "name": "autoreleaseInterval",
        "outputs": [
            {
                "name": "",
                "type": "uint256"
            }
        ],
        "payable": false,
        "stateMutability": "view",
        "type": "function"
    },
    {
        "anonymous": false,
        "inputs": [],
        "name": "Unclosed",
        "type": "event"
    },
    {
        "anonymous": false,
        "inputs": [],
        "name": "AutoreleaseDelayed",
        "type": "event"
    },
    {
        "anonymous": false,
        "inputs": [
            {
                "indexed": false,
                "name": "statement",
                "type": "string"
            }
        ],
        "name": "PayerStatement",
        "type": "event"
    },
    {
        "constant": false,
        "inputs": [],
        "name": "delayAutorelease",
        "outputs": [],
        "payable": false,
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "anonymous": false,
        "inputs": [
            {
                "indexed": false,
                "name": "amount",
                "type": "uint256"
            }
        ],
        "name": "FundsReleased",
        "type": "event"
    },
    {
        "constant": false,
        "inputs": [
            {
                "name": "amount",
                "type": "uint256"
            }
        ],
        "name": "burn",
        "outputs": [],
        "payable": false,
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "anonymous": false,
        "inputs": [],
        "name": "FundsRecovered",
        "type": "event"
    },
    {
        "inputs": [
            {
                "name": "_payer",
                "type": "address"
            },
            {
                "name": "_serviceDeposit",
                "type": "uint256"
            },
            {
                "name": "_autoreleaseInterval",
                "type": "uint256"
            },
            {
                "name": "_title",
                "type": "string"
            },
            {
                "name": "initialStatement",
                "type": "string"
            }
        ],
        "payable": true,
        "stateMutability": "payable",
        "type": "constructor"
    },
    {
        "anonymous": false,
        "inputs": [
            {
                "indexed": false,
                "name": "amount",
                "type": "uint256"
            }
        ],
        "name": "FundsBurned",
        "type": "event"
    },
    {
        "constant": false,
        "inputs": [
            {
                "name": "statement",
                "type": "string"
            }
        ],
        "name": "logWorkerStatement",
        "outputs": [],
        "payable": false,
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "anonymous": false,
        "inputs": [
            {
                "indexed": false,
                "name": "from",
                "type": "address"
            },
            {
                "indexed": false,
                "name": "amount",
                "type": "uint256"
            }
        ],
        "name": "FundsAdded",
        "type": "event"
    },
    {
        "constant": false,
        "inputs": [
            {
                "name": "amount",
                "type": "uint256"
            }
        ],
        "name": "release",
        "outputs": [],
        "payable": false,
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "anonymous": false,
        "inputs": [
            {
                "indexed": false,
                "name": "statement",
                "type": "string"
            }
        ],
        "name": "WorkerStatement",
        "type": "event"
    },
    {
        "anonymous": false,
        "inputs": [],
        "name": "AutoreleaseTriggered",
        "type": "event"
    },
    {
        "anonymous": false,
        "inputs": [],
        "name": "Closed",
        "type": "event"
    },
    {
        "anonymous": false,
        "inputs": [
            {
                "indexed": false,
                "name": "worker",
                "type": "address"
            }
        ],
        "name": "Committed",
        "type": "event"
    },
    {
        "anonymous": false,
        "inputs": [
            {
                "indexed": true,
                "name": "contractAddress",
                "type": "address"
            },
            {
                "indexed": false,
                "name": "payer",
                "type": "address"
            },
            {
                "indexed": false,
                "name": "serviceDeposit",
                "type": "uint256"
            },
            {
                "indexed": false,
                "name": "autoreleaseInterval",
                "type": "uint256"
            },
            {
                "indexed": false,
                "name": "title",
                "type": "string"
            }
        ],
        "name": "Created",
        "type": "event"
    },
    {
        "constant": false,
        "inputs": [],
        "name": "commit",
        "outputs": [],
        "payable": true,
        "stateMutability": "payable",
        "type": "function"
    },
    {
        "constant": false,
        "inputs": [],
        "name": "addFunds",
        "outputs": [],
        "payable": true,
        "stateMutability": "payable",
        "type": "function"
    },
    {
        "constant": false,
        "inputs": [],
        "name": "recoverFunds",
        "outputs": [],
        "payable": false,
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "constant": false,
        "inputs": [],
        "name": "triggerAutorelease",
        "outputs": [],
        "payable": false,
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "constant": false,
        "inputs": [
            {
                "name": "statement",
                "type": "string"
            }
        ],
        "name": "logPayerStatement",
        "outputs": [],
        "payable": false,
        "stateMutability": "nonpayable",
        "type": "function"
    }
]
