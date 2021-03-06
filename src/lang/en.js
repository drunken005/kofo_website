export default {
  topVideo: {
    mp4: '',
    ogg: ''
  },
  bannerInfo: {
    url: '',
    desc1: 'KOFO, an Open Digital Asset Exchange Network',
    desc2: '',
    itemCode: 'Introduction',
    itemUrl: 'http://kofopub.oss-cn-hongkong.aliyuncs.com/KOFO_project_introduction_en.pdf',
    codeName: 'Source Code',
    codeUrl: 'https://github.com/kofoproject'
  },
  menus: [
    {
      name: 'Document',
      children: [
        {
          name: 'Project Introduction',
          url: 'http://kofopub.oss-cn-hongkong.aliyuncs.com/KOFO_project_introduction_en.pdf'
        },
        {
          name: 'Technical Whitepaper',
          url: 'http://kofopub.oss-cn-hongkong.aliyuncs.com/KOFO_technical_whitepaper_en.pdf'
        },
        {
          name: 'Non-technical Whitepaper',
          url: 'http://kofopub.oss-cn-hongkong.aliyuncs.com/KOFO_non_technical_whitepaper_en.pdf'
        }
      ]
    },
    {
      name: 'Test Network',
      children: [
        {
          name: 'Watch the Video',
          url: ''
        },
        {
          name:'Download APP',
          children: [],
          url: '#/download'
        }
      ]
    },
    {
      name: 'Team',
      url: '#team',
      children: []
    },
    {
      name: 'News',
      url: '#new',
      children: []
    },
    {
      name: 'DApps',
      children: [],
      url: '/logo'
    },
    {
      name: 'Language',
      children: [
        {
          name: 'Chinese',
          url: '/zh'
        },
        {
          name: '英文',
          url: '/en'
        },
      ]
    }
  ],
  itemList: [
    {
      text: 'Existing Problems in the Market',
      children: [
        {
          title: 'Centralized Exchanges',
          img: '/static/img/items/neutrality.png',
          des: [
            'High listing cost',
            'High operational risk',
            'Easily hacked'
          ]
        },
        {
          title: 'Decentralized Exchanges',
          img: '/static/img/items/inefficinecy.png',
          des: [
            'Low liquidity',
            'Almost 0 operational risk'
          ]
        },
        {
          title: 'OTC',
          img: '/static/img/items/fragmentation.png',
          des: [
            'High transaction fee',
            'High credit risk related to middleman',
            'Obviously lack of economies of scale'
          ]
        },
        {
          title: 'Disinteroperation',
          img: '/static/img/items/fragmentation.png',
          des: [
            'Difficulties of assets interoperability',
            'Lack of exchange liquidity and deep'
          ]
        }
      ]
    },
    {
      text: 'KOFO’s Approach',
      children: [
        {
          img: '/static/img/items/openness.png',
          des: 'KOFO mitigates the challenge with a fully decoupled three-layers exchange network and approach on layer 2 of blockchain.'
        }
      ]
    },
    {
      text: 'KOFO’s Advantages',
      children: [
        {
          title: 'Safety',
          img: '/static/img/items/security.png',
          des: [
            'Transaction in atomic level',
            'Negligible operational risk',
            'Withdrawal transactions provide basic protection for assets from both sides'
          ]

        },
        {
          title: 'Transparency',
          img: '/static/img/items/transparency.png',
          des: [
            'Highly reliable, decentralized message subscription service',
            'Decentralized status service supports automatic failover and horizontal scalability',
            'Privacy information protection'
          ]
        },
        {
          title: 'Compatibility',
          img: '/static/img/items/compatibility.png',
          des: [
            'Strong internet effect',
            'API and SDK are provided to facilitate Client service integration with wallets & IM et.',
            'Any 2 blockchains integrated can communicate with each other'
          ]
        },
        {
          title: 'Openness',
          img: '/static/img/items/open.png',
          des: ['Three layer can be connected independently and collectively',
            'Applicable to different types of assets and users',
            'Not limited by the efficiency of blockchain'
          ]
        }
      ]
    },
    {
      text: 'Application Scenario',
      img: '/static/img/items/compatibility.png',

    }
  ],
  teamList: {
    title: 'Core Team',
    important: {
      title: 'KOFO Consultant',
      name: '',
      img: '',
      honor1: '',
      honor2: '',
      otherHonor: {
        title: '',
        list: [
          ''
        ]
      }
    },
    list: [
      {
        headIcon: '/static/img/teams/head.jpg',
        name: 'James Lee',
        otherTitle: '',
        functions: 'Has been engaged in technology research, development and management for more than 10 years, and has worked for Motorola, Huawei, ZTE, Alibaba and other large domestic and foreign technology companies. Moreover, he has many years of R&D experience in blockchain’s bottom technology and financial system.',
        inCode: '',
        githubCode: ''
      },
      {
        headIcon: '/static/img/teams/head.jpg',
        name: 'Michael Yang',
        functions: "Former senior system engineer of Aliyun and head of IAAS system, obtained two invention patents. As the technical manager of architecture team, he leads the company's technical architecture field, middleware and other related work, and has corresponding landing and architecture design experience in public chain, league chain, and cross - chain fields.",
        inCode: ''
      },
      {
        headIcon: '/static/img/teams/head.jpg',
        name: 'Abel Fan',
        functions: 'Former senior R&D engineer at Baidu. He has led the design and development of Baidu Nuomi movie booking service system, group purchase API service and other large service systems.',
        inCode: ''
      },
      {
        headIcon: '/static/img/teams/head.jpg',
        name: 'Wayne Dong',
        functions: 'Former system architect of Pactera, has experience in designing and developing large complex distributed platforms, and he is proficient in distributed related frameworks and relevant middleware.',
        inCode: ''
      },
      {
        headIcon: '/static/img/teams/head.jpg',
        name: 'Vincent Chan',
        functions: 'Worked at Tencent Doctorwork, is familiar with distributed consistency and consensus algorithms and has led the design and implementation of pluggable consensus architecture. He is familiar with programming language design, virtual machine theory, and has developed DSL for specific scenarios.',
        inCode: ''
      },
      {
        headIcon: '/static/img/teams/head.jpg',
        name: 'Roger Zou',
        functions: 'Formerly an Alibaba system expert and technical manager, who is familiar with the construction of large operation and maintenance system, as well as various infrastructure and infrastructure. Has extensive experience in production stability and performance optimization.',
        inCode: ''
      }
    ]
  },

  news: {
    title: 'KOfO news',
    left: [
      {
        img: '',
        url: '',
        title: '',
        date: '',
        desc: ''
      },
    ],
    right: [
      {
        img: '',
        url: '',
        title: '',
        date: '',
        desc: ''
      },
    ]
  },

  videoList: [
    {
      img: '/static/img/videos/video1.png',
      mp4: 'https://www.kofo.org/video/kofo1.mp4',
      ogg: 'https://www.kofo.org/video/kofo1.ogg'
    },
    {
      img: '/static/img/videos/video2.png',
      mp4: 'https://www.kofo.org/video/kofo1.mp4',
      ogg: 'https://www.kofo.org/video/kofo1.ogg'
    },
    {
      img: '/static/img/videos/video3.png',
      mp4: 'https://www.kofo.org/video/kofo1.mp4',
      ogg: 'https://www.kofo.org/video/kofo1.ogg'
    },
    {
      img: '/static/img/videos/video4.png',
      mp4: 'https://www.kofo.org/video/kofo1.mp4',
      ogg: 'https://www.kofo.org/video/kofo1.ogg'
    }
  ],
  partners: {
    title: 'Strategic Partners and Alliances',
    list: [
      {
        title: 'FBG Capital',
        img: '/static/img/partner/fbg.png'
      }
    ]
  },
  lineList: {
    title: 'Roadmap',
    list: [
      {
        list: [
          {
            date: 'Apr 1, 2018',
            title: 'team formation',
          },
          {
            date: 'Jul 15, 2018',
            title: 'Test net online and support BTC and ETH atomic transaction',
          },
          {
            date: 'Oct 31, 2018',
            title: 'Support USDT/ERC20 tokens',
          },
          {
            date: 'Nov 15, 2018',
            title: 'Settlement engine online',
          },
          {
            date: 'Dec 1, 2018',
            title: 'Client online and support BTC and ETH atomic transaction',
          },
          {
            date: 'Feb 15, 2019',
            title: 'Support BCH、ZIL',
          },
          {
            date: '',
            title: 'Client online and support BTC and ETH atomic transaction',
          },
          {
            date: 'Dec 1, 2018',
            title: 'Client online and support BTC and ETH atomic transaction',
          },
          {
            date: 'Dec 1, 2018',
            title: 'Client online and support BTC and ETH atomic transaction',
          },
          {
            date: 'Dec 1, 2018',
            title: 'Client online and support BTC and ETH atomic transaction',
          },
          {
            date: 'Dec 1, 2018',
            title: 'Client online and support BTC and ETH atomic transaction',
          },
          {
          }
        ]
      }
    ]
  },
  footerList: {
    concatList: [
      {
        title: 'Community',
        list: [
          {
            icon: 'fa-send',
            name: 'Telegram',
            link: 'https://t.me/kofoorg'
          },
          {
            icon: 'fa-twitter',
            name: 'Twitter',
            link: 'https://t.me/kofoorg'
          },
          {
            icon: 'fa-reddit-alien',
            name: 'Reddit',
            link: 'https://t.me/kofoorg'
          }
        ]
      },
      {
        title: 'Resource',
        list: [
          {
            icon: 'fa-github',
            name: 'GitHub',
            link: 'https://github.com/kofoproject'
          },
          {
            icon: 'fa-file',
            name: 'KOFO Project Introduction',
            link: 'https://t.me/kofoorg'
          },
          {
            icon: 'fa-file',
            name: 'KOFO Project White Paper',
            link: 'https://t.me/kofoorg'
          }
        ]
      },
      {
        title: 'Follow',
        list: [
          {
            icon: 'fa-envelope',
            name: 'Join Us',
            link: 'https://t.me/kofoorg'
          },
          {
            icon: 'fa-newspaper-o',
            name: 'News',
            link: 'https://t.me/kofoorg'
          },
          {
            icon: 'fa-wechat',
            name: 'WeChat',
            link: 'https://t.me/kofoorg'
          }
        ]
      }
    ],
    mailInfo: {
      title: 'Contact Information',
      address: 'business@kofo.io',
      mailPlaceholder: 'Your email address',
      dingyue: 'subscription',
      dyMsg: 'Subscribe to the newsletter group and keep an eye on KOFO'
    },
    xmList: [
      {
        icon: 'fa-envelope',
        link: 'https://t.me/kofoorg'
      },
      {
        icon: 'fa-send',
        link: 'https://t.me/kofoorg'
      },
      {
        icon: 'fa-github',
        link: 'https://t.me/kofoorg'
      },
      {
        icon: 'fa-reddit-alien',
        link: 'https://t.me/kofoorg'
      },
      {
        icon: 'fa-file-pdf-o',
        name: 'KOFO Project Introduction',
        link: 'https://t.me/kofoorg'
      },
      {
        icon: 'fa-file-pdf-o',
        name: 'KOFO Project White Paper',
        link: 'https://t.me/kofoorg'
      }
    ]
  },
  fixedInfo: {
    btnName: 'Got It',
    msg: ''
  }
}
