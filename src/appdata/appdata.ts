interface AppData {
    [key: string]: any;
}

export const appData: AppData = {
    headerMenu: [
        "企业战略",
        "市场营销",
        "销售汇款",
        "产品研发",
        "集成供应",
        "仓储物料",
        "生产制造",
        "售后服务",
        "人力资源",
        "财务管理",
        "IT 管理"
    ],
    classShowList: {
        "企业战略": ["战略解码","战略执行"],
        "市场营销": ["市场调研","营销策划"],
        "销售汇款": ["销售预测","销售跟踪","销售回款"],
        "产品研发": ["预研管理","产品设计","集成开发","产品测试","产品发布"],
        "集成供应": ["产销协同","生产/非生产采购"],
        "仓储物料":["成品仓管理","物料仓管理","物流管理","仓储规划"],
        "生产制造": ["工单管理","工艺工程","精益管理","设备管理","能耗管理"],
        // "售后服务": [""],
        "人力资源": ["组织绩效","薪酬体系","岗位职能"],
        "财务管理": ["财务预算","财务审记"],
        "IT 管理": ["SAP","PLM","CRM","SRM","MES","WMS","QMS"],
    },
    classCardList:[
        {
            className: "企业战略解码",
            classIcon: 'zhanlue.svg',
            classDesc: '帮助你的企业抢占未来',
            classLevel: '中级 - 天神',
            classPrice: "RMB 1元"
        },
        {
            className: "赵老师倾情演绎",
            classIcon: 'data.png',
            classDesc: '让你领略什么叫风情',
            classLevel: '中级 - 超神',
            classPrice: "RMB 0元"
        },
        {
            className: "物料仓管理",
            classIcon: 'zhanlue.svg',
            classDesc: '帮助你的企业抢占未来',
            classLevel: '中级 - 天神',
            classPrice: "RMB 1元"
        },
        {
            className: "企业战略解码",
            classIcon: 'zhanlue.svg',
            classDesc: '帮助你的企业抢占未来',
            classLevel: '中级 - 天神',
            classPrice: "RMB 1元"
        }
    ]
}