// Editorial source. Embedded into index.html for single-file deployment.
// All prose is original Chinese paraphrase; references are primary documents.
const HISTORY_SOURCES = {
 dartmouth:['1955 年达特茅斯研究计划原文 · Stanford 存档','http://www-formal.stanford.edu/jmc/history/dartmouth/dartmouth.html'],
 perceptron:['Cornell · Rosenblatt 与感知机回顾','https://news.cornell.edu/stories/2019/09/professors-perceptron-paved-way-ai-60-years-too-soon'],
 shakey:['SRI · Shakey the Robot 项目史','https://www.sri.com/hoi/shakey-the-robot/'],
 bosch:['Bosch 2013 年报 · 技术里程碑（PDF）','https://assets.bosch.com/media/en/global/bosch_group/our_figures/publication_archive/pdf_1/GB2013.pdf'],
 alvinn:['Pomerleau · ALVINN，NIPS 1988 会议论文','https://papers.nips.cc/paper/1988/hash/812b4ba287f5ee0bc9d43bbf5bbe87fb-Abstract.html'],
 cmu:['CMU · 1995 年横穿美国实验回顾','https://csd.cmu.edu/news/then-and-now-the-2850mile-nohands-road-trip'],
 nhaa:['CMU · No Hands Across America 原始项目主页','https://www.cs.cmu.edu/~tjochem/nhaa/nhaa_home_page.html'],
 deepblue:['IBM · Deep Blue 官方历史','https://www.ibm.com/history/deep-blue'],
 stanley:['Stanford · Stanley 系统论文（PDF）','https://robots.stanford.edu/papers/thrun.stanley05.pdf'],
 boss:['CMU · Boss 与 Urban Challenge 原始论文摘要','https://publications.ri.cmu.edu/autonomous-driving-in-urban-environments-boss-and-the-urban-challenge'],
 imagenet:['ImageNet · 项目背景与 2009 年论文索引','https://www.image-net.org/about.php'],
 alexnet:['Krizhevsky 等 · 深度卷积网络，NIPS 2012','https://papers.nips.cc/paper/2012/hash/c399862d3b9d6b76c8436e924a68c45b-Abstract.html'],
 kitti:['KITTI · 官方基准与采集平台','https://www.cvlibs.net/datasets/kitti/'],
 cityscapes:['Cityscapes · 官方数据与像素级标注说明','https://www.cityscapes-dataset.com/'],
 endtoend:['Bojarski 等 · End to End Learning，2016','https://arxiv.org/abs/1604.07316'],
 alphago:['Google DeepMind · AlphaGo 项目史','https://deepmind.google/research/alphago/'],
 zero:['Silver 等 · AlphaGo Zero，Nature 2017','https://www.nature.com/articles/nature24270'],
 transformer:['Vaswani 等 · Attention Is All You Need，2017','https://arxiv.org/abs/1706.03762'],
 bert:['Devlin 等 · BERT，2018 年预印本','https://arxiv.org/abs/1810.04805'],
 nuscenes:['Caesar 等 · nuScenes，2019 年预印本','https://arxiv.org/abs/1903.11027'],
 bevformer:['Li 等 · BEVFormer，ECCV 2022','https://arxiv.org/abs/2203.17270'],
 uniad:['Hu 等 · UniAD，CVPR 2023（2022 年预印本）','https://arxiv.org/abs/2212.10156'],
 emma:['Hwang 等 · EMMA，2024 年首发预印本','https://arxiv.org/abs/2410.23262v1']
};
const HISTORY_PHOTOS = {
 shakey:{url:'https://www.sri.com/wp-content/uploads/2024/04/Shakey-the-robot-800x450.jpg',caption:'档案照片：Shakey 机器人。图片由 SRI 项目史页面提供；网页上传年份并非拍摄年份。',source:'https://www.sri.com/hoi/shakey-the-robot/'},
 navlab:{url:'https://csd.cmu.edu/sites/default/files/nohands1_0.jpg',caption:'档案照片：CMU “No Hands Across America” 实验。来源：CMU；该页署名 Dean Pomerleau、Todd Jochem。',source:'https://csd.cmu.edu/news/then-and-now-the-2850mile-nohands-road-trip'},
 deepblue:{url:'https://assets.ibm.com/is/image/ibm/1997_deep-blue_rematch_322?wid=1000',caption:'档案照片：1997 年复赛中的 Garry Kasparov。来源：IBM Deep Blue 历史页面。',source:'https://www.ibm.com/history/deep-blue'}
};
// Each issue has a four-paragraph feature, a sidebar, an explainer and a lab question.
const NEWSPAPER_PAGES = [
 {era:'序章 / 人工智能的起点',year:'1955—1956',tag:'AI 的名字',title:'先提出问题：机器能学会什么？',deck:'智驾史有两条相遇的线索：汽车如何测量世界，以及计算机如何把测量变成判断。',body:[
 '1955 年 8 月 31 日，John McCarthy、Marvin Minsky、Nathaniel Rochester 和 Claude Shannon 提出一项暑期研究计划，建议在 1956 年于达特茅斯学院研究“人工智能”。计划把语言、抽象、神经网络与自我改进放进同一份议程。',
 '这份提案并没有造出会开车的机器。它提出的是一个研究假设：学习与智能的某些方面，可以被足够精确地描述，让机器进行模拟。把研究愿景和已实现的工程能力分开，是阅读后续历史的第一步。',
 '如果把问题移到道路上，汽车需要的不只是计算一个答案。它要从图像或测距信号中辨认环境，推测其他交通参与者的动作，再在有限时间内给出转向与制动指令。智能开始与物理世界的后果相连。',
 '此后几十年，研究者在规则、搜索与学习之间不断组合和取舍。今天常见的“感知—预测—规划—控制”并不是提案直接给出的架构，而是机器人与汽车工程长期发展出的组织方式。'
 ],sideTitle:'一份提案，不是一夜诞生的能力',side:'人工智能成为研究议题，并不意味着机器立即拥有通用理解力。早期议程里的语言、学习与抽象至今仍是重要问题；把它们装进汽车，还必须处理传感器误差、实时计算和执行反馈。',conceptTitle:'阅读这 20 版的三根线',concept:'测量：数据从哪里来？学习：系统怎样获得规律？行动：错误如何被发现与纠正？每个里程碑都可以沿这三根线来理解。',question:'进入实验室后，试着找出测量、计算与执行分别由哪些部件承担。',diagram:['SENSORS','REASONING','ACTION'],refs:['dartmouth']},
 {era:'第一辑 / 学习与机器人',year:'1958',tag:'感知机',title:'让机器从错误中调节自己',deck:'感知机把“给机器写规则”之外的另一条路摆到人们面前：让参数随样本改变。',body:[
 'Cornell 的历史回顾记录：1958 年 7 月，Frank Rosenblatt 的感知机工作通过 IBM 704 进行演示，系统学习区分标记位于左侧或右侧的卡片。这是一项受限的分类实验，不是对任意场景的理解。',
 '可以把感知机理解为一个带可调旋钮的判别器：输入乘以权重、合并，再依据阈值做分类；当预测与训练标签不一致，学习规则就改变权重。人不必逐个写出所有样本应如何被识别。',
 '这条路线对后来机器视觉意义很大：图像也能变成数值输入，让模型从示例中寻找有用的判别关系。不过，单层模型的表达能力有限，训练样本以外的变化也可能让判断失效。',
 '从感知机到汽车视觉中间隔着大量结构、数据和计算技术的进步。它留下的核心问题一直存在：训练时看过的样本，究竟能让系统应付多大范围的新情况？'
 ],sideTitle:'“会学习”与“会理解”之间',side:'学习是参数根据数据更新的过程；泛化是面对未见样本仍能作出有效判断。训练答对更多题，并不能单独证明系统理解了所有道路情况。路面反光、阴影和遮挡都会改变输入。',conceptTitle:'从像素到权重',concept:'把一张图拆成数值，模型输出一个判断，再用正确答案计算误差。这是教学化的学习流程示意，感知机并不等于后来的深度神经网络。',question:'摄像头采到清晰图像之后，为什么还需要计算平台？',diagram:['INPUT x','WEIGHT w','CLASS'],refs:['perceptron','alvinn']},
 {era:'第一辑 / 学习与机器人',year:'1966—1972',tag:'Shakey',title:'机器人开始把观察变成计划',deck:'从分类器走向行动者，关键不只在“认出来”，还在“下一步做什么”。',body:[
 'SRI 在 1966 至 1972 年间开展 Shakey 移动机器人研究。按其项目史，Shakey 能在简化环境中感知周围情况、寻找路线，并完成涉及移动简单物体的任务。',
 '与只输出一个类别的程序相比，移动机器人必须把观察和行动串起来：建立环境描述，选择可执行步骤，移动后再观察。计划不是终点；行动改变世界，也会暴露先前判断的偏差。',
 '室内实验环境对复杂度作了限制。道路上却有移动的车辆、行人、视野遮挡和更多规则，不能把 Shakey 的成功直接当成汽车已经具备同样能力。它展示的是系统组织方式的重要进展。',
 '后来自动驾驶经常采用分层结构，把感知、任务规划、运动规划和控制拆开，再通过接口协同。这样的分工有利于分析错误，也带来接口信息是否充分、误差是否积累的问题。'
 ],photo:'shakey',sideTitle:'先在可控世界里学习行动',side:'把真实问题简化，有助于看清算法是否工作。真正的挑战在于逐步放宽简化条件：光照不固定、物体会移动、地图可能过期。每放宽一项，系统都需要新的证据。',conceptTitle:'闭环比单次答案多了什么',concept:'观察 → 计划 → 执行 → 再观察。执行后的反馈能够修正原先的世界描述；车辆控制也依赖这种持续更新。',question:'系统透视中的数据流，为什么最终还要回到传感器？',diagram:['OBSERVE','PLAN','MOVE'],refs:['shakey','boss']},
 {era:'第二辑 / 汽车获得感官',year:'1978',tag:'轮速与 ABS',title:'汽车先学会感知自己的车轮',deck:'在汽车看懂红绿灯之前，车轮转速已成为可以参与控制的电信号。',body:[
 'Bosch 的技术里程碑把 1978 年列为电子防抱死制动系统 ABS 进入乘用车量产的重要年份。轮速传感器持续提供各车轮的转动信息，控制器据此判断是否出现趋于抱死的状态。',
 '在制动过程中，系统通过调节液压压力帮助车轮恢复可控滚动。它不需要先识别“前面是一辆车”，而是围绕车辆自身状态形成快速反馈。这属于本体状态感知。',
 'ABS 解决的是具体的制动控制问题，并不会替驾驶员决定去哪里，也不能保证任何路况下制动距离都更短。把一个安全功能称为自动驾驶，会掩盖它真正的作用与边界。',
 '现代智驾仍需要这类车内信息：轮速、方向盘转角、惯性测量等可以帮助估计车辆运动。外部传感器告诉系统世界的线索，车辆状态传感器则说明“我正在怎样运动”。'
 ],sideTitle:'两类感知，回答不同问题',side:'摄像头、雷达主要观察外界；轮速等信号描述车辆自身。定位与控制需要把二者放到一致的时间和坐标下。即便没有外部目标，车轮打滑也会让单一运动估计产生偏差。',conceptTitle:'测量—调节—反馈',concept:'轮速变化是输入，制动压力是可调动作，后续轮速是反馈。此处展示的是原理关系，具体产品还包含故障诊断与更复杂的控制逻辑。',question:'拆开底盘，找找执行控制与轮组为什么需要协同。',diagram:['WHEEL SPEED','CONTROLLER','BRAKE'],refs:['bosch']},
 {era:'第二辑 / 汽车获得感官',year:'1986—1989',tag:'Navlab 与 ALVINN',title:'道路图像开始通向方向盘',deck:'CMU 的早期研究，把视觉输入、神经网络和真实实验车放到同一条链路里。',body:[
 'CMU 的 Navlab 自动驾驶车辆系列始于 1986 年。研究者将计算设备与传感器装到试验车上，探索如何从道路观测得到行驶方向。这时的设备体积与今天的车规计算平台很不一样。',
 'Pomerleau 的 ALVINN 论文收录于 NIPS 1988 会议论文集。它描述了一个三层反向传播网络，从摄像头图像与激光测距输入得到道路跟随方向，并利用模拟道路图像训练。',
 '论文报告了在特定现场条件下跟随真实道路的实验。这说明学习方法能够连接观测与动作，但并不意味着网络已经处理完整交通规则、行人交互和所有天气条件。道路跟随只是驾驶的一部分。',
 'ALVINN 与后来端到端驾驶研究之间存在清晰的思想联系：减少人工指定的中间规则，让训练信号塑造内部表示。但“输入直接映射动作”的形式相近，不代表各时代的模型、数据和能力相同。'
 ],sideTitle:'为什么还要用模拟图像？',side:'真实道路数据昂贵且覆盖有限。合成训练样本可以改变道路形状或车辆偏移，帮助系统看到不同情形；与此同时，模拟与真实成像之间的差异也可能影响效果。',conceptTitle:'别混淆会议年份与出版时间',concept:'本版以 NIPS 1988 的会议记录标注，部分书目信息使用论文集出版年 1989。这里讨论的是同一项早期 ALVINN 工作。',question:'从摄像头到转向执行器，中间必须传递哪些信息？',diagram:['ROAD IMAGE','NEURAL NET','STEERING'],refs:['alvinn','cmu']},
 {era:'第二辑 / 汽车获得感官',year:'1993—2000',tag:'超声波与雷达',title:'从泊车回声，到跟车距离',deck:'传感器走进量产车，往往先从一个边界清晰、对驾驶员有帮助的功能开始。',body:[
 'Bosch 的历史里程碑列出：1993 年超声波泊车辅助进入量产应用，2000 年推出采用雷达的自适应巡航系统 ACC。两者都在测量距离，却服务于不同速度与距离范围的任务。',
 '超声波泊车辅助通过发射声波、接收反射，利用传播时间估算近距离障碍物。低速泊车时，系统可以用提示音把距离变化传达给驾驶员；仅靠这种测距，无法理解交通灯与车道语义。',
 '汽车雷达利用电磁波获得目标距离、相对速度等信息。ACC 将前方目标信息接入纵向控制，让车辆按设定条件调节跟车速度。跟车辅助并没有包办所有横向与纵向驾驶任务。',
 '传感器没有脱离任务的“绝对排名”。覆盖范围、角度分辨率、遮挡、天气、安装位置与成本都会影响选型。系统需要根据具体目标组合证据，并在能力不足时采取适当措施。'
 ],sideTitle:'同样测距，为何两种“波”？',side:'声波与电磁波的传播方式不同，硬件与信号处理也不同。近距离泊车关心周围障碍，较远距离跟车还关心目标运动。功能需求决定了对视场、刷新和误差的不同取舍。',conceptTitle:'把时间变成距离',concept:'发射信号走到目标，再反射回来；在理想条件下，距离约等于传播速度 × 往返时间 ÷ 2。真实传感器还需要处理噪声、多径和目标反射。',question:'在模型中比较毫米波雷达与摄像头各自擅长提供什么。',diagram:['EMIT','ECHO','DISTANCE'],refs:['bosch']},
 {era:'第三辑 / 从实验室驶向道路',year:'1995',tag:'No Hands Across America',title:'横穿美国，转向交给计算机',deck:'“98.2%”是一项令人印象深刻的转向实验成绩，也需要和人工操作的部分一起阅读。',body:[
 '1995 年，CMU 的 Dean Pomerleau 与 Todd Jochem 乘坐 Navlab 5，从匹兹堡前往圣迭戈。项目原始主页记录，约 2,849 英里的行程中有 2,797 英里使用了自动转向，比例为 98.2%。',
 '负责转向的程序名为 RALPH，即 Rapidly Adapting Lateral Position Handler。它分析视频图像，判断道路位置与适当的转向方向；研究人员继续负责油门和制动。',
 '因此，“No Hands”不能改写成全程完全无人驾驶。这个实验展示的是长距离真实道路上的横向控制能力，而不是一个已经独立处理所有驾驶任务的系统。项目名称和功能范围要分别理解。',
 '长途实验的意义还在于连续暴露问题：道路外观、交通与环境会不断变化。研究车必须在时间推进中工作，而不是只在挑选的一帧图像上给出漂亮答案。这也是后来闭环评估重要的原因。'
 ],photo:'navlab',sideTitle:'看百分比，也要问分母',side:'一个“自动化比例”可能按里程、时长或任务次数计算。这里是该次实验中自动转向的里程占比，不能据此推出所有道路上无需人类接管的概率。',conceptTitle:'三种动作，不应省略',concept:'转向控制横向运动，油门与制动影响纵向运动。解释车辆实验时，逐项说明谁负责这三项，比笼统称“自动驾驶”更有信息量。',question:'模型里的执行模块要怎样配合，才能同时完成转弯和减速？',diagram:['VISION','AUTO STEER','HUMAN PEDALS'],refs:['nhaa','cmu']},
 {era:'第三辑 / 从实验室驶向道路',year:'1997',tag:'Deep Blue',title:'棋盘上的胜利，带来搜索的启示',deck:'机器战胜国际象棋世界冠军，是计算史的重要事件；道路却不会像棋盘一样交出完整状态。',body:[
 '1997 年 5 月，IBM 的 Deep Blue 在六局对抗赛中战胜 Garry Kasparov。IBM 历史页面将其描述为在标准比赛条件下，计算机系统战胜在任国际象棋世界冠军的一次标志性突破。',
 '它的能力与高速计算、棋局搜索和局面评估紧密相关。面对当前棋盘，系统比较候选走法及其后续结果；这说明机器可以通过大规模计算，在定义清楚的任务中取得很强表现。',
 '驾驶同样需要在候选动作之间取舍，但输入条件更不完整：被遮挡的行人不可直接观测，其他司机的意图并不透明，道路行为也不能完全按确定规则展开。可搜索的模型只是现实的近似。',
 'Deep Blue 因而适合作为“决策需要比较后果”的科普入口。它不构成自动驾驶安全证据，也不是后来深度学习驾驶系统的直接同义词。搜索、学习与控制可以合作，但各自解决的问题不同。'
 ],photo:'deepblue',sideTitle:'完全可见的棋盘，不完全可见的道路',side:'棋盘位置对双方公开，合法走法由规则定义。道路观测会有误差，交通参与者的未来动作还要预测。把预测当作确定事实，会让规划忽视其他可能结果。',conceptTitle:'规划可以问什么？',concept:'“如果减速，会发生什么？”“如果现在变道，可能与谁接近？”这些反事实比较依赖世界模型、约束和评价标准，不能只靠更快枚举。',question:'系统透视中，决策模块为什么还需要传感器持续更新？',diagram:['STATE','SEARCH','CHOICE'],refs:['deepblue','boss']},
 {era:'第三辑 / 从实验室驶向道路',year:'2004',tag:'DARPA 首届挑战',title:'一次无人完赛，暴露系统的短板',deck:'荒漠挑战把“能运行一个算法”，变成“整辆车能否持续到达终点”。',body:[
 '2004 年 DARPA Grand Challenge 要求无人车在沙漠环境中自主完成长距离路线，首届没有队伍完赛。Stanford 的 Stanley 系统论文在回顾中，把这一结果与次年的进展放在一起讨论。',
 '比赛需要定位、地形识别、路径选择、车辆控制和整机可靠性同时工作。一个模块单独表现良好，不代表整车就能连续通过复杂路线；系统里的短板会在长时间运行中被放大。',
 '从教学角度看，失败让问题变得具体：无法识别可行驶区域，规划就可能选择危险方向；定位偏差可能让车辆误解路线；执行环节也必须把计划准确转化成物理运动。',
 '这类挑战的价值不只有冠军。公开任务为研究者提供了共同目标，促使团队围绕完整系统迭代。评价对象由某个算法的准确率，扩展为车辆在规定条件下能否完成任务。'
 ],sideTitle:'系统可靠性，是串联问题',side:'感知、定位、规划和控制互相依赖。任何一环的异常都可能影响后续动作。工程上需要监测、恢复策略与持续测试，不能简单用几个模块指标的平均值代表整车表现。',conceptTitle:'把失败变成下一轮问题',concept:'先明确失败发生的条件，再区分测量错误、模型错误、决策错误与执行错误。分清原因，才能判断下一轮改进是否对准了问题。',question:'如果摄像头看不清，其他传感器能补充哪些线索？',diagram:['PERCEIVE','PLAN','RELIABILITY'],refs:['stanley','boss']},
 {era:'第三辑 / 从实验室驶向道路',year:'2005',tag:'Stanley',title:'沙漠终点前，模块连成了系统',deck:'Stanley 的里程碑不只是某种传感器，而是让观测、定位、规划与控制协同跑完全程。',body:[
 '2005 年，Stanford 团队的 Stanley 赢得 DARPA Grand Challenge。其原始论文记录：车辆完成约 132 英里沙漠路线，用时约 6 小时 54 分钟，赛事最终共有五辆车完赛。',
 '系统组合了激光测距、摄像头、定位和惯性等信息。近距离地形观测与更远处视觉线索协作，帮助识别可行驶区域；车辆还必须根据路线要求和当前环境持续更新行驶策略。',
 '论文呈现了一个完整工程系统，而不是“装上激光雷达即可无人驾驶”的故事。数据处理、概率估计、道路判断、速度选择与车辆控制共同影响结果，测试也贯穿开发过程。',
 '沙漠比赛的完成证明了该任务条件下的能力。它没有同时证明系统能处理城市红绿灯、行人横穿和各种天气。后来的城市挑战，正是把任务中的交互与规则复杂度进一步提高。'
 ],sideTitle:'测得更远，不等于理解更多',side:'距离信息帮助建立几何结构，视觉能提供道路外观线索。两者需要与车辆姿态、时间和坐标对齐。即便观测充分，规划仍要处理车辆能不能安全通过的问题。',conceptTitle:'融合不是把数值简单相加',concept:'先把不同来源的观测变到可比较的空间与时间，再结合各自的不确定性形成估计。融合效果取决于标定、同步、模型与异常处理。',question:'打开感知系统，观察不同探测范围为何互相覆盖。',diagram:['LASER + CAMERA','TERRAIN','TRAJECTORY'],refs:['stanley']},
 {era:'第三辑 / 从实验室驶向道路',year:'2007',tag:'Urban Challenge',title:'从避开石头，到理解路口先后',deck:'进入城市场景，汽车不仅要绕过障碍，还要判断其他车辆接下来可能怎样行动。',body:[
 '2007 年 DARPA Urban Challenge 把无人车任务推进到城市式道路环境。CMU 的 Boss 获胜；团队随后发表的系统论文描述了车载 GPS、激光、雷达与摄像头如何支持感知和定位。',
 'Boss 的规划分为任务、行为与运动三层。任务层选择街道与目标顺序，行为层处理变道和路口通行次序，运动层在局部生成避障动作。这让复杂驾驶问题有了层次化分工。',
 '相比静止地形，其他车辆的行为会改变局面。系统不仅需要检测“那里有车”，还要追踪其运动，并根据道路关系决定等待、跟随或进入交叉口。时间维度变得更重要。',
 '原始论文强调了迭代开发和回归测试。这提醒我们：高级感并不来自堆叠传感器数量，可靠的行为来自观测、规则、预测、规划和执行之间经过验证的配合。'
 ],sideTitle:'为什么把规划分成三层？',side:'“去哪个街区”“此刻是否变道”“接下来走哪条曲线”涉及不同时间与空间尺度。分层有助于管理复杂性，但层之间传递的信息和失败恢复同样需要设计。',conceptTitle:'目标不等于轨迹',concept:'导航目标说明想去哪里；行为决策选择跟随、让行等策略；轨迹把策略变成随时间变化的位置和速度，再交给控制器执行。',question:'在系统模式中，从计算平台一路追踪到转向和制动。',diagram:['MISSION','BEHAVIOR','MOTION'],refs:['boss']},
 {era:'第四辑 / 数据与深度学习',year:'2009',tag:'ImageNet',title:'数据集成为共同的试验场',deck:'机器视觉的发展，不只取决于模型，也取决于大家能否在共同数据上训练与比较。',body:[
 'ImageNet 的代表性论文发表于 CVPR 2009。项目按 WordNet 的概念层级组织图像，为大规模物体识别提供带标签的训练与评估资源，让不同方法有机会在共同任务上比较。',
 '标签把图像和人类定义的类别连接起来。模型可以从大量示例中学习哪些特征与某类目标相关，而研究者则需要把训练数据与测试数据区分，避免只测出对样本的记忆。',
 '通用图像分类不是完整的汽车感知。汽车还要知道目标在哪里、距离多远、是否在移动，以及可行驶区域如何变化。不过，大规模视觉数据推动的表示学习，成为后续道路视觉的重要技术背景。',
 '数据也带来新的问题：采集环境是否足够多样，标签是否可靠，少见情况是否被覆盖。公开基准上的进步值得记录，但测试集之外的真实环境仍然需要独立验证。'
 ],sideTitle:'三种数据，不要混用',side:'训练集用于更新参数，验证集帮助选择模型与配置，测试集用于最终比较。反复根据测试答案调模型，会削弱测试结果对新样本能力的说明力。',conceptTitle:'图像的公开与版权不同',concept:'ImageNet 官方说明，它不拥有所索引图像的版权。本版使用自行绘制的原理图，不将数据集中的网络图像视为可任意转载素材。',question:'车身外的摄像头要面对哪些训练样本里可能缺少的情景？',diagram:['COLLECT','LABEL','EVALUATE'],refs:['imagenet','alexnet']},
 {era:'第四辑 / 数据与深度学习',year:'2012',tag:'AlexNet',title:'深层网络改变视觉特征的获得方式',deck:'数据、GPU 和卷积网络汇合，推动图像识别从手工设计特征转向更多地从数据学习。',body:[
 '2012 年，Alex Krizhevsky、Ilya Sutskever 与 Geoffrey Hinton 发表大规模图像分类的深度卷积网络论文。这项通常被称为 AlexNet 的工作，成为深度学习视觉史上的重要节点。',
 '卷积层在图像不同位置应用共享参数，逐层组合局部视觉线索。训练不只调整最后的分类器，也改变特征提取过程，让内部表示与最终任务一起优化。',
 '原始论文强调 GPU 实现、非饱和激活函数与抑制过拟合的方法。成功来自算法、训练技巧、计算和数据的共同条件，不能归结为“网络层数更多”这一个因素。',
 '汽车视觉后来广泛利用深度特征进行检测、分割与三维感知，但从图像类别到可靠驾驶之间仍有距离。识别一张图片里的车，与持续估计其位置并安全应对，是不同层面的任务。'
 ],sideTitle:'准确率上升之后，问题更多了',side:'交通场景关心漏检和误检发生在哪里、什么时候、对动作有何影响。同样的平均错误率，可能对应很不一样的道路后果；速度和置信度也需要被观察。',conceptTitle:'从局部到组合',concept:'教学示意：局部线索 → 更复杂的组合 → 任务输出。真实网络的表示并不保证逐层对应人类给出的固定语义名称。',question:'计算平台为什么需要同时处理多路图像，而不只识别一张照片？',diagram:['PIXELS','FEATURES','PREDICTION'],refs:['alexnet','imagenet']},
 {era:'第四辑 / 数据与深度学习',year:'2012—2016',tag:'KITTI 与 Cityscapes',title:'把道路问题，拆成可比较的任务',deck:'从“图里是什么”，推进到“它在哪里”“每个像素属于什么”。',body:[
 'KITTI 在 2012 年提出面向真实道路的视觉基准，覆盖立体视觉、光流、视觉里程计和三维目标检测等方向。其采集平台使用摄像头、激光扫描与定位系统，为不同任务提供参考数据。',
 '这些任务回答的问题各不相同：立体视觉估计深度，里程计估计车辆运动，目标检测定位交通参与者。把问题分开，便于判断一个方法究竟改善了哪种能力。',
 '2016 年的 Cityscapes 将城市街景语义理解推进到像素级标注。官方资料列出 50 个城市、5,000 张精细标注图像及 20,000 张粗标注图像，为场景分割提供重要资源。',
 '分割能帮助区分道路、人行道、车辆等区域，但每个像素被分类，仍不等于系统已经知道如何通行。数据覆盖、相机条件和评价指标限制了结论可推广的范围。'
 ],sideTitle:'检测框与语义分割',side:'检测框用一个区域指出目标；语义分割为像素分配类别；实例分割还区分同一类别的不同对象。这些表述能互补，适用目标也不同。',conceptTitle:'像素、距离与坐标',concept:'一张二维图片中的位置，不直接等于世界中的三维位置。深度估计、相机标定和坐标变换，是把视觉信息用于车辆动作的重要桥梁。',question:'旋转模型，看同一部件在不同视角中为何会遮挡和变形。',diagram:['IMAGE','DEPTH / LABELS','WORLD'],refs:['kitti','cityscapes']},
 {era:'第四辑 / 数据与深度学习',year:'2016',tag:'端到端转向',title:'一条更短的路：从图像到转向',deck:'神经网络能否从驾驶示例中，直接学到视觉输入与动作的关系？',body:[
 '2016 年，NVIDIA 研究团队发表《End to End Learning for Self-Driving Cars》。论文训练卷积网络，将单个前向摄像头的像素直接映射为转向指令，以人类驾驶时的转向信号进行监督。',
 '与先显式检测车道线、再规划和控制的方案相比，这种形式让内部处理随最终转向任务联合优化。模型仍然有内部表示，只是这些表示不一定被拆成工程师逐个命名的模块。',
 '这不是学习驾驶的首次尝试；早期 ALVINN 已探索过相关方向。2016 年工作的背景是更成熟的卷积网络、计算设备与训练方法，不能把相似思想误当成完全相同的技术实现。',
 '从转向预测扩展到完整驾驶，还要处理纵向控制、路权、交互、长时间误差和罕见情况。离线预测与驾驶员动作相近，也不等于闭环运行中会产生同样的环境与结果。'
 ],sideTitle:'为什么偏一点会越偏越多？',side:'模型预测的动作会改变下一刻看到的道路画面。如果训练数据很少包含偏离后的恢复状态，系统可能难以回到正常轨迹。这也是只看单帧误差不够的原因。',conceptTitle:'端到端描述优化关系',concept:'它常指输入到目标输出之间可以联合训练，并不自动意味着不需要中间结构、地图、约束或安全机制。需要根据具体论文定义来理解。',question:'把模型的感知与执行连接起来，思考反馈延迟会带来什么。',diagram:['CAMERA','LEARNED POLICY','STEER'],refs:['endtoend','alvinn']},
 {era:'第五辑 / 学会规划与关联',year:'2016—2017',tag:'AlphaGo',title:'从对局中学习，也从后果中学习',deck:'深度网络与搜索结合，让“预测下一步”之外的长期决策受到更多关注。',body:[
 '2016 年 3 月，AlphaGo 在首尔以 4 比 1 战胜李世石。DeepMind 的项目回顾将这一事件与深度神经网络、搜索及强化学习的结合联系起来，展示了复杂棋类任务中的决策能力。',
 '2017 年的 AlphaGo Zero 进一步研究从自我对弈中学习。系统通过比赛结果更新策略和价值估计，而不是只模仿一张固定的人类答案表；搜索仍在选择行动中发挥作用。',
 '这为理解学习与规划的组合提供了直观例子：策略提出值得考虑的动作，价值估计判断局面前景，搜索比较后续可能性。奖励的定义和试验环境，会深刻影响最终学到的行为。',
 '道路与围棋具有关键差异。真实驾驶不能通过无约束试错收集失败经验，环境状态也不完全可见。因此，对局胜率不能转化成驾驶安全结论；仿真中的进步也需要额外验证。'
 ],sideTitle:'奖励写错，方向就可能写错',side:'如果只奖励“更快到达”，系统可能忽视舒适性和其他要求。多目标任务需要恰当的约束与评估，不能把一个漂亮总分当作所有目标都达成的证据。',conceptTitle:'模仿与强化学习',concept:'模仿学习侧重从示范动作中学习；强化学习侧重动作后果与奖励。实际研究可以组合两者，也可能与搜索、规划及规则约束共同使用。',question:'规划一次绕行动作，应同时考虑哪些目标与限制？',diagram:['ACTION','OUTCOME','UPDATE'],refs:['alphago','zero']},
 {era:'第五辑 / 学会规划与关联',year:'2017—2018',tag:'Transformer 与 BERT',title:'不只看局部，也要看信息之间的关系',deck:'注意力机制提供了一种组织上下文的方式，后来被研究者扩展到视觉与驾驶任务。',body:[
 '2017 年《Attention Is All You Need》提出 Transformer，原始工作主要围绕序列转换和机器翻译。模型以注意力机制为核心，在输入之间建立与当前任务有关的关联。',
 '2018 年首发的 BERT 使用双向 Transformer 编码器进行语言表示预训练，再针对具体任务微调。它进一步展示了先从大规模数据学习通用表示、再适配任务的研究路径。',
 '这些最初的论文并不是自动驾驶系统。它们与智驾的联系来自后续研究：多摄像头之间、连续时刻之间，以及对象与道路之间，也存在需要建模的信息关系。',
 '注意力权重不应被直接当作人类意义上的理解或可靠解释。把结构迁移到道路任务，仍然需要处理空间几何、时间同步、数据分布与闭环动作；网络结构本身不提供这些保证。'
 ],sideTitle:'上下文，不只是一句话',side:'在驾驶感知中，同一目标可能跨越多个视角和多个时刻。关联这些线索，有助于减少只看单帧的局限；但错误关联也可能把不同对象混为一谈。',conceptTitle:'一次查询，多处取证',concept:'教学化理解：用一个查询，在多个信息位置寻找相关证据，再按权重组合。此处只是注意力的功能示意，并非完整公式或真实权重图。',question:'多路摄像头的数据如何在计算平台里相互补充？',diagram:['QUERY','CONTEXT','ATTENTION'],refs:['transformer','bert','bevformer']},
 {era:'第五辑 / 学会规划与关联',year:'2019—2020',tag:'nuScenes',title:'数据开始记录车辆的多种感官',deck:'2019 年发布预印本、2020 年见于 CVPR 的 nuScenes，把多传感器与时间序列放进公共研究资源。',body:[
 'nuScenes 原始论文介绍了一个多模态自动驾驶数据集。其采集车辆配有 6 个摄像头、5 个雷达和 1 个激光雷达，形成环绕观测，为多传感器感知与跟踪研究提供数据。',
 '论文描述的 1,000 个场景每段约 20 秒，包含带时间关系的观测和三维标注。与孤立图片相比，连续场景允许研究目标如何运动，也帮助比较使用不同传感器的方案。',
 '多模态数据的价值在互补：图像有丰富的外观线索，测距信息提供不同形式的几何和运动证据。研究者需要同步时间、标定传感器，并在统一坐标系下进行处理。',
 '传感器数量只是这套采集平台的配置，不是所有智驾车辆的标准答案。公开数据上的检测、跟踪指标，也不等同于整车在所有环境中的驾驶能力；覆盖范围始终有边界。'
 ],sideTitle:'融合的第一步，常常是对齐',side:'如果两个传感器记录的不是同一时刻，同一辆运动中的车会出现在不同位置。外参标定和时间同步不准确，可能让更多数据反而产生冲突。',conceptTitle:'从单帧看到时间',concept:'位置序列提供速度与轨迹线索，也带来身份关联问题：前一帧的目标，是否就是下一帧看到的那个？跟踪需要同时处理运动和不确定性。',question:'观察系统透视中的多种探测范围，想想遮挡时还有哪些信息可用。',diagram:['CAMERA / RADAR','LIDAR / TIME','FUSED SCENE'],refs:['nuscenes','kitti']},
 {era:'第六辑 / 空间与统一模型',year:'2022',tag:'BEVFormer',title:'让不同视角，汇入同一张俯视图',deck:'BEV 表示把空间关系放到车辆周围的坐标中；它是学习出的表示，不是一张永远正确的地图。',body:[
 '2022 年的 BEVFormer 研究如何从多摄像头图像学习统一的鸟瞰视角表示。它利用时空 Transformer，将不同相机方向和历史时刻的信息组合，用于三维检测、地图分割等感知任务。',
 '其空间交叉注意力让鸟瞰网格查询从相关相机图像中提取特征，时间自注意力再融合历史 BEV 信息。这样，多个透视画面中的证据可以汇入相对一致的空间表征。',
 '俯视表示有利于描述目标之间的位置关系，也便于与规划坐标衔接。不过，相机图像到三维空间的推断仍有不确定性：远处目标、遮挡和成像变化都可能影响最终结果。',
 'BEVFormer 论文的贡献在于特定感知结构和基准实验。不能把检测指标提升，写成系统已经具备完整驾驶决策能力。表示、预测、规划和控制之间还需要进一步整合与验证。'
 ],sideTitle:'俯视图，为什么方便？',side:'同一辆车在前视与侧视图里大小、形状不同；放到车辆周围的共同坐标中，更容易比较它与车道、障碍和自车的相对位置。表示方便并不意味着推断无误。',conceptTitle:'空间证据 + 历史证据',concept:'跨相机信息补充不同方向，跨时间信息补充目标运动与暂时遮挡。历史信息需要跟随自车运动对齐，否则旧证据可能被放在错误位置。',question:'切到俯视机位，比较空间坐标与透视画面描述位置的差别。',diagram:['MULTI-VIEW','SPACE + TIME','BEV GRID'],refs:['bevformer','nuscenes']},
 {era:'第六辑 / 空间与统一模型',year:'2023—2024',tag:'UniAD 与 EMMA',title:'从多个任务，走向共同的驾驶目标',deck:'研究开始更直接地连接感知、预测、规划与多模态模型；新的结构，也带来新的评估问题。',body:[
 'CVPR 2023 的 UniAD 工作（预印本首发于 2022 年末）提出以规划为导向组织自动驾驶任务。它让感知与预测等组件通过统一查询接口协作，使中间任务服务于最终规划目标。',
 '2024 年 10 月首发的 EMMA 则研究以 Gemini 等多模态大模型为基础，将摄像头输入映射到轨迹、目标和道路结构等输出，并用文本形式表达多种非传感器输入与任务输出。',
 '两项研究路线不同：前者强调任务协同与规划目标，后者探索多模态预训练知识和统一语言空间。它们都不能简单概括为“一个模型解决全部驾驶”，更不能用语言流畅程度判断动作是否可靠。',
 '这份简史把研究回顾收在 2024 年首发工作，未尝试列全此后的进展。回到汽车，实时性、少见场景、交互、故障处理与闭环评价仍需要证据。历史留下的共同问题是：系统看到了什么，为什么这样行动，如何知道结果可接受？'
 ],sideTitle:'新的模型，仍要接受旧问题的检验',side:'传感器采集会有误差，训练数据覆盖有限，动作会改变后续观测。架构可以变化，但对时延、不确定性、恢复和持续测试的要求不会因模型名字改变而消失。',conceptTitle:'读论文时，先看任务边界',concept:'区分开放环节预测与闭环驾驶，区分公开数据与真实道路，区分论文研究系统与已部署产品。比较结果时，还需要对齐输入、数据、指标和实验条件。',question:'现在进入 3D 实验室，沿着“感知—决策—执行”重新讲一遍整套系统。',diagram:['PERCEPTION','JOINT MODEL','PLANNING'],refs:['uniad','emma']}
];

function historyDiagram(page,index){
 const labels=page.diagram;
 const shapes=labels.map((label,i)=>`<g transform="translate(${38+i*218},84)"><rect width="188" height="102" rx="3" fill="${i===1?'#d5cedc':'#e3dccb'}" stroke="#4e4a5d"/><text x="12" y="25" font-family="monospace" font-size="12" fill="#756580">0${i+1}</text><text x="94" y="65" text-anchor="middle" font-family="sans-serif" font-size="${label.length>15?12:15}" fill="#302d42">${label}</text></g>`).join('');
 const detail=index===18?'<path d="M80 216h560M80 230h560M80 244h560M120 202v54M200 202v54M280 202v54M360 202v54M440 202v54M520 202v54M600 202v54" stroke="#aaa1af"/>':'<path d="M130 212v20H570v-20M350 232v-20" stroke="#8b8193" fill="none" stroke-dasharray="5 5"/>';
 const svg=`<svg xmlns="http://www.w3.org/2000/svg" width="720" height="288" viewBox="0 0 720 288"><rect width="720" height="288" fill="#e9e1d0"/><path d="M24 48H696M24 263H696" stroke="#b6a9b6"/><text x="28" y="31" font-family="monospace" font-size="12" letter-spacing="2" fill="#62546d">AUTO LAB / ${page.year} / STUDY ${String(index+1).padStart(2,'0')}</text>${shapes}<path d="M228 135h24m-6-6 6 6-6 6M446 135h24m-6-6 6 6-6 6" stroke="#554662" fill="none" stroke-width="2"/>${detail}<text x="28" y="281" font-family="monospace" font-size="9" fill="#786b7f">CONCEPT DIAGRAM / ORIGINAL ILLUSTRATION / NOT AN ARCHIVAL PHOTOGRAPH</text></svg>`;
 return 'data:image/svg+xml;charset=utf-8,'+encodeURIComponent(svg);
}
let newspaperPage=0;
const pageNumber=index=>String(index+1).padStart(2,'0');
function renderNewspaperPage(index){
 if(!Number.isInteger(index)||!NEWSPAPER_PAGES[index])return;
 const page=NEWSPAPER_PAGES[index],photo=HISTORY_PHOTOS[page.photo],diagram=historyDiagram(page,index);
 newspaperPage=index;
 $('paper-page-label').textContent=`PAGE ${pageNumber(index)} / ${NEWSPAPER_PAGES.length} · ${page.tag}`;
 $('paper-meta').textContent=`第 ${pageNumber(index)} 版 · ${page.era}｜本版年代：${page.year}`;
 $('paper-lead-date').textContent=`${page.year} / ${page.era}`;
 $('paper-lead-title').textContent=page.title;
 $('paper-lead-deck').textContent=page.deck;
 $('paper-lead-body').replaceChildren(...page.body.map(text=>{const p=document.createElement('p');p.textContent=text;return p}));
 const image=$('paper-lead-image');
 image.onerror=()=>{image.onerror=null;image.src=diagram;$('paper-lead-caption').textContent='远程档案照片暂不可用，已显示本版原理示意图（自行绘制，非历史照片）。原图出处仍可在本版资料中查看。'};
 image.src=photo?.url||diagram;
 image.alt=photo?photo.caption:`${page.tag}原理示意：${page.diagram.join(' → ')}，非历史照片`;
 $('paper-lead-caption').textContent=photo?.caption||`原理示意图（本项目后绘，非历史照片）：${page.diagram.join(' → ')}。用于解释本版关系，不代表完整系统结构。`;
 $('paper-side-date').textContent='EDITOR’S NOTE / 读史旁注';
 $('paper-side-title').textContent=page.sideTitle;
 $('paper-side-body').textContent=page.side;
 $('paper-concept-title').textContent=page.conceptTitle;
 $('paper-concept-body').textContent=page.concept;
 $('paper-question').textContent=page.question;
 $('paper-credit').replaceChildren();
 const heading=document.createElement('strong');heading.textContent='本版资料 / 原始文献与机构档案';$('paper-credit').append(heading);
 const sources=page.refs.map(key=>HISTORY_SOURCES[key]);
 if(photo)sources.push(['本版档案照片出处（图片版权归原权利人）',photo.source]);
 sources.forEach(([label,url])=>{const a=document.createElement('a');a.href=url;a.textContent=label+' ↗';a.target='_blank';a.rel='noopener noreferrer';$('paper-credit').append(a)});
 $('paper-prev').disabled=index===0;
 $('paper-next').disabled=index===NEWSPAPER_PAGES.length-1;
 $('paper-select').value=String(index);
 $('paper-contents').querySelectorAll('[data-page]').forEach(button=>button.setAttribute('aria-current',String(Number(button.dataset.page)===index)));
 $('paper-progress').value=index+1;
 $('paper-progress').max=NEWSPAPER_PAGES.length;
 try{sessionStorage.setItem('autolab-history-page',String(index))}catch{}
}
NEWSPAPER_PAGES.forEach((page,index)=>{
 const option=document.createElement('option');option.value=String(index);option.textContent=`${pageNumber(index)} · ${page.year} · ${page.tag}`;$('paper-select').append(option);
 const button=document.createElement('button');button.type='button';button.dataset.page=String(index);button.textContent=`${pageNumber(index)} / ${page.year}  ${page.tag}`;
 button.addEventListener('click',()=>{renderNewspaperPage(index);$('paper-directory').open=false;$('paper-lead-title').focus({preventScroll:true})});$('paper-contents').append(button);
});
$('paper-prev').addEventListener('click',()=>renderNewspaperPage(newspaperPage-1));
$('paper-next').addEventListener('click',()=>renderNewspaperPage(newspaperPage+1));
$('paper-select').addEventListener('change',event=>renderNewspaperPage(Number(event.target.value)));
let savedPage=0;try{savedPage=Number(sessionStorage.getItem('autolab-history-page')||0)}catch{}
renderNewspaperPage(Number.isInteger(savedPage)&&savedPage>=0&&savedPage<NEWSPAPER_PAGES.length?savedPage:0);
