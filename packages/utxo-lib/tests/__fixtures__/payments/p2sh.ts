export const fixtures = {
    valid: [
        {
            description: 'p2sh-*, out (from address)',
            arguments: {
                address: '3GETYP4cuSesh2zsPEEYVZqnRedwe4FwUT',
            },
            options: {},
            expected: {
                name: 'p2sh',
                hash: '9f840a5fc02407ef0ad499c2ec0eb0b942fb0086',
                output: 'OP_HASH160 9f840a5fc02407ef0ad499c2ec0eb0b942fb0086 OP_EQUAL',
                redeem: null,
                input: null,
                witness: null,
            },
        },
        {
            description: 'p2sh-*, out (from hash)',
            arguments: {
                hash: '9f840a5fc02407ef0ad499c2ec0eb0b942fb0086',
            },
            expected: {
                name: 'p2sh',
                address: '3GETYP4cuSesh2zsPEEYVZqnRedwe4FwUT',
                output: 'OP_HASH160 9f840a5fc02407ef0ad499c2ec0eb0b942fb0086 OP_EQUAL',
                redeem: null,
                input: null,
                witness: null,
            },
        },
        {
            description: 'p2sh-*, out (from output)',
            arguments: {
                output: 'OP_HASH160 9f840a5fc02407ef0ad499c2ec0eb0b942fb0086 OP_EQUAL',
            },
            expected: {
                name: 'p2sh',
                address: '3GETYP4cuSesh2zsPEEYVZqnRedwe4FwUT',
                hash: '9f840a5fc02407ef0ad499c2ec0eb0b942fb0086',
                redeem: null,
                input: null,
                witness: null,
            },
        },
        {
            description: 'p2sh-p2pkh, out (from redeem)',
            arguments: {
                redeem: {
                    address: 'this is P2PKH context, unknown and ignored by P2SH',
                    output: 'OP_DUP OP_HASH160 c30afa58ae0673b00a45b5c17dff4633780f1400 OP_EQUALVERIFY OP_CHECKSIG',
                },
            },
            expected: {
                name: 'p2sh',
                address: '3GETYP4cuSesh2zsPEEYVZqnRedwe4FwUT',
                hash: '9f840a5fc02407ef0ad499c2ec0eb0b942fb0086',
                output: 'OP_HASH160 9f840a5fc02407ef0ad499c2ec0eb0b942fb0086 OP_EQUAL',
                input: null,
                witness: null,
            },
        },
        {
            description: 'p2sh-p2wpkh, out (from redeem)',
            arguments: {
                redeem: {
                    hash: 'this is P2WPKH context, unknown and ignored by P2SH',
                    output: 'OP_0 c30afa58ae0673b00a45b5c17dff4633780f1400',
                },
            },
            expected: {
                name: 'p2sh',
                address: '325CuTNSYmvurXaBmhNFer5zDkKnDXZggu',
                hash: '0432515d8fe8de31be8207987fc6d67b29d5e7cc',
                output: 'OP_HASH160 0432515d8fe8de31be8207987fc6d67b29d5e7cc OP_EQUAL',
                input: null,
                witness: null,
            },
        },
        {
            description: 'p2sh-p2pk, out (from redeem)',
            arguments: {
                redeem: {
                    output: '03e15819590382a9dd878f01e2f0cbce541564eb415e43b440472d883ecd283058 OP_CHECKSIG',
                    pubkey: 'this is P2WPKH context, unknown and ignored by P2SH',
                },
            },
            expected: {
                name: 'p2sh',
                address: '36TibC8RrPB9WrBdPoGXhHqDHJosyFVtVQ',
                hash: '3454c084887afe854e80221c69d6282926f809c4',
                output: 'OP_HASH160 3454c084887afe854e80221c69d6282926f809c4 OP_EQUAL',
                input: null,
                witness: null,
            },
        },
        {
            description: 'p2sh-p2pkh, in and out (from redeem)',
            arguments: {
                redeem: {
                    output: 'OP_DUP OP_HASH160 c30afa58ae0673b00a45b5c17dff4633780f1400 OP_EQUALVERIFY OP_CHECKSIG',
                    input: '3045022100e4fce9ec72b609a2df1dc050c20dcf101d27faefb3e686b7a4cb067becdd5e8e022071287fced53806b08cf39b5ad58bbe614775b3776e98a9f8760af0d4d1d47a9501 03e15819590382a9dd878f01e2f0cbce541564eb415e43b440472d883ecd283058',
                },
            },
            expected: {
                name: 'p2sh',
                address: '3GETYP4cuSesh2zsPEEYVZqnRedwe4FwUT',
                hash: '9f840a5fc02407ef0ad499c2ec0eb0b942fb0086',
                output: 'OP_HASH160 9f840a5fc02407ef0ad499c2ec0eb0b942fb0086 OP_EQUAL',
                input: '3045022100e4fce9ec72b609a2df1dc050c20dcf101d27faefb3e686b7a4cb067becdd5e8e022071287fced53806b08cf39b5ad58bbe614775b3776e98a9f8760af0d4d1d47a9501 03e15819590382a9dd878f01e2f0cbce541564eb415e43b440472d883ecd283058 76a914c30afa58ae0673b00a45b5c17dff4633780f140088ac',
                witness: [],
            },
        },
        {
            description: 'p2sh-p2wpkh, in and out (from redeem w/ witness)',
            arguments: {
                redeem: {
                    output: 'OP_0 c30afa58ae0673b00a45b5c17dff4633780f1400',
                    input: '',
                    witness: [
                        '3045022100e4fce9ec72b609a2df1dc050c20dcf101d27faefb3e686b7a4cb067becdd5e8e022071287fced53806b08cf39b5ad58bbe614775b3776e98a9f8760af0d4d1d47a9501',
                        '03e15819590382a9dd878f01e2f0cbce541564eb415e43b440472d883ecd283058',
                    ],
                },
            },
            expected: {
                name: 'p2sh',
                address: '325CuTNSYmvurXaBmhNFer5zDkKnDXZggu',
                hash: '0432515d8fe8de31be8207987fc6d67b29d5e7cc',
                output: 'OP_HASH160 0432515d8fe8de31be8207987fc6d67b29d5e7cc OP_EQUAL',
                input: '0014c30afa58ae0673b00a45b5c17dff4633780f1400',
                witness: [
                    '3045022100e4fce9ec72b609a2df1dc050c20dcf101d27faefb3e686b7a4cb067becdd5e8e022071287fced53806b08cf39b5ad58bbe614775b3776e98a9f8760af0d4d1d47a9501',
                    '03e15819590382a9dd878f01e2f0cbce541564eb415e43b440472d883ecd283058',
                ],
            },
        },
        {
            description: 'p2sh-p2pk, in and out (from input)',
            arguments: {
                input: '3045022100e4fce9ec72b609a2df1dc050c20dcf101d27faefb3e686b7a4cb067becdd5e8e022071287fced53806b08cf39b5ad58bbe614775b3776e98a9f8760af0d4d1d47a9501 2103e15819590382a9dd878f01e2f0cbce541564eb415e43b440472d883ecd283058ac',
            },
            expected: {
                name: 'p2sh',
                address: '36TibC8RrPB9WrBdPoGXhHqDHJosyFVtVQ',
                hash: '3454c084887afe854e80221c69d6282926f809c4',
                output: 'OP_HASH160 3454c084887afe854e80221c69d6282926f809c4 OP_EQUAL',
                redeem: {
                    output: '03e15819590382a9dd878f01e2f0cbce541564eb415e43b440472d883ecd283058 OP_CHECKSIG',
                    input: '3045022100e4fce9ec72b609a2df1dc050c20dcf101d27faefb3e686b7a4cb067becdd5e8e022071287fced53806b08cf39b5ad58bbe614775b3776e98a9f8760af0d4d1d47a9501',
                    witness: [],
                },
                witness: [],
            },
        },
        {
            description: 'p2sh-p2wpkh, in and out (from input AND witness)',
            arguments: {
                input: '0014c30afa58ae0673b00a45b5c17dff4633780f1400',
                witness: [
                    '3045022100e4fce9ec72b609a2df1dc050c20dcf101d27faefb3e686b7a4cb067becdd5e8e022071287fced53806b08cf39b5ad58bbe614775b3776e98a9f8760af0d4d1d47a9501',
                    '03e15819590382a9dd878f01e2f0cbce541564eb415e43b440472d883ecd283058',
                ],
            },
            expected: {
                name: 'p2sh',
                address: '325CuTNSYmvurXaBmhNFer5zDkKnDXZggu',
                hash: '0432515d8fe8de31be8207987fc6d67b29d5e7cc',
                output: 'OP_HASH160 0432515d8fe8de31be8207987fc6d67b29d5e7cc OP_EQUAL',
                redeem: {
                    output: 'OP_0 c30afa58ae0673b00a45b5c17dff4633780f1400',
                    input: '',
                    witness: [
                        '3045022100e4fce9ec72b609a2df1dc050c20dcf101d27faefb3e686b7a4cb067becdd5e8e022071287fced53806b08cf39b5ad58bbe614775b3776e98a9f8760af0d4d1d47a9501',
                        '03e15819590382a9dd878f01e2f0cbce541564eb415e43b440472d883ecd283058',
                    ],
                },
            },
        },
        {
            description: 'p2sh-p2pkh, out (network derived from redeem)',
            arguments: {
                redeem: {
                    address: 'this is P2PKH context, unknown and ignored by P2SH',
                    output: 'OP_DUP OP_HASH160 c30afa58ae0673b00a45b5c17dff4633780f1400 OP_EQUALVERIFY OP_CHECKSIG',
                    network: 'testnet',
                },
            },
            expected: {
                name: 'p2sh',
                address: '2N7nfc7zeWuADtpdR4MrR7Wq3dzr7LxTCgS',
                hash: '9f840a5fc02407ef0ad499c2ec0eb0b942fb0086',
                output: 'OP_HASH160 9f840a5fc02407ef0ad499c2ec0eb0b942fb0086 OP_EQUAL',
                input: null,
                witness: null,
                network: 'testnet',
            },
        },
    ],
    invalid: [
        {
            exception: 'Not enough data',
            arguments: {},
        },
        {
            description: 'Non-minimally encoded (non BIP62 compliant)',
            exception:
                'Expected property "output" of type Buffer(Length: 23), got Buffer(Length: 24)',
            arguments: {
                outputHex: 'a94c14c286a1af0947f58d1ad787385b1c2c4a976f9e7187',
            },
        },
        {
            description: 'Expected OP_HASH160',
            exception: 'Output is invalid',
            options: {},
            arguments: {
                output: 'OP_HASH256 ffffffffffffffffffffffffffffffffffffffff OP_EQUAL',
            },
        },
        {
            description: 'Unexpected OP_RESERVED',
            exception: 'Output is invalid',
            arguments: {
                output: 'OP_HASH256 ffffffffffffffffffffffffffffffffffffff OP_EQUAL OP_RESERVED',
            },
        },
        {
            description: 'address.hash != H',
            exception: 'Hash mismatch',
            arguments: {
                address: '325CuTNSYmvurXaBmhNFer5zDkKnDXZggu',
                hash: 'ffffffffffffffffffffffffffffffffffffffff',
            },
        },
        {
            description: 'address.hash != output.hash',
            exception: 'Hash mismatch',
            arguments: {
                address: '325CuTNSYmvurXaBmhNFer5zDkKnDXZggu',
                output: 'OP_HASH160 ffffffffffffffffffffffffffffffffffffffff OP_EQUAL',
            },
        },
        {
            description: 'output.hash != H',
            exception: 'Hash mismatch',
            arguments: {
                hash: 'ffffffffffffffffffffffffffffffffffffffff',
                output: 'OP_HASH160 0432515d8fe8de31be8207987fc6d67b29d5e7cc OP_EQUAL',
            },
        },
        {
            description: 'H(redeem.output) != H',
            exception: 'Hash mismatch',
            arguments: {
                hash: 'ffffffffffffffffffffffffffffffffffffffff',
                redeem: {
                    output: '03e15819590382a9dd878f01e2f0cbce541564eb415e43b440472d883ecd283058 OP_CHECKSIG',
                },
            },
        },
        {
            exception: 'Invalid version or Network mismatch',
            arguments: {
                address: '134D6gYy8DsR5m4416BnmgASuMBqKvogQh',
            },
        },
        {
            exception: 'TYPjCiGbKiwP6r12cdkmVjySbQr7mb3r is too short',
            arguments: {
                address: 'TYPjCiGbKiwP6r12cdkmVjySbQr7mb3r',
            },
        },
        {
            exception: 'EDaBpuERpLssFzbCV1kgy8tKJsHrcwmzY7HDMF2 is too long',
            arguments: {
                address: 'EDaBpuERpLssFzbCV1kgy8tKJsHrcwmzY7HDMF2',
            },
        },
        {
            exception: 'Input too short',
            arguments: {
                input: '',
            },
        },
        {
            exception: 'Input too short',
            arguments: {
                inputHex: '01ff02ff',
            },
        },
        {
            exception: 'Input is invalid',
            arguments: {
                input: 'OP_0 OP_0',
            },
        },
        {
            exception: 'Redeem.input mismatch',
            arguments: {
                input: 'OP_0 02ffff',
                redeem: {
                    input: 'OP_CHECKSIG',
                    output: 'ffff',
                },
            },
        },
        {
            exception: 'Redeem.output mismatch',
            arguments: {
                input: 'OP_0 02ffff',
                redeem: {
                    input: 'OP_0',
                    output: 'fff3',
                },
            },
        },
        {
            exception: 'Redeem.output too short',
            arguments: {
                redeem: {
                    input: 'OP_0',
                    output: '',
                },
            },
        },
        {
            exception: 'Input and witness provided',
            arguments: {
                redeem: {
                    input: 'OP_0',
                    witness: ['030000000000000000000000000000000000000000000000000000000000000001'],
                },
            },
        },
        {
            exception: 'Non push-only scriptSig',
            arguments: {
                redeem: {
                    input: 'OP_RETURN',
                    output: 'OP_1',
                },
            },
        },
        {
            exception: 'Redeem.output too short',
            arguments: {
                inputHex: '021000',
            },
        },
        {
            exception: 'Witness and redeem.witness mismatch',
            arguments: {
                witness: [
                    '3045ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff',
                    '030000000000000000000000000000000000000000000000000000000000000001',
                ],
                redeem: {
                    witness: [
                        '3045dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd',
                        '030000000000000000000000000000000000000000000000000000000000000001',
                    ],
                },
            },
        },
        {
            exception: 'Hash mismatch',
            arguments: {
                hash: 'ffffffffffffffffffffffffffffffffffffffff',
                redeem: {
                    input: 'OP_0',
                    output: 'ffff',
                },
            },
        },
        {
            exception: 'Network mismatch',
            arguments: {
                network: 'bitcoin',
                redeem: {
                    network: 'testnet',
                },
            },
        },
        {
            exception: 'Network mismatch',
            arguments: {
                network: 'testnet',
                redeem: {
                    network: 'bitcoin',
                },
            },
        },
        {
            exception: 'Empty input',
            arguments: {
                inputHex: '01ff',
            },
        },
    ],
    dynamic: {
        depends: {
            address: ['address', 'output', 'hash', 'redeem.output', ['input', 'witness']],
            hash: ['address', 'output', 'hash', 'redeem.output', ['input', 'witness']],
            output: ['address', 'output', 'hash', 'redeem.output', ['input', 'witness']],
            'redeem.output': [['input', 'witness']],
            'redeem.input': [['input', 'witness']],
            'redeem.witness': [['input', 'witness']],
            input: ['redeem'],
            witness: ['redeem'],
        },
        details: [
            {
                description: 'p2sh-p2pkh',
                address: '3GETYP4cuSesh2zsPEEYVZqnRedwe4FwUT',
                hash: '9f840a5fc02407ef0ad499c2ec0eb0b942fb0086',
                output: 'OP_HASH160 9f840a5fc02407ef0ad499c2ec0eb0b942fb0086 OP_EQUAL',
                redeem: {
                    output: 'OP_DUP OP_HASH160 c30afa58ae0673b00a45b5c17dff4633780f1400 OP_EQUALVERIFY OP_CHECKSIG',
                    input: '3045022100e4fce9ec72b609a2df1dc050c20dcf101d27faefb3e686b7a4cb067becdd5e8e022071287fced53806b08cf39b5ad58bbe614775b3776e98a9f8760af0d4d1d47a9501 03e15819590382a9dd878f01e2f0cbce541564eb415e43b440472d883ecd283058',
                    witness: [],
                },
                input: '3045022100e4fce9ec72b609a2df1dc050c20dcf101d27faefb3e686b7a4cb067becdd5e8e022071287fced53806b08cf39b5ad58bbe614775b3776e98a9f8760af0d4d1d47a9501 03e15819590382a9dd878f01e2f0cbce541564eb415e43b440472d883ecd283058 76a914c30afa58ae0673b00a45b5c17dff4633780f140088ac',
                witness: [],
            },
            {
                description: 'p2sh-p2wpkh',
                address: '325CuTNSYmvurXaBmhNFer5zDkKnDXZggu',
                hash: '0432515d8fe8de31be8207987fc6d67b29d5e7cc',
                output: 'OP_HASH160 0432515d8fe8de31be8207987fc6d67b29d5e7cc OP_EQUAL',
                redeem: {
                    output: 'OP_0 c30afa58ae0673b00a45b5c17dff4633780f1400',
                    input: '',
                    witness: [
                        '3045022100e4fce9ec72b609a2df1dc050c20dcf101d27faefb3e686b7a4cb067becdd5e8e022071287fced53806b08cf39b5ad58bbe614775b3776e98a9f8760af0d4d1d47a9501',
                        '03e15819590382a9dd878f01e2f0cbce541564eb415e43b440472d883ecd283058',
                    ],
                },
                input: '0014c30afa58ae0673b00a45b5c17dff4633780f1400',
                witness: [
                    '3045022100e4fce9ec72b609a2df1dc050c20dcf101d27faefb3e686b7a4cb067becdd5e8e022071287fced53806b08cf39b5ad58bbe614775b3776e98a9f8760af0d4d1d47a9501',
                    '03e15819590382a9dd878f01e2f0cbce541564eb415e43b440472d883ecd283058',
                ],
            },
        ],
    },
};
