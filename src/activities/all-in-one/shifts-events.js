'use strict';

const data =
{
  Events: [
    {
      FromDate: '2017-01-01',
      FromTime: '08:00:00',
      Note: {
        Content: 'Shift A',
        Files: [],
        Glyphs: [],
        TargetEntityId: 'e6661a17-ca51-4367-89aa-e3e6e029d7bb',
        TargetFieldId: null,
        id: 'f50d5620-5b2e-42fd-ad2f-9a2319dc365a'
      },
      ToDate: '2017-01-01',
      ToTime: '18:00:00',
      id: 'e6661a17-ca51-4367-89aa-e3e6e029d7bb'
    },
    {
      FromDate: '2017-01-01',
      FromTime: '08:00:00',
      Note: {
        Content: 'Shift B',
        Files: [],
        Glyphs: [],
        TargetEntityId: 'c0c81884-7e05-48d0-9855-3442d2bfd55f',
        TargetFieldId: null,
        id: 'f1c23069-9dd8-401c-9d98-e705ec210109'
      },
      ToDate: '2017-01-01',
      ToTime: '18:00:00',
      id: 'c0c81884-7e05-48d0-9855-3442d2bfd55f'
    },
    {
      FromDate: '2017-01-01',
      FromTime: '05:00:00',
      Note: {
        Content: 'SwissConnect',
        Files: [],
        Glyphs: [],
        TargetEntityId: 'c51f793f-6d03-4d0b-b0d9-6670d8ee7565',
        TargetFieldId: null,
        id: 'd9eaf1ec-bd27-4a77-95d2-7584c47d588c'
      },
      ToDate: '2017-01-01',
      ToTime: '23:00:00',
      id: 'c51f793f-6d03-4d0b-b0d9-6670d8ee7565'
    },
    {
      FromDate: '2017-01-02',
      FromTime: '08:00:00',
      Note: {
        Content: 'Shift A',
        Files: [],
        Glyphs: [],
        TargetEntityId: 'b5b08255-55a7-4298-8bf2-a729612aba65',
        TargetFieldId: null,
        id: 'e09f3aaf-e252-4387-bdc9-36ff31ceed6a'
      },
      ToDate: '2017-01-02',
      ToTime: '18:00:00',
      id: 'b5b08255-55a7-4298-8bf2-a729612aba65'
    },
    {
      FromDate: '2017-01-02',
      FromTime: '08:00:00',
      Note: {
        Content: 'Shift B',
        Files: [],
        Glyphs: [],
        TargetEntityId: 'cfede320-3c41-4a24-aae2-fd058b02a65f',
        TargetFieldId: null,
        id: 'a569ad4a-a096-4953-9e63-1fee762dbaf1'
      },
      ToDate: '2017-01-02',
      ToTime: '18:00:00',
      id: 'cfede320-3c41-4a24-aae2-fd058b02a65f'
    },
    {
      FromDate: '2017-01-02',
      FromTime: '05:00:00',
      Note: {
        Content: 'SwissConnect',
        Files: [],
        Glyphs: [],
        TargetEntityId: 'a7bed1f2-8e99-443f-9ece-911abf709a9e',
        TargetFieldId: null,
        id: 'e9485c6c-4ba2-4ea8-92b8-8fe5d4de1c45'
      },
      ToDate: '2017-01-02',
      ToTime: '23:00:00',
      id: 'a7bed1f2-8e99-443f-9ece-911abf709a9e'
    },
    {
      FromDate: '2017-01-03',
      FromTime: '08:00:00',
      Note: {
        Content: 'Shift A',
        Files: [],
        Glyphs: [],
        TargetEntityId: 'd6a5c57d-5101-4a94-87ee-32829c1d1e4f',
        TargetFieldId: null,
        id: 'f512b3e4-bc0f-4100-8792-985670688115'
      },
      ToDate: '2017-01-03',
      ToTime: '18:00:00',
      id: 'd6a5c57d-5101-4a94-87ee-32829c1d1e4f'
    },
    {
      FromDate: '2017-01-03',
      FromTime: '08:00:00',
      Note: {
        Content: 'Shift B',
        Files: [],
        Glyphs: [],
        TargetEntityId: 'd4430d9e-a700-4237-9226-b2752bd9d691',
        TargetFieldId: null,
        id: 'eca95733-37b4-436c-91d0-a53f17604ded'
      },
      ToDate: '2017-01-03',
      ToTime: '18:00:00',
      id: 'd4430d9e-a700-4237-9226-b2752bd9d691'
    },
    {
      FromDate: '2017-01-03',
      FromTime: '05:00:00',
      Note: {
        Content: 'SwissConnect',
        Files: [],
        Glyphs: [],
        TargetEntityId: 'f45535c1-52b4-4bb4-bf1e-68e9fae31adf',
        TargetFieldId: null,
        id: 'd7270060-7540-40cf-8b2a-83cb43337583'
      },
      ToDate: '2017-01-03',
      ToTime: '23:00:00',
      id: 'f45535c1-52b4-4bb4-bf1e-68e9fae31adf'
    },
    {
      FromDate: '2017-01-04',
      FromTime: '08:00:00',
      Note: {
        Content: 'Shift A',
        Files: [],
        Glyphs: [],
        TargetEntityId: 'cb84fc1e-f137-449f-bb8a-ca355beec120',
        TargetFieldId: null,
        id: 'ddbd7b2f-f7cb-4028-b042-737ac198270d'
      },
      ToDate: '2017-01-04',
      ToTime: '18:00:00',
      id: 'cb84fc1e-f137-449f-bb8a-ca355beec120'
    },
    {
      FromDate: '2017-01-04',
      FromTime: '08:00:00',
      Note: {
        Content: 'Shift B',
        Files: [],
        Glyphs: [],
        TargetEntityId: 'e52f9bb8-bd78-45ff-a3c8-cee03ecd6730',
        TargetFieldId: null,
        id: 'e0bc8d7a-3c73-41a1-980d-09663d1994a0'
      },
      ToDate: '2017-01-04',
      ToTime: '18:00:00',
      id: 'e52f9bb8-bd78-45ff-a3c8-cee03ecd6730'
    },
    {
      FromDate: '2017-01-04',
      FromTime: '05:00:00',
      Note: {
        Content: 'SwissConnect',
        Files: [],
        Glyphs: [],
        TargetEntityId: 'ccea64df-7dc5-443f-b0d2-507431202c7a',
        TargetFieldId: null,
        id: 'c98a5b73-9c78-4446-a585-1b4b7c1ddb60'
      },
      ToDate: '2017-01-04',
      ToTime: '23:00:00',
      id: 'ccea64df-7dc5-443f-b0d2-507431202c7a'
    },
    {
      FromDate: '2017-01-05',
      FromTime: '08:00:00',
      Note: {
        Content: 'Shift A',
        Files: [],
        Glyphs: [],
        TargetEntityId: 'faee9a24-ba06-4ebb-9cf1-2c283e3aca87',
        TargetFieldId: null,
        id: 'fe6e9901-45db-434f-a107-bf032b1e713f'
      },
      ToDate: '2017-01-05',
      ToTime: '18:00:00',
      id: 'faee9a24-ba06-4ebb-9cf1-2c283e3aca87'
    },
    {
      FromDate: '2017-01-05',
      FromTime: '08:00:00',
      Note: {
        Content: 'Shift B',
        Files: [],
        Glyphs: [],
        TargetEntityId: 'd9e91f28-036b-4db4-bcf1-b1514cb95a2c',
        TargetFieldId: null,
        id: 'e5f7d0e4-66fb-414b-bbf6-c3e1e2ad3256'
      },
      ToDate: '2017-01-05',
      ToTime: '18:00:00',
      id: 'd9e91f28-036b-4db4-bcf1-b1514cb95a2c'
    },
    {
      FromDate: '2017-01-05',
      FromTime: '05:00:00',
      Note: {
        Content: 'SwissConnect',
        Files: [],
        Glyphs: [],
        TargetEntityId: 'e6b5f46a-da4e-4a9d-a925-c8fc13bbb246',
        TargetFieldId: null,
        id: 'fab21820-4a48-4f88-8e39-27f52ee9ce1d'
      },
      ToDate: '2017-01-05',
      ToTime: '23:00:00',
      id: 'e6b5f46a-da4e-4a9d-a925-c8fc13bbb246'
    },
    {
      FromDate: '2017-01-06',
      FromTime: '08:00:00',
      Note: {
        Content: 'Shift A',
        Files: [],
        Glyphs: [],
        TargetEntityId: 'f5657b3e-4f7b-444a-9511-f39ebf89794c',
        TargetFieldId: null,
        id: 'f1143517-30cf-4a6b-91b2-dc8a2373a584'
      },
      ToDate: '2017-01-06',
      ToTime: '18:00:00',
      id: 'f5657b3e-4f7b-444a-9511-f39ebf89794c'
    },
    {
      FromDate: '2017-01-06',
      FromTime: '08:00:00',
      Note: {
        Content: 'Shift B',
        Files: [],
        Glyphs: [],
        TargetEntityId: 'da3c8149-e4aa-44d3-9e98-b60cadb41177',
        TargetFieldId: null,
        id: 'e96d014d-a5e5-40e3-8b2f-1015ec45ad7d'
      },
      ToDate: '2017-01-06',
      ToTime: '18:00:00',
      id: 'da3c8149-e4aa-44d3-9e98-b60cadb41177'
    },
    {
      FromDate: '2017-01-06',
      FromTime: '05:00:00',
      Note: {
        Content: 'SwissConnect',
        Files: [],
        Glyphs: [],
        TargetEntityId: 'a73eff8d-815f-4f4c-a04f-49d0ba7e15ee',
        TargetFieldId: null,
        id: 'd067ce4a-75b6-4fa1-ab68-bfe4fb22a13a'
      },
      ToDate: '2017-01-06',
      ToTime: '23:00:00',
      id: 'a73eff8d-815f-4f4c-a04f-49d0ba7e15ee'
    },
    {
      FromDate: '2017-01-07',
      FromTime: '08:00:00',
      Note: {
        Content: 'Shift A',
        Files: [],
        Glyphs: [],
        TargetEntityId: 'df02fbe6-a119-4071-8917-04ba10025411',
        TargetFieldId: null,
        id: 'd7a7f4ca-12d6-4605-a0ef-8f0e6bacad6c'
      },
      ToDate: '2017-01-07',
      ToTime: '18:00:00',
      id: 'df02fbe6-a119-4071-8917-04ba10025411'
    },
    {
      FromDate: '2017-01-07',
      FromTime: '08:00:00',
      Note: {
        Content: 'Shift B',
        Files: [],
        Glyphs: [],
        TargetEntityId: 'dbe373e3-644b-4eab-ab61-d85b5e585fbe',
        TargetFieldId: null,
        id: 'cf8b92c6-5505-4a91-a413-ae222d4072eb'
      },
      ToDate: '2017-01-07',
      ToTime: '18:00:00',
      id: 'dbe373e3-644b-4eab-ab61-d85b5e585fbe'
    },
    {
      FromDate: '2017-01-07',
      FromTime: '05:00:00',
      Note: {
        Content: 'SwissConnect',
        Files: [],
        Glyphs: [],
        TargetEntityId: 'b7635a97-db08-47e3-b8dd-382f89251d81',
        TargetFieldId: null,
        id: 'c0f83b1c-4215-4d5b-8a85-7092ee6dcb0a'
      },
      ToDate: '2017-01-07',
      ToTime: '23:00:00',
      id: 'b7635a97-db08-47e3-b8dd-382f89251d81'
    },
    {
      FromDate: '2017-01-08',
      FromTime: '08:00:00',
      Note: {
        Content: 'Shift A',
        Files: [],
        Glyphs: [],
        TargetEntityId: 'd750b8a4-03b2-40d1-97b5-7bac787b1fb1',
        TargetFieldId: null,
        id: 'd7e365db-5e6f-4acc-971b-5293e9275a1d'
      },
      ToDate: '2017-01-08',
      ToTime: '18:00:00',
      id: 'd750b8a4-03b2-40d1-97b5-7bac787b1fb1'
    },
    {
      FromDate: '2017-01-08',
      FromTime: '08:00:00',
      Note: {
        Content: 'Shift B',
        Files: [],
        Glyphs: [],
        TargetEntityId: 'f9326745-f82f-49cf-9576-6b3f2a343c8e',
        TargetFieldId: null,
        id: 'c97a6dea-beb3-4514-bae7-c66f999b87cb'
      },
      ToDate: '2017-01-08',
      ToTime: '18:00:00',
      id: 'f9326745-f82f-49cf-9576-6b3f2a343c8e'
    },
    {
      FromDate: '2017-01-08',
      FromTime: '05:00:00',
      Note: {
        Content: 'SwissConnect',
        Files: [],
        Glyphs: [],
        TargetEntityId: 'c6e293a1-bd05-4e0d-a13e-fefa6f6e5948',
        TargetFieldId: null,
        id: 'd1ff7484-d596-4fa6-8ec2-3c8a6a611dc9'
      },
      ToDate: '2017-01-08',
      ToTime: '23:00:00',
      id: 'c6e293a1-bd05-4e0d-a13e-fefa6f6e5948'
    },
    {
      FromDate: '2017-01-09',
      FromTime: '08:00:00',
      Note: {
        Content: 'Shift A',
        Files: [],
        Glyphs: [],
        TargetEntityId: 'c73161b8-44f6-4e52-a3a3-04d8a2f41bad',
        TargetFieldId: null,
        id: 'b89a7583-9ffd-4848-b9d5-024db802cdb3'
      },
      ToDate: '2017-01-09',
      ToTime: '18:00:00',
      id: 'c73161b8-44f6-4e52-a3a3-04d8a2f41bad'
    },
    {
      FromDate: '2017-01-09',
      FromTime: '08:00:00',
      Note: {
        Content: 'Shift B',
        Files: [],
        Glyphs: [],
        TargetEntityId: 'e4bb71a3-aa1f-42e6-bf48-1f7e643168db',
        TargetFieldId: null,
        id: 'fe601053-1902-4c96-ac5c-e361f96a17ee'
      },
      ToDate: '2017-01-09',
      ToTime: '18:00:00',
      id: 'e4bb71a3-aa1f-42e6-bf48-1f7e643168db'
    },
    {
      FromDate: '2017-01-09',
      FromTime: '05:00:00',
      Note: {
        Content: 'SwissConnect',
        Files: [],
        Glyphs: [],
        TargetEntityId: 'cf84528e-cc7e-4047-ace5-24c5405e01f7',
        TargetFieldId: null,
        id: 'ce6c8827-655c-4022-87e2-6595411c3c8f'
      },
      ToDate: '2017-01-09',
      ToTime: '23:00:00',
      id: 'cf84528e-cc7e-4047-ace5-24c5405e01f7'
    },
    {
      FromDate: '2017-01-10',
      FromTime: '08:00:00',
      Note: {
        Content: 'Shift A',
        Files: [],
        Glyphs: [],
        TargetEntityId: 'dbfef5e1-8783-4c39-ae9d-255dd560d482',
        TargetFieldId: null,
        id: 'cac3744a-0369-4f8a-b777-fc69cd8eccd5'
      },
      ToDate: '2017-01-10',
      ToTime: '18:00:00',
      id: 'dbfef5e1-8783-4c39-ae9d-255dd560d482'
    },
    {
      FromDate: '2017-01-10',
      FromTime: '08:00:00',
      Note: {
        Content: 'Shift B',
        Files: [],
        Glyphs: [],
        TargetEntityId: 'dd6d8087-fc16-4c89-98d2-b2e722f798bd',
        TargetFieldId: null,
        id: 'c0b18afd-373d-48ab-98b6-18c204b92fcb'
      },
      ToDate: '2017-01-10',
      ToTime: '18:00:00',
      id: 'dd6d8087-fc16-4c89-98d2-b2e722f798bd'
    },
    {
      FromDate: '2017-01-10',
      FromTime: '05:00:00',
      Note: {
        Content: 'SwissConnect',
        Files: [],
        Glyphs: [],
        TargetEntityId: 'afd52988-deac-4d66-8471-4f321502cb47',
        TargetFieldId: null,
        id: 'e25e9fcf-6110-4f02-8b1f-3544cdc36970'
      },
      ToDate: '2017-01-10',
      ToTime: '23:00:00',
      id: 'afd52988-deac-4d66-8471-4f321502cb47'
    },
    {
      FromDate: '2017-01-11',
      FromTime: '08:00:00',
      Note: {
        Content: 'Shift A',
        Files: [],
        Glyphs: [],
        TargetEntityId: 'be3e30c0-328b-48c7-a27e-0b60476ace2c',
        TargetFieldId: null,
        id: 'cc7be312-dd2b-427b-8215-dec0f716df70'
      },
      ToDate: '2017-01-11',
      ToTime: '18:00:00',
      id: 'be3e30c0-328b-48c7-a27e-0b60476ace2c'
    },
    {
      FromDate: '2017-01-11',
      FromTime: '08:00:00',
      Note: {
        Content: 'Shift B',
        Files: [],
        Glyphs: [],
        TargetEntityId: 'd9482d07-af31-4659-a12f-ad2eea79a331',
        TargetFieldId: null,
        id: 'b37ebea2-0c36-4e0d-ae2d-c7a036511df7'
      },
      ToDate: '2017-01-11',
      ToTime: '18:00:00',
      id: 'd9482d07-af31-4659-a12f-ad2eea79a331'
    },
    {
      FromDate: '2017-01-11',
      FromTime: '05:00:00',
      Note: {
        Content: 'SwissConnect',
        Files: [],
        Glyphs: [],
        TargetEntityId: 'e009e3b8-40d9-4388-9729-150f79ab85ea',
        TargetFieldId: null,
        id: 'fd63e9ba-13a3-4b29-8a80-4f068ecb523c'
      },
      ToDate: '2017-01-11',
      ToTime: '23:00:00',
      id: 'e009e3b8-40d9-4388-9729-150f79ab85ea'
    },
    {
      FromDate: '2017-01-12',
      FromTime: '08:00:00',
      Note: {
        Content: 'Shift A',
        Files: [],
        Glyphs: [],
        TargetEntityId: 'aaacbaf0-cffb-40f8-9de5-1e8ce392b808',
        TargetFieldId: null,
        id: 'fd6edcac-992b-4c7a-88f8-a0d4ad3cb093'
      },
      ToDate: '2017-01-12',
      ToTime: '18:00:00',
      id: 'aaacbaf0-cffb-40f8-9de5-1e8ce392b808'
    },
    {
      FromDate: '2017-01-12',
      FromTime: '08:00:00',
      Note: {
        Content: 'Shift B',
        Files: [],
        Glyphs: [],
        TargetEntityId: 'ca644156-8fb0-4559-a1ce-476a2b346c64',
        TargetFieldId: null,
        id: 'f7051a22-73f6-4b31-8493-42f90ce72974'
      },
      ToDate: '2017-01-12',
      ToTime: '18:00:00',
      id: 'ca644156-8fb0-4559-a1ce-476a2b346c64'
    },
    {
      FromDate: '2017-01-12',
      FromTime: '05:00:00',
      Note: {
        Content: 'SwissConnect',
        Files: [],
        Glyphs: [],
        TargetEntityId: 'cb1d6fcb-579d-4085-8f9d-70f388202267',
        TargetFieldId: null,
        id: 'cf7a9022-97b9-460e-a693-7dc90674f149'
      },
      ToDate: '2017-01-12',
      ToTime: '23:00:00',
      id: 'cb1d6fcb-579d-4085-8f9d-70f388202267'
    },
    {
      FromDate: '2017-01-13',
      FromTime: '08:00:00',
      Note: {
        Content: 'Shift A',
        Files: [],
        Glyphs: [],
        TargetEntityId: 'c9a08fb0-d594-4d07-9fa4-e26ad0b2e10e',
        TargetFieldId: null,
        id: 'f4e26c6d-51b4-4709-960e-f0a17af7b55c'
      },
      ToDate: '2017-01-13',
      ToTime: '18:00:00',
      id: 'c9a08fb0-d594-4d07-9fa4-e26ad0b2e10e'
    },
    {
      FromDate: '2017-01-13',
      FromTime: '08:00:00',
      Note: {
        Content: 'Shift B',
        Files: [],
        Glyphs: [],
        TargetEntityId: 'debd61b7-9aaa-462d-b304-5307b42adbbd',
        TargetFieldId: null,
        id: 'd0074a2b-3729-474b-a119-0f85495433a4'
      },
      ToDate: '2017-01-13',
      ToTime: '18:00:00',
      id: 'debd61b7-9aaa-462d-b304-5307b42adbbd'
    },
    {
      FromDate: '2017-01-13',
      FromTime: '05:00:00',
      Note: {
        Content: 'SwissConnect',
        Files: [],
        Glyphs: [],
        TargetEntityId: 'f626b8fc-9e63-44fe-a782-ad63c1b5c6bd',
        TargetFieldId: null,
        id: 'd656146e-dbc4-4db5-a33d-148f2b39e78e'
      },
      ToDate: '2017-01-13',
      ToTime: '23:00:00',
      id: 'f626b8fc-9e63-44fe-a782-ad63c1b5c6bd'
    },
    {
      FromDate: '2017-01-14',
      FromTime: '08:00:00',
      Note: {
        Content: 'Shift A',
        Files: [],
        Glyphs: [],
        TargetEntityId: 'eb13fc6c-9c85-48d5-b6a4-4c46437e3adc',
        TargetFieldId: null,
        id: 'b1f0ffa5-a6ab-4152-a75e-12f450b820f9'
      },
      ToDate: '2017-01-14',
      ToTime: '18:00:00',
      id: 'eb13fc6c-9c85-48d5-b6a4-4c46437e3adc'
    },
    {
      FromDate: '2017-01-14',
      FromTime: '08:00:00',
      Note: {
        Content: 'Shift B',
        Files: [],
        Glyphs: [],
        TargetEntityId: 'dd1c1439-1f5f-4974-be8a-c8cc033759f6',
        TargetFieldId: null,
        id: 'f4133e8e-f964-4f7a-af3a-cabba9aa5187'
      },
      ToDate: '2017-01-14',
      ToTime: '18:00:00',
      id: 'dd1c1439-1f5f-4974-be8a-c8cc033759f6'
    },
    {
      FromDate: '2017-01-14',
      FromTime: '05:00:00',
      Note: {
        Content: 'SwissConnect',
        Files: [],
        Glyphs: [],
        TargetEntityId: 'd32d3c1a-e454-4145-aba2-0b46d2a99347',
        TargetFieldId: null,
        id: 'f5b5bb2c-f740-4b18-928a-8479cd6290bf'
      },
      ToDate: '2017-01-14',
      ToTime: '23:00:00',
      id: 'd32d3c1a-e454-4145-aba2-0b46d2a99347'
    },
    {
      FromDate: '2017-01-15',
      FromTime: '08:00:00',
      Note: {
        Content: 'Shift A',
        Files: [],
        Glyphs: [],
        TargetEntityId: 'dea78ea6-c12f-4ef1-843d-c225f0232d4e',
        TargetFieldId: null,
        id: 'f79453ac-98aa-4eef-a850-da48766afb25'
      },
      ToDate: '2017-01-15',
      ToTime: '18:00:00',
      id: 'dea78ea6-c12f-4ef1-843d-c225f0232d4e'
    },
    {
      FromDate: '2017-01-15',
      FromTime: '08:00:00',
      Note: {
        Content: 'Shift B',
        Files: [],
        Glyphs: [],
        TargetEntityId: 'c17a0d0c-f709-4e16-865e-2e0b951280f5',
        TargetFieldId: null,
        id: 'dc5b7857-02b9-49df-a513-3492d6a97781'
      },
      ToDate: '2017-01-15',
      ToTime: '18:00:00',
      id: 'c17a0d0c-f709-4e16-865e-2e0b951280f5'
    },
    {
      FromDate: '2017-01-15',
      FromTime: '05:00:00',
      Note: {
        Content: 'SwissConnect',
        Files: [],
        Glyphs: [],
        TargetEntityId: 'f6d10e82-5085-4045-bb24-0f11e5db297d',
        TargetFieldId: null,
        id: 'ecc27a89-16cc-4415-b9ca-e3cdf4da97f6'
      },
      ToDate: '2017-01-15',
      ToTime: '23:00:00',
      id: 'f6d10e82-5085-4045-bb24-0f11e5db297d'
    },
    {
      FromDate: '2017-01-16',
      FromTime: '08:00:00',
      Note: {
        Content: 'Shift A',
        Files: [],
        Glyphs: [],
        TargetEntityId: 'cb051336-a7ec-42e2-8f7e-7f72f3e3cefb',
        TargetFieldId: null,
        id: 'c1519f91-11d5-4b31-9003-5d94e117da79'
      },
      ToDate: '2017-01-16',
      ToTime: '18:00:00',
      id: 'cb051336-a7ec-42e2-8f7e-7f72f3e3cefb'
    },
    {
      FromDate: '2017-01-16',
      FromTime: '08:00:00',
      Note: {
        Content: 'Shift B',
        Files: [],
        Glyphs: [],
        TargetEntityId: 'fa99f0a5-b327-4594-b7a4-1e6983fa092f',
        TargetFieldId: null,
        id: 'c3b6d28a-52c2-4a38-89af-4b428dbb011c'
      },
      ToDate: '2017-01-16',
      ToTime: '18:00:00',
      id: 'fa99f0a5-b327-4594-b7a4-1e6983fa092f'
    },
    {
      FromDate: '2017-01-16',
      FromTime: '05:00:00',
      Note: {
        Content: 'SwissConnect',
        Files: [],
        Glyphs: [],
        TargetEntityId: 'd473a3bd-fa83-41d2-b079-d19c514c9f3f',
        TargetFieldId: null,
        id: 'ddc0cc5d-95e3-44ea-8b46-ebeb1e4a6010'
      },
      ToDate: '2017-01-16',
      ToTime: '23:00:00',
      id: 'd473a3bd-fa83-41d2-b079-d19c514c9f3f'
    },
    {
      FromDate: '2017-01-17',
      FromTime: '08:00:00',
      Note: {
        Content: 'Shift A',
        Files: [],
        Glyphs: [],
        TargetEntityId: 'dd65345b-db8f-4293-9bea-b548ee1bb3f1',
        TargetFieldId: null,
        id: 'c4d286d2-cb7a-480d-84e8-78250e848b79'
      },
      ToDate: '2017-01-17',
      ToTime: '18:00:00',
      id: 'dd65345b-db8f-4293-9bea-b548ee1bb3f1'
    },
    {
      FromDate: '2017-01-17',
      FromTime: '08:00:00',
      Note: {
        Content: 'Shift B',
        Files: [],
        Glyphs: [],
        TargetEntityId: 'd4c9bd98-4f90-4939-a5f4-96b899c16011',
        TargetFieldId: null,
        id: 'f0164bfa-dd49-455f-836b-15e553196948'
      },
      ToDate: '2017-01-17',
      ToTime: '18:00:00',
      id: 'd4c9bd98-4f90-4939-a5f4-96b899c16011'
    },
    {
      FromDate: '2017-01-17',
      FromTime: '05:00:00',
      Note: {
        Content: 'SwissConnect',
        Files: [],
        Glyphs: [],
        TargetEntityId: 'd41067e4-79fe-4571-af51-75608793e254',
        TargetFieldId: null,
        id: 'bd9635f8-f15f-4bd8-ab95-6e5c9ac0d2b7'
      },
      ToDate: '2017-01-17',
      ToTime: '23:00:00',
      id: 'd41067e4-79fe-4571-af51-75608793e254'
    },
    {
      FromDate: '2017-01-18',
      FromTime: '08:00:00',
      Note: {
        Content: 'Shift A',
        Files: [],
        Glyphs: [],
        TargetEntityId: 'd341f528-3d70-43e7-b1e5-a790cabfff89',
        TargetFieldId: null,
        id: 'f050f5a9-568c-4242-8f8f-23ede3cf66e5'
      },
      ToDate: '2017-01-18',
      ToTime: '18:00:00',
      id: 'd341f528-3d70-43e7-b1e5-a790cabfff89'
    },
    {
      FromDate: '2017-01-18',
      FromTime: '08:00:00',
      Note: {
        Content: 'Shift B',
        Files: [],
        Glyphs: [],
        TargetEntityId: 'f1758666-f1a8-45e5-ae6d-2be331431fcd',
        TargetFieldId: null,
        id: 'cc91b382-2058-4d60-be4b-acf003a14da3'
      },
      ToDate: '2017-01-18',
      ToTime: '18:00:00',
      id: 'f1758666-f1a8-45e5-ae6d-2be331431fcd'
    },
    {
      FromDate: '2017-01-18',
      FromTime: '05:00:00',
      Note: {
        Content: 'SwissConnect',
        Files: [],
        Glyphs: [],
        TargetEntityId: 'c142437b-5e34-457e-abd0-5737658127a6',
        TargetFieldId: null,
        id: 'dee78569-b160-4b41-84bb-aab0fd8d4972'
      },
      ToDate: '2017-01-18',
      ToTime: '23:00:00',
      id: 'c142437b-5e34-457e-abd0-5737658127a6'
    },
    {
      FromDate: '2017-01-19',
      FromTime: '08:00:00',
      Note: {
        Content: 'Shift A',
        Files: [],
        Glyphs: [],
        TargetEntityId: 'de1e4ab3-0a08-4745-b2d9-04f81d440d7b',
        TargetFieldId: null,
        id: 'f984685b-a361-4742-a906-8b9d2a29cdac'
      },
      ToDate: '2017-01-19',
      ToTime: '18:00:00',
      id: 'de1e4ab3-0a08-4745-b2d9-04f81d440d7b'
    },
    {
      FromDate: '2017-01-19',
      FromTime: '08:00:00',
      Note: {
        Content: 'Shift B',
        Files: [],
        Glyphs: [],
        TargetEntityId: 'db685f84-7662-4dcf-8244-87fc8f62bccd',
        TargetFieldId: null,
        id: 'c570e1c2-d8a9-4be7-ba8b-757de23ba6f6'
      },
      ToDate: '2017-01-19',
      ToTime: '18:00:00',
      id: 'db685f84-7662-4dcf-8244-87fc8f62bccd'
    },
    {
      FromDate: '2017-01-19',
      FromTime: '05:00:00',
      Note: {
        Content: 'SwissConnect',
        Files: [],
        Glyphs: [],
        TargetEntityId: 'b0ab4c25-f208-40ce-aed4-f74585fc7deb',
        TargetFieldId: null,
        id: 'e8b3b722-db5f-45bb-acc6-e1d7f2354e76'
      },
      ToDate: '2017-01-19',
      ToTime: '23:00:00',
      id: 'b0ab4c25-f208-40ce-aed4-f74585fc7deb'
    },
    {
      FromDate: '2017-01-20',
      FromTime: '08:00:00',
      Note: {
        Content: 'Shift A',
        Files: [],
        Glyphs: [],
        TargetEntityId: 'afeed067-2555-4bc5-a57b-1206af36057e',
        TargetFieldId: null,
        id: 'fe3d10da-4b2c-4a33-ad7e-bd83627673dd'
      },
      ToDate: '2017-01-20',
      ToTime: '18:00:00',
      id: 'afeed067-2555-4bc5-a57b-1206af36057e'
    },
    {
      FromDate: '2017-01-20',
      FromTime: '08:00:00',
      Note: {
        Content: 'Shift B',
        Files: [],
        Glyphs: [],
        TargetEntityId: 'c7ac3309-c922-4779-ae92-99866f01d48d',
        TargetFieldId: null,
        id: 'fb4d2523-a52a-4ebe-a14b-cf2e4ed5087c'
      },
      ToDate: '2017-01-20',
      ToTime: '18:00:00',
      id: 'c7ac3309-c922-4779-ae92-99866f01d48d'
    },
    {
      FromDate: '2017-01-20',
      FromTime: '05:00:00',
      Note: {
        Content: 'SwissConnect',
        Files: [],
        Glyphs: [],
        TargetEntityId: 'f66d2220-2625-4ec2-9ddb-bf8938a7bb87',
        TargetFieldId: null,
        id: 'ee0d38e5-99fa-4958-ace0-827a2837e450'
      },
      ToDate: '2017-01-20',
      ToTime: '23:00:00',
      id: 'f66d2220-2625-4ec2-9ddb-bf8938a7bb87'
    },
    {
      FromDate: '2017-01-21',
      FromTime: '08:00:00',
      Note: {
        Content: 'Shift A',
        Files: [],
        Glyphs: [],
        TargetEntityId: 'b6974029-c537-4762-bb05-17ac07187c27',
        TargetFieldId: null,
        id: 'cb64f76b-5f37-4975-aab0-b12822241689'
      },
      ToDate: '2017-01-21',
      ToTime: '18:00:00',
      id: 'b6974029-c537-4762-bb05-17ac07187c27'
    },
    {
      FromDate: '2017-01-21',
      FromTime: '08:00:00',
      Note: {
        Content: 'Shift B',
        Files: [],
        Glyphs: [],
        TargetEntityId: 'c50d0c29-dc2d-40f3-ae60-976d34626cc6',
        TargetFieldId: null,
        id: 'fc2a016d-c804-4600-a8d6-c386b85f12bb'
      },
      ToDate: '2017-01-21',
      ToTime: '18:00:00',
      id: 'c50d0c29-dc2d-40f3-ae60-976d34626cc6'
    },
    {
      FromDate: '2017-01-21',
      FromTime: '05:00:00',
      Note: {
        Content: 'SwissConnect',
        Files: [],
        Glyphs: [],
        TargetEntityId: 'd6008898-dd2b-4311-9418-b9839fad7c84',
        TargetFieldId: null,
        id: 'e20c7664-3405-4a4f-af72-d66f6ad1ddaf'
      },
      ToDate: '2017-01-21',
      ToTime: '23:00:00',
      id: 'd6008898-dd2b-4311-9418-b9839fad7c84'
    },
    {
      FromDate: '2017-01-22',
      FromTime: '08:00:00',
      Note: {
        Content: 'Shift A',
        Files: [],
        Glyphs: [],
        TargetEntityId: 'b12a749a-8875-43f1-b450-b96cf31b4fd9',
        TargetFieldId: null,
        id: 'e4b8ba91-272d-4520-b82c-aa92e4ca0c2c'
      },
      ToDate: '2017-01-22',
      ToTime: '18:00:00',
      id: 'b12a749a-8875-43f1-b450-b96cf31b4fd9'
    },
    {
      FromDate: '2017-01-22',
      FromTime: '08:00:00',
      Note: {
        Content: 'Shift B',
        Files: [],
        Glyphs: [],
        TargetEntityId: 'f5d83acb-97d6-4998-b496-59fd27f443a4',
        TargetFieldId: null,
        id: 'c7fa13aa-3432-43db-83a0-08815f7af71c'
      },
      ToDate: '2017-01-22',
      ToTime: '18:00:00',
      id: 'f5d83acb-97d6-4998-b496-59fd27f443a4'
    },
    {
      FromDate: '2017-01-22',
      FromTime: '05:00:00',
      Note: {
        Content: 'SwissConnect',
        Files: [],
        Glyphs: [],
        TargetEntityId: 'd7abd509-57c5-46c7-8197-dc0c5de6f567',
        TargetFieldId: null,
        id: 'ceb9fd9b-3072-4f94-b7b2-4e46bb505961'
      },
      ToDate: '2017-01-22',
      ToTime: '23:00:00',
      id: 'd7abd509-57c5-46c7-8197-dc0c5de6f567'
    },
    {
      FromDate: '2017-01-23',
      FromTime: '08:00:00',
      Note: {
        Content: 'Shift A',
        Files: [],
        Glyphs: [],
        TargetEntityId: 'c4bedca9-2a31-48a0-b5a3-7f65520ce225',
        TargetFieldId: null,
        id: 'f2618ca7-f67d-4752-9cb7-ec5c7bbd56b6'
      },
      ToDate: '2017-01-23',
      ToTime: '18:00:00',
      id: 'c4bedca9-2a31-48a0-b5a3-7f65520ce225'
    },
    {
      FromDate: '2017-01-23',
      FromTime: '08:00:00',
      Note: {
        Content: 'Shift B',
        Files: [],
        Glyphs: [],
        TargetEntityId: 'ae410658-eb73-48fa-9501-5408f0c0c1e1',
        TargetFieldId: null,
        id: 'f10da0c6-3ae3-4715-8c62-708d37f07207'
      },
      ToDate: '2017-01-23',
      ToTime: '18:00:00',
      id: 'ae410658-eb73-48fa-9501-5408f0c0c1e1'
    },
    {
      FromDate: '2017-01-23',
      FromTime: '05:00:00',
      Note: {
        Content: 'SwissConnect',
        Files: [],
        Glyphs: [],
        TargetEntityId: 'd939a2a5-7734-44f4-a9be-771829bb2a71',
        TargetFieldId: null,
        id: 'fd0bbce3-0adb-4ab2-b21c-cdb1bceae7f7'
      },
      ToDate: '2017-01-23',
      ToTime: '23:00:00',
      id: 'd939a2a5-7734-44f4-a9be-771829bb2a71'
    },
    {
      FromDate: '2017-01-24',
      FromTime: '08:00:00',
      Note: {
        Content: 'Shift A',
        Files: [],
        Glyphs: [],
        TargetEntityId: 'cbfbcd2f-05d9-4c56-81ef-91b6e8bf9e02',
        TargetFieldId: null,
        id: 'd525b1aa-8eaa-4119-99a6-de77a52cdd48'
      },
      ToDate: '2017-01-24',
      ToTime: '18:00:00',
      id: 'cbfbcd2f-05d9-4c56-81ef-91b6e8bf9e02'
    },
    {
      FromDate: '2017-01-24',
      FromTime: '08:00:00',
      Note: {
        Content: 'Shift B',
        Files: [],
        Glyphs: [],
        TargetEntityId: 'cec5d50d-730d-489a-82dc-02669dc8d914',
        TargetFieldId: null,
        id: 'd467d00c-bd59-4320-9385-2d91b31ed968'
      },
      ToDate: '2017-01-24',
      ToTime: '18:00:00',
      id: 'cec5d50d-730d-489a-82dc-02669dc8d914'
    },
    {
      FromDate: '2017-01-24',
      FromTime: '05:00:00',
      Note: {
        Content: 'SwissConnect',
        Files: [],
        Glyphs: [],
        TargetEntityId: 'e3740947-6a1d-4322-aebc-ed972103dadb',
        TargetFieldId: null,
        id: 'b0825652-6353-494d-9f99-ec61beb12635'
      },
      ToDate: '2017-01-24',
      ToTime: '23:00:00',
      id: 'e3740947-6a1d-4322-aebc-ed972103dadb'
    },
    {
      FromDate: '2017-01-25',
      FromTime: '08:00:00',
      Note: {
        Content: 'Shift A',
        Files: [],
        Glyphs: [],
        TargetEntityId: 'cc58b8a2-0b31-454f-99d6-8dba1c6f4632',
        TargetFieldId: null,
        id: 'd89b1fe6-fd44-4fa5-82eb-0262d7685c58'
      },
      ToDate: '2017-01-25',
      ToTime: '18:00:00',
      id: 'cc58b8a2-0b31-454f-99d6-8dba1c6f4632'
    },
    {
      FromDate: '2017-01-25',
      FromTime: '08:00:00',
      Note: {
        Content: 'Shift B',
        Files: [],
        Glyphs: [],
        TargetEntityId: 'c49c24ea-61b3-4e3a-9af2-0ab724cec305',
        TargetFieldId: null,
        id: 'fbb518e4-15c5-4105-9a21-a9bd1c2e83e1'
      },
      ToDate: '2017-01-25',
      ToTime: '18:00:00',
      id: 'c49c24ea-61b3-4e3a-9af2-0ab724cec305'
    },
    {
      FromDate: '2017-01-25',
      FromTime: '05:00:00',
      Note: {
        Content: 'SwissConnect',
        Files: [],
        Glyphs: [],
        TargetEntityId: 'f33c2374-ef9a-4606-ac49-5c181c651f2f',
        TargetFieldId: null,
        id: 'ef56216f-cc85-42cd-a9f5-44db930c11de'
      },
      ToDate: '2017-01-25',
      ToTime: '23:00:00',
      id: 'f33c2374-ef9a-4606-ac49-5c181c651f2f'
    },
    {
      FromDate: '2017-01-26',
      FromTime: '08:00:00',
      Note: {
        Content: 'Shift A',
        Files: [],
        Glyphs: [],
        TargetEntityId: 'f6851800-d58b-41a3-b755-8e7ac1bff2c2',
        TargetFieldId: null,
        id: 'fbbf7f8b-6500-4400-a1e3-3f2b9bffec43'
      },
      ToDate: '2017-01-26',
      ToTime: '18:00:00',
      id: 'f6851800-d58b-41a3-b755-8e7ac1bff2c2'
    },
    {
      FromDate: '2017-01-26',
      FromTime: '08:00:00',
      Note: {
        Content: 'Shift B',
        Files: [],
        Glyphs: [],
        TargetEntityId: 'd83b8d0e-f370-4cd8-8399-cd03a82a3ce0',
        TargetFieldId: null,
        id: 'e83de198-ad84-4cd4-bf58-bfda0dc100c8'
      },
      ToDate: '2017-01-26',
      ToTime: '18:00:00',
      id: 'd83b8d0e-f370-4cd8-8399-cd03a82a3ce0'
    },
    {
      FromDate: '2017-01-26',
      FromTime: '05:00:00',
      Note: {
        Content: 'SwissConnect',
        Files: [],
        Glyphs: [],
        TargetEntityId: 'c0df64f1-d171-443e-840f-268804bca582',
        TargetFieldId: null,
        id: 'c1cc18b2-2f42-430b-8572-f772ff67e76d'
      },
      ToDate: '2017-01-26',
      ToTime: '23:00:00',
      id: 'c0df64f1-d171-443e-840f-268804bca582'
    },
    {
      FromDate: '2017-01-27',
      FromTime: '08:00:00',
      Note: {
        Content: 'Shift A',
        Files: [],
        Glyphs: [],
        TargetEntityId: 'ea6de41c-248b-4fe9-b2db-7fd5f4dbe6b3',
        TargetFieldId: null,
        id: 'a82b5ffc-4fd9-497a-8c3f-d8f7b6f3cc21'
      },
      ToDate: '2017-01-27',
      ToTime: '18:00:00',
      id: 'ea6de41c-248b-4fe9-b2db-7fd5f4dbe6b3'
    },
    {
      FromDate: '2017-01-27',
      FromTime: '08:00:00',
      Note: {
        Content: 'Shift B',
        Files: [],
        Glyphs: [],
        TargetEntityId: 'c0ecceb1-418a-437b-b43e-d013a0d63582',
        TargetFieldId: null,
        id: 'ceabeb56-5424-4953-8832-ab1e058c452b'
      },
      ToDate: '2017-01-27',
      ToTime: '18:00:00',
      id: 'c0ecceb1-418a-437b-b43e-d013a0d63582'
    },
    {
      FromDate: '2017-01-27',
      FromTime: '05:00:00',
      Note: {
        Content: 'SwissConnect',
        Files: [],
        Glyphs: [],
        TargetEntityId: 'ef3a74e2-c0a1-4f08-8cbf-536538417f5c',
        TargetFieldId: null,
        id: 'fcf05a02-fd8d-4196-ad24-6e0c445eb9d8'
      },
      ToDate: '2017-01-27',
      ToTime: '23:00:00',
      id: 'ef3a74e2-c0a1-4f08-8cbf-536538417f5c'
    },
    {
      FromDate: '2017-01-28',
      FromTime: '08:00:00',
      Note: {
        Content: 'Shift A',
        Files: [],
        Glyphs: [],
        TargetEntityId: 'c08465b1-7a30-475e-911f-e8834c80d7b8',
        TargetFieldId: null,
        id: 'f8683aa1-a085-4698-a6e7-eb10e4022abc'
      },
      ToDate: '2017-01-28',
      ToTime: '18:00:00',
      id: 'c08465b1-7a30-475e-911f-e8834c80d7b8'
    },
    {
      FromDate: '2017-01-28',
      FromTime: '08:00:00',
      Note: {
        Content: 'Shift B',
        Files: [],
        Glyphs: [],
        TargetEntityId: 'd0389c89-fd86-4c41-92f2-8932658f4f1e',
        TargetFieldId: null,
        id: 'd3c550d8-bbf2-436b-99b5-52e927dd717a'
      },
      ToDate: '2017-01-28',
      ToTime: '18:00:00',
      id: 'd0389c89-fd86-4c41-92f2-8932658f4f1e'
    },
    {
      FromDate: '2017-01-28',
      FromTime: '05:00:00',
      Note: {
        Content: 'SwissConnect',
        Files: [],
        Glyphs: [],
        TargetEntityId: 'fbcda60f-7e45-490c-8302-f1f7cd9179f2',
        TargetFieldId: null,
        id: 'e9b76315-3aec-410c-9360-9e930d54aca9'
      },
      ToDate: '2017-01-28',
      ToTime: '23:00:00',
      id: 'fbcda60f-7e45-490c-8302-f1f7cd9179f2'
    },
    {
      FromDate: '2017-01-29',
      FromTime: '08:00:00',
      Note: {
        Content: 'Shift A',
        Files: [],
        Glyphs: [],
        TargetEntityId: 'c8adaf2d-9ba2-49ef-bd47-bb7d112ac2b9',
        TargetFieldId: null,
        id: 'f91d902f-efb2-41cc-b22f-9a77379d6b07'
      },
      ToDate: '2017-01-29',
      ToTime: '18:00:00',
      id: 'c8adaf2d-9ba2-49ef-bd47-bb7d112ac2b9'
    },
    {
      FromDate: '2017-01-29',
      FromTime: '08:00:00',
      Note: {
        Content: 'Shift B',
        Files: [],
        Glyphs: [],
        TargetEntityId: 'dfb67170-c88f-4fff-a237-2547bada449e',
        TargetFieldId: null,
        id: 'cc67d68c-d5bb-4fc2-9347-3d205540cffc'
      },
      ToDate: '2017-01-29',
      ToTime: '18:00:00',
      id: 'dfb67170-c88f-4fff-a237-2547bada449e'
    },
    {
      FromDate: '2017-01-29',
      FromTime: '05:00:00',
      Note: {
        Content: 'SwissConnect',
        Files: [],
        Glyphs: [],
        TargetEntityId: 'e055d7ec-c1f7-48b8-84ec-eff7cd7622e7',
        TargetFieldId: null,
        id: 'd7db1925-05b3-4953-8b35-9be75914b2d9'
      },
      ToDate: '2017-01-29',
      ToTime: '23:00:00',
      id: 'e055d7ec-c1f7-48b8-84ec-eff7cd7622e7'
    },
    {
      FromDate: '2017-01-30',
      FromTime: '08:00:00',
      Note: {
        Content: 'Shift A',
        Files: [],
        Glyphs: [],
        TargetEntityId: 'a35b0759-a1d6-43c2-b53a-9238f930d3fa',
        TargetFieldId: null,
        id: 'fb7e4095-abab-4289-9328-dacce848eedd'
      },
      ToDate: '2017-01-30',
      ToTime: '18:00:00',
      id: 'a35b0759-a1d6-43c2-b53a-9238f930d3fa'
    },
    {
      FromDate: '2017-01-30',
      FromTime: '08:00:00',
      Note: {
        Content: 'Shift B',
        Files: [],
        Glyphs: [],
        TargetEntityId: 'b6df391e-fce8-4590-bc4e-b2edede980fe',
        TargetFieldId: null,
        id: 'b913414e-a2d1-4a82-adcc-5de8e84ff2b7'
      },
      ToDate: '2017-01-30',
      ToTime: '18:00:00',
      id: 'b6df391e-fce8-4590-bc4e-b2edede980fe'
    },
    {
      FromDate: '2017-01-30',
      FromTime: '05:00:00',
      Note: {
        Content: 'SwissConnect',
        Files: [],
        Glyphs: [],
        TargetEntityId: 'afc8449f-1a57-4f41-81e6-9df4b95f4636',
        TargetFieldId: null,
        id: 'c9a136a7-9b3c-4173-bdf6-e416184d5126'
      },
      ToDate: '2017-01-30',
      ToTime: '23:00:00',
      id: 'afc8449f-1a57-4f41-81e6-9df4b95f4636'
    },
    {
      FromDate: '2017-01-31',
      FromTime: '08:00:00',
      Note: {
        Content: 'Shift A',
        Files: [],
        Glyphs: [],
        TargetEntityId: 'd754ac16-88b2-4763-83d2-c7613468fd2d',
        TargetFieldId: null,
        id: 'c5974d50-206a-44ae-8d53-0a75d9ef7b24'
      },
      ToDate: '2017-01-31',
      ToTime: '18:00:00',
      id: 'd754ac16-88b2-4763-83d2-c7613468fd2d'
    },
    {
      FromDate: '2017-01-31',
      FromTime: '08:00:00',
      Note: {
        Content: 'Shift B',
        Files: [],
        Glyphs: [],
        TargetEntityId: 'a6757aeb-63d0-44d5-be43-4ef12c0d701b',
        TargetFieldId: null,
        id: 'ec3fecb8-859b-4444-9368-b562adbbf9f6'
      },
      ToDate: '2017-01-31',
      ToTime: '18:00:00',
      id: 'a6757aeb-63d0-44d5-be43-4ef12c0d701b'
    },
    {
      FromDate: '2017-01-31',
      FromTime: '05:00:00',
      Note: {
        Content: 'SwissConnect',
        Files: [],
        Glyphs: [],
        TargetEntityId: 'c97c60b4-0a02-4f6b-baf4-cdf7c95cef0a',
        TargetFieldId: null,
        id: 'fc0bc486-21d1-43a6-8e76-bb0ec36b8c00'
      },
      ToDate: '2017-01-31',
      ToTime: '23:00:00',
      id: 'c97c60b4-0a02-4f6b-baf4-cdf7c95cef0a'
    },
  ],
  FromDate: '2017-01-01',
  Name: 'Calendrier des shifts 2017',
  ToDate: '2017-12-31',
  id: 'e01bfe30-41cd-4c5d-8bc2-d84c93f5a330'
};

module.exports = {data};
