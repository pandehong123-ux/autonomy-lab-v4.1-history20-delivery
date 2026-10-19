# v4 实际验收记录

日期：2026-10-19，Asia/Shanghai。页面：http://127.0.0.1:4188/?debug=1#lab 。

## 本轮观察与检查

- 实际浏览器检查了组装、展开、复原、系统透视和座椅聚焦。
- 拆解后四座、车身、玻璃、底盘、轮组和传感器分别可见；四张座椅有独立坐垫、靠背及头枕。
- 读取页面诊断数据，复原后 10 个部件组与四个轮组回到原始坐标，容差 1e-8。
- 实际切换感知、规划、执行过滤和全部系统；卡片与选中部件同步。
- 实际检查前方三分之四、侧面、后部、线框和法线视图；截图见 preview-v4-*。
- HTML 中 module 脚本通过 node --input-type=module --check；preview.cjs 通过 node --check。
- 最终 4188 页面日志没有捕获 warning/error。用户原标签保留有较早 4187 构建时的错误历史，未将这些历史日志当作新版运行错误。
- 手机视口覆盖工具未实际改变此预览标签的 innerWidth（仍为 1280）；本轮不把它计为成功的手机复验。既有响应式规则保留，真实手机触控未测。
- v4 建模回归未重测所有快捷键、右键平移、故障恢复与减少动态效果；历史报纸的 20 版分页回归见下方 v4.1 记录。

## v4.1 历史增刊验收（2026-10-19）

- `index.html` 内共有 20 个 `NEWSPAPER_PAGES`，每版 4 段主文；脚本检查结果为 20/20 版均有有效来源键。
- 浏览器回归（Chrome headless，1280×900，`http://127.0.0.1:4188/#history`）：下拉选项数 20；首版显示 `PAGE 01 / 20 · AI 的名字`；切换第 20 版显示 `PAGE 20 / 20 · UniAD 与 EMMA`，标题为“从多个任务，走向共同的驾驶目标”，该版有 2 条来源链接；无 page error / console error。
- 已保存真实页面截图：[preview-history20-page01.png](C:/Users/shangguan/Documents/Codex/2026-10-19/autonomy-lab/preview-history20-page01.png) 与 [preview-history20-page20.png](C:/Users/shangguan/Documents/Codex/2026-10-19/autonomy-lab/preview-history20-page20.png)。截图确认报纸版式、目录入口、进度条、技术旁注和原理示意图可见。
- 图片策略：Shakey、Navlab、Deep Blue 版使用机构页面明确指向的档案图；其他版使用页面自行绘制 SVG 原理图。远程图片失败时，`onerror` 回退到同版原理图并修改图注，不留下空白破图。
- 来源核阅：实际读取了 Stanford Dartmouth 提案、SRI Shakey、CMU No Hands Across America、CMU Boss、Cornell 感知机、NIPS ALVINN/AlexNet、IBM Deep Blue、KITTI、Cityscapes、NVIDIA 端到端论文、DeepMind AlphaGo、Transformer、BERT、nuScenes、BEVFormer、UniAD 和 EMMA 等页面或论文摘要；Bosch 2013 年报 PDF 中的 1978 ABS、1993 超声波泊车、2000 雷达 ACC 里程碑已通过 PDF 文本抽取核对。
- 仍保留外部资料依赖：历史图片与来源链接需要联网；静态文件本身不下载或再分发这些档案图片。

## 数值证据

自定义闭合部件共 30 个，开放/非双用边、退化三角形、非有限坐标均为 0。主车体 8,398 顶点 / 16,792 三角面。玻璃面板厚度 0.012m。轮拱与轮胎半径差 0.060m；座椅导轨与地板基准间隙 0.0035m。前、后头枕顶分别为 1.47m、1.41m。

离线生成实际页面几何，先审计 283 个命名网格 / 141,116 三角面，再按材质合并后复查。两阶段均无无效坐标/法线缺陷、无达到检查阈值的同向共面重叠，三角面采集未截断。已修正轮胎法线、重叠轮辐、封闭轮圈端盖与前部饰件共面问题。

GEOMETRY-AUDIT-v4.json 仍保留装配交叠报告（各阶段最多列出前 40 对），包括玻璃与包边、轮胎胎圈与轮圈、侧梁与车身、悬架与执行连接件。部分是有意装配接合，尚未完成逐项 CAD 布尔处理及完整运动包络检查，因此整体碰撞门未宣称通过。

实际组装态：57 draw calls / 141,518 triangles / 57 geometry / 2 textures，DPR 1.5。完整系统态：119 draw calls / 152,286 triangles / 102 geometry / 2 textures。没有测量 GPU 时间，不做跨设备帧率保证。

## 交付边界

这是程序化教学模型，曲面、座舱和硬件布置经过简化。外观参考不等于实车复刻，传感器不代表 Model Y 原厂配置。未进行汽车结构验证或真实自动驾驶仿真。本轮没有上传 GitHub 或同步数据库。
