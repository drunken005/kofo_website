export default {
  topVideo: {
    mp4: '',
    ogg: ''
  },
  bannerInfo: {
    url: '',
    desc1: 'KOFO 跨付 —— 新一代跨链清结算网络',
    desc2: 'New Generation Cross-chain Settlement Network (NGCSN)',
    itemCode: '项目介绍',
    itemUrl: 'https://www.kofo.org/doc/kofo_Introduction_cn.pdf',
    codeName: '开源代码',
    codeUrl: 'https://github.com/kofoproject'
  },
  menus: [
    {
      name: '文档',
      children: [
        {
          name: '项目介绍',
          url: 'https://www.kofo.org/doc/kofo_Introduction_cn.pdf'
        },
        {
          name: '白皮书',
          url: 'https://www.kofo.org/doc/kofo_Introduction_cn.pdf'
        },
        {
          name: '经济模型',
          url: 'https://www.kofo.org/doc/kofo_Introduction_cn.pdf'
        }
      ]
    },
    {
      name: '测试网',
      children: [
        {
          name: '观看视频',
          url: ''
        },
        {
          name: '预览',
          url: ''
        }
      ]
    },
    {
      name: '团队',
      url: '#team',
      children: []
    },
    {
      name: '新闻',
      url: '#new',
      children: []
    },
    {
      name: 'DApps',
      children: [],
      url: '/logo'
    },
    {
      name: '语言',
      children: [
        {
          name: '中文',
          url: '/zh'
        },
        {
          name: 'English',
          url: '/en'
        },
      ]
    }
  ],
  itemList: [
    {
      text: '市场现存问题',
      children: [
        {
          title: 'UTXO与应用场景的问题',
          img: '/static/img/items/neutrality.png',
          des: '比特币凭借其UTXO基本架构实现了交易标的的确定性，但因其脚本空间的限制，BTC、LTC等产品无法扩展更多应用场景。'
        },
        {
          title: '公链效能与跨链互换问题',
          img: '/static/img/items/inefficinecy.png',
          des: '以太坊技术效能的不足限制了区块链技术研发和应用落地，众多公链项目虽有望突破这一瓶颈，但各个区块链生态之间互联互通的需求也愈发强烈。'
        },
        {
          title: '交易所安全与流动性问题',
          img: '/static/img/items/fragmentation.png',
          des: '目前，中心化交易所承担这跨链互换的主要功能，但安全和操作风险高；去中心化交易仅限于ERC20 Token，流动性不足且交易效率低。'
        }
      ]
    },
    {
      text: 'KOFO新一代跨链支付网络',
      children: [
        {
          title: '去中心化跨链清结算网络',
          img: '/static/img/items/openness.png',
          des: '基于Hash Lock去中心化的跨链清结算网络，在世界范围内最早实现原子互换功能的解决方案。与现有方案不同的是KOFO无需引入第三方，用户在完成资产互换之前，一直由自己持有，且KOFO无需用户的任何隐私信息。'
        },
        {
          title: '定义跨链的3层技术标准',
          img: '/static/img/items/uberized.png',
          des: '定义了跨链的3层标准：区块链适配层标准、跨链协议报文标准、跨链对接处理标准。通过第一层标准，在支持脚本、智能合约的平台上，KOFO构建了满足跨链标准的链上交易；通过第二、三层标准，接入新链时只需对KOFO协议报文解析，调用区块链适配层完成链上交易的构建。'
        },
        {
          title: '数字资产交换网络的基础设施',
          img: '/static/img/items/co-build.png',
          des: '支持任意两个币种之间的互换，即支持n个币种时，共有个交易对；同时支持多对多的资产互换，让资产之间的流动形成一张网，通过KOFO数字资产的流动无需受制于中心化交易所的上币费用和交易对配置；未来KOFO还会引入资产转让关系定义，可支持资产互转时触发其他关联资产的流转。'
        }
      ]
    },
    {
      text: 'KOFO的优势',
      children: [
        {
          title: '安全',
          img: '/static/img/items/security.png',
          des: '原子级交易杜绝人为风险；赎回交易的设计为交易双方资产安全提供基本保障；'
        },
        {
          title: '透明',
          img: '/static/img/items/transparency.png',
          des: '专业的系统和业务监控及消息订阅服务模块；状态服务分布式化，支持自动化failover和水平扩容；'
        },
        {
          title: '兼容',
          img: '/static/img/items/compatibility.png',
          des: 'Client服务将提供API/SDK的调用方式，方便对其它软件（如钱包）的集成；'
        },
        {
          title: '开放',
          img: '/static/img/items/open.png',
          des: '代码开源，开放公开测试网络；社区化推进整体项目发展；'
        }
      ]
    },
    {
      text: 'KOFO的功能模块和交易类型',
      children: [
        {
          title: 'KOFO三层架构',
          children: [
            {
              title: '应用接入层',
              des: '提供 SDK 和开放平台供应用接入 KOFO 网络，应用在处理业务逻辑之后将业务 结算订单提交给 KOFO 状态服务层，由 KOFO 完成后续的结算业务流程。'
            },
            {
              title: '状态服务层',
              des: '由DAPP实现，将结算过程的数据进行透明化的存储和展现，状态服务会根据 KOFO 协议推进客户端的状态，完成跨链清结算。'
            },
            {
              title: '区块链接入层',
              des: '接不同区块链的适配器，对不同区块链系统完成 KOFO 协议 的适配，也是 KOFO 最终能够完成链上交易的关键。'
            }
          ]
        },
        {
          title: '交易类型',
          children: [
            {
              title: '赎回交易',
              des: '当交易无法完成时，用户进行资产赎回的交易。'
            },
            {
              title: '锁定交易',
              des: '涵盖hash lock脚本/智能合约的交易。'
            },
            {
              title: '提现交易',
              des: '将交换后的token提取到自身钱包的交易。'
            }
          ]
        }
      ]
    },
    {
      text: '应用场景',
      children: [
        {
          title: '去中心化交易所',
          img: '/static/img/items/exchange.png',
          des: '去中心化交易所中的交易所只需要完成交易的撮合，而Kofo帮助其完成清结算\
                对接各个交易所，为其提供去中心跨链交易服务；\
                任何交易所，只要通过审核并上交一定保证金，即可获得Kofo提供的钱包服务。'

        },
        {
          title: '去中心化钱包',
          img: '/static/img/items/wallet.png',
          des: '去中心化钱包将会对接更多类型的token，并且支持更多token的使用场景；\
                通过钱包的社交系统，易进行协商并达成C2C的交易；\
                •	通过KOFO的client API、或通过将KOFO client SDK集成至钱包内部，更方便完成C2C跨链转账及兑换服务。'
        },
        {
          title: '数字货币OTC交易',
          img: '/static/img/items/otc.png',
          des: 'OTC本质上是询价式的撮合交易方式，一般是非标的订单，因此，通过手动撮合或询价式撮合的方式，利用KOFO进行订单撮合后的结算，则可以避免信任风险，提升OTC交易的效率；\
                实用KOFO系统后结算过程将由软件来负责，去掉中间人环节有助于整个OTC交易的治理改善。'
        },
        {
          title: '跨境清结算',
          img: '/static/img/items/settlement.png',
          des: '汇率、头寸、kyc/aml等可以根据每个主权货币的客户端，自行按照条件写入client，构建交易后，交易条件被放入KOFO，根据各主权国家政策、法规来完成交易。\
          交换条件不再以swift网络集中化处理协议决定，而由各个主权国家自行通过智能合约构建条件交易实现双方货币的兑换。\
          用自动化的原子交换取代人工审核及其它操作，提升准确性。'
        }
      ]
    }
  ],   
    teamList: {
    title: '核心团队',
    important: {
      title: 'KOFO 顾问',
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
        jobTitle: '创始人| 战略与创新',
        otherTitle: '',
        oldJob: '曾任职Motorola、华为、中兴、阿里巴巴等国内外大型技术公司',
        functions: '从事技术研发与管理十余年，，拥有数年区块链底层技术和金融系统研发经验。',
        inCode: '',
        githubCode: ''
      },
      {
        headIcon: '/static/img/teams/head.jpg',
        name: 'Michael Yang',
        jobTitle: '联合创始人| 战略与创新',
        oldJob: '曾任阿里云资深系统工程师、IAAS系统负责人，获得发明专利两项',
        functions: '公司架构团队技术经理，主导公司技术架构领域、中间件等相关工作，同时在区块链公链、联盟链、跨链领域有相应的落地和架构设计经验。',
        inCode: ''
      },
      {
        headIcon: '/static/img/teams/head.jpg',
        name: 'Abel Fan',
        jobTitle: '联合创始人| 核心研究和开发',
        oldJob: '前百度高级研发工程师',
        functions: '曾主导设计开发百度糯米电影订票服务系统，团购api服务等大型服务系统。',
        inCode: ''
      },
      {
        headIcon: '/static/img/teams/head.jpg',
        name: 'Wayne Dong',
        jobTitle: '核心开发',
        oldJob: '前文思海辉系统架构师',
        functions: '拥有大型复杂分布式平台设计与开发相关经验,熟练分布式相关框架及相关中间件。',
        inCode: ''
      },
      {
        headIcon: '/static/img/teams/head.jpg',
        name: 'Vincent Chan',
        jobTitle: '核心开发',
        oldJob: '曾任职企鹅医生',
        functions: '熟悉分布式一致性及共识算法，曾主导设计和实现可拔插共识架构;熟悉编程语言设计，虚拟机相关理论，曾完成开发特定场景的DSL。',
        inCode: ''
      },
      {
        headIcon: '/static/img/teams/head.jpg',
        name: 'Roger Zou',
        jobTitle: '核心开发',
        oldJob: '曾任职阿里巴巴系统专家，技术经理',
        functions: '熟悉超大规模运维/运营体系建设，各项基础设施及基础架构。对生产稳定，性能优化领域有丰富经验。',
        inCode: ''
      }
    ]
  },

  news: {
    title: 'KOFO新闻',
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
    title: '战略伙伴和联盟',
    list: [
      {
        title: 'FBG Capital',
        img: '/static/img/partner/fbg.png'
      }
    ]
  },
  lineList: {
    title: '路线图',
    list: [
      {
        name: 'TESTNET',
        list: [
          {
            date: 'June 16, 2018',
            title: 'v0.1 “Firefox” release',
            desc: 'First live testnet over global nodes with all core subsystems working together'
          },
          {
            date: 'August, 2018',
            title: 'v0.3 “Lemur” release',
            desc: 'Optimizing scalability and efficiency, SDK alpha release'
          },
          {
            date: 'October, 2018',
            title: 'v0.5: “Koala” release',
            desc: 'Enhancing attack resistance, larger scale testnet, SDK Beta release'
          },
          {
            date: 'Jan, 2019',
            title: 'v0.7: “Meerkat” release',
            desc: 'Full featured testnet with complete implementation and performance, SDK v1.0 release'
          }
        ]
      },
      {
        name: 'MAINNET',
        list: [
          {
            date: 'March, 2019',
            title: 'v0.9 “Beluga” release',
            desc: 'Further develop and improve KOFO core system based on status of the TestNet'
          },
          {
            date: 'June, 2019',
            title: 'v1.0 “Narwhal” release',
            desc: 'Launch KOFO MainNet & KOFO ecosystem'
          }
        ]
      }
    ]
  },
  footerList: {
    concatList: [
      {
        title: '社区',
        list: [
          {
            icon: 'fa-send',
            name: 'Telegram',
            link: 'https://t.me/kofoorg'
          },
          {
            icon: 'fa-twitter',
            name: '推特',
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
        title: '资源',
        list: [
          {
            icon: 'fa-github',
            name: 'GitHub',
            link: 'https://github.com/kofoproject'
          },
          {
            icon: 'fa-file',
            name: 'KOFO项目介绍',
            link: 'https://t.me/kofoorg'
          },
          {
            icon: 'fa-file',
            name: 'KOFO项目白皮书',
            link: 'https://t.me/kofoorg'
          }
        ]
      },
      {
        title: '关注',
        list: [
          {
            icon: 'fa-envelope',
            name: '加入我们',
            link: 'https://t.me/kofoorg'
          },
          {
            icon: 'fa-newspaper-o',
            name: '新闻',
            link: 'https://t.me/kofoorg'
          },
          {
            icon: 'fa-wechat',
            name: '微信',
            link: 'https://t.me/kofoorg'
          }
        ]
      }
    ],
    mailInfo: {
      title: '联系方式',
      address: 'contact@kofo.org',
      mailPlaceholder: '您的邮箱地址',
      dingyue: '订阅',
      dyMsg: '订阅新闻邮件组，持续关注KOFO'
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
        name: 'KOFO项目介绍',
        link: 'https://t.me/kofoorg'
      },
      {
        icon: 'fa-file-pdf-o',
        name: 'KOFO项目白皮书',
        link: 'https://t.me/kofoorg'
      }
    ]
  },
  fixedInfo: {
    btnName: 'Got It',
    msg: 'KOFO已上线Gate（<a href="www.gateio.io" target="_blank">www.gateio.io</a>）和BCEX（<a href="www.gateio.io" target="_blank">www.bcex.top</a>）并开通KOFO/USDT, KOFO/ETH交易对。'
  }
}
