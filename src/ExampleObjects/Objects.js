let templateInventory = {
  id: "uuid4",
  name: "description",
  location: "location",
  locationDescription: "location description",
  dateDue: "ISO8601 date",
  completed: false,
  assignedTo: ["userId"],
  items: [
    {
      ref: "ref",
      description: "desc",
      unit: "",
      counts: [
        {
          id: "uuid",
          date: "ISO8601 date",
          value: "float",
          userId: "userID",
        },
      ],
      finalCount: "float",
    },
  ],
};

let templateUser = {
  id: 0000,
  name: "name",
  language: "lang",
  location: "location",
  privilegeLevel: "privilegeLevel",
};

let fakeInventory = [
  {
    id: "e2ee8358-d647-426e-9706-1e9eccbead18",
    name: "Harinas Despensa Casa Pau",
    location: "P001",
    locationDescription: "Casa Pau - despensa",
    dateDue: "2021-01-05T21:18:02+0100",
    completed: true,
    assignedTo: 001,
    items: [
      {
        ref: 1000001,
        description: "Maizena 250gr",
        unit: "c/u",
        counts: [
          {
            id: "80ad22e8-c886-448b-bcb9-bd22b93a9b0d",
            date: "2021-01-04T10:18:02+0100",
            value: "10,3",
            userId: 001,
          },
          {
            id: "7a5fef0b-2aa7-4b00-ac77-b6db3030f49c",
            date: "2021-01-04T10:18:12+0100",
            value: "7,3",
            userId: 001,
          },
        ],
        finalCount: "7,3",
      },
      {
        ref: 1000002,
        description: "Harina de Trigo AP KG",
        unit: "KG",
        counts: [
          {
            id: "636f4519-4128-41ea-89b9-fcc97dddcc4a",
            date: "2021-01-04T10:18:05+0100",
            value: "30,3",
            userId: 001,
          },
          {
            id: "54e85045-7353-4e91-a21e-54a577ee4899",
            date: "2021-01-04T10:18:13+0100",
            value: "33,3",
            userId: 001,
          },
          {
            id: "7705a669-7249-4d75-9111-c352542ac706",
            date: "2021-01-04T10:18:18+0100",
            value: "32,3",
            userId: 001,
          },
        ],
        finalCount: "33,3",
      },
      {
        ref: 1000003,
        description: "Harina Arroz Glutinosa Raykonnen 500gr",
        unit: "c/u",
        counts: [
          {
            id: "7b18a4ec-83c1-48b7-892e-70d45f765ed4",
            date: "2021-01-04T10:18:23+0100",
            value: "0,3",
            userId: 001,
          },
        ],
        finalCount: "0,3",
      },
    ],
  },
  {
    id: "9b0e7b04-c146-4b67-b4be-92d6cadc8710",
    name: "Tes Cocina Casa Pau",
    location: "P008",
    locationDescription: "Casa Pau - cocina",
    dateDue: "2021-01-05T21:18:02+0100",
    completed: false,
    assignedTo: 003,
    items: [
      {
        ref: 1000100,
        description: "Te Desayuno Hacendado 50 bolsas",
        unit: "c/u",
        counts: [],
        finalCount: null,
      },
      {
        ref: 1000101,
        description: "Organic matcha Jade Leaf 250gr",
        unit: "c/u",
        counts: [],
        finalCount: null,
      },
      {
        ref: 1000100,
        description: "Assam suelto KG",
        unit: "kg",
        counts: [],
        finalCount: null,
      },
    ],
  },
];

let fakeUsers = [
  {
    id: 0001,
    name: "Pau Costa",
    language: "es",
    location: "es",
    privilegeLevel: "user",
  },
  {
    id: 0002,
    name: "Miguel Muñoz",
    language: "es",
    location: "es",
    privilegeLevel: "supervisor",
  },
  {
    id: 0003,
    name: "Roberta Scoby",
    language: "en",
    location: "uk",
    privilegeLevel: "admin",
  },
];
