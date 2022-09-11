export const GENRE_NAMES = {
  SELF_HELP: 'Self Help',
  SPIRITUALITY: 'Spirituality',
  SCI_FI: 'Sci Fi',
  ROMANCE: 'Romance',
  TECH: 'Tech',
  PRODUCT_MANAGEMENT: 'Product Management',
};

export const BOOKS_DB = {
  [GENRE_NAMES.SELF_HELP]: [
    {
      name: 'Atomic Habits',
      link: 'https://www.amazon.in/Atomic-Habits-James-Clear/dp/1847941834/ref=sr_1_2?crid=2ZKD08J25LUFB&keywords=atomic+habits&qid=1662864202&sprefix=atomic+habit%2Caps%2C223&sr=8-2',
      rating: 4.5,
      author: 'James Clear',
    },
    {
      name: 'Hooked',
      link: 'https://www.amazon.in/Hooked-How-Build-Habit-Forming-Products/dp/0241184835/ref=sr_1_2?crid=68VYGWND5OQA&keywords=Hooked&qid=1662864257&sprefix=hooke%2Caps%2C205&sr=8-2',
      rating: 4.5,
      author: 'Nir Eyal',
    },
    {
      name: 'Deep Work',
      link: 'https://www.amazon.in/Deep-Work-Focused-Success-Distracted/dp/0349413681/ref=sr_1_3?crid=2WZ90GNSKC2VJ&keywords=Deep+work&qid=1662864312&sprefix=deep+work%2Caps%2C205&sr=8-3',
      rating: 4.5,
      author: 'Cal Newport',
    },
    {
      name: 'How to win friends and influence people',
      link: 'https://www.amazon.in/How-Win-Friends-Influence-People/dp/8194790891/ref=sr_1_1_sspa?keywords=how+to+win+friends+and+influence+people&qid=1662864370&sprefix=howq+to%2Caps%2C202&sr=8-1-spons&psc=1&spLa=ZW5jcnlwdGVkUXVhbGlmaWVyPUEzOTNJUlFWNENCQkQzJmVuY3J5cHRlZElkPUEwOTE4NDEwMkQ0TUcwOExCR08zUyZlbmNyeXB0ZWRBZElkPUEwMTE2NDEwMVRJNjROME1PMVpDOSZ3aWRnZXROYW1lPXNwX2F0ZiZhY3Rpb249Y2xpY2tSZWRpcmVjdCZkb05vdExvZ0NsaWNrPXRydWU=',
      rating: 4.5,
      author: 'Dale Carnegie',
    },
    {
      name: 'Rich Dad Poor Dad',
      link: 'https://www.amazon.in/Rich-Dad-Poor-Middle-Anniversary/dp/1612681131/ref=sr_1_3?keywords=rich+dad+poor+dad+book&qid=1662864444&sprefix=rich+dad%2Caps%2C202&sr=8-3',
      rating: 4.5,
      author: 'Robert T. Kiyosaki',
    },
  ],
  [GENRE_NAMES.SPIRITUALITY]: [
    {
      name: 'Inner Engineering',
      link: 'https://www.amazon.in/Inner-Engineering-Yogis-Guide-Joy/dp/0143428845/ref=sr_1_1?keywords=inner+engineering+by+sadhguru+in+english&qid=1662864544&sprefix=Inner+Eng%2Caps%2C203&sr=8-1',
      rating: 4.5,
      author: 'Sadhguru',
    },
    {
      name: "Karma : A Yogi's Guide to Crafting Your Destiny",
      link: 'https://www.amazon.in/Karma-PUBLISHERS-BESTSELLER-spirituality-self-improvement/dp/0143452673/ref=sr_1_3?crid=3RNVKPG75QPFC&keywords=Karma&qid=1662864605&sprefix=karma%2Caps%2C204&sr=8-3',
      rating: 4.5,
      author: 'Sadhguru',
    },
    {
      name: 'Death; An Inside Story: A book for all those who shall die',
      link: 'https://www.amazon.in/Death-Inside-Story-those-shall/dp/0143450832/ref=sr_1_3?crid=1VTLS1HQG7BF4&keywords=Death&qid=1662864673&sprefix=death%2Caps%2C209&sr=8-3',
      rating: 4.5,
      author: 'Sadhguru',
    },
    {
      name: 'Adiyogi: The source of Yoga',
      link: 'https://www.amazon.in/Adiyogi-Source-Yoga-Sadhguru/dp/9352643925/ref=sr_1_19?crid=1MTXR0PUKARY6&keywords=Sadguru+books&qid=1662864725&sprefix=sadguru+book%2Caps%2C202&sr=8-19',
      rating: 4.5,
      author: 'Sadhguru',
    },
    {
      name: 'Youth and Truth: Unplug with Sadhguru',
      link: 'https://www.amazon.in/Youth-Truth-Unplug-Sadhguru/dp/9354895409/ref=sr_1_13?crid=1MTXR0PUKARY6&keywords=Sadguru+books&qid=1662864725&sprefix=sadguru+book%2Caps%2C202&sr=8-13',
      rating: 4.5,
      author: 'Sadhguru',
    },
  ],
  [GENRE_NAMES.SCI_FI]: [
    {
      name: 'Snow Crash',
      link: 'https://www.amazon.in/Snow-Crash-Neal-Stephenson/dp/0241953189/ref=sr_1_2_sspa?crid=1UR41FS1IZJEK&keywords=sci+fi+books&qid=1662864849&sprefix=sci+fi+book%2Caps%2C205&sr=8-2-spons&psc=1&smid=A3H3WE9M6NY1KV&spLa=ZW5jcnlwdGVkUXVhbGlmaWVyPUExOEo4TTRGVlk3NjdYJmVuY3J5cHRlZElkPUEwMTMwMzU3MUU2MEVISENaTFdRVCZlbmNyeXB0ZWRBZElkPUEwMDQ4Nzg0MUMzMUtTWEJZWElKVyZ3aWRnZXROYW1lPXNwX2F0ZiZhY3Rpb249Y2xpY2tSZWRpcmVjdCZkb05vdExvZ0NsaWNrPXRydWU=',
      rating: 4.5,
      author: 'Neal Stephenson',
    },
    {
      name: 'Dark Matter',
      link: 'https://www.amazon.in/Dark-Matter-Mind-Blowing-Twisted-Thriller/dp/144729758X/ref=sr_1_4?crid=1UR41FS1IZJEK&keywords=sci+fi+books&qid=1662864849&sprefix=sci+fi+book%2Caps%2C205&sr=8-4',
      rating: 4.5,
      author: 'Blake Crouch',
    },
    {
      name: 'A Wrinkle in Time',
      link: 'https://www.amazon.in/Wrinkle-Time-Puffin-Book/dp/0141354933/ref=sr_1_5?crid=1UR41FS1IZJEK&keywords=sci+fi+books&qid=1662864849&sprefix=sci+fi+book%2Caps%2C205&sr=8-5',
      rating: 4.5,
      author: "Madeleine L'Engle",
    },
    {
      name: 'Treasure Island',
      link: 'https://www.amazon.in/Treasure-Island-Robert-Louis-Stevenson/dp/8172344767/ref=sr_1_7?crid=1UR41FS1IZJEK&keywords=sci+fi+books&qid=1662864849&sprefix=sci+fi+book%2Caps%2C205&sr=8-7',
      rating: 4.5,
      author: 'Robert Louis Stevenson',
    },
    {
      name: 'The Lost World',
      link: 'https://www.amazon.in/Lost-World-Arthur-Conan-Doyle/dp/9354402194/ref=sr_1_17?crid=1UR41FS1IZJEK&keywords=sci+fi+books&qid=1662864849&sprefix=sci+fi+book%2Caps%2C205&sr=8-17',
      rating: 4.5,
      author: 'Arthur Conan Doyle',
    },
  ],
  [GENRE_NAMES.ROMANCE]: [
    {
      name: 'It Ends With US',
      link: 'https://www.amazon.in/Ends-Us-Novel-Colleen-Hoover/dp/1501110365/ref=sr_1_3?crid=3NBY51VVPRKE7&keywords=romance+books&qid=1662865107&sprefix=romance+books%2Caps%2C213&sr=8-3',
      rating: 4.5,
      author: 'Colleen Hover',
    },
    {
      name: 'November 9: A Novel',
      link: 'https://www.amazon.in/November-9-Novel-Colleen-Hoover/dp/1501110349/ref=sr_1_6?crid=3NBY51VVPRKE7&keywords=romance+books&qid=1662865107&sprefix=romance+books%2Caps%2C213&sr=8-6',
      rating: 4.5,
      author: 'Colleen Hover',
    },
    {
      name: 'When I Am With You',
      link: 'https://www.amazon.in/When-Am-You-Durjoy-Datta/dp/0143448358/ref=sr_1_8?crid=3NBY51VVPRKE7&keywords=romance+books&qid=1662865107&sprefix=romance+books%2Caps%2C213&sr=8-8',
      rating: 4.5,
      author: 'Durjoy Datta',
    },
    {
      name: 'You Only Live Once',
      link: 'https://www.amazon.in/You-Only-Live-Once-Friendship/dp/0143453580/ref=sr_1_9?crid=3NBY51VVPRKE7&keywords=romance+books&qid=1662865107&sprefix=romance+books%2Caps%2C213&sr=8-9',
      rating: 4.5,
      author: 'Stuti Changle',
    },
    {
      name: 'The Seven Husbands of Evelyn Hugo',
      link: 'https://www.amazon.in/Seven-Husbands-Evelyn-Hugo-Novel/dp/1501161938/ref=sr_1_18?crid=3NBY51VVPRKE7&keywords=romance+books&qid=1662865107&sprefix=romance+books%2Caps%2C213&sr=8-18',
      rating: 4.5,
      author: 'Taylor Jenkins Reid',
    },
  ],
  [GENRE_NAMES.TECH]: [
    {
      name: 'Foundations of Scalable Systems: Designing Distributed Architectures',
      link: 'https://www.amazon.in/Foundations-Scalable-Systems-Distributed-Architectures/dp/9355422792/ref=sr_1_2?keywords=o%27reilly+books&qid=1662865416&sprefix=Oreill%2Caps%2C210&sr=8-2',
      rating: 4.5,
      author: 'Ian Gorton',
    },
    {
      name: 'React Cookbook',
      link: 'https://www.amazon.in/React-Cookbook-Mastering-Framework-Grayscale/dp/9391043585/ref=sr_1_5?keywords=o%27reilly+books&qid=1662865416&sprefix=Oreill%2Caps%2C210&sr=8-5',
      rating: 4.5,
      author: 'David Griffiths',
    },
    {
      name: 'Introducing Data Science: Big Data, ML and More',
      link: 'https://www.amazon.in/Introducing-Data-Science-Machine-Learning/dp/9351199371/ref=sr_1_22_sspa?keywords=o%27reilly+books&qid=1662865416&sprefix=Oreill%2Caps%2C210&sr=8-22-spons&psc=1&spLa=ZW5jcnlwdGVkUXVhbGlmaWVyPUExUVJMMUpMRDhMM1dQJmVuY3J5cHRlZElkPUEwNjI2MjY3MUI4WUgzQUVDQzNVRCZlbmNyeXB0ZWRBZElkPUEwODc1OTI1M1ZPSzQ5TFBMV0c4TyZ3aWRnZXROYW1lPXNwX2J0ZiZhY3Rpb249Y2xpY2tSZWRpcmVjdCZkb05vdExvZ0NsaWNrPXRydWU=',
      rating: 4.5,
      author: 'Davy Cielen',
    },
    {
      name: 'Learning SQL',
      link: 'https://www.amazon.in/Learning-SQL-Generate-Manipulate-Greyscale/dp/935213978X/ref=sr_1_17?keywords=o%27reilly+books&qid=1662865416&sprefix=Oreill%2Caps%2C210&sr=8-17',
      rating: 4.5,
      author: 'Alan Beaulieu',
    },
    {
      name: 'Site Reliability Engineering: How Google Runs Production Systems',
      link: 'https://www.amazon.in/Site-Reliability-Engineering-Production-Systems/dp/9352133625/ref=sr_1_16?keywords=o%27reilly+books&qid=1662865416&sprefix=Oreill%2Caps%2C210&sr=8-16',
      rating: 4.5,
      author: 'Niall Murphy',
    },
  ],
  [GENRE_NAMES.PRODUCT_MANAGEMENT]: [
    {
      name: 'Managers Path The Guide For Tech Leaders Navigating Growth & Change',
      link: 'https://www.amazon.in/Managers-Path-Leaders-Navigating-Growth/dp/9352135474/ref=sr_1_9?crid=22X4VPRGZHEBL&keywords=tech+books&qid=1662865731&sprefix=techbooks%2Caps%2C200&sr=8-9',
      rating: 4.5,
      author: 'Camille Fournier',
    },
    {
      name: 'Tech Simplified for PMs & Entrepreneurs',
      link: 'https://www.amazon.in/Tech-Simplified-Entrepreneurs-Deepak-Singh/dp/9355664990/ref=sr_1_3?crid=22X4VPRGZHEBL&keywords=tech+books&qid=1662865731&sprefix=techbooks%2Caps%2C200&sr=8-3',
      rating: 4.5,
      author: 'Deepak Singh',
    },
    {
      name: 'Cracking The Pm Interview',
      link: 'https://www.amazon.in/Cracking-PM-Interview-Product-Technology/dp/0984782818/ref=sr_1_7?keywords=product+management+books&qid=1662865705&sprefix=product+manage%2Caps%2C220&sr=8-7',
      rating: 4.5,
      author: 'gayle Laakmann McDowell',
    },
  ],
};
