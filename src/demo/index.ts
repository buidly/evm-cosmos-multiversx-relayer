import { ethers } from 'ethers';
import { EvmClient, IbcClient, SigningClient, config } from '..';

async function main() {
  const signingClient = await SigningClient.init(config.cosmos.demo);

  const client = new IbcClient(signingClient);
  console.log('Sending TX');
  const tx = await client.sendGMPIbc(
    signingClient.getAddress(),
    ['0x1a71552966E3cd8e7D013a86461c60E10b1BEC09'],
    'Ganache-0',
    '0x873424B4cf0E6AF4d8402ee05Ed7CC324307df47',
    '10000'
  );
  console.log('Sent', tx);
}

async function evmApprove() {
  const evmClient = new EvmClient(config.evm['ganache-0']);
  const executeData =
    '0x09c5eabe00000000000000000000000000000000000000000000000000000000000000200000000000000000000000000000000000000000000000000000000000000d400000000000000000000000000000000000000000000000000000000000000040000000000000000000000000000000000000000000000000000000000000092000000000000000000000000000000000000000000000000000000000000008c000000000000000000000000000000000000000000000000000000000000005390000000000000000000000000000000000000000000000000000000000000080000000000000000000000000000000000000000000000000000000000000010000000000000000000000000000000000000000000000000000000000000002400000000000000000000000000000000000000000000000000000000000000003fe35aac1746d1c50d3ee8153a38687e87e35eeccf84d5897b3e34ecfd82d2db684d464dc08b40f9116e8ed8ef2cf1d00711954a473365794b7d5120617ef497e6bc84d0de097942cb52ce0d7defd9c8d5df4428df35338be59ea104bc6be156e0000000000000000000000000000000000000000000000000000000000000003000000000000000000000000000000000000000000000000000000000000006000000000000000000000000000000000000000000000000000000000000000a000000000000000000000000000000000000000000000000000000000000000e0000000000000000000000000000000000000000000000000000000000000001b617070726f7665436f6e747261637443616c6c576974684d696e740000000000000000000000000000000000000000000000000000000000000000000000001b617070726f7665436f6e747261637443616c6c576974684d696e740000000000000000000000000000000000000000000000000000000000000000000000001b617070726f7665436f6e747261637443616c6c576974684d696e740000000000000000000000000000000000000000000000000000000000000000000000000300000000000000000000000000000000000000000000000000000000000000600000000000000000000000000000000000000000000000000000000000000260000000000000000000000000000000000000000000000000000000000000046000000000000000000000000000000000000000000000000000000000000001e00000000000000000000000000000000000000000000000000000000000000100000000000000000000000000000000000000000000000000000000000000014000000000000000000000000074a010e8b8e6dc69135dbec8749cef55d5d092194f734a33ec49b710a6a3f980be5db93feb117f358b964f96f225a772f6e8b50d00000000000000000000000000000000000000000000000000000000000001a000000000000000000000000000000000000000000000000000000000000003e86482846bbb96f84389b40bc6319a4d7f36a2767d07b44e11a23cb222264e8e750000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000a64656d6f2d636861696e00000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000002d6178656c61723139396b6d35766a7575366564796a6c7778363277766d72367571656768797a3472776d79766b00000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000761786c555344410000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000001e000000000000000000000000000000000000000000000000000000000000001000000000000000000000000000000000000000000000000000000000000000140000000000000000000000000873424b4cf0e6af4d8402ee05ed7cc324307df474436e2af511a80d18513782cd17b5657f9538528a34b658b28707e37174b118700000000000000000000000000000000000000000000000000000000000001a00000000000000000000000000000000000000000000000000000000000002710d2e51c30ae6caeeb9de84eab9acc7889510d5996947910b83c1b483462aeb3c30000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000a64656d6f2d636861696e00000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000002d6178656c61723139396b6d35766a7575366564796a6c7778363277766d72367571656768797a3472776d79766b00000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000761786c555344410000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000001e000000000000000000000000000000000000000000000000000000000000001000000000000000000000000000000000000000000000000000000000000000140000000000000000000000000873424b4cf0e6af4d8402ee05ed7cc324307df479d3057ed964e004199e23d9f679f5b57d6ea9dc055d176a88cb6c2656612318d00000000000000000000000000000000000000000000000000000000000001a00000000000000000000000000000000000000000000000000000000000002710ede20a0292b9509501e3290487b6d059048bd1f0aa1eb68dae0bd6e0ba8aaa630000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000a64656d6f2d636861696e00000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000002d6178656c61723139396b6d35766a7575366564796a6c7778363277766d72367571656768797a3472776d79766b00000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000761786c5553444100000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000040000000000000000000000000000000000000000000000000000000000000000800000000000000000000000000000000000000000000000000000000000000140000000000000000000000000000000000000000000000000000000000000001e000000000000000000000000000000000000000000000000000000000000020000000000000000000000000000000000000000000000000000000000000000050000000000000000000000000c698d93c385e00bc732003d40fd1cb8c7e30ec20000000000000000000000002c4c5c7d900c033f6defcc3cf447f2ddba26e67d00000000000000000000000081ee9ee5f59e34cf5310da8dbe665da901a306cf0000000000000000000000008f2ffeed130ae516cfc0aa7e5e273de5b27a79b7000000000000000000000000c9235abe8608d3c2af71eef78c6314f600fcf6e50000000000000000000000000000000000000000000000000000000000000005000000000000000000000000000000000000000000000000000000000000000a000000000000000000000000000000000000000000000000000000000000000a000000000000000000000000000000000000000000000000000000000000000a000000000000000000000000000000000000000000000000000000000000000a000000000000000000000000000000000000000000000000000000000000000a0000000000000000000000000000000000000000000000000000000000000003000000000000000000000000000000000000000000000000000000000000006000000000000000000000000000000000000000000000000000000000000000e000000000000000000000000000000000000000000000000000000000000001600000000000000000000000000000000000000000000000000000000000000041c5e0cb1edc89e3bb98f21169ef8921d0843bd3aa03d0ae5e1c98d1148aacbfc929986ffcb8e78f23563948f81e1ed835772b9a6e3f276ec664103e49a2158e071c000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000041629b5a2de1be3df74da6d690be3aaade0e83c278153d4fff253192ad10b2ced96e9616c8fb5115820c53569092af40fd2d41ad612f0f789277464c6f9a5810b21b0000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000411c177f3a0212b2ea8139d7f710f63fad583ee16c9638eab834965c580355f6965de5a99642118a43d1489bd7d6300031e5aa9e95ed7b88acfbbae81deb04549f1b00000000000000000000000000000000000000000000000000000000000000';
  const tx1 = await evmClient.execute(executeData);
  console.log(tx1);

  // const tx2 = await evmClient.callContractWithToken()
}

main();
// evmApprove()