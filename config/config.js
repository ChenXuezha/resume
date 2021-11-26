var config = {
    /*在这里配置你的基本信息，所有数据以字符串形式给出*/
    name: "陈雪照",
    sex: "男",
    age: "20",
    phone: "15278571141",
    email: "cxz.2002@foxmail.com",
    address: "现居广西南宁",
    qq: "2428564209",
    log: "Happysnaker",
    excpect_work: "Java后端开发",


    /*在这里配置首页的座右铭集合*/
    motto: [
        "明天不一定会更好，但要坚信更好的明天一定会来。",
        "要做的事情总找得出时间和机会，不愿意做的事情也总能找得出借口。",
        "Gor For It!",
        "有智者立长志，无志者长立志。",
        "那些过去的眼泪终将风干在记忆里。",
        "真相，是为了剿灭幻想。",
        "我欲将心向明月，奈何明月照沟渠。",
        "春风得意马蹄疾，一日看尽长安花。",
        "天凉好个秋！",
        "老骥伏枥，志在千里。烈士暮年，壮心不已。",
        "老当益壮，宁移白首之心。穷且益坚，不坠青云之志。",
        "我们必须拿我们所有的， 去换我们所没有的",
        "蒹葭苍苍，白露为霜；所谓伊人，在水一方。",
        "数风流人物，还看今朝！"
    ],


    /*在这里配置首页的见面信息，你可以内嵌HTML标签以调整格式*/
    welcome: "青青子衿，悠悠我心<br>" +
             "但为君故，沉吟至今<br>" +
             "你好,我叫陈雪照,是一名广西农业职业技术大学计算机信息管理一名学生<br>" +
             "很高兴见到你!",


    /*在这里配置关于我的信息，你可以内嵌HTML标签以调整格式*/
    about: "<p>你好！我叫陈雪照，性别男，广西农业职业技术大学大三实习。我期望的工作岗位是ava后端开发。</p>" +
        "<p>我有着较多的Java编程经验，计算机基础知识掌握扎实，能够在工作中很好的完成自己的任务。此外，我有着充满激情的工作态度，团队协同作战能力强，同时我的执行力强、责任感高、集体荣誉感强、敢于担当.</p>" +
        "<p>十分期待与您的联系!</p>",



    /** 
    * 在这里配置你的技能点
    * ["技能点", 掌握程度, "技能条颜色"]
    */  
    skills: [
        ["Java","87","red"],
        ["Spring+Spring MVC+Mybaits", 85, "blue"],
		["Spring+Struts+Hibernate", 78, "yellow"],
		["Spring Boot", 86, "pink"],
        ["SQL", 82, "#1abc9c"],
        ["HTML5+CSS3+JavaScript", 84, "rgba(0,0,0)"],
		["Jquery+Ajax", 80, "#550000"],
       
    ],


    /*这里填写你的技能描述，你可以内嵌HTML标签以调整格式*/
    skills_description: "<ul>" +
        "     <li>熟练掌握Java语言以及面向对象设计思想，具有扎实的Java编程功底和编码规范。</li>" +
        "     <li>熟练掌握JavaScript、JQuery、css、ajax、Json、HTML5、Bootstrap等前端技术。</li>" +
        "     <li>熟悉JavaIO、多线程、集合等基础框架。</li>" +
        "     <li>熟悉Hibernate、Spring、Struts2以及 Spring MVC、SpringBoot 和 MyBatis、Thymeleaf等框架。</li>" +
        "     <li>熟练运用标准SQL语句及熟悉Mysql数据库的操作与设计。</li>" +
        "     <li>熟悉JSP、Servlet、JSTL、EL等，熟悉Tomcat服务器的使用。</li>" +
        "     <li>熟练使用Eclipse，IntelliJ IDEA等开发工具。</li>" +
        "     <li>熟悉版本控制器SVN/Git。</li>"  +
        " </ul>",


    /**
     * 这里填写你的个人作品展示
     * ["img"，"url", "ProjectName", "brief"]
     * img表示您的作品图片链接，url表示您的项目地址，ProjectName表示您的仓库或作品名称，brief是一句简短的介绍
     * 通过查看实际效果以调整字题长度
     */
    portfolio: [
        ["./images/DRP.jpg", "", "进销存管理系统", "商品的录入、进货、入库、库存、出库、销售等。"],
        ["./images/hk.jpg", "", "学院门户", "采用PHP编写的学院门户，可发布学院新闻、学院动态信息等。"] 
    ],


    /**
     * 这里填写您的工作经历
     * ["日期"， "工作"， "介绍"]
     * 你可以内嵌HTML标签以排版格式
     */
    work: [
        //如果您内有工作经历，您可以采取下列写法
        // ["————————", "", "<p>暂无工作经历，期待您的联系。</p>"]

        ["2021/7 — 2021/12", "<br>深蓝软件南宁分公司",
            "岗位：&emsp;JAVA开发工程师实习生<br>" +
            "<br><p>1.在项目负责人的指导下,配合完成了公司外包项目的设计,开发等工作;</p>" +
            "<p>2.维护和升级现有项目,编写后端代码及前端界面;</p>"+
            "<p>3.完成上级交代的其他工作&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;</p>"
        ],

       
    ],


    /**
     * 这里填写你的其他经历
     * ["日期"， "经历"， "介绍"]
     * 建议填写您的校级及以上得奖经历或或其他证书
     */
    others: [
        ["2020-12", "国家励志奖学金", ""],
        ["2020-10", "学院二等奖学金", ""],
        ["2020-06", "学院三等奖学金", ""],
        ["2020-06", "党团知识竞赛三等奖", ""],
		["2021-03", "第五届全国大学生环保知识竞赛“优秀奖”", ""]
    ],


    /**
     * 在这里填写您的社交网络平台
     * ["img", "url", "desc"]
     * img是社交平台的图标，在./svg目录下我们已经准备好了 微博、简书、掘金、小红书、知乎、csdn、facebook、github、力扣、CF和qq的图标
     * url是您链接
     * desc是一段描述，将鼠标移入将会显示该描述
     * 建议您放置数量 <= 5
     */
    icon: [
        ["./svg/LeetCode.svg", "https://leetcode-cn.com/u/happysnaker/", "我的力扣主页"],
        ["./svg/github.svg", "https://github.com/happysnaker", "我的GitHub主页"],
        ["./svg/博客.svg", "http://1.15.234.109:8000", "我的个人博客"],
        ["./svg/掘金.svg", "https://juejin.cn/user/3853167638625000", "我的掘金主页"],
        ["./svg/知乎.svg", "https://www.zhihu.com/people/tian-xia-you-dao-81", "我的知乎主页"]
    ],


    //这是一些图片链接，建议您仅更改第二个头像图片
    url: [
        //背景图、头像、作品展示背景、其他经历背景
        "./images/intro-bg.jpg",
        "./images/2.jpg",
        "./images/work-bk.png",
        "./images/4.jpg"
    ]

}